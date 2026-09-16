import fs from 'node:fs';

function replaceOnce(text, search, replacement, label) {
  const index = text.indexOf(search);
  if (index < 0) throw new Error(`Missing expected block: ${label}`);
  return text.slice(0, index) + replacement + text.slice(index + search.length);
}

// 1) Types
{
  const path = 'src/types/strategy.ts';
  let text = fs.readFileSync(path, 'utf8');
  text = replaceOnce(text,
`export interface AreaOptions {\n  card_size?: 'small' | 'large';\n`,
`export interface AreaClimateOptions {\n  /** Include this area's climate value in the house average. Defaults to true. */\n  include_in_house_average?: boolean;\n  /** Undefined uses the Home Assistant area sensor; an array enables a custom selection. */\n  temperature_entities?: string[];\n  /** Undefined uses the Home Assistant area sensor; an array enables a custom selection. */\n  humidity_entities?: string[];\n}\n\nexport interface AreaOptions {\n  card_size?: 'small' | 'large';\n  climate?: AreaClimateOptions;\n`, 'AreaOptions');
  fs.writeFileSync(path, text);
}

// 2) Area climate calculation
{
  const path = 'src/utils/area.ts';
  let text = fs.readFileSync(path, 'utf8');
  const old = `  // Check if area has specific temperature/humidity entities assigned\n  const areaRegistry = hass.areas[area.area_id];\n  if (areaRegistry) {\n    if ('temperature_entity_id' in areaRegistry) {\n      const tempEntityId = (areaRegistry as any).temperature_entity_id;\n      if (tempEntityId && hass.states[tempEntityId]) {\n        const tempState = hass.states[tempEntityId];\n        if (tempState.state !== 'unavailable' && tempState.state !== 'unknown') {\n          temperature = hass.formatEntityState(tempState);\n        }\n      }\n    }\n    if ('humidity_entity_id' in areaRegistry) {\n      const humidityEntityId = (areaRegistry as any).humidity_entity_id;\n      if (humidityEntityId && hass.states[humidityEntityId]) {\n        const humState = hass.states[humidityEntityId];\n        if (humState.state !== 'unavailable' && humState.state !== 'unknown') {\n          humidity = hass.formatEntityState(humState);\n        }\n      }\n    }\n  }\n`;
  const replacement = `  // Resolve temperature/humidity from the dashboard's area climate settings.\n  // Undefined custom arrays preserve the existing Home Assistant area sensor behaviour.\n  const areaRegistry = hass.areas[area.area_id] as any;\n  const climateOptions = config?.areas_options?.[area.area_id]?.climate || {};\n\n  const formatClimateSelection = (entityIds: string[] | undefined, registryEntityId: string | undefined): string | undefined => {\n    if (entityIds === undefined) {\n      const state = registryEntityId ? hass.states[registryEntityId] : undefined;\n      if (!state || state.state === 'unavailable' || state.state === 'unknown') return undefined;\n      return hass.formatEntityState(state);\n    }\n\n    const values = entityIds\n      .map((entityId) => hass.states[entityId])\n      .filter((state): state is HassEntity => Boolean(state && state.state !== 'unavailable' && state.state !== 'unknown'))\n      .map((state) => ({ value: Number(state.state), unit: String(state.attributes.unit_of_measurement || '') }))\n      .filter((entry) => Number.isFinite(entry.value));\n\n    if (!values.length) return undefined;\n    const average = values.reduce((sum, entry) => sum + entry.value, 0) / values.length;\n    const unit = values[0]?.unit || '';\n    return unit ? \`${'${average.toFixed(1)}'}\\u202F${'${unit}'}\` : average.toFixed(1);\n  };\n\n  temperature = formatClimateSelection(\n    climateOptions.temperature_entities,\n    areaRegistry?.temperature_entity_id\n  );\n  humidity = formatClimateSelection(\n    climateOptions.humidity_entities,\n    areaRegistry?.humidity_entity_id\n  );\n`;
  text = replaceOnce(text, old, replacement, 'area climate registry calculation');
  fs.writeFileSync(path, text);
}

// 3) Strategy editor UI + handlers
{
  const path = 'src/components/dwains-dashboard-strategy-editor.ts';
  let text = fs.readFileSync(path, 'utf8');

  const marker = `  private _renderAreaEditor() {\n`;
  const methods = `  private _getAreaClimateCandidates(areaId: string, kind: 'temperature' | 'humidity'): string[] {\n    if (!this.hass || !this._config) return [];\n    const deviceIds = new Set((this._config.devices || []).filter((device) => device.area_id === areaId).map((device) => device.device_id));\n    return (this._config.entities || [])\n      .filter((entity) => entity.area_id === areaId || (entity.device_id && deviceIds.has(entity.device_id)))\n      .map((entity) => entity.entity_id)\n      .filter((entityId) => {\n        const state = this.hass?.states?.[entityId];\n        return Boolean(state && entityId.startsWith('sensor.') && String(state.attributes?.device_class || '').toLowerCase() === kind);\n      })\n      .sort((a, b) => this._areaClimateEntityName(a).localeCompare(this._areaClimateEntityName(b), ddLocale(this.hass)));\n  }\n\n  private _areaClimateEntityName(entityId: string): string {\n    return String(this.hass?.states?.[entityId]?.attributes?.friendly_name || entityId);\n  }\n\n  private _setAreaClimateHouseAverage(enabled: boolean): void {\n    if (!this._config || !this._area) return;\n    const areaOptions = this._config.areas_options?.[this._area] || {};\n    this._fireConfigChanged({\n      ...this._config,\n      areas_options: {\n        ...this._config.areas_options,\n        [this._area]: {\n          ...areaOptions,\n          climate: { ...areaOptions.climate, include_in_house_average: enabled },\n        },\n      },\n    });\n  }\n\n  private _setAreaClimateMode(kind: 'temperature' | 'humidity', custom: boolean): void {\n    if (!this._config || !this._area) return;\n    const areaOptions = this._config.areas_options?.[this._area] || {};\n    const key = kind === 'temperature' ? 'temperature_entities' : 'humidity_entities';\n    const climate = { ...areaOptions.climate } as any;\n    if (custom) climate[key] = this._getAreaClimateCandidates(this._area, kind);\n    else delete climate[key];\n    this._fireConfigChanged({\n      ...this._config,\n      areas_options: { ...this._config.areas_options, [this._area]: { ...areaOptions, climate } },\n    });\n  }\n\n  private _toggleAreaClimateEntity(kind: 'temperature' | 'humidity', entityId: string, checked: boolean): void {\n    if (!this._config || !this._area) return;\n    const areaOptions = this._config.areas_options?.[this._area] || {};\n    const key = kind === 'temperature' ? 'temperature_entities' : 'humidity_entities';\n    const current = new Set<string>(((areaOptions.climate as any)?.[key] || []) as string[]);\n    checked ? current.add(entityId) : current.delete(entityId);\n    const climate = { ...areaOptions.climate, [key]: [...current] };\n    this._fireConfigChanged({\n      ...this._config,\n      areas_options: { ...this._config.areas_options, [this._area]: { ...areaOptions, climate } },\n    });\n  }\n\n  private _renderAreaClimateSettings(areaId: string) {\n    if (!this._config) return nothing;\n    const areaOptions = this._config.areas_options?.[areaId] || {};\n    const climate = areaOptions.climate || {};\n    const includeInHouseAverage = climate.include_in_house_average !== false;\n\n    const renderMetric = (kind: 'temperature' | 'humidity') => {\n      const key = kind === 'temperature' ? 'temperature_entities' : 'humidity_entities';\n      const customSelection = (climate as any)[key] as string[] | undefined;\n      const custom = customSelection !== undefined;\n      const selected = new Set(customSelection || []);\n      const candidates = this._getAreaClimateCandidates(areaId, kind);\n      const label = kind === 'temperature' ? this._t('home.temperature') : this._t('home.humidity');\n\n      return html\`\n        <div class="area-climate-metric">\n          <div class="area-climate-metric-title">${'${label}'}</div>\n          <div class="area-order-modes area-climate-modes">\n            <button class="area-order-mode ${'${!custom ? \'selected\' : \'\'}'}" type="button" @click=${'${() => this._setAreaClimateMode(kind, false)}'}>\n              <ha-icon icon="mdi:home-assistant"></ha-icon>\n              <span><strong>${'${this._t(\'settings.climate_home_assistant\')}'}</strong><small>${'${this._t(\'settings.climate_home_assistant_description\')}'}</small></span>\n            </button>\n            <button class="area-order-mode ${'${custom ? \'selected\' : \'\'}'}" type="button" @click=${'${() => this._setAreaClimateMode(kind, true)}'}>\n              <ha-icon icon="mdi:tune-variant"></ha-icon>\n              <span><strong>${'${this._t(\'settings.climate_custom_selection\')}'}</strong><small>${'${this._t(\'settings.climate_custom_selection_description\')}'}</small></span>\n            </button>\n          </div>\n          ${'${custom ? html`'}\n            <div class="area-climate-sensors">\n              ${'${candidates.length ? candidates.map((entityId) => html`'}\n                <label class="area-climate-sensor">\n                  <ha-checkbox\n                    .checked=${'${selected.has(entityId)}'}\n                    @change=${'${(event: Event) => this._toggleAreaClimateEntity(kind, entityId, (event.target as any).checked)}'}\n                  ></ha-checkbox>\n                  <span><strong>${'${this._areaClimateEntityName(entityId)}'}</strong><small>${'${entityId}'}</small></span>\n                </label>\n              ${'${`) : html`<div class="area-climate-empty">${this._t(\'settings.climate_no_sensors\')}</div>`}'}\n            </div>\n          ${'${` : nothing}'}\n        </div>\n      \`;\n    };\n\n    return html\`\n      <section class="area-entity-layout-settings area-climate-settings">\n        <div class="area-entity-layout-copy">\n          <strong>${'${this._t(\'settings.area_climate_title\')}'}</strong>\n          <span>${'${this._t(\'settings.area_climate_description\')}'}</span>\n        </div>\n        <div class="area-climate-house-average">\n          <div>\n            <strong>${'${this._t(\'settings.climate_include_house_average\')}'}</strong>\n            <small>${'${this._t(\'settings.climate_include_house_average_description\')}'}</small>\n          </div>\n          <ha-switch .checked=${'${includeInHouseAverage}'} @change=${'${(event: Event) => this._setAreaClimateHouseAverage((event.target as any).checked)}'}></ha-switch>\n        </div>\n        ${'${renderMetric(\'temperature\')}'}\n        ${'${renderMetric(\'humidity\')}'}\n      </section>\n    \`;\n  }\n\n`;
  text = replaceOnce(text, marker, methods + marker, 'renderAreaEditor marker');

  text = replaceOnce(text,
`        <section class="area-entity-layout-settings">\n`,
`        ${'${this._renderAreaClimateSettings(this._area)}'}\n\n        <section class="area-entity-layout-settings">\n`, 'area entity layout section');

  // Add compact styles before the existing area entity layout style rule.
  const cssMarker = `    .area-entity-layout-settings {\n`;
  const css = `    .area-climate-settings {\n      display: grid;\n      gap: 18px;\n    }\n\n    .area-climate-house-average {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 20px;\n      padding: 12px 14px;\n      border: 1px solid var(--divider-color);\n      border-radius: 10px;\n    }\n\n    .area-climate-house-average > div,\n    .area-climate-sensor > span {\n      display: flex;\n      flex-direction: column;\n      gap: 3px;\n    }\n\n    .area-climate-house-average small,\n    .area-climate-sensor small,\n    .area-climate-empty {\n      color: var(--secondary-text-color);\n      font-size: 12px;\n      font-weight: 400;\n    }\n\n    .area-climate-metric {\n      display: grid;\n      gap: 10px;\n    }\n\n    .area-climate-metric-title {\n      font-weight: 600;\n    }\n\n    .area-climate-modes {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .area-climate-sensors {\n      display: grid;\n      gap: 4px;\n      padding: 6px 10px;\n      border: 1px solid var(--divider-color);\n      border-radius: 10px;\n    }\n\n    .area-climate-sensor {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 6px 0;\n      cursor: pointer;\n    }\n\n`;
  text = replaceOnce(text, cssMarker, css + cssMarker, 'area entity layout css');
  fs.writeFileSync(path, text);
}

// 4) House average: use one value per area, respect the area toggle, and reuse configured sensors.
{
  const path = 'src/components/dwains-layout-card.ts';
  let text = fs.readFileSync(path, 'utf8');
  const start = text.indexOf(`  private _getHouseClimateSummary(): HouseClimateSummary {`);
  const end = text.indexOf(`  private _houseClimateMetric(`, start);
  if (start < 0 || end < 0) throw new Error('Could not locate house climate summary');
  const replacement = `  private _getHouseClimateSummary(): HouseClimateSummary {\n    const values: Record<HouseClimateMetric['kind'], Array<{ value: number; unit: string; entityId: string }>> = {\n      temperature: [],\n      humidity: [],\n    };\n    const contributingEntityIds = new Set<string>();\n\n    this._getVisibleSortedAreas().forEach(area => {\n      const climateOptions = this.config?.areas_options?.[area.area_id]?.climate;\n      if (climateOptions?.include_in_house_average === false) return;\n\n      const areaEntities = this._getFilteredAreaEntities(area.area_id);\n      const areaRegistry = this.hass?.areas?.[area.area_id] as any;\n\n      (['temperature', 'humidity'] as const).forEach((kind) => {\n        const configured = kind === 'temperature'\n          ? climateOptions?.temperature_entities\n          : climateOptions?.humidity_entities;\n        const registryEntityId = kind === 'temperature'\n          ? areaRegistry?.temperature_entity_id\n          : areaRegistry?.humidity_entity_id;\n\n        let entityIds: string[];\n        if (configured !== undefined) {\n          entityIds = configured;\n        } else if (registryEntityId) {\n          entityIds = [registryEntityId];\n        } else {\n          entityIds = areaEntities\n            .map((entity) => entity.entity_id)\n            .filter((entityId) => {\n              const state = this.hass?.states?.[entityId];\n              return Boolean(\n                state &&\n                entityId.startsWith('sensor.') &&\n                String(state.attributes?.device_class || '').toLowerCase() === kind\n              );\n            });\n        }\n\n        const valid = entityIds\n          .map((entityId) => ({ entityId, state: this.hass?.states?.[entityId] }))\n          .filter(({ state }) => Boolean(state && state.state !== 'unavailable' && state.state !== 'unknown'))\n          .map(({ entityId, state }) => ({\n            entityId,\n            value: Number(state!.state),\n            unit: String(state!.attributes?.unit_of_measurement || (kind === 'temperature' ? '°C' : '%')),\n          }))\n          .filter((entry) => Number.isFinite(entry.value));\n\n        if (!valid.length) return;\n        const average = valid.reduce((sum, entry) => sum + entry.value, 0) / valid.length;\n        valid.forEach((entry) => contributingEntityIds.add(entry.entityId));\n        values[kind].push({ value: average, unit: valid[0]!.unit, entityId: valid[0]!.entityId });\n      });\n    });\n\n    const metrics: HouseClimateMetric[] = [];\n    const temperature = this._houseClimateMetric('temperature', values.temperature);\n    const humidity = this._houseClimateMetric('humidity', values.humidity);\n    if (temperature) metrics.push(temperature);\n    if (humidity) metrics.push(humidity);\n\n    return {\n      sensorCount: contributingEntityIds.size,\n      metrics,\n    };\n  }\n\n`;
  text = text.slice(0, start) + replacement + text.slice(end);
  fs.writeFileSync(path, text);
}

// 5) English and German locale strings
for (const [path, after, additions] of [
  ['src/i18n/locales/en.ts', `  'settings.area_entity_layout_title':`, [
    `  'settings.area_climate_title': 'Room climate',`,
    `  'settings.area_climate_description': 'Choose which sensors represent this area and whether the area contributes to the house average.',`,
    `  'settings.climate_include_house_average': 'Include in house average',`,
    `  'settings.climate_include_house_average_description': 'Uses this area as one equally weighted value for the house temperature and humidity averages.',`,
    `  'settings.climate_home_assistant': 'Home Assistant',`,
    `  'settings.climate_home_assistant_description': 'Use the temperature or humidity sensor assigned to this area in Home Assistant.',`,
    `  'settings.climate_custom_selection': 'Custom selection',`,
    `  'settings.climate_custom_selection_description': 'Choose one or more sensors from this area and average them.',`,
    `  'settings.climate_no_sensors': 'No matching sensors found in this area.',`,
  ]],
  ['src/i18n/locales/de.ts', `  'settings.area_entity_layout_title':`, [
    `  'settings.area_climate_title': 'Raumklima',`,
    `  'settings.area_climate_description': 'Lege fest, welche Sensoren diesen Bereich repräsentieren und ob er in den Hausdurchschnitt einfließt.',`,
    `  'settings.climate_include_house_average': 'In Hausdurchschnitt einbeziehen',`,
    `  'settings.climate_include_house_average_description': 'Dieser Bereich zählt jeweils einmal für die durchschnittliche Temperatur und Luftfeuchtigkeit des Hauses.',`,
    `  'settings.climate_home_assistant': 'Home Assistant',`,
    `  'settings.climate_home_assistant_description': 'Verwendet den in Home Assistant diesem Bereich zugewiesenen Temperatur- bzw. Luftfeuchtigkeitssensor.',`,
    `  'settings.climate_custom_selection': 'Eigene Auswahl',`,
    `  'settings.climate_custom_selection_description': 'Wähle einen oder mehrere Sensoren dieses Bereichs aus. Mehrere Werte werden gemittelt.',`,
    `  'settings.climate_no_sensors': 'Keine passenden Sensoren in diesem Bereich gefunden.',`,
  ]],
]) {
  let text = fs.readFileSync(path, 'utf8');
  const pos = text.indexOf(after);
  if (pos < 0) throw new Error(`Missing locale anchor in ${path}`);
  const lineStart = text.lastIndexOf('\n', pos) + 1;
  text = text.slice(0, lineStart) + additions.join('\n') + '\n' + text.slice(lineStart);
  fs.writeFileSync(path, text);
}

console.log('Applied room climate sensor selection feature.');
