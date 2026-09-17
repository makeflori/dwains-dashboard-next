import { mdiArrowDown, mdiArrowUp, mdiDrag } from "@mdi/js";
import { html, nothing } from "lit";
import type { HomeSectionKey } from "../types/strategy";
import { HOME_SECTION_META } from "../utils/home-sections";

const EDITOR_TAG = "dwains-dashboard-next-strategy-editor";

function applyFlatSettingsLayout(): void {
  void customElements.whenDefined(EDITOR_TAG).then(() => {
    const Editor = customElements.get(EDITOR_TAG) as any;
    const proto = Editor?.prototype as any;
    if (!proto || proto.__ddFlatSettingsLayoutApplied) return;
    proto.__ddFlatSettingsLayoutApplied = true;

    proto._renderSettingsDetailPage = function (page: string) {
      const items = this._settingsOverviewItems();
      const item = items.find((candidate: any) => candidate.page === page);
      if (!item) return this._renderSettingsOverview();

      return html`
        <div class="editor-container dd-flat-settings">
          ${renderFlatSettingsStyles()}
          <div class="settings-detail-toolbar dd-flat-toolbar">
            <div class="dd-flat-navigation">
              <button class="settings-back-button" type="button" @click=${this._backToSettingsOverview}>
                <ha-icon icon="mdi:arrow-left"></ha-icon>
                <span>${this._t("settings.all_settings")}</span>
              </button>
              <label class="dd-flat-page-select-wrap">
                <span class="sr-only">${this._t("settings.title")}</span>
                <select
                  class="dd-flat-page-select"
                  .value=${page}
                  @change=${(event: Event) => {
                    const value = (event.target as HTMLSelectElement).value;
                    if (value === "overview") this._backToSettingsOverview();
                    else this._openSettingsPage(value);
                  }}
                >
                  <option value="overview">${this._t("settings.all_settings")}</option>
                  ${items.map((entry: any) => html`<option value=${entry.page}>${entry.title}</option>`)}
                </select>
                <ha-icon icon="mdi:chevron-down"></ha-icon>
              </label>
            </div>
            <div class="settings-detail-title dd-flat-title">
              <span>${item.title}</span>
              <small>${item.description}</small>
            </div>
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
              ${activeDetail === "climate" ? html`
                <div class="dd-home-climate-inline">
                  ${this._renderHomeClimateAreaSettings()}
                </div>
              ` : nothing}
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
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      .dd-flat-toolbar {
        grid-template-columns: minmax(0, auto) minmax(0, 1fr);
        gap: 14px 18px;
      }

      .dd-flat-navigation {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }

      .dd-flat-page-select-wrap {
        position: relative;
        min-width: 170px;
        height: 36px;
        display: inline-flex;
        align-items: center;
        border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
        border-radius: 12px;
        background: var(--card-background-color);
      }

      .dd-flat-page-select {
        width: 100%;
        height: 100%;
        appearance: none;
        border: 0;
        outline: 0;
        padding: 0 34px 0 12px;
        border-radius: inherit;
        background: transparent;
        color: var(--primary-text-color);
        font: inherit;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
      }

      .dd-flat-page-select-wrap > ha-icon {
        position: absolute;
        right: 8px;
        pointer-events: none;
        color: var(--secondary-text-color);
        --mdc-icon-size: 18px;
      }

      .dd-flat-title {
        min-width: 0;
      }

      .dd-flat-content > ha-expansion-panel,
      .dd-flat-content > .sponsoring-section {
        border-radius: 14px;
      }

      .dd-home-flat-layout {
        padding-top: 2px;
      }

      .dd-home-section-block {
        overflow: hidden;
        border: 1px solid transparent;
        border-radius: 12px;
        transition: border-color .16s ease, background .16s ease, box-shadow .16s ease;
      }

      .dd-home-section-block.open {
        border-color: color-mix(in srgb, var(--primary-color) 30%, var(--divider-color));
        background: color-mix(in srgb, var(--primary-color) 3%, var(--card-background-color));
        box-shadow: 0 6px 18px rgba(15, 23, 42, .05);
      }

      .dd-home-section-block .home-section-item {
        border-radius: 10px;
      }

      .dd-home-section-block.open .home-section-item {
        border: 0;
        border-bottom: 1px solid var(--divider-color);
        border-radius: 0;
        box-shadow: none;
      }

      .dd-home-section-block:not(.open) .home-section-item {
        margin: 0;
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

      .dd-home-section-block.open .dd-home-detail-toggle {
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

      .dd-home-climate-inline {
        padding-top: 14px;
        border-top: 1px solid var(--divider-color);
      }

      @media (max-width: 700px) {
        .dd-flat-toolbar {
          grid-template-columns: 1fr;
          align-items: stretch;
        }

        .dd-flat-navigation {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          width: 100%;
        }

        .dd-flat-page-select-wrap {
          min-width: 0;
          width: 100%;
        }

        .dd-flat-title small {
          white-space: normal;
        }
      }

      @media (max-width: 600px) {
        .dd-home-section-block .home-section-item,
        .dd-home-section-block .home-section-item.has-detail {
          grid-template-columns: 28px 36px minmax(0, 1fr);
        }

        .dd-home-section-block .home-section-actions {
          grid-column: 2 / -1;
          justify-self: stretch;
          display: grid;
          grid-template-columns: repeat(4, 40px);
          justify-content: end;
        }

        .dd-home-inline-detail {
          padding: 10px;
        }
      }
    </style>
  `;
}

applyFlatSettingsLayout();
