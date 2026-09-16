import fs from 'node:fs';

const additions = [
  "  'settings.area_climate_title': 'Room climate',",
  "  'settings.area_climate_description': 'Choose which sensors represent this area and whether the area contributes to the house average.',",
  "  'settings.climate_include_house_average': 'Include in house average',",
  "  'settings.climate_include_house_average_description': 'Uses this area as one equally weighted value for the house temperature and humidity averages.',",
  "  'settings.climate_home_assistant': 'Home Assistant',",
  "  'settings.climate_home_assistant_description': 'Use the temperature or humidity sensor assigned to this area in Home Assistant.',",
  "  'settings.climate_custom_selection': 'Custom selection',",
  "  'settings.climate_custom_selection_description': 'Choose one or more sensors from this area and average them.',",
  "  'settings.climate_no_sensors': 'No matching sensors found in this area.',",
].join('\n') + '\n';

for (const locale of ['nl', 'fr', 'es', 'ru', 'zh-Hans', 'zh-Hant']) {
  const path = `src/i18n/locales/${locale}.ts`;
  let text = fs.readFileSync(path, 'utf8');
  const anchor = "  'settings.area_entity_layout_title':";
  const index = text.indexOf(anchor);
  if (index < 0) throw new Error(`Missing locale anchor in ${path}`);
  const lineStart = text.lastIndexOf('\n', index) + 1;
  text = text.slice(0, lineStart) + additions + text.slice(lineStart);
  fs.writeFileSync(path, text);
}

console.log('Added room climate fallback strings to remaining locales.');
