import fs from 'node:fs';

function replaceOnce(text, search, replacement, label) {
  const index = text.indexOf(search);
  if (index < 0) throw new Error(`Missing expected block: ${label}`);
  return text.slice(0, index) + replacement + text.slice(index + search.length);
}

// Make strategy custom-element registration independent from strategy/UI module initialization.
{
  const path = 'src/index.ts';
  let text = fs.readFileSync(path, 'utf8');

  text = replaceOnce(
    text,
    "import { DwainsDashboardStrategy } from './strategies/dashboard-strategy';\nimport { DwainsViewStrategy } from './strategies/view-strategy';\n\n",
    '',
    'static strategy imports'
  );

  text = replaceOnce(
    text,
`const createDashboardStrategyElement = () => class extends HTMLElement {
  static async generate(config: any, hass: any) {
    await uiElementsReady;
    const strategy = new DwainsDashboardStrategy();
    return strategy.generate(config, hass);
  }

  static async getConfigElement() {
    return DwainsDashboardStrategy.getConfigElement();
  }
};

const createViewStrategyElement = () => class extends HTMLElement {
  static async generate(config: any, hass: any) {
    await uiElementsReady;
    const strategy = new DwainsViewStrategy();
    return strategy.generate(config, hass);
  }
};`,
`const createDashboardStrategyElement = () => class extends HTMLElement {
  static async generate(config: any, hass: any) {
    const [{ DwainsDashboardStrategy }] = await Promise.all([
      import('./strategies/dashboard-strategy'),
      uiElementsReady,
    ]);
    const strategy = new DwainsDashboardStrategy();
    return strategy.generate(config, hass);
  }

  static async getConfigElement() {
    const { DwainsDashboardStrategy } = await import('./strategies/dashboard-strategy');
    return DwainsDashboardStrategy.getConfigElement();
  }
};

const createViewStrategyElement = () => class extends HTMLElement {
  static async generate(config: any, hass: any) {
    const [{ DwainsViewStrategy }] = await Promise.all([
      import('./strategies/view-strategy'),
      uiElementsReady,
    ]);
    const strategy = new DwainsViewStrategy();
    return strategy.generate(config, hass);
  }
};`,
    'strategy element factories'
  );

  fs.writeFileSync(path, text);
}

// Do not overwrite Home Assistant's live frontend registries from the dashboard strategy.
{
  const path = 'src/strategies/dashboard-strategy.ts';
  let text = fs.readFileSync(path, 'utf8');

  const start = text.indexOf('    // Store floors in hass object for easy access\n');
  const end = text.indexOf('    // Convert to our config format\n', start);
  if (start < 0 || end < 0) throw new Error('Missing hass registry mutation block');
  text = text.slice(0, start) + text.slice(end);

  fs.writeFileSync(path, text);
}

// Same principle for view strategy: Home Assistant already owns its live floor registry.
{
  const path = 'src/strategies/view-strategy.ts';
  let text = fs.readFileSync(path, 'utf8');

  const block = `    // Set floors in hass if available\n    if (config.floors) {\n      (hass as any).floors = config.floors.reduce((acc, floor) => {\n        acc[floor.floor_id] = floor;\n        return acc;\n      }, {} as Record<string, any>);\n    }\n\n`;
  text = replaceOnce(text, block, '', 'view strategy floor mutation');
  fs.writeFileSync(path, text);
}

console.log('Applied strategy bootstrap and registry-preservation fixes.');
