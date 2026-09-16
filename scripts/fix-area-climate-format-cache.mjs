import fs from 'node:fs';

function replaceOnce(text, search, replacement, label) {
  const index = text.indexOf(search);
  if (index < 0) throw new Error(`Missing expected block: ${label}`);
  return text.slice(0, index) + replacement + text.slice(index + search.length);
}

const path = 'src/components/dwains-layout-card.ts';
let text = fs.readFileSync(path, 'utf8');

const oldBlock = `  private _getCachedAreaData(area: AreaConfig): AreaData {\n    // Check cache first\n    const cached = this._areaDataCache.get(area.area_id);\n    if (cached && Date.now() - cached.timestamp < this._CACHE_DURATION) {\n      return cached.data;\n    }\n\n    const entities = this._getFilteredAreaEntities(area.area_id);\n    const data = getAreaData(area, this.hass, entities, this.config);\n\n    // Cache the result\n    this._areaDataCache.set(area.area_id, {\n      data,\n      timestamp: Date.now()\n    });\n\n    return data;\n  }`;

const newBlock = `  private _formatAssignedAreaClimate(areaId: string, kind: 'temperature' | 'humidity'): string | undefined {\n    const areaRegistry = this.hass?.areas?.[areaId] as any;\n    const entityId = kind === 'temperature'\n      ? areaRegistry?.temperature_entity_id\n      : areaRegistry?.humidity_entity_id;\n    if (!entityId) return undefined;\n\n    const state = this.hass?.states?.[entityId];\n    if (!state || state.state === 'unavailable' || state.state === 'unknown') return undefined;\n    return this.hass.formatEntityState(state);\n  }\n\n  private _withFreshAreaClimateFormatting(areaId: string, data: AreaData): AreaData {\n    return {\n      ...data,\n      temperature: this._formatAssignedAreaClimate(areaId, 'temperature'),\n      humidity: this._formatAssignedAreaClimate(areaId, 'humidity'),\n    };\n  }\n\n  private _getCachedAreaData(area: AreaConfig): AreaData {\n    // The structural area data can be cached, but temperature/humidity formatting\n    // must always use the current Home Assistant display settings (precision, locale, etc.).\n    const cached = this._areaDataCache.get(area.area_id);\n    if (cached && Date.now() - cached.timestamp < this._CACHE_DURATION) {\n      return this._withFreshAreaClimateFormatting(area.area_id, cached.data);\n    }\n\n    const entities = this._getFilteredAreaEntities(area.area_id);\n    const data = getAreaData(area, this.hass, entities, this.config);\n\n    this._areaDataCache.set(area.area_id, {\n      data,\n      timestamp: Date.now()\n    });\n\n    return this._withFreshAreaClimateFormatting(area.area_id, data);\n  }`;

text = replaceOnce(text, oldBlock, newBlock, 'cached area data');
fs.writeFileSync(path, text);
console.log('Applied fresh area climate formatting fix.');
