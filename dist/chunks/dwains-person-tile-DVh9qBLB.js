import{_ as e,n as t,t as o}from"./state-Bpx-nWN3.js";import{r,a as i,i as a,b as s,A as n}from"./lit-element-CR7MDbd3.js";import{j as p,c as l}from"./entity-names-CbImwArt.js";import{a as d}from"./dwains-bottom-nav-BV2ZOK9N.js";let c=class extends a{constructor(){super(...arguments),this.entityId="",this.displayName=""}_renderLocationPreview(e,t,o){const r=256,i=16384,a=e*Math.PI/180,n=(t+180)/360*i,p=(1-Math.asinh(Math.tan(a))/Math.PI)/2*i,l=Math.floor(n),d=Math.floor(p),c=`calc(50% - ${r+(n-l)*r}px)`,h=`calc(50% - ${r+(p-d)*r}px)`,x=[];for(let e=-1;e<=1;e+=1)for(let t=-1;t<=1;t+=1){const o=(l+t+i)%i,a=Math.min(i-1,Math.max(0,d+e));x.push(s`
          <img
            class="person-map-tile"
            src=${`https://tile.openstreetmap.org/14/${o}/${a}.png`}
            alt=""
            loading="lazy"
            decoding="async"
            style=${`left:${(t+1)*r}px;top:${(e+1)*r}px;`}
          >
        `)}return s`
      <div class="person-map" aria-label=${`${o} location`}>
        <div class="person-map-canvas" style=${`left:${c};top:${h};`}>
          ${x}
        </div>
        <span class="person-map-marker" aria-hidden="true">
          <span class="person-map-marker-dot"></span>
        </span>
        <a
          class="person-map-attribution"
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noreferrer"
          @click=${e=>e.stopPropagation()}
        >© OpenStreetMap</a>
      </div>
    `}render(){const e=this.hass?.states?.[this.entityId];if(!e)return n;const t=this.displayName||e.attributes?.friendly_name||this.entityId,o=e.attributes?.entity_picture,r=Number(e.attributes?.latitude),i=Number(e.attributes?.longitude),a=Number.isFinite(r)&&Number.isFinite(i),p="home"===String(e.state||"").toLowerCase(),c=["unavailable","unknown"].includes(String(e.state||"").toLowerCase()),h=this.hass?.entities?.[this.entityId]?.icon||e.attributes?.icon||l("person");return s`
      <article class="person-tile ${a?"has-location":""} ${p?"is-active":"is-off"} ${c?"is-unavailable":""}">
        <div class="person-main">
          <span class="person-icon ${o?"has-picture":""}">
            ${o?s`<img class="person-avatar" src=${o} alt=${t}>`:s`<ha-icon icon=${h}></ha-icon>`}
          </span>
          <div class="person-copy">
            <div class="person-name" title=${t}>${t}</div>
            <div class="person-state ${p?"active":""}">${d(this.hass,e)}</div>
          </div>
        </div>

        ${a?this._renderLocationPreview(r,i,t):n}
      </article>
    `}};c.styles=i`
    :host {
      display: block;
      min-width: 0;
      width: 100%;
      --person-color: ${r(p("person"))};
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
  `,e([t({attribute:!1})],c.prototype,"hass",void 0),e([t({attribute:!1})],c.prototype,"entityId",void 0),e([t({attribute:!1})],c.prototype,"displayName",void 0),c=e([o("dwains-dashboard-next-person-tile")],c);
