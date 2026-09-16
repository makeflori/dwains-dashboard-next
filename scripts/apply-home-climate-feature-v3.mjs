import fs from 'node:fs';

function replaceOnce(text, search, replacement, label) {
  const index = text.indexOf(search);
  if (index < 0) throw new Error(`Missing expected block: ${label}`);
  return text.slice(0, index) + replacement + text.slice(index + search.length);
}

function lines(items) {
  return items.join('\n') + '\n';
}

// Types
{
  const path = 'src/types/strategy.ts';
  let text = fs.readFileSync(path, 'utf8');
  text = replaceOnce(
    text,
    "export interface AreaOptions {\n  card_size?: 'small' | 'large';\n",
    lines([
      'export interface AreaClimateOptions {',
      '  /** Include this area in the house climate average. Defaults to true. */',
      '  include_in_house_average?: boolean;',
      '  /** Undefined uses the Home Assistant area sensor; an array enables custom selection. */',
      '  temperature_entities?: string[];',
      '  /** Undefined uses the Home Assistant area sensor; an array enables custom selection. */',
      '  humidity_entities?: string[];',
      '}',
      '',
      'export interface AreaOptions {',
      "  card_size?: 'small' | 'large';",
      '  climate?: AreaClimateOptions;',
    ]),
    'AreaOptions'
  );
  fs.writeFileSync(path, text);
}

// Area climate value calculation
{
  const path = 'src/utils/area.ts';
  let text = fs.readFileSync(path, 'utf8');

  text = replaceOnce(
    text,
    "  const cacheKey = `${area.area_id}-${areaEntities.length}-${entityStatesHash.substring(0, 50)}`;",
    "  const climateOptionsHash = JSON.stringify(config?.areas_options?.[area.area_id]?.climate || {});\n  const cacheKey = `${area.area_id}-${areaEntities.length}-${entityStatesHash.substring(0, 50)}-${climateOptionsHash}`;",
    'area cache key'
  );

  const oldBlock = lines([
    '  // Check if area has specific temperature/humidity entities assigned',
    '  const areaRegistry = hass.areas[area.area_id];',
    '  if (areaRegistry) {',
    "    if ('temperature_entity_id' in areaRegistry) {",
    '      const tempEntityId = (areaRegistry as any).temperature_entity_id;',
    '      if (tempEntityId && hass.states[tempEntityId]) {',
    '        const tempState = hass.states[tempEntityId];',
    "        if (tempState.state !== 'unavailable' && tempState.state !== 'unknown') {",
    '          temperature = hass.formatEntityState(tempState);',
    '        }',
    '      }',
    '    }',
    "    if ('humidity_entity_id' in areaRegistry) {",
    '      const humidityEntityId = (areaRegistry as any).humidity_entity_id;',
    '      if (humidityEntityId && hass.states[humidityEntityId]) {',
    '        const humState = hass.states[humidityEntityId];',
    "        if (humState.state !== 'unavailable' && humState.state !== 'unknown') {",
    '          humidity = hass.formatEntityState(humState);',
    '        }',
    '      }',
    '    }',
    '  }',
  ]);

  const newBlock = lines([
    "  // Resolve room climate from custom dashboard settings when configured,",
    "  // otherwise preserve Home Assistant's assigned area sensor behaviour.",
    '  const areaRegistry = hass.areas[area.area_id] as any;',
    '  const climateOptions = config?.areas_options?.[area.area_id]?.climate || {};',
    '',
    '  const formatClimateSelection = (entityIds: string[] | undefined, registryEntityId: string | undefined): string | undefined => {',
    '    if (entityIds === undefined) {',
    '      const state = registryEntityId ? hass.states[registryEntityId] : undefined;',
    "      if (!state || state.state === 'unavailable' || state.state === 'unknown') return undefined;",
    '      return hass.formatEntityState(state);',
    '    }',
    '',
    '    const values = entityIds',
    '      .map((entityId) => hass.states[entityId])',
    "      .filter((state): state is HassEntity => Boolean(state && state.state !== 'unavailable' && state.state !== 'unknown'))",
    "      .map((state) => ({ value: Number(state.state), unit: String(state.attributes.unit_of_measurement || '') }))",
    '      .filter((entry) => Number.isFinite(entry.value));',
    '',
    '    if (!values.length) return undefined;',
    '    const average = values.reduce((sum, entry) => sum + entry.value, 0) / values.length;',
    "    const unit = values[0]?.unit || '';",
    '    return unit ? `${average.toFixed(1)}\u202F${unit}` : average.toFixed(1);',
    '  };',
    '',
    '  temperature = formatClimateSelection(',
    '    climateOptions.temperature_entities,',
    '    areaRegistry?.temperature_entity_id',
    '  );',
    '  humidity = formatClimateSelection(',
    '    climateOptions.humidity_entities,',
    '    areaRegistry?.humidity_entity_id',
    '  );',
  ]);

  text = replaceOnce(text, oldBlock, newBlock, 'area climate calculation');
  fs.writeFileSync(path, text);
}

// Strategy editor UI
{
  const path = 'src/components/dwains-dashboard-strategy-editor.ts';
  let text = fs.readFileSync(path, 'utf8');
  const marker = '  private _renderAreaEditor() {\n';

  const methods = lines([
    "  private _getAreaClimateCandidates(areaId: string, kind: 'temperature' | 'humidity'): string[] {",
    '    if (!this.hass || !this._config) return [];',
    '    const deviceIds = new Set(',
    '      (this._config.devices || []).filter((device) => device.area_id === areaId).map((device) => device.device_id)',
    '    );',
    '    return (this._config.entities || [])',
    '      .filter((entity) => entity.area_id === areaId || Boolean(entity.device_id && deviceIds.has(entity.device_id)))',
    '      .map((entity) => entity.entity_id)',
    '      .filter((entityId) => {',
    '        const state = this.hass?.states?.[entityId];',
    "        return Boolean(state && entityId.startsWith('sensor.') && String(state.attributes?.device_class || '').toLowerCase() === kind);",
    '      })',
    '      .sort((a, b) => this._areaClimateEntityName(a).localeCompare(this._areaClimateEntityName(b)));',
    '  }',
    '',
    '  private _areaClimateEntityName(entityId: string): string {',
    "    return String(this.hass?.states?.[entityId]?.attributes?.friendly_name || entityId);",
    '  }',
    '',
    '  private _setAreaClimateHouseAverage(enabled: boolean): void {',
    '    if (!this._config || !this._area) return;',
    '    const areaOptions = this._config.areas_options?.[this._area] || {};',
    '    this._fireConfigChanged({',
    '      ...this._config,',
    '      areas_options: {',
    '        ...this._config.areas_options,',
    '        [this._area]: {',
    '          ...areaOptions,',
    '          climate: { ...areaOptions.climate, include_in_house_average: enabled },',
    '        },',
    '      },',
    '    });',
    '  }',
    '',
    "  private _setAreaClimateMode(kind: 'temperature' | 'humidity', custom: boolean): void {",
    '    if (!this._config || !this._area) return;',
    '    const areaOptions = this._config.areas_options?.[this._area] || {};',
    "    const key = kind === 'temperature' ? 'temperature_entities' : 'humidity_entities';",
    '    const climate = { ...areaOptions.climate } as any;',
    '    if (custom) climate[key] = this._getAreaClimateCandidates(this._area, kind);',
    '    else delete climate[key];',
    '    this._fireConfigChanged({',
    '      ...this._config,',
    '      areas_options: { ...this._config.areas_options, [this._area]: { ...areaOptions, climate } },',
    '    });',
    '  }',
    '',
    "  private _toggleAreaClimateEntity(kind: 'temperature' | 'humidity', entityId: string, checked: boolean): void {",
    '    if (!this._config || !this._area) return;',
    '    const areaOptions = this._config.areas_options?.[this._area] || {};',
    "    const key = kind === 'temperature' ? 'temperature_entities' : 'humidity_entities';",
    '    const current = new Set<string>(((areaOptions.climate as any)?.[key] || []) as string[]);',
    '    checked ? current.add(entityId) : current.delete(entityId);',
    '    const climate = { ...areaOptions.climate, [key]: [...current] };',
    '    this._fireConfigChanged({',
    '      ...this._config,',
    '      areas_options: { ...this._config.areas_options, [this._area]: { ...areaOptions, climate } },',
    '    });',
    '  }',
    '',
    "  private _renderAreaClimateSensorList(kind: 'temperature' | 'humidity', candidates: string[], selected: Set<string>) {",
    '    if (!candidates.length) {',
    "      return html`<div class=\"area-climate-empty\">${this._t('settings.climate_no_sensors')}</div>`;",
    '    }',
    '    return html`',
    '      <div class="area-climate-sensors">',
    '        ${candidates.map((entityId) => html`',
    '          <label class="area-climate-sensor">',
    '            <ha-checkbox',
    '              .checked=${selected.has(entityId)}',
    '              @change=${(event: Event) => this._toggleAreaClimateEntity(kind, entityId, (event.target as any).checked)}',
    '            ></ha-checkbox>',
    '            <span>',
    '              <strong>${this._areaClimateEntityName(entityId)}</strong>',
    '              <small>${entityId}</small>',
    '            </span>',
    '          </label>',
    '        `)}',
    '      </div>',
    '    `;',
    '  }',
    '',
    "  private _renderAreaClimateMetric(areaId: string, kind: 'temperature' | 'humidity') {",
    '    if (!this._config) return nothing;',
    '    const areaOptions = this._config.areas_options?.[areaId] || {};',
    '    const climate = areaOptions.climate || {};',
    "    const key = kind === 'temperature' ? 'temperature_entities' : 'humidity_entities';",
    '    const customSelection = (climate as any)[key] as string[] | undefined;',
    '    const custom = customSelection !== undefined;',
    '    const selected = new Set(customSelection || []);',
    '    const candidates = this._getAreaClimateCandidates(areaId, kind);',
    "    const label = kind === 'temperature' ? this._t('home.temperature') : this._t('home.humidity');",
    '',
    '    return html`',
    '      <div class="area-climate-metric">',
    '        <div class="area-climate-metric-title">${label}</div>',
    '        <div class="area-order-modes area-climate-modes">',
    '          <button',
    "            class=\"area-order-mode ${!custom ? 'selected' : ''}\"",
    '            type="button"',
    '            @click=${() => this._setAreaClimateMode(kind, false)}',
    '          >',
    '            <ha-icon icon="mdi:home-assistant"></ha-icon>',
    '            <span>',
    "              <strong>${this._t('settings.climate_home_assistant')}</strong>",
    "              <small>${this._t('settings.climate_home_assistant_description')}</small>",
    '            </span>',
    '          </button>',
    '          <button',
    "            class=\"area-order-mode ${custom ? 'selected' : ''}\"",
    '            type="button"',
    '            @click=${() => this._setAreaClimateMode(kind, true)}',
    '          >',
    '            <ha-icon icon="mdi:tune-variant"></ha-icon>',
    '            <span>',
    "              <strong>${this._t('settings.climate_custom_selection')}</strong>",
    "              <small>${this._t('settings.climate_custom_selection_description')}</small>",
    '            </span>',
    '          </button>',
    '        </div>',
    '        ${custom ? this._renderAreaClimateSensorList(kind, candidates, selected) : nothing}',
    '      </div>',
    '    `;',
    '  }',
    '',
    '  private _renderAreaClimateSettings(areaId: string) {',
    '    if (!this._config) return nothing;',
    '    const areaOptions = this._config.areas_options?.[areaId] || {};',
    '    const climate = areaOptions.climate || {};',
    '    const includeInHouseAverage = climate.include_in_house_average !== false;',
    '',
    '    return html`',
    '      <section class="area-entity-layout-settings area-climate-settings">',
    '        <div class="area-entity-layout-copy">',
    "          <strong>${this._t('settings.area_climate_title')}</strong>",
    "          <span>${this._t('settings.area_climate_description')}</span>",
    '        </div>',
    '        <div class="area-climate-house-average">',
    '          <div>',
    "            <strong>${this._t('settings.climate_include_house_average')}</strong>",
    "            <small>${this._t('settings.climate_include_house_average_description')}</small>",
    '          </div>',
    '          <ha-switch',
    '            .checked=${includeInHouseAverage}',
    '            @change=${(event: Event) => this._setAreaClimateHouseAverage((event.target as any).checked)}',
    '          ></ha-switch>',
    '        </div>',
    "        ${this._renderAreaClimateMetric(areaId, 'temperature')}",
    "        ${this._renderAreaClimateMetric(areaId, 'humidity')}",
    '      </section>',
    '    `;',
    '  }',
    '',
  ]);

  text = replaceOnce(text, marker, methods + marker, 'area editor marker');
  text = replaceOnce(
    text,
    '        <section class="area-entity-layout-settings">\n',
    '        ${this._renderAreaClimateSettings(this._area!)}\n\n        <section class="area-entity-layout-settings">\n',
    'entity layout section'
  );

  const cssMarker = '    .area-entity-layout-settings {\n';
  const css = lines([
    '    .area-climate-settings {',
    '      display: grid;',
    '      gap: 18px;',
    '    }',
    '',
    '    .area-climate-house-average {',
    '      display: flex;',
    '      align-items: center;',
    '      justify-content: space-between;',
    '      gap: 20px;',
    '      padding: 12px 14px;',
    '      border: 1px solid var(--divider-color);',
    '      border-radius: 10px;',
    '    }',
    '',
    '    .area-climate-house-average > div,',
    '    .area-climate-sensor > span {',
    '      display: flex;',
    '      flex-direction: column;',
    '      gap: 3px;',
    '    }',
    '',
    '    .area-climate-house-average small,',
    '    .area-climate-sensor small,',
    '    .area-climate-empty {',
    '      color: var(--secondary-text-color);',
    '      font-size: 12px;',
    '      font-weight: 400;',
    '    }',
    '',
    '    .area-climate-metric {',
    '      display: grid;',
    '      gap: 10px;',
    '    }',
    '',
    '    .area-climate-metric-title {',
    '      font-weight: 600;',
    '    }',
    '',
    '    .area-climate-modes {',
    '      grid-template-columns: repeat(2, minmax(0, 1fr));',
    '    }',
    '',
    '    .area-climate-sensors {',
    '      display: grid;',
    '      gap: 4px;',
    '      padding: 6px 10px;',
    '      border: 1px solid var(--divider-color);',
    '      border-radius: 10px;',
    '    }',
    '',
    '    .area-climate-sensor {',
    '      display: flex;',
    '      align-items: center;',
    '      gap: 10px;',
    '      padding: 6px 0;',
    '      cursor: pointer;',
    '    }',
    '',
  ]);
  text = replaceOnce(text, cssMarker, css + cssMarker, 'area editor css');
  fs.writeFileSync(path, text);
}

// House climate: one equally weighted value per area
{
  const path = 'src/components/dwains-layout-card.ts';
  let text = fs.readFileSync(path, 'utf8');
  const start = text.indexOf('  private _getHouseClimateSummary(): HouseClimateSummary {');
  const end = text.indexOf('  private _houseClimateMetric(', start);
  if (start < 0 || end < 0) throw new Error('Could not locate house climate summary');

  const method = lines([
    '  private _getHouseClimateSummary(): HouseClimateSummary {',
    "    const values: Record<HouseClimateMetric['kind'], Array<{ value: number; unit: string; entityIds: string[] }>> = {",
    '      temperature: [],',
    '      humidity: [],',
    '    };',
    '    const contributingEntityIds = new Set<string>();',
    '',
    '    this._getVisibleSortedAreas().forEach(area => {',
    '      const climateOptions = this.config?.areas_options?.[area.area_id]?.climate;',
    '      if (climateOptions?.include_in_house_average === false) return;',
    '',
    '      const areaEntities = this._getFilteredAreaEntities(area.area_id);',
    '      const areaRegistry = this.hass?.areas?.[area.area_id] as any;',
    '',
    "      (['temperature', 'humidity'] as const).forEach((kind) => {",
    "        const configured = kind === 'temperature' ? climateOptions?.temperature_entities : climateOptions?.humidity_entities;",
    "        const registryEntityId = kind === 'temperature' ? areaRegistry?.temperature_entity_id : areaRegistry?.humidity_entity_id;",
    '',
    '        let entityIds: string[];',
    '        if (configured !== undefined) {',
    '          entityIds = configured;',
    '        } else if (registryEntityId) {',
    '          entityIds = [registryEntityId];',
    '        } else {',
    '          entityIds = areaEntities',
    '            .map((entity) => entity.entity_id)',
    '            .filter((entityId) => {',
    '              const state = this.hass?.states?.[entityId];',
    '              return Boolean(',
    '                state &&',
    "                entityId.startsWith('sensor.') &&",
    "                String(state.attributes?.device_class || '').toLowerCase() === kind",
    '              );',
    '            });',
    '        }',
    '',
    '        const valid = entityIds',
    '          .map((entityId) => ({ entityId, state: this.hass?.states?.[entityId] }))',
    "          .filter(({ state }) => Boolean(state && state.state !== 'unavailable' && state.state !== 'unknown'))",
    '          .map(({ entityId, state }) => ({',
    '            entityId,',
    '            value: Number(state!.state),',
    "            unit: String(state!.attributes?.unit_of_measurement || (kind === 'temperature' ? '°C' : '%')),",
    '          }))',
    '          .filter((entry) => Number.isFinite(entry.value));',
    '',
    '        if (!valid.length) return;',
    '        const average = valid.reduce((sum, entry) => sum + entry.value, 0) / valid.length;',
    '        valid.forEach((entry) => contributingEntityIds.add(entry.entityId));',
    '        values[kind].push({',
    '          value: average,',
    '          unit: valid[0]!.unit,',
    '          entityIds: valid.map((entry) => entry.entityId),',
    '        });',
    '      });',
    '    });',
    '',
    '    const metrics: HouseClimateMetric[] = [];',
    "    const temperature = this._houseClimateMetric('temperature', values.temperature);",
    "    const humidity = this._houseClimateMetric('humidity', values.humidity);",
    '    if (temperature) metrics.push(temperature);',
    '    if (humidity) metrics.push(humidity);',
    '',
    '    return {',
    '      sensorCount: contributingEntityIds.size,',
    '      metrics,',
    '    };',
    '  }',
    '',
  ]);
  text = text.slice(0, start) + method + text.slice(end);

  text = replaceOnce(
    text,
    "    values: Array<{ value: number; unit: string; entityId: string }>",
    "    values: Array<{ value: number; unit: string; entityIds: string[] }>",
    'house climate metric value type'
  );
  text = replaceOnce(
    text,
    '      entityIds: values.map(item => item.entityId),',
    '      entityIds: [...new Set(values.flatMap(item => item.entityIds))],',
    'house climate metric entity ids'
  );
  fs.writeFileSync(path, text);
}

// Locale strings
for (const [path, anchor, additions] of [
  ['src/i18n/locales/en.ts', "  'settings.area_entity_layout_title':", [
    "  'settings.area_climate_title': 'Room climate',",
    "  'settings.area_climate_description': 'Choose which sensors represent this area and whether the area contributes to the house average.',",
    "  'settings.climate_include_house_average': 'Include in house average',",
    "  'settings.climate_include_house_average_description': 'Uses this area as one equally weighted value for the house temperature and humidity averages.',",
    "  'settings.climate_home_assistant': 'Home Assistant',",
    "  'settings.climate_home_assistant_description': 'Use the temperature or humidity sensor assigned to this area in Home Assistant.',",
    "  'settings.climate_custom_selection': 'Custom selection',",
    "  'settings.climate_custom_selection_description': 'Choose one or more sensors from this area and average them.',",
    "  'settings.climate_no_sensors': 'No matching sensors found in this area.',",
  ]],
  ['src/i18n/locales/de.ts', "  'settings.area_entity_layout_title':", [
    "  'settings.area_climate_title': 'Raumklima',",
    "  'settings.area_climate_description': 'Lege fest, welche Sensoren diesen Bereich repräsentieren und ob er in den Hausdurchschnitt einfließt.',",
    "  'settings.climate_include_house_average': 'In Hausdurchschnitt einbeziehen',",
    "  'settings.climate_include_house_average_description': 'Dieser Bereich zählt jeweils einmal für die durchschnittliche Temperatur und Luftfeuchtigkeit des Hauses.',",
    "  'settings.climate_home_assistant': 'Home Assistant',",
    "  'settings.climate_home_assistant_description': 'Verwendet den in Home Assistant diesem Bereich zugewiesenen Temperatur- bzw. Luftfeuchtigkeitssensor.',",
    "  'settings.climate_custom_selection': 'Eigene Auswahl',",
    "  'settings.climate_custom_selection_description': 'Wähle einen oder mehrere Sensoren dieses Bereichs aus. Mehrere Werte werden gemittelt.',",
    "  'settings.climate_no_sensors': 'Keine passenden Sensoren in diesem Bereich gefunden.',",
  ]],
]) {
  let text = fs.readFileSync(path, 'utf8');
  const index = text.indexOf(anchor);
  if (index < 0) throw new Error(`Missing locale anchor in ${path}`);
  const lineStart = text.lastIndexOf('\n', index) + 1;
  text = text.slice(0, lineStart) + additions.join('\n') + '\n' + text.slice(lineStart);
  fs.writeFileSync(path, text);
}

console.log('Applied room climate sensor selection feature v3.');
