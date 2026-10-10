import { LitElement, css, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { HomeAssistant } from '../types/home-assistant';
import { getDomainColor, getDomainIcon } from '../utils/icons';
import { formatEntityStateWithUnit } from '../utils/unit-format';

@customElement('dwains-dashboard-next-person-tile')
export class DwainsDashboardNextPersonTile extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public entityId = '';
  @property({ attribute: false }) public displayName = '';

  private _renderLocationPreview(latitude: number, longitude: number, name: string) {
    const zoom = 14;
    const tileSize = 256;
    const n = 2 ** zoom;
    const latRad = latitude * Math.PI / 180;
    const xFloat = ((longitude + 180) / 360) * n;
    const yFloat = ((1 - Math.asinh(Math.tan(latRad)) / Math.PI) / 2) * n;
    const centerX = Math.floor(xFloat);
    const centerY = Math.floor(yFloat);
    const fracX = xFloat - centerX;
    const fracY = yFloat - centerY;
    const pointX = tileSize + fracX * tileSize;
    const pointY = tileSize + fracY * tileSize;
    const left = `calc(50% - ${pointX}px)`;
    const top = `calc(50% - ${pointY}px)`;

    const tiles = [];
    for (let dy = -1; dy <= 1; dy += 1) {
      for (let dx = -1; dx <= 1; dx += 1) {
        const x = (centerX + dx + n) % n;
        const y = Math.min(n - 1, Math.max(0, centerY + dy));
        tiles.push(html`
          <img
            class="person-map-tile"
            src=${`https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`}
            alt=""
            loading="lazy"
            decoding="async"
            style=${`left:${(dx + 1) * tileSize}px;top:${(dy + 1) * tileSize}px;`}
          >
        `);
      }
    }

    return html`
      <div class="person-map" aria-label=${`${name} location`}>
        <div class="person-map-canvas" style=${`left:${left};top:${top};`}>
          ${tiles}
        </div>
        <span class="person-map-marker" aria-hidden="true">
          <span class="person-map-marker-dot"></span>
        </span>
        <a
          class="person-map-attribution"
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noreferrer"
          @click=${(event: Event) => event.stopPropagation()}
        >© OpenStreetMap</a>
      </div>
    `;
  }

  protected override render() {
    const state = this.hass?.states?.[this.entityId];
    if (!state) return nothing;

    const name = this.displayName || state.attributes?.friendly_name || this.entityId;
    const entityPicture = state.attributes?.entity_picture;
    const latitude = Number(state.attributes?.latitude);
    const longitude = Number(state.attributes?.longitude);
    const hasLocation = Number.isFinite(latitude) && Number.isFinite(longitude);
    const active = String(state.state || '').toLowerCase() === 'home';
    const unavailable = ['unavailable', 'unknown'].includes(String(state.state || '').toLowerCase());
    const icon = this.hass?.entities?.[this.entityId]?.icon ||
      state.attributes?.icon ||
      getDomainIcon('person');

    return html`
      <article class="person-tile ${hasLocation ? 'has-location' : ''} ${active ? 'is-active' : 'is-off'} ${unavailable ? 'is-unavailable' : ''}">
        <div class="person-main">
          <span class="person-icon ${entityPicture ? 'has-picture' : ''}">
            ${entityPicture
              ? html`<img class="person-avatar" src=${entityPicture} alt=${name}>`
              : html`<ha-icon icon=${icon}></ha-icon>`}
          </span>
          <div class="person-copy">
            <div class="person-name" title=${name}>${name}</div>
            <div class="person-state ${active ? 'active' : ''}">${formatEntityStateWithUnit(this.hass, state)}</div>
          </div>
        </div>

        ${hasLocation ? this._renderLocationPreview(latitude, longitude, name) : nothing}
      </article>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      min-width: 0;
      width: 100%;
      --person-color: ${unsafeCSS(getDomainColor('person'))};
    }

    .person-tile {
      width: 100%;
      height: 62px;
      min-width: 0;
      margin: 0;
      padding: 8px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 6%, transparent);
      border-radius: 8px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      box-shadow: 0 3px 9px rgba(15, 23, 42, 0.035);
      transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
    }

    .person-tile.has-location {
      height: auto;
      min-height: var(--dd-person-tile-location-height, 248px);
      justify-content: flex-start;
    }

    :host([role="button"]) .person-tile {
      cursor: pointer;
    }

    :host([role="button"]:hover) .person-tile {
      transform: translateY(-1px);
      border-color: color-mix(in srgb, var(--primary-color) 14%, transparent);
      box-shadow: 0 6px 14px rgba(15, 23, 42, 0.055);
    }

    :host(:focus-visible) {
      outline: 2px solid color-mix(in srgb, var(--primary-color) 55%, transparent);
      outline-offset: 2px;
      border-radius: 8px;
    }

    .person-tile.is-unavailable {
      opacity: .62;
    }

    .person-main {
      width: 100%;
      min-width: 0;
      height: 36px;
      flex: 0 0 36px;
      display: grid;
      grid-template-columns: 36px minmax(0, 1fr);
      align-items: center;
      gap: 9px;
    }

    .person-icon {
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: var(--person-color);
      background: color-mix(in srgb, var(--person-color) 13%, transparent);
    }

    .person-icon ha-icon {
      --mdc-icon-size: 20px;
    }

    .person-icon.has-picture {
      overflow: hidden;
      padding: 0;
      background: var(--secondary-background-color);
    }

    .person-avatar {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      border-radius: inherit;
    }

    .person-copy {
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2px;
    }

    .person-name {
      overflow: hidden;
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 850;
      line-height: 1.15;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .person-state {
      overflow: hidden;
      color: var(--secondary-text-color);
      font-size: 10px;
      font-weight: 650;
      line-height: 1.1;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .person-state.active {
      color: var(--person-color);
    }

    .person-map {
      position: relative;
      width: 100%;
      height: var(--dd-person-map-height, 186px);
      min-height: 0;
      margin-top: 10px;
      overflow: hidden;
      border-radius: 8px;
      background: var(--secondary-background-color);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 6%, transparent);
      isolation: isolate;
    }

    .person-map-canvas {
      position: absolute;
      width: 768px;
      height: 768px;
      pointer-events: none;
    }

    .person-map-tile {
      position: absolute;
      width: 256px;
      height: 256px;
      display: block;
      max-width: none;
      user-select: none;
      -webkit-user-drag: none;
    }

    .person-map-marker {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 28px;
      height: 28px;
      transform: translate(-50%, -50%);
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--person-color) 18%, #ffffff);
      border: 2px solid #ffffff;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.28);
      pointer-events: none;
      z-index: 2;
    }

    .person-map-marker-dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: var(--person-color);
    }

    .person-map-attribution {
      position: absolute;
      right: 4px;
      bottom: 3px;
      z-index: 3;
      padding: 1px 3px;
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.78);
      color: #3b556e;
      font-size: 8px;
      line-height: 1.2;
      text-decoration: none;
    }
  `;
}
