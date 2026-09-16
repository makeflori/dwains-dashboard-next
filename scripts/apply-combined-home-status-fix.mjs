import fs from 'node:fs';

const path = 'src/components/dwains-layout-card.ts';
let source = fs.readFileSync(path, 'utf8');

const replacements = [
  [
    "const subtitle = personEntities.length\n      ? `${homeCount}/${personEntities.length} ${this._t('person.home').toLocaleLowerCase()}`\n      : this._t('home.no_people');",
    "const subtitle = personEntities.length\n      ? `${homeCount}/${personEntities.length} ${this._t('person.home')}`\n      : this._t('home.no_people');"
  ],
  [
    "const homeLabel = this._t('person.home');\n      const localizedHome = homeLabel ? homeLabel.charAt(0).toLocaleLowerCase() + homeLabel.slice(1) : homeLabel;\n      parts.push(`${homeCount}/${personEntities.length} ${localizedHome}`);",
    "const homeLabel = this._t('person.home');\n      parts.push(`${homeCount}/${personEntities.length} ${homeLabel}`);"
  ]
];

for (const [before, after] of replacements) {
  if (!source.includes(before)) {
    throw new Error(`Expected source block not found:\n${before}`);
  }
  source = source.replace(before, after);
}

fs.writeFileSync(path, source);
