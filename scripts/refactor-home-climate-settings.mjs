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

// 1) Settings type: keep only a Home-page/House-information exclusion list.
{
  const path = 'src/types/strategy.ts';
  let text = fs.readFileSync(path, 'utf8');
  text = replaceOnce(
    text,
    '  home_information_cards_hidden?: HomeInformationCardKey[];\n',
    '  home_information_cards_hidden?: HomeInformationCardKey[];\n  /** Areas excluded from the House information climate average. */\n  home_climate_excluded_areas?: string[];\n',
    'home settings type'
  );
  fs.writeFileSync(path, text);
}

// 2) Strategy editor: move climate filtering to Home -> House information -> Climate.
{
  const path = 'src/components/dwains-dashboard-strategy-editor.ts';
  let text = fs.readFileSync(path, 'utf8');

  text = replaceOnce(
    text,
    '  @state()\n  private _settingsPage: SettingsPageKey = restoreSettingsPage();\n',
    "  @state()\n  private _settingsPage: SettingsPageKey = restoreSettingsPage();\n\n  @state()\n  private _homeSettingsDetail: 'overview' | 'house_information' | 'climate' = 'overview';\n",
    'home settings detail state'
  );

  text = replaceRegex(
    text,
    /  private _renderHomeLayoutSettingsPanel\(\) \{[\s\S]*?\n  \}\n\n  private _renderReplacementsSettingsPanel/,
    `  private _renderHomeLayoutSettingsPanel() {\n    if (this._homeSettingsDetail === 'climate') {\n      return this._renderSettingsPanel(\n        \"mdi:home-thermometer-outline\",\n        this._t('home.indoor_climate'),\n        this._t('settings.home_climate_areas_description'),\n        html\`\n          <button class=\"home-settings-back\" type=\"button\" @click=\${() => { this._homeSettingsDetail = 'house_information'; }}>\n            <ha-svg-icon .path=\${mdiArrowLeft}></ha-svg-icon>\n            \${this._t('settings.house_information_cards')}\n          </button>\n          \${this._renderHomeClimateAreaSettings()}\n        \`\n      );\n    }\n\n    if (this._homeSettingsDetail === 'house_information') {\n      return this._renderSettingsPanel(\n        \"mdi:home-edit-outline\",\n        this._t('settings.house_information_cards'),\n        this._t('settings.house_information_cards_description'),\n        html\`\n          <button class=\"home-settings-back\" type=\"button\" @click=\${() => { this._homeSettingsDetail = 'overview'; }}>\n            <ha-svg-icon .path=\${mdiArrowLeft}></ha-svg-icon>\n            \${this._t('settings.home_layout')}\n          </button>\n          \${this._renderHomeInformationCardSettings()}\n        \`\n      );\n    }\n\n    return this._renderSettingsPanel(\n      \"mdi:home-edit-outline\",\n      this._t('settings.home_layout'),\n      this._t('settings.home_layout_description'),\n      html\`\n        \${this._renderHomeSectionOrder()}\n        \${this._renderHomeCustomCardsSettings()}\n        \${this._renderHomeCameraSettings()}\n        <button class=\"home-settings-detail-card\" type=\"button\" @click=\${() => { this._homeSettingsDetail = 'house_information'; }}>\n          <span class=\"home-section-icon\"><ha-icon icon=\"mdi:home-heart\"></ha-icon></span>\n          <span class=\"home-section-copy\">\n            <strong class=\"home-section-title\">\${this._t('settings.house_information_cards')}</strong>\n            <span class=\"home-section-description\">\${this._t('settings.house_information_cards_description')}</span>\n          </span>\n          <ha-svg-icon class=\"home-settings-detail-chevron\" .path=\${mdiChevronRight}></ha-svg-icon>\n        </button>\n      \`\n    );\n  }\n\n  private _renderReplacementsSettingsPanel`,
    'home layout settings panel'
  );

  const insertBefore = '  private _renderHomeInformationCardSettings() {\n';
  const helpers = `  private _getExcludedHomeClimateAreas(): Set<string> {\n    return new Set(this._config?.settings?.home_climate_excluded_areas || []);\n  }\n\n  private _toggleHomeClimateArea(areaId: string, included: boolean): void {\n    if (!this._config) return;\n    const excluded = this._getExcludedHomeClimateAreas();\n    if (included) excluded.delete(areaId);\n    else excluded.add(areaId);\n    this._fireConfigChanged({\n      ...this._config,\n      settings: {\n        ...this._config.settings,\n        home_climate_excluded_areas: [...excluded],\n      },\n    });\n  }\n\n  private _renderHomeClimateAreaSettings() {\n    if (!this._config || !this.hass) return nothing;\n    const excluded = this._getExcludedHomeClimateAreas();\n    const hiddenAreas = new Set(this._config.areas_display?.hidden || []);\n    const areas = sortAreas(\n      this._config.areas || [],\n      { ...this._config.areas_display, hidden: [] },\n      ddLocale(this.hass)\n    ).filter(area => !hiddenAreas.has(area.area_id));\n\n    return html\`\n      <div class=\"home-info-card-section\">\n        <div class=\"home-info-card-header\">\n          <div>\n            <h4>\${this._t('settings.home_climate_areas_title')}</h4>\n            <p>\${this._t('settings.home_climate_areas_description')}</p>\n          </div>\n        </div>\n        <div class=\"home-info-card-list\">\n          \${areas.map(area => {\n            const included = !excluded.has(area.area_id);\n            return html\`\n              <div class=\"home-info-card-item \${included ? 'enabled' : 'disabled'}\">\n                <div class=\"home-section-icon\"><ha-icon icon=\"mdi:floor-plan\"></ha-icon></div>\n                <div class=\"home-section-copy\">\n                  <div class=\"home-section-title\">\${area.name}</div>\n                  <div class=\"home-section-description\">\${included\n                    ? this._t('settings.home_climate_area_included')\n                    : this._t('settings.home_climate_area_excluded')}\n                  </div>\n                </div>\n                <ha-switch\n                  .checked=\${included}\n                  @change=\${(event: Event) => this._toggleHomeClimateArea(area.area_id, (event.target as any).checked)}\n                ></ha-switch>\n              </div>\n            \`;\n          })}\n        </div>\n      </div>\n    \`;\n  }\n\n`;
  text = replaceOnce(text, insertBefore, helpers + insertBefore, 'home climate helpers');

  const oldItem = `              <div class=\"home-info-card-item \${enabled ? 'enabled' : 'disabled'}\">\n                <div class=\"home-section-icon\">\n                  <ha-icon icon=\${meta.icon}></ha-icon>\n                </div>\n                <div class=\"home-section-copy\">\n                  <div class=\"home-section-title\">\${this._t(meta.labelKey)}</div>\n                  <div class=\"home-section-description\">\${this._t(meta.descriptionKey)}</div>\n                </div>\n                <ha-switch\n                  .checked=\${enabled}\n                  @change=\${() => this._toggleHomeInformationCardEnabled(card)}\n                ></ha-switch>\n              </div>`;
  const newItem = `              <div class=\"home-info-card-item \${enabled ? 'enabled' : 'disabled'}\">\n                <div class=\"home-section-icon\">\n                  <ha-icon icon=\${meta.icon}></ha-icon>\n                </div>\n                <button\n                  class=\"home-info-card-open\"\n                  type=\"button\"\n                  ?disabled=\${card !== 'climate'}\n                  @click=\${() => { if (card === 'climate') this._homeSettingsDetail = 'climate'; }}\n                >\n                  <span class=\"home-section-copy\">\n                    <span class=\"home-section-title\">\${this._t(meta.labelKey)}</span>\n                    <span class=\"home-section-description\">\${this._t(meta.descriptionKey)}</span>\n                  </span>\n                  \${card === 'climate' ? html\`<ha-svg-icon .path=\${mdiChevronRight}></ha-svg-icon>\` : nothing}\n                </button>\n                <ha-switch\n                  .checked=\${enabled}\n                  @change=\${() => this._toggleHomeInformationCardEnabled(card)}\n                ></ha-switch>\n              </div>`;
  text = replaceOnce(text, oldItem, newItem, 'home information card row');

  // Add compact styles for the nested settings navigation.
  const cssMarker = '    .home-info-card-section {\n';
  const css = `    .home-settings-detail-card {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      padding: 14px;\n      margin-top: 16px;\n      border: 1px solid var(--divider-color);\n      border-radius: 12px;\n      background: var(--card-background-color);\n      color: var(--primary-text-color);\n      text-align: left;\n      cursor: pointer;\n    }\n\n    .home-settings-detail-card .home-section-copy { flex: 1; }\n    .home-settings-detail-chevron { width: 20px; height: 20px; }\n\n    .home-settings-back {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      margin: 0 0 16px;\n      padding: 8px 10px;\n      border: 0;\n      border-radius: 8px;\n      background: transparent;\n      color: var(--primary-text-color);\n      cursor: pointer;\n      font: inherit;\n    }\n\n    .home-settings-back ha-svg-icon { width: 20px; height: 20px; }\n\n    .home-info-card-open {\n      flex: 1;\n      min-width: 0;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 12px;\n      padding: 0;\n      border: 0;\n      background: transparent;\n      color: inherit;\n      text-align: left;\n      font: inherit;\n    }\n\n    .home-info-card-open:not(:disabled) { cursor: pointer; }\n    .home-info-card-open:disabled { opacity: 1; }\n    .home-info-card-open ha-svg-icon { width: 20px; height: 20px; flex: 0 0 auto; }\n\n`;
  text = replaceOnce(text, cssMarker, css + cssMarker, 'home settings nested styles');

  fs.writeFileSync(path, text);
}

// 3) House climate uses HA-assigned area sensors, with an optional per-area exclusion.
{
  const path = 'src/components/dwains-layout-card.ts';
  let text = fs.readFileSync(path, 'utf8');
  text = replaceRegex(
    text,
    /  private _getHouseClimateSummary\(\): HouseClimateSummary \{[\s\S]*?\n  \}\n\n  private _houseClimateMetric\(/,
    `  private _getHouseClimateSummary(): HouseClimateSummary {\n    const values: Record<HouseClimateMetric['kind'], Array<{ value: number; unit: string; entityId: string }>> = {\n      temperature: [],\n      humidity: [],\n    };\n    const excludedAreas = new Set(this.config?.settings?.home_climate_excluded_areas || []);\n\n    this._getVisibleSortedAreas().forEach(area => {\n      if (excludedAreas.has(area.area_id)) return;\n      const areaRegistry = this.hass?.areas?.[area.area_id] as any;\n\n      (['temperature', 'humidity'] as const).forEach((kind) => {\n        const entityId = kind === 'temperature'\n          ? areaRegistry?.temperature_entity_id\n          : areaRegistry?.humidity_entity_id;\n        if (!entityId) return;\n\n        const state = this.hass?.states?.[entityId];\n        if (!state || state.state === 'unavailable' || state.state === 'unknown') return;\n        const value = Number.parseFloat(state.state);\n        if (!Number.isFinite(value)) return;\n\n        values[kind].push({\n          value,\n          unit: String(state.attributes?.unit_of_measurement || (kind === 'temperature'\n            ? this.hass?.config?.unit_system?.temperature || '°C'\n            : '%')),\n          entityId,\n        });\n      });\n    });\n\n    const metrics: HouseClimateMetric[] = [];\n    const temperature = this._houseClimateMetric('temperature', values.temperature);\n    const humidity = this._houseClimateMetric('humidity', values.humidity);\n    if (temperature) metrics.push(temperature);\n    if (humidity) metrics.push(humidity);\n\n    return {\n      sensorCount: values.temperature.length + values.humidity.length,\n      metrics,\n    };\n  }\n\n  private _houseClimateMetric(`,
    'house climate summary'
  );
  fs.writeFileSync(path, text);
}

// 4) Localized strings. Other locales intentionally use English fallback wording for the new UI.
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

for (const locale of ['en', 'de', 'es', 'fr', 'nl', 'ru', 'zh-Hans', 'zh-Hant']) {
  const path = `src/i18n/locales/${locale}.ts`;
  let text = fs.readFileSync(path, 'utf8');
  const values = localeValues[locale] || localeValues.en;
  const lines = Object.entries(values).map(([key, value]) => `  '${key}': ${JSON.stringify(value)},`).join('\n') + '\n';
  const candidates = ['\n} as const satisfies TranslationDictionary;', '\n} satisfies TranslationDictionary;', '\n} as const;', '\n};'];
  const marker = candidates.find(candidate => text.includes(candidate));
  if (!marker) throw new Error(`Could not find locale end marker for ${locale}`);
  text = text.replace(marker, `\n${lines}${marker}`);
  fs.writeFileSync(path, text);
}

console.log('Refactored home climate settings into House information.');
