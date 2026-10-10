import{_ as t,n as e,t as o}from"./state-Bpx-nWN3.js";import{r as i,a as r,i as s,A as a,b as n}from"./lit-element-CR7MDbd3.js";import{j as p,c as d}from"./entity-names-BYfZuzxR.js";import{a as l}from"./dwains-bottom-nav-BhVRXxOd.js";let c=class extends s{constructor(){super(...arguments),this.entityId="",this.displayName=""}render(){const t=this.hass?.states?.[this.entityId];if(!t)return a;const e=this.displayName||t.attributes?.friendly_name||this.entityId,o=t.attributes?.entity_picture,i=Number.isFinite(Number(t.attributes?.latitude))&&Number.isFinite(Number(t.attributes?.longitude)),r="home"===String(t.state||"").toLowerCase(),s=["unavailable","unknown"].includes(String(t.state||"").toLowerCase()),p=this.hass?.entities?.[this.entityId]?.icon||t.attributes?.icon||d("person");return n`
      <article class="person-tile ${i?"has-location":""} ${r?"is-active":"is-off"} ${s?"is-unavailable":""}">
        <div class="person-main">
          <span class="person-icon ${o?"has-picture":""}">
            ${o?n`<img class="person-avatar" src=${o} alt=${e}>`:n`<ha-icon icon=${p}></ha-icon>`}
          </span>
          <div class="person-copy">
            <div class="person-name" title=${e}>${e}</div>
            <div class="person-state ${r?"active":""}">${l(this.hass,t)}</div>
          </div>
        </div>

        ${i?n`
          <div class="person-map" aria-label=${`${e} location`}>
            <dwains-dashboard-next-card-host
              strip-card-surface
              refresh-layout
              .hass=${this.hass}
              .config=${{type:"map",entities:[this.entityId],hours_to_show:0,default_zoom:14,auto_fit:!0,fit_zones:!1,show_zone_radius:!1,aspect_ratio:"3:1"}}
            ></dwains-dashboard-next-card-host>
          </div>
        `:a}
      </article>
    `}};c.styles=r`
    :host {
      display: block;
      min-width: 0;
      width: 100%;
      --person-color: ${i(p("person"))};
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
      height: var(--dd-person-tile-location-height, 248px);
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
      width: 100%;
      height: var(--dd-person-map-height, 186px);
      min-height: 0;
      margin-top: 10px;
      overflow: hidden;
      border-radius: 8px;
      pointer-events: none;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    }

    .person-map dwains-dashboard-next-card-host {
      display: block;
      width: 100%;
      height: 100%;
      --ha-card-border-width: 0;
      --ha-card-border-radius: 8px;
    }
  `,t([e({attribute:!1})],c.prototype,"hass",void 0),t([e({attribute:!1})],c.prototype,"entityId",void 0),t([e({attribute:!1})],c.prototype,"displayName",void 0),c=t([o("dwains-dashboard-next-person-tile")],c);
