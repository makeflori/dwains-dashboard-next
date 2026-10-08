import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { parseBlueprintYaml, resolveBlueprintCard, defaultValues } from '../src/utils/blueprints';

const pages = [
  ['Abfuhrkalender', 'Waste Collection', '1.0.0'],
  ['Krypto-Wallet', 'Crypto Wallet', '1.0.0'],
  ['Systemstatus', 'System Monitor', '1.0.0'],
  ['AdGuard', 'AdGuard', '1.1'],
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
      if (folder === 'Abfuhrkalender') data.waste_types = [
        { name: 'Organic', entity: 'sensor.organic', icon: '' },
        { name: 'Paper', entity: 'sensor.paper', icon: 'mdi:newspaper' },
      ];
      if (folder === 'Krypto-Wallet') {
        data.portfolio_total = 'sensor.total';
        data.coins = [{ name: 'Bitcoin', entity: 'sensor.bitcoin_value', price_entity: 'sensor.bitcoin_price', amount_entity: 'sensor.bitcoin_amount', icon: '' }];
      }
      const card = resolveBlueprintCard(parsed.card, parsed.meta, { ...data, __language: 'en' });
      expect(card?.type).toBeTruthy();
      expect(JSON.stringify(card)).not.toContain('$item.');
      expect(JSON.stringify(card)).not.toContain('"repeat":');
    });
  }
});
