import fs from 'node:fs';

const path = 'src/components/dwains-dashboard-strategy-editor.ts';
let text = fs.readFileSync(path, 'utf8');
const start = text.indexOf(`  private _renderAreaClimateSettings(areaId: string) {`);
const end = text.indexOf(`  private _renderAreaEditor() {`, start);
if (start < 0 || end < 0) throw new Error('Could not locate generated room climate renderer');

const method = String.raw`  private _renderAreaClimateSensorList(
    kind: 'temperature' | 'humidity',
    candidates: string[],
    selected: Set<string>
  ) {
    if (!candidates.length) {
      return html\`<div class="area-climate-empty">\${this._t('settings.climate_no_sensors')}</div>\`;
    }

    return html\`
      <div class="area-climate-sensors">
        \${candidates.map((entityId) => html\`
          <label class="area-climate-sensor">
            <ha-checkbox
              .checked=\${selected.has(entityId)}
              @change=\${(event: Event) => this._toggleAreaClimateEntity(kind, entityId, (event.target as any).checked)}
            ></ha-checkbox>
            <span>
              <strong>\${this._areaClimateEntityName(entityId)}</strong>
              <small>\${entityId}</small>
            </span>
          </label>
        \`)}
      </div>
    \`;
  }

  private _renderAreaClimateMetric(areaId: string, kind: 'temperature' | 'humidity') {
    if (!this._config) return nothing;
    const areaOptions = this._config.areas_options?.[areaId] || {};
    const climate = areaOptions.climate || {};
    const key = kind === 'temperature' ? 'temperature_entities' : 'humidity_entities';
    const customSelection = (climate as any)[key] as string[] | undefined;
    const custom = customSelection !== undefined;
    const selected = new Set(customSelection || []);
    const candidates = this._getAreaClimateCandidates(areaId, kind);
    const label = kind === 'temperature' ? this._t('home.temperature') : this._t('home.humidity');

    return html\`
      <div class="area-climate-metric">
        <div class="area-climate-metric-title">\${label}</div>
        <div class="area-order-modes area-climate-modes">
          <button
            class="area-order-mode \${!custom ? 'selected' : ''}"
            type="button"
            @click=\${() => this._setAreaClimateMode(kind, false)}
          >
            <ha-icon icon="mdi:home-assistant"></ha-icon>
            <span>
              <strong>\${this._t('settings.climate_home_assistant')}</strong>
              <small>\${this._t('settings.climate_home_assistant_description')}</small>
            </span>
          </button>
          <button
            class="area-order-mode \${custom ? 'selected' : ''}"
            type="button"
            @click=\${() => this._setAreaClimateMode(kind, true)}
          >
            <ha-icon icon="mdi:tune-variant"></ha-icon>
            <span>
              <strong>\${this._t('settings.climate_custom_selection')}</strong>
              <small>\${this._t('settings.climate_custom_selection_description')}</small>
            </span>
          </button>
        </div>
        \${custom ? this._renderAreaClimateSensorList(kind, candidates, selected) : nothing}
      </div>
    \`;
  }

  private _renderAreaClimateSettings(areaId: string) {
    if (!this._config) return nothing;
    const areaOptions = this._config.areas_options?.[areaId] || {};
    const climate = areaOptions.climate || {};
    const includeInHouseAverage = climate.include_in_house_average !== false;

    return html\`
      <section class="area-entity-layout-settings area-climate-settings">
        <div class="area-entity-layout-copy">
          <strong>\${this._t('settings.area_climate_title')}</strong>
          <span>\${this._t('settings.area_climate_description')}</span>
        </div>
        <div class="area-climate-house-average">
          <div>
            <strong>\${this._t('settings.climate_include_house_average')}</strong>
            <small>\${this._t('settings.climate_include_house_average_description')}</small>
          </div>
          <ha-switch
            .checked=\${includeInHouseAverage}
            @change=\${(event: Event) => this._setAreaClimateHouseAverage((event.target as any).checked)}
          ></ha-switch>
        </div>
        \${this._renderAreaClimateMetric(areaId, 'temperature')}
        \${this._renderAreaClimateMetric(areaId, 'humidity')}
      </section>
    \`;
  }

`;

text = text.slice(0, start) + method + text.slice(end);
fs.writeFileSync(path, text);
console.log('Fixed room climate editor renderer.');
