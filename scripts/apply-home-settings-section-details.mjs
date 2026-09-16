import fs from 'node:fs';

const path = 'src/components/dwains-dashboard-strategy-editor.ts';
let text = fs.readFileSync(path, 'utf8');

function replaceOnce(search, replacement, label) {
  const index = text.indexOf(search);
  if (index < 0) throw new Error(`Missing expected block: ${label}`);
  text = text.slice(0, index) + replacement + text.slice(index + search.length);
}

replaceOnce(
  "  @state()\n  private _homeSettingsDetail: 'overview' | 'house_information' | 'climate' = 'overview';",
  "  @state()\n  private _homeSettingsDetail: 'overview' | 'house_information' | 'climate' | 'cameras' | 'custom_cards' | 'favorites' = 'overview';",
  'home settings detail state'
);

replaceOnce(
`  private _renderSettingsDetailPage(page: SettingsPageKey) {
    const item = this._settingsOverviewItems().find((candidate) => candidate.page === page);
    if (!item) return this._renderSettingsOverview();

    return html\`
      <div class="editor-container">
        <div class="settings-detail-toolbar">
          <button class="settings-back-button" type="button" @click=\${this._backToSettingsOverview}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
            <span>\${this._t('settings.all_settings')}</span>
          </button>
          <div class="settings-detail-title">
            <span>\${item.title}</span>
            <small>\${item.description}</small>
          </div>
        </div>
        <div class="settings-detail-content">
          \${this._renderSettingsPageContent(page)}
        </div>
      </div>
    \`;
  }
`,
`  private _homeSettingsDetailHeader(): { title: string; description: string; backLabel: string } | undefined {
    if (this._homeSettingsDetail === 'overview') return undefined;

    if (this._homeSettingsDetail === 'climate') {
      return {
        title: this._t('home.indoor_climate'),
        description: this._t('settings.home_climate_areas_description'),
        backLabel: this._t('home_section.devices.label'),
      };
    }

    const section: HomeSectionKey = this._homeSettingsDetail === 'house_information'
      ? 'devices'
      : this._homeSettingsDetail;
    const meta = HOME_SECTION_META[section];
    return {
      title: this._t(meta.labelKey),
      description: this._t(meta.descriptionKey),
      backLabel: this._t('settings.home_page'),
    };
  }

  private _backFromHomeSettingsDetail = (): void => {
    this._homeSettingsDetail = this._homeSettingsDetail === 'climate' ? 'house_information' : 'overview';
    this._closeInlinePickers();
  };

  private _renderSettingsDetailPage(page: SettingsPageKey) {
    const item = this._settingsOverviewItems().find((candidate) => candidate.page === page);
    if (!item) return this._renderSettingsOverview();

    const homeDetail = page === 'home' ? this._homeSettingsDetailHeader() : undefined;
    const title = homeDetail?.title || item.title;
    const description = homeDetail?.description || item.description;
    const backLabel = homeDetail?.backLabel || this._t('settings.all_settings');
    const backAction = homeDetail ? this._backFromHomeSettingsDetail : this._backToSettingsOverview;

    return html\`
      <div class="editor-container">
        <div class="settings-detail-toolbar">
          <button class="settings-back-button" type="button" @click=\${backAction}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
            <span>\${backLabel}</span>
          </button>
          <div class="settings-detail-title">
            <span>\${title}</span>
            <small>\${description}</small>
          </div>
        </div>
        <div class="settings-detail-content">
          \${this._renderSettingsPageContent(page)}
        </div>
      </div>
    \`;
  }
`,
  'settings detail page'
);

replaceOnce(
`      case "home":
        return html\`
          \${this._renderHomeLayoutSettingsPanel()}
          \${this._renderFavoritesSettingsPanel()}
        \`;`,
`      case "home":
        return this._renderHomeLayoutSettingsPanel();`,
  'home page content'
);

const homeLayoutStart = text.indexOf('  private _renderHomeLayoutSettingsPanel() {');
const homeLayoutEnd = text.indexOf('\n  private _renderReplacementsSettingsPanel()', homeLayoutStart);
if (homeLayoutStart < 0 || homeLayoutEnd < 0) throw new Error('Missing home layout settings panel');
const homeLayoutReplacement = `  private _homeSectionDetail(section: HomeSectionKey): typeof this._homeSettingsDetail | undefined {
    if (section === 'devices') return 'house_information';
    if (section === 'cameras') return 'cameras';
    if (section === 'custom_cards') return 'custom_cards';
    if (section === 'favorites') return 'favorites';
    return undefined;
  }

  private _openHomeSectionDetail(section: HomeSectionKey): void {
    const detail = this._homeSectionDetail(section);
    if (!detail) return;
    this._homeSettingsDetail = detail;
    this._closeInlinePickers();
  }

  private _renderHomeLayoutSettingsPanel() {
    if (this._homeSettingsDetail === 'climate') {
      return this._renderSettingsPanel(
        "mdi:home-thermometer-outline",
        this._t('home.indoor_climate'),
        this._t('settings.home_climate_areas_description'),
        this._renderHomeClimateAreaSettings()
      );
    }

    if (this._homeSettingsDetail === 'house_information') {
      return this._renderSettingsPanel(
        "mdi:home-edit-outline",
        this._t('settings.house_information_cards'),
        this._t('settings.house_information_cards_description'),
        this._renderHomeInformationCardSettings()
      );
    }

    if (this._homeSettingsDetail === 'cameras') {
      const meta = HOME_SECTION_META.cameras;
      return this._renderSettingsPanel(
        meta.icon,
        this._t(meta.labelKey),
        this._t(meta.descriptionKey),
        this._renderHomeCameraSettings()
      );
    }

    if (this._homeSettingsDetail === 'custom_cards') {
      const meta = HOME_SECTION_META.custom_cards;
      return this._renderSettingsPanel(
        meta.icon,
        this._t(meta.labelKey),
        this._t(meta.descriptionKey),
        this._renderHomeCustomCardsSettings()
      );
    }

    if (this._homeSettingsDetail === 'favorites') {
      return this._renderFavoritesSettingsPanel();
    }

    return this._renderSettingsPanel(
      "mdi:home-edit-outline",
      this._t('settings.home_layout'),
      this._t('settings.home_layout_description'),
      this._renderHomeSectionOrder()
    );
  }
`;
text = text.slice(0, homeLayoutStart) + homeLayoutReplacement + text.slice(homeLayoutEnd);

// Make configured start-page sections themselves open their detail settings.
const sectionRowOld = `              return html\`
                <div
                  class="home-section-item \${enabled ? '' : 'disabled'} \${isDragging ? 'dragging' : ''} \${isDragOver ? 'drag-over' : ''}"
                  draggable="true"
                  data-section=\${section}
                  data-index=\${index}
                  @dragstart=\${(e: DragEvent) => this._handleHomeSectionDragStart(e, section)}
                  @dragend=\${this._handleHomeSectionDragEnd}
                  @dragover=\${(e: DragEvent) => this._handleHomeSectionDragOver(e, index)}
                  @dragleave=\${this._handleHomeSectionDragLeave}
                  @drop=\${(e: DragEvent) => this._handleHomeSectionDrop(e, index)}
                >
                  <div class="home-section-handle">
                    <ha-svg-icon .path=\${mdiDrag}></ha-svg-icon>
                  </div>
                  <div class="home-section-icon">
                    <ha-icon icon=\${meta.icon}></ha-icon>
                  </div>
                  <div class="home-section-copy">
                    <div class="home-section-title">\${this._t(meta.labelKey)}</div>
                    <div class="home-section-description">\${this._t(meta.descriptionKey)}</div>
                  </div>
                  <div class="home-section-actions">
                    <button
                      class="home-section-toggle \${enabled ? 'enabled' : ''}"
                      type="button"
                      title=\${enabled ? this._t('settings.hide_section') : this._t('settings.show_section')}
                      aria-label=\${enabled ? this._t('settings.hide_section') : this._t('settings.show_section')}
                      aria-pressed=\${enabled ? 'true' : 'false'}
                      @click=\${() => this._toggleHomeSectionEnabled(section)}
                    >
                      <ha-icon icon=\${enabled ? 'mdi:eye-outline' : 'mdi:eye-off-outline'}></ha-icon>
                    </button>
                    <ha-icon-button
                      .label=\${this._t('settings.move_up')}
                      .path=\${mdiArrowUp}
                      .disabled=\${index === 0}
                      @click=\${() => this._moveHomeSection(section, -1)}
                    ></ha-icon-button>
                    <ha-icon-button
                      .label=\${this._t('settings.move_down')}
                      .path=\${mdiArrowDown}
                      .disabled=\${index === order.length - 1}
                      @click=\${() => this._moveHomeSection(section, 1)}
                    ></ha-icon-button>
                  </div>
                </div>
              \`;`;
const sectionRowNew = `              const detail = this._homeSectionDetail(section);
              return html\`
                <div
                  class="home-section-item \${enabled ? '' : 'disabled'} \${detail ? 'has-detail' : ''} \${isDragging ? 'dragging' : ''} \${isDragOver ? 'drag-over' : ''}"
                  draggable="true"
                  data-section=\${section}
                  data-index=\${index}
                  @click=\${() => detail && this._openHomeSectionDetail(section)}
                  @dragstart=\${(e: DragEvent) => this._handleHomeSectionDragStart(e, section)}
                  @dragend=\${this._handleHomeSectionDragEnd}
                  @dragover=\${(e: DragEvent) => this._handleHomeSectionDragOver(e, index)}
                  @dragleave=\${this._handleHomeSectionDragLeave}
                  @drop=\${(e: DragEvent) => this._handleHomeSectionDrop(e, index)}
                >
                  <div class="home-section-handle" @click=\${(event: Event) => event.stopPropagation()}>
                    <ha-svg-icon .path=\${mdiDrag}></ha-svg-icon>
                  </div>
                  <div class="home-section-icon">
                    <ha-icon icon=\${meta.icon}></ha-icon>
                  </div>
                  <div class="home-section-copy">
                    <div class="home-section-title">\${this._t(meta.labelKey)}</div>
                    <div class="home-section-description">\${this._t(meta.descriptionKey)}</div>
                  </div>
                  \${detail ? html\`<ha-svg-icon class="home-section-detail-chevron" .path=\${mdiChevronRight}></ha-svg-icon>\` : nothing}
                  <div class="home-section-actions" @click=\${(event: Event) => event.stopPropagation()}>
                    <button
                      class="home-section-toggle \${enabled ? 'enabled' : ''}"
                      type="button"
                      title=\${enabled ? this._t('settings.hide_section') : this._t('settings.show_section')}
                      aria-label=\${enabled ? this._t('settings.hide_section') : this._t('settings.show_section')}
                      aria-pressed=\${enabled ? 'true' : 'false'}
                      @click=\${() => this._toggleHomeSectionEnabled(section)}
                    >
                      <ha-icon icon=\${enabled ? 'mdi:eye-outline' : 'mdi:eye-off-outline'}></ha-icon>
                    </button>
                    <ha-icon-button
                      .label=\${this._t('settings.move_up')}
                      .path=\${mdiArrowUp}
                      .disabled=\${index === 0}
                      @click=\${() => this._moveHomeSection(section, -1)}
                    ></ha-icon-button>
                    <ha-icon-button
                      .label=\${this._t('settings.move_down')}
                      .path=\${mdiArrowDown}
                      .disabled=\${index === order.length - 1}
                      @click=\${() => this._moveHomeSection(section, 1)}
                    ></ha-icon-button>
                  </div>
                </div>
              \`;`;
replaceOnce(sectionRowOld, sectionRowNew, 'home section row');

// Replace the four house-information rows with the same two-line + eye-button pattern.
const houseStart = text.indexOf('  private _renderHomeInformationCardSettings() {');
const houseEnd = text.indexOf('\n  private _renderHomeCameraSettings()', houseStart);
if (houseStart < 0 || houseEnd < 0) throw new Error('Missing home information card settings');
const houseReplacement = `  private _renderHomeInformationCardSettings() {
    const hiddenCards = this._getHiddenHomeInformationCards();
    const visibleCount = DEFAULT_HOME_INFORMATION_CARDS.filter(card => !hiddenCards.has(card)).length;

    return html\`
      <div class="home-info-card-section home-information-card-settings">
        <div class="home-info-card-header">
          <div>
            <h4>\${this._t('settings.house_information_cards')}</h4>
            <p>\${this._t('settings.house_information_cards_description')}</p>
          </div>
          <span>\${this._t('settings.visible_count', { visible: visibleCount, total: DEFAULT_HOME_INFORMATION_CARDS.length })}</span>
        </div>
        <div class="home-info-card-list">
          \${DEFAULT_HOME_INFORMATION_CARDS.map(card => {
            const meta = HOME_INFORMATION_CARD_META[card];
            const enabled = !hiddenCards.has(card);
            const clickable = card === 'climate';

            return html\`
              <div
                class="home-info-card-item \${enabled ? 'enabled' : 'disabled'} \${clickable ? 'has-detail' : ''}"
                @click=\${() => { if (clickable) this._homeSettingsDetail = 'climate'; }}
              >
                <div class="home-section-icon"><ha-icon icon=\${meta.icon}></ha-icon></div>
                <div class="home-section-copy">
                  <div class="home-section-title">\${this._t(meta.labelKey)}</div>
                  <div class="home-section-description">\${this._t(meta.descriptionKey)}</div>
                </div>
                <div class="home-info-card-actions" @click=\${(event: Event) => event.stopPropagation()}>
                  \${clickable ? html\`<ha-svg-icon class="home-section-detail-chevron" .path=\${mdiChevronRight}></ha-svg-icon>\` : nothing}
                  <button
                    class="home-section-toggle \${enabled ? 'enabled' : ''}"
                    type="button"
                    title=\${enabled ? this._t('settings.hide_section') : this._t('settings.show_section')}
                    aria-label=\${enabled ? this._t('settings.hide_section') : this._t('settings.show_section')}
                    aria-pressed=\${enabled ? 'true' : 'false'}
                    @click=\${() => this._toggleHomeInformationCardEnabled(card)}
                  >
                    <ha-icon icon=\${enabled ? 'mdi:eye-outline' : 'mdi:eye-off-outline'}></ha-icon>
                  </button>
                </div>
              </div>
            \`;
          })}
        </div>
      </div>
    \`;
  }
`;
text = text.slice(0, houseStart) + houseReplacement + text.slice(houseEnd);

// Replace the temporary PR #9 CSS with section-detail styles and correct spacing.
replaceOnce(
`      .home-info-card-item {
        grid-template-columns: 42px minmax(0, 1fr) auto;
      }

      .home-settings-detail-card { width: 100%; display: flex; align-items: center; gap: 12px; padding: 14px; margin-top: 16px; border: 1px solid var(--divider-color); border-radius: 12px; background: var(--card-background-color); color: var(--primary-text-color); text-align: left; cursor: pointer; }
    .home-settings-detail-card .home-section-copy { flex: 1; }
    .home-settings-detail-chevron { width: 20px; height: 20px; }
    .home-settings-back { display: inline-flex; align-items: center; gap: 8px; margin: 0 0 16px; padding: 8px 10px; border: 0; border-radius: 8px; background: transparent; color: var(--primary-text-color); cursor: pointer; font: inherit; }
    .home-settings-back ha-svg-icon { width: 20px; height: 20px; }
    .home-info-card-open { flex: 1; min-width: 0; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0; border: 0; background: transparent; color: inherit; text-align: left; font: inherit; }
    .home-info-card-open:not(:disabled) { cursor: pointer; }
    .home-info-card-open:disabled { opacity: 1; }
    .home-info-card-open ha-svg-icon { width: 20px; height: 20px; flex: 0 0 auto; }

    .home-info-card-section {
        display: grid;
        gap: 10px;
      }
`,
`      .home-info-card-item {
        grid-template-columns: 42px minmax(0, 1fr) auto;
      }

      .home-section-item.has-detail,
      .home-info-card-item.has-detail {
        cursor: pointer;
      }

      .home-section-item.has-detail:hover,
      .home-info-card-item.has-detail:hover {
        border-color: color-mix(in srgb, var(--primary-color) 48%, var(--divider-color));
        background: color-mix(in srgb, var(--primary-color) 4%, var(--card-background-color));
      }

      .home-section-detail-chevron {
        width: 20px;
        height: 20px;
        flex: 0 0 auto;
        color: var(--secondary-text-color);
      }

      .home-section-item > .home-section-detail-chevron {
        margin-left: -2px;
      }

      .home-info-card-actions {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .home-info-card-section {
        display: grid;
        gap: 10px;
      }

      .home-information-card-settings {
        padding: 0 16px 16px;
      }
`,
  'home detail CSS'
);

replaceOnce(
`      .home-section-copy {
        min-width: 0;
      }
`,
`      .home-section-copy {
        min-width: 0;
        display: block;
      }

      .home-section-copy .home-section-title,
      .home-section-copy .home-section-description {
        display: block;
      }
`,
  'home section copy CSS'
);

// Clickable section rows have one additional chevron column before actions.
replaceOnce(
`      .home-section-actions {
        display: inline-flex;
        gap: 2px;
      }
`,
`      .home-section-item.has-detail {
        grid-template-columns: 32px 42px minmax(0, 1fr) 20px auto;
      }

      .home-section-actions {
        display: inline-flex;
        gap: 2px;
      }
`,
  'home section detail grid CSS'
);

// Keep mobile grid valid for clickable rows.
replaceOnce(
`        .home-section-item {
          grid-template-columns: 28px 36px minmax(0, 1fr);
        }

        .home-info-card-item {
          grid-template-columns: 36px minmax(0, 1fr) auto;
        }
`,
`        .home-section-item {
          grid-template-columns: 28px 36px minmax(0, 1fr);
        }

        .home-section-item.has-detail {
          grid-template-columns: 28px 36px minmax(0, 1fr) 20px;
        }

        .home-info-card-item {
          grid-template-columns: 36px minmax(0, 1fr) auto;
        }
`,
  'mobile home section grid CSS'
);

fs.writeFileSync(path, text);
console.log('Applied start-page section detail navigation and house-information UI fixes.');
