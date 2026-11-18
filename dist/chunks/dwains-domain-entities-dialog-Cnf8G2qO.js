import{_ as t,n as i,r as e,t as o}from"./state-Ch1yw9_s.js";import{p as n,P as a}from"./screensaver-media-YVqdCGtc.js";import{A as s,E as r,a as c,i as l,b as d}from"./lit-element-D6iXJla1.js";import{K as h,s as p,B as m,v as u,z as _,w as g,x as f,b as v,e as x,a as y,c as b,g as w,n as $,L as k,j as E}from"./legacy-area-groups-rMfA5XrZ.js";import{m as C}from"./memoize-one.esm-BAtLgO95.js";import{a as S,c as A,b as T}from"./localize-DHT7w7AP.js";import{f as I}from"./fire-event-DUg5qkMO.js";import{s as M}from"./confirm-dialog-EzByR4R3.js";import{f as D,a as L}from"./dwains-bottom-nav-BQJiTuoW.js";import"./dd-card-host-C87xsXhx.js";import"./dd-entity-tiles-Dadqfexg.js";import{g as z}from"./security-Dfb4DqXU.js";import{u as j,m as N}from"./dwains-dashboard-strategy-editor-D_DEtmKp.js";import{i as P,t as O,e as R}from"./directive-Cb03nv9c.js";import"./energy-prefs-qHpHfN0H.js";const U=t=>t??s,Y={open_cover:1,close_cover:2,stop_cover:8};function B(t){return"lock"===t||"unlock"===t||Object.prototype.hasOwnProperty.call(Y,t)}function H(t,i){const e=t?.attributes?.supported_features;return null==e?"stop_cover"!==i:0!==(Number(e)&Y[i])}class X{constructor(t){this.onChange=t,this.pending=new Map}isPending(t){return this.pending.has(t)}canSend(t,i){if(!t||!function(t,i){return!(!t||!j(t))&&("lock"===i||"unlock"===i?t.entity_id.startsWith("lock.")&&["locked","unlocked","open"].includes(t.state):t.entity_id.startsWith("cover.")&&H(t,i))}(t,i))return!1;const e=this.pending.get(t.entity_id);return!e||"stop_cover"===i&&!e.has(i)}async send(t,i,e){const o=[...new Set(e)].filter(e=>this.canSend(t.states[e],i));if(!o.length)return!1;for(const t of o){const e=this.pending.get(t)??new Set;e.add(i),this.pending.set(t,e)}this.onChange();try{const e="lock"===i||"unlock"===i?"lock":"cover";return await t.callService(e,i,{entity_id:o}),!0}finally{for(const t of o){const e=this.pending.get(t);e?.delete(i),e?.size||this.pending.delete(t)}this.onChange()}}}const F=Object.freeze(["light","switch","fan","input_boolean"]);const V={set:(t,i)=>window.setTimeout(t,i),clear:t=>window.clearTimeout(t)};class q{constructor(t,i=V,e=500,o=10){this._onHold=t,this._timers=i,this._holdMs=e,this._tolerancePx=o,this._held=!1}down(t,i,e){this.cancel(),this._held=!1,this._start={pointerId:t,x:i,y:e},this._timer=this._timers.set(()=>{this._timer=void 0,this._start=void 0,this._held=!0,this._onHold()},this._holdMs)}move(t,i,e){const o=this._start;o&&o.pointerId===t&&(Math.abs(i-o.x)>this._tolerancePx||Math.abs(e-o.y)>this._tolerancePx)&&this.cancel()}cancel(){void 0!==this._timer&&this._timers.clear(this._timer),this._timer=void 0,this._start=void 0}contextMenu(){return!this._held&&(this.cancel(),this._held=!0,!0)}consumeClick(){return!!this._held&&(this._held=!1,!0)}get pending(){return void 0!==this._timer}}function K(t,i){for(const e of t.composedPath()){if(e===i)return!1;const t=e.matches;if("function"==typeof t&&t.call(e,'button, select, input, textarea, a[href], [role="switch"], [role="slider"]'))return!0}return!1}const G=(t,i)=>{const e=t._$AN;if(void 0===e)return!1;for(const t of e)t._$AO?.(i,!1),G(t,i);return!0},W=t=>{let i,e;do{if(void 0===(i=t._$AM))break;e=i._$AN,e.delete(t),t=i}while(0===e?.size)},Q=t=>{for(let i;i=t._$AM;t=i){let e=i._$AN;if(void 0===e)i._$AN=e=new Set;else if(e.has(t))break;e.add(t),tt(i)}};function J(t){void 0!==this._$AN?(W(this),this._$AM=t,Q(this)):this._$AM=t}function Z(t,i=!1,e=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(i)if(Array.isArray(o))for(let t=e;t<o.length;t++)G(o[t],!1),W(o[t]);else null!=o&&(G(o,!1),W(o));else G(this,t)}const tt=t=>{t.type==O.CHILD&&(t._$AP??=Z,t._$AQ??=J)};class it extends P{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,e){super._$AT(t,i,e),Q(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(G(this,t),W(this))}setValue(t){if(h(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const et=R(class extends it{constructor(t){if(super(t),this._gesture=new q(()=>{I(window,"haptic","medium"),this._options?.hold?.()}),this._onClick=t=>{if(0!==t.detail)return this._gesture.consumeClick()?(t.preventDefault(),void t.stopPropagation()):void this._options?.tap();this._options?.tap()},this._onPointerDown=t=>{this._options?.hold&&this._element&&(t.isPrimary&&0===t.button&&!K(t,this._element)?this._gesture.down(t.pointerId,t.clientX,t.clientY):this._gesture.cancel())},this._onPointerMove=t=>{this._gesture.move(t.pointerId,t.clientX,t.clientY)},this._onPointerEnd=()=>{this._gesture.cancel()},this._onContextMenu=t=>{const i=this._options?.hold;i&&this._element&&!K(t,this._element)&&(t.preventDefault(),this._gesture.contextMenu()&&i())},t.type!==O.ELEMENT)throw new Error("tileTap can only be used on an element")}render(t){return r}update(t,[i]){return this._options=i,i.hold||this._gesture.cancel(),this._element!==t.element&&(this._element=t.element,this._listen(this._element)),r}disconnected(){this._gesture.cancel()}_listen(t){t.addEventListener("click",this._onClick),t.addEventListener("pointerdown",this._onPointerDown),t.addEventListener("pointermove",this._onPointerMove,{passive:!0}),t.addEventListener("pointerup",this._onPointerEnd),t.addEventListener("pointercancel",this._onPointerEnd),t.addEventListener("pointerleave",this._onPointerEnd),t.addEventListener("contextmenu",this._onContextMenu)}}),ot=new Set(["light","switch","fan","input_boolean"]);function nt(t){return"turn_off"===t||"close_cover"===t||"unlock"===t}const at="(max-width: 600px)",st="(prefers-reduced-motion: reduce)",rt="cubic-bezier(0.22, 1, 0.36, 1)";const ct=new Set(["INPUT","TEXTAREA","SELECT","HA-SLIDER","HA-CONTROL-SLIDER","HA-TEXTFIELD","HA-SELECT","HA-CHART-BASE","MWC-SLIDER","MD-SLIDER"]);function lt(t){return!!ct.has(t.tagName)||("slider"===t.getAttribute("role")||t instanceof HTMLElement&&t.isContentEditable)}function dt(t){if(t.scrollTop<=0||t.scrollHeight<=t.clientHeight)return!1;const i=getComputedStyle(t).overflowY;return"auto"===i||"scroll"===i}function ht(t){const i=t?.shadowRoot,e=i?.querySelector("wa-dialog")?.shadowRoot;return e?.querySelector('[part~="panel"]')||e?.querySelector("dialog")||i?.querySelector(".mdc-dialog__surface")||i?.querySelector('[part~="surface"]')}function pt(t){return"undefined"!=typeof window&&"function"==typeof window.matchMedia&&window.matchMedia(t).matches}class mt{constructor(t,i){this._host=t,this._options=i,this._phase="idle",this._startX=0,this._startY=0,this._offset=0,this._blocked=!1,this._contentScrolled=!1,this._panel=null,this._suppressClicksUntil=0,this._onTouchStart=t=>{if(1!==t.touches.length||!pt(at))return void this._cancel();const i=this._options.getPanel(),e=t.composedPath();if(!i||!e.includes(i))return;const o=t.touches[0];this._clearSettleTimer(),this._panel=i,this._phase="pending",this._startX=o.clientX,this._startY=o.clientY,this._offset=0,this._blocked=!1,this._contentScrolled=!1;for(const t of e){if(t===i)break;t instanceof Element&&(lt(t)&&(this._blocked=!0),dt(t)&&(this._contentScrolled=!0))}},this._onTouchMove=t=>{if("idle"===this._phase||!this._panel)return;const i=t.touches[0];if(!i||1!==t.touches.length)return void this._cancel();const e=i.clientX-this._startX,o=i.clientY-this._startY;if("pending"===this._phase){if(Math.abs(e)<=8&&Math.abs(o)<=8)return;if(!function({deltaX:t,deltaY:i,onControl:e,contentScrolled:o}){return!e&&!o&&i>8&&i>Math.abs(t)}({deltaX:e,deltaY:o,onControl:this._blocked,contentScrolled:this._contentScrolled}))return void(this._phase="idle");this._phase="dragging",this._startY=i.clientY,this._panel.style.transition="none",this._panel.style.willChange="transform"}this._offset=Math.max(0,i.clientY-this._startY),this._panel.style.transform=`translate3d(0, ${this._offset}px, 0)`,t.cancelable&&t.preventDefault()},this._onTouchEnd=()=>{if("dragging"!==this._phase||!this._panel)return void(this._phase="idle");const t=this._panel,i=t.getBoundingClientRect().height;this._phase="idle",this._suppressClicksUntil=Date.now()+400,!function(t,i){if(!(t>0))return!1;const e=i>0?i:Number.POSITIVE_INFINITY;return t>Math.min(120,.25*e)}(this._offset,i)?this._settle(t,"translate3d(0, 0, 0)",250,()=>this._resetPanel(t)):this._settle(t,`translate3d(0, ${Math.max(i,this._offset)}px, 0)`,180,()=>{this._options.onClose(),this._resetPanel(t)})},this._onTouchCancel=()=>{this._cancel()},this._onClickCapture=t=>{Date.now()>=this._suppressClicksUntil||(t.preventDefault(),t.stopPropagation())}}attach(){this._host.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this._host.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this._host.addEventListener("touchend",this._onTouchEnd),this._host.addEventListener("touchcancel",this._onTouchCancel),this._host.addEventListener("click",this._onClickCapture,!0)}detach(){this._host.removeEventListener("touchstart",this._onTouchStart),this._host.removeEventListener("touchmove",this._onTouchMove),this._host.removeEventListener("touchend",this._onTouchEnd),this._host.removeEventListener("touchcancel",this._onTouchCancel),this._host.removeEventListener("click",this._onClickCapture,!0),this._reset()}_settle(t,i,e,o){if(this._clearSettleTimer(),pt(st))return t.style.transform=i,void o();t.style.transition=`transform ${e}ms ${rt}`,t.style.transform=i,this._settleTimer=window.setTimeout(()=>{this._settleTimer=void 0,o()},e)}_cancel(){const t=this._panel,i="dragging"===this._phase;this._phase="idle",i&&t&&this._settle(t,"translate3d(0, 0, 0)",250,()=>this._resetPanel(t))}_resetPanel(t){t.style.removeProperty("transition"),t.style.removeProperty("transform"),t.style.removeProperty("will-change"),this._panel===t&&(this._panel=null)}_clearSettleTimer(){void 0!==this._settleTimer&&(window.clearTimeout(this._settleTimer),this._settleTimer=void 0)}_reset(){this._clearSettleTimer(),this._phase="idle",this._panel&&this._resetPanel(this._panel),this._panel=null}}const ut=c`:host{--ha-dialog-width-lg:1200px;--mdc-dialog-min-width:90vw;--mdc-dialog-max-width:1200px;--mdc-dialog-max-height:90vh;--mdc-dialog-z-index:10;--dialog-backdrop-opacity:0.4;-webkit-tap-highlight-color:transparent}ha-dialog{--mdc-dialog-heading-ink-color:var(--primary-text-color);--mdc-dialog-content-ink-color:var(--primary-text-color);--dialog-content-padding:0;--ha-dialog-scrim-backdrop-filter:brightness(72%) blur(2px);--mdc-dialog-scrim-color:rgba(0,0,0,0.28)}ha-dialog-header{--mdc-typography-headline6-font-size:20px;--mdc-typography-headline6-font-weight:500}.sheet-handle{display:none}.content{padding:16px 18px 22px !important;overflow:auto;overscroll-behavior:contain;max-height:calc(90vh - 120px);background:var(--primary-background-color)}.dialog-title{min-width:0;max-width:100%;display:inline-flex;align-items:center;gap:10px;vertical-align:middle}.dialog-title-icon{width:32px;height:32px;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;border-radius:10px;color:var(--dialog-accent,var(--primary-color));background:color-mix(in srgb,var(--dialog-accent,var(--primary-color)) 14%,transparent)}.dialog-title-icon ha-icon{--mdc-icon-size:18px}.dialog-title-text{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dialog-header-link{min-height:32px;margin-inline-end:8px;padding:0 8px 0 12px;border:0;border-radius:999px;display:inline-flex;align-items:center;gap:4px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent);font:inherit;font-size:12px;font-weight:800;white-space:nowrap;cursor:pointer;transition:background-color 0.18s ease}.dialog-header-link:hover{background:color-mix(in srgb,var(--primary-color) 18%,transparent)}.dialog-header-link:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}.dialog-header-link ha-icon{--mdc-icon-size:16px}.dialog-header-link .label-short{display:none}@media (max-width:420px){.dialog-header-link .label-long{display:none}.dialog-header-link .label-short{display:inline}}@media (pointer:coarse){.dialog-header-link{min-height:40px}}@media (max-width:600px){:host{--mdc-dialog-min-width:min(calc(100vw - 4px),480px);--mdc-dialog-max-width:min(calc(100vw - 4px),480px);--mdc-dialog-min-height:calc(100dvh - 54px);--mdc-dialog-max-height:calc(100dvh - 54px);--ha-dialog-min-height:calc(100dvh - 54px);--ha-dialog-max-height:calc(100dvh - 54px);--vertical-align-dialog:flex-end;--dialog-surface-margin-top:54px;--dialog-container-padding:0;--ha-dialog-scrim-backdrop-filter:brightness(66%) blur(2px);--mdc-dialog-scrim-color:rgba(0,0,0,0.34)}ha-dialog{margin:0 !important;border-radius:24px 24px 0 0 !important;--mdc-dialog-container-elevation:0 18px 50px rgba(15,23,42,0.28);--ha-dialog-border-radius:24px 24px 0 0;--ha-dialog-show-duration:1ms;--show-duration:1ms;--ha-dialog-hide-duration:160ms;--hide-duration:160ms}ha-dialog .mdc-dialog__surface{border-radius:24px 24px 0 0 !important;overflow:hidden}ha-dialog-header{position:relative;padding-top:22px}.sheet-handle{display:block;position:absolute;top:8px;left:50%;width:38px;height:4px;border-radius:999px;transform:translateX(-50%);background:color-mix(in srgb,var(--secondary-text-color) 24%,transparent)}.content{max-height:calc(100dvh - 148px);padding:12px 12px calc(84px + env(safe-area-inset-bottom,0px)) !important}.dialog-title-icon{width:28px;height:28px;border-radius:9px}}`,_t=c`.tile-surface{position:absolute;inset:0;z-index:2;border:0;border-radius:inherit;background:transparent;cursor:pointer}.tile-surface:focus-visible{outline:2px solid var(--primary-color);outline-offset:-3px}`,gt=c`.room-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:start}.room-card{--room-accent:var(--primary-color);min-width:0;padding:14px;border-radius:16px;background:var(--card-background-color);box-shadow:0 14px 34px rgba(15,23,42,0.06),inset 0 0 0 1px rgba(15,23,42,0.04)}.room-card.is-full{grid-column:1 / -1}.room-head{min-height:40px;margin-bottom:12px;display:flex;align-items:center;gap:10px}.room-icon{width:36px;height:36px;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;border-radius:11px;color:var(--room-accent);background:color-mix(in srgb,var(--room-accent) 13%,transparent)}.room-icon ha-icon{--mdc-icon-size:20px}.room-name{flex:1;min-width:0;margin:0;overflow:hidden;color:var(--primary-text-color);font-size:16px;font-weight:850;line-height:1.15;text-overflow:ellipsis;white-space:nowrap}.room-count{color:var(--secondary-text-color);font-size:13px;font-weight:750;font-variant-numeric:tabular-nums}.room-entities{display:grid;grid-template-columns:minmax(0,1fr);gap:10px}.room-card.is-full .room-entities{grid-template-columns:repeat(3,minmax(0,1fr))}.domain-entity-card:focus-visible,.domain-entity-action:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}.domain-entity-card.is-row{min-height:64px;padding:10px 12px;flex-direction:row;align-items:center;justify-content:flex-start;gap:12px;border-radius:14px;background:var(--primary-background-color);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 7%,transparent)}.domain-entity-card.is-row.is-active{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--entity-color) 24%,transparent)}.domain-entity-card.is-row .domain-entity-copy{flex:1}.domain-entity-card.is-row .domain-entity-name{font-size:14px;line-height:1.15}.domain-entity-card.is-row .domain-entity-status{margin-top:3px}.person-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:10px}@media (pointer:coarse){.domain-entity-card.is-row .domain-cover-action{width:34px;height:34px}.domain-entity-toggle,.domain-entity-more,.domain-lock-action{position:relative}.domain-entity-toggle::after,.domain-entity-more::after,.domain-lock-action::after{content:"";position:absolute;top:50%;left:50%;width:44px;height:44px;transform:translate(-50%,-50%)}}@media (min-width:601px) and (max-width:1000px){.room-card.is-full .room-entities{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:2000px){:host{--mdc-dialog-max-width:1280px}.room-card.is-full .room-entities{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:600px){.room-grid{grid-template-columns:minmax(0,1fr);gap:12px}.room-card{padding:12px;border-radius:14px}.room-card.is-full{grid-column:auto}.room-card .room-entities,.room-card.is-full .room-entities,.person-grid{grid-template-columns:minmax(0,1fr)}}@media (prefers-reduced-motion:reduce){.domain-entity-card,.domain-entity-action,.domain-entity-toggle::before{transition:none}}`,ft=c`.room-segment[aria-disabled="true"]{opacity:.45;cursor:default}.room-toggle{min-height:32px;padding:4px 5px 4px 10px;flex:0 0 auto;border:0;border-radius:999px;display:inline-flex;align-items:center;gap:8px;color:var(--secondary-text-color);background:color-mix(in srgb,var(--secondary-background-color) 80%,transparent);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.06);font:inherit;font-size:12px;font-weight:800;font-variant-numeric:tabular-nums;cursor:pointer;transition:color 0.18s ease}.room-toggle-track{position:relative;width:34px;height:20px;flex:0 0 auto;border-radius:999px;background:color-mix(in srgb,var(--primary-text-color) 18%,transparent);transition:background-color 0.18s ease}.room-toggle-track::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#ffffff;box-shadow:0 2px 6px rgba(15,23,42,0.2);transition:transform 0.18s ease}.room-toggle.is-on{color:var(--room-accent)}.room-toggle.is-on .room-toggle-track{background:var(--room-accent)}.room-toggle.is-on .room-toggle-track::after{transform:translateX(14px)}.room-segmented{padding:3px;flex:0 0 auto;display:inline-flex;gap:3px;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 80%,transparent);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.06)}.room-segment{width:34px;height:28px;padding:0;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:color-mix(in srgb,var(--primary-text-color) 58%,transparent);background:transparent;cursor:pointer;transition:background-color 0.18s ease,color 0.18s ease}.room-segment.is-current{color:#ffffff;background:var(--room-accent);box-shadow:0 6px 12px color-mix(in srgb,var(--room-accent) 22%,transparent)}.room-segment ha-icon{--mdc-icon-size:17px}.room-toggle:focus-visible,.room-segment:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}@media (pointer:coarse){.room-toggle{min-height:40px}.room-segment{width:40px;height:34px}}@media (prefers-reduced-motion:reduce){.room-toggle,.room-toggle-track,.room-toggle-track::after,.room-segment{transition:none}}`,vt="__people__";let xt=class extends l{constructor(){super(...arguments),this._deviceCommands=new X(()=>this.requestUpdate()),this._groupedEntities={},this._loading=!0,this._optimisticEntityStates={},this._entityCards=new Map,this._mobileSheetAnimated=!1,this._sheetDrag=new mt(this,{getPanel:()=>ht(this.renderRoot?.querySelector("ha-dialog")),onClose:()=>this.closeDialog()}),this._orderGroups=C((t,i,e)=>{const o=Object.entries(t).map(([t,i])=>({areaId:t,...i}));if(!i||o.length<2)return o;return function(t,i,e){const o=new Map(i.map((t,i)=>[t,i]));return[...t].sort((t,i)=>{const n=o.get(t.areaId)??Number.MAX_SAFE_INTEGER,a=o.get(i.areaId)??Number.MAX_SAFE_INTEGER;return n!==a?n-a:t.areaName.localeCompare(i.areaName,e)})}(o,p(i.areas||[],i.areas_display,e).map(t=>t.area_id),e)}),this._handleViewAll=()=>{const t=this._params?.onViewAll;t?function(t,i,e,o=window){const n=o.history.state,a=n?.dialog===t;if(i(),!a)return void e();let s=0,r=!1;const c=()=>{r||(r=!0,o.removeEventListener("popstate",l),o.clearTimeout(s),e())},l=()=>{o.removeEventListener("popstate",l),o.setTimeout(c,0)};o.addEventListener("popstate",l),s=o.setTimeout(c,1e3)}(this.localName,()=>this.closeDialog(),t):this.closeDialog()}}_t(t,i){return S(this.hass,t,i)}_tp(t,i){return A(this.hass,t,i)}async showDialog(t){this._params=t,this._loading=!0,this._mobileSheetAnimated=!1,await this._loadEntities()}closeDialog(){this._params=void 0,this._groupedEntities={},this._optimisticEntityStates={},this._entityCards.clear(),this._mobileSheetAnimated=!1,this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0),void 0!==this._optimisticCleanupTimer&&(window.clearTimeout(this._optimisticCleanupTimer),this._optimisticCleanupTimer=void 0),I(this,"dialog-closed",{dialog:this.localName})}updated(t){super.updated(t),t.has("hass")&&this.hass&&this._params&&!this._loading&&(this._reconcileOptimisticEntityStates(),this._updateEntityCards()),this._animateMobileSheetIn()}connectedCallback(){super.connectedCallback(),this._sheetDrag.attach()}disconnectedCallback(){super.disconnectedCallback(),this._sheetDrag.detach(),void 0!==this._optimisticCleanupTimer&&(window.clearTimeout(this._optimisticCleanupTimer),this._optimisticCleanupTimer=void 0)}_animateMobileSheetIn(){!this._mobileSheetAnimated&&this._params&&pt(at)&&!pt(st)&&requestAnimationFrame(()=>{var t;t=ht(this.renderRoot.querySelector("ha-dialog")),t?.animate&&(t.animate([{transform:"translate3d(0, 100%, 0)",opacity:.98},{transform:"translate3d(0, 0, 0)",opacity:1}],{duration:280,easing:rt,fill:"backwards"}),1)&&(this._mobileSheetAnimated=!0)})}async _loadEntities(){if(!this._params||!this.hass)return;const{domain:t,areaId:i,config:e,filterByUnitOfMeasurement:o,deviceClass:a,entityIds:s,entityAreas:r}=this._params,c={},l=m(e),d=u(e),h=z(this.hass),p="person"===t,v=s?.length?s.map(t=>this.hass.states[t]).filter(t=>Boolean(t)):[...n(this.hass.states,t)],x=[],y=new Set;v.forEach(n=>{const s=n.entity_id;if(y.has(s))return;if(y.add(s),s.split(".")[0]!==t)return;if(!_(h[s]))return;if(p)return void x.push({entity_id:s,hidden:!1});if("unavailable"===n.state)return;const c=d.get(s),l=r?.[s],m=l||g(this.hass,e,s,c);if(m&&(!i||m===i)&&(l||f(this.hass,e,s,m,c))){if(o){if(n.attributes?.unit_of_measurement!==o)return}else if("binary_sensor"===t&&a){const t=n.attributes?.device_class;if(t!==a)return}x.push({entity_id:s,area_id:m,hidden:!1})}}),p?x.length&&(c[vt]={areaName:this._t("home.people"),entities:x}):x.forEach(t=>{const i=t.area_id,e=l.get(i);e&&(c[i]||(c[i]={areaName:e.name,entities:[]}),c[i].entities.push(t))}),this._groupedEntities=c,this._loading=!1,this._updateInterval||(this._updateInterval=window.setInterval(()=>{this._checkForEntityChanges()},1e3))}_checkForEntityChanges(){if(!this._params||!this.hass||this._loading)return;const{domain:t,filterByUnitOfMeasurement:i,deviceClass:e}=this._params;let o=!1;Object.entries(this._groupedEntities).forEach(([n,a])=>{a.entities.forEach(n=>{const a=this.hass.states[n.entity_id];if(!a)return void(o=!0);this._shouldEntityBeVisible(a,t,i,e)||(o=!0)})}),o&&this._loadEntities()}_shouldEntityBeVisible(t,i,e,o){return"person"===i||"unavailable"!==t.state&&(e?t.attributes?.unit_of_measurement===e:"binary_sensor"!==i||!o||t.attributes?.device_class===o)}_updateEntityCards(){this._entityCards.forEach((t,i)=>{t&&"hass"in t&&(t.hass=this.hass)})}render(){if(!this._params)return s;const{domain:t,filterByUnitOfMeasurement:i,deviceClass:e,customTitle:o}=this._params;let n=o||this._getLocalizedDomainTitle(t);if("W"===i)n=this._t("dialog.power_sensors");else if(e){n={motion:this._t("dialog.motion_sensors"),door:this._t("dialog.door_sensors"),window:this._t("dialog.window_sensors"),smoke:this._t("dialog.smoke_sensors"),gas:this._t("dialog.gas_sensors"),moisture:this._t("dialog.moisture_sensors"),occupancy:this._t("dialog.occupancy_sensors"),opening:this._t("dialog.opening_sensors"),presence:this._t("dialog.presence_sensors"),safety:this._t("dialog.safety_sensors"),tamper:this._t("dialog.tamper_sensors"),vibration:this._t("dialog.vibration_sensors")}[e]||this._getLocalizedDomainTitle(t)}const r=!0===this._params.homeInformation;return d`
      <ha-dialog
        open
        width="large"
        @closed=${this.closeDialog}
        @cancel=${()=>this.closeDialog()}
        .heading=${n}
        .type=${""}
        flexContent
        hideActions
      >
        <ha-dialog-header slot="header">
          <div class="sheet-handle" aria-hidden="true"></div>
          <ha-icon-button
            slot="navigationIcon"
            .label=${this._t("common.close")}
            .path=${a}
            @click=${()=>this.closeDialog()}
          ></ha-icon-button>
          ${r?d`
            <span slot="title" class="dialog-title" style=${`--dialog-accent: ${this._headerColor()};`}>
              <span class="dialog-title-icon" aria-hidden="true">
                <ha-icon icon=${this._headerIcon()}></ha-icon>
              </span>
              <span class="dialog-title-text">${n}</span>
            </span>
          `:d`<span slot="title">${n}</span>`}
          ${r&&this._params.onViewAll?d`
            <button
              slot="actionItems"
              class="dialog-header-link"
              type="button"
              aria-label=${this._params.viewAllLabel||this._t("navigation.open_devices")}
              @click=${this._handleViewAll}
            >
              <span class="label-long">${this._params.viewAllLabel||this._t("navigation.open_devices")}</span>
              <span class="label-short">${this._t("devices.title")}</span>
              <ha-icon icon="mdi:chevron-right" aria-hidden="true"></ha-icon>
            </button>
          `:s}
        </ha-dialog-header>

        <div class="content ${r?"home-information":""}">
          ${this._loading?d`<div class="loading">${this._t("common.loading")}</div>`:this._renderContent()}
        </div>
      </ha-dialog>
    `}_headerIcon(){const t=this._params;if(!t)return"mdi:information-outline";const[i,e]=(t.deviceViewKey||"").split("."),o=i||t.domain,n=e||t.deviceClass;return"person"===o?"mdi:account-group":"sensor"!==o||n?n?v(o,n):x(o):"mdi:home-thermometer-outline"}_headerColor(){const t=this._params;if(!t)return y("");const[i,e]=(t.deviceViewKey||"").split(".");return this._entityColor(i||t.domain,e||t.deviceClass)}_renderContent(){if(this._params?.customEntities)return this._renderCustomEntities();const t=this._allDialogEntities();return 0===t.length?d`
        <div class="empty-state">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <div class="empty-state-text">
            ${this._t("dialog.active_empty")}
          </div>
        </div>
      `:this._params?.homeInformation?this._renderHomeInformation(t):d`
      ${this._renderViewAllAction()}
      ${this._renderDomainActions(t)}
      ${b(this._orderedGroups(),t=>t.areaId,t=>this._renderAreaSection(t.areaId,t))}
    `}_orderedGroups(){return this._orderGroups(this._groupedEntities,this._params?.config,T(this.hass))}_renderHomeInformation(t){return"person"===this._params?.domain?d`
        <div class="person-grid">
          ${b(t,t=>t.entity_id,t=>this._renderPersonTile(t.entity_id))}
        </div>
      `:d`
      ${this._renderDomainActions(t)}
      <div class="room-grid">
        ${b(this._orderedGroups(),t=>t.areaId,t=>this._renderRoomCard(t))}
      </div>
    `}_renderPersonTile(t){const i=this.hass.states[t];if(!i)return s;const e=function(t){const i=String(t??"").toLowerCase();return i&&"unknown"!==i&&"unavailable"!==i?"home"===i?"home":"not_home"===i?"away":"zone":"unknown"}(i.state),o=i.attributes?.friendly_name||z(this.hass)[t]?.name||t.split(".")[1]||t,n="unknown"===e?this._t("person.no_location"):"home"===e?this._t("person.home"):"away"===e?this._t("person.away"):D(this.hass,i);return d`
      <dwains-dashboard-next-person-tile
        .name=${o}
        .stateLabel=${n}
        .picture=${i.attributes?.entity_picture||""}
        .icon=${z(this.hass)[t]?.icon||i.attributes?.icon||x("person")}
        .presence=${e}
        @click=${()=>this._showMoreInfo(t)}
      ></dwains-dashboard-next-person-tile>
    `}_renderRoomCard(t){const i=this._params?.domain||"",e=m(this._params?.config).get(t.areaId),o=this._entityColor(i,this._params?.deviceClass),n=`room-${t.areaId}`,a="sensor"===i;return d`
      <section
        class="room-card ${s=t.entities.length,s<=2?"is-compact":"is-full"}"
        style=${`--room-accent: ${o};`}
        aria-labelledby=${n}
      >
        <header class="room-head">
          <span class="room-icon" aria-hidden="true">
            <ha-icon icon=${e?w(e):"mdi:home"}></ha-icon>
          </span>
          <h3 class="room-name" id=${n}>${t.areaName}</h3>
          ${this._renderRoomAction(t,i)}
        </header>
        <div class="room-entities">
          ${b(t.entities,t=>t.entity_id,t=>this._renderEntityCard(t,a?this._sensorMeta(t.entity_id):"","row"))}
        </div>
      </section>
    `;var s}_sensorMeta(t){const i=this.hass.states[t]?.attributes?.device_class;return i?$(this.hass,i):""}_renderRoomAction(t,i){const e=t.entities.map(t=>t.entity_id).filter(t=>j(this.hass.states[t])),o=function(t,i){let e=0;for(const o of t)i(o)&&e++;return e}(e,t=>{const e=this._getEffectiveEntityState(this.hass.states[t]);return this._isEntityActiveForUi(e,i)}),n=function(t,i,e){if(!(e<=0)){if(ot.has(t)){if(e<=1)return;const t=i>0;return{mode:"toggle",action:t?"turn_off":"turn_on",checked:t,activeCount:i,totalCount:e}}return"cover"===t?{mode:"segmented",items:[{action:"open_cover",labelKey:"action.open_all",icon:"mdi:arrow-up",current:i>0},{action:"close_cover",labelKey:"action.close_all",icon:"mdi:arrow-down",current:0===i}]}:"lock"===t?{mode:"segmented",items:[{action:"lock",labelKey:"action.lock_all",icon:"mdi:lock-outline",current:0===i},{action:"unlock",labelKey:"action.unlock_all",icon:"mdi:lock-open-variant-outline",current:i>0}]}:void 0}}(i,o,e.length);if(!n)return d`<span class="room-count">${t.entities.length}</span>`;if("toggle"===n.mode){const i=this._t("turn_off"===n.action?"action.turn_off_all":"action.turn_on_all");return d`
        <button
          class="room-toggle ${n.checked?"is-on":""}"
          type="button"
          role="switch"
          aria-checked=${n.checked?"true":"false"}
          aria-label=${`${t.areaName}: ${this._t("area_header.on_count",{active:n.activeCount,total:n.totalCount})}`}
          title=${i}
          @click=${()=>this._runRoomAction(t,e,n.action,i)}
        >
          <span aria-hidden="true">${n.activeCount}/${n.totalCount}</span>
          <span class="room-toggle-track" aria-hidden="true"></span>
        </button>
      `}return d`
      <div class="room-segmented" role="group" aria-label=${t.areaName}>
        ${n.items.map(i=>{const o=this._t(i.labelKey),n=this._eligibleActionIds(e,i.action);return d`
            <button
              class="room-segment ${i.current?"is-current":""}"
              type="button"
              title=${o}
              aria-label=${this._t("action.entity_action",{action:o,name:t.areaName})}
              aria-disabled=${n.length?s:"true"}
              @click=${()=>this._runRoomAction(t,n,i.action,o)}
            >
              <ha-icon icon=${i.icon} aria-hidden="true"></ha-icon>
            </button>
          `})}
      </div>
    `}async _runRoomAction(t,i,e,o){if(!i.length)return;const n=this._params?.domain||"";if(function(t,i){return"unlock"===t||i}(e,N(this._params?.config?.settings,n))){if(!await M(this,{hass:this.hass,title:o,message:this._t("action.confirm_master_action",{count:i.length,area:t.areaName}),confirmLabel:o,destructive:nt(e),container:this.renderRoot.querySelector("ha-dialog")||void 0}))return}await this._executeBulkAction(i,e)}_renderViewAllAction(){return this._params?.onViewAll?d`
      <div class="domain-actions">
        <button
          class="dialog-view-all"
          type="button"
          @click=${this._handleViewAll}
        >
          <span>${this._params.viewAllLabel||this._t("common.view_all")}</span>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    `:s}_renderCustomEntities(){const{customEntities:t,customDescription:i}=this._params;return t&&0!==t.length?d`
      ${i?d`
        <div class="custom-description">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <p>${i}</p>
        </div>
      `:s}

      <div class="entity-section">
        <div class="entities-grid">
          ${b(t,t=>t,t=>this._renderEntityCard({entity_id:t,hidden:!1}))}
        </div>
      </div>
    `:d`
        <div class="empty-state">
          <ha-icon icon="mdi:check-circle-outline"></ha-icon>
          <div class="empty-state-text">
            ${this._t("dialog.problem_empty")}
          </div>
        </div>
      `}_allDialogEntities(){return Object.values(this._groupedEntities).flatMap(t=>t.entities)}_renderDomainActions(t){const i=this._params?.domain||"",e=t.map(t=>t.entity_id).filter(t=>this.hass.states[t]);if(!e.length)return s;const o=this._entityColor(i),n=(t,i,n)=>{const a=this._eligibleActionIds(e,n);return d`
      <button
        class="domain-action-button"
        type="button"
        style=${`--domain-color: ${o};`}
        aria-disabled=${a.length?s:"true"}
        @click=${()=>this._runBulkDomainAction(a,n,t)}
      >
        <ha-icon icon=${i}></ha-icon>
        <span>${t}</span>
      </button>
    `};return["light","switch","fan","input_boolean"].includes(i)?d`
        <div class="domain-actions">
          ${n(this._t("action.turn_on_all"),"mdi:power","turn_on")}
          ${n(this._t("action.turn_off_all"),"mdi:power-off","turn_off")}
        </div>
      `:"cover"===i?d`
        <div class="domain-actions">
          ${n(this._t("action.open_all"),"mdi:arrow-up","open_cover")}
          ${n(this._t("action.close_all"),"mdi:arrow-down","close_cover")}
        </div>
      `:"lock"===i?d`
        <div class="domain-actions">
          ${n(this._t("action.unlock_all"),"mdi:lock-open-variant-outline","unlock")}
          ${n(this._t("action.lock_all"),"mdi:lock-outline","lock")}
        </div>
      `:s}_renderAreaSection(t,i){const e=t===vt?"mdi:account-group":m(this._params?.config).get(t)?.icon||"";return d`
      <div class="area-section">
        <div class="area-header">
          ${e?d`
            <div class="area-icon">
              <ha-icon icon="${e}"></ha-icon>
            </div>
          `:s}
          <div class="area-name">${i.areaName}</div>
          <div class="entity-count">${i.entities.length}</div>
        </div>
        <div class="entities-grid">
          ${b(i.entities,t=>t.entity_id,t=>this._renderEntityCard(t,i.areaName))}
        </div>
      </div>
    `}_renderEntityCard(t,i,e="tile"){const o=this.hass.states[t.entity_id];if(!o)return s;const n=this._getEffectiveEntityState(o),a=t.entity_id.split(".")[0]||"unknown";if("todo"===a)return d`
        <div class="domain-todo-list-card" data-entity=${t.entity_id}>
          <dwains-dashboard-next-card-host
            eager
            .hass=${this.hass}
            .config=${{type:"todo-list",entity:t.entity_id}}
          ></dwains-dashboard-next-card-host>
        </div>
      `;const r=n.attributes?.device_class,c=z(this.hass)[t.entity_id]?.icon||n.attributes?.icon||v(a,r)||x(a),l=n.attributes?.friendly_name||z(this.hass)[t.entity_id]?.name||t.entity_id,h=this._entityAreaName(t),p=k(l,h,this._params?.config?.settings),m=this._isEntityActiveForUi(n,a),u=this._isUnavailable(n),_=!u&&(g=this._params?.config?.settings,f=t.entity_id,"toggle"===function(t){return"toggle"===t?.tile_tap_action?"toggle":"more-info"}(g)&&F.includes(f.split(".")[0]||""));var g,f;const y=this._tileTapOptions(t.entity_id,_),b=this._entityStatusText(n,a),w=this._deviceCommands.isPending(t.entity_id)?`${b} · ${this._t("common.loading")}`:b,$="row"===e?p:l,E=this._t("action.entity_action",{action:this._t("action.more_info"),name:$}),C=d`
      <button
        class="tile-surface"
        type="button"
        role=${U(_?"switch":void 0)}
        aria-checked=${U(_?String(m):void 0)}
        aria-label=${_?$:E}
        aria-description=${w}
        ${et(y)}
      ></button>
    `,S=_?d`
      <button
        class="domain-entity-action domain-entity-more"
        type="button"
        title=${E}
        aria-label=${E}
        @click=${()=>this._showMoreInfo(t.entity_id)}
      ><ha-icon icon="mdi:information-outline"></ha-icon></button>
    `:this._renderEntityActions(n,a,m),A=["domain-entity-card",`domain-entity-${a}`,"row"===e?"is-row":"",m?"is-active":"is-off",u?"is-unavailable":"",_?"tap-toggles":""].join(" ");return"row"===e?d`
        <article
          class=${A}
          style=${`--entity-color: ${this._entityColor(a,r)};`}
        >
          ${C}
          <div class="domain-entity-icon" aria-hidden="true">
            <ha-icon icon=${c}></ha-icon>
          </div>
          <div class="domain-entity-copy" aria-hidden="true">
            ${i?d`<div class="domain-entity-meta">${i}</div>`:s}
            <div class="domain-entity-name">${p}</div>
            <div class="domain-entity-status">${w}</div>
          </div>
          ${S}
        </article>
      `:d`
      <article
        class=${A}
        style=${`--entity-color: ${this._entityColor(a,r)};`}
      >
        ${C}
        <div class="domain-entity-top">
          <div class="domain-entity-icon" aria-hidden="true">
            <ha-icon icon=${c}></ha-icon>
          </div>
          ${S}
        </div>
        <div class="domain-entity-copy" aria-hidden="true">
          <div class="domain-entity-meta">${i||h||this._t("dialog.no_area")}</div>
          <div class="domain-entity-name">${p}</div>
          <div class="domain-entity-status">${w}</div>
        </div>
      </article>
    `}_renderEntityActions(t,i,e){const o=this._entityActionKind(i),n=this._isUnavailable(t),a=this._entityDisplayName(t),r=t=>this._t("action.entity_action",{action:t,name:a});if("toggle"===o)return d`
        <button
          class="domain-entity-action domain-entity-toggle"
          type="button"
          role="switch"
          aria-checked=${e?"true":"false"}
          title=${e?this._t("action.turn_off"):this._t("action.turn_on")}
          aria-label=${a}
          ?disabled=${n}
          @click=${e=>this._handleEntityToggle(e,t,i)}
        ></button>
      `;if("cover"===o)return this._renderCoverActions(t);if("lock"===o){const i=["unlocked","open"].includes(t.state),e="locked"===t.state?"unlock":"lock",o=this._t(`action.${e}`);return d`
        <button
          class="domain-entity-action domain-lock-action ${i?"is-unlocked":""}"
          type="button"
          title=${o}
          aria-label=${r(o)}
          ?disabled=${n}
          aria-disabled=${this._deviceCommands.canSend(t,e)?s:"true"}
          @click=${()=>{this._sendDeviceCommand(t.entity_id,e)}}
        >
          <ha-icon icon=${i?"mdi:lock-open-variant-outline":"mdi:lock-outline"}></ha-icon>
        </button>
      `}return d`
      <span class="domain-entity-action domain-entity-more" aria-hidden="true">
        <ha-icon icon="mdi:chevron-right"></ha-icon>
      </span>
    `}_renderCoverActions(t){const i=String(t?.state||"").toLowerCase(),e=this._isUnavailable(t),o=H(t,"open_cover"),n=H(t,"close_cover"),a=H(t,"stop_cover"),r=this._entityDisplayName(t),c=t=>this._t("action.entity_action",{action:t,name:r});return d`
      <div class="domain-cover-actions" @click=${t=>t.stopPropagation()}>
        ${o?d`
          <button
            class="domain-entity-action domain-cover-action ${"opening"===i?"active":""}"
            type="button"
            title=${this._t("action.open")}
            aria-label=${c(this._t("action.open"))}
            ?disabled=${e}
            aria-disabled=${this._deviceCommands.canSend(t,"open_cover")?s:"true"}
            @click=${()=>{this._sendDeviceCommand(t.entity_id,"open_cover")}}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
        `:s}
        ${a?d`
          <button
            class="domain-entity-action domain-cover-action ${"opening"===i||"closing"===i?"active":""}"
            type="button"
            title=${this._t("action.stop")}
            aria-label=${c(this._t("action.stop"))}
            ?disabled=${e}
            aria-disabled=${this._deviceCommands.canSend(t,"stop_cover")?s:"true"}
            @click=${()=>{this._sendDeviceCommand(t.entity_id,"stop_cover")}}
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>
        `:s}
        ${n?d`
          <button
            class="domain-entity-action domain-cover-action ${"closing"===i?"active":""}"
            type="button"
            title=${this._t("action.close")}
            aria-label=${c(this._t("action.close"))}
            ?disabled=${e}
            aria-disabled=${this._deviceCommands.canSend(t,"close_cover")?s:"true"}
            @click=${()=>{this._sendDeviceCommand(t.entity_id,"close_cover")}}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
        `:s}
      </div>
    `}async _runBulkDomainAction(t,i,e){const o=t.length;if(!o)return;await M(this,{hass:this.hass,title:this._t("action.confirm_bulk",{action:e,entities:this._tp("common.entity",o)}),confirmLabel:e,destructive:nt(i),container:this.renderRoot.querySelector("ha-dialog")||void 0})&&await this._executeBulkAction(t,i)}_eligibleActionIds(t,i){return t.filter(t=>{const e=this.hass.states[t];return B(i)?this._deviceCommands.canSend(e,i):j(e)})}async _executeBulkAction(t,i){if(!(t=this._eligibleActionIds(t,i)).length)return;const e=this._params?.domain||"",o="turn_on"===i?"on":"turn_off"===i?"off":void 0;o&&this._setOptimisticEntityStates(t,o);try{if(ot.has(e))return void await this.hass.callService(e,i,{entity_id:t});B(i)&&await this._deviceCommands.send(this.hass,i,t)&&this._showToast(this._t("action.command_sent"))}catch(n){o&&this._clearOptimisticEntityStates(t),console.warn(`Failed to run ${i} for ${e}:`,n),this._showToast(this._t("entity.group_failed"))}}_tileTapOptions(t,i){const e=()=>this._showMoreInfo(t);return i?{tap:()=>{this._tapToggleEntity(t)},hold:e}:{tap:e}}async _tapToggleEntity(t){const i=this.hass?.states[t];if(!i)return;const e=this._getEffectiveEntityState(i);this._isUnavailable(e)?this._showMoreInfo(t):await this._toggleEntity(e,t.split(".")[0]||"")}async _handleEntityToggle(t,i,e){t.stopPropagation(),await this._toggleEntity(i,e)}async _toggleEntity(t,i){const e=t?.entity_id;if(e){try{if(["light","switch","fan","input_boolean"].includes(i)){const o=!this._isEntityActiveForUi(t,i);return this._setOptimisticEntityStates([e],o?"on":"off"),void await this.hass.callService(i,o?"turn_on":"turn_off",{entity_id:e})}}catch(t){return this._clearOptimisticEntityStates([e]),console.warn(`Failed to toggle entity ${e}:`,t),void this._showToast(this._t("entity.update_failed"))}this._showMoreInfo(e)}}async _sendDeviceCommand(t,i){try{await this._deviceCommands.send(this.hass,i,[t])&&this._showToast(this._t("action.command_sent"))}catch(e){console.warn(`Failed to run ${i} for ${t}:`,e),this._showToast(this._t(t.startsWith("lock.")?"entity.lock_failed":"entity.cover_failed"))}}_entityDisplayName(t){const i=String(t?.entity_id||"");return t?.attributes?.friendly_name||z(this.hass)[i]?.name||i}_showToast(t){I(this,"hass-notification",{message:t})}_showMoreInfo(t){const i=document.querySelector("home-assistant");I(i||window,"hass-more-info",{entityId:t})}_entityActionKind(t){return["light","switch","fan","input_boolean"].includes(t)?"toggle":"cover"===t?"cover":"lock"===t?"lock":"more"}_entityStatusText(t,i){if(!t)return"";const e=this._getEffectiveEntityState(t),o=D(this.hass,e);if("light"===i&&"on"===e.state&&"number"==typeof e.attributes?.brightness)return this._t("entity.brightness",{value:Math.round(e.attributes.brightness/255*100)});if("cover"===i&&"number"==typeof e.attributes?.current_position)return`${o} · ${L(e.attributes.current_position,"%")}`;if("climate"===i){const t=e.attributes?.current_temperature,i=e.attributes?.temperature,o=this.hass?.config?.unit_system?.temperature||"°C";if(void 0!==t&&void 0!==i)return`${L(t,o)} · ${this._t("entity.climate_set",{value:L(i,o)})}`;if(void 0!==t)return L(t,o)}return"media_player"===i&&e.attributes?.media_title?`${o} · ${e.attributes.media_title}`:o}_getEffectiveEntityState(t){const i=t?.entity_id;if(!i)return t;const e=this._optimisticEntityStates[i];if(!e||e.expiresAt<=Date.now())return t;const o=String(t?.state||"").toLowerCase();return"unavailable"===o||"unknown"===o||o===e.state.toLowerCase()?t:{...t,state:e.state}}_setOptimisticEntityStates(t,i){const e=[...new Set(t.filter(Boolean))];if(!e.length)return;const o=Date.now()+5e3,n={...this._optimisticEntityStates};e.forEach(t=>{n[t]={state:i,expiresAt:o}}),this._optimisticEntityStates=n,this._scheduleOptimisticCleanup()}_clearOptimisticEntityStates(t){const i=[...new Set(t.filter(Boolean))];if(!i.length)return;const e={...this._optimisticEntityStates};let o=!1;i.forEach(t=>{e[t]&&(delete e[t],o=!0)}),o&&(this._optimisticEntityStates=e)}_reconcileOptimisticEntityStates(){const t=Object.entries(this._optimisticEntityStates);if(!t.length)return;const i=Date.now(),e={...this._optimisticEntityStates};let o=!1;t.forEach(([t,n])=>{const a=this.hass?.states?.[t]?.state;(!a||n.expiresAt<=i||String(a).toLowerCase()===n.state.toLowerCase())&&(delete e[t],o=!0)}),o&&(this._optimisticEntityStates=e)}_scheduleOptimisticCleanup(){if(void 0!==this._optimisticCleanupTimer)return;const t=Object.values(this._optimisticEntityStates).map(t=>t.expiresAt);if(!t.length)return;const i=Math.min(...t);if(!Number.isFinite(i))return;const e=Math.max(80,i-Date.now()+50);this._optimisticCleanupTimer=window.setTimeout(()=>{this._optimisticCleanupTimer=void 0,this._reconcileOptimisticEntityStates(),Object.keys(this._optimisticEntityStates).length&&this._scheduleOptimisticCleanup()},e)}_isUnavailable(t){return["unavailable","unknown"].includes(String(t?.state||"").toLowerCase())}_isEntityActiveForUi(t,i){if(!t||this._isUnavailable(t))return!1;const e=String(t.state).toLowerCase();if("cover"===i)return["open","opening"].includes(e);if("lock"===i)return"unlocked"===e;if("climate"===i){const i=t.attributes?.hvac_action;return i&&"idle"!==i&&"off"!==i}return"media_player"===i?["playing","buffering"].includes(e):"vacuum"===i?["cleaning","returning"].includes(e):"alarm_control_panel"===i?e.startsWith("armed")||["arming","pending","triggered"].includes(e):"camera"!==i&&!["off","closed","locked","not_home","idle"].includes(e)}_entityColor(t,i){return y(t,i)}_entityAreaName(t){const i=this._params?.config,e=t.area_id||g(this.hass,i,t.entity_id);return e?m(i).get(e)?.name:void 0}_getLocalizedDomainTitle(t){return E(this.hass,t)}};xt.styles=[ut,_t,c`.area-section{margin-bottom:18px;background:color-mix(in srgb,var(--card-background-color) 98%,#ffffff);border-radius:16px;overflow:hidden;box-shadow:0 14px 34px rgba(15,23,42,0.06),inset 0 0 0 1px rgba(15,23,42,0.04)}.area-header{display:flex;align-items:center;gap:12px;padding:14px 16px 0;background:transparent;border-bottom:0}.area-header:has(.area-icon){gap:12px}.area-header:not(:has(.area-icon)){gap:0}.area-icon{width:34px;height:34px;border-radius:999px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);display:flex;align-items:center;justify-content:center}.area-icon ha-icon{--mdc-icon-size:19px}.area-name{font-size:18px;font-weight:850;flex:1}.entity-count{color:var(--secondary-text-color);font-size:13px;font-weight:750}.entities-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(164px,1fr));gap:12px;padding:16px}.domain-todo-list-card{grid-column:1 / -1;min-width:0}.domain-todo-list-card dwains-dashboard-next-card-host{display:block;width:100%}.domain-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:0 0 16px}.domain-action-button{min-height:40px;padding:0 14px;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:8px;color:var(--primary-text-color);background:var(--card-background-color);font:inherit;font-size:13px;font-weight:800;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,0.07),inset 0 0 0 1px rgba(15,23,42,0.05);transition:transform 0.18s ease,box-shadow 0.18s ease}.domain-action-button:hover{transform:translateY(-1px);box-shadow:0 14px 26px rgba(15,23,42,0.1),inset 0 0 0 1px rgba(15,23,42,0.07)}.domain-action-button:active{transform:scale(0.97)}.domain-action-button ha-icon{--mdc-icon-size:18px;color:var(--domain-color,var(--primary-color))}.dialog-view-all{min-height:40px;padding:0 14px;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:8px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent);font:inherit;font-size:13px;font-weight:850;cursor:pointer;transition:transform 0.18s ease,background 0.18s ease}.dialog-view-all:hover{background:color-mix(in srgb,var(--primary-color) 18%,transparent);transform:translateY(-1px)}.dialog-view-all:active{transform:scale(0.97)}.dialog-view-all ha-icon{--mdc-icon-size:18px}.domain-entity-card{--entity-color:var(--primary-color);position:relative;box-sizing:border-box;min-width:0;min-height:132px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;border:0;border-radius:12px;background:color-mix(in srgb,var(--card-background-color) 98%,#ffffff);color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;box-shadow:0 12px 26px rgba(15,23,42,0.06),inset 0 0 0 1px rgba(15,23,42,0.035);transition:transform 0.18s ease,box-shadow 0.18s ease}.domain-entity-card.tap-toggles{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.domain-entity-card:active{transform:scale(0.985)}.domain-entity-card.is-active{box-shadow:0 14px 30px rgba(15,23,42,0.08),inset 0 0 0 1px color-mix(in srgb,var(--entity-color) 18%,transparent)}.domain-entity-card.is-unavailable{opacity:0.62}.domain-entity-top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}.domain-entity-icon{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:11px;color:var(--entity-color);background:color-mix(in srgb,var(--entity-color) 13%,transparent)}.domain-entity-icon ha-icon{--mdc-icon-size:20px}.domain-entity-action{padding:0;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border:0;cursor:pointer;transition:background-color 0.18s ease,color 0.18s ease,transform 0.18s ease,opacity 0.18s ease}.domain-entity-action:active{transform:scale(0.94)}button.domain-entity-action,.domain-cover-actions{position:relative;z-index:3}.domain-entity-action:disabled,.domain-entity-action[aria-disabled="true"],.domain-action-button[aria-disabled="true"]{opacity:0.36;cursor:not-allowed}.domain-entity-toggle{width:38px;height:22px;justify-content:flex-start;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 80%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.07),0 4px 10px rgba(15,23,42,0.08)}.domain-entity-toggle::before{content:"";width:18px;height:18px;margin-left:2px;border-radius:999px;background:#ffffff;box-shadow:0 2px 7px rgba(15,23,42,0.2);transition:transform 0.18s ease}.domain-entity-card.is-active .domain-entity-toggle{background:var(--entity-color)}.domain-entity-card.is-active .domain-entity-toggle::before{transform:translateX(16px)}.domain-entity-more,.domain-lock-action{width:30px;height:30px;border-radius:999px;color:color-mix(in srgb,var(--primary-text-color) 52%,transparent);background:color-mix(in srgb,var(--secondary-background-color) 70%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.05)}.domain-lock-action.is-unlocked{color:#ffffff;background:var(--entity-color);box-shadow:0 8px 16px color-mix(in srgb,var(--entity-color) 24%,transparent)}.domain-entity-more ha-icon,.domain-lock-action ha-icon{--mdc-icon-size:17px}.domain-cover-actions{min-height:32px;padding:3px;display:inline-flex;align-items:center;gap:3px;flex:0 0 auto;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 74%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.055),0 6px 14px rgba(15,23,42,0.08)}.domain-cover-action{width:26px;height:26px;border-radius:999px;color:color-mix(in srgb,var(--primary-text-color) 58%,transparent);background:transparent}.domain-cover-action.active{color:#ffffff;background:var(--entity-color);box-shadow:0 6px 12px color-mix(in srgb,var(--entity-color) 22%,transparent)}.domain-cover-action ha-icon{--mdc-icon-size:16px}.domain-entity-copy{min-width:0}.domain-entity-meta{margin-bottom:3px;color:color-mix(in srgb,var(--secondary-text-color) 78%,transparent);font-size:11px;font-weight:800;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.domain-entity-name{color:var(--primary-text-color);font-size:15px;font-weight:850;line-height:1.05;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.domain-entity-status{margin-top:5px;color:color-mix(in srgb,var(--secondary-text-color) 84%,transparent);font-size:12px;font-weight:760;line-height:1.15;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.loading{display:flex;align-items:center;justify-content:center;height:200px;font-size:16px;opacity:0.6}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;text-align:center}.empty-state ha-icon{--mdc-icon-size:64px;opacity:0.3;margin-bottom:16px}.empty-state-text{font-size:16px;opacity:0.6}.custom-description{display:flex;align-items:flex-start;gap:12px;background:var(--warning-color);color:white;padding:16px;border-radius:8px;margin-bottom:24px}.custom-description ha-icon{--mdc-icon-size:20px;margin-top:2px;flex-shrink:0}.custom-description p{margin:0;line-height:1.5;font-size:14px}@media (max-width:600px){.area-section{margin-bottom:16px;border-radius:14px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding:12px}.domain-entity-card{min-height:126px}}`,gt,ft],t([i({attribute:!1})],xt.prototype,"hass",void 0),t([e()],xt.prototype,"_params",void 0),t([e()],xt.prototype,"_groupedEntities",void 0),t([e()],xt.prototype,"_loading",void 0),t([e()],xt.prototype,"_optimisticEntityStates",void 0),xt=t([o("dwains-dashboard-next-domain-entities-dialog")],xt);export{xt as DwainsDomainEntitiesDialog};
