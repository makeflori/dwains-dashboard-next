import fs from 'node:fs';

const file = 'src/components/dwains-layout-card.ts';
let text = fs.readFileSync(file, 'utf8');

function replaceExact(from, to, label) {
  if (!text.includes(from)) throw new Error(`Missing expected text: ${label}`);
  text = text.replace(from, to);
}

replaceExact(
  "        name: settingsSelected ? 'Settings' : area?.name || 'Home',",
  "        name: settingsSelected ? this._t('sidebar.dashboard_settings') : area?.name || this._t('sidebar.home'),",
  'bottom navigation labels'
);

replaceExact(
  "viewAllLabel: 'View all',",
  "viewAllLabel: this._t('common.view_all'),",
  'view all label'
);

replaceExact(
  "<span class=\"mobile-domain-count\">(${group.entities.length} ${group.entities.length === 1 ? 'item' : 'items'})</span>",
  "<span class=\"mobile-domain-count\">(${this._tp('common.item', group.entities.length)})</span>",
  'mobile item count'
);

replaceExact(
  "const value = kind === 'temperature'\n      ? `${average.toFixed(1)} ${unit}`\n      : `${Math.round(average)}${unit}`;",
  "const value = kind === 'temperature'\n      ? `${average.toFixed(1)}\u202F${unit}`\n      : `${Math.round(average)}\u202F${unit}`;",
  'home climate unit spacing'
);

replaceExact(
  "? `${currentTemperature}${temperatureUnit}`",
  "? `${currentTemperature}\u202F${temperatureUnit}`",
  'area climate unit spacing'
);

replaceExact(
  "                  <span class=\"welcome-greeting\">${greeting}</span>\n                  <span class=\"welcome-name\">, ${userName}!</span>\n                  <span class=\"welcome-title\">${greeting}, ${userName}</span>",
  "                  <span class=\"welcome-greeting\">${greeting},</span>\n                  <span class=\"welcome-name\">${userName}</span>\n                  <span class=\"welcome-title\">${greeting}, ${userName}</span>",
  'desktop greeting punctuation'
);

replaceExact(
  "    .welcome-text {\n      display: flex;\n      align-items: baseline;\n      gap: 8px;\n    }",
  "    .welcome-text {\n      display: flex;\n      align-items: baseline;\n      gap: 4px;\n    }",
  'desktop greeting spacing'
);

const statusStart = text.indexOf('  private _statusCardTitle(domain: DomainCount): string {');
const statusEndMarker = '\n  private _getStatusDomains(): DomainCount[] {';
const statusEnd = text.indexOf(statusEndMarker, statusStart);
if (statusStart < 0 || statusEnd < 0) throw new Error('Could not locate status-card localization block');

const statusBlock = `  private _statusLabel(key: string, count: number, plural = true): string {
    const localized = plural ? this._tp(key, count) : this._t(key, { count });
    const prefix = String(count);
    return localized.startsWith(prefix) ? localized.slice(prefix.length).trim() : localized;
  }

  private _statusPair(key: string, plural = true): { singular: string; plural: string } {
    return {
      singular: this._statusLabel(key, 1, plural),
      plural: this._statusLabel(key, 2, plural),
    };
  }

  private _statusCardTitle(domain: DomainCount): string {
    const activeLabel = this._statusCardActiveLabel(domain);
    if (activeLabel) {
      const label = domain.count === 1 ? activeLabel.singular : activeLabel.plural;
      if (domain.count === 1 && domain.entities?.length === 1) {
        const areaName = this._entityAreaName(domain.entities[0]!);
        return areaName ? \`${'${label}'} · ${'${areaName}'}\` : label;
      }
      return label;
    }

    if (domain.count === 1 && domain.entities?.length === 1) {
      const areaName = this._entityAreaName(domain.entities[0]!);
      if (areaName) return \`${'${domain.name}'} · ${'${areaName}'}\`;
    }
    return domain.name;
  }

  private _statusCardActiveLabel(domain: DomainCount): { singular: string; plural: string } | undefined {
    if (domain.domain === 'person') return undefined;

    if (domain.domain === 'light') return this._statusPair('status.light_on');
    if (domain.domain === 'switch') return this._statusPair('status.switch_on');
    if (domain.domain === 'cover') return this._statusPair('status.cover_open');
    if (domain.domain === 'fan') return this._statusPair('status.fan_on');
    if (domain.domain === 'lock') return this._statusPair('status.lock_unlocked');
    if (domain.domain === 'climate') return this._statusPair('status.climate_active');
    if (domain.domain === 'media_player') return this._statusPair('status.media_playing');
    if (domain.domain === 'vacuum') return this._statusPair('status.vacuum_cleaning');
    if (domain.domain === 'alarm_control_panel') return this._statusPair('status.alarm_armed');

    if (domain.domain === 'binary_sensor') {
      switch (domain.deviceClass) {
        case 'door': return this._statusPair('status.door_open');
        case 'window': return this._statusPair('status.window_open');
        case 'opening': return this._statusPair('status.opening_open');
        case 'motion': return this._statusPair('status.motion_detected', false);
        case 'smoke': return this._statusPair('status.smoke_detected', false);
        case 'gas': return this._statusPair('status.gas_detected', false);
        case 'moisture': return this._statusPair('status.moisture_detected', false);
        case 'occupancy': return this._statusPair('status.occupancy_detected', false);
        case 'presence': return this._statusPair('status.presence_detected', false);
        case 'tamper': return this._statusPair('status.tamper_detected', false);
        case 'vibration': return this._statusPair('status.vibration_detected', false);
        case 'safety': return this._statusPair('status.safety_active', false);
        default: return undefined;
      }
    }

    return undefined;
  }
`;

text = text.slice(0, statusStart) + statusBlock + text.slice(statusEnd);

fs.writeFileSync(file, text);
console.log('Applied UI localization and formatting fixes.');
