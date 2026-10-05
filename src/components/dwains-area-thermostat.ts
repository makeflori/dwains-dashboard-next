import { LitElement, PropertyValues, css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  mdiMinus,
  mdiPlus,
} from '@mdi/js';

import type { HassEntity, HomeAssistant } from '../types/home-assistant';
import { ddLocale, ddLocalize } from '../utils/localize';
import {
  canStepTemperature,
  formatTemperatureNumber,
  getThermostatActivity,
  getThermostatModel,
  stepDecimals,
  stepTemperature,
  type ThermostatActivity,
  type ThermostatModel,
} from '../utils/thermostat';
import { fireEvent } from './utils/fire-event';

// Wait this long after the last plus or minus before calling Home Assistant,
// so tapping plus three times sends one set_temperature with the final value.
const COMMIT_DELAY_MS = 800;
// After a successful call the new target is shown until Home Assistant reports
// it, or at most this long.
const CONFIRM_TIMEOUT_MS = 8000;

const ACTIVITY_ICONS: Record<ThermostatActivity, string> = {
  heat: 'mdi:fire',
  cool: 'mdi:snowflake',
  dry: 'mdi:water-percent',
  fan: 'mdi:fan',
  auto: 'mdi:thermostat-auto',
  idle: 'mdi:power',
  off: 'mdi:power-off',
};

/**
 * Compact thermostat for the room header: climate type, labelled target
 * temperature with minus/plus controls, and Home Assistant-style activity.
 * The type and activity buttons open Home Assistant's more-info dialog.
 */
@customElement('dwains-dashboard-next-area-thermostat')
export class DwainsAreaThermostat extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) public entityId = '';
  /** Room name, used in the button labels. */
  @property({ attribute: false }) public roomName = '';

  /** Target shown before Home Assistant confirms it. */
  @state() private _pendingTarget?: number;
  private _pendingEntityId?: string;
  private _commitTimer?: number;
  private _confirmTimer?: number;

  private _t(key: string, vars?: Record<string, string | number>): string {
    return ddLocalize(this.hass, key, vars);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    // Leaving the page right after a tap still sends the new target.
    this._flushCommit();
    this._clearConfirmTimer();
  }

  protected override willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);
    if (changedProps.has('entityId') && this._pendingEntityId && this._pendingEntityId !== this.entityId) {
      // Another room reused this element: send what was set for the old one.
      this._flushCommit();
    }
    if (changedProps.has('hass')) this._clearPendingWhenConfirmed();
  }

  private _unit(): string {
    return String((this.hass?.config as any)?.unit_system?.temperature || '°C');
  }

  private _stateObj(): HassEntity | undefined {
    return this.entityId ? this.hass?.states?.[this.entityId] : undefined;
  }

  private _displayTarget(model: ThermostatModel): number | undefined {
    return this._pendingTarget !== undefined && this._pendingEntityId === this.entityId
      ? this._pendingTarget
      : model.target;
  }

  private _formatValue(value: number, decimals: number, unit: string): string {
    return `${formatTemperatureNumber(value, decimals, ddLocale(this.hass))} ${unit}`;
  }

  private _activityLabel(stateObj: HassEntity): string {
    try {
      if (stateObj.attributes?.hvac_action) {
        return this.hass?.formatEntityAttributeValue?.(stateObj, 'hvac_action') || String(stateObj.attributes.hvac_action);
      }
      return this.hass?.formatEntityState?.(stateObj) || stateObj.state;
    } catch {
      return String(stateObj.attributes?.hvac_action || stateObj.state);
    }
  }

  private _adjust(direction: 1 | -1): void {
    const model = getThermostatModel(this._stateObj(), this._unit());
    if (model?.mode !== 'single') return;
    const current = this._displayTarget(model);
    if (current === undefined) return;
    const next = stepTemperature(current, direction, model);
    if (next === current) return;

    this._pendingTarget = next;
    this._pendingEntityId = this.entityId;
    this._clearConfirmTimer();
    if (this._commitTimer !== undefined) window.clearTimeout(this._commitTimer);
    this._commitTimer = window.setTimeout(() => {
      this._commitTimer = undefined;
      void this._commit();
    }, COMMIT_DELAY_MS);
  }

  private _flushCommit(): void {
    if (this._commitTimer === undefined) return;
    window.clearTimeout(this._commitTimer);
    this._commitTimer = undefined;
    void this._commit();
  }

  private async _commit(): Promise<void> {
    const entityId = this._pendingEntityId;
    const temperature = this._pendingTarget;
    const hass = this.hass;
    if (!entityId || temperature === undefined || !hass) return;

    try {
      await hass.callService('climate', 'set_temperature', { entity_id: entityId, temperature });
    } catch (err) {
      console.warn(`Failed to set the temperature of ${entityId}:`, err);
      // Revert, unless a newer tap is already waiting to be sent.
      if (this._isLatestPending(entityId, temperature)) this._clearPending();
      fireEvent(this, 'hass-notification', {
        message: this._t('thermostat.update_failed', { name: this.roomName || entityId }),
      });
      return;
    }

    if (!this._isLatestPending(entityId, temperature)) return;
    this._clearPendingWhenConfirmed();
    if (this._pendingTarget === undefined) return;
    this._clearConfirmTimer();
    this._confirmTimer = window.setTimeout(() => {
      this._confirmTimer = undefined;
      if (this._isLatestPending(entityId, temperature)) this._clearPending();
    }, CONFIRM_TIMEOUT_MS);
  }

  private _isLatestPending(entityId: string, temperature: number): boolean {
    return this._commitTimer === undefined &&
      this._pendingEntityId === entityId &&
      this._pendingTarget === temperature;
  }

  /** Drop the pending target once Home Assistant reports it. */
  private _clearPendingWhenConfirmed(): void {
    if (this._pendingTarget === undefined || this._commitTimer !== undefined || !this._pendingEntityId) return;
    const reported = Number(this.hass?.states?.[this._pendingEntityId]?.attributes?.temperature);
    if (Number.isFinite(reported) && Math.abs(reported - this._pendingTarget) < 1e-6) this._clearPending();
  }

  private _clearPending(): void {
    this._pendingTarget = undefined;
    this._pendingEntityId = undefined;
    this._clearConfirmTimer();
  }

  private _clearConfirmTimer(): void {
    if (this._confirmTimer !== undefined) {
      window.clearTimeout(this._confirmTimer);
      this._confirmTimer = undefined;
    }
  }

  private _openMoreInfo = (): void => {
    if (this.entityId) fireEvent(this, 'hass-more-info', { entityId: this.entityId });
  };

  private _icon(path: string) {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d=${path}></path></svg>`;
  }

  protected override render() {
    const stateObj = this._stateObj();
    const model = getThermostatModel(stateObj, this._unit());
    if (!stateObj || !model) return nothing;

    const name = this.roomName || stateObj.attributes?.friendly_name || this.entityId;
    const activity = getThermostatActivity(stateObj);
    const activityLabel = this._activityLabel(stateObj);
    const decimals = stepDecimals(model.step);
    const target = this._displayTarget(model);
    const detailsLabel = this._t('thermostat.details', { name, state: activityLabel });

    return html`
      <div class="thermostat activity-${activity}">
        <button
          class="type-icon"
          type="button"
          title=${detailsLabel}
          aria-label=${detailsLabel}
          @click=${this._openMoreInfo}
        >
          <ha-icon icon="mdi:thermostat"></ha-icon>
        </button>

        ${model.mode === 'single' && target !== undefined ? html`
          <div class="target" role="group" aria-label=${this._t('thermostat.target_label', { name })}>
            <span class="copy target-copy">
              <span class="label">${this._t('thermostat.target')}</span>
              <span class="value" aria-live="polite">${this._formatValue(target, decimals, model.unit)}</span>
            </span>
            <button
              class="step"
              type="button"
              title=${this._t('thermostat.lower', { name })}
              aria-label=${this._t('thermostat.lower', { name })}
              ?disabled=${!canStepTemperature(target, -1, model)}
              @click=${() => this._adjust(-1)}
            >
              ${this._icon(mdiMinus)}
            </button>
            <button
              class="step"
              type="button"
              title=${this._t('thermostat.raise', { name })}
              aria-label=${this._t('thermostat.raise', { name })}
              ?disabled=${!canStepTemperature(target, 1, model)}
              @click=${() => this._adjust(1)}
            >
              ${this._icon(mdiPlus)}
            </button>
          </div>
        ` : model.mode === 'range' && model.targetLow !== undefined && model.targetHigh !== undefined ? html`
          <button
            class="target-range"
            type="button"
            title=${detailsLabel}
            aria-label=${`${this._t('thermostat.target')}: ${this._formatValue(model.targetLow, decimals, model.unit)} - ${this._formatValue(model.targetHigh, decimals, model.unit)}. ${detailsLabel}`}
            @click=${this._openMoreInfo}
          >
            <span class="copy">
              <span class="label">${this._t('thermostat.target')}</span>
              <span class="value">
                ${formatTemperatureNumber(model.targetLow, decimals, ddLocale(this.hass))}
                -
                ${this._formatValue(model.targetHigh, decimals, model.unit)}
              </span>
            </span>
          </button>
        ` : nothing}

        <button
          class="mode"
          type="button"
          title=${detailsLabel}
          aria-label=${detailsLabel}
          @click=${this._openMoreInfo}
        >
          <ha-icon icon=${ACTIVITY_ICONS[activity]}></ha-icon>
        </button>
      </div>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      min-width: 0;
      -webkit-tap-highlight-color: transparent;
    }

    /* Same tile shape as the room tiles next to it. The --ph-* colors come
       from the page header, so the thermostat also follows a room picture. */
    .thermostat {
      --thermostat-color: var(--secondary-text-color, #6b7280);
      --climate-color: #34a6d8;
      --tile-text: var(--ph-text, var(--primary-text-color));
      --tile-muted: var(--ph-muted, var(--secondary-text-color));
      box-sizing: border-box;
      min-height: 52px;
      padding: 6px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      width: max-content;
      max-width: 100%;
      min-width: 0;
      border-radius: 14px;
      background: var(--ph-control, color-mix(in srgb, var(--primary-text-color) 6%, transparent));
      color: var(--tile-text);
      backdrop-filter: blur(16px) saturate(1.3);
      -webkit-backdrop-filter: blur(16px) saturate(1.3);
    }

    .thermostat.activity-heat { --thermostat-color: var(--state-climate-heat-color, #ff8100); }
    .thermostat.activity-cool { --thermostat-color: var(--state-climate-cool-color, #2b9af9); }
    .thermostat.activity-dry { --thermostat-color: var(--state-climate-dry-color, #efbd07); }
    .thermostat.activity-fan { --thermostat-color: var(--state-climate-fan_only-color, #00bcd4); }
    .thermostat.activity-auto { --thermostat-color: var(--state-climate-auto-color, #008000); }

    button {
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
      color: inherit;
      font: inherit;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }

    button:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    svg {
      width: 18px;
      height: 18px;
      flex: 0 0 auto;
      fill: currentColor;
    }

    .type-icon {
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 11px;
      background: color-mix(in srgb, var(--climate-color) 16%, transparent);
      color: var(--climate-color);
    }

    .type-icon ha-icon {
      --mdc-icon-size: 22px;
    }

    .target-range {
      min-height: 40px;
      padding: 0 8px;
      display: inline-flex;
      align-items: center;
      border-radius: 11px;
      transition: background-color 0.18s ease;
    }

    .target-range:hover {
      background: color-mix(in srgb, var(--tile-text) 7%, transparent);
    }

    .mode:hover {
      background: color-mix(in srgb, var(--thermostat-color) 22%, transparent);
    }

    .segment-icon {
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 11px;
      background: color-mix(in srgb, var(--thermostat-color) 16%, transparent);
      color: color-mix(in srgb, var(--thermostat-color) 78%, var(--tile-text));
    }

    .segment-icon svg {
      width: 20px;
      height: 20px;
    }

    .copy {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 1px;
      line-height: 1.1;
    }

    .label {
      color: var(--tile-muted);
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
    }

    .value {
      font-size: 14px;
      font-weight: 650;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .target {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      flex: 0 0 auto;
      padding: 0 2px 0 4px;
      border-radius: 11px;
    }

    .target-copy {
      min-width: 58px;
      align-items: flex-start;
      text-align: left;
    }

    .step {
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 10px;
      background: color-mix(in srgb, var(--tile-text) 8%, transparent);
      color: var(--tile-text);
      transition: background-color 0.18s ease, transform 0.12s ease, opacity 0.18s ease;
    }

    .step:hover:not(:disabled) {
      background: color-mix(in srgb, var(--tile-text) 13%, transparent);
    }

    .step:active:not(:disabled) {
      transform: scale(0.94);
    }

    .step:disabled {
      opacity: 0.4;
      cursor: default;
    }

    .mode {
      width: 36px;
      min-width: 36px;
      max-width: 36px;
      min-height: 36px;
      margin-left: 1px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      flex: 0 0 36px;
      border-radius: 10px;
      background: color-mix(in srgb, var(--thermostat-color) 15%, transparent);
      color: color-mix(in srgb, var(--thermostat-color) 78%, var(--tile-text));
      font-size: 12px;
      font-weight: 650;
      transition: background-color 0.18s ease;
    }

    .mode ha-icon {
      --mdc-icon-size: 17px;
      width: 17px;
      height: 17px;
    }

    @media (pointer: coarse) {

      .mode {
        min-height: 40px;
      }

      .step {
        width: 36px;
        height: 36px;
      }
    }

    @media (max-width: 380px) {
      .type-icon {
        display: none;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .target-range,
      .mode,
      .step {
        transition: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'dwains-dashboard-next-area-thermostat': DwainsAreaThermostat;
  }
}
