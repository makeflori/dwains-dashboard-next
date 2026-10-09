import { mdiClose } from "@mdi/js";
import { LitElement, html, css, PropertyValues, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import type { HomeAssistant } from '../types/home-assistant';
import type { DwainsDashboardConfig, EntityConfig } from '../types/strategy';
import { getDomainName } from '../utils/domain-names';
import { getDeviceClassIcon, getDomainColor, getDomainIcon } from '../utils/icons';
import { ddLocalize, ddLocalizePlural } from '../utils/localize';
import { fireEvent } from './utils/fire-event';
import { formatEntityStateWithUnit, formatValueWithUnit } from '../utils/unit-format';
import { stripAreaNameFromEntityName } from '../utils/entity-names';
import './utils/dd-card-host';

export interface DomainEntitiesDialogParams {
  domain: string;
  areaId?: string;
  config: DwainsDashboardConfig;
  filterByUnitOfMeasurement?: string;
  deviceClass?: string;
  entityIds?: string[];
  viewAllLabel?: string;
  onViewAll?: () => void;
  customTitle?: string;
  customEntities?: string[];
  customDescription?: string;
}

interface GroupedEntities {
  [areaId: string]: {
    areaName: string;
    entities: EntityConfig[];
  };
}

type BulkDomainAction = 'turn_on' | 'turn_off' | 'open_cover' | 'close_cover' | 'lock' | 'unlock';
const OPTIMISTIC_ENTITY_STATE_TTL = 5000;

interface OptimisticEntityState {
  state: string;
  expiresAt: number;
}

@customElement('dwains-dashboard-next-domain-entities-dialog')
export class DwainsDomainEntitiesDialog extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _params?: DomainEntitiesDialogParams;
  @state() private _groupedEntities: GroupedEntities = {};
  @state() private _loading = true;
  @state() private _optimisticEntityStates: Record<string, OptimisticEntityState> = {};

  private _entityCards = new Map<string, HTMLElement>();
  private _updateInterval?: number;
  private _mobileSheetAnimated = false;
  private _sheetDragStartY: number | null = null;
  private _sheetDragOffset = 0;
  private _optimisticCleanupTimer?: number;

  private _t(key: string, vars?: Record<string, string | number>): string {
    return ddLocalize(this.hass, key, vars);
  }

  private _tp(key: string, count: number): string {
    return ddLocalizePlural(this.hass, key, count);
  }

  static override styles = css`
    :host {
      --mdc-dialog-min-width: 90vw;
      --mdc-dialog-max-width: 1200px;
      --mdc-dialog-max-height: 90vh;
      --mdc-dialog-z-index: 10;
      --dialog-backdrop-opacity: 0.4;
      -webkit-tap-highlight-color: transparent;
    }

    ha-dialog {
      --mdc-dialog-heading-ink-color: var(--primary-text-color);
      --mdc-dialog-content-ink-color: var(--primary-text-color);
      --dialog-content-padding: 0;
      --ha-dialog-scrim-backdrop-filter: brightness(72%) blur(2px);
      --mdc-dialog-scrim-color: rgba(0, 0, 0, 0.28);
    }

    ha-dialog-header {
      --mdc-typography-headline6-font-size: 20px;
      --mdc-typography-headline6-font-weight: 500;
    }

    .sheet-handle {
      display: none;
    }

    .content {
      padding: 16px 18px 22px !important;
      overflow: auto;
      max-height: calc(90vh - 120px);
      background: var(--primary-background-color);
    }

    .area-section {
      margin-bottom: 18px;
      background: color-mix(in srgb, var(--card-background-color) 98%, #ffffff);
      border-radius: 16px;
      overflow: hidden;
      box-shadow:
        0 14px 34px rgba(15, 23, 42, 0.06),
        inset 0 0 0 1px rgba(15, 23, 42, 0.04);
    }

    .area-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px 0;
      background: transparent;
      border-bottom: 0;
    }

    .area-header:has(.area-icon) {
      gap: 12px;
    }

    .area-header:not(:has(.area-icon)) {
      gap: 0;
    }

    .area-icon {
      width: 34px;
      height: 34px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--primary-color) 12%, transparent);
      color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .area-icon ha-icon {
      --mdc-icon-size: 19px;
    }

    .area-name {
      font-size: 18px;
      font-weight: 850;
      flex: 1;
    }

    .entity-count {
      color: var(--secondary-text-color);
      font-size: 13px;
      font-weight: 750;
    }

    .entities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
      gap: 12px;
      padding: 16px;
    }

    .domain-todo-list-card {
      grid-column: 1 / -1;
      min-width: 0;
    }

    .domain-todo-list-card dwains-dashboard-next-card-host {
      display: block;
      width: 100%;
    }

    .domain-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin: 0 0 16px;
    }

    .domain-action-button {
      min-height: 40px;
      padding: 0 14px;
      border: 0;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: var(--primary-text-color);
      background: var(--card-background-color);
      font: inherit;
      font-size: 13px;
      font-weight: 800;
      cursor: pointer;
      box-shadow:
        0 10px 22px rgba(15, 23, 42, 0.07),
        inset 0 0 0 1px rgba(15, 23, 42, 0.05);
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }

    .domain-action-button:hover {
      transform: translateY(-1px);
      box-shadow:
        0 14px 26px rgba(15, 23, 42, 0.1),
        inset 0 0 0 1px rgba(15, 23, 42, 0.07);
    }

    .domain-action-button:active {
      transform: scale(0.97);
    }

    .domain-action-button ha-icon {
      --mdc-icon-size: 18px;
      color: var(--domain-color, var(--primary-color));
    }

    .dialog-view-all {
      min-height: 40px;
      padding: 0 14px;
      border: 0;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 12%, transparent);
      font: inherit;
      font-size: 13px;
      font-weight: 850;
      cursor: pointer;
      transition: transform 0.18s ease, background 0.18s ease;
    }

    .dialog-view-all:hover {
      background: color-mix(in srgb, var(--primary-color) 18%, transparent);
      transform: translateY(-1px);
    }

    .dialog-view-all:active {
      transform: scale(0.97);
    }

    .dialog-view-all ha-icon {
      --mdc-icon-size: 18px;
    }

    .domain-entity-card {
      --entity-color: var(--primary-color);
      position: relative;
      box-sizing: border-box;
      min-width: 0;
      min-height: 132px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      border: 0;
      border-radius: 12px;
      background: color-mix(in srgb, var(--card-background-color) 98%, #ffffff);
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      cursor: pointer;
      box-shadow:
        0 12px 26px rgba(15, 23, 42, 0.06),
        inset 0 0 0 1px rgba(15, 23, 42, 0.035);
      transition:
        transform 0.18s ease,
        box-shadow 0.18s ease;
    }

    .domain-entity-card:active {
      transform: scale(0.985);
    }

    .domain-entity-card.is-active {
      box-shadow:
        0 14px 30px rgba(15, 23, 42, 0.08),
        inset 0 0 0 1px color-mix(in srgb, var(--entity-color) 18%, transparent);
    }

    .domain-entity-card.is-unavailable {
      opacity: 0.62;
    }

    .domain-entity-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
    }

    .domain-entity-icon {
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 11px;
      color: var(--entity-color);
      background: color-mix(in srgb, var(--entity-color) 13%, transparent);
    }

    .domain-entity-icon ha-icon {
      --mdc-icon-size: 20px;
    }

    .domain-entity-action {
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border: 0;
      cursor: pointer;
      transition:
        background-color 0.18s ease,
        color 0.18s ease,
        transform 0.18s ease,
        opacity 0.18s ease;
    }

    .domain-entity-action:active {
      transform: scale(0.94);
    }

    .domain-entity-action:disabled {
      opacity: 0.36;
      cursor: not-allowed;
    }

    .domain-entity-toggle {
      width: 38px;
      height: 22px;
      justify-content: flex-start;
      border-radius: 999px;
      background: color-mix(in srgb, var(--secondary-background-color) 80%, #ffffff);
      box-shadow:
        inset 0 0 0 1px rgba(15, 23, 42, 0.07),
        0 4px 10px rgba(15, 23, 42, 0.08);
    }

    .domain-entity-toggle::before {
      content: "";
      width: 18px;
      height: 18px;
      margin-left: 2px;
      border-radius: 999px;
      background: #ffffff;
      box-shadow: 0 2px 7px rgba(15, 23, 42, 0.2);
      transition: transform 0.18s ease;
    }

    .domain-entity-card.is-active .domain-entity-toggle {
      background: var(--entity-color);
    }

    .domain-entity-card.is-active .domain-entity-toggle::before {
      transform: translateX(16px);
    }

    .domain-entity-more,
    .domain-lock-action {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
      background: color-mix(in srgb, var(--secondary-background-color) 70%, #ffffff);
      box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.05);
    }

    .domain-lock-action.is-unlocked {
      color: #ffffff;
      background: var(--entity-color);
      box-shadow: 0 8px 16px color-mix(in srgb, var(--entity-color) 24%, transparent);
    }

    .domain-entity-more ha-icon,
    .domain-lock-action ha-icon {
      --mdc-icon-size: 17px;
    }

    .domain-cover-actions {
      min-height: 32px;
      padding: 3px;
      display: inline-flex;
      align-items: center;
      gap: 3px;
      flex: 0 0 auto;
      border-radius: 999px;
      background: color-mix(in srgb, var(--secondary-background-color) 74%, #ffffff);
      box-shadow:
        inset 0 0 0 1px rgba(15, 23, 42, 0.055),
        0 6px 14px rgba(15, 23, 42, 0.08);
    }

    .domain-cover-action {
      width: 26px;
      height: 26px;
      border-radius: 999px;
      color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
      background: transparent;
    }

    .domain-cover-action.active {
      color: #ffffff;
      background: var(--entity-color);
      box-shadow: 0 6px 12px color-mix(in srgb, var(--entity-color) 22%, transparent);
    }

    .domain-cover-action ha-icon {
      --mdc-icon-size: 16px;
    }

    .domain-entity-copy {
      min-width: 0;
    }

    .domain-entity-meta {
      margin-bottom: 3px;
      color: color-mix(in srgb, var(--secondary-text-color) 78%, transparent);
      font-size: 11px;
      font-weight: 800;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .domain-entity-name {
      color: var(--primary-text-color);
      font-size: 15px;
      font-weight: 850;
      line-height: 1.05;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .domain-entity-status {
      margin-top: 5px;
      color: color-mix(in srgb, var(--secondary-text-color) 84%, transparent);
      font-size: 12px;
      font-weight: 760;
      line-height: 1.15;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      font-size: 16px;
      opacity: 0.6;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 24px;
      text-align: center;
    }

    .empty-state ha-icon {
      --mdc-icon-size: 64px;
      opacity: 0.3;
      margin-bottom: 16px;
    }

    .empty-state-text {
      font-size: 16px;
      opacity: 0.6;
    }

    .custom-description {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: var(--warning-color);
      color: white;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    .custom-description ha-icon {
      --mdc-icon-size: 20px;
      margin-top: 2px;
      flex-shrink: 0;
    }

    .custom-description p {
      margin: 0;
      line-height: 1.5;
      font-size: 14px;
    }

    /* Responsive design */
    @media (max-width: 600px) {
      :host {
        --mdc-dialog-min-width: min(calc(100vw - 4px), 480px);
        --mdc-dialog-max-width: min(calc(100vw - 4px), 480px);
        --mdc-dialog-min-height: 0px;
        --mdc-dialog-max-height: calc(100dvh - 54px);
        --ha-dialog-min-height: 0px;
        --ha-dialog-max-height: calc(100dvh - 54px);
        --vertical-align-dialog: flex-end;
        --dialog-surface-margin-top: auto;
        --dialog-container-padding: 0;
        --ha-dialog-scrim-backdrop-filter: brightness(66%) blur(2px);
        --mdc-dialog-scrim-color: rgba(0, 0, 0, 0.34);
      }

      ha-dialog {
        margin: 0 !important;
        border-radius: 24px 24px 0 0 !important;
        --mdc-dialog-container-elevation: 0 18px 50px rgba(15, 23, 42, 0.28);
        --ha-dialog-border-radius: 24px 24px 0 0;
        --ha-dialog-show-duration: 1ms;
        --show-duration: 1ms;
        --ha-dialog-hide-duration: 160ms;
        --hide-duration: 160ms;
      }

      ha-dialog .mdc-dialog__surface {
        border-radius: 24px 24px 0 0 !important;
        overflow: hidden;
      }

      ha-dialog-header {
        position: relative;
        padding-top: 22px;
      }

      .sheet-handle {
        display: block;
        position: absolute;
        top: 8px;
        left: 50%;
        width: 38px;
        height: 4px;
        border-radius: 999px;
        transform: translateX(-50%);
        background: color-mix(in srgb, var(--secondary-text-color) 24%, transparent);
      }

      .content {
        max-height: calc(100dvh - 148px);
        padding: 12px 12px calc(16px + env(safe-area-inset-bottom, 0px)) !important;
      }

      .area-section {
        margin-bottom: 16px;
        border-radius: 14px;
      }

      .entities-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        padding: 12px;
      }

      .domain-entity-card {
        min-height: 126px;
      }
    }
    /* Shared Home-information dialog language, aligned with the power detail dialog. */
    :host {
      --mdc-dialog-max-width: 900px;
    }

    ha-dialog {
      --ha-dialog-border-radius: 14px;
      --mdc-dialog-container-elevation: 0 24px 64px rgba(8, 13, 24, 0.24);
    }

    ha-dialog-header {
      min-height: 64px;
      padding: 10px 14px;
      background: var(--card-background-color);
      box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--divider-color) 65%, transparent);
    }

    ha-dialog-header span[slot="title"] {
      font-size: 20px;
      font-weight: 900;
      line-height: 1.05;
    }

    .content {
      padding: 14px 16px 18px !important;
      background: var(--primary-background-color);
    }

    .domain-actions {
      margin-bottom: 12px;
    }

    .dialog-view-all,
    .domain-action-button {
      min-height: 36px;
      border-radius: 999px;
      font-size: 12px;
    }

    .area-section {
      margin-bottom: 12px;
      border-radius: 11px;
      background: var(--card-background-color);
      box-shadow:
        inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 7%, transparent),
        0 8px 22px rgba(15, 23, 42, 0.04);
    }

    .area-header {
      min-height: 48px;
      padding: 10px 12px 0;
    }

    .area-icon {
      width: 30px;
      height: 30px;
      border-radius: 8px;
    }

    .area-icon ha-icon {
      --mdc-icon-size: 17px;
    }

    .area-name {
      font-size: 15px;
      font-weight: 850;
    }

    .entity-count {
      font-size: 11px;
    }

    .entities-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 9px;
      padding: 10px 12px 12px;
    }

    .domain-entity-card {
      min-height: 108px;
      padding: 11px;
      border-radius: 10px;
      background: var(--card-background-color);
      box-shadow:
        inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 6%, transparent),
        0 6px 16px rgba(15, 23, 42, 0.04);
    }

    .domain-entity-icon {
      width: 32px;
      height: 32px;
      border-radius: 9px;
    }

    .domain-entity-icon ha-icon {
      --mdc-icon-size: 18px;
    }

    .domain-entity-name {
      font-size: 13px;
    }

    .domain-entity-status {
      font-size: 11px;
    }

    @media (max-width: 900px) and (min-width: 601px) {
      .entities-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (max-width: 600px) {
      .content {
        padding: 12px 12px calc(84px + env(safe-area-inset-bottom, 0px)) !important;
      }

      .area-section {
        border-radius: 14px;
      }

      .entities-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }

      .domain-entity-card {
        min-height: 116px;
      }
    }

    /* House-information dialogs share one compact two-column language. */
    .dialog-title-line {
      min-width: 0;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .dialog-title-text {
      font-size: 20px;
      font-weight: 900;
      line-height: 1.05;
    }
    .dialog-header-destination {
      min-height: 30px;
      padding: 0 10px;
      border: 0;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 10%, var(--card-background-color));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 14%, transparent);
      font: inherit;
      font-size: 11px;
      font-weight: 850;
      cursor: pointer;
    }
    .dialog-header-destination:hover {
      background: color-mix(in srgb, var(--primary-color) 15%, var(--card-background-color));
    }
    .dialog-header-destination ha-icon { --mdc-icon-size: 16px; }

    .entities-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 10px !important;
    }
    .domain-entity-card { min-height: 112px !important; }
    .domain-entity-name {
      overflow: visible !important;
      text-overflow: clip !important;
      white-space: normal !important;
      overflow-wrap: anywhere;
      display: block !important;
      -webkit-line-clamp: unset !important;
      -webkit-box-orient: initial !important;
      line-height: 1.12 !important;
    }
    .domain-entity-status {
      overflow: visible !important;
      text-overflow: clip !important;
      white-space: normal !important;
    }
    @media (max-width: 600px) {
      .dialog-title-line { gap: 7px; }
      .dialog-title-text { font-size: 18px; }
      .dialog-header-destination {
        min-height: 28px;
        padding: 0 8px;
        font-size: 10px;
      }
      .entities-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
    }

    /* Final house-information dialog consistency pass. */
    :host {
      --mdc-dialog-max-width: 760px;
    }

    ha-dialog-header {
      min-height: 62px !important;
      padding: 10px 14px !important;
      background: var(--card-background-color) !important;
      box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--divider-color) 70%, transparent);
    }

    .dialog-title-line {
      min-width: 0 !important;
      display: inline-flex !important;
      align-items: center !important;
      gap: 9px !important;
      flex-wrap: nowrap !important;
    }

    .dialog-title-text {
      min-width: 0 !important;
      font-size: 20px !important;
      font-weight: 900 !important;
      line-height: 1.05 !important;
    }

    .dialog-header-destination {
      flex: 0 0 auto;
      min-height: 30px !important;
      padding: 0 10px !important;
      font-size: 11px !important;
      white-space: nowrap !important;
    }

    .content {
      padding: 14px 16px 18px !important;
    }

    .entities-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 10px !important;
    }

    .domain-entity-card {
      min-width: 0 !important;
      min-height: 116px !important;
      padding: 11px 12px !important;
    }

    .domain-entity-copy {
      min-width: 0 !important;
    }

    .domain-entity-name,
    .domain-entity-meta,
    .domain-entity-status {
      max-width: 100% !important;
      overflow: visible !important;
      text-overflow: clip !important;
      white-space: normal !important;
      overflow-wrap: anywhere !important;
    }

    .domain-entity-name {
      display: block !important;
      -webkit-line-clamp: unset !important;
      -webkit-box-orient: initial !important;
      font-size: 14px !important;
      line-height: 1.12 !important;
    }

    .domain-entity-meta {
      font-size: 10px !important;
    }

    .domain-entity-status {
      font-size: 11px !important;
    }

    @media (max-width: 600px) {
      .dialog-title-line {
        gap: 6px !important;
      }

      .dialog-title-text {
        font-size: 18px !important;
      }

      .dialog-header-destination {
        min-height: 28px !important;
        padding: 0 8px !important;
        font-size: 10px !important;
      }

      .entities-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
    }


    /* Unified Home-information dialog header and readable two-column cards. */
    .dialog-title-icon {
      width: 34px;
      height: 34px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 9px;
      color: var(--dialog-accent);
      background: color-mix(in srgb, var(--dialog-accent) 11%, transparent);
    }

    .dialog-title-icon ha-icon {
      --mdc-icon-size: 19px;
    }

    .entities-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }

    .domain-entity-card {
      min-height: 116px !important;
      height: auto !important;
    }

    .domain-entity-name,
    .domain-entity-meta,
    .domain-entity-status {
      overflow: visible !important;
      text-overflow: clip !important;
      white-space: normal !important;
      overflow-wrap: anywhere !important;
    }

    .domain-entity-status {
      color: var(--entity-color) !important;
      font-weight: 800 !important;
    }

    @media (max-width: 600px) {
      .dialog-title-line {
        flex-wrap: wrap !important;
      }

      .dialog-title-icon {
        width: 30px;
        height: 30px;
      }

      .dialog-header-destination {
        order: 3;
      }

      .entities-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
    }


    /* Room-header status dialogs use the same compact card language as room views. */
    .content.room-context {
      padding: 14px 16px 28px !important;
      overflow: auto !important;
    }

    .content.room-context .area-section {
      margin-bottom: 8px !important;
      overflow: visible !important;
      border-radius: 10px !important;
      background: var(--card-background-color) !important;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 7%, transparent) !important;
    }

    .content.room-context .area-header {
      min-height: 42px !important;
      padding: 7px 10px 0 !important;
      gap: 8px !important;
    }

    .content.room-context .area-icon {
      width: 30px !important;
      height: 30px !important;
      border-radius: 8px !important;
    }

    .content.room-context .area-name {
      font-size: 14px !important;
      font-weight: 850 !important;
    }

    .content.room-context .entities-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
      gap: 8px !important;
      padding: 8px 10px 12px !important;
      overflow: visible !important;
    }

    .content.room-context.custom-entities-context .entities-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 10px !important;
    }

    .content.room-context.custom-entities-context .domain-entity-card {
      min-height: 70px !important;
      height: auto !important;
    }

    .content.room-context.custom-entities-context .domain-entity-name,
    .content.room-context.custom-entities-context .domain-entity-status {
      overflow: visible !important;
      text-overflow: clip !important;
      white-space: normal !important;
      overflow-wrap: anywhere !important;
    }

    .content.room-context .domain-entity-card {
      min-height: 62px !important;
      height: 62px !important;
      padding: 7px 9px !important;
      display: grid !important;
      grid-template-columns: 36px minmax(0, 1fr) auto !important;
      grid-template-rows: 1fr !important;
      align-items: center !important;
      gap: 8px !important;
      overflow: visible !important;
      border-radius: 9px !important;
      background: var(--card-background-color) !important;
      box-shadow:
        inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 7%, transparent),
        0 4px 10px rgba(15, 23, 42, 0.04) !important;
    }

    .content.room-context .domain-entity-top {
      display: contents !important;
    }

    .content.room-context .domain-entity-icon {
      grid-column: 1 !important;
      grid-row: 1 !important;
      width: 36px !important;
      height: 36px !important;
      border-radius: 8px !important;
    }

    .content.room-context .domain-entity-copy {
      grid-column: 2 !important;
      grid-row: 1 !important;
      min-width: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      gap: 2px !important;
    }

    .content.room-context .domain-entity-top > :not(.domain-entity-icon) {
      grid-column: 3 !important;
      grid-row: 1 !important;
      align-self: center !important;
      justify-self: end !important;
    }

    .content.room-context .domain-entity-name {
      overflow: hidden !important;
      font-size: 12px !important;
      font-weight: 850 !important;
      line-height: 1.15 !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
    }

    .content.room-context .domain-entity-status {
      overflow: hidden !important;
      font-size: 10px !important;
      font-weight: 650 !important;
      line-height: 1.1 !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
    }

    @media (max-width: 1000px) and (min-width: 601px) {
      .content.room-context .entities-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      }
    }

    @media (max-width: 600px) {
      .content.room-context .entities-grid,
      .content.room-context.custom-entities-context .entities-grid {
        grid-template-columns: 1fr !important;
      }

      .content.room-context .domain-entity-card {
        min-height: 58px !important;
        height: 58px !important;
      }
    }

    .area-master-toggle {
      display: inline-flex; align-items: center; gap: 7px; flex: 0 0 auto;
      padding: 4px 7px; border: 1px solid var(--divider-color);
      border-radius: 999px; background: var(--card-background-color);
      color: var(--secondary-text-color); font: inherit; font-size: 12px;
      font-weight: 750; cursor: pointer;
    }
    .area-master-track {
      width: 31px; height: 18px; position: relative; display: inline-block;
      border-radius: 999px; background: color-mix(in srgb,var(--primary-text-color) 20%,transparent);
    }
    .area-master-track::after {
      content: ''; position:absolute; top:2px; left:2px; width:14px; height:14px;
      border-radius: 50%; background: #fff; transition:transform .18s;
    }
    .area-master-track.is-on { background: var(--entity-color); }
    .area-master-track.is-on::after { transform:translateX(13px); }
    /* Own header layout rather than HA header slots, which clip wrapped actions. */
    .dd-domain-header {
      box-sizing: border-box; width: 100%; padding: 12px 18px;
      position: relative; background: var(--card-background-color);
      box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--divider-color) 65%, transparent);
    }
    .dd-domain-header-line {
      display: flex; align-items: center; gap: 10px; min-width: 0;
    }
    .dd-domain-header-line .dialog-heading-copy {
      flex: 1 1 auto; display: flex; align-items: center; gap: 12px;
      flex-wrap: nowrap; min-width: 0;
    }
    .dd-domain-header-line .dialog-title-text {
      font-size: 20px !important; font-weight: 850 !important;
      line-height: 1.2 !important; min-width: 0;
    }
    .dd-domain-header-close { flex: 0 0 auto; margin-left: auto; }
    .dd-domain-header .sheet-handle { display: none; }
    @media (max-width: 600px) {
      :host {
        --vertical-align-dialog: flex-end !important;
        --dialog-surface-margin-top: auto !important;
        --mdc-dialog-min-height: 0px !important;
      }
      ha-dialog {
        --vertical-align-dialog: flex-end !important;
        --dialog-surface-margin-top: auto !important;
      }
      .dd-domain-header {
        padding: 29px 14px 13px;
        touch-action: pan-x;
      }
      .dd-domain-header-line { align-items: center; gap: 10px; }
      .dd-domain-header-line .dialog-heading-copy {
        flex-direction: column; align-items: flex-start; justify-content: center;
        gap: 5px; flex-wrap: nowrap;
      }
      .dd-domain-header .dialog-title-icon {
        flex: 0 0 48px !important; width: 48px !important; height: 48px !important;
      }
      .dd-domain-header .dialog-title-icon ha-icon { --mdc-icon-size: 25px !important; }
      .dd-domain-header .dialog-header-destination {
        order: 0 !important; max-width: 100%; line-height: 1.2;
        min-height: 30px !important;
      }
      .dd-domain-header .sheet-handle {
        display: block; position: absolute; top: 0; left: 50%;
        transform: translateX(-50%); width: 120px; height: 27px;
        z-index: 10; background: transparent; border-radius: 0;
        touch-action: none !important; user-select: none;
        -webkit-user-select: none; cursor: grab;
      }
      .dd-domain-header .sheet-handle::after {
        content: ''; position: absolute; left: 50%; top: 9px;
        width: 40px; height: 5px; transform: translateX(-50%);
        background: color-mix(in srgb, var(--secondary-text-color) 25%, transparent);
        border-radius: 999px;
      }
    }

    /* Room-view alignment: shared layout language for room groups and entity rows. */
    .dialog-global-actions .domain-actions {
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 0 14px;
    }
    .area-section {
      border-radius: 14px !important;
      padding: 12px !important;
      background: var(--card-background-color) !important;
    }
    .area-header { padding: 0 0 10px !important; min-height: 40px !important; }
    .entities-grid {
      padding: 0 !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      gap: 10px !important;
    }
    .domain-entity-card {
      display: grid !important;
      grid-template-columns: 44px minmax(0,1fr) auto !important;
      grid-template-rows: auto !important;
      align-items: center !important;
      gap: 10px !important;
      min-height: 82px !important;
      height: auto !important;
      padding: 12px !important;
    }
    .domain-entity-top { display: contents !important; }
    .domain-entity-icon { grid-column:1 !important; grid-row:1 !important; }
    .domain-entity-copy { grid-column:2 !important; grid-row:1 !important; }
    .domain-entity-top > :not(.domain-entity-icon) {
      grid-column:3 !important; grid-row:1 !important; justify-self:end !important;
    }
    @media (min-width: 601px) and (max-width: 1000px) {
      .entities-grid { grid-template-columns: repeat(2,minmax(0,1fr)) !important; }
    }
    @media (max-width: 600px) {
      :host {
        --vertical-align-dialog: flex-end !important;
        --dialog-surface-margin-top: auto !important;
      }
      ha-dialog { --vertical-align-dialog: flex-end; }
      .entities-grid { grid-template-columns: 1fr !important; }
      .domain-entity-card { min-height: 68px !important; }
      ha-dialog-header {
        min-height: 0 !important;
        padding: 24px 14px 14px !important;
        touch-action: none !important;
      }
      .dialog-title-icon {
        width: 48px !important;
        height: 48px !important;
        flex-basis: 48px !important;
        border-radius: 12px !important;
      }
      .dialog-title-icon ha-icon { --mdc-icon-size: 26px !important; }
      .dialog-heading-copy { gap: 6px !important; }
      .dialog-header-destination {
        min-height: 28px !important;
        padding-block: 4px !important;
        max-width: 100%;
      }
      .dialog-global-actions .domain-actions { justify-content: center; }
      .content { padding-bottom: calc(12px + env(safe-area-inset-bottom,0px)) !important; }
    }

    /* The modal grows with its actual content, not with the entire viewport. */
    @media (max-width: 600px) {
      :host {
        --mdc-dialog-min-height: 0px !important;
        --ha-dialog-min-height: 0px !important;
        --mdc-dialog-max-height: calc(100dvh - 54px);
        --ha-dialog-max-height: calc(100dvh - 54px);
      }
      ha-dialog { height: auto !important; max-height: calc(100dvh - 54px); }
      .content {
        max-height: calc(100dvh - 190px);
        padding-bottom: calc(18px + env(safe-area-inset-bottom, 0px)) !important;
        overscroll-behavior: contain;
      }
      ha-dialog-header {
        min-height: 112px !important;
        height: auto !important;
        box-sizing: border-box !important;
        touch-action: none !important;
        overflow: visible !important;
        padding-top: 30px !important;
        padding-bottom: 18px !important;
      }
      .dialog-title-line { align-items: center !important; }
      .dialog-heading-copy { overflow: visible !important; }
      .dialog-header-destination { position: relative; white-space: nowrap; }
      .sheet-handle { z-index: 10; }
    }
    .area-group-actions { padding: 8px 12px 0; }
    .area-group-actions .domain-actions { margin: 0; flex-wrap: wrap; }

    /* Unified header: desktop link follows title, mobile link is a second line.
       Icon spans the full two-line block on phones. */
    .dialog-title-line {
      display: flex !important;
      align-items: center !important;
      flex-wrap: nowrap !important;
      min-width: 0;
    }
    .dialog-heading-copy {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-width: 0;
      gap: 8px 12px;
    }
    .dialog-title-icon {
      flex: 0 0 44px !important;
      width: 44px !important;
      height: 44px !important;
    }
    @media (max-width: 600px) {
      .dialog-title-line { flex-wrap: nowrap !important; }
      .dialog-heading-copy {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 7px;
      }
      .dialog-title-icon {
        flex: 0 0 56px !important;
        width: 56px !important;
        height: 56px !important;
      }
      .dialog-title-icon ha-icon { --mdc-icon-size: 30px; }
      .dialog-header-destination { order: initial !important; }
      .sheet-handle { touch-action: none !important; }
      .content { overscroll-behavior-y: contain; }
    }

    /* Shared room-style entity layout: desktop 2–3 columns, mobile one flat row per entity. */
    .entities-grid, .content.room-context .entities-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    }
    @media (max-width: 1000px) and (min-width: 601px) {
      .entities-grid, .content.room-context .entities-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
    }
    @media (max-width: 600px) {
      .entities-grid, .content.room-context .entities-grid,
      .content.room-context.custom-entities-context .entities-grid {
        grid-template-columns: minmax(0, 1fr) !important;
      }
      .domain-entity-card, .content.room-context .domain-entity-card {
        display: grid !important;
        grid-template-columns: 40px minmax(0, 1fr) auto !important;
        grid-template-rows: auto !important;
        align-items: center !important;
        gap: 10px !important;
        min-height: 68px !important;
        height: auto !important;
        padding: 10px 12px !important;
      }
      .domain-entity-top, .content.room-context .domain-entity-top {
        display: contents !important;
      }
      .domain-entity-icon, .content.room-context .domain-entity-icon {
        grid-column: 1 !important;
        grid-row: 1 !important;
      }
      .domain-entity-copy, .content.room-context .domain-entity-copy {
        grid-column: 2 !important;
        grid-row: 1 !important;
        min-width: 0 !important;
      }
      .domain-entity-top > :not(.domain-entity-icon),
      .content.room-context .domain-entity-top > :not(.domain-entity-icon) {
        grid-column: 3 !important;
        grid-row: 1 !important;
        justify-self: end !important;
      }
      .domain-entity-name, .content.room-context .domain-entity-name {
        white-space: normal !important;
        overflow-wrap: anywhere !important;
        text-overflow: clip !important;
      }
      .sheet-handle {
        top: 0;
        width: 92px;
        height: 28px;
        border-radius: 0;
        background: transparent;
        touch-action: none;
        pointer-events: auto;
        cursor: grab;
      }
      .sheet-handle::after {
        content: '';
        position: absolute;
        top: 8px;
        left: 50%;
        width: 38px;
        height: 4px;
        border-radius: 999px;
        transform: translateX(-50%);
        background: color-mix(in srgb, var(--secondary-text-color) 24%, transparent);
      }
      ha-dialog {
        transform: translateY(var(--sheet-drag-offset, 0px));
      }
    }
  `;

  private _onSheetPointerDown = (event: PointerEvent): void => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    this._sheetDragStartY = event.clientY;
    this._sheetDragOffset = 0;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  };

  private _onSheetPointerMove = (event: PointerEvent): void => {
    if (this._sheetDragStartY === null) return;
    event.preventDefault();
    event.stopPropagation();
    this._sheetDragOffset = Math.max(0, event.clientY - this._sheetDragStartY);
    this.renderRoot.querySelector<HTMLElement>('ha-dialog')
      ?.style.setProperty('--sheet-drag-offset', `${this._sheetDragOffset}px`);
  };

  private _onSheetPointerEnd = (event: PointerEvent): void => {
    if (this._sheetDragStartY === null) return;
    event.preventDefault();
    event.stopPropagation();
    this._onSheetTouchEnd();
  };

  private _onDialogTouchStart = (event: TouchEvent): void => {
    // A slotted HA header lives in the dialog shadow tree: handle the composed
    // event on the dialog host, and only start swipes from its visual header.
    const path = event.composedPath();
    const fromHeader = path.some(node => node instanceof Element &&
      (node.matches('ha-dialog-header') || node.matches('.sheet-handle')));
    if (fromHeader) this._onSheetTouchStart(event);
  };

  private _onDialogTouchMove = (event: TouchEvent): void => {
    if (this._sheetDragStartY !== null) this._onSheetTouchMove(event);
  };

  private _onSheetTouchStart = (event: TouchEvent): void => {
    if (event.touches.length !== 1) return;
    this._sheetDragStartY = event.touches.item(0)?.clientY ?? null;
    this._sheetDragOffset = 0;
    event.stopPropagation();
  };

  private _onSheetTouchMove = (event: TouchEvent): void => {
    if (this._sheetDragStartY === null || event.touches.length !== 1) return;
    const distance = (event.touches.item(0)?.clientY ?? this._sheetDragStartY) - this._sheetDragStartY;
    this._sheetDragOffset = Math.max(0, distance);
    if (distance > 0 && event.cancelable) event.preventDefault();
    event.stopPropagation();
    const dialog = this.renderRoot.querySelector<HTMLElement>('ha-dialog');
    if (dialog) dialog.style.setProperty('--sheet-drag-offset', `${this._sheetDragOffset}px`);
  };

  private _onSheetTouchEnd = (): void => {
    if (this._sheetDragStartY === null) return;
    const shouldClose = this._sheetDragOffset >= 90;
    this._sheetDragStartY = null;
    this._sheetDragOffset = 0;
    this.renderRoot.querySelector<HTMLElement>('ha-dialog')?.style.removeProperty('--sheet-drag-offset');
    if (shouldClose) this.closeDialog();
  };

  public async showDialog(params: DomainEntitiesDialogParams): Promise<void> {
    this._params = params;
    this._loading = true;
    this._mobileSheetAnimated = false;
    await this._loadEntities();
  }

  public closeDialog(): void {
    this._params = undefined;
    this._groupedEntities = {};
    this._optimisticEntityStates = {};
    this._entityCards.clear();
    this._mobileSheetAnimated = false;
    this._sheetDragStartY = null;
    this._sheetDragOffset = 0;
    if (this._updateInterval) {
      clearInterval(this._updateInterval);
      this._updateInterval = undefined;
    }
    if (this._optimisticCleanupTimer !== undefined) {
      window.clearTimeout(this._optimisticCleanupTimer);
      this._optimisticCleanupTimer = undefined;
    }
    fireEvent(this, 'dialog-closed', { dialog: this.localName });
  }

  protected override updated(changedProps: PropertyValues): void {
    super.updated(changedProps);

    if (changedProps.has('hass') && this.hass && this._params && !this._loading) {
      this._reconcileOptimisticEntityStates();
      this._updateEntityCards();
    }

    this._animateMobileSheetIn();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._optimisticCleanupTimer !== undefined) {
      window.clearTimeout(this._optimisticCleanupTimer);
      this._optimisticCleanupTimer = undefined;
    }
  }

  private _animateMobileSheetIn(): void {
    if (
      this._mobileSheetAnimated ||
      !this._params ||
      typeof window === 'undefined' ||
      !window.matchMedia('(max-width: 600px)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    requestAnimationFrame(() => {
      const haDialog = this.renderRoot.querySelector('ha-dialog') as HTMLElement | null;
      const haDialogRoot = haDialog?.shadowRoot;
      const waDialog = haDialogRoot?.querySelector('wa-dialog') as HTMLElement | null;
      const waDialogRoot = waDialog?.shadowRoot;
      const panel = (
        waDialogRoot?.querySelector('[part~="panel"]') ||
        waDialogRoot?.querySelector('dialog') ||
        haDialogRoot?.querySelector('.mdc-dialog__surface') ||
        haDialogRoot?.querySelector('[part~="surface"]')
      ) as HTMLElement | null;

      if (!panel?.animate) return;

      this._mobileSheetAnimated = true;

      panel.animate(
        [
          { transform: 'translate3d(0, 100%, 0)', opacity: 0.98 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        ],
        {
          duration: 280,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'both',
        }
      );
    });
  }

  private async _loadEntities(): Promise<void> {
    if (!this._params || !this.hass) return;

    const { domain, areaId, config, filterByUnitOfMeasurement, deviceClass, entityIds } = this._params;
    const grouped: GroupedEntities = {};
    const entityIdFilter = entityIds?.length ? new Set(entityIds) : undefined;

    // Get all areas
    const areas = config.areas || [];
    const areasMap = new Map(areas.map(area => [area.area_id, area]));

    // Get all Home Assistant entities instead of just configured ones
    const allHassEntities = Object.values(this.hass.states);

    // Filter entities from all HA entities
    const entities: EntityConfig[] = [];

    allHassEntities.forEach(entityState => {
      const entityId = entityState.entity_id;
      if (entityIdFilter && !entityIdFilter.has(entityId)) return;
      const registry = this.hass.entities?.[entityId];
      if (registry?.hidden_by) return;
      const entityDomain = entityId.split('.')[0];

      // Check domain
      if (entityDomain !== domain) return;

      // Check state availability
      if (!entityState || entityState.state === 'unavailable') return;

      // Find the area of this entity (same logic as original version)
      const entityReg = config.entities?.find(e => e.entity_id === entityId);
      const deviceReg = entityReg && entityReg.device_id ?
        config.devices?.find(d => d.device_id === entityReg.device_id) : null;
      const entityAreaId = entityReg?.area_id || deviceReg?.area_id || this.hass?.entities?.[entityId]?.area_id;

      // Persons are grouped by presence/location and therefore do not need
      // an HA area assignment. Area-based domains still require one.
      if (domain !== 'person' && !entityAreaId) return;

      // Check area filter if specified
      if (areaId && entityAreaId !== areaId) return;

      // Check if area exists for area-based domains.
      if (domain !== 'person' && (!entityAreaId || !areasMap.has(entityAreaId))) return;

      // Check if entity is hidden
      const groupKey = entityDomain;
      const hiddenEntities = entityAreaId
        ? config.areas_options?.[entityAreaId]?.groups_options?.[groupKey]?.hidden || []
        : [];
      if (hiddenEntities.includes(entityId)) return;

      // Apply unit_of_measurement filter if specified
      if (filterByUnitOfMeasurement) {
        if (entityState.attributes?.unit_of_measurement !== filterByUnitOfMeasurement) {
          return;
        }
      } else {
        // Device class filtering is still applied, but the dialog should show
        // all available entities so users can control off/closed items too.
        if (domain === 'binary_sensor' && deviceClass) {
          const entityDeviceClass = entityState.attributes?.device_class;
          if (entityDeviceClass !== deviceClass) return;
        }
      }

      // Create EntityConfig-like object
      entities.push({
        entity_id: entityId,
        ...(entityAreaId ? { area_id: entityAreaId } : {}),
        hidden: false
      });
    });

    // Group by area (or by status for persons)
    entities.forEach(entity => {
      if (domain === 'person') {
        const groupKey = 'people';
        if (!grouped[groupKey]) {
          grouped[groupKey] = {
            areaName: this._t('home.people'),
            entities: []
          };
        }
        grouped[groupKey].entities.push(entity);
      } else {
        // For other domains, group by area as usual
        const areaId = entity.area_id!;
        const area = areasMap.get(areaId);
        if (!area) return;

        if (!grouped[areaId]) {
          grouped[areaId] = {
            areaName: area.name,
            entities: []
          };
        }
        grouped[areaId].entities.push(entity);
      }
    });

    this._groupedEntities = grouped;
    this._loading = false;

    // Start update interval for live updates
    if (!this._updateInterval) {
      this._updateInterval = window.setInterval(() => {
        this._checkForEntityChanges();
      }, 1000);
    }
  }

  private _checkForEntityChanges(): void {
    if (!this._params || !this.hass || this._loading) return;

    const { domain, filterByUnitOfMeasurement, deviceClass } = this._params;
    let needsReload = false;

    // Check if any entities need to be added or removed
    Object.entries(this._groupedEntities).forEach(([_areaId, group]) => {
      group.entities.forEach(entity => {
        const state = this.hass!.states[entity.entity_id];
        if (!state) {
          needsReload = true;
          return;
        }

        const shouldBeVisible = this._shouldEntityBeVisible(state, domain, filterByUnitOfMeasurement, deviceClass);
        if (!shouldBeVisible) {
          needsReload = true;
        }
      });
    });

    if (needsReload) {
      this._loadEntities();
    }
  }

  private _shouldEntityBeVisible(entityState: any, domain: string, filterByUnitOfMeasurement?: string, deviceClass?: string): boolean {
    if (entityState.state === 'unavailable') return false;

    // Check unit_of_measurement filter if specified
    if (filterByUnitOfMeasurement) {
      if (entityState.attributes?.unit_of_measurement !== filterByUnitOfMeasurement) {
        return false;
      }
      return true;
    }

    if (domain === 'binary_sensor' && deviceClass) {
      return entityState.attributes?.device_class === deviceClass;
    }

    return true;
  }

  private _updateEntityCards(): void {
    this._entityCards.forEach((card, _entityId) => {
      if (card && 'hass' in card) {
        card.hass = this.hass;
      }
    });
  }

  render() {
    if (!this._params) return nothing;

    const { domain, filterByUnitOfMeasurement, deviceClass, customTitle } = this._params;
    let domainTitle = customTitle || this._getLocalizedDomainTitle(domain);
    if (filterByUnitOfMeasurement === 'W') {
      domainTitle = this._t('dialog.power_sensors');
    } else if (deviceClass && !customTitle) {
      const deviceClassTitles: Record<string, string> = {
        motion: this._t('dialog.motion_sensors'),
        door: this._t('dialog.door_sensors'),
        window: this._t('dialog.window_sensors'),
        smoke: this._t('dialog.smoke_sensors'),
        gas: this._t('dialog.gas_sensors'),
        moisture: this._t('dialog.moisture_sensors'),
        occupancy: this._t('dialog.occupancy_sensors'),
        opening: this._t('dialog.opening_sensors'),
        presence: this._t('dialog.presence_sensors'),
        safety: this._t('dialog.safety_sensors'),
        tamper: this._t('dialog.tamper_sensors'),
        vibration: this._t('dialog.vibration_sensors')
      };
      domainTitle = deviceClassTitles[deviceClass] || this._getLocalizedDomainTitle(domain);
    }

    const headerIcon = filterByUnitOfMeasurement === 'W'
      ? 'mdi:flash'
      : getDeviceClassIcon(domain, deviceClass) || getDomainIcon(domain);
    const headerColor = filterByUnitOfMeasurement === 'W'
      ? getDomainColor('wattage')
      : this._entityColor(domain, deviceClass);

    return html`
      <ha-dialog
        open
        @touchstart=${this._onDialogTouchStart}
        @touchmove=${this._onDialogTouchMove}
        @touchend=${this._onSheetTouchEnd}
        @touchcancel=${this._onSheetTouchEnd}
        @closed=${this.closeDialog}
        @cancel=${() => this.closeDialog()}
        .heading=${domainTitle}
        .type=${''}
        flexContent
        hideActions
      >
        <div slot="header" class="dd-domain-header">
          <div class="sheet-handle" role="button" tabindex="0"
            aria-label=${this._t('common.close')}
            @pointerdown=${this._onSheetPointerDown}
            @pointermove=${this._onSheetPointerMove}
            @pointerup=${this._onSheetPointerEnd}
            @pointercancel=${this._onSheetPointerEnd}
          ></div>
          <div class="dd-domain-header-line" style=${`--dialog-accent: ${headerColor};`}>
            <span class="dialog-title-icon" aria-hidden="true"><ha-icon icon=${headerIcon}></ha-icon></span>
            <span class="dialog-heading-copy">
              <span class="dialog-title-text">${domainTitle}</span>
              ${this._params?.onViewAll ? html`
                <button class="dialog-header-destination" type="button" @click=${this._handleViewAll}>
                  <span>${this._params.viewAllLabel || 'Open device view'}</span>
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </button>
              ` : nothing}
            </span>
            <ha-icon-button class="dd-domain-header-close"
              .label=${this._t('common.close')}
              .path=${mdiClose}
              @click=${() => this.closeDialog()}
            ></ha-icon-button>
          </div>
        </div>

        <div class="content ${this._params?.areaId ? 'room-context' : ''} ${this._params?.customEntities ? 'custom-entities-context' : ''}">
          ${this._loading
            ? html`<div class="loading">${this._t('common.loading')}</div>`
            : this._renderContent()
          }
        </div>
      </ha-dialog>
    `;
  }

  private _renderContent() {
    // Handle custom entities (for unavailable entities modal)
    if (this._params?.customEntities) {
      return this._renderCustomEntities();
    }

    const entities = this._allDialogEntities();
    const entityCount = entities.length;

    if (entityCount === 0) {
      return html`
        <div class="empty-state">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <div class="empty-state-text">
            ${this._t('dialog.active_empty')}
          </div>
        </div>
      `;
    }

    return html`
      <div class="dialog-global-actions">${this._renderDomainActions(entities)}</div>
      ${repeat(
        Object.entries(this._groupedEntities),
        ([areaId]) => areaId,
        ([areaId, group]) => this._renderAreaSection(areaId, group)
      )}
    `;
  }

  private _handleViewAll = (): void => {
    const action = this._params?.onViewAll;
    this.closeDialog();
    action?.();
  };

  private _renderCustomEntities() {
    const { customEntities, customDescription } = this._params!;

    if (!customEntities || customEntities.length === 0) {
      return html`
        <div class="empty-state">
          <ha-icon icon="mdi:check-circle-outline"></ha-icon>
          <div class="empty-state-text">
            ${this._t('dialog.problem_empty')}
          </div>
        </div>
      `;
    }

    return html`
      ${customDescription ? html`
        <div class="custom-description">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <p>${customDescription}</p>
        </div>
      ` : nothing}

      <div class="entity-section">
        <div class="entities-grid">
          ${repeat(
            customEntities,
            entityId => entityId,
            entityId => this._renderEntityCard({ entity_id: entityId, hidden: false })
          )}
        </div>
      </div>
    `;
  }

  private _allDialogEntities(): EntityConfig[] {
    return Object.values(this._groupedEntities).flatMap(group => group.entities);
  }

  private _renderDomainActions(entities: EntityConfig[]) {
    const domain = this._params?.domain || '';
    const entityIds = entities
      .map(entity => entity.entity_id)
      .filter(entityId => this.hass.states[entityId]);

    if (!entityIds.length) return nothing;

    const color = this._entityColor(domain);
    const actionButton = (label: string, icon: string, action: BulkDomainAction) => html`
      <button
        class="domain-action-button"
        type="button"
        style=${`--domain-color: ${color};`}
        @click=${() => this._runBulkDomainAction(entityIds, action, label)}
      >
        <ha-icon icon=${icon}></ha-icon>
        <span>${label}</span>
      </button>
    `;

    if (['light', 'switch', 'fan', 'input_boolean'].includes(domain)) {
      return html`
        <div class="domain-actions">
          ${actionButton(this._t('action.turn_on_all'), 'mdi:power', 'turn_on')}
          ${actionButton(this._t('action.turn_off_all'), 'mdi:power-off', 'turn_off')}
        </div>
      `;
    }

    if (domain === 'cover') {
      return html`
        <div class="domain-actions">
          ${actionButton(this._t('action.open_all'), 'mdi:arrow-up', 'open_cover')}
          ${actionButton(this._t('action.close_all'), 'mdi:arrow-down', 'close_cover')}
        </div>
      `;
    }

    if (domain === 'lock') {
      return html`
        <div class="domain-actions">
          ${actionButton(this._t('action.unlock_all'), 'mdi:lock-open-variant-outline', 'unlock')}
          ${actionButton(this._t('action.lock_all'), 'mdi:lock-outline', 'lock')}
        </div>
      `;
    }

    return nothing;
  }

  private _renderAreaSection(_areaId: string, group: { areaName: string; entities: EntityConfig[] }) {
    // Get area icon from config
    let areaIcon = '';
    if (this._params?.config?.areas) {
      const area = this._params.config.areas.find(a => a.area_id === _areaId);
      if (area?.icon) {
        areaIcon = area.icon;
      }
    }

    // The dialog title already identifies persons; do not repeat a persons group header.
    // Preserve area context even when there is only one room: entity tiles omit room names.
    // Persons are not area-grouped, and the dialog title already identifies that domain.
    const showAreaHeader = this._params?.domain !== 'person';
    const kind = this._params?.domain || '';
    const bulkToggle = ['light', 'switch', 'fan', 'input_boolean'].includes(kind);
    const activeCount = group.entities.filter(entity => {
      const state = this.hass.states[entity.entity_id];
      return state && this._isEntityActiveForUi(state, kind);
    }).length;
    const allOn = activeCount === group.entities.length;
    const roomEntityIds = group.entities.map(entity => entity.entity_id);

    return html`
      <div class="area-section">
        ${showAreaHeader ? html`<div class="area-header">
          ${areaIcon ? html`
            <div class="area-icon">
              <ha-icon icon="${areaIcon}"></ha-icon>
            </div>
          ` : nothing}
          <div class="area-name">${group.areaName}</div>
          ${bulkToggle ? html`
            <button class="area-master-toggle" type="button"
              style=${`--entity-color: ${this._entityColor(kind)};`}
              title=${allOn ? this._t('action.turn_off_all') : this._t('action.turn_on_all')}
              @click=${(event: Event) => {
                event.stopPropagation();
                void this._runBulkDomainAction(roomEntityIds,
                  allOn ? 'turn_off' : 'turn_on',
                  allOn ? this._t('action.turn_off_all') : this._t('action.turn_on_all'));
              }}>
              <span>${activeCount}/${group.entities.length}</span>
              <span class="area-master-track ${allOn ? 'is-on' : ''}"></span>
            </button>
          ` : html`<div class="entity-count">${group.entities.length}</div>`}
        </div>` : nothing}
        <div class="entities-grid">
          ${repeat(
            group.entities,
            entity => entity.entity_id,
            entity => this._renderEntityCard(entity)
          )}
        </div>
      </div>
    `;
  }

  private _renderEntityCard(entity: EntityConfig) {
    const rawState = this.hass.states[entity.entity_id];
    if (!rawState) return nothing;

    const state = this._getEffectiveEntityState(rawState);
    const domain = entity.entity_id.split('.')[0] || 'unknown';
    if (domain === 'todo') {
      return html`
        <div class="domain-todo-list-card" data-entity=${entity.entity_id}>
          <dwains-dashboard-next-card-host
            eager
            .hass=${this.hass}
            .config=${{ type: 'todo-list', entity: entity.entity_id }}
          ></dwains-dashboard-next-card-host>
        </div>
      `;
    }

    const deviceClass = state.attributes?.device_class;
    const icon = this.hass.entities?.[entity.entity_id]?.icon ||
      state.attributes?.icon ||
      getDeviceClassIcon(domain, deviceClass) ||
      getDomainIcon(domain);
    const rawName = state.attributes?.friendly_name || this.hass.entities?.[entity.entity_id]?.name || entity.entity_id;
    const areaName = this._entityAreaName(entity);
    const name = stripAreaNameFromEntityName(rawName, areaName);
    const active = this._isEntityActiveForUi(state, domain);
    const unavailable = this._isUnavailable(state);
    const classes = [
      'domain-entity-card',
      `domain-entity-${domain}`,
      active ? 'is-active' : 'is-off',
      unavailable ? 'is-unavailable' : '',
    ].join(' ');

    return html`
      <article
        class=${classes}
        style=${`--entity-color: ${this._entityColor(domain, deviceClass)};`}
        role="button"
        tabindex="0"
        aria-label=${name}
        @click=${() => this._showMoreInfo(entity.entity_id)}
        @keydown=${(event: KeyboardEvent) => this._handleEntityKeydown(event, entity.entity_id)}
      >
        <div class="domain-entity-top">
          <div class="domain-entity-icon">
            <ha-icon icon=${icon}></ha-icon>
          </div>
          ${this._renderEntityActions(state, domain, active)}
        </div>
        <div class="domain-entity-copy">
          <div class="domain-entity-name">${name}</div>
          <div class="domain-entity-status">${this._entityStatusText(state, domain)}</div>
        </div>
      </article>
    `;
  }

  private _renderEntityActions(state: any, domain: string, active: boolean) {
    const entityId = state?.entity_id;
    const actionKind = this._entityActionKind(domain);
    const unavailable = this._isUnavailable(state);

    if (actionKind === 'toggle') {
      return html`
        <button
          class="domain-entity-action domain-entity-toggle"
          type="button"
          title=${active ? this._t('action.turn_off') : this._t('action.turn_on')}
          aria-label=${active ? this._t('action.turn_off') : this._t('action.turn_on')}
          ?disabled=${unavailable}
          @click=${(event: Event) => this._handleEntityToggle(event, state, domain)}
        ></button>
      `;
    }

    if (actionKind === 'cover') {
      return this._renderCoverActions(state);
    }

    if (actionKind === 'lock') {
      const unlocked = this._isEntityActiveForUi(state, domain);
      return html`
        <button
          class="domain-entity-action domain-lock-action ${unlocked ? 'is-unlocked' : ''}"
          type="button"
          title=${unlocked ? this._t('action.lock') : this._t('action.unlock')}
          aria-label=${unlocked ? this._t('action.lock') : this._t('action.unlock')}
          ?disabled=${unavailable}
          @click=${(event: Event) => this._handleLockAction(event, state)}
        >
          <ha-icon icon=${unlocked ? 'mdi:lock-open-variant-outline' : 'mdi:lock-outline'}></ha-icon>
        </button>
      `;
    }

    return html`
      <button
        class="domain-entity-action domain-entity-more"
        type="button"
        title=${this._t('action.more_info')}
        aria-label=${this._t('action.more_info')}
        @click=${(event: Event) => this._handleMoreInfo(event, entityId)}
      >
        <ha-icon icon="mdi:chevron-right"></ha-icon>
      </button>
    `;
  }

  private _renderCoverActions(state: any) {
    const value = String(state?.state || '').toLowerCase();
    const unavailable = this._isUnavailable(state);
    const canOpen = this._coverSupportsFeature(state, 1);
    const canClose = this._coverSupportsFeature(state, 2);
    const canStop = this._coverSupportsFeature(state, 8);

    return html`
      <div class="domain-cover-actions" @click=${(event: Event) => event.stopPropagation()}>
        ${canOpen ? html`
          <button
            class="domain-entity-action domain-cover-action ${value === 'opening' ? 'active' : ''}"
            type="button"
            title=${this._t('action.open')}
            aria-label=${this._t('action.open')}
            ?disabled=${unavailable}
            @click=${(event: Event) => this._handleCoverAction(event, state, 'open')}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
        ` : nothing}
        ${canStop ? html`
          <button
            class="domain-entity-action domain-cover-action ${value === 'opening' || value === 'closing' ? 'active' : ''}"
            type="button"
            title=${this._t('action.stop')}
            aria-label=${this._t('action.stop')}
            ?disabled=${unavailable}
            @click=${(event: Event) => this._handleCoverAction(event, state, 'stop')}
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>
        ` : nothing}
        ${canClose ? html`
          <button
            class="domain-entity-action domain-cover-action ${value === 'closing' ? 'active' : ''}"
            type="button"
            title=${this._t('action.close')}
            aria-label=${this._t('action.close')}
            ?disabled=${unavailable}
            @click=${(event: Event) => this._handleCoverAction(event, state, 'close')}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
        ` : nothing}
      </div>
    `;
  }

  private async _runBulkDomainAction(entityIds: string[], action: BulkDomainAction, label: string): Promise<void> {
    const domain = this._params?.domain || '';
    const count = entityIds.length;
    const confirmed = window.confirm(this._t('action.confirm_bulk', {
      action: label,
      entities: this._tp('common.entity', count),
    }));

    if (!confirmed) return;

    const optimisticState = action === 'turn_on'
      ? 'on'
      : action === 'turn_off'
        ? 'off'
        : action === 'open_cover'
          ? 'open'
          : action === 'close_cover'
            ? 'closed'
            : action === 'unlock'
              ? 'unlocked'
              : action === 'lock'
                ? 'locked'
                : undefined;
    if (optimisticState) this._setOptimisticEntityStates(entityIds, optimisticState);

    try {
      if (['light', 'switch', 'fan', 'input_boolean'].includes(domain)) {
        await this.hass.callService(domain, action, { entity_id: entityIds });
        return;
      }

      if (domain === 'cover') {
        await this.hass.callService('cover', action, { entity_id: entityIds });
        return;
      }

      if (domain === 'lock') {
        await this.hass.callService('lock', action, { entity_id: entityIds });
      }
    } catch (err) {
      this._clearOptimisticEntityStates(entityIds);
      console.warn(`Failed to run ${action} for ${domain}:`, err);
    }
  }

  private _handleEntityKeydown(event: KeyboardEvent, entityId: string): void {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    this._showMoreInfo(entityId);
  }

  private async _handleEntityToggle(event: Event, state: any, domain: string): Promise<void> {
    event.stopPropagation();
    const entityId = state?.entity_id;
    if (!entityId) return;

    try {
      if (['light', 'switch', 'fan', 'input_boolean'].includes(domain)) {
        const turnOn = !this._isEntityActiveForUi(state, domain);
        this._setOptimisticEntityStates([entityId], turnOn ? 'on' : 'off');
        await this.hass.callService(domain, turnOn ? 'turn_on' : 'turn_off', { entity_id: entityId });
        return;
      }
    } catch (err) {
      this._clearOptimisticEntityStates([entityId]);
      console.warn(`Failed to toggle entity ${entityId}:`, err);
      return;
    }

    this._showMoreInfo(entityId);
  }

  private async _handleCoverAction(event: Event, state: any, action: 'open' | 'stop' | 'close'): Promise<void> {
    event.stopPropagation();
    const entityId = state?.entity_id;
    if (!entityId) return;

    const service = action === 'open' ? 'open_cover' : action === 'close' ? 'close_cover' : 'stop_cover';
    const optimisticState = action === 'open' ? 'open' : action === 'close' ? 'closed' : undefined;
    if (optimisticState) this._setOptimisticEntityStates([entityId], optimisticState);

    try {
      await this.hass.callService('cover', service, { entity_id: entityId });
    } catch (err) {
      this._clearOptimisticEntityStates([entityId]);
      console.warn(`Failed to ${action} cover ${entityId}:`, err);
    }
  }

  private async _handleLockAction(event: Event, state: any): Promise<void> {
    event.stopPropagation();
    const entityId = state?.entity_id;
    if (!entityId) return;

    try {
      const unlocked = this._isEntityActiveForUi(state, 'lock');
      this._setOptimisticEntityStates([entityId], unlocked ? 'locked' : 'unlocked');
      await this.hass.callService('lock', unlocked ? 'lock' : 'unlock', { entity_id: entityId });
    } catch (err) {
      this._clearOptimisticEntityStates([entityId]);
      console.warn(`Failed to toggle lock ${entityId}:`, err);
    }
  }

  private _handleMoreInfo(event: Event, entityId?: string): void {
    event.stopPropagation();
    if (entityId) this._showMoreInfo(entityId);
  }

  private _showMoreInfo(entityId: string): void {
    const homeAssistant = document.querySelector('home-assistant');
    if (homeAssistant) {
      fireEvent(homeAssistant, 'hass-more-info', { entityId });
      return;
    }

    fireEvent(window, 'hass-more-info', { entityId });
  }

  private _entityActionKind(domain: string): 'toggle' | 'cover' | 'lock' | 'more' {
    if (['light', 'switch', 'fan', 'input_boolean'].includes(domain)) return 'toggle';
    if (domain === 'cover') return 'cover';
    if (domain === 'lock') return 'lock';
    return 'more';
  }

  private _coverSupportsFeature(state: any, feature: number): boolean {
    const supported = Number(state?.attributes?.supported_features);
    if (!Number.isFinite(supported) || supported <= 0) {
      return feature === 1 || feature === 2;
    }

    return (supported & feature) !== 0;
  }

  private _entityStatusText(state: any, domain: string): string {
    if (!state) return '';
    const effectiveState = this._getEffectiveEntityState(state);
    const formatted = formatEntityStateWithUnit(this.hass, effectiveState);

    if (domain === 'light' && effectiveState.state === 'on' && typeof effectiveState.attributes?.brightness === 'number') {
      return this._t('entity.brightness', {
        value: Math.round((effectiveState.attributes.brightness / 255) * 100),
      });
    }

    if (domain === 'cover' && typeof effectiveState.attributes?.current_position === 'number') {
      return `${formatted} · ${formatValueWithUnit(effectiveState.attributes.current_position, '%')}`;
    }

    if (domain === 'climate') {
      const current = effectiveState.attributes?.current_temperature;
      const target = effectiveState.attributes?.temperature;
      const unit = this.hass?.config?.unit_system?.temperature || '°C';
      if (current !== undefined && target !== undefined) {
        return `${formatValueWithUnit(current, unit)} · ${this._t('entity.climate_set', { value: formatValueWithUnit(target, unit) })}`;
      }
      if (current !== undefined) return formatValueWithUnit(current, unit);
    }

    if (domain === 'media_player' && effectiveState.attributes?.media_title) {
      return `${formatted} · ${effectiveState.attributes.media_title}`;
    }

    return formatted;
  }

  private _getEffectiveEntityState<T extends { entity_id?: string; state?: string } | null | undefined>(state: T): T {
    const entityId = state?.entity_id;
    if (!entityId) return state;

    const optimistic = this._optimisticEntityStates[entityId];
    if (!optimistic || optimistic.expiresAt <= Date.now()) return state;

    const actualState = String(state?.state || '').toLowerCase();
    if (actualState === optimistic.state.toLowerCase()) return state;

    return {
      ...(state as NonNullable<T>),
      state: optimistic.state,
    } as T;
  }

  private _setOptimisticEntityStates(entityIds: string[], state: string): void {
    const uniqueEntityIds = [...new Set(entityIds.filter(Boolean))];
    if (!uniqueEntityIds.length) return;

    const expiresAt = Date.now() + OPTIMISTIC_ENTITY_STATE_TTL;
    const next = { ...this._optimisticEntityStates };
    uniqueEntityIds.forEach(entityId => {
      next[entityId] = { state, expiresAt };
    });
    this._optimisticEntityStates = next;
    this._scheduleOptimisticCleanup();
  }

  private _clearOptimisticEntityStates(entityIds: string[]): void {
    const uniqueEntityIds = [...new Set(entityIds.filter(Boolean))];
    if (!uniqueEntityIds.length) return;

    const next = { ...this._optimisticEntityStates };
    let changed = false;
    uniqueEntityIds.forEach(entityId => {
      if (next[entityId]) {
        delete next[entityId];
        changed = true;
      }
    });

    if (changed) this._optimisticEntityStates = next;
  }

  private _reconcileOptimisticEntityStates(): void {
    const entries = Object.entries(this._optimisticEntityStates);
    if (!entries.length) return;

    const now = Date.now();
    const next = { ...this._optimisticEntityStates };
    let changed = false;

    entries.forEach(([entityId, optimistic]) => {
      const actual = this.hass?.states?.[entityId]?.state;
      if (
        !actual ||
        optimistic.expiresAt <= now ||
        String(actual).toLowerCase() === optimistic.state.toLowerCase()
      ) {
        delete next[entityId];
        changed = true;
      }
    });

    if (changed) this._optimisticEntityStates = next;
  }

  private _scheduleOptimisticCleanup(): void {
    if (this._optimisticCleanupTimer !== undefined) return;

    const expiries = Object.values(this._optimisticEntityStates).map(entry => entry.expiresAt);
    if (!expiries.length) return;

    const nextExpiry = Math.min(...expiries);
    if (!Number.isFinite(nextExpiry)) return;

    const delay = Math.max(80, nextExpiry - Date.now() + 50);
    this._optimisticCleanupTimer = window.setTimeout(() => {
      this._optimisticCleanupTimer = undefined;
      this._reconcileOptimisticEntityStates();
      if (Object.keys(this._optimisticEntityStates).length) {
        this._scheduleOptimisticCleanup();
      }
    }, delay);
  }

  private _isUnavailable(state: any): boolean {
    return ['unavailable', 'unknown'].includes(String(state?.state || '').toLowerCase());
  }

  private _isEntityActiveForUi(state: any, domain: string): boolean {
    if (!state || this._isUnavailable(state)) return false;

    const value = String(state.state).toLowerCase();
    if (domain === 'cover') return ['open', 'opening'].includes(value);
    if (domain === 'lock') return value === 'unlocked';
    if (domain === 'climate') {
      const action = state.attributes?.hvac_action;
      return action && action !== 'idle' && action !== 'off';
    }
    if (domain === 'media_player') return ['playing', 'buffering'].includes(value);
    if (domain === 'vacuum') return ['cleaning', 'returning'].includes(value);
    if (domain === 'alarm_control_panel') return value.startsWith('armed') || ['arming', 'pending', 'triggered'].includes(value);
    if (domain === 'camera') return false;
    return !['off', 'closed', 'locked', 'not_home', 'idle'].includes(value);
  }

  private _entityColor(domain: string, deviceClass?: string): string {
    if (domain === 'sensor' && (deviceClass === 'temperature' || deviceClass === 'humidity')) {
      return getDomainColor(deviceClass, deviceClass);
    }
    return getDomainColor(domain, deviceClass);
  }

  private _entityAreaName(entity: EntityConfig): string | undefined {
    const config = this._params?.config;
    const entityReg = config?.entities?.find(e => e.entity_id === entity.entity_id);
    const deviceReg = entityReg?.device_id
      ? config?.devices?.find(device => device.device_id === entityReg.device_id)
      : undefined;
    const areaId = entity.area_id || entityReg?.area_id || deviceReg?.area_id || this.hass?.entities?.[entity.entity_id]?.area_id;

    return config?.areas?.find(area => area.area_id === areaId)?.name;
  }

  private _getLocalizedDomainTitle(domain: string): string {
    return getDomainName(this.hass, domain);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwains-dashboard-next-domain-entities-dialog': DwainsDomainEntitiesDialog;
  }
}
