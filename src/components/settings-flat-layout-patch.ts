import { mdiDrag } from "@mdi/js";
import { html, nothing } from "lit";
import type { HomeInformationCardKey, HomeSectionKey } from "../types/strategy";
import { DEFAULT_HOME_INFORMATION_CARDS, HOME_INFORMATION_CARD_META, HOME_SECTION_META } from "../utils/home-sections";
import { DD_NEXT_VERSION } from "../version";

const EDITOR_TAG = "dwains-dashboard-next-strategy-editor";

function applyFlatSettingsLayout(): void {
  void customElements.whenDefined(EDITOR_TAG).then(() => {
    const Editor = customElements.get(EDITOR_TAG) as any;
    const proto = Editor?.prototype as any;
    if (!proto || proto.__ddFlatSettingsLayoutApplied) return;
    proto.__ddFlatSettingsLayoutApplied = true;

    proto._renderSettingsOverview = function () {
      scheduleCancelButtonLabel(this);
      scheduleDesktopFloatingSettingsActions(this);
      const groups = [
        { key: "general", title: this._t("settings.general") },
        { key: "layout", title: this._t("settings.dashboard_layout") },
        { key: "advanced", title: this._t("settings.advanced") },
      ];
      const items = this._settingsOverviewItems();

      return html`
        <div class="editor-container dd-flat-settings dd-settings-overview">
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
          <div class="dd-settings-version-footer">
            Dwains Dashboard Next · v${DD_NEXT_VERSION}
          </div>
        </div>
      `;
    };

    proto._renderSettingsDetailPage = function (page: string) {
      scheduleCancelButtonLabel(this);
      scheduleDesktopFloatingSettingsActions(this);
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
      return html`
        <section class="dd-home-layout-panel">
          <p class="dd-home-page-description">${this._t("settings.home_layout_description")}</p>
          ${this._renderHomeSectionOrder()}
        </section>
      `;
    };

    proto._renderFavoritesSettingsPanel = function () {
      const suggestedEnabled = this._config?.settings?.show_suggested_favorites !== false;

      return html`
        <div class="favorites-section dd-favorites-inline">
          <div class="dd-favorite-suggestions-row">
            <div class="dd-favorite-suggestions-copy">
              <strong>${this._t("settings.show_suggested_favorites")}</strong>
              <span>${this._t("settings.suggested_favorites_description")}</span>
            </div>
            <ha-switch
              .checked=${suggestedEnabled}
              @change=${this._toggleSuggestedFavorites}
            ></ha-switch>
          </div>

          <div class="entity-picker dd-favorites-picker">
            <div class="dd-inline-action-row">
              <p class="dd-inline-description">${this._t("settings.favorites_description")}</p>
              <button class="home-custom-card-add dd-favorites-add" type="button" @click=${this._addFavoriteEntity}>
                <ha-icon icon="mdi:plus"></ha-icon>
                ${this._t("common.add")}
              </button>
            </div>
            ${this._renderSelectedEntities()}
            ${this._showEntityPicker ? this._renderEntityPicker() : nothing}
          </div>
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
          <p class="dd-inline-description">${this._t("settings.house_information_cards_description")}</p>
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
                        <button class="dd-home-detail-toggle dd-detail-desktop" type="button" aria-expanded=${climateOpen ? "true" : "false"} aria-label=${this._t(meta.labelKey)} @click=${toggleClimate}>
                          <ha-icon icon=${climateOpen ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
                        </button>
                      ` : html`<span class="dd-home-detail-spacer dd-detail-desktop" aria-hidden="true"></span>`}
                    </div>
                  </div>
                  ${isClimate ? html`
                    <button
                      class="dd-mobile-expand-row"
                      type="button"
                      aria-expanded=${climateOpen ? "true" : "false"}
                      aria-label=${this._t(meta.labelKey)}
                      @click=${toggleClimate}
                    >
                      <ha-icon icon=${climateOpen ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
                    </button>
                  ` : nothing}
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

    proto._renderHomeClimateAreaSettings = function () {
      if (!this._config || !this.hass) return nothing;
      const excluded = this._getExcludedHomeClimateAreas();
      const hiddenAreas = new Set(this._config.areas_display?.hidden || []);
      const areas = this._config.areas
        ? [...this._config.areas]
          .filter((area: any) => !hiddenAreas.has(area.area_id))
          .sort((a: any, b: any) => String(a.name || "").localeCompare(String(b.name || ""), undefined, { sensitivity: "base" }))
        : [];

      return html`
        <div class="home-info-card-section home-climate-area-settings dd-climate-area-settings">
          <p class="dd-inline-description">${this._t("settings.home_climate_areas_description")}</p>
          <div class="home-info-card-list">
            ${areas.map((area: any) => {
              const included = !excluded.has(area.area_id);
              return html`
                <div class="home-info-card-item ${included ? "enabled" : "disabled"}">
                  <div class="home-section-icon"><ha-icon icon=${area.icon || "mdi:floor-plan"}></ha-icon></div>
                  <div class="home-section-copy">
                    <div class="home-section-title">${area.name}</div>
                  </div>
                  <div class="dd-climate-actions">
                    <ha-switch
                      .checked=${included}
                      @change=${(event: Event) => this._toggleHomeClimateArea(area.area_id, (event.target as any).checked)}
                    ></ha-switch>
                  </div>
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
          <p class="dd-inline-description">${this._t("settings.home_camera_cards_description")}</p>
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
          ` : html`<div class="dd-empty-state">${this._t("settings.home_camera_cards_empty")}</div>`}
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
          <div class="dd-inline-action-row">
            <p class="dd-inline-description">${this._t("settings.home_custom_cards_description")}</p>
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
          ` : html`<div class="dd-empty-state">${this._t("settings.no_home_custom_cards")}</div>`}
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
                          class="dd-home-detail-toggle dd-detail-desktop"
                          type="button"
                          aria-expanded=${open ? "true" : "false"}
                          @click=${() => toggleDetail(section)}
                        >
                          <ha-icon icon=${open ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
                        </button>
                      ` : html`<span class="dd-home-detail-spacer dd-detail-desktop" aria-hidden="true"></span>`}
                    </div>
                  </div>
                  ${detail ? html`
                    <button
                      class="dd-mobile-expand-row"
                      type="button"
                      aria-expanded=${open ? "true" : "false"}
                      @click=${() => toggleDetail(section)}
                    >
                      <ha-icon icon=${open ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
                    </button>
                  ` : nothing}
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
  const apply = () => {
    const cancel = String(editor?._t?.("common.cancel") || "Cancel");
    const back = String(editor?._t?.("strategy.back") || "Back");
    let changed = false;

    const visit = (root: Document | ShadowRoot | Element) => {
      const nodes = root.querySelectorAll?.("button, ha-button, mwc-button") || [];
      nodes.forEach((node: any) => {
        const text = String(node.textContent || "").replace(/\s+/g, " ").trim();
        const aria = String(node.getAttribute?.("aria-label") || "").trim();
        const title = String(node.getAttribute?.("title") || "").trim();
        const label = String(node.label || "").trim();
        const isBack = [text, aria, title, label].some((value) =>
          value === "Back" || value === "Zurück" || value === back
        );
        if (!isBack) return;

        node.textContent = cancel;
        if ("label" in node) node.label = cancel;
        node.setAttribute?.("aria-label", cancel);
        node.setAttribute?.("title", cancel);
        changed = true;
      });

      const all = root.querySelectorAll?.("*") || [];
      all.forEach((node: any) => {
        if (node.shadowRoot) visit(node.shadowRoot);
      });
    };

    visit(document);
    return changed;
  };

  [0, 50, 150, 400].forEach((delay) => window.setTimeout(apply, delay));
}


function scheduleDesktopFloatingSettingsActions(editor: any): void {
  window.setTimeout(() => {
    const desktop = window.matchMedia("(min-width: 701px)").matches;
    const saveLabel = String(editor?._t?.("common.save") || "Save");
    const cancelLabel = String(editor?._t?.("common.cancel") || "Cancel");

    const state = (window as any).__ddDesktopSettingsActionsState || ((window as any).__ddDesktopSettingsActionsState = {
      wrapper: undefined,
      saveButton: undefined,
      cancelButton: undefined,
      sourceSaveButton: undefined,
      sourceCancelButton: undefined,
      resizeBound: false,
      editor: undefined,
    });
    state.editor = editor;

    if (!state.resizeBound) {
      state.resizeBound = true;
      window.addEventListener("resize", () => {
        if (state.editor) scheduleDesktopFloatingSettingsActions(state.editor);
      });
    }

    const allRoots: Array<Document | ShadowRoot | Element> = [document];
    const visited = new Set<any>();
    const collectRoots = (root: Document | ShadowRoot | Element) => {
      if (visited.has(root)) return;
      visited.add(root);
      const all = root.querySelectorAll?.("*") || [];
      all.forEach((node: any) => {
        if (node.shadowRoot) {
          allRoots.push(node.shadowRoot);
          collectRoots(node.shadowRoot);
        }
      });
    };
    collectRoots(document);

    const textOf = (node: any) => String(node?.textContent || "").replace(/\s+/g, " ").trim();
    const findAction = (label: string, fallbacks: string[]) => {
      for (const root of allRoots) {
        const controls = root.querySelectorAll?.("button, ha-button, mwc-button") || [];
        for (const node of controls as any) {
          if (node?.classList?.contains("dd-desktop-floating-action")) continue;
          const text = textOf(node);
          if (text === label || fallbacks.includes(text)) return node;
        }
      }
      return undefined;
    };

    const sourceSaveButton = findAction(saveLabel, ["Speichern", "Save"]);
    const sourceCancelButton = findAction(cancelLabel, ["Abbrechen", "Cancel"]);

    const removeFloating = () => {
      state.wrapper?.remove?.();
      state.wrapper = undefined;
      state.saveButton = undefined;
      state.cancelButton = undefined;
    };

    if (!desktop) {
      if (state.sourceSaveButton) state.sourceSaveButton.style.display = "";
      if (state.sourceCancelButton) state.sourceCancelButton.style.display = "";
      removeFloating();
      state.sourceSaveButton = undefined;
      state.sourceCancelButton = undefined;
      return;
    }

    if (!sourceSaveButton || !sourceCancelButton) return;

    state.sourceSaveButton = sourceSaveButton;
    state.sourceCancelButton = sourceCancelButton;

    // Let the desktop header scroll normally; hide only its actions.
    sourceSaveButton.style.display = "none";
    sourceCancelButton.style.display = "none";

    let wrapper = state.wrapper as HTMLDivElement | undefined;
    if (!wrapper || !wrapper.isConnected) {
      wrapper = document.createElement("div");
      wrapper.className = "dd-desktop-floating-settings-actions";
      Object.assign(wrapper.style, {
        position: "fixed",
        left: "50%",
        bottom: "24px",
        transform: "translateX(-50%)",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 12px",
        border: "1px solid var(--divider-color)",
        borderRadius: "22px",
        background: "var(--card-background-color)",
        boxShadow: "0 14px 36px rgba(15, 23, 42, .16)",
      } as Partial<CSSStyleDeclaration>);

      const cancel = document.createElement("ha-button") as any;
      cancel.classList.add("dd-desktop-floating-action");
      cancel.setAttribute("appearance", "plain");

      const save = document.createElement("ha-button") as any;
      save.classList.add("dd-desktop-floating-action");
      save.setAttribute("appearance", "accent");

      wrapper.append(cancel, save);
      document.body.appendChild(wrapper);

      state.wrapper = wrapper;
      state.cancelButton = cancel;
      state.saveButton = save;
    }

    const cancel = state.cancelButton as any;
    const save = state.saveButton as any;

    cancel.textContent = cancelLabel;
    save.textContent = saveLabel;

    cancel.onclick = () => sourceCancelButton.click();
    save.onclick = () => sourceSaveButton.click();

    const disabled = Boolean(
      sourceSaveButton.disabled ||
      sourceSaveButton.hasAttribute?.("disabled") ||
      sourceSaveButton.getAttribute?.("aria-disabled") === "true"
    );
    save.disabled = disabled;
    if (disabled) save.setAttribute("disabled", "");
    else save.removeAttribute("disabled");
  }, 0);
}

function renderFlatSettingsStyles() {
  return html`
    <style>
      .dd-flat-settings { min-width: 0; }
      .dd-flat-settings .settings-nav-section,
      .dd-flat-settings .settings-detail-content { max-width: 940px; margin-inline: auto; }

      .dd-settings-overview .settings-nav-section:first-of-type { margin-top: 0; }
      .dd-settings-version-footer {
        max-width: 940px;
        margin: 22px auto 4px;
        padding-top: 14px;
        border-top: 1px solid var(--divider-color);
        color: var(--secondary-text-color);
        font-size: 11px;
        text-align: center;
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
      .dd-subpage-back ha-icon { --mdc-icon-size: 20px; }
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

      .dd-home-layout-panel { min-width: 0; }
      .dd-home-page-description {
        margin: 0 0 14px;
        color: var(--secondary-text-color);
        font-size: 12px;
        line-height: 1.45;
      }

      .dd-home-flat-layout { padding-top: 0; }
      .dd-home-section-block {
        overflow: hidden;
        border: 1px solid transparent;
        border-radius: 12px;
        transition: border-color .16s ease, background .16s ease;
      }
      .dd-home-section-block.open {
        border-color: var(--divider-color);
        background: color-mix(in srgb, var(--primary-color) 1.5%, var(--card-background-color));
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

      /* Static icons are square information markers. */
      .dd-home-flat-layout .home-section-icon,
      .dd-flat-sublist .home-section-icon,
      .dd-climate-area-settings .home-section-icon {
        border-radius: 10px !important;
        box-shadow: none !important;
      }

      /* Interactive visibility buttons are intentionally circular and outlined. */
      .dd-home-flat-layout .home-section-toggle,
      .dd-flat-sublist .home-section-toggle {
        border: 1px solid color-mix(in srgb, var(--primary-color) 24%, var(--divider-color)) !important;
        border-radius: 999px !important;
        background: transparent !important;
        box-shadow: none !important;
      }
      .dd-home-flat-layout .home-section-toggle.enabled,
      .dd-flat-sublist .home-section-toggle.enabled {
        color: var(--primary-color) !important;
        background: color-mix(in srgb, var(--primary-color) 5%, transparent) !important;
      }

      .dd-home-section-block .home-section-actions,
      .home-info-card-actions {
        display: grid;
        grid-template-columns: 48px 28px;
        align-items: center;
        justify-content: end;
        justify-items: end;
        justify-self: end;
        gap: 8px;
        width: 84px;
        margin-left: auto;
      }
      .dd-inline-actions {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2px;
        white-space: nowrap;
      }

      .dd-home-detail-toggle,
      .dd-home-detail-spacer {
        width: 28px;
        height: 40px;
      }
      .dd-icon-action {
        width: 38px;
        height: 38px;
      }
      .dd-home-detail-toggle,
      .dd-icon-action {
        display: inline-grid;
        place-items: center;
        border: 0;
        border-radius: 0;
        color: var(--secondary-text-color);
        background: transparent;
        cursor: pointer;
      }
      .dd-home-detail-spacer { display: block; pointer-events: none; }
      .dd-home-detail-toggle:hover,
      .dd-icon-action:hover { color: var(--primary-text-color); background: transparent; }
      .dd-home-section-block.open > .home-section-item .dd-home-detail-toggle,
      .dd-flat-subitem.open > .dd-flat-subitem-row .dd-home-detail-toggle {
        color: var(--primary-color);
        background: transparent;
      }
      .dd-home-detail-toggle ha-icon,
      .dd-icon-action ha-icon { --mdc-icon-size: 19px; }

      .dd-mobile-expand-row { display: none; }

      .dd-home-inline-detail {
        margin-left: 52px;
        padding: 10px 0 12px 12px;
        border-left: 2px solid color-mix(in srgb, var(--divider-color) 78%, var(--primary-color));
      }
      .dd-flat-subdetail {
        margin-left: 24px;
        padding: 10px 0 10px 12px;
        border-left: 0;
      }
      .dd-home-house-information { display: block; }

      .dd-inline-section { min-width: 0; }
      .dd-inline-description {
        margin: 0 0 10px;
        color: var(--secondary-text-color);
        font-size: 12px;
        line-height: 1.45;
        font-weight: 400;
      }
      .dd-flat-subdetail .dd-inline-description {
        margin: 0 0 10px;
        color: var(--secondary-text-color);
        font-size: 12px;
        line-height: 1.45;
        font-weight: 400;
      }
      .dd-inline-action-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: start;
        gap: 12px;
        margin-bottom: 10px;
      }
      .dd-inline-action-row .dd-inline-description { margin: 2px 0 0; }

      .dd-flat-sublist { overflow: hidden; border-top: 1px solid var(--divider-color); }
      .dd-flat-subitem + .dd-flat-subitem,
      .dd-flat-subitem-row + .dd-flat-subitem-row { border-top: 1px solid var(--divider-color); }
      .dd-flat-subitem-row {
        min-height: 58px;
        display: grid;
        grid-template-columns: 40px minmax(0, 1fr) auto;
        align-items: center;
        gap: 9px;
        padding: 8px 2px;
        box-sizing: border-box;
      }
      .dd-draggable-subitem {
        grid-template-columns: 22px 40px minmax(0, 1fr) auto;
        cursor: grab;
      }
      .dd-draggable-subitem:active { cursor: grabbing; }
      .dd-flat-subitem-row .home-section-icon { width: 40px; height: 40px; }
      .dd-flat-subitem-row .home-section-copy { min-width: 0; }
      .dd-flat-subitem-row .home-section-title { font-size: 14px; }
      .dd-flat-subitem-row .home-section-description { font-size: 12px; line-height: 1.35; }
      .dd-flat-subdetail .home-info-card-section { padding: 0; }

      .dd-climate-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        justify-self: end;
        width: 48px;
        margin-left: auto;
      }
      .dd-climate-actions ha-switch { margin-left: auto; }
      .dd-home-section-block .home-section-actions > .home-section-toggle,
      .home-info-card-actions > .home-section-toggle { justify-self: center; }
      .dd-home-section-block .home-section-actions > .dd-home-detail-toggle,
      .home-info-card-actions > .dd-home-detail-toggle { justify-self: center; }

      .dd-climate-area-settings .home-info-card-item {
        min-height: 0;
        grid-template-columns: 32px minmax(0, 1fr) 48px;
        gap: 10px;
        padding: 4px 10px;
      }
      .dd-climate-area-settings .home-section-icon { width: 32px; height: 32px; }
      .dd-climate-area-settings .home-section-icon ha-icon { --mdc-icon-size: 19px; }
      .dd-flat-subdetail ha-switch {
        transform: scale(.9);
        transform-origin: right center;
      }
      .dd-flat-subdetail .home-info-card-header { padding: 4px 2px 8px; }
      .dd-flat-subdetail .home-info-card-list {
        display: grid;
        gap: 0;
        border: 0;
        border-radius: 0;
      }
      .dd-flat-subdetail .home-info-card-item {
        margin: 0;
        border: 0;
        border-top: 1px solid var(--divider-color);
        border-radius: 0;
        background: transparent;
        box-shadow: none;
      }
      .dd-flat-subdetail .home-info-card-item:first-child { border-top: 1px solid var(--divider-color); }

      .dd-empty-state,
      .no-favorites {
        margin: 8px 2px 2px;
        padding: 14px 10px;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        color: var(--secondary-text-color);
        text-align: center;
        font-size: 12px;
        line-height: 1.45;
      }
      .no-favorites p { margin: 0; }

      .dd-favorites-inline { padding: 2px; }
      .dd-favorite-suggestions-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: center;
        gap: 12px;
        padding: 4px 2px 10px;
        border-bottom: 1px solid var(--divider-color);
      }
      .dd-favorite-suggestions-copy { min-width: 0; display: grid; gap: 3px; }
      .dd-favorite-suggestions-copy strong {
        color: var(--primary-text-color);
        font-size: 13px;
        font-weight: 600;
        line-height: 1.3;
      }
      .dd-favorite-suggestions-copy span {
        color: var(--secondary-text-color);
        font-size: 11px;
        line-height: 1.4;
      }
      .dd-favorites-picker { padding-top: 8px; }
      .dd-favorites-add ha-icon { --mdc-icon-size: 18px; }

      /* The dialog footer buttons intentionally keep their existing size. */

      @media (max-width: 700px) {
        .dd-flat-settings { padding-inline: 10px; }
        .dd-flat-settings .settings-nav-section,
        .dd-flat-settings .settings-detail-content,
        .dd-subpage-header,
        .dd-settings-version-footer { max-width: none; }
        .dd-subpage-header { margin-bottom: 10px; border-radius: 12px; }
        .dd-subpage-title { font-size: 17px; }
      }

      @media (max-width: 600px) {
        .dd-home-page-description { margin-bottom: 10px; }

        .dd-home-section-block .home-section-item,
        .dd-home-section-block .home-section-item.has-detail {
          grid-template-columns: 22px 36px minmax(0, 1fr) 42px;
          gap: 8px;
          padding: 9px 8px 7px;
        }
        .dd-home-section-block .home-section-icon { width: 36px; height: 36px; }

        /* On mobile the main action stands alone at the far right. */
        .dd-home-section-block .home-section-actions,
        .home-info-card-actions {
          display: flex;
          width: 42px;
          justify-content: flex-end;
          justify-self: end;
          margin-left: auto;
        }
        .dd-detail-desktop { display: none !important; }

        .dd-home-section-block .home-section-toggle,
        .dd-flat-subitem-row .home-section-toggle {
          width: 36px;
          height: 36px;
        }
        .dd-home-section-block .home-section-toggle ha-icon,
        .dd-flat-subitem-row .home-section-toggle ha-icon { --mdc-icon-size: 18px; }

        /* Mobile chevrons get their own slim, centered expand row. */
        .dd-mobile-expand-row {
          width: 100%;
          height: 24px;
          display: grid;
          place-items: center;
          padding: 0;
          border: 0;
          border-top: 1px solid color-mix(in srgb, var(--divider-color) 65%, transparent);
          color: var(--secondary-text-color);
          background: transparent;
          cursor: pointer;
        }
        .dd-mobile-expand-row[aria-expanded="true"] { color: var(--primary-color); }
        .dd-mobile-expand-row ha-icon { --mdc-icon-size: 18px; }

        .dd-home-section-block .home-section-title { font-size: 14px; }
        .dd-home-section-block .home-section-description { font-size: 11px; line-height: 1.3; }

        /* Center the hierarchy line under the parent icon: 8 + 22 + 8 + 18 = 56px. */
        .dd-home-inline-detail {
          margin-left: 56px;
          padding: 8px 0 10px 10px;
          border-left: 2px solid color-mix(in srgb, var(--divider-color) 78%, var(--primary-color));
        }
        .dd-flat-subdetail {
          margin-left: 10px;
          padding: 8px 0 8px 10px;
          border-left: 0;
        }

        .dd-flat-subitem-row {
          grid-template-columns: 36px minmax(0, 1fr) 42px;
          gap: 8px;
          padding: 8px 2px 7px;
        }
        .dd-draggable-subitem {
          grid-template-columns: 20px 36px minmax(0, 1fr) 42px;
        }
        .dd-flat-subitem-row .home-section-icon { width: 36px; height: 36px; }
        .dd-flat-subitem-row .dd-icon-action { width: 32px; height: 32px; }
        .dd-flat-subitem-row .dd-icon-action ha-icon { --mdc-icon-size: 17px; }

        /* Climate switches are the main action and sit flush right. */
        .dd-climate-area-settings .home-info-card-item {
          grid-template-columns: 30px minmax(0, 1fr) 48px;
          gap: 8px;
          padding: 4px 2px 4px 8px;
        }
        .dd-climate-area-settings .home-section-icon { width: 30px; height: 30px; }
        .dd-climate-actions {
          width: 48px;
          justify-self: end;
          justify-content: flex-end;
        }

        /* Add actions follow one mobile rule across custom cards and favorites. */
        .dd-inline-action-row {
          grid-template-columns: 1fr;
          gap: 8px;
        }
        .dd-inline-action-row .home-custom-card-add {
          width: 100%;
          justify-self: stretch;
          justify-content: center;
          box-sizing: border-box;
        }

        .dd-settings-version-footer { margin-top: 18px; font-size: 10px; }
      }
    </style>
  `;
}

applyFlatSettingsLayout();
