import { mdiDrag } from "@mdi/js";
import { html, nothing } from "lit";
import type { HomeInformationCardKey, HomeSectionKey } from "../types/strategy";
import { DEFAULT_HOME_INFORMATION_CARDS, HOME_INFORMATION_CARD_META, HOME_SECTION_META } from "../utils/home-sections";

const EDITOR_TAG = "dwains-dashboard-next-strategy-editor";

function applyFlatSettingsLayout(): void {
  void customElements.whenDefined(EDITOR_TAG).then(() => {
    const Editor = customElements.get(EDITOR_TAG) as any;
    const proto = Editor?.prototype as any;
    if (!proto || proto.__ddFlatSettingsLayoutApplied) return;
    proto.__ddFlatSettingsLayoutApplied = true;

    const nativeSettingsOverview = proto._renderSettingsOverview;
    proto._renderSettingsOverview = function () {
      scheduleCancelButtonLabel(this);
      return nativeSettingsOverview.call(this);
    };

    proto._renderSettingsDetailPage = function (page: string) {
      scheduleCancelButtonLabel(this);
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

    proto._renderFavoritesSettingsPanel = function () {
      const automatic = this._config?.settings?.show_suggested_favorites !== false;
      const setMode = (nextAutomatic: boolean) => {
        this._toggleSuggestedFavorites({ target: { checked: nextAutomatic } } as any);
      };

      return html`
        <div class="favorites-section dd-favorites-inline">
          <div class="dd-favorite-mode" role="radiogroup" aria-label=${this._t("home_section.favorites.label")}>
            <button type="button" class=${automatic ? "selected" : ""} aria-pressed=${automatic ? "true" : "false"} @click=${() => setMode(true)}>
              ${this._t("settings.show_suggested_favorites")}
            </button>
            <button type="button" class=${!automatic ? "selected" : ""} aria-pressed=${!automatic ? "true" : "false"} @click=${() => setMode(false)}>
              ${this._t("settings.manual_favorites")}
            </button>
          </div>

          <p class="dd-favorite-mode-description">
            ${automatic ? this._t("settings.suggested_favorites_description") : this._t("settings.favorites_description")}
          </p>

          ${!automatic ? html`
            <div class="entity-picker dd-favorites-picker">
              <div class="dd-favorites-add-row">
                <mwc-button @click=${this._addFavoriteEntity} outlined>
                  <ha-icon icon="mdi:plus"></ha-icon>
                  ${this._t("settings.add_entity")}
                </mwc-button>
              </div>
              ${this._renderSelectedEntities()}
              ${this._showEntityPicker ? this._renderEntityPicker() : nothing}
            </div>
          ` : nothing}
        </div>
      `;
    };

    proto._renderHomeInformationCardSettings = function () {
      const hiddenCards = this._getHiddenHomeInformationCards();
      const climateOpen = this._homeSettingsDetail === "climate";

      const toggleClimate = () => {
        this._homeSettingsDetail = climateOpen ? "house_information" : "climate";
        this._closeInlinePickers();
      };

      return html`
        <div class="dd-inline-section">
          <div class="dd-inline-section-heading">
            <strong>${this._t("settings.house_information_cards")}</strong>
            <span>${this._t("settings.house_information_cards_description")}</span>
          </div>
          <div class="dd-flat-sublist">
            ${DEFAULT_HOME_INFORMATION_CARDS.map((card: HomeInformationCardKey) => {
              const meta = HOME_INFORMATION_CARD_META[card];
              const enabled = !hiddenCards.has(card);
              const isClimate = card === "climate";

              return html`
                <div class="dd-flat-subitem ${isClimate && climateOpen ? "open" : ""}">
                  <div class="dd-flat-subitem-row" @click=${() => isClimate && toggleClimate()}>
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
                        <button class="dd-home-detail-toggle" type="button" aria-expanded=${climateOpen ? "true" : "false"} aria-label=${this._t(meta.labelKey)} @click=${toggleClimate}>
                          <ha-icon icon=${climateOpen ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
                        </button>
                      ` : nothing}
                    </div>
                  </div>
                  ${isClimate && climateOpen ? html`
                    <div class="dd-flat-subdetail">
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

    proto._renderHomeCameraSettings = function () {
      const cameras = this._getHomeCameraSettings();
      const hidden = new Set(this._config?.settings?.home_cameras_hidden || []);

      return html`
        <div class="dd-inline-section">
          <div class="dd-inline-section-heading">
            <strong>${this._t("settings.home_camera_cards")}</strong>
            <span>${this._t("settings.home_camera_cards_description")}</span>
          </div>
          ${cameras.length ? html`
            <div class="dd-flat-sublist">
              ${cameras.map((camera: any, index: number) => {
                const enabled = !hidden.has(camera.entityId);
                const unavailable = ["unavailable", "unknown"].includes(String(this.hass?.states[camera.entityId]?.state || "").toLowerCase());
                return html`
                  <div
                    class="dd-flat-subitem-row dd-draggable-subitem"
                    draggable="true"
                    @dragstart=${(event: DragEvent) => this._handleHomeCameraDragStart(event, camera.entityId)}
                    @dragend=${this._handleHomeCameraDragEnd}
                    @dragover=${(event: DragEvent) => this._handleHomeCameraDragOver(event, index)}
                    @dragleave=${this._handleHomeCameraDragLeave}
                    @drop=${(event: DragEvent) => this._handleHomeCameraDrop(event, index)}
                  >
                    <div class="home-section-handle"><ha-svg-icon .path=${mdiDrag}></ha-svg-icon></div>
                    <div class="home-section-icon"><ha-icon icon="mdi:cctv"></ha-icon></div>
                    <div class="home-section-copy">
                      <div class="home-section-title">${camera.name}</div>
                      <div class="home-section-description">${camera.areaName} · ${unavailable ? this._t("common.unavailable") : camera.state}</div>
                    </div>
                    <button
                      class="home-section-toggle ${enabled ? "enabled" : ""}"
                      type="button"
                      title=${enabled ? this._t("settings.hide_section") : this._t("settings.show_section")}
                      aria-label=${enabled ? this._t("settings.hide_section") : this._t("settings.show_section")}
                      aria-pressed=${enabled ? "true" : "false"}
                      @click=${() => this._toggleHomeCamera(camera.entityId)}
                    >
                      <ha-icon icon=${enabled ? "mdi:eye-outline" : "mdi:eye-off-outline"}></ha-icon>
                    </button>
                  </div>
                `;
              })}
            </div>
            <button class="home-layout-reset" type="button" @click=${this._resetHomeCameraSettings}>
              ${this._t("settings.reset_camera_cards")}
            </button>
          ` : html`<div class="home-camera-settings-empty">${this._t("settings.home_camera_cards_empty")}</div>`}
        </div>
      `;
    };

    proto._renderHomeCustomCardsSettings = function () {
      const cards = this._getHomeCustomCards();

      const onDragStart = (event: DragEvent, id: string) => {
        this.__ddDraggedHomeCustomCard = id;
        event.dataTransfer?.setData("text/plain", id);
        if (event.dataTransfer) event.dataTransfer.effectAllowed = "move";
      };

      const onDrop = (event: DragEvent, targetIndex: number) => {
        event.preventDefault();
        const id = this.__ddDraggedHomeCustomCard || event.dataTransfer?.getData("text/plain");
        this.__ddDraggedHomeCustomCard = undefined;
        const current = this._getHomeCustomCards();
        const from = current.findIndex((entry: any) => entry.id === id);
        if (from < 0 || from === targetIndex) return;
        const next = [...current];
        const [moved] = next.splice(from, 1);
        next.splice(targetIndex, 0, moved);
        this._updateHomeCustomCards(next);
      };

      return html`
        <div class="dd-inline-section">
          <div class="dd-inline-section-heading dd-inline-section-heading-action">
            <div>
              <strong>${this._t("settings.home_custom_cards")}</strong>
              <span>${this._t("settings.home_custom_cards_description")}</span>
            </div>
            <button class="home-custom-card-add" type="button" @click=${this._addHomeCustomCard}>
              <ha-icon icon="mdi:plus"></ha-icon>
              ${this._t("settings.add_home_card")}
            </button>
          </div>
          ${cards.length ? html`
            <div class="dd-flat-sublist">
              ${cards.map((entry: any, index: number) => html`
                <div
                  class="dd-flat-subitem-row dd-draggable-subitem"
                  draggable="true"
                  @dragstart=${(event: DragEvent) => onDragStart(event, entry.id)}
                  @dragend=${() => { this.__ddDraggedHomeCustomCard = undefined; }}
                  @dragover=${(event: DragEvent) => event.preventDefault()}
                  @drop=${(event: DragEvent) => onDrop(event, index)}
                >
                  <div class="home-section-handle"><ha-svg-icon .path=${mdiDrag}></ha-svg-icon></div>
                  <div class="home-section-icon"><ha-icon icon="mdi:cards-outline"></ha-icon></div>
                  <div class="home-section-copy">
                    <div class="home-section-title">${this._homeCustomCardTitle(entry)}</div>
                    <div class="home-section-description">${this._homeCustomCardSubtitle(entry)}</div>
                  </div>
                  <div class="dd-inline-actions">
                    <button type="button" class="dd-icon-action" aria-label=${this._t("common.edit")} @click=${() => this._editHomeCustomCard(entry.id)}>
                      <ha-icon icon="mdi:pencil"></ha-icon>
                    </button>
                    <button type="button" class="dd-icon-action" aria-label=${this._t("common.delete")} @click=${() => this._deleteHomeCustomCard(entry.id)}>
                      <ha-icon icon="mdi:delete"></ha-icon>
                    </button>
                  </div>
                </div>
              `)}
            </div>
          ` : html`<div class="home-camera-settings-empty">${this._t("settings.no_home_custom_cards")}</div>`}
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

function scheduleCancelButtonLabel(editor: any): void {
  window.setTimeout(() => {
    const cancel = String(editor?._t?.("common.cancel") || "Cancel");
    const back = String(editor?._t?.("strategy.back") || "Back");

    const visit = (root: Document | ShadowRoot | Element) => {
      const nodes = root.querySelectorAll?.("button, ha-button, mwc-button") || [];
      nodes.forEach((node: any) => {
        const label = String(node.textContent || "").trim();
        if (label === "Back" || label === back) {
          node.textContent = cancel;
        }
      });
      const all = root.querySelectorAll?.("*") || [];
      all.forEach((node: any) => {
        if (node.shadowRoot) visit(node.shadowRoot);
      });
    };

    visit(document);
  }, 0);
}

function renderFlatSettingsStyles() {
  return html`
    <style>
      .dd-flat-settings { min-width: 0; }
      .dd-flat-settings .settings-nav-section,
      .dd-flat-settings .settings-detail-content { max-width: 940px; margin-inline: auto; }

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
        width: 38px; height: 38px; flex: 0 0 38px;
        display: inline-grid; place-items: center;
        border: 0; border-radius: 999px;
        color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 9%, transparent);
        cursor: pointer;
      }
      .dd-subpage-back ha-icon { --mdc-icon-size: 20px; }
      .dd-subpage-title {
        min-width: 0; overflow: hidden;
        color: var(--primary-text-color);
        font-size: 18px; font-weight: 800; line-height: 1.2;
        text-overflow: ellipsis; white-space: nowrap;
      }

      .dd-home-flat-layout { padding-top: 2px; }
      .dd-home-section-block {
        overflow: hidden;
        border: 1px solid transparent;
        border-radius: 12px;
        transition: border-color .16s ease, background .16s ease;
      }
      .dd-home-section-block.open {
        border-color: color-mix(in srgb, var(--primary-color) 22%, var(--divider-color));
        background: color-mix(in srgb, var(--primary-color) 2%, var(--card-background-color));
      }
      .dd-home-section-block.open > .home-section-item {
        border: 0;
        border-bottom: 1px solid var(--divider-color);
        border-radius: 0;
        box-shadow: none;
      }
      .dd-home-section-block .home-section-item,
      .dd-home-section-block .home-section-item.has-detail {
        grid-template-columns: 32px 42px minmax(0, 1fr) auto;
      }
      .dd-home-section-block .home-section-actions,
      .home-info-card-actions,
      .dd-inline-actions {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2px;
        white-space: nowrap;
      }
      .dd-home-detail-toggle,
      .dd-icon-action {
        width: 38px; height: 38px;
        display: inline-grid; place-items: center;
        border: 0; border-radius: 999px;
        color: var(--secondary-text-color);
        background: transparent;
        cursor: pointer;
      }
      .dd-home-section-block.open > .home-section-item .dd-home-detail-toggle,
      .dd-flat-subitem.open > .dd-flat-subitem-row .dd-home-detail-toggle {
        color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 9%, transparent);
      }
      .dd-home-detail-toggle ha-icon,
      .dd-icon-action ha-icon { --mdc-icon-size: 19px; }

      .dd-home-inline-detail { padding: 10px 14px 14px; }
      .dd-home-house-information { display: block; }
      .dd-inline-section { min-width: 0; }
      .dd-inline-section-heading { display: grid; gap: 4px; padding: 4px 4px 12px; }
      .dd-inline-section-heading > strong,
      .dd-inline-section-heading > div > strong { color: var(--primary-text-color); font-size: 14px; line-height: 1.3; }
      .dd-inline-section-heading > span,
      .dd-inline-section-heading > div > span { color: var(--secondary-text-color); font-size: 12px; line-height: 1.4; }
      .dd-inline-section-heading-action { grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 10px; }
      .dd-inline-section-heading-action > div { display: grid; gap: 4px; }

      .dd-flat-sublist { overflow: hidden; border-top: 1px solid var(--divider-color); }
      .dd-flat-subitem + .dd-flat-subitem,
      .dd-flat-subitem-row + .dd-flat-subitem-row { border-top: 1px solid var(--divider-color); }
      .dd-flat-subitem-row {
        min-height: 62px;
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr) auto;
        align-items: center;
        gap: 10px;
        padding: 9px 4px;
        box-sizing: border-box;
      }
      .dd-draggable-subitem { grid-template-columns: 24px 42px minmax(0, 1fr) auto; cursor: grab; }
      .dd-draggable-subitem:active { cursor: grabbing; }
      .dd-flat-subitem-row .home-section-icon { width: 42px; height: 42px; }
      .dd-flat-subitem-row .home-section-copy { min-width: 0; }
      .dd-flat-subitem-row .home-section-title { font-size: 14px; }
      .dd-flat-subitem-row .home-section-description { font-size: 12px; line-height: 1.35; }
      .dd-flat-subdetail {
        margin-left: 52px;
        padding: 0 0 12px 12px;
        border-left: 2px solid color-mix(in srgb, var(--primary-color) 45%, var(--divider-color));
      }
      .dd-flat-subdetail .home-info-card-section { padding: 0; }
      .dd-flat-subdetail .home-info-card-header { padding: 10px 4px 8px; }
      .dd-flat-subdetail .home-info-card-list { border: 0; border-radius: 0; }
      .dd-flat-subdetail .home-info-card-item { border: 0; border-top: 1px solid var(--divider-color); border-radius: 0; background: transparent; }

      .dd-favorites-inline { padding: 4px; }
      .dd-favorite-mode {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
        padding: 4px;
        border-radius: 12px;
        background: var(--secondary-background-color);
      }
      .dd-favorite-mode button {
        min-height: 40px;
        padding: 8px 12px;
        border: 0;
        border-radius: 9px;
        background: transparent;
        color: var(--secondary-text-color);
        font: inherit;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
      }
      .dd-favorite-mode button.selected {
        color: var(--primary-text-color);
        background: var(--card-background-color);
        box-shadow: 0 1px 3px rgba(0,0,0,.14);
      }
      .dd-favorite-mode-description { margin: 10px 4px 14px; color: var(--secondary-text-color); font-size: 12px; line-height: 1.45; }
      .dd-favorites-picker { padding-top: 2px; }
      .dd-favorites-add-row { display: flex; justify-content: flex-end; margin-bottom: 10px; }
      .dd-favorites-add-row mwc-button ha-icon { --mdc-icon-size: 18px; margin-right: 6px; }

      @media (max-width: 700px) {
        .dd-flat-settings { padding-inline: 10px; }
        .dd-flat-settings .settings-nav-section,
        .dd-flat-settings .settings-detail-content,
        .dd-subpage-header { max-width: none; }
        .dd-subpage-header { margin-bottom: 10px; border-radius: 12px; }
        .dd-subpage-title { font-size: 17px; }
      }

      @media (max-width: 600px) {
        .dd-home-section-block .home-section-item,
        .dd-home-section-block .home-section-item.has-detail {
          grid-template-columns: 22px 36px minmax(0, 1fr) auto;
          gap: 8px;
          padding: 10px 8px;
        }
        .dd-home-section-block .home-section-icon { width: 36px; height: 36px; }
        .dd-home-section-block .home-section-actions { grid-column: auto; justify-self: end; }
        .dd-home-section-block .home-section-toggle,
        .dd-home-section-block .dd-home-detail-toggle { width: 34px; height: 34px; }
        .dd-home-section-block .home-section-toggle ha-icon,
        .dd-home-section-block .dd-home-detail-toggle ha-icon { --mdc-icon-size: 18px; }
        .dd-home-section-block .home-section-title { font-size: 14px; }
        .dd-home-section-block .home-section-description { font-size: 11px; line-height: 1.3; }
        .dd-home-inline-detail { padding: 8px 10px 12px; }

        .dd-flat-subitem-row { grid-template-columns: 36px minmax(0, 1fr) auto; gap: 8px; padding: 9px 2px; }
        .dd-draggable-subitem { grid-template-columns: 20px 36px minmax(0, 1fr) auto; }
        .dd-flat-subitem-row .home-section-icon { width: 36px; height: 36px; }
        .dd-flat-subitem-row .home-section-toggle,
        .dd-flat-subitem-row .dd-home-detail-toggle,
        .dd-flat-subitem-row .dd-icon-action { width: 32px; height: 32px; }
        .dd-flat-subitem-row .home-section-toggle ha-icon,
        .dd-flat-subitem-row .dd-home-detail-toggle ha-icon,
        .dd-flat-subitem-row .dd-icon-action ha-icon { --mdc-icon-size: 17px; }
        .dd-flat-subdetail { margin-left: 44px; padding-left: 10px; }
        .dd-inline-section-heading-action { grid-template-columns: 1fr; align-items: stretch; }
        .dd-inline-section-heading-action .home-custom-card-add { justify-self: start; }
      }
    </style>
  `;
}

applyFlatSettingsLayout();
