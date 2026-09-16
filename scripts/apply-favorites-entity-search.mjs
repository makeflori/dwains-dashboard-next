import fs from 'node:fs';

const file = 'src/components/dwains-dashboard-strategy-editor.ts';
let text = fs.readFileSync(file, 'utf8');

const fieldFrom = `          <div class="entity-search">\n            <ha-textfield\n              .label=\${this._t('settings.search')}\n              .value=\${this._entitySearchFilter}\n              @input=\${(e: Event) => this._entitySearchFilter = (e.target as HTMLInputElement).value}\n            ></ha-textfield>\n          </div>`;
const fieldTo = `          <div class="entity-search">\n            <input\n              class="entity-search-input"\n              type="search"\n              placeholder=\${this._t('settings.search')}\n              aria-label=\${this._t('settings.search')}\n              .value=\${this._entitySearchFilter}\n              @input=\${(e: Event) => this._entitySearchFilter = (e.target as HTMLInputElement).value}\n            />\n          </div>`;

if (!text.includes(fieldFrom)) throw new Error('Favorites search field block not found');
text = text.replace(fieldFrom, fieldTo);

const cssFrom = `      .entity-search {\n        margin-bottom: 16px;\n      }`;
const cssTo = `      .entity-search {\n        margin-bottom: 16px;\n      }\n\n      .entity-search-input {\n        width: 100%;\n        min-height: 44px;\n        box-sizing: border-box;\n        padding: 0 14px;\n        border: 1px solid var(--divider-color);\n        border-radius: 8px;\n        outline: none;\n        background: var(--card-background-color);\n        color: var(--primary-text-color);\n        font: inherit;\n      }\n\n      .entity-search-input:focus {\n        border-color: var(--primary-color);\n      }`;

if (!text.includes(cssFrom)) throw new Error('Entity search CSS block not found');
text = text.replace(cssFrom, cssTo);

fs.writeFileSync(file, text);
