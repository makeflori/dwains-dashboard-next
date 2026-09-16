import fs from 'node:fs';

function replaceOnce(text, search, replacement, label) {
  const index = text.indexOf(search);
  if (index < 0) throw new Error(`Missing expected block: ${label}`);
  return text.slice(0, index) + replacement + text.slice(index + search.length);
}

// The strategy editor must not replace Home Assistant's live display registries with
// raw config-registry responses. The display registry contains derived metadata such
// as display_precision that hass.formatEntityState() relies on.
{
  const path = 'src/components/dwains-dashboard-strategy-editor.ts';
  let text = fs.readFileSync(path, 'utf8');
  const oldBlock = `    this.hass.areas = areas.reduce((acc: any, area: any) => {\n      acc[area.area_id] = area;\n      return acc;\n    }, {});\n\n    this.hass.entities = entities.reduce((acc: any, entity: any) => {\n      acc[entity.entity_id] = entity;\n      return acc;\n    }, {});\n\n    this.hass.devices = devices.reduce((acc: any, device: any) => {\n      acc[device.id] = device;\n      return acc;\n    }, {});\n\n`;
  const newBlock = `    // Keep Home Assistant's own live registries intact. In particular,\n    // hass.entities is the frontend display registry and contains derived fields\n    // such as display_precision. Replacing it with config/entity_registry/list\n    // entries breaks hass.formatEntityState() until the frontend is reloaded.\n`;
  text = replaceOnce(text, oldBlock, newBlock, 'strategy editor registry overwrite');
  fs.writeFileSync(path, text);
}

// Make the dashboard rerender if Home Assistant changes area climate assignments or
// entity display precision, even if the underlying sensor state object did not change.
{
  const path = 'src/components/dwains-layout-card.ts';
  let text = fs.readFileSync(path, 'utf8');
  const marker = `  protected override shouldUpdate(changedProps: PropertyValues): boolean {\n`;
  const helper = `  private _hasAreaClimateDisplayMetadataChanges(\n    oldHass: HomeAssistant,\n    newHass: HomeAssistant\n  ): boolean {\n    const areaIds = new Set([\n      ...Object.keys(oldHass.areas || {}),\n      ...Object.keys(newHass.areas || {}),\n    ]);\n\n    for (const areaId of areaIds) {\n      const oldArea = oldHass.areas?.[areaId] as any;\n      const newArea = newHass.areas?.[areaId] as any;\n      const oldTemperature = oldArea?.temperature_entity_id;\n      const newTemperature = newArea?.temperature_entity_id;\n      const oldHumidity = oldArea?.humidity_entity_id;\n      const newHumidity = newArea?.humidity_entity_id;\n\n      if (oldTemperature !== newTemperature || oldHumidity !== newHumidity) return true;\n\n      const entityIds = new Set<string>(\n        [oldTemperature, newTemperature, oldHumidity, newHumidity].filter(Boolean) as string[]\n      );\n      for (const entityId of entityIds) {\n        const oldEntry = oldHass.entities?.[entityId] as any;\n        const newEntry = newHass.entities?.[entityId] as any;\n        if (oldEntry?.display_precision !== newEntry?.display_precision) return true;\n      }\n    }\n\n    return false;\n  }\n\n`;
  text = replaceOnce(text, marker, helper + marker, 'shouldUpdate marker');

  const oldCheck = `      if (this._hasUpdateEntityChanges(oldHass, this.hass)) return true;\n\n      // Check if any visible entities changed\n`;
  const newCheck = `      if (this._hasUpdateEntityChanges(oldHass, this.hass)) return true;\n      if (this._hasAreaClimateDisplayMetadataChanges(oldHass, this.hass)) return true;\n\n      // Check if any visible entities changed\n`;
  text = replaceOnce(text, oldCheck, newCheck, 'hass metadata update check');
  fs.writeFileSync(path, text);
}

console.log('Preserved Home Assistant entity display metadata and precision updates.');
