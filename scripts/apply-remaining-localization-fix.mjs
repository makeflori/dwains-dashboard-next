import fs from 'node:fs';

const file = 'src/components/dwains-layout-card.ts';
let text = fs.readFileSync(file, 'utf8');

function replaceLiteral(from, to, label) {
  if (!text.includes(from)) {
    console.error(`Missing expected text: ${label}`);
    process.exit(1);
  }
  text = text.replace(from, to);
}

replaceLiteral(
  "      parts.push(`${homeCount}/${personEntities.length} home`);",
  "      const homeLabel = this._t('person.home');\n      const localizedHome = homeLabel ? homeLabel.charAt(0).toLocaleLowerCase() + homeLabel.slice(1) : homeLabel;\n      parts.push(`${homeCount}/${personEntities.length} ${localizedHome}`);",
  'home snapshot label'
);

replaceLiteral(
  "      parts.push(`${count} ${count === 1 ? 'notification' : 'notifications'}`);",
  "      const notificationLabel = this._t(count === 1 ? 'home.notification' : 'home.notifications');\n      const localizedNotification = notificationLabel\n        ? notificationLabel.charAt(0).toLocaleLowerCase() + notificationLabel.slice(1)\n        : notificationLabel;\n      parts.push(`${count} ${localizedNotification}`);",
  'home snapshot notifications'
);

replaceLiteral(
  "                ? `${count} persistent ${count === 1 ? 'notification' : 'notifications'}`",
  "                ? `${count} ${this._t(count === 1 ? 'home.notification' : 'home.notifications').toLocaleLowerCase()}`",
  'notification dialog count'
);

replaceLiteral(
  "                : 'Persistent notifications from Home Assistant'",
  "                : this._t('home.notifications_description')",
  'notification dialog subtitle'
);

replaceLiteral(
  "        this.hass.localize('ui.components.area-picker.no_floor') || 'Unassigned spaces' :",
  "        this.hass.localize('ui.components.area-picker.no_floor') || this._t('home.unassigned_spaces') :",
  'unassigned spaces fallback'
);

fs.writeFileSync(file, text);
console.log('Applied remaining UI localization fixes.');
