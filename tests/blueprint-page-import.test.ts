import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { parseBlueprintYaml, resolveBlueprintCard, defaultValues } from '../src/utils/blueprints';

const pages = [
  ['WasteCollection', 'Waste Collection', '1.0.1'],
  ['CryptoWallet', 'Crypto Wallet', '1.0.1'],
  ['SystemMonitor', 'System Monitor', '1.0.0'],
  ['AdGuard', 'AdGuard', '1.2'],
] as const;

describe('import actual published Dashboard Next page YAML', () => {
  for (const [folder, title, version] of pages) {
    it(`parses ${title} and resolves its card without blueprint metadata leaks`, () => {
      const yaml = readFileSync(`blueprint-source/page-blueprints/${folder}/blueprint.yaml`, 'utf8');
      const parsed = parseBlueprintYaml(yaml);
      expect(parsed.meta.name).toBe(title);
      expect(parsed.meta.version).toBe(version);
      expect(parsed.meta.icon).toMatch(/^mdi:/);
      expect(parsed.meta.type).toBe('page');
      const data = defaultValues(parsed.meta);
      if (folder === 'WasteCollection') data.waste_types = [
        { name: 'Organic', entity: 'sensor.organic', icon: '' },
        { name: 'Paper', entity: 'sensor.paper', icon: 'mdi:newspaper' },
      ];
      if (folder === 'CryptoWallet') {
        data.portfolio_total = 'sensor.total';
        data.coins = [{ name: 'Bitcoin', entity: 'sensor.bitcoin_value', price_entity: 'sensor.bitcoin_price', amount_entity: 'sensor.bitcoin_amount', icon: '' }];
      }
      const card = resolveBlueprintCard(parsed.card, parsed.meta, { ...data, __language: 'en' });
      expect(card?.type).toBeTruthy();
      expect(JSON.stringify(card)).not.toContain('$item.');
      expect(JSON.stringify(card)).not.toContain('"repeat":');
      function validateJS(node: any): void {
        if (typeof node === 'string' && /^\\[\\[\\[[\\s\\S]*\\]\\]\\]$/.test(node)) {
          const body = node.slice(3, -3);
          expect(() => new Function('entity', 'states', 'variables', body), body.slice(0, 90)).not.toThrow();
        } else if (Array.isArray(node)) node.forEach(validateJS);
        else if (node && typeof node === 'object') Object.values(node).forEach(validateJS);
      }
      validateJS(card);
    });
  }
  it('computes optional wallet sections without a portfolio total sensor', () => {
    const yaml = readFileSync('blueprint-source/page-blueprints/CryptoWallet/blueprint.yaml', 'utf8');
    const parsed = parseBlueprintYaml(yaml);
    const coins = [{ name: 'Bitcoin', entity: 'sensor.bitcoin_value', price_entity: 'sensor.bitcoin_price', amount_entity: 'sensor.bitcoin_holdings', icon: '' }];
    const result = resolveBlueprintCard(parsed.card, parsed.meta, { ...defaultValues(parsed.meta), portfolio_total: '', coins, __language: 'en' });
    const left = result.cards[0];
    expect(left.entity).toBe('');
    expect(left.triggers_update).toContain('sensor.bitcoin_value');
    expect(left.triggers_update).toContain('sensor.bitcoin_price');
    expect(left.custom_fields.graph24).toBeUndefined();
    expect(left.custom_fields.graph7).toBeUndefined();
    expect(left.custom_fields.header).toContain('sensor.bitcoin_value');
  });

});
