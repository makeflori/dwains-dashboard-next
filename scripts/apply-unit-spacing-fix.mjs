import fs from 'node:fs';

const NARROW_NBSP = '\u202F';

function read(path) {
  return fs.readFileSync(path, 'utf8');
}

function write(path, content) {
  fs.writeFileSync(path, content);
}

function replaceOnce(content, search, replacement, label) {
  if (!content.includes(search)) {
    throw new Error(`Expected snippet not found: ${label}`);
  }
  return content.replace(search, replacement);
}

const helperPath = 'src/utils/unit-format.ts';
write(helperPath, `import type { HassEntity, HomeAssistant } from '../types/home-assistant';

export const NARROW_NBSP = '\\u202F';

export function formatValueWithUnit(
  value: string | number,
  unit: string | null | undefined
): string {
  const formattedValue = String(value);
  const formattedUnit = String(unit || '').trim();
  return formattedUnit ? \`${'${formattedValue}'}${NARROW_NBSP}${'${formattedUnit}'}\` : formattedValue;
}

export function normalizeUnitSpacing(
  formattedState: string,
  unit: string | null | undefined
): string {
  const formattedUnit = String(unit || '').trim();
  if (!formattedState || !formattedUnit) return formattedState;

  const escapedUnit = formattedUnit.replace(/[.*+?^\${}()|[\\]\\]/g, '\\$&');
  return formattedState.replace(
    new RegExp(\`\\\\s*\${escapedUnit}$\`),
    \`${NARROW_NBSP}\${formattedUnit}\`
  );
}

export function formatEntityStateWithUnit(
  hass: HomeAssistant,
  state: HassEntity
): string {
  try {
    return normalizeUnitSpacing(
      hass.formatEntityState(state),
      state.attributes?.unit_of_measurement
    );
  } catch {
    return String(state?.state || '');
  }
}
`);

// Room summaries and room badges.
{
  const path = 'src/utils/area.ts';
  let content = read(path);
  content = replaceOnce(
    content,
    "import type { AreaConfig, AreaData, AlertInfo, DomainCounts, EntityConfig } from '../types/strategy';",
    "import type { AreaConfig, AreaData, AlertInfo, DomainCounts, EntityConfig } from '../types/strategy';\nimport { formatEntityStateWithUnit, formatValueWithUnit } from './unit-format';",
    'area import'
  );
  content = content.replace(/temperature = hass\.formatEntityState\(state\);/g, 'temperature = formatEntityStateWithUnit(hass, state);');
  content = content.replace(/humidity = hass\.formatEntityState\(state\);/g, 'humidity = formatEntityStateWithUnit(hass, state);');
  content = replaceOnce(content, "wattage = `${(totalWattage / 1000).toFixed(1)} kW`;", "wattage = formatValueWithUnit((totalWattage / 1000).toFixed(1), 'kW');", 'room kW');
  content = replaceOnce(content, "wattage = `${Math.round(totalWattage)} W`;", "wattage = formatValueWithUnit(Math.round(totalWattage), 'W');", 'room W');
  content = replaceOnce(content, "totalEnergy = `${(totalEnergyValue / 1000).toFixed(1)} MWh`;", "totalEnergy = formatValueWithUnit((totalEnergyValue / 1000).toFixed(1), 'MWh');", 'room MWh');
  content = replaceOnce(content, "totalEnergy = `${totalEnergyValue.toFixed(1)} kWh`;", "totalEnergy = formatValueWithUnit(totalEnergyValue.toFixed(1), 'kWh');", 'room kWh');
  write(path, content);
}

// DD Next-owned home, room and entity cards.
{
  const path = 'src/components/dwains-layout-card.ts';
  let content = read(path);
  content = replaceOnce(
    content,
    "import { buildHousePowerUsage } from '../utils/power-usage';",
    "import { buildHousePowerUsage } from '../utils/power-usage';\nimport { formatEntityStateWithUnit, formatValueWithUnit } from '../utils/unit-format';",
    'layout import'
  );
  content = replaceOnce(content, 'return `${temperature} ${unit}`;', 'return formatValueWithUnit(temperature, unit);', 'weather temperature');
  content = replaceOnce(
    content,
    "const value = kind === 'temperature'\n      ? `${average.toFixed(1)} ${unit}`\n      : `${Math.round(average)} ${unit}`;",
    "const value = formatValueWithUnit(\n      kind === 'temperature' ? average.toFixed(1) : Math.round(average),\n      unit\n    );",
    'house climate summary'
  );
  content = replaceOnce(content, '? `${currentTemperature} ${temperatureUnit}`', '? formatValueWithUnit(currentTemperature, temperatureUnit)', 'area quick climate');
  content = replaceOnce(
    content,
    "try {\n      return this.hass.formatEntityState(effectiveState);\n    } catch {\n      return String(effectiveState?.state || '');\n    }",
    'return formatEntityStateWithUnit(this.hass, effectiveState);',
    'favorite/entity state formatter'
  );
  content = content.replace(/return this\.hass\.formatEntityState\(state\);/g, 'return formatEntityStateWithUnit(this.hass, state);');
  content = replaceOnce(
    content,
    "return `${formatted} · ${state.attributes.current_position}%`;",
    "return `${formatted} · ${formatValueWithUnit(state.attributes.current_position, '%')}`;",
    'cover position'
  );
  content = replaceOnce(
    content,
    "if (current !== undefined && target !== undefined) return `${current} ${unit} · ${this._t('entity.climate_set', { value: `${target} ${unit}` })}`;\n      if (current !== undefined) return `${current} ${unit}`;",
    "if (current !== undefined && target !== undefined) return `${formatValueWithUnit(current, unit)} · ${this._t('entity.climate_set', { value: formatValueWithUnit(target, unit) })}`;\n      if (current !== undefined) return formatValueWithUnit(current, unit);",
    'mobile climate status'
  );
  write(path, content);
}

// Entity dialog.
{
  const path = 'src/components/dwains-domain-entities-dialog.ts';
  let content = read(path);
  content = replaceOnce(
    content,
    "import { fireEvent } from './utils/fire-event';",
    "import { fireEvent } from './utils/fire-event';\nimport { formatEntityStateWithUnit, formatValueWithUnit } from '../utils/unit-format';",
    'dialog import'
  );
  content = replaceOnce(
    content,
    'const formatted = this.hass.formatEntityState(effectiveState);',
    'const formatted = formatEntityStateWithUnit(this.hass, effectiveState);',
    'dialog entity formatter'
  );
  content = replaceOnce(
    content,
    "return `${formatted} · ${effectiveState.attributes.current_position}%`;",
    "return `${formatted} · ${formatValueWithUnit(effectiveState.attributes.current_position, '%')}`;",
    'dialog cover position'
  );
  content = replaceOnce(
    content,
    "return `${current}${unit} · ${this._t('entity.climate_set', { value: `${target}${unit}` })}`;",
    "return `${formatValueWithUnit(current, unit)} · ${this._t('entity.climate_set', { value: formatValueWithUnit(target, unit) })}`;",
    'dialog climate target'
  );
  content = replaceOnce(
    content,
    'return `${current}${unit}`;',
    'return formatValueWithUnit(current, unit);',
    'dialog climate current'
  );
  write(path, content);
}

// Maintenance / battery values on Devices.
{
  const path = 'src/components/dwains-devices-card.ts';
  let content = read(path);
  content = replaceOnce(
    content,
    "import { isHassDarkTheme } from '../utils/theme';",
    "import { isHassDarkTheme } from '../utils/theme';\nimport { formatValueWithUnit } from '../utils/unit-format';",
    'devices import'
  );
  content = replaceOnce(
    content,
    'return `${state.state}${unit}`;',
    'return formatValueWithUnit(state.state, unit);',
    'maintenance unit'
  );
  write(path, content);
}

// Keep translated brightness percentages consistent too.
for (const locale of ['de', 'en', 'es', 'fr', 'nl', 'ru', 'zh-Hans', 'zh-Hant']) {
  const path = `src/i18n/locales/${locale}.ts`;
  let content = read(path);
  content = content.replace(/('entity\.brightness'\s*:\s*'[^']*?)\s%/g, `$1${NARROW_NBSP}%`);
  write(path, content);
}

console.log('Applied centralized narrow no-break unit spacing.');
