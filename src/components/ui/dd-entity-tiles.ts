import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { HomeAssistant } from '../../types/home-assistant';
import type { DwainsDashboardConfig } from '../../types/strategy';
import { getDomainColor } from '../../utils/icons';
import { resolveDeviceViewCardConfig } from '../../utils/blueprint-replacements';
import { stripAreaNameFromEntityName } from '../../utils/entity-names';
import '../utils/dd-card-host';
import '../dwains-person-tile';

@customElement('dd-next-device-entity-card')
export class DdNextDeviceEntityCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: DwainsDashboardConfig;
  @property() public entityId = '';
  @property() public areaName = '';
  @property() public displayName = '';

  private _showMoreInfo = (): void => {
    this.dispatchEvent(new CustomEvent('dd-more-info', {
      detail: { entityId: this.entityId },
      bubbles: true,
      composed: true,
    }));
  };

  private _personKeydown = (event: KeyboardEvent): void => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    this._showMoreInfo();
  };

  protected override render() {
    const state = this.hass?.states?.[this.entityId];
    if (!state || !this.config) return nothing;

    const domain = this.entityId.split('.')[0] || 'unknown';
    if (domain === 'person') {
      const rawName = this.displayName ||
        state.attributes?.friendly_name ||
        this.hass.entities?.[this.entityId]?.name ||
        this.entityId;
      const name = this.config?.settings?.hide_area_name_in_entity_names === true
        ? stripAreaNameFromEntityName(rawName, this.areaName)
        : rawName;

      return html`
        <dwains-dashboard-next-person-tile
          .hass=${this.hass}
          .entityId=${this.entityId}
          .displayName=${name}
          role="button"
          tabindex="0"
          aria-label=${name}
          @click=${this._showMoreInfo}
          @keydown=${this._personKeydown}
        ></dwains-dashboard-next-person-tile>
      `;
    }

    const coverStyle = domain === 'cover'
      ? `--primary-color: ${getDomainColor('cover')}; --state-cover-open-color: ${getDomainColor('cover')}; --state-cover-opening-color: ${getDomainColor('cover')}; --state-cover-active-color: ${getDomainColor('cover')};`
      : '';

    return html`
      <div class="card ${domain}-card">
        <dwains-dashboard-next-card-host
          framed
          style=${coverStyle}
          .hass=${this.hass}
          .config=${resolveDeviceViewCardConfig({
            hass: this.hass,
            config: this.config,
            entity: this.entityId,
            surface: 'devices_cards',
          })}
        ></dwains-dashboard-next-card-host>
      </div>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
      position: relative;
    }

    .card,
    dwains-dashboard-next-card-host {
      display: block;
      width: 100%;
      min-width: 0;
    }

    .climate-card {
      overflow: visible;
    }

    .climate-card > dwains-dashboard-next-card-host {
      width: calc(100% / .7);
      transform: scale(.7);
      transform-origin: top left;
    }

    @media (max-width: 768px) {
      .climate-card > dwains-dashboard-next-card-host {
        width: calc(100% / .7);
        transform: scale(.7);
        transform-origin: top left;
      }
    }
  `;
}

@customElement('dd-next-room-group')
export class DdNextRoomGroup extends LitElement {
  @property() public name = '';
  @property() public icon = 'mdi:floor-plan';
  @property() public accent = 'var(--primary-color)';
  @property({ type: Boolean, reflect: true }) public compact = false;

  protected override render() {
    return html`
      <section class="group" style=${`--dd-room-accent: ${this.accent};`}>
        <header class="header">
          <div class="title">
            <ha-icon icon=${this.icon}></ha-icon>
            <span>${this.name}</span>
          </div>
          <div class="actions"><slot name="actions"></slot></div>
        </header>
        <div class="content"><slot></slot></div>
      </section>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      min-width: 0;
    }

    .group {
      min-width: 0;
      padding: 14px;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 7%, transparent);
      border-radius: 12px;
      background: var(--card-background-color);
      box-shadow: 0 5px 14px rgba(15, 23, 42, .035);
    }

    .header {
      min-height: 30px;
      margin: 0 0 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .title {
      min-width: 0;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--primary-text-color);
      font-size: 16px;
      font-weight: 500;
      line-height: 1.15;
      text-align: left;
    }

    .title ha-icon {
      flex: 0 0 auto;
      color: var(--secondary-text-color);
      --mdc-icon-size: 20px;
      opacity: .8;
    }

    .title span {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .actions {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
    }

    .content {
      min-width: 0;
    }

    @media (max-width: 768px) {
      .group {
        padding: 10px;
      }

      .header {
        margin-bottom: 10px;
      }

      .title {
        font-size: 14px;
        font-weight: 850;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'dd-next-device-entity-card': DdNextDeviceEntityCard;
    'dd-next-room-group': DdNextRoomGroup;
  }
}
