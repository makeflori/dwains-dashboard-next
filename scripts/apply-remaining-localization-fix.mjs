import fs from 'node:fs';

const file = 'src/components/dwains-layout-card.ts';
let text = fs.readFileSync(file, 'utf8');

function replaceOnce(from, to, label) {
  if (!text.includes(from)) {
    console.error(`Missing expected block: ${label}`);
    process.exit(1);
  }
  text = text.replace(from, to);
}

replaceOnce(
`    if (personEntities.length) {
      const homeCount = personEntities.filter(person => person.state === 'home').length;
      parts.push(\`${'${homeCount}'}/${'${personEntities.length}'} home\`);
    }

    if (this._showNotificationsUi() && this._persistentNotifications.length) {
      const count = this._persistentNotifications.length;
      parts.push(\`${'${count}'} ${'${count === 1 ? \'notification\' : \'notifications\'}'}\`);
    }`,
`    if (personEntities.length) {
      const homeCount = personEntities.filter(person => person.state === 'home').length;
      const homeLabel = this._t('person.home');
      const localizedHome = homeLabel ? homeLabel.charAt(0).toLocaleLowerCase() + homeLabel.slice(1) : homeLabel;
      parts.push(\`${'${homeCount}'}/${'${personEntities.length}'} ${'${localizedHome}'}\`);
    }

    if (this._showNotificationsUi() && this._persistentNotifications.length) {
      const count = this._persistentNotifications.length;
      const notificationLabel = this._t(count === 1 ? 'home.notification' : 'home.notifications');
      const localizedNotification = notificationLabel
        ? notificationLabel.charAt(0).toLocaleLowerCase() + notificationLabel.slice(1)
        : notificationLabel;
      parts.push(\`${'${count}'} ${'${localizedNotification}'}\`);
    }`,
'home snapshot labels'
);

replaceOnce(
`              ${'${hasNotifications}'}
                ? \`${'${count}'} persistent ${'${count === 1 ? \'notification\' : \'notifications\'}'}\`
                : 'Persistent notifications from Home Assistant'}`,
`              ${'${hasNotifications}'}
                ? (() => {
                    const label = this._t(count === 1 ? 'home.notification' : 'home.notifications');
                    const localized = label ? label.charAt(0).toLocaleLowerCase() + label.slice(1) : label;
                    return \`${'${count}'} ${'${localized}'}\`;
                  })()
                : this._t('home.notifications_description')}`,
'notification dialog subtitle'
);

replaceOnce(
`      const floorTitle = floorName === 'no_floor' ?
        this.hass.localize('ui.components.area-picker.no_floor') || 'Unassigned spaces' :
        floorName;`,
`      const floorTitle = floorName === 'no_floor' ?
        this.hass.localize('ui.components.area-picker.no_floor') || this._t('home.unassigned_spaces') :
        floorName;`,
'unassigned spaces fallback'
);

fs.writeFileSync(file, text);
console.log('Applied remaining UI localization fixes.');
