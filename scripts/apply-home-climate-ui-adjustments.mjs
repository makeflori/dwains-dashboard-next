import fs from 'node:fs';

const path = 'src/components/dwains-dashboard-strategy-editor.ts';
let text = fs.readFileSync(path, 'utf8');

function replaceOnce(search, replacement, label) {
  const index = text.indexOf(search);
  if (index < 0) throw new Error(`Missing expected block: ${label}`);
  text = text.slice(0, index) + replacement + text.slice(index + search.length);
}

replaceOnce(
  '<div class="home-info-card-section">\n        <div class="home-info-card-header">\n          <div>\n            <h4>${this._t(\'settings.home_climate_areas_title\')}</h4>',
  '<div class="home-info-card-section home-climate-area-settings">\n        <div class="home-info-card-header">\n          <div>\n            <h4>${this._t(\'settings.home_climate_areas_title\')}</h4>',
  'climate section class'
);

replaceOnce(
  '<div class="home-section-icon"><ha-icon icon="mdi:floor-plan"></ha-icon></div>\n                <div class="home-section-copy">\n                  <div class="home-section-title">${area.name}</div>\n                  <div class="home-section-description">${included\n                    ? this._t(\'settings.home_climate_area_included\')\n                    : this._t(\'settings.home_climate_area_excluded\')}\n                  </div>\n                </div>',
  '<div class="home-section-icon"><ha-icon icon=${area.icon || \'mdi:floor-plan\'}></ha-icon></div>\n                <div class="home-section-copy">\n                  <div class="home-section-title">${area.name}</div>\n                </div>',
  'climate area row content'
);

replaceOnce(
  '      .home-information-card-settings {\n        padding: 0 16px 16px;\n      }',
  '      .home-information-card-settings,\n      .home-climate-area-settings {\n        padding: 0 16px 16px;\n      }',
  'matching section padding'
);

fs.writeFileSync(path, text);
console.log('Adjusted home climate area controls.');
