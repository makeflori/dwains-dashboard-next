import { describe, it, expect } from 'vitest';
import { parseBlueprintYaml, resolveBlueprintCard, defaultValues } from '../src/utils/blueprints';

describe('localized repeatable page blueprints', () => {
  const yaml = `blueprint:
  name: Waste Collection
  name_de: Abfuhrkalender
  icon: mdi:trash-can-outline
  version: 1.0.0
  type: page
  input:
    items:
      type: entity-list
      default: []
      default_icon: mdi:trash-can-outline
card:
  type: vertical-stack
  cards:
    - repeat: items
      template:
        type: button
        entity: "$item.entity$"
        name: "$item.name$"
        icon: "$item.icon$"
        label:
          i18n:
            de: "Heute"
            en: "Today"
`;
  it('parses localized fields, icon and repeatable inputs', () => {
    const parsed = parseBlueprintYaml(yaml);
    expect(parsed.meta.name_de).toBe('Abfuhrkalender');
    expect(parsed.meta.icon).toBe('mdi:trash-can-outline');
    expect(defaultValues(parsed.meta).items).toEqual([]);
  });
  it('expands multiple items and uses a fallback icon', () => {
    const p = parseBlueprintYaml(yaml);
    const result = resolveBlueprintCard(p.card, p.meta, { __language: 'de', items: [
      { name: 'Bio', entity: 'sensor.bio', icon: '' },
      { name: 'Paper', entity: 'sensor.paper', icon: 'mdi:newspaper' }
    ]});
    expect(result.cards).toHaveLength(2);
    expect(result.cards[0]).toMatchObject({ name: 'Bio', entity: 'sensor.bio', icon: 'mdi:trash-can-outline', label: 'Heute' });
    expect(result.cards[1]).toMatchObject({ name: 'Paper', entity: 'sensor.paper', icon: 'mdi:newspaper' });
  });
  it('falls back to English and ignores incomplete rows', () => {
    const p = parseBlueprintYaml(yaml);
    const result = resolveBlueprintCard(p.card, p.meta, { __language: 'fr', items: [
      { name: 'Incomplete', entity: '' },
      { name: 'Paper', entity: 'sensor.paper' }
    ]});
    expect(result.cards).toHaveLength(1);
    expect(result.cards[0].label).toBe('Today');
  });
});
