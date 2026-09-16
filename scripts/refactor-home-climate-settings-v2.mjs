import fs from 'node:fs';

function replaceOnce(text, search, replacement, label) {
  const index = text.indexOf(search);
  if (index < 0) throw new Error(`Missing expected block: ${label}`);
  return text.slice(0, index) + replacement + text.slice(index + search.length);
}
function replaceRegex(text, regex, replacement, label) {
  if (!regex.test(text)) throw new Error(`Missing expected pattern: ${label}`);
  return text.replace(regex, replacement);
}

// Types: remove obsolete per-area climate sensor selection, add home climate exclusions.
{
  const path = 'src/types/strategy.ts';
  let text = fs.readFileSync(path, 'utf8');
  text = replaceRegex(text, /export interface AreaClimateOptions \{[\s\S]*?\n\}\n\n/, '', 'AreaClimateOptions');
  text = text.replace("  climate?: AreaClimateOptions;\n", '');
  text = replaceOnce(text,
    '  home_information_cards_hidden?: HomeInformationCardKey[];\n',
    '  home_information_cards_hidden?: HomeInformationCardKey[];\n  /** Areas excluded from the House information climate average. */\n  home_climate_excluded_areas?: string[];\n',
    'home climate exclusions type');
  fs.writeFileSync(path, text);
}

// Area data: use Home Assistant assigned temperature/humidity sensors only.
{
  const path = 'src/utils/area.ts';
  let text = fs.readFileSync(path, 'utf8');
  text = text.replace("import type { HomeAssistant, HassEntity } from '../types/home-assistant';", "import type { HomeAssistant } from '../types/home-assistant';");
  text = text.replace("  const climateOptionsHash = JSON.stringify(config?.areas_options?.[area.area_id]?.climate || {});\n  const cacheKey = `${area.area_id}-${areaEntities.length}-${entityStatesHash.substring(0, 50)}-${climateOptionsHash}`;",
    "  const cacheKey = `${area.area_id}-${areaEntities.length}-${entityStatesHash.substring(0, 50)}`;");
  text = replaceRegex(text,
    /  \/\/ Resolve room climate from custom dashboard settings when configured,[\s\S]*?  humidity = formatClimateSelection\([\s\S]*?\n  \);\n/,
    `  // Use the temperature and humidity sensors assigned to the area in Home Assistant.\n  const areaRegistry = hass.areas[area.area_id] as any;\n  const temperatureEntityId = areaRegistry?.temperature_entity_id;\n  const humidityEntityId = areaRegistry?.humidity_entity_id;\n\n  if (temperatureEntityId) {\n    const state = hass.states[temperatureEntityId];\n    if (state && state.state !== 'unavailable' && state.state !== 'unknown') {\n      temperature = hass.formatEntityState(state);\n    }\n  }\n  if (humidityEntityId) {\n    const state = hass.states[humidityEntityId];\n    if (state && state.state !== 'unavailable' && state.state !== 'unknown') {\n      humidity = hass.formatEntityState(state);\n    }\n  }\n`,
    'custom area climate block');
  fs.writeFileSync(path, text);
}

// Settings UI: remove obsolete area climate editor and add nested House information -> Climate settings.
{
  const path = 'src/components/dwains-dashboard-strategy-editor.ts';
  let text = fs.readFileSync(path, 'utf8');
  text = replaceRegex(text, /  private _getAreaClimateCandidates\([\s\S]*?\n  private _renderAreaEditor\(\) \{/, '  private _renderAreaEditor() {', 'obsolete area climate methods');
  text = text.replace("\n        ${this._renderAreaClimateSettings(this._area!)}\n", '\n');
  text = replaceRegex(text, /    \.area-climate-settings \{[\s\S]*?(?=    \.area-entity-layout-settings \{)/, '', 'obsolete area climate css');

  text = replaceOnce(text,
    '  @state()\n  private _settingsPage: SettingsPageKey = restoreSettingsPage();\n',
    "  @state()\n  private _settingsPage: SettingsPageKey = restoreSettingsPage();\n\n  @state()\n  private _homeSettingsDetail: 'overview' | 'house_information' | 'climate' = 'overview';\n",
    'home settings detail state');

  text = replaceRegex(text,
    /  private _renderHomeLayoutSettingsPanel\(\) \{[\s\S]*?\n  \}\n\n  private _renderReplacementsSettingsPanel/,
`  private _renderHomeLayoutSettingsPanel() {\n    if (this._homeSettingsDetail === 'climate') {\n      return this._renderSettingsPanel(\n        \"mdi:home-thermometer-outline\",\n        this._t('home.indoor_climate'),\n        this._t('settings.home_climate_areas_description'),\n        html\`\n          <button class=\"home-settings-back\" type=\"button\" @click=\${() => { this._homeSettingsDetail = 'house_information'; }}>\n            <ha-svg-icon .path=\${mdiArrowLeft}></ha-svg-icon>\n            \${this._t('settings.house_information_cards')}\n          </button>\n          \${this._renderHomeClimateAreaSettings()}\n        \`\n      );\n    }\n\n    if (this._homeSettingsDetail === 'house_information') {\n      return this._renderSettingsPanel(\n        \"mdi:home-edit-outline\",\n        this._t('settings.house_information_cards'),\n        this._t('settings.house_information_cards_description'),\n        html\`\n          <button class=\"home-settings-back\" type=\"button\" @click=\${() => { this._homeSettingsDetail = 'overview'; }}>\n            <ha-svg-icon .path=\${mdiArrowLeft}></ha-svg-icon>\n            \${this._t('settings.home_layout')}\n          </button>\n          \${this._renderHomeInformationCardSettings()}\n        \`\n      );\n    }\n\n    return this._renderSettingsPanel(\n      \"mdi:home-edit-outline\",\n      this._t('settings.home_layout'),\n      this._t('settings.home_layout_description'),\n      html\`\n        \${this._renderHomeSectionOrder()}\n        \${this._renderHomeCustomCardsSettings()}\n        \${this._renderHomeCameraSettings()}\n        <button class=\"home-settings-detail-card\" type=\"button\" @click=\${() => { this._homeSettingsDetail = 'house_information'; }}>\n          <span class=\"home-section-icon\"><ha-icon icon=\"mdi:home-heart\"></ha-icon></span>\n          <span class=\"home-section-copy\">\n            <strong class=\"home-section-title\">\${this._t('settings.house_information_cards')}</strong>\n            <span class=\"home-section-description\">\${this._t('settings.house_information_cards_description')}</span>\n          </span>\n          <ha-svg-icon class=\"home-settings-detail-chevron\" .path=\${mdiChevronRight}></ha-svg-icon>\n        </button>\n      \`\n    );\n  }\n\n  private _renderReplacementsSettingsPanel`,
    'home layout settings panel');

  const insertBefore = '  private _renderHomeInformationCardSettings() {\n';
  const helpers = `  private _getExcludedHomeClimateAreas(): Set<string> {\n    return new Set(this._config?.settings?.home_climate_excluded_areas || []);\n  }\n\n  private _toggleHomeClimateArea(areaId: string, included: boolean): void {\n    if (!this._config) return;\n    const excluded = this._getExcludedHomeClimateAreas();\n    if (included) excluded.delete(areaId); else excluded.add(areaId);\n    this._fireConfigChanged({\n      ...this._config,\n      settings: { ...this._config.settings, home_climate_excluded_areas: [...excluded] },\n    });\n  }\n\n  private _renderHomeClimateAreaSettings() {\n    if (!this._config || !this.hass) return nothing;\n    const excluded = this._getExcludedHomeClimateAreas();\n    const hiddenAreas = new Set(this._config.areas_display?.hidden || []);\n    const areas = sortAreas(this._config.areas || [], { ...this._config.areas_display, hidden: [] }, ddLocale(this.hass))\n      .filter(area => !hiddenAreas.has(area.area_id));\n    return html\`\n      <div class=\"home-info-card-section\">\n        <div class=\"home-info-card-header\"><div><h4>\${this._t('settings.home_climate_areas_title')}</h4><p>\${this._t('settings.home_climate_areas_description')}</p></div></div>\n        <div class=\"home-info-card-list\">\n          \${areas.map(area => { const included = !excluded.has(area.area_id); return html\`\n            <div class=\"home-info-card-item \${included ? 'enabled' : 'disabled'}\">\n              <div class=\"home-section-icon\"><ha-icon icon=\"mdi:floor-plan\"></ha-icon></div>\n              <div class=\"home-section-copy\"><div class=\"home-section-title\">\${area.name}</div><div class=\"home-section-description\">\${included ? this._t('settings.home_climate_area_included') : this._t('settings.home_climate_area_excluded')}</div></div>\n              <ha-switch .checked=\${included} @change=\${(event: Event) => this._toggleHomeClimateArea(area.area_id, (event.target as any).checked)}></ha-switch>\n            </div>\n          \`; })}\n        </div>\n      </div>\n    \`;\n  }\n\n`;
  text = replaceOnce(text, insertBefore, helpers + insertBefore, 'home climate helpers');

  const oldItem = `              <div class=\"home-info-card-item \${enabled ? 'enabled' : 'disabled'}\">\n                <div class=\"home-section-icon\">\n                  <ha-icon icon=\${meta.icon}></ha-icon>\n                </div>\n                <div class=\"home-section-copy\">\n                  <div class=\"home-section-title\">\${this._t(meta.labelKey)}</div>\n                  <div class=\"home-section-description\">\${this._t(meta.descriptionKey)}</div>\n                </div>\n                <ha-switch\n                  .checked=\${enabled}\n                  @change=\${() => this._toggleHomeInformationCardEnabled(card)}\n                ></ha-switch>\n              </div>`;
  const newItem = `              <div class=\"home-info-card-item \${enabled ? 'enabled' : 'disabled'}\">\n                <div class=\"home-section-icon\"><ha-icon icon=\${meta.icon}></ha-icon></div>\n                <button class=\"home-info-card-open\" type=\"button\" ?disabled=\${card !== 'climate'} @click=\${() => { if (card === 'climate') this._homeSettingsDetail = 'climate'; }}>\n                  <span class=\"home-section-copy\"><span class=\"home-section-title\">\${this._t(meta.labelKey)}</span><span class=\"home-section-description\">\${this._t(meta.descriptionKey)}</span></span>\n                  \${card === 'climate' ? html\`<ha-svg-icon .path=\${mdiChevronRight}></ha-svg-icon>\` : nothing}\n                </button>\n                <ha-switch .checked=\${enabled} @change=\${() => this._toggleHomeInformationCardEnabled(card)}></ha-switch>\n              </div>`;
  text = replaceOnce(text, oldItem, newItem, 'home information row');

  const cssMarker = '    .home-info-card-section {\n';
  const css = `    .home-settings-detail-card { width: 100%; display: flex; align-items: center; gap: 12px; padding: 14px; margin-top: 16px; border: 1px solid var(--divider-color); border-radius: 12px; background: var(--card-background-color); color: var(--primary-text-color); text-align: left; cursor: pointer; }\n    .home-settings-detail-card .home-section-copy { flex: 1; }\n    .home-settings-detail-chevron { width: 20px; height: 20px; }\n    .home-settings-back { display: inline-flex; align-items: center; gap: 8px; margin: 0 0 16px; padding: 8px 10px; border: 0; border-radius: 8px; background: transparent; color: var(--primary-text-color); cursor: pointer; font: inherit; }\n    .home-settings-back ha-svg-icon { width: 20px; height: 20px; }\n    .home-info-card-open { flex: 1; min-width: 0; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0; border: 0; background: transparent; color: inherit; text-align: left; font: inherit; }\n    .home-info-card-open:not(:disabled) { cursor: pointer; }\n    .home-info-card-open:disabled { opacity: 1; }\n    .home-info-card-open ha-svg-icon { width: 20px; height: 20px; flex: 0 0 auto; }\n\n`;
  text = replaceOnce(text, cssMarker, css + cssMarker, 'nested settings css');
  fs.writeFileSync(path, text);
}

// House climate: average only HA-assigned area sensors and honor Home/House-information exclusions.
{
  const path = 'src/components/dwains-layout-card.ts';
  let text = fs.readFileSync(path, 'utf8');
  text = replaceRegex(text, /  private _getHouseClimateSummary\(\): HouseClimateSummary \{[\s\S]*?\n  \}\n\n  private _houseClimateMetric\(/,
`  private _getHouseClimateSummary(): HouseClimateSummary {\n    const values: Record<HouseClimateMetric['kind'], Array<{ value: number; unit: string; entityIds: string[] }>> = { temperature: [], humidity: [] };\n    const excludedAreas = new Set(this.config?.settings?.home_climate_excluded_areas || []);\n    this._getVisibleSortedAreas().forEach(area => {\n      if (excludedAreas.has(area.area_id)) return;\n      const areaRegistry = this.hass?.areas?.[area.area_id] as any;\n      (['temperature', 'humidity'] as const).forEach(kind => {\n        const entityId = kind === 'temperature' ? areaRegistry?.temperature_entity_id : areaRegistry?.humidity_entity_id;\n        if (!entityId) return;\n        const state = this.hass?.states?.[entityId];\n        if (!state || state.state === 'unavailable' || state.state === 'unknown') return;\n        const value = Number.parseFloat(state.state);\n        if (!Number.isFinite(value)) return;\n        values[kind].push({ value, unit: String(state.attributes?.unit_of_measurement || (kind === 'temperature' ? this.hass?.config?.unit_system?.temperature || '°C' : '%')), entityIds: [entityId] });\n      });\n    });\n    const metrics: HouseClimateMetric[] = [];\n    const temperature = this._houseClimateMetric('temperature', values.temperature);\n    const humidity = this._houseClimateMetric('humidity', values.humidity);\n    if (temperature) metrics.push(temperature);\n    if (humidity) metrics.push(humidity);\n    return { sensorCount: values.temperature.length + values.humidity.length, metrics };\n  }\n\n  private _houseClimateMetric(`,
  'house climate summary');
  fs.writeFileSync(path, text);
}

const oldKeys = [
  'settings.area_climate_title','settings.area_climate_description','settings.climate_include_house_average','settings.climate_include_house_average_description','settings.climate_home_assistant','settings.climate_home_assistant_description','settings.climate_custom_selection','settings.climate_custom_selection_description','settings.climate_no_sensors'
];
const localeValues = {
  en: {
    'settings.home_climate_areas_title': 'Areas included in indoor climate',
    'settings.home_climate_areas_description': 'Choose which Home Assistant areas are included in the average temperature and humidity shown in House information.',
    'settings.home_climate_area_included': 'Included in house average',
    'settings.home_climate_area_excluded': 'Excluded from house average',
  },
  de: {
    'settings.home_climate_areas_title': 'Bereiche im Raumklima',
    'settings.home_climate_areas_description': 'Lege fest, welche Home-Assistant-Bereiche bei der durchschnittlichen Temperatur und Luftfeuchtigkeit in den Hausinformationen berücksichtigt werden.',
    'settings.home_climate_area_included': 'Im Hausdurchschnitt enthalten',
    'settings.home_climate_area_excluded': 'Vom Hausdurchschnitt ausgeschlossen',
  },
};
for (const locale of ['en','de','es','fr','nl','ru','zh-Hans','zh-Hant']) {
  const path = `src/i18n/locales/${locale}.ts`;
  let text = fs.readFileSync(path, 'utf8');
  for (const key of oldKeys) text = text.replace(new RegExp(`^\\s*'${key.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}':.*\\n`, 'm'), '');
  const values = localeValues[locale] || localeValues.en;
  const lines = Object.entries(values).map(([key,value]) => `  '${key}': ${JSON.stringify(value)},`).join('\n') + '\n';
  const candidates = ['\n} as const satisfies TranslationDictionary;','\n} satisfies TranslationDictionary;','\n} as const;','\n};'];
  const marker = candidates.find(m => text.includes(m));
  if (!marker) throw new Error(`Missing locale end marker: ${locale}`);
  text = text.replace(marker, `\n${lines}${marker}`);
  fs.writeFileSync(path, text);
}
console.log('Applied corrected House information climate refactor.');
