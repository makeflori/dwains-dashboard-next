import fs from 'node:fs';

const path = 'src/components/dwains-layout-card.ts';
let source = fs.readFileSync(path, 'utf8');

const replacements = [
  [
    "    return `${temperature}${unit}`;",
    "    return `${temperature} ${unit}`;"
  ],
  [
    "      if (current !== undefined && target !== undefined) return `${current}${unit} · ${this._t('entity.climate_set', { value: `${target}${unit}` })}`;\n      if (current !== undefined) return `${current}${unit}`;",
    "      if (current !== undefined && target !== undefined) return `${current} ${unit} · ${this._t('entity.climate_set', { value: `${target} ${unit}` })}`;\n      if (current !== undefined) return `${current} ${unit}`;"
  ]
];

for (const [before, after] of replacements) {
  if (!source.includes(before)) {
    throw new Error(`Expected source block not found:\n${before}`);
  }
  source = source.replace(before, after);
}

fs.writeFileSync(path, source);
console.log('Normalized remaining temperature unit spacing.');
// Trigger patch workflow after the workflow file exists on the branch.
