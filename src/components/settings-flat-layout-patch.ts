import { mdiArrowDown, mdiArrowUp, mdiDrag } from "@mdi/js";
import { html, nothing } from "lit";
import type { HomeSectionKey } from "../types/strategy";
import { DEFAULT_HOME_INFORMATION_CARDS, HOME_INFORMATION_CARD_META, HOME_SECTION_META } from "../utils/home-sections";

const EDITOR_TAG = "dwains-dashboard-next-strategy-editor";

function applyFlatSettingsLayout(): void {
  void customElements.whenDefined(EDITOR_TAG).then(() => {
    const Editor = customElements.get(EDITOR_TAG) as any;
    const proto = Editor?.prototype as any;
    if (!proto || proto.__ddFlatSettingsLayoutApplied) return;
    proto.__ddFlatSettingsLayoutApplied = true;

    proto._renderSettingsOverview = function () {
      const groups = [
        { key: "general", title: this._t("settings.general") },
        { key: "layout", title: this._t("settings.dashboard_layout") },
        { key: "advanced", title: this._t("settings.advanced") },
      ];
      const items = this._settingsOverviewItems();

      return html`
        <div class="editor-container dd-flat-settings">
          ${renderFlatSettingsStyles()}
          ${groups.map((group: any) => {
            const groupItems = items.filter((item: any) => item.group === group.key);
            if (!groupItems.length) return nothing;
            return html`
              <section class="settings-nav-section">
                <h3>${group.title}</h3>
                <div class="settings-nav-list">
                  ${groupItems.map((item: any) => this._renderSettingsNavItem(item))}
                </div>
              </section>
            `;
          })}
        </div>
      `;
    };

    proto._renderSettingsDetailPage = function (page: string) {
      const item = this._settingsOverviewItems().find((candidate: any) => candidate.page === page);
      if (!item) return this._renderSettingsOverview();

      return html`
        <div class="editor-container dd-flat-settings">
          ${renderFlatSettingsStyles()}
          <div class="dd-subpage-header">
            <button
              class="dd-subpage-back"
              type="button"
              aria-label=${this._t("settings.all_settings")}
              @click=${this._backToSettingsOverview}
            >
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </button>
            <div class="dd-subpage-title">${item.title}</div>
          </div>
          <div class="settings-detail-content dd-flat-content">
            ${this._renderSettingsPageContent(page)}
          </div>
        </div>
      `;
    };

    proto._renderHomeLayoutSettingsPanel = function () {
      this._homeSettingsDetail ||= "overview";
      return this._renderSettingsPanel(
        "mdi:home-edit-outline",
        this._t("settings.home_layout"),
        this._t("settings.home_layout_description"),
        this._renderHomeSectionOrder(),
      );
    };

    proto._renderHomeInformationCardSettings = function () {
      const hiddenCards = this._getHiddenHomeInformationCards();
      const visibleCount = DEFAULT_HOME_INFORMATION_CARDS.filter((card: any) => !hiddenCards.has(card)).length;
      const climateOpen = this._homeSettingsDetail === "climate";

      const toggleClimate = () => {
        this._homeSettingsDetail = climateOpen ? "house_information" : "climate";
        this._closeInlinePickers();
      };

      return html`
        <div class="home-info-card-section home-information-card-settings dd-home-info-inline">
          <div class="home-info-card-header">
            <div>
              <h4>${this._t("settings.house_information_cards")}</h4>
              <p>${this._t("settings.house_information_cards_description")}</p>
            </div>
            <span>${this._t("settings.visible_count", { visible: visibleCount, total: DEFAULT_HOME_INFORMATION_CARDS.length })}</span>
          </div>
          <div class="home-info-card-list">
            ${DEFAULT_HOME_INFORMATION_CARDS.map((card: any) => {
              const meta = HOME_INFORMATION_CARD_META[card];
              const enabled = !hiddenCards.has(card);
              const isClimate = card === "climate";

              return html`
                <div class="dd-home-info-card-block ${isClimate && climateOpen ? "open" : ""}">
                  <div
                    class="home-info-card-item ${enabled ? "enabled" : "disabled"} ${isClimate ? "has-detail" : ""}"
                    @click=${() => isClimate && toggleClimate()}
                  >
                    <div class="home-section-icon"><ha-icon icon=${meta.icon}></ha-icon></div>
                    <div class="home-section-copy">
                      <div class="home-section-title">${this._t(meta.labelKey)}</div>
                      <div class="home-section-description">${this._t(meta.descriptionKey)}</div>
                    </div>
                    <div class="home-info-card-actions" @click=${(event: Event) => event.stopPropagation()}>
                      <button
                        class="home-section-toggle ${enabled ? "enabled" : ""}"
                        type="button"
                        title=${enabled ? this._t("settings.hide_section") : this._t("settings.show_section")}
                        aria-label=${enabled ? this._t("settings.hide_section") : this._t("settings.show_section")}
                        aria-pressed=${enabled ? "true" : "false"}
                        @click=${() => this._toggleHomeInformationCardEnabled(card)}
                      >
                        <ha-icon icon=${enabled ? "mdi:eye-outline" : "mdi:eye-off-outline"}></ha-icon>
                      </button>
                      ${isClimate ? html`
                        <button
                          class="dd-home-detail-toggle"
                          type="button"
                          aria-expanded=${climateOpen ? "true" : "false"}
                          aria-label=${this._t(meta.labelKey)}
                          @click=${toggleClimate}
                        >
                          <ha-icon icon=${climateOpen ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
                        </button>
                      ` : nothing}
                    </div>
                  </div>
                  ${isClimate && climateOpen ? html`
                    <div class="dd-home-climate-inline">
                      ${this._renderHomeClimateAreaSettings()}
                    </div>
                  ` : nothing}
                </div>
              `;
            })}
          </div>
        </div>
      `;
    };

    proto._renderHomeSectionOrder = function () {
      const order: HomeSectionKey[] = this._getHomeSectionsOrder();
      const hiddenSections: Set<HomeSectionKey> = this._getHiddenHomeSections();
      const activeDetail = this._homeSettingsDetail;

      const sectionIsOpen = (section: HomeSectionKey) => {
        if (section === "devices") return activeDetail === "house_information" || activeDetail === "climate";
        return this._homeSectionDetail(section) === activeDetail;
      };

      const toggleDetail = (section: HomeSectionKey) => {
        const detail = this._homeSectionDetail(section);
        if (!detail) return;
        if (sectionIsOpen(section)) {
          this._homeSettingsDetail = "overview";
        } else {
          this._homeSettingsDetail = detail;
        }
        this._closeInlinePickers();
      };

      const renderDetail = (section: HomeSectionKey) => {
        if (!sectionIsOpen(section)) return nothing;
        if (section === "cameras") return this._renderHomeCameraSettings();
        if (section === "custom_cards") return this._renderHomeCustomCardsSettings();
        if (section === "favorites") return this._renderFavoritesSettingsPanel();
        if (section === "devices") {
          return html`
            <div class="dd-home-house-information">
              ${this._renderHomeInformationCardSettings()}
            </div>
          `;
        }
        return nothing;
      };

      return html`
        <div class="home-layout-section dd-home-flat-layout">
          <div class="home-section-list ${this._draggedHomeSection ? "dragging" : ""}">
            ${order.map((section: HomeSectionKey, index: number) => {
              const meta = HOME_SECTION_META[section];
              const enabled = !hiddenSections.has(section);
              const detail = this._homeSectionDetail(section);
              const open = sectionIsOpen(section);
              const isDragging = this._draggedHomeSection === section;
              const isDragOver = this._dragOverHomeSectionIndex === index && this._draggedHomeSection && this._draggedHomeSection !== section;

              return html`
                <div class="dd-home-section-block ${open ? "open" : ""}">
                  <div
                    class="home-section-item ${enabled ? "" : "disabled"} ${detail ? "has-detail" : ""} ${isDragging ? "dragging" : ""} ${isDragOver ? "drag-over" : ""}"
                    draggable="true"
                    data-section=${section}
                    data-index=${index}
                    @click=${() => detail && toggleDetail(section)}
                    @dragstart=${(event: DragEvent) => this._handleHomeSectionDragStart(event, section)}
                    @dragend=${this._handleHomeSectionDragEnd}
                    @dragover=${(event: DragEvent) => this._handleHomeSectionDragOver(event, index)}
                    @dragleave=${this._handleHomeSectionDragLeave}
                    @drop=${(event: DragEvent) => this._handleHomeSectionDrop(event, index)}
                  >
                    <div class="home-section-handle" @click=${(event: Event) => event.stopPropagation()}>
                      <ha-svg-icon .path=${mdiDrag}></ha-svg-icon>
                    </div>
                    <div class="home-section-icon"><ha-icon icon=${meta.icon}></ha-icon></div>
                    <div class="home-section-copy">
                      <div class="home-section-title">${this._t(meta.labelKey)}</div>
                      <div class="home-section-description">${this._t(meta.descriptionKey)}</div>
                    </div>
                    <div class="home-section-actions" @click=${(event: Event) => event.stopPropagation()}>
                      <button
                        class="home-section-toggle ${enabled ? "enabled" : ""}"
                        type="button"
                        title=${enabled ? this._t("settings.hide_section") : this._t("settings.show_section")}
                        aria-label=${enabled ? this._t("settings.hide_section") : this._t("settings.show_section")}
                        aria-pressed=${enabled ? "true" : "false"}
                        @click=${() => this._toggleHomeSectionEnabled(section)}
                      >
                        <ha-icon icon=${enabled ? "mdi:eye-outline" : "mdi:eye-off-outline"}></ha-icon>
                      </button>
                      <ha-icon-button
                        .label=${this._t("settings.move_up")}
                        .path=${mdiArrowUp}
                        .disabled=${index === 0}
                        @click=${() => this._moveHomeSection(section, -1)}
                      ></ha-icon-button>
                      <ha-icon-button
                        .label=${this._t("settings.move_down")}
                        .path=${mdiArrowDown}
                        .disabled=${index === order.length - 1}
                        @click=${() => this._moveHomeSection(section, 1)}
                      ></ha-icon-button>
                      ${detail ? html`
                        <button
                          class="dd-home-detail-toggle"
                          type="button"
                          aria-expanded=${open ? "true" : "false"}
                          @click=${() => toggleDetail(section)}
                        >
                          <ha-icon icon=${open ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
                        </button>
                      ` : nothing}
                    </div>
                  </div>
                  ${open ? html`<div class="dd-home-inline-detail">${renderDetail(section)}</div>` : nothing}
                </div>
              `;
            })}
          </div>
          <button class="home-layout-reset" type="button" @click=${this._resetHomeSectionsOrder}>
            ${this._t("settings.reset_layout")}
          </button>
        </div>
      `;
    };
  });
}

function renderFlatSettingsStyles() {
  return html`
    <style>
      .dd-flat-settings {
        min-width: 0;
      }

      .dd-flat-settings .settings-nav-section,
      .dd-flat-settings .settings-detail-content {
        max-width: 940px;
        margin-inline: auto;
      }

      .dd-subpage-header {
        max-width: 940px;
        min-height: 52px;
        margin: 0 auto 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        box-sizing: border-box;
        border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
        border-radius: 14px;
        background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-color));
      }

      .dd-subpage-back {
        width: 38px;
        height: 38px;
        flex: 0 0 38px;
        display: inline-grid;
        place-items: center;
        border: 0;
        border-radius: 999px;
        color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 9%, transparent);
        cursor: pointer;
      }

      .dd-subpage-back ha-icon {
        --mdc-icon-size: 20px;
      }

      .dd-subpage-title {
        min-width: 0;
        overflow: hidden;
        color: var(--primary-text-color);
        font-size: 18px;
        font-weight: 800;
        line-height: 1.2;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .dd-home-flat-layout {
        padding-top: 2px;
      }

      .dd-home-section-block,
      .dd-home-info-card-block {
        overflow: hidden;
        border: 1px solid transparent;
        border-radius: 12px;
        transition: border-color .16s ease, background .16s ease, box-shadow .16s ease;
      }

      .dd-home-section-block.open,
      .dd-home-info-card-block.open {
        border-color: color-mix(in srgb, var(--primary-color) 30%, var(--divider-color));
        background: color-mix(in srgb, var(--primary-color) 3%, var(--card-background-color));
        box-shadow: 0 6px 18px rgba(15, 23, 42, .05);
      }

      .dd-home-section-block.open > .home-section-item,
      .dd-home-info-card-block.open > .home-info-card-item {
        border: 0;
        border-bottom: 1px solid var(--divider-color);
        border-radius: 0;
        box-shadow: none;
      }

      .dd-home-section-block .home-section-item {
        grid-template-columns: 32px 42px minmax(0, 1fr) auto;
      }

      .dd-home-section-block .home-section-item.has-detail {
        grid-template-columns: 32px 42px minmax(0, 1fr) auto;
      }

      .dd-home-section-block .home-section-actions,
      .dd-home-info-card-block .home-info-card-actions {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2px;
        white-space: nowrap;
      }

      .dd-home-detail-toggle {
        width: 40px;
        height: 40px;
        display: inline-grid;
        place-items: center;
        border: 0;
        border-radius: 999px;
        color: var(--secondary-text-color);
        background: transparent;
        cursor: pointer;
      }

      .dd-home-section-block.open .dd-home-detail-toggle,
      .dd-home-info-card-block.open .dd-home-detail-toggle {
        color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 9%, transparent);
      }

      .dd-home-detail-toggle ha-icon {
        --mdc-icon-size: 20px;
      }

      .dd-home-inline-detail {
        padding: 14px;
      }

      .dd-home-inline-detail .home-info-card-section,
      .dd-home-inline-detail .home-information-card-settings,
      .dd-home-inline-detail .home-camera-settings-section,
      .dd-home-inline-detail .home-custom-card-settings-section,
      .dd-home-inline-detail .home-climate-area-settings {
        padding: 0;
      }

      .dd-home-inline-detail > ha-expansion-panel {
        margin: 0;
      }

      .dd-home-house-information {
        display: grid;
        gap: 14px;
      }

      .dd-home-info-inline {
        padding: 0;
      }

      .dd-home-info-card-block + .dd-home-info-card-block {
        margin-top: 8px;
      }

      .dd-home-climate-inline {
        padding: 14px;
      }

      .dd-home-climate-inline .home-climate-area-settings {
        padding: 0;
      }

      @media (max-width: 700px) {
        .dd-flat-settings {
          padding-inline: 10px;
        }

        .dd-flat-settings .settings-nav-section,
        .dd-flat-settings .settings-detail-content,
        .dd-subpage-header {
          max-width: none;
        }

        .dd-subpage-header {
          margin-bottom: 10px;
          border-radius: 12px;
        }

        .dd-subpage-title {
          font-size: 17px;
        }
      }

      @media (max-width: 600px) {
        .dd-home-section-block .home-section-item,
        .dd-home-section-block .home-section-item.has-detail {
          grid-template-columns: 24px 34px minmax(0, 1fr) auto;
          gap: 8px;
          padding: 10px 8px;
        }

        .dd-home-section-block .home-section-icon {
          width: 34px;
          height: 34px;
        }

        .dd-home-section-block .home-section-actions {
          grid-column: auto;
          justify-self: end;
        }

        .dd-home-section-block .home-section-actions ha-icon-button,
        .dd-home-section-block .home-section-toggle,
        .dd-home-section-block .dd-home-detail-toggle {
          width: 32px;
          height: 32px;
          --mdc-icon-button-size: 32px;
        }

        .dd-home-section-block .home-section-actions ha-icon-button {
          --mdc-icon-size: 18px;
        }

        .dd-home-section-block .home-section-toggle ha-icon,
        .dd-home-section-block .dd-home-detail-toggle ha-icon {
          --mdc-icon-size: 18px;
        }

        .dd-home-section-block .home-section-title {
          font-size: 14px;
        }

        .dd-home-section-block .home-section-description {
          font-size: 11px;
          line-height: 1.3;
        }

        .dd-home-inline-detail {
          padding: 10px;
        }

        .dd-home-climate-inline {
          padding: 10px;
        }

        .dd-home-info-card-block .home-info-card-item {
          grid-template-columns: 36px minmax(0, 1fr) auto;
          gap: 8px;
          padding: 10px;
        }

        .dd-home-info-card-block .home-section-icon {
          width: 36px;
          height: 36px;
        }

        .dd-home-info-card-block .home-section-toggle,
        .dd-home-info-card-block .dd-home-detail-toggle {
          width: 34px;
          height: 34px;
        }

        .dd-home-info-card-block .home-section-toggle ha-icon,
        .dd-home-info-card-block .dd-home-detail-toggle ha-icon {
          --mdc-icon-size: 18px;
        }
      }
    </style>
  `;
}

applyFlatSettingsLayout();
