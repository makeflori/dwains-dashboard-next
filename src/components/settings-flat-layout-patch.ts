
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
        border-color: color-mix(in srgb, var(--primary-color) 24%, var(--divider-color));
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
      .dd-home-detail-toggle:hover,
      .dd-icon-action:hover {
        background: color-mix(in srgb, var(--primary-color) 8%, transparent);
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
      .dd-inline-section-heading {
        display: grid;
        gap: 4px;
        padding: 4px 4px 12px;
      }
      .dd-inline-section-heading > strong,
      .dd-inline-section-heading > div > strong {
        color: var(--primary-text-color);
        font-size: 14px;
        line-height: 1.3;
      }
      .dd-inline-section-heading > span,
      .dd-inline-section-heading > div > span {
        color: var(--secondary-text-color);
        font-size: 12px;
        line-height: 1.4;
      }
      .dd-inline-section-heading-action {
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: center;
        gap: 10px;
      }
      .dd-inline-section-heading-action > div { display: grid; gap: 4px; }

      .dd-flat-sublist {
        overflow: hidden;
        border-top: 1px solid var(--divider-color);
      }
      .dd-flat-subitem + .dd-flat-subitem,
      .dd-flat-subitem-row + .dd-flat-subitem-row {
        border-top: 1px solid var(--divider-color);
      }
      .dd-flat-subitem-row {
        min-height: 62px;
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr) auto;
        align-items: center;
        gap: 10px;
        padding: 9px 4px;
        box-sizing: border-box;
      }
      .dd-draggable-subitem {
        grid-template-columns: 24px 42px minmax(0, 1fr) auto;
        cursor: grab;
      }
      .dd-draggable-subitem:active { cursor: grabbing; }
      .dd-flat-subitem-row .home-section-icon {
        width: 42px; height: 42px;
      }
      .dd-flat-subitem-row .home-section-copy { min-width: 0; }
      .dd-flat-subitem-row .home-section-title { font-size: 14px; }
      .dd-flat-subitem-row .home-section-description {
        font-size: 12px;
        line-height: 1.35;
      }
      .dd-flat-subdetail {
        margin-left: 52px;
        padding: 0 0 12px 12px;
        border-left: 2px solid color-mix(in srgb, var(--primary-color) 45%, var(--divider-color));
      }
      .dd-flat-subdetail .home-info-card-section {
        padding: 0;
      }
      .dd-flat-subdetail .home-info-card-header {
        padding: 10px 4px 8px;
      }
      .dd-flat-subdetail .home-info-card-list {
        border: 0;
        border-radius: 0;
      }
      .dd-flat-subdetail .home-info-card-item {
        border: 0;
        border-top: 1px solid var(--divider-color);
        border-radius: 0;
        background: transparent;
      }

      .dd-favorites-inline { padding: 2px 4px 6px; }
      .dd-favorites-auto {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: center;
        gap: 14px;
        padding: 10px 4px 14px;
        border-bottom: 1px solid var(--divider-color);
      }
      .dd-favorites-auto-copy { min-width: 0; display: grid; gap: 4px; }
      .dd-favorites-auto-copy strong {
        color: var(--primary-text-color);
        font-size: 14px;
      }
      .dd-favorites-auto-copy span {
        color: var(--secondary-text-color);
        font-size: 12px;
        line-height: 1.45;
      }
      .dd-favorites-picker { padding-top: 12px; }
      .dd-favorites-picker .entity-picker-header { margin-bottom: 10px; }
      .dd-favorites-picker .entity-picker-header h4 { margin: 0; }

      .home-custom-card-add ha-icon,
      .dd-favorites-picker mwc-button ha-icon {
        --mdc-icon-size: 18px;
        margin-right: 6px;
      }

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
        .dd-home-section-block .home-section-icon {
          width: 36px; height: 36px;
        }
        .dd-home-section-block .home-section-actions {
          grid-column: auto;
          justify-self: end;
        }
        .dd-home-section-block .home-section-toggle,
        .dd-home-section-block .dd-home-detail-toggle {
          width: 34px; height: 34px;
        }
        .dd-home-section-block .home-section-toggle ha-icon,
        .dd-home-section-block .dd-home-detail-toggle ha-icon {
          --mdc-icon-size: 18px;
        }
        .dd-home-section-block .home-section-title { font-size: 14px; }
        .dd-home-section-block .home-section-description {
          font-size: 11px;
          line-height: 1.3;
        }
        .dd-home-inline-detail { padding: 8px 10px 12px; }

        .dd-flat-subitem-row {
          grid-template-columns: 36px minmax(0, 1fr) auto;
          gap: 8px;
          padding: 9px 2px;
        }
        .dd-draggable-subitem {
          grid-template-columns: 20px 36px minmax(0, 1fr) auto;
        }
        .dd-flat-subitem-row .home-section-icon {
          width: 36px; height: 36px;
        }
        .dd-flat-subitem-row .home-section-toggle,
        .dd-flat-subitem-row .dd-home-detail-toggle,
        .dd-flat-subitem-row .dd-icon-action {
          width: 32px; height: 32px;
        }
        .dd-flat-subitem-row .home-section-toggle ha-icon,
        .dd-flat-subitem-row .dd-home-detail-toggle ha-icon,
        .dd-flat-subitem-row .dd-icon-action ha-icon {
          --mdc-icon-size: 17px;
        }
        .dd-flat-subdetail {
          margin-left: 44px;
          padding-left: 10px;
        }
        .dd-inline-section-heading-action {
          grid-template-columns: 1fr;
          align-items: stretch;
        }
        .dd-inline-section-heading-action .home-custom-card-add {
          justify-self: start;
        }
        .dd-favorites-auto {
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 10px;
        }
      }
    </style>
  `;
}

applyFlatSettingsLayout();
