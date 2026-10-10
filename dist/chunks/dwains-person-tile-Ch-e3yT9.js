import{_ as e,n as t,t as r}from"./state-Bpx-nWN3.js";import{r as i,a as o,i as s,b as a,A as n}from"./lit-element-CR7MDbd3.js";import{j as d,c as p}from"./entity-names-fTuTEAx3.js";import{a as l}from"./dwains-bottom-nav-BZWZU6Rl.js";import"./dd-card-host-B6TrDgLd.js";let c=class extends s{constructor(){super(...arguments),this.entityId="",this.displayName=""}_renderLocationPreview(e,t,r){return a`
      <div class="person-map" aria-label=${`${r} location`}>
        <dwains-dashboard-next-card-host
          class="person-map-card"
          eager
          refresh-layout
          strip-card-surface
          .hass=${this.hass}
          .config=${{type:"map",entities:[this.entityId],default_zoom:14,hours_to_show:0}}
        ></dwains-dashboard-next-card-host>
      </div>
    `}render(){const e=this.hass?.states?.[this.entityId];if(!e)return n;const t=this.displayName||e.attributes?.friendly_name||this.entityId,r=e.attributes?.entity_picture,i=Number(e.attributes?.latitude),o=Number(e.attributes?.longitude),s=Number.isFinite(i)&&Number.isFinite(o),d="home"===String(e.state||"").toLowerCase(),c=["unavailable","unknown"].includes(String(e.state||"").toLowerCase()),h=this.hass?.entities?.[this.entityId]?.icon||e.attributes?.icon||p("person");return a`
      <article class="person-tile ${s?"has-location":""} ${d?"is-active":"is-off"} ${c?"is-unavailable":""}">
        <div class="person-main">
          <span class="person-icon ${r?"has-picture":""}">
            ${r?a`<img class="person-avatar" src=${r} alt=${t}>`:a`<ha-icon icon=${h}></ha-icon>`}
          </span>
          <div class="person-copy">
            <div class="person-name" title=${t}>${t}</div>
            <div class="person-state ${d?"active":""}">${l(this.hass,e)}</div>
          </div>
        </div>

        ${s?this._renderLocationPreview(i,o,t):n}
      </article>
    `}};c.styles=o`
    :host {
      display: block;
      min-width: 0;
      width: 100%;
      --person-color: ${i(d("person"))};
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

    .person-map-card {
      display: block;
      width: 100%;
      height: 100%;
      min-width: 0;
      overflow: hidden;
      border-radius: inherit;
      --dd-replacement-padding: 0px;
      --dd-replacement-border: 0;
      --dd-replacement-radius: 0px;
      --dd-replacement-min-height: 100%;
    }
  `,e([t({attribute:!1})],c.prototype,"hass",void 0),e([t({attribute:!1})],c.prototype,"entityId",void 0),e([t({attribute:!1})],c.prototype,"displayName",void 0),c=e([r("dwains-dashboard-next-person-tile")],c);
