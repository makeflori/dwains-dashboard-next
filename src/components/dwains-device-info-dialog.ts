import { mdiClose } from "@mdi/js";
import { css, html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant } from "../types/home-assistant";
import { fireEvent } from "./utils/fire-event";

export interface DeviceInfoDialogParams {
  deviceId: string;
  deviceName: string;
  entityIds: string[];
}

@customElement("dwains-dashboard-next-device-info-dialog")
export class DwainsDeviceInfoDialog extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _params?: DeviceInfoDialogParams;

  public showDialog(params: DeviceInfoDialogParams): void {
    this._params = params;
  }

  public closeDialog(): void {
    this._params = undefined;
    fireEvent(this, "dialog-closed", { dialog: this.localName });
  }

  private _showEntity(entityId: string): void {
    const homeAssistant = document.querySelector("home-assistant");
    fireEvent(homeAssistant || this, "hass-more-info", { entityId });
  }

  protected override render() {
    if (!this._params) return nothing;

    return html`
      <ha-dialog open @closed=${this.closeDialog} .heading=${this._params.deviceName} hideActions>
        <ha-dialog-header slot="header">
          <ha-icon-button
            slot="navigationIcon"
            .path=${mdiClose}
            @click=${this.closeDialog}
          ></ha-icon-button>
          <span slot="title">${this._params.deviceName}</span>
        </ha-dialog-header>

        <div class="content">
          ${this._params.entityIds.map((entityId) => {
            const state = this.hass?.states?.[entityId];
            if (!state) return nothing;
            const name = state.attributes?.friendly_name || entityId;
            return html`
              <button class="entity-row" type="button" @click=${() => this._showEntity(entityId)}>
                <ha-state-icon .hass=${this.hass} .stateObj=${state}></ha-state-icon>
                <span class="entity-copy">
                  <strong>${name}</strong>
                  <small>${entityId}</small>
                </span>
                <ha-icon icon="mdi:chevron-right"></ha-icon>
              </button>
            `;
          })}
        </div>
      </ha-dialog>
    `;
  }

  static override styles = css`
    :host {
      --mdc-dialog-min-width: min(520px, 92vw);
      --mdc-dialog-max-width: min(620px, 96vw);
    }

    .content {
      display: grid;
      gap: 6px;
      padding: 6px 18px 20px;
    }

    .entity-row {
      width: 100%;
      min-height: 54px;
      display: grid;
      grid-template-columns: 34px minmax(0, 1fr) 24px;
      align-items: center;
      gap: 10px;
      padding: 8px 10px;
      border: 1px solid var(--divider-color);
      border-radius: 10px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      cursor: pointer;
    }

    .entity-row:hover {
      background: var(--secondary-background-color);
    }

    .entity-copy {
      min-width: 0;
      display: grid;
      gap: 2px;
    }

    .entity-copy strong,
    .entity-copy small {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .entity-copy strong {
      font-size: 13px;
    }

    .entity-copy small {
      color: var(--secondary-text-color);
      font-size: 11px;
    }

    .entity-row > ha-icon {
      color: var(--secondary-text-color);
      --mdc-icon-size: 18px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "dwains-dashboard-next-device-info-dialog": DwainsDeviceInfoDialog;
  }
}
