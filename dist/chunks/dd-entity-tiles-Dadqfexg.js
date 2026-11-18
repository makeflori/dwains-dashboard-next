import{E as t,a as e,i,A as o,b as a,r as n}from"./lit-element-D6iXJla1.js";import{e as s,i as r,t as c}from"./directive-Cb03nv9c.js";import{_ as l,n as d,t as p}from"./state-Ch1yw9_s.js";import{a as h,l as u,h as m,e as x,b as g,q as v}from"./legacy-area-groups-rMfA5XrZ.js";import{f as b,a as y}from"./dwains-bottom-nav-BQJiTuoW.js";import"./dd-card-host-C87xsXhx.js";const f=s(class extends r{constructor(t){if(super(t),t.type!==c.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(e,[i]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const o=e.element.classList;for(const t of this.st)t in i||(o.remove(t),this.st.delete(t));for(const t in i){const e=!!i[t];e===this.st.has(t)||this.nt?.has(t)||(e?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return t}});let w,$=0;let k=class extends i{constructor(){super(...arguments),this.open=!1,this.titleText="",this.subtitle="",this.icon="mdi:information-outline",this.accent="var(--primary-color)",this.closeLabel="Close",this.wide=!1,this.navigationMenu=!1,this._ignoreClickUntil=0,this._closing=!1,this._scrimPointerDown=t=>{t.preventDefault(),t.stopPropagation()},this._scrimClick=t=>{t.preventDefault(),t.stopPropagation(),this._close()},this._panelClick=t=>{Date.now()<this._ignoreClickUntil&&(t.preventDefault(),t.stopImmediatePropagation())},this._touchStart=t=>{if(this._touch=void 0,this._closing||"running"===this._animation?.playState||!window.matchMedia("(max-width: 768px)").matches||1!==t.touches.length)return;const e=t.composedPath(),i=t.currentTarget;for(const t of e){if(t===i)break;if(t instanceof HTMLElement&&(t.matches('input, select, textarea, [role="slider"], [contenteditable="true"]')||t.scrollTop>0))return}const o=t.touches[0];this._touch={x:o.clientX,y:o.clientY,offset:0}},this._touchEnd=t=>{const e=t.currentTarget,i=this._touch?.offset||0;this._touch=void 0,i&&(t.preventDefault(),t.stopPropagation(),this._ignoreClickUntil=Date.now()+400,"touchend"===t.type&&i>=Math.min(120,.25*e.clientHeight)?this._close():(e.style.removeProperty("--dd-popup-drag-y"),this._animateMobile()&&(this._animation=e.animate([{transform:`translateY(${i}px)`},{transform:"translateY(0)"}],{duration:250,easing:"cubic-bezier(0.22, 1, 0.36, 1)"}))))},this._close=async()=>{if(this._closing)return;this._closing=!0;const t=this.renderRoot.querySelector(".panel");if(t&&this._animateMobile()){const e=getComputedStyle(t).transform;this._animation?.cancel(),this._animation=t.animate([{transform:e},{transform:`translateY(${this._slideDistance(t)}px)`}],{duration:300,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards"});try{await this._animation.finished}catch{return void(this._closing=!1)}}this.dispatchEvent(new CustomEvent("dd-close",{bubbles:!0,composed:!0})),this._closing=!1},this._keydown=t=>{"Escape"===t.key&&(t.preventDefault(),this._close())}}updated(){this.style.setProperty("--dd-popup-layer",this.navigationMenu?"141":"1040");const t=this.renderRoot.querySelector(".modal");if(this.open&&t&&!t.open){this._releasePageScroll||(this._releasePageScroll=function(){if(0===$++){const t=[document.documentElement,document.body].flatMap(t=>["overflow","overscroll-behavior-y"].map(e=>({element:t,name:e,value:t.style.getPropertyValue(e),priority:t.style.getPropertyPriority(e)})));t.forEach(({element:t,name:e})=>t.style.setProperty(e,"overflow"===e?"hidden":"none")),w=()=>t.forEach(({element:t,name:e,value:i,priority:o})=>{i?t.style.setProperty(e,i,o):t.style.removeProperty(e)})}let t=!1;return()=>{t||(t=!0,0===--$&&(w?.(),w=void 0))}}()),this.navigationMenu?t.show():t.showModal();const e=this.renderRoot.querySelector(".panel");e?.focus({preventScroll:!0}),e&&this._animateMobile()&&(this._animation=e.animate([{transform:`translateY(${this._slideDistance(e)}px)`},{transform:"translateY(0)"}],{duration:360,easing:"cubic-bezier(0.22, 1, 0.36, 1)"}))}this.open||(this._animation?.cancel(),this._animation=void 0,this._touch=void 0,this._releasePageScroll?.(),this._releasePageScroll=void 0)}disconnectedCallback(){this._animation?.cancel(),this._animation=void 0,this._closing=!1,this._touch=void 0,this._releasePageScroll?.(),this._releasePageScroll=void 0,super.disconnectedCallback()}_animateMobile(){return window.matchMedia("(max-width: 768px)").matches&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches}_slideDistance(t){return t.getBoundingClientRect().height+Math.max(0,parseFloat(getComputedStyle(t).bottom)||0)}_touchMove(t){if(!this._touch)return;if(1!==t.touches.length)return void this._touchEnd(t);const e=t.touches[0],i=e.clientY-this._touch.y,o=Math.abs(e.clientX-this._touch.x);this._touch.offset||!(i<-8||o>8&&o>i)?!this._touch.offset&&i<=8||(t.preventDefault(),t.stopPropagation(),this._animation?.cancel(),this._touch.offset=Math.max(0,i),t.currentTarget.style.setProperty("--dd-popup-drag-y",`${this._touch.offset}px`)):this._touch=void 0}render(){return this.open?a`
      <dialog class="modal" aria-label=${this.titleText}
        style=${`--dd-popup-hit-area: ${this.navigationMenu?"none":"auto"};`}
        @click=${t=>t.stopPropagation()}
        @cancel=${t=>{t.preventDefault(),this._close()}}>
      <div class="scrim" @pointerdown=${this._scrimPointerDown} @click=${this._scrimClick}></div>
      <section
        class="panel ${this.wide?"wide":""}"
        role="dialog"
        aria-modal=${this.navigationMenu?"false":"true"}
        aria-label=${this.titleText}
        tabindex="0"
        style=${`--dd-popup-accent: ${this.accent}; --dd-popup-bottom: ${this.navigationMenu?"calc(76px + env(safe-area-inset-bottom, 0px))":"0px"}; --dd-popup-body-bottom: ${this.navigationMenu?"4px":"env(safe-area-inset-bottom, 0px)"}; --dd-popup-max-height: ${this.navigationMenu?"min(64dvh, 560px)":"88dvh"}; --dd-popup-inset: ${this.navigationMenu?"16px":"0px"}; --dd-popup-radius: ${this.navigationMenu?"24px":"24px 24px 0 0"};`}
        @click=${{handleEvent:this._panelClick,capture:!0}}
        @keydown=${this._keydown}
        @touchstart=${{handleEvent:this._touchStart,capture:!0}}
        @touchmove=${this._touchMove}
        @touchend=${{handleEvent:this._touchEnd,capture:!0,passive:!1}}
        @touchcancel=${{handleEvent:this._touchEnd,capture:!0,passive:!1}}
      >
        <div class="drag-grip" aria-hidden="true"><span></span></div>
        <header class="header" style=${this.navigationMenu?"--dd-popup-header-height: 42px; --dd-popup-header-padding: 0 12px 8px; --dd-popup-header-divider: none; --dd-popup-title-size: 18px; --dd-popup-title-weight: 850; --dd-popup-title-line-height: 1.1; --dd-popup-close-size: 34px; --dd-popup-close-border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent); --dd-popup-close-icon-size: 21px;":""}>
          <div class="heading">
            ${this.navigationMenu?o:a`<span class="icon-tile" aria-hidden="true">
              <ha-icon icon=${this.icon}></ha-icon>
            </span>`}
            <div class="copy">
              <div class="title">
                <span class="title-text">${this.titleText}</span>
                ${void 0!==this.titleCount?a`<span class="title-count">(${this.titleCount})</span>`:o}
              </div>
              ${this.subtitle?a`<div class="subtitle">${this.subtitle}</div>`:o}
              <slot name="header-extra"></slot>
            </div>
          </div>
          <div class="actions">
            <slot name="actions"></slot>
            <button
              class="icon-button close"
              type="button"
              title=${this.closeLabel}
              aria-label=${this.closeLabel}
              @click=${this._close}
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
        </header>
        <div class="body"><slot></slot></div>
      </section>
      </dialog>
    `:o}};k.styles=e`:host{position:fixed;inset:0;z-index:var(--dd-popup-layer,1040);display:block;pointer-events:none;-webkit-tap-highlight-color:transparent}.modal{position:fixed;inset:0;width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;color:inherit;overflow:clip;overscroll-behavior:none;pointer-events:var(--dd-popup-hit-area)}.modal::backdrop{background:transparent}.drag-grip{display:none}.scrim{position:absolute;inset:0;background:rgba(0,0,0,.38);backdrop-filter:blur(2px);touch-action:none;pointer-events:auto}.panel{pointer-events:auto;position:absolute;left:50%;top:50%;width:min(760px,calc(100vw - 32px));max-height:min(86dvh,760px);display:flex;flex-direction:column;overflow:clip;transform:translate(-50%,-50%);border:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent);border-radius:14px;background:var(--card-background-color);color:var(--primary-text-color);box-shadow:0 24px 64px rgba(8,13,24,.24);outline:none}.panel.wide{width:min(var(--dd-popup-wide-width,900px),calc(100vw - 32px))}.header{min-height:var(--dd-popup-header-height,72px);padding:var(--dd-popup-header-padding,12px 18px);box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:12px;flex:0 0 auto;background:var(--card-background-color);box-shadow:var(--dd-popup-header-divider,inset 0 -1px 0 color-mix(in srgb,var(--divider-color) 65%,transparent))}.heading{min-width:0;display:flex;align-items:center;gap:10px}.icon-tile{width:44px;height:44px;flex:0 0 44px;display:inline-flex;align-items:center;justify-content:center;border-radius:11px;color:var(--dd-popup-accent);background:color-mix(in srgb,var(--dd-popup-accent) 11%,var(--card-background-color))}.icon-tile ha-icon{--mdc-icon-size:24px}.copy{min-width:0;display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;gap:8px}.title{max-width:100%;display:flex;align-items:baseline;gap:7px;overflow:hidden;color:var(--primary-text-color);font-size:var(--dd-popup-title-size,20px);font-weight:var(--dd-popup-title-weight,900);line-height:var(--dd-popup-title-line-height,1.08);text-overflow:ellipsis;white-space:nowrap}.title-text{min-width:0;overflow:hidden;text-overflow:ellipsis}.title-count{flex:0 0 auto;color:var(--secondary-text-color);font-size:12px;font-weight:650}.subtitle{color:var(--secondary-text-color);font-size:11px;font-weight:650;line-height:1.2}.actions{flex:0 0 auto;display:flex;align-items:center;gap:6px}::slotted([slot="header-extra"]){max-width:100%}::slotted([slot="actions"]){display:inline-flex;align-items:center}.icon-button{width:var(--dd-popup-close-size,38px);height:var(--dd-popup-close-size,38px);padding:0;border:var(--dd-popup-close-border,0);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:var(--primary-text-color);background:transparent;-webkit-tap-highlight-color:transparent}.icon-button:hover{background:color-mix(in srgb,var(--primary-text-color) 7%,transparent)}.icon-button ha-icon{--mdc-icon-size:var(--dd-popup-close-icon-size,20px)}.body{min-height:0;flex:1 1 auto;overflow-y:auto;overscroll-behavior-y:contain;background:var(--primary-background-color)}@media (max-width:768px){.panel,.panel.wide{position:fixed;left:var(--dd-popup-inset);right:var(--dd-popup-inset);top:auto;bottom:var(--dd-popup-bottom);width:calc(100vw - 2 * var(--dd-popup-inset));max-width:calc(100vw - 2 * var(--dd-popup-inset));max-height:min(var(--dd-popup-max-height),calc(100dvh - var(--dd-popup-bottom) - 16px));transform:translateY(var(--dd-popup-drag-y,0px));border-width:0;border-radius:var(--dd-popup-radius)}.drag-grip{display:flex;justify-content:center;align-items:center;height:20px;flex:0 0 20px;touch-action:none}.drag-grip span{width:40px;height:4px;border-radius:999px;background:color-mix(in srgb,var(--secondary-text-color) 45%,transparent)}.header{min-height:var(--dd-popup-header-height,74px);padding:var(--dd-popup-header-padding,14px 14px 12px)}.icon-tile{width:48px;height:48px;flex-basis:48px;border-radius:12px}.icon-tile ha-icon{--mdc-icon-size:25px}.title{font-size:var(--dd-popup-title-size,20px)}.copy{flex-direction:column;align-items:flex-start;gap:3px}.body{max-height:calc(88dvh - 94px);padding-bottom:var(--dd-popup-body-bottom)}}`,l([d({type:Boolean,reflect:!0})],k.prototype,"open",void 0),l([d()],k.prototype,"titleText",void 0),l([d({type:Number})],k.prototype,"titleCount",void 0),l([d()],k.prototype,"subtitle",void 0),l([d()],k.prototype,"icon",void 0),l([d()],k.prototype,"accent",void 0),l([d()],k.prototype,"closeLabel",void 0),l([d({type:Boolean})],k.prototype,"wide",void 0),l([d({type:Boolean})],k.prototype,"navigationMenu",void 0),l([function(t){return(e,i)=>{const o="function"==typeof e?e:e[i];Object.assign(o,t)}}({passive:!1,capture:!0})],k.prototype,"_touchMove",null),k=l([p("dd-next-popup-shell")],k);let _=class extends i{constructor(){super(...arguments),this.titleText="",this.subtitle="",this.parentTitle="",this.icon="mdi:view-dashboard-outline",this.accent="var(--primary-color)",this.back=!1,this.backLabel="Back",this.backIcon="mdi:arrow-left",this._back=()=>{this.dispatchEvent(new CustomEvent("dd-back",{bubbles:!0,composed:!0}))}}render(){return a`
      <header class="header" style=${`--dd-page-accent: ${this.accent};`}>
        ${this.back?a`
          <button class="back" type="button" title=${this.backLabel} aria-label=${this.backLabel} @click=${this._back}>
            <ha-icon icon=${this.backIcon}></ha-icon>
          </button>
        `:o}
        <div class="main">
          <span class="icon"><ha-icon icon=${this.icon}></ha-icon></span>
          <div class="copy">
            <h1>
              ${this.parentTitle?a`
                <span class="parent-title">${this.parentTitle}</span>
                <ha-icon class="breadcrumb" icon="mdi:chevron-right"></ha-icon>
              `:o}
              <span class="current-title">${this.titleText}</span>
            </h1>
            ${this.subtitle?a`<p>${this.subtitle}</p>`:o}
          </div>
        </div>
        <div class="actions"><slot name="actions"></slot></div>
      </header>
    `}};_.styles=e`:host{display:block;min-width:0;margin-bottom:14px}.header{min-height:86px;padding:12px 16px;box-sizing:border-box;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:12px;border-radius:8px;background:linear-gradient(135deg,color-mix(in srgb,var(--card-background-color) 97%,var(--dd-page-accent) 3%),var(--card-background-color));box-shadow:0 8px 22px rgba(15,23,42,.05)}.back{width:40px;height:40px;padding:0;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:var(--primary-text-color);background:var(--card-background-color);box-shadow:0 6px 16px rgba(15,23,42,.12)}.back ha-icon{--mdc-icon-size:21px}.main{min-width:0;display:flex;align-items:center;gap:11px}.icon{width:44px;height:44px;flex:0 0 44px;display:inline-flex;align-items:center;justify-content:center;border-radius:8px;color:var(--dd-page-accent);background:color-mix(in srgb,var(--dd-page-accent) 12%,var(--card-background-color));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--dd-page-accent) 14%,transparent)}.icon ha-icon{--mdc-icon-size:24px}.copy{min-width:0}h1{margin:0;min-width:0;overflow:hidden;display:flex;align-items:center;gap:5px;color:var(--primary-text-color);font-size:clamp(22px,2vw,30px);font-weight:900;line-height:1.05;white-space:nowrap}.parent-title{min-width:0;overflow:hidden;color:var(--secondary-text-color);font-weight:700;text-overflow:ellipsis}.current-title{min-width:0;overflow:hidden;text-overflow:ellipsis}.breadcrumb{flex:0 0 auto;color:var(--secondary-text-color);--mdc-icon-size:18px}p{margin:3px 0 0;color:var(--secondary-text-color);font-size:12px;line-height:1.2}.actions{display:flex;align-items:center;justify-content:flex-end;gap:8px}@media (max-width:768px){:host{margin:-10px -10px 14px}.header{min-height:82px;padding:12px 14px 14px;border-radius:0 0 8px 8px;background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 98%,transparent) 0%,color-mix(in srgb,var(--card-background-color) 90%,var(--dd-page-accent) 4%) 100%);box-shadow:0 10px 26px rgba(15,23,42,.08)}.back{width:38px;height:38px}.main{gap:9px}.icon{width:38px;height:38px;flex-basis:38px}.icon ha-icon{--mdc-icon-size:21px}h1{font-size:22px}.actions{gap:6px}}`,l([d()],_.prototype,"titleText",void 0),l([d()],_.prototype,"subtitle",void 0),l([d()],_.prototype,"parentTitle",void 0),l([d()],_.prototype,"icon",void 0),l([d()],_.prototype,"accent",void 0),l([d({type:Boolean})],_.prototype,"back",void 0),l([d()],_.prototype,"backLabel",void 0),l([d()],_.prototype,"backIcon",void 0),_=l([p("dd-next-page-header")],_);let L=class extends i{constructor(){super(...arguments),this.name="",this.stateLabel="",this.picture="",this.icon="mdi:account",this.presence="unknown"}render(){return a`
      <button
        class="tile is-${this.presence}"
        type="button"
        aria-label=${this.stateLabel?`${this.name}: ${this.stateLabel}`:this.name}
      >
        <span class="avatar ${this.picture?"has-picture":""}" aria-hidden="true">
          ${this.picture?a`<img src=${this.picture} alt="" loading="lazy" decoding="async">`:a`<ha-icon icon=${this.icon}></ha-icon>`}
        </span>
        <span class="copy">
          <span class="name">${this.name}</span>
          ${this.stateLabel?a`<span class="state">${this.stateLabel}</span>`:o}
        </span>
        <ha-icon class="chevron" icon="mdi:chevron-right" aria-hidden="true"></ha-icon>
      </button>
    `}};function z(t){return a`
    <dd-next-compact-entity-tile
      variant="compact"
      .name=${t.name}
      .status=${t.status}
      .icon=${t.icon}
      .accent=${t.accent}
      .active=${t.active}
      .unavailable=${t.unavailable}
      @dd-open=${t.onOpen}
    >
      ${t.toggle?a`
        <dd-next-entity-actions
          slot="actions"
          mode="toggle"
          .accent=${t.accent}
          .active=${t.active}
          .unavailable=${t.unavailable}
          .turnOnLabel=${t.turnOnLabel}
          .turnOffLabel=${t.turnOffLabel}
          @dd-action=${t.onToggle}
        ></dd-next-entity-actions>
      `:o}
    </dd-next-compact-entity-tile>
  `}L.styles=e`
    :host {
      --person-color: ${n(h("person"))};
      --person-home-color: #2f9b62;
      display: block;
      min-width: 0;
    }

    .tile {
      width: 100%;
      min-height: 62px;
      padding: 10px 12px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 12px;
      border: 0;
      border-radius: 14px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      cursor: pointer;
      box-shadow:
        0 10px 24px rgba(15, 23, 42, 0.05),
        inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 6%, transparent);
      -webkit-tap-highlight-color: transparent;
      transition:
        transform 0.18s ease,
        box-shadow 0.18s ease;
    }

    .tile:hover {
      box-shadow:
        0 14px 28px rgba(15, 23, 42, 0.08),
        inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 14%, transparent);
    }

    .tile:active {
      transform: scale(0.985);
    }

    .tile:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 999px;
      color: var(--person-color);
      background: color-mix(in srgb, var(--person-color) 13%, transparent);
    }

    .avatar ha-icon {
      --mdc-icon-size: 22px;
    }

    .avatar.has-picture {
      background: var(--secondary-background-color);
    }

    .avatar img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .copy {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .name,
    .state {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .name {
      font-size: 14px;
      font-weight: 850;
      line-height: 1.15;
    }

    .state {
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 750;
      line-height: 1.15;
    }

    .is-home .state {
      color: var(--person-home-color);
    }

    .is-home .avatar {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--person-home-color) 55%, transparent);
    }

    /* No tracker: neutral, clearly not home, away or in a zone. */
    .is-unknown .avatar {
      opacity: 0.6;
      filter: grayscale(1);
    }

    .is-unknown .state {
      color: var(--disabled-text-color, var(--secondary-text-color));
      font-style: italic;
    }

    .chevron {
      --mdc-icon-size: 18px;
      flex: 0 0 auto;
      color: color-mix(in srgb, var(--primary-text-color) 38%, transparent);
    }

    @media (prefers-reduced-motion: reduce) {
      .tile {
        transition: none;
      }

      .tile:active {
        transform: none;
      }
    }
  `,l([d({attribute:!1})],L.prototype,"name",void 0),l([d({attribute:!1})],L.prototype,"stateLabel",void 0),l([d({attribute:!1})],L.prototype,"picture",void 0),l([d({attribute:!1})],L.prototype,"icon",void 0),l([d({attribute:!1})],L.prototype,"presence",void 0),L=l([p("dwains-dashboard-next-person-tile")],L);let C=class extends i{constructor(){super(...arguments),this.entityId="",this.areaName="",this.displayName="",this.popup=!1,this._showMoreInfo=()=>{this.dispatchEvent(new CustomEvent("dd-more-info",{detail:{entityId:this.entityId},bubbles:!0,composed:!0}))},this._personKeydown=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._showMoreInfo())}}render(){const t=this.hass?.states?.[this.entityId];if(!t||!this.config)return o;const e=this.entityId.split(".")[0]||"unknown",i=["select","input_select"].includes(e)?u({hass:this.hass,config:this.config,entity:this.entityId,surface:"devices_cards"}):void 0;if(["select","input_select"].includes(e)&&(!i||!1===i.enabled)){const i=this.displayName||t.attributes?.friendly_name||this.entityId,o=!0===this.config.settings?.hide_area_name_in_entity_names?m(i,this.areaName):i,n=["unknown","unavailable"].includes(String(t.state).toLowerCase()),s=Array.isArray(t.attributes?.options)?t.attributes.options.map(String):[];return n||s.includes(t.state)||s.unshift(t.state),a`
        <dd-next-compact-entity-tile
          .name=${o}
          .status=${b(this.hass,t)}
          .icon=${x(e)}
          .accent=${h(e)}
          .unavailable=${n}
          .selectOptions=${s}
          .selectedOption=${String(t.state)}
          @dd-open=${this._showMoreInfo}
          @dd-select=${async t=>{try{await this.hass.callService(e,"select_option",{entity_id:this.entityId,option:t.detail.option})}catch(t){console.warn(`Failed to select option for ${this.entityId}:`,t)}}}
        ></dd-next-compact-entity-tile>
      `}if("person"===e){const e=this.displayName||t.attributes?.friendly_name||this.hass.entities?.[this.entityId]?.name||this.entityId,i=!0===this.config?.settings?.hide_area_name_in_entity_names?m(e,this.areaName):e;return a`
        <dwains-dashboard-next-person-tile
          .hass=${this.hass}
          .entityId=${this.entityId}
          .displayName=${i}
          .showMap=${!this.popup}
          role="button"
          tabindex="0"
          aria-label=${i}
          @click=${this._showMoreInfo}
          @keydown=${this._personKeydown}
        ></dwains-dashboard-next-person-tile>
      `}if(["light","cover","climate"].includes(e)){const i=this.displayName||t.attributes?.friendly_name||this.hass.entities?.[this.entityId]?.name||this.entityId,n=!0===this.config.settings?.hide_area_name_in_entity_names?m(i,this.areaName):i,s=["unknown","unavailable"].includes(String(t.state).toLowerCase()),r=["on","open","opening","heat","cool"].includes(String(t.state).toLowerCase()),c=Number(t.attributes?.supported_features||0),l=t=>c<=0?8!==t:0!==(c&t),d="cover"===e?"cover":"light"===e?"toggle":"none";let p=b(this.hass,t);if("light"===e&&"number"==typeof t.attributes?.brightness&&"on"===t.state&&(p+=" · "+y(Math.round(t.attributes.brightness/255*100),"%")),"cover"===e&&"number"==typeof t.attributes?.current_position&&(p+=" · "+y(t.attributes.current_position,"%")),"climate"===e){const e=this.hass.config?.unit_system?.temperature||"°C",i=t.attributes?.current_temperature,o=t.attributes?.temperature;void 0!==i&&(p=y(i,e),void 0!==o&&(p+=" · "+y(o,e)))}const u=h(e,t.attributes?.device_class),v=this.hass.entities?.[this.entityId]?.icon||t.attributes?.icon||g(e,t.attributes?.device_class)||x(e);return a`
        <dd-next-compact-entity-tile
          variant="compact"
          .name=${n}
          .status=${p}
          .icon=${v}
          .accent=${u}
          .active=${r}
          .unavailable=${s}
          @dd-open=${this._showMoreInfo}
        >
          ${"none"!==d?a`
            <dd-next-entity-actions
              slot="actions"
              .mode=${d}
              .accent=${u}
              .active=${r}
              .unavailable=${s}
              .state=${String(t.state)}
              .canOpen=${l(1)}
              .canClose=${l(2)}
              .canStop=${l(8)}
              @dd-action=${t=>{const i=t.detail.action;if("light"===e)this.hass.callService("light",i,{entity_id:this.entityId});else if("cover"===e){const t="open"===i?"open_cover":"stop"===i?"stop_cover":"close_cover";this.hass.callService("cover",t,{entity_id:this.entityId})}}}
            ></dd-next-entity-actions>
          `:o}
        </dd-next-compact-entity-tile>
      `}const n="cover"===e?`--primary-color: ${h("cover")}; --state-cover-open-color: ${h("cover")}; --state-cover-opening-color: ${h("cover")}; --state-cover-active-color: ${h("cover")};`:"";return a`
      <div class="card ${e}-card">
        <dwains-dashboard-next-card-host
          framed
          ?eager=${this.popup}
          ?refresh-layout=${this.popup}
          style=${n}
          .hass=${this.hass}
          .config=${v({hass:this.hass,config:this.config,entity:this.entityId,surface:"devices_cards"})}
        ></dwains-dashboard-next-card-host>
      </div>
    `}};C.styles=e`:host{display:block;width:100%;min-width:0;position:relative}.card,dwains-dashboard-next-card-host{display:block;width:100%;min-width:0}.climate-card{overflow:visible}.climate-card>dwains-dashboard-next-card-host{width:calc(100% / .7);transform:scale(.7);transform-origin:top left}@media (max-width:768px){.climate-card>dwains-dashboard-next-card-host{width:calc(100% / .7);transform:scale(.7);transform-origin:top left}}`,l([d({attribute:!1})],C.prototype,"hass",void 0),l([d({attribute:!1})],C.prototype,"config",void 0),l([d()],C.prototype,"entityId",void 0),l([d()],C.prototype,"areaName",void 0),l([d()],C.prototype,"displayName",void 0),l([d({type:Boolean})],C.prototype,"popup",void 0),C=l([p("dd-next-device-entity-card")],C);let M=class extends i{constructor(){super(...arguments),this.name="",this.status="",this.icon="mdi:shape-outline",this.picture="",this.accent="var(--primary-color)",this.variant="compact",this.active=!1,this.unavailable=!1,this.editing=!1,this.selectedOption="",this._open=()=>{this.dispatchEvent(new CustomEvent("dd-open",{bubbles:!0,composed:!0}))},this._keydown=t=>{const e=t.target;e?.closest?.("button, select, input, textarea, a")||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._open())}}render(){const t=void 0!==this.selectOptions&&!this.editing;return a`
      <article
        class="tile ${this.variant}"
        style=${`--dd-entity-accent: ${this.accent};`}
        role="button"
        tabindex="0"
        aria-label=${this.name}
        @click=${this._open}
        @keydown=${this._keydown}
      >
        <div class="main">
          <slot name="leading"></slot>
          <span class="icon ${this.picture?"has-picture":""}">
            ${this.picture?a`<img src=${this.picture} alt=${this.name}>`:a`<ha-icon icon=${this.icon}></ha-icon>`}
          </span>
          <div class="copy">
            <div class="name" title=${this.name}>${this.name}</div>
            ${this.status?a`<div class="state" title=${this.status}>${this.status}</div>`:o}
          </div>
          <div class="actions">
            ${t?a`
              <span class="select-action">
                <ha-icon class="select-chevron" icon="mdi:chevron-down" aria-hidden="true"></ha-icon>
                <select
                  class="select-control"
                  aria-label=${this.name}
                  .value=${this.selectedOption}
                  ?disabled=${this.unavailable||!this.selectOptions?.length}
                  @click=${t=>t.stopPropagation()}
                  @keydown=${t=>t.stopPropagation()}
                  @change=${t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("dd-select",{detail:{option:t.currentTarget.value},bubbles:!0,composed:!0}))}}
                >
                  ${this.selectOptions?.map(t=>a`<option value=${t} ?selected=${t===this.selectedOption}>${t}</option>`)}
                </select>
              </span>
            `:o}
            <slot name="actions"></slot>
          </div>
        </div>
        <div class="footer"><slot></slot></div>
      </article>
    `}};M.styles=e`:host{display:block;min-width:0;width:100%;--dd-entity-accent:var(--primary-color)}.tile{position:relative;width:100%;min-width:0;margin:0;box-sizing:border-box;color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}.tile.compact{min-height:62px;padding:8px 10px;display:flex;flex-direction:column;justify-content:center;overflow:hidden;border:1px solid color-mix(in srgb,var(--primary-text-color) 6%,transparent);border-radius:8px;background:var(--card-background-color);box-shadow:0 3px 9px rgba(15,23,42,.035)}.tile.card{min-height:128px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;border:0;border-radius:10px;background:color-mix(in srgb,var(--card-background-color) 98%,#ffffff);box-shadow:0 12px 26px rgba(15,23,42,.06),inset 0 0 0 1px rgba(15,23,42,.035)}:host([active]) .tile{box-shadow:0 8px 18px rgba(15,23,42,.06),inset 0 0 0 1px color-mix(in srgb,var(--dd-entity-accent) 18%,transparent)}:host([unavailable]) .tile{opacity:.62}.tile:active:not(:has(.select-control:active)){transform:scale(.985)}.main{width:100%;min-width:0;display:grid;grid-template-columns:36px minmax(0,1fr) auto;align-items:center;gap:9px}:host([editing]) .main{grid-template-columns:auto 36px minmax(0,1fr) auto}::slotted([slot="leading"]){grid-column:1}.icon{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:8px;color:var(--dd-entity-accent);background:color-mix(in srgb,var(--dd-entity-accent) 13%,transparent)}.card .icon{border-radius:11px}.icon ha-icon{--mdc-icon-size:20px}.icon.has-picture{overflow:hidden;padding:0;background:var(--secondary-background-color)}.icon img{width:100%;height:100%;display:block;object-fit:cover}.copy{min-width:0;display:flex;flex-direction:column;justify-content:center;gap:2px}.name{overflow:hidden;color:var(--primary-text-color);font-size:12px;font-weight:850;line-height:1.15;text-overflow:ellipsis;white-space:nowrap}.card .name{margin-top:3px;font-size:15px;font-weight:900;white-space:normal;overflow-wrap:anywhere}.state{overflow:hidden;color:var(--secondary-text-color);font-size:10px;font-weight:650;line-height:1.1;text-overflow:ellipsis;white-space:nowrap}:host([active]) .state{color:var(--dd-entity-accent)}.actions{min-width:0;display:inline-flex;align-items:center;justify-content:flex-end;gap:5px}.select-chevron{color:var(--secondary-text-color);--mdc-icon-size:20px}.select-action{position:relative;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;flex:0 0 34px}.select-control{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer;font:inherit}.tile:has(.select-control:focus-visible){outline:2px solid var(--dd-entity-accent);outline-offset:-2px}.footer:empty{display:none}.footer{min-width:0;margin-top:8px}@media (max-width:768px){.tile.compact{min-height:58px;padding:7px 9px}.tile.compact .main{grid-template-columns:34px minmax(0,1fr) auto;gap:8px}:host([editing]) .tile.compact .main{grid-template-columns:auto 34px minmax(0,1fr) auto}.tile.compact .icon{width:34px;height:34px}}`,l([d()],M.prototype,"name",void 0),l([d()],M.prototype,"status",void 0),l([d()],M.prototype,"icon",void 0),l([d()],M.prototype,"picture",void 0),l([d()],M.prototype,"accent",void 0),l([d()],M.prototype,"variant",void 0),l([d({type:Boolean,reflect:!0})],M.prototype,"active",void 0),l([d({type:Boolean,reflect:!0})],M.prototype,"unavailable",void 0),l([d({type:Boolean,reflect:!0})],M.prototype,"editing",void 0),l([d({attribute:!1})],M.prototype,"selectOptions",void 0),l([d()],M.prototype,"selectedOption",void 0),M=l([p("dd-next-compact-entity-tile")],M);let O=class extends i{constructor(){super(...arguments),this.mode="none",this.accent="var(--primary-color)",this.active=!1,this.unavailable=!1,this.state="",this.canOpen=!0,this.canStop=!0,this.canClose=!0,this.turnOnLabel="Turn on",this.turnOffLabel="Turn off",this.openLabel="Open",this.stopLabel="Stop",this.closeLabel="Close",this.lockLabel="Lock",this.unlockLabel="Unlock",this.activateLabel="Activate"}_emit(t,e){t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new CustomEvent("dd-action",{detail:{action:e},bubbles:!0,composed:!0}))}render(){if("none"===this.mode)return o;if("toggle"===this.mode){const t=this.active?this.turnOffLabel:this.turnOnLabel;return a`
        <button
          class="action toggle ${this.active?"active":""}"
          type="button"
          style=${`--dd-action-accent: ${this.accent};`}
          title=${t}
          aria-label=${t}
          ?disabled=${this.unavailable}
          @click=${t=>this._emit(t,this.active?"turn_off":"turn_on")}
        ></button>
      `}if("cover"===this.mode){const t=String(this.state||"").toLowerCase(),e="opening"===t||"closing"===t;return a`
        <div class="cover" style=${`--dd-action-accent: ${this.accent};`}>
          ${this.canOpen?a`
            <button class="action round ${"opening"===t?"active":""}" type="button" title=${this.openLabel} aria-label=${this.openLabel}
              ?disabled=${this.unavailable} @click=${t=>this._emit(t,"open")}>
              <ha-icon icon="mdi:arrow-up"></ha-icon>
            </button>`:o}
          ${this.canStop?a`
            <button class="action round ${e?"active":""}" type="button" title=${this.stopLabel} aria-label=${this.stopLabel}
              ?disabled=${this.unavailable} @click=${t=>this._emit(t,"stop")}>
              <ha-icon icon="mdi:stop"></ha-icon>
            </button>`:o}
          ${this.canClose?a`
            <button class="action round ${"closing"===t?"active":""}" type="button" title=${this.closeLabel} aria-label=${this.closeLabel}
              ?disabled=${this.unavailable} @click=${t=>this._emit(t,"close")}>
              <ha-icon icon="mdi:arrow-down"></ha-icon>
            </button>`:o}
        </div>
      `}if("lock"===this.mode){const t=this.active?this.lockLabel:this.unlockLabel;return a`
        <button class="action round" type="button" style=${`--dd-action-accent: ${this.accent};`}
          title=${t} aria-label=${t} ?disabled=${this.unavailable}
          @click=${t=>this._emit(t,this.active?"lock":"unlock")}>
          <ha-icon icon=${this.active?"mdi:lock-open-variant-outline":"mdi:lock-outline"}></ha-icon>
        </button>
      `}return a`
      <button class="action round" type="button" style=${`--dd-action-accent: ${this.accent};`}
        title=${this.activateLabel} aria-label=${this.activateLabel}
        @click=${t=>this._emit(t,"activate")}>
        <ha-icon icon="mdi:play"></ha-icon>
      </button>
    `}};O.styles=e`:host{display:inline-flex;align-items:center;--dd-action-accent:var(--primary-color)}button{font:inherit;-webkit-tap-highlight-color:transparent}.action{padding:0;border:0;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;cursor:pointer;transition:background-color .18s ease,color .18s ease,transform .18s ease,opacity .18s ease}.action:active{transform:scale(.94)}.action:disabled{opacity:.36;cursor:not-allowed}.toggle{width:38px;height:22px;justify-content:flex-start;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 80%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,.07),0 4px 10px rgba(15,23,42,.08)}.toggle::before{content:'';width:18px;height:18px;margin-left:2px;border-radius:999px;background:#fff;box-shadow:0 2px 7px rgba(15,23,42,.2);transition:transform .18s ease}.toggle.active{background:var(--dd-action-accent)}.toggle.active::before{transform:translateX(16px)}.round{width:30px;height:30px;border-radius:999px;color:color-mix(in srgb,var(--primary-text-color) 52%,transparent);background:color-mix(in srgb,var(--secondary-background-color) 70%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,.05)}.round:hover,.round.active{color:var(--dd-action-accent);background:color-mix(in srgb,var(--dd-action-accent) 10%,var(--card-background-color))}.round ha-icon{--mdc-icon-size:17px}.cover{display:inline-flex;align-items:center;gap:4px}`,l([d()],O.prototype,"mode",void 0),l([d()],O.prototype,"accent",void 0),l([d({type:Boolean})],O.prototype,"active",void 0),l([d({type:Boolean})],O.prototype,"unavailable",void 0),l([d()],O.prototype,"state",void 0),l([d({type:Boolean})],O.prototype,"canOpen",void 0),l([d({type:Boolean})],O.prototype,"canStop",void 0),l([d({type:Boolean})],O.prototype,"canClose",void 0),l([d()],O.prototype,"turnOnLabel",void 0),l([d()],O.prototype,"turnOffLabel",void 0),l([d()],O.prototype,"openLabel",void 0),l([d()],O.prototype,"stopLabel",void 0),l([d()],O.prototype,"closeLabel",void 0),l([d()],O.prototype,"lockLabel",void 0),l([d()],O.prototype,"unlockLabel",void 0),l([d()],O.prototype,"activateLabel",void 0),O=l([p("dd-next-entity-actions")],O);let j=class extends i{constructor(){super(...arguments),this.mode="segmented",this.accent="var(--primary-color)",this.activeCount=0,this.totalCount=0,this.toggleOnLabel="",this.toggleOffLabel="",this.items=[]}_emit(t){this.dispatchEvent(new CustomEvent("dd-action",{detail:{action:t},bubbles:!0,composed:!0}))}render(){const t=this.totalCount>0&&this.activeCount===this.totalCount;if("toggle"===this.mode){const e=t?"turn_off":"turn_on",i=t?this.toggleOffLabel:this.toggleOnLabel;return a`
        <button
          class="toggle"
          type="button"
          style=${`--dd-action-accent: ${this.accent};`}
          title=${i}
          aria-label=${i}
          @click=${t=>{t.stopPropagation(),this._emit(e)}}
        >
          <span>${this.activeCount}/${this.totalCount}</span>
          <span class="track ${t?"is-on":""}"></span>
        </button>
      `}return this.items.length?a`
      <div class="segmented" style=${`--dd-action-accent: ${this.accent};`} role="group">
        ${this.items.map(t=>a`
          <button
            class="segment ${t.active?"active":""}"
            type="button"
            title=${t.label}
            aria-label=${t.label}
            @click=${e=>{e.stopPropagation(),this._emit(t.action)}}
          ><ha-icon icon=${t.icon}></ha-icon></button>
        `)}
      </div>
    `:o}};j.styles=e`:host{display:inline-flex;align-items:center;flex:0 0 auto}button{font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}.toggle{min-height:30px;padding:4px 7px;border:1px solid var(--divider-color);border-radius:999px;display:inline-flex;align-items:center;gap:7px;color:var(--secondary-text-color);background:var(--card-background-color);font-size:12px;font-weight:750}.track{width:31px;height:18px;position:relative;display:inline-block;border-radius:999px;background:color-mix(in srgb,var(--primary-text-color) 20%,transparent)}.track::after{content:'';position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#fff;transition:transform .18s ease}.track.is-on{background:var(--dd-action-accent)}.track.is-on::after{transform:translateX(13px)}.segmented{height:30px;display:inline-flex;align-items:center;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent);border-radius:999px;background:color-mix(in srgb,var(--card-background-color) 92%,transparent);color:color-mix(in srgb,var(--primary-text-color) 58%,transparent)}.segment{width:34px;height:30px;padding:0;border:0;display:inline-flex;align-items:center;justify-content:center;color:inherit;background:transparent}.segment + .segment{border-left:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent)}.segment:hover,.segment.active{color:var(--dd-action-accent);background:color-mix(in srgb,var(--dd-action-accent) 12%,var(--card-background-color))}.segment ha-icon{--mdc-icon-size:17px}@media (max-width:768px){.toggle{min-height:28px;font-size:11px}}`,l([d()],j.prototype,"mode",void 0),l([d()],j.prototype,"accent",void 0),l([d({type:Number})],j.prototype,"activeCount",void 0),l([d({type:Number})],j.prototype,"totalCount",void 0),l([d()],j.prototype,"toggleOnLabel",void 0),l([d()],j.prototype,"toggleOffLabel",void 0),l([d({attribute:!1})],j.prototype,"items",void 0),j=l([p("dd-next-room-actions")],j);let S=class extends i{constructor(){super(...arguments),this.name="",this.icon="mdi:floor-plan",this.accent="var(--primary-color)",this.compact=!1}render(){return a`
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
    `}};S.styles=e`:host{display:block;min-width:0}.group{min-width:0;padding:14px;border:1px solid color-mix(in srgb,var(--primary-text-color) 7%,transparent);border-radius:12px;background:var(--card-background-color);box-shadow:0 5px 14px rgba(15,23,42,.035)}.header{min-height:30px;margin:0 0 12px;display:flex;align-items:center;justify-content:space-between;gap:8px}.title{min-width:0;flex:1 1 auto;display:flex;align-items:center;gap:8px;color:var(--primary-text-color);font-size:16px;font-weight:500;line-height:1.15;text-align:left}.title ha-icon{flex:0 0 auto;color:var(--primary-color);--mdc-icon-size:20px}.title span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.actions{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:flex-end}.content{min-width:0}@media (max-width:768px){.group{padding:10px}.header{margin-bottom:10px}.title{font-size:14px;font-weight:850}}`,l([d()],S.prototype,"name",void 0),l([d()],S.prototype,"icon",void 0),l([d()],S.prototype,"accent",void 0),l([d({type:Boolean,reflect:!0})],S.prototype,"compact",void 0),S=l([p("dd-next-room-group")],S);export{f as e,z as r};
