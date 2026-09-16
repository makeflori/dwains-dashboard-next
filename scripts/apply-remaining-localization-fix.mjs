import fs from 'node:fs';

const file = 'src/components/dwains-layout-card.ts';
let text = fs.readFileSync(file, 'utf8');

function replaceRequired(pattern, replacement, label) {
  if (!pattern.test(text)) {
    console.error(`Missing expected block: ${label}`);
    process.exit(1);
  }
  text = text.replace(pattern, replacement);
}

replaceRequired(
  /    if \(personEntities\.length\) \{\n      const homeCount = personEntities\.filter\(person => person\.state === 'home'\)\.length;\n      parts\.push\(`\$\{homeCount\}\/\$\{personEntities\.length\} home`\);\n    \}\n\n    if \(this\._showNotificationsUi\(\) && this\._persistentNotifications\.length\) \{\n      const count = this\._persistentNotifications\.length;\n      parts\.push\(`\$\{count\} \$\{count === 1 \? 'notification' : 'notifications'\}`\);\n    \}/,
  `    if (personEntities.length) {\n      const homeCount = personEntities.filter(person => person.state === 'home').length;\n      const homeLabel = this._t('person.home');\n      const localizedHome = homeLabel ? homeLabel.charAt(0).toLocaleLowerCase() + homeLabel.slice(1) : homeLabel;\n      parts.push(\`${'${homeCount}'}/${'${personEntities.length}'} ${'${localizedHome}'}\`);\n    }\n\n    if (this._showNotificationsUi() && this._persistentNotifications.length) {\n      const count = this._persistentNotifications.length;\n      const notificationLabel = this._t(count === 1 ? 'home.notification' : 'home.notifications');\n      const localizedNotification = notificationLabel\n        ? notificationLabel.charAt(0).toLocaleLowerCase() + notificationLabel.slice(1)\n        : notificationLabel;\n      parts.push(\`${'${count}'} ${'${localizedNotification}'}\`);\n    }`,
  'home snapshot labels'
);

replaceRequired(
  /              \$\{hasNotifications\}\n                \? `\$\{count\} persistent \$\{count === 1 \? 'notification' : 'notifications'\}`\n                : 'Persistent notifications from Home Assistant'\}/,
  `              ${'${hasNotifications}'}\n                ? (() => {\n                    const label = this._t(count === 1 ? 'home.notification' : 'home.notifications');\n                    const localized = label ? label.charAt(0).toLocaleLowerCase() + label.slice(1) : label;\n                    return \`${'${count}'} ${'${localized}'}\`;\n                  })()\n                : this._t('home.notifications_description')}`,
  'notification dialog subtitle'
);

replaceRequired(
  /      const floorTitle = floorName === 'no_floor' \?\n        this\.hass\.localize\('ui\.components\.area-picker\.no_floor'\) \|\| 'Unassigned spaces' :\n        floorName;/,
  `      const floorTitle = floorName === 'no_floor' ?\n        this.hass.localize('ui.components.area-picker.no_floor') || this._t('home.unassigned_spaces') :\n        floorName;`,
  'unassigned spaces fallback'
);

fs.writeFileSync(file, text);
console.log('Applied remaining UI localization fixes.');
