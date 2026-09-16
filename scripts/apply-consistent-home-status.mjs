import fs from 'node:fs';

const file = 'src/components/dwains-layout-card.ts';
let text = fs.readFileSync(file, 'utf8');

const replacements = [
  ["`${homeCount}/${personEntities.length} ${this._t('person.home').toLocaleLowerCase()}`", "`${homeCount}/${personEntities.length} ${this._t('person.home')}`"],
  ["parts.push(`${homeCount}/${personEntities.length} home`);", "parts.push(`${homeCount}/${personEntities.length} ${this._t('person.home')}`);"],
];

for (const [from, to] of replacements) {
  if (!text.includes(from)) throw new Error(`Expected text not found: ${from}`);
  text = text.replace(from, to);
}

fs.writeFileSync(file, text);
