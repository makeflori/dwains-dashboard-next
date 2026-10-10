import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { HomeAssistant } from '../types/home-assistant';

@customElement('dwains-dashboard-next-mobile-climate-card')
export class DwainsDashboardNextMobileClimateCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public entityId = '';
  @property({ attribute: false }) public displayName = '';

  protected override render() {
    const state = this.hass?.states?.[this.entityId];
    if (!state) return nothing;

    const attrs = state.attributes || {};
    const name = this.displayName || attrs.friendly_name || this.entityId;
    const current = Number(attrs.current_temperature);
    const target = Number(attrs.temperature);
    const low = Number(attrs.target_temp_low);
    const high = Number(attrs.target_temp_high);
    const unit = this.hass?.config?.unit_system?.temperature || '°C';
    const mode = String(state.state || '');
    const action = String(attrs.hvac_action || '');

    const targetLabel = Number.isFinite(target)
      ? `${target} ${unit}`
      : Number.isFinite(low) && Number.isFinite(high)
        ? `${low}–${high} ${unit}`
        : '–';

    return html`
      <article class="climate-tile">
        <div class="climate-head">
          <div class="climate-copy">
            <div class="climate-name">${name}</div>
            <div class="climate-meta">${action && action !== 'idle' ? action : mode}</div>
          </div>
          <div class="climate-current">
            <strong>${Number.isFinite(current) ? current : '–'}</strong>
            <span>${unit}</span>
          </div>
        </div>
        <div class="climate-target">
          <span>Ziel</span>
          <strong>${targetLabel}</strong>
        </div>
      </article>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
    }

    .climate-tile {
      width: 100%;
      min-height: 88px;
      box-sizing: border-box;
      padding: 13px 14px;
      display: grid;
      gap: 12px;
      border-radius: 12px;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 7%, transparent);
      background: var(--card-background-color);
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
    }

    .climate-head {
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
    }

    .climate-copy {
      min-width: 0;
    }

    .climate-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 850;
      line-height: 1.15;
    }

    .climate-meta {
      margin-top: 3px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--secondary-text-color);
      font-size: 11px;
      font-weight: 650;
      text-transform: capitalize;
    }

    .climate-current {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: baseline;
      gap: 3px;
      color: var(--primary-text-color);
    }

    .climate-current strong {
      font-size: 25px;
      font-weight: 900;
      line-height: 1;
    }

    .climate-current span {
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 700;
    }

    .climate-target {
      min-height: 30px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      border-radius: 8px;
      color: var(--secondary-text-color);
      background: color-mix(in srgb, var(--primary-color) 6%, var(--secondary-background-color));
      font-size: 11px;
      font-weight: 700;
    }

    .climate-target strong {
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 850;
    }
  `;
}
