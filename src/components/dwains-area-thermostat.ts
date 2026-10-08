import { LitElement, PropertyValues, css, html, nothing, render } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  mdiMinus,
  mdiPlus,
} from '@mdi/js';

import type { HassEntity, HomeAssistant } from '../types/home-assistant';
import { ddLocale, ddLocalize } from '../utils/localize';
import {
  canStepTemperature,
  canStepTemperatureRange,
  formatTemperatureNumber,
  getThermostatActivity,
  getThermostatModel,
  stepDecimals,
  stepTemperature,
  stepTemperatureRange,

  type ThermostatModel,
} from '../utils/thermostat';
import { fireEvent } from './utils/fire-event';

// Wait this long after the last plus or minus before calling Home Assistant,
// so tapping plus three times sends one set_temperature with the final value.
const COMMIT_DELAY_MS = 800;
// After a successful call the new target is shown until Home Assistant reports
// it, or at most this long.
const CONFIRM_TIMEOUT_MS = 8000;

const HVAC_MODE_ICONS: Record<string, string> = {
  heat: 'mdi:fire',
  cool: 'mdi:snowflake',
  heat_cool: 'mdi:sun-snowflake-variant',
  auto: 'mdi:thermostat-auto',
  dry: 'mdi:water-percent',
  fan_only: 'mdi:fan',
  off: 'mdi:power',
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
  /** Use the narrow vertical quick-control layout in the mobile room header. */
  @property({ attribute: false }) public compactVertical = false;

  /** Target shown before Home Assistant confirms it. */
  @state() private _pendingTarget?: number;
  @state() private _pendingRange?: { low: number; high: number };
  @state() private _modeMenuOpen = false;
  private _modeMenuPortal?: HTMLDivElement;
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
    this._closeModeMenu();
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

  private _displayRange(model: ThermostatModel): { low: number; high: number } | undefined {
    if (this._pendingRange && this._pendingEntityId === this.entityId) return this._pendingRange;
    if (model.targetLow === undefined || model.targetHigh === undefined) return undefined;
    return { low: model.targetLow, high: model.targetHigh };
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
    this._pendingRange = undefined;
    this._pendingEntityId = this.entityId;
    this._clearConfirmTimer();
    if (this._commitTimer !== undefined) window.clearTimeout(this._commitTimer);
    this._commitTimer = window.setTimeout(() => {
      this._commitTimer = undefined;
      void this._commit();
    }, COMMIT_DELAY_MS);
  }

  private _adjustRange(direction: 1 | -1): void {
    const model = getThermostatModel(this._stateObj(), this._unit());
    if (model?.mode !== 'range') return;
    const current = this._displayRange(model);
    if (!current) return;
    const next = stepTemperatureRange(current.low, current.high, direction, model);
    if (next.low === current.low && next.high === current.high) return;

    this._pendingRange = next;
    this._pendingTarget = undefined;
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
    const range = this._pendingRange;
    const hass = this.hass;
    if (!entityId || !hass || (temperature === undefined && !range)) return;

    try {
      if (range) {
        await hass.callService('climate', 'set_temperature', {
          entity_id: entityId,
          target_temp_low: range.low,
          target_temp_high: range.high,
        });
      } else {
        await hass.callService('climate', 'set_temperature', { entity_id: entityId, temperature });
      }
    } catch (err) {
      console.warn(`Failed to set the temperature of ${entityId}:`, err);
      if (this._pendingEntityId === entityId && this._commitTimer === undefined) this._clearPending();
      fireEvent(this, 'hass-notification', {
        message: this._t('thermostat.update_failed', { name: this.roomName || entityId }),
      });
      return;
    }

    if (this._pendingEntityId !== entityId || this._commitTimer !== undefined) return;
    this._clearPendingWhenConfirmed();
    if (this._pendingEntityId !== entityId) return;
    this._clearConfirmTimer();
    this._confirmTimer = window.setTimeout(() => {
      this._confirmTimer = undefined;
      if (this._pendingEntityId === entityId) this._clearPending();
    }, CONFIRM_TIMEOUT_MS);
  }

  /** Drop the pending target once Home Assistant reports it. */
  private _clearPendingWhenConfirmed(): void {
    if (this._commitTimer !== undefined || !this._pendingEntityId) return;
    const attrs = this.hass?.states?.[this._pendingEntityId]?.attributes;
    if (!attrs) return;

    if (this._pendingRange) {
      const low = Number(attrs.target_temp_low);
      const high = Number(attrs.target_temp_high);
      if (
        Number.isFinite(low) &&
        Number.isFinite(high) &&
        Math.abs(low - this._pendingRange.low) < 1e-6 &&
        Math.abs(high - this._pendingRange.high) < 1e-6
      ) {
        this._clearPending();
      }
      return;
    }

    if (this._pendingTarget !== undefined) {
      const reported = Number(attrs.temperature);
      if (Number.isFinite(reported) && Math.abs(reported - this._pendingTarget) < 1e-6) this._clearPending();
    }
  }

  private _clearPending(): void {
    this._pendingTarget = undefined;
    this._pendingRange = undefined;
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
    if (this._modeMenuOpen) {
      this._closeModeMenu();
      return;
    }
    if (this.entityId) fireEvent(this, 'hass-more-info', { entityId: this.entityId });
  };

  private _handleThermostatKeydown = (event: KeyboardEvent): void => {
    if (event.target !== event.currentTarget) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    this._openMoreInfo();
  };

  private _handleStepClick(event: Event, direction: 1 | -1): void {
    event.stopPropagation();
    this._adjust(direction);
  }

  private _supportedModes(stateObj: HassEntity): string[] {
    return Array.isArray(stateObj.attributes?.hvac_modes)
      ? stateObj.attributes.hvac_modes.map((mode: unknown) => String(mode))
      : [];
  }

  private _modeLabel(stateObj: HassEntity, mode: string): string {
    try {
      return this.hass?.formatEntityState?.({ ...stateObj, state: mode } as HassEntity) || mode;
    } catch {
      return mode.split('_').join(' ');
    }
  }

  private _closeModeMenu = (): void => {
    this._modeMenuOpen = false;
    if (this._modeMenuPortal) {
      render(nothing, this._modeMenuPortal);
      this._modeMenuPortal.remove();
      this._modeMenuPortal = undefined;
    }
  };

  private _toggleModeMenu(event: Event): void {
    event.stopPropagation();

    if (this._modeMenuOpen) {
      this._closeModeMenu();
      return;
    }

    const button = event.currentTarget as HTMLElement | null;
    const stateObj = this._stateObj();
    if (!button || !stateObj) return;

    const modes = this._supportedModes(stateObj);
    if (!modes.length) return;

    const currentMode = String(stateObj.state || '').toLowerCase();
    const portal = document.createElement('div');
    portal.className = 'dd-next-hvac-mode-portal';
    portal.style.cssText = [
      'position:fixed',
      'z-index:10000',
      'visibility:hidden',
      'min-width:176px',
      'max-width:calc(100vw - 16px)',
      'box-sizing:border-box'
    ].join(';');

    render(html`
      <style>
        .dd-next-hvac-mode-menu {
          box-sizing: border-box;
          min-width: 176px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          border-radius: 12px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color, #111);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
          font: inherit;
        }
        .dd-next-hvac-mode-item {
          min-height: 38px;
          padding: 0 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          color: inherit;
          font: inherit;
          white-space: nowrap;
          text-align: left;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .dd-next-hvac-mode-item.active {
          background: color-mix(in srgb, var(--primary-color) 10%, transparent);
          color: var(--primary-color);
          font-weight: 600;
        }
        .dd-next-hvac-mode-item ha-icon {
          --mdc-icon-size: 20px;
        }
      </style>
      <div class="dd-next-hvac-mode-menu" role="menu" @click=${(menuEvent: Event) => menuEvent.stopPropagation()}>
        ${modes.map(mode => html`
          <button
            class="dd-next-hvac-mode-item ${mode === currentMode ? 'active' : ''}"
            type="button"
            role="menuitemradio"
            aria-checked=${mode === currentMode ? 'true' : 'false'}
            @click=${(menuEvent: Event) => this._setHvacMode(menuEvent, mode)}
          >
            <ha-icon icon=${HVAC_MODE_ICONS[mode] || 'mdi:thermostat'}></ha-icon>
            <span>${this._modeLabel(stateObj, mode)}</span>
          </button>
        `)}
      </div>
    `, portal);

    document.body.appendChild(portal);
    const triggerRect = button.getBoundingClientRect();
    const menuRect = portal.getBoundingClientRect();
    const margin = 8;
    const left = Math.min(
      Math.max(margin, triggerRect.left),
      Math.max(margin, window.innerWidth - menuRect.width - margin)
    );
    const belowTop = triggerRect.bottom + margin;
    const top = belowTop + menuRect.height <= window.innerHeight - margin
      ? belowTop
      : Math.max(margin, triggerRect.top - menuRect.height - margin);

    portal.style.left = `${left}px`;
    portal.style.top = `${top}px`;
    portal.style.visibility = 'visible';
    this._modeMenuPortal = portal;
    this._modeMenuOpen = true;
  }

  private async _setHvacMode(event: Event, hvacMode: string): Promise<void> {
    event.stopPropagation();
    this._closeModeMenu();
    if (!this.hass || !this.entityId || hvacMode === this._stateObj()?.state) return;

    try {
      await this.hass.callService('climate', 'set_hvac_mode', {
        entity_id: this.entityId,
        hvac_mode: hvacMode,
      });
    } catch (err) {
      console.warn(`Failed to set HVAC mode of ${this.entityId}:`, err);
      fireEvent(this, 'hass-notification', {
        message: this._t('thermostat.update_failed', { name: this.roomName || this.entityId }),
      });
    }
  }

  private _handleRangeStepClick(event: Event, direction: 1 | -1): void {
    event.stopPropagation();
    this._adjustRange(direction);
  }

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
    const range = this._displayRange(model);
    const detailsLabel = this._t('thermostat.details', { name, state: activityLabel });
    const modes = this._supportedModes(stateObj);
    const currentMode = String(stateObj.state || '').toLowerCase();
    const currentModeLabel = this._modeLabel(stateObj, currentMode);
    const modeIcon = HVAC_MODE_ICONS[currentMode] || 'mdi:thermostat';

    return html`
      <div
        class="thermostat activity-${activity} ${this.compactVertical ? 'compact-vertical' : ''}"
        role="button"
        tabindex="0"
        title=${detailsLabel}
        aria-label=${detailsLabel}
        @click=${this._openMoreInfo}
        @keydown=${this._handleThermostatKeydown}
      >
        <div class="mode-control">
          <button
            class="type-icon"
            type="button"
            title=${currentModeLabel}
            aria-label=${currentModeLabel}
            aria-haspopup="menu"
            aria-expanded=${this._modeMenuOpen ? 'true' : 'false'}
            @click=${this._toggleModeMenu}
          >
            <ha-icon icon=${modeIcon}></ha-icon>
          </button>

        </div>

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
              @click=${(event: Event) => this._handleStepClick(event, -1)}
            >
              ${this._icon(mdiMinus)}
            </button>
            <button
              class="step"
              type="button"
              title=${this._t('thermostat.raise', { name })}
              aria-label=${this._t('thermostat.raise', { name })}
              ?disabled=${!canStepTemperature(target, 1, model)}
              @click=${(event: Event) => this._handleStepClick(event, 1)}
            >
              ${this._icon(mdiPlus)}
            </button>
          </div>
        ` : model.mode === 'range' && range ? html`
          <div class="target" role="group" aria-label=${this._t('thermostat.target_label', { name })}>
            <span class="copy target-copy range-copy">
              <span class="label">${this._t('thermostat.target')}</span>
              <span class="value" aria-live="polite">
                ${formatTemperatureNumber(range.low, decimals, ddLocale(this.hass))}
                –
                ${this._formatValue(range.high, decimals, model.unit)}
              </span>
            </span>
            <button
              class="step"
              type="button"
              title=${this._t('thermostat.lower', { name })}
              aria-label=${this._t('thermostat.lower', { name })}
              ?disabled=${!canStepTemperatureRange(range.low, range.high, -1, model)}
              @click=${(event: Event) => this._handleRangeStepClick(event, -1)}
            >
              ${this._icon(mdiMinus)}
            </button>
            <button
              class="step"
              type="button"
              title=${this._t('thermostat.raise', { name })}
              aria-label=${this._t('thermostat.raise', { name })}
              ?disabled=${!canStepTemperatureRange(range.low, range.high, 1, model)}
              @click=${(event: Event) => this._handleRangeStepClick(event, 1)}
            >
              ${this._icon(mdiPlus)}
            </button>
          </div>
        ` : html`
          <div class="target mode-only">
            <span class="copy target-copy">
              <span class="label">${this._t('thermostat.target')}</span>
              <span class="value">${currentMode === 'off' ? currentModeLabel : currentModeLabel}</span>
            </span>
          </div>
        `}
      </div>
    `;
  }

  static override styles = css`
    :host {
      display: inline-block;
      min-width: 0;
      -webkit-tap-highlight-color: transparent;
    }

    /* Same tile shape as the room tiles next to it. The --ph-* colors come
       from the page header, so the thermostat also follows a room picture. */
    .thermostat {
      --thermostat-color: var(--secondary-text-color, #6b7280);
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
      cursor: pointer;
      overflow: visible;
      transition: background-color 0.18s ease, transform 0.12s ease;
    }

    .thermostat:hover {
      background: var(--ph-control-hover, color-mix(in srgb, var(--primary-text-color) 11%, transparent));
    }

    .thermostat.compact-vertical {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      min-height: 140px;
      padding: 8px 6px;
      display: grid;
      grid-template-rows: 46px 74px;
      align-items: center;
      justify-items: center;
      gap: 4px;
      text-align: center;
      border-radius: 16px;
    }

    .compact-vertical .mode-control {
      align-self: center;
    }

    .compact-vertical .type-icon {
      width: 46px;
      height: 46px;
      border-radius: 12px;
    }

    .compact-vertical .type-icon ha-icon {
      --mdc-icon-size: 25px;
    }

    .compact-vertical .target {
      width: 100%;
      min-width: 0;
      height: 74px;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: max-content max-content;
      grid-template-rows: 34px 36px;
      align-items: center;
      justify-content: center;
      justify-items: center;
      gap: 4px;
    }

    .compact-vertical .target-copy {
      grid-column: 1 / -1;
      min-width: 0;
      width: 100%;
      align-items: center;
      text-align: center;
    }

    .compact-vertical .label,
    .compact-vertical .value {
      max-width: 100%;
      text-align: center;
    }

    .compact-vertical .label {
      font-size: 12px;
      font-weight: 650;
      line-height: 1.05;
    }

    .compact-vertical .value {
      font-size: 13px;
      font-weight: 700;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .compact-vertical .step {
      width: 36px;
      height: 36px;
      margin: 0;
    }

    .compact-vertical .mode-only {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }

    .thermostat:active {
      transform: scale(0.98);
    }

    .thermostat:focus-visible {
      outline: none;
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

    .mode-control {
      position: relative;
      flex: 0 0 auto;
    }

    .type-icon {
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 11px;
      background: color-mix(in srgb, var(--thermostat-color) 16%, transparent);
      color: color-mix(in srgb, var(--thermostat-color) 82%, var(--tile-text));
    }

    .type-icon ha-icon {
      --mdc-icon-size: 22px;
    }

    .mode-menu {
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 0;
      min-width: 176px;
      padding: 6px;
      display: flex;
      flex-direction: column;
      gap: 2px;
      border-radius: 12px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
    }

    .mode-item {
      min-height: 38px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 9px;
      white-space: nowrap;
      text-align: left;
    }

    .mode-item:hover,
    .mode-item.active {
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }

    .mode-item.active {
      color: var(--primary-color);
      font-weight: 600;
    }

    .mode-item ha-icon {
      --mdc-icon-size: 20px;
    }

    .thermostat.activity-heat .type-icon,
    .thermostat.activity-cool .type-icon,
    .thermostat.activity-dry .type-icon,
    .thermostat.activity-fan .type-icon,
    .thermostat.activity-auto .type-icon,
    .thermostat.activity-idle .type-icon {
      background: var(--thermostat-color);
      color: #ffffff;
      box-shadow: 0 6px 14px color-mix(in srgb, var(--thermostat-color) 26%, transparent);
    }

    .target-range {
      min-height: 40px;
      padding: 0 8px;
      display: inline-flex;
      align-items: center;
      border-radius: 11px;
      transition: background-color 0.18s ease;
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

    .range-copy {
      min-width: 94px;
    }

    .mode-only {
      padding-right: 8px;
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

    @media (pointer: coarse) {
      .step {
        width: 36px;
        height: 36px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .thermostat,
      .target-range,
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
