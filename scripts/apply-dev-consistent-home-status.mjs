import fs from 'node:fs';

const file = 'src/components/dwains-layout-card.ts';
let text = fs.readFileSync(file, 'utf8');

const houseFrom = "`${homeCount}/${personEntities.length} ${this._t('person.home').toLocaleLowerCase()}`";
const houseTo = "`${homeCount}/${personEntities.length} ${this._t('person.home')}`";
if (!text.includes(houseFrom)) throw new Error('House persons home status not found');
text = text.replace(houseFrom, houseTo);

const snapshotFrom = `      const homeLabel = this._t('person.home');\n      const localizedHome = homeLabel ? homeLabel.charAt(0).toLocaleLowerCase() + homeLabel.slice(1) : homeLabel;\n      parts.push(\`${'${homeCount}'}/${'${personEntities.length}'} ${'${localizedHome}'}\`);`;
const snapshotTo = `      parts.push(\`${'${homeCount}'}/${'${personEntities.length}'} ${'${this._t(\'person.home\')}'}\`);`;
if (!text.includes(snapshotFrom)) throw new Error('Home snapshot status block not found');
text = text.replace(snapshotFrom, snapshotTo);

fs.writeFileSync(file, text);
