import{_ as e,n as t,r as a,t as i}from"./state-DfsJqMnn.js";import{E as o,a as r,i as n,b as s,A as c}from"./lit-element-Bpv9xYb0.js";import{e as d}from"./class-map-hwO7ThXs.js";import{n as l,s as p,j as m,e as h,d as g,o as b,g as x,b as u,a as f,A as v,p as w,q as y,k as _,r as k,f as z,c as S}from"./power-usage-CkRKDDN1.js";import{e as $,i as C,t as A}from"./blueprints-Dh4Un1Bn.js";import{a as E,f as D,n as M,e as j,i as T}from"./dwains-bottom-nav-poD_0JWv.js";import{g as P,d as I,b as H,a as q,r as R}from"./index-DuqGz60N.js";import{i as N,g as L,a as F,c as O,b as W,d as U,n as V,e as G,f as Y,h as K,r as B,j as X,H as Q,s as J,k as Z,m as ee,l as te,o as ae,p as ie,q as oe,t as re,u as ne}from"./dwains-dashboard-strategy-editor-D6l1OVfe.js";import{Q as se,R as ce,S as de,T as le,U as pe,V as me,X as he,y as ge}from"./screensaver-media-CIck-tES.js";import{f as be}from"./fire-event-DQiSssdY.js";import"./dd-card-host-Cb-91pfn.js";const xe="important",ue=" !"+xe,fe=$(class extends C{constructor(e){if(super(e),e.type!==A.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const i=e[a];return null==i?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:a}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?a.removeProperty(e):a[e]=null);for(const e in t){const i=t[e];if(null!=i){this.ft.add(e);const t="string"==typeof i&&i.endsWith(ue);e.includes("-")||t?a.setProperty(e,t?i.slice(0,-11):i,t?xe:""):a[e]=i}}return o}});var ve=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function we(e,t){return e===t||!(!ve(e)||!ve(t))}function ye(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(!we(e[a],t[a]))return!1;return!0}const _e=new Map,ke=(e,t,a,i)=>!!i?.areas_options?.[a]?.groups_options?.[t]?.hidden&&i.areas_options[a].groups_options[t].hidden.includes(e),ze=(e,t,a,i)=>{const o=((e,t,a,i)=>{const o=_e.get(e.area_id);if(!o)return;const r=t.areas?.[e.area_id];if(o.area!==e||o.areaEntities!==a||o.areaRegistry!==r||o.formatEntityState!==t.formatEntityState||o.registry!==P(t)||o.areasOptions!==i?.areas_options||o.temperatureState!==(r?.temperature_entity_id?t.states[r.temperature_entity_id]:void 0)||o.humidityState!==(r?.humidity_entity_id?t.states[r.humidity_entity_id]:void 0))return;if(o.checkedStates===t.states)return o.data;const n=o.entityStates;if(n.length===a.length){for(let e=0;e<a.length;e++)if(n[e]!==t.states[a[e].entity_id])return;return o.checkedStates=t.states,o.data}})(e,t,a,i);if(o)return o;let r,n,s,c;const d=t.areas[e.area_id],l=d?.temperature_entity_id,p=d?.humidity_entity_id;if(l){const e=t.states[l];e&&"unavailable"!==e.state&&"unknown"!==e.state&&(r=E(t,e))}if(p){const e=t.states[p];e&&"unavailable"!==e.state&&"unknown"!==e.state&&(n=E(t,e))}let m=0,h=!1;a.forEach(a=>{const o=t.states[a.entity_id];if(!o)return;const r=Se(a.entity_id);if(!ke(a.entity_id,r,e.area_id,i)&&a.entity_id.startsWith("sensor.")&&"W"===o.attributes.unit_of_measurement&&"unavailable"!==o.state&&"unknown"!==o.state){const e=parseFloat(o.state);isNaN(e)||(m+=e,h=!0)}}),h&&(s=m>=1e3?D((m/1e3).toFixed(1),"kW"):D(Math.round(m),"W"));let g=0,b=!1;a.forEach(a=>{const o=t.states[a.entity_id];if(!o)return;const r=Se(a.entity_id);if(!ke(a.entity_id,r,e.area_id,i)&&a.entity_id.startsWith("sensor.")&&"kWh"===o.attributes.unit_of_measurement&&"unavailable"!==o.state&&"unknown"!==o.state){const e=parseFloat(o.state);isNaN(e)||(g+=e,b=!0)}}),b&&(c=g>=1e3?D((g/1e3).toFixed(1),"MWh"):D(g.toFixed(1),"kWh"));const x=[],u={light:{total:0,on:0},switch:{total:0,on:0},fan:{total:0,on:0},cover:{total:0,on:0},climate:{total:0,on:0},media_player:{total:0,on:0},lock:{total:0,on:0},motion:{total:0,on:0}};a.forEach(a=>{const o=t.states[a.entity_id];if(!o)return;const r=Se(a.entity_id);if(!ke(a.entity_id,r,e.area_id,i)){if(r in u){const e=u[r];if(!e)return;e.total++;const t="off"!==o.state&&"unavailable"!==o.state&&"unknown"!==o.state&&"closed"!==o.state&&"locked"!==o.state;"climate"===r?o.attributes.hvac_action&&"idle"!==o.attributes.hvac_action&&"off"!==o.attributes.hvac_action?e.on++:o.attributes.hvac_action||"off"===o.state||e.on++:t&&e.on++}if(a.entity_id.startsWith("binary_sensor.")&&"motion"===o.attributes.device_class){const e=u.motion;e&&(e.total++,"on"===o.state&&e.on++)}if(a.entity_id.startsWith("binary_sensor.")&&"on"===o.state&&o.attributes.device_class){["door","window","moisture","smoke"].includes(o.attributes.device_class)&&x.push({entity_id:a.entity_id,deviceClass:o.attributes.device_class})}}});const f={area_id:e.area_id,name:e.name,icon:e.icon||void 0,picture:e.picture||void 0,temperature:r,humidity:n,wattage:s,totalEnergy:c,alerts:x,domains:u};return _e.set(e.area_id,{area:e,areaEntities:a,entityStates:a.map(e=>t.states[e.entity_id]),areaRegistry:d,temperatureState:l?t.states[l]:void 0,humidityState:p?t.states[p]:void 0,formatEntityState:t.formatEntityState,registry:P(t),areasOptions:i?.areas_options,checkedStates:t.states,data:f}),f},Se=e=>{const[t]=e.split(".");return t||"unknown"},$e={min:7,max:35},Ce={min:45,max:95},Ae=new Set(["unavailable","unknown"]),Ee=1e-9;function De(e){if(null==e||""===e||"boolean"==typeof e)return;const t="number"==typeof e?e:Number(e);return Number.isFinite(t)?t:void 0}function Me(e){return/f$/i.test(String(e||"").trim())}function je(e,t){const a=De(e?.target_temp_step);return void 0!==a&&a>0?a:Me(t)?1:.5}function Te(e){if(!Number.isFinite(e)||e<=0)return 1;for(let t=0;t<3;t++){const a=e*10**t;if(Math.abs(a-Math.round(a))<Ee*10**t)return t}return 3}function Pe(e,t,a){return t<=a?Math.min(a,Math.max(t,e)):e}function Ie(e,t,a){const{step:i,min:o,max:r}=a;if(!(i>0))return Pe(e,o,r);const n=e/i,s=t>0?Math.floor(n+Ee):Math.ceil(n-Ee);return Pe(Number(((s+t)*i).toFixed(Te(i))),o,r)}function He(e,t,a){return Ie(e,t,a)!==e}function qe(e,t){if(!e||Ae.has(String(e.state)))return;const a=e.attributes||{},i=Me(t)?Ce:$e;let o=De(a.min_temp)??i.min,r=De(a.max_temp)??i.max;o>r&&([o,r]=[r,o]);const n=De(a.temperature),s=De(a.target_temp_low),c=De(a.target_temp_high),d=void 0!==s&&void 0!==c;let l="none";return"off"!==e.state&&(!d||"heat_cool"!==e.state&&void 0!==n?void 0!==n&&(l="single"):l="range"),{mode:l,current:De(a.current_temperature),target:n,targetLow:s,targetHigh:c,min:o,max:r,step:je(a,t),unit:t}}const Re=new Map;function Ne(e,t,a){const i=`${a||""}|${t}`;let o=Re.get(i);if(!o){try{o=new Intl.NumberFormat(a||void 0,{minimumFractionDigits:t,maximumFractionDigits:t})}catch{o=new Intl.NumberFormat(void 0,{minimumFractionDigits:t,maximumFractionDigits:t})}Re.set(i,o)}return o.format(e)}const Le=new Map,Fe={heat:"mdi:fire",cool:"mdi:snowflake",dry:"mdi:water-percent",fan:"mdi:fan",auto:"mdi:thermostat-auto",idle:"mdi:thermostat",off:"mdi:power"};let Oe=class extends n{constructor(){super(...arguments),this.entityId="",this.roomName="",this._openMoreInfo=()=>{this.entityId&&be(this,"hass-more-info",{entityId:this.entityId})},this._handleThermostatKeydown=e=>{e.target===e.currentTarget&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._openMoreInfo()))}}_t(e,t){return I(this.hass,e,t)}disconnectedCallback(){super.disconnectedCallback(),this._flushCommit(),this._clearConfirmTimer()}willUpdate(e){super.willUpdate(e),e.has("entityId")&&this._pendingEntityId&&this._pendingEntityId!==this.entityId&&this._flushCommit(),e.has("hass")&&this._clearPendingWhenConfirmed()}_unit(){return String(this.hass?.config?.unit_system?.temperature||"°C")}_stateObj(){return this.entityId?this.hass?.states?.[this.entityId]:void 0}_displayTarget(e){return void 0!==this._pendingTarget&&this._pendingEntityId===this.entityId?this._pendingTarget:e.target}_formatValue(e,t,a){return`${Ne(e,t,H(this.hass))} ${a}`}_activityLabel(e){try{return e.attributes?.hvac_action?this.hass?.formatEntityAttributeValue?.(e,"hvac_action")||String(e.attributes.hvac_action):this.hass?.formatEntityState?.(e)||e.state}catch{return String(e.attributes?.hvac_action||e.state)}}_adjust(e){const t=qe(this._stateObj(),this._unit());if("single"!==t?.mode)return;const a=this._displayTarget(t);if(void 0===a)return;const i=Ie(a,e,t);i!==a&&(this._pendingTarget=i,this._pendingEntityId=this.entityId,this._clearConfirmTimer(),void 0!==this._commitTimer&&window.clearTimeout(this._commitTimer),this._commitTimer=window.setTimeout(()=>{this._commitTimer=void 0,this._commit()},800))}_flushCommit(){void 0!==this._commitTimer&&(window.clearTimeout(this._commitTimer),this._commitTimer=void 0,this._commit())}async _commit(){const e=this._pendingEntityId,t=this._pendingTarget,a=this.hass;if(e&&void 0!==t&&a){try{await a.callService("climate","set_temperature",{entity_id:e,temperature:t})}catch(a){return console.warn(`Failed to set the temperature of ${e}:`,a),this._isLatestPending(e,t)&&this._clearPending(),void be(this,"hass-notification",{message:this._t("thermostat.update_failed",{name:this.roomName||e})})}this._isLatestPending(e,t)&&(this._clearPendingWhenConfirmed(),void 0!==this._pendingTarget&&(this._clearConfirmTimer(),this._confirmTimer=window.setTimeout(()=>{this._confirmTimer=void 0,this._isLatestPending(e,t)&&this._clearPending()},8e3)))}}_isLatestPending(e,t){return void 0===this._commitTimer&&this._pendingEntityId===e&&this._pendingTarget===t}_clearPendingWhenConfirmed(){if(void 0===this._pendingTarget||void 0!==this._commitTimer||!this._pendingEntityId)return;const e=Number(this.hass?.states?.[this._pendingEntityId]?.attributes?.temperature);Number.isFinite(e)&&Math.abs(e-this._pendingTarget)<1e-6&&this._clearPending()}_clearPending(){this._pendingTarget=void 0,this._pendingEntityId=void 0,this._clearConfirmTimer()}_clearConfirmTimer(){void 0!==this._confirmTimer&&(window.clearTimeout(this._confirmTimer),this._confirmTimer=void 0)}_handleStepClick(e,t){e.stopPropagation(),this._adjust(t)}_preferredActiveMode(e){const t=Le.get(this.entityId),a=Array.isArray(e.attributes?.hvac_modes)?e.attributes.hvac_modes.map(e=>String(e)):[];return t&&a.includes(t)?t:["heat_cool","auto","heat","cool","dry","fan_only"].find(e=>a.includes(e))}async _togglePower(e){e.stopPropagation();const t=this._stateObj(),a=this.hass;if(!t||!a||!this.entityId)return;const i=String(t.state||"").toLowerCase(),o="off"===i;!o&&i&&Le.set(this.entityId,i);try{return void await a.callService("climate",o?"turn_on":"turn_off",{entity_id:this.entityId})}catch{}try{const e=o?this._preferredActiveMode(t):"off";if(!e)throw new Error("No supported active HVAC mode");await a.callService("climate","set_hvac_mode",{entity_id:this.entityId,hvac_mode:e})}catch(e){console.warn(`Failed to toggle ${this.entityId}:`,e),be(this,"hass-notification",{message:this._t("thermostat.update_failed",{name:this.roomName||this.entityId})})}}_icon(e){return s`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d=${e}></path></svg>`}render(){const e=this._stateObj(),t=qe(e,this._unit());if(!e||!t)return c;const a=this.roomName||e.attributes?.friendly_name||this.entityId,i=function(e){const t=String(e?.attributes?.hvac_action??"").toLowerCase(),a=String(e?.state??"").toLowerCase();switch(t||a){case"heating":case"preheating":case"defrosting":case"heat":return"heat";case"cooling":case"cool":return"cool";case"drying":case"dry":return"dry";case"fan":case"fan_only":return"fan";case"heat_cool":case"auto":return"auto";case"off":return"off";default:return"idle"}}(e),o=this._activityLabel(e),r=Te(t.step),n=this._displayTarget(t),d=this._t("thermostat.details",{name:a,state:o}),l="off"===i&&void 0!==t.current;return s`
      <div
        class="thermostat activity-${i}"
        role="button"
        tabindex="0"
        title=${d}
        aria-label=${d}
        @click=${this._openMoreInfo}
        @keydown=${this._handleThermostatKeydown}
      >
        <button
          class="type-icon"
          type="button"
          title=${"off"===i?this._t("action.turn_on"):this._t("action.turn_off")}
          aria-label=${"off"===i?this._t("action.turn_on"):this._t("action.turn_off")}
          @click=${this._togglePower}
        >
          <ha-icon icon=${Fe[i]}></ha-icon>
        </button>

        ${l?s`
          <div class="target off-current" aria-label=${`${this._t("thermostat.current")}: ${this._formatValue(t.current,r,t.unit)}`}>
            <span class="copy current-copy">
              <span class="label">${this._t("thermostat.current")}</span>
              <span class="value">${this._formatValue(t.current,r,t.unit)}</span>
            </span>
          </div>
        `:"single"===t.mode&&void 0!==n?s`
          <div class="target" role="group" aria-label=${this._t("thermostat.target_label",{name:a})}>
            <span class="copy target-copy">
              <span class="label">${this._t("thermostat.target")}</span>
              <span class="value" aria-live="polite">${this._formatValue(n,r,t.unit)}</span>
            </span>
            <button
              class="step"
              type="button"
              title=${this._t("thermostat.lower",{name:a})}
              aria-label=${this._t("thermostat.lower",{name:a})}
              ?disabled=${!He(n,-1,t)}
              @click=${e=>this._handleStepClick(e,-1)}
            >
              ${this._icon(se)}
            </button>
            <button
              class="step"
              type="button"
              title=${this._t("thermostat.raise",{name:a})}
              aria-label=${this._t("thermostat.raise",{name:a})}
              ?disabled=${!He(n,1,t)}
              @click=${e=>this._handleStepClick(e,1)}
            >
              ${this._icon(ce)}
            </button>
          </div>
        `:"range"===t.mode&&void 0!==t.targetLow&&void 0!==t.targetHigh?s`
          <div class="target-range">
            <span class="copy">
              <span class="label">${this._t("thermostat.target")}</span>
              <span class="value">
                ${Ne(t.targetLow,r,H(this.hass))}
                -
                ${this._formatValue(t.targetHigh,r,t.unit)}
              </span>
            </span>
          </div>
        `:c}
      </div>
    `}};Oe.styles=r`:host{display:block;min-width:0;-webkit-tap-highlight-color:transparent}.thermostat{--thermostat-color:var(--secondary-text-color,#6b7280);--tile-text:var(--ph-text,var(--primary-text-color));--tile-muted:var(--ph-muted,var(--secondary-text-color));box-sizing:border-box;min-height:52px;padding:6px;display:inline-flex;align-items:center;gap:5px;width:max-content;max-width:100%;min-width:0;border-radius:14px;background:var(--ph-control,color-mix(in srgb,var(--primary-text-color) 6%,transparent));color:var(--tile-text);backdrop-filter:blur(16px) saturate(1.3);-webkit-backdrop-filter:blur(16px) saturate(1.3);cursor:pointer;transition:background-color 0.18s ease,transform 0.12s ease}.thermostat:hover{background:var(--ph-control-hover,color-mix(in srgb,var(--primary-text-color) 11%,transparent))}.thermostat:active{transform:scale(0.98)}.thermostat:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}.thermostat.activity-heat{--thermostat-color:var(--state-climate-heat-color,#ff8100)}.thermostat.activity-cool{--thermostat-color:var(--state-climate-cool-color,#2b9af9)}.thermostat.activity-dry{--thermostat-color:var(--state-climate-dry-color,#efbd07)}.thermostat.activity-fan{--thermostat-color:var(--state-climate-fan_only-color,#00bcd4)}.thermostat.activity-auto{--thermostat-color:var(--state-climate-auto-color,#008000)}button{margin:0;padding:0;border:0;background:none;color:inherit;font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}button:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}svg{width:18px;height:18px;flex:0 0 auto;fill:currentColor}.type-icon{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:11px;background:color-mix(in srgb,var(--thermostat-color) 16%,transparent);color:color-mix(in srgb,var(--thermostat-color) 82%,var(--tile-text))}.type-icon ha-icon{--mdc-icon-size:22px}.thermostat.activity-heat .type-icon,.thermostat.activity-cool .type-icon,.thermostat.activity-dry .type-icon,.thermostat.activity-fan .type-icon,.thermostat.activity-auto .type-icon,.thermostat.activity-idle .type-icon{background:var(--thermostat-color);color:#ffffff;box-shadow:0 6px 14px color-mix(in srgb,var(--thermostat-color) 26%,transparent)}.target-range{min-height:40px;padding:0 8px;display:inline-flex;align-items:center;border-radius:11px;transition:background-color 0.18s ease}.segment-icon{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:11px;background:color-mix(in srgb,var(--thermostat-color) 16%,transparent);color:color-mix(in srgb,var(--thermostat-color) 78%,var(--tile-text))}.segment-icon svg{width:20px;height:20px}.copy{min-width:0;display:flex;flex-direction:column;gap:1px;line-height:1.1}.label{color:var(--tile-muted);font-size:12px;font-weight:500;white-space:nowrap}.value{font-size:14px;font-weight:650;font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.target{display:inline-flex;align-items:center;gap:4px;flex:0 0 auto;padding:0 2px 0 4px;border-radius:11px}.target-copy,.current-copy{min-width:58px;align-items:flex-start;text-align:left}.off-current{padding-right:10px}.current-copy{min-width:58px}.step{width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:10px;background:color-mix(in srgb,var(--tile-text) 8%,transparent);color:var(--tile-text);transition:background-color 0.18s ease,transform 0.12s ease,opacity 0.18s ease}.step:hover:not(:disabled){background:color-mix(in srgb,var(--tile-text) 13%,transparent)}.step:active:not(:disabled){transform:scale(0.94)}.step:disabled{opacity:0.4;cursor:default}@media (pointer:coarse){.step{width:36px;height:36px}}@media (max-width:380px){.type-icon{display:none}}@media (prefers-reduced-motion:reduce){.thermostat,.target-range,.step{transition:none}}`,e([t({attribute:!1})],Oe.prototype,"hass",void 0),e([t({attribute:!1})],Oe.prototype,"entityId",void 0),e([t({attribute:!1})],Oe.prototype,"roomName",void 0),e([a()],Oe.prototype,"_pendingTarget",void 0),Oe=e([i("dwains-dashboard-next-area-thermostat")],Oe);const We=new Set(["video","movie","tvshow","episode","channel"]);let Ue=class extends n{constructor(){super(...arguments),this.players=[],this.floating=!1}_t(e,t){return I(this.hass,e,t)}disconnectedCallback(){super.disconnectedCallback(),this._clearOptimisticTimer()}willUpdate(e){if(super.willUpdate(e),e.has("hass")&&this._optimistic){const e=this.hass?.states?.[this._optimistic.entityId]?.state,t=this._optimistic.state;(("playing"===t?N(e):e===t)||this._optimistic.expiresAt<=Date.now())&&this._clearOptimistic()}}_currentPlayer(){const e=this.players||[];return e.find(e=>e.entityId===this._pinnedEntityId)||e[0]}_shownState(e){const t=this._optimistic;return t&&t.entityId===e.entity_id&&t.expiresAt>Date.now()?t.state:e.state}_playerName(e){return e.attributes?.friendly_name||P(this.hass)[e.entity_id]?.name||e.entity_id}_openMoreInfo(e){be(this,"hass-more-info",{entityId:e})}_cycle(){const e=this.players||[];if(e.length<2)return;const t=this._currentPlayer(),a=e.findIndex(e=>e.entityId===t?.entityId);this._pinnedEntityId=e[(a+1)%e.length].entityId}async _togglePlayback(e,t){const a=e.entity_id,i=N(this._shownState(e))?"paused":"playing";this._pinnedEntityId=a,this._optimistic={entityId:a,state:i,expiresAt:Date.now()+5e3},this._scheduleOptimisticExpiry();try{await this.hass.callService("media_player","media_play_pause",{entity_id:a})}catch(e){console.warn(`Failed to play or pause ${a}:`,e),this._optimistic?.entityId===a&&this._clearOptimistic(),this._showFailure(t)}}async _nextTrack(e,t){const a=e.entity_id;this._pinnedEntityId=a;try{await this.hass.callService("media_player","media_next_track",{entity_id:a})}catch(e){console.warn(`Failed to skip to the next track on ${a}:`,e),this._showFailure(t)}}_showFailure(e){be(this,"hass-notification",{message:this._t("now_playing.update_failed",{name:e})})}_scheduleOptimisticExpiry(){this._clearOptimisticTimer(),this._optimisticTimer=window.setTimeout(()=>{this._optimisticTimer=void 0,this._optimistic=void 0},5050)}_clearOptimistic(){this._optimistic=void 0,this._clearOptimisticTimer()}_clearOptimisticTimer(){void 0!==this._optimisticTimer&&(window.clearTimeout(this._optimisticTimer),this._optimisticTimer=void 0)}_icon(e){return s`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d=${e}></path></svg>`}render(){const e=this._currentPlayer(),t=e?this.hass?.states?.[e.entityId]:void 0;if(!e||!t)return c;const a=this._playerName(t),{title:i,artist:o}=L(t,a),r=[o,e.roomName||(i!==a?a:"")].filter(Boolean).join(" · "),n=e.roomName||a,d=this._shownState(t),l=N(d),p=F(t,this.hass?.hassUrl?.bind(this.hass)),m=p&&p!==this._brokenArtwork,h=String(t.attributes?.media_content_type||""),g=(this.players?.length||0)-1;return s`
      <div class="bar ${l?"is-playing":"is-paused"}" role="region" aria-label=${this._t("now_playing.title")}>
        <button
          class="info"
          type="button"
          title=${this._t("now_playing.details",{name:n})}
          aria-label=${`${i}${r?`, ${r}`:""}. ${this._t("now_playing.details",{name:n})}`}
          @click=${()=>this._openMoreInfo(t.entity_id)}
        >
          <span class="art">
            ${m?s`
              <img
                src=${p}
                alt=""
                decoding="async"
                referrerpolicy="no-referrer"
                @error=${()=>{this._brokenArtwork=p}}
              />
            `:this._icon(We.has(h)?de:le)}
          </span>
          <span class="text">
            <span class="title">${i}</span>
            ${r?s`<span class="subtitle">${r}</span>`:c}
          </span>
        </button>
        <div class="controls">
          ${g>0?s`
            <button
              class="more"
              type="button"
              title=${this._t("now_playing.more_players",{count:g})}
              aria-label=${this._t("now_playing.more_players",{count:g})}
              @click=${this._cycle}
            >+${g}</button>
          `:c}
          ${O(t,d)?s`
            <button
              class="control primary"
              type="button"
              title=${this._t(l?"now_playing.pause":"now_playing.play",{name:n})}
              aria-label=${this._t(l?"now_playing.pause":"now_playing.play",{name:n})}
              @click=${()=>this._togglePlayback(t,n)}
            >
              ${this._icon(l?pe:me)}
            </button>
          `:c}
          ${W(t)?s`
            <button
              class="control"
              type="button"
              title=${this._t("now_playing.next",{name:n})}
              aria-label=${this._t("now_playing.next",{name:n})}
              @click=${()=>this._nextTrack(t,n)}
            >
              ${this._icon(he)}
            </button>
          `:c}
        </div>
      </div>
    `}};Ue.styles=r`:host{display:block;min-width:0;-webkit-tap-highlight-color:transparent}.bar{box-sizing:border-box;min-height:60px;padding:6px 8px 6px 6px;display:flex;align-items:center;gap:8px;border-radius:14px;background:var(--card-background-color,#fff);color:var(--primary-text-color);border:1px solid color-mix(in srgb,var(--divider-color,rgba(0,0,0,0.12)) 70%,transparent);box-shadow:0 10px 26px rgba(15,23,42,0.07)}:host([floating]) .bar{border-radius:18px;background:color-mix(in srgb,var(--card-background-color,#fff) 90%,transparent);box-shadow:0 18px 40px rgba(15,23,42,0.18),inset 0 1px 0 color-mix(in srgb,#ffffff 40%,transparent);backdrop-filter:blur(22px) saturate(160%);-webkit-backdrop-filter:blur(22px) saturate(160%)}button{margin:0;padding:0;border:0;background:none;color:inherit;font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}button:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}svg{width:22px;height:22px;fill:currentColor}.info{min-width:0;min-height:46px;flex:1 1 auto;display:flex;align-items:center;gap:10px;padding-right:4px;border-radius:10px;text-align:left}.art{width:46px;height:46px;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;border-radius:10px;background:color-mix(in srgb,var(--primary-color) 14%,var(--card-background-color,#fff));color:var(--primary-color)}.art img{width:100%;height:100%;object-fit:cover;display:block}.is-paused .art{opacity:0.72}.text{min-width:0;display:flex;flex-direction:column;gap:2px}.title,.subtitle{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.title{font-size:14px;font-weight:700;line-height:1.2}.subtitle{color:var(--secondary-text-color);font-size:12px;font-weight:500;line-height:1.2}.controls{flex:0 0 auto;display:flex;align-items:center;gap:4px}.control{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:background-color 0.18s ease,transform 0.12s ease}.control:hover{background:color-mix(in srgb,var(--primary-text-color) 8%,transparent)}.control.primary{background:var(--primary-color);color:var(--text-primary-color,#fff)}.control.primary:hover{background:color-mix(in srgb,var(--primary-color) 88%,#000)}.control:active{transform:scale(0.94)}.more{min-width:40px;height:32px;padding:0 10px;border-radius:999px;background:color-mix(in srgb,var(--primary-text-color) 8%,transparent);color:var(--primary-text-color);font-size:12px;font-weight:800;font-variant-numeric:tabular-nums}@media (pointer:coarse){.more{height:40px}}@media (prefers-reduced-motion:reduce){.control{transition:none}}`,e([t({attribute:!1})],Ue.prototype,"hass",void 0),e([t({attribute:!1})],Ue.prototype,"players",void 0),e([t({type:Boolean,reflect:!0})],Ue.prototype,"floating",void 0),e([a()],Ue.prototype,"_pinnedEntityId",void 0),e([a()],Ue.prototype,"_optimistic",void 0),e([a()],Ue.prototype,"_brokenArtwork",void 0),Ue=e([i("dwains-dashboard-next-now-playing")],Ue);const Ve=r`.dd-page-header,.dd-room-compact{--ph-surface:var(--ha-card-background,var(--card-background-color,#ffffff));--ph-text:var(--primary-text-color,#1c1f24);--ph-muted:color-mix(in srgb,var(--ph-text) 66%,transparent);--ph-control:color-mix(in srgb,var(--ph-text) 6%,transparent);--ph-control-hover:color-mix(in srgb,var(--ph-text) 11%,transparent);--ph-accent:var(--domain-color,var(--primary-color,#03a9f4));--ph-warning:var(--warning-color,#ff9800);--ph-pad-x:20px;--ph-pad-y:18px}.dd-page-header{position:relative;isolation:isolate;box-sizing:border-box;display:flex;flex-direction:column;gap:16px;margin:0 0 20px;padding:var(--ph-pad-y) var(--ph-pad-x);border:1px solid color-mix(in srgb,var(--divider-color,rgba(0,0,0,0.12)) 75%,transparent);border-radius:18px;background:var(--ph-surface);color:var(--ph-text);box-shadow:0 1px 2px rgba(15,23,42,0.04),0 12px 32px rgba(15,23,42,0.06)}:host([data-theme-dark]) .dd-page-header{box-shadow:0 1px 2px rgba(0,0,0,0.28),0 12px 32px rgba(0,0,0,0.24)}.dd-page-header-top{position:relative;z-index:1;display:flex;align-items:center;gap:14px;min-width:0}.dd-page-header-identity{flex:1 1 auto;min-width:0;display:flex;align-items:center;gap:14px}.dd-page-header-icon{width:48px;height:48px;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;border-radius:14px;background:color-mix(in srgb,var(--ph-accent) 14%,var(--ph-surface));color:var(--ph-accent)}.dd-page-header-icon ha-icon{--mdc-icon-size:26px}.dd-page-header-copy{min-width:0}.dd-page-header-title{margin:0;color:inherit;font-size:clamp(22px,1.1vw + 14px,30px);font-weight:800;line-height:1.12;letter-spacing:-0.012em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dd-page-header-subtitle{margin-top:4px;display:flex;flex-wrap:wrap;align-items:center;gap:2px 14px;color:var(--ph-muted);font-size:14px;font-weight:500;line-height:1.35}.dd-visually-hidden{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;white-space:nowrap !important;border:0 !important}.dd-page-header-reading{display:inline-flex;align-items:center;gap:3px;color:var(--ph-text);font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap;line-height:1}.dd-page-header-reading ha-icon{--mdc-icon-size:17px;width:17px;height:17px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 17px;color:var(--reading-color);vertical-align:middle}.dd-page-header-reading.temperature{--reading-color:#34a6d8}.dd-page-header-reading.humidity{--reading-color:#16a6b6}.dd-page-header-reading.wattage{--reading-color:#d88e20}.dd-page-header-actions{flex:0 0 auto;display:inline-flex;align-items:center;gap:8px;min-width:0}.dd-page-header-button{position:relative;box-sizing:border-box;width:40px;height:40px;padding:0;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;background:var(--ph-control);color:var(--ph-text);font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;user-select:none;-webkit-user-select:none;transition:background-color 0.18s ease,color 0.18s ease,transform 0.12s ease}.dd-page-header-button:hover{background:var(--ph-control-hover)}.dd-page-header-button:active{transform:scale(0.94)}.dd-page-header-button ha-icon,.dd-page-header-button .dd-static-icon{--mdc-icon-size:22px;width:22px;height:22px}.dd-page-header-button.is-active,.dd-page-header-button.is-active:hover{background:var(--primary-color);color:var(--text-primary-color,#ffffff)}.dd-page-header-button.is-warning{background:color-mix(in srgb,var(--ph-warning) 16%,transparent);color:color-mix(in srgb,var(--ph-warning) 78%,var(--ph-text))}.dd-page-header-button.is-warning:hover{background:color-mix(in srgb,var(--ph-warning) 24%,transparent)}.dd-page-header-badge{position:absolute;top:-4px;right:-4px;box-sizing:border-box;min-width:19px;height:19px;padding:0 5px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:var(--ph-warning);color:#241600;font-size:11px;font-weight:750;line-height:1;font-variant-numeric:tabular-nums;box-shadow:0 0 0 2px var(--ph-surface)}.dd-page-header-button:focus-visible,.dd-room-tile:focus-visible,.dd-room-tile-action:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}.dd-page-header-strip{position:relative;z-index:1;display:flex;flex-wrap:wrap;align-items:center;gap:12px 16px;min-width:0}.dd-room-tiles{flex:1 1 auto;min-width:0;display:flex;flex-wrap:wrap;align-items:center;gap:10px}.dd-page-header-strip>dwains-dashboard-next-area-thermostat{flex:0 1 auto;min-width:0;max-width:100%}.dd-room-tile{--tile-color:var(--primary-color);--tile-on:#ffffff;box-sizing:border-box;min-width:0;min-height:52px;padding:6px 12px 6px 6px;display:inline-flex;align-items:center;gap:10px;border:0;border-radius:14px;background:var(--ph-control);color:var(--ph-text);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;user-select:none;-webkit-user-select:none;transition:background-color 0.2s ease,color 0.2s ease,transform 0.12s ease}button.dd-room-tile:hover{background:var(--ph-control-hover)}button.dd-room-tile:active{transform:scale(0.97)}.dd-room-tile.light{--tile-color:#e1a129;--tile-on:#2b1c00}.dd-room-tile.switch{--tile-color:#2f6fd6}.dd-room-tile.cover{--tile-color:#d98928}.dd-room-tile.fan{--tile-color:#16a6b6}.dd-room-tile.climate{--tile-color:#34a6d8}.dd-room-tile-icon{width:40px;height:40px;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;border-radius:11px;background:color-mix(in srgb,var(--tile-color) 14%,transparent);color:var(--tile-color);transition:background-color 0.2s ease,color 0.2s ease}.dd-room-tile-icon ha-icon{--mdc-icon-size:22px}.dd-room-tile-copy{min-width:0;display:flex;flex-direction:column;gap:1px}.dd-room-tile-label{font-size:14px;font-weight:650;line-height:1.2;white-space:nowrap}.dd-room-tile-state{color:var(--ph-muted);font-size:12.5px;font-weight:500;line-height:1.2;white-space:nowrap;font-variant-numeric:tabular-nums}.dd-room-tile-switch{position:relative;width:34px;height:20px;flex:0 0 auto;margin-left:6px;border-radius:999px;background:color-mix(in srgb,var(--ph-text) 20%,transparent);transition:background-color 0.2s ease}.dd-room-tile-switch::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#ffffff;box-shadow:0 1px 3px rgba(0,0,0,0.25);transition:transform 0.24s cubic-bezier(0.2,0.8,0.2,1)}.dd-room-tile.is-on{background:color-mix(in srgb,var(--tile-color) 15%,var(--ph-surface))}button.dd-room-tile.is-on:hover{background:color-mix(in srgb,var(--tile-color) 21%,var(--ph-surface))}.dd-room-tile.is-on .dd-room-tile-icon{background:var(--tile-color);color:var(--tile-on)}.dd-room-tile.is-on .dd-room-tile-switch{background:var(--tile-color)}.dd-room-tile.is-on .dd-room-tile-switch::after{transform:translateX(14px)}.dd-room-tile.has-actions{padding-right:6px;cursor:default}.dd-room-tile-actions{display:inline-flex;align-items:center;gap:4px;margin-left:6px}.dd-room-tile-action{width:36px;height:36px;padding:0;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:10px;background:var(--ph-control);color:inherit;font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;transition:background-color 0.18s ease,transform 0.12s ease}.dd-room-tile-action:hover{background:var(--ph-control-hover)}.dd-room-tile-action:active{transform:scale(0.9)}.dd-room-tile-action ha-icon{--mdc-icon-size:20px}.dd-room-tile-chevron{--mdc-icon-size:20px;margin-left:2px;color:var(--ph-muted)}.dd-page-header.has-picture{--ph-text:#ffffff;--ph-control:rgba(255,255,255,0.16);--ph-control-hover:rgba(255,255,255,0.26);--ph-muted:rgba(255,255,255,0.8);border-color:transparent;background:#1b2422}.dd-page-header.has-picture.text-dark{--ph-text:#10141a;--ph-control:rgba(255,255,255,0.58);--ph-control-hover:rgba(255,255,255,0.74);--ph-muted:rgba(16,20,26,0.74);background:#e9eef0}.dd-page-header-media{position:absolute;inset:0;z-index:0;border-radius:inherit;background-position:center;background-size:cover}.dd-page-header-media::after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(0deg,rgba(8,12,18,0.62) 0%,rgba(8,12,18,0) 70%),linear-gradient(100deg,rgba(8,12,18,0.66) 0%,rgba(8,12,18,0.34) 60%,rgba(8,12,18,0.2) 100%)}.dd-page-header.text-dark .dd-page-header-media::after{background:linear-gradient(0deg,rgba(255,255,255,0.72) 0%,rgba(255,255,255,0) 70%),linear-gradient(100deg,rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.46) 60%,rgba(255,255,255,0.24) 100%)}.dd-page-header.has-picture .dd-page-header-top{flex-wrap:wrap;row-gap:36px}.dd-page-header.has-picture .dd-page-header-actions{order:1;margin-left:auto}.dd-page-header.has-picture .dd-page-header-identity{order:2;flex-basis:100%}.dd-page-header.has-picture .dd-page-header-title{text-shadow:0 1px 14px rgba(0,0,0,0.28)}.dd-page-header.has-picture.text-dark .dd-page-header-title{text-shadow:none}.dd-page-header.has-picture .dd-page-header-icon{background:var(--ph-control);color:var(--ph-text)}.dd-page-header.has-picture .dd-page-header-button,.dd-page-header.has-picture .dd-room-tile{-webkit-backdrop-filter:blur(16px) saturate(1.3);backdrop-filter:blur(16px) saturate(1.3)}.dd-page-header.has-picture .dd-page-header-badge{box-shadow:none}.dd-page-header.has-picture .dd-page-header-reading ha-icon{color:inherit}.dd-page-header.has-picture .dd-room-tile.is-on{--ph-text:#10141a;--ph-muted:rgba(16,20,26,0.7);--ph-control:rgba(16,20,26,0.07);--ph-control-hover:rgba(16,20,26,0.12);background:rgba(255,255,255,0.94)}.dd-page-header.has-picture .dd-room-tile:not(.is-on) .dd-room-tile-icon{background:var(--ph-control);color:var(--ph-text)}.dd-page-header.has-picture .dd-room-tile-switch{background:color-mix(in srgb,var(--ph-text) 30%,transparent)}.dd-page-header.has-picture .dd-room-tile.is-on .dd-room-tile-switch{background:var(--tile-color)}.dd-room-compact{display:none}.room-header{padding:16px;gap:0}.room-header .dd-page-header-with-media{min-width:0;min-height:128px;display:grid;grid-template-columns:176px minmax(0,1fr);align-items:stretch;gap:18px}.room-header .dd-page-header-media-tile{width:176px;min-height:128px;height:100%;align-self:stretch;overflow:hidden;border-radius:16px;background:color-mix(in srgb,var(--ph-accent) 10%,var(--ph-surface))}.room-header .dd-page-header-room-picture,.room-header .dd-page-header-room-icon{width:100%;height:100%;min-height:128px;border-radius:inherit}.room-header .dd-page-header-room-picture{background-position:center;background-size:cover;background-repeat:no-repeat}.room-header .dd-page-header-room-icon{display:flex;align-items:center;justify-content:center;color:var(--ph-accent);background:color-mix(in srgb,var(--ph-accent) 12%,var(--ph-surface))}.room-header .dd-page-header-room-icon ha-icon{--mdc-icon-size:42px}.room-header .dd-page-header-main{min-width:0;min-height:128px;display:flex;flex-direction:column;justify-content:flex-start;gap:14px;padding-top:8px;box-sizing:border-box}.room-header .dd-page-header-top{flex-wrap:nowrap;align-items:flex-start;gap:12px}.room-header .dd-page-header-identity{min-width:0;align-items:flex-start}.room-header .dd-page-header-copy{min-width:0;width:100%}.room-header .dd-page-header-title-row{min-width:0;min-height:30px;display:flex;align-items:center;gap:6px;line-height:1}.room-header .dd-page-header-title-row .dd-page-header-home{width:30px;height:30px;flex:0 0 30px;display:inline-grid;place-items:center}.room-header .dd-page-header-title-chevron{--mdc-icon-size:17px;width:17px;height:17px;flex:0 0 17px;align-self:center;color:var(--ph-muted)}.room-header .dd-page-header-title{min-width:0;flex:1 1 auto;margin:0;align-self:center;font-size:clamp(22px,1.2vw + 14px,30px);line-height:1.08;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.room-header .dd-page-header-subtitle{margin-top:6px;gap:4px 10px;align-items:center}.room-header .dd-page-header-device-label,.room-header .dd-page-header-subtitle-separator{display:inline-flex;align-items:center;line-height:1}.room-header .dd-page-header-subtitle-separator{margin-inline:1px;color:color-mix(in srgb,var(--ph-muted) 72%,transparent);font-weight:700}.room-header .dd-page-header-actions{margin-left:auto;align-self:flex-start}.room-header .dd-page-header-strip{min-width:0;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:8px}.room-header .dd-room-tiles{flex:0 1 auto}@media (max-width:768px){.dd-page-header,.dd-room-compact{--ph-pad-x:16px}.dd-page-header{margin:0 -10px 14px;padding:calc(10px + env(safe-area-inset-top,0px)) var(--ph-pad-x) 14px;gap:14px;border:0;border-radius:0;background:transparent;box-shadow:none}:host([data-theme-dark]) .dd-page-header{box-shadow:none}.dd-page-header-top{flex-wrap:wrap;row-gap:14px}.dd-page-header-actions{order:1;margin-left:auto}.dd-page-header-identity{order:2;flex-basis:100%}.dd-page-header-actions.is-content{order:3;flex-basis:100%;flex-wrap:wrap;justify-content:flex-start;margin-left:0}.dd-page-header-icon{display:none}.dd-page-header-title{font-size:28px;line-height:1.1;white-space:normal;overflow-wrap:anywhere;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.dd-page-header-strip{flex-direction:column;align-items:stretch;gap:12px}.dd-room-tiles{flex:0 0 auto;flex-wrap:nowrap;margin:0 calc(var(--ph-pad-x) * -1);padding:2px var(--ph-pad-x);overflow-x:auto;overscroll-behavior-x:contain;scroll-padding-inline:var(--ph-pad-x);scroll-snap-type:x proximity;scrollbar-width:none}.dd-room-tiles::-webkit-scrollbar{display:none}.dd-room-tile{flex:0 0 auto;scroll-snap-align:start}.dd-page-header-strip>dwains-dashboard-next-area-thermostat{width:100%}.dd-page-header.has-picture{padding-bottom:16px;border-radius:0 0 24px 24px}.dd-page-header.has-picture .dd-page-header-top{row-gap:72px}.dd-room-compact{display:block;position:sticky;top:0;z-index:90;height:0;color:var(--ph-text)}.dd-room-compact-panel{position:absolute;top:0;left:-10px;right:-10px;box-sizing:border-box;padding:calc(8px + env(safe-area-inset-top,0px)) 12px 8px;display:flex;flex-direction:column;gap:8px;border-bottom:1px solid color-mix(in srgb,var(--divider-color,rgba(0,0,0,0.12)) 70%,transparent);background:color-mix(in srgb,var(--ph-surface) 86%,transparent);-webkit-backdrop-filter:blur(20px) saturate(1.5);backdrop-filter:blur(20px) saturate(1.5);box-shadow:0 8px 24px rgba(15,23,42,0.08);opacity:0;transform:translateY(-12px);visibility:hidden;pointer-events:none;transition:opacity 0.18s ease,transform 0.26s cubic-bezier(0.2,0.8,0.2,1),visibility 0s linear 0.26s}.dd-room-compact.is-visible .dd-room-compact-panel{opacity:1;transform:none;visibility:visible;pointer-events:auto;transition:opacity 0.18s ease,transform 0.26s cubic-bezier(0.2,0.8,0.2,1),visibility 0s}.dd-room-compact-bar{display:flex;align-items:center;gap:10px;min-height:40px}.dd-room-compact-title{flex:1 1 auto;min-width:0;display:flex;flex-direction:column}.dd-room-compact-title strong{overflow:hidden;font-size:17px;font-weight:700;line-height:1.2;text-overflow:ellipsis;white-space:nowrap}.dd-room-compact-title span{overflow:hidden;color:var(--ph-muted);font-size:12px;font-weight:500;line-height:1.25;text-overflow:ellipsis;white-space:nowrap;font-variant-numeric:tabular-nums}.dd-room-compact .dd-page-header-button{width:38px;height:38px}.dd-room-compact .dd-room-tiles{margin:0 -12px;padding:0 12px 2px;scroll-padding-inline:12px}.dd-room-compact .dd-room-tile{min-height:44px;padding:4px 10px 4px 4px;gap:8px}.dd-room-compact .dd-room-tile-icon{width:36px;height:36px;border-radius:10px}.dd-room-compact .dd-room-tile-action{width:32px;height:32px}}@media (max-width:768px){.room-header{margin:0 0 14px;padding:12px;gap:0;border:1px solid color-mix(in srgb,var(--divider-color,rgba(0,0,0,0.12)) 75%,transparent);border-radius:18px;background:var(--ph-surface);box-shadow:0 1px 2px rgba(15,23,42,0.04),0 10px 26px rgba(15,23,42,0.07)}:host([data-theme-dark]) .room-header{box-shadow:0 1px 2px rgba(0,0,0,0.24),0 10px 26px rgba(0,0,0,0.20)}.room-header .dd-page-header-with-media{grid-template-columns:64px minmax(0,1fr);align-items:start;gap:10px}.room-header .dd-page-header-media-tile{width:64px;min-height:64px;height:64px;border-radius:14px}.room-header .dd-page-header-room-picture,.room-header .dd-page-header-room-icon{min-height:64px;height:64px}.room-header .dd-page-header-room-icon ha-icon{--mdc-icon-size:30px}.room-header .dd-page-header-main{display:contents}.room-header .dd-page-header-top{min-width:0;grid-column:2;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:8px}.room-header .dd-page-header-identity{min-width:0;display:block;order:initial;flex-basis:auto}.room-header .dd-page-header-title-row{gap:6px}.room-header .dd-page-header-title-row .dd-page-header-home{width:32px;height:32px;flex-basis:32px}.room-header .dd-page-header-title-row .dd-page-header-home ha-icon{--mdc-icon-size:19px}.room-header .dd-page-header-title-chevron{display:none}.room-header .dd-page-header-title{font-size:20px;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.room-header .dd-page-header-subtitle{margin-top:4px;gap:2px 9px;font-size:12px;line-height:1.25}.room-header .dd-page-header-actions{order:initial;margin-left:0;gap:5px}.room-header .dd-page-header-actions .dd-page-header-button{width:34px;height:34px}.room-header .dd-page-header-actions .dd-page-header-button ha-icon,.room-header .dd-page-header-actions .dd-page-header-button .dd-static-icon{--mdc-icon-size:19px;width:19px;height:19px}.room-header .dd-page-header-strip{grid-column:1 / -1;margin-top:10px;flex-direction:column;align-items:stretch;gap:10px}.room-header .dd-room-tiles{margin:0;padding:0 0 2px;scroll-padding-inline:0}.room-header .dd-page-header-strip>dwains-dashboard-next-area-thermostat{width:100%}}@media (pointer:coarse){.dd-room-tile-action,.dd-room-compact .dd-room-tile-action{width:40px;height:40px}.dd-page-header-button,.dd-room-compact .dd-page-header-button{width:42px;height:42px}}@media (prefers-reduced-motion:reduce){.dd-page-header-button,.dd-room-tile,.dd-room-tile-icon,.dd-room-tile-switch,.dd-room-tile-switch::after,.dd-room-tile-action,.dd-room-compact-panel,.dd-room-compact.is-visible .dd-room-compact-panel{transition:none}}`;r`:host{display:block;height:100%;max-height:100%;min-height:0;color:var(--primary-text-color);overflow:hidden;-webkit-tap-highlight-color:transparent}button,.area-button,.home-status-card,.status-card-compact,.mobile-area-card,.house-person-mini,.person-card,.favorite-card-wrapper,.favorite-quick-action,.mobile-domain-master,.mobile-layout-toggle,.mobile-entity-card,.mobile-entity-action,.mobile-cover-action,.mobile-entity-toggle,.dd-add-card,.dd-custom-card-wrap.editing{user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;touch-action:manipulation}.status-card-compact:focus-visible,.home-status-card:focus-visible,.weather-compact:focus-visible,.welcome-weather:focus-visible,.welcome-alarm:focus-visible,.area-light-toggle:focus-visible,.mobile-area-card:focus-visible,.mobile-entity-card:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}.dd-static-icon{width:20px;height:20px;display:block;flex:0 0 auto;fill:currentColor;pointer-events:none}.mobile-area-card,.home-camera-card,.home-summary-card,.home-status-card,.favorite-card-wrapper{contain:layout style paint}.mobile-home-section,.home-camera-section,.home-status-section,.home-todos-section,.home-custom-cards-section,.home-favorites-section,.home-summaries-section,.mobile-domain-group{content-visibility:auto;contain-intrinsic-size:1px 360px}.mobile-entities-section.layout-grid .mobile-entity-card{content-visibility:auto;contain-intrinsic-size:164px 150px}:host{display:block;height:calc(100dvh - var(--header-height,56px));min-height:0;overflow:hidden}.layout-container{--area-sidebar-width:250px;display:flex;height:100%;max-height:100%;min-height:0;position:relative;overflow:hidden}.layout-container.sidebar-resizing,.layout-container.sidebar-resizing *{cursor:col-resize !important;user-select:none !important;-webkit-user-select:none !important}.layout-container.sidebar-collapsed .sidebar{width:0;flex-basis:0;border-right:0;opacity:0;pointer-events:none;transform:translateX(-16px)}.layout-container.sidebar-collapsed .main-content{min-width:0}.sidebar{width:var(--area-sidebar-width);flex:0 0 var(--area-sidebar-width);background:var(--card-background-color);border-right:1px solid var(--divider-color);display:flex;flex-direction:column;transition:transform 0.3s ease,width 0.16s ease,flex-basis 0.16s ease;z-index:1;min-height:0;height:100%;max-height:100%;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch}.layout-container.sidebar-resizing .sidebar{transition:none}.sidebar-resize-handle{flex:0 0 10px;width:10px;align-self:stretch;margin-left:-5px;margin-right:-5px;position:relative;z-index:4;border:0;padding:0;background:transparent;cursor:col-resize;touch-action:none}.sidebar-resize-handle::before{content:'';position:absolute;top:14px;bottom:14px;left:4px;width:2px;border-radius:999px;background:transparent;transition:background 0.16s ease,box-shadow 0.16s ease}.sidebar-resize-handle:hover::before,.sidebar-resize-handle:focus-visible::before,.layout-container.sidebar-resizing .sidebar-resize-handle::before{background:var(--primary-color);box-shadow:0 0 0 4px color-mix(in srgb,var(--primary-color) 12%,transparent)}.sidebar-resize-handle:focus-visible{outline:none}.sidebar-collapse-toggle{position:absolute;top:50%;left:calc(var(--area-sidebar-width) - 17px);z-index:6;width:34px;height:54px;padding:0;display:inline-flex;align-items:center;justify-content:center;border:1px solid color-mix(in srgb,var(--divider-color) 80%,transparent);border-radius:999px;background:color-mix(in srgb,var(--card-background-color) 96%,transparent);color:var(--primary-text-color);box-shadow:0 10px 24px rgba(15,23,42,0.12),inset 0 1px 0 rgba(255,255,255,0.56);cursor:pointer;transform:translateY(-50%);transition:top 0.16s ease,left 0.16s ease,transform 0.16s ease,background-color 0.16s ease,box-shadow 0.16s ease}.sidebar-collapse-toggle:hover{background:color-mix(in srgb,var(--primary-color) 10%,var(--card-background-color));box-shadow:0 12px 28px rgba(15,23,42,0.16),inset 0 1px 0 rgba(255,255,255,0.62)}.sidebar-collapse-toggle:focus-visible{outline:2px solid var(--primary-color);outline-offset:3px}.sidebar-collapse-toggle ha-icon{--mdc-icon-size:18px}.sidebar-collapse-toggle.is-collapsed{left:0;top:50%;width:34px;min-width:34px;height:54px;padding:0;border-left:0;border-radius:0 999px 999px 0;background:color-mix(in srgb,var(--card-background-color) 98%,transparent);transform:translateY(-50%);box-shadow:0 12px 28px rgba(15,23,42,0.14),inset 0 1px 0 rgba(255,255,255,0.56)}.sidebar-collapse-label{display:none;font-size:13px;font-weight:850;line-height:1}.sidebar-collapse-toggle.is-collapsed .sidebar-collapse-label{display:inline}.main-content{flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden}.global-header{background:var(--card-background-color);border-bottom:1px solid var(--divider-color);padding:16px;position:sticky;top:0;z-index:1;transition:all 0.3s ease}.global-header.compact{padding:8px 16px}.header-content{display:flex;align-items:center;justify-content:space-between;gap:16px}.header-time-weather{display:flex;flex-direction:column;align-items:flex-end;gap:8px;min-width:120px}.header-time-section{display:flex;flex-direction:column;align-items:flex-end;gap:0px;line-height:0.8}.header-time{font-size:24px;font-weight:700;color:var(--primary-text-color);font-family:'Roboto Mono',monospace;line-height:1.2}.header-date{font-size:14px;opacity:0.8;color:var(--secondary-text-color);font-weight:500}.weather-compact{display:flex;align-items:center;gap:8px;margin:0;padding:4px 12px;border:0;background:var(--secondary-background-color);color:inherit;font:inherit;text-align:left;border-radius:20px;cursor:pointer;transition:all 0.2s ease}.weather-compact:hover{background:var(--primary-color);color:var(--text-primary-color);transform:translateY(-1px)}.weather-icon-compact ha-icon{--mdc-icon-size:24px}.weather-temp-compact{font-size:14px;font-weight:500}.header-status-section{flex:1;overflow:hidden}.header-status-scroll{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.header-status-scroll::-webkit-scrollbar{display:none}.status-card-compact{display:flex;flex-direction:column;align-items:center;padding:8px 12px;background:var(--secondary-background-color);border-radius:12px;cursor:pointer;transition:all 0.2s ease;min-width:60px;position:relative}.status-card-compact:hover{transform:translateY(-2px);box-shadow:0 2px 8px rgba(0,0,0,0.1)}.status-card-icon-compact{position:relative;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:color-mix(in srgb,var(--primary-color) 10%,transparent)}.status-card-icon-compact ha-icon{--mdc-icon-size:20px;color:var(--primary-color)}.status-card-badge-compact{position:absolute;top:-4px;right:-4px;background:var(--primary-color);color:var(--text-primary-color);border-radius:10px;padding:2px 6px;font-size:11px;font-weight:bold;min-width:18px;text-align:center}.status-card-title-compact{font-size:11px;margin-top:4px;opacity:0.8}.status-card-compact.light .status-card-icon-compact{background:color-mix(in srgb,var(--status-color,#e1a129) 15%,transparent)}.status-card-compact.light ha-icon{color:var(--status-color,#e1a129)}.status-card-compact.switch .status-card-icon-compact{background:color-mix(in srgb,var(--status-color,#2f6fd6) 15%,transparent)}.status-card-compact.switch ha-icon{color:var(--status-color,#2f6fd6)}.status-card-compact.binary_sensor .status-card-icon-compact{background:color-mix(in srgb,var(--status-color,#df5b63) 15%,transparent)}.status-card-compact.binary_sensor ha-icon{color:var(--status-color,#df5b63)}.status-card-compact.person .status-card-icon-compact{background:color-mix(in srgb,var(--status-color,#6d7891) 15%,transparent)}.status-card-compact.person ha-icon{color:var(--status-color,#6d7891)}.status-card-compact.wattage .status-card-icon-compact{background:color-mix(in srgb,var(--status-color,#d88e20) 15%,transparent)}.status-card-compact.wattage ha-icon{color:var(--status-color,#d88e20)}.header-expand-button{position:absolute;bottom:-28px;left:50%;transform:translateX(-50%);width:40px;height:40px;border-radius:50%;background:var(--card-background-color);border:1px solid var(--divider-color);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s ease;box-shadow:0 2px 8px rgba(0,0,0,0.1);z-index:5}.header-expand-button:hover{transform:translateX(-50%) translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,0.15)}.header-expand-button[data-extra-count]::after{content:attr(data-extra-count);position:absolute;right:-8px;top:50%;transform:translateY(-50%);background:var(--primary-color);color:var(--text-primary-color);border-radius:10px;padding:2px 6px;font-size:11px;font-weight:bold;min-width:18px;text-align:center}.area-list{padding:8px}.floor-section{margin-bottom:16px}.floor-header{padding:8px 16px;margin-bottom:8px}.floor-header h3{margin:0;font-size:14px;font-weight:600;color:var(--secondary-text-color);text-transform:uppercase;letter-spacing:0.5px}.floor-areas{display:grid;grid-template-columns:repeat(auto-fit,minmax(178px,1fr));gap:8px}.area-button{box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:16px;margin-bottom:0;border-radius:16px;cursor:pointer;transition:all 0.3s ease;background:var(--secondary-background-color);border:none;width:100%;height:125px;text-align:left;color:var(--primary-text-color);position:relative;min-width:0;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05)}.area-button:hover{transform:translateY(-2px);box-shadow:0 4px 16px rgba(0,0,0,0.1)}.area-button.selected{background:var(--primary-color);color:var(--text-primary-color)}.area-button.home-button{height:60px}.area-button.has-picture{position:relative;background:var(--secondary-background-color);--area-picture-text-color:#ffffff;--area-picture-muted-text-color:rgba(255,255,255,0.76);--area-picture-text-shadow:0 2px 10px rgba(0,0,0,0.62);--area-picture-overlay:linear-gradient(90deg,rgba(11,17,28,0.76) 0%,rgba(11,17,28,0.38) 54%,rgba(11,17,28,0.08) 100%),linear-gradient(180deg,rgba(11,17,28,0.04),rgba(11,17,28,0.34))}.area-button.has-picture.text-dark{--area-picture-text-color:#ffffff;--area-picture-muted-text-color:rgba(255,255,255,0.76);--area-picture-text-shadow:0 2px 10px rgba(0,0,0,0.62);--area-picture-overlay:linear-gradient(90deg,rgba(11,17,28,0.76) 0%,rgba(11,17,28,0.38) 54%,rgba(11,17,28,0.08) 100%),linear-gradient(180deg,rgba(11,17,28,0.04),rgba(11,17,28,0.34))}.area-background{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;opacity:0.7;transition:opacity 0.2s ease}.area-button.has-picture:hover .area-background{opacity:0.8}.area-button-action{position:absolute;inset:0;z-index:0;width:100%;height:100%;margin:0;padding:0;border:0;border-radius:inherit;background:transparent;color:inherit;cursor:pointer}.area-button-action:focus-visible{outline:2px solid var(--primary-color);outline-offset:-3px}@supports selector(:has(*)){.area-button-action:focus-visible{outline:none}.area-button:has(>.area-button-action:focus-visible){outline:2px solid var(--primary-color);outline-offset:2px}.area-button.selected:has(>.area-button-action:focus-visible){outline-color:var(--primary-text-color)}}.area-button>:not(.area-button-action),.area-button::before,.area-button::after{pointer-events:none}.area-button .area-light-toggle,.area-button .home-notification-shortcut{pointer-events:auto}.area-button:not(.home-button){font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;line-height:normal}.area-light-toggle{position:relative;margin:0;font-family:inherit;line-height:inherit}@media (pointer:coarse){.area-light-toggle::after{content:"";position:absolute;left:50%;top:50%;width:100%;min-width:44px;height:44px;transform:translate(-50%,-50%)}}.area-content{position:relative;z-index:1;display:flex;flex-direction:column;gap:8px;width:100%;height:100%;justify-content:space-between}.area-top-section{display:flex;flex-direction:column;gap:2px;margin-top:4px}.area-bottom-section{display:flex;align-items:flex-end;justify-content:flex-end;gap:8px;margin-bottom:4px}.area-button.has-picture .area-name,.area-button.has-picture .area-sensors{text-shadow:var(--area-picture-text-shadow);color:var(--area-picture-text-color)}.sidebar .area-main-icon{position:absolute;left:-25px;bottom:-25px;width:65px;height:65px;border-radius:50%;background:color-mix(in srgb,var(--primary-color) 60%,transparent);display:flex;align-items:center;justify-content:center;flex-shrink:0}.area-button.selected .area-main-icon{background:rgba(255,255,255,0.2)}.sidebar .area-main-icon ha-icon{--mdc-icon-size:40px;color:var(--primary-color)}.area-info-badges{display:flex;gap:4px;flex-wrap:wrap;align-items:center}.area-icon{width:32px;height:32px;border-radius:50%;background:var(--secondary-background-color);display:flex;align-items:center;justify-content:center;flex-shrink:0}.area-button.selected .area-icon{background:rgba(255,255,255,0.2)}.area-info{flex:1}.area-menu-chevron{display:none}.home-notification-shortcut{box-sizing:border-box;position:relative;z-index:2;min-width:42px;height:28px;margin-left:auto;padding:0 7px;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:4px;flex-shrink:0;cursor:pointer;color:#dc2626;background:color-mix(in srgb,#ef4444 12%,var(--card-background-color));box-shadow:inset 0 0 0 1px rgba(220,38,38,0.08),0 6px 14px rgba(220,38,38,0.1)}.home-notification-shortcut ha-icon{--mdc-icon-size:15px}.home-notification-count{min-width:17px;height:17px;padding:0 5px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:#e13f3f;color:#ffffff;font-size:11px;font-weight:850;line-height:1}.area-name{font-weight:600;font-size:16px;margin-bottom:2px}.area-sensors{font-size:13px;opacity:0.8;font-weight:500}.area-alerts{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:var(--error-color);color:var(--text-primary-color);font-size:11px;font-weight:bold;flex-shrink:0}.content-area{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;overflow-anchor:none;overscroll-behavior:auto;-webkit-overflow-scrolling:touch;padding:16px;padding-bottom:var(--dd-next-bottom-nav-space,16px)}.content-area.settings-content-area{padding:0;background:linear-gradient(180deg,color-mix(in srgb,var(--primary-color) 4%,transparent) 0,transparent 220px),var(--primary-background-color)}.settings-page-view{--dd-settings-bar-bottom:var(--dd-next-bottom-nav-space,16px);width:min(1180px,calc(100% - 32px));min-height:100%;margin:0 auto;padding:18px 0 calc(24px + var(--dd-next-bottom-nav-space,0px));box-sizing:border-box}.settings-page-header{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:16px;margin:0 0 16px;padding:16px 18px;border:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent);border-radius:18px;background:linear-gradient(135deg,color-mix(in srgb,var(--card-background-color) 96%,var(--primary-color)) 0%,color-mix(in srgb,var(--card-background-color) 94%,var(--primary-color)) 100%);box-shadow:0 14px 36px rgba(15,23,42,0.08)}.settings-page-back,.settings-primary{appearance:none;border:0;font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}.settings-page-back{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 74%,var(--card-background-color));color:var(--primary-text-color)}.settings-page-back ha-icon{--mdc-icon-size:22px}.settings-page-title{min-width:0}.settings-page-title h1{margin:0;font-size:clamp(22px,2vw,30px);line-height:1.08;font-weight:850;color:var(--primary-text-color);letter-spacing:0}.settings-page-title p{margin:5px 0 0;color:var(--secondary-text-color);font-size:14px;line-height:1.35}.settings-primary{min-height:40px;padding:0 22px;border-radius:999px;font-size:14px;font-weight:800}.settings-primary{background:var(--primary-color);color:var(--text-primary-color);box-shadow:0 10px 24px color-mix(in srgb,var(--primary-color) 24%,transparent)}.settings-primary:disabled{opacity:0.45;cursor:default;box-shadow:none}.settings-page-editor{overflow:hidden;border-radius:18px;background:var(--card-background-color);border:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent);box-shadow:0 16px 46px rgba(15,23,42,0.08)}.settings-page-editor dwains-dashboard-next-strategy-editor{display:block}.settings-save-bar{position:sticky;bottom:var(--dd-settings-bar-bottom);z-index:5;display:flex;align-items:center;justify-content:space-between;gap:12px;margin:14px 0 0;padding:8px 8px 8px 16px;border:1px solid color-mix(in srgb,var(--divider-color) 62%,transparent);border-radius:999px;background:color-mix(in srgb,var(--card-background-color) 92%,transparent);box-shadow:0 16px 34px rgba(15,23,42,0.13);backdrop-filter:blur(18px) saturate(170%);-webkit-backdrop-filter:blur(18px) saturate(170%)}.settings-save-status{min-width:0;display:flex;align-items:center;gap:8px;color:var(--secondary-text-color);font-size:13px;font-weight:700;line-height:1.3}.settings-save-text{min-width:0;overflow-wrap:anywhere}.settings-save-dot{flex:0 0 auto;width:8px;height:8px;border-radius:999px;background:var(--success-color,#43a047)}.settings-save-bar.is-dirty .settings-save-status{color:var(--primary-text-color)}.settings-save-bar.is-dirty .settings-save-dot{background:var(--warning-color,#ff9800)}.settings-save-bar.is-saving .settings-save-dot{background:var(--primary-color);animation:dd-settings-saving 1s ease-in-out infinite}.settings-save-bar.is-error{border-radius:18px;border-color:color-mix(in srgb,var(--error-color) 40%,transparent)}.settings-save-bar.is-error .settings-save-status{color:var(--error-color)}.settings-save-bar.is-error .settings-save-dot{background:var(--error-color)}.settings-save-bar .settings-primary{flex:0 0 auto}@keyframes dd-settings-saving{50%{opacity:0.3}}@media (prefers-reduced-motion:reduce){.settings-save-bar.is-saving .settings-save-dot{animation:none}}@media (max-width:768px){.content-area{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}[data-dd-wall-tablet-hold]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.home-view{max-width:1600px;margin:0 auto;padding:0px}.home-welcome{text-align:left;margin-bottom:28px;padding:0;background:color-mix(in srgb,var(--card-background-color) 97%,var(--primary-background-color));border:1px solid rgba(15,23,42,0.06);border-radius:8px;box-shadow:0 14px 34px rgba(15,23,42,0.08)}.welcome-content{margin:0 auto;padding:18px 22px}.welcome-header{display:grid;grid-template-columns:minmax(0,1fr) auto auto;align-items:center;gap:18px;margin-bottom:0}.welcome-user{display:flex;align-items:center;gap:14px;min-width:0}.welcome-avatar{border:0;padding:0;display:inline-flex;width:52px;height:52px;overflow:hidden;align-items:center;justify-content:center;flex:0 0 auto;appearance:none;-webkit-appearance:none;background:var(--secondary-background-color);color:var(--secondary-text-color);border-radius:999px;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,0.1),0 0 0 3px rgba(255,255,255,0.72);transition:transform 0.18s ease,box-shadow 0.18s ease}.welcome-avatar:hover{transform:translateY(-1px)}.welcome-avatar:focus-visible{outline:2px solid var(--primary-color);outline-offset:3px}.welcome-avatar ha-icon{--mdc-icon-size:26px}.welcome-avatar img{width:100%;height:100%;object-fit:cover}.welcome-avatar-initials{color:var(--primary-text-color);font-size:18px;font-weight:800;line-height:1;letter-spacing:0}.welcome-copy{min-width:0}.welcome-text{display:flex;align-items:baseline;gap:4px}.welcome-greeting{font-size:22px;font-weight:400;color:var(--secondary-text-color)}.welcome-name{font-size:28px;font-weight:750;color:var(--primary-text-color)}.welcome-title{display:none}.welcome-return{display:block;margin-top:5px;color:var(--secondary-text-color);font-size:13px;font-weight:650;line-height:1.15;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.welcome-actions{display:flex;align-items:center;gap:8px}.welcome-action{position:relative;border:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:999px;color:var(--primary-text-color);background:color-mix(in srgb,var(--secondary-background-color) 74%,var(--card-background-color));box-shadow:inset 0 0 0 1px rgba(15,23,42,0.05);transition:transform 0.18s ease,box-shadow 0.18s ease,background-color 0.18s ease;-webkit-tap-highlight-color:transparent}.welcome-action:hover{background:color-mix(in srgb,var(--primary-color) 10%,var(--card-background-color));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-color) 18%,transparent)}.welcome-action ha-icon{--mdc-icon-size:22px}.welcome-action:active{transform:scale(0.96)}.welcome-action-badge{position:absolute;top:-2px;right:-2px;min-width:17px;height:17px;padding:0 5px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:var(--error-color);color:#fff;font-size:10px;font-weight:850;line-height:1;box-shadow:0 0 0 2px var(--card-background-color)}.welcome-time-section{display:flex;flex-direction:column;align-items:flex-end;gap:0px;min-width:112px;line-height:1.1}.welcome-time{font-size:34px;font-weight:800;color:var(--primary-text-color);font-family:'Roboto Mono',monospace}.welcome-date{margin-top:4px;font-size:14px;opacity:0.8;color:var(--secondary-text-color);font-weight:650}.welcome-subheader{display:flex;justify-content:flex-start;align-items:center;gap:10px;margin-top:14px}.welcome-alarm{display:flex;align-items:center;gap:8px;margin:0;padding:8px 16px;border:0;border-radius:20px;color:inherit;font:inherit;text-align:left;cursor:pointer;transition:all 0.2s ease;font-weight:500}.welcome-alarm.alarm-armed{background:var(--error-color);color:var(--text-primary-color)}.welcome-alarm.alarm-disarmed{background:var(--success-color);color:var(--text-primary-color)}.welcome-alarm.alarm-triggered{background:var(--error-color);color:var(--text-primary-color);animation:pulse 2s infinite}.welcome-alarm:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,0.15)}.welcome-alarm ha-icon{--mdc-icon-size:18px}.alarm-text{font-size:14px;font-weight:600}@keyframes pulse{0%{opacity:1}50%{opacity:0.7}100%{opacity:1}}.welcome-weather{display:flex;align-items:center;gap:8px;margin:0;padding:8px 16px;border:0;background:var(--primary-color);color:var(--text-primary-color);font:inherit;text-align:left;border-radius:20px;cursor:pointer;transition:all 0.2s ease;font-weight:500}.welcome-weather:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,0.15)}.welcome-weather ha-icon{--mdc-icon-size:20px}.weather-temp{font-size:16px;font-weight:600}.weather-label{font-size:12px;font-weight:750;line-height:1;opacity:0.82;text-transform:uppercase;letter-spacing:0}@media (max-width:768px){.home-welcome{text-align:left;margin:-10px -10px 16px;padding:calc(18px + env(safe-area-inset-top,0px)) 20px 16px;border-radius:0 0 8px 8px;background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 96%,var(--primary-color)) 0%,color-mix(in srgb,var(--card-background-color) 92%,var(--primary-background-color)) 100%);box-shadow:0 12px 30px rgba(15,23,42,0.08)}.welcome-content{padding:0}.welcome-header{display:flex;flex-direction:row;justify-content:space-between;gap:14px;margin-bottom:0}.welcome-user{gap:10px;flex:1 1 auto}.welcome-avatar{display:inline-flex;width:38px;height:38px;border-radius:999px;box-shadow:0 8px 18px rgba(15,23,42,0.1),0 0 0 3px rgba(255,255,255,0.72)}.welcome-avatar ha-icon{--mdc-icon-size:21px}.welcome-avatar-initials{font-size:14px}.welcome-text{display:block}.welcome-greeting,.welcome-name{display:none}.welcome-title{display:block;color:var(--primary-text-color);font-size:15px;font-weight:750;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.welcome-return{display:block;margin-top:3px;color:var(--secondary-text-color);font-size:12px;font-weight:600;line-height:1.1}.welcome-time-section{display:none}.welcome-actions{display:flex;align-items:center;gap:8px;flex:0 0 auto}.welcome-action{width:42px;height:42px;border-radius:999px;color:var(--primary-text-color);background:color-mix(in srgb,var(--card-background-color) 86%,var(--primary-background-color));box-shadow:0 8px 20px color-mix(in srgb,var(--primary-text-color) 10%,transparent),inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 8%,transparent)}.welcome-action ha-icon{--mdc-icon-size:21px}.welcome-subheader{justify-content:flex-start;gap:8px;margin-top:16px;overflow-x:auto;padding-bottom:2px;scrollbar-width:none}.welcome-subheader::-webkit-scrollbar{display:none}.welcome-alarm,.welcome-weather{min-width:auto;height:42px;padding:0 14px;justify-content:center;border-radius:999px;flex:0 0 auto;box-shadow:0 8px 18px rgba(15,23,42,0.08)}.alarm-text,.weather-temp{font-size:15px}.weather-label{font-size:11px}}@media (max-width:480px){.home-welcome{padding:calc(16px + env(safe-area-inset-top,0px)) 18px 14px;margin-bottom:14px}.welcome-header{gap:10px}.welcome-avatar{width:36px;height:36px}.welcome-title{font-size:14px}.welcome-return{font-size:11px}.welcome-action{width:40px;height:40px}.welcome-alarm,.welcome-weather{height:40px;padding:0 13px;font-size:14px}.alarm-text,.weather-temp{font-size:14px}.weather-label{font-size:11px}}.home-status-section{margin-bottom:48px}.home-status-heading{display:flex;align-items:center;gap:9px;margin:0 0 14px;color:var(--primary-text-color);font-size:20px;font-weight:850;line-height:1.1}.home-status-heading ha-icon{--mdc-icon-size:20px;width:30px;height:30px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.home-camera-section{--home-section-color:#ef4444;margin-bottom:36px}.home-camera-section .home-status-heading ha-icon{color:#ef4444;background:color-mix(in srgb,#ef4444 12%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,#ef4444 8%,transparent)}.home-summaries-section{--home-section-color:#f59e0b;margin-bottom:36px}.home-summaries-section .home-status-heading ha-icon{color:#f59e0b;background:color-mix(in srgb,#f59e0b 13%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,#f59e0b 9%,transparent)}.home-todos-section{--home-section-color:#7c3aed;margin-bottom:36px}.home-todos-section .home-status-heading ha-icon{color:#7c3aed;background:color-mix(in srgb,#7c3aed 12%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,#7c3aed 8%,transparent)}.home-todos-grid{width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));align-items:start;gap:12px}.home-todo-card,.home-todo-card dwains-dashboard-next-card-host{display:block;min-width:0}.home-custom-cards-section{--home-section-color:#0ea5a8;margin-bottom:36px}.home-custom-cards-section .home-status-heading ha-icon{color:#0ea5a8;background:color-mix(in srgb,#0ea5a8 12%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,#0ea5a8 20%,transparent)}.home-custom-cards-grid{width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));align-items:start;gap:12px}.home-custom-card,.home-custom-card dwains-dashboard-next-card-host{display:block;min-width:0}.home-scenes-section{--home-section-color:#db2777;position:relative;margin-bottom:36px}.home-scenes-section .home-status-heading ha-icon{color:var(--home-section-color);background:color-mix(in srgb,var(--home-section-color) 12%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--home-section-color) 8%,transparent)}.home-scenes-list{display:flex;flex-wrap:wrap;gap:10px}.home-scene-chip{--scene-color:var(--home-section-color,var(--primary-color));appearance:none;box-sizing:border-box;min-width:0;max-width:280px;min-height:56px;padding:8px 16px 8px 8px;display:inline-flex;align-items:center;gap:11px;border:1px solid color-mix(in srgb,var(--primary-text-color) 9%,transparent);border-radius:12px;background:var(--card-background-color);color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;box-shadow:0 8px 20px color-mix(in srgb,var(--primary-text-color) 5%,transparent);-webkit-tap-highlight-color:transparent;transition:transform 0.16s ease,border-color 0.16s ease,box-shadow 0.16s ease}.home-scene-chip:hover:not(:disabled){transform:translateY(-1px);border-color:color-mix(in srgb,var(--scene-color) 35%,transparent);box-shadow:0 12px 26px color-mix(in srgb,var(--scene-color) 13%,transparent)}.home-scene-chip:active:not(:disabled){transform:scale(0.97)}.home-scene-chip:focus-visible{outline:2px solid color-mix(in srgb,var(--scene-color) 70%,#ffffff);outline-offset:2px}.home-scene-chip:disabled{cursor:not-allowed;opacity:0.55;box-shadow:none}.home-scene-chip:disabled .home-scene-icon{color:var(--secondary-text-color);background:color-mix(in srgb,var(--secondary-text-color) 12%,transparent)}.home-scene-chip.is-pending{cursor:progress}.home-scene-icon{width:38px;height:38px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:9px;color:var(--scene-color);background:color-mix(in srgb,var(--scene-color) 14%,transparent);transition:color 0.2s ease,background-color 0.2s ease}.home-scene-icon ha-icon{--mdc-icon-size:21px}.home-scene-copy{min-width:0;display:flex;flex-direction:column;gap:2px}.home-scene-name{font-size:14px;font-weight:850;line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-scene-meta{min-width:0;display:flex;align-items:center;gap:6px;color:var(--secondary-text-color);font-size:12px;font-weight:700;line-height:1.25}.home-scene-meta-text{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-scene-chip.is-pending .home-scene-icon{animation:dd-scene-pending 0.9s ease-in-out infinite}.home-scene-chip.is-success{border-color:color-mix(in srgb,var(--success-color,#43a047) 45%,transparent)}.home-scene-chip.is-success .home-scene-icon{color:#ffffff;background:var(--success-color,#43a047);animation:dd-scene-done 0.3s ease-out}.home-scene-chip.is-success .home-scene-meta{color:var(--success-color,#43a047)}.home-scene-chip.is-running .home-scene-icon{color:#ffffff;background:var(--scene-color)}.home-scene-chip.is-running .home-scene-meta{color:var(--scene-color)}.home-scene-running-dot{width:7px;height:7px;flex:0 0 auto;border-radius:999px;background:currentColor;animation:dd-scene-running 1.2s ease-in-out infinite}@keyframes dd-scene-pending{50%{transform:scale(0.88);opacity:0.6}}@keyframes dd-scene-done{from{transform:scale(0.8)}to{transform:scale(1)}}@keyframes dd-scene-running{50%{opacity:0.25}}@media (prefers-reduced-motion:reduce){.home-scene-chip.is-pending .home-scene-icon,.home-scene-chip.is-success .home-scene-icon,.home-scene-running-dot{animation:none}.home-scene-chip.is-pending .home-scene-icon{opacity:0.6}.home-scene-chip:hover:not(:disabled),.home-scene-chip:active:not(:disabled){transform:none}}:host([data-theme-dark]) .home-scene-chip{background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 88%,#ffffff 4%),color-mix(in srgb,var(--card-background-color) 96%,#000000 4%));border-color:rgba(255,255,255,0.08);box-shadow:0 12px 26px rgba(0,0,0,0.24),inset 0 1px 0 rgba(255,255,255,0.04)}:host([data-theme-dark]) .home-scene-chip:not(.is-running,.is-success,:disabled) .home-scene-icon{background:color-mix(in srgb,var(--scene-color) 20%,transparent)}.dd-visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.home-summary-list{width:min(100%,980px);display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.home-summary-card{appearance:none;width:100%;min-height:68px;padding:12px 14px;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:13px;border:1px solid color-mix(in srgb,var(--primary-text-color) 9%,transparent);border-radius:10px;background:var(--card-background-color);color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;box-shadow:0 8px 20px color-mix(in srgb,var(--primary-text-color) 5%,transparent);transition:transform 0.16s ease,border-color 0.16s ease,box-shadow 0.16s ease}.home-summary-card:hover{transform:translateY(-1px);border-color:color-mix(in srgb,var(--summary-color) 35%,transparent);box-shadow:0 12px 26px color-mix(in srgb,var(--summary-color) 13%,transparent)}.home-summary-card:active{transform:scale(0.992)}.home-summary-card:focus-visible{outline:2px solid color-mix(in srgb,var(--summary-color) 70%,#ffffff);outline-offset:2px}.home-summary-icon{width:38px;height:38px;display:inline-flex;align-items:center;justify-content:center;border-radius:9px;color:var(--summary-color);background:color-mix(in srgb,var(--summary-color) 14%,transparent);flex:0 0 auto}.home-summary-icon ha-icon{--mdc-icon-size:21px}.home-summary-copy{min-width:0;display:flex;flex-direction:column;gap:2px}.home-summary-title{color:var(--primary-text-color);font-size:14px;font-weight:850;line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-summary-subtitle{color:var(--secondary-text-color);font-size:12px;font-weight:700;line-height:1.25;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-summary-chevron{width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;color:color-mix(in srgb,var(--primary-text-color) 48%,transparent);flex:0 0 auto}.home-summary-chevron ha-icon{--mdc-icon-size:20px}.home-camera-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px}.home-camera-card{position:relative;min-height:168px;overflow:hidden;border:0;border-radius:12px;display:flex;align-items:stretch;padding:0;background:color-mix(in srgb,var(--primary-text-color) 12%,var(--card-background-color));color:#ffffff;cursor:pointer;text-align:left;box-shadow:0 16px 32px rgba(15,23,42,0.12),inset 0 0 0 1px rgba(255,255,255,0.1);transition:transform 0.18s ease,box-shadow 0.18s ease}.home-camera-card:hover{transform:translateY(-2px);box-shadow:0 20px 42px rgba(15,23,42,0.16),inset 0 0 0 1px rgba(255,255,255,0.16)}.home-camera-card:focus-visible{outline:2px solid var(--primary-color);outline-offset:3px}.home-camera-image,.home-camera-placeholder{position:absolute;inset:0;background-size:cover;background-position:center;transform:scale(1.02)}.home-camera-placeholder{display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 20% 20%,rgba(var(--rgb-primary-color,3,169,244),0.28),transparent 34%),linear-gradient(135deg,#192133,#0f172a)}.home-camera-placeholder ha-icon{--mdc-icon-size:44px;color:rgba(255,255,255,0.58)}.home-camera-card::after{content:"";position:absolute;left:0;right:0;bottom:0;height:52%;background:linear-gradient(180deg,rgba(7,11,18,0) 0%,rgba(7,11,18,0.34) 42%,rgba(7,11,18,0.84) 100%);pointer-events:none}.home-camera-content{position:relative;z-index:1;width:100%;min-height:168px;padding:14px;display:flex;flex-direction:column;justify-content:space-between}.home-camera-top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}.home-camera-area-icon,.home-camera-count{min-width:36px;height:36px;border-radius:11px;display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.2);color:#ffffff;backdrop-filter:blur(12px);box-shadow:0 10px 24px rgba(15,23,42,0.16),inset 0 0 0 1px rgba(255,255,255,0.12)}.home-camera-area-icon ha-icon{--mdc-icon-size:20px}.home-camera-count{min-width:44px;padding:0 10px;gap:5px;border-radius:999px;font-size:12px;font-weight:850}.home-camera-count ha-icon{--mdc-icon-size:14px}.home-camera-copy{min-width:0;text-shadow:0 2px 12px rgba(0,0,0,0.62)}.home-camera-name{font-size:18px;font-weight:850;line-height:1.08;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-camera-meta{margin-top:5px;color:rgba(255,255,255,0.76);font-size:12px;font-weight:720;line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mobile-home-section,.mobile-section-heading{display:none}.layout-container.sidebar-collapsed .mobile-home-section.mobile-home-areas{display:block;margin:0 0 36px}.layout-container.sidebar-collapsed .mobile-home-areas .mobile-section-heading{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:0;margin-bottom:14px}.layout-container.sidebar-collapsed .mobile-home-areas .mobile-section-action{display:none}.layout-container.sidebar-collapsed .mobile-area-rail{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:16px;padding:0;overflow:visible;scroll-snap-type:none}.layout-container.sidebar-collapsed .mobile-area-card{appearance:none;position:relative;box-sizing:border-box;min-width:0;min-height:156px;padding:16px;display:flex;flex-direction:column;align-items:stretch;justify-content:space-between;overflow:hidden;border:1px solid color-mix(in srgb,var(--primary-text-color) 8%,transparent);border-radius:8px;background:color-mix(in srgb,var(--card-background-color) 96%,var(--primary-background-color));color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;box-shadow:0 14px 30px color-mix(in srgb,var(--primary-text-color) 8%,transparent);transition:transform 0.18s ease,border-color 0.18s ease,box-shadow 0.18s ease}.layout-container.sidebar-collapsed .mobile-area-card:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--primary-color) 22%,transparent);box-shadow:0 18px 38px color-mix(in srgb,var(--primary-text-color) 11%,transparent)}.layout-container.sidebar-collapsed .mobile-area-card.has-picture{min-height:176px;color:var(--mobile-area-picture-text-color,#ffffff);border-color:rgba(255,255,255,0.16);background:#182044;--mobile-area-picture-text-color:#ffffff;--mobile-area-picture-muted-text-color:rgba(255,255,255,0.76);--mobile-area-picture-text-shadow:0 2px 10px rgba(0,0,0,0.62);--mobile-area-picture-overlay:linear-gradient(180deg,rgba(12,18,32,0.02) 0%,rgba(12,18,32,0.18) 42%,rgba(12,18,32,0.84) 100%),linear-gradient(90deg,rgba(12,18,32,0.18),rgba(12,18,32,0.04))}.layout-container.sidebar-collapsed .mobile-area-picture{position:absolute;inset:0;z-index:0;background-size:cover;background-position:center;transform:scale(1.02)}.layout-container.sidebar-collapsed .mobile-area-card.has-picture::after{content:"";position:absolute;inset:0;z-index:1;background:var(--mobile-area-picture-overlay);pointer-events:none}.layout-container.sidebar-collapsed .mobile-area-top,.layout-container.sidebar-collapsed .mobile-area-copy{position:relative;z-index:2}.layout-container.sidebar-collapsed .mobile-area-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.layout-container.sidebar-collapsed .mobile-area-icon{width:44px;height:44px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:8px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 13%,transparent)}.layout-container.sidebar-collapsed .mobile-area-icon ha-icon{--mdc-icon-size:23px}.layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-icon{color:var(--mobile-area-picture-text-color,#ffffff);background:rgba(255,255,255,0.18);backdrop-filter:blur(12px)}.layout-container.sidebar-collapsed .mobile-area-badges{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:5px;min-width:0}.layout-container.sidebar-collapsed .mobile-area-badge{min-width:25px;height:25px;padding:0 8px;display:inline-flex;align-items:center;justify-content:center;gap:4px;border-radius:999px;color:var(--area-badge-color,var(--primary-color));background:color-mix(in srgb,var(--area-badge-color,var(--primary-color)) 12%,transparent);font-size:11px;font-weight:850}.layout-container.sidebar-collapsed .mobile-area-badge ha-icon{--mdc-icon-size:14px}.layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-badge{background:color-mix(in srgb,var(--area-badge-color,var(--primary-color)) 18%,rgba(255,255,255,0.88));backdrop-filter:blur(12px);box-shadow:0 4px 12px rgba(15,23,42,0.16)}.layout-container.sidebar-collapsed .mobile-area-name{font-size:16px;font-weight:850;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.layout-container.sidebar-collapsed .mobile-area-meta{margin-top:5px;color:color-mix(in srgb,var(--primary-text-color) 56%,transparent);font-size:12px;font-weight:700;line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-name,.layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-meta{color:var(--mobile-area-picture-text-color,#ffffff);text-shadow:var(--mobile-area-picture-text-shadow)}.layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-meta{color:var(--mobile-area-picture-muted-text-color,rgba(255,255,255,0.72))}.person-cards-section{margin-bottom:32px}.person-cards-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin:0 auto}.person-card{--person-color:#8a94a6;--person-bg:color-mix(in srgb,var(--person-color) 8%,var(--card-background-color));position:relative;min-height:98px;padding:16px 18px;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:16px;overflow:hidden;border:1px solid rgba(15,23,42,0.07);border-radius:18px;background:radial-gradient(circle at 90% 10%,color-mix(in srgb,var(--person-color) 15%,transparent),transparent 42%),var(--person-bg);cursor:pointer;box-shadow:0 16px 34px rgba(15,23,42,0.08),inset 0 0 0 1px rgba(255,255,255,0.34);transition:transform 0.18s ease,box-shadow 0.18s ease,border-color 0.18s ease}.person-card::after{content:"";position:absolute;left:18px;right:18px;bottom:0;height:3px;border-radius:999px 999px 0 0;background:var(--person-color);opacity:0.34}.person-card.home{--person-color:#2f9b62;--person-bg:color-mix(in srgb,#2f9b62 10%,var(--card-background-color))}.person-card.away{--person-color:#d88e20;--person-bg:color-mix(in srgb,#d88e20 9%,var(--card-background-color))}.person-card.unknown{--person-color:#7c67c7;--person-bg:color-mix(in srgb,#7c67c7 8%,var(--card-background-color))}.person-card:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--person-color) 24%,transparent);box-shadow:0 20px 42px rgba(15,23,42,0.12),inset 0 0 0 1px color-mix(in srgb,var(--person-color) 16%,transparent)}.person-card:active{transform:scale(0.988)}.person-card:focus-visible{outline:2px solid color-mix(in srgb,var(--person-color) 72%,#ffffff);outline-offset:3px}.person-avatar-wrapper{position:relative;z-index:1;flex-shrink:0}.person-avatar{width:64px;height:64px;border-radius:22px;overflow:hidden;background:color-mix(in srgb,var(--person-color) 14%,var(--secondary-background-color));display:flex;align-items:center;justify-content:center;border:3px solid color-mix(in srgb,var(--person-color) 26%,rgba(255,255,255,0.84));box-shadow:0 12px 24px color-mix(in srgb,var(--person-color) 16%,transparent)}.person-avatar img{width:100%;height:100%;object-fit:cover}.person-avatar ha-icon{--mdc-icon-size:34px;color:var(--person-color)}.person-home-indicator{position:absolute;bottom:-5px;right:-5px;width:26px;height:26px;background:var(--person-color);border-radius:999px;display:flex;align-items:center;justify-content:center;border:3px solid var(--card-background-color);box-shadow:0 8px 18px color-mix(in srgb,var(--person-color) 26%,transparent)}.person-home-indicator ha-icon{--mdc-icon-size:14px;color:var(--text-primary-color)}.person-info{position:relative;z-index:1;text-align:left;display:flex;flex-direction:column;gap:6px;flex:1;min-width:0}.person-name{font-size:18px;font-weight:850;color:var(--primary-text-color);line-height:1.15;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.person-status{display:inline-flex;width:max-content;max-width:100%;align-items:center;gap:6px;min-height:27px;padding:0 10px;border-radius:999px;background:color-mix(in srgb,var(--person-color) 12%,transparent);color:var(--person-color);font-size:14px;font-weight:800;line-height:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.person-status ha-icon{--mdc-icon-size:15px}.person-details{position:relative;z-index:1;display:flex;flex-direction:row;flex-wrap:wrap;gap:7px;align-items:flex-end;justify-content:flex-end;flex-shrink:0;margin-left:auto;max-width:170px}.person-battery,.person-distance{display:flex;align-items:center;gap:5px;min-height:28px;font-size:12px;font-weight:800;color:color-mix(in srgb,var(--primary-text-color) 72%,transparent);background:rgba(255,255,255,0.62);padding:0 9px;border-radius:999px;box-shadow:inset 0 0 0 1px rgba(15,23,42,0.04)}.person-battery ha-icon,.person-distance ha-icon{--mdc-icon-size:14px}.person-battery ha-icon{color:var(--success-color)}.person-battery ha-icon[icon*="alert"]{color:var(--error-color)}.person-distance ha-icon{color:var(--primary-color)}@media (max-width:768px){.person-cards-grid{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px}.person-card{padding:16px}.person-avatar{width:64px;height:64px}.person-avatar ha-icon{--mdc-icon-size:36px}.person-name{font-size:16px}.person-status{font-size:13px}.person-details{gap:8px}.person-battery,.person-distance{font-size:12px;padding:3px 6px}}.home-status-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:20px;margin:0 auto}.home-status-card{background:var(--card-background-color);border-radius:20px;padding:24px 20px;text-align:center;cursor:pointer;transition:all 0.3s ease;border:1px solid var(--divider-color);position:relative;overflow:hidden}.home-status-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--primary-color),var(--accent-color));opacity:0;transition:opacity 0.3s ease}.home-status-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,0.15);border-color:var(--primary-color)}.home-status-card:hover::before{opacity:1}.home-status-card .status-card-icon{position:relative;margin-bottom:16px}.home-status-card .status-card-icon ha-icon{--mdc-icon-size:36px;color:var(--primary-color);transition:transform 0.3s ease}.home-status-card:hover .status-card-icon ha-icon{transform:scale(1.1)}.home-status-card .status-card-badge{position:absolute;top:-10px;right:-10px;background:var(--accent-color);color:white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,0.2)}.home-status-card .status-card-title{font-size:15px;font-weight:600;color:var(--primary-text-color);margin-top:8px}.area-info-badges{position:absolute;top:5px;right:0px;display:flex;flex-wrap:wrap;gap:6px;max-width:calc(59% - 24px);justify-content:flex-end;align-items:flex-start;z-index:2}.info-badge{display:flex;align-items:center;gap:4px;padding:4px 8px;background:var(--secondary-background-color);border-radius:12px;font-size:12px;flex-shrink:0;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.1)}.info-badge ha-icon{--mdc-icon-size:14px}.info-badge.light{background:color-mix(in srgb,var(--badge-color,#e1a129) 10%,var(--card-background-color));color:var(--badge-color,#e1a129)}.info-badge.switch{background:color-mix(in srgb,var(--badge-color,#2f6fd6) 10%,var(--card-background-color));color:var(--badge-color,#2f6fd6)}.info-badge.climate{background:color-mix(in srgb,var(--badge-color,#34a6d8) 10%,var(--card-background-color));color:var(--badge-color,#34a6d8)}.info-badge.media_player{background:color-mix(in srgb,var(--badge-color,#7c67c7) 10%,var(--card-background-color));color:var(--badge-color,#7c67c7)}.info-badge.cover{background:color-mix(in srgb,var(--badge-color,#1494aa) 10%,var(--card-background-color));color:var(--badge-color,#1494aa)}.info-badge.fan{background:color-mix(in srgb,var(--badge-color,#2b8fcb) 10%,var(--card-background-color));color:var(--badge-color,#2b8fcb)}.info-badge.motion{background:color-mix(in srgb,var(--badge-color,#df5b63) 10%,var(--card-background-color));color:var(--badge-color,#df5b63)}.info-badge.alerts{background:color-mix(in srgb,var(--error-color) 10%,var(--card-background-color));color:var(--error-color)}.sidebar .info-badge{padding:2px 6px;font-size:11px;border-radius:12px}.sidebar .info-badge ha-icon{--mdc-icon-size:12px}.sidebar .badge-count{min-width:14px;text-align:center}.info-badge.clickable{cursor:pointer;transition:all 0.2s ease}.info-badge.clickable:hover{transform:scale(1.05);filter:brightness(1.1)}:host{--purple-color:#9c27b0;--blue-color:#2196f3}.area-view{max-width:1400px;margin:0 auto}.entities-section{display:grid;gap:16px}.domain-group{background:var(--card-background-color);border-radius:12px;padding:16px}.domain-header{display:flex;align-items:center;gap:8px;margin-bottom:12px;font-size:16px;font-weight:500}.domain-header ha-icon{--mdc-icon-size:20px;opacity:0.8}.entities-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:8px}.entities-grid.cover-entities-grid{grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:12px}.entities-grid.light-entities-grid{grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:12px}.entities-grid.sensor-entities-grid{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px}.entities-grid.motion-entities-grid{grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px}.entity-card-wrapper{min-height:60px;position:relative}.cover-entity-card,.light-entity-card,.motion-entity-card{min-height:72px}.sensor-entity-card{min-height:150px}.cover-entity-card dwains-dashboard-next-card-host,.light-entity-card dwains-dashboard-next-card-host,.sensor-entity-card dwains-dashboard-next-card-host,.motion-entity-card dwains-dashboard-next-card-host{display:block}.mobile-area-overview,.mobile-entities-section{display:none}.area-view .mobile-entities-section{display:grid;position:relative;z-index:2}.mobile-entities-section{gap:22px}.mobile-domain-group{min-width:0;position:relative}.mobile-domain-group.group-editing{border-radius:8px;transition:opacity 0.16s ease,outline-color 0.16s ease,background-color 0.16s ease}.mobile-domain-group.group-dragging{opacity:0.46}.mobile-domain-group.group-drag-over{outline:2px solid var(--primary-color);outline-offset:7px;background:color-mix(in srgb,var(--primary-color) 5%,transparent)}.mobile-domain-group:not(.menu-open){contain:layout style paint}.mobile-domain-group.menu-open{z-index:1200}.mobile-domain-header{position:relative;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 2px;margin-bottom:10px}.mobile-domain-title{display:inline-flex;align-items:center;gap:8px;min-width:0}.mobile-domain-header-actions{display:inline-flex;align-items:center;gap:2px;flex:0 0 auto}.mobile-domain-order-button,.mobile-domain-drag-handle{width:30px;height:30px;padding:0;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 78%,transparent);color:var(--secondary-text-color);cursor:pointer}.mobile-domain-drag-handle{cursor:grab;touch-action:none}.mobile-domain-drag-handle:active{cursor:grabbing}.mobile-domain-order-button:disabled{opacity:0.28;cursor:default}.mobile-domain-order-button ha-icon,.mobile-domain-drag-handle ha-icon{--mdc-icon-size:18px}.mobile-layout-toggle{width:30px;height:30px;padding:0;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border:0;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 72%,#ffffff);color:color-mix(in srgb,var(--primary-text-color) 58%,transparent);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.05);cursor:pointer;transition:background-color 0.18s ease,color 0.18s ease,transform 0.18s ease}.mobile-layout-toggle.active{background:#182044;color:#ffffff;box-shadow:0 8px 18px rgba(15,23,42,0.14)}.mobile-layout-toggle:active{transform:scale(0.94)}.mobile-layout-toggle ha-icon{--mdc-icon-size:17px}.mobile-layout-toggle.static{cursor:default;pointer-events:none}.mobile-section-icon{width:30px;height:30px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:999px;color:var(--home-section-color,var(--primary-color));background:color-mix(in srgb,var(--home-section-color,var(--primary-color)) 12%,transparent)}.mobile-section-icon ha-icon{--mdc-icon-size:17px}.mobile-section-tools{display:inline-flex;align-items:center;gap:6px;flex:0 0 auto}.mobile-section-toggle{appearance:none;width:28px;height:28px;padding:0;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border:0;border-radius:999px;background:transparent;color:var(--secondary-text-color);cursor:pointer;transition:background-color 0.18s ease,color 0.18s ease,transform 0.18s ease}.mobile-section-toggle:hover{background:color-mix(in srgb,var(--primary-text-color) 7%,transparent);color:var(--primary-text-color)}.mobile-section-toggle:active{transform:scale(0.94)}.mobile-section-toggle:focus-visible,.mobile-section-action:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}.mobile-section-toggle ha-icon{--mdc-icon-size:18px}.mobile-domain-title-copy{min-width:0;display:inline-flex;align-items:baseline;gap:7px}.mobile-domain-title-label{color:var(--primary-text-color);font-size:18px;font-weight:900;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mobile-domain-count{color:color-mix(in srgb,var(--primary-text-color) 42%,transparent);font-size:12px;font-weight:850;line-height:1.1;white-space:nowrap}.mobile-domain-master{--mobile-domain-accent:var(--primary-color);min-width:58px;height:30px;padding:0 5px 0 7px;display:inline-flex;align-items:center;justify-content:space-between;gap:6px;border:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent);border-radius:999px;background:color-mix(in srgb,var(--card-background-color) 92%,transparent);color:color-mix(in srgb,var(--primary-text-color) 54%,transparent);cursor:pointer;transition:background-color 0.18s ease,border-color 0.18s ease,color 0.18s ease,transform 0.18s ease;z-index:1202}.mobile-domain-master.domain-light{--mobile-domain-accent:#e89a17}.mobile-domain-master.domain-switch,.mobile-domain-master.domain-input_boolean{--mobile-domain-accent:#3275d6}.mobile-domain-master.domain-cover{--mobile-domain-accent:#0d98aa}.mobile-domain-master.domain-fan{--mobile-domain-accent:#2d9d79}.mobile-domain-master.domain-lock{--mobile-domain-accent:#7657c8}.mobile-domain-master.active{border-color:color-mix(in srgb,var(--mobile-domain-accent) 42%,transparent);background:color-mix(in srgb,var(--mobile-domain-accent) 11%,var(--card-background-color));color:var(--mobile-domain-accent)}.mobile-domain-master:active{transform:scale(0.94)}.mobile-domain-master ha-icon{--mdc-icon-size:16px}.mobile-domain-master-track{position:relative;width:26px;height:16px;flex:0 0 auto;border-radius:999px;background:color-mix(in srgb,var(--primary-text-color) 18%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 6%,transparent);transition:background-color 0.18s ease}.mobile-domain-master-track::after{content:"";position:absolute;top:3px;left:3px;width:10px;height:10px;border-radius:50%;background:#ffffff;box-shadow:0 1px 4px rgba(15,23,42,0.24);transition:transform 0.18s ease}.mobile-domain-master.active .mobile-domain-master-track{background:var(--mobile-domain-accent)}.mobile-domain-master.active .mobile-domain-master-track::after{transform:translateX(10px)}.mobile-domain-master-actions{--mobile-domain-accent:var(--primary-color);height:30px;display:inline-flex;align-items:center;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent);border-radius:999px;background:color-mix(in srgb,var(--card-background-color) 92%,transparent);color:color-mix(in srgb,var(--primary-text-color) 58%,transparent);z-index:1202}.mobile-domain-master-actions.domain-cover{--mobile-domain-accent:#0d98aa}.mobile-domain-master-actions.domain-lock{--mobile-domain-accent:#7657c8}.mobile-domain-master-action{width:34px;height:30px;padding:0;display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:inherit;cursor:pointer;transition:background-color 0.18s ease,color 0.18s ease,transform 0.18s ease}.mobile-domain-master-action + .mobile-domain-master-action{border-left:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent)}.mobile-domain-master-action:hover,.mobile-domain-master-action.active{background:color-mix(in srgb,var(--mobile-domain-accent) 12%,var(--card-background-color));color:var(--mobile-domain-accent)}.mobile-domain-master-action:active{transform:scale(0.88)}.mobile-domain-master-action ha-icon{--mdc-icon-size:17px}.mobile-entity-rail{display:flex;gap:10px;margin:0 -10px;padding:0 10px 2px;overflow-x:auto;scroll-padding:10px;scroll-snap-type:x proximity;scrollbar-width:none}.mobile-entity-rail::-webkit-scrollbar{display:none}.mobile-entities-section.layout-grid{gap:26px}.mobile-entities-section.layout-grid .mobile-entity-rail{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin:0;padding:0;overflow:visible;scroll-snap-type:none;align-items:stretch}.mobile-entities-section.layout-grid .mobile-entity-card{width:100%;min-width:0;box-sizing:border-box;flex:none;scroll-snap-align:none}@media (max-width:380px){.mobile-entities-section.layout-grid .mobile-entity-rail{grid-template-columns:1fr}}.mobile-entity-card{--entity-color:var(--primary-color);position:relative;box-sizing:border-box;contain:layout style;flex:0 0 164px;min-width:0;min-height:128px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;border:0;border-radius:10px;background:color-mix(in srgb,var(--card-background-color) 98%,#ffffff);color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;scroll-snap-align:start;box-shadow:0 12px 26px rgba(15,23,42,0.06),inset 0 0 0 1px rgba(15,23,42,0.035);transition:transform 0.18s ease,box-shadow 0.18s ease}.mobile-entity-replacement-card{box-sizing:border-box;flex:0 0 260px;min-width:0;scroll-snap-align:start}.mobile-entity-replacement-card dwains-dashboard-next-card-host{display:block;width:100%}.mobile-todo-list-card{box-sizing:border-box;flex:0 0 min(100%,520px);width:min(100%,520px);min-width:min(100%,320px);scroll-snap-align:start}.mobile-todo-list-card dwains-dashboard-next-card-host{display:block;width:100%}.mobile-entities-section.layout-grid .mobile-entity-replacement-card{width:100%;flex:none;scroll-snap-align:none}.mobile-entities-section.layout-grid .mobile-todo-list-card{grid-column:1 / -1;width:100%;min-width:0;flex:none;scroll-snap-align:none}.mobile-entity-card:active{transform:scale(0.985)}.mobile-entity-card.is-active{box-shadow:0 14px 30px rgba(15,23,42,0.08),inset 0 0 0 1px color-mix(in srgb,var(--entity-color) 18%,transparent)}.mobile-entity-card.is-unavailable{opacity:0.62}.mobile-entity-top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}.mobile-entity-icon{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:11px;color:var(--entity-color);background:color-mix(in srgb,var(--entity-color) 13%,transparent)}.mobile-entity-icon ha-icon{--mdc-icon-size:20px}.mobile-entity-action{padding:0;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border:0;cursor:pointer;transition:background-color 0.18s ease,color 0.18s ease,transform 0.18s ease,opacity 0.18s ease}.mobile-entity-action:active{transform:scale(0.94)}.mobile-entity-action:disabled{opacity:0.36;cursor:not-allowed}.mobile-entity-toggle{width:38px;height:22px;justify-content:flex-start;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 80%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.07),0 4px 10px rgba(15,23,42,0.08)}.mobile-entity-toggle::before{content:"";width:18px;height:18px;margin-left:2px;border-radius:999px;background:#ffffff;box-shadow:0 2px 7px rgba(15,23,42,0.2);transition:transform 0.18s ease}.mobile-entity-card.is-active .mobile-entity-toggle{background:var(--entity-color)}.mobile-entity-card.is-active .mobile-entity-toggle::before{transform:translateX(16px)}.mobile-entity-more,.mobile-scene-action,.mobile-lock-action{width:30px;height:30px;border-radius:999px;color:color-mix(in srgb,var(--primary-text-color) 52%,transparent);background:color-mix(in srgb,var(--secondary-background-color) 70%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.05)}.mobile-lock-action.is-unlocked{color:#ffffff;background:var(--entity-color);box-shadow:0 8px 16px color-mix(in srgb,var(--entity-color) 24%,transparent)}.mobile-entity-more ha-icon,.mobile-scene-action ha-icon,.mobile-lock-action ha-icon{--mdc-icon-size:17px}.mobile-cover-actions{min-height:32px;padding:3px;display:inline-flex;align-items:center;gap:3px;flex:0 0 auto;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 74%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.055),0 6px 14px rgba(15,23,42,0.08)}.mobile-cover-action{width:26px;height:26px;border-radius:999px;color:color-mix(in srgb,var(--primary-text-color) 58%,transparent);background:transparent}.mobile-cover-action.active{color:#ffffff;background:var(--entity-color);box-shadow:0 6px 12px color-mix(in srgb,var(--entity-color) 22%,transparent)}.mobile-cover-action ha-icon{--mdc-icon-size:16px}.mobile-entities-section.layout-grid .mobile-cover-actions{min-height:30px;padding:3px;gap:2px}.mobile-entities-section.layout-grid .mobile-cover-action{width:24px;height:24px}.mobile-entities-section.layout-grid .mobile-cover-action ha-icon{--mdc-icon-size:15px}@media (max-width:430px){.mobile-entities-section.layout-grid .mobile-entity-card{min-height:138px;padding:12px}.mobile-entities-section.layout-grid .mobile-entity-top{gap:6px}.mobile-entities-section.layout-grid .mobile-entity-icon{width:34px;height:34px}.mobile-entities-section.layout-grid .mobile-cover-actions{min-height:28px;padding:2px;gap:1px}.mobile-entities-section.layout-grid .mobile-cover-action{width:23px;height:23px}.mobile-entities-section.layout-grid .mobile-cover-action ha-icon{--mdc-icon-size:14px}}.mobile-entity-meta{color:color-mix(in srgb,var(--primary-text-color) 42%,transparent);font-size:11px;font-weight:750;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mobile-entity-name{margin-top:3px;color:var(--primary-text-color);font-size:15px;font-weight:900;line-height:1.08;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.mobile-entity-status{margin-top:5px;color:color-mix(in srgb,var(--primary-text-color) 46%,transparent);font-size:11px;font-weight:750;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mobile-entity-content{min-width:0}.mobile-entity-card.has-inline-select{min-height:170px;justify-content:flex-start;gap:10px}.mobile-entity-card.has-inline-select .mobile-entity-content{margin-top:auto}.mobile-entity-card.has-inline-select .mobile-entity-status{display:none}.mobile-entity-select{position:relative;display:block;width:100%}.mobile-entity-select select{width:100%;height:34px;padding:0 34px 0 12px;border:0;border-radius:999px;outline:none;appearance:none;-webkit-appearance:none;color:var(--primary-text-color);background:color-mix(in srgb,var(--entity-color) 10%,var(--secondary-background-color));font:inherit;font-size:12px;font-weight:850;line-height:34px;cursor:pointer;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--entity-color) 16%,transparent),0 8px 18px rgba(15,23,42,0.06)}.mobile-entity-select select:focus{box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--entity-color) 72%,transparent),0 10px 22px color-mix(in srgb,var(--entity-color) 14%,transparent)}.mobile-entity-select select:disabled{opacity:0.55;cursor:not-allowed}.mobile-entity-select ha-icon{position:absolute;top:50%;right:10px;transform:translateY(-50%);color:color-mix(in srgb,var(--entity-color) 72%,var(--primary-text-color));pointer-events:none;--mdc-icon-size:18px}@media (min-width:769px){.area-view .dd-generated-card-wrap.editing,.area-view .mobile-entities-section.layout-grid .dd-generated-card-wrap.editing{width:100%;min-width:0;flex:none;scroll-snap-align:none}.area-view .mobile-entities-section{gap:28px;margin-top:20px}.area-view .mobile-domain-group{min-width:0}.area-view .mobile-domain-header{padding:0;margin-bottom:12px}.area-view .mobile-layout-toggle{display:none}.area-view .mobile-domain-title{gap:0}.area-view .mobile-domain-title-label{font-size:20px}.area-view .mobile-domain-count{font-size:12px}.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{display:grid;grid-template-columns:repeat(auto-fill,minmax(178px,1fr));gap:14px;margin:0;padding:0;overflow:visible;scroll-padding:0;scroll-snap-type:none;align-items:stretch}.area-view .mobile-entity-card,.area-view .mobile-entities-section.layout-grid .mobile-entity-card{width:100%;min-width:0;min-height:152px;flex:none;padding:16px;border-radius:12px;scroll-snap-align:none}.area-view .mobile-entity-card:hover{transform:translateY(-1px);box-shadow:0 16px 32px rgba(15,23,42,0.08),inset 0 0 0 1px rgba(15,23,42,0.045)}.area-view .mobile-entity-card.has-inline-select{min-height:178px}.area-view .mobile-entity-icon,.area-view .mobile-entities-section.layout-grid .mobile-entity-icon{width:38px;height:38px;border-radius:11px}.area-view .mobile-entity-icon ha-icon{--mdc-icon-size:21px}.area-view .mobile-entity-name{font-size:15px}.area-view .mobile-entity-status{font-size:11px}.area-view .mobile-cover-actions,.area-view .mobile-entities-section.layout-grid .mobile-cover-actions{min-height:32px;padding:3px;gap:3px}.area-view .mobile-cover-action,.area-view .mobile-entities-section.layout-grid .mobile-cover-action{width:26px;height:26px}.area-view .mobile-cover-action ha-icon,.area-view .mobile-entities-section.layout-grid .mobile-cover-action ha-icon{--mdc-icon-size:16px}.area-view .mobile-entity-rail .dd-custom-card-wrap,.area-view .mobile-entity-rail .dd-domain-add-card,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail .dd-custom-card-wrap,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card{width:100%;min-width:0;flex:none;scroll-snap-align:none}.area-view .mobile-todo-list-card,.area-view .mobile-entities-section.layout-grid .mobile-todo-list-card{grid-column:1 / -1;width:100%;max-width:760px;min-width:0;flex:none;scroll-snap-align:none}}@media (min-width:1200px){.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{grid-template-columns:repeat(auto-fill,minmax(190px,1fr))}}.sidebar-divider{height:1px;background:var(--divider-color);margin:8px 12px}.dd-add-page{width:100%;box-sizing:border-box;margin-top:12px;display:inline-flex;align-items:center;gap:8px;padding:12px;border:1px dashed var(--divider-color);border-radius:10px;background:transparent;color:var(--secondary-text-color);cursor:pointer;font-size:14px;transition:background-color .2s ease,color .2s ease,border-color .2s ease}.dd-add-page:hover{color:var(--primary-color);border-color:var(--primary-color);background:rgba(var(--rgb-primary-color,3,169,244),.08)}.dd-add-page ha-icon{--mdc-icon-size:20px}.dd-page-card{margin-top:8px}.dd-page-card dwains-dashboard-next-card-host{display:block}.dd-custom-section{margin:12px 0;min-width:0}.dd-custom-section.after-domain{margin:12px 0 2px}.dd-custom-section.editing{padding:10px;border:1px dashed color-mix(in srgb,var(--primary-color) 28%,transparent);border-radius:12px;background:color-mix(in srgb,var(--primary-color) 4%,transparent)}.dd-custom-section.drag-over{border-color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 10%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-color) 22%,transparent)}.dd-custom-slot-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px;color:color-mix(in srgb,var(--primary-text-color) 60%,transparent);font-size:12px;font-weight:800;line-height:1.2}.dd-custom-slot-title{display:inline-flex;align-items:center;gap:6px;min-width:0}.dd-custom-slot-title ha-icon{--mdc-icon-size:16px;color:var(--primary-color)}.dd-custom-slot-title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dd-custom-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:8px;container-type:inline-size}.dd-custom-grid>.dd-custom-card-wrap,.dd-custom-grid>.dd-add-card{--dd-card-default-column:span 4;grid-column:var(--dd-card-grid-column,var(--dd-card-default-column));min-height:var(--dd-card-grid-min-height,0)}.dd-custom-card-wrap{position:relative;min-width:0;border-radius:12px}.dd-custom-card-wrap.editing{outline:1px solid color-mix(in srgb,var(--divider-color) 78%,transparent);outline-offset:2px;cursor:grab}.dd-generated-card-wrap{display:contents}.dd-generated-card-wrap.editing{position:relative;display:block;box-sizing:border-box;flex:0 0 164px;min-width:0;scroll-snap-align:start;cursor:grab;outline:1px dashed color-mix(in srgb,var(--primary-color) 38%,var(--divider-color));outline-offset:2px;border-radius:12px;transition:opacity 0.16s ease,outline-color 0.16s ease,transform 0.16s ease}.dd-generated-card-wrap.editing>.mobile-entity-card,.dd-generated-card-wrap.editing>.mobile-entity-replacement-card,.dd-generated-card-wrap.editing>.mobile-todo-list-card{width:100%;min-width:0;pointer-events:none}.dd-generated-card-wrap.editing.is-hidden>:not(.dd-generated-card-toolbar){opacity:0.38;filter:saturate(0.45)}.dd-generated-card-wrap.editing.dragging{opacity:0.42;cursor:grabbing}.dd-generated-card-wrap.editing.drag-over{outline-color:var(--primary-color);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary-color) 14%,transparent);transform:translateY(-2px)}.dd-generated-card-toolbar{position:absolute;top:7px;right:7px;z-index:6;display:flex;gap:4px;padding:3px;border-radius:999px;background:color-mix(in srgb,var(--card-background-color) 94%,transparent);box-shadow:0 2px 10px rgba(0,0,0,0.16);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}.dd-generated-card-toolbar button{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--primary-text-color);cursor:pointer}.dd-generated-card-toolbar button:first-child{color:var(--primary-color);cursor:grab}.dd-generated-card-toolbar button:hover,.dd-generated-card-toolbar button:focus-visible{background:color-mix(in srgb,var(--primary-color) 12%,transparent);outline:none}.dd-generated-card-toolbar ha-icon{--mdc-icon-size:17px}.mobile-entities-section.layout-grid .dd-generated-card-wrap.editing{width:100%;min-width:0;flex:none;scroll-snap-align:none}.dd-custom-card-wrap.dragging{opacity:0.48;cursor:grabbing}.dd-custom-card-wrap.drag-over{outline-color:var(--primary-color);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary-color) 12%,transparent)}.dd-card-toolbar{position:absolute;top:6px;right:6px;z-index:4;display:none;gap:4px}.dd-custom-card-wrap.editing .dd-card-toolbar{display:flex}.dd-card-toolbar button{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;border:none;cursor:pointer;background:var(--card-background-color);box-shadow:0 1px 4px rgba(0,0,0,.2);color:var(--primary-text-color)}.dd-card-toolbar button.del:hover{color:var(--error-color,#f44336)}.dd-card-toolbar ha-icon{--mdc-icon-size:18px}.dd-card-toolbar button.drag{cursor:grab;color:var(--primary-color)}.dd-card-toolbar button.drag:active{cursor:grabbing}.dd-add-card-inline,.dd-add-card{display:flex;align-items:center;justify-content:center;gap:8px;min-height:72px;width:100%;border:2px dashed var(--divider-color);border-radius:12px;background:transparent;cursor:pointer;color:var(--secondary-text-color);font-weight:600;font-size:.9rem;transition:border-color .2s ease,color .2s ease,background-color .2s ease}.dd-add-card:hover{border-color:var(--primary-color);color:var(--primary-color);background:rgba(var(--rgb-primary-color,3,169,244),.06)}.dd-add-card-inline{min-height:32px;width:auto;padding:0 12px;border-radius:999px;border-width:1px;font-size:12px;white-space:nowrap}.dd-add-card-inline ha-icon{--mdc-icon-size:16px}.dd-add-card ha-icon{--mdc-icon-size:22px}.dd-domain-add-card{min-height:72px;border-width:1px;background:color-mix(in srgb,var(--secondary-background-color) 54%,transparent);opacity:0.82}.dd-domain-add-card:hover,.dd-domain-add-card.drag-over{opacity:1;border-color:var(--primary-color);color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 8%,var(--card-background-color));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-color) 18%,transparent)}.entities-grid .dd-custom-card-wrap,.entities-grid .dd-domain-add-card{min-width:0}.entities-grid>.dd-custom-card-wrap.dd-grid-full,.mobile-entities-section.layout-grid .mobile-entity-rail>.dd-custom-card-wrap.dd-grid-full{grid-column:1 / -1;width:100%}.mobile-entity-rail .dd-custom-card-wrap,.mobile-entity-rail .dd-domain-add-card{box-sizing:border-box;flex:0 0 164px;min-width:0;scroll-snap-align:start}.mobile-entity-rail>.dd-custom-card-wrap.dd-grid-full{flex-basis:calc(100% - 20px)}.mobile-entity-rail .dd-domain-add-card{min-height:128px}.mobile-entities-section.layout-grid .mobile-entity-rail .dd-custom-card-wrap,.mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card{width:100%;flex:none;scroll-snap-align:none}.mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card{min-height:138px}@container (max-width:899px){.dd-custom-grid>.dd-custom-card-wrap,.dd-custom-grid>.dd-add-card{--dd-card-default-column:span 6}}@container (max-width:559px){.dd-custom-grid>.dd-custom-card-wrap,.dd-custom-grid>.dd-add-card{--dd-card-default-column:span 12}}.entity-card-wrapper.loading{background:var(--secondary-background-color);border-radius:8px;display:flex;align-items:center;justify-content:center}.skeleton{background:linear-gradient(90deg,var(--secondary-background-color) 25%,var(--primary-background-color) 50%,var(--secondary-background-color) 75%);background-size:200% 100%;animation:loading 1.5s infinite;border-radius:8px}@keyframes loading{0%{background-position:200% 0}100%{background-position:-200% 0}}@media (max-width:768px){.sidebar{position:fixed;right:0;top:0;width:280px;flex-basis:auto;height:100%;transform:translateX(100%);z-index:121;box-shadow:-4px 0 12px rgba(0,0,0,0.15)}.sidebar-resize-handle{display:none}.sidebar-collapse-toggle{display:none}.floor-areas{display:flex;flex-direction:column;gap:0}.area-button{margin-bottom:8px}.sidebar.open{transform:translateX(0)}.mobile-nav-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:120;opacity:0;pointer-events:none;transition:opacity 0.3s ease}.mobile-nav-overlay.open{opacity:1;pointer-events:auto}.global-header{padding:12px}.header-time{font-size:20px}.entities-grid{grid-template-columns:1fr}.global-header.mobile .header-expand-button[data-extra-count]::after{right:-8px}.mobile-home-section,.home-camera-section,.home-status-section,.home-todos-section,.home-custom-cards-section,.home-favorites-section,.home-summaries-section,.mobile-domain-group,.mobile-entities-section.layout-grid .mobile-entity-card{content-visibility:visible;contain-intrinsic-size:auto}}.dd-empty-state{max-width:420px;margin:32px auto;padding:24px 20px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;color:var(--secondary-text-color)}.area-view-missing{padding-top:48px}.dd-empty-state-icon{width:56px;height:56px;margin-bottom:4px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.dd-empty-state-icon ha-icon{--mdc-icon-size:28px}.dd-empty-state-title{color:var(--primary-text-color);font-size:17px;font-weight:800;line-height:1.25}.dd-empty-state-text{font-size:14px;line-height:1.45}.dd-empty-state-actions{margin-top:10px;display:flex;flex-wrap:wrap;justify-content:center;gap:8px}.dd-empty-state-button{appearance:none;min-height:36px;padding:0 14px;display:inline-flex;align-items:center;gap:6px;border:0;border-radius:999px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);font:inherit;font-size:13px;font-weight:750;cursor:pointer;transition:background-color 0.18s ease,transform 0.18s ease}.dd-empty-state-button:hover{background:color-mix(in srgb,var(--primary-color) 18%,transparent)}.dd-empty-state-button:active{transform:scale(0.97)}.dd-empty-state-button:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}.dd-empty-state-button.primary{background:var(--primary-color);color:var(--text-primary-color,#ffffff)}.dd-empty-state-button ha-icon{--mdc-icon-size:18px}.home-no-areas{margin:0 0 36px;padding:16px;display:flex;align-items:center;gap:14px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color)}.home-no-areas-icon{width:42px;height:42px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:13px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.home-no-areas-copy{min-width:0;flex:1 1 auto}.home-no-areas-title{color:var(--primary-text-color);font-size:15px;font-weight:800;line-height:1.2}.home-no-areas-text{margin-top:2px;color:var(--secondary-text-color);font-size:13px;line-height:1.35}.home-no-areas .dd-empty-state-button{flex:0 0 auto;padding:0 10px 0 14px}@media (max-width:768px){.home-no-areas{margin:0 8px 18px;flex-wrap:wrap}.home-no-areas-copy{flex:1 1 180px}.home-no-areas .dd-empty-state-button{margin-left:56px}}.favorites-section{margin-bottom:24px}.favorites-header{display:flex;align-items:center;gap:8px;margin-bottom:12px;font-size:18px;font-weight:500}.favorites-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px}.favorite-card-wrapper{--favorite-color:var(--primary-color);appearance:none;position:relative;box-sizing:border-box;min-width:0;min-height:116px;padding:14px 14px 13px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;border:0;border-radius:9px;background:color-mix(in srgb,var(--card-background-color) 98%,#ffffff);color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;box-shadow:0 12px 26px rgba(15,23,42,0.06),inset 0 0 0 1px rgba(15,23,42,0.035);transition:transform 0.18s ease,box-shadow 0.18s ease,background-color 0.18s ease}.favorite-card-wrapper:hover{transform:translateY(-2px);box-shadow:0 16px 30px rgba(15,23,42,0.1),inset 0 0 0 1px color-mix(in srgb,var(--favorite-color) 20%,transparent)}.favorite-card-wrapper:active{transform:scale(0.985)}.favorite-card-wrapper:focus-visible,.favorite-quick-action:focus-visible{outline:2px solid color-mix(in srgb,var(--favorite-color) 72%,#ffffff);outline-offset:3px}.favorite-card-wrapper.is-off,.favorite-card-wrapper.is-idle{--favorite-color:color-mix(in srgb,var(--secondary-text-color) 56%,var(--primary-color))}.favorite-card-wrapper.favorite-light{--favorite-color:#e1a129}.favorite-card-wrapper.favorite-switch{--favorite-color:#2f6fd6}.favorite-card-wrapper.favorite-cover{--favorite-color:#1494aa}.favorite-card-wrapper.favorite-binary_sensor,.favorite-card-wrapper.favorite-motion{--favorite-color:#df5b63}.favorite-card-wrapper.favorite-climate,.favorite-card-wrapper.favorite-weather{--favorite-color:#34a6d8}.favorite-card-wrapper.favorite-media_player{--favorite-color:#7c67c7}.favorite-card-wrapper.favorite-person{--favorite-color:#6d7891}.favorite-card-wrapper.favorite-sun{--favorite-color:#2d7eea}.favorite-top,.favorite-body{position:relative;z-index:1}.favorite-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.favorite-icon{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:10px;color:var(--favorite-color);background:color-mix(in srgb,var(--favorite-color) 13%,transparent)}.favorite-icon ha-icon{--mdc-icon-size:19px}.favorite-quick-action{--toggle-track:color-mix(in srgb,var(--secondary-background-color) 80%,#ffffff);width:38px;height:22px;padding:0;display:inline-flex;align-items:center;justify-content:flex-start;flex:0 0 auto;border:0;border-radius:999px;color:transparent;background:var(--toggle-track);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.07),0 4px 10px rgba(15,23,42,0.08);font:inherit;cursor:pointer;transition:transform 0.18s ease,background-color 0.18s ease}.favorite-quick-action::before{content:"";width:18px;height:18px;margin-left:2px;border-radius:999px;background:#ffffff;box-shadow:0 2px 7px rgba(15,23,42,0.2);transition:transform 0.18s ease,background-color 0.18s ease}.favorite-card-wrapper.is-active .favorite-quick-action{background:var(--favorite-color)}.favorite-card-wrapper.is-active .favorite-quick-action::before{transform:translateX(16px)}.favorite-card-wrapper.info-only .favorite-quick-action{width:30px;height:30px;justify-content:center;color:color-mix(in srgb,var(--primary-text-color) 52%,transparent);background:color-mix(in srgb,var(--secondary-background-color) 70%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.05)}.favorite-card-wrapper.info-only .favorite-quick-action::before{display:none}.favorite-card-wrapper.info-only .favorite-quick-action ha-icon{display:block;--mdc-icon-size:17px}.favorite-quick-action ha-icon{display:none}.favorite-quick-action:active{transform:scale(0.94)}.favorite-name{color:inherit;margin-top:2px;font-size:14px;font-weight:850;line-height:1.08;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.favorite-state{margin-top:0;color:color-mix(in srgb,var(--primary-text-color) 58%,transparent);font-size:11px;font-weight:750;line-height:1.15;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.favorite-area{margin-top:0;color:color-mix(in srgb,var(--primary-text-color) 46%,transparent);font-size:11px;font-weight:750;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([data-theme-dark]){.favorite-card-wrapper{background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 90%,#ffffff 4%),color-mix(in srgb,var(--card-background-color) 98%,#000000 3%));box-shadow:0 14px 30px rgba(0,0,0,0.28),inset 0 1px 0 rgba(255,255,255,0.045),inset 0 0 0 1px rgba(255,255,255,0.045)}.favorite-card-wrapper:hover{box-shadow:0 18px 34px rgba(0,0,0,0.36),inset 0 0 0 1px color-mix(in srgb,var(--favorite-color) 30%,transparent)}.favorite-quick-action{--toggle-track:rgba(255,255,255,0.14);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.08),0 5px 12px rgba(0,0,0,0.28)}.favorite-card-wrapper.info-only .favorite-quick-action{background:rgba(255,255,255,0.1);color:rgba(248,250,252,0.82)}}.notifications-overlay{position:fixed;inset:0;z-index:1040;opacity:0;pointer-events:none;background:rgba(0,0,0,0.42);backdrop-filter:blur(2px);transition:opacity 0.22s ease}.notifications-overlay.open{opacity:1;pointer-events:auto}.notifications-panel{position:fixed;left:50%;top:50%;z-index:1041;width:min(520px,calc(100vw - 48px));max-height:min(78vh,620px);display:flex;flex-direction:column;overflow:hidden;border-radius:8px;border:1px solid rgba(15,23,42,0.08);background:color-mix(in srgb,var(--card-background-color) 96%,transparent);box-shadow:0 24px 60px rgba(15,23,42,0.28);backdrop-filter:blur(22px);transform:translate3d(-50%,-46%,0) scale(0.96);opacity:0;pointer-events:none;transition:transform 0.28s cubic-bezier(0.2,0.8,0.2,1),opacity 0.2s ease}.notifications-panel.open{transform:translate3d(-50%,-50%,0) scale(1);opacity:1;pointer-events:auto}.notifications-panel::before{content:"";width:42px;height:4px;margin:10px auto 2px;flex:0 0 auto;border-radius:999px;background:rgba(0,0,0,0.14)}.notifications-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 14px 10px;border-bottom:1px solid rgba(15,23,42,0.08)}.notifications-title{min-width:0}.notifications-title-row{display:flex;align-items:center;gap:8px;color:var(--primary-text-color);font-size:16px;font-weight:850;line-height:1.15}.notifications-title-row ha-icon{color:var(--primary-color);--mdc-icon-size:20px}.notifications-subtitle{margin-top:3px;color:var(--secondary-text-color);font-size:12px;font-weight:600;line-height:1.2}.notifications-actions{display:flex;align-items:center;gap:6px;flex:0 0 auto}.notifications-icon-button,.notification-dismiss{border:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;color:var(--primary-text-color);background:var(--secondary-background-color);-webkit-tap-highlight-color:transparent}.notifications-icon-button{width:34px;height:34px}.notifications-icon-button ha-icon{--mdc-icon-size:18px}.notifications-list{overflow-y:auto;padding:10px}.notification-row{display:grid;grid-template-columns:38px minmax(0,1fr) auto;gap:10px;align-items:start;padding:11px 10px;margin-bottom:8px;border:1px solid rgba(15,23,42,0.06);border-radius:8px;background:rgba(255,255,255,0.78);box-shadow:0 8px 20px rgba(15,23,42,0.06)}.notification-row:last-child{margin-bottom:0}.notification-icon{width:38px;height:38px;display:inline-flex;align-items:center;justify-content:center;border-radius:8px;background:rgba(var(--rgb-primary-color,3,169,244),0.11);color:var(--primary-color)}.notification-icon ha-icon{--mdc-icon-size:21px}.notification-title{color:var(--primary-text-color);font-size:14px;font-weight:800;line-height:1.2;overflow-wrap:anywhere}.notification-message{margin-top:4px;color:var(--secondary-text-color);font-size:13px;line-height:1.35;white-space:pre-wrap;overflow-wrap:anywhere}.notification-markdown{display:block;white-space:normal}.notification-date{margin-top:7px;color:color-mix(in srgb,var(--secondary-text-color) 74%,transparent);font-size:11px;font-weight:650}.notification-dismiss{width:32px;height:32px;color:var(--secondary-text-color);background:rgba(0,0,0,0.05)}.notification-dismiss ha-icon{--mdc-icon-size:17px}.notifications-empty,.notifications-error,.notifications-loading{min-height:130px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:24px 18px;color:var(--secondary-text-color);text-align:center;font-size:13px;font-weight:600}.notifications-empty ha-icon,.notifications-error ha-icon,.notifications-loading ha-icon{--mdc-icon-size:28px;color:var(--primary-color)}@media (max-width:1024px){.notifications-panel{top:auto;bottom:calc(18px + env(safe-area-inset-bottom,0px));width:min(460px,calc(100vw - 28px));max-height:min(70vh,620px);transform:translate3d(-50%,calc(100% + 48px),0)}.notifications-panel.open{transform:translate3d(-50%,0,0)}}.global-header.expanded{border-bottom:2px solid var(--primary-color);box-shadow:0 4px 12px rgba(0,0,0,0.1)}.header-expanded-content{background:var(--card-background-color);padding:16px;border-top:1px solid var(--divider-color);animation:slideDown 0.3s ease-out}@keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.header-expanded-content .header-favorites{max-width:100%}.favorites-section{width:100%}.favorites-header{display:flex;align-items:center;gap:8px;margin-bottom:16px;padding-bottom:8px;border-bottom:1px solid var(--divider-color)}.favorites-header ha-icon{--mdc-icon-size:20px;color:var(--primary-color)}.favorites-header h3{margin:0;font-size:16px;font-weight:500;color:var(--primary-text-color)}.favorites-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;width:100%}.favorite-tile-wrapper{width:100%;min-height:60px}.favorite-tile{width:100% !important;height:auto !important}.no-favorites{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px;color:var(--secondary-text-color);background:var(--secondary-background-color);border-radius:8px;border:1px dashed var(--divider-color)}.no-favorites ha-icon{--mdc-icon-size:32px;margin-bottom:8px;opacity:0.6}.no-favorites p{margin:0;font-size:14px}.header-expand-button{position:absolute;bottom:-20px;left:50%;transform:translateX(-50%);width:40px;height:40px;border-radius:50%;border:2px solid var(--primary-color);background:var(--card-background-color);color:var(--primary-color);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.3s ease;z-index:10;box-shadow:0 2px 8px rgba(0,0,0,0.1)}.header-expand-button:hover{background:var(--primary-color);color:var(--text-primary-color);transform:translateX(-50%) translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,0.2)}.header-expand-button ha-icon{--mdc-icon-size:20px;transition:transform 0.3s ease}.global-header.expanded .header-expand-button{bottom:-20px}@media (max-width:768px){.header-expanded-content{padding:12px}.favorites-grid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px}.header-expand-button{width:36px;height:36px;bottom:-18px}.header-expand-button ha-icon{--mdc-icon-size:18px}}.home-status-card,.status-card-compact{--status-color:var(--primary-color);--status-bg:color-mix(in srgb,var(--status-color) 16%,transparent)}.home-status-card.cover,.status-card-compact.cover{--status-color:#1494aa}.home-status-card.binary_sensor,.home-status-card.motion,.status-card-compact.binary_sensor,.status-card-compact.motion{--status-color:#df5b63}.home-status-card.light,.status-card-compact.light{--status-color:#e1a129}.home-status-card.switch,.status-card-compact.switch{--status-color:#2f6fd6}.home-status-card.climate,.home-status-card.house-climate-card,.status-card-compact.climate{--status-color:#34a6d8}.home-status-card.person,.status-card-compact.person{--status-color:#6d7891}.home-status-card.media_player,.status-card-compact.media_player{--status-color:#7c67c7}.home-status-card.fan,.status-card-compact.fan{--status-color:#2b8fcb}.home-status-card.wattage,.home-status-card.house-power-card,.home-status-card.energy,.status-card-compact.wattage,.status-card-compact.energy{--status-color:#d88e20}.home-status-grid{grid-template-columns:repeat(auto-fill,minmax(150px,170px));justify-content:start;gap:12px}.home-status-card{min-height:134px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:16px;border-radius:8px;border:1px solid rgba(0,0,0,0.08);background:var(--card-background-color);text-align:left;box-shadow:0 8px 24px rgba(0,0,0,0.08)}.home-status-card::before{top:auto;left:16px;right:16px;bottom:0;height:3px;border-radius:3px 3px 0 0;background:var(--status-color);opacity:0.55}.home-status-card:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--status-color) 40%,transparent);box-shadow:0 14px 30px rgba(0,0,0,0.12)}.home-status-card:hover::before{opacity:0.85}.home-status-card .status-card-icon{width:48px;height:48px;margin:0 0 16px;display:inline-flex;align-items:center;justify-content:center;border-radius:8px;background:var(--status-bg)}.home-status-card .status-card-icon ha-icon{--mdc-icon-size:25px;color:var(--status-color);transform:none}.home-status-card:hover .status-card-icon ha-icon{transform:none}.home-status-card .status-card-badge{top:-8px;right:-8px;width:auto;min-width:24px;height:24px;padding:0 7px;border-radius:999px;background:var(--status-color);color:#fff;font-size:12px;font-weight:800;box-shadow:0 5px 12px color-mix(in srgb,var(--status-color) 28%,transparent)}.home-status-card .status-card-title{margin:auto 0 0;color:var(--primary-text-color);font-size:16px;font-weight:800;line-height:1.15;text-align:left}.home-status-card.has-value .status-card-title{margin-top:2px;color:var(--secondary-text-color);font-size:12px;font-weight:800}.home-status-card .status-card-value{margin:auto 0 0;color:var(--primary-text-color);font-size:22px;font-weight:900;line-height:1;letter-spacing:0;white-space:nowrap}.home-status-card.house-persons-card{--status-color:#182044;grid-column:span 2;min-width:240px;gap:12px}.home-status-card.house-power-card{--status-color:#d88e20;grid-column:span 2;min-width:270px;gap:12px}.home-status-card.house-climate-card{--status-color:#34a6d8;grid-column:span 2;min-width:270px;gap:12px}.house-persons-head{width:100%;display:flex;align-items:center;gap:10px}.home-status-card.house-persons-card .house-persons-icon,.home-status-card.house-climate-card .house-climate-icon,.home-status-card.house-power-card .house-power-icon{width:42px;height:42px;margin:0;flex:0 0 auto;border-radius:13px}.house-persons-copy,.house-climate-copy,.house-power-copy{min-width:0;text-align:left}.house-persons-title,.house-climate-title,.house-power-title{color:var(--primary-text-color);font-size:15px;font-weight:850;line-height:1.1}.house-persons-subtitle,.house-persons-empty,.house-climate-subtitle,.house-power-subtitle,.house-power-empty{color:var(--secondary-text-color);font-size:12px;font-weight:700;line-height:1.25}.house-climate-head{width:100%;display:flex;align-items:center;gap:10px}.house-climate-grid{width:100%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.house-climate-metric{min-width:0;min-height:48px;padding:8px 9px;border:0;border-radius:12px;display:grid;grid-template-columns:26px minmax(0,1fr);align-items:center;column-gap:8px;background:color-mix(in srgb,var(--metric-color) 12%,var(--card-background-color));color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--metric-color) 14%,transparent);transition:transform 0.18s ease,background-color 0.18s ease}.house-climate-metric:active{transform:scale(0.97)}.house-climate-metric-icon{width:26px;height:26px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;background:color-mix(in srgb,var(--metric-color) 18%,transparent);color:var(--metric-color)}.house-climate-metric-icon ha-icon{--mdc-icon-size:16px}.house-climate-metric-copy{min-width:0;display:flex;flex-direction:column;gap:1px}.house-climate-metric-value,.house-climate-metric-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.1}.house-climate-metric-value{font-size:14px;font-weight:900;color:var(--primary-text-color)}.house-climate-metric-label{font-size:11px;font-weight:750;color:var(--secondary-text-color)}.house-power-head{width:100%;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px}.house-power-total{color:var(--primary-text-color);font-size:22px;font-weight:950;line-height:1;white-space:nowrap}.house-power-list{width:100%;display:grid;gap:7px}.house-power-room{display:grid;grid-template-columns:26px minmax(0,1fr) auto;align-items:center;column-gap:8px;row-gap:4px}.house-power-room-icon{width:26px;height:26px;grid-row:span 2;display:inline-flex;align-items:center;justify-content:center;border-radius:9px;background:color-mix(in srgb,var(--status-color) 12%,transparent);color:var(--status-color)}.house-power-room-icon ha-icon{--mdc-icon-size:16px}.house-power-room-name,.house-power-room-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.1}.house-power-room-name{color:var(--primary-text-color);font-size:11px;font-weight:850}.house-power-room-value{color:var(--secondary-text-color);font-size:11px;font-weight:800}.house-power-bar{position:relative;height:5px;grid-column:2 / -1;overflow:hidden;border-radius:999px;background:color-mix(in srgb,var(--status-color) 10%,var(--secondary-background-color))}.house-power-bar-fill{position:absolute;inset:0 auto 0 0;width:var(--power-width,0%);min-width:4px;border-radius:inherit;background:linear-gradient(90deg,#d88e20,#f4c34d)}.house-persons-grid{width:100%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.house-person-mini{appearance:none;min-width:0;min-height:42px;padding:6px;display:flex;align-items:center;gap:7px;border:0;border-radius:12px;background:color-mix(in srgb,var(--primary-background-color) 78%,var(--card-background-color));color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;transition:background-color 0.18s ease,transform 0.18s ease}.house-person-mini:active{transform:scale(0.97)}.house-person-mini.is-home{background:color-mix(in srgb,#2f9b62 13%,var(--card-background-color))}.house-person-mini.is-away{background:color-mix(in srgb,#df5b63 10%,var(--card-background-color))}.house-person-avatar{width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;overflow:hidden;border-radius:999px;background:color-mix(in srgb,var(--status-color) 12%,transparent);color:var(--status-color)}.house-person-avatar img{width:100%;height:100%;object-fit:cover}.house-person-avatar ha-icon{--mdc-icon-size:16px}.house-person-mini-copy{min-width:0;display:flex;flex-direction:column;gap:1px}.house-person-mini-name,.house-person-mini-state{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.house-person-mini-name{color:var(--primary-text-color);font-size:11px;font-weight:850;line-height:1.1}.house-person-mini-state{color:var(--secondary-text-color);font-size:11px;font-weight:700;line-height:1.1}.house-person-mini.is-unknown .house-person-avatar{opacity:0.6;filter:grayscale(1)}.house-person-mini.is-unknown .house-person-mini-state{color:var(--disabled-text-color,var(--secondary-text-color));font-style:italic}.house-persons-more{appearance:none;min-width:0;min-height:42px;padding:6px;display:flex;align-items:center;justify-content:center;border:0;border-radius:12px;background:color-mix(in srgb,var(--status-color) 10%,var(--card-background-color));color:var(--primary-text-color);font:inherit;font-size:13px;font-weight:850;cursor:pointer;transition:transform 0.18s ease}.house-persons-more:active{transform:scale(0.97)}.house-persons-more:focus-visible,.house-person-mini:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}:host([data-theme-dark]){.home-status-card.house-persons-card{--status-color:#8ea8ff}.home-status-card.house-power-card{--status-color:#f2b447}.home-status-card.house-climate-card{--status-color:#64c8e8}.house-person-mini{background:color-mix(in srgb,var(--card-background-color) 78%,#ffffff 5%);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.04)}.house-person-mini.is-home{background:color-mix(in srgb,#2f9b62 20%,var(--card-background-color))}.house-person-mini.is-away{background:color-mix(in srgb,#df5b63 16%,var(--card-background-color))}.house-persons-more{background:color-mix(in srgb,var(--status-color) 16%,var(--card-background-color))}}.header-status-scroll{gap:10px;padding:2px 2px 4px}.status-card-compact{flex:0 0 auto;min-width:92px;max-width:150px;min-height:70px;align-items:flex-start;justify-content:flex-start;padding:7px 12px 9px;border-radius:8px;border:1px solid rgba(0,0,0,0.08);background:var(--card-background-color);box-shadow:0 3px 12px rgba(0,0,0,0.05)}.status-card-compact:hover{transform:translateY(-1px);border-color:color-mix(in srgb,var(--status-color) 36%,transparent);box-shadow:0 8px 18px rgba(0,0,0,0.1)}.status-card-compact .status-card-icon-compact{width:36px;height:36px;border-radius:8px;background:var(--status-bg)}.status-card-compact .status-card-icon-compact ha-icon{--mdc-icon-size:20px;color:var(--status-color)}.status-card-compact .status-card-badge-compact{top:-7px;right:-8px;min-width:22px;height:22px;padding:0 6px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:var(--status-color);color:#fff;font-size:11px;font-weight:800;box-shadow:0 4px 10px color-mix(in srgb,var(--status-color) 26%,transparent)}.status-card-compact .status-card-title-compact{width:100%;margin-top:5px;color:var(--secondary-text-color);font-size:11px;font-weight:800;line-height:1.15;text-align:left;opacity:1;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.status-card-compact.has-value .status-card-title-compact{color:var(--primary-text-color);font-size:13px;font-weight:900;white-space:nowrap;display:block}.status-card-subtitle-compact{width:100%;margin-top:1px;color:var(--secondary-text-color);font-size:11px;font-weight:750;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:768px){.home-status-grid{display:flex;grid-template-columns:none;gap:10px;margin:0;padding:2px 18px 16px;overflow-x:auto;scroll-padding:18px;scroll-snap-type:x proximity;scrollbar-width:none}.home-camera-section{margin:0 -10px 18px}.home-camera-section .home-status-heading{display:none}.home-summaries-section{margin:0 -10px 18px}.home-summaries-section .home-status-heading{display:none}.home-todos-section{margin:0 -10px 18px}.home-todos-section .home-status-heading{display:none}.home-todos-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;padding:2px 18px 16px}.home-custom-cards-section{min-width:0;margin:0 -10px 18px}.home-custom-cards-section .home-status-heading{display:none}.home-custom-cards-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;padding:2px 18px 16px}.home-scenes-section{min-width:0;margin:0 -10px 18px}.home-scenes-list{flex-wrap:nowrap;gap:8px;padding:2px 18px 16px;overflow-x:auto;scroll-padding:18px;scroll-snap-type:x proximity;scrollbar-width:none}.home-scenes-list::-webkit-scrollbar{display:none}.home-scenes-section.layout-grid .home-scenes-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));overflow:visible;scroll-snap-type:none}.home-scene-chip{flex:0 0 auto;max-width:220px;border-radius:14px;scroll-snap-align:start}.home-scenes-section.layout-grid .home-scene-chip{width:100%;max-width:none;scroll-snap-align:none}.home-summary-list{width:auto;display:flex;flex-direction:column;padding:2px 18px 16px;gap:8px}.home-summary-card{min-height:64px;padding:11px 12px;border-radius:14px}.home-summary-icon{width:36px;height:36px}.home-camera-grid{display:flex;grid-template-columns:none;gap:10px;padding:2px 18px 16px;overflow-x:auto;scroll-padding:18px;scroll-snap-type:x proximity;scrollbar-width:none}.home-camera-grid::-webkit-scrollbar{display:none}.home-camera-section.layout-grid .home-camera-grid{display:grid;grid-template-columns:1fr;gap:10px;padding:2px 18px 16px;overflow:visible;scroll-snap-type:none}.home-camera-card{flex:0 0 226px;min-height:146px;border-radius:18px;scroll-snap-align:start;box-shadow:0 12px 28px rgba(15,23,42,0.11)}.home-camera-section.layout-grid .home-camera-card{width:100%;flex:none;scroll-snap-align:none}.home-camera-content{min-height:146px;padding:13px}.home-camera-name{font-size:16px}.home-status-grid::-webkit-scrollbar{display:none}.home-status-card{flex:0 0 126px;min-height:114px;padding:14px;border-radius:16px;scroll-snap-align:start;box-shadow:0 10px 26px rgba(15,23,42,0.08)}.home-status-card.house-persons-card{flex:0 0 230px;min-height:132px;padding:14px}.home-status-card.house-power-card{flex:0 0 250px;min-height:132px;padding:14px}.home-status-card.house-climate-card{flex:0 0 250px;min-height:132px;padding:14px}.home-status-card .status-card-title{font-size:15px}.status-card-compact{min-width:88px}.home-view{max-width:none}.person-cards-section{display:none}.home-status-heading{display:none}.mobile-home-section{display:block;margin:0 -10px 18px}.mobile-section-heading{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 18px;margin-bottom:10px}.mobile-section-title{min-width:0;display:inline-flex;align-items:center;gap:8px}.mobile-section-title-label{color:var(--primary-text-color);font-size:16px;font-weight:850;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mobile-section-action{appearance:none;min-width:66px;height:28px;padding:0 10px 0 12px;display:inline-flex;align-items:center;justify-content:center;gap:3px;border:0;border-radius:999px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);font-size:12px;font-weight:850;font:inherit;cursor:pointer;transition:background-color 0.18s ease,transform 0.18s ease}.mobile-section-action ha-icon{--mdc-icon-size:15px}.mobile-section-action:active{transform:scale(0.96);background:color-mix(in srgb,var(--primary-color) 18%,transparent)}.mobile-area-rail{display:flex;gap:10px;padding:2px 18px 16px;overflow-x:auto;scroll-padding:18px;scroll-snap-type:x proximity;scrollbar-width:none}.mobile-area-rail::-webkit-scrollbar{display:none}.mobile-home-section.layout-grid .mobile-area-rail{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding:2px 18px 16px;overflow:visible;scroll-snap-type:none}.mobile-area-card{appearance:none;position:relative;box-sizing:border-box;flex:0 0 152px;min-width:0;min-height:130px;padding:13px;display:flex;flex-direction:column;align-items:stretch;justify-content:space-between;overflow:hidden;border:1px solid color-mix(in srgb,var(--primary-text-color) 8%,transparent);border-radius:18px;background:color-mix(in srgb,var(--card-background-color) 96%,var(--primary-background-color));color:var(--primary-text-color);font:inherit;box-shadow:0 12px 28px color-mix(in srgb,var(--primary-text-color) 8%,transparent);text-align:left;scroll-snap-align:start;cursor:pointer;transition:transform 0.18s ease,border-color 0.18s ease,box-shadow 0.18s ease}.mobile-home-section.layout-grid .mobile-area-card{width:100%;flex:none;scroll-snap-align:none}@media (max-width:380px){.mobile-home-section.layout-grid .mobile-area-rail{grid-template-columns:1fr}}.mobile-area-card:active{transform:scale(0.98)}.mobile-area-card.has-picture{min-height:146px;color:var(--mobile-area-picture-text-color,#ffffff);border-color:rgba(255,255,255,0.16);background:#182044;--mobile-area-picture-text-color:#ffffff;--mobile-area-picture-muted-text-color:rgba(255,255,255,0.76);--mobile-area-picture-text-shadow:0 2px 10px rgba(0,0,0,0.62);--mobile-area-picture-overlay:linear-gradient(180deg,rgba(12,18,32,0.03) 0%,rgba(12,18,32,0.18) 42%,rgba(12,18,32,0.82) 100%),linear-gradient(90deg,rgba(12,18,32,0.18),rgba(12,18,32,0.04))}.mobile-area-card.has-picture.text-dark{--mobile-area-picture-text-color:#ffffff;--mobile-area-picture-muted-text-color:rgba(255,255,255,0.76);--mobile-area-picture-text-shadow:0 2px 10px rgba(0,0,0,0.62);--mobile-area-picture-overlay:linear-gradient(180deg,rgba(12,18,32,0.03) 0%,rgba(12,18,32,0.18) 42%,rgba(12,18,32,0.82) 100%),linear-gradient(90deg,rgba(12,18,32,0.18),rgba(12,18,32,0.04))}.mobile-area-picture{position:absolute;inset:0;z-index:0;background-size:cover;background-position:center;transform:scale(1.02)}.mobile-area-card.has-picture::after{content:"";position:absolute;inset:0;z-index:1;background:var(--mobile-area-picture-overlay)}.mobile-area-top,.mobile-area-copy{position:relative;z-index:2}.mobile-area-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.mobile-area-icon{width:42px;height:42px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:13px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 13%,transparent)}.mobile-area-icon ha-icon{--mdc-icon-size:22px}.mobile-area-card.has-picture .mobile-area-icon{color:var(--mobile-area-picture-text-color,#ffffff);background:rgba(255,255,255,0.18);backdrop-filter:blur(12px)}.mobile-area-badges{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:5px;min-width:0}.mobile-area-badge{min-width:24px;height:24px;padding:0 7px;display:inline-flex;align-items:center;justify-content:center;gap:4px;border-radius:999px;color:var(--area-badge-color,var(--primary-color));background:color-mix(in srgb,var(--area-badge-color,var(--primary-color)) 12%,transparent);font-size:11px;font-weight:850}.mobile-area-card.has-picture .mobile-area-badge{color:var(--area-badge-color,var(--primary-color));background:color-mix(in srgb,var(--area-badge-color,var(--primary-color)) 18%,rgba(255,255,255,0.88));backdrop-filter:blur(12px);box-shadow:0 4px 12px rgba(15,23,42,0.16)}.mobile-area-badge ha-icon{--mdc-icon-size:14px}.mobile-area-badge.light{--area-badge-color:#e1a129}.mobile-area-badge.cover{--area-badge-color:#1494aa}.mobile-area-badge.motion{--area-badge-color:#df5b63}.mobile-area-name{font-size:15px;font-weight:850;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mobile-area-meta{margin-top:4px;color:color-mix(in srgb,var(--primary-text-color) 54%,transparent);font-size:12px;font-weight:700;line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mobile-area-card.has-picture .mobile-area-meta{color:var(--mobile-area-picture-muted-text-color,rgba(255,255,255,0.72))}.mobile-area-card.has-picture .mobile-area-name,.mobile-area-card.has-picture .mobile-area-meta{text-shadow:var(--mobile-area-picture-text-shadow)}.mobile-area-card.has-picture.text-dark .mobile-area-icon{color:var(--mobile-area-picture-text-color,#ffffff);background:rgba(255,255,255,0.18)}.mobile-area-card.has-picture.text-dark .mobile-area-name,.mobile-area-card.has-picture.text-dark .mobile-area-meta{text-shadow:var(--mobile-area-picture-text-shadow)}.home-status-section{margin:0 -10px 18px}.home-status-section .mobile-section-heading{margin-bottom:10px}.home-status-section.layout-grid .home-status-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding:2px 18px 16px;overflow:visible;scroll-snap-type:none}.home-status-section.layout-grid .home-status-card{width:100%;min-width:0;box-sizing:border-box;flex:none;scroll-snap-align:none}.home-status-section.layout-grid .house-persons-card,.home-status-section.layout-grid .house-climate-card,.home-status-section.layout-grid .house-power-card{grid-column:1 / -1}@media (max-width:380px){.home-status-section.layout-grid .home-status-grid{grid-template-columns:1fr}}.home-status-card::before{left:14px;right:14px}.home-status-card .status-card-icon{width:42px;height:42px;border-radius:13px;margin-bottom:16px}.home-status-card .status-card-icon ha-icon{--mdc-icon-size:22px}.home-status-card .status-card-badge{min-width:23px;height:23px;top:-8px;right:-9px}:host([data-theme-dark]){.home-welcome{background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 90%,var(--primary-color) 7%) 0%,color-mix(in srgb,var(--card-background-color) 92%,var(--primary-background-color)) 100%);box-shadow:0 14px 36px rgba(0,0,0,0.34),inset 0 -1px 0 rgba(255,255,255,0.04)}.welcome-avatar{box-shadow:0 10px 22px rgba(0,0,0,0.34),0 0 0 3px rgba(255,255,255,0.08)}.welcome-action{background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 84%,#ffffff 8%),color-mix(in srgb,var(--card-background-color) 94%,#000000 6%));box-shadow:0 10px 24px rgba(0,0,0,0.28),inset 0 1px 0 rgba(255,255,255,0.08),inset 0 0 0 1px rgba(255,255,255,0.1)}.mobile-area-card{background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 88%,#ffffff 4%),color-mix(in srgb,var(--card-background-color) 96%,#000000 4%));border-color:rgba(255,255,255,0.08);box-shadow:0 12px 28px rgba(0,0,0,0.26),inset 0 1px 0 rgba(255,255,255,0.04)}.mobile-area-card:not(.has-picture) .mobile-area-icon{background:color-mix(in srgb,var(--primary-color) 22%,transparent)}.mobile-area-badge{background:color-mix(in srgb,var(--area-badge-color,var(--primary-color)) 20%,transparent)}.house-climate-metric{background:color-mix(in srgb,var(--metric-color) 18%,var(--card-background-color));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--metric-color) 18%,transparent)}.house-power-room-icon{background:color-mix(in srgb,var(--status-color) 20%,transparent)}.house-power-bar{background:color-mix(in srgb,var(--status-color) 13%,var(--card-background-color))}.home-summary-card{background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 88%,#ffffff 4%),color-mix(in srgb,var(--card-background-color) 96%,#000000 4%));border-color:rgba(255,255,255,0.08);box-shadow:0 12px 26px rgba(0,0,0,0.24),inset 0 1px 0 rgba(255,255,255,0.04)}.home-summary-icon{background:color-mix(in srgb,var(--summary-color) 20%,transparent)}}.home-favorites-section{box-sizing:border-box;width:100%;max-width:100%;margin:0 -10px 44px;padding:0;overflow-x:clip}.home-favorites-section .favorites-header{display:none}.home-favorites-section .mobile-section-heading{margin-bottom:10px}.home-favorites-section .favorites-grid{display:flex;grid-template-columns:none;gap:10px;padding:2px 18px 0;overflow-x:auto;scroll-padding:18px;scroll-snap-type:x proximity;scrollbar-width:none}.home-favorites-section .favorites-grid::-webkit-scrollbar{display:none}.home-favorites-section.layout-grid .favorites-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));overflow:visible;scroll-snap-type:none}.home-favorites-section .favorite-card-wrapper{flex:0 0 186px;width:auto;min-width:0;box-sizing:border-box;min-height:116px;padding:14px;border-radius:16px;scroll-snap-align:start}.home-favorites-section.layout-grid .favorite-card-wrapper{width:100%;flex:none;scroll-snap-align:none}@media (max-width:380px){.home-favorites-section.layout-grid .favorites-grid{grid-template-columns:1fr}}}@media (max-width:768px){:host{height:auto;max-height:none;min-height:100%;overflow:visible}.layout-container{display:block;height:auto;max-height:none;min-height:100dvh;overflow:visible}.main-content{display:block;min-height:100dvh;overflow:visible}.content-area{padding:0;height:auto;max-height:none;min-height:100dvh;overflow:visible;overscroll-behavior:auto;-webkit-overflow-scrolling:auto;background:linear-gradient(180deg,color-mix(in srgb,var(--primary-color) 5%,var(--primary-background-color)) 0%,var(--primary-background-color) 150px)}.content-area.home-content-area{padding-bottom:0}.content-area.area-content-area{padding:0 10px calc(128px + env(safe-area-inset-bottom,0px))}.content-area.settings-content-area{padding:0}.home-view{padding:10px 10px calc(128px + env(safe-area-inset-bottom,0px))}.settings-page-view{--dd-settings-bar-bottom:calc(82px + env(safe-area-inset-bottom,0px));width:100%;margin:0;padding:8px 10px calc(152px + env(safe-area-inset-bottom,0px))}.settings-page-header{gap:12px;margin:0 0 12px;padding:12px 14px;border-radius:18px;border-top:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent);box-shadow:0 10px 28px rgba(15,23,42,0.07)}.settings-page-back{width:42px;height:42px}.settings-page-title h1{font-size:21px}.settings-page-title p{margin-top:3px;font-size:13px}.settings-page-editor{border-radius:18px;box-shadow:0 10px 30px rgba(15,23,42,0.06)}.settings-save-bar{position:fixed;left:10px;right:10px;bottom:var(--dd-settings-bar-bottom);z-index:110;margin:0;padding:6px 6px 6px 14px}.global-header.mobile{margin:-10px -10px 0;padding:12px 14px 22px;border-bottom:0;border-radius:0 0 8px 8px;background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 98%,transparent) 0%,color-mix(in srgb,var(--primary-color) 5%,var(--card-background-color)) 100%);box-shadow:0 10px 26px rgba(15,23,42,0.08)}.global-header.mobile .header-content{display:block}.global-header.mobile .header-status-section{width:100%}.global-header.mobile .header-status-scroll{gap:10px;padding:2px 2px 4px;scroll-padding:14px}.global-header.mobile .status-card-compact{min-width:112px;min-height:82px;padding:10px 12px 11px;border-radius:8px;border:1px solid rgba(15,23,42,0.08);background:rgba(255,255,255,0.92);box-shadow:0 8px 22px rgba(15,23,42,0.08)}.global-header.mobile .status-card-compact .status-card-icon-compact{width:40px;height:40px;border-radius:8px}.global-header.mobile .status-card-compact .status-card-title-compact{margin-top:7px;color:color-mix(in srgb,var(--primary-text-color) 76%,transparent);font-size:12px;line-height:1.15}.global-header.mobile .header-expand-button{bottom:-18px;width:36px;height:36px;border-width:2px;background:rgba(255,255,255,0.96);box-shadow:0 8px 20px rgba(3,169,244,0.18)}.area-view .entities-section,.area-view .dd-custom-section{position:relative;z-index:2}.area-view .entities-section{display:none}.mobile-area-overview{display:block;position:relative;z-index:2;margin:12px 0 20px}.mobile-entities-section{display:grid;position:relative;z-index:2}.layout-container>.sidebar,.sidebar{position:fixed !important;left:18px !important;right:18px !important;top:auto !important;bottom:calc(82px + env(safe-area-inset-bottom,0px)) !important;width:auto !important;height:auto !important;max-height:min(62vh,520px);padding:10px;overflow-y:auto;border-radius:8px;border:1px solid rgba(0,0,0,0.08);background:rgba(255,255,255,0.94);box-shadow:0 22px 48px rgba(0,0,0,0.24);backdrop-filter:blur(20px);transform:translate3d(0,calc(100% + 140px),0) !important;transition:transform 0.28s cubic-bezier(0.2,0.8,0.2,1);z-index:121}.layout-container>.sidebar.open,.sidebar.open{transform:translate3d(0,0,0) !important}.sidebar::before{content:"";width:42px;height:4px;margin:0 auto 10px;display:block;border-radius:999px;background:rgba(0,0,0,0.14)}.sidebar .area-list{padding:0}.sidebar .floor-section{margin-bottom:12px}.sidebar .floor-header{padding:6px 12px 9px}.sidebar .floor-header h3{font-size:13px;font-weight:850;letter-spacing:0;text-transform:none}.sidebar .area-button{min-height:64px;height:auto;margin-bottom:8px;padding:11px 12px 11px 56px;border-radius:9px;border:1px solid rgba(15,23,42,0.06);background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 97%,#ffffff),color-mix(in srgb,var(--card-background-color) 96%,var(--primary-background-color)));box-shadow:0 10px 22px rgba(15,23,42,0.07),inset 0 1px 0 rgba(255,255,255,0.42)}.sidebar .area-button.home-button{height:48px;min-height:48px;padding:10px 14px 10px 54px;border-radius:8px}.sidebar .area-button.home-button .area-icon{position:absolute;left:12px;top:50%;width:34px;height:34px;transform:translateY(-50%);border-radius:999px}.sidebar .area-button.selected,.sidebar .area-button.home-button.selected{border-color:color-mix(in srgb,var(--primary-color) 42%,transparent);background:linear-gradient(180deg,color-mix(in srgb,var(--primary-color) 88%,#ffffff 10%),var(--primary-color));color:var(--text-primary-color);box-shadow:0 14px 28px color-mix(in srgb,var(--primary-color) 24%,transparent),inset 0 1px 0 rgba(255,255,255,0.2)}.sidebar .area-content{min-height:42px;display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto auto;align-items:center;gap:3px 10px}.sidebar .area-top-section{min-width:0;margin-top:0;grid-column:1;grid-row:1 / span 2}.sidebar .area-bottom-section{display:contents;min-height:0}.sidebar .area-main-icon{position:absolute;left:-44px;top:50%;bottom:auto;width:34px;height:34px;border-radius:10px;transform:translateY(-50%);background:color-mix(in srgb,var(--primary-color) 12%,transparent);box-shadow:none}.sidebar .area-main-icon ha-icon{--mdc-icon-size:20px}.sidebar .area-button.has-picture{min-height:70px;color:var(--area-picture-text-color,#ffffff);border-color:rgba(255,255,255,0.18);background:#182044}.sidebar .area-button.has-picture.selected{border-color:color-mix(in srgb,var(--primary-color) 44%,rgba(255,255,255,0.18));box-shadow:0 14px 30px rgba(15,23,42,0.18),inset 0 0 0 1px color-mix(in srgb,var(--primary-color) 34%,transparent)}.sidebar .area-button.has-picture::after{content:"";position:absolute;inset:0;z-index:0;background:var(--area-picture-overlay);pointer-events:none}.sidebar .area-button.has-picture .area-background{opacity:0.78;transform:scale(1.02)}.sidebar .area-button.has-picture .area-content,.sidebar .area-button.has-picture .area-info-badges,.sidebar .area-button.has-picture .area-main-icon{z-index:1}.sidebar .area-info-badges{position:relative;top:auto;right:auto;grid-column:2;grid-row:1 / span 2;max-width:130px;justify-content:flex-end;align-self:center;gap:5px}.sidebar .area-name{max-width:100%;margin:0;font-size:15px;font-weight:850;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sidebar .area-sensors{margin-top:4px;color:color-mix(in srgb,var(--primary-text-color) 58%,transparent);font-size:12px;font-weight:700;line-height:1.1}.sidebar .area-button.has-picture .area-sensors{color:var(--area-picture-muted-text-color,rgba(255,255,255,0.72))}.sidebar .info-badge{min-width:24px;height:22px;padding:0 7px;border-radius:999px;background:color-mix(in srgb,var(--primary-color) 9%,var(--card-background-color));box-shadow:inset 0 0 0 1px rgba(15,23,42,0.04)}.sidebar .info-badge ha-icon{--mdc-icon-size:13px}.sidebar .badge-count{font-size:11px;font-weight:850}.sidebar .area-button.has-picture .info-badge{background:color-mix(in srgb,var(--badge-color,var(--primary-color)) 18%,rgba(255,255,255,0.88));color:var(--badge-color,var(--primary-color));backdrop-filter:blur(10px);box-shadow:0 4px 12px rgba(15,23,42,0.16)}.sidebar .area-button.selected .area-main-icon,.sidebar .area-button.selected .area-icon{background:rgba(var(--rgb-primary-color,3,169,244),0.14);color:var(--primary-color)}.sidebar .area-list{display:grid;grid-template-columns:minmax(0,1fr) !important;gap:8px}.sidebar .floor-section{display:grid;grid-template-columns:minmax(0,1fr) !important;gap:8px;margin-bottom:10px}.sidebar .floor-areas{display:grid;grid-template-columns:minmax(0,1fr) !important;gap:8px}.sidebar .floor-header{margin:0;padding:4px 6px 2px}.sidebar .floor-header h3{color:var(--secondary-text-color);font-size:14px;font-weight:760;line-height:1.2}.sidebar .area-button,.sidebar .area-button.home-button{display:grid;grid-template-columns:48px minmax(0,1fr) auto 22px;align-items:center;gap:12px;min-height:68px;height:auto;margin:0;padding:10px 12px;border-radius:8px;border:1px solid rgba(15,23,42,0.06);background:rgba(255,255,255,0.92);color:var(--primary-text-color);box-shadow:0 10px 22px rgba(15,23,42,0.06);transform:none}.sidebar .area-button:hover{transform:translateY(-1px);box-shadow:0 12px 24px rgba(15,23,42,0.09)}.sidebar .area-button.selected,.sidebar .area-button.home-button.selected{border-color:rgba(var(--rgb-primary-color,3,169,244),0.34);background:rgba(255,255,255,0.98);color:var(--primary-text-color);box-shadow:0 14px 28px rgba(15,23,42,0.1),inset 3px 0 0 var(--primary-color)}.sidebar .area-button.home-button .area-icon,.sidebar .area-icon,.sidebar .area-main-icon{position:relative;left:auto;top:auto;bottom:auto;grid-column:1;grid-row:1;width:46px;height:46px;border-radius:8px;transform:none;background:rgba(var(--rgb-primary-color,3,169,244),0.1);color:var(--primary-color);box-shadow:none}.sidebar .area-button.home-button .area-icon{position:relative;left:auto;top:auto}.sidebar .area-main-icon ha-icon,.sidebar .area-icon ha-icon{--mdc-icon-size:24px;color:currentColor}.sidebar .area-content{display:contents;width:auto;height:auto;min-height:0}.sidebar .area-info,.sidebar .area-top-section{grid-column:2;grid-row:1;min-width:0;margin:0}.sidebar .area-bottom-section{display:contents}.sidebar .area-name{margin:0;color:inherit;font-size:15px;font-weight:750;line-height:1.1}.sidebar .area-sensors{margin-top:4px;color:var(--secondary-text-color);font-size:12px;font-weight:500;line-height:1.1}.sidebar .area-info-badges{position:relative;top:auto;right:auto;grid-column:3;grid-row:1;max-width:104px;display:flex;justify-content:flex-end;align-items:center;gap:4px;z-index:1}.sidebar .area-menu-chevron{display:block;grid-column:4;grid-row:1;z-index:1;--mdc-icon-size:22px;color:rgba(15,23,42,0.52);transition:transform 0.18s ease,color 0.18s ease}.sidebar .home-notification-shortcut{grid-column:3;grid-row:1;justify-self:end;width:auto;min-width:44px;height:30px;margin-left:0}.sidebar .area-button.selected .area-menu-chevron{color:var(--primary-color);transform:translateX(2px)}.sidebar .area-button.has-picture{min-height:68px;border-color:rgba(15,23,42,0.12);background:rgba(18,24,38,0.9);color:var(--area-picture-text-color,#ffffff)}.sidebar .area-button.has-picture.selected{border-color:rgba(var(--rgb-primary-color,3,169,244),0.48);background:rgba(18,24,38,0.92);box-shadow:0 14px 28px rgba(15,23,42,0.16),inset 3px 0 0 var(--primary-color)}.sidebar .area-button.has-picture .area-background{opacity:0.78;transform:scale(1.02)}.sidebar .area-button.has-picture .area-top-section,.sidebar .area-button.has-picture .area-name,.sidebar .area-button.has-picture .area-sensors,.sidebar .area-button.has-picture .area-menu-chevron,.sidebar .area-button.has-picture .area-info-badges,.sidebar .area-button.has-picture .area-main-icon,.sidebar .area-button.has-picture .area-icon{position:relative;z-index:2}.sidebar .area-button.has-picture::after{background:var(--area-picture-overlay)}.sidebar .area-button.has-picture .area-name{width:fit-content;max-width:100%;padding:4px 8px;margin-left:-2px;border-radius:8px;color:#ffffff;background:linear-gradient(90deg,rgba(8,13,24,0.66),rgba(8,13,24,0.28));text-shadow:0 2px 8px rgba(0,0,0,0.72);backdrop-filter:blur(2px)}.sidebar .area-button.has-picture .area-main-icon,.sidebar .area-button.has-picture .area-icon{background:rgba(255,255,255,0.18);color:var(--area-picture-text-color,#ffffff);backdrop-filter:blur(10px)}.sidebar .area-button.has-picture .area-sensors,.sidebar .area-button.has-picture .area-menu-chevron{color:var(--area-picture-muted-text-color,rgba(255,255,255,0.72))}.sidebar .area-button.has-picture.selected .area-menu-chevron{color:var(--area-picture-text-color,#ffffff)}.sidebar .area-button.has-picture.text-dark .area-main-icon,.sidebar .area-button.has-picture.text-dark .area-icon{background:rgba(255,255,255,0.18);color:var(--area-picture-text-color,#ffffff)}.sidebar .area-button.has-picture.text-dark .info-badge{background:color-mix(in srgb,var(--badge-color,var(--primary-color)) 18%,rgba(255,255,255,0.88));color:var(--badge-color,var(--primary-color))}.mobile-nav-overlay{z-index:120 !important;background:rgba(0,0,0,0.45);backdrop-filter:blur(2px)}:host([data-theme-dark]){.layout-container>.sidebar,.sidebar{border-color:rgba(255,255,255,0.1);background:linear-gradient(180deg,rgba(37,40,48,0.96),rgba(18,20,25,0.94)),color-mix(in srgb,var(--card-background-color) 92%,#000000);box-shadow:0 24px 58px rgba(0,0,0,0.58),inset 0 1px 0 rgba(255,255,255,0.06);color:var(--primary-text-color)}.sidebar::before{background:rgba(255,255,255,0.18)}.sidebar .floor-header h3{color:color-mix(in srgb,var(--primary-text-color) 58%,transparent)}.sidebar .area-button{border:1px solid rgba(255,255,255,0.06);background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 86%,#ffffff 4%),color-mix(in srgb,var(--card-background-color) 96%,#000000 4%));color:var(--primary-text-color);box-shadow:0 10px 22px rgba(0,0,0,0.24)}.sidebar .area-button.selected,.sidebar .area-button.home-button.selected{border-color:color-mix(in srgb,var(--primary-color) 42%,transparent);background:linear-gradient(180deg,color-mix(in srgb,var(--card-background-color) 90%,var(--primary-color) 12%),color-mix(in srgb,var(--card-background-color) 96%,#000000 5%));color:var(--primary-text-color);box-shadow:0 14px 30px rgba(0,0,0,0.36),inset 3px 0 0 var(--primary-color),inset 0 1px 0 rgba(255,255,255,0.06)}.sidebar .area-button.has-picture{border-color:rgba(255,255,255,0.08);background:#17202b}.sidebar .area-button.has-picture .area-background{opacity:0.58}.sidebar .area-button.has-picture:hover .area-background{opacity:0.66}.sidebar .area-main-icon,.sidebar .area-icon{background:color-mix(in srgb,var(--primary-color) 22%,transparent);color:var(--primary-color)}.sidebar .area-button.selected .area-main-icon,.sidebar .area-button.selected .area-icon{background:color-mix(in srgb,var(--primary-color) 24%,transparent);color:var(--primary-color)}.sidebar .area-menu-chevron,.sidebar .area-button.selected .area-menu-chevron{color:color-mix(in srgb,var(--primary-text-color) 62%,transparent)}.sidebar .area-button.selected .area-menu-chevron{color:var(--primary-color)}.sidebar .area-sensors,.sidebar .area-bottom-section{color:color-mix(in srgb,var(--primary-text-color) 68%,transparent)}.sidebar .info-badge{background:rgba(255,255,255,0.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.04)}.home-notification-shortcut{color:#ff9a9a;background:rgba(239,68,68,0.16);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.05),0 8px 18px rgba(0,0,0,0.18)}.mobile-nav-overlay{background:rgba(0,0,0,0.58);backdrop-filter:blur(4px)}}.home-view,.home-content-area{max-width:100% !important;overflow-x:hidden !important}.home-view .home-favorites-section{box-sizing:border-box !important;width:100% !important;max-width:100% !important;margin:0 -10px 44px !important;padding:0 !important;overflow-x:hidden !important}.home-view .home-favorites-section .favorites-grid{box-sizing:border-box !important;width:100% !important;max-width:100% !important;min-width:0 !important}.home-view .home-favorites-section .favorite-card-wrapper{max-width:100% !important;min-width:0 !important}}@media (pointer:coarse){.dd-card-toolbar button,.dd-generated-card-toolbar button,.mobile-domain-order-button,.mobile-domain-drag-handle,.mobile-layout-toggle,.mobile-domain-master-action,.mobile-cover-action,.notifications-icon-button,.notification-dismiss,.header-expand-button{min-width:40px;min-height:40px}.mobile-domain-master,.mobile-domain-master-actions{min-height:40px}.mobile-entity-top{flex-wrap:wrap}.mobile-cover-actions{margin-left:auto}.mobile-entity-toggle,.mobile-entity-more,.mobile-scene-action,.mobile-lock-action,.favorite-quick-action,.mobile-section-action,.mobile-section-toggle,.home-notification-shortcut{position:relative}.mobile-entity-toggle::after,.mobile-entity-more::after,.mobile-scene-action::after,.mobile-lock-action::after,.favorite-quick-action::after,.mobile-section-action::after,.mobile-section-toggle::after,.home-notification-shortcut::after{content:"";position:absolute;left:50%;top:50%;width:max(100%,44px);height:max(100%,44px);transform:translate(-50%,-50%)}}@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;transition-delay:0s !important;scroll-behavior:auto !important}.welcome-alarm.alarm-triggered{animation:none}}`;const Ge=r`.area-view .mobile-entity-replacement-card{--dd-replacement-min-height:62px;--dd-replacement-padding:8px 10px;--dd-replacement-radius:8px}@media (min-width:769px){.area-view .mobile-entity-replacement-card{--dd-replacement-min-height:72px;--dd-replacement-padding:12px;--dd-replacement-radius:10px}}.area-view .mobile-entities-section{display:flex;flex-direction:column;gap:8px;margin:0}.area-view .mobile-domain-group{min-width:0;margin:0;padding:0;overflow:hidden;border:1px solid color-mix(in srgb,var(--primary-text-color) 7%,transparent);border-radius:8px;background:var(--card-background-color);box-shadow:0 3px 10px rgba(15,23,42,0.04);contain:layout style}.area-view .mobile-domain-header{width:100%;min-height:38px;margin:0;padding:7px 9px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:10px;border-radius:7px 7px 0 0}.area-view .mobile-domain-group.is-collapsed .mobile-domain-header{margin-bottom:0;border-radius:7px}.area-view .mobile-domain-title{appearance:none;min-width:0;padding:0;border:0;display:inline-flex;align-items:center;gap:7px;background:transparent;color:inherit;font:inherit;cursor:pointer}.area-view .mobile-domain-title-copy{min-width:0;display:inline-flex;align-items:baseline;gap:5px}.area-view .mobile-domain-title-label{font-size:15px;font-weight:850}.area-view .mobile-domain-count{color:var(--secondary-text-color);font-size:10px;font-weight:650}.area-view .mobile-domain-header-actions{display:inline-flex;align-items:center;justify-content:flex-end;gap:6px;margin-right:2px}.area-view .mobile-domain-master{min-width:76px;height:28px}.area-view .mobile-domain-collapse-button{display:none !important}.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));align-items:stretch;gap:8px;margin:0;padding:0 9px 9px;overflow:visible;scroll-padding:0;scroll-snap-type:none}.area-view .mobile-entity-card,.area-view .mobile-entities-section.layout-grid .mobile-entity-card{width:100% !important;min-width:0 !important;min-height:62px !important;height:auto !important;margin:0 !important;padding:8px 10px !important;box-sizing:border-box;display:flex !important;flex-direction:column;justify-content:center;overflow:hidden;border:1px solid color-mix(in srgb,var(--primary-text-color) 6%,transparent);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color);box-shadow:0 3px 9px rgba(15,23,42,0.035);cursor:pointer;scroll-snap-align:none}.area-view .mobile-entity-card:hover{transform:translateY(-1px);border-color:color-mix(in srgb,var(--primary-color) 14%,transparent);box-shadow:0 6px 14px rgba(15,23,42,0.055)}.area-view .mobile-entity-main{width:100%;min-width:0;display:grid;grid-template-columns:36px minmax(0,1fr) auto;align-items:center;gap:9px}.area-view .mobile-entity-main.editing-inline{grid-template-columns:24px 36px minmax(0,1fr) 34px;gap:7px}.area-view .mobile-entity-icon{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;border-radius:8px}.area-view .mobile-entity-icon ha-icon{--mdc-icon-size:20px}.area-view .mobile-entity-content{min-width:0;display:flex;flex-direction:column;justify-content:center;gap:2px}.area-view .mobile-entity-name{overflow:hidden;font-size:12px;font-weight:850;line-height:1.15;text-overflow:ellipsis;white-space:nowrap}.area-view .mobile-entity-state{overflow:hidden;color:var(--secondary-text-color);font-size:10px;font-weight:650;line-height:1.1;text-overflow:ellipsis;white-space:nowrap}.area-view .mobile-entity-state.active{color:var(--entity-color)}.area-view .mobile-entity-right{min-width:0;display:inline-flex;align-items:center;justify-content:flex-end;gap:5px}.area-view .mobile-entity-status-pill{display:none !important}.area-view .mobile-entity-brightness{width:calc(100% - 45px);margin:6px 0 0 45px}.area-view .mobile-entity-brightness input[type="range"]{appearance:none;width:100%;height:4px;margin:0;border-radius:999px;outline:none;background:linear-gradient( 90deg,var(--entity-color) 0%,var(--entity-color) var(--brightness),color-mix(in srgb,var(--primary-text-color) 13%,transparent) var(--brightness),color-mix(in srgb,var(--primary-text-color) 13%,transparent) 100% )}.area-view .mobile-entity-brightness input[type="range"]::-webkit-slider-thumb{appearance:none;width:14px;height:14px;border:2px solid var(--entity-color);border-radius:50%;background:var(--card-background-color)}.area-view .mobile-entity-brightness input[type="range"]::-moz-range-thumb{width:12px;height:12px;border:2px solid var(--entity-color);border-radius:50%;background:var(--card-background-color)}.area-view .mobile-entity-more{display:none !important}@media (max-width:1180px) and (min-width:769px){.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width:768px){.area-view .mobile-domain-group{padding:0;border-radius:9px}.area-view .mobile-domain-header{min-height:36px;margin:0;padding:6px 7px}.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{grid-template-columns:1fr;gap:6px;padding:0 7px 7px}.area-view .mobile-entity-card,.area-view .mobile-entities-section.layout-grid .mobile-entity-card{min-height:58px !important;padding:7px 9px !important}.area-view .mobile-entity-main{grid-template-columns:34px minmax(0,1fr) auto;gap:8px}.area-view .mobile-entity-main.editing-inline{grid-template-columns:24px 34px minmax(0,1fr) 34px;gap:7px}.area-view .mobile-entity-icon{width:34px;height:34px}.area-view .mobile-entity-brightness{width:calc(100% - 42px);margin-left:42px}}.area-view>.room-favorites-block{width:100%;box-sizing:border-box}.area-view .mobile-domain-header.expandable-header{position:relative;width:100%;box-sizing:border-box;cursor:pointer;transition:background-color 0.15s ease,box-shadow 0.15s ease}.area-view .mobile-domain-header.expandable-header:hover{background:color-mix(in srgb,var(--primary-color) 6%,var(--card-background-color))}.area-view .mobile-domain-header.expandable-header:active{background:color-mix(in srgb,var(--primary-color) 9%,var(--card-background-color))}.area-view .mobile-domain-header.expandable-header:focus-visible{outline:2px solid color-mix(in srgb,var(--primary-color) 55%,transparent);outline-offset:2px}.area-view .mobile-domain-title{pointer-events:none}.area-view .mobile-domain-header-actions{position:relative;z-index:2}consistent leading chevron. */ .area-view .mobile-domain-header.expandable-header{min-height:38px}.area-view .mobile-domain-title{min-height:24px;align-items:center;gap:6px;line-height:1}.area-view .mobile-domain-title-copy{align-items:center;line-height:1}.area-view .mobile-domain-title-label,.area-view .mobile-domain-count{line-height:1}.area-view .dd-generated-card-wrap.editing{width:100%;min-width:0;min-height:62px;height:auto;flex:none;border-radius:8px}.area-view .dd-generated-card-wrap.editing>.mobile-entity-card{min-height:62px !important;height:100% !important}.area-view .mobile-entity-rail .dd-domain-add-card-final,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card-final{min-height:62px !important;height:62px;opacity:0.72;border-radius:8px}.area-view .dd-generated-card-toolbar{display:none !important}@media (max-width:768px){.area-view .mobile-domain-header.expandable-header{width:100%;padding:6px 7px}.area-view .dd-generated-card-wrap.editing,.area-view .dd-generated-card-wrap.editing>.mobile-entity-card,.area-view .mobile-entity-rail .dd-domain-add-card-final{min-height:58px !important}.area-view .mobile-entity-rail .dd-domain-add-card-final{height:58px}}which also swallowed pointer events for the new handle. */ .area-view .mobile-domain-group.group-editing .mobile-domain-title{pointer-events:auto}.area-view .mobile-domain-group.group-editing .mobile-domain-title-copy,.area-view .mobile-domain-group.group-editing .room-domain-icon{pointer-events:none}.area-view .mobile-domain-leading-drag-handle{pointer-events:auto;user-select:none;-webkit-user-select:none;-webkit-user-drag:element}.area-view .mobile-domain-header.room-favorites-header.expandable-header{min-height:32px;padding:3px 9px;border-radius:7px}.area-view .room-favorites-title{min-height:20px}.area-view .room-favorites-title .room-domain-icon{width:19px;height:19px}.area-view .room-favorites-title .room-domain-icon ha-icon{--mdc-icon-size:16px}@media (min-width:769px){.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{grid-template-columns:repeat(4,minmax(0,1fr)) !important;gap:8px !important}.area-view .mobile-entity-card,.area-view .mobile-entities-section.layout-grid .mobile-entity-card{min-height:62px !important;padding:8px 10px !important;justify-content:center !important;overflow:hidden !important}.area-view .mobile-entity-card.has-light-controls,.area-view .mobile-entity-card.has-cover-position{min-height:104px !important;justify-content:flex-start !important}.area-view .mobile-entity-main{grid-template-columns:36px minmax(0,1fr) auto !important;gap:9px !important;align-items:center !important}.area-view .mobile-entity-content{min-width:0 !important;height:36px !important;display:flex !important;flex-direction:column !important;justify-content:center !important;gap:3px !important;overflow:hidden !important}.area-view .mobile-entity-name{min-width:0 !important;width:100% !important;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;font-size:12px !important;line-height:1.08 !important;letter-spacing:-0.1px !important}.area-view .mobile-entity-state{margin:0 !important;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;font-size:10.5px !important;font-weight:800 !important;line-height:1 !important}.area-view .mobile-entity-right{min-width:max-content !important;max-width:86px !important;margin-left:4px !important;align-self:center !important}.area-view .mobile-cover-actions{min-height:30px !important;padding:2px !important;gap:2px !important}.area-view .mobile-cover-action{width:25px !important;height:25px !important}}@media (min-width:769px){.area-view .mobile-entity-card.has-light-controls,.area-view .mobile-entity-card.has-cover-position{min-height:94px !important;padding-bottom:6px !important}}@media (min-width:769px){.area-view .mobile-entity-card,.area-view .mobile-entities-section.layout-grid .mobile-entity-card{min-height:60px !important;padding:10px !important;box-sizing:border-box !important}.area-view .mobile-entity-main{min-height:38px !important;align-items:center !important}.area-view .mobile-entity-icon{width:38px !important;height:38px !important}.area-view .mobile-entity-content{height:38px !important}.area-view .mobile-entity-card.has-light-controls,.area-view .mobile-entity-card.has-cover-position{min-height:0 !important;height:auto !important;padding:8px 10px !important;justify-content:flex-start !important}.area-view .mobile-entity-card.has-light-controls .mobile-entity-main,.area-view .mobile-entity-card.has-cover-position .mobile-entity-main{min-height:38px !important}}@media (min-width:769px){.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{align-items:start !important}.area-view .mobile-entity-card,.area-view .mobile-entities-section.layout-grid .mobile-entity-card{align-self:start !important}}@media (min-width:769px){.area-view .mobile-light-control-slider,.area-view .mobile-cover-position input[type="range"]{height:5px !important}.area-view .mobile-light-control-slider::-webkit-slider-runnable-track,.area-view .mobile-cover-position input[type="range"]::-webkit-slider-runnable-track{height:5px !important;min-height:5px !important;max-height:5px !important;border-radius:999px !important}.area-view .mobile-light-control-slider::-moz-range-track,.area-view .mobile-cover-position input[type="range"]::-moz-range-track{height:5px !important;min-height:5px !important;max-height:5px !important;border-radius:999px !important}.area-view .mobile-light-control-slider::-moz-range-progress{height:5px !important;min-height:5px !important;max-height:5px !important;border-radius:999px !important}.area-view .mobile-light-control-slider::-webkit-slider-thumb,.area-view .mobile-cover-position input[type="range"]::-webkit-slider-thumb{width:15px !important;height:15px !important}.area-view .mobile-light-control-slider::-moz-range-thumb,.area-view .mobile-cover-position input[type="range"]::-moz-range-thumb{width:13px !important;height:13px !important}.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{align-items:start !important;grid-auto-rows:max-content !important}.area-view .mobile-entity-rail>.mobile-entity-card,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail>.mobile-entity-card{align-self:start !important;height:fit-content !important}.area-view .mobile-entity-card.has-light-controls,.area-view .mobile-entity-card.has-cover-position{height:auto !important}}@media (min-width:769px){.area-view .room-favorites-block:not(.is-collapsed) .room-favorites-header{margin-bottom:0 !important}}@media (min-width:769px){.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{grid-template-columns:repeat(4,minmax(0,1fr)) !important;gap:10px !important}.area-view .mobile-entity-card,.area-view .mobile-entities-section.layout-grid .mobile-entity-card{min-height:72px !important;padding:12px !important;border-radius:10px !important;box-sizing:border-box !important}.area-view .mobile-entity-main{min-height:46px !important;grid-template-columns:46px minmax(0,1fr) auto !important;gap:11px !important}.area-view .mobile-entity-main.editing-inline{grid-template-columns:29px 46px minmax(0,1fr) 42px !important;gap:8px !important}.area-view .mobile-entity-icon{width:46px !important;height:46px !important;border-radius:10px !important}.area-view .mobile-entity-icon ha-icon{--mdc-icon-size:24px !important}.area-view .mobile-entity-content{height:46px !important;gap:3px !important}.area-view .mobile-entity-name{font-size:14.4px !important;line-height:1.15 !important}.area-view .mobile-entity-state{font-size:12.7px !important;line-height:1.1 !important}.area-view .mobile-entity-right{gap:5px !important;max-width:104px !important}.area-view .mobile-entity-toggle{width:46px !important;height:27px !important}.area-view .mobile-entity-toggle::before{width:21px !important;height:21px !important;margin-left:3px !important}.area-view .mobile-entity-card.is-active .mobile-entity-toggle::before{transform:translateX(19px) !important}.area-view .mobile-entity-card.has-light-controls,.area-view .mobile-entity-card.has-cover-position{min-height:112px !important;padding:9px 12px !important}.area-view .mobile-entity-card.has-light-controls .mobile-entity-main,.area-view .mobile-entity-card.has-cover-position .mobile-entity-main{min-height:46px !important}.area-view .mobile-light-control-row{margin-top:9px !important;min-height:32px !important}.area-view .mobile-light-control-slider,.area-view .mobile-cover-position input[type="range"]{height:6px !important}.area-view .mobile-light-control-slider::-webkit-slider-runnable-track,.area-view .mobile-cover-position input[type="range"]::-webkit-slider-runnable-track,.area-view .mobile-light-control-slider::-moz-range-track,.area-view .mobile-cover-position input[type="range"]::-moz-range-track,.area-view .mobile-light-control-slider::-moz-range-progress{height:6px !important}.area-view .mobile-light-control-slider::-webkit-slider-thumb,.area-view .mobile-cover-position input[type="range"]::-webkit-slider-thumb{width:18px !important;height:18px !important}.area-view .mobile-light-control-slider::-moz-range-thumb,.area-view .mobile-cover-position input[type="range"]::-moz-range-thumb{width:16px !important;height:16px !important}.area-view .mobile-light-mode-buttons{gap:5px !important}.area-view .mobile-light-mode-button{width:34px !important;height:34px !important;border-radius:9px !important}.area-view .mobile-light-mode-button ha-icon{--mdc-icon-size:20px !important}.area-view .mobile-cover-actions{min-height:36px !important;padding:3px !important;gap:3px !important}.area-view .mobile-cover-action{width:31px !important;height:31px !important}.area-view .mobile-cover-action ha-icon{--mdc-icon-size:20px !important}.area-view .mobile-entities-section,.area-view .mobile-domain-group{width:100% !important;align-self:stretch !important;box-sizing:border-box !important}}@media (min-width:769px){.area-view{width:100% !important;max-width:none !important;margin:0 !important;box-sizing:border-box !important}.area-view>.mobile-entities-section,.area-view>.mobile-entities-section>.mobile-domain-group,.area-view>.mobile-entities-section>.mobile-domain-group>.mobile-entity-rail{width:100% !important;max-width:none !important;box-sizing:border-box !important}}@media (min-width:769px){.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{grid-template-columns:repeat(5,minmax(0,1fr)) !important}}@media (min-width:769px){.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{grid-template-columns:repeat(5,minmax(0,1fr)) !important}}@media (min-width:769px){.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{grid-template-columns:repeat(5,minmax(0,1fr)) !important}}@media (min-width:769px){.area-view .mobile-entity-rail,.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{grid-template-columns:repeat(4,minmax(0,1fr)) !important}}@media (min-width:769px){.area-view .mobile-entity-card.has-inline-select{display:grid !important;grid-template-columns:minmax(0,1fr) !important;grid-template-rows:46px 42px !important;align-content:center !important;gap:7px !important;min-height:123px !important;height:auto !important;padding:9px 12px !important;overflow:hidden !important}.area-view .mobile-entity-card.has-inline-select .mobile-entity-main{grid-column:1 !important;grid-row:1 !important;width:100% !important;min-width:0 !important;height:46px !important;min-height:46px !important;display:grid !important;grid-template-columns:46px minmax(0,1fr) !important;grid-template-areas:"icon content" !important;align-items:center !important;gap:11px !important;direction:ltr !important}.area-view .mobile-entity-card.has-inline-select .mobile-entity-icon{grid-area:icon !important;position:static !important;inset:auto !important;width:46px !important;min-width:46px !important;height:46px !important;min-height:46px !important;margin:0 !important;padding:0 !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;justify-self:start !important;align-self:center !important;transform:none !important}.area-view .mobile-entity-card.has-inline-select .mobile-entity-icon>.mobile-entity-leading-select-icon{position:static !important;inset:auto !important;display:block !important;width:24px !important;height:24px !important;min-width:24px !important;min-height:24px !important;margin:0 !important;padding:0 !important;transform:none !important;--mdc-icon-size:24px !important;pointer-events:none !important}.area-view .mobile-entity-card.has-inline-select .mobile-entity-content{grid-area:content !important;min-width:0 !important;height:46px !important;margin:0 !important;align-self:center !important;justify-content:center !important}.area-view .mobile-entity-card.has-inline-select .mobile-entity-right{display:none !important}.area-view .mobile-entity-card.has-inline-select .mobile-entity-select{grid-column:1 !important;grid-row:2 !important;position:relative !important;width:100% !important;height:42px !important;min-height:42px !important;margin:0 !important}.area-view .mobile-entity-card.has-inline-select .mobile-entity-select select{width:100% !important;height:42px !important;box-sizing:border-box !important;padding:0 42px 0 15px !important;font-size:14.4px !important;line-height:42px !important}.area-view .mobile-entity-card.has-inline-select .mobile-select-chevron{position:absolute !important;top:50% !important;right:12px !important;left:auto !important;bottom:auto !important;margin:0 !important;transform:translateY(-50%) !important;--mdc-icon-size:20px !important;pointer-events:none !important}}`,Ye=()=>import("./dwains-domain-entities-dialog-Dn8ubWaD.js"),Ke=(e,t)=>{be(e,"show-dialog",{dialogTag:"dwains-dashboard-next-domain-entities-dialog",dialogImport:Ye,dialogParams:t})},Be=new Map;let Xe,Qe=!1;const Je=e=>{if(Qe)return;Qe=!0;const t=()=>{Xe=window.setInterval(()=>{Be.size>0?Be.forEach(t=>{t&&"hass"in t&&(t.hass=e.hass)}):Xe&&(clearInterval(Xe),Xe=void 0)},100)};e.addEventListener("show-dialog",async a=>{const i=a;i.stopPropagation(),i.stopImmediatePropagation();const{dialogTag:o,dialogImport:r,dialogParams:n}=i.detail;if(Be.has(o))return void console.warn(`Dialog ${o} is already open`);await r();const s=document.querySelector(o);s&&s.remove();const c=document.createElement(o);c.hass=e.hass,Be.set(o,c),document.body.appendChild(c),requestAnimationFrame(()=>{c.showDialog(n)});c.addEventListener("dialog-closed",()=>{Be.delete(o),document.body.contains(c)&&c.remove(),0===Be.size&&Xe&&(clearInterval(Xe),Xe=void 0)},{once:!0}),1!==Be.size||Xe||t()},{capture:!0})};class Ze extends HTMLElement{constructor(){super(...arguments),this._child=null}static get observedAttributes(){return["entity","name"]}set hass(e){this._hass=e,this._child&&(this._child.hass=e)}get hass(){return this._hass}attributeChangedCallback(e,t,a){"entity"===e&&(this._entityId=a??void 0),"name"===e&&(this._name=a??void 0),this._ensureChild()}connectedCallback(){this.style.display="block",this._ensureChild()}disconnectedCallback(){this._child=null,this.innerHTML=""}async _ensureChild(){if(this.isConnected&&this._entityId)if(this._child&&this.contains(this._child)&&this._child.getAttribute("data-entity")===this._entityId)this._hass&&(this._child.hass=this._hass);else{if(!customElements.get("hui-tile-card"))try{await customElements.whenDefined("hui-tile-card")}catch{return}this._child&&this.contains(this._child)||(this._child=document.createElement("hui-tile-card"),this._child.classList.add("favorite-tile"),this._child.setAttribute("data-entity",this._entityId),this.innerHTML="",this.appendChild(this._child));try{if("setConfig"in this._child){const e={entity:this._entityId};this._name&&(e.name=this._name),this._child.setConfig(e)}this._hass&&this.contains(this._child)&&(this._child.hass=this._hass)}catch(e){console.warn("dwains-dashboard-next-tile-host: failed to configure tile",e)}}}}customElements.get("dwains-dashboard-next-tile-host")||customElements.define("dwains-dashboard-next-tile-host",Ze);const et="dwainsDashboardNextSettingsOpen",tt="dd-next-area-sidebar-width",at="dd-next-area-sidebar-collapsed",it=240,ot="__ungrouped__";let rt=class extends n{constructor(){super(...arguments),this._t=(e,t)=>I(this.hass,e,t),this._tp=(e,t)=>q(this.hass,e,t),this._selectedArea=null,this._selectedView=null,this._isMobile=!1,this._headerExpanded=!1,this._headerCompact=!1,this._headerStatusCanScrollLeft=!1,this._headerStatusCanScrollRight=!1,this._favoritesRenderVersion=0,this._currentTime="",this._currentDate="",this._mobileNavOpen=!1,this._editMode=!1,this._notificationsOpen=!1,this._persistentNotifications=[],this._notificationsLoading=!1,this._notificationsError="",this._areaHeaderStuck=!1,this._areaHeaderRevealed=!1,this._mobileEntityLayout="rail",this._mobileHomeAreasLayout="rail",this._mobileHomeDevicesLayout="rail",this._mobileHomeFavoritesLayout="rail",this._mobileHomeCamerasLayout="rail",this._areaSidebarWidth=250,this._areaSidebarCollapsed=!1,this._isResizingSidebar=!1,this._repairsIssueCount=0,this._discoveredDeviceCount=0,this._suggestedFavoriteEntities=[],this._customCardDrag=null,this._customCardDragOver=null,this._generatedCardDrag=null,this._generatedCardDragOver=null,this._generatedGroupDrag=null,this._generatedGroupDragOver=null,this._optimisticEntityStates={},this._renderAllMobileHomeAreas=!1,this._renderAllMobileAreaEntities=!1,this._collapsedAreaGroups={},this._settingsDirty=!1,this._deviceSettingsDirty=!1,this._settingsSavePending=!1,this._settingsSaveError="",this._settingsPageKey="overview",this._settingsPageTitle="",this._settingsPageParentTitle="",this._settingsPageDescription="",this._confirmationDialog=null,this._housePowerDialogOpen=!1,this._areaEntitiesCache=new Map,this._areaDataCache=new Map,this._domainCountsCache=new Map,this._CACHE_DURATION=5e3,this._persistentNotificationsLoaded=!1,this._homeSummariesLoaded=!1,this._favoriteSuggestionsLoaded=!1,this._favoriteSuggestionsLoading=!1,this._pendingAreaScrollTop=0,this._lastAreaScrollTop=0,this._areaScrollUpDistance=0,this._pictureContrastCache=new Map,this._areaSidebarScrollTop=0,this._settingsEditorInitialized=!1,this._settingsRestorePageKey="overview",this._handleHeaderStatusScroll=()=>{this._scheduleHeaderStatusScrollState()},this._handleHeaderStatusWheel=e=>{const t=e.currentTarget;!t||t.scrollWidth<=t.clientWidth||Math.abs(e.deltaY)>Math.abs(e.deltaX)&&(e.preventDefault(),t.scrollLeft+=e.deltaY)},this._handleResize=()=>{if(this._checkMobile(),!this._isMobile){const e=this._clampAreaSidebarWidth(this._areaSidebarWidth);e!==this._areaSidebarWidth&&(this._areaSidebarWidth=e)}this._updateAreaHeaderScrollState()},this._handleSidebarScroll=e=>{if(this._isMobile)return;const t=e.currentTarget;t&&(this._areaSidebarScrollTop=t.scrollTop)},this._handleContentScroll=e=>{if(!this._isMobile||"area"!==this._selectedView)return this._areaHeaderStuck&&(this._areaHeaderStuck=!1),void(this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1));const t=e.currentTarget,a=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||t?.scrollTop||0;this._pendingAreaScrollTop=a,this._areaHeaderScrollRaf||(this._areaHeaderScrollRaf=requestAnimationFrame(()=>{this._areaHeaderScrollRaf=void 0,this._setAreaHeaderStuckForScroll(this._pendingAreaScrollTop,!0)}))},this._handleWindowScroll=()=>{this._isMobile&&"area"===this._selectedView&&(this._pendingAreaScrollTop=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,this._areaHeaderScrollRaf||(this._areaHeaderScrollRaf=requestAnimationFrame(()=>{this._areaHeaderScrollRaf=void 0,this._setAreaHeaderStuckForScroll(this._pendingAreaScrollTop,!0)})))},this._handleShowMoreInfo=e=>{be(this,"hass-more-info",{entityId:e.detail.entityId})},this._startSidebarResize=e=>{this._isMobile||0!==e.button||(e.preventDefault(),this._sidebarResizePointerId=e.pointerId,this._isResizingSidebar=!0,e.currentTarget?.setPointerCapture?.(e.pointerId),window.addEventListener("pointermove",this._handleSidebarResizeMove),window.addEventListener("pointerup",this._handleSidebarResizeEnd),window.addEventListener("pointercancel",this._handleSidebarResizeEnd))},this._handleSidebarResizeMove=e=>{if(!this._isResizingSidebar||this._isMobile)return;if(void 0!==this._sidebarResizePointerId&&e.pointerId!==this._sidebarResizePointerId)return;const t=this.renderRoot?.querySelector(".layout-container"),a=t?.getBoundingClientRect().left??0,i=e.clientX-a;i<=96?this._areaSidebarCollapsed=!0:(this._areaSidebarCollapsed&&(this._areaSidebarCollapsed=!1),this._areaSidebarWidth=this._clampAreaSidebarWidth(i))},this._handleSidebarResizeEnd=e=>{this._isResizingSidebar&&(e&&void 0!==this._sidebarResizePointerId&&e.pointerId!==this._sidebarResizePointerId||(this._isResizingSidebar=!1,this._sidebarResizePointerId=void 0,this._saveAreaSidebarWidthPreference(this._areaSidebarWidth),this._saveAreaSidebarCollapsedPreference(this._areaSidebarCollapsed),window.removeEventListener("pointermove",this._handleSidebarResizeMove),window.removeEventListener("pointerup",this._handleSidebarResizeEnd),window.removeEventListener("pointercancel",this._handleSidebarResizeEnd)))},this._toggleAreaSidebarCollapsed=e=>{e?.stopPropagation(),this._isMobile||(this._areaSidebarCollapsed=!this._areaSidebarCollapsed,this._saveAreaSidebarCollapsedPreference(this._areaSidebarCollapsed),this._areaSidebarCollapsed||(this._areaSidebarWidth=this._clampAreaSidebarWidth(this._areaSidebarWidth||250),this._saveAreaSidebarWidthPreference(this._areaSidebarWidth)))},this._handleSidebarResizeKeydown=e=>{if(this._isMobile)return;let t=this._areaSidebarWidth;if("ArrowLeft"===e.key)t-=e.shiftKey?40:20;else if("ArrowRight"===e.key)t+=e.shiftKey?40:20;else if("Home"===e.key)t=it;else{if("End"!==e.key)return;t=660}e.preventDefault(),this._areaSidebarWidth=this._clampAreaSidebarWidth(t),this._saveAreaSidebarWidthPreference(this._areaSidebarWidth)},this._toggleMobileEntityLayout=e=>{e?.stopPropagation(),this._mobileEntityLayout="rail"===this._mobileEntityLayout?"grid":"rail";try{window.localStorage.setItem("dd-next-mobile-entity-layout",this._mobileEntityLayout)}catch{}},this._toggleMobileHomeAreasLayout=e=>{e?.stopPropagation(),this._mobileHomeAreasLayout="rail"===this._mobileHomeAreasLayout?"grid":"rail";try{window.localStorage.setItem("dd-next-mobile-home-areas-layout",this._mobileHomeAreasLayout)}catch{}},this._toggleMobileHomeDevicesLayout=e=>{e?.stopPropagation(),this._mobileHomeDevicesLayout="rail"===this._mobileHomeDevicesLayout?"grid":"rail";try{window.localStorage.setItem("dd-next-mobile-home-devices-layout",this._mobileHomeDevicesLayout)}catch{}},this._toggleMobileHomeFavoritesLayout=e=>{e?.stopPropagation(),this._mobileHomeFavoritesLayout="rail"===this._mobileHomeFavoritesLayout?"grid":"rail";try{window.localStorage.setItem("dd-next-mobile-home-favorites-layout",this._mobileHomeFavoritesLayout)}catch{}},this._toggleMobileHomeCamerasLayout=e=>{e?.stopPropagation(),this._mobileHomeCamerasLayout="rail"===this._mobileHomeCamerasLayout?"grid":"rail";try{window.localStorage.setItem("dd-next-mobile-home-cameras-layout",this._mobileHomeCamerasLayout)}catch{}},this._debouncedUpdate=()=>{this._updateDebounceTimer&&clearTimeout(this._updateDebounceTimer),this._updateDebounceTimer=window.setTimeout(()=>{this.requestUpdate()},100)},this._nowPlayingPlayers=function(e,t){void 0===t&&(t=ye);var a=null;function i(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(a&&a.lastThis===this&&t(i,a.lastArgs))return a.lastResult;var r=e.apply(this,i);return a={lastResult:r,lastArgs:i,lastThis:this},r}return i.clear=function(){a=null},i}((e,t,a,i,o)=>oe(ge(t,"media_player"),{now:Date.now(),isVisible:t=>ne(e,a,t)}).map(t=>({entityId:t,roomName:re(e,a,t)}))),this._handleHousePowerKeydown=e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._openHousePowerDialog())},this._openHousePowerDialog=()=>{this._housePowerDialogOpen=!0},this._closeHousePowerDialog=()=>{this._housePowerDialogOpen=!1},this._openEnergyFromPowerDialog=()=>{this._closeHousePowerDialog(),this._openDeviceDomain("energy")},this._handleHousePowerDialogKeydown=e=>{"Escape"===e.key&&(e.preventDefault(),this._closeHousePowerDialog())},this._toggleEditMode=()=>{if(!this._canManageDashboard())return this._editMode=!1,void this._rememberAreaEditMode(null);this._editMode=!this._editMode,this._rememberAreaEditMode(this._editMode&&"area"===this._selectedView?this._selectedArea:null)},this._clearCustomCardDragState=()=>{this._customCardDrag=null,this._customCardDragOver=null},this._clearGeneratedGroupDragState=()=>{this._generatedGroupDrag=null,this._generatedGroupDragOver=null},this._clearGeneratedCardDragState=()=>{this._generatedCardDrag=null,this._generatedCardDragOver=null},this._handleHomeNavigationKeydown=e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._selectView("home"))},this._handleAreaNavToggle=()=>{this._isMobile&&this._toggleMobileNav()},this._handleOpenSettingsEvent=()=>{this._openDashboardSettings()},this._handleOpenHomeEvent=()=>{this._selectView("home")},this._openMobileAreaSwitcher=async()=>{this._isMobile&&await this._confirmDiscardSettings()&&(this._selectedView="home",this._selectedArea=null,this._resetAreaHeaderScrollState(!1),this._editMode=!1,this._rememberAreaEditMode(null),this._updateUrlArea(null),this._clearSettingsEditState(),this._mobileNavOpen=!0)},this._openMobileDeviceSwitcher=()=>{this._isMobile&&(this._navigateToDeviceDomain(null),[160,360,700].forEach(e=>{window.setTimeout(()=>{window.dispatchEvent(new CustomEvent("dwains-dashboard-next-toggle-devices-nav",{detail:{open:!0}}))},e)}))},this._handleSettingsConfigChanged=e=>{e.stopPropagation();const t=e.detail;this._pendingSettingsConfig=t?.config,this._settingsDirty=Boolean(this._pendingSettingsConfig)||this._deviceSettingsDirty,this._settingsSaveError=""},this._handleDeviceSettingsChanged=e=>{e.stopPropagation();const t=e.detail;this._deviceSettingsDirty=Boolean(t?.dirty),this._settingsDirty=Boolean(this._pendingSettingsConfig)||this._deviceSettingsDirty,this._settingsSaveError=""},this._handleSettingsPageChanged=e=>{e.stopPropagation();const t=e.detail||{};this._settingsPageKey=t.page||"overview",this._settingsRestorePageKey=this._settingsPageKey,this._settingsRestoreAreaId=t.areaId||void 0,this._settingsPageTitle=t.title||"",this._settingsPageParentTitle=t.parentTitle||"",this._settingsPageDescription=t.description||"",this._setSettingsHistoryState(!0)},this._settingsBackToOverview=()=>{const e=this.renderRoot?.querySelector("dwains-dashboard-next-strategy-editor");e?._backToSettingsOverview?.()},this._settingsSecondaryAction=()=>{this._closeSettingsPage()},this._closeSettingsPage=async()=>{await this._confirmDiscardSettings()&&(this._clearSettingsEditState(),await this._selectView("home"))},this._openDashboardSettings=()=>{this._canManageDashboard()&&(this._setSettingsHistoryState(!0),this._resetAreaHeaderScrollState(!0),this._selectedArea=null,this._selectedView="settings",this._editMode=!1,this._rememberAreaEditMode(null),this._updateUrlArea(null),this._pendingSettingsConfig=void 0,this._settingsDirty=!1,this._settingsSaveError="",this._settingsEditorInitialized=!1,this._settingsPageKey="overview",this._settingsRestorePageKey="overview",this._settingsRestoreAreaId=void 0,this._settingsPageTitle="",this._settingsPageParentTitle="",this._settingsPageDescription="",this._setSettingsHistoryState(!0),this._closeMobileNav(),this._syncBottomNavAreaContext(),this.updateComplete.then(()=>this._scrollContentAreaToTop()))},this._openProfileSettings=()=>{M("/profile/general")},this._openNotificationsFromHomeShortcut=e=>{e.preventDefault(),e.stopPropagation(),this._closeMobileNav(),this._openNotifications()},this._openNotifications=()=>{this._showNotificationsUi()&&(this._notificationsOpen=!0,this._persistentNotificationsLoaded=!0,this._loadPersistentNotifications(!0),this._ensurePersistentNotificationsSubscription())},this._closeNotifications=()=>{this._notificationsOpen=!1},this._dismissPersistentNotification=async e=>{const t=this._persistentNotifications;this._persistentNotifications=t.filter(t=>t.notification_id!==e);try{await this.hass.callService("persistent_notification","dismiss",{notification_id:e}),this._notificationsError=""}catch(e){console.error("Failed to dismiss persistent notification:",e),this._persistentNotifications=t,this._notificationsError=this._t("error.notification_dismiss")}},this._dismissAllPersistentNotifications=async()=>{const e=this._persistentNotifications;this._persistentNotifications=[];try{await this.hass.callService("persistent_notification","dismiss_all"),this._notificationsError=""}catch(t){console.error("Failed to dismiss all persistent notifications:",t),this._persistentNotifications=e,this._notificationsError=this._t("error.notifications_dismiss_all")}},this._handleConfirmationKeydown=e=>{"Escape"===e.key&&(e.preventDefault(),this._resolveConfirmation(!1))}}setConfig(e){if(!e)throw new Error("Invalid configuration");if(this.config=e,!this._selectedView){const t=Boolean(window.history.state?.[et]),a=this._getUrlArea();if(t){this._selectedArea=null,this._selectedView="settings";const e=window.history.state?.[et];e&&"object"==typeof e&&(this._settingsRestorePageKey="string"==typeof e.page?e.page:"overview",this._settingsRestoreAreaId="string"==typeof e.areaId?e.areaId:void 0)}else a&&e.areas?.some(e=>e.area_id===a)?(this._selectedArea=a,this._selectedView="area"):this._selectedView="home"}this._restoreAreaEditMode()}_getUrlArea(){try{return new URL(window.location.href).searchParams.get("dd_area")}catch{return null}}_updateUrlArea(e){try{const t=new URL(window.location.href);e?t.searchParams.set("dd_area",e):t.searchParams.delete("dd_area"),window.history.replaceState(window.history.state,"",t.toString())}catch{}}_setSettingsHistoryState(e){try{const t={...window.history.state&&"object"==typeof window.history.state?window.history.state:{}};e?t[et]={page:this._settingsPageKey||"overview",areaId:this._settingsRestoreAreaId}:delete t[et],window.history.replaceState(t,"",window.location.href)}catch{}}_syncBottomNavAreaContext(){const e=this.config?.areas?.find(e=>e.area_id===this._selectedArea),t="settings"===this._selectedView;window.dispatchEvent(new CustomEvent("dwains-dashboard-next-area-context-changed",{detail:{areaId:"area"===this._selectedView?this._selectedArea:null,icon:t?"mdi:pencil":e?l(e):"mdi:home",name:t?this._t("sidebar.dashboard_settings"):e?.name||this._t("sidebar.home"),view:this._selectedView||"home"}}))}_canManageDashboard(){return!R(this.hass,this.config?.settings)}_areaEditModeStorageKey(){return`dd-next-area-edit-mode:${this._getDashboardUrlPath()||"default"}`}_rememberAreaEditMode(e){try{const t=this._areaEditModeStorageKey();if(!e)return void window.sessionStorage.removeItem(t);window.sessionStorage.setItem(t,JSON.stringify({areaId:e,updatedAt:Date.now()}))}catch{}}_restoreAreaEditMode(){if(!this._canManageDashboard())return this._editMode=!1,void this._rememberAreaEditMode(null);try{const e=window.sessionStorage.getItem(this._areaEditModeStorageKey());if(!e)return;const t=JSON.parse(e),a="number"==typeof t.updatedAt&&Date.now()-t.updatedAt<=3e4;if(!t.areaId||!a)return void this._rememberAreaEditMode(null);"area"===this._selectedView&&this._selectedArea===t.areaId&&(this._editMode=!0)}catch{this._rememberAreaEditMode(null)}}_showNotificationsUi(){return!1!==this.config?.settings?.show_notifications}_showSuggestedFavoritesUi(){return!1!==this.config?.settings?.show_suggested_favorites}_hasUsagePredictionComponent(){return Boolean(this.hass?.config?.components?.includes("usage_prediction"))}_isFavoriteEntityVisible(e){const t=this.hass?.states?.[e],a=this.hass?.entities?.[e];return Boolean(t&&"unavailable"!==t.state&&"unknown"!==t.state&&!a?.hidden_by&&!a?.hidden)}_getManualFavoriteEntities(){const e=new Set;return(this.config?.favorites||[]).filter(t=>!e.has(t)&&(e.add(t),this._isFavoriteEntityVisible(t)))}_getEffectiveFavoriteEntities(){const e=this._getManualFavoriteEntities();if(!this._showSuggestedFavoritesUi())return e;const t=Math.max(8,e.length);if(e.length>=t)return e.slice(0,t);const a=new Set(e),i=this._suggestedFavoriteEntities.filter(e=>!a.has(e)&&(!!this._isFavoriteEntityVisible(e)&&(a.add(e),!0)));return[...e,...i].slice(0,t)}_ensureFavoriteSuggestionsFeature(){if(this.hass&&this._showSuggestedFavoritesUi()&&!this._favoriteSuggestionsLoaded&&!this._favoriteSuggestionsLoading)return this._hasUsagePredictionComponent()?void(this._getManualFavoriteEntities().length>=8||this._loadFavoriteSuggestions()):(this._favoriteSuggestionsLoaded=!0,void(this._suggestedFavoriteEntities=[]))}async _loadFavoriteSuggestions(){if(this.hass&&!this._favoriteSuggestionsLoading){this._favoriteSuggestionsLoading=!0;try{const e=await this.hass.callWS({type:"usage_prediction/common_control"});this._suggestedFavoriteEntities=Array.isArray(e?.entities)?e.entities.filter(e=>"string"==typeof e):[]}catch(e){console.debug("Dwains Dashboard: favorite suggestions are not available.",e),this._suggestedFavoriteEntities=[]}finally{this._favoriteSuggestionsLoading=!1,this._favoriteSuggestionsLoaded=!0}}}_ensurePersistentNotificationsFeature(){this._showNotificationsUi()&&this.hass&&!this._persistentNotificationsLoaded&&(this._persistentNotificationsLoaded=!0,this._loadPersistentNotifications(!1),this._ensurePersistentNotificationsSubscription())}static getStubConfig(){return{type:"custom:dwains-dashboard-next-layout-card",areas:[],devices:[],entities:[],floors:[],settings:{},favorites:[]}}connectedCallback(){super.connectedCallback(),this._syncThemeAttribute(),this._loadMobileEntityLayoutPreference(),this._loadAreaSidebarWidthPreference(),this._loadAreaSidebarCollapsedPreference(),this._checkMobile(),this._setupEventListeners(),window.addEventListener("dwains-dashboard-next-toggle-area-nav",this._handleAreaNavToggle),window.addEventListener("dwains-dashboard-next-open-settings",this._handleOpenSettingsEvent),window.addEventListener("dwains-dashboard-next-open-home",this._handleOpenHomeEvent),this._startTimeUpdate(),this._initializeObservers(),Je(this),requestAnimationFrame(()=>this._restorePendingRoomDragScroll()),window.setTimeout(()=>this._restorePendingRoomDragScroll(),120),window.setTimeout(()=>this._restorePendingRoomDragScroll(),420)}willUpdate(e){if(super.willUpdate(e),e.has("config")&&this.hass&&(this._clearEntityCardsCache(),j(this.hass,this.config?.settings),!this._canManageDashboard()&&this._editMode&&(this._editMode=!1,this._rememberAreaEditMode(null))),e.has("hass")&&this.hass){this._syncThemeAttribute(),j(this.hass,this.config?.settings),this._syncBottomNavAreaContext(),this._reconcileOptimisticEntityStates(),!this._canManageDashboard()&&this._editMode&&(this._editMode=!1,this._rememberAreaEditMode(null));const t=e.get("hass");t&&this._shouldUpdateEntities(t,this.hass)&&this._invalidateChangedAreaCaches(t,this.hass)}}_scheduleHeaderStatusScrollState(){void 0!==this._headerStatusScrollRaf&&cancelAnimationFrame(this._headerStatusScrollRaf),this._headerStatusScrollRaf=requestAnimationFrame(()=>{this._headerStatusScrollRaf=void 0,this._updateHeaderStatusScrollState()})}_updateHeaderStatusScrollState(){const e=this.shadowRoot?.querySelector(".header-status-scroll");if(!e)return void((this._headerStatusCanScrollLeft||this._headerStatusCanScrollRight)&&(this._headerStatusCanScrollLeft=!1,this._headerStatusCanScrollRight=!1));const t=Math.max(0,e.scrollWidth-e.clientWidth),a=e.scrollLeft>1,i=e.scrollLeft<t-1;this._headerStatusCanScrollLeft!==a&&(this._headerStatusCanScrollLeft=a),this._headerStatusCanScrollRight!==i&&(this._headerStatusCanScrollRight=i)}_scrollHeaderStatus(e){const t=this.shadowRoot?.querySelector(".header-status-scroll");if(!t)return;const a=t.querySelector(".status-card-compact");if(!a)return;const i=getComputedStyle(t),o=Number.parseFloat(i.columnGap||i.gap||"0")||0,r=a.getBoundingClientRect().width+o,n=Math.max(r,.72*t.clientWidth);t.scrollBy({left:e*n,behavior:"smooth"})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("dwains-dashboard-next-toggle-area-nav",this._handleAreaNavToggle),window.removeEventListener("dwains-dashboard-next-open-settings",this._handleOpenSettingsEvent),window.removeEventListener("dwains-dashboard-next-open-home",this._handleOpenHomeEvent),window.removeEventListener("pointermove",this._handleSidebarResizeMove),window.removeEventListener("pointerup",this._handleSidebarResizeEnd),window.removeEventListener("pointercancel",this._handleSidebarResizeEnd),this._persistentNotificationsUnsub?.(),this._persistentNotificationsUnsub=void 0,this._cleanupEventListeners(),this._cleanupObservers(),this._timeInterval&&clearInterval(this._timeInterval),this._homeSummariesRefreshInterval&&(clearInterval(this._homeSummariesRefreshInterval),this._homeSummariesRefreshInterval=void 0),this._areaHeaderScrollRaf&&(cancelAnimationFrame(this._areaHeaderScrollRaf),this._areaHeaderScrollRaf=void 0),void 0!==this._headerStatusScrollRaf&&(cancelAnimationFrame(this._headerStatusScrollRaf),this._headerStatusScrollRaf=void 0),void 0!==this._areaSidebarRestoreRaf&&(cancelAnimationFrame(this._areaSidebarRestoreRaf),this._areaSidebarRestoreRaf=void 0),void 0!==this._optimisticCleanupTimer&&(window.clearTimeout(this._optimisticCleanupTimer),this._optimisticCleanupTimer=void 0),this._progressiveRenderCancel&&(this._progressiveRenderCancel(),this._progressiveRenderCancel=void 0),this._confirmationResolve?.(!1),this._confirmationResolve=void 0,this._confirmationDialog=null}_setupEventListeners(){window.addEventListener("resize",this._handleResize),window.addEventListener("scroll",this._handleWindowScroll,{passive:!0}),this.addEventListener("show-more-info",this._handleShowMoreInfo)}_cleanupEventListeners(){window.removeEventListener("resize",this._handleResize),window.removeEventListener("scroll",this._handleWindowScroll),this.removeEventListener("show-more-info",this._handleShowMoreInfo)}_isDesktopAreaSidebarCollapsed(){return this._areaSidebarCollapsed&&!this._isMobile}_restoreAreaSidebarScroll(){this._isMobile||this._isDesktopAreaSidebarCollapsed()||(void 0!==this._areaSidebarRestoreRaf&&cancelAnimationFrame(this._areaSidebarRestoreRaf),this._areaSidebarRestoreRaf=requestAnimationFrame(()=>{this._areaSidebarRestoreRaf=void 0;const e=this.shadowRoot?.querySelector(".sidebar");if(!e)return;const t=Math.max(0,e.scrollHeight-e.clientHeight),a=Math.min(this._areaSidebarScrollTop,t);Math.abs(e.scrollTop-a)>1&&(e.scrollTop=a)}))}_restorePendingRoomDragScroll(){if("area"!==this._selectedView||!this._selectedArea)return!1;let e=null;try{const t=window.sessionStorage.getItem("dd-next-room-dnd-scroll");t&&(e=JSON.parse(t))}catch{return!1}if(!e||e.expiresAt<Date.now()||e.areaId!==this._selectedArea||e.pathname!==window.location.pathname){try{window.sessionStorage.removeItem("dd-next-room-dnd-scroll")}catch{}return!1}const t=()=>{const t=this.shadowRoot?.querySelector(".content-area");t&&Math.abs(t.scrollTop-e.contentScrollTop)>1&&(t.scrollTop=e.contentScrollTop),(Math.abs(window.scrollX-e.windowScrollX)>1||Math.abs(window.scrollY-e.windowScrollY)>1)&&window.scrollTo(e.windowScrollX,e.windowScrollY)};return requestAnimationFrame(t),window.setTimeout(t,90),window.setTimeout(t,240),window.setTimeout(t,600),window.setTimeout(t,1200),window.setTimeout(()=>{t();try{window.sessionStorage.removeItem("dd-next-room-dnd-scroll")}catch{}},1800),!0}_scrollContentAreaToTop(){const e=this.shadowRoot?.querySelector(".content-area"),t=new Set;e&&t.add(e);(e=>{let a=e;for(;a;){if(a instanceof HTMLElement&&t.add(a),a.parentNode){a=a.parentNode;continue}const e=a.getRootNode();a=e instanceof ShadowRoot?e.host:null}})(e||this);for(const e of t)e.scrollTop=0,e.scrollLeft=0;const a=document.scrollingElement;a&&(a.scrollTop=0,a.scrollLeft=0),document.documentElement.scrollTop=0,document.documentElement.scrollLeft=0,document.body.scrollTop=0,document.body.scrollLeft=0,window.scrollTo(0,0)}_resetAreaHeaderScrollState(e=!1){this._areaHeaderScrollRaf&&(cancelAnimationFrame(this._areaHeaderScrollRaf),this._areaHeaderScrollRaf=void 0),e&&this._scrollContentAreaToTop(),this._pendingAreaScrollTop=0,this._areaHeaderStuck&&(this._areaHeaderStuck=!1),this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1),this._lastAreaScrollTop=0,this._areaScrollUpDistance=0}_resetAreaHeaderAfterNavigation(){this._restorePendingRoomDragScroll()||(this._resetAreaHeaderScrollState(!0),requestAnimationFrame(()=>{this._restorePendingRoomDragScroll()||this._resetAreaHeaderScrollState(!0)}),requestAnimationFrame(()=>requestAnimationFrame(()=>{this._restorePendingRoomDragScroll()||this._resetAreaHeaderScrollState(!0)})),window.setTimeout(()=>{this._restorePendingRoomDragScroll()||this._resetAreaHeaderScrollState(!0)},80),window.setTimeout(()=>{this._restorePendingRoomDragScroll()||this._resetAreaHeaderScrollState(!0)},220))}_resetProgressiveMobileRender(){this._renderAllMobileHomeAreas=!this._isMobile,this._renderAllMobileAreaEntities=!this._isMobile,this._progressiveRenderCancel&&(this._progressiveRenderCancel(),this._progressiveRenderCancel=void 0)}_scheduleProgressiveMobileRender(){if(!this._isMobile)return this._renderAllMobileHomeAreas=!0,void(this._renderAllMobileAreaEntities=!0);if(this._renderAllMobileHomeAreas&&this._renderAllMobileAreaEntities)return;if(this._progressiveRenderCancel)return;const e=()=>{this._progressiveRenderCancel=void 0,this._renderAllMobileHomeAreas=!0,this._renderAllMobileAreaEntities=!0},t=window.requestIdleCallback,a=window.cancelIdleCallback;if(t&&a){const i=t(e,{timeout:450});this._progressiveRenderCancel=()=>a(i)}else{const t=window.setTimeout(e,90);this._progressiveRenderCancel=()=>window.clearTimeout(t)}}_updateAreaHeaderScrollState(){const e=this.shadowRoot?.querySelector(".content-area");if(!this._isMobile||"area"!==this._selectedView||!e)return this._areaHeaderStuck&&(this._areaHeaderStuck=!1),void(this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1));const t=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||e.scrollTop||0;this._setAreaHeaderStuckForScroll(t,!1)}_setAreaHeaderStuckForScroll(e,t){if(!this._isMobile||"area"!==this._selectedView)return this._areaHeaderStuck&&(this._areaHeaderStuck=!1),this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1),this._lastAreaScrollTop=0,void(this._areaScrollUpDistance=0);if(!t){this._lastAreaScrollTop=e,this._areaScrollUpDistance=0;const t=e>76;return this._areaHeaderStuck!==t&&(this._areaHeaderStuck=t),void(this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1))}const a=e-this._lastAreaScrollTop;if(this._lastAreaScrollTop=e,e<=2)return this._areaScrollUpDistance=0,this._areaHeaderStuck&&(this._areaHeaderStuck=!1),void(this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1));a<-1?this._areaScrollUpDistance+=Math.abs(a):a>1&&(this._areaScrollUpDistance=0);let i=this._areaHeaderStuck,o=this._areaHeaderRevealed;a>1&&e>76&&(i=!0,o=!1),this._areaHeaderStuck&&this._areaScrollUpDistance>=18&&e>88&&(o=!0),e<=38&&(i=!1,o=!1),this._areaHeaderStuck!==i&&(this._areaHeaderStuck=i),this._areaHeaderRevealed!==o&&(this._areaHeaderRevealed=o)}_checkMobile(){const e=this._isMobile;this._isMobile=window.innerWidth<=768,e!==this._isMobile&&(this._mobileNavOpen=!1)}_startTimeUpdate(){this._updateTime(),this._timeInterval=window.setInterval(()=>this._updateTime(),6e4)}_updateTime(){const e=new Date;this._currentTime=e.toLocaleTimeString(this.hass?.language||"en",{hour:"2-digit",minute:"2-digit",hour12:!1}),this._currentDate=e.toLocaleDateString(this.hass?.language||"en",{weekday:"short",day:"numeric",month:"short"})}_loadMobileEntityLayoutPreference(){try{const e=window.localStorage.getItem("dd-next-mobile-entity-layout"),t=window.localStorage.getItem("dd-next-mobile-home-areas-layout"),a=window.localStorage.getItem("dd-next-mobile-home-devices-layout"),i=window.localStorage.getItem("dd-next-mobile-home-favorites-layout"),o=window.localStorage.getItem("dd-next-mobile-home-cameras-layout");"rail"!==e&&"grid"!==e||(this._mobileEntityLayout=e),"rail"!==t&&"grid"!==t||(this._mobileHomeAreasLayout=t),"rail"!==a&&"grid"!==a||(this._mobileHomeDevicesLayout=a),"rail"!==i&&"grid"!==i||(this._mobileHomeFavoritesLayout=i),"rail"!==o&&"grid"!==o||(this._mobileHomeCamerasLayout=o)}catch{}}_loadAreaSidebarWidthPreference(){try{const e=window.localStorage.getItem(tt);if(!e)return;const t=Number(e);Number.isFinite(t)&&(this._areaSidebarWidth=this._clampAreaSidebarWidth(t))}catch{}}_saveAreaSidebarWidthPreference(e){try{window.localStorage.setItem(tt,String(Math.round(e)))}catch{}}_loadAreaSidebarCollapsedPreference(){try{this._areaSidebarCollapsed="true"===window.localStorage.getItem(at)}catch{}}_saveAreaSidebarCollapsedPreference(e){try{window.localStorage.setItem(at,e?"true":"false")}catch{}}_clampAreaSidebarWidth(e){const t=Math.max(it,Math.min(660,Math.floor(.46*window.innerWidth)));return Math.round(Math.max(it,Math.min(t,e)))}_initializeObservers(){this._resizeObserver=new ResizeObserver(()=>{this._debouncedUpdate()}),this.shadowRoot&&this._resizeObserver.observe(this.shadowRoot.host)}_cleanupObservers(){this._resizeObserver&&this._resizeObserver.disconnect()}_hasAreaClimateDisplayMetadataChanges(e,t){const a=new Set([...Object.keys(e.areas||{}),...Object.keys(t.areas||{})]);for(const i of a){const a=e.areas?.[i],o=t.areas?.[i],r=a?.temperature_entity_id,n=o?.temperature_entity_id,s=a?.humidity_entity_id,c=o?.humidity_entity_id;if(r!==n||s!==c)return!0;const d=new Set([r,n,s,c].filter(Boolean));for(const a of d){const i=e.entities?.[a],o=t.entities?.[a];if(i?.display_precision!==o?.display_precision)return!0}}return!1}shouldUpdate(e){if(!this.config||!this.hass)return!1;if(e.has("config")||e.has("_selectedView")||e.has("_selectedArea")||e.has("_headerExpanded")||e.has("_currentTime"))return!0;if(e.has("hass")){const t=e.get("hass");if(!t)return!0;if(this._hasUpdateEntityChanges(t,this.hass))return!0;if(this._hasAreaClimateDisplayMetadataChanges(t,this.hass))return!0;return this._getRelevantEntities().some(e=>t.states[e]!==this.hass.states[e])}return!0}updated(e){if(super.updated(e),this._scheduleHeaderStatusScrollState(),e.has("hass")&&this.hass){const t=e.get("hass");t&&this._updateEntityCards(t,this.hass),this._headerExpanded&&this._renderFavoriteTileCards(),this._ensurePersistentNotificationsFeature(),this._homeSummariesLoaded||(this._homeSummariesLoaded=!0,this._loadHomeAssistantSummaries(),this._homeSummariesRefreshInterval=window.setInterval(()=>{this._loadHomeAssistantSummaries()},3e5)),this._ensureFavoriteSuggestionsFeature()}e.has("config")&&(this._showNotificationsUi()?this._ensurePersistentNotificationsFeature():(this._notificationsOpen=!1,this._persistentNotificationsLoaded=!1,this._persistentNotifications=[]),this._showSuggestedFavoritesUi()?this._ensureFavoriteSuggestionsFeature():(this._favoriteSuggestionsLoaded=!1,this._favoriteSuggestionsLoading=!1,this._suggestedFavoriteEntities=[])),(e.has("_selectedView")||e.has("_selectedArea")||e.has("config"))&&(this._syncBottomNavAreaContext(),this._restoreAreaSidebarScroll()),e.has("_isMobile")&&this._restoreAreaSidebarScroll(),e.has("_headerExpanded")&&this._headerExpanded&&this.hass&&setTimeout(()=>{this._renderFavoriteTileCards()},0),e.has("_selectedView")||e.has("_selectedArea")?(this._resetProgressiveMobileRender(),"area"===this._selectedView?this._restorePendingRoomDragScroll()||this._resetAreaHeaderAfterNavigation():this._resetAreaHeaderScrollState(!1)):e.has("config")&&"area"===this._selectedView&&this._restorePendingRoomDragScroll(),(e.has("_selectedView")||e.has("_selectedArea")||e.has("_isMobile")||this._isMobile&&(!this._renderAllMobileHomeAreas||!this._renderAllMobileAreaEntities))&&this._scheduleProgressiveMobileRender(),"settings"===this._selectedView&&this._syncSettingsEditor()}_syncThemeAttribute(){this.toggleAttribute("data-theme-dark",T(this.hass,this))}_getRelevantEntities(){if(!this.config)return[];if("settings"===this._selectedView)return[];if("area"===this._selectedView&&this._selectedArea){return this._getAreaEntities(this._selectedArea).map(e=>e.entity_id)}return this.config.entities?.map(e=>e.entity_id)||[]}render(){if(!this.hass||!this.config)return s`<div class="loading">${this._t("common.loading")}</div>`;const e=this._isMobile&&this._getNowPlayingPlayers().length>0,t={"layout-container":!0,"has-floating-now-playing":e,"sidebar-resizing":this._isResizingSidebar,"sidebar-collapsed":this._isDesktopAreaSidebarCollapsed()};return s`
      <div
        class=${d(t)}
        style=${`--area-sidebar-width: ${this._areaSidebarWidth}px;`}
      >
        ${this._renderMobileOverlay()}
        ${this._renderSidebar()}
        ${this._isMobile?c:this._renderSidebarResizeHandle()}
        <div class="main-content">
          ${"area"!==this._selectedView||this._isMobile?c:this._renderGlobalHeader()}
          <div
            class="content-area ${"home"===this._selectedView?"home-content-area":""} ${"area"===this._selectedView?"area-content-area":""} ${"settings"===this._selectedView?"settings-content-area":""}"
            @scroll=${this._handleContentScroll}
          >
            ${"home"===this._selectedView?this._renderHomeView():"area"===this._selectedView&&this._selectedArea?this._renderAreaView():"settings"===this._selectedView?this._renderSettingsView():c}
          </div>
        </div>
      </div>
      ${e?this._renderNowPlayingBar(!0):c}
      ${this._renderToast()}
      ${this._renderConfirmationDialog()}
      ${this._renderHousePowerDialog()}
      ${this._renderNotificationsPanel()}
    `}_renderSidebarResizeHandle(){const e=this._isDesktopAreaSidebarCollapsed();return s`
      <button
        class="sidebar-collapse-toggle ${e?"is-collapsed":""}"
        type="button"
        title=${e?this._t("sidebar.show"):this._t("sidebar.collapse")}
        aria-label=${e?this._t("sidebar.show"):this._t("sidebar.collapse")}
        @click=${this._toggleAreaSidebarCollapsed}
      >
        <ha-icon icon=${e?"mdi:chevron-right":"mdi:chevron-left"}></ha-icon>
      </button>
      ${e?c:s`
      <button
        class="sidebar-resize-handle"
        type="button"
        role="separator"
        aria-label=${this._t("sidebar.resize")}
        aria-orientation="vertical"
        aria-valuemin=${it}
        aria-valuemax=${660}
        aria-valuenow=${this._areaSidebarWidth}
        title=${this._t("sidebar.resize_drag")}
        @pointerdown=${this._startSidebarResize}
        @keydown=${this._handleSidebarResizeKeydown}
      ></button>
      `}
    `}_renderMobileOverlay(){return this._isMobile?s`
      <div
        class="mobile-nav-overlay ${this._mobileNavOpen?"open":""}"
        @click=${this._closeMobileNav}
      ></div>
    `:c}_nowPlayingShown(){return U(V(this.config?.settings?.now_playing_bar),this._selectedView)}_getNowPlayingPlayers(){return this.hass&&this._nowPlayingShown()?this._nowPlayingPlayers(this.hass,this.hass.states,this.config,P(this.hass),this._currentTime):[]}_renderNowPlayingBar(e){const t=this._getNowPlayingPlayers();return t.length?s`
      <dwains-dashboard-next-now-playing class=${e?"floating":"inline"} .hass=${this.hass} .players=${t} .floating=${e}></dwains-dashboard-next-now-playing>
    `:c}_renderNotificationsPanel(){if(!this._showNotificationsUi())return c;const e=this._persistentNotifications.length,t=e>0;return s`
      <div
        class="notifications-overlay ${this._notificationsOpen?"open":""}"
        @click=${this._closeNotifications}
      ></div>
      <section
        class="notifications-panel ${this._notificationsOpen?"open":""}"
        aria-hidden=${this._notificationsOpen?"false":"true"}
      >
        <div class="notifications-head">
          <div class="notifications-title">
            <div class="notifications-title-row">
              <ha-icon icon="mdi:bell-outline"></ha-icon>
              <span>${this._t("home.notifications")}</span>
            </div>
            <div class="notifications-subtitle">
              ${t?`${e} ${this._t(1===e?"home.notification":"home.notifications").toLocaleLowerCase()}`:this._t("home.notifications_description")}
            </div>
          </div>
          <div class="notifications-actions">
            ${t?s`
              <button
                class="notifications-icon-button"
                type="button"
                title=${this._t("common.dismiss_all")}
                @click=${this._dismissAllPersistentNotifications}
              >
                <ha-icon icon="mdi:delete-sweep-outline"></ha-icon>
              </button>
            `:c}
            <button
              class="notifications-icon-button"
              type="button"
              title=${this._t("common.refresh")}
              @click=${()=>this._loadPersistentNotifications(!0)}
            >
              <ha-icon icon="mdi:refresh"></ha-icon>
            </button>
            <button
              class="notifications-icon-button"
              type="button"
              title=${this._t("common.close")}
              @click=${this._closeNotifications}
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
        </div>

        <div class="notifications-list">
          ${this._notificationsLoading&&!t?s`
                <div class="notifications-loading">
                  <ha-icon icon="mdi:loading"></ha-icon>
                  <span>${this._t("home.notifications_loading")}</span>
                </div>
              `:this._notificationsError?s`
                  <div class="notifications-error">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    <span>${this._notificationsError}</span>
                  </div>
                `:t?this._persistentNotifications.map(e=>this._renderPersistentNotification(e)):s`
                    <div class="notifications-empty">
                      <ha-icon icon="mdi:bell-check-outline"></ha-icon>
                      <span>${this._t("home.notifications_empty")}</span>
                    </div>
                  `}
        </div>
      </section>
    `}_renderPersistentNotification(e){return s`
      <article class="notification-row">
        <div class="notification-icon">
          <ha-icon icon="mdi:bell-badge-outline"></ha-icon>
        </div>
        <div class="notification-copy">
          <div class="notification-title">${e.title||this._t("home.notification")}</div>
          <div class="notification-message">${e.message}</div>
          ${e.created_at?s`
            <div class="notification-date">${this._formatNotificationDate(e.created_at)}</div>
          `:c}
        </div>
        <button
          class="notification-dismiss"
          type="button"
          title=${this._t("common.dismiss")}
          @click=${()=>this._dismissPersistentNotification(e.notification_id)}
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
      </article>
    `}_renderSidebar(){const e={sidebar:!0,open:this._isMobile&&this._mobileNavOpen},t=this._showNotificationsUi()&&this._persistentNotifications.length>0;return s`
      <nav class=${d(e)} @scroll=${this._handleSidebarScroll}>
        ${this._isMobile?s`
          <div class="mobile-area-picker-head">
            <div class="mobile-area-picker-title">${this._t("home.areas")}</div>
            <button
              class="mobile-area-picker-close"
              type="button"
              title=${this._t("common.close")}
              aria-label=${this._t("common.close")}
              @click=${this._closeMobileNav}
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
        `:c}
        <div class="area-list">
          <div
            class="area-button home-button ${"home"===this._selectedView?"selected":""} ${t?"has-notifications":""}"
            role="button"
            tabindex="0"
            @click=${()=>this._selectView("home")}
            @keydown=${this._handleHomeNavigationKeydown}
          >
            <div class="area-icon">
              <ha-icon icon="mdi:home"></ha-icon>
            </div>
            <div class="area-info">
              <div class="area-name">${this._t("sidebar.home")}</div>
            </div>
            ${this._renderHomeNotificationShortcut()}
            <ha-icon class="area-menu-chevron" icon="mdi:chevron-right"></ha-icon>
          </div>

          ${this._renderAreaButtons()}
        </div>
      </nav>
    `}_renderHomeNotificationShortcut(){if(!this._showNotificationsUi())return c;const e=this._persistentNotifications.length;if(!e)return c;const t=`${e} persistent ${1===e?"notification":"notifications"}`,a=e>99?"99+":String(e);return s`
      <button
        class="home-notification-shortcut"
        type="button"
        title=${t}
        aria-label=${t}
        @click=${this._openNotificationsFromHomeShortcut}
      >
        <ha-icon icon="mdi:bell-outline"></ha-icon>
        <span class="home-notification-count">${a}</span>
      </button>
    `}_groupAreasByFloor(e){const t={};return e.forEach(e=>{let a="no_floor";if(e.floor_id&&this.config?.floors){const t=this.config.floors.find(t=>t.floor_id===e.floor_id);t?.name&&(a=t.name)}t[a]||(t[a]=[]),t[a].push(e)}),t}_getVisibleSortedAreas(){return this.config?.areas?p(this.config.areas,this.config.areas_display,H(this.hass)):[]}_renderAreaButtons(){if(!this.config?.areas)return c;const e=this._getVisibleSortedAreas(),t=this._groupAreasByFloor(e),a=[...this.config.floors||[]],i=this.config.floors_display?.order||[];if(i.length){const e=new Map(i.map((e,t)=>[e,t]));a.sort((t,a)=>(e.get(t.floor_id)??Number.MAX_SAFE_INTEGER)-(e.get(a.floor_id)??Number.MAX_SAFE_INTEGER))}const o=new Map(a.map((e,t)=>[e.name,t])),r=new Intl.Collator(H(this.hass),{numeric:!0,sensitivity:"base"}),n=Object.entries(t).sort(([e],[t])=>{if("no_floor"===e)return 1;if("no_floor"===t)return-1;const a=o.get(e),i=o.get(t);return void 0!==a||void 0!==i?(a??Number.MAX_SAFE_INTEGER)-(i??Number.MAX_SAFE_INTEGER):r.compare(e,t)});return n.map(([e,t])=>{const a="no_floor"===e?this.hass.localize("ui.components.area-picker.no_floor")||this._t("home.unassigned_spaces"):e;return s`
        <div class="floor-section">
          <div class="floor-header">
            <h3>${a}</h3>
          </div>
          <div class="floor-areas">
            ${m(t,e=>e.area_id,e=>this._renderAreaButton(e))}
          </div>
        </div>
      `})}_sidebarAreaBadgeLimit(e=Number.MAX_SAFE_INTEGER){const t=Math.max(0,this._areaSidebarWidth-16),a=Math.max(0,t-14-74-9);if(e<=Math.max(1,Math.floor((a+4)/48)))return Math.min(8,e);const i=Math.max(1,Math.floor(Math.max(0,a-15-4)/48));return Math.min(8,i)}_renderAreaButton(e){const t=this._getCachedAreaData(e),a=this._selectedArea===e.area_id,i=Boolean(e.picture),o=this._getAreaStatusBadges(t),r=this._sidebarAreaBadgeLimit(o.length),n=o.length>r,d=o.slice(0,r),p=[t.temperature,t.humidity,t.wattage].filter(Boolean).join(" • ");return s`
      <button
        class="area-button room-area-button ${a?"selected":""} ${i?"has-picture":"has-icon"}"
        @click=${()=>this._selectArea(e.area_id)}
      >
        <div class="area-media" aria-hidden="true">
          ${i?s`<div class="area-media-picture" style=${`background-image: url('${e.picture}');`}></div>`:s`
                <div class="area-media-icon">
                  <ha-icon icon=${l(e)}></ha-icon>
                </div>
              `}
        </div>

        <div class="area-content">
          <div class="area-top-section">
            <div class="area-name">${e.name}</div>
            ${p?s`
              <div class="area-sensors">${p}</div>
            `:c}
          </div>

          <div class="area-info-badges">
            ${d.map(t=>"light"===t.domain?s`
                    <span
                      class="info-badge ${t.className} clickable"
                      style=${`--badge-color: ${t.color}; --area-badge-color: ${t.color};`}
                      @click=${t=>this._handleLightToggle(t,e.area_id)}
                    >
                      <ha-icon icon=${t.icon}></ha-icon>
                      <span class="badge-count">${t.count}</span>
                    </span>
                  `:s`
                    <span
                      class="info-badge ${t.className}"
                      style=${`--badge-color: ${t.color}; --area-badge-color: ${t.color};`}
                    >
                      <ha-icon icon=${t.icon}></ha-icon>
                      <span class="badge-count">${t.count}</span>
                    </span>
                  `)}
            ${n?s`
              <span
                class="info-badge info-badge-overflow"
                title="Weitere aktive Status"
                aria-label="Weitere aktive Status"
              >…</span>
            `:c}
          </div>
        </div>
      </button>
    `}_renderGlobalHeader(){const e={"global-header":!0,compact:this._headerCompact,expanded:this._headerExpanded&&"area"!==this._selectedView,"room-context":"area"===this._selectedView,mobile:this._isMobile},t=this._getEffectiveFavoriteEntities().length;return s`
      <header class=${d(e)}>
        <div class="header-content">
          ${this._renderHeaderStatusCards()}

          ${this._isMobile?c:s`
            <div class="header-time-weather">
              ${this._renderWeatherDisplay()}
              ${!1!==this.config?.settings?.show_time?s`
                <div class="header-time-section">
                  <div class="header-time">${this._currentTime}</div>
                  <div class="header-date">${this._currentDate}</div>
                </div>
              `:c}
            </div>
          `}
        </div>

        ${"area"!==this._selectedView||this._isMobile?c:this._renderRoomFavoritesBlock()}

        ${t&&"area"!==this._selectedView?s`
          <button
            class="area-favorites-toggle"
            type="button"
            aria-expanded=${this._headerExpanded?"true":"false"}
            @click=${this._toggleHeader}
          >
            <span class="area-favorites-toggle-main">
              <ha-icon icon="mdi:star"></ha-icon>
              <span>${this._t("favorites.title")}</span>
              <span class="area-favorites-count">(${t})</span>
            </span>
            <ha-icon icon=${this._headerExpanded?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
          </button>
        `:c}

        ${"area"!==this._selectedView?s`
          <div class="header-expanded-content" style=${this._headerExpanded?"":"display:none"}>
            <div class="header-favorites">
              ${this._renderFavoritesSection()}
            </div>
          </div>
        `:c}
      </header>
    `}_renderWeatherDisplay(){if(!this._weatherDisplayEnabled())return c;const e=this._getWeatherEntity();if(!e)return c;const t=this._formatWeatherTemperature(e);return t?s`
      <div
        class="weather-compact"
        title=${this._weatherTitle(e)}
        aria-label=${this._weatherTitle(e)}
        @click=${()=>this._showMoreInfo(e.entity_id)}
      >
        <div class="weather-icon-compact">
          <ha-icon icon=${e.attributes.icon||"mdi:weather-cloudy"}></ha-icon>
        </div>
        <div class="weather-temp-compact">
          ${t}
        </div>
      </div>
    `:c}_renderHeaderStatusCards(){const e=this._getStatusDomains(),t=["header-status-section",this._headerStatusCanScrollLeft?"can-scroll-left":"",this._headerStatusCanScrollRight?"can-scroll-right":""].filter(Boolean).join(" ");return s`
      <div class=${t}>
        ${this._headerStatusCanScrollLeft?s`
          <button
            class="header-status-scroll-button header-status-scroll-button-left"
            type="button"
            title="Vorherige Status"
            aria-label="Vorherige Status"
            @click=${()=>this._scrollHeaderStatus(-1)}
          >
            <ha-icon icon="mdi:chevron-left"></ha-icon>
          </button>
        `:c}

        <div
          class="header-status-scroll"
          @scroll=${this._handleHeaderStatusScroll}
          @wheel=${this._handleHeaderStatusWheel}
        >
          ${m(e,e=>`${e.domain}-${e.deviceClass||e.name}`,e=>s`
              <div
                class="status-card-compact ${e.domain} ${e.value?"has-value":""} header-card"
                style=${this._domainStatusStyle(e.domain,e.deviceClass)}
                @click=${()=>this._handleStatusCardClick(e)}
                data-domain=${e.domain}
                title=${this._statusCardTitle(e)}
                aria-label=${this._statusCardTitle(e)}
              >
                <div class="status-card-icon-compact">
                  <ha-icon icon=${e.icon}></ha-icon>
                  ${e.count>0?s`
                    <div class="status-card-badge-compact">${e.count}</div>
                  `:c}
                </div>
                <div class="status-card-title-compact">${e.value||this._statusCardTitle(e)}</div>
                ${e.value?s`<div class="status-card-subtitle-compact">${"wattage"===e.domain?this._t("entity.power_usage"):e.name}</div>`:c}
              </div>
            `)}
        </div>

        ${this._headerStatusCanScrollRight?s`
          <button
            class="header-status-scroll-button header-status-scroll-button-right"
            type="button"
            title="Weitere Status"
            aria-label="Weitere Status"
            @click=${()=>this._scrollHeaderStatus(1)}
          >
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>
        `:c}
      </div>
    `}_domainStatusStyle(e,t){return`--status-color: ${this._statusColor(e,t)};`}_isAlarmActive(){const e=this._getAlarmEntity();return!!e&&["armed_away","armed_home","armed_night","armed_vacation","arming","pending","triggered"].includes(String(e.state||"").toLowerCase())}_binarySensorBadgeColor(e){return["motion","window","door","opening","garage_door"].includes(String(e||""))&&this._isAlarmActive()?h("alarm_control_panel"):h("binary_sensor",e)}_statusColor(e,t){return"binary_sensor"===e?this._binarySensorBadgeColor(t):h(e,t)}_isUrgentStatus(e,t){return this._statusColor(e,t)===h("alarm_control_panel")}_getAreaStatusBadges(e){const t=[],a=(a,i=a)=>{const o=e.domains[a]?.on||0;o&&t.push({key:a,className:i,domain:a,icon:x(a),count:o,color:h(a)})};a("light"),a("switch"),a("cover"),a("climate"),a("media_player"),a("fan"),a("lock");const i=e.domains.motion?.on||0;i&&t.push({key:"binary_sensor:motion",className:"motion",domain:"binary_sensor",deviceClass:"motion",icon:g("binary_sensor","motion"),count:i,color:this._binarySensorBadgeColor("motion")});const o=new Map;e.alerts.forEach(e=>{const t=e.deviceClass||"problem";o.set(t,(o.get(t)||0)+1)});const r=["window","door","moisture","smoke"];return[...o.entries()].sort(([e],[t])=>{const a=r.indexOf(e),i=r.indexOf(t);return(-1===a?Number.MAX_SAFE_INTEGER:a)-(-1===i?Number.MAX_SAFE_INTEGER:i)||e.localeCompare(t)}).forEach(([e,a])=>{t.push({key:`binary_sensor:${e}`,className:`binary-${e}`,domain:"binary_sensor",deviceClass:e,icon:b(e),count:a,color:this._binarySensorBadgeColor(e)})}),t.map((e,t)=>({badge:e,index:t})).sort((e,t)=>{const a=this._isUrgentStatus(e.badge.domain,e.badge.deviceClass);return a!==this._isUrgentStatus(t.badge.domain,t.badge.deviceClass)?a?-1:1:e.index-t.index}).map(({badge:e})=>e)}_statusCardTitle(e){if("cover"===e.domain&&"window"===e.statusKind){const t=this._statusPair("status.window_open");return 1===e.count?t.singular:t.plural}if("cover"===e.domain&&"door"===e.statusKind){const t=this._statusPair("status.door_open");return 1===e.count?t.singular:t.plural}if("cover"===e.domain&&"gate"===e.statusKind){return String(this.hass?.language||this.hass?.locale?.language||"").toLowerCase().startsWith("de")?1===e.count?"Tor offen":"Tore offen":1===e.count?"Gate open":"Gates open"}if("cover"===e.domain&&"shading"===e.statusKind){return String(this.hass?.language||this.hass?.locale?.language||"").toLowerCase().startsWith("de")?"Beschattung ausgefahren":"Shading deployed"}if("cover"===e.domain)return e.name;const t=this._statusCardActiveLabel(e);return t?1===e.count?t.singular:t.plural:e.name}_statusLabel(e,t,a=!0){const i=a?this._tp(e,t):this._t(e,{count:t}),o=String(t);return i.startsWith(o)?i.slice(o.length).trim():i}_statusPair(e,t=!0){return{singular:this._statusLabel(e,1,t),plural:this._statusLabel(e,2,t)}}_statusCardActiveLabel(e){if("person"!==e.domain){if("light"===e.domain)return this._statusPair("status.light_on");if("switch"===e.domain)return this._statusPair("status.switch_on");if("cover"===e.domain)return this._statusPair("status.cover_open");if("fan"===e.domain)return this._statusPair("status.fan_on");if("lock"===e.domain)return this._statusPair("status.lock_unlocked");if("climate"===e.domain)return this._statusPair("status.climate_active");if("media_player"===e.domain)return this._statusPair("status.media_playing");if("vacuum"===e.domain)return this._statusPair("status.vacuum_cleaning");if("alarm_control_panel"===e.domain)return this._statusPair("status.alarm_armed");if("binary_sensor"===e.domain)switch(e.deviceClass){case"door":return this._statusPair("status.door_open");case"window":return this._statusPair("status.window_open");case"opening":return this._statusPair("status.opening_open");case"motion":return this._statusPair("status.motion_detected",!1);case"smoke":return this._statusPair("status.smoke_detected",!1);case"gas":return this._statusPair("status.gas_detected",!1);case"moisture":return this._statusPair("status.moisture_detected",!1);case"occupancy":return this._statusPair("status.occupancy_detected",!1);case"presence":return this._statusPair("status.presence_detected",!1);case"tamper":return this._statusPair("status.tamper_detected",!1);case"vibration":return this._statusPair("status.vibration_detected",!1);case"safety":return this._statusPair("status.safety_active",!1);default:return}}}_entityAreaName(e){const t=this.config?.entities?.find(t=>t.entity_id===e),a=t?.device_id?this.config?.devices?.find(e=>e.device_id===t.device_id):null,i=t?.area_id||a?.area_id||this.hass?.entities?.[e]?.area_id;return this.config?.areas?.find(e=>e.area_id===i)?.name}_renderHomeView(){const e=this._getVisibleHomeSections();return s`
      <div class="home-view">
        ${this._renderHomeWelcome()}
        ${this._isMobile?c:this._renderNowPlayingBar(!1)}
        ${e.map(e=>this._renderHomeSection(e))}
      </div>
    `}_getHomeSectionsOrder(){return G(this.config?.settings?.home_sections_order)}_getVisibleHomeSections(){const e=new Set(Y(this.config?.settings?.home_sections_hidden)),t=this._isDesktopAreaSidebarCollapsed();return this._getHomeSectionsOrder().filter(a=>!e.has(a)||t&&"areas"===a)}_homeInformationCardVisible(e){return!new Set(K(this.config?.settings?.home_information_cards_hidden)).has(e)}_renderHomeSection(e){switch(e){case"summaries":return this._renderHomeSummaries();case"cameras":return this._renderHomeCameras();case"areas":return this._renderMobileHomeAreas();case"devices":return this._renderHomeStatusCards();case"todos":return this._renderHomeTodos();case"custom_cards":return this._renderHomeCustomCards();case"favorites":return this._renderFavorites();case"scenes":return this._renderHomeScenes();default:return c}}_getHomeSceneItems(){return B(X(this.config?.settings?.home_scenes),this.hass?.states||{},P(this.hass),!1!==this.config?.settings?.hide_unavailable_entities)}_homeSceneName(e){return this.hass?.states[e]?.attributes?.friendly_name||P(this.hass)[e]?.name||e}_scriptLastRunText(e){const t=Date.parse(e?.attributes?.last_triggered||"");return Number.isFinite(t)?this._formatRelativeTime(t):this._t("scenes.not_run")}_renderHomeScenes(){const e=this._getHomeSceneItems();if(!e.length)return c;const t=this._t("home_section.scenes.label");return s`
      <section class="home-summaries-section home-scenes-section">
        <div class="home-status-heading">
          <ha-icon icon=${Q.scenes.icon}></ha-icon>
          <span>${t}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <span class="mobile-layout-toggle active static"><ha-icon icon=${Q.scenes.icon}></ha-icon></span>
            <span class="mobile-section-title-label">${t}</span>
          </div>
        </div>
        <div class="home-summary-list">
          ${e.map(e=>{const t=this.hass.states[e.entityId];if(!t)return c;const a=this._homeSceneName(e.entityId),i=e.unavailable?this._t("common.unavailable"):"scene"===e.domain?this._sceneLastActivatedText(t):this._scriptLastRunText(t);return s`
              <button
                class="home-summary-card ${e.domain}"
                type="button"
                ?disabled=${e.unavailable}
                @click=${()=>this._runHomeScene(e)}
              >
                <span class="home-summary-icon"><ha-icon icon=${x(e.domain)}></ha-icon></span>
                <span class="home-summary-copy">
                  <span class="home-summary-title">${a}</span>
                  <span class="home-summary-subtitle">${i}</span>
                </span>
                <span class="home-summary-chevron"><ha-icon icon="mdi:play"></ha-icon></span>
              </button>
            `})}
        </div>
      </section>
    `}async _runHomeScene(e){if(e.unavailable)return;const t=this._homeSceneName(e.entityId);try{await this.hass.callService(e.domain,"turn_on",{entity_id:e.entityId}),this._showToast(this._t("scene"===e.domain?"scenes.activated_named":"scenes.started_named",{name:t}))}catch(a){console.warn(`Failed to run ${e.entityId}:`,a),this._showToast(this._t("scene"===e.domain?"scenes.scene_failed":"scenes.script_failed",{name:t}))}}_renderHomeSummaries(){const e=this._getHomeSummaryCards();return e.length?s`
      <section class="home-summaries-section">
        <div class="home-status-heading">
          <ha-icon icon="mdi:clipboard-list-outline"></ha-icon>
          <span>${this._t("home.summaries")}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <button
              class="mobile-layout-toggle active static"
              type="button"
              title=${this._t("home.summaries")}
              aria-label=${this._t("home.summaries")}
            >
              <ha-icon icon="mdi:clipboard-list-outline"></ha-icon>
            </button>
            <span class="mobile-section-title-label">${this._t("home.summaries")}</span>
          </div>
        </div>
        <div class="home-summary-list">
          ${m(e,e=>e.key,e=>s`
              <button
                class="home-summary-card ${e.key}"
                type="button"
                style=${`--summary-color: ${e.color};`}
                @click=${()=>this._openHomeAssistantPage(e.path)}
              >
                <span class="home-summary-icon">
                  <ha-icon icon=${e.icon}></ha-icon>
                </span>
                <span class="home-summary-copy">
                  <span class="home-summary-title">${e.label}</span>
                  <span class="home-summary-subtitle">${e.subtitle}</span>
                </span>
                <span class="home-summary-chevron">
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </span>
              </button>
            `)}
        </div>
      </section>
    `:c}_renderHomeTodos(){const e=this._getHomeTodoEntities();if(!e.length)return c;const t=this._t("home_section.todos.label");return s`
      <section class="home-todos-section">
        <div class="home-status-heading">
          <ha-icon icon="mdi:format-list-checks"></ha-icon>
          <span>${t}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <button
              class="mobile-layout-toggle active"
              type="button"
              title=${t}
              aria-label=${t}
            >
              <ha-icon icon="mdi:format-list-checks"></ha-icon>
            </button>
            <span class="mobile-section-title-label">${t}</span>
          </div>
        </div>
        <div class="home-todos-grid">
          ${m(e,e=>e,e=>s`
              <div class="home-todo-card" data-entity=${e}>
                <dwains-dashboard-next-card-host
                  eager
                  .hass=${this.hass}
                  .config=${{type:"todo-list",entity:e,title:this.hass.states[e]?.attributes?.friendly_name||this.hass.entities?.[e]?.name||e}}
                ></dwains-dashboard-next-card-host>
              </div>
            `)}
        </div>
      </section>
    `}_getHomeCustomCards(){const e=this.config?.home_custom_cards;return Array.isArray(e)?e.filter(e=>Boolean(e?.id)&&Boolean(e?.card)&&"object"==typeof e.card&&"string"==typeof e.card.type):[]}_renderHomeCustomCards(){const e=this._getHomeCustomCards();if(!e.length)return c;const t=this._t("home_section.custom_cards.label");return s`
      <section class="home-custom-cards-section">
        <div class="home-status-heading">
          <ha-icon icon="mdi:cards-outline"></ha-icon>
          <span>${t}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <button
              class="mobile-layout-toggle active static"
              type="button"
              title=${t}
              aria-label=${t}
            >
              <ha-icon icon="mdi:cards-outline"></ha-icon>
            </button>
            <span class="mobile-section-title-label">${t}</span>
          </div>
        </div>
        <div class="home-custom-cards-grid">
          ${m(e,e=>e.id,e=>s`
              <div class="home-custom-card ${this._customCardNeedsWideLayout(e.card)?"is-wide":""}">
                <dwains-dashboard-next-card-host
                  eager
                  .hass=${this.hass}
                  .config=${e.card}
                ></dwains-dashboard-next-card-host>
              </div>
            `)}
        </div>
      </section>
    `}_getHomeTodoEntities(){return Object.keys(this.hass?.states||{}).filter(e=>e.startsWith("todo.")).filter(e=>{const t=this.hass.states[e],a=this.hass.entities?.[e];return!!t&&(!["unavailable","unknown"].includes(String(t.state).toLowerCase())&&!a?.hidden_by&&!a?.disabled_by&&"diagnostic"!==a?.entity_category&&"config"!==a?.entity_category)}).sort((e,t)=>{const a=this.hass.states[e]?.attributes?.friendly_name||this.hass.entities?.[e]?.name||e,i=this.hass.states[t]?.attributes?.friendly_name||this.hass.entities?.[t]?.name||t;return String(a).localeCompare(String(i),this.hass.language)})}_getHomeSummaryCards(){const e=[],t=this._getUpdateEntityCount();return this._repairsIssueCount>0&&e.push({key:"repairs",label:this._t("home.repairs"),subtitle:this._tp("summary.issue",this._repairsIssueCount),icon:"mdi:wrench",color:"#f59e0b",count:this._repairsIssueCount,path:"/config/repairs"}),t>0&&e.push({key:"updates",label:this._t("home.updates"),subtitle:this._tp("summary.update_available",t),icon:"mdi:package-up",color:"#0ea5e9",count:t,path:"/config/updates"}),this._discoveredDeviceCount>0&&e.push({key:"discovered",label:this._t("home.devices_discovered"),subtitle:this._tp("summary.device_to_add",this._discoveredDeviceCount),icon:"mdi:devices",color:"#1494aa",count:this._discoveredDeviceCount,path:"/config/integrations"}),e}_openHomeAssistantPage(e){this._closeMobileNav(),M(e)}_renderHomeWelcome(){const e=this.hass?.user?.name||"User",t=this._getGreeting(),a=this._weatherDisplayEnabled()?this._getWeatherEntity():void 0,i=this._formatWeatherTemperature(a),o=this._getWelcomeUserPicture(e),r=this._renderHomeAlarm();return s`
      <div class="home-welcome">
        <div class="welcome-content">
          <div class="welcome-header">
            <div class="welcome-user">
              <button
                class="welcome-avatar"
                type="button"
                title=${this._t("navigation.profile_settings")}
                aria-label=${this._t("navigation.profile_settings")}
                @click=${this._openProfileSettings}
              >
                ${o?s`<img src=${o} alt=${e} />`:s`<ha-icon icon="mdi:account"></ha-icon>`}
              </button>
              <div class="welcome-copy">
                <div class="welcome-text">
                  <span class="welcome-greeting">${t},</span>
                  <span class="welcome-name">${e}</span>
                  <span class="welcome-title">${t}, ${e}</span>
                </div>
              </div>
            </div>
            <div class="welcome-header-meta">
              ${!this._isMobile&&a&&i?s`
                <div
                  class="welcome-weather"
                  title=${this._weatherTitle(a)}
                  aria-label=${this._weatherTitle(a)}
                  @click=${()=>this._showMoreInfo(a.entity_id)}
                >
                  <ha-icon icon=${a.attributes.icon||"mdi:weather-cloudy"}></ha-icon>
                  <span class="weather-temp">${i}</span>
                </div>
              `:c}
              <div class="welcome-time-section">
                <div class="welcome-time">${this._currentTime}</div>
                <div class="welcome-date">${this._currentDate}</div>
              </div>
              <div class="welcome-actions">
                ${this._showNotificationsUi()?s`
                  <button
                    class="welcome-action welcome-notification-action"
                    type="button"
                    title=${this._t("home.notifications")}
                    @click=${this._openNotifications}
                  >
                    <ha-icon icon="mdi:bell-outline"></ha-icon>
                    ${this._persistentNotifications.length?s`<span class="welcome-action-badge">${this._persistentNotifications.length}</span>`:c}
                  </button>
                `:c}
                ${this._canManageDashboard()?s`
                  <button
                    class="welcome-action welcome-settings-action"
                    type="button"
                    title=${this._t("sidebar.dashboard_settings")}
                    @click=${this._openDashboardSettings}
                  >
                    <ha-icon icon="mdi:pencil"></ha-icon>
                  </button>
                `:c}
              </div>
            </div>
          </div>
          ${r!==c||this._isMobile&&i?s`
            <div class="welcome-subheader">
              ${r}
              ${this._isMobile&&a&&i?s`
                <div
                  class="welcome-weather"
                  title=${this._weatherTitle(a)}
                  aria-label=${this._weatherTitle(a)}
                  @click=${()=>this._showMoreInfo(a.entity_id)}
                >
                  <ha-icon icon=${a.attributes.icon||"mdi:weather-cloudy"}></ha-icon>
                  <span class="weather-temp">${i}</span>
                </div>
              `:c}
            </div>
          `:c}
        </div>
      </div>
    `}_renderHomeStatusCards(){const e=this._getStatusDomains(),t=this._homeInformationCardVisible("device_groups")?e.filter(e=>"person"!==e.domain&&"wattage"!==e.domain&&"camera"!==e.domain):[],a="grid"===this._mobileHomeDevicesLayout,i=e=>s`
      <div
        class="home-status-card compact-status ${e.domain} ${e.value?"has-value":""}"
        style=${this._domainStatusStyle(e.domain,e.deviceClass)}
        @click=${()=>this._handleStatusCardClick(e)}
        data-domain=${e.domain}
        title=${this._statusCardTitle(e)}
        aria-label=${this._statusCardTitle(e)}
      >
        <div class="status-card-icon">
          <ha-icon icon=${e.icon}></ha-icon>
          ${e.count>0?s`
            <div class="status-card-badge">${e.count}</div>
          `:c}
        </div>
        ${e.value?s`<div class="status-card-value">${e.value}</div>`:c}
        <div class="status-card-title">${this._statusCardTitle(e)}</div>
      </div>
    `,o=[this._homeInformationCardVisible("people")?this._renderHousePersonsStatusCard():c,this._homeInformationCardVisible("climate")?this._renderHouseClimateStatusCard("indoor"):c,this._homeInformationCardVisible("outdoor_climate")?this._renderHouseClimateStatusCard("outdoor"):c,this._homeInformationCardVisible("power")?this._renderHousePowerStatusCard():c].filter(e=>e!==c);if(!o.length&&!t.length)return c;const r=s`
      <div class="home-status-heading">
        <ha-icon icon="mdi:view-dashboard-outline"></ha-icon>
        <span>${this._t("home.house_information")}</span>
      </div>
      <div class="mobile-section-heading">
        <div class="mobile-section-title">
          <button
            class="mobile-layout-toggle ${a?"active":""}"
            type="button"
            title=${a?this._t("home.swipe_house_information"):this._t("home.show_all_house_information")}
            aria-label=${a?this._t("home.switch_house_information_swipe"):this._t("home.show_all_house_information")}
            @click=${this._toggleMobileHomeDevicesLayout}
          >
            <ha-icon icon=${a?"mdi:view-carousel-outline":"mdi:view-grid-outline"}></ha-icon>
          </button>
          <span class="mobile-section-title-label">${this._t("home.house_information")}</span>
        </div>
        <button
          class="mobile-section-action"
          type="button"
          @click=${this._openMobileDeviceSwitcher}
        >
          <span>${this._t("common.see_all")}</span>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    `;return this._isMobile?s`
        <div class="home-status-section layout-${this._mobileHomeDevicesLayout}">
          ${r}
          <div class="home-status-grid">
            ${o}
            ${t.map(i)}
          </div>
        </div>
      `:s`
      <div class="home-status-section layout-${this._mobileHomeDevicesLayout}">
        ${r}

        <div class="home-status-primary-grid">
          ${o}
          ${t.map(i)}
        </div>
      </div>
    `}_renderHomeCameras(){const e=this._getHomeAreaCameras();if(!e.length)return c;const t="grid"===this._mobileHomeCamerasLayout;return s`
      <section class="home-camera-section layout-${this._mobileHomeCamerasLayout}">
        <div class="home-status-heading">
          <ha-icon icon="mdi:cctv"></ha-icon>
          <span>${this._t("home.cameras")}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <button
              class="mobile-layout-toggle ${t?"active":""}"
              type="button"
              title=${t?this._t("home.swipe_cameras"):this._t("home.show_all_cameras")}
              aria-label=${t?this._t("home.switch_cameras_swipe"):this._t("home.show_all_cameras")}
              @click=${this._toggleMobileHomeCamerasLayout}
            >
              <ha-icon icon=${t?"mdi:view-carousel-outline":"mdi:view-grid-outline"}></ha-icon>
            </button>
            <span class="mobile-section-title-label">${this._t("home.cameras")}</span>
          </div>
        </div>
        <div class="home-camera-grid">
          ${m(e,e=>`${e.areaId}-${e.entityId}`,e=>this._renderHomeCameraCard(e))}
        </div>
      </section>
    `}_renderHomeCameraCard(e){return s`
      <button
        class="home-camera-card"
        type="button"
        title=${e.name}
        @click=${()=>this._showMoreInfo(e.entityId)}
      >
        ${e.imageUrl?s`<div class="home-camera-image" style=${`background-image: url('${e.imageUrl}');`}></div>`:s`
              <div class="home-camera-placeholder">
                <ha-icon icon="mdi:cctv"></ha-icon>
              </div>
            `}
        <div class="home-camera-content">
          <div class="home-camera-top">
            <div class="home-camera-area-icon">
              <ha-icon icon=${e.areaIcon}></ha-icon>
            </div>
          </div>
          <div class="home-camera-copy">
            <div class="home-camera-name">${e.name}</div>
            <div class="home-camera-meta">${e.areaName} · ${e.state}</div>
          </div>
        </div>
      </button>
    `}_getHomeAreaCameras(){const e=[],t=new Set(this.config?.settings?.home_cameras_hidden||[]),a=this.config?.settings?.home_camera_order||[],i=new Map(a.map((e,t)=>[e,t]));return this._getVisibleSortedAreas().forEach(a=>{this._getFilteredAreaEntities(a.area_id).filter(e=>e.entity_id.startsWith("camera.")).filter(e=>!t.has(e.entity_id)).filter(e=>{const t=this.hass?.states?.[e.entity_id]?.state;return Boolean(t&&"unavailable"!==t&&"unknown"!==t)}).forEach(t=>{const i=this.hass.states[t.entity_id],o=i?.attributes?.friendly_name||t.entity_id,r=i?this.hass.formatEntityState(i):this._t("common.unknown"),n=this._getCameraImageUrl(t.entity_id),s={areaId:a.area_id,areaName:a.name,areaIcon:l(a),entityId:t.entity_id,name:o,state:r};n&&(s.imageUrl=n),e.push(s)})}),e.sort((e,t)=>{const a=i.get(e.entityId),o=i.get(t.entityId);return void 0!==a||void 0!==o?(a??Number.MAX_SAFE_INTEGER)-(o??Number.MAX_SAFE_INTEGER):0})}_getCameraImageUrl(e){const t=this.hass?.states?.[e];if(!t)return;const a=t.attributes?.entity_picture,i=t.attributes?.access_token,o="string"==typeof a&&a?a:i?`/api/camera_proxy/${e}?token=${encodeURIComponent(i)}`:"";if(!o)return;const r=o.includes("?")?"&":"?";return`${o}${r}dd_cache=${encodeURIComponent(t.last_updated||t.last_changed||"")}`}_renderHousePowerStatusCard(){const e=this._getHousePowerUsage();if(!e.sensorCount)return c;const t=e.sensorCount?this._tp("devices.live_power_sensor",e.sensorCount):this._t("home.no_live_power_sensors");return s`
      <div
        class="home-status-card house-power-card wattage ${e.sensorCount?"has-power":"is-empty"}"
        style=${this._domainStatusStyle("wattage")}
        @click=${this._openHousePowerDialog}
        @keydown=${this._handleHousePowerKeydown}
        data-domain="wattage"
        role="button"
        tabindex="0"
        aria-label=${`${this._t("home.house_power_usage")}: ${e.formattedTotal}`}
      >
        <div class="house-power-head">
          <div class="status-card-icon house-power-icon">
            <ha-icon icon="mdi:flash"></ha-icon>
          </div>
          <div class="house-power-copy">
            <div class="house-power-title">${this._t("home.house_power_usage")}</div>
            <div class="house-power-subtitle">${t}</div>
          </div>
          <div class="house-power-total">${e.formattedTotal}</div>
        </div>
        ${e.rooms.length?s`
          <div class="house-power-list" aria-label=${this._t("home.house_power_usage")}>
            ${m(e.rooms,e=>e.areaId,e=>this._renderHousePowerRoom(e))}
          </div>
        `:s`
          <div class="house-power-empty">${this._t("home.no_room_power_usage")}</div>
        `}
      </div>
    `}_houseClimateTitle(e){return"outdoor"===e?this._t("home.outdoor_climate"):this._t("home.indoor_climate")}_renderHouseClimateStatusCard(e){const t=this._getHouseClimateSummary(e);if(!t.metrics.length)return c;const a=this._houseClimateTitle(e);return s`
      <div
        class="home-status-card house-climate-card sensor ${e} metrics-${Math.min(t.metrics.length,4)}"
        style=${this._domainStatusStyle("climate")}
        @click=${()=>this._showHouseClimateEntities(void 0,e)}
        @keydown=${t=>this._handleHouseClimateKeydown(t,e)}
        data-domain="sensor"
        role="button"
        tabindex="0"
        aria-label=${a}
      >
        <div class="house-climate-head">
          <div class="status-card-icon house-climate-icon">
            <ha-icon icon=${"outdoor"===e?"mdi:sun-thermometer-outline":"mdi:home-thermometer-outline"}></ha-icon>
          </div>
          <div class="house-climate-copy">
            <div class="house-climate-title">${a}</div>
            <div class="house-climate-subtitle">
              ${this._tp("common.sensor",t.sensorCount)}
            </div>
          </div>
        </div>
        <div class="house-climate-grid">
          ${t.metrics.map(t=>s`
            <button
              class="house-climate-metric ${t.kind}"
              style=${`--metric-color: ${t.color};`}
              type="button"
              @click=${a=>{a.stopPropagation(),this._showHouseClimateEntities(t.kind,e)}}
            >
              <span class="house-climate-metric-icon">
                <ha-icon icon=${t.icon}></ha-icon>
              </span>
              <span class="house-climate-metric-copy">
                <span class="house-climate-metric-value">${t.value}</span>
                <span class="house-climate-metric-label">${t.label}</span>
              </span>
            </button>
          `)}
        </div>
      </div>
    `}_renderHousePowerRoom(e){return s`
      <div class="house-power-room">
        <span class="house-power-room-icon">
          <ha-icon icon=${e.icon}></ha-icon>
        </span>
        <span class="house-power-room-name">${e.name}</span>
        <span class="house-power-room-value">${e.formatted}</span>
        <span
          class="house-power-bar"
          aria-hidden="true"
          style=${`--power-width: ${e.percentage}%`}
        >
          <span class="house-power-bar-fill"></span>
        </span>
      </div>
    `}_renderHousePowerDialog(){if(!this._housePowerDialogOpen)return c;const e=u(this.hass,this.config),t=e.areas[0],a=this._housePowerStatisticsEntities(e.areas.flatMap(e=>e.entities),8);return s`
      <div class="house-power-dialog-overlay" @click=${this._closeHousePowerDialog}>
        <section
          class="house-power-dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${this._t("home.house_power_usage")}
          tabindex="0"
          @click=${e=>e.stopPropagation()}
          @keydown=${this._handleHousePowerDialogKeydown}
        >
          <div class="house-power-dialog-head">
            <div class="house-power-dialog-title-wrap">
              <span class="house-power-dialog-icon"><ha-icon icon="mdi:flash"></ha-icon></span>
              <div class="house-power-dialog-title">${this._t("home.house_power_usage")}</div>
              <button
                class="house-power-dialog-energy-link"
                type="button"
                @click=${this._openEnergyFromPowerDialog}
              >
                <span>${this._houseInfoEnergyViewLabel()}</span>
                <ha-icon icon="mdi:chevron-right"></ha-icon>
              </button>
            </div>
            <button
              class="house-power-dialog-close"
              type="button"
              title=${this._t("common.close")}
              aria-label=${this._t("common.close")}
              @click=${this._closeHousePowerDialog}
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>

          <div class="house-power-dialog-overview">
            <section class="house-power-dialog-overview-card">
              <div class="house-power-dialog-overview-head">
                <span class="house-power-dialog-overview-icon"><ha-icon icon="mdi:home-lightning-bolt-outline"></ha-icon></span>
                <div>
                  <strong>${this._t("devices.whole_house")}</strong>
                  <small>${this._tp("devices.live_power_sensor",e.sensorCount)}</small>
                </div>
                <b>${e.formattedTotal||"0 W"}</b>
              </div>
              ${this._renderHousePowerStatisticsGraph(a,this._t("devices.whole_house_history"))}
            </section>

            ${t?s`
              <section class="house-power-dialog-overview-card">
                <div class="house-power-dialog-overview-head">
                  <span class="house-power-dialog-overview-icon"><ha-icon icon=${t.icon}></ha-icon></span>
                  <div>
                    <strong>${this._t("devices.top_area")}</strong>
                    <small>${t.name}</small>
                  </div>
                  <b>${t.formattedTotal}</b>
                </div>
                <div class="house-power-dialog-top-entities">
                  ${t.entities.slice(0,3).map(e=>s`
                    <button type="button" @click=${()=>this._showMoreInfo(e.entityId)}>
                      <span>${e.name}</span>
                      <strong>${e.formatted}</strong>
                    </button>
                  `)}
                </div>
              </section>
            `:c}
          </div>

          ${e.areas.length?s`
            <div class="house-power-dialog-areas">
              ${e.areas.map(e=>s`
                <section class="house-power-dialog-area">
                  <div class="house-power-dialog-area-head">
                    <span class="house-power-dialog-area-icon"><ha-icon icon=${e.icon}></ha-icon></span>
                    <span class="house-power-dialog-area-name">${e.name}</span>
                    <strong>${e.formattedTotal}</strong>
                  </div>
                  ${this._renderHousePowerStatisticsGraph(this._housePowerStatisticsEntities(e.entities,6),`${e.name} power history`)}
                  <div class="house-power-dialog-entities">
                    ${e.entities.map(t=>{const a=e.totalWatts>0?Math.max(4,Math.min(100,Math.round(t.watts/e.totalWatts*100))):0;return s`
                        <button
                          class="house-power-dialog-entity detailed"
                          type="button"
                          style=${`--entity-power-width: ${a}%`}
                          @click=${()=>this._showMoreInfo(t.entityId)}
                        >
                          <span class="house-power-dialog-entity-icon"><ha-icon icon=${t.icon}></ha-icon></span>
                          <span class="house-power-dialog-entity-copy">
                            <strong>${t.name}</strong>
                            <small>${e.name}</small>
                            <span class="house-power-dialog-entity-bar"><span></span></span>
                          </span>
                          <b>${t.formatted}</b>
                        </button>
                      `})}
                  </div>
                </section>
              `)}
            </div>
          `:s`
            <div class="house-power-dialog-empty">${this._t("home.no_room_power_usage")}</div>
          `}
        </section>
      </div>
    `}_handleHouseClimateKeydown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._showHouseClimateEntities(void 0,t))}_showHouseClimateEntities(e,t="indoor"){const a=this._getHouseClimateSummary(t),i=e?a.metrics.filter(t=>t.kind===e):a.metrics,o=i.flatMap(e=>e.entityIds);if(!o.length)return void this._openDeviceDomain("sensor");const r=e&&i[0]?.label||this._houseClimateTitle(t);Ke(this,{domain:"sensor",config:this.config,entityIds:o,customTitle:r,viewAllLabel:this._houseInfoDeviceViewLabel(),onViewAll:()=>this._openDeviceDomain("sensor")})}_renderHousePersonsStatusCard(){const e=this._getVisiblePersonEntities(),t=e.filter(e=>"home"===e.state).length,a=e.length?`${t}/${e.length} ${this._t("person.home")}`:this._t("home.no_people");return s`
      <div
        class="home-status-card house-persons-card person persons-${Math.min(e.length,4)}"
        style=${this._domainStatusStyle("person")}
        @click=${()=>this._showPersonEntities()}
        data-domain="person"
      >
        <div class="house-persons-head">
          <div class="status-card-icon house-persons-icon">
            <ha-icon icon="mdi:account-group"></ha-icon>
          </div>
          <div class="house-persons-copy">
            <div class="house-persons-title">${this._t("home.people")}</div>
            <div class="house-persons-subtitle">${a}</div>
          </div>
        </div>
        ${e.length?s`
          <div class="house-persons-grid">
            ${m(e.slice(0,4),e=>e.entity_id,e=>this._renderHousePersonMini(e))}
          </div>
        `:s`
          <div class="house-persons-empty">${this._t("home.no_visible_people")}</div>
        `}
      </div>
    `}_renderHousePersonMini(e){const t=e.attributes?.friendly_name||e.entity_id.split(".")[1],a=e.attributes?.entity_picture,i=this._formatPersonState(e),o="home"===e.state?"is-home":"not_home"===e.state?"is-away":"is-zone";return s`
      <button
        class="house-person-mini ${o}"
        type="button"
        aria-label=${`${t}: ${i}`}
        @click=${t=>this._handleHousePersonClick(t,e.entity_id)}
      >
        <span class="house-person-avatar">
          ${a?s`
            <img src=${a} alt=${t}>
          `:s`
            <ha-icon icon="mdi:account"></ha-icon>
          `}
        </span>
        <span class="house-person-mini-copy">
          <span class="house-person-mini-name">${t}</span>
          <span class="house-person-mini-state">${i}</span>
        </span>
      </button>
    `}_handleHousePersonClick(e,t){e.stopPropagation(),this._showMoreInfo(t)}_getVisiblePersonEntities(){if(!this.hass||!this.config)return[];const e=new Set(this.config.settings?.hidden_persons||[]);return Object.values(this.hass.states).filter(t=>t.entity_id.startsWith("person.")&&!e.has(t.entity_id)&&!this.hass.entities?.[t.entity_id]?.hidden_by)}_formatPersonState(e){return"home"===e.state?this._t("person.home"):"not_home"===e.state?this._t("person.away"):e.state&&"unknown"!==e.state?"unavailable"===e.state?this._t("common.unavailable"):String(e.state).replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()):this._t("common.unknown")}_weatherDisplayEnabled(){return!1!==this.config?.settings?.show_weather&&!1!==this.config?.global_options?.show_weather}_formatWeatherTemperature(e){if(!e)return"";const t=e.attributes||{},a=t.temperature??t.current_temperature??t.apparent_temperature??t.native_temperature;if(null==a||""===a)return"";const i=t.temperature_unit||t.native_temperature_unit||this.hass?.config?.unit_system?.temperature||"";return D(a,i)}_weatherTitle(e){const t=this._formatWeatherTemperature(e),a=this._formatWeatherCondition(e?.state),i=this._t("home.outside").toLocaleLowerCase(H(this.hass));return t&&a?`${t} ${i}, ${a}`:t?`${t} ${i}`:a||this._t("home.outside_weather")}_formatWeatherCondition(e){return e&&"unknown"!==e&&"unavailable"!==e?e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()):""}_getHousePowerUsage(){const e=u(this.hass,this.config),t=e.areas.slice(0,4).map(e=>({areaId:e.areaId,name:e.name,icon:e.icon,watts:e.totalWatts,formatted:e.formattedTotal,percentage:e.percentage}));return{totalWatts:e.totalWatts,formattedTotal:e.formattedTotal,sensorCount:e.sensorCount,rooms:t}}_getHouseClimateSummary(e="indoor"){const t={temperature:[],humidity:[]},a=new Set(this.config?.settings?.home_climate_excluded_areas||[]),i=new Set(this.config?.settings?.home_outdoor_climate_areas||[]);("outdoor"===e?(this.config?.areas||[]).filter(e=>i.has(e.area_id)):this._getVisibleSortedAreas().filter(e=>!a.has(e.area_id)&&!i.has(e.area_id))).forEach(e=>{const a=this.hass?.areas?.[e.area_id];["temperature","humidity"].forEach(e=>{const i="temperature"===e?a?.temperature_entity_id:a?.humidity_entity_id;if(!i)return;const o=this.hass?.states?.[i];if(!o||"unavailable"===o.state||"unknown"===o.state)return;const r=Number.parseFloat(o.state);Number.isFinite(r)&&t[e].push({value:r,unit:String(o.attributes?.unit_of_measurement||("temperature"===e?this.hass?.config?.unit_system?.temperature||"°C":"%")),entityIds:[i]})})});const o=[],r=this._houseClimateMetric("temperature",t.temperature,e),n=this._houseClimateMetric("humidity",t.humidity,e);return r&&o.push(r),n&&o.push(n),{sensorCount:t.temperature.length+t.humidity.length,metrics:o}}_houseClimateMetric(e,t,a="indoor"){if(!t.length)return;const i=t.reduce((e,t)=>e+t.value,0)/t.length,o=t[0]?.unit||("temperature"===e?"°C":"%"),r=D("temperature"===e?i.toFixed(1):Math.round(i),o),n="indoor"===a||t.length>1;return{kind:e,label:"temperature"===e?this._t(n?"home.average_temperature":"home.temperature"):this._t(n?"home.average_humidity":"home.humidity"),value:r,count:t.length,icon:g("sensor","temperature"===e?"temperature":"humidity"),color:h("sensor",e),entityIds:[...new Set(t.flatMap(e=>e.entityIds))]}}_renderMobileHomeAreas(){const e=this._getVisibleSortedAreas();if(!e.length)return c;const t=this._isDesktopAreaSidebarCollapsed(),a=t?"grid":this._mobileHomeAreasLayout,i="grid"===a,o=this._isMobile&&!this._renderAllMobileHomeAreas&&e.length>12?e.slice(0,12):e;return s`
      <section class="mobile-home-section mobile-home-areas layout-${a}">
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            ${t?s`
              <span class="mobile-layout-toggle active" aria-hidden="true">
                <ha-icon icon="mdi:view-grid-outline"></ha-icon>
              </span>
            `:s`
              <button
                class="mobile-layout-toggle ${i?"active":""}"
                type="button"
                title=${i?this._t("home.swipe_areas"):this._t("home.show_all_areas")}
                aria-label=${i?this._t("home.switch_areas_swipe"):this._t("home.show_all_areas")}
                @click=${this._toggleMobileHomeAreasLayout}
              >
                <ha-icon icon=${i?"mdi:view-carousel-outline":"mdi:view-grid-outline"}></ha-icon>
              </button>
            `}
            <span class="mobile-section-title-label">${this._t("home.areas")}</span>
          </div>
          ${t?c:s`
            <button
              class="mobile-section-action"
              type="button"
              @click=${this._openMobileAreaSwitcher}
            >
              <span>${this._t("common.see_all")}</span>
              <ha-icon icon="mdi:chevron-right"></ha-icon>
            </button>
          `}
        </div>
        <div class="mobile-area-rail">
          ${m(o,e=>e.area_id,e=>this._renderMobileHomeAreaCard(e))}
        </div>
      </section>
    `}_renderMobileHomeAreaCard(e){const t=this._getFilteredAreaEntities(e.area_id),a=this._getCachedAreaData(e),i=this._getAreaDeviceCount(e.area_id,t),o=Boolean(e.picture),r=[a.temperature,a.humidity,a.wattage].filter(Boolean).join(" • ")||(1===i?"1 device":`${i} devices`),n=this._getAreaStatusBadges(a),d=o?this._getPictureContrastClass(e.picture):"";return s`
      <button
        class="mobile-area-card ${o?"has-picture":""} ${d}"
        type="button"
        @click=${()=>this._selectArea(e.area_id)}
      >
        ${o?s`
          <div class="mobile-area-picture" style=${`background-image: url('${e.picture}');`}></div>
        `:c}
        <div class="mobile-area-top">
          <div class="mobile-area-icon">
            <ha-icon icon=${l(e)}></ha-icon>
          </div>
          <div class="mobile-area-badges">
            ${n.slice(0,4).map(e=>s`
              <span
                class="mobile-area-badge ${e.className}"
                style=${`--area-badge-color: ${e.color};`}
              >
                <ha-icon icon=${e.icon}></ha-icon>
                <span>${e.count}</span>
              </span>
            `)}
          </div>
        </div>
        <div class="mobile-area-copy">
          <div class="mobile-area-name">${e.name}</div>
          <div class="mobile-area-meta">${r}</div>
        </div>
      </button>
    `}_getGreeting(){const e=(new Date).getHours();return e<12?this._t("home.good_morning"):e<18?this._t("home.good_afternoon"):this._t("home.good_evening")}_renderHomeAlarm(){const e=this._getAlarmEntity();if(!e)return c;const t=e?.state||"",a=["armed_away","armed_home","armed_night","armed_vacation"].includes(t),i="disarmed"===t;return s`
      <div class="welcome-alarm ${a?"alarm-armed":i?"alarm-disarmed":"alarm-triggered"}" @click=${()=>this._showMoreInfo(e?.entity_id||"")}>
        <ha-icon icon=${a?"mdi:shield-check":i?"mdi:shield-off":"mdi:shield-alert"}></ha-icon>
        <span class="alarm-text">${(()=>a?this._t("home.alarm_armed"):i?this._t("home.alarm_disarmed"):this._t("domain.alarm_control_panel"))()}</span>
          </div>
    `}_renderFavorites(){const e=this._getEffectiveFavoriteEntities();if(0===e.length)return c;const t="grid"===this._mobileHomeFavoritesLayout;return s`
      <div class="favorites-section home-favorites-section layout-${this._mobileHomeFavoritesLayout}">
        <div class="favorites-header">
          <ha-icon icon="mdi:star"></ha-icon>
          <span>${this._t("favorites.title")}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <button
              class="mobile-layout-toggle ${t?"active":""}"
              type="button"
              title=${t?this._t("favorites.swipe"):this._t("favorites.show_all")}
              aria-label=${t?this._t("favorites.switch_swipe"):this._t("favorites.show_all")}
              @click=${this._toggleMobileHomeFavoritesLayout}
            >
              <ha-icon icon=${t?"mdi:view-carousel-outline":"mdi:view-grid-outline"}></ha-icon>
            </button>
            <span class="mobile-section-title-label">${this._t("favorites.title")}</span>
          </div>
        </div>
        <div class="favorites-grid">
          ${m(e,e=>e,e=>this._renderFavoriteCard(e))}
        </div>
      </div>
    `}_renderFavoriteCard(e){const t=this.hass.states[e],a=this.hass.entities?.[e];if(!t||a?.hidden_by)return c;const i=this._getEffectiveEntityState(t),o=e.split(".")[0]||"unknown",r=i.attributes?.device_class,n=i.attributes?.friendly_name||a?.name||e,d=this._favoriteDisplayState(i,o),l=this._entityAreaName(e),p=!0===this.config?.settings?.hide_area_name_in_entity_names&&l?J(n,l):n,m=a?.icon||i.attributes?.icon||g(o,r)||x(o),b=this._favoriteActiveState(i,o),u=this._favoriteSupportsQuickToggle(o),f="cover"===o?"opening":"sensor"!==o||"temperature"!==r&&"humidity"!==r?"sensor"===o&&"power"===r?"wattage":o:r,v="opening"===f?h("binary_sensor","opening"):h(f,r),w=["favorite-card-wrapper",`favorite-${o}`,r?`favorite-${r}`:"",b,u?"can-toggle":"info-only"].filter(Boolean).join(" ");return s`
      <article
        class=${w}
        style=${`--favorite-color: ${v};`}
        data-entity=${e}
        role="button"
        tabindex="0"
        @click=${()=>this._showMoreInfo(e)}
        @keydown=${t=>this._handleFavoriteKeydown(t,e)}
      >
        <div class="favorite-icon">
          <ha-icon icon=${m}></ha-icon>
        </div>
        <div class="favorite-body">
          <div
            class="favorite-name"
            title=${p}
          >${p}</div>
          <div class="favorite-meta">
            ${l?s`<span class="favorite-area">${l}</span>`:c}
          </div>
        </div>
        <div class="favorite-end">
          ${"cover"===o?this._renderFavoriteCoverActions(i):u?s`
              <button
                class="favorite-quick-action"
                type="button"
                title=${this._favoriteQuickTitle(i,o)}
                @click=${e=>this._handleFavoriteQuickAction(e,i,o)}
              >
                <ha-icon icon=${this._favoriteQuickIcon(i,o)}></ha-icon>
              </button>
            `:d?s`
              <div class="favorite-status-pill" title=${d}>${d}</div>
            `:c}
        </div>
      </article>
    `}_favoriteDisplayState(e,t){return"light"===t&&"on"===String(e?.state||"").toLowerCase()&&"number"==typeof e?.attributes?.brightness?`${Math.round(Number(e.attributes.brightness)/255*100)} %`:"cover"===t&&"number"==typeof e?.attributes?.current_position?`${Math.round(Number(e.attributes.current_position))} %`:this._formatFavoriteState(e)}_renderFavoriteCoverActions(e){const t=String(e?.state||"").toLowerCase(),a=["unavailable","unknown"].includes(t),i=this._coverSupportsFeature(e,1),o=this._coverSupportsFeature(e,2);return s`
      <div class="favorite-cover-actions" @click=${e=>e.stopPropagation()}>
        ${i?s`
          <button
            class="favorite-cover-action ${"opening"===t?"active":""}"
            type="button"
            title=${this._t("action.open")}
            aria-label=${this._t("action.open")}
            ?disabled=${a}
            @click=${t=>this._handleMobileCoverAction(t,e,"open")}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
        `:c}
        ${o?s`
          <button
            class="favorite-cover-action ${"closing"===t?"active":""}"
            type="button"
            title=${this._t("action.close")}
            aria-label=${this._t("action.close")}
            ?disabled=${a}
            @click=${t=>this._handleMobileCoverAction(t,e,"close")}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
        `:c}
      </div>
    `}_handleFavoriteKeydown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._showMoreInfo(t))}_formatFavoriteState(e){const t=this._getEffectiveEntityState(e);return E(this.hass,t)}_getEffectiveEntityState(e){const t=e?.entity_id;if(!t)return e;const a=this._optimisticEntityStates[t];if(!a||a.expiresAt<=Date.now())return e;return String(e?.state||"").toLowerCase()===a.state.toLowerCase()?e:{...e,state:a.state}}_setOptimisticEntityState(e,t){this._setOptimisticEntityStates([e],t)}_setOptimisticEntityStates(e,t){const a=[...new Set(e.filter(Boolean))];if(!a.length)return;const i=Date.now()+5e3,o={...this._optimisticEntityStates};a.forEach(e=>{o[e]={state:t,expiresAt:i}}),this._optimisticEntityStates=o,this._scheduleOptimisticCleanup()}_clearOptimisticEntityStates(e){const t=[...new Set(e.filter(Boolean))];if(!t.length)return;const a={...this._optimisticEntityStates};let i=!1;t.forEach(e=>{a[e]&&(delete a[e],i=!0)}),i&&(this._optimisticEntityStates=a)}_reconcileOptimisticEntityStates(){const e=Object.entries(this._optimisticEntityStates);if(!e.length)return;const t=Date.now(),a={...this._optimisticEntityStates};let i=!1;e.forEach(([e,o])=>{const r=this.hass?.states?.[e]?.state;(!r||o.expiresAt<=t||String(r).toLowerCase()===o.state.toLowerCase())&&(delete a[e],i=!0)}),i&&(this._optimisticEntityStates=a)}_scheduleOptimisticCleanup(){if(void 0!==this._optimisticCleanupTimer)return;const e=Object.values(this._optimisticEntityStates).map(e=>e.expiresAt);if(!e.length)return;const t=Math.min(...e);if(!Number.isFinite(t))return;const a=Math.max(80,t-Date.now()+50);this._optimisticCleanupTimer=window.setTimeout(()=>{this._optimisticCleanupTimer=void 0,this._reconcileOptimisticEntityStates(),Object.keys(this._optimisticEntityStates).length&&this._scheduleOptimisticCleanup()},a)}_favoriteActiveState(e,t){const a=String(e?.state||"").toLowerCase();if(["unavailable","unknown"].includes(a))return"is-idle";if("cover"===t)return["open","opening"].includes(a)?"is-active":"is-off";if("lock"===t)return"unlocked"===a?"is-active":"is-off";if("climate"===t){const t=e?.attributes?.hvac_action;return t&&"idle"!==t&&"off"!==t?"is-active":"is-idle"}return["off","closed","locked","not_home","idle"].includes(a)?"is-off":"is-active"}_favoriteSupportsQuickToggle(e){return["light","switch","fan","input_boolean","cover","lock"].includes(e)}_favoriteQuickIcon(e,t){const a=String(e?.state||"").toLowerCase();return"cover"===t?["open","opening"].includes(a)?"mdi:arrow-down":"mdi:arrow-up":"lock"===t?"unlocked"===a?"mdi:lock-open-variant-outline":"mdi:lock-outline":["light","switch","fan","input_boolean"].includes(t)?"mdi:power":"mdi:chevron-right"}_favoriteQuickTitle(e,t){const a=String(e?.state||"").toLowerCase();return"cover"===t?this._t(["open","opening"].includes(a)?"action.close":"action.open"):"lock"===t?this._t("unlocked"===a?"action.lock":"action.unlock"):["light","switch","fan","input_boolean"].includes(t)?this._t("off"===a?"action.turn_on":"action.turn_off"):this._t("action.more_info")}async _handleFavoriteQuickAction(e,t,a){e.stopPropagation();const i=t?.entity_id;if(!i)return;const o=[i];try{if(["light","switch","fan","input_boolean"].includes(a)){const e=!this._isEntityActiveForUi(t,a);return this._setOptimisticEntityState(i,e?"on":"off"),void await this.hass.callService(a,e?"turn_on":"turn_off",{entity_id:i})}if("cover"===a){const e=["open","opening"].includes(String(t.state).toLowerCase());return this._setOptimisticEntityState(i,e?"closed":"open"),void await this.hass.callService("cover",e?"close_cover":"open_cover",{entity_id:i})}if("lock"===a){const e="unlocked"===String(t.state).toLowerCase();return this._setOptimisticEntityState(i,e?"locked":"unlocked"),void await this.hass.callService("lock",e?"lock":"unlock",{entity_id:i})}}catch(e){return this._clearOptimisticEntityStates(o),console.warn(`Failed to run favorite quick action for ${i}:`,e),void this._showToast(this._t("entity.update_failed"))}this._showMoreInfo(i)}_areaTileState(e,t,a){return"open"===a?1===t?this._t(e?"common.open":"common.closed"):e?this._t("area_header.open_count",{active:e,total:t}):this._t("common.closed"):1===t?this._t(e?"common.on":"common.off"):e?this._t("area_header.on_count",{active:e,total:t}):this._t("common.off")}_renderAreaQuickTiles(e,t){const a=t.filter(e=>e.entity_id.startsWith("light.")),i=t.filter(e=>e.entity_id.startsWith("switch.")),o=t.filter(e=>e.entity_id.startsWith("cover.")),r=t.filter(e=>e.entity_id.startsWith("fan.")),n=t.filter(e=>e.entity_id.startsWith("climate."));if(!(a.length||i.length||o.length||r.length||n.length))return c;const d=(e,t,a,i,o,r)=>{const n=a>0,c=this._t(`domain.${e}`),d=this._areaTileState(a,t,"on"),l=this._t(n?o[1]:o[0],{active:a,total:t});return s`
        <button
          class="dd-room-tile ${e} ${n?"is-on":""}"
          type="button"
          aria-pressed=${n?"true":"false"}
          title=${l}
          aria-label=${`${c}: ${d}. ${l}`}
          @click=${r}
        >
          <span class="dd-room-tile-icon">
            <ha-icon icon=${n?i[1]:i[0]}></ha-icon>
          </span>
          <span class="dd-room-tile-copy">
            <span class="dd-room-tile-label">${c}</span>
            <span class="dd-room-tile-state">${d}</span>
          </span>
          <span class="dd-room-tile-switch" aria-hidden="true"></span>
        </button>
      `},l=this._countActiveEntities(o,"cover"),p=this._countActiveEntities(n,"climate"),m=1===n.length?this.hass.states[n[0].entity_id]:void 0,h=m?.attributes?.current_temperature,g=this.hass.config?.unit_system?.temperature||"°",b=null!=h?D(h,g):this._tp("common.entity",n.length);return s`
      <div class="dd-room-tiles">
        ${a.length?d("light",a.length,this._countActiveEntities(a,"light"),["mdi:lightbulb-outline","mdi:lightbulb"],["action.lights_on_summary","action.lights_off_summary"],()=>this._toggleAreaLights(e)):c}
        ${i.length?d("switch",i.length,this._countActiveEntities(i,"switch"),["mdi:power-plug-off-outline","mdi:power-plug"],["action.switches_on_summary","action.switches_off_summary"],()=>this._toggleAreaSwitches(e)):c}
        ${o.length?s`
          <div class="dd-room-tile cover has-actions ${l>0?"is-on":""}">
            <span class="dd-room-tile-icon">
              <ha-icon icon=${l>0?"mdi:window-shutter-open":"mdi:window-shutter"}></ha-icon>
            </span>
            <span class="dd-room-tile-copy">
              <span class="dd-room-tile-label">${this._t("domain.cover")}</span>
              <span class="dd-room-tile-state">${this._areaTileState(l,o.length,"open")}</span>
            </span>
            <span class="dd-room-tile-actions">
              <button
                class="dd-room-tile-action"
                type="button"
                title=${this._t("action.open_all")}
                aria-label=${this._t("action.open_all")}
                @click=${()=>{this._setAreaCoverState(e,!0)}}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon>
              </button>
              <button
                class="dd-room-tile-action"
                type="button"
                title=${this._t("action.close_all")}
                aria-label=${this._t("action.close_all")}
                @click=${()=>{this._setAreaCoverState(e,!1)}}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon>
              </button>
            </span>
          </div>
        `:c}
        ${r.length?d("fan",r.length,this._countActiveEntities(r,"fan"),["mdi:fan-off","mdi:fan"],["action.fans_on_summary","action.fans_off_summary"],()=>this._toggleAreaFans(e)):c}
        ${n.length?s`
          <button
            class="dd-room-tile climate ${p>0?"is-on":""}"
            type="button"
            title=${this._t("action.open_climate_controls")}
            aria-label=${`${this._t("domain.climate")}: ${b}. ${this._t("action.open_climate_controls")}`}
            @click=${()=>this._openAreaClimateControls(e,n)}
          >
            <span class="dd-room-tile-icon">
              <ha-icon icon=${x("climate")}></ha-icon>
            </span>
            <span class="dd-room-tile-copy">
              <span class="dd-room-tile-label">${this._t("domain.climate")}</span>
              <span class="dd-room-tile-state">${b}</span>
            </span>
            <ha-icon class="dd-room-tile-chevron" icon="mdi:chevron-right" aria-hidden="true"></ha-icon>
          </button>
        `:c}
      </div>
    `}_renderAreaCompactBar(e,t,a,i,o,r){const n=this._areaHeaderStuck,d=[t.temperature,t.humidity].filter(Boolean).join(" · ");return s`
      <div class="dd-room-compact ${n?"is-visible":""}" ?inert=${!n} aria-hidden=${n?"false":"true"}>
        <div class="dd-room-compact-panel">
          <div class="dd-room-compact-bar">
            ${i}
            <div class="dd-room-compact-title">
              <strong>${e.name}</strong>
              <span>${d||a}</span>
            </div>
            <div class="dd-page-header-actions">${o}</div>
          </div>
          ${n&&this._areaHeaderRevealed?r:c}
        </div>
      </div>
    `}_renderAreaHeaderReadings(e){return[e.temperature?s`
        <span class="dd-page-header-reading temperature" title=${this._t("home.temperature")}>
          <ha-icon icon="mdi:thermometer" aria-hidden="true"></ha-icon>
          <span class="dd-visually-hidden">${this._t("home.temperature")}</span>
          ${e.temperature}
        </span>
      `:c,e.humidity?s`
        <span class="dd-page-header-reading humidity" title=${this._t("home.humidity")}>
          <ha-icon icon="mdi:water-percent" aria-hidden="true"></ha-icon>
          <span class="dd-visually-hidden">${this._t("home.humidity")}</span>
          ${e.humidity}
        </span>
      `:c,e.wattage?s`
        <span class="dd-page-header-reading wattage" title=${this._t("entity.power_usage")}>
          <ha-icon icon="mdi:flash" aria-hidden="true"></ha-icon>
          <span class="dd-visually-hidden">${this._t("entity.power_usage")}</span>
          ${e.wattage}
        </span>
      `:c]}_renderAreaMobileCameraAction(e){const t=e.find(e=>{if(!e.entity_id.startsWith("camera."))return!1;const t=this.hass?.states?.[e.entity_id]?.state;return Boolean(t&&"unavailable"!==t&&"unknown"!==t)});return t?s`
      <button
        class="dd-page-header-button"
        type="button"
        title=${this._t("action.open_camera")}
        aria-label=${this._t("action.open_camera")}
        @click=${()=>this._showMoreInfo(t.entity_id)}
      >
        <ha-icon icon="mdi:video-outline"></ha-icon>
      </button>
    `:c}_openAreaClimateControls(e,t){0!==t.length&&(1!==t.length?Ke(this,{domain:"climate",areaId:e,config:this.config,customTitle:f(this.hass,"climate"),customEntities:t.map(e=>e.entity_id)}):this._showMoreInfo(t[0].entity_id))}async _toggleAreaSwitches(e){const t=this._getFilteredAreaEntities(e).filter(e=>e.entity_id.startsWith("switch."));if(0===t.length)return;const a=this._areAllEntitiesOff(t,"switch");if(!await this._confirmMasterActionIfNeeded("switch",a,t.length,e))return;const i=a?"turn_on":"turn_off",o=t.map(e=>e.entity_id);this._setOptimisticEntityStates(o,a?"on":"off");try{await this.hass.callService("switch",i,{entity_id:o}),this._showToast(this._t(a?"action.all_switches_on":"action.all_switches_off"))}catch(t){this._clearOptimisticEntityStates(o),console.warn(`Failed to toggle switches in area ${e}:`,t),this._showToast(this._t("entity.switches_failed"))}}async _toggleAreaFans(e){const t=this._getFilteredAreaEntities(e).filter(e=>e.entity_id.startsWith("fan."));if(0===t.length)return;const a=this._areAllEntitiesOff(t,"fan");if(!await this._confirmMasterActionIfNeeded("fan",a,t.length,e))return;const i=a?"turn_on":"turn_off",o=t.map(e=>e.entity_id);this._setOptimisticEntityStates(o,a?"on":"off");try{await this.hass.callService("fan",i,{entity_id:o}),this._showToast(this._t(a?"action.all_fans_on":"action.all_fans_off"))}catch(t){this._clearOptimisticEntityStates(o),console.warn(`Failed to toggle fans in area ${e}:`,t),this._showToast(this._t("entity.fans_failed"))}}async _setAreaCoverState(e,t){const a=this._getFilteredAreaEntities(e).filter(e=>e.entity_id.startsWith("cover."));if(0===a.length)return;if(!await this._confirmMasterActionIfNeeded("cover",t,a.length,e))return;const i=t?"open_cover":"close_cover",o=a.map(e=>e.entity_id);this._setOptimisticEntityStates(o,t?"open":"closed");try{await this.hass.callService("cover",i,{entity_id:o}),this._showToast(this._t(t?"action.open_all":"action.close_all"))}catch(a){this._clearOptimisticEntityStates(o),console.warn(`Failed to ${t?"open":"close"} covers in area ${e}:`,a),this._showToast(this._t("entity.covers_failed"))}}_renderAreaView(){if(!this._selectedArea)return c;const e=this.config?.areas?.find(e=>e.area_id===this._selectedArea);if(!e)return c;const t=this._getFilteredAreaEntities(this._selectedArea),a=this._editMode?this._getEditableAreaEntities(this._selectedArea):t,i=this._getCachedAreaData(e),o=Boolean(e.picture),r=this._getAreaDeviceCount(e.area_id,t),n=this._areaThermostatEntityId(t),d=n?t.filter(e=>e.entity_id!==n):t,p=this._tp("common.device",r),m=Boolean(i.temperature||i.humidity||i.wattage),h=this._renderAreaQuickTiles(e.area_id,d),g=h!==c||Boolean(n),b=s`
      <button
        class="dd-page-header-button dd-page-header-home"
        type="button"
        title=${this._t("sidebar.home")}
        aria-label=${this._t("navigation.back_home")}
        @click=${()=>this._selectView("home")}
      >
        <ha-icon icon="mdi:home"></ha-icon>
      </button>
    `,x=s`
      ${this._renderAreaMobileCameraAction(t)}
      ${this._renderUnavailableEntitiesIcon(e.area_id)}
      ${this._canManageDashboard()?s`
        <button
          class="dd-page-header-button ${this._editMode?"is-active":""}"
          type="button"
          aria-pressed=${this._editMode?"true":"false"}
          title=${this._editMode?this._t("layout.done_editing"):this._t("layout.edit_custom_cards")}
          aria-label=${this._editMode?this._t("layout.done_editing"):this._t("layout.edit_custom_cards")}
          @click=${this._toggleEditMode}
        >
          <ha-icon icon=${this._editMode?"mdi:check":"mdi:view-dashboard-edit-outline"}></ha-icon>
        </button>
      `:c}
    `;return s`
      <div class="area-view">
        ${this._isMobile?this._renderAreaCompactBar(e,i,p,b,x,h):c}

        <header class="dd-page-header room-header">
          <div class="dd-page-header-with-media">
            <div class="dd-page-header-media-tile" aria-hidden="true">
              ${o?s`<div class="dd-page-header-room-picture" style=${`background-image: url('${e.picture}');`}></div>`:s`
                    <div class="dd-page-header-room-icon">
                      <ha-icon icon=${l(e)}></ha-icon>
                    </div>
                  `}
            </div>

            <div class="dd-page-header-main">
              <div class="dd-page-header-top">
                <div class="dd-page-header-identity">
                  <div class="dd-page-header-copy">
                    <div class="dd-page-header-title-row">
                      ${b}
                      <ha-icon class="dd-page-header-title-chevron" icon="mdi:chevron-right" aria-hidden="true"></ha-icon>
                      <h1 class="dd-page-header-title">${e.name}</h1>
                    </div>
                    <div class="dd-page-header-subtitle">
                      <span class="dd-page-header-device-label">${p}</span>
                      ${m?s`<span class="dd-page-header-subtitle-separator" aria-hidden="true">·</span>`:c}
                      ${this._renderAreaHeaderReadings(i)}
                    </div>
                  </div>
                </div>
                <div class="dd-page-header-actions">${x}</div>
              </div>

              ${g?s`
                <div class="dd-page-header-strip">
                  ${h}
                  ${n?s`
                    <dwains-dashboard-next-area-thermostat
                      .hass=${this.hass}
                      .entityId=${n}
                      .roomName=${e.name}
                    ></dwains-dashboard-next-area-thermostat>
                  `:c}
                </div>
              `:c}
            </div>
          </div>
        </header>

        ${this._isMobile?c:this._renderNowPlayingBar(!1)}
        ${this._renderCustomCardSlot(e.area_id,"top",this._t("layout.custom_cards_top"))}
        ${this._renderMobileEntitiesSection(e,a)}
        ${this._renderCustomCardSlot(e.area_id,"bottom",this._t("layout.custom_cards_bottom"))}
      </div>
    `}_renderRoomFavoritesBlock(){const e=this._getEffectiveFavoriteEntities().length;if(!e)return c;const t=()=>this._toggleHeader();return s`
      <section class="room-favorites-block ${this._headerExpanded?"":"is-collapsed"}">
        <div
          class="mobile-domain-header room-favorites-header expandable-header"
          role="button"
          tabindex="0"
          aria-expanded=${this._headerExpanded?"true":"false"}
          @click=${t}
          @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t())}}
        >
          <div class="mobile-domain-title room-favorites-title">
            <ha-icon
              class="mobile-domain-leading-chevron"
              icon=${this._headerExpanded?"mdi:chevron-up":"mdi:chevron-down"}
              aria-hidden="true"
            ></ha-icon>
            <span class="room-domain-icon room-favorites-icon" aria-hidden="true">
              <ha-icon icon="mdi:star"></ha-icon>
            </span>
            <span class="mobile-domain-title-copy">
              <span class="mobile-domain-title-label">${this._t("favorites.title")}</span>
              <span class="mobile-domain-count">(${e})</span>
            </span>
          </div>

        </div>

        <div class="room-favorites-content" style=${this._headerExpanded?"":"display:none"}>
          ${this._renderFavoritesSection()}
        </div>
      </section>
    `}_renderCustomCardSlot(e,t,a,i=!1){const o=this._canManageDashboard();!o&&this._editMode&&(this._editMode=!1);const r=this._getAreaCustomCards(e).filter(e=>e.placement===t);if(0===r.length&&!this._editMode)return c;const n=this._customCardDragOver?.areaId===e&&this._customCardDragOver.placement===t&&this._customCardDragOver.index===r.length,l={"dd-custom-section":!0,"after-domain":i,editing:this._editMode&&o,"drag-over":Boolean(n)};return s`
      <div
        class=${d(l)}
        @dragover=${a=>this._handleCustomSlotDragOver(a,e,t,r.length)}
        @drop=${a=>this._handleCustomCardDrop(a,e,t,r.length)}
      >
        ${this._editMode&&o||r.length?s`
              <div class="dd-custom-slot-head">
                <div class="dd-custom-slot-title">
                  <ha-icon icon="mdi:cards-outline"></ha-icon>
                  <span>${this._editMode&&o?a:this._t("layout.custom_cards")}</span>
                </div>
                ${this._editMode&&o?s`
                  <button class="dd-add-card-inline" @click=${()=>this._addCard(e,t,r.length)}>
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span>${this._t("layout.add_card")}</span>
                  </button>
                `:c}
              </div>
            `:c}
        <div class="dd-custom-grid">
          ${m(r,e=>e.id,(t,a)=>this._renderCustomCard(e,t,a))}
        </div>
      </div>
    `}_renderCustomCard(e,t,a){const i=this._customCardDrag?.areaId===e&&this._customCardDrag.cardId===t.id,o=this._customCardDragOver?.areaId===e&&this._customCardDragOver.placement===t.placement&&this._customCardDragOver.index===a,r={"dd-custom-card-wrap":!0,"dd-grid-full":"full"===t.card?.grid_options?.columns,"dd-grid-wide":this._customCardNeedsWideLayout(t.card),editing:this._editMode,dragging:i,"drag-over":o};return s`
      <div
        class=${d(r)}
        style=${fe(this._customCardGridStyle(t.card))}
        .draggable=${this._editMode}
        @dragstart=${a=>this._handleCustomCardDragStart(a,e,t.id)}
        @dragover=${i=>this._handleCustomSlotDragOver(i,e,t.placement,a)}
        @drop=${i=>this._handleCustomCardDrop(i,e,t.placement,a)}
        @dragend=${this._clearCustomCardDragState}
      >
        <div class="dd-card-toolbar">
          <button class="drag" title=${this._t("layout.drag_card")} aria-label=${this._t("layout.drag_card")}>
            <ha-icon icon="mdi:drag"></ha-icon>
          </button>
          <button title=${this._t("common.edit")} @click=${()=>this._editCard(e,t.id)}>
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button class="del" title=${this._t("common.delete")} @click=${()=>this._deleteCard(e,t.id)}>
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
        <dwains-dashboard-next-card-host .hass=${this.hass} .config=${t.card}></dwains-dashboard-next-card-host>
      </div>
    `}_customCardNeedsWideLayout(e){const t=String(e?.type||"").replace(/^custom:/,"");return["todo-list","calendar","map","history-graph","statistics-graph","logbook"].includes(t)}_customCardGridStyle(e){const t=e?.grid_options;if(!t||"object"!=typeof t)return{};const a={};if("full"===t.columns)a["--dd-card-grid-column"]="1 / -1";else if("number"==typeof t.columns&&Number.isFinite(t.columns)){const e=Math.max(1,Math.min(12,Math.round(t.columns)));a["--dd-card-grid-column"]=`span ${e}`}if("number"==typeof t.rows&&Number.isFinite(t.rows)){const e=Math.max(1,Math.min(12,Math.round(t.rows)));a["--dd-card-grid-min-height"]=56*e+8*(e-1)+"px"}return a}_getDomainSlotCustomCards(e,t,a,i){const o=this._customCardPlacementInDomain(t,a),r=this._customCardPlacementAfter(t),n="cover_openings"===t?"cover":void 0;return this._getAreaCustomCards(e).filter(e=>{if(e.placement===o)return!0;const s=this._domainCustomCardPlacementIndex(e.placement,t);if(a===i&&void 0!==s&&s>i)return!0;if(n){const t=this._customCardPlacementInDomain(n,a);if(e.placement===t)return!0;const o=this._domainCustomCardPlacementIndex(e.placement,n);if(a===i&&void 0!==o&&o>i)return!0;if(a===i&&e.placement===this._customCardPlacementAfter(n))return!0}return a===i&&e.placement===r})}_domainCustomCardPlacementIndex(e,t){const a=`domain:${t}:`;if(!e.startsWith(a))return;const i=Number(e.slice(a.length));return Number.isFinite(i)&&i>=0?i:void 0}_placementIndexForCard(e,t){const a=t.get(e.placement)||0;return t.set(e.placement,a+1),a}_renderDomainCustomCardSlot(e,t,a,i){const o=this._canManageDashboard();!o&&this._editMode&&(this._editMode=!1);const r=this._customCardPlacementInDomain(t,a),n=this._getDomainSlotCustomCards(e,t,a,i),d=n.filter(e=>e.placement===r).length,l=new Map,p=this._customCardDragOver?.areaId===e&&this._customCardDragOver.placement===r&&this._customCardDragOver.index===d;return 0!==n.length||this._editMode?s`
      ${n.map(t=>this._renderCustomCard(e,t,this._placementIndexForCard(t,l)))}
      ${this._editMode&&o&&a===i?s`
        <button
          class="dd-add-card dd-domain-add-card dd-domain-add-card-final ${p?"drag-over":""}"
          @click=${()=>this._addCard(e,r,d)}
          @dragover=${t=>this._handleCustomSlotDragOver(t,e,r,d)}
          @drop=${t=>this._handleCustomCardDrop(t,e,r,d)}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
          <span>${this._t("layout.add_card")}</span>
        </button>
      `:c}
    `:c}_renderUngroupedCustomCardSlot(e,t,a){const i=this._canManageDashboard();!i&&this._editMode&&(this._editMode=!1);const o=`ungrouped:${Math.max(0,t)}`,r=this._getAreaCustomCards(e).filter(e=>e.placement===o),n=this._customCardDragOver?.areaId===e&&this._customCardDragOver.placement===o&&this._customCardDragOver.index===r.length;return r.length||this._editMode?s`
      ${r.map((t,a)=>this._renderCustomCard(e,t,a))}
      ${this._editMode&&i&&t===a?s`
        <button
          class="dd-add-card dd-domain-add-card dd-domain-add-card-final ${n?"drag-over":""}"
          @click=${()=>this._addCard(e,o,r.length)}
          @dragover=${t=>this._handleCustomSlotDragOver(t,e,o,r.length)}
          @drop=${t=>this._handleCustomCardDrop(t,e,o,r.length)}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
          <span>${this._t("layout.add_card")}</span>
        </button>
      `:c}
    `:c}_fireNativeDialog(e,t){this.dispatchEvent(new CustomEvent("show-dialog",{bubbles:!0,composed:!0,detail:{dialogTag:e,dialogImport:()=>Promise.resolve(),dialogParams:t}}))}_customCardPlacementAfter(e){return`after:${e}`}_customCardPlacementInDomain(e,t){return`domain:${e}:${Math.max(0,t)}`}_customCardId(){return`area-card-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}_getAreaCustomCards(e){const t=this.config?.areas_options?.[e]||{};return Array.isArray(t.custom_cards)?t.custom_cards.map((e,t)=>({id:String(e?.id||`generated-${t}`),placement:String(e?.placement||"bottom"),card:e?.card})).filter(e=>e.card&&"object"==typeof e.card):[]}_getPersistableAreaCustomCards(e){return this._getAreaCustomCards(e).map(e=>({id:e.id,placement:e.placement||"bottom",card:e.card}))}_normalizeAreaCustomCardsForSave(e){return e.map(e=>({id:e.id.startsWith("generated-")?this._customCardId():e.id,placement:e.placement||"bottom",card:e.card}))}_insertIndexForPlacement(e,t,a){let i=0,o=-1;for(let r=0;r<e.length;r+=1){const n=e[r];if(n&&n.placement===t){if(i>=a)return r;i+=1,o=r}}return o>=0?o+1:e.length}_insertAreaCustomCard(e,t,a,i){const o=this._getPersistableAreaCustomCards(e),r=this._insertIndexForPlacement(o,a,i);o.splice(r,0,{id:this._customCardId(),placement:a,card:t}),this._saveAreaCustomCards(e,o)}_replaceAreaCustomCard(e,t,a){const i=this._getPersistableAreaCustomCards(e),o=i.findIndex(e=>e.id===t);if(o<0)return;const r=i[o];r&&(i[o]={...r,card:a},this._saveAreaCustomCards(e,i))}_addCard(e,t="bottom",a=Number.POSITIVE_INFINITY){if(this._canManageDashboard())if(customElements.get("hui-dialog-create-card")){const i={views:[{title:this.config?.areas?.find(t=>t.area_id===e)?.name||"Dwains",type:"sections",sections:[{type:"grid",cards:[]}]}]};this._fireNativeDialog("hui-dialog-create-card",{lovelaceConfig:i,path:[0,0],saveConfig:i=>{const o=i?.views?.[0]?.sections?.[0]?.cards||[],r=o[o.length-1];r&&this._insertAreaCustomCard(e,r,t,a)}})}else this._addCardYaml(e,t,a)}_editCard(e,t){if(!this._canManageDashboard())return;const a=this._getAreaCustomCards(e).find(e=>e.id===t)?.card;if(a)if(customElements.get("hui-dialog-edit-card")){const i={type:"grid",cards:[a]},o={views:[{title:"Dwains",type:"sections",sections:[i]}]};this._fireNativeDialog("hui-dialog-edit-card",{lovelaceConfig:o,cardConfig:a,sectionConfig:i,saveCardConfig:a=>{a?.type&&this._replaceAreaCustomCard(e,t,a)}})}else this._editCardYaml(e,t)}_addCardYaml(e,t="bottom",a=Number.POSITIVE_INFINITY){this._canManageDashboard()&&Z(this,{areaName:this.config?.areas?.find(t=>t.area_id===e)?.name,onSave:i=>{this._insertAreaCustomCard(e,i,t,a)}})}_editCardYaml(e,t){if(!this._canManageDashboard())return;const a=this._getAreaCustomCards(e).find(e=>e.id===t)?.card;a&&Z(this,{card:a,areaName:this.config?.areas?.find(t=>t.area_id===e)?.name,onSave:a=>{this._replaceAreaCustomCard(e,t,a)}})}_deleteCard(e,t){if(!this._canManageDashboard())return;if(!confirm(this._t("layout.delete_card_confirm")))return;const a=this._getPersistableAreaCustomCards(e).filter(e=>e.id!==t);this._saveAreaCustomCards(e,a)}_handleCustomCardDragStart(e,t,a){this._editMode&&this._canManageDashboard()?(this._clearGeneratedCardDragState(),this._customCardDrag={areaId:t,cardId:a},this._customCardDragOver=null,e.dataTransfer?.setData("text/plain",a),e.dataTransfer&&(e.dataTransfer.effectAllowed="move")):e.preventDefault()}_handleCustomSlotDragOver(e,t,a,i){this._editMode&&this._customCardDrag&&this._customCardDrag.areaId===t&&(e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._customCardDragOver={areaId:t,placement:a,index:i})}_handleCustomCardDrop(e,t,a,i){this._customCardDrag&&this._customCardDrag.areaId===t&&(e.preventDefault(),e.stopPropagation(),this._moveAreaCustomCard(t,this._customCardDrag.cardId,a,i),this._clearCustomCardDragState())}_moveAreaCustomCard(e,t,a,i){const o=this._getPersistableAreaCustomCards(e),r=o.findIndex(e=>e.id===t);if(r<0)return;const n=o[r];if(!n)return;const s=n.placement||"bottom",c=o.slice(0,r).filter(e=>e.placement===s).length,[d]=o.splice(r,1);if(!d)return;let l=i;s===a&&c<i&&(l=Math.max(0,i-1)),d.placement=a;const p=this._insertIndexForPlacement(o,a,l);o.splice(p,0,d),this._saveAreaCustomCards(e,o)}_getDashboardUrlPath(){const e=window.location.pathname.split("/")[1];if(e&&"lovelace"!==e)return e}async _saveAreaCustomCards(e,t){const a=this._normalizeAreaCustomCardsForSave(t);await this._saveAreaOptionsPatch(e,{custom_cards:a})}async _saveAreaOptionsPatch(e,t){if(!this._canManageDashboard())return;const a=this._editMode&&"area"===this._selectedView&&this._selectedArea===e;a&&this._rememberAreaEditMode(e);const i=this.config.areas_options||{};this.config={...this.config,areas_options:{...i,[e]:{...i[e]||{},...t}}},a&&(this._editMode=!0),this.requestUpdate();try{const a=this._getDashboardUrlPath(),i=a?{url_path:a}:{},o=await this.hass.callWS({type:"lovelace/config",...i});if(o&&o.strategy){const a=o.strategy,r=a.areas_options||{},n={...o,strategy:{...a,areas_options:{...r,[e]:{...r[e]||{},...t}}}};await this.hass.callWS({type:"lovelace/config/save",...i,config:n}),console.log("✅ Area options saved for",e)}else console.warn("⚠️ No dashboard strategy found; area options were not saved",o)}catch(e){console.error("❌ Saving area options failed:",e),alert(this._t("layout.save_card_failed",{error:String(e)}))}}_renderMobileEntitiesSection(e,t){const a=this._sortAreaEntities(e.area_id,t);if("ungrouped"===this.config?.areas_options?.[e.area_id]?.entity_layout)return this._renderUngroupedAreaEntities(e,a);const i=this._sortAreaEntityGroups(e.area_id,this._mobileEntityGroups(e.area_id,a));if(!i.length)return c;const o=this._isMobile&&!this._editMode&&!this._renderAllMobileAreaEntities&&i.length>4?i.slice(0,4):i;return s`
      <section class="mobile-entities-section layout-${this._mobileEntityLayout}">
        ${o.map(t=>{const a=this._mobileControllableEntities(t.entities).length>0,o=`${e.area_id}:${t.key}`,r=!this._editMode&&Boolean(this._collapsedAreaGroups[o]),n=t.entities[0]?.entity_id.split(".")[0]||t.key,l=t.entities[0]?this.hass.states[t.entities[0].entity_id]?.attributes?.device_class:void 0,p="cover_openings"===t.key?h("binary_sensor","opening"):"cover_shading"===t.key?h("cover"):"motion"===t.key?h("binary_sensor","motion"):"safety"===t.key?h("binary_sensor","smoke"):h(n,l),g=this._isMobile&&!this._editMode&&!this._renderAllMobileAreaEntities&&t.entities.length>12?t.entities.slice(0,12):t.entities,b=g.map(e=>e.entity_id);return s`
            <div
              class=${d({"mobile-domain-group":!0,"group-editing":this._editMode&&this._canManageDashboard(),"group-dragging":this._generatedGroupDrag?.areaId===e.area_id&&this._generatedGroupDrag.groupKey===t.key,"group-drag-over":this._generatedGroupDragOver?.areaId===e.area_id&&this._generatedGroupDragOver.groupKey===t.key,"is-collapsed":r})}
              @dragover=${a=>this._handleGeneratedGroupDragOver(a,e.area_id,t.key)}
              @drop=${a=>this._handleGeneratedGroupDrop(a,e.area_id,t.key,i.map(e=>e.key))}
            >
              <div
                class="mobile-domain-header expandable-header"
                role="button"
                tabindex="0"
                aria-expanded=${r?"false":"true"}
                @click=${()=>{this._editMode||(this._collapsedAreaGroups={...this._collapsedAreaGroups,[o]:!r})}}
                @keydown=${e=>{this._editMode||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._collapsedAreaGroups={...this._collapsedAreaGroups,[o]:!r})}}
              >
                <div
                  class="mobile-domain-title"
                  style=${`--domain-color: ${p};`}
                >
                  ${this._editMode&&this._canManageDashboard()?s`
                    <button
                      class="mobile-domain-leading-drag-handle"
                      type="button"
                      draggable="true"
                      title=${this._t("layout.drag_group")}
                      aria-label=${this._t("layout.drag_group")}
                      @click=${e=>e.stopPropagation()}
                      @dragstart=${a=>this._handleGeneratedGroupDragStart(a,e.area_id,t.key)}
                      @dragend=${this._clearGeneratedGroupDragState}
                    >
                      <ha-icon icon="mdi:drag"></ha-icon>
                    </button>
                  `:s`
                    <ha-icon
                      class="mobile-domain-leading-chevron"
                      icon=${r?"mdi:chevron-down":"mdi:chevron-up"}
                      aria-hidden="true"
                    ></ha-icon>
                  `}
                  <span class="room-domain-icon" aria-hidden="true">
                    <ha-icon icon=${"todo"===t.key?"mdi:clipboard-list-outline":this._mobileGroupIcon(t.key)}></ha-icon>
                  </span>
                  <span class="mobile-domain-title-copy">
                    <span class="mobile-domain-title-label">${t.name}</span>
                    ${t.entities.length>0?s`
                      <span class="mobile-domain-count">(${t.entities.length})</span>
                    `:c}
                  </span>
                </div>

                <div
                  class="mobile-domain-header-actions"
                  @click=${e=>e.stopPropagation()}
                  @keydown=${e=>e.stopPropagation()}
                >
                  ${a?this._renderMobileDomainMaster(t):c}
                </div>
	              </div>
	              <div class="mobile-entity-rail" style=${r?"display:none":""}>
	                ${this._renderDomainCustomCardSlot(e.area_id,t.key,0,g.length)}
	                ${m(g,e=>e.entity_id,(a,i)=>s`
                      ${this._renderEditableGeneratedCard(e,a,t.key,i,b)}
                      ${this._renderDomainCustomCardSlot(e.area_id,t.key,i+1,g.length)}
                    `)}
	              </div>
	            </div>
	          `})}
      </section>
    `}_renderUngroupedAreaEntities(e,t){const a=this._getAreaCustomCards(e.area_id).some(e=>e.placement.startsWith("ungrouped:")||e.placement.startsWith("domain:")||e.placement.startsWith("after:"));if(!t.length&&!a&&!this._editMode)return c;const i="grid"===this._mobileEntityLayout,o=new Map;t.forEach(e=>{const t=this._mobileEntityTypeKey(e.entity_id)||"other";o.set(t,(o.get(t)||0)+1)});const r=new Map;return s`
      <section class="mobile-entities-section area-ungrouped-entities layout-${this._mobileEntityLayout}">
        <div class="mobile-domain-group area-ungrouped-group">
          <div class="mobile-domain-header">
            <div class="mobile-domain-title">
              <button
                class="mobile-layout-toggle ${i?"active":""}"
                type="button"
                title=${i?this._t("layout.swipe_cards"):this._t("layout.show_all_cards")}
                aria-label=${i?this._t("layout.switch_swipe_cards"):this._t("layout.show_all_cards")}
                @click=${this._toggleMobileEntityLayout}
              >
                <ha-icon icon=${i?"mdi:view-carousel-outline":"mdi:view-grid-outline"}></ha-icon>
              </button>
              <span class="mobile-domain-title-copy">
                <span class="mobile-domain-title-label">${this._t("layout.entities")}</span>
                <span class="mobile-domain-count">(${this._tp("common.entity",t.length)})</span>
              </span>
            </div>
          </div>
          <div class="mobile-entity-rail">
            ${this._renderUngroupedCustomCardSlot(e.area_id,0,t.length)}
            ${t.map((a,i)=>{const n=this._mobileEntityTypeKey(a.entity_id)||"other",d=r.get(n)||0,l=o.get(n)||0;return r.set(n,d+1),s`
                ${0===d?this._renderDomainCustomCardSlot(e.area_id,n,0,l):c}
                ${this._renderEditableGeneratedCard(e,a,ot,i,t.map(e=>e.entity_id))}
                ${this._renderDomainCustomCardSlot(e.area_id,n,d+1,l)}
                ${this._renderUngroupedCustomCardSlot(e.area_id,i+1,t.length)}
              `})}
          </div>
        </div>
      </section>
    `}_renderMobileDomainMaster(e){const t=this._mobileControllableEntities(e.entities);if(!t.length)return c;const a=t[0].entity_id.split(".")[0]||e.key,i=t.filter(e=>{const t=this._getEffectiveEntityState(this.hass.states[e.entity_id]);return this._isEntityActiveForUi(t,a)}).length,o=i>0;if("cover"===a)return this._renderMobileDomainActions(a,t,[{turnOn:!0,label:this._t("action.open_all"),icon:"mdi:arrow-up",active:o},{turnOn:!1,label:this._t("action.close_all"),icon:"mdi:arrow-down",active:!o}]);if("lock"===a)return this._renderMobileDomainActions(a,t,[{turnOn:!1,label:this._t("action.lock_all"),icon:"mdi:lock-outline",active:!o},{turnOn:!0,label:this._t("action.unlock_all"),icon:"mdi:lock-open-variant-outline",active:o}]);const r=this._mobileDomainMasterLabel(a,o,i,t.length),n=this._mobileDomainMasterIcon(a,o);return s`
      <button
        class="mobile-domain-master domain-${a} ${o?"active":""}"
        type="button"
        title=${r}
        aria-label=${r}
        aria-pressed=${o?"true":"false"}
        @click=${e=>{e.stopPropagation(),this._requestMobileGroupState(t,!o,a)}}
      >
        <ha-icon icon=${n}></ha-icon>
        <span class="mobile-domain-master-count">${i}/${t.length}</span>
        <span class="mobile-domain-master-track" aria-hidden="true"></span>
      </button>
    `}_renderMobileDomainActions(e,t,a){return s`
      <div class="mobile-domain-master-actions domain-${e}" role="group">
        ${a.map(a=>s`
          <button
            class="mobile-domain-master-action ${a.active?"active":""}"
            type="button"
            title=${a.label}
            aria-label=${a.label}
            @click=${i=>{i.stopPropagation(),this._requestMobileGroupState(t,a.turnOn,e)}}
          >
            <ha-icon icon=${a.icon}></ha-icon>
          </button>
        `)}
      </div>
    `}_mobileDomainMasterLabel(e,t,a,i){return"light"===e?this._t(t?"action.lights_off_summary":"action.lights_on_summary",{active:a,total:i}):"cover"===e?this._t(t?"action.covers_close_summary":"action.covers_open_summary",{active:a,total:i}):"fan"===e?this._t(t?"action.fans_off_summary":"action.fans_on_summary",{active:a,total:i}):"lock"===e?this._t(t?"action.lock":"action.unlock"):this._t(t?"action.switches_off_summary":"action.switches_on_summary",{active:a,total:i})}_mobileDomainMasterIcon(e,t){return"light"===e?t?"mdi:lightbulb":"mdi:lightbulb-outline":"switch"===e?t?"mdi:power-plug":"mdi:power-plug-off-outline":"fan"===e?t?"mdi:fan":"mdi:fan-off":"cover"===e?t?"mdi:window-shutter-open":"mdi:window-shutter":"lock"===e?t?"mdi:lock-open-variant-outline":"mdi:lock-outline":t?"mdi:toggle-switch":"mdi:toggle-switch-off-outline"}_customCardDomainGroupKeys(e){const t=[];return this._getAreaCustomCards(e).forEach(e=>{let a;if(e.placement.startsWith("domain:")){const t=/^domain:(.+):\d+$/.exec(e.placement);a=t?.[1]}else e.placement.startsWith("after:")&&(a=e.placement.slice(6));"cover"===a&&(a="cover_openings"),a&&!t.includes(a)&&t.push(a)}),t}_mobileEntityGroups(e,t){const a=t.reduce((e,t)=>{const a=this._mobileEntityTypeKey(t.entity_id);return a?(e[a]||(e[a]=[]),e[a].push(t),e):e},{});this._customCardDomainGroupKeys(e).forEach(e=>{a[e]||(a[e]=[])});const i=["light","switch","input_boolean","cover_openings","cover_shading","climate","todo","scene","event","motion","safety","binary_sensor","sensor","media_player","fan","lock","camera","vacuum"];return Object.entries(a).sort(([e],[t])=>{const a=i.indexOf(e),o=i.indexOf(t);return-1!==a||-1!==o?(-1===a?999:a)-(-1===o?999:o):this._mobileGroupName(e).localeCompare(this._mobileGroupName(t))}).map(([e,t])=>({key:e,name:this._mobileGroupName(e),icon:this._mobileGroupIcon(e),entities:t}))}_sortAreaEntityGroups(e,t){const a=this.config?.areas_options?.[e]?.group_order||[];if(!a.length)return t;const i=e=>{const t=a.indexOf(e);if(t>=0)return t;if(("cover_openings"===e||"cover_shading"===e)&&a.includes("cover"))return a.indexOf("cover");if(v.includes(e)){const t=a.indexOf(w(e));if(t>=0)return t}};return t.map((e,t)=>({group:e,fallbackIndex:t})).sort((e,t)=>{const a=i(e.group.key),o=i(t.group.key);return void 0!==a&&void 0!==o?a!==o?a-o:e.fallbackIndex-t.fallbackIndex:void 0!==a?-1:void 0!==o?1:e.fallbackIndex-t.fallbackIndex}).map(({group:e})=>e)}_sortAreaEntities(e,t){const a=this.config?.areas_options?.[e],i="ungrouped"===a?.entity_layout,o=new Map((a?.entity_order||[]).map((e,t)=>[e,t]));return[...t].sort((e,t)=>{if(i){const a=o.get(e.entity_id),i=o.get(t.entity_id);if(void 0!==a&&void 0!==i)return a-i;if(void 0!==a)return-1;if(void 0!==i)return 1}else{const i=this._mobileEntityTypeKey(e.entity_id);if(i===this._mobileEntityTypeKey(t.entity_id)&&i){const o=a?.groups_options?.[i],r="cover_openings"===i||"cover_shading"===i?a?.groups_options?.cover:void 0,n=v.includes(i)?a?.groups_options?.[w(i)]:void 0,s=o?.order||r?.order||n?.order||[],c=s.indexOf(e.entity_id),d=s.indexOf(t.entity_id);if(-1!==c&&-1!==d)return c-d;if(-1!==c)return-1;if(-1!==d)return 1}}const r=this.hass.states[e.entity_id]?.attributes?.friendly_name||e.entity_id,n=this.hass.states[t.entity_id]?.attributes?.friendly_name||t.entity_id,s=e.device_id||this.hass.entities?.[e.entity_id]?.device_id||"",c=t.device_id||this.hass.entities?.[t.entity_id]?.device_id||"";if(s!==c){const e=(e,t)=>e?this.config?.devices?.find(t=>t.device_id===e)?.name||e:t,t=e(s,r).localeCompare(e(c,n),H(this.hass));if(0!==t)return t}return r.localeCompare(n,H(this.hass))})}_renderEditableGeneratedCard(e,t,a,i,o){if(!this._editMode||!this._canManageDashboard())return this._renderMobileEntityCard(e,t);const r=this._isAreaEntityHidden(e.area_id,t.entity_id),n=this._generatedCardDrag?.areaId===e.area_id&&this._generatedCardDrag.entityId===t.entity_id,c=this._generatedCardDragOver?.areaId===e.area_id&&this._generatedCardDragOver.entityId===t.entity_id&&this._generatedCardDragOver.groupKey===a;return s`
      <div
        class=${d({"dd-generated-card-wrap":!0,editing:!0,"is-hidden":r,dragging:n,"drag-over":c})}
        draggable="true"
        @dragstart=${i=>this._handleGeneratedCardDragStart(i,e.area_id,t.entity_id,a)}
        @dragover=${i=>this._handleGeneratedCardDragOver(i,e.area_id,t.entity_id,a)}
        @drop=${t=>this._handleGeneratedCardDrop(t,e.area_id,a,i,o)}
        @dragend=${this._clearGeneratedCardDragState}
        @click=${e=>e.stopPropagation()}
      >
        ${this._renderMobileEntityCard(e,t,{areaId:e.area_id,hidden:r})}
      </div>
    `}_handleGeneratedGroupDragStart(e,t,a){this._editMode&&this._canManageDashboard()?(e.stopPropagation(),e.currentTarget?.blur(),this._clearCustomCardDragState(),this._clearGeneratedCardDragState(),this._generatedGroupDrag={areaId:t,groupKey:a},this._generatedGroupDragOver=null,e.dataTransfer?.setData("text/plain",a),e.dataTransfer&&(e.dataTransfer.effectAllowed="move")):e.preventDefault()}_handleGeneratedGroupDragOver(e,t,a){const i=this._generatedGroupDrag;this._editMode&&i&&i.areaId===t&&(e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._generatedGroupDragOver={areaId:t,groupKey:a})}_handleGeneratedGroupDrop(e,t,a,i){const o=this._generatedGroupDrag;if(!o||o.areaId!==t)return;e.preventDefault(),e.stopPropagation();const r=i.indexOf(o.groupKey),n=i.indexOf(a);if(r<0||n<0||r===n)return void this._clearGeneratedGroupDragState();const s=[...i],[c]=s.splice(r,1);c&&s.splice(n,0,c);const d=this.shadowRoot?.querySelector(".content-area"),l=d?.scrollTop??0,p=window.scrollX,m=window.scrollY,h=this.shadowRoot?.activeElement;h?.blur();const g=()=>{d&&Math.abs(d.scrollTop-l)>1&&(d.scrollTop=l),(Math.abs(window.scrollY-m)>1||Math.abs(window.scrollX-p)>1)&&window.scrollTo(p,m)},b=()=>{this.updateComplete.then(()=>{requestAnimationFrame(()=>{g(),requestAnimationFrame(g)})})};try{window.sessionStorage.setItem("dd-next-room-dnd-scroll",JSON.stringify({areaId:t,pathname:window.location.pathname,contentScrollTop:l,windowScrollX:p,windowScrollY:m,expiresAt:Date.now()+1e4}))}catch{}const x=this._saveAreaOptionsPatch(t,{group_order:s});this._clearGeneratedGroupDragState(),b(),x.finally(()=>{b(),window.setTimeout(g,80),window.setTimeout(g,220)})}_handleGeneratedCardDragStart(e,t,a,i){this._editMode&&this._canManageDashboard()?(this._clearCustomCardDragState(),this._generatedCardDrag={areaId:t,entityId:a,groupKey:i},this._generatedCardDragOver=null,e.dataTransfer?.setData("text/plain",a),e.dataTransfer&&(e.dataTransfer.effectAllowed="move")):e.preventDefault()}_handleGeneratedCardDragOver(e,t,a,i){const o=this._generatedCardDrag;this._editMode&&o&&o.areaId===t&&o.groupKey===i&&(e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._generatedCardDragOver={areaId:t,entityId:a,groupKey:i})}_handleGeneratedCardDrop(e,t,a,i,o){const r=this._generatedCardDrag;if(!r||r.areaId!==t||r.groupKey!==a)return;e.preventDefault(),e.stopPropagation();const n=o.indexOf(r.entityId);if(n<0)return void this._clearGeneratedCardDragState();const s=[...o],[c]=s.splice(n,1);if(!c)return void this._clearGeneratedCardDragState();if(s.splice(Math.max(0,Math.min(i,s.length)),0,c),a===ot)return this._saveAreaOptionsPatch(t,{entity_order:s}),void this._clearGeneratedCardDragState();const d=new Set(s.map(e=>this._areaStrategyGroupKey(e)||a)),l=1!==d.size,p=l?a:Array.from(d)[0]||a,m=this.config?.areas_options?.[t],h=m?.groups_options||{},g=h[p]||("cover_openings"===p||"cover_shading"===p?h.cover:void 0)||{},b=this._getEditableAreaEntities(t).filter(e=>l?this._mobileEntityTypeKey(e.entity_id)===a:(this._areaStrategyGroupKey(e.entity_id)||a)===p).map(e=>e.entity_id),x=g.order||[],u=[...x.filter((e,t)=>b.includes(e)&&x.indexOf(e)===t),...b.filter(e=>!x.includes(e))],f=new Set(s);let v=0;const w=u.map(e=>f.has(e)&&s[v++]||e);this._saveAreaOptionsPatch(t,{groups_options:{...h,[p]:{...g,order:w}}}),this._clearGeneratedCardDragState()}_isAreaEntityHidden(e,t){const a=this.config?.areas_options?.[e]?.groups_options||{};return Object.values(a).some(e=>e.hidden?.includes(t))}_toggleGeneratedCardVisibility(e,t,a){if(e.preventDefault(),e.stopPropagation(),!this._canManageDashboard())return;const i=this.config?.areas_options?.[t],o=i?.groups_options||{},r=this._isAreaEntityHidden(t,a),n=Object.fromEntries(Object.entries(o).map(([e,t])=>[e,{...t,hidden:(t.hidden||[]).filter(e=>e!==a)}]));if(!r){const e=this._areaStrategyGroupKey(a)||this._mobileEntityTypeKey(a)||"others",t=n[e]||{};n[e]={...t,hidden:[...t.hidden||[],a]}}this._saveAreaOptionsPatch(t,{groups_options:n})}_areaStrategyGroupKey(e){return y(e,this.hass)||this._mobileEntityTypeKey(e)}_mobileEntityTypeKey(e){const t=y(e,this.hass);if(t)return t;return e.split(".")[0]||void 0}_mobileGroupName(e){const t=String(this.hass?.language||this.hass?.locale?.language||"").toLowerCase().startsWith("de");return"cover_openings"===e?t?"Fenster & Türen":"Windows & doors":"cover_shading"===e?t?"Beschattung & Tore":"Shading & gates":"motion"===e?t?"Bewegung & Präsenz":"Motion & presence":"safety"===e?t?"Sicherheit & Warnmelder":"Safety & alarms":f(this.hass,e)}_mobileGroupIcon(e){return"motion"===e?"mdi:motion-sensor":"safety"===e?"mdi:shield-alert-outline":"cover_openings"===e?"mdi:door-open":"cover_shading"===e?"mdi:blinds-horizontal":x(e)}_areaReplacementCardConfig(e){const t=_({hass:this.hass,config:this.config,entity:e,surface:"area_cards"});return t&&!1!==t.enabled?k({hass:this.hass,config:this.config,entity:e,surface:"area_cards"}):null}_renderAreaReplacementCard(e,t){return s`
      <div class="mobile-entity-replacement-card" data-entity=${e}>
        <dwains-dashboard-next-card-host
          framed
          .hass=${this.hass}
          .config=${t}
        ></dwains-dashboard-next-card-host>
      </div>
    `}_renderMobileEntityCard(e,t,a){const i=this.hass.states[t.entity_id];if(!i)return c;const o=this._getEffectiveEntityState(i),r=t.entity_id.split(".")[0]||"unknown";if("todo"===r)return this._renderTodoListCard(t);const n=o.attributes?.device_class,d=this._areaReplacementCardConfig(t.entity_id);if(d)return this._renderAreaReplacementCard(t.entity_id,d);const l=["select","input_select"].includes(r)?x(r):this.hass.entities?.[t.entity_id]?.icon||o.attributes?.icon||g(r,n)||x(r),p=o.attributes?.friendly_name||this.hass.entities?.[t.entity_id]?.name||t.entity_id,m=!0===this.config?.settings?.hide_area_name_in_entity_names?J(p,e.name):p,h=this._isEntityActiveForUi(o,r),b=this._mobileEntityActionKind(r),u=["unavailable","unknown"].includes(String(o.state).toLowerCase()),f="scene"===r||"event"===r,v=this._mobileEntityHasInlineSelect(r,o),w=this._mobileEntityStatusText(o,r),y=["mobile-entity-card",`mobile-entity-${r}`,n?`device-${n}`:"",`action-${b}`,h?"is-active":"is-off",v?"has-inline-select":"",u&&!f?"is-unavailable":""].join(" ");return s`
      <article
        class=${y}
        style=${`--entity-color: ${this._mobileEntityColor(r,n)};`}
        role="button"
        tabindex="0"
        aria-label=${m}
        @click=${()=>this._showMoreInfo(t.entity_id)}
        @keydown=${e=>this._handleMobileEntityKeydown(e,t.entity_id)}
      >
        <div class="mobile-entity-main ${a?"editing-inline":""}">
          ${a?s`
            <button
              class="dd-generated-card-leading-drag-handle"
              type="button"
              title=${this._t("layout.drag_card")}
              aria-label=${this._t("layout.drag_card")}
              @click=${e=>e.stopPropagation()}
            >
              <ha-icon icon="mdi:drag"></ha-icon>
            </button>
          `:c}
          <div class="mobile-entity-icon"><ha-icon class=${v?"mobile-entity-leading-select-icon":""} icon=${l}></ha-icon></div>
          <div class="mobile-entity-content">
            <div class="mobile-entity-name" title=${m}>${m}</div>
            ${w?s`
              <div class="mobile-entity-state ${h?"active":""}">${w}</div>
            `:c}
          </div>
          <div class="mobile-entity-right">
            ${a?s`
              <button
                class="dd-generated-card-visibility"
                type="button"
                title=${this._t(a.hidden?"common.show":"common.hide")}
                aria-label=${this._t(a.hidden?"common.show":"common.hide")}
                aria-pressed=${a.hidden?"true":"false"}
                @click=${e=>this._toggleGeneratedCardVisibility(e,a.areaId,t.entity_id)}
              >
                <ha-icon icon=${a.hidden?"mdi:eye":"mdi:eye-off-outline"}></ha-icon>
              </button>
            `:"more"===b?c:this._renderMobileEntityActions(o,r,h)}
          </div>
        </div>


        ${v?this._renderMobileEntitySelect(o,r):c}
      </article>
    `}_renderTodoListCard(e){return s`
      <div class="mobile-todo-list-card" data-entity=${e.entity_id}>
        <dwains-dashboard-next-card-host
          eager
          .hass=${this.hass}
          .config=${{type:"todo-list",entity:e.entity_id}}
        ></dwains-dashboard-next-card-host>
      </div>
    `}_handleMobileEntityKeydown(e,t){const a=e.target;a?.closest?.("button, select, input, textarea, a")||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._showMoreInfo(t))}_mobileEntityHasInlineSelect(e,t){return["select","input_select"].includes(e)&&Array.isArray(t?.attributes?.options)}_renderMobileEntitySelect(e,t){const a=this._mobileEntitySelectOptions(e),i=String(e?.state||""),o=["unavailable","unknown"].includes(i.toLowerCase())||0===a.length;return s`
      <label
        class="mobile-entity-select"
        @click=${e=>e.stopPropagation()}
        @keydown=${e=>e.stopPropagation()}
      >
        <select
          aria-label=${this._t("common.select_option")}
          ?disabled=${o}
          @change=${a=>this._handleMobileSelectChange(a,e,t)}
        >
          ${a.map(e=>s`
            <option value=${e} ?selected=${e===i}>${e}</option>
          `)}
        </select>
        <ha-icon class="mobile-select-chevron" icon="mdi:chevron-down"></ha-icon>
      </label>
    `}_mobileEntitySelectOptions(e){const t=String(e?.state||""),a=Array.isArray(e?.attributes?.options)?e.attributes.options.map(e=>String(e)):[];return!t||["unknown","unavailable"].includes(t.toLowerCase())||a.includes(t)?a:[t,...a]}_renderMobileEntityActions(e,t,a){const i=this._mobileEntityActionKind(t),o=["unavailable","unknown"].includes(String(e?.state||"").toLowerCase());if("toggle"===i)return s`
        <button
          class="mobile-entity-action mobile-entity-toggle"
          type="button"
          title=${a?this._t("action.turn_off"):this._t("action.turn_on")}
          aria-label=${a?this._t("action.turn_off"):this._t("action.turn_on")}
          ?disabled=${o}
          @click=${a=>this._handleMobileEntityToggle(a,e,t)}
        ></button>
      `;if("cover"===i)return this._renderMobileCoverActions(e);if("lock"===i){const a=this._isEntityActiveForUi(e,t);return s`
        <button
          class="mobile-entity-action mobile-lock-action ${a?"is-unlocked":""}"
          type="button"
          title=${a?this._t("action.lock"):this._t("action.unlock")}
          aria-label=${a?this._t("action.lock"):this._t("action.unlock")}
          ?disabled=${o}
          @click=${t=>this._handleMobileLockAction(t,e)}
        >
          <ha-icon icon=${a?"mdi:lock-open-variant-outline":"mdi:lock-outline"}></ha-icon>
        </button>
      `}return"scene"===i?s`
        <button
          class="mobile-entity-action mobile-scene-action"
          type="button"
          title=${this._t("action.activate")}
          aria-label=${this._t("action.activate")}
          @click=${t=>this._handleMobileSceneAction(t,e)}
        >
          <ha-icon icon="mdi:play"></ha-icon>
        </button>
      `:s`
      <button
        class="mobile-entity-action mobile-entity-more"
        type="button"
        title=${this._t("action.more_info")}
        aria-label=${this._t("action.more_info")}
        @click=${t=>{t.stopPropagation(),this._showMoreInfo(e?.entity_id)}}
      >
        <ha-icon icon="mdi:chevron-right"></ha-icon>
      </button>
    `}_renderMobileCoverActions(e){const t=String(e?.state||"").toLowerCase(),a=["unavailable","unknown"].includes(t),i=this._coverSupportsFeature(e,1),o=this._coverSupportsFeature(e,2),r=this._coverSupportsFeature(e,8);return s`
      <div class="mobile-cover-actions" @click=${e=>e.stopPropagation()}>
        ${i?s`
          <button
            class="mobile-entity-action mobile-cover-action ${"opening"===t?"active":""}"
            type="button"
            title=${this._t("action.open")}
            aria-label=${this._t("action.open")}
            ?disabled=${a}
            @click=${t=>this._handleMobileCoverAction(t,e,"open")}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
        `:c}
        ${r?s`
          <button
            class="mobile-entity-action mobile-cover-action ${"opening"===t||"closing"===t?"active":""}"
            type="button"
            title=${this._t("action.stop")}
            aria-label=${this._t("action.stop")}
            ?disabled=${a}
            @click=${t=>this._handleMobileCoverAction(t,e,"stop")}
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>
        `:c}
        ${o?s`
          <button
            class="mobile-entity-action mobile-cover-action ${"closing"===t?"active":""}"
            type="button"
            title=${this._t("action.close")}
            aria-label=${this._t("action.close")}
            ?disabled=${a}
            @click=${t=>this._handleMobileCoverAction(t,e,"close")}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
        `:c}
      </div>
    `}async _handleMobileEntityToggle(e,t,a){e.stopPropagation();const i=t?.entity_id;if(i){try{if(["light","switch","fan","input_boolean"].includes(a)){const e=!this._isEntityActiveForUi(t,a);return this._setOptimisticEntityState(i,e?"on":"off"),void await this.hass.callService(a,e?"turn_on":"turn_off",{entity_id:i})}}catch(e){return this._clearOptimisticEntityStates([i]),console.warn(`Failed to toggle mobile entity ${i}:`,e),void this._showToast(this._t("entity.update_failed"))}this._showMoreInfo(i)}}async _handleMobileSelectChange(e,t,a){e.stopPropagation();const i=e.currentTarget,o=t?.entity_id,r=i?.value;if(o&&void 0!==r){this._setOptimisticEntityState(o,r);try{await this.hass.callService("input_select"===a?"input_select":"select","select_option",{entity_id:o,option:r})}catch(e){this._clearOptimisticEntityStates([o]),console.warn(`Failed to select option for ${o}:`,e),this._showToast(this._t("entity.selector_failed"))}}}async _handleMobileCoverAction(e,t,a){e.stopPropagation();const i=t?.entity_id;if(!i)return;const o="open"===a?"open_cover":"close"===a?"close_cover":"stop_cover",r="open"===a?"open":"close"===a?"closed":void 0;r&&this._setOptimisticEntityState(i,r);try{await this.hass.callService("cover",o,{entity_id:i})}catch(e){this._clearOptimisticEntityStates([i]),console.warn(`Failed to ${a} cover ${i}:`,e),this._showToast(this._t("entity.cover_failed"))}}async _handleMobileLockAction(e,t){e.stopPropagation();const a=t?.entity_id;if(a)try{const e=this._isEntityActiveForUi(t,"lock");this._setOptimisticEntityState(a,e?"locked":"unlocked"),await this.hass.callService("lock",e?"lock":"unlock",{entity_id:a})}catch(e){this._clearOptimisticEntityStates([a]),console.warn(`Failed to toggle lock ${a}:`,e),this._showToast(this._t("entity.lock_failed"))}}async _handleMobileSceneAction(e,t){e.stopPropagation();const a=t?.entity_id;if(a)try{await this.hass.callService("scene","turn_on",{entity_id:a}),this._showToast(this._t("action.scene_activated"))}catch(e){console.warn(`Failed to activate scene ${a}:`,e),this._showMoreInfo(a)}}_mobileControllableEntities(e){return e.filter(e=>{const t=e.entity_id.split(".")[0]||"";return Boolean(this.hass.states[e.entity_id])&&this._mobileEntitySupportsToggle(t)})}_masterActionLabel(e,t){return"cover"===e?this._t(t?"action.open_all":"action.close_all"):"lock"===e?this._t(t?"action.unlock_all":"action.lock_all"):this._t(t?"action.turn_on_all":"action.turn_off_all")}_masterActionIsDestructive(e,t){return"lock"===e?t:!t}_areaDisplayName(e){return this.config?.areas?.find(t=>t.area_id===e)?.name||e}async _confirmMasterActionIfNeeded(e,t,a,i){const o=te(e);if(!o||!ee(this.config?.settings,o))return!0;const r=this._masterActionLabel(o,t);return this._showConfirmation(r,this._t("action.confirm_master_action",{count:a,area:this._areaDisplayName(i)}),{confirmLabel:r,destructive:this._masterActionIsDestructive(o,t)})}async _requestMobileGroupState(e,t,a){await this._confirmMasterActionIfNeeded(a,t,e.length,this._selectedArea||"")&&await this._setMobileGroupState(e,t,a)}async _setMobileGroupState(e,t,a){const i=this._mobileControllableEntities(e).reduce((e,t)=>{const a=t.entity_id.split(".")[0]||"";return e[a]||(e[a]=[]),e[a].push(t.entity_id),e},{}),o=[];try{await Promise.all(Object.entries(i).map(([e,a])=>a.length?["light","switch","fan","input_boolean"].includes(e)?(o.push(...a),this._setOptimisticEntityStates(a,t?"on":"off"),this.hass.callService(e,t?"turn_on":"turn_off",{entity_id:a})):"cover"===e?(o.push(...a),this._setOptimisticEntityStates(a,t?"open":"closed"),this.hass.callService("cover",t?"open_cover":"close_cover",{entity_id:a})):"lock"===e?(o.push(...a),this._setOptimisticEntityStates(a,t?"unlocked":"locked"),this.hass.callService("lock",t?"unlock":"lock",{entity_id:a})):Promise.resolve():Promise.resolve()));const e=Object.values(i).reduce((e,t)=>e+t.length,0),r=te(a);e&&r&&this._showToast(this._masterActionToast(r,t))}catch(e){this._clearOptimisticEntityStates(o),console.warn("Failed to run mobile group action:",e),this._showToast(this._t("entity.group_failed"))}}_mobileEntitySupportsToggle(e){return["light","switch","fan","input_boolean","cover","lock"].includes(e)}_masterActionToast(e,t){return"light"===e?this._t(t?"action.all_lights_on":"action.all_lights_off"):"switch"===e?this._t(t?"action.all_switches_on":"action.all_switches_off"):"fan"===e?this._t(t?"action.all_fans_on":"action.all_fans_off"):this._masterActionLabel(e,t)}_mobileEntityActionKind(e){return["light","switch","fan","input_boolean"].includes(e)?"toggle":"cover"===e?"cover":"lock"===e?"lock":"scene"===e?"scene":"more"}_coverSupportsFeature(e,t){const a=Number(e?.attributes?.supported_features);return!Number.isFinite(a)||a<=0?1===t||2===t:0!==(a&t)}_mobileEntityStatusText(e,t){if(!e)return"";const a=this._formatFavoriteState(e);if("scene"===t)return this._sceneLastActivatedText(e);if("event"===t)return this._eventLastTriggeredText(e);if("light"===t){const t=String(e.state||"").toLowerCase();if("on"===t||"off"===t){const a="on"===t?"An":"Aus",i=e.attributes?.brightness;return"number"==typeof i&&Number.isFinite(i)?`${a} · ${D(Math.round(i/255*100),"%")}`:a}}if("cover"===t&&"number"==typeof e.attributes?.current_position)return`${a} · ${D(e.attributes.current_position,"%")}`;if("climate"===t){const t=e.attributes?.current_temperature,a=e.attributes?.temperature,i=this.hass?.config?.unit_system?.temperature||"°C";if(void 0!==t&&void 0!==a)return`${D(t,i)} · ${this._t("entity.climate_set",{value:D(a,i)})}`;if(void 0!==t)return D(t,i)}return"media_player"===t&&e.attributes?.media_title?`${a} · ${e.attributes.media_title}`:a}_sceneLastActivatedText(e){const t=String(e?.state||"").toLowerCase(),a=t&&!["unknown","unavailable"].includes(t)?e.state:e?.last_changed||e?.last_updated,i=Date.parse(a);return Number.isFinite(i)?this._formatRelativeTime(i):this._t("entity.not_activated")}_eventLastTriggeredText(e){const t=String(e?.state||"").toLowerCase();if("unavailable"===t)return this._t("common.unavailable");const a=Date.parse(e?.last_changed||e?.last_updated||"");return Number.isFinite(a)?t&&"unknown"!==t?`${this._formatFavoriteState(e)} · ${this._formatRelativeTime(a)}`:this._formatRelativeTime(a):this._t("entity.no_events")}_formatRelativeTime(e){const t=Math.round((e-Date.now())/1e3),a=Math.abs(t),[i,o]=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60],["second",1]].find(([,e])=>a>=e)||["second",1],r=Math.round(t/o);try{const e=this.hass?.locale?.language||navigator.language||void 0;return new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(r,i)}catch{if(a<60)return"just now";const e=Math.abs(r);return`${e} ${i}${1===e?"":"s"} ${r<0?"ago":"from now"}`}}_isEntityActiveForUi(e,t){if(!e||["unavailable","unknown"].includes(String(e.state)))return!1;const a=String(e.state).toLowerCase();if("cover"===t)return["open","opening"].includes(a);if("lock"===t)return"unlocked"===a;if("climate"===t){const t=e.attributes?.hvac_action;return t&&"idle"!==t&&"off"!==t}return"media_player"===t?["playing","buffering"].includes(a):"vacuum"===t?["cleaning","returning"].includes(a):"alarm_control_panel"===t?a.startsWith("armed")||["arming","pending","triggered"].includes(a):"camera"!==t&&!["off","closed","locked","not_home","idle"].includes(a)}_mobileEntityColor(e,t){return"cover"===e?h("cover",t):"sensor"!==e||"temperature"!==t&&"humidity"!==t?"sensor"===e&&"power"===t?h("wattage"):h(e,t):h(t,t)}_housePowerStatisticsEntities(e,t){return e.filter(e=>["measurement","total","total_increasing"].includes(e.stateClass||"")).sort((e,t)=>t.watts-e.watts).slice(0,t).map(e=>({entity:e.entityId,name:e.name}))}_renderHousePowerStatisticsGraph(e,t){return e.length?s`
      <dwains-dashboard-next-card-host
        class="house-power-statistics-card"
        aria-label=${t}
        .hass=${this.hass}
        .config=${{type:"statistics-graph",entities:e,days_to_show:1,period:"5minute",stat_types:["mean"],chart_type:"line",hide_legend:!0,fit_y_data:!0,min_y_axis:0}}
      ></dwains-dashboard-next-card-host>
    `:c}_renderToast(){return c}_renderConfirmationDialog(){const e=this._confirmationDialog;return e?s`
      <div
        class="confirmation-dialog show"
        role="presentation"
        @click=${()=>this._resolveConfirmation(!1)}
      >
        <div
          class="confirmation-content"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="dd-confirmation-title"
          aria-describedby="dd-confirmation-message"
          tabindex="0"
          @click=${e=>e.stopPropagation()}
          @keydown=${this._handleConfirmationKeydown}
        >
          <div id="dd-confirmation-title" class="confirmation-title">${e.title}</div>
          <div id="dd-confirmation-message" class="confirmation-message">${e.message}</div>
          <div class="confirmation-actions">
            <button
              class="confirmation-button cancel"
              type="button"
              @click=${()=>this._resolveConfirmation(!1)}
            >
              ${this._t("common.cancel")}
            </button>
            <button
              class=${"confirmation-button confirm "+(e.destructive?"destructive":"")}
              type="button"
              @click=${()=>this._resolveConfirmation(!0)}
            >
              ${e.confirmLabel}
            </button>
          </div>
        </div>
      </div>
    `:c}_getWeatherEntity(){if(this.config?.settings?.weather_entity_id){const e=this.hass.states[this.config.settings.weather_entity_id];if(e&&!this.hass.entities?.[e.entity_id]?.hidden_by)return e}return Object.values(this.hass.states).find(e=>e.entity_id.startsWith("weather.")&&!this.hass.entities?.[e.entity_id]?.hidden_by)}_getAlarmEntity(){if(!1===this.config?.settings?.show_alarm)return;const e=this.config?.settings?.alarm_entity_id;if(!e)return;const t=this.hass.states[e];return t&&!this.hass.entities?.[t.entity_id]?.hidden_by?t:void 0}_getStatusDomains(){const e="status_domains",t=this._domainCountsCache.get(e);if(t&&t.length>0&&t[0].timestamp&&Date.now()-t[0].timestamp<this._CACHE_DURATION)return t;const a=ae(this.hass,this.config),i=ie(this.hass,this.config);i&&a.unshift({domain:"wattage",count:0,name:"Power usage",value:i,icon:"mdi:flash"}),a.sort((e,t)=>{const a=this._isUrgentStatus(e.domain,e.deviceClass);return a===this._isUrgentStatus(t.domain,t.deviceClass)?0:a?-1:1});const o=Date.now();return a.forEach(e=>e.timestamp=o),a.length>0&&this._domainCountsCache.set(e,a),a}_getAreaDeviceCount(e,t=[]){const a=new Set;return this.config?.devices?.forEach(t=>{t.area_id===e&&a.add(t.device_id)}),t.forEach(e=>{e.device_id&&a.add(e.device_id)}),a.size}_isEntityRegistryExcluded(e){const t=this.hass.entities?.[e];return Boolean(t?.hidden_by||t?.disabled_by||"config"===t?.entity_category||"diagnostic"===t?.entity_category)}_getAreaEntities(e){const t=this._areaEntitiesCache.get(e);if(t&&Date.now()-t.timestamp<this._CACHE_DURATION)return t.entities;const a=[],i=new Set;if(this.config?.entities){const t=new Set;this.config.devices&&this.config.devices.forEach(a=>{a.area_id===e&&t.add(a.device_id)}),this.config.entities.forEach(o=>{if(o.area_id===e||o.device_id&&t.has(o.device_id)){if(!this.hass.states[o.entity_id]||this._isEntityRegistryExcluded(o.entity_id))return;a.push(o),i.add(o.entity_id)}})}return Object.values(this.hass.states).forEach(t=>{if(!i.has(t.entity_id)&&t.attributes?.area_id===e){if(this._isEntityRegistryExcluded(t.entity_id))return;a.push({entity_id:t.entity_id,area_id:e,hidden:!1})}}),this._areaEntitiesCache.set(e,{entities:a,timestamp:Date.now()}),a}_getFilteredAreaEntities(e){let t=this._getAreaEntities(e);if(t=t.filter(e=>Boolean(this.hass.states[e.entity_id])&&!this._isEntityRegistryExcluded(e.entity_id)),this.config?.areas_options){const a=this.config.areas_options[e];if(a?.groups_options){const e=new Set;for(const t of Object.values(a.groups_options))t.hidden&&t.hidden.forEach(t=>e.add(t));t=t.filter(t=>!e.has(t.entity_id))}}return!1!==this.config?.settings?.hide_unavailable_entities&&(t=t.filter(e=>{const t=this.hass.states[e.entity_id];return t&&"unavailable"!==t.state&&"unknown"!==t.state})),t=z(this.hass,this.config,t),t}_getEditableAreaEntities(e){let t=this._getAreaEntities(e).filter(e=>Boolean(this.hass.states[e.entity_id])&&!this._isEntityRegistryExcluded(e.entity_id));return!1!==this.config?.settings?.hide_unavailable_entities&&(t=t.filter(e=>{const t=this.hass.states[e.entity_id];return t&&"unavailable"!==t.state&&"unknown"!==t.state})),z(this.hass,this.config,t)}_getUnavailableAreaEntities(e){let t=this._getAreaEntities(e);const a=[],i=[];t=t.filter(e=>!this._isEntityRegistryExcluded(e.entity_id));const o=this.config?.areas_options?.[e];if(o?.groups_options){const e=new Set;for(const t of Object.values(o.groups_options))t.hidden?.forEach(t=>e.add(t));t=t.filter(t=>!e.has(t.entity_id))}return t=z(this.hass,this.config,t),t.forEach(e=>{const t=this.hass.states[e.entity_id];t&&("unavailable"===t.state?a.push(e.entity_id):"unknown"===t.state&&i.push(e.entity_id))}),{unavailable:a,unknown:i}}_renderUnavailableEntitiesIcon(e){if(!1===this.config?.settings?.hide_unavailable_entities)return c;const t=this._getUnavailableAreaEntities(e),a=t.unavailable.length+t.unknown.length;if(0===a)return c;const i=this._t("settings.hidden_unavailable_count",{count:a});return s`
      <button
        class="dd-page-header-button is-warning"
        type="button"
        title=${i}
        aria-label=${i}
        @click=${()=>this._showUnavailableEntitiesModal(e)}
      >
        <ha-icon icon="mdi:eye-off-outline"></ha-icon>
        <span class="dd-page-header-badge" aria-hidden="true">${a}</span>
      </button>
    `}_formatAssignedAreaClimate(e,t){const a=this.hass?.areas?.[e],i="temperature"===t?a?.temperature_entity_id:a?.humidity_entity_id;if(!i)return;const o=this.hass?.states?.[i];return o&&"unavailable"!==o.state&&"unknown"!==o.state?E(this.hass,o):void 0}_withFreshAreaClimateFormatting(e,t){return{...t,temperature:this._formatAssignedAreaClimate(e,"temperature"),humidity:this._formatAssignedAreaClimate(e,"humidity")}}_getCachedAreaData(e){const t=this._areaDataCache.get(e.area_id);if(t&&Date.now()-t.timestamp<this._CACHE_DURATION)return this._withFreshAreaClimateFormatting(e.area_id,t.data);const a=this._getFilteredAreaEntities(e.area_id),i=ze(e,this.hass,a,this.config);return this._areaDataCache.set(e.area_id,{data:i,timestamp:Date.now()}),this._withFreshAreaClimateFormatting(e.area_id,i)}_getPictureContrastClass(e){if(!e)return"";const t=this._pictureContrastCache.get(e);return t?"dark"===t?"text-dark":"text-light":(this._pictureContrastCache.set(e,"pending"),this._analyzePictureContrast(e),"text-light")}async _analyzePictureContrast(e){try{const t=await this._calculatePictureTextTone(e);this._pictureContrastCache.set(e,t)}catch{this._pictureContrastCache.set(e,"light")}this.requestUpdate()}_calculatePictureTextTone(e){return new Promise((t,a)=>{const i=new Image;i.decoding="async",i.onload=()=>{try{const e=28,o=document.createElement("canvas");o.width=e,o.height=e;const r=o.getContext("2d",{willReadFrequently:!0});if(!r)return void a(new Error("Canvas context unavailable"));r.drawImage(i,0,0,e,e);const n=r.getImageData(0,0,e,e).data,s=[{x0:.1,x1:.7,y0:.2,y1:.75},{x0:.08,x1:.72,y0:.56,y1:.96},{x0:.18,x1:.82,y0:.18,y1:.82}].map(t=>{const a=Math.floor(t.x0*e),i=Math.ceil(t.x1*e),o=Math.floor(t.y0*e),r=Math.ceil(t.y1*e);let s=0,c=0;for(let t=o;t<r;t++)for(let o=a;o<i;o++){const a=4*(t*e+o),i=(n[a+3]??255)/255;s+=.2126*((n[a]??255)*i+255*(1-i))+.7152*((n[a+1]??255)*i+255*(1-i))+.0722*((n[a+2]??255)*i+255*(1-i)),c++}return c?s/c:0}),c=Math.min(...s);t(c>170?"dark":"light")}catch(e){a(e)}},i.onerror=()=>a(new Error("Image could not be loaded")),i.src=e})}_countActiveEntities(e,t){return e.filter(e=>{const a=this._getEffectiveEntityState(this.hass.states[e.entity_id]);return this._isEntityActiveForUi(a,t)}).length}_areAllEntitiesOff(e,t){return 0===this._countActiveEntities(e,t)}async _confirmDiscardSettings(){return"settings"!==this._selectedView||!this._settingsDirty||this._showConfirmation(this._t("settings.discard_title"),this._t("settings.discard_confirm"),{confirmLabel:this._t("settings.discard_action"),destructive:!0})}_clearSettingsEditState(){const e=this.renderRoot?.querySelector("dwains-dashboard-next-strategy-editor");e?._discardDeviceSettings?.(),this._pendingSettingsConfig=void 0,this._deviceSettingsDirty=!1,this._settingsDirty=!1,this._settingsSaveError="",this._settingsSavePending=!1,this._settingsEditorInitialized=!1,this._settingsPageKey="overview",this._settingsRestorePageKey="overview",this._settingsRestoreAreaId=void 0,this._settingsPageTitle="",this._settingsPageParentTitle="",this._settingsPageDescription=""}async _selectView(e){("settings"===e||await this._confirmDiscardSettings())&&(this._setSettingsHistoryState("settings"===e),this._resetAreaHeaderScrollState("area"===e),this._selectedView=e,"home"===e?(this._selectedArea=null,this._editMode=!1,this._rememberAreaEditMode(null),this._updateUrlArea(null),this._clearSettingsEditState()):"settings"===e&&(this._selectedArea=null,this._editMode=!1,this._rememberAreaEditMode(null),this._updateUrlArea(null),this._pendingSettingsConfig=void 0,this._deviceSettingsDirty=!1,this._settingsDirty=!1,this._settingsSaveError="",this._settingsEditorInitialized=!1,this._settingsPageKey="overview",this._settingsPageTitle="",this._settingsPageParentTitle="",this._settingsPageDescription=""),this._syncBottomNavAreaContext(),this._closeMobileNav())}async _selectArea(e){await this._confirmDiscardSettings()&&(this._resetAreaHeaderScrollState(!0),this._selectedArea=e,this._selectedView="area",this._editMode=!1,this._rememberAreaEditMode(null),this._clearSettingsEditState(),this._closeMobileNav(),this._updateUrlArea(e),this._syncBottomNavAreaContext())}_toggleHeader(){this._headerExpanded=!this._headerExpanded}_toggleMobileNav(){this._mobileNavOpen=!this._mobileNavOpen}_openDeviceDomain(e){this._navigateToDeviceDomain(e);const t=e.startsWith("binary_sensor.")?e.slice(14):void 0,a={domain:e,icon:"person"===e?"mdi:account-group":t?g("binary_sensor",t):x(e),label:t?S(this.hass,t):f(this.hass,e)},i=()=>{new URL(window.location.href).searchParams.get("dd_device")===e&&(window.dispatchEvent(new CustomEvent("dwains-dashboard-next-select-device-domain",{detail:a})),window.dispatchEvent(new CustomEvent("dwains-dashboard-next-device-context-changed",{detail:a})))};i(),[120,360].forEach(e=>window.setTimeout(i,e))}_navigateToDeviceDomain(e){const t=window.location.pathname.split("/")[1]||"lovelace",a=new URL(window.location.href);a.pathname=`/${t}/devices`,a.search="",e&&a.searchParams.set("dd_device",e),window.history.pushState(null,"",`${a.pathname}${a.search}`);const i=new Event("location-changed",{bubbles:!0,composed:!0});i.detail={replace:!1},window.dispatchEvent(i)}_renderFavoritesSection(){const e=this._getEffectiveFavoriteEntities();return 0===e.length?c:s`
      <div class="favorites-section">
        <div class="favorites-header">
          <ha-icon icon="mdi:star"></ha-icon>
          <h3>${this._t("favorites.title")}</h3>
        </div>
        <div class="favorites-grid">
          ${m(e,e=>e,e=>this._renderFavoriteCard(e))}
        </div>
      </div>
    `}async _renderFavoriteTileCards(){if(!this.shadowRoot||!this.hass)return;if(!this._headerExpanded)return;const e=++this._favoritesRenderVersion,t=this.shadowRoot?.querySelectorAll("dwains-dashboard-next-tile-host.favorite-tile-wrapper");t&&t.forEach(t=>{if(!t||!t.isConnected)return;t.getAttribute("entity")&&e===this._favoritesRenderVersion&&this._headerExpanded&&(t.hass=this.hass)})}async _loadHomeAssistantSummaries(){if(!this.hass)return;const[e,t]=await Promise.all([this._fetchRepairsIssueCount(),this._fetchDiscoveredDeviceCount()]);this._repairsIssueCount!==e&&(this._repairsIssueCount=e),this._discoveredDeviceCount!==t&&(this._discoveredDeviceCount=t)}async _fetchRepairsIssueCount(){try{const e=await this.hass.callWS({type:"repairs/list_issues"});return this._extractCollection(e?.issues??e).filter(e=>!this._isSummaryItemDismissed(e)).length}catch(e){return 0}}async _fetchDiscoveredDeviceCount(){const e=["config_entries/flow/progress","config_entries/discovery_info","config_entries/discovery_info/list","config_entries/get_discovery_info"];for(const t of e)try{const e=await this.hass.callWS({type:t}),a=this._countDiscoveryItems(e);if(a>0)return a}catch(e){}return 0}_getUpdateEntityCount(){return Object.values(this.hass?.states||{}).filter(e=>e.entity_id?.startsWith("update.")&&"on"===e.state).length}_hasUpdateEntityChanges(e,t){const a=new Set([...Object.keys(e.states||{}).filter(e=>e.startsWith("update.")),...Object.keys(t.states||{}).filter(e=>e.startsWith("update."))]);for(const i of a){const a=e.states[i],o=t.states[i];if(a?.state!==o?.state)return!0}return!1}_extractCollection(e){return e?Array.isArray(e)?e:"object"==typeof e?Object.values(e):[]:[]}_isSummaryItemDismissed(e){return Boolean(e?.dismissed||e?.ignored||e?.is_ignored||"ignored"===e?.status||"dismissed"===e?.status)}_countDiscoveryItems(e){if(!e)return 0;if(Array.isArray(e))return e.filter(e=>!this._isSummaryItemDismissed(e)).length;if("object"!=typeof e)return 0;if(this._looksLikeDiscoveryItem(e))return this._isSummaryItemDismissed(e)?0:1;const t=e.discovered??e.discovery??e.flows??e.entries??e.items;return t?this._countDiscoveryItems(t):Object.values(e).reduce((e,t)=>e+this._countDiscoveryItems(t),0)}_looksLikeDiscoveryItem(e){return!(!e||"object"!=typeof e||Array.isArray(e))&&Boolean(e.flow_id||e.handler||e.source||e.context||e.integration||e.domain)}_closeMobileNav(){this._mobileNavOpen=!1}_showMoreInfo(e){be(this,"hass-more-info",{entityId:e})}_syncSettingsEditor(){const e=this.renderRoot?.querySelector("dwains-dashboard-next-strategy-editor");if(e&&this.hass&&this.config&&(e.hass=this.hass,!this._settingsEditorInitialized)){this._settingsEditorInitialized=!0;const t=this._settingsRestorePageKey||this._settingsPageKey||"overview",a=this._settingsRestoreAreaId;e.setConfig(this.config).then(()=>{e._restoreSettingsNavigation?.(t,a)})}}async _saveSettingsPage(){if((this._pendingSettingsConfig||this._deviceSettingsDirty)&&!this._settingsSavePending&&this.hass&&this._canManageDashboard()){this._settingsSavePending=!0,this._settingsSaveError="",this._setSettingsHistoryState(!0);try{if(this._pendingSettingsConfig){const e=this._getDashboardUrlPath(),t=e?{url_path:e}:{},a=await this.hass.callWS({type:"lovelace/config",...t}),i={...a?.strategy||{},...this._pendingSettingsConfig},o={...a,strategy:i};await this.hass.callWS({type:"lovelace/config/save",...t,config:o}),this.config={...this.config,...this._pendingSettingsConfig}}const e=this.renderRoot?.querySelector("dwains-dashboard-next-strategy-editor");e?._commitDeviceSettings?.(),this._pendingSettingsConfig=void 0,this._deviceSettingsDirty=!1,this._settingsDirty=!1,this._settingsSaveError="",this._settingsEditorInitialized=!1,this.requestUpdate()}catch(e){console.error("Failed to save Dwains Dashboard settings:",e),this._settingsSaveError=this._t("error.settings_save",{error:String(e)})}finally{this._settingsSavePending=!1}}}_renderSettingsView(){const e=this._settingsDirty&&!this._settingsSavePending,t="overview"!==this._settingsPageKey,a=this._settingsPageTitle||this._t("sidebar.dashboard_settings"),i=this._settingsPageDescription||this._t("settings.subtitle"),o=this._settingsDirty?this._t("common.cancel"):this._t("common.close");return s`
      <section class="settings-page-view">
        <header class="settings-page-header">
          <button
            class="settings-page-back"
            type="button"
            title=${t?this._t("common.back"):this._t("common.close")}
            aria-label=${t?this._t("common.back"):this._t("common.close")}
            @click=${t?this._settingsBackToOverview:this._closeSettingsPage}
          >
            <ha-icon icon=${t?"mdi:arrow-left":"mdi:close"}></ha-icon>
          </button>
          <div class="settings-page-title">
            <h1>
              ${this._settingsPageParentTitle?s`<span class="settings-breadcrumb-parent">${this._settingsPageParentTitle}</span>
                    <ha-icon class="settings-breadcrumb-separator" icon="mdi:chevron-right"></ha-icon>
                    <span>${a}</span>`:a}
            </h1>
            <p>${i}</p>
          </div>
          <div class="settings-page-actions">
            <button type="button" class="settings-secondary" @click=${this._settingsSecondaryAction}>
              ${o}
            </button>
            <button
              type="button"
              class="settings-primary"
              ?disabled=${!e}
              @click=${this._saveSettingsPage}
            >
              ${this._settingsSavePending?this._t("common.saving"):this._t("common.save")}
            </button>
          </div>
        </header>
        ${this._settingsSaveError?s`<div class="settings-save-error">${this._settingsSaveError}</div>`:c}
        <div
          class="settings-page-editor"
          @config-changed=${this._handleSettingsConfigChanged}
          @dwains-dashboard-next-device-settings-changed=${this._handleDeviceSettingsChanged}
          @dd-settings-page-changed=${this._handleSettingsPageChanged}
        >
          <dwains-dashboard-next-strategy-editor></dwains-dashboard-next-strategy-editor>
        </div>
        <div class="settings-page-bottom-actions">
          <button type="button" class="settings-secondary" @click=${this._settingsSecondaryAction}>
            ${o}
          </button>
          <button
            type="button"
            class="settings-primary"
            ?disabled=${!e}
            @click=${this._saveSettingsPage}
          >
            ${this._settingsSavePending?this._t("common.saving"):this._t("common.save")}
          </button>
        </div>
      </section>
    `}_getWelcomeUserPicture(e){const t=e.trim().toLowerCase(),a=Object.values(this.hass?.states||{}).filter(e=>e.entity_id?.startsWith("person.")),i=a.find(e=>String(e.attributes?.friendly_name||"").trim().toLowerCase()===t),o=a.find(e=>e.attributes?.entity_picture);return(i||o)?.attributes?.entity_picture}async _loadPersistentNotifications(e=!0){if(this.hass&&this._showNotificationsUi()){this._notificationsLoading=!0,e&&(this._notificationsError="");try{const e=await this.hass.callWS({type:"persistent_notification/get"});this._persistentNotifications=this._sortPersistentNotifications(this._normalizePersistentNotifications(e)),this._notificationsError=""}catch(t){(e||this._notificationsOpen)&&(console.error("Failed to load persistent notifications:",t),this._notificationsError=this._t("error.notifications_load"))}finally{this._notificationsLoading=!1}}}async _ensurePersistentNotificationsSubscription(){if(!this._showNotificationsUi()||this._persistentNotificationsUnsub||!this.hass)return;const e=this.hass.connection;if(e?.subscribeMessage)try{const t=await e.subscribeMessage(e=>this._handlePersistentNotificationEvent(e),{type:"persistent_notification/subscribe"});"function"==typeof t&&(this._persistentNotificationsUnsub=()=>{t()})}catch(e){console.warn("Persistent notification subscription unavailable:",e)}}_handlePersistentNotificationEvent(e){if(!this._showNotificationsUi())return;const t=e?.type,a=this._normalizePersistentNotifications(e?.notifications);if("current"===t)return this._persistentNotifications=this._sortPersistentNotifications(a),void(this._notificationsError="");if("removed"===t){const e=new Set(a.map(e=>e.notification_id));return void(this._persistentNotifications=this._persistentNotifications.filter(t=>!e.has(t.notification_id)))}if("added"===t||"updated"===t){const e=new Map(this._persistentNotifications.map(e=>[e.notification_id,e]));a.forEach(t=>e.set(t.notification_id,t)),this._persistentNotifications=this._sortPersistentNotifications([...e.values()])}}_normalizePersistentNotifications(e){return(Array.isArray(e)?e:Object.values(e||{})).map(e=>({notification_id:String(e?.notification_id||""),title:e?.title||null,message:String(e?.message||""),created_at:e?.created_at?String(e.created_at):void 0})).filter(e=>e.notification_id)}_sortPersistentNotifications(e){return[...e].sort((e,t)=>(t.created_at?Date.parse(t.created_at):0)-(e.created_at?Date.parse(e.created_at):0))}_formatNotificationDate(e){const t=Date.parse(e);return Number.isFinite(t)?new Date(t).toLocaleString(this.hass?.language||void 0,{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):e}_handleStatusCardClick(e){"person"===e.domain?this._showPersonEntities():"wattage"===e.domain?this._showWattageEntities():this._showHouseStatusEntities(e)}_houseInfoDeviceViewLabel(){return String(this.hass?.language||"").toLowerCase().startsWith("de")?"Geräteansicht öffnen":"Open device view"}_houseInfoEnergyViewLabel(){return String(this.hass?.language||"").toLowerCase().startsWith("de")?"Energiesensoren anzeigen":"View energy sensors"}_showHouseStatusEntities(e){const t=e.entities||[];t.length?Ke(this,{domain:e.domain,config:this.config,deviceClass:e.deviceClass,entityIds:t,customTitle:e.name,viewAllLabel:this._houseInfoDeviceViewLabel(),onViewAll:()=>this._openDeviceDomain(this._statusDeviceDomainKey(e))}):this._openDeviceDomain(this._statusDeviceDomainKey(e))}_statusDeviceDomainKey(e){return e.deviceClass?`${e.domain}.${e.deviceClass}`:e.domain}_showPersonEntities(){Ke(this,{domain:"person",config:this.config,entityIds:this._getVisiblePersonEntities().map(e=>e.entity_id),customTitle:this._t("home.people"),viewAllLabel:this._houseInfoDeviceViewLabel(),onViewAll:()=>this._openDeviceDomain("person")})}_showWattageEntities(){Ke(this,{domain:"sensor",config:this.config,filterByUnitOfMeasurement:"W"})}_handleLightToggle(e,t){e.stopPropagation(),this._toggleAreaLights(t)}_shouldUpdateEntities(e,t){const a=["light","switch","climate","media_player","camera","cover","lock","binary_sensor","person","sensor","fan"];return Object.keys(t.states).some(i=>{const o=i.split(".")[0];if(!o||!a.includes(o))return!1;const r=e.states[i],n=t.states[i];return r?.state!==n?.state||r?.attributes!==n?.attributes})}_updateEntityCards(e,t){this.shadowRoot&&this.shadowRoot.querySelectorAll("dwains-dashboard-next-card-host, dwains-dashboard-next-tile-host, hui-card, hui-tile-card, hui-entity-card, hui-thermostat-card, hui-picture-entity-card, hui-media-control-card").forEach(e=>{e.hass!==t&&(e.hass=t)})}_clearEntityCardsCache(){this._areaDataCache.clear(),this._domainCountsCache.clear(),_e.clear()}_invalidateChangedAreaCaches(e,t){const a=new Set;let i=!1;for(const o of this.config?.entities||[]){const r=o.entity_id,n=e.states[r],s=t.states[r];n!==s&&(n?.state===s?.state&&n?.attributes===s?.attributes||(i=!0,o.area_id&&a.add(o.area_id)))}i&&this._domainCountsCache.clear(),a.forEach(e=>{this._areaDataCache.delete(e),(e=>{_e.delete(e)})(e)})}_showUnavailableEntitiesModal(e){const t=this._getUnavailableAreaEntities(e),a=[...t.unavailable,...t.unknown];Ke(this,{domain:"unavailable",areaId:e,config:this.config,customTitle:this._t("settings.hidden_unavailable_title"),customEntities:a,customDescription:this._t("settings.hidden_unavailable_description"),viewAllLabel:this._houseInfoDeviceViewLabel(),onViewAll:()=>this._navigateToDeviceDomain("__maintenance__")})}_areaThermostatEntityId(e){if(!1!==this.config?.settings?.show_area_thermostat)return function(e,t){let a;for(const t of e)if(t.startsWith("climate.")){if(a)return;a=t}if(!a)return;const i=t[a];return i&&!Ae.has(String(i.state))?a:void 0}(e.map(e=>e.entity_id),this.hass.states)}async _toggleAreaLights(e){const t=this._getFilteredAreaEntities(e).filter(e=>e.entity_id.startsWith("light."));if(0===t.length)return;const a=this._areAllEntitiesOff(t,"light");if(!await this._confirmMasterActionIfNeeded("light",a,t.length,e))return;const i=a?"turn_on":"turn_off",o=t.map(e=>e.entity_id);this._setOptimisticEntityStates(o,a?"on":"off");try{await this.hass.callService("light",i,{entity_id:o}),this._showToast(this._t(a?"action.all_lights_on":"action.all_lights_off"))}catch(t){this._clearOptimisticEntityStates(o),console.warn(`Failed to toggle lights in area ${e}:`,t),this._showToast(this._t("entity.lights_failed"))}}_resolveConfirmation(e){const t=this._confirmationResolve;this._confirmationResolve=void 0,this._confirmationDialog=null,t?.(e)}_showConfirmation(e,t,a={}){return this._confirmationResolve&&this._resolveConfirmation(!1),new Promise(i=>{this._confirmationResolve=i,this._confirmationDialog={title:e,message:t,confirmLabel:a.confirmLabel||e,destructive:!0===a.destructive},this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".confirmation-content")?.focus()})})}_showToast(e){console.log("Toast:",e)}};rt.styles=[r`
    dwains-dashboard-next-now-playing.inline{
      display: block;
      margin: 0 0 18px;
    }
    .room-header dwains-dashboard-next-area-thermostat{
      flex: 0 0 auto;
      min-width: 0;
      max-width: 100%;
    }
    @media (max-width: 768px) {
      dwains-dashboard-next-now-playing.floating{
        position: fixed;
        left: max(12px, env(safe-area-inset-left, 0px));
        right: max(12px, env(safe-area-inset-right, 0px));
        bottom: calc(76px + env(safe-area-inset-bottom, 0px));
        z-index: 140;
        max-width: 560px;
        margin: 0 auto;
      }
      .layout-container.has-floating-now-playing .home-view,
.layout-container.has-floating-now-playing .content-area.area-content-area{
        padding-bottom: calc(190px + env(safe-area-inset-bottom, 0px));
      }
      .room-header dwains-dashboard-next-area-thermostat{
        width: 100%;
        min-width: 0;
        flex-basis: 100%;
      }
    }
    :host{
      display: block;
      height: 100%;
      max-height: 100%;
      min-height: 0;
      /*background: var(--primary-background-color);*/
      color: var(--primary-text-color);
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }

    button,
.area-button,
.home-status-card,
.status-card-compact,
.mobile-area-card,
.house-person-mini,
.person-card,
.favorite-card-wrapper,
.favorite-quick-action,
.mobile-domain-master,
.mobile-layout-toggle,
.mobile-entity-card,
.mobile-entity-action,
.mobile-cover-action,
.mobile-entity-toggle,
.area-badge,
.area-quick-control,
.dd-edit-toggle,
.unavailable-entities-icon,
.dd-add-card,
.dd-custom-card-wrap.editing{
      user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }

    .dd-static-icon{
      width: 20px;
      height: 20px;
      display: block;
      flex: 0 0 auto;
      fill: currentColor;
      pointer-events: none;
    }

    .mobile-area-card,
.home-camera-card,
.home-summary-card,
.home-status-card,
.favorite-card-wrapper{
      contain: layout style paint;
    }

    .mobile-home-section,
.home-camera-section,
.home-status-section,
.home-todos-section,
.home-custom-cards-section,
.home-favorites-section,
.home-summaries-section,
.mobile-domain-group{
      content-visibility: auto;
      contain-intrinsic-size: 1px 360px;
    }

    .mobile-entities-section.layout-grid .mobile-entity-card{
      content-visibility: auto;
      contain-intrinsic-size: 164px 150px;
    }

    :host{
      display: block;
      height: calc(100dvh - var(--header-height, 56px));
      min-height: 0;
      overflow: hidden;
    }

    /* Layout Container */
    .layout-container{
      --area-sidebar-width: 250px;
      display: flex;
      height: 100%;
      max-height: 100%;
      min-height: 0;
      position: relative;
      overflow: hidden;
    }

    .layout-container.sidebar-resizing,
.layout-container.sidebar-resizing *{
      cursor: col-resize !important;
      user-select: none !important;
      -webkit-user-select: none !important;
    }

    .layout-container.sidebar-collapsed .sidebar{
      width: 0;
      flex-basis: 0;
      border-right: 0;
      opacity: 0;
      pointer-events: none;
      transform: translateX(-16px);
    }

    .layout-container.sidebar-collapsed .main-content{
      min-width: 0;
    }

    /* Sidebar Styles */
    .sidebar{
      width: var(--area-sidebar-width);
      flex: 0 0 var(--area-sidebar-width);
      background: var(--card-background-color);
      border-right: 1px solid var(--divider-color);
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease, width 0.16s ease, flex-basis 0.16s ease;
      z-index: 1;
      min-height: 0;
      height: 100%;
      max-height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      overscroll-behavior: contain;
      scrollbar-gutter: stable;
      -webkit-overflow-scrolling: touch;
    }

    .layout-container.sidebar-resizing .sidebar{
      transition: none;
    }

    .sidebar-resize-handle{
      flex: 0 0 10px;
      width: 10px;
      align-self: stretch;
      margin-left: -5px;
      margin-right: -5px;
      position: relative;
      z-index: 4;
      border: 0;
      padding: 0;
      background: transparent;
      cursor: col-resize;
      touch-action: none;
    }

    .sidebar-resize-handle::before{
      content: '';
      position: absolute;
      top: 14px;
      bottom: 14px;
      left: 4px;
      width: 2px;
      border-radius: 999px;
      background: transparent;
      transition: background 0.16s ease, box-shadow 0.16s ease;
    }

    .sidebar-resize-handle:hover::before,
.sidebar-resize-handle:focus-visible::before,
.layout-container.sidebar-resizing .sidebar-resize-handle::before{
      background: var(--primary-color);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-color) 12%, transparent);
    }

    .sidebar-resize-handle:focus-visible{
      outline: none;
    }

    .sidebar-collapse-toggle{
      position: absolute;
      top: 50%;
      left: calc(var(--area-sidebar-width) - 17px);
      z-index: 6;
      width: 34px;
      height: 54px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid color-mix(in srgb, var(--divider-color) 80%, transparent);
      border-radius: 999px;
      background: color-mix(in srgb, var(--card-background-color) 96%, transparent);
      color: var(--primary-text-color);
      box-shadow:
        0 10px 24px rgba(15, 23, 42, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.56);
      cursor: pointer;
      transform: translateY(-50%);
      transition:
        top 0.16s ease,
        left 0.16s ease,
        transform 0.16s ease,
        background-color 0.16s ease,
        box-shadow 0.16s ease;
    }

    .sidebar-collapse-toggle:hover{
      background: color-mix(in srgb, var(--primary-color) 10%, var(--card-background-color));
      box-shadow:
        0 12px 28px rgba(15, 23, 42, 0.16),
        inset 0 1px 0 rgba(255, 255, 255, 0.62);
    }

    .sidebar-collapse-toggle:focus-visible{
      outline: 2px solid var(--primary-color);
      outline-offset: 3px;
    }

    .sidebar-collapse-toggle ha-icon{
      --mdc-icon-size: 18px;
    }

    .sidebar-collapse-toggle.is-collapsed{
      left: 0;
      top: 50%;
      width: 34px;
      min-width: 34px;
      height: 54px;
      padding: 0;
      border-left: 0;
      border-radius: 0 999px 999px 0;
      background: color-mix(in srgb, var(--card-background-color) 98%, transparent);
      transform: translateY(-50%);
      box-shadow:
        0 12px 28px rgba(15, 23, 42, 0.14),
        inset 0 1px 0 rgba(255, 255, 255, 0.56);
    }

    .sidebar-collapse-label{
      display: none;
      font-size: 13px;
      font-weight: 850;
      line-height: 1;
    }

    .sidebar-collapse-toggle.is-collapsed .sidebar-collapse-label{
      display: inline;
    }

    /* Main Content */
    .main-content{
      flex: 1;
      min-width: 0;
      min-height: 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Global Header */
    .global-header{
      background: var(--card-background-color);
      border-bottom: 1px solid var(--divider-color);
      padding: 16px;
      position: sticky;
      top: 0;
      z-index: 1;
      transition: all 0.3s ease;
    }

    .global-header.compact{
      padding: 8px 16px;
    }

    .header-content{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    /* Time and Weather Section (right side) */
    .header-time-weather{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      min-width: 120px;
    }

    .header-time-section{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0px;
      line-height: 0.8;
    }

    .header-time{
      font-size: 24px;
      font-weight: 700;
      color: var(--primary-text-color);
      font-family: 'Roboto Mono', monospace;
      line-height: 1.2;
    }

    .header-date{
      font-size: 14px;
      opacity: 0.8;
      color: var(--secondary-text-color);
      font-weight: 500;
    }

    /* Weather Display */
    .weather-compact{
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 12px;
      background: var(--secondary-background-color);
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .weather-compact:hover{
      background: var(--primary-color);
      color: var(--text-primary-color);
      transform: translateY(-1px);
    }

    .weather-icon-compact ha-icon{
      --mdc-icon-size: 24px;
    }

    .weather-temp-compact{
      font-size: 14px;
      font-weight: 500;
    }

    /* Status Cards Section */
    .header-status-section{
      flex: 1;
      overflow: hidden;
    }

    .header-status-scroll{
      display: flex;
      gap: 8px;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .header-status-scroll::-webkit-scrollbar{
      display: none;
    }

    /* Status Card Compact */
    .status-card-compact{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px 12px;
      background: var(--secondary-background-color);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
      min-width: 60px;
      position: relative;
    }

    .status-card-compact:hover{
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .status-card-icon-compact{
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }

    .status-card-icon-compact ha-icon{
      --mdc-icon-size: 20px;
      color: var(--primary-color);
    }

    .status-card-badge-compact{
      position: absolute;
      top: -4px;
      right: -4px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-radius: 10px;
      padding: 2px 6px;
      font-size: 11px;
      font-weight: bold;
      min-width: 18px;
      text-align: center;
    }

    .status-card-title-compact{
      font-size: 11px;
      margin-top: 4px;
      opacity: 0.8;
    }

    /* Domain-specific status card colors */
    .status-card-compact.light .status-card-icon-compact{
      background: color-mix(in srgb, var(--status-color, #e1a129) 15%, transparent);
    }

    .status-card-compact.light ha-icon{
      color: var(--status-color, #e1a129);
    }

    .status-card-compact.switch .status-card-icon-compact{
      background: color-mix(in srgb, var(--status-color, #2f6fd6) 15%, transparent);
    }

    .status-card-compact.switch ha-icon{
      color: var(--status-color, #2f6fd6);
    }

    .status-card-compact.binary_sensor .status-card-icon-compact{
      background: color-mix(in srgb, var(--status-color, #6d7891) 15%, transparent);
    }

    .status-card-compact.binary_sensor ha-icon{
      color: var(--status-color, #6d7891);
    }

    .status-card-compact.person .status-card-icon-compact{
      background: color-mix(in srgb, var(--status-color, #6d7891) 15%, transparent);
    }

    .status-card-compact.person ha-icon{
      color: var(--status-color, #6d7891);
    }

    .status-card-compact.wattage .status-card-icon-compact{
      background: color-mix(in srgb, var(--status-color, #d88e20) 15%, transparent);
    }

    .status-card-compact.wattage ha-icon{
      color: var(--status-color, #d88e20);
    }

    /* Header Expand Button */
    .header-expand-button{
      position: absolute;
      bottom: -28px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      z-index: 5;
    }

    .header-expand-button:hover{
      transform: translateX(-50%) translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .header-expand-button[data-extra-count]::after{
      content: attr(data-extra-count);
      position: absolute;
      right: -8px;
      top: 50%;
      transform: translateY(-50%);
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-radius: 10px;
      padding: 2px 6px;
      font-size: 11px;
      font-weight: bold;
      min-width: 18px;
      text-align: center;
    }

    /* Area List */
    .area-list{
      padding: 8px;
    }

    /* Floor Sections */
    .floor-section{
      margin-bottom: 16px;
    }

    .floor-header{
      padding: 8px 16px;
      margin-bottom: 8px;
    }

    .floor-header h3{
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .floor-areas{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(178px, 1fr));
      gap: 8px;
    }

    .area-button{
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      margin-bottom: 0;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      background: var(--secondary-background-color);
      border: none;
      width: 100%;
      height: 125px;
      text-align: left;
      color: var(--primary-text-color);
      position: relative;
      min-width: 0;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .area-button:hover{
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    .area-button.selected{
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    /* Home button specific styling */
    .area-button.home-button{
      height: 60px;
    }

    /* Background image styles */
    .area-button.has-picture{
      position: relative;
      background: var(--secondary-background-color);
      --area-picture-text-color: #ffffff;
      --area-picture-muted-text-color: rgba(255, 255, 255, 0.76);
      --area-picture-text-shadow: 0 2px 10px rgba(0, 0, 0, 0.62);
      --area-picture-overlay:
        linear-gradient(90deg, rgba(11, 17, 28, 0.76) 0%, rgba(11, 17, 28, 0.38) 54%, rgba(11, 17, 28, 0.08) 100%),
        linear-gradient(180deg, rgba(11, 17, 28, 0.04), rgba(11, 17, 28, 0.34));
    }

    .area-button.has-picture.text-dark{
      --area-picture-text-color: #ffffff;
      --area-picture-muted-text-color: rgba(255, 255, 255, 0.76);
      --area-picture-text-shadow: 0 2px 10px rgba(0, 0, 0, 0.62);
      --area-picture-overlay:
        linear-gradient(90deg, rgba(11, 17, 28, 0.76) 0%, rgba(11, 17, 28, 0.38) 54%, rgba(11, 17, 28, 0.08) 100%),
        linear-gradient(180deg, rgba(11, 17, 28, 0.04), rgba(11, 17, 28, 0.34));
    }

    .area-background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }

    .area-button.has-picture:hover .area-background{
      opacity: 0.8;
    }

    /* Area content structure */
    .area-content{
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      height: 100%;
      justify-content: space-between;
    }

    .area-top-section{
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-top: 4px;
    }

    .area-bottom-section{
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 8px;
      margin-bottom: 4px;
    }

    /* Enhanced text styling for picture backgrounds */
    .area-button.has-picture .area-name,
.area-button.has-picture .area-sensors{
      text-shadow: var(--area-picture-text-shadow);
      color: var(--area-picture-text-color);
    }

    /* Area main icon in sidebar - override home view styling */
    .sidebar .area-main-icon{
      position: absolute;
      left: -25px;
      bottom: -25px;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background: color-mix(in srgb, var(--primary-color) 60%, transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .area-button.selected .area-main-icon{
      background: rgba(255,255,255,0.2);
    }

    .sidebar .area-main-icon ha-icon{
      --mdc-icon-size: 40px;
      color: var(--primary-color);
    }

    /* Info badges container */
    .area-info-badges{
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      align-items: center;
    }

    /* Legacy area-icon styles (still used for simple buttons) */
    .area-icon{
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--secondary-background-color);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .area-button.selected .area-icon{
      background: rgba(255,255,255,0.2);
    }

    /* Legacy area-info styles (still used for simple buttons) */
    .area-info{
      flex: 1;
    }

    .area-menu-chevron{
      display: none;
    }

    .home-notification-shortcut{
      box-sizing: border-box;
      position: relative;
      z-index: 2;
      min-width: 42px;
      height: 28px;
      margin-left: auto;
      padding: 0 7px;
      border: 0;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      flex-shrink: 0;
      cursor: pointer;
      color: #dc2626;
      background: color-mix(in srgb, #ef4444 12%, var(--card-background-color));
      box-shadow:
        inset 0 0 0 1px rgba(220, 38, 38, 0.08),
        0 6px 14px rgba(220, 38, 38, 0.1);
    }

    .home-notification-shortcut ha-icon{
      --mdc-icon-size: 15px;
    }

    .home-notification-count{
      min-width: 17px;
      height: 17px;
      padding: 0 5px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #e13f3f;
      color: #ffffff;
      font-size: 11px;
      font-weight: 850;
      line-height: 1;
    }

    .area-name{
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 2px;
    }

    .area-sensors{
      font-size: 13px;
      opacity: 0.8;
      font-weight: 500;
    }

    /* Legacy area-alerts styles (still used for simple buttons without badges) */
    .area-alerts{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--error-color);
      color: var(--text-primary-color);
      font-size: 11px;
      font-weight: bold;
      flex-shrink: 0;
    }

    /* Content Area */
    .content-area{
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
      overflow-anchor: none;
      overscroll-behavior: auto;
      -webkit-overflow-scrolling: touch;
      padding: 16px;
    }

    .content-area.settings-content-area{
      padding: 0;
      background:
        linear-gradient(180deg,
          color-mix(in srgb, var(--primary-color) 4%, transparent) 0,
          transparent 220px),
        var(--primary-background-color);
    }

    .settings-page-view{
      width: min(1180px, calc(100% - 32px));
      min-height: 100%;
      margin: 0 auto;
      padding: 18px 0 104px;
      box-sizing: border-box;
    }

    .settings-page-header{
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      gap: 16px;
      margin: 0 0 16px;
      padding: 16px 18px;
      border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
      border-radius: 18px;
      background:
        linear-gradient(135deg,
          color-mix(in srgb, var(--card-background-color) 96%, var(--primary-color)) 0%,
          color-mix(in srgb, var(--card-background-color) 94%, var(--primary-color)) 100%);
      box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
    }

    .settings-page-back,
.settings-secondary,
.settings-primary{
      appearance: none;
      border: 0;
      font: inherit;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .settings-page-back{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--secondary-background-color) 74%, var(--card-background-color));
      color: var(--primary-text-color);
    }

    .settings-page-back ha-icon{
      --mdc-icon-size: 22px;
    }

    .settings-page-title{
      min-width: 0;
    }

    .settings-page-title h1{
      margin: 0;
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
      font-size: clamp(22px, 2vw, 30px);
      line-height: 1.08;
      font-weight: 850;
      color: var(--primary-text-color);
      letter-spacing: 0;
    }
    .settings-breadcrumb-parent{
      color: var(--secondary-text-color);
      font-weight: 700;
    }
    .settings-breadcrumb-separator{
      flex: 0 0 auto;
      color: var(--secondary-text-color);
      --mdc-icon-size: 20px;
    }

    .settings-page-title p{
      margin: 5px 0 0;
      color: var(--secondary-text-color);
      font-size: 14px;
      line-height: 1.35;
    }

    .settings-page-actions,
.settings-page-bottom-actions{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
    }

    .settings-secondary,
.settings-primary{
      min-height: 40px;
      padding: 0 18px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 800;
    }

    .settings-secondary{
      background: transparent;
      color: var(--primary-color);
    }

    .settings-primary{
      background: var(--primary-color);
      color: var(--text-primary-color);
      box-shadow: 0 10px 24px color-mix(in srgb, var(--primary-color) 24%, transparent);
    }

    .settings-primary:disabled{
      opacity: 0.45;
      cursor: default;
      box-shadow: none;
    }

    .settings-save-error{
      margin: 0 0 14px;
      padding: 12px 14px;
      border-radius: 14px;
      background: color-mix(in srgb, var(--error-color) 12%, var(--card-background-color));
      color: var(--error-color);
      font-weight: 750;
      font-size: 13px;
    }

    .settings-page-editor{
      overflow: hidden;
      border-radius: 18px;
      background: var(--card-background-color);
      border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
      box-shadow: 0 16px 46px rgba(15, 23, 42, 0.08);
    }

    .settings-page-editor dwains-dashboard-next-strategy-editor{
      display: block;
    }

    .settings-page-bottom-actions{
      display: none;
    }

    /* Ruimte voor de mobiele onderbalk */
    @media (max-width: 768px) {
      .content-area{
        padding-bottom: calc(104px + env(safe-area-inset-bottom, 0px));
      }
    }

    /* Home View */
    .home-view{
      max-width: 1600px;
      margin: 0 auto;
      padding: 0px; /*24px;*/
    }

    /* Home Welcome */
    .home-welcome{
      text-align: left;
      margin-bottom: 28px;
      padding: 0;
      background: color-mix(in srgb, var(--card-background-color) 97%, var(--primary-background-color));
      border: 1px solid rgba(15, 23, 42, 0.06);
      border-radius: 8px;
      box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
    }

    .welcome-content{
      margin: 0 auto;
      padding: 18px 22px;
    }

    .welcome-header{
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 18px;
      margin-bottom: 0;
    }

    .welcome-header-meta{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 14px;
      min-width: 0;
    }

    .welcome-user{
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .welcome-avatar{
      border: 0;
      padding: 0;
      display: inline-flex;
      width: 52px;
      height: 52px;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      appearance: none;
      -webkit-appearance: none;
      background: var(--secondary-background-color);
      color: var(--secondary-text-color);
      border-radius: 999px;
      cursor: pointer;
      box-shadow:
        0 10px 22px rgba(15, 23, 42, 0.1),
        0 0 0 3px rgba(255, 255, 255, 0.72);
      transition:
        transform 0.18s ease,
        box-shadow 0.18s ease;
    }

    .welcome-avatar:hover{
      transform: translateY(-1px);
    }

    .welcome-avatar:focus-visible{
      outline: 2px solid var(--primary-color);
      outline-offset: 3px;
    }

    .welcome-avatar ha-icon{
      --mdc-icon-size: 26px;
    }

    .welcome-avatar img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .welcome-copy{
      min-width: 0;
    }

    .welcome-text{
      display: flex;
      align-items: baseline;
      gap: 4px;
    }

    .welcome-greeting{
      font-size: 22px;
      font-weight: 400;
      color: var(--secondary-text-color);
    }

    .welcome-name{
      font-size: 28px;
      font-weight: 750;
      color: var(--primary-text-color);
    }

    .welcome-title{
      display: none;
    }

    .welcome-return{
      display: block;
      margin-top: 5px;
      color: var(--secondary-text-color);
      font-size: 13px;
      font-weight: 650;
      line-height: 1.15;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .welcome-actions{
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .welcome-action{
      position: relative;
      border: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 999px;
      color: var(--primary-text-color);
      background: color-mix(in srgb, var(--secondary-background-color) 74%, var(--card-background-color));
      box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.05);
      transition: transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease;
      -webkit-tap-highlight-color: transparent;
    }

    .welcome-action:hover{
      background: color-mix(in srgb, var(--primary-color) 10%, var(--card-background-color));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 18%, transparent);
    }

    .welcome-notification-action{
      width: 38px;
      height: 42px;
      border-radius: 10px;
      color: var(--secondary-text-color);
      background: transparent;
      box-shadow: none;
    }

    .welcome-notification-action:hover{
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 7%, transparent);
      box-shadow: none;
    }

    .welcome-notification-action .welcome-action-badge{
      top: -1px;
      right: -3px;
    }

    .welcome-settings-action{
      margin-left: 2px;
    }

    .welcome-action ha-icon{
      --mdc-icon-size: 22px;
    }

    .welcome-action:active{
      transform: scale(0.96);
    }

    .welcome-action-badge{
      position: absolute;
      top: -2px;
      right: -2px;
      min-width: 17px;
      height: 17px;
      padding: 0 5px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--error-color);
      color: #fff;
      font-size: 10px;
      font-weight: 850;
      line-height: 1;
      box-shadow: 0 0 0 2px var(--card-background-color);
    }

    .welcome-time-section{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0px;
      min-width: 112px;
      line-height: 1.1;
    }

    .welcome-time{
      font-size: 34px;
      font-weight: 800;
      color: var(--primary-text-color);
      font-family: 'Roboto Mono', monospace;
    }

    .welcome-date{
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      color: var(--secondary-text-color);
      font-weight: 650;
    }

    .welcome-subheader{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      margin-top: 14px;
    }

    .welcome-alarm{
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 500;
    }

    .welcome-alarm.alarm-armed{
      background: var(--error-color);
      color: var(--text-primary-color);
    }

    .welcome-alarm.alarm-disarmed{
      background: var(--success-color);
      color: var(--text-primary-color);
    }

    .welcome-alarm.alarm-triggered{
      background: var(--error-color);
      color: var(--text-primary-color);
      animation: pulse 2s infinite;
    }

    .welcome-alarm:hover{
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .welcome-alarm ha-icon{
      --mdc-icon-size: 18px;
    }

    .alarm-text{
      font-size: 14px;
      font-weight: 600;
    }

    @keyframes pulse {
      0%{ opacity: 1; }
      50%{ opacity: 0.7; }
      100%{ opacity: 1; }
    }

    .welcome-weather{
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color));
      color: var(--primary-color);
      border-radius: 20px;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 16%, transparent);
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 500;
    }

    .welcome-weather .weather-temp{
      color: var(--primary-text-color);
    }

    .welcome-weather:hover{
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .welcome-weather ha-icon{
      --mdc-icon-size: 20px;
    }

    .weather-temp{
      font-size: 16px;
      font-weight: 600;
    }

    .weather-label{
      font-size: 12px;
      font-weight: 750;
      line-height: 1;
      opacity: 0.82;
      text-transform: uppercase;
      letter-spacing: 0;
    }

    /* Mobile Responsive Design */
    @media (max-width: 768px) {
      .home-welcome{
        text-align: left;
        margin: -10px -10px 16px;
        padding: calc(18px + env(safe-area-inset-top, 0px)) 20px 16px;
        border-radius: 0 0 8px 8px;
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 96%, var(--primary-color)) 0%,
            color-mix(in srgb, var(--card-background-color) 92%, var(--primary-background-color)) 100%);
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
      }

      .welcome-content{
        padding: 0;
      }

      .welcome-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 14px;
        margin-bottom: 0;
      }

      .welcome-user{
        gap: 10px;
        flex: 1 1 auto;
      }

      .welcome-avatar{
        display: inline-flex;
        width: 38px;
        height: 38px;
        border-radius: 999px;
        box-shadow:
          0 8px 18px rgba(15, 23, 42, 0.1),
          0 0 0 3px rgba(255, 255, 255, 0.72);
      }

      .welcome-avatar ha-icon{
        --mdc-icon-size: 21px;
      }

      .welcome-text{
        display: block;
      }

      .welcome-greeting,
.welcome-name{
        display: none;
      }

      .welcome-title{
        display: block;
        color: var(--primary-text-color);
        font-size: 15px;
        font-weight: 750;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .welcome-return{
        display: block;
        margin-top: 3px;
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 600;
        line-height: 1.1;
      }

      .welcome-time-section{
        display: none;
      }

      .welcome-actions{
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 0 0 auto;
      }

      .welcome-action{
        width: 42px;
        height: 42px;
        border-radius: 999px;
        color: var(--primary-text-color);
        background: color-mix(in srgb, var(--card-background-color) 86%, var(--primary-background-color));
        box-shadow:
          0 8px 20px color-mix(in srgb, var(--primary-text-color) 10%, transparent),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 8%, transparent);
      }

      .welcome-action ha-icon{
        --mdc-icon-size: 21px;
      }

      .welcome-subheader{
        justify-content: flex-start;
        gap: 8px;
        margin-top: 16px;
        overflow-x: auto;
        padding-bottom: 2px;
        scrollbar-width: none;
      }

      .welcome-subheader::-webkit-scrollbar{
        display: none;
      }

      .welcome-alarm,
.welcome-weather{
        min-width: auto;
        height: 42px;
        padding: 0 14px;
        justify-content: center;
        border-radius: 999px;
        flex: 0 0 auto;
        box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
      }

      .alarm-text,
.weather-temp{
        font-size: 15px;
      }

      .weather-label{
        font-size: 11px;
      }
    }

    @media (max-width: 480px) {
      .home-welcome{
        padding: calc(16px + env(safe-area-inset-top, 0px)) 18px 14px;
        margin-bottom: 14px;
      }

      .welcome-header{
        gap: 10px;
      }

      .welcome-avatar{
        width: 36px;
        height: 36px;
      }

      .welcome-title{
        font-size: 14px;
      }

      .welcome-return{
        font-size: 11px;
      }

      .welcome-action{
        width: 40px;
        height: 40px;
      }

      .welcome-alarm,
.welcome-weather{
        height: 40px;
        padding: 0 13px;
        font-size: 14px;
      }

      .alarm-text,
.weather-temp{
        font-size: 14px;
      }

      .weather-label{
        font-size: 10px;
      }
    }

    /* Home Status Cards */
    .home-status-section{
      margin-bottom: 48px;
    }

    .home-status-heading{
      display: flex;
      align-items: center;
      gap: 9px;
      margin: 0 0 14px;
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 850;
      line-height: 1.1;
    }

    .home-status-heading ha-icon{
      --mdc-icon-size: 20px;
      width: 30px;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 12%, transparent);
    }

    .home-camera-section{
      margin-bottom: 36px;
    }

    .home-camera-section .home-status-heading ha-icon{
      color: #ef4444;
      background: color-mix(in srgb, #ef4444 12%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #ef4444 8%, transparent);
    }

    .home-camera-section .mobile-layout-toggle{
      color: #ef4444;
      background: color-mix(in srgb, #ef4444 12%, var(--card-background-color));
      box-shadow:
        0 8px 18px rgba(15, 23, 42, 0.08),
        inset 0 0 0 1px color-mix(in srgb, #ef4444 8%, transparent);
    }

    .home-summaries-section{
      margin-bottom: 36px;
    }

    .home-summaries-section .home-status-heading ha-icon{
      color: #f59e0b;
      background: color-mix(in srgb, #f59e0b 13%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #f59e0b 9%, transparent);
    }

    .home-summaries-section .mobile-layout-toggle.active{
      color: #f59e0b;
      background: color-mix(in srgb, #f59e0b 13%, var(--card-background-color));
      box-shadow:
        0 8px 18px rgba(15, 23, 42, 0.08),
        inset 0 0 0 1px color-mix(in srgb, #f59e0b 9%, transparent);
    }

    .home-todos-section{
      margin-bottom: 36px;
    }

    .home-todos-section .home-status-heading ha-icon{
      color: #7c3aed;
      background: color-mix(in srgb, #7c3aed 12%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #7c3aed 8%, transparent);
    }

    .home-todos-grid{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
      align-items: start;
      gap: 12px;
    }

    .home-todo-card,
.home-todo-card dwains-dashboard-next-card-host{
      display: block;
      min-width: 0;
    }

    .home-custom-cards-section{
      margin-bottom: 36px;
    }

    .home-custom-cards-section .home-status-heading ha-icon{
      color: #0ea5a8;
      background: color-mix(in srgb, #0ea5a8 12%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #0ea5a8 20%, transparent);
    }

    .home-custom-cards-grid{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
      align-items: start;
      gap: 12px;
    }

    .home-custom-card,
.home-custom-card dwains-dashboard-next-card-host{
      display: block;
      min-width: 0;
    }

    .home-summary-list{
      width: min(100%, 980px);
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }

    .home-summary-card{
      appearance: none;
      width: 100%;
      min-height: 68px;
      padding: 12px 14px;
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      gap: 13px;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 9%, transparent);
      border-radius: 10px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      cursor: pointer;
      box-shadow: 0 8px 20px color-mix(in srgb, var(--primary-text-color) 5%, transparent);
      transition:
        transform 0.16s ease,
        border-color 0.16s ease,
        box-shadow 0.16s ease;
    }

    .home-summary-card:hover{
      transform: translateY(-1px);
      border-color: color-mix(in srgb, var(--summary-color) 35%, transparent);
      box-shadow: 0 12px 26px color-mix(in srgb, var(--summary-color) 13%, transparent);
    }

    .home-summary-card:active{
      transform: scale(0.992);
    }

    .home-summary-card:focus-visible{
      outline: 2px solid color-mix(in srgb, var(--summary-color) 70%, #ffffff);
      outline-offset: 2px;
    }

    .home-summary-icon{
      width: 38px;
      height: 38px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 9px;
      color: var(--summary-color);
      background: color-mix(in srgb, var(--summary-color) 14%, transparent);
      flex: 0 0 auto;
    }

    .home-summary-icon ha-icon{
      --mdc-icon-size: 21px;
    }

    .home-summary-copy{
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .home-summary-title{
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 850;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .home-summary-subtitle{
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.25;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .home-summary-chevron{
      width: 26px;
      height: 26px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: color-mix(in srgb, var(--primary-text-color) 48%, transparent);
      flex: 0 0 auto;
    }

    .home-summary-chevron ha-icon{
      --mdc-icon-size: 20px;
    }

    .home-camera-grid{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 14px;
    }

    .home-camera-card{
      position: relative;
      min-height: 168px;
      overflow: hidden;
      border: 0;
      border-radius: 12px;
      display: flex;
      align-items: stretch;
      padding: 0;
      background: color-mix(in srgb, var(--primary-text-color) 12%, var(--card-background-color));
      color: #ffffff;
      cursor: pointer;
      text-align: left;
      box-shadow:
        0 16px 32px rgba(15, 23, 42, 0.12),
        inset 0 0 0 1px rgba(255, 255, 255, 0.1);
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }

    .home-camera-card:hover{
      transform: translateY(-2px);
      box-shadow:
        0 20px 42px rgba(15, 23, 42, 0.16),
        inset 0 0 0 1px rgba(255, 255, 255, 0.16);
    }

    .home-camera-card:focus-visible{
      outline: 2px solid var(--primary-color);
      outline-offset: 3px;
    }

    .home-camera-image,
.home-camera-placeholder{
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transform: scale(1.02);
    }

    .home-camera-placeholder{
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at 20% 20%, rgba(var(--rgb-primary-color, 3, 169, 244), 0.28), transparent 34%),
        linear-gradient(135deg, #192133, #0f172a);
    }

    .home-camera-placeholder ha-icon{
      --mdc-icon-size: 44px;
      color: rgba(255, 255, 255, 0.58);
    }

    .home-camera-card::after{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 52%;
      background:
        linear-gradient(180deg,
          rgba(7, 11, 18, 0) 0%,
          rgba(7, 11, 18, 0.34) 42%,
          rgba(7, 11, 18, 0.84) 100%);
      pointer-events: none;
    }

    .home-camera-content{
      position: relative;
      z-index: 1;
      width: 100%;
      min-height: 168px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .home-camera-top{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
    }

    .home-camera-area-icon,
.home-camera-count{
      min-width: 36px;
      height: 36px;
      border-radius: 11px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      backdrop-filter: blur(12px);
      box-shadow:
        0 10px 24px rgba(15, 23, 42, 0.16),
        inset 0 0 0 1px rgba(255, 255, 255, 0.12);
    }

    .home-camera-area-icon ha-icon{
      --mdc-icon-size: 20px;
    }

    .home-camera-count{
      min-width: 44px;
      padding: 0 10px;
      gap: 5px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 850;
    }

    .home-camera-count ha-icon{
      --mdc-icon-size: 14px;
    }

    .home-camera-copy{
      min-width: 0;
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.62);
    }

    .home-camera-name{
      font-size: 18px;
      font-weight: 850;
      line-height: 1.08;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .home-camera-meta{
      margin-top: 5px;
      color: rgba(255, 255, 255, 0.76);
      font-size: 12px;
      font-weight: 720;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .mobile-home-section,
.mobile-section-heading{
      display: none;
    }

    .layout-container.sidebar-collapsed .mobile-home-section.mobile-home-areas{
      display: block;
      margin: 0 0 36px;
    }

    .layout-container.sidebar-collapsed .mobile-home-areas .mobile-section-heading{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 0;
      margin-bottom: 14px;
    }

    .layout-container.sidebar-collapsed .mobile-home-areas .mobile-section-action{
      display: none;
    }

    .layout-container.sidebar-collapsed .mobile-area-rail{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 16px;
      padding: 0;
      overflow: visible;
      scroll-snap-type: none;
    }

    .layout-container.sidebar-collapsed .mobile-area-card{
      appearance: none;
      position: relative;
      box-sizing: border-box;
      min-width: 0;
      min-height: 156px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
      overflow: hidden;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 8%, transparent);
      border-radius: 8px;
      background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color));
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      cursor: pointer;
      box-shadow: 0 14px 30px color-mix(in srgb, var(--primary-text-color) 8%, transparent);
      transition:
        transform 0.18s ease,
        border-color 0.18s ease,
        box-shadow 0.18s ease;
    }

    .layout-container.sidebar-collapsed .mobile-area-card:hover{
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--primary-color) 22%, transparent);
      box-shadow: 0 18px 38px color-mix(in srgb, var(--primary-text-color) 11%, transparent);
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture{
      min-height: 176px;
      color: var(--mobile-area-picture-text-color, #ffffff);
      border-color: rgba(255, 255, 255, 0.16);
      background: #182044;
      --mobile-area-picture-text-color: #ffffff;
      --mobile-area-picture-muted-text-color: rgba(255, 255, 255, 0.76);
      --mobile-area-picture-text-shadow: 0 2px 10px rgba(0, 0, 0, 0.62);
      --mobile-area-picture-overlay:
        linear-gradient(180deg, rgba(12, 18, 32, 0.02) 0%, rgba(12, 18, 32, 0.18) 42%, rgba(12, 18, 32, 0.84) 100%),
        linear-gradient(90deg, rgba(12, 18, 32, 0.18), rgba(12, 18, 32, 0.04));
    }

    .layout-container.sidebar-collapsed .mobile-area-picture{
      position: absolute;
      inset: 0;
      z-index: 0;
      background-size: cover;
      background-position: center;
      transform: scale(1.02);
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture::after{
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background: var(--mobile-area-picture-overlay);
      pointer-events: none;
    }

    .layout-container.sidebar-collapsed .mobile-area-top,
.layout-container.sidebar-collapsed .mobile-area-copy{
      position: relative;
      z-index: 2;
    }

    .layout-container.sidebar-collapsed .mobile-area-top{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
    }

    .layout-container.sidebar-collapsed .mobile-area-icon{
      width: 44px;
      height: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 8px;
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 13%, transparent);
    }

    .layout-container.sidebar-collapsed .mobile-area-icon ha-icon{
      --mdc-icon-size: 23px;
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-icon{
      color: var(--mobile-area-picture-text-color, #ffffff);
      background: rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(12px);
    }

    .layout-container.sidebar-collapsed .mobile-area-badges{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 5px;
      min-width: 0;
    }

    .layout-container.sidebar-collapsed .mobile-area-badge{
      min-width: 25px;
      height: 25px;
      padding: 0 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border-radius: 999px;
      color: var(--area-badge-color, var(--primary-color));
      background: color-mix(in srgb, var(--area-badge-color, var(--primary-color)) 12%, transparent);
      font-size: 11px;
      font-weight: 850;
    }

    .layout-container.sidebar-collapsed .mobile-area-badge ha-icon{
      --mdc-icon-size: 14px;
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-badge{
      background: color-mix(in srgb, var(--area-badge-color, var(--primary-color)) 18%, rgba(255, 255, 255, 0.88));
      backdrop-filter: blur(12px);
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.16);
    }

    .layout-container.sidebar-collapsed .mobile-area-name{
      font-size: 16px;
      font-weight: 850;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .layout-container.sidebar-collapsed .mobile-area-meta{
      margin-top: 5px;
      color: color-mix(in srgb, var(--primary-text-color) 56%, transparent);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-name,
.layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-meta{
      color: var(--mobile-area-picture-text-color, #ffffff);
      text-shadow: var(--mobile-area-picture-text-shadow);
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-meta{
      color: var(--mobile-area-picture-muted-text-color, rgba(255, 255, 255, 0.72));
    }

    /* Person Cards Section */
    .person-cards-section{
      margin-bottom: 32px;
    }

    .person-cards-grid{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
      margin: 0 auto;
    }

    .person-card{
      --person-color: #8a94a6;
      --person-bg: color-mix(in srgb, var(--person-color) 8%, var(--card-background-color));
      position: relative;
      min-height: 98px;
      padding: 16px 18px;
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      gap: 16px;
      overflow: hidden;
      border: 1px solid rgba(15, 23, 42, 0.07);
      border-radius: 18px;
      background:
        radial-gradient(circle at 90% 10%, color-mix(in srgb, var(--person-color) 15%, transparent), transparent 42%),
        var(--person-bg);
      cursor: pointer;
      box-shadow:
        0 16px 34px rgba(15, 23, 42, 0.08),
        inset 0 0 0 1px rgba(255, 255, 255, 0.34);
      transition:
        transform 0.18s ease,
        box-shadow 0.18s ease,
        border-color 0.18s ease;
    }

    .person-card::after{
      content: "";
      position: absolute;
      left: 18px;
      right: 18px;
      bottom: 0;
      height: 3px;
      border-radius: 999px 999px 0 0;
      background: var(--person-color);
      opacity: 0.34;
    }

    .person-card.home{
      --person-color: #2f9b62;
      --person-bg: color-mix(in srgb, #2f9b62 10%, var(--card-background-color));
    }

    .person-card.away{
      --person-color: #d88e20;
      --person-bg: color-mix(in srgb, #d88e20 9%, var(--card-background-color));
    }

    .person-card.unknown{
      --person-color: #7c67c7;
      --person-bg: color-mix(in srgb, #7c67c7 8%, var(--card-background-color));
    }

    .person-card:hover{
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--person-color) 24%, transparent);
      box-shadow:
        0 20px 42px rgba(15, 23, 42, 0.12),
        inset 0 0 0 1px color-mix(in srgb, var(--person-color) 16%, transparent);
    }

    .person-card:active{
      transform: scale(0.988);
    }

    .person-card:focus-visible{
      outline: 2px solid color-mix(in srgb, var(--person-color) 72%, #ffffff);
      outline-offset: 3px;
    }

    .person-avatar-wrapper{
      position: relative;
      z-index: 1;
      flex-shrink: 0;
    }

    .person-avatar{
      width: 64px;
      height: 64px;
      border-radius: 22px;
      overflow: hidden;
      background: color-mix(in srgb, var(--person-color) 14%, var(--secondary-background-color));
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid color-mix(in srgb, var(--person-color) 26%, rgba(255, 255, 255, 0.84));
      box-shadow: 0 12px 24px color-mix(in srgb, var(--person-color) 16%, transparent);
    }

    .person-avatar img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .person-avatar ha-icon{
      --mdc-icon-size: 34px;
      color: var(--person-color);
    }

    .person-home-indicator{
      position: absolute;
      bottom: -5px;
      right: -5px;
      width: 26px;
      height: 26px;
      background: var(--person-color);
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid var(--card-background-color);
      box-shadow: 0 8px 18px color-mix(in srgb, var(--person-color) 26%, transparent);
    }

    .person-home-indicator ha-icon{
      --mdc-icon-size: 14px;
      color: var(--text-primary-color);
    }

    .person-info{
      position: relative;
      z-index: 1;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 6px;
      flex: 1;
      min-width: 0;
    }

    .person-name{
      font-size: 18px;
      font-weight: 850;
      color: var(--primary-text-color);
      line-height: 1.15;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .person-status{
      display: inline-flex;
      width: max-content;
      max-width: 100%;
      align-items: center;
      gap: 6px;
      min-height: 27px;
      padding: 0 10px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--person-color) 12%, transparent);
      color: var(--person-color);
      font-size: 14px;
      font-weight: 800;
      line-height: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .person-status ha-icon{
      --mdc-icon-size: 15px;
    }

    .person-details{
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 7px;
      align-items: flex-end;
      justify-content: flex-end;
      flex-shrink: 0;
      margin-left: auto;
      max-width: 170px;
    }

    .person-battery,
.person-distance{
      display: flex;
      align-items: center;
      gap: 5px;
      min-height: 28px;
      font-size: 12px;
      font-weight: 800;
      color: color-mix(in srgb, var(--primary-text-color) 72%, transparent);
      background: rgba(255, 255, 255, 0.62);
      padding: 0 9px;
      border-radius: 999px;
      box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.04);
    }

    .person-battery ha-icon,
.person-distance ha-icon{
      --mdc-icon-size: 14px;
    }

    .person-battery ha-icon{
      color: var(--success-color);
    }

    .person-battery ha-icon[icon*="alert"]{
      color: var(--error-color);
    }

    .person-distance ha-icon{
      color: var(--primary-color);
    }

    @media (max-width: 768px) {
      .person-cards-grid{
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 12px;
      }

      .person-card{
        padding: 16px;
      }

      .person-avatar{
        width: 64px;
        height: 64px;
      }

      .person-avatar ha-icon{
        --mdc-icon-size: 36px;
      }

      .person-name{
        font-size: 16px;
      }

      .person-status{
        font-size: 13px;
      }

      .person-details{
        gap: 8px;
      }

      .person-battery,
.person-distance{
        font-size: 12px;
        padding: 3px 6px;
      }
    }

    .home-status-grid{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 20px;
      margin: 0 auto;
    }

    .home-status-card{
      background: var(--card-background-color);
      border-radius: 20px;
      padding: 24px 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid var(--divider-color);
      position: relative;
      overflow: hidden;
    }

    .home-status-card::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .home-status-card:hover{
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
      border-color: var(--primary-color);
    }

    .home-status-card:hover::before{
      opacity: 1;
    }

    .home-status-card .status-card-icon{
      position: relative;
      margin-bottom: 16px;
    }

    .home-status-card .status-card-icon ha-icon{
      --mdc-icon-size: 36px;
      color: var(--primary-color);
      transition: transform 0.3s ease;
    }

    .home-status-card:hover .status-card-icon ha-icon{
      transform: scale(1.1);
    }

    .home-status-card .status-card-badge{
      position: absolute;
      top: -10px;
      right: -10px;
      background: var(--accent-color);
      color: white;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .home-status-card .status-card-title{
      font-size: 15px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-top: 8px;
    }



    /* Area Info Badges */
    .area-info-badges{
      position: absolute;
      top: 5px;
      right: 0px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-width: calc(59% - 24px);
      justify-content: flex-end;
      align-items: flex-start;
      z-index: 2;
    }

    .info-badge{
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: color-mix(in srgb, var(--badge-color, var(--primary-color)) 10%, var(--card-background-color));
      color: var(--badge-color, var(--primary-text-color));
      border-radius: 12px;
      font-size: 12px;
      flex-shrink: 0;
      backdrop-filter: blur(8px);
      border: 1px solid color-mix(in srgb, var(--badge-color, var(--divider-color)) 18%, transparent);
    }

    .info-badge ha-icon{
      --mdc-icon-size: 14px;
    }

    .info-badge.light{
      background: color-mix(in srgb, var(--badge-color, #e1a129) 10%, var(--card-background-color));
      color: var(--badge-color, #e1a129);
    }

    .info-badge.switch{
      background: color-mix(in srgb, var(--badge-color, #2f6fd6) 10%, var(--card-background-color));
      color: var(--badge-color, #2f6fd6);
    }

    .info-badge.climate{
      background: color-mix(in srgb, var(--badge-color, #34a6d8) 10%, var(--card-background-color));
      color: var(--badge-color, #34a6d8);
    }

    .info-badge.media_player{
      background: color-mix(in srgb, var(--badge-color, #7c67c7) 10%, var(--card-background-color));
      color: var(--badge-color, #7c67c7);
    }

    .info-badge.cover{
      background: color-mix(in srgb, var(--badge-color, #d98928) 10%, var(--card-background-color));
      color: var(--badge-color, #d98928);
    }

    .info-badge.fan{
      background: color-mix(in srgb, var(--badge-color, #16a6b6) 10%, var(--card-background-color));
      color: var(--badge-color, #16a6b6);
    }

    .info-badge.motion{
      background: color-mix(in srgb, var(--badge-color, #6d7891) 10%, var(--card-background-color));
      color: var(--badge-color, #6d7891);
    }

    /* Sidebar info badges (smaller) */
    .sidebar .info-badge{
      padding: 2px 6px;
      font-size: 11px;
      border-radius: 12px;
    }

    .sidebar .info-badge ha-icon{
      --mdc-icon-size: 12px;
    }

    .sidebar .badge-count{
      min-width: 14px;
      text-align: center;
    }

    /* Clickable badges */
    .info-badge.clickable{
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .info-badge.clickable:hover{
      transform: scale(1.05);
      filter: brightness(1.1);
    }

    /* Color fallbacks for themes without custom colors */
    :host{
      --purple-color: #9c27b0;
      --blue-color: #2196f3;
    }

    /* Area View */
    .area-view{
      max-width: 1400px;
      margin: 0 auto;
    }

    .area-header{
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .area-title{
      font-size: 28px;
      font-weight: 400;
      margin: 0 0 16px 0;
      flex: 1;
    }

    .unavailable-entities-icon{
      background: var(--warning-color);
      border: none;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      margin-bottom: 16px;
    }

    .unavailable-entities-icon:hover{
      background: var(--error-color);
      transform: scale(1.1);
    }

    .unavailable-entities-icon ha-icon{
      --mdc-icon-size: 18px;
      color: white;
    }

    .unavailable-count{
      position: absolute;
      top: -6px;
      right: -6px;
      background: var(--error-color);
      color: white;
      border-radius: 10px;
      padding: 2px 6px;
      font-size: 10px;
      font-weight: 600;
      min-width: 16px;
      text-align: center;
      line-height: 1.2;
    }

    /* Area Badges */
    .area-badges{
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }

    .area-badge{
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 24px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .area-badge:hover{
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .area-badge ha-icon{
      --mdc-icon-size: 20px;
    }

    .area-badge.light-toggle{
      background: color-mix(in srgb, var(--warning-color) 10%, var(--card-background-color));
      border-color: var(--warning-color);
    }

    .area-badge.light-toggle ha-icon{
      color: var(--warning-color);
    }

    .area-badge.switch-toggle{
      background: color-mix(in srgb, var(--info-color) 10%, var(--card-background-color));
      border-color: var(--info-color);
    }

    .area-badge.switch-toggle ha-icon{
      color: var(--info-color);
    }

    .area-badge.wattage{
      background: color-mix(in srgb, var(--warning-color) 10%, var(--card-background-color));
      border-color: var(--warning-color);
    }

    .area-badge.wattage ha-icon{
      color: var(--warning-color);
    }

    .area-badge.energy{
      background: color-mix(in srgb, var(--info-color) 10%, var(--card-background-color));
      border-color: var(--info-color);
    }

    .area-badge.energy ha-icon{
      color: var(--info-color);
    }

    /* Entities Section */
    .entities-section{
      display: grid;
      gap: 16px;
    }

    .domain-group{
      background: var(--card-background-color);
      border-radius: 12px;
      padding: 16px;
    }

    .domain-header{
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 500;
    }

    .domain-header ha-icon{
      --mdc-icon-size: 20px;
      opacity: 0.8;
    }

    .entities-grid{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 8px;
    }

    .entities-grid.cover-entities-grid{
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 12px;
    }

    .entities-grid.light-entities-grid{
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 12px;
    }

    .entities-grid.sensor-entities-grid{
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 12px;
    }

    .entities-grid.motion-entities-grid{
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 10px;
    }

    .entity-card-wrapper{
      min-height: 60px;
      position: relative;
    }

    .cover-entity-card,
.light-entity-card,
.motion-entity-card{
      min-height: 72px;
    }

    .sensor-entity-card{
      min-height: 150px;
    }

    .cover-entity-card dwains-dashboard-next-card-host,
.light-entity-card dwains-dashboard-next-card-host,
.sensor-entity-card dwains-dashboard-next-card-host,
.motion-entity-card dwains-dashboard-next-card-host{
      display: block;
    }

    .mobile-area-overview,
.mobile-entities-section{
      display: none;
    }

    .area-view .mobile-entities-section{
      display: grid;
      position: relative;
      z-index: 2;
    }

    .area-header-metrics{
      display: none;
    }

    .mobile-area-metrics{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-bottom: 14px;
    }

    .mobile-area-metric,
.area-header-metric{
      min-height: 64px;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      gap: 10px;
      overflow: hidden;
      border-radius: 10px;
      background: color-mix(in srgb, var(--metric-color) 10%, var(--card-background-color));
      box-shadow:
        0 10px 24px rgba(15, 23, 42, 0.06),
        inset 0 0 0 1px color-mix(in srgb, var(--metric-color) 12%, transparent);
    }

    .mobile-area-metric.temperature,
.area-header-metric.temperature{
      --metric-color: #7c67c7;
    }

    .mobile-area-metric.humidity,
.area-header-metric.humidity{
      --metric-color: #34a6d8;
    }

    .mobile-area-metric.power,
.area-header-metric.power{
      --metric-color: #d88e20;
    }

    .mobile-area-metric.energy,
.area-header-metric.energy{
      --metric-color: #7c67c7;
    }

    .metric-ring{
      width: 44px;
      height: 44px;
      position: relative;
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      background:
        conic-gradient(var(--metric-color) 0deg var(--metric-angle), rgba(15, 23, 42, 0.08) var(--metric-angle) 270deg, transparent 270deg 360deg);
    }

    .metric-ring::after{
      content: "";
      position: absolute;
      inset: 5px;
      border-radius: inherit;
      background: color-mix(in srgb, var(--card-background-color) 92%, #ffffff);
    }

    .metric-ring.metric-icon{
      background: color-mix(in srgb, var(--metric-color) 15%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--metric-color) 16%, transparent);
    }

    .metric-ring.metric-icon::after{
      display: none;
    }

    .metric-ring.metric-icon ha-icon{
      --mdc-icon-size: 22px;
      color: var(--metric-color);
    }

    .metric-value{
      position: relative;
      z-index: 1;
      color: color-mix(in srgb, var(--primary-text-color) 74%, transparent);
      font-size: 12px;
      font-weight: 850;
      line-height: 1;
    }

    .metric-copy{
      min-width: 0;
    }

    .metric-label{
      color: color-mix(in srgb, var(--primary-text-color) 62%, transparent);
      font-size: 13px;
      font-weight: 850;
      line-height: 1.1;
    }

    .metric-range{
      margin-top: 4px;
      color: color-mix(in srgb, var(--primary-text-color) 38%, transparent);
      font-size: 10px;
      font-weight: 800;
      line-height: 1;
    }

    .metric-reading{
      margin-top: 3px;
      color: var(--primary-text-color);
      font-size: 13px;
      font-weight: 900;
      line-height: 1;
      white-space: nowrap;
    }

    .mobile-entities-section{
      gap: 22px;
    }

    .mobile-domain-group{
      min-width: 0;
      position: relative;
    }

    .mobile-domain-group.group-editing{
      border-radius: 8px;
      transition: opacity 0.16s ease, outline-color 0.16s ease, background-color 0.16s ease;
    }

    .mobile-domain-group.group-dragging{
      opacity: 0.46;
    }

    .mobile-domain-group.group-drag-over{
      outline: 2px solid var(--primary-color);
      outline-offset: 7px;
      background: color-mix(in srgb, var(--primary-color) 5%, transparent);
    }

    .mobile-domain-group:not(.menu-open){
      contain: layout style paint;
    }

    .mobile-domain-group.menu-open{
      z-index: 1200;
    }

    .mobile-domain-header{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 0 2px;
      margin-bottom: 10px;
    }

    .mobile-domain-title{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .mobile-domain-header-actions{
      display: inline-flex;
      align-items: center;
      gap: 2px;
      flex: 0 0 auto;
    }

    .mobile-domain-order-button,
.mobile-domain-drag-handle{
      width: 30px;
      height: 30px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 999px;
      background: color-mix(in srgb, var(--secondary-background-color) 78%, transparent);
      color: var(--secondary-text-color);
      cursor: pointer;
    }

    .mobile-domain-drag-handle{
      cursor: grab;
      touch-action: none;
    }

    .mobile-domain-drag-handle:active{
      cursor: grabbing;
    }

    .mobile-domain-order-button:disabled{
      opacity: 0.28;
      cursor: default;
    }

    .mobile-domain-order-button ha-icon,
.mobile-domain-drag-handle ha-icon{
      --mdc-icon-size: 18px;
    }

    .mobile-layout-toggle{
      width: 30px;
      height: 30px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border: 0;
      border-radius: 999px;
      background: color-mix(in srgb, var(--secondary-background-color) 72%, #ffffff);
      color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
      box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.05);
      cursor: pointer;
      transition:
        background-color 0.18s ease,
        color 0.18s ease,
        transform 0.18s ease;
    }

    .mobile-layout-toggle.active{
      background: #182044;
      color: #ffffff;
      box-shadow: 0 8px 18px rgba(15, 23, 42, 0.14);
    }

    .mobile-layout-toggle:active{
      transform: scale(0.94);
    }

    .mobile-layout-toggle ha-icon{
      --mdc-icon-size: 17px;
    }

    .mobile-layout-toggle.static{
      cursor: default;
      pointer-events: none;
    }

    .mobile-domain-title-copy{
      min-width: 0;
      display: inline-flex;
      align-items: baseline;
      gap: 7px;
    }

    .mobile-domain-title-label{
      color: var(--primary-text-color);
      font-size: 18px;
      font-weight: 900;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .mobile-domain-count{
      color: color-mix(in srgb, var(--primary-text-color) 42%, transparent);
      font-size: 12px;
      font-weight: 850;
      line-height: 1.1;
      white-space: nowrap;
    }

    .mobile-domain-master{
      --mobile-domain-accent: var(--primary-color);
      min-width: 58px;
      height: 30px;
      padding: 0 5px 0 7px;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
      border-radius: 999px;
      background: color-mix(in srgb, var(--card-background-color) 92%, transparent);
      color: color-mix(in srgb, var(--primary-text-color) 54%, transparent);
      cursor: pointer;
      transition:
        background-color 0.18s ease,
        border-color 0.18s ease,
        color 0.18s ease,
        transform 0.18s ease;
      z-index: 1202;
    }

    .mobile-domain-master.domain-light{
      --mobile-domain-accent: #e89a17;
    }

    .mobile-domain-master.domain-switch,
.mobile-domain-master.domain-input_boolean{
      --mobile-domain-accent: #3275d6;
    }

    .mobile-domain-master.domain-cover{
      --mobile-domain-accent: #0d98aa;
    }

    .mobile-domain-master.domain-fan{
      --mobile-domain-accent: #2d9d79;
    }

    .mobile-domain-master.domain-lock{
      --mobile-domain-accent: #7657c8;
    }

    .mobile-domain-master.active{
      border-color: color-mix(in srgb, var(--mobile-domain-accent) 42%, transparent);
      background: color-mix(in srgb, var(--mobile-domain-accent) 11%, var(--card-background-color));
      color: var(--mobile-domain-accent);
    }

    .mobile-domain-master:active{
      transform: scale(0.94);
    }

    .mobile-domain-master ha-icon{
      --mdc-icon-size: 16px;
    }

    .mobile-domain-master-track{
      position: relative;
      width: 26px;
      height: 16px;
      flex: 0 0 auto;
      border-radius: 999px;
      background: color-mix(in srgb, var(--primary-text-color) 18%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 6%, transparent);
      transition: background-color 0.18s ease;
    }

    .mobile-domain-master-track::after{
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 1px 4px rgba(15, 23, 42, 0.24);
      transition: transform 0.18s ease;
    }

    .mobile-domain-master.active .mobile-domain-master-track{
      background: var(--mobile-domain-accent);
    }

    .mobile-domain-master.active .mobile-domain-master-track::after{
      transform: translateX(10px);
    }

    .mobile-domain-master-actions{
      --mobile-domain-accent: var(--primary-color);
      height: 30px;
      display: inline-flex;
      align-items: center;
      overflow: hidden;
      border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
      border-radius: 999px;
      background: color-mix(in srgb, var(--card-background-color) 92%, transparent);
      color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
      z-index: 1202;
    }

    .mobile-domain-master-actions.domain-cover{
      --mobile-domain-accent: #0d98aa;
    }

    .mobile-domain-master-actions.domain-lock{
      --mobile-domain-accent: #7657c8;
    }

    .mobile-domain-master-action{
      width: 34px;
      height: 30px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: transparent;
      color: inherit;
      cursor: pointer;
      transition:
        background-color 0.18s ease,
        color 0.18s ease,
        transform 0.18s ease;
    }

    .mobile-domain-master-action + .mobile-domain-master-action{
      border-left: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
    }

    .mobile-domain-master-action:hover,
.mobile-domain-master-action.active{
      background: color-mix(in srgb, var(--mobile-domain-accent) 12%, var(--card-background-color));
      color: var(--mobile-domain-accent);
    }

    .mobile-domain-master-action:active{
      transform: scale(0.88);
    }

    .mobile-domain-master-action ha-icon{
      --mdc-icon-size: 17px;
    }

    .mobile-entity-rail{
      display: flex;
      gap: 10px;
      margin: 0 -10px;
      padding: 0 10px 2px;
      overflow-x: auto;
      scroll-padding: 10px;
      scroll-snap-type: x proximity;
      scrollbar-width: none;
    }

    .mobile-entity-rail::-webkit-scrollbar{
      display: none;
    }

    .mobile-entities-section.layout-grid{
      gap: 26px;
    }

    .mobile-entities-section.layout-grid .mobile-entity-rail{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin: 0;
      padding: 0;
      overflow: visible;
      scroll-snap-type: none;
      align-items: stretch;
    }

    .mobile-entities-section.layout-grid .mobile-entity-card{
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      flex: none;
      scroll-snap-align: none;
    }

    @media (max-width: 380px) {
      .mobile-entities-section.layout-grid .mobile-entity-rail{
        grid-template-columns: 1fr;
      }
    }

    .mobile-entity-card{
      --entity-color: var(--primary-color);
      position: relative;
      box-sizing: border-box;
      contain: layout style;
      flex: 0 0 164px;
      min-width: 0;
      min-height: 128px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      border: 0;
      border-radius: 10px;
      background: color-mix(in srgb, var(--card-background-color) 98%, #ffffff);
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      cursor: pointer;
      scroll-snap-align: start;
      box-shadow:
        0 12px 26px rgba(15, 23, 42, 0.06),
        inset 0 0 0 1px rgba(15, 23, 42, 0.035);
      transition:
        transform 0.18s ease,
        box-shadow 0.18s ease;
    }

    .mobile-entity-replacement-card{
      box-sizing: border-box;
      flex: 0 0 260px;
      min-width: 0;
      scroll-snap-align: start;
    }

    .mobile-entity-replacement-card dwains-dashboard-next-card-host{
      display: block;
      width: 100%;
    }

    .mobile-todo-list-card{
      box-sizing: border-box;
      flex: 0 0 min(100%, 520px);
      width: min(100%, 520px);
      min-width: min(100%, 320px);
      scroll-snap-align: start;
    }

    .mobile-todo-list-card dwains-dashboard-next-card-host{
      display: block;
      width: 100%;
    }

    .mobile-entities-section.layout-grid .mobile-entity-replacement-card{
      width: 100%;
      flex: none;
      scroll-snap-align: none;
    }

    .mobile-entities-section.layout-grid .mobile-todo-list-card{
      grid-column: 1 / -1;
      width: 100%;
      min-width: 0;
      flex: none;
      scroll-snap-align: none;
    }

    .mobile-entity-card:active{
      transform: scale(0.985);
      }

      .mobile-entity-card.is-active{
        box-shadow:
          0 14px 30px rgba(15, 23, 42, 0.08),
          inset 0 0 0 1px color-mix(in srgb, var(--entity-color) 18%, transparent);
      }

      .mobile-entity-card.is-unavailable{
        opacity: 0.62;
      }

    .mobile-entity-top{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
    }

    .mobile-entity-icon{
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

      .mobile-entity-icon ha-icon{
        --mdc-icon-size: 20px;
      }

      .mobile-entity-action{
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

      .mobile-entity-action:active{
        transform: scale(0.94);
      }

      .mobile-entity-action:disabled{
        opacity: 0.36;
        cursor: not-allowed;
      }

      .mobile-entity-toggle{
        width: 38px;
        height: 22px;
        justify-content: flex-start;
        border-radius: 999px;
        background: color-mix(in srgb, var(--secondary-background-color) 80%, #ffffff);
        box-shadow:
          inset 0 0 0 1px rgba(15, 23, 42, 0.07),
          0 4px 10px rgba(15, 23, 42, 0.08);
      }

    .mobile-entity-toggle::before{
      content: "";
      width: 18px;
      height: 18px;
      margin-left: 2px;
      border-radius: 999px;
      background: #ffffff;
      box-shadow: 0 2px 7px rgba(15, 23, 42, 0.2);
      transition: transform 0.18s ease;
      }

      .mobile-entity-card.is-active .mobile-entity-toggle{
        background: var(--entity-color);
      }

    .mobile-entity-card.is-active .mobile-entity-toggle::before{
      transform: translateX(16px);
    }

      .mobile-entity-more,
.mobile-scene-action,
.mobile-lock-action{
        width: 30px;
        height: 30px;
        border-radius: 999px;
        color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
        background: color-mix(in srgb, var(--secondary-background-color) 70%, #ffffff);
        box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.05);
      }

      .mobile-lock-action.is-unlocked{
        color: #ffffff;
        background: var(--entity-color);
        box-shadow: 0 8px 16px color-mix(in srgb, var(--entity-color) 24%, transparent);
      }

      .mobile-entity-more ha-icon,
.mobile-scene-action ha-icon,
.mobile-lock-action ha-icon{
        --mdc-icon-size: 17px;
      }

      .mobile-cover-actions{
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

      .mobile-cover-action{
        width: 26px;
        height: 26px;
        border-radius: 999px;
        color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
        background: transparent;
      }

      .mobile-cover-action.active{
        color: #ffffff;
        background: var(--entity-color);
        box-shadow: 0 6px 12px color-mix(in srgb, var(--entity-color) 22%, transparent);
      }

      .mobile-cover-action ha-icon{
        --mdc-icon-size: 16px;
      }

      .mobile-entities-section.layout-grid .mobile-cover-actions{
        min-height: 30px;
        padding: 3px;
        gap: 2px;
      }

      .mobile-entities-section.layout-grid .mobile-cover-action{
        width: 24px;
        height: 24px;
      }

      .mobile-entities-section.layout-grid .mobile-cover-action ha-icon{
        --mdc-icon-size: 15px;
      }

      @media (max-width: 430px) {
        .mobile-entities-section.layout-grid .mobile-entity-card{
          min-height: 138px;
          padding: 12px;
        }

        .mobile-entities-section.layout-grid .mobile-entity-top{
          gap: 6px;
        }

        .mobile-entities-section.layout-grid .mobile-entity-icon{
          width: 34px;
          height: 34px;
        }

        .mobile-entities-section.layout-grid .mobile-cover-actions{
          min-height: 28px;
          padding: 2px;
          gap: 1px;
        }

        .mobile-entities-section.layout-grid .mobile-cover-action{
          width: 23px;
          height: 23px;
        }

        .mobile-entities-section.layout-grid .mobile-cover-action ha-icon{
          --mdc-icon-size: 14px;
        }
      }

    .mobile-entity-meta{
      color: color-mix(in srgb, var(--primary-text-color) 42%, transparent);
      font-size: 10px;
      font-weight: 750;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

      .mobile-entity-name{
        margin-top: 3px;
        color: var(--primary-text-color);
        font-size: 15px;
        font-weight: 900;
      line-height: 1.08;
      overflow: hidden;
      display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .mobile-entity-status{
        margin-top: 5px;
        color: color-mix(in srgb, var(--primary-text-color) 46%, transparent);
        font-size: 11px;
        font-weight: 750;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .mobile-entity-content{
        min-width: 0;
      }

      .mobile-entity-card.has-inline-select{
        min-height: 170px;
        justify-content: flex-start;
        gap: 10px;
      }

      .mobile-entity-card.has-inline-select .mobile-entity-content{
        margin-top: auto;
      }

      .mobile-entity-card.has-inline-select .mobile-entity-status{
        display: none;
      }

      .mobile-entity-select{
        position: relative;
        display: block;
        width: 100%;
      }

      .mobile-entity-select select{
        width: 100%;
        height: 34px;
        padding: 0 34px 0 12px;
        border: 0;
        border-radius: 999px;
        outline: none;
        appearance: none;
        -webkit-appearance: none;
        color: var(--primary-text-color);
        background: color-mix(in srgb, var(--entity-color) 10%, var(--secondary-background-color));
        font: inherit;
        font-size: 12px;
        font-weight: 850;
        line-height: 34px;
        cursor: pointer;
        box-shadow:
          inset 0 0 0 1px color-mix(in srgb, var(--entity-color) 16%, transparent),
          0 8px 18px rgba(15, 23, 42, 0.06);
      }

      .mobile-entity-select select:focus{
        box-shadow:
          inset 0 0 0 2px color-mix(in srgb, var(--entity-color) 72%, transparent),
          0 10px 22px color-mix(in srgb, var(--entity-color) 14%, transparent);
      }

      .mobile-entity-select select:disabled{
        opacity: 0.55;
        cursor: not-allowed;
      }

      .mobile-entity-select ha-icon{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        color: color-mix(in srgb, var(--entity-color) 72%, var(--primary-text-color));
        pointer-events: none;
        --mdc-icon-size: 18px;
      }

    @media (min-width: 769px) {
      .area-view .dd-generated-card-wrap.editing,
.area-view .mobile-entities-section.layout-grid .dd-generated-card-wrap.editing{
        width: 100%;
        min-width: 0;
        flex: none;
        scroll-snap-align: none;
      }

      .area-view .mobile-entities-section{
        gap: 28px;
        margin-top: 20px;
      }

      .area-view .mobile-domain-group{
        min-width: 0;
      }

      .area-view .mobile-domain-header{
        padding: 0;
        margin-bottom: 12px;
      }

      .area-view .mobile-layout-toggle{
        display: none;
      }

      .area-view .mobile-domain-title{
        gap: 0;
      }

      .area-view .mobile-domain-title-label{
        font-size: 20px;
      }

      .area-view .mobile-domain-count{
        font-size: 12px;
      }

      .area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(178px, 1fr));
        gap: 14px;
        margin: 0;
        padding: 0;
        overflow: visible;
        scroll-padding: 0;
        scroll-snap-type: none;
        align-items: stretch;
      }

      .area-view .mobile-entity-card,
.area-view .mobile-entities-section.layout-grid .mobile-entity-card{
        width: 100%;
        min-width: 0;
        min-height: 152px;
        flex: none;
        padding: 16px;
        border-radius: 12px;
        scroll-snap-align: none;
      }

      .area-view .mobile-entity-card:hover{
        transform: translateY(-1px);
        box-shadow:
          0 16px 32px rgba(15, 23, 42, 0.08),
          inset 0 0 0 1px rgba(15, 23, 42, 0.045);
      }

      .area-view .mobile-entity-card.has-inline-select{
        min-height: 178px;
      }

      .area-view .mobile-entity-icon,
.area-view .mobile-entities-section.layout-grid .mobile-entity-icon{
        width: 38px;
        height: 38px;
        border-radius: 11px;
      }

      .area-view .mobile-entity-icon ha-icon{
        --mdc-icon-size: 21px;
      }

      .area-view .mobile-entity-name{
        font-size: 15px;
      }

      .area-view .mobile-entity-status{
        font-size: 11px;
      }

      .area-view .mobile-cover-actions,
.area-view .mobile-entities-section.layout-grid .mobile-cover-actions{
        min-height: 32px;
        padding: 3px;
        gap: 3px;
      }

      .area-view .mobile-cover-action,
.area-view .mobile-entities-section.layout-grid .mobile-cover-action{
        width: 26px;
        height: 26px;
      }

      .area-view .mobile-cover-action ha-icon,
.area-view .mobile-entities-section.layout-grid .mobile-cover-action ha-icon{
        --mdc-icon-size: 16px;
      }

      .area-view .mobile-entity-rail .dd-custom-card-wrap,
.area-view .mobile-entity-rail .dd-domain-add-card,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail .dd-custom-card-wrap,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card{
        width: 100%;
        min-width: 0;
        flex: none;
        scroll-snap-align: none;
      }

      .area-view .mobile-todo-list-card,
.area-view .mobile-entities-section.layout-grid .mobile-todo-list-card{
        grid-column: 1 / -1;
        width: 100%;
        max-width: 760px;
        min-width: 0;
        flex: none;
        scroll-snap-align: none;
      }
    }

    /* Bewerk-toggle in de area-header */
    .area-header{ display: flex; align-items: center; gap: 8px; }
    .dd-edit-toggle{
      margin-left: auto;
      display: inline-flex; align-items: center; justify-content: center;
      width: 38px; height: 38px; border-radius: 50%;
      border: none; cursor: pointer;
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      transition: background-color .2s ease, color .2s ease;
    }
    .dd-edit-toggle:hover{ background: rgba(var(--rgb-primary-color, 3,169,244), .14); }
    .dd-edit-toggle.active{ background: var(--primary-color); color: var(--text-primary-color, #fff); }
    .dd-edit-toggle.danger:hover{ background: rgba(var(--rgb-error-color, 244,67,54), .16); color: var(--error-color, #f44336); }
    .dd-edit-toggle ha-icon{ --mdc-icon-size: 20px; }

    /* Sidebar: blueprint-pagina's + toevoegknop */
    .sidebar-divider{
      height: 1px;
      background: var(--divider-color);
      margin: 8px 12px;
    }
    .dd-add-page{
      width: 100%;
      box-sizing: border-box;
      margin-top: 12px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px;
      border: 1px dashed var(--divider-color);
      border-radius: 10px;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      font-size: 14px;
      transition: background-color .2s ease, color .2s ease, border-color .2s ease;
    }
    .dd-add-page:hover{
      color: var(--primary-color);
      border-color: var(--primary-color);
      background: rgba(var(--rgb-primary-color, 3,169,244), .08);
    }
    .dd-add-page ha-icon{ --mdc-icon-size: 20px; }

    /* Blueprint-paginakaart */
    .dd-page-card{ margin-top: 8px; }
    .dd-page-card dwains-dashboard-next-card-host{ display: block; }

    /* Area custom card slots */
    .dd-custom-section{
      margin: 12px 0;
      min-width: 0;
    }

    .dd-custom-section.after-domain{
      margin: 12px 0 2px;
    }

    .dd-custom-section.editing{
      padding: 10px;
      border: 1px dashed color-mix(in srgb, var(--primary-color) 28%, transparent);
      border-radius: 12px;
      background: color-mix(in srgb, var(--primary-color) 4%, transparent);
    }

    .dd-custom-section.drag-over{
      border-color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 22%, transparent);
    }

    .dd-custom-slot-head{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 8px;
      color: color-mix(in srgb, var(--primary-text-color) 60%, transparent);
      font-size: 12px;
      font-weight: 800;
      line-height: 1.2;
    }

    .dd-custom-slot-title{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }

    .dd-custom-slot-title ha-icon{
      --mdc-icon-size: 16px;
      color: var(--primary-color);
    }

    .dd-custom-slot-title span{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dd-custom-grid{
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 8px;
      container-type: inline-size;
    }

    .dd-custom-grid > .dd-custom-card-wrap,
.dd-custom-grid > .dd-add-card{
      --dd-card-default-column: span 4;
      grid-column: var(--dd-card-grid-column, var(--dd-card-default-column));
      min-height: var(--dd-card-grid-min-height, 0);
    }

    .dd-custom-card-wrap{
      position: relative;
      min-width: 0;
      border-radius: 12px;
    }

    .dd-custom-card-wrap.editing{
      outline: 1px solid color-mix(in srgb, var(--divider-color) 78%, transparent);
      outline-offset: 2px;
      cursor: grab;
    }

    .dd-generated-card-wrap{
      display: contents;
    }

    .dd-generated-card-wrap.editing{
      position: relative;
      display: block;
      box-sizing: border-box;
      flex: 0 0 164px;
      min-width: 0;
      scroll-snap-align: start;
      cursor: grab;
      outline: 1px dashed color-mix(in srgb, var(--primary-color) 38%, var(--divider-color));
      outline-offset: 2px;
      border-radius: 12px;
      transition: opacity 0.16s ease, outline-color 0.16s ease, transform 0.16s ease;
    }

    .dd-generated-card-wrap.editing > .mobile-entity-card,
.dd-generated-card-wrap.editing > .mobile-entity-replacement-card,
.dd-generated-card-wrap.editing > .mobile-todo-list-card{
      width: 100%;
      min-width: 0;
      pointer-events: none;
    }

    .dd-generated-card-wrap.editing.is-hidden > :not(.dd-generated-card-toolbar){
      opacity: 0.38;
      filter: saturate(0.45);
    }

    .dd-generated-card-wrap.editing.dragging{
      opacity: 0.42;
      cursor: grabbing;
    }

    .dd-generated-card-wrap.editing.drag-over{
      outline-color: var(--primary-color);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color) 14%, transparent);
      transform: translateY(-2px);
    }

    .dd-generated-card-toolbar{
      position: absolute;
      top: 7px;
      right: 7px;
      z-index: 6;
      display: flex;
      gap: 4px;
      padding: 3px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--card-background-color) 94%, transparent);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    .dd-generated-card-toolbar button{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      padding: 0;
      border: 0;
      border-radius: 50%;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
    }

    .dd-generated-card-toolbar button:first-child{
      color: var(--primary-color);
      cursor: grab;
    }

    .dd-generated-card-toolbar button:hover,
.dd-generated-card-toolbar button:focus-visible{
      background: color-mix(in srgb, var(--primary-color) 12%, transparent);
      outline: none;
    }

    .dd-generated-card-toolbar ha-icon{
      --mdc-icon-size: 17px;
    }

    .mobile-entities-section.layout-grid .dd-generated-card-wrap.editing{
      width: 100%;
      min-width: 0;
      flex: none;
      scroll-snap-align: none;
    }

    .dd-custom-card-wrap.dragging{
      opacity: 0.48;
      cursor: grabbing;
    }

    .dd-custom-card-wrap.drag-over{
      outline-color: var(--primary-color);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color) 12%, transparent);
    }

    .dd-card-toolbar{
      position: absolute; top: 6px; right: 6px; z-index: 4;
      display: none; gap: 4px;
    }
    .dd-custom-card-wrap.editing .dd-card-toolbar{ display: flex; }
    .dd-card-toolbar button{
      display: inline-flex; align-items: center; justify-content: center;
      width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer;
      background: var(--card-background-color);
      box-shadow: 0 1px 4px rgba(0,0,0,.2);
      color: var(--primary-text-color);
    }
    .dd-card-toolbar button.del:hover{ color: var(--error-color, #f44336); }
    .dd-card-toolbar ha-icon{ --mdc-icon-size: 18px; }

    .dd-card-toolbar button.drag{
      cursor: grab;
      color: var(--primary-color);
    }

    .dd-card-toolbar button.drag:active{
      cursor: grabbing;
    }

    .dd-add-card-inline,
.dd-add-card{
      display: flex; align-items: center; justify-content: center; gap: 8px;
      min-height: 72px; width: 100%;
      border: 2px dashed var(--divider-color); border-radius: 12px;
      background: transparent; cursor: pointer;
      color: var(--secondary-text-color); font-weight: 600; font-size: .9rem;
      transition: border-color .2s ease, color .2s ease, background-color .2s ease;
    }
    .dd-add-card:hover{
      border-color: var(--primary-color); color: var(--primary-color);
      background: rgba(var(--rgb-primary-color, 3,169,244), .06);
    }

    .dd-add-card-inline{
      min-height: 32px;
      width: auto;
      padding: 0 12px;
      border-radius: 999px;
      border-width: 1px;
      font-size: 12px;
      white-space: nowrap;
    }

    .dd-add-card-inline ha-icon{
      --mdc-icon-size: 16px;
    }

    .dd-add-card ha-icon{ --mdc-icon-size: 22px; }

    .dd-domain-add-card{
      min-height: 72px;
      border-width: 1px;
      background: color-mix(in srgb, var(--secondary-background-color) 54%, transparent);
      opacity: 0.82;
    }

    .dd-domain-add-card:hover,
.dd-domain-add-card.drag-over{
      opacity: 1;
      border-color: var(--primary-color);
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 8%, var(--card-background-color));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 18%, transparent);
    }

    .entities-grid .dd-custom-card-wrap,
.entities-grid .dd-domain-add-card{
      min-width: 0;
    }

    .entities-grid > .dd-custom-card-wrap.dd-grid-full,
.mobile-entities-section.layout-grid .mobile-entity-rail > .dd-custom-card-wrap.dd-grid-full{
      grid-column: 1 / -1;
      width: 100%;
    }

    .mobile-entity-rail .dd-custom-card-wrap,
.mobile-entity-rail .dd-domain-add-card{
      box-sizing: border-box;
      flex: 0 0 164px;
      min-width: 0;
      scroll-snap-align: start;
    }

    .mobile-entity-rail > .dd-custom-card-wrap.dd-grid-full{
      flex-basis: calc(100% - 20px);
    }

    .mobile-entity-rail .dd-domain-add-card{
      min-height: 128px;
    }

    .mobile-entities-section.layout-grid .mobile-entity-rail .dd-custom-card-wrap,
.mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card{
      width: 100%;
      flex: none;
      scroll-snap-align: none;
    }

    .mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card{
      min-height: 138px;
    }

    @container (max-width: 899px) {
      .dd-custom-grid > .dd-custom-card-wrap,
.dd-custom-grid > .dd-add-card{
        --dd-card-default-column: span 6;
      }
    }

    @container (max-width: 559px) {
      .dd-custom-grid > .dd-custom-card-wrap,
.dd-custom-grid > .dd-add-card{
        --dd-card-default-column: span 12;
      }
    }

    .entity-card-wrapper.loading{
      background: var(--secondary-background-color);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Loading skeleton */
    .skeleton{
      background: linear-gradient(90deg,
        var(--secondary-background-color) 25%,
        var(--primary-background-color) 50%,
        var(--secondary-background-color) 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 8px;
    }

    @keyframes loading {
      0%{ background-position: 200% 0; }
      100%{ background-position: -200% 0; }
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .sidebar{
        position: fixed;
        right: 0;
        top: 0;
        width: 280px;
        flex-basis: auto;
        height: 100%;
        transform: translateX(100%);
        z-index: 121;
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
      }

      .sidebar-resize-handle{
        display: none;
      }

      .sidebar-collapse-toggle{
        display: none;
      }

      .floor-areas{
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      .area-button{
        margin-bottom: 8px;
      }

      .sidebar.open{
        transform: translateX(0);
      }

      .mobile-nav-overlay{
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        z-index: 120;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }

      .mobile-nav-overlay.open{
        opacity: 1;
        pointer-events: auto;
      }

      .global-header{
        padding: 12px;
      }

      .header-time{
        font-size: 20px;
      }



      .entities-grid{
        grid-template-columns: 1fr;
      }

      .global-header.mobile .header-expand-button[data-extra-count]::after{
        right: -8px;
      }

      .mobile-home-section,
.home-camera-section,
.home-status-section,
.home-todos-section,
.home-custom-cards-section,
.home-favorites-section,
.home-summaries-section,
.mobile-domain-group,
.mobile-entities-section.layout-grid .mobile-entity-card{
        content-visibility: visible;
        contain-intrinsic-size: auto;
      }
    }

    /* Favorites Section */
    .favorites-section{
      margin-bottom: 24px;
    }

    .favorites-header{
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      font-size: 18px;
      font-weight: 500;
    }

    .favorites-grid{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 8px;
    }

    .favorite-card-wrapper{
      --favorite-color: var(--primary-color);
      appearance: none;
      position: relative;
      box-sizing: border-box;
      min-width: 0;
      min-height: 116px;
      padding: 14px 14px 13px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      border: 0;
      border-radius: 9px;
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
        box-shadow 0.18s ease,
        background-color 0.18s ease;
    }

    .favorite-card-wrapper:hover{
      transform: translateY(-2px);
      box-shadow:
        0 16px 30px rgba(15, 23, 42, 0.1),
        inset 0 0 0 1px color-mix(in srgb, var(--favorite-color) 20%, transparent);
    }

    .favorite-card-wrapper:active{
      transform: scale(0.985);
    }

    .favorite-card-wrapper:focus-visible,
.favorite-quick-action:focus-visible{
      outline: 2px solid color-mix(in srgb, var(--favorite-color) 72%, #ffffff);
      outline-offset: 3px;
    }

    .favorite-card-wrapper.is-off,
.favorite-card-wrapper.is-idle{
      --favorite-color: color-mix(in srgb, var(--secondary-text-color) 56%, var(--primary-color));
    }

    .favorite-card-wrapper.favorite-light{
      --favorite-color: #e1a129;
    }

    .favorite-card-wrapper.favorite-switch{
      --favorite-color: #2f6fd6;
    }

    .favorite-card-wrapper.favorite-cover{
      --favorite-color: #d98928;
    }

    .favorite-card-wrapper.favorite-binary_sensor,
.favorite-card-wrapper.favorite-motion{
      --favorite-color: #6d7891;
    }

    .favorite-card-wrapper.favorite-climate,
.favorite-card-wrapper.favorite-weather{
      --favorite-color: #34a6d8;
    }

    .favorite-card-wrapper.favorite-media_player{
      --favorite-color: #7c67c7;
    }

    .favorite-card-wrapper.favorite-person{
      --favorite-color: #3f9b6d;
    }

    .favorite-card-wrapper.favorite-sun{
      --favorite-color: #2d7eea;
    }

    .favorite-top,
.favorite-body{
      position: relative;
      z-index: 1;
    }

    .favorite-top{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .favorite-icon{
      width: 31px;
      height: 34px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 10px;
      color: var(--favorite-color);
      background: color-mix(in srgb, var(--favorite-color) 13%, transparent);
    }

    .favorite-icon ha-icon{
      --mdc-icon-size: 19px;
    }

    .favorite-quick-action{
      --toggle-track: color-mix(in srgb, var(--secondary-background-color) 80%, #ffffff);
      width: 38px;
      height: 22px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      flex: 0 0 auto;
      border: 0;
      border-radius: 999px;
      color: transparent;
      background: var(--toggle-track);
      box-shadow:
        inset 0 0 0 1px rgba(15, 23, 42, 0.07),
        0 4px 10px rgba(15, 23, 42, 0.08);
      font: inherit;
      cursor: pointer;
      transition:
        transform 0.18s ease,
        background-color 0.18s ease;
    }

    .favorite-quick-action::before{
      content: "";
      width: 18px;
      height: 18px;
      margin-left: 2px;
      border-radius: 999px;
      background: #ffffff;
      box-shadow: 0 2px 7px rgba(15, 23, 42, 0.2);
      transition:
        transform 0.18s ease,
        background-color 0.18s ease;
    }

    .favorite-card-wrapper.is-active .favorite-quick-action{
      background: var(--favorite-color);
    }

    .favorite-card-wrapper.is-active .favorite-quick-action::before{
      transform: translateX(16px);
    }

    .favorite-card-wrapper.info-only .favorite-quick-action{
      width: 30px;
      height: 30px;
      justify-content: center;
      color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
      background: color-mix(in srgb, var(--secondary-background-color) 70%, #ffffff);
      box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.05);
    }

    .favorite-card-wrapper.info-only .favorite-quick-action::before{
      display: none;
    }

    .favorite-card-wrapper.info-only .favorite-quick-action ha-icon{
      display: block;
      --mdc-icon-size: 17px;
    }

    .favorite-quick-action ha-icon{
      display: none;
    }

    .favorite-quick-action:active{
      transform: scale(0.94);
    }

    .favorite-name{
      color: inherit;
      margin-top: 2px;
      font-size: 14px;
      font-weight: 850;
      line-height: 1.08;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .favorite-state{
      margin-top: 0;
      color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
      font-size: 10px;
      font-weight: 750;
      line-height: 1.15;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .favorite-area{
      margin-top: 0;
      color: color-mix(in srgb, var(--primary-text-color) 46%, transparent);
      font-size: 10px;
      font-weight: 750;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :host([data-theme-dark]){
      .favorite-card-wrapper {
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 90%, #ffffff 4%),
            color-mix(in srgb, var(--card-background-color) 98%, #000000 3%));
        box-shadow:
          0 14px 30px rgba(0, 0, 0, 0.28),
          inset 0 1px 0 rgba(255, 255, 255, 0.045),
          inset 0 0 0 1px rgba(255, 255, 255, 0.045);
      }

      .favorite-card-wrapper:hover {
        box-shadow:
          0 18px 34px rgba(0, 0, 0, 0.36),
          inset 0 0 0 1px color-mix(in srgb, var(--favorite-color) 30%, transparent);
      }

      .favorite-quick-action {
        --toggle-track: rgba(255, 255, 255, 0.14);
        box-shadow:
          inset 0 0 0 1px rgba(255, 255, 255, 0.08),
          0 5px 12px rgba(0, 0, 0, 0.28);
      }

      .favorite-card-wrapper.info-only .favorite-quick-action {
        background: rgba(255, 255, 255, 0.1);
        color: rgba(248, 250, 252, 0.82);
      }
    }


    /* Toast Notification */
    .toast{
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary-color);
      color: var(--text-primary-color);
      padding: 12px 24px;
      border-radius: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .toast.show{
      opacity: 1;
    }

    /* Confirmation Dialog */
    .confirmation-dialog{
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      background: rgba(0, 0, 0, 0.48);
      backdrop-filter: blur(2px);
      z-index: 1100;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.18s ease;
    }

    .confirmation-dialog.show{
      opacity: 1;
      pointer-events: auto;
    }

    .confirmation-content{
      box-sizing: border-box;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 20px;
      width: min(420px, calc(100vw - 32px));
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.28);
      outline: none;
      transform: scale(0.96);
      transition: transform 0.18s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .confirmation-dialog.show .confirmation-content{
      transform: scale(1);
    }

    .confirmation-title{
      font-size: 18px;
      font-weight: 700;
      line-height: 1.25;
      margin-bottom: 8px;
    }

    .confirmation-message{
      margin-bottom: 20px;
      color: var(--secondary-text-color);
      font-size: 14px;
      line-height: 1.5;
    }

    .confirmation-actions{
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    .notifications-overlay{
      position: fixed;
      inset: 0;
      z-index: 1040;
      opacity: 0;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.42);
      backdrop-filter: blur(2px);
      transition: opacity 0.22s ease;
    }

    .notifications-overlay.open{
      opacity: 1;
      pointer-events: auto;
    }

    .notifications-panel{
      position: fixed;
      left: 50%;
      top: 50%;
      z-index: 1041;
      width: min(520px, calc(100vw - 48px));
      max-height: min(78vh, 620px);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border-radius: 8px;
      border: 1px solid rgba(15, 23, 42, 0.08);
      background: color-mix(in srgb, var(--card-background-color) 96%, transparent);
      box-shadow: 0 24px 60px rgba(15, 23, 42, 0.28);
      backdrop-filter: blur(22px);
      transform: translate3d(-50%, -46%, 0) scale(0.96);
      opacity: 0;
      pointer-events: none;
      transition:
        transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1),
        opacity 0.2s ease;
    }

    .notifications-panel.open{
      transform: translate3d(-50%, -50%, 0) scale(1);
      opacity: 1;
      pointer-events: auto;
    }

    .notifications-panel::before{
      content: "";
      width: 42px;
      height: 4px;
      margin: 10px auto 2px;
      flex: 0 0 auto;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.14);
    }

    .notifications-head{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 12px 14px 10px;
      border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    }

    .notifications-title{
      min-width: 0;
    }

    .notifications-title-row{
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--primary-text-color);
      font-size: 16px;
      font-weight: 850;
      line-height: 1.15;
    }

    .notifications-title-row ha-icon{
      color: var(--primary-color);
      --mdc-icon-size: 20px;
    }

    .notifications-subtitle{
      margin-top: 3px;
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 600;
      line-height: 1.2;
    }

    .notifications-actions{
      display: flex;
      align-items: center;
      gap: 6px;
      flex: 0 0 auto;
    }

    .notifications-icon-button,
.notification-dismiss{
      border: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      color: var(--primary-text-color);
      background: var(--secondary-background-color);
      -webkit-tap-highlight-color: transparent;
    }

    .notifications-icon-button{
      width: 34px;
      height: 34px;
    }

    .notifications-icon-button ha-icon{
      --mdc-icon-size: 18px;
    }

    .notifications-list{
      overflow-y: auto;
      padding: 10px;
    }

    .notification-row{
      display: grid;
      grid-template-columns: 38px minmax(0, 1fr) auto;
      gap: 10px;
      align-items: start;
      padding: 11px 10px;
      margin-bottom: 8px;
      border: 1px solid rgba(15, 23, 42, 0.06);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.78);
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
    }

    .notification-row:last-child{
      margin-bottom: 0;
    }

    .notification-icon{
      width: 38px;
      height: 38px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.11);
      color: var(--primary-color);
    }

    .notification-icon ha-icon{
      --mdc-icon-size: 21px;
    }

    .notification-title{
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 800;
      line-height: 1.2;
      overflow-wrap: anywhere;
    }

    .notification-message{
      margin-top: 4px;
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.35;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    .notification-date{
      margin-top: 7px;
      color: color-mix(in srgb, var(--secondary-text-color) 74%, transparent);
      font-size: 11px;
      font-weight: 650;
    }

    .notification-dismiss{
      width: 32px;
      height: 32px;
      color: var(--secondary-text-color);
      background: rgba(0, 0, 0, 0.05);
    }

    .notification-dismiss ha-icon{
      --mdc-icon-size: 17px;
    }

    .notifications-empty,
.notifications-error,
.notifications-loading{
      min-height: 130px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 24px 18px;
      color: var(--secondary-text-color);
      text-align: center;
      font-size: 13px;
      font-weight: 600;
    }

    .notifications-empty ha-icon,
.notifications-error ha-icon,
.notifications-loading ha-icon{
      --mdc-icon-size: 28px;
      color: var(--primary-color);
    }

    @media (max-width: 1024px) {
      .notifications-panel{
        top: auto;
        bottom: calc(18px + env(safe-area-inset-bottom, 0px));
        width: min(460px, calc(100vw - 28px));
        max-height: min(70vh, 620px);
        transform: translate3d(-50%, calc(100% + 48px), 0);
      }

      .notifications-panel.open{
        transform: translate3d(-50%, 0, 0);
      }
    }

    .confirmation-button{
      min-height: 40px;
      padding: 9px 16px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 650;
      transition: transform 0.16s ease, box-shadow 0.16s ease;
    }

    .confirmation-button.cancel{
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }

    .confirmation-button.confirm{
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    .confirmation-button.confirm.destructive{
      background: var(--error-color, #db4437);
      color: #fff;
    }

    .confirmation-button:hover{
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    /* Area Badges Styling */
    .area-badges{
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 0px; /* 16px;*/
    }

    .area-badge{
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
      cursor: default;
      background: color-mix(in srgb, var(--area-badge-color, var(--primary-color)) 10%, var(--card-background-color));
      color: var(--area-badge-color, var(--primary-text-color));
      border: 1px solid color-mix(in srgb, var(--area-badge-color, var(--divider-color)) 20%, transparent);
    }

    .area-badge ha-icon{
      --mdc-icon-size: 18px;
    }

    /* Domain-specific badge colors */
    .area-badge.light{
      background: color-mix(in srgb, var(--area-badge-color, #e1a129) 10%, var(--card-background-color));
      color: var(--area-badge-color, #e1a129);
      border-color: color-mix(in srgb, var(--area-badge-color, #e1a129) 20%, transparent);
    }

    .area-badge.switch{
      background: color-mix(in srgb, var(--area-badge-color, #2f6fd6) 10%, var(--card-background-color));
      color: var(--area-badge-color, #2f6fd6);
      border-color: color-mix(in srgb, var(--area-badge-color, #2f6fd6) 20%, transparent);
    }

    .area-badge.climate{
      background: color-mix(in srgb, var(--area-badge-color, #34a6d8) 10%, var(--card-background-color));
      color: var(--area-badge-color, #34a6d8);
      border-color: color-mix(in srgb, var(--area-badge-color, #34a6d8) 20%, transparent);
    }

    .area-badge.motion.active{
      background: color-mix(in srgb, var(--area-badge-color, #6d7891) 10%, var(--card-background-color));
      color: var(--area-badge-color, #6d7891);
      border-color: color-mix(in srgb, var(--area-badge-color, #6d7891) 20%, transparent);
    }

    .area-badge.cover{
      background: color-mix(in srgb, var(--area-badge-color, #d98928) 10%, var(--card-background-color));
      color: var(--area-badge-color, #d98928);
      border-color: color-mix(in srgb, var(--area-badge-color, #d98928) 20%, transparent);
    }

    .area-badge.media_player{
      background: color-mix(in srgb, var(--area-badge-color, #7c67c7) 10%, var(--card-background-color));
      color: var(--area-badge-color, #7c67c7);
      border-color: color-mix(in srgb, var(--area-badge-color, #7c67c7) 20%, transparent);
    }

    .area-badge.temperature{
      background: color-mix(in srgb, var(--cyan-color) 10%, var(--card-background-color));
      color: var(--cyan-color);
      border-color: color-mix(in srgb, var(--cyan-color) 20%, transparent);
    }

    .area-badge.humidity{
      background: color-mix(in srgb, var(--blue-color) 10%, var(--card-background-color));
      color: var(--blue-color);
      border-color: color-mix(in srgb, var(--blue-color) 20%, transparent);
    }

    .area-badge.wattage{
      background: color-mix(in srgb, var(--yellow-color) 10%, var(--card-background-color));
      color: var(--yellow-color);
      border-color: color-mix(in srgb, var(--yellow-color) 20%, transparent);
    }

    .area-badge.energy{
      background: color-mix(in srgb, var(--indigo-color) 10%, var(--card-background-color));
      color: var(--indigo-color);
      border-color: color-mix(in srgb, var(--indigo-color) 20%, transparent);
    }

    /* Toggle button badges */
    .area-badge.light-toggle,
.area-badge.switch-toggle{
      cursor: pointer;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-color: var(--primary-color);
    }

    .area-badge.light-toggle:hover,
.area-badge.switch-toggle:hover{
      background: color-mix(in srgb, var(--primary-color) 90%, black);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .area-badges{
        padding: 12px;
        gap: 6px;
      }

      .area-badge{
        padding: 6px 10px;
        font-size: 13px;
      }

      .area-badge ha-icon{
        --mdc-icon-size: 16px;
      }
    }

    /* Header Expanded Content Styling */
    .global-header.expanded{
      border-bottom: 2px solid var(--primary-color);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .header-expanded-content{
      background: var(--card-background-color);
      padding: 16px;
      border-top: 1px solid var(--divider-color);
      animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
      from{
        opacity: 0;
        transform: translateY(-10px);
      }
      to{
        opacity: 1;
        transform: translateY(0);
      }
    }

    .header-expanded-content .header-favorites{
      max-width: 100%;
    }

    /* Favorites Section Styling */
    .favorites-section{
      width: 100%;
    }

    .favorites-header{
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--divider-color);
    }

    .favorites-header ha-icon{
      --mdc-icon-size: 20px;
      color: var(--primary-color);
    }

    .favorites-header h3{
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .favorites-grid{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
      width: 100%;
    }

    .favorite-tile-wrapper{
      width: 100%;
      min-height: 60px;
    }

    .favorite-tile{
      width: 100% !important;
      height: auto !important;
    }

    .no-favorites{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 24px;
      color: var(--secondary-text-color);
      background: var(--secondary-background-color);
      border-radius: 8px;
      border: 1px dashed var(--divider-color);
    }

    .no-favorites ha-icon{
      --mdc-icon-size: 32px;
      margin-bottom: 8px;
      opacity: 0.6;
    }

    .no-favorites p{
      margin: 0;
      font-size: 14px;
    }

    /* Header Expand Button Enhanced Styling */
    .header-expand-button{
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
      background: var(--card-background-color);
      color: var(--primary-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 10;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .header-expand-button:hover{
      background: var(--primary-color);
      color: var(--text-primary-color);
      transform: translateX(-50%) translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .header-expand-button ha-icon{
      --mdc-icon-size: 20px;
      transition: transform 0.3s ease;
    }

    .global-header.expanded .header-expand-button{
      bottom: -20px;
    }

    /* Mobile specific adjustments for expanded header */
    @media (max-width: 768px) {
      .header-expanded-content{
        padding: 12px;
      }

      .favorites-grid{
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 8px;
      }

      .header-expand-button{
        width: 36px;
        height: 36px;
        bottom: -18px;
      }

      .header-expand-button ha-icon{
        --mdc-icon-size: 18px;
      }
    }

    /* Home and header status cards */
    .home-status-card,
.status-card-compact{
      --status-color: var(--primary-color);
      --status-bg: color-mix(in srgb, var(--status-color) 16%, transparent);
    }

    .home-status-card.cover,
.status-card-compact.cover{
      --status-color: #d98928;
    }

    .home-status-card.binary_sensor,
.home-status-card.motion,
.status-card-compact.binary_sensor,
.status-card-compact.motion{
      --status-color: #6d7891;
    }

    .home-status-card.light,
.status-card-compact.light{
      --status-color: #e1a129;
    }

    .home-status-card.switch,
.status-card-compact.switch{
      --status-color: #2f6fd6;
    }

    .home-status-card.climate,
.home-status-card.house-climate-card,
.status-card-compact.climate{
      --status-color: #34a6d8;
    }

    .home-status-card.person,
.status-card-compact.person{
      --status-color: #3f9b6d;
    }

    .home-status-card.media_player,
.status-card-compact.media_player{
      --status-color: #7c67c7;
    }

    .home-status-card.fan,
.status-card-compact.fan{
      --status-color: #16a6b6;
    }

    .home-status-card.wattage,
.home-status-card.house-power-card,
.home-status-card.energy,
.status-card-compact.wattage,
.status-card-compact.energy{
      --status-color: #d88e20;
    }

    .home-status-grid{
      grid-template-columns: repeat(auto-fill, minmax(150px, 170px));
      justify-content: start;
      gap: 12px;
    }

    .home-status-card{
      min-height: 134px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      padding: 16px;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      background: var(--card-background-color);
      text-align: left;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    .home-status-card::before{
      top: auto;
      left: 16px;
      right: 16px;
      bottom: 0;
      height: 3px;
      border-radius: 3px 3px 0 0;
      background: var(--status-color);
      opacity: 0.55;
    }

    .home-status-card:hover{
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--status-color) 40%, transparent);
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
    }

    .home-status-card:hover::before{
      opacity: 0.85;
    }

    .home-status-card .status-card-icon{
      width: 48px;
      height: 48px;
      margin: 0 0 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: var(--status-bg);
    }

    .home-status-card .status-card-icon ha-icon{
      --mdc-icon-size: 25px;
      color: var(--status-color);
      transform: none;
    }

    .home-status-card:hover .status-card-icon ha-icon{
      transform: none;
    }

    .home-status-card .status-card-badge{
      top: -8px;
      right: -8px;
      width: auto;
      min-width: 24px;
      height: 24px;
      padding: 0 7px;
      border-radius: 999px;
      background: var(--status-color);
      color: #fff;
      font-size: 12px;
      font-weight: 800;
      box-shadow: 0 5px 12px color-mix(in srgb, var(--status-color) 28%, transparent);
    }

    .home-status-card .status-card-title{
      margin: auto 0 0;
      color: var(--primary-text-color);
      font-size: 16px;
      font-weight: 800;
      line-height: 1.15;
      text-align: left;
    }

    .home-status-card.has-value .status-card-title{
      margin-top: 2px;
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 800;
    }

    .home-status-card .status-card-value{
      margin: auto 0 0;
      color: var(--primary-text-color);
      font-size: 22px;
      font-weight: 900;
      line-height: 1;
      letter-spacing: 0;
      white-space: nowrap;
    }

    .home-status-card.house-persons-card{
      --status-color: #182044;
      grid-column: span 2;
      min-width: 240px;
      gap: 12px;
    }

    .home-status-card.house-power-card{
      --status-color: #d88e20;
      grid-column: span 2;
      min-width: 270px;
      gap: 12px;
    }

    .home-status-card.house-climate-card{
      --status-color: #34a6d8;
      grid-column: span 2;
      min-width: 270px;
      gap: 12px;
    }

    .house-persons-head{
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .home-status-card.house-persons-card .house-persons-icon,
.home-status-card.house-climate-card .house-climate-icon,
.home-status-card.house-power-card .house-power-icon{
      width: 42px;
      height: 42px;
      margin: 0;
      flex: 0 0 auto;
      border-radius: 13px;
    }

    .house-persons-copy,
.house-climate-copy,
.house-power-copy{
      min-width: 0;
      text-align: left;
    }

    .house-persons-title,
.house-climate-title,
.house-power-title{
      color: var(--primary-text-color);
      font-size: 15px;
      font-weight: 850;
      line-height: 1.1;
    }

    .house-persons-subtitle,
.house-persons-empty,
.house-climate-subtitle,
.house-power-subtitle,
.house-power-empty{
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.25;
    }

    .house-climate-head{
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .house-climate-grid{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
    }

    .house-climate-metric{
      min-width: 0;
      min-height: 48px;
      padding: 8px 9px;
      border: 0;
      border-radius: 12px;
      display: grid;
      grid-template-columns: 26px minmax(0, 1fr);
      align-items: center;
      column-gap: 8px;
      background: color-mix(in srgb, var(--metric-color) 12%, var(--card-background-color));
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      cursor: pointer;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--metric-color) 14%, transparent);
      transition:
        transform 0.18s ease,
        background-color 0.18s ease;
    }

    .house-climate-metric:active{
      transform: scale(0.97);
    }

    .house-climate-metric-icon{
      width: 26px;
      height: 26px;
      border-radius: 9px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--metric-color) 18%, transparent);
      color: var(--metric-color);
    }

    .house-climate-metric-icon ha-icon{
      --mdc-icon-size: 16px;
    }

    .house-climate-metric-copy{
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .house-climate-metric-value,
.house-climate-metric-label{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.1;
    }

    .house-climate-metric-value{
      font-size: 14px;
      font-weight: 900;
      color: var(--primary-text-color);
    }

    .house-climate-metric-label{
      font-size: 10px;
      font-weight: 750;
      color: var(--secondary-text-color);
    }

    .house-power-head{
      width: 100%;
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      gap: 10px;
    }

    .house-power-total{
      color: var(--primary-text-color);
      font-size: 22px;
      font-weight: 950;
      line-height: 1;
      white-space: nowrap;
    }

    .house-power-list{
      width: 100%;
      display: grid;
      gap: 7px;
    }

    .house-power-room{
      display: grid;
      grid-template-columns: 26px minmax(0, 1fr) auto;
      align-items: center;
      column-gap: 8px;
      row-gap: 4px;
    }

    .house-power-room-icon{
      width: 26px;
      height: 26px;
      grid-row: span 2;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 9px;
      background: color-mix(in srgb, var(--status-color) 12%, transparent);
      color: var(--status-color);
    }

    .house-power-room-icon ha-icon{
      --mdc-icon-size: 16px;
    }

    .house-power-room-name,
.house-power-room-value{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.1;
    }

    .house-power-room-name{
      color: var(--primary-text-color);
      font-size: 11px;
      font-weight: 850;
    }

    .house-power-room-value{
      color: var(--secondary-text-color);
      font-size: 11px;
      font-weight: 800;
    }

    .house-power-bar{
      position: relative;
      height: 5px;
      grid-column: 2 / -1;
      overflow: hidden;
      border-radius: 999px;
      background: color-mix(in srgb, var(--status-color) 10%, var(--secondary-background-color));
    }

    .house-power-bar-fill{
      position: absolute;
      inset: 0 auto 0 0;
      width: var(--power-width, 0%);
      min-width: 4px;
      border-radius: inherit;
      background: linear-gradient(90deg, #d88e20, #f4c34d);
    }

    .house-persons-grid{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 7px;
    }

    .house-person-mini{
      appearance: none;
      min-width: 0;
      min-height: 42px;
      padding: 6px;
      display: flex;
      align-items: center;
      gap: 7px;
      border: 0;
      border-radius: 12px;
      background: color-mix(in srgb, var(--primary-background-color) 78%, var(--card-background-color));
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      cursor: pointer;
      transition:
        background-color 0.18s ease,
        transform 0.18s ease;
    }

    .house-person-mini:active{
      transform: scale(0.97);
    }

    .house-person-mini.is-home{
      background: color-mix(in srgb, #2f9b62 13%, var(--card-background-color));
    }

    .house-person-mini.is-away{
      background: color-mix(in srgb, #df5b63 10%, var(--card-background-color));
    }

    .house-person-avatar{
      width: 26px;
      height: 26px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      overflow: hidden;
      border-radius: 999px;
      background: color-mix(in srgb, var(--status-color) 12%, transparent);
      color: var(--status-color);
    }

    .house-person-avatar img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .house-person-avatar ha-icon{
      --mdc-icon-size: 16px;
    }

    .house-person-mini-copy{
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .house-person-mini-name,
.house-person-mini-state{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .house-person-mini-name{
      color: var(--primary-text-color);
      font-size: 11px;
      font-weight: 850;
      line-height: 1.1;
    }

    .house-person-mini-state{
      color: var(--secondary-text-color);
      font-size: 10px;
      font-weight: 700;
      line-height: 1.1;
    }

    .header-status-scroll{
      gap: 8px;
      padding: 2px 2px 4px 12px;
    }

    .status-card-compact{
      flex: 0 0 auto;
      min-width: 92px;
      max-width: 150px;
      min-height: 70px;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 7px 12px 9px;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      background: var(--card-background-color);
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
    }

    .status-card-compact:hover{
      transform: translateY(-1px);
      border-color: color-mix(in srgb, var(--status-color) 36%, transparent);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
    }

    .status-card-compact .status-card-icon-compact{
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: var(--status-bg);
    }

    .status-card-compact .status-card-icon-compact ha-icon{
      --mdc-icon-size: 20px;
      color: var(--status-color);
    }

    .status-card-compact .status-card-badge-compact{
      top: -7px;
      right: -8px;
      min-width: 22px;
      height: 22px;
      padding: 0 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      background: var(--status-color);
      color: #fff;
      font-size: 11px;
      font-weight: 800;
      box-shadow: 0 4px 10px color-mix(in srgb, var(--status-color) 26%, transparent);
    }

    .status-card-compact .status-card-title-compact{
      width: 100%;
      margin-top: 5px;
      color: var(--secondary-text-color);
      font-size: 11px;
      font-weight: 800;
      line-height: 1.15;
      text-align: left;
      opacity: 1;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .status-card-compact.has-value .status-card-title-compact{
      color: var(--primary-text-color);
      font-size: 13px;
      font-weight: 900;
      white-space: nowrap;
      display: block;
    }

    .status-card-subtitle-compact{
      width: 100%;
      margin-top: 1px;
      color: var(--secondary-text-color);
      font-size: 10px;
      font-weight: 750;
      line-height: 1.1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (max-width: 768px) {
      .home-status-grid{
        display: flex;
        grid-template-columns: none;
        gap: 10px;
        margin: 0;
        padding: 2px 18px 16px;
        overflow-x: auto;
        scroll-padding: 18px;
        scroll-snap-type: x proximity;
        scrollbar-width: none;
      }

      .home-camera-section{
        margin: 0 -10px 18px;
      }

      .home-camera-section .home-status-heading{
        display: none;
      }

      .home-summaries-section{
        margin: 0 -10px 18px;
      }

      .home-summaries-section .home-status-heading{
        display: none;
      }

      .home-todos-section{
        margin: 0 -10px 18px;
      }

      .home-todos-section .home-status-heading{
        display: none;
      }

      .home-todos-grid{
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
        padding: 2px 18px 16px;
      }

      .home-custom-cards-section{
        min-width: 0;
        margin: 0 -10px 18px;
      }

      .home-custom-cards-section .home-status-heading{
        display: none;
      }

      .home-custom-cards-grid{
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
        padding: 2px 18px 16px;
      }

      .home-summary-list{
        width: auto;
        display: flex;
        flex-direction: column;
        padding: 2px 18px 16px;
        gap: 8px;
      }

      .home-summary-card{
        min-height: 64px;
        padding: 11px 12px;
        border-radius: 14px;
      }

      .home-summary-icon{
        width: 36px;
        height: 36px;
      }

      .home-camera-grid{
        display: flex;
        grid-template-columns: none;
        gap: 10px;
        padding: 2px 18px 16px;
        overflow-x: auto;
        scroll-padding: 18px;
        scroll-snap-type: x proximity;
        scrollbar-width: none;
      }

      .home-camera-grid::-webkit-scrollbar{
        display: none;
      }

      .home-camera-section.layout-grid .home-camera-grid{
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 2px 18px 16px;
        overflow: visible;
        scroll-snap-type: none;
      }

      .home-camera-card{
        flex: 0 0 226px;
        min-height: 146px;
        border-radius: 18px;
        scroll-snap-align: start;
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.11);
      }

      .home-camera-section.layout-grid .home-camera-card{
        width: 100%;
        flex: none;
        scroll-snap-align: none;
      }

      .home-camera-content{
        min-height: 146px;
        padding: 13px;
      }

      .home-camera-name{
        font-size: 16px;
      }

      .home-status-grid::-webkit-scrollbar{
        display: none;
      }

      .home-status-card{
        flex: 0 0 126px;
        min-height: 114px;
        padding: 14px;
        border-radius: 16px;
        scroll-snap-align: start;
        box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08);
      }

      .home-status-card.house-persons-card{
        flex: 0 0 230px;
        min-height: 132px;
        padding: 14px;
      }

      .home-status-card.house-power-card{
        flex: 0 0 250px;
        min-height: 132px;
        padding: 14px;
      }

      .home-status-card.house-climate-card{
        flex: 0 0 250px;
        min-height: 132px;
        padding: 14px;
      }

      .home-status-card .status-card-title{
        font-size: 15px;
      }

      .status-card-compact{
        min-width: 88px;
      }

      .home-view{
        max-width: none;
      }

      .person-cards-section{
        display: none;
      }

      .home-status-heading{
        display: none;
      }

      .mobile-home-section{
        display: block;
        margin: 0 -10px 18px;
      }

      .mobile-section-heading{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 0 18px;
        margin-bottom: 10px;
      }

      .mobile-section-title{
        min-width: 0;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .mobile-section-title-label{
        color: var(--primary-text-color);
        font-size: 16px;
        font-weight: 850;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .mobile-section-action{
        appearance: none;
        min-width: 66px;
        height: 28px;
        padding: 0 10px 0 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        border: 0;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary-color) 12%, transparent);
        color: var(--primary-color);
        font-size: 12px;
        font-weight: 850;
        font: inherit;
        cursor: pointer;
        transition:
          background-color 0.18s ease,
          transform 0.18s ease;
      }

      .mobile-section-action ha-icon{
        --mdc-icon-size: 15px;
      }

      .mobile-section-action:active{
        transform: scale(0.96);
        background: color-mix(in srgb, var(--primary-color) 18%, transparent);
      }

      .mobile-area-rail{
        display: flex;
        gap: 10px;
        padding: 2px 18px 16px;
        overflow-x: auto;
        scroll-padding: 18px;
        scroll-snap-type: x proximity;
        scrollbar-width: none;
      }

      .mobile-area-rail::-webkit-scrollbar{
        display: none;
      }

      .mobile-home-section.layout-grid .mobile-area-rail{
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        padding: 2px 18px 16px;
        overflow: visible;
        scroll-snap-type: none;
      }

      .mobile-area-card{
        appearance: none;
        position: relative;
        box-sizing: border-box;
        flex: 0 0 152px;
        min-width: 0;
        min-height: 130px;
        padding: 13px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        overflow: hidden;
        border: 1px solid color-mix(in srgb, var(--primary-text-color) 8%, transparent);
        border-radius: 18px;
        background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color));
        color: var(--primary-text-color);
        font: inherit;
        box-shadow: 0 12px 28px color-mix(in srgb, var(--primary-text-color) 8%, transparent);
        text-align: left;
        scroll-snap-align: start;
        cursor: pointer;
        transition:
          transform 0.18s ease,
          border-color 0.18s ease,
          box-shadow 0.18s ease;
      }

      .mobile-home-section.layout-grid .mobile-area-card{
        width: 100%;
        flex: none;
        scroll-snap-align: none;
      }

      @media (max-width: 380px) {
        .mobile-home-section.layout-grid .mobile-area-rail{
          grid-template-columns: 1fr;
        }
      }

      .mobile-area-card:active{
        transform: scale(0.98);
      }

      .mobile-area-card.has-picture{
        min-height: 146px;
        color: var(--mobile-area-picture-text-color, #ffffff);
        border-color: rgba(255, 255, 255, 0.16);
        background: #182044;
        --mobile-area-picture-text-color: #ffffff;
        --mobile-area-picture-muted-text-color: rgba(255, 255, 255, 0.76);
        --mobile-area-picture-text-shadow: 0 2px 10px rgba(0, 0, 0, 0.62);
        --mobile-area-picture-overlay:
          linear-gradient(180deg, rgba(12, 18, 32, 0.03) 0%, rgba(12, 18, 32, 0.18) 42%, rgba(12, 18, 32, 0.82) 100%),
          linear-gradient(90deg, rgba(12, 18, 32, 0.18), rgba(12, 18, 32, 0.04));
      }

      .mobile-area-card.has-picture.text-dark{
        --mobile-area-picture-text-color: #ffffff;
        --mobile-area-picture-muted-text-color: rgba(255, 255, 255, 0.76);
        --mobile-area-picture-text-shadow: 0 2px 10px rgba(0, 0, 0, 0.62);
        --mobile-area-picture-overlay:
          linear-gradient(180deg, rgba(12, 18, 32, 0.03) 0%, rgba(12, 18, 32, 0.18) 42%, rgba(12, 18, 32, 0.82) 100%),
          linear-gradient(90deg, rgba(12, 18, 32, 0.18), rgba(12, 18, 32, 0.04));
      }

      .mobile-area-picture{
        position: absolute;
        inset: 0;
        z-index: 0;
        background-size: cover;
        background-position: center;
        transform: scale(1.02);
      }

      .mobile-area-card.has-picture::after{
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        background: var(--mobile-area-picture-overlay);
      }

      .mobile-area-top,
.mobile-area-copy{
        position: relative;
        z-index: 2;
      }

      .mobile-area-top{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
      }

      .mobile-area-icon{
        width: 42px;
        height: 42px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        border-radius: 13px;
        color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 13%, transparent);
      }

      .mobile-area-icon ha-icon{
        --mdc-icon-size: 22px;
      }

      .mobile-area-card.has-picture .mobile-area-icon{
        color: var(--mobile-area-picture-text-color, #ffffff);
        background: rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(12px);
      }

      .mobile-area-badges{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 5px;
        min-width: 0;
      }

      .mobile-area-badge{
        min-width: 24px;
        height: 24px;
        padding: 0 7px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border-radius: 999px;
        color: var(--area-badge-color, var(--primary-color));
        background: color-mix(in srgb, var(--area-badge-color, var(--primary-color)) 12%, transparent);
        font-size: 11px;
        font-weight: 850;
      }

      .mobile-area-card.has-picture .mobile-area-badge{
        color: var(--area-badge-color, var(--primary-color));
        background: color-mix(in srgb, var(--area-badge-color, var(--primary-color)) 18%, rgba(255, 255, 255, 0.88));
        backdrop-filter: blur(12px);
        box-shadow: 0 4px 12px rgba(15, 23, 42, 0.16);
      }

      .mobile-area-badge ha-icon{
        --mdc-icon-size: 14px;
      }

      .mobile-area-badge.light{
        --area-badge-color: #e1a129;
      }

      .mobile-area-badge.cover{
        --area-badge-color: #d98928;
      }

      .mobile-area-badge.motion{
        --area-badge-color: #6d7891;
      }

      .mobile-area-name{
        font-size: 15px;
        font-weight: 850;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .mobile-area-meta{
        margin-top: 4px;
        color: color-mix(in srgb, var(--primary-text-color) 54%, transparent);
        font-size: 12px;
        font-weight: 700;
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .mobile-area-card.has-picture .mobile-area-meta{
        color: var(--mobile-area-picture-muted-text-color, rgba(255, 255, 255, 0.72));
      }

      .mobile-area-card.has-picture .mobile-area-name,
.mobile-area-card.has-picture .mobile-area-meta{
        text-shadow: var(--mobile-area-picture-text-shadow);
      }

      .mobile-area-card.has-picture.text-dark .mobile-area-icon{
        color: var(--mobile-area-picture-text-color, #ffffff);
        background: rgba(255, 255, 255, 0.18);
      }

      .mobile-area-card.has-picture.text-dark .mobile-area-name,
.mobile-area-card.has-picture.text-dark .mobile-area-meta{
        text-shadow: var(--mobile-area-picture-text-shadow);
      }

      .home-status-section{
        margin: 0 -10px 18px;
      }

      .home-status-section .mobile-section-heading{
        margin-bottom: 10px;
      }

      .home-status-section.layout-grid .home-status-grid{
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        padding: 2px 18px 16px;
        overflow: visible;
        scroll-snap-type: none;
      }

      .home-status-section.layout-grid .home-status-card{
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        flex: none;
        scroll-snap-align: none;
      }

      .home-status-section.layout-grid .house-persons-card,
.home-status-section.layout-grid .house-climate-card,
.home-status-section.layout-grid .house-power-card{
        grid-column: 1 / -1;
      }

      @media (max-width: 380px) {
        .home-status-section.layout-grid .home-status-grid{
          grid-template-columns: 1fr;
        }
      }

      .home-status-card::before{
        left: 14px;
        right: 14px;
      }

      .home-status-card .status-card-icon{
        width: 42px;
        height: 42px;
        border-radius: 13px;
        margin-bottom: 16px;
      }

      .home-status-card .status-card-icon ha-icon{
        --mdc-icon-size: 22px;
      }

      .home-status-card .status-card-badge{
        min-width: 23px;
        height: 23px;
        top: -8px;
        right: -9px;
      }

      :host([data-theme-dark]){
        .home-welcome {
          background:
            linear-gradient(180deg,
              color-mix(in srgb, var(--card-background-color) 90%, var(--primary-color) 7%) 0%,
              color-mix(in srgb, var(--card-background-color) 92%, var(--primary-background-color)) 100%);
          box-shadow:
            0 14px 36px rgba(0, 0, 0, 0.34),
            inset 0 -1px 0 rgba(255, 255, 255, 0.04);
        }

        .welcome-avatar {
          box-shadow:
            0 10px 22px rgba(0, 0, 0, 0.34),
            0 0 0 3px rgba(255, 255, 255, 0.08);
        }

        .welcome-action {
          background:
            linear-gradient(180deg,
              color-mix(in srgb, var(--card-background-color) 84%, #ffffff 8%),
              color-mix(in srgb, var(--card-background-color) 94%, #000000 6%));
          box-shadow:
            0 10px 24px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .mobile-area-card {
          background:
            linear-gradient(180deg,
              color-mix(in srgb, var(--card-background-color) 88%, #ffffff 4%),
              color-mix(in srgb, var(--card-background-color) 96%, #000000 4%));
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.26),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .mobile-area-card:not(.has-picture) .mobile-area-icon {
          background: color-mix(in srgb, var(--primary-color) 22%, transparent);
        }

        .mobile-area-badge {
          background: color-mix(in srgb, var(--area-badge-color, var(--primary-color)) 20%, transparent);
        }

        .home-status-card.house-persons-card {
          --status-color: #8ea8ff;
        }

        .home-status-card.house-power-card {
          --status-color: #f2b447;
        }

        .home-status-card.house-climate-card {
          --status-color: #64c8e8;
        }

        .house-person-mini {
          background: color-mix(in srgb, var(--card-background-color) 78%, #ffffff 5%);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        }

        .house-climate-metric {
          background: color-mix(in srgb, var(--metric-color) 18%, var(--card-background-color));
          box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--metric-color) 18%, transparent);
        }

        .house-power-room-icon {
          background: color-mix(in srgb, var(--status-color) 20%, transparent);
        }

        .house-power-bar {
          background: color-mix(in srgb, var(--status-color) 13%, var(--card-background-color));
        }

        .house-person-mini.is-home {
          background: color-mix(in srgb, #2f9b62 20%, var(--card-background-color));
        }

        .house-person-mini.is-away {
          background: color-mix(in srgb, #df5b63 16%, var(--card-background-color));
        }

        .home-summary-card {
          background:
            linear-gradient(180deg,
              color-mix(in srgb, var(--card-background-color) 88%, #ffffff 4%),
              color-mix(in srgb, var(--card-background-color) 96%, #000000 4%));
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow:
            0 12px 26px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .home-summary-icon {
          background: color-mix(in srgb, var(--summary-color) 20%, transparent);
        }
      }

      .home-favorites-section{
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        margin: 0 -10px 44px;
        padding: 0;
        overflow-x: clip;
      }

      .home-favorites-section .favorites-header{
        display: none;
      }

      .home-favorites-section .mobile-section-heading{
        margin-bottom: 10px;
      }

      .home-favorites-section .favorites-grid{
        display: flex;
        grid-template-columns: none;
        gap: 10px;
        padding: 2px 18px 0;
        overflow-x: auto;
        scroll-padding: 18px;
        scroll-snap-type: x proximity;
        scrollbar-width: none;
      }

      .home-favorites-section .favorites-grid::-webkit-scrollbar{
        display: none;
      }

      .home-favorites-section.layout-grid .favorites-grid{
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        overflow: visible;
        scroll-snap-type: none;
      }

      .home-favorites-section .favorite-card-wrapper{
        flex: 0 0 186px;
        width: auto;
        min-width: 0;
        box-sizing: border-box;
        min-height: 116px;
        padding: 14px;
        border-radius: 16px;
        scroll-snap-align: start;
      }

      .home-favorites-section.layout-grid .favorite-card-wrapper{
        width: 100%;
        flex: none;
        scroll-snap-align: none;
      }

      @media (max-width: 380px) {
        .home-favorites-section.layout-grid .favorites-grid{
          grid-template-columns: 1fr;
        }
      }
    }

    /* Area status/action pills */
    .area-badges{
      gap: 8px;
      align-items: center;
      margin-bottom: 18px;
    }

    .area-badge{
      min-height: 38px;
      padding: 9px 15px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 800;
      line-height: 1;
      box-shadow: none;
    }

    .area-badge ha-icon{
      --mdc-icon-size: 17px;
    }

    .area-badge.cover{
      background: color-mix(in srgb, var(--area-badge-color, #d98928) 12%, var(--card-background-color));
      border-color: color-mix(in srgb, var(--area-badge-color, #d98928) 22%, transparent);
      color: var(--area-badge-color, #d98928);
    }

    .area-badge.cover ha-icon{
      color: var(--area-badge-color, #d98928);
    }

    .area-badge.light-toggle,
.area-badge.switch-toggle{
      min-width: 132px;
      justify-content: center;
      cursor: pointer;
      background: #089987;
      border-color: #089987;
      color: #ffffff;
      box-shadow: 0 8px 20px rgba(8, 153, 135, 0.18);
    }

    .area-badge.light-toggle ha-icon{
      color: #ffc400;
    }

    .area-badge.switch-toggle ha-icon{
      color: #1f86d9;
    }

    .area-badge.light-toggle:hover,
.area-badge.switch-toggle:hover{
      background: #078b7b;
      border-color: #078b7b;
      transform: translateY(-1px);
      box-shadow: 0 10px 24px rgba(8, 153, 135, 0.24);
    }

    .area-badge.light-toggle:active,
.area-badge.switch-toggle:active{
      transform: translateY(0);
      box-shadow: 0 5px 14px rgba(8, 153, 135, 0.18);
    }

    /* Room header */
    .area-header{
      position: relative;
      isolation: isolate;
      z-index: 0;
      min-height: 138px;
      margin-bottom: 18px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
      overflow: hidden;
      border-radius: 12px;
      border: 1px solid color-mix(in srgb, var(--primary-color) 12%, rgba(0, 0, 0, 0.06));
      background:
        linear-gradient(135deg,
          var(--card-background-color) 0%,
          color-mix(in srgb, var(--primary-color) 5%, var(--card-background-color)) 100%);
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07);
    }

    .area-header::before{
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(0, 0, 0, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
      background-size: 56px 56px;
      opacity: 0.38;
    }

    .area-header-background{
      position: absolute;
      inset: 0;
      z-index: 0;
      background-size: cover;
      background-position: center;
      filter: saturate(1.05) contrast(1.02);
    }

    .area-header.has-picture{
      border-color: rgba(255, 255, 255, 0.16);
      background: #172321;
      color: var(--area-header-picture-text-color, #ffffff);
      --area-header-picture-text-color: #ffffff;
      --area-header-picture-muted-text-color: rgba(255, 255, 255, 0.76);
      --area-header-picture-control-bg: rgba(255, 255, 255, 0.18);
      --area-header-picture-control-border: rgba(255, 255, 255, 0.16);
      --area-header-picture-overlay:
        linear-gradient(135deg, rgba(13, 24, 23, 0.84), rgba(13, 24, 23, 0.46)),
        linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
    }

    .area-header.has-picture.text-dark{
      --area-header-picture-text-color: #0f172a;
      --area-header-picture-muted-text-color: rgba(15, 23, 42, 0.72);
      --area-header-picture-control-bg: rgba(255, 255, 255, 0.72);
      --area-header-picture-control-border: rgba(15, 23, 42, 0.08);
      --area-header-picture-overlay:
        linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.48)),
        linear-gradient(rgba(15, 23, 42, 0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
    }

    .area-header.has-picture::before{
      z-index: 1;
      background: var(--area-header-picture-overlay);
      background-size: auto, 56px 56px, 56px 56px;
      opacity: 1;
    }

    .area-header-content{
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;
      min-width: 0;
    }

    .area-title-group{
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .area-mobile-toolbar{
      position: relative;
      z-index: 3;
      display: grid;
      grid-template-columns: auto minmax(0, max-content) auto;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }

    .area-mobile-round{
      width: 42px;
      height: 42px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border: 0;
      border-radius: 999px;
      background: color-mix(in srgb, var(--card-background-color) 88%, #ffffff);
      color: #182044;
      cursor: pointer;
      box-shadow:
        0 10px 24px rgba(15, 23, 42, 0.12),
        inset 0 0 0 1px rgba(15, 23, 42, 0.06);
      transition:
        transform 0.18s ease,
        box-shadow 0.18s ease,
        background-color 0.18s ease,
        color 0.18s ease;
    }

    .area-mobile-round:hover{
      transform: translateY(-1px);
      box-shadow:
        0 14px 28px rgba(15, 23, 42, 0.16),
        inset 0 0 0 1px rgba(15, 23, 42, 0.08);
    }

    .area-mobile-round ha-icon,
.area-mobile-round .dd-static-icon{
      --mdc-icon-size: 22px;
      width: 22px;
      height: 22px;
    }

    .area-mobile-home{
      display: none;
      background:
        linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
        rgba(10, 12, 18, 0.86);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .layout-container.sidebar-collapsed .area-mobile-home{
      display: inline-flex;
    }

    .area-mobile-quick-controls{
      grid-column: 2;
      justify-self: start;
      max-width: 100%;
      min-height: 40px;
      padding: 4px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      overflow: hidden;
      border-radius: 999px;
      background: color-mix(in srgb, var(--card-background-color) 92%, transparent);
      box-shadow:
        0 10px 24px rgba(15, 23, 42, 0.1),
        inset 0 0 0 1px rgba(15, 23, 42, 0.05);
    }

    .area-mobile-quick-controls.empty{
      visibility: hidden;
    }

    .area-quick-control{
      min-width: 60px;
      height: 34px;
      padding: 0 7px 0 9px;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      border: 0;
      border-radius: 999px;
      background: transparent;
      color: color-mix(in srgb, var(--primary-text-color) 62%, transparent);
      cursor: pointer;
      transition:
        background-color 0.18s ease,
        color 0.18s ease,
        transform 0.18s ease;
    }

    .area-quick-control:active{
      transform: scale(0.96);
    }

    .area-quick-main{
      min-width: 0;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .area-quick-control ha-icon{
      --mdc-icon-size: 17px;
      flex: 0 0 auto;
    }

    .area-quick-count{
      color: currentColor;
      font-size: 11px;
      font-weight: 850;
      line-height: 1;
      white-space: nowrap;
    }

    .area-quick-switch{
      position: relative;
      width: 26px;
      height: 16px;
      flex: 0 0 auto;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.12);
      box-shadow:
        inset 0 0 0 1px rgba(15, 23, 42, 0.05),
        inset 0 1px 3px rgba(15, 23, 42, 0.12);
      transition:
        background-color 0.18s ease,
        box-shadow 0.18s ease;
    }

    .area-quick-switch::after{
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 1px 4px rgba(15, 23, 42, 0.24);
      transition: transform 0.18s ease;
    }

    .area-quick-control.active{
      background: #182044;
      color: #ffffff;
    }

    .area-quick-control.light.active{
      color: #ffd047;
    }

    .area-quick-control.switch.active{
      color: #58a9ff;
    }

    .area-quick-control.cover.active{
      color: #b984ff;
    }

    .area-quick-control.fan.active{
      color: #55bda4;
    }

    .area-quick-control.climate.active{
      color: #51aadd;
    }

    .area-quick-control.active .area-quick-switch{
      background: currentColor;
    }

    .area-quick-control.active .area-quick-switch::after{
      transform: translateX(10px);
    }

    .area-quick-direction{
      width: 22px;
      height: 22px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.08);
      color: currentColor;
    }

    .area-quick-direction ha-icon{
      --mdc-icon-size: 16px;
    }

    .area-quick-control.has-actions{
      padding-right: 4px;
      cursor: default;
    }

    .area-quick-control.has-actions:active{
      transform: none;
    }

    .area-quick-actions{
      display: inline-flex;
      align-items: center;
      overflow: hidden;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.08);
    }

    .area-quick-action{
      width: 25px;
      height: 24px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: transparent;
      color: currentColor;
      cursor: pointer;
      transition: background-color 0.18s ease, transform 0.18s ease;
    }

    .area-quick-action + .area-quick-action{
      border-left: 1px solid color-mix(in srgb, currentColor 18%, transparent);
    }

    .area-quick-action:hover{
      background: color-mix(in srgb, currentColor 10%, transparent);
    }

    .area-quick-action:active{
      transform: scale(0.86);
    }

    .area-quick-action ha-icon{
      --mdc-icon-size: 15px;
    }

    .area-mobile-actions{
      grid-column: 3;
      justify-self: end;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .area-mobile-edit{
      position: relative;
    }

    .area-mobile-edit.active{
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    .area-mobile-actions .unavailable-entities-icon{
      width: 42px;
      height: 42px;
      margin: 0;
      border-radius: 999px;
    }

    .area-desktop-back{
      display: none;
      width: 42px;
      height: 42px;
      padding: 0;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border: 0;
      border-radius: 999px;
      background:
        linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
        rgba(10, 12, 18, 0.86);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      box-shadow:
        0 18px 40px rgba(0, 0, 0, 0.34),
        inset 0 1px 0 rgba(255, 255, 255, 0.075);
      transition:
        transform 0.18s ease,
        box-shadow 0.18s ease;
    }

    .area-desktop-back:hover{
      transform: translateY(-1px);
      box-shadow:
        0 14px 30px rgba(15, 23, 42, 0.24),
        inset 0 0 0 1px rgba(255, 255, 255, 0.14);
    }

    .area-desktop-back:focus-visible{
      outline: 2px solid var(--primary-color);
      outline-offset: 3px;
    }

    .area-desktop-back ha-icon,
.area-desktop-back .dd-static-icon{
      --mdc-icon-size: 22px;
      width: 22px;
      height: 22px;
    }

    .layout-container.sidebar-collapsed .area-desktop-back{
      display: none;
    }

    .area-title-copy{
      min-width: 0;
    }

    .area-subtitle{
      display: block;
      margin-top: 5px;
      color: color-mix(in srgb, var(--primary-text-color) 55%, transparent);
      font-size: 13px;
      font-weight: 800;
      line-height: 1.2;
      white-space: nowrap;
    }

    .area-header-icon{
      width: 48px;
      height: 48px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      background: color-mix(in srgb, var(--primary-color) 13%, var(--card-background-color));
      color: var(--primary-color);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 14%, transparent);
    }

    .area-header-icon ha-icon{
      --mdc-icon-size: 26px;
    }

    .area-header.has-picture .area-header-icon{
      background: var(--area-header-picture-control-bg);
      color: var(--area-header-picture-text-color, #ffffff);
      box-shadow: inset 0 0 0 1px var(--area-header-picture-control-border);
    }

    .area-title{
      margin: 0;
      color: var(--primary-text-color);
      font-size: clamp(30px, 3.1vw, 44px);
      font-weight: 800;
      letter-spacing: 0;
      line-height: 1;
      overflow-wrap: anywhere;
    }

    .area-header.has-picture .area-subtitle{
      color: var(--area-header-picture-muted-text-color, rgba(255, 255, 255, 0.76));
    }

    .area-header.has-picture .area-title{
      color: var(--area-header-picture-text-color, #ffffff);
    }

    .area-header-actions{
      display: none;
      align-items: center;
      gap: 10px;
      flex: 0 0 auto;
    }

    .area-header .dd-edit-toggle{
      margin-left: 0;
      width: 42px;
      height: 42px;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.06);
      color: var(--primary-text-color);
    }

    .area-header .dd-edit-toggle:hover,
.area-header .dd-edit-toggle.active{
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    .area-header.has-picture .dd-edit-toggle{
      background: var(--area-header-picture-control-bg);
      color: var(--area-header-picture-text-color, #ffffff);
    }

    .area-header .unavailable-entities-icon{
      margin-bottom: 0;
      width: 42px;
      height: 42px;
      border-radius: 999px;
      background: rgba(255, 152, 0, 0.14);
      color: var(--warning-color);
    }

    .area-header .unavailable-entities-icon ha-icon{
      color: var(--warning-color);
    }

    .area-header.has-picture .unavailable-entities-icon{
      background: var(--area-header-picture-control-bg);
    }

    .area-header.has-picture .unavailable-entities-icon ha-icon{
      color: var(--area-header-picture-text-color, #ffffff);
    }

    .area-header.has-picture .area-mobile-round,
.area-header.has-picture .area-mobile-quick-controls,
.area-header.has-picture .area-mobile-actions .unavailable-entities-icon{
      background: var(--area-header-picture-control-bg);
      color: var(--area-header-picture-text-color, #ffffff);
      box-shadow:
        0 12px 28px rgba(0, 0, 0, 0.18),
        inset 0 0 0 1px var(--area-header-picture-control-border);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
    }

    .area-header .area-badges{
      display: none;
    }

    .area-header.has-picture .area-badge:not(.light-toggle):not(.switch-toggle){
      background: var(--area-header-picture-control-bg);
      border-color: var(--area-header-picture-control-border);
      color: var(--area-header-picture-text-color, #ffffff);
    }

    @media (min-width: 769px) {
      .area-header{
        min-height: 166px;
        padding: 20px 22px 22px;
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        grid-template-areas:
          "nav actions"
          "title metrics"
          "controls metrics";
        align-items: start;
        column-gap: 24px;
        row-gap: 8px;
        border-color: color-mix(in srgb, var(--divider-color) 70%, transparent);
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 98%, transparent) 0%,
            color-mix(in srgb, var(--primary-color) 4%, var(--card-background-color)) 100%);
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
      }

      .area-header::before{
        opacity: 0;
      }

      .area-header-content{
        grid-area: title;
        align-self: start;
        margin-top: 2px;
      }

      .area-mobile-toolbar{
        display: contents;
      }

      .area-mobile-home{
        grid-area: nav;
        display: inline-flex;
        align-self: start;
        justify-self: start;
        width: 44px;
        height: 44px;
        background:
          linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
          rgba(10, 12, 18, 0.86);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.1);
        box-shadow:
          0 18px 40px rgba(0, 0, 0, 0.34),
          inset 0 1px 0 rgba(255, 255, 255, 0.075);
      }

      .area-mobile-quick-controls{
        grid-area: controls;
        min-height: 42px;
        width: min(520px, 100%);
        max-width: 100%;
        margin-top: 4px;
        margin-left: 0;
        align-self: start;
        justify-self: start;
      }

      .area-mobile-quick-controls.count-1{
        width: min(420px, 100%);
      }

      .area-mobile-quick-controls.count-1 .area-quick-control{
        flex: 1 1 auto;
        justify-content: space-between;
      }

      .area-mobile-quick-controls.empty{
        min-height: 0;
        margin: 0;
      }

      .area-mobile-actions{
        grid-area: actions;
        position: relative;
        top: auto;
        right: auto;
        z-index: 5;
        align-self: start;
        justify-self: end;
      }

      .area-header-metrics{
        grid-area: metrics;
        position: relative;
        z-index: 3;
        min-width: 0;
        max-width: min(34vw, 360px);
        margin: 2px 56px 0 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 8px;
      }

      .area-header-metric{
        min-width: 132px;
        min-height: 44px;
        padding: 8px 12px;
        gap: 8px;
        border-radius: 999px;
      }

      .area-header-metric .metric-ring{
        width: 30px;
        height: 30px;
      }

      .area-header-metric .metric-ring::after{
        inset: 4px;
      }

      .area-header-metric .metric-ring.metric-icon ha-icon{
        --mdc-icon-size: 17px;
      }

      .area-header-metric .metric-label{
        font-size: 10px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      .area-header-metric .metric-reading{
        margin-top: 2px;
        font-size: 13px;
      }

      .area-title-group{
        gap: 0;
      }

      .area-header-icon{
        display: none;
      }

      .area-title{
        font-size: clamp(24px, 2.4vw, 34px);
        line-height: 1.04;
      }

      .area-subtitle{
        margin-top: 3px;
      }

      .layout-container.sidebar-collapsed .area-mobile-home{
        position: relative;
        top: auto;
        left: auto;
      }

      .layout-container.sidebar-collapsed .area-header-content{
        padding-left: 0;
      }

      .layout-container.sidebar-collapsed .area-mobile-quick-controls{
        margin-left: 0;
      }
    }

    @media (max-width: 768px) {
      :host{
        height: auto;
        max-height: none;
        min-height: 100%;
        overflow: visible;
      }

      .layout-container{
        display: block;
        height: auto;
        max-height: none;
        min-height: 100dvh;
        overflow: visible;
      }

      .main-content{
        display: block;
        min-height: 100dvh;
        overflow: visible;
      }

      .content-area{
        padding: 0;
        height: auto;
        max-height: none;
        min-height: 100dvh;
        overflow: visible;
        overscroll-behavior: auto;
        -webkit-overflow-scrolling: auto;
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--primary-color) 5%, var(--primary-background-color)) 0%,
            var(--primary-background-color) 150px);
      }

      .content-area.home-content-area{
        padding-bottom: 0;
      }

      .content-area.area-content-area{
        padding: 0 10px calc(128px + env(safe-area-inset-bottom, 0px));
      }

      .content-area.settings-content-area{
        padding: 0;
      }

      .home-view{
        padding: 10px 10px calc(128px + env(safe-area-inset-bottom, 0px));
      }

      .settings-page-view{
        width: 100%;
        margin: 0;
        padding: 8px 10px calc(152px + env(safe-area-inset-bottom, 0px));
      }

      .settings-page-header{
        grid-template-columns: auto minmax(0, 1fr);
        gap: 12px;
        margin: 0 0 12px;
        padding: 12px 14px;
        border-radius: 18px;
        border-top: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
        box-shadow: 0 10px 28px rgba(15, 23, 42, 0.07);
      }

      .settings-page-back{
        width: 42px;
        height: 42px;
      }

      .settings-page-title h1{
        font-size: 21px;
      }

      .settings-page-title p{
        margin-top: 3px;
        font-size: 13px;
      }

      .settings-page-actions{
        display: none;
      }

      .settings-page-editor{
        border-radius: 18px;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
      }

      .settings-page-bottom-actions{
        position: sticky;
        bottom: calc(88px + env(safe-area-inset-bottom, 0px));
        z-index: 5;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        margin: 12px 0 0;
        padding: 8px;
        border: 1px solid color-mix(in srgb, var(--divider-color) 62%, transparent);
        border-radius: 999px;
        background: color-mix(in srgb, var(--card-background-color) 92%, transparent);
        box-shadow: 0 16px 34px rgba(15, 23, 42, 0.13);
        backdrop-filter: blur(18px) saturate(170%);
        -webkit-backdrop-filter: blur(18px) saturate(170%);
      }

      .settings-page-bottom-actions .settings-secondary,
.settings-page-bottom-actions .settings-primary{
        width: 100%;
      }

      .global-header.mobile{
        margin: -10px -10px 0;
        padding: 12px 14px 22px;
        border-bottom: 0;
        border-radius: 0 0 8px 8px;
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 98%, transparent) 0%,
            color-mix(in srgb, var(--primary-color) 5%, var(--card-background-color)) 100%);
        box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08);
      }

      .global-header.mobile .header-content{
        display: block;
      }

      .global-header.mobile .header-status-section{
        width: 100%;
      }

      .global-header.mobile .header-status-scroll{
        gap: 10px;
        padding: 2px 2px 4px;
        scroll-padding: 14px;
      }

      .global-header.mobile .status-card-compact{
        min-width: 112px;
        min-height: 82px;
        padding: 10px 12px 11px;
        border-radius: 8px;
        border: 1px solid rgba(15, 23, 42, 0.08);
        background: rgba(255, 255, 255, 0.92);
        box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
      }

      .global-header.mobile .status-card-compact .status-card-icon-compact{
        width: 40px;
        height: 40px;
        border-radius: 8px;
      }

      .global-header.mobile .status-card-compact .status-card-title-compact{
        margin-top: 7px;
        color: color-mix(in srgb, var(--primary-text-color) 76%, transparent);
        font-size: 12px;
        line-height: 1.15;
      }

      .global-header.mobile .header-expand-button{
        bottom: -18px;
        width: 36px;
        height: 36px;
        border-width: 2px;
        background: rgba(255, 255, 255, 0.96);
        box-shadow: 0 8px 20px rgba(3, 169, 244, 0.18);
      }

      .area-header{
        position: relative;
        top: auto;
        z-index: 3;
        min-height: 146px;
        margin: 0 -10px 20px;
        padding: calc(14px + env(safe-area-inset-top, 0px)) 22px 24px;
        align-items: center;
        gap: 10px;
        overflow: visible;
        border-radius: 0 0 8px 8px;
        border: 0;
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 98%, transparent) 0%,
            color-mix(in srgb, var(--card-background-color) 88%, transparent) 76%,
            color-mix(in srgb, var(--card-background-color) 58%, transparent) 100%);
        backdrop-filter: blur(22px);
        box-shadow: none;
        transition:
          min-height 0.2s ease,
          padding 0.2s ease,
          box-shadow 0.2s ease,
          background-color 0.2s ease;
      }

      .area-header.has-metrics{
        min-height: 248px;
      }

      .area-header.is-stuck{
        position: sticky;
        top: 0;
        z-index: 90;
        min-height: 122px;
        margin-top: 0;
        margin-bottom: 20px;
        padding: calc(8px + env(safe-area-inset-top, 0px)) 18px 10px;
        gap: 7px;
        border-radius: 0;
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.1);
      }

      .area-header::before{
        opacity: 0;
      }

      .area-header::after{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -34px;
        height: 58px;
        z-index: 1;
        pointer-events: none;
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 66%, transparent) 0%,
            transparent 100%);
        filter: blur(10px);
        opacity: 0;
        transition: opacity 0.18s ease;
      }

      .area-header.is-stuck::after{
        opacity: 1;
      }

      .area-mobile-toolbar{
        position: relative;
        z-index: 3;
        width: 100%;
        display: grid;
        grid-template-columns: 44px minmax(0, 1fr) auto;
        align-items: center;
        gap: 12px;
      }

      .area-mobile-round{
        width: 38px;
        height: 38px;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 999px;
        background: color-mix(in srgb, var(--card-background-color) 94%, transparent);
        color: var(--primary-text-color);
        box-shadow:
          0 8px 18px rgba(15, 23, 42, 0.1),
          inset 0 0 0 1px rgba(15, 23, 42, 0.05);
      }

      .area-mobile-round ha-icon,
.area-mobile-round .dd-static-icon{
        --mdc-icon-size: 20px;
        width: 20px;
        height: 20px;
      }

      .area-header.is-stuck .area-mobile-round{
        width: 34px;
        height: 34px;
      }

      .area-header.is-stuck .area-mobile-round ha-icon{
        --mdc-icon-size: 18px;
      }

      .area-mobile-home{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 6;
        justify-self: start;
        background:
          linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
          rgba(10, 12, 18, 0.86);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.1);
        box-shadow:
          0 18px 40px rgba(0, 0, 0, 0.34),
          inset 0 1px 0 rgba(255, 255, 255, 0.075);
      }

      .area-header.has-picture .area-mobile-home{
        background:
          linear-gradient(180deg, rgba(34, 38, 48, 0.72), rgba(8, 10, 15, 0.76)),
          rgba(10, 12, 18, 0.72);
        color: #ffffff;
        backdrop-filter: blur(14px);
        box-shadow:
          0 14px 32px rgba(0, 0, 0, 0.34),
          inset 0 1px 0 rgba(255, 255, 255, 0.08);
      }

      .area-mobile-quick-controls{
        grid-column: 2;
        justify-self: center;
        max-width: 100%;
        min-height: 40px;
        padding: 4px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--card-background-color) 92%, transparent);
        box-shadow:
          0 9px 22px rgba(15, 23, 42, 0.1),
          inset 0 0 0 1px rgba(15, 23, 42, 0.05);
      }

      .area-mobile-quick-controls.empty{
        visibility: hidden;
      }

      .area-header.is-stuck .area-mobile-quick-controls{
        min-height: 36px;
        padding: 3px;
      }

      .area-quick-control{
        min-width: 58px;
        height: 34px;
        padding: 0 6px 0 8px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        border: 0;
        border-radius: 999px;
        background: transparent;
        color: color-mix(in srgb, var(--primary-text-color) 62%, transparent);
        transition:
          background-color 0.18s ease,
          color 0.18s ease,
          transform 0.18s ease;
      }

      .area-quick-main{
        min-width: 0;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .area-quick-control ha-icon{
        --mdc-icon-size: 17px;
        flex: 0 0 auto;
      }

      .area-quick-count{
        color: currentColor;
        font-size: 11px;
        font-weight: 850;
        line-height: 1;
        white-space: nowrap;
      }

      .area-quick-switch{
        position: relative;
        width: 26px;
        height: 16px;
        flex: 0 0 auto;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.12);
        box-shadow:
          inset 0 0 0 1px rgba(15, 23, 42, 0.05),
          inset 0 1px 3px rgba(15, 23, 42, 0.12);
        transition:
          background-color 0.18s ease,
          box-shadow 0.18s ease;
      }

      .area-quick-switch::after{
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ffffff;
        box-shadow: 0 1px 4px rgba(15, 23, 42, 0.24);
        transition: transform 0.18s ease;
      }

      .area-quick-control.active .area-quick-switch{
        background: currentColor;
      }

      .area-quick-control.active .area-quick-switch::after{
        transform: translateX(10px);
      }

      .area-quick-direction{
        width: 22px;
        height: 22px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.08);
        color: currentColor;
      }

      .area-quick-direction ha-icon{
        --mdc-icon-size: 16px;
      }

      .area-header.is-stuck .area-quick-control{
        min-width: 50px;
        height: 30px;
        padding: 0 5px 0 7px;
        gap: 4px;
      }

      .area-header.is-stuck .area-quick-control ha-icon{
        --mdc-icon-size: 15px;
      }

      .area-header.is-stuck .area-quick-count{
        font-size: 10px;
      }

      .area-header.is-stuck .area-quick-switch{
        width: 22px;
        height: 14px;
      }

      .area-header.is-stuck .area-quick-switch::after{
        top: 3px;
        left: 3px;
        width: 8px;
        height: 8px;
      }

      .area-header.is-stuck .area-quick-control.active .area-quick-switch::after{
        transform: translateX(8px);
      }

      .area-header.is-stuck .area-quick-direction{
        width: 20px;
        height: 20px;
      }

      .area-header.is-stuck .area-quick-direction ha-icon{
        --mdc-icon-size: 14px;
      }

      .area-quick-control:active{
        transform: scale(0.94);
      }

      .area-quick-control.active{
        background: #182044;
        color: #ffffff;
      }

      .area-quick-control.light.active{
        color: #ffd047;
      }

      .area-quick-control.switch.active{
        color: #58a9ff;
      }

      .area-quick-control.cover.active{
        color: #b984ff;
      }

      .area-quick-control.fan.active{
        color: #55bda4;
      }

      .area-quick-control.climate.active{
        color: #51aadd;
      }

      .area-mobile-edit{
        position: relative;
        background:
          linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
          rgba(10, 12, 18, 0.86);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.1);
      }

      .area-mobile-actions{
        grid-column: 3;
        justify-self: end;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .area-mobile-actions .unavailable-entities-icon{
        width: 38px;
        height: 38px;
        margin: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 999px;
        background: #f44336;
        color: #ffffff;
        box-shadow:
          0 12px 26px rgba(244, 67, 54, 0.28),
          inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      }

      .area-mobile-actions .unavailable-entities-icon ha-icon{
        color: #ffffff;
        --mdc-icon-size: 19px;
      }

      .area-mobile-actions .unavailable-count{
        top: -6px;
        right: -6px;
        background: #ff9800;
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--card-background-color) 92%, transparent);
      }

      .area-mobile-edit.active{
        background: var(--primary-color);
      }

      .area-header-content{
        position: relative;
        z-index: 3;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 12px;
      }

      .area-header.is-stuck .area-header-content{
        gap: 6px;
      }

      .area-header-icon{
        display: none;
      }

      .area-title-group{
        width: 100%;
        justify-content: center;
        gap: 0;
        min-width: 0;
        text-align: center;
      }

      .area-title{
        max-width: min(260px, calc(100vw - 122px));
        margin: 0 auto;
        font-size: 16px;
        font-weight: 850;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .area-header.is-stuck .area-title{
        font-size: 14px;
      }

      .area-subtitle{
        display: block;
        margin-top: 2px;
        color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
        font-size: 13px;
        font-weight: 750;
        line-height: 1.1;
      }

      .area-header.is-stuck .area-subtitle{
        margin-top: 1px;
        font-size: 11px;
      }

      .area-header-metrics{
        position: relative;
        z-index: 3;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        margin-top: 4px;
        transition:
          gap 0.2s ease,
          margin 0.2s ease;
      }

      .area-header-metric{
        min-height: 72px;
        padding: 12px;
        border-radius: 10px;
        background:
          linear-gradient(135deg,
            color-mix(in srgb, var(--metric-color) 13%, var(--card-background-color)) 0%,
            color-mix(in srgb, var(--metric-color) 6%, var(--card-background-color)) 100%);
        box-shadow:
          0 12px 24px rgba(15, 23, 42, 0.06),
          inset 0 0 0 1px color-mix(in srgb, var(--metric-color) 18%, transparent);
        transition:
          min-height 0.2s ease,
          padding 0.2s ease,
          border-radius 0.2s ease;
      }

      .area-header-metric .metric-ring{
        width: 46px;
        height: 46px;
        transition:
          width 0.2s ease,
          height 0.2s ease;
      }

      .area-header-metric .metric-ring::after{
        transition: inset 0.2s ease;
      }

      .area-header-metric .metric-value,
.area-header-metric .metric-label,
.area-header-metric .metric-range,
.area-header-metric .metric-reading{
        transition:
          font-size 0.2s ease,
          opacity 0.2s ease;
      }

      .area-header.is-stuck .area-header-metrics{
        gap: 8px;
        margin-top: 0;
      }

      .area-header.is-stuck .area-header-metric{
        min-height: 40px;
        padding: 6px 9px;
        gap: 8px;
        border-radius: 8px;
        box-shadow:
          0 8px 18px rgba(15, 23, 42, 0.05),
          inset 0 0 0 1px color-mix(in srgb, var(--metric-color) 16%, transparent);
      }

      .area-header.is-stuck .area-header-metric .metric-ring{
        width: 30px;
        height: 30px;
      }

      .area-header.is-stuck .area-header-metric .metric-ring::after{
        inset: 4px;
      }

      .area-header.is-stuck .area-header-metric .metric-value{
        font-size: 9px;
      }

      .area-header.is-stuck .area-header-metric .metric-label{
        font-size: 11px;
      }

      .area-header.is-stuck .area-header-metric .metric-reading{
        font-size: 10px;
      }

      .area-header.is-stuck .area-header-metric .metric-range{
        opacity: 0;
        height: 0;
        margin-top: 0;
        overflow: hidden;
      }

      .area-header-actions{
        display: none;
      }

      .area-header .area-badges{
        position: relative;
        z-index: 3;
        width: 100%;
        display: none;
      }

      .area-header .area-badge{
        min-height: 34px;
        flex: 0 0 auto;
        padding: 0 12px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 850;
        box-shadow: none;
      }

      .area-header .area-badge.light-toggle,
.area-header .area-badge.switch-toggle{
        min-width: 128px;
        justify-content: center;
      }

      .area-header.has-picture{
        background:
          linear-gradient(180deg,
            rgba(23, 35, 33, 0.74) 0%,
            rgba(23, 35, 33, 0.58) 72%,
            rgba(23, 35, 33, 0.22) 100%);
      }

      .area-header.has-picture .area-subtitle{
        color: rgba(255, 255, 255, 0.72);
      }

      .area-content-area .area-header{
        min-height: 252px;
        margin: 0 -10px 18px;
        padding: calc(18px + env(safe-area-inset-top, 0px)) 18px 18px;
        justify-content: flex-start;
        overflow: hidden;
        border-radius: 0 0 22px 22px;
        color: #ffffff;
        background:
          radial-gradient(circle at 18% 8%, rgba(255, 255, 255, 0.22), transparent 24%),
          linear-gradient(145deg, #182044 0%, #26374d 48%, #586c82 100%);
        box-shadow:
          0 16px 34px rgba(15, 23, 42, 0.14),
          inset 0 -1px 0 rgba(255, 255, 255, 0.24);
      }

      .area-content-area .area-header.has-metrics{
        min-height: 312px;
      }

      .area-content-area .area-header.has-picture{
        background: #0f172a;
      }

      .area-content-area .area-header-background{
        inset: 0;
        background-position: center;
        background-size: cover;
        transform: scale(1.015);
        filter: saturate(1.08) contrast(1.02);
      }

      .area-content-area .area-header::before{
        opacity: 1;
        background:
          linear-gradient(180deg,
            rgba(4, 9, 16, 0.2) 0%,
            rgba(4, 9, 16, 0.02) 36%,
            rgba(4, 9, 16, 0.24) 70%,
            rgba(4, 9, 16, 0.64) 100%);
      }

      .area-content-area .area-header::after{
        bottom: -22px;
        height: 46px;
        opacity: 1;
        background:
          linear-gradient(180deg,
            rgba(255, 255, 255, 0.72) 0%,
            color-mix(in srgb, var(--primary-background-color) 86%, transparent) 100%);
        filter: blur(14px);
      }

      .area-content-area .area-mobile-toolbar{
        position: static;
        display: block;
        width: 100%;
        height: 0;
      }

      .area-content-area .area-mobile-home{
        top: calc(18px + env(safe-area-inset-top, 0px));
        left: 18px;
      }

      .area-content-area .area-mobile-actions{
        position: absolute;
        top: calc(18px + env(safe-area-inset-top, 0px));
        right: 18px;
        z-index: 6;
        grid-column: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .area-content-area .area-mobile-round,
.area-content-area .area-mobile-actions .unavailable-entities-icon{
        width: 48px;
        height: 48px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.56);
        background: rgba(255, 255, 255, 0.9);
        color: #14181f;
        backdrop-filter: blur(18px);
        box-shadow:
          0 14px 30px rgba(8, 13, 24, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.62);
      }

      .area-content-area .area-mobile-round ha-icon,
.area-content-area .area-mobile-round .dd-static-icon,
.area-content-area .area-mobile-actions .unavailable-entities-icon ha-icon{
        --mdc-icon-size: 22px;
        width: 22px;
        height: 22px;
        color: currentColor;
      }

      .area-content-area .area-mobile-camera{
        display: inline-flex;
      }

      .area-content-area .area-mobile-edit{
        background: rgba(255, 255, 255, 0.92);
        color: #14181f;
      }

      .area-content-area .area-mobile-edit.active{
        background: var(--primary-color);
        color: var(--text-primary-color);
      }

      .area-content-area .area-mobile-actions .unavailable-entities-icon{
        background: rgba(244, 67, 54, 0.94);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.34);
      }

      .area-content-area .area-mobile-actions .unavailable-count{
        top: -5px;
        right: -5px;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.92);
      }

      .area-content-area .area-header-content{
        position: absolute;
        top: calc(25px + env(safe-area-inset-top, 0px));
        left: 84px;
        right: 84px;
        width: auto;
        z-index: 4;
        justify-content: center;
        pointer-events: none;
      }

      .area-content-area .area-title-group{
        width: 100%;
      }

      .area-content-area .area-title{
        max-width: 100%;
        color: #ffffff;
        font-size: 17px;
        font-weight: 850;
        line-height: 1.05;
        text-shadow: 0 1px 12px rgba(0, 0, 0, 0.42);
      }

      .area-content-area .area-subtitle{
        color: rgba(255, 255, 255, 0.82);
        text-shadow: 0 1px 10px rgba(0, 0, 0, 0.36);
      }

      .area-content-area .area-mobile-quick-controls{
        position: absolute;
        left: 18px;
        right: auto;
        bottom: 18px;
        z-index: 5;
        justify-self: auto;
        max-width: calc(100% - 36px);
        min-height: 42px;
        padding: 5px;
        overflow-x: auto;
        scrollbar-width: none;
        background: rgba(255, 255, 255, 0.9);
        box-shadow:
          0 16px 30px rgba(8, 13, 24, 0.18),
          inset 0 1px 0 rgba(255, 255, 255, 0.66);
      }

      .area-content-area .area-mobile-quick-controls::-webkit-scrollbar{
        display: none;
      }

      .area-content-area .area-mobile-quick-controls.empty{
        display: none;
      }

      .area-content-area .area-header-metrics{
        position: absolute;
        left: 18px;
        right: 18px;
        bottom: 72px;
        z-index: 4;
        width: auto;
        margin: 0;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .area-content-area .area-header.has-metrics .area-mobile-quick-controls{
        bottom: 18px;
      }

      .area-content-area .area-header.has-metrics:not(.has-quick-controls) .area-header-metrics{
        bottom: 18px;
      }

      .area-content-area .area-header-metric{
        min-height: 58px;
        padding: 9px 10px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.86);
        backdrop-filter: blur(16px);
        box-shadow:
          0 14px 28px rgba(8, 13, 24, 0.16),
          inset 0 1px 0 rgba(255, 255, 255, 0.62),
          inset 0 0 0 1px color-mix(in srgb, var(--metric-color) 18%, transparent);
      }

      .area-content-area .area-header-metric .metric-ring{
        width: 38px;
        height: 38px;
      }

      .area-content-area .area-header-metric .metric-value,
.area-content-area .area-header-metric .metric-label,
.area-content-area .area-header-metric .metric-range,
.area-content-area .area-header-metric .metric-reading{
        color: #182044;
      }

      .area-content-area .area-header.is-stuck{
        min-height: 88px;
        padding: calc(8px + env(safe-area-inset-top, 0px)) 16px 10px;
        border-radius: 0;
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 94%, transparent) 0%,
            color-mix(in srgb, var(--card-background-color) 86%, transparent) 100%);
        color: var(--primary-text-color);
        backdrop-filter: blur(22px);
      }

      .area-content-area .area-header.is-stuck .area-header-background{
        opacity: 0;
      }

      .area-content-area .area-header.is-stuck::before{
        background: transparent;
      }

      .area-content-area .area-header.is-stuck .area-mobile-home,
.area-content-area .area-header.is-stuck .area-mobile-actions{
        top: calc(8px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header.is-stuck .area-mobile-round,
.area-content-area .area-header.is-stuck .area-mobile-actions .unavailable-entities-icon{
        width: 38px;
        height: 38px;
      }

      .area-content-area .area-header.is-stuck .area-mobile-actions{
        flex-direction: row;
        gap: 8px;
      }

      .area-content-area .area-header.is-stuck .area-header-content{
        top: calc(14px + env(safe-area-inset-top, 0px));
        left: 68px;
        right: 100px;
      }

      .area-content-area .area-header.is-stuck .area-title{
        color: var(--primary-text-color);
        text-shadow: none;
      }

      .area-content-area .area-header.is-stuck .area-subtitle{
        color: var(--secondary-text-color);
        text-shadow: none;
      }

      .area-content-area .area-header.is-stuck .area-mobile-quick-controls,
.area-content-area .area-header.is-stuck .area-header-metrics{
        display: none;
      }

      .area-content-area .area-header{
        min-height: 214px;
        background:
          radial-gradient(circle at 10% 0%, rgba(255, 255, 255, 0.92), transparent 28%),
          linear-gradient(180deg, #f8fafc 0%, #eef4f8 100%);
        color: var(--primary-text-color);
      }

      .area-content-area .area-header.has-metrics{
        min-height: 214px;
      }

      .area-content-area .area-header.has-picture{
        color: #ffffff;
      }

      .area-content-area .area-header:not(.has-picture)::before{
        background:
          linear-gradient(180deg,
            rgba(255, 255, 255, 0.72) 0%,
            rgba(255, 255, 255, 0.18) 46%,
            rgba(226, 235, 242, 0.78) 100%);
      }

      .area-content-area .area-mobile-home{
        top: calc(16px + env(safe-area-inset-top, 0px));
        left: 18px;
      }

      .area-content-area .area-mobile-actions{
        top: calc(16px + env(safe-area-inset-top, 0px));
        right: 18px;
      }

      .area-content-area .area-mobile-round,
.area-content-area .area-mobile-actions .unavailable-entities-icon{
        width: 44px;
        height: 44px;
        background: rgba(255, 255, 255, 0.92);
        box-shadow:
          0 12px 26px rgba(8, 13, 24, 0.16),
          inset 0 1px 0 rgba(255, 255, 255, 0.68);
      }

      .area-content-area .area-mobile-home{
        background:
          linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
          rgba(10, 12, 18, 0.86);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.1);
      }

      .area-content-area .area-header-content{
        top: calc(88px + env(safe-area-inset-top, 0px));
        left: 22px;
        right: 24px;
        justify-content: flex-start;
        text-align: left;
      }

      .area-content-area .area-header.has-metrics .area-header-content{
        right: 112px;
      }

      .area-content-area .area-title-group{
        justify-content: flex-start;
        text-align: left;
      }

      .area-content-area .area-title{
        margin: 0;
        max-width: 100%;
        color: var(--primary-text-color);
        font-size: 29px;
        font-weight: 900;
        line-height: 0.98;
        text-align: left;
        text-shadow: none;
      }

      .area-content-area .area-header.has-picture .area-title{
        color: #ffffff;
        text-shadow: 0 1px 16px rgba(0, 0, 0, 0.42);
      }

      .area-content-area .area-subtitle{
        margin-top: 6px;
        color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
        font-size: 13px;
        font-weight: 800;
        text-align: left;
        text-shadow: none;
      }

      .area-content-area .area-header.has-picture .area-subtitle{
        color: rgba(255, 255, 255, 0.78);
        text-shadow: 0 1px 12px rgba(0, 0, 0, 0.36);
      }

      .area-content-area .area-header-metrics{
        top: calc(90px + env(safe-area-inset-top, 0px));
        right: 18px;
        bottom: auto;
        left: auto;
        width: auto;
        grid-template-columns: 1fr;
        gap: 6px;
      }

      .area-content-area .area-header.has-metrics:not(.has-quick-controls) .area-header-metrics{
        bottom: auto;
      }

      .area-content-area .area-header-metric{
        min-height: 32px;
        padding: 5px 9px 5px 6px;
        gap: 6px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(16px);
        box-shadow:
          inset 0 0 0 1px rgba(255, 255, 255, 0.52),
          0 8px 18px rgba(15, 23, 42, 0.08);
      }

      .area-content-area .area-header.has-picture .area-header-metric{
        background: rgba(255, 255, 255, 0.66);
        box-shadow:
          0 10px 22px rgba(8, 13, 24, 0.16),
          inset 0 0 0 1px rgba(255, 255, 255, 0.22);
      }

      .area-content-area .area-header-metric .metric-ring{
        width: 22px;
        height: 22px;
        background: color-mix(in srgb, var(--metric-color) 14%, transparent);
        box-shadow: none;
      }

      .area-content-area .area-header-metric .metric-ring::after{
        display: none;
      }

      .area-content-area .area-header-metric .metric-ring ha-icon{
        --mdc-icon-size: 15px;
        color: var(--metric-color);
      }

      .area-content-area .area-header-metric .metric-value{
        font-size: 10px;
      }

      .area-content-area .area-header-metric .metric-label{
        display: none;
      }

      .area-content-area .area-header-metric .metric-reading{
        margin-top: 0;
        color: #101827;
        font-size: 12px;
        font-weight: 950;
        line-height: 1;
      }

      .area-content-area .area-header-metric .metric-range{
        display: none;
      }

      .area-content-area .area-mobile-quick-controls{
        top: calc(154px + env(safe-area-inset-top, 0px));
        left: 22px;
        right: 24px;
        bottom: auto;
        margin: 0;
        justify-content: flex-start;
        max-width: calc(100% - 48px);
        width: max-content;
        padding: 0;
        background: transparent;
        box-shadow: none;
      }

      .area-content-area .area-header.has-metrics .area-mobile-quick-controls{
        top: calc(154px + env(safe-area-inset-top, 0px));
        bottom: auto;
      }

      .area-content-area .area-header.has-metrics.has-quick-controls{
        min-height: 214px;
      }

      .area-content-area .area-header.is-stuck{
        min-height: 84px;
      }

      .area-content-area .area-header.is-stuck .area-header-content{
        top: calc(13px + env(safe-area-inset-top, 0px));
        left: 68px;
        right: 106px;
      }

      .area-content-area .area-header.is-stuck .area-title{
        font-size: 16px;
      }

      .area-content-area .area-header{
        box-sizing: border-box;
        min-height: calc(146px + env(safe-area-inset-top, 0px));
        margin: 0 -10px 18px;
        padding: calc(12px + env(safe-area-inset-top, 0px)) 16px 12px;
        border-radius: 0 0 18px 18px;
        background:
          radial-gradient(circle at 10% -8%, color-mix(in srgb, var(--primary-color) 14%, transparent) 0%, transparent 34%),
          radial-gradient(circle at 92% 4%, color-mix(in srgb, #35b7d7 10%, transparent) 0%, transparent 30%),
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 94%, var(--primary-color) 6%) 0%,
            color-mix(in srgb, var(--card-background-color) 90%, #dff4fb 10%) 62%,
            color-mix(in srgb, var(--primary-background-color) 82%, var(--card-background-color) 18%) 100%);
        box-shadow:
          0 14px 34px rgba(15, 23, 42, 0.1),
          inset 0 -1px 0 color-mix(in srgb, var(--primary-color) 13%, var(--divider-color));
      }

      .area-content-area .area-header.has-metrics,
.area-content-area .area-header.has-quick-controls,
.area-content-area .area-header.has-metrics.has-quick-controls{
        min-height: calc(154px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header.has-picture{
        min-height: calc(178px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header.has-picture.has-metrics,
.area-content-area .area-header.has-picture.has-quick-controls{
        min-height: calc(186px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header:not(.has-picture)::before{
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 42%, transparent) 0%,
            transparent 52%,
            color-mix(in srgb, var(--primary-color) 5%, transparent) 100%);
        opacity: 1;
      }

      .area-content-area .area-header::after{
        bottom: -20px;
        height: 40px;
        opacity: 0.88;
        filter: blur(12px);
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--primary-color) 7%, var(--card-background-color)) 0%,
            transparent 82%);
      }

      .area-content-area .area-mobile-home{
        top: calc(14px + env(safe-area-inset-top, 0px));
        left: 18px;
      }

      .area-content-area .area-mobile-actions{
        top: calc(14px + env(safe-area-inset-top, 0px));
        right: 18px;
        flex-direction: row;
        gap: 8px;
      }

      .area-content-area .area-mobile-round,
.area-content-area .area-mobile-actions .unavailable-entities-icon{
        width: 40px;
        height: 40px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--card-background-color) 92%, transparent);
        color: var(--primary-text-color);
        box-shadow:
          0 10px 24px rgba(15, 23, 42, 0.12),
          inset 0 0 0 1px color-mix(in srgb, var(--divider-color) 62%, transparent);
      }

      .area-content-area .area-mobile-home{
        background:
          linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
          rgba(10, 12, 18, 0.86);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.1);
      }

      .area-content-area .area-mobile-round ha-icon,
.area-content-area .area-mobile-round .dd-static-icon,
.area-content-area .area-mobile-actions .unavailable-entities-icon ha-icon{
        --mdc-icon-size: 20px;
        width: 20px;
        height: 20px;
      }

      .area-content-area .area-header-content{
        top: calc(58px + env(safe-area-inset-top, 0px));
        left: 20px;
        right: 22px;
        justify-content: flex-start;
      }

      .area-content-area .area-header.has-metrics .area-header-content{
        right: 136px;
      }

      .area-content-area .area-title{
        max-width: 100%;
        font-size: 25px;
        font-weight: 900;
        line-height: 1.02;
        letter-spacing: 0;
      }

      .area-content-area .area-subtitle{
        margin-top: 3px;
        padding-bottom: 5px;
        font-size: 12px;
        font-weight: 800;
        line-height: 1.1;
      }

      .area-content-area .area-header-metrics{
        top: calc(63px + env(safe-area-inset-top, 0px));
        right: 18px;
        left: auto;
        bottom: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .area-content-area .area-header.has-metrics:not(.has-quick-controls) .area-header-metrics{
        bottom: auto;
      }

      .area-content-area .area-header-metric{
        min-height: 29px;
        height: 29px;
        min-width: 96px;
        padding: 4px 9px 4px 5px;
        gap: 6px;
        border-radius: 999px;
        background:
          linear-gradient(135deg,
            color-mix(in srgb, var(--metric-color) 13%, var(--card-background-color)) 0%,
            color-mix(in srgb, var(--metric-color) 4%, var(--card-background-color)) 100%);
        box-shadow:
          0 8px 18px rgba(15, 23, 42, 0.08),
          inset 0 0 0 1px color-mix(in srgb, var(--metric-color) 16%, transparent);
      }

      .area-content-area .area-header.has-picture .area-header-metric{
        background: rgba(255, 255, 255, 0.76);
      }

      .area-content-area .area-header-metric .metric-ring{
        width: 21px;
        height: 21px;
      }

      .area-content-area .area-header-metric .metric-ring ha-icon{
        --mdc-icon-size: 14px;
      }

      .area-content-area .area-header-metric .metric-copy{
        min-width: 0;
        display: flex;
        align-items: center;
      }

      .area-content-area .area-header-metric .metric-reading{
        max-width: 62px;
        overflow: hidden;
        color: var(--primary-text-color);
        font-size: 12px;
        font-weight: 950;
        text-overflow: ellipsis;
      }

      .area-content-area .area-mobile-quick-controls,
.area-content-area .area-header.has-metrics .area-mobile-quick-controls{
        top: auto;
        bottom: 8px;
        left: 20px;
        right: 20px;
        width: auto;
        max-width: none;
        min-height: 36px;
        padding: 3px;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: stretch;
        overflow-x: auto;
        border-radius: 999px;
        background: color-mix(in srgb, var(--card-background-color) 90%, transparent);
        box-shadow:
          0 10px 24px rgba(15, 23, 42, 0.1),
          inset 0 0 0 1px color-mix(in srgb, var(--divider-color) 58%, transparent);
      }

      .area-content-area .area-header:not(.has-metrics) .area-mobile-quick-controls{
        top: auto;
        bottom: 8px;
        right: 20px;
        width: auto;
        max-width: none;
      }

      .area-content-area .area-mobile-quick-controls.count-2{
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .area-content-area .area-mobile-quick-controls.count-3{
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .area-content-area .area-mobile-quick-controls.count-4,
.area-content-area .area-mobile-quick-controls.count-5{
        display: flex;
        justify-content: flex-start;
        overflow-x: auto;
      }

      .area-content-area .area-mobile-quick-controls.count-4 > .area-quick-control,
.area-content-area .area-mobile-quick-controls.count-5 > .area-quick-control{
        flex: 0 0 auto;
        width: auto;
        min-width: 88px;
      }

      .area-content-area .area-mobile-quick-controls.count-1{
        right: auto;
        width: min(148px, calc(50% - 20px));
        min-width: 122px;
      }

      .area-content-area .area-header.has-metrics .area-mobile-quick-controls.count-1{
        right: auto;
        width: min(148px, calc(100% - 176px));
      }

      .area-content-area .area-quick-control{
        min-width: 48px;
        width: 100%;
        height: 30px;
        padding: 0 6px 0 8px;
        justify-content: space-between;
      }

      .area-content-area .area-quick-control ha-icon{
        --mdc-icon-size: 16px;
      }

      .area-content-area .area-quick-count{
        font-size: 10px;
      }

      .area-content-area .area-quick-switch{
        width: 24px;
        height: 15px;
      }

      .area-content-area .area-quick-switch::after{
        top: 3px;
        left: 3px;
        width: 9px;
        height: 9px;
      }

      .area-content-area .area-quick-control.active .area-quick-switch::after{
        transform: translateX(9px);
      }

      .area-content-area .area-quick-direction{
        width: 20px;
        height: 20px;
      }

      .area-content-area .area-quick-direction ha-icon{
        --mdc-icon-size: 14px;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-mobile-home{
        background: rgba(10, 16, 38, 0.86);
        color: #ffffff;
        box-shadow:
          0 14px 30px rgba(0, 0, 0, 0.28),
          inset 0 0 0 1px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(18px) saturate(1.25);
        -webkit-backdrop-filter: blur(18px) saturate(1.25);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-mobile-home ha-icon,
.area-content-area .area-header.has-picture:not(.is-stuck) .area-mobile-home .dd-static-icon{
        color: #ffffff;
        opacity: 1;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-mobile-actions .area-mobile-round{
        background: rgba(255, 255, 255, 0.86);
        color: #0f172a;
        box-shadow:
          0 14px 30px rgba(0, 0, 0, 0.22),
          inset 0 0 0 1px rgba(255, 255, 255, 0.34);
        backdrop-filter: blur(18px) saturate(1.22);
        -webkit-backdrop-filter: blur(18px) saturate(1.22);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-mobile-quick-controls,
.area-content-area .area-header.has-picture:not(.is-stuck).has-metrics .area-mobile-quick-controls{
        background: rgba(255, 255, 255, 0.9);
        box-shadow:
          0 16px 32px rgba(0, 0, 0, 0.2),
          inset 0 0 0 1px rgba(255, 255, 255, 0.42);
        backdrop-filter: blur(18px) saturate(1.18);
        -webkit-backdrop-filter: blur(18px) saturate(1.18);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control{
        color: rgba(15, 23, 42, 0.66);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.active{
        background: color-mix(in srgb, var(--domain-color, #182044) 16%, rgba(15, 23, 42, 0.06));
        color: var(--domain-color, #182044);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.light{
        --domain-color: #d99a12;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.switch{
        --domain-color: #2f73d6;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.cover{
        --domain-color: #7c4fc7;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.fan{
        --domain-color: #15967f;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.climate{
        --domain-color: #2f9ed6;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-switch{
        background: rgba(15, 23, 42, 0.16);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.active .area-quick-switch{
        background: var(--domain-color, #182044);
      }

      .area-content-area .area-header{
        position: relative;
        top: auto;
        z-index: 3;
      }

      .area-content-area .area-header.is-stuck,
.area-content-area .area-header.is-stuck.has-metrics,
.area-content-area .area-header.is-stuck.has-quick-controls,
.area-content-area .area-header.is-stuck.has-metrics.has-quick-controls,
.area-content-area .area-header.is-stuck.has-picture,
.area-content-area .area-header.is-stuck.has-picture.has-metrics,
.area-content-area .area-header.is-stuck.has-picture.has-quick-controls{
        position: sticky;
        top: 0;
        z-index: 90;
        min-height: calc(62px + env(safe-area-inset-top, 0px));
        margin-bottom: 4px;
        padding: calc(8px + env(safe-area-inset-top, 0px)) 14px 7px;
        border-radius: 0;
      }

      .area-content-area .area-header.is-stuck .area-mobile-home,
.area-content-area .area-header.is-stuck .area-mobile-actions{
        top: calc(9px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header.is-stuck .area-mobile-round,
.area-content-area .area-header.is-stuck .area-mobile-actions .unavailable-entities-icon{
        width: 36px;
        height: 36px;
      }

      .area-content-area .area-header.is-stuck .area-header-content{
        top: calc(10px + env(safe-area-inset-top, 0px));
        left: 66px;
        right: 66px;
      }

      .area-content-area .area-header.is-stuck .area-title{
        font-size: 15px;
        line-height: 1.05;
      }

      .area-content-area .area-header.is-stuck .area-subtitle{
        display: block;
        margin-top: 2px;
        padding-bottom: 0;
        color: color-mix(in srgb, var(--secondary-text-color) 88%, var(--primary-text-color) 12%);
        font-size: 11px;
        font-weight: 800;
        line-height: 1.05;
        text-shadow: none;
      }

      .area-content-area .area-header.is-stuck::after,
.area-content-area .area-header.is-stuck .area-mobile-quick-controls,
.area-content-area .area-header.is-stuck.has-metrics .area-mobile-quick-controls,
.area-content-area .area-header.is-stuck.has-quick-controls .area-mobile-quick-controls,
.area-content-area .area-header.is-stuck .area-header-metrics,
.area-content-area .area-header.is-stuck .area-badges{
        display: none;
      }

      .area-content-area .area-header.is-stuck.is-revealed{
        overflow: visible;
      }

      .area-content-area .area-header.is-stuck.is-revealed::before{
        content: "";
        position: absolute;
        inset: 0 0 auto;
        height: calc(154px + env(safe-area-inset-top, 0px));
        display: block;
        border-radius: 0 0 18px 18px;
        background:
          radial-gradient(circle at 10% -8%, color-mix(in srgb, var(--primary-color) 14%, transparent) 0%, transparent 34%),
          radial-gradient(circle at 92% 4%, color-mix(in srgb, #35b7d7 10%, transparent) 0%, transparent 30%),
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 94%, var(--primary-color) 6%) 0%,
            color-mix(in srgb, var(--card-background-color) 90%, #dff4fb 10%) 62%,
            color-mix(in srgb, var(--primary-background-color) 82%, var(--card-background-color) 18%) 100%);
        box-shadow:
          0 14px 34px rgba(15, 23, 42, 0.12),
          inset 0 -1px 0 color-mix(in srgb, var(--primary-color) 13%, var(--divider-color));
        pointer-events: none;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-header-content{
        top: calc(58px + env(safe-area-inset-top, 0px));
        left: 20px;
        right: 22px;
        justify-content: flex-start;
      }

      .area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-header-content{
        right: 136px;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-title{
        font-size: 25px;
        line-height: 1.02;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-subtitle{
        display: block;
        margin-top: 3px;
        padding-bottom: 5px;
        color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
        font-size: 12px;
        font-weight: 800;
        line-height: 1.1;
      }

      .area-content-area .area-header.is-stuck.is-revealed.has-picture .area-title,
.area-content-area .area-header.is-stuck.is-revealed.has-picture .area-subtitle{
        color: var(--primary-text-color);
        text-shadow: none;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-header-metrics{
        top: calc(63px + env(safe-area-inset-top, 0px));
        right: 18px;
        left: auto;
        bottom: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls,
.area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-mobile-quick-controls,
.area-content-area .area-header.is-stuck.is-revealed.has-quick-controls .area-mobile-quick-controls{
        top: calc(110px + env(safe-area-inset-top, 0px));
        bottom: auto;
        left: 20px;
        right: 20px;
        width: auto;
        max-width: none;
        min-height: 36px;
        padding: 3px;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: stretch;
        border-radius: 999px;
        background: color-mix(in srgb, var(--card-background-color) 90%, transparent);
        box-shadow:
          0 10px 24px rgba(15, 23, 42, 0.1),
          inset 0 0 0 1px color-mix(in srgb, var(--divider-color) 58%, transparent);
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls.count-2{
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls.count-3{
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls.count-1{
        right: auto;
        width: min(148px, calc(50% - 20px));
        min-width: 122px;
      }

      .area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-mobile-quick-controls.count-1{
        right: auto;
        width: min(148px, calc(100% - 176px));
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls.empty{
        display: none;
      }

      /*
       * Mobile HA already lays the dashboard out below the iOS/top safe area.
       * Adding env(safe-area-inset-top) inside DD Next a second time creates the
       * large empty strip visible above the home greeting and room controls.
       */
      .home-welcome{
        padding-top: 16px;
      }

      .area-content-area .area-header:not(.is-stuck),
.area-content-area .area-header:not(.is-stuck).has-metrics,
.area-content-area .area-header:not(.is-stuck).has-quick-controls,
.area-content-area .area-header:not(.is-stuck).has-metrics.has-quick-controls{
        min-height: 174px;
      }

      .area-content-area .area-header:not(.is-stuck).has-picture,
.area-content-area .area-header:not(.is-stuck).has-picture.has-metrics,
.area-content-area .area-header:not(.is-stuck).has-picture.has-quick-controls{
        min-height: 194px;
      }

      .area-content-area .area-mobile-home,
.area-content-area .area-mobile-actions{
        top: 14px;
      }

      .area-content-area .area-header-content,
.area-content-area .area-header.has-metrics .area-header-content{
        top: 58px;
      }

      .area-content-area .area-header-metrics{
        top: 63px;
      }

      /*
       * Quick controls are compact controls,
not a full-width second toolbar.
       * Keeping them content-sized prevents the switch thumb from ending up
       * visually detached at the far right edge of the header.
       */
      .area-content-area .area-mobile-quick-controls,
.area-content-area .area-header.has-metrics .area-mobile-quick-controls,
.area-content-area .area-header.has-quick-controls .area-mobile-quick-controls{
        top: auto;
        right: auto;
        bottom: 10px;
        left: 20px;
        width: max-content;
        max-width: calc(100% - 40px);
        display: flex;
        grid-template-columns: none;
        justify-content: flex-start;
        overflow-x: auto;
      }

      .area-content-area .area-header.has-metrics .area-mobile-quick-controls{
        max-width: calc(100% - 154px);
      }

      .area-content-area .area-mobile-quick-controls > .area-quick-control,
.area-content-area .area-mobile-quick-controls.count-1 > .area-quick-control,
.area-content-area .area-mobile-quick-controls.count-2 > .area-quick-control,
.area-content-area .area-mobile-quick-controls.count-3 > .area-quick-control,
.area-content-area .area-mobile-quick-controls.count-4 > .area-quick-control,
.area-content-area .area-mobile-quick-controls.count-5 > .area-quick-control{
        width: auto;
        min-width: 88px;
        flex: 0 0 auto;
      }

      .area-content-area .area-header.is-stuck,
.area-content-area .area-header.is-stuck.has-metrics,
.area-content-area .area-header.is-stuck.has-quick-controls,
.area-content-area .area-header.is-stuck.has-metrics.has-quick-controls{
        min-height: 62px;
        padding-top: 8px;
      }

      .area-content-area .area-header.is-stuck .area-mobile-home,
.area-content-area .area-header.is-stuck .area-mobile-actions{
        top: 9px;
      }

      .area-content-area .area-header.is-stuck .area-header-content{
        top: 10px;
      }

      .area-content-area .area-header.is-stuck.is-revealed,
.area-content-area .area-header.is-stuck.is-revealed.has-metrics,
.area-content-area .area-header.is-stuck.is-revealed.has-quick-controls,
.area-content-area .area-header.is-stuck.is-revealed.has-metrics.has-quick-controls{
        min-height: 174px;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-header-content,
.area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-header-content{
        top: 58px;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-header-metrics{
        top: 63px;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls,
.area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-mobile-quick-controls,
.area-content-area .area-header.is-stuck.is-revealed.has-quick-controls .area-mobile-quick-controls{
        top: auto;
        bottom: 10px;
        left: 20px;
        right: auto;
        width: max-content;
        max-width: calc(100% - 40px);
        display: flex;
      }

      .area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-mobile-quick-controls{
        max-width: calc(100% - 154px);
      }

      /* Keep the expanded room header geometrically honest: earlier variants used a
         short physical header plus absolutely-positioned content,
which could overlap
         the subtitle and the first controls row on iPhone-sized viewports. */
      .area-content-area .area-header:not(.is-stuck),
.area-content-area .area-header:not(.is-stuck).has-metrics,
.area-content-area .area-header:not(.is-stuck).has-quick-controls,
.area-content-area .area-header:not(.is-stuck).has-metrics.has-quick-controls{
        min-height: calc(174px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header:not(.is-stuck).has-picture,
.area-content-area .area-header:not(.is-stuck).has-picture.has-metrics,
.area-content-area .area-header:not(.is-stuck).has-picture.has-quick-controls{
        min-height: calc(194px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header:not(.is-stuck) .area-mobile-quick-controls,
.area-content-area .area-header:not(.is-stuck).has-metrics .area-mobile-quick-controls,
.area-content-area .area-header:not(.is-stuck).has-quick-controls .area-mobile-quick-controls{
        top: auto;
        bottom: 10px;
      }

      .area-content-area .area-header.is-stuck.is-revealed,
.area-content-area .area-header.is-stuck.is-revealed.has-metrics,
.area-content-area .area-header.is-stuck.is-revealed.has-quick-controls,
.area-content-area .area-header.is-stuck.is-revealed.has-metrics.has-quick-controls{
        min-height: calc(174px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header.is-stuck.is-revealed::before{
        height: 100%;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls,
.area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-mobile-quick-controls,
.area-content-area .area-header.is-stuck.is-revealed.has-quick-controls .area-mobile-quick-controls{
        top: auto;
        bottom: 10px;
      }

      .area-view .entities-section,
.area-view .dd-custom-section{
        position: relative;
        z-index: 2;
      }

      .area-view .entities-section{
        display: none;
      }

      .mobile-area-overview{
        display: block;
        position: relative;
        z-index: 2;
        margin: 12px 0 20px;
      }

      .mobile-entities-section{
        display: grid;
        position: relative;
        z-index: 2;
      }

      .layout-container > .sidebar,
.sidebar{
        position: fixed !important;
        left: 18px !important;
        right: 18px !important;
        top: auto !important;
        bottom: calc(96px + env(safe-area-inset-bottom, 0px)) !important;
        width: auto !important;
        height: auto !important;
        max-height: min(72vh, 620px);
        padding: 12px;
        overflow-y: auto;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        background: rgba(255, 255, 255, 0.94);
        box-shadow: 0 22px 48px rgba(0, 0, 0, 0.24);
        backdrop-filter: blur(20px);
        transform: translate3d(0, calc(100% + 140px), 0) !important;
        transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
        z-index: 121;
      }

      .layout-container > .sidebar.open,
.sidebar.open{
        transform: translate3d(0, 0, 0) !important;
      }

      .sidebar::before{
        content: "";
        width: 42px;
        height: 4px;
        margin: 0 auto 10px;
        display: block;
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.14);
      }

      .mobile-area-picker-head{
        min-height: 42px;
        margin: 0 2px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .mobile-area-picker-title{
        min-width: 0;
        color: var(--primary-text-color);
        font-size: 20px;
        font-weight: 850;
        line-height: 1.1;
      }

      .mobile-area-picker-close{
        width: 38px;
        height: 38px;
        padding: 0;
        border: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        background: color-mix(in srgb, var(--card-background-color) 92%, transparent);
        color: var(--primary-text-color);
      }

      .mobile-area-picker-close ha-icon{
        --mdc-icon-size: 21px;
      }

      .sidebar .area-list{
        padding: 0;
      }

      .sidebar .floor-section{
        margin-bottom: 12px;
      }

      .sidebar .floor-header{
        padding: 6px 12px 9px;
      }

      .sidebar .floor-header h3{
        font-size: 13px;
        font-weight: 850;
        letter-spacing: 0;
        text-transform: none;
      }

      .sidebar .area-button{
        min-height: 64px;
        height: auto;
        margin-bottom: 8px;
        padding: 11px 12px 11px 56px;
        border-radius: 9px;
        border: 1px solid rgba(15, 23, 42, 0.06);
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 97%, #ffffff),
            color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color)));
        box-shadow:
          0 10px 22px rgba(15, 23, 42, 0.07),
          inset 0 1px 0 rgba(255, 255, 255, 0.42);
      }

      .sidebar .area-button.home-button{
        height: 48px;
        min-height: 48px;
        padding: 10px 14px 10px 54px;
        border-radius: 8px;
      }

      .sidebar .area-button.home-button .area-icon{
        position: absolute;
        left: 12px;
        top: 50%;
        width: 34px;
        height: 34px;
        transform: translateY(-50%);
        border-radius: 999px;
      }

      .sidebar .area-button.selected,
.sidebar .area-button.home-button.selected{
        border-color: color-mix(in srgb, var(--primary-color) 42%, transparent);
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--primary-color) 88%, #ffffff 10%),
            var(--primary-color));
        color: var(--text-primary-color);
        box-shadow:
          0 14px 28px color-mix(in srgb, var(--primary-color) 24%, transparent),
          inset 0 1px 0 rgba(255, 255, 255, 0.2);
      }

      .sidebar .area-content{
        min-height: 42px;
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        grid-template-rows: auto auto;
        align-items: center;
        gap: 3px 10px;
      }

      .sidebar .area-top-section{
        min-width: 0;
        margin-top: 0;
        grid-column: 1;
        grid-row: 1 / span 2;
      }

      .sidebar .area-bottom-section{
        display: contents;
        min-height: 0;
      }

      .sidebar .area-main-icon{
        position: absolute;
        left: -44px;
        top: 50%;
        bottom: auto;
        width: 34px;
        height: 34px;
        border-radius: 10px;
        transform: translateY(-50%);
        background: color-mix(in srgb, var(--primary-color) 12%, transparent);
        box-shadow: none;
      }

      .sidebar .area-main-icon ha-icon{
        --mdc-icon-size: 20px;
      }

      .sidebar .area-button.has-picture{
        min-height: 70px;
        color: var(--area-picture-text-color, #ffffff);
        border-color: rgba(255, 255, 255, 0.18);
        background: #182044;
      }

      .sidebar .area-button.has-picture.selected{
        border-color: color-mix(in srgb, var(--primary-color) 44%, rgba(255, 255, 255, 0.18));
        box-shadow:
          0 14px 30px rgba(15, 23, 42, 0.18),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 34%, transparent);
      }

      .sidebar .area-button.has-picture::after{
        content: "";
        position: absolute;
        inset: 0;
        z-index: 0;
        background: var(--area-picture-overlay);
        pointer-events: none;
      }

      .sidebar .area-button.has-picture .area-background{
        opacity: 0.78;
        transform: scale(1.02);
      }

      .sidebar .area-button.has-picture .area-content,
.sidebar .area-button.has-picture .area-info-badges,
.sidebar .area-button.has-picture .area-main-icon{
        z-index: 1;
      }

      .sidebar .area-info-badges{
        position: relative;
        top: auto;
        right: auto;
        grid-column: 2;
        grid-row: 1 / span 2;
        max-width: 130px;
        justify-content: flex-end;
        align-self: center;
        gap: 5px;
      }

      .sidebar .area-name{
        max-width: 100%;
        margin: 0;
        font-size: 15px;
        font-weight: 850;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sidebar .area-sensors{
        margin-top: 4px;
        color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
        font-size: 12px;
        font-weight: 700;
        line-height: 1.1;
      }

      .sidebar .area-button.has-picture .area-sensors{
        color: var(--area-picture-muted-text-color, rgba(255, 255, 255, 0.72));
      }

      .sidebar .info-badge{
        min-width: 24px;
        height: 22px;
        padding: 0 7px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color));
        box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.04);
      }

      .sidebar .info-badge ha-icon{
        --mdc-icon-size: 13px;
      }

      .sidebar .badge-count{
        font-size: 11px;
        font-weight: 850;
      }

      .sidebar .area-button.has-picture .info-badge{
        background: color-mix(in srgb, var(--badge-color, var(--primary-color)) 18%, rgba(255, 255, 255, 0.88));
        color: var(--badge-color, var(--primary-color));
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 12px rgba(15, 23, 42, 0.16);
      }

      .sidebar .area-button.selected .area-main-icon,
.sidebar .area-button.selected .area-icon{
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
        color: var(--primary-color);
      }

      .sidebar .area-list{
        display: grid;
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 8px;
      }

      .sidebar .floor-section{
        display: grid;
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 8px;
        margin-bottom: 10px;
      }

      .sidebar .floor-areas{
        display: grid;
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 8px;
      }

      .sidebar .floor-header{
        margin: 0;
        padding: 4px 6px 2px;
      }

      .sidebar .floor-header h3{
        color: var(--secondary-text-color);
        font-size: 14px;
        font-weight: 760;
        line-height: 1.2;
      }

      .sidebar .area-button,
.sidebar .area-button.home-button{
        display: grid;
        grid-template-columns: 48px minmax(0, 1fr) auto 22px;
        align-items: center;
        gap: 12px;
        min-height: 68px;
        height: auto;
        margin: 0;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid rgba(15, 23, 42, 0.06);
        background: rgba(255, 255, 255, 0.92);
        color: var(--primary-text-color);
        box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);
        transform: none;
      }

      .sidebar .area-button:hover{
        transform: translateY(-1px);
        box-shadow: 0 12px 24px rgba(15, 23, 42, 0.09);
      }

      .sidebar .area-button.selected,
.sidebar .area-button.home-button.selected{
        border-color: color-mix(in srgb, var(--primary-color) 58%, transparent);
        background: color-mix(in srgb, var(--card-background-color) 90%, var(--primary-color) 10%);
        color: var(--primary-text-color);
        box-shadow:
          0 14px 28px rgba(15, 23, 42, 0.1),
          inset 4px 0 0 var(--primary-color),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 16%, transparent);
      }

      .sidebar .area-button.home-button .area-icon,
.sidebar .area-icon,
.sidebar .area-main-icon{
        position: relative;
        left: auto;
        top: auto;
        bottom: auto;
        grid-column: 1;
        grid-row: 1;
        width: 46px;
        height: 46px;
        border-radius: 8px;
        transform: none;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
        color: var(--primary-color);
        box-shadow: none;
      }

      .sidebar .area-button.home-button .area-icon{
        position: relative;
        left: auto;
        top: auto;
      }

      .sidebar .area-main-icon ha-icon,
.sidebar .area-icon ha-icon{
        --mdc-icon-size: 24px;
        color: currentColor;
      }

      .sidebar .area-content{
        display: contents;
        width: auto;
        height: auto;
        min-height: 0;
      }

      .sidebar .area-info,
.sidebar .area-top-section{
        grid-column: 2;
        grid-row: 1;
        min-width: 0;
        margin: 0;
      }

      .sidebar .area-bottom-section{
        display: contents;
      }

      .sidebar .area-name{
        margin: 0;
        color: inherit;
        font-size: 15px;
        font-weight: 750;
        line-height: 1.1;
      }

      .sidebar .area-sensors{
        margin-top: 4px;
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 500;
        line-height: 1.1;
      }

      .sidebar .area-info-badges{
        position: relative;
        top: auto;
        right: auto;
        grid-column: 3;
        grid-row: 1;
        max-width: 104px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 4px;
        z-index: 1;
      }

      .sidebar .area-menu-chevron{
        display: block;
        grid-column: 4;
        grid-row: 1;
        z-index: 1;
        --mdc-icon-size: 22px;
        color: rgba(15, 23, 42, 0.52);
        transition: transform 0.18s ease, color 0.18s ease;
      }

      .sidebar .home-notification-shortcut{
        grid-column: 3;
        grid-row: 1;
        justify-self: end;
        width: auto;
        min-width: 44px;
        height: 30px;
        margin-left: 0;
      }

      .sidebar .area-button.selected .area-menu-chevron{
        color: var(--primary-color);
        transform: translateX(2px);
      }

      .sidebar .area-button.has-picture{
        min-height: 68px;
        border-color: rgba(15, 23, 42, 0.12);
        background: rgba(18, 24, 38, 0.9);
        color: var(--area-picture-text-color, #ffffff);
      }

      .sidebar .area-button.has-picture.selected{
        border-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.48);
        background: rgba(18, 24, 38, 0.92);
        box-shadow:
          0 14px 28px rgba(15, 23, 42, 0.16),
          inset 3px 0 0 var(--primary-color);
      }

      .sidebar .area-button.has-picture .area-background{
        opacity: 0.78;
        transform: scale(1.02);
      }

      .sidebar .area-button.has-picture .area-top-section,
.sidebar .area-button.has-picture .area-name,
.sidebar .area-button.has-picture .area-sensors,
.sidebar .area-button.has-picture .area-menu-chevron,
.sidebar .area-button.has-picture .area-info-badges,
.sidebar .area-button.has-picture .area-main-icon,
.sidebar .area-button.has-picture .area-icon{
        position: relative;
        z-index: 2;
      }

      .sidebar .area-button.has-picture::after{
        background: var(--area-picture-overlay);
      }

      .sidebar .area-button.has-picture .area-name{
        width: fit-content;
        max-width: 100%;
        padding: 4px 8px;
        margin-left: -2px;
        border-radius: 8px;
        color: #ffffff;
        background: linear-gradient(90deg, rgba(8, 13, 24, 0.66), rgba(8, 13, 24, 0.28));
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.72);
        backdrop-filter: blur(2px);
      }

      .sidebar .area-button.has-picture .area-main-icon,
.sidebar .area-button.has-picture .area-icon{
        background: rgba(255, 255, 255, 0.18);
        color: var(--area-picture-text-color, #ffffff);
        backdrop-filter: blur(10px);
      }

      .sidebar .area-button.has-picture .area-sensors,
.sidebar .area-button.has-picture .area-menu-chevron{
        color: var(--area-picture-muted-text-color, rgba(255, 255, 255, 0.72));
      }

      .sidebar .area-button.has-picture.selected .area-menu-chevron{
        color: var(--area-picture-text-color, #ffffff);
      }

      .sidebar .area-button.has-picture.text-dark .area-main-icon,
.sidebar .area-button.has-picture.text-dark .area-icon{
        background: rgba(255, 255, 255, 0.18);
        color: var(--area-picture-text-color, #ffffff);
      }

      .sidebar .area-button.has-picture.text-dark .info-badge{
        background: color-mix(in srgb, var(--badge-color, var(--primary-color)) 18%, rgba(255, 255, 255, 0.88));
        color: var(--badge-color, var(--primary-color));
      }

      .mobile-nav-overlay{
        z-index: 120 !important;
        background: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(2px);
      }

      :host([data-theme-dark]){
        .layout-container > .sidebar,
        .sidebar {
          border-color: rgba(255, 255, 255, 0.1);
          background:
            linear-gradient(180deg, rgba(37, 40, 48, 0.96), rgba(18, 20, 25, 0.94)),
            color-mix(in srgb, var(--card-background-color) 92%, #000000);
          box-shadow:
            0 24px 58px rgba(0, 0, 0, 0.58),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          color: var(--primary-text-color);
        }

        .sidebar::before {
          background: rgba(255, 255, 255, 0.18);
        }

        .sidebar .floor-header h3 {
          color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
        }

        .sidebar .area-button {
          border: 1px solid rgba(255, 255, 255, 0.06);
          background:
            linear-gradient(180deg,
              color-mix(in srgb, var(--card-background-color) 86%, #ffffff 4%),
              color-mix(in srgb, var(--card-background-color) 96%, #000000 4%));
          color: var(--primary-text-color);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.24);
        }

        .sidebar .area-button.selected,
        .sidebar .area-button.home-button.selected {
          border-color: color-mix(in srgb, var(--primary-color) 42%, transparent);
          background:
            linear-gradient(180deg,
              color-mix(in srgb, var(--card-background-color) 90%, var(--primary-color) 12%),
              color-mix(in srgb, var(--card-background-color) 96%, #000000 5%));
          color: var(--primary-text-color);
          box-shadow:
            0 14px 30px rgba(0, 0, 0, 0.36),
            inset 3px 0 0 var(--primary-color),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .sidebar .area-button.has-picture {
          border-color: rgba(255, 255, 255, 0.08);
          background: #17202b;
        }

        .sidebar .area-button.has-picture .area-background {
          opacity: 0.58;
        }

        .sidebar .area-button.has-picture:hover .area-background {
          opacity: 0.66;
        }

        .sidebar .area-main-icon,
        .sidebar .area-icon {
          background: color-mix(in srgb, var(--primary-color) 22%, transparent);
          color: var(--primary-color);
        }

        .sidebar .area-button.selected .area-main-icon,
        .sidebar .area-button.selected .area-icon {
          background: color-mix(in srgb, var(--primary-color) 24%, transparent);
          color: var(--primary-color);
        }

        .sidebar .area-menu-chevron,
        .sidebar .area-button.selected .area-menu-chevron {
          color: color-mix(in srgb, var(--primary-text-color) 62%, transparent);
        }

        .sidebar .area-button.selected .area-menu-chevron {
          color: var(--primary-color);
        }

        .sidebar .area-sensors,
        .sidebar .area-bottom-section {
          color: color-mix(in srgb, var(--primary-text-color) 68%, transparent);
        }

        .sidebar .info-badge {
          background: rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        }

        .home-notification-shortcut {
          color: #ff9a9a;
          background: rgba(239, 68, 68, 0.16);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.05),
            0 8px 18px rgba(0, 0, 0, 0.18);
        }

        .mobile-nav-overlay {
          background: rgba(0, 0, 0, 0.58);
          backdrop-filter: blur(4px);
        }
      }

      .home-view,
.home-content-area{
        max-width: 100% !important;
        overflow-x: hidden !important;
      }

      .home-view .home-favorites-section{
        box-sizing: border-box !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 -10px 44px !important;
        padding: 0 !important;
        overflow-x: hidden !important;
      }

      .home-view .home-favorites-section .favorites-grid{
        box-sizing: border-box !important;
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
      }

      .home-view .home-favorites-section .favorite-card-wrapper{
        max-width: 100% !important;
        min-width: 0 !important;
      }
    }

    /* Settings shell correction */
    .settings-page-view{
      width: min(840px, calc(100% - 32px));
      padding-top: 18px;
    }

    .settings-page-header,
.settings-page-editor{
      width: 100%;
      box-sizing: border-box;
    }

    .settings-page-header{
      min-height: 76px;
      padding: 12px 16px;
      gap: 14px;
    }

    .settings-page-title{
      min-height: 44px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .settings-page-title h1{
      font-size: clamp(22px, 1.65vw, 26px);
      line-height: 1.05;
    }

    .settings-page-title p{
      margin: 3px 0 0;
      min-height: 16px;
      font-size: 12px;
      line-height: 1.3;
    }

    .settings-page-actions,
.settings-page-back{
      align-self: center;
    }

    @media (max-width: 768px) {
      .settings-page-view{
        width: 100%;
      }

      .settings-page-header{
        min-height: 68px;
      }

      .settings-page-title{
        min-height: 42px;
      }
    }

    /* Room navigation: fixed media slot for either a photo or the HA pictogram. */
    .area-media{
      position: relative;
      flex: 0 0 auto;
      overflow: hidden;
      border-radius: 10px;
      background: color-mix(in srgb, var(--primary-color) 9%, var(--secondary-background-color));
    }

    .area-media-picture{
      position: absolute;
      inset: 0;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .area-media-icon{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: color-mix(in srgb, var(--primary-color) 82%, var(--primary-text-color));
      background:
        linear-gradient(145deg,
          color-mix(in srgb, var(--primary-color) 14%, var(--card-background-color)),
          color-mix(in srgb, var(--primary-color) 6%, var(--secondary-background-color)));
    }

    .area-media-icon ha-icon{
      --mdc-icon-size: 34px;
    }

    @media (min-width: 769px) {
      .sidebar .room-area-button{
        display: grid;
        grid-template-columns: 74px minmax(0, 1fr);
        align-items: stretch;
        gap: 10px;
        min-height: 92px;
        height: 92px;
        padding: 8px;
        border-radius: 12px;
        border: 1px solid color-mix(in srgb, var(--primary-text-color) 7%, transparent);
        background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color));
        color: var(--primary-text-color);
        box-shadow: 0 8px 18px color-mix(in srgb, var(--primary-text-color) 6%, transparent);
      }

      .sidebar .room-area-button.has-picture{
        color: var(--primary-text-color);
        background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color));
        border-color: color-mix(in srgb, var(--primary-text-color) 7%, transparent);
      }

      .sidebar .room-area-button.has-picture::after{
        display: none;
      }

      .sidebar .room-area-button.selected,
.sidebar .room-area-button.has-picture.selected{
        color: var(--primary-text-color);
        border-color: color-mix(in srgb, var(--primary-color) 58%, transparent);
        background: color-mix(in srgb, var(--primary-color) 8%, var(--card-background-color));
        box-shadow:
          0 10px 22px color-mix(in srgb, var(--primary-color) 12%, transparent),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 14%, transparent);
      }

      .sidebar .room-area-button .area-media{
        width: 74px;
        height: 74px;
        align-self: center;
        grid-column: 1;
      }

      .sidebar .room-area-button .area-content{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        gap: 7px;
        min-width: 0;
        height: auto;
        grid-column: 2;
      }

      .sidebar .room-area-button .area-top-section{
        min-width: 0;
        margin: 0;
      }

      .sidebar .room-area-button .area-name,
.sidebar .room-area-button.has-picture .area-name{
        color: var(--primary-text-color);
        text-shadow: none;
        font-size: 14px;
        font-weight: 850;
      }

      .sidebar .room-area-button .area-sensors,
.sidebar .room-area-button.has-picture .area-sensors{
        margin-top: 3px;
        color: var(--secondary-text-color);
        text-shadow: none;
        font-size: 11px;
        font-weight: 650;
      }

      .sidebar .room-area-button .area-info-badges{
        position: static;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        gap: 4px;
        width: 100%;
        max-width: none;
        overflow: hidden;
      }

      .sidebar .room-area-button .info-badge,
.sidebar .room-area-button.has-picture .info-badge{
        min-width: 27px;
        height: 21px;
        padding: 0 5px;
        flex: 0 0 auto;
        color: var(--badge-color, var(--primary-color));
        background: color-mix(in srgb, var(--badge-color, var(--primary-color)) 11%, var(--card-background-color));
        border: 1px solid color-mix(in srgb, var(--badge-color, var(--primary-color)) 20%, transparent);
        box-shadow: none;
        backdrop-filter: none;
      }

      .sidebar .room-area-button .info-badge ha-icon{
        --mdc-icon-size: 12px;
      }

      .sidebar .room-area-button .badge-count{
        font-size: 10px;
      }

      .sidebar .room-area-button .area-menu-chevron,
.sidebar .room-area-button .area-main-icon{
        display: none;
      }
    }

    @media (max-width: 768px) {
      .sidebar .room-area-button{
        display: grid;
        grid-template-columns: 64px minmax(0, 1fr);
        gap: 10px;
        min-height: 80px;
        padding: 8px;
      }

      .sidebar .room-area-button .area-media{
        width: 64px;
        height: 64px;
      }

      .sidebar .room-area-button .area-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
        gap: 6px;
      }

      .sidebar .room-area-button .area-info-badges{
        position: static;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        gap: 4px;
        max-width: none;
        overflow: hidden;
      }

      .sidebar .room-area-button .info-badge{
        min-width: 26px;
        height: 21px;
        padding: 0 5px;
      }

      .sidebar .room-area-button .area-menu-chevron{
        display: none;
      }
    }

    /* Favorites are a dedicated layer between house information and room content. */
    .area-favorites-toggle{
      width: calc(100% - 32px);
      min-height: 40px;
      margin: 0 16px 10px;
      padding: 0 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      border: 1px solid color-mix(in srgb, var(--divider-color) 82%, transparent);
      border-radius: 10px;
      background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color));
      color: var(--primary-text-color);
      cursor: pointer;
    }

    .area-favorites-toggle-main{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
      font-size: 14px;
      font-weight: 850;
    }

    .area-favorites-toggle-main > ha-icon{
      --mdc-icon-size: 18px;
      color: var(--primary-color);
    }

    .area-favorites-count{
      color: var(--secondary-text-color);
      font-weight: 700;
    }

    .global-header .header-expanded-content{
      padding-top: 0;
    }

    .global-header .header-favorites .favorites-header{
      display: none;
    }

    /* Keep status text and the toggle in one visual cluster. */
    .mobile-entity-status-row{
      margin-top: 5px;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .mobile-entity-status-row .mobile-entity-status{
      margin-top: 0;
      min-width: 0;
      flex: 1 1 auto;
    }

    .mobile-entity-status-row .mobile-entity-toggle{
      flex: 0 0 auto;
    }

    .mobile-domain-master{
      min-width: 76px;
    }

    .mobile-domain-master-count{
      min-width: 25px;
      color: currentColor;
      font-size: 11px;
      font-weight: 850;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
    }

    /* Window/door/opening state is expressed by its icon/status badge,
not a tinted whole card. */
    .mobile-entity-card.mobile-entity-binary_sensor.device-window.is-active,
.mobile-entity-card.mobile-entity-binary_sensor.device-door.is-active,
.mobile-entity-card.mobile-entity-binary_sensor.device-opening.is-active{
      background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color));
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
    }

    .mobile-entity-card.mobile-entity-binary_sensor.device-window .mobile-entity-status,
.mobile-entity-card.mobile-entity-binary_sensor.device-door .mobile-entity-status,
.mobile-entity-card.mobile-entity-binary_sensor.device-opening .mobile-entity-status{
      width: fit-content;
      max-width: 100%;
      padding: 3px 8px;
      border-radius: 999px;
      color: var(--secondary-text-color);
      background: color-mix(in srgb, var(--primary-text-color) 7%, var(--card-background-color));
    }

    .mobile-entity-card.mobile-entity-binary_sensor.device-window.is-active .mobile-entity-status,
.mobile-entity-card.mobile-entity-binary_sensor.device-door.is-active .mobile-entity-status,
.mobile-entity-card.mobile-entity-binary_sensor.device-opening.is-active .mobile-entity-status{
      color: var(--entity-color);
      background: color-mix(in srgb, var(--entity-color) 11%, var(--card-background-color));
    }


    /* Final desktop room redesign: compact sidebar cards + compact room header. */
    @media (min-width: 769px) {
      .sidebar .room-area-button{
        grid-template-columns: 58px minmax(0, 1fr);
        gap: 8px;
        min-height: 76px;
        height: 76px;
        padding: 8px;
        margin-bottom: 7px;
        border-radius: 11px;
        box-shadow: 0 5px 14px color-mix(in srgb, var(--primary-text-color) 4%, transparent);
      }

      .sidebar .room-area-button .area-media{
        width: 58px;
        height: 58px;
        border-radius: 9px;
      }

      .sidebar .room-area-button .area-media-icon{
        color: color-mix(in srgb, var(--primary-color) 84%, var(--primary-text-color));
        background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color));
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 8%, transparent);
      }

      .sidebar .room-area-button .area-media-icon ha-icon{
        --mdc-icon-size: 27px;
      }

      .sidebar .room-area-button .area-content{
        gap: 4px;
        justify-content: center;
      }

      .sidebar .room-area-button .area-name,
.sidebar .room-area-button.has-picture .area-name{
        font-size: 13px;
        font-weight: 850;
        line-height: 1.15;
      }

      .sidebar .room-area-button .area-sensors,
.sidebar .room-area-button.has-picture .area-sensors{
        margin-top: 2px;
        font-size: 10px;
        line-height: 1.15;
      }

      .sidebar .room-area-button .area-info-badges{
        gap: 3px;
        min-height: 19px;
      }

      .sidebar .room-area-button .info-badge,
.sidebar .room-area-button.has-picture .info-badge{
        min-width: 24px;
        height: 19px;
        padding: 0 4px;
        border-radius: 999px;
      }

      .sidebar .room-area-button .info-badge ha-icon{
        --mdc-icon-size: 11px;
      }

      .sidebar .room-area-button .badge-count{
        font-size: 9px;
      }

      .sidebar .room-area-button.selected,
.sidebar .room-area-button.has-picture.selected{
        border-color: color-mix(in srgb, var(--primary-color) 54%, transparent);
        background: color-mix(in srgb, var(--primary-color) 8%, var(--card-background-color));
        box-shadow:
          0 7px 18px color-mix(in srgb, var(--primary-color) 10%, transparent),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 10%, transparent);
      }

      .area-header.area-header-desktop-compact{
        position: relative;
        min-height: 0;
        margin: 0 0 18px;
        padding: 14px 16px;
        display: grid;
        grid-template-columns: 68px minmax(190px, 1fr) auto auto;
        align-items: center;
        gap: 16px;
        overflow: visible;
        border-radius: 12px;
        border: 1px solid color-mix(in srgb, var(--primary-text-color) 7%, transparent);
        background: color-mix(in srgb, var(--card-background-color) 98%, var(--primary-background-color));
        color: var(--primary-text-color);
        box-shadow: 0 10px 26px rgba(15, 23, 42, 0.06);
      }

      .area-header.area-header-desktop-compact::before{
        display: none;
      }

      .area-desktop-room-media{
        position: relative;
        width: 68px;
        height: 68px;
        overflow: hidden;
        border-radius: 10px;
        background: color-mix(in srgb, var(--primary-color) 8%, var(--secondary-background-color));
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 8%, transparent);
      }

      .area-desktop-room-picture{
        position: absolute;
        inset: 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .area-desktop-room-icon{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: color-mix(in srgb, var(--primary-color) 86%, var(--primary-text-color));
        background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color));
      }

      .area-desktop-room-icon ha-icon{
        --mdc-icon-size: 31px;
      }

      .area-desktop-room-copy{
        min-width: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6px;
      }

      .area-header-desktop-compact .area-title{
        margin: 0;
        font-size: clamp(26px, 2.15vw, 36px);
        line-height: 1;
        color: var(--primary-text-color);
      }

      .area-desktop-room-meta{
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 750;
        line-height: 1.2;
        white-space: nowrap;
      }

      .area-header-desktop-compact .area-header-metrics{
        position: static;
        z-index: auto;
        min-width: 0;
        max-width: none;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: nowrap;
        gap: 8px;
      }

      .area-header-desktop-compact .area-header-metric{
        min-width: 132px;
        min-height: 44px;
        padding: 7px 11px;
        gap: 8px;
        border-radius: 999px;
      }

      .area-header-desktop-compact .area-header-metric .metric-ring{
        width: 30px;
        height: 30px;
      }

      .area-header-desktop-compact .area-header-metric .metric-label{
        font-size: 9px;
      }

      .area-header-desktop-compact .area-header-metric .metric-reading{
        font-size: 13px;
      }

      .area-header-desktop-compact .area-header-actions{
        position: static;
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        min-width: max-content;
      }

      .area-header-desktop-compact .area-header-actions .unavailable-entities-icon,
.area-header-desktop-compact .area-header-actions .area-mobile-camera,
.area-header-desktop-compact .area-header-actions .dd-edit-toggle{
        width: 42px;
        height: 42px;
        margin: 0;
        border-radius: 999px;
      }

      .area-header-desktop-compact .area-mobile-toolbar,
.area-header-desktop-compact .area-mobile-home,
.area-header-desktop-compact .area-mobile-quick-controls,
.area-header-desktop-compact .area-badges,
.area-header-desktop-compact .area-header-content{
        display: none;
      }
    }

    @media (min-width: 769px) and (max-width: 1120px) {
      .area-header.area-header-desktop-compact{
        grid-template-columns: 58px minmax(150px, 1fr) auto;
        gap: 12px;
      }

      .area-desktop-room-media{
        width: 58px;
        height: 58px;
      }

      .area-header-desktop-compact .area-header-metrics{
        grid-column: 2;
        justify-content: flex-start;
        margin-top: 4px;
      }

      .area-header-desktop-compact .area-header-actions{
        grid-column: 3;
        grid-row: 1 / span 2;
      }
    }


    /* Responsive room UI v3 — desktop reference is the base;
       mobile only changes flow,
scale and navigation. */

    .global-header{
      padding: 8px 16px 6px;
      border-bottom: 0;
      background: var(--primary-background-color);
    }

    .global-header .header-content{
      width: 100%;
      min-height: 54px;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      box-sizing: border-box;
    }

    .header-status-section{
      min-width: 0;
      flex: 1 1 auto;
    }

    .header-status-scroll{
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .header-status-scroll::-webkit-scrollbar{ display: none; }

    .status-card-compact{
      width: auto;
      min-width: 140px;
      max-width: 194px;
      height: 50px;
      min-height: 50px;
      padding: 7px 9px 7px 12px;
      flex: 0 0 auto;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 32px minmax(0, 1fr);
      grid-template-rows: 1fr 1fr;
      align-items: center;
      column-gap: 8px;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 8%, transparent);
      border-radius: 8px;
      background: var(--card-background-color);
      box-shadow: 0 3px 10px rgba(15, 23, 42, 0.045);
    }

    .status-card-compact .status-card-icon-compact{
      grid-column: 1;
      grid-row: 1 / span 2;
      position: relative;
      width: 34px;
      height: 34px;
      margin: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: var(--status-color);
      background: color-mix(in srgb, var(--status-color) 12%, var(--card-background-color));
    }

    .status-card-compact .status-card-icon-compact ha-icon{ --mdc-icon-size: 19px; }

    .status-card-badge-compact{
      top: -7px;
      right: -11px;
      min-width: 18px;
      height: 20px;
      padding: 0 4px;
      box-sizing: border-box;
      font-size: 10px;
      line-height: 1;
    }

    .status-card-compact .status-card-title-compact{
      grid-column: 2;
      grid-row: 1;
      align-self: end;
      margin: 0;
      overflow: hidden;
      font-size: 12px;
      font-weight: 850;
      line-height: 1.08;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .status-card-compact:not(.has-value){
      grid-template-rows: 1fr;
    }

    .status-card-compact:not(.has-value) .status-card-title-compact{
      grid-row: 1;
      align-self: center;
      display: flex;
      align-items: center;
      min-height: 34px;
      margin: 0;
    }

    .status-card-compact .status-card-subtitle-compact{
      grid-column: 2;
      grid-row: 2;
      align-self: start;
      margin-top: 2px;
      overflow: hidden;
      color: var(--secondary-text-color);
      font-size: 10px;
      font-weight: 650;
      line-height: 1.08;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .header-time-weather{
      min-width: 116px;
      flex: 0 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      gap: 4px;
    }

    .header-time{ font-size: 21px; line-height: 1; }
    .header-date{ font-size: 12px; line-height: 1.1; }
    .weather-compact{ padding: 3px 9px; }

    .area-content-area{
      padding: 8px 16px 16px;
    }

    .room-header-media{
      grid-area: media;
      position: relative;
      width: 220px;
      height: 176px;
      align-self: center;
      overflow: hidden;
      border-radius: 12px;
      background: color-mix(in srgb, var(--primary-color) 8%, var(--card-background-color));
    }

    .room-header-picture{
      position: absolute;
      inset: 0;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .room-header-icon{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: color-mix(in srgb, var(--primary-color) 86%, var(--primary-text-color));
      background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color));
    }

    .room-header-icon ha-icon{ --mdc-icon-size: 52px; }

    .room-header-copy{
      grid-area: copy;
      min-width: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
    }

    .room-header-breadcrumb{
      min-height: 18px;
      margin-bottom: 1px;
      display: inline-flex;
      align-items: center;
      gap: 3px;
      color: var(--secondary-text-color);
      font-size: 10px;
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
    }

    .room-header-home-link{
      width: 20px;
      height: 20px;
      margin: 0;
      padding: 0;
      border: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      color: var(--secondary-text-color);
      background: transparent;
      cursor: pointer;
    }

    .room-header-home-link:hover{
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 8%, transparent);
    }

    .room-header-home-link ha-icon{ --mdc-icon-size: 14px; }
    .room-header-breadcrumb-chevron{ --mdc-icon-size: 12px; opacity: 0.7; }

    .room-header-device-count{
      color: var(--secondary-text-color);
      font-size: 13px;
      font-weight: 750;
    }

    .room-header-summary{
      margin-top: 6px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 7px;
      overflow: visible;
    }

    .room-header-summary::-webkit-scrollbar{
      display: none;
    }

    .room-summary-item{
      min-height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 800;
      line-height: 1;
      white-space: nowrap;
    }

    button.room-summary-item{
      min-width: 46px;
      padding: 5px 10px;
      border: 0;
      font: inherit;
      cursor: pointer;
      box-shadow:
        inset 0 0 0 1px color-mix(in srgb, var(--room-summary-color) 12%, transparent),
        0 5px 12px rgba(15, 23, 42, 0.035);
      transition: transform 0.16s ease, box-shadow 0.16s ease, filter 0.16s ease;
    }

    button.room-summary-item:hover{
      transform: translateY(-1px);
      filter: brightness(1.03);
      box-shadow:
        inset 0 0 0 1px color-mix(in srgb, var(--room-summary-color) 18%, transparent),
        0 8px 16px rgba(15, 23, 42, 0.06);
    }

    button.room-summary-item:active{
      transform: translateY(0) scale(0.97);
    }

    .room-summary-item ha-icon{ --mdc-icon-size: 17px; }
    .room-summary-item.temperature ha-icon{ color: #7567d8; }
    .room-summary-item.humidity ha-icon{ color: #35a9dc; }
    .room-summary-item.power ha-icon{ color: #d99600; }

    .room-summary-item.status{
      border-radius: 999px;
      color: var(--room-summary-color);
      background: color-mix(in srgb, var(--room-summary-color) 10%, var(--card-background-color));
    }

    .room-header-camera-preview{
      grid-area: camera;
      position: relative;
      width: 100%;
      height: 176px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
      border-radius: 12px;
      background: color-mix(in srgb, var(--primary-text-color) 6%, var(--card-background-color));
      color: #fff;
      cursor: pointer;
      box-shadow:
        inset 0 0 0 1px rgba(15, 23, 42, 0.06),
        0 7px 18px rgba(15, 23, 42, 0.07);
      transition: transform 0.16s ease, box-shadow 0.16s ease;
    }

    .room-header-camera-preview:hover{
      transform: translateY(-1px);
      box-shadow:
        inset 0 0 0 1px rgba(15, 23, 42, 0.08),
        0 10px 22px rgba(15, 23, 42, 0.1);
    }

    .room-header-camera-image,
.room-header-camera-stream{
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .room-header-camera-image{
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .room-header-camera-placeholder{
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
    }

    .room-header-camera-placeholder ha-icon{
      --mdc-icon-size: 38px;
    }

    .room-header-camera-live{
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 2;
      min-height: 26px;
      padding: 0 9px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-radius: 999px;
      color: #fff;
      background: rgba(15, 23, 42, 0.78);
      font-size: 12px;
      font-weight: 800;
      line-height: 1;
      backdrop-filter: blur(8px);
    }

    .room-header-camera-live-dot{
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #20c77a;
      box-shadow: 0 0 0 3px rgba(32, 199, 122, 0.14);
    }

    .room-header-actions{
      grid-area: actions;
      grid-column: auto;
      grid-row: auto;
      position: static !important;
      inset: auto !important;
      min-width: 42px;
      height: 100%;
      margin: 0 !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      align-self: stretch;
      gap: 10px;
      transform: none !important;
    }

    .room-header-actions .unavailable-entities-icon,
.room-header-actions .dd-edit-toggle{
      width: 38px;
      height: 38px;
      margin: 0;
      border-radius: 999px;
      flex: 0 0 auto;
    }

    .room-header-back{ display: none; }

    .room-favorites-block{
      width: 100%;
      margin: 0;
      overflow: visible;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 7%, transparent);
      border-radius: 8px;
      background: var(--card-background-color);
      box-shadow: 0 3px 10px rgba(15, 23, 42, 0.04);
    }

    .room-favorites-header{
      margin-bottom: 0 !important;
    }

    .room-favorites-block:not(.is-collapsed) .room-favorites-header{
      margin-bottom: 6px !important;
    }

    .room-favorites-icon{
      color: var(--primary-color);
    }

    .room-favorites-content{
      margin: 0;
    }

    .room-favorites-content .favorites-header{
      display: none;
    }

    .room-favorites-content .favorites-section{
      margin: 0;
    }

    .sidebar .room-area-button{
      min-height: 84px !important;
      height: 84px !important;
      padding: 6px !important;
      grid-template-columns: 72px minmax(0, 1fr) !important;
      align-items: center;
      gap: 8px !important;
      margin-bottom: 6px;
      border-radius: 10px;
    }

    .sidebar .room-area-button .area-media{
      width: 72px !important;
      height: 70px !important;
      align-self: center;
      border-radius: 8px;
    }

    .sidebar .room-area-button .area-media-icon ha-icon{ --mdc-icon-size: 30px; }

    .sidebar .room-area-button .area-content{
      min-width: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px !important;
    }

    .sidebar .room-area-button .area-name,
.sidebar .room-area-button.has-picture .area-name{
      font-size: 13px;
      line-height: 1.1;
      font-weight: 850;
    }

    .sidebar .room-area-button .area-sensors,
.sidebar .room-area-button.has-picture .area-sensors{
      margin-top: 1px;
      font-size: 10px;
      line-height: 1.1;
    }

    .sidebar .room-area-button .area-info-badges{
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      gap: 3px;
      overflow: hidden;
    }

    .sidebar .room-area-button .info-badge,
.sidebar .room-area-button.has-picture .info-badge{
      min-width: 22px;
      height: 19px;
      padding: 0 4px;
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      border-radius: 999px;
      line-height: 1;
    }

    .sidebar .room-area-button .info-badge ha-icon{
      width: 11px;
      height: 11px;
      flex: 0 0 11px;
      display: block;
      --mdc-icon-size: 11px;
      line-height: 0;
    }

    .sidebar .room-area-button .badge-count{
      height: 11px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      line-height: 11px;
    }

    .room-domain-icon{
      width: 22px;
      height: 22px;
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0;
      color: var(--domain-color);
      background: transparent;
    }

    .room-domain-icon ha-icon{ --mdc-icon-size: 18px; }

    .mobile-domain-title-chevron{
      margin-left: 1px;
      color: var(--secondary-text-color);
      --mdc-icon-size: 16px;
    }

    .dd-generated-card-leading-drag-handle,
.dd-generated-card-visibility{
      width: 30px;
      height: 30px;
      padding: 0;
      border: 0;
      border-radius: 7px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      background: transparent;
      pointer-events: auto;
    }

    .dd-generated-card-leading-drag-handle{
      width: 24px;
      cursor: grab;
      color: var(--primary-color);
    }

    .dd-generated-card-leading-drag-handle:active{ cursor: grabbing; }

    .dd-generated-card-leading-drag-handle ha-icon,
.dd-generated-card-visibility ha-icon{
      --mdc-icon-size: 19px;
    }

    .dd-generated-card-visibility{
      color: var(--primary-text-color);
      background: color-mix(in srgb, var(--primary-text-color) 5%, transparent);
    }

    .dd-generated-card-visibility:hover,
.dd-generated-card-leading-drag-handle:hover{
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }

    @media (max-width: 1180px) and (min-width: 769px) {

      .room-header-media{
        width: 170px;
        height: 148px;
      }

      .room-header-camera-preview{
        height: 148px;
      }
    }

    @media (max-width: 768px) {
      .global-header{ padding: 8px 10px 6px; }

      .area-content-area{ padding: 8px 10px 88px; }

      .room-header-back{
        grid-area: back;
        width: 40px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
        border-radius: 999px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .room-header-media{
        width: 64px;
        height: 64px;
        border-radius: 9px;
      }

      .room-header-icon ha-icon{ --mdc-icon-size: 30px; }
      .room-header-breadcrumb{ display: none; }
      .room-header-device-count{ font-size: 10px; }

      .room-header-summary{
        gap: 5px;
        flex-wrap: wrap;
      }

      .room-summary-item{ font-size: 10px; }

      .room-header-camera-preview{
        width: 100%;
        height: 148px;
        border-radius: 10px;
      }

      .room-header-actions{
        grid-area: actions;
        grid-column: auto;
        grid-row: auto;
        height: auto;
        align-self: start;
        flex-direction: column;
        gap: 6px;
        margin-left: 0 !important;
      }

      .room-header-actions .unavailable-entities-icon,
.room-header-actions .dd-edit-toggle{
        width: 34px;
        height: 34px;
      }

      .room-favorites-toggle{
        min-height: 36px;
      }
    }


    /* Room context: global house information and Favorites form one subtle visual zone. */
    .global-header.room-context{
      background: color-mix(in srgb, var(--secondary-background-color) 34%, var(--card-background-color));
      border-bottom-color: transparent;
      box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--divider-color) 42%, transparent);
    }

    .global-header.room-context .room-favorites-block{
      margin-top: 10px !important;
      margin-bottom: 0 !important;
      background: color-mix(in srgb, var(--card-background-color) 78%, transparent);
      box-shadow: none;
    }

    .global-header.room-context .room-favorites-block::after{
      display: none;
    }

    /* Desktop room header follow-up:
       - left identity block matches the full height of all three metric pills
       - metric pills are about 10% smaller and tightly stacked
       - status badges stay fully visible
       - actions stay aligned with the room title */
    @media (min-width: 769px) {

      .room-header-title-row{
        min-height: 38px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 7px;
      }

      .room-header-title-row .room-header-home-link{
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
      }

      .room-header-title-row .room-header-home-link ha-icon{
        --mdc-icon-size: 20px;
      }

      .room-header-title-row .room-header-home-chevron{
        flex: 0 0 auto;
      }

      .room-header-device-count{
        font-size: 13px;
        line-height: 1.15;
        margin: 0 !important;
      }

      .room-header-summary{
        min-height: 34px !important;
        margin-top: 2px !important;
        margin-bottom: 0 !important;
        padding: 2px 0 !important;
        align-items: center !important;
        gap: 7px !important;
        overflow: visible !important;
      }

      .room-header-summary.is-empty{
        min-height: 0 !important;
        padding: 0 !important;
      }

      .room-summary-item{
        min-height: 30px !important;
        font-size: 12px;
        line-height: 1 !important;
      }

      button.room-summary-item{
        min-width: 46px !important;
        padding: 6px 10px !important;
      }

      .room-summary-item ha-icon{
        --mdc-icon-size: 17px !important;
      }

      .room-header-actions{
        height: 150px !important;
        align-self: center !important;
        justify-content: flex-start !important;
        gap: 8px !important;
        padding: 0 !important;
      }

      .room-header-actions .dd-edit-toggle,
.room-header-actions .unavailable-entities-icon{
        width: 38px;
        height: 38px;
        margin: 0 !important;
      }
    }

    .room-header-title-row{
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .room-header-title-row .area-title{
      min-width: 0;
      margin: 0;
    }

    @media (max-width: 768px) {
      .room-header-title-row .room-header-home-link{
        display: none;
      }
    }

    /* Final polish for global meta, Favorites and expandable room sections. */
    @media (min-width: 769px) {
      .global-header{
        padding-right: 28px;
      }

      .header-time-weather{
        min-width: 204px;
        height: 50px;
        flex: 0 0 auto;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
      }

      .header-time-section{
        min-width: 82px;
        align-items: flex-end;
        justify-content: center;
        gap: 1px;
        line-height: 1;
      }

      .header-time{
        font-size: 18px;
        line-height: 1.05;
      }

      .header-date{
        font-size: 10px;
        line-height: 1.05;
      }

      .weather-compact{
        min-height: 30px;
        padding: 3px 9px;
        box-sizing: border-box;
      }
    }

    .room-favorites-block{
      position: relative;
      box-sizing: border-box;
      overflow: visible !important;
      margin-bottom: 11px !important;
    }

    .room-favorites-block::after{
      content: "";
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: -7px;
      width: auto;
      height: 1px;
      border-radius: 999px;
      background: var(--divider-color);
      opacity: 0.28;
      pointer-events: none;
    }

    .room-favorites-content .favorites-grid{
      gap: 6px;
    }

    .room-favorites-content .favorite-tile-wrapper{
      --row-size: 54px;
      --ha-card-border-radius: 8px;
      min-height: 54px;
      font-size: 0.94em;
    }

    .room-favorites-content .favorite-tile-wrapper > hui-tile-card{
      --row-size: 54px;
      --ha-card-border-radius: 8px;
      min-height: 54px;
    }

    .room-favorites-title{
      pointer-events: none;
    }

    .mobile-domain-center-chevron{
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1;
      color: var(--secondary-text-color);
      --mdc-icon-size: 14px;
      transform: translate(-50%, -50%);
      pointer-events: none;
      opacity: 0.78;
    }

    .mobile-domain-title-chevron{
      display: none !important;
    }

    @media (max-width: 768px) {
      .room-favorites-content .favorite-tile-wrapper,
.room-favorites-content .favorite-tile-wrapper > hui-tile-card{
        --row-size: 50px;
        min-height: 50px;
      }
    }


    /* Keep expandable headers visually centered and use a single{
      min-height: 38px;
    }

    .mobile-domain-leading-chevron{
      flex: 0 0 auto;
      color: var(--secondary-text-color);
      --mdc-icon-size: 14px;
      opacity: 0.78;
      pointer-events: none;
    }

    .mobile-domain-leading-drag-handle{
      width: 24px;
      height: 24px;
      padding: 0;
      border: 0;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      color: var(--secondary-text-color);
      background: transparent;
      cursor: grab;
      touch-action: none;
    }

    .mobile-domain-leading-drag-handle:hover{
      background: color-mix(in srgb, var(--primary-color) 8%, transparent);
      color: var(--primary-color);
    }

    .mobile-domain-leading-drag-handle:active{
      cursor: grabbing;
    }

    .mobile-domain-leading-drag-handle ha-icon{
      --mdc-icon-size: 17px;
    }

    .mobile-domain-center-chevron,
.mobile-domain-title-chevron{
      display: none !important;
    }

    /* Compact Favorites row with a quiet divider before the room header. */
    .room-favorites-block{
      margin-bottom: 12px !important;
    }

    .room-favorites-block::after{
      left: 12px;
      right: 12px;
      bottom: -7px;
      width: auto;
      height: 1px;
      transform: none;
      background: var(--divider-color);
      opacity: 0.42;
    }

    /* Compact sidebar: denser rooms,
slimmer badges,
vertically centered badge contents. */
    .sidebar .floor-section{
      margin: 0 0 10px;
    }

    .sidebar .floor-header{
      padding: 5px 8px 3px;
      margin-bottom: 2px;
    }

    .sidebar .floor-areas{
      gap: 4px;
    }

    .sidebar .area-button.home-button{
      margin-bottom: 10px !important;
    }

    @media (min-width: 769px) {
      .sidebar .room-area-button{
        margin-bottom: 0;
      }

      .sidebar .room-area-button .area-content{
        gap: 5px;
      }

      .sidebar .room-area-button .area-name,
.sidebar .room-area-button.has-picture .area-name{
        font-size: 14px;
      }

      .sidebar .room-area-button .area-sensors,
.sidebar .room-area-button.has-picture .area-sensors{
        margin-top: 2px;
        font-size: 11px;
      }

      .sidebar .room-area-button .area-info-badges{
        gap: 3px;
        min-height: 20px;
      }

      .sidebar .room-area-button .info-badge,
.sidebar .room-area-button.has-picture .info-badge{
        min-width: 22px;
        height: 19px;
        padding: 0 4px;
        display: inline-grid;
        grid-template-columns: 11px max-content;
        align-items: center;
        justify-content: center;
        column-gap: 2px;
        line-height: 1;
      }

      .sidebar .room-area-button .info-badge ha-icon,
.sidebar .room-area-button.has-picture .info-badge ha-icon{
        width: 11px;
        height: 11px;
        display: block;
        align-self: center;
        --mdc-icon-size: 11px;
        line-height: 0;
        transform: translateY(-0.5px);
      }

      .sidebar .room-area-button .badge-count,
.sidebar .room-area-button.has-picture .badge-count{
        height: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        font-size: 9px;
        line-height: 11px;
        transform: translateY(0.5px);
      }
    }

    /* Desktop meta uses the available horizontal space: time/date stacked, weather beside it. */
    @media (min-width: 769px) {
      .header-time-weather{
        min-width: 176px;
        height: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
      }

      .header-time-section{
        min-width: 76px;
        align-items: flex-end;
        justify-content: center;
        gap: 1px;
        padding: 0;
        background: transparent;
        border: 0;
        box-shadow: none;
      }

      .header-time{
        font-size: 18px;
        line-height: 1.05;
      }

      .header-date{
        font-size: 10px;
        line-height: 1.05;
      }

      .weather-compact{
        min-height: 30px;
        padding: 3px 9px;
      }

      .weather-icon-compact ha-icon{
        --mdc-icon-size: 18px;
      }

      .weather-temp-compact{
        font-size: 11px;
      }
    }

    /* Room follow-up: restore functional group drag handles. The title was intentionally
       non-interactive in normal mode{
      pointer-events: auto;
    }

    /* Expanded favorites content keeps the same inset as generated room content. */
    .room-favorites-content{
      padding: 6px 9px 9px;
    }

    /* Final mobile room-view pass: compact room header and desktop-like area picker cards. */
    @media (max-width: 768px) {
      /* Room header: top row for navigation/identity/actions{
        min-height: 0 !important;
        padding: 10px !important;
        grid-template-columns: 42px 60px minmax(0, 1fr) 76px !important;
        grid-template-rows: auto auto !important;
        grid-template-areas:
          "back media copy actions"
          "metrics metrics metrics metrics" !important;
        column-gap: 9px !important;
        row-gap: 10px !important;
        align-items: center !important;
      }

      /* Area picker sheet: compact chrome and enough clearance above the bottom navigation. */
      .layout-container > .sidebar,
.sidebar{
        left: 16px !important;
        right: 16px !important;
        bottom: calc(94px + env(safe-area-inset-bottom, 0px)) !important;
        max-height: min(64vh, 560px) !important;
        padding: 10px !important;
        border-radius: 12px !important;
      }

      .mobile-area-picker-head{
        min-height: 34px !important;
        margin: 0 2px 8px !important;
      }

      .mobile-area-picker-title{
        font-size: 18px !important;
        line-height: 1.1 !important;
      }

      .mobile-area-picker-close{
        width: 34px !important;
        height: 34px !important;
      }

      .sidebar::before{
        margin-bottom: 7px !important;
      }

      .sidebar .area-list{
        gap: 6px !important;
      }

      .sidebar .floor-section{
        gap: 5px !important;
        margin-bottom: 8px !important;
      }

      .sidebar .floor-areas{
        gap: 5px !important;
      }

      .sidebar .floor-header{
        padding: 4px 6px 2px !important;
      }

      .sidebar .floor-header h3{
        font-size: 13px !important;
        font-weight: 760 !important;
      }

      /* Mobile room cards mirror the compact information hierarchy of the desktop sidebar. */
      .sidebar .room-area-button{
        min-height: 72px !important;
        height: auto !important;
        padding: 8px 10px !important;
        display: grid !important;
        grid-template-columns: 52px minmax(0, 1fr) !important;
        grid-template-rows: auto !important;
        align-items: center !important;
        column-gap: 10px !important;
        border-radius: 9px !important;
      }

      .sidebar .room-area-button .area-media{
        grid-column: 1 !important;
        grid-row: 1 !important;
        position: relative !important;
        width: 52px !important;
        height: 52px !important;
        min-width: 52px !important;
        align-self: center !important;
        overflow: hidden;
        border-radius: 8px !important;
      }

      .sidebar .room-area-button .area-media-icon,
.sidebar .room-area-button .area-media-picture{
        width: 100% !important;
        height: 100% !important;
      }

      .sidebar .room-area-button .area-media-icon{
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
        color: var(--primary-color) !important;
      }

      .sidebar .room-area-button .area-media-icon ha-icon{
        --mdc-icon-size: 26px !important;
      }

      .sidebar .room-area-button .area-content{
        grid-column: 2 !important;
        grid-row: 1 !important;
        min-width: 0 !important;
        min-height: 52px !important;
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) auto !important;
        align-items: center !important;
        column-gap: 8px !important;
      }

      .sidebar .room-area-button .area-top-section{
        grid-column: 1 !important;
        width: 100% !important;
        min-width: 0 !important;
        margin: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        gap: 3px !important;
      }

      .sidebar .room-area-button .area-name{
        width: 100% !important;
        margin: 0 !important;
        overflow: hidden;
        font-size: 15px !important;
        font-weight: 800 !important;
        line-height: 1.1 !important;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sidebar .room-area-button .area-sensors{
        width: 100% !important;
        margin-top: 3px !important;
        overflow: hidden;
        font-size: 11px !important;
        font-weight: 650 !important;
        line-height: 1.1 !important;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sidebar .room-area-button .area-info-badges{
        grid-column: 2 !important;
        position: static !important;
        width: auto !important;
        max-width: 74px !important;
        margin: 0 !important;
        display: grid !important;
        grid-template-columns: repeat(2, max-content) !important;
        align-items: center !important;
        justify-content: end !important;
        gap: 4px !important;
      }

      .sidebar .room-area-button .area-info-badges:has(.info-badge:nth-child(5)){
        grid-template-columns: repeat(3, max-content) !important;
        max-width: 108px !important;
      }

      .sidebar .room-area-button .info-badge{
        min-width: 22px !important;
        height: 19px !important;
        padding: 0 5px !important;
      }

      .sidebar .room-area-button .info-badge ha-icon{
        --mdc-icon-size: 11px !important;
      }

      .sidebar .room-area-button .badge-count{
        font-size: 9px !important;
      }

      .sidebar .room-area-button.selected{
        border-color: color-mix(in srgb, var(--primary-color) 52%, transparent) !important;
        background: color-mix(in srgb, var(--card-background-color) 94%, var(--primary-color) 6%) !important;
        box-shadow:
          inset 3px 0 0 var(--primary-color),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 10%, transparent),
          0 6px 14px rgba(15, 23, 42, 0.07) !important;
      }

      /* Home row stays compact and visually subordinate to room cards. */
      .sidebar .area-button.home-button{
        min-height: 54px !important;
        height: 54px !important;
        padding: 7px 10px !important;
        display: grid !important;
        grid-template-columns: 40px minmax(0, 1fr) 20px !important;
        align-items: center !important;
        gap: 10px !important;
        margin: 0 0 7px !important;
      }

      .sidebar .area-button.home-button .area-icon{
        position: relative !important;
        left: auto !important;
        top: auto !important;
        width: 40px !important;
        height: 40px !important;
        transform: none !important;
        border-radius: 8px !important;
      }

      .sidebar .area-button.home-button .area-info{
        grid-column: 2 !important;
        min-width: 0 !important;
      }

      .sidebar .area-button.home-button .area-menu-chevron{
        grid-column: 3 !important;
        justify-self: end !important;
      }
    }

    /* 1.8.10x desktop density and hierarchy follow-up */
    @media (min-width: 769px) {
      .content-area{
        scrollbar-gutter: stable;
      }

      .welcome-notification-action{
        width: 48px;
        height: 48px;
        border-radius: 999px;
        background: transparent;
        box-shadow: none;
      }

      .welcome-notification-action ha-icon{
        --mdc-icon-size: 26px;
      }

      .welcome-settings-action{
        width: 44px;
        height: 44px;
        border-radius: 999px;
      }

      .home-status-grid{
        align-items: start;
      }

      .home-status-card{
        min-height: 104px;
        padding: 12px;
      }

      .home-status-card .status-card-icon{
        width: 42px;
        height: 42px;
        margin-bottom: 10px;
      }

      .home-status-card.house-persons-card,
.home-status-card.house-climate-card,
.home-status-card.house-power-card{
        min-height: 0;
        height: auto;
        align-self: start;
        padding: 12px;
        gap: 8px;
      }

      .house-persons-grid{
        margin-top: 2px;
      }

      .house-climate-grid{
        gap: 7px;
      }

      .house-climate-metric{
        min-height: 42px;
        padding: 6px 8px;
      }

      .house-power-list{
        margin-top: 2px;
      }

      .global-header.room-context .room-favorites-block{
        border-color: color-mix(in srgb, var(--primary-color) 12%, var(--divider-color));
        background: color-mix(in srgb, var(--primary-color) 3%, var(--card-background-color));
      }

      .global-header.room-context .room-favorites-header{
        min-height: 38px !important;
        padding: 7px 9px !important;
      }

      .global-header.room-context .room-favorites-title{
        min-height: 24px !important;
      }

      .global-header.room-context .room-favorites-title .mobile-domain-title-label{
        font-size: 15px !important;
        font-weight: 850 !important;
        line-height: 1 !important;
      }

      .global-header.room-context .room-favorites-title .mobile-domain-count{
        font-size: 10px !important;
        font-weight: 650 !important;
        line-height: 1 !important;
      }

      .global-header.room-context .room-favorites-title .room-domain-icon{
        width: 22px !important;
        height: 22px !important;
      }

      .global-header.room-context .room-favorites-title .room-domain-icon ha-icon{
        --mdc-icon-size: 18px !important;
      }

      .room-header-title-row{
        gap: 5px;
      }

      .room-header-home-link{
        width: 28px;
        height: 28px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary-color) 8%, transparent);
        color: var(--primary-color);
      }

      .room-header-home-link:hover{
        background: color-mix(in srgb, var(--primary-color) 14%, transparent);
      }

      .room-header-home-link ha-icon{
        --mdc-icon-size: 19px;
      }

      .room-header-home-chevron{
        flex: 0 0 auto;
        color: var(--secondary-text-color);
        --mdc-icon-size: 16px;
        opacity: 0.7;
      }
    }

    @media (max-width: 768px) {
      .room-header-home-chevron{
        display: none;
      }
    }

    /* Follow-up: keep requested density changes coherent instead of content-dependent. */
    @media (min-width: 769px) {
      /* House information uses two intentional heights:
         detailed summary cards are equal; simple active-status cards are compact and equal. */
      .home-status-grid{
        align-items: start;
      }

      .home-status-card{
        box-sizing: border-box;
        height: 94px;
        min-height: 94px;
        padding: 10px 12px;
        justify-content: flex-start;
        gap: 7px;
      }

      .home-status-card .status-card-icon{
        width: 38px;
        height: 38px;
        margin: 0;
      }

      .home-status-card .status-card-icon ha-icon{
        --mdc-icon-size: 21px;
      }

      .home-status-card .status-card-title{
        margin: 0;
        font-size: 14px;
        line-height: 1.1;
      }

      .home-status-card.has-value .status-card-value{
        margin: 0;
      }

      .home-status-card.house-persons-card,
.home-status-card.house-climate-card,
.home-status-card.house-power-card{
        height: 162px;
        min-height: 162px;
        padding: 12px;
        gap: 8px;
        overflow: hidden;
      }

      .house-person-mini{
        min-height: 36px;
        padding: 4px 6px;
      }

      .house-person-avatar{
        width: 24px;
        height: 24px;
      }

      .house-climate-metric{
        min-height: 44px;
      }

      .house-power-list{
        gap: 3px;
      }

      .house-power-room{
        grid-template-columns: 20px minmax(0, 1fr) auto;
        column-gap: 6px;
        row-gap: 2px;
      }

      .house-power-room-icon{
        width: 20px;
        height: 20px;
        border-radius: 7px;
      }

      .house-power-room-icon ha-icon{
        --mdc-icon-size: 13px;
      }

      .house-power-bar{
        height: 3px;
      }

      /* The Home affordance should read as navigation,
not as a second room tile. */
      .room-header-home-link{
        width: 24px;
        height: 24px;
        padding: 0;
        border-radius: 6px;
        background: transparent;
        box-shadow: none;
        color: var(--primary-color);
      }

      .room-header-home-link:hover{
        background: color-mix(in srgb, var(--primary-color) 8%, transparent);
      }

      .room-header-home-link ha-icon{
        --mdc-icon-size: 18px;
      }

      /* Favorites matches the generated type header in height,
typography and interaction. */
      .global-header.room-context .room-favorites-block{
        background: var(--card-background-color);
        border-color: color-mix(in srgb, var(--primary-text-color) 7%, transparent);
        box-shadow: 0 3px 10px rgba(15, 23, 42, 0.04);
      }

      .global-header.room-context .room-favorites-header{
        height: 38px !important;
        min-height: 38px !important;
        padding: 7px 9px !important;
        box-sizing: border-box;
        transition: background-color 0.16s ease, box-shadow 0.16s ease;
      }

      .global-header.room-context .room-favorites-header:hover{
        background: color-mix(in srgb, var(--primary-color) 5%, transparent);
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 10%, transparent);
      }

      .global-header.room-context .room-favorites-title{
        min-height: 24px !important;
        align-items: center !important;
        line-height: 1 !important;
      }

      .global-header.room-context .room-favorites-title .mobile-domain-leading-chevron,
.global-header.room-context .room-favorites-title .room-domain-icon,
.global-header.room-context .room-favorites-title .mobile-domain-title-copy,
.global-header.room-context .room-favorites-title .mobile-domain-count{
        align-self: center;
      }

      .global-header.room-context .room-favorites-title .mobile-domain-title-copy{
        align-items: center !important;
        line-height: 1 !important;
      }

      /* Keep the title block at the same vertical position even when no active room badge exists. */
      .room-header-summary{
        min-height: 22px;
      }

      .room-header-summary.is-empty{
        visibility: hidden;
        pointer-events: none;
      }
    }

    /* Home information density: fixed outer heights, content-aware inner grids. */
    @media (min-width: 769px) {
      /* Normalize section rhythm across Home. */
      .home-status-section,
.home-favorites-section,
.home-summaries-section,
.home-camera-section,
.home-todos-section,
.home-custom-cards-section{
        margin-bottom: 36px;
      }

      /* Detailed Home information cards stay equal in outer height. */
      .home-status-card.house-persons-card,
.home-status-card.house-climate-card,
.home-status-card.house-power-card{
        height: 162px;
        min-height: 162px;
      }

      /* Simple active-status cards are exactly half the detailed-card height. */
      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card){
        height: 81px;
        min-height: 81px;
        padding: 9px 11px 7px;
        display: grid;
        grid-template-rows: 34px minmax(0, 1fr);
        align-items: start;
        gap: 0;
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card) .status-card-icon{
        width: 34px;
        height: 34px;
        margin: 0;
        align-self: start;
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card) .status-card-icon ha-icon{
        --mdc-icon-size: 19px;
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card) .status-card-title{
        width: 100%;
        min-height: 30px;
        margin: 0;
        display: flex;
        align-items: center;
        align-self: stretch;
        font-size: 13px;
        line-height: 1.05;
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card).has-value{
        grid-template-rows: 30px auto minmax(0, 1fr);
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card).has-value .status-card-value{
        margin: 0;
        font-size: 17px;
        line-height: 1;
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card).has-value .status-card-title{
        min-height: 18px;
        font-size: 10px;
      }

      /* Compact status count pills like the room badges: smaller and shifted outward. */
      .home-status-card .status-card-badge{
        top: -5px;
        right: -14px;
        min-width: 20px;
        height: 20px;
        padding: 0 5px;
        font-size: 10px;
        line-height: 20px;
        box-shadow: 0 3px 8px color-mix(in srgb, var(--status-color) 24%, transparent);
      }

      /* Person grid fills the available matrix according to the actual HA person count. */
      .house-persons-grid{
        flex: 1 1 auto;
        min-height: 0;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
        gap: 7px;
      }

      .house-persons-card.persons-1 .house-persons-grid{
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: minmax(0, 1fr);
      }

      .house-persons-card.persons-2 .house-persons-grid{
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: minmax(0, 1fr);
      }

      .house-persons-card.persons-3 .house-persons-grid{
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
      }

      .house-persons-card.persons-3 .house-person-mini:last-child{
        grid-column: 1 / -1;
      }

      .house-person-mini{
        min-height: 0;
        height: 100%;
        padding: 6px 8px;
      }

      .house-persons-card.persons-1 .house-person-mini{
        justify-content: center;
      }

      .house-persons-card.persons-1 .house-person-avatar{
        width: 34px;
        height: 34px;
      }

      .house-persons-card.persons-1 .house-person-mini-name{
        font-size: 13px;
      }

      .house-persons-card.persons-1 .house-person-mini-state{
        font-size: 11px;
      }

      /* Climate metrics consume the full remaining body height when only one or two metrics exist. */
      .house-climate-grid{
        flex: 1 1 auto;
        min-height: 0;
        align-items: stretch;
      }

      .house-climate-card.metrics-1 .house-climate-grid{
        grid-template-columns: minmax(0, 1fr);
      }

      .house-climate-card.metrics-2 .house-climate-grid{
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .house-climate-card.metrics-1 .house-climate-metric,
.house-climate-card.metrics-2 .house-climate-metric{
        min-height: 0;
        height: 100%;
        padding: 10px 12px;
        grid-template-columns: 34px minmax(0, 1fr);
        column-gap: 10px;
      }

      .house-climate-card.metrics-1 .house-climate-metric-icon,
.house-climate-card.metrics-2 .house-climate-metric-icon{
        width: 34px;
        height: 34px;
        border-radius: 10px;
      }

      .house-climate-card.metrics-1 .house-climate-metric-icon ha-icon,
.house-climate-card.metrics-2 .house-climate-metric-icon ha-icon{
        --mdc-icon-size: 19px;
      }

      .house-climate-card.metrics-1 .house-climate-metric-value,
.house-climate-card.metrics-2 .house-climate-metric-value{
        font-size: 18px;
      }

      .house-climate-card.metrics-1 .house-climate-metric-label,
.house-climate-card.metrics-2 .house-climate-metric-label{
        font-size: 11px;
      }

      /* Power keeps a stable card height; empty state sits in the visual center of the body. */
      .house-power-empty{
        flex: 1 1 auto;
        min-height: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 6px;
        text-align: center;
      }

      /* Home Favorites uses the same section-header language as the other Home sections. */
      .home-favorites-section .favorites-header{
        min-height: 30px;
        margin: 0 0 14px;
        padding: 0;
        border: 0;
        display: flex;
        align-items: center;
        gap: 9px;
        color: var(--primary-text-color);
        font-size: 20px;
        font-weight: 850;
        line-height: 1.1;
      }

      .home-favorites-section .favorites-header ha-icon{
        width: 30px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        --mdc-icon-size: 20px;
        color: #f59e0b;
        background: color-mix(in srgb, #f59e0b 13%, transparent);
        box-shadow: inset 0 0 0 1px color-mix(in srgb, #f59e0b 9%, transparent);
      }

      .home-favorites-section .favorites-header span{
        display: inline-flex;
        align-items: center;
        min-height: 30px;
      }
    }

    /* Final visual consistency pass for Home and room header. */
    @media (min-width: 769px) {
      /* Home status count badges match the compact room/header badge proportions. */
      .home-status-card .status-card-badge{
        top: -6px;
        right: -11px;
        min-width: 18px;
        height: 20px;
        padding: 0 4px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        line-height: 1;
        box-shadow: 0 3px 8px color-mix(in srgb, var(--status-color) 22%, transparent);
      }

      /* Place simple status labels in the exact visual center between icon tile and accent line. */
      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card):not(.has-value) .status-card-title{
        position: absolute;
        left: 11px;
        right: 11px;
        bottom: 9px;
        min-height: 18px;
        margin: 0;
        display: flex;
        align-items: center;
        font-size: 13px;
        line-height: 1;
      }

      /* Room meta: time/date equals status-card height; weather is slightly larger but still secondary. */
      .global-header.room-context .header-time-weather{
        height: 50px;
        gap: 12px;
      }

      .global-header.room-context .header-time-section{
        width: 94px;
        min-width: 94px;
        height: 50px;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
      }

      .global-header.room-context .header-time{
        font-size: 24px;
        line-height: 1;
      }

      .global-header.room-context .header-date{
        margin-top: 3px;
        font-size: 11px;
        line-height: 1;
      }

      .global-header.room-context .weather-compact{
        min-height: 38px;
        padding: 0 12px;
        gap: 7px;
        border-radius: 999px;
      }

      .global-header.room-context .weather-icon-compact ha-icon{
        --mdc-icon-size: 18px;
      }

      .global-header.room-context .weather-temp-compact{
        font-size: 13px;
      }

      /* Filled Home breadcrumb reads like navigation but remains distinct from the large room icon. */
      .room-header-home-link ha-icon{
        --mdc-icon-size: 19px;
      }

      /* Sidebar Home follows the room-card rhythm while remaining a special global destination. */
      .sidebar .area-button.home-button{
        min-height: 68px !important;
        height: 68px !important;
        padding: 8px 10px !important;
        grid-template-columns: 50px minmax(0, 1fr) auto 20px !important;
        gap: 9px !important;
        border-color: color-mix(in srgb, var(--primary-color) 18%, var(--divider-color)) !important;
        background: color-mix(in srgb, var(--primary-color) 4%, var(--card-background-color)) !important;
      }

      .sidebar .area-button.home-button .area-icon{
        width: 50px !important;
        height: 50px !important;
        border-radius: 9px !important;
        background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
      }

      .sidebar .area-button.home-button .area-icon ha-icon{
        --mdc-icon-size: 25px !important;
      }

      .sidebar .area-button.home-button .area-name{
        font-size: 14px;
        font-weight: 850;
      }

      .sidebar .area-button.home-button.selected{
        background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color)) !important;
        box-shadow:
          inset 3px 0 0 var(--primary-color),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 14%, transparent),
          0 6px 14px rgba(15, 23, 42, 0.06) !important;
      }

      /* Room metric pills: direct icons{
        width: 24px !important;
        height: 30px !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
      }

      /* Climate card uses exactly the same temperature/humidity colors as the room view. */
      .house-climate-metric.temperature{ --metric-color: #34a6d8 !important; }
      .house-climate-metric.humidity{ --metric-color: #16a6b6 !important; }

      /* Climate metric icons are direct,
slightly larger icons without a second circle. */
      .house-climate-metric-icon{
        width: 28px !important;
        height: 34px !important;
        border-radius: 0 !important;
        background: transparent !important;
      }

      .house-climate-metric-icon ha-icon{
        --mdc-icon-size: 21px !important;
      }

      /* Desktop section headings are labels,
not buttons: color only,
no chip/background. */
      .home-status-heading ha-icon,
.home-camera-section .home-status-heading ha-icon,
.home-summaries-section .home-status-heading ha-icon,
.home-todos-section .home-status-heading ha-icon,
.home-custom-cards-section .home-status-heading ha-icon,
.home-favorites-section .favorites-header ha-icon{
        width: 24px !important;
        height: 24px !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
      }

      .home-status-heading ha-icon{ color: var(--primary-color); }
      .home-camera-section .home-status-heading ha-icon{ color: #ef4444; }
      .home-summaries-section .home-status-heading ha-icon{ color: #c56f12; }
      .home-todos-section .home-status-heading ha-icon{ color: #7c3aed; }
      .home-custom-cards-section .home-status-heading ha-icon{ color: #0ea5a8; }
      .home-favorites-section .favorites-header ha-icon{ color: #f59e0b; }
    }

    /* House power detail dialog mirrors the local Climate-dialog workflow instead of navigating away. */
    .house-power-dialog-overlay{
      position: fixed;
      inset: 0;
      z-index: 1200;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(8, 13, 24, 0.48);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    .house-power-dialog{
      width: min(720px, calc(100vw - 32px));
      max-height: min(78vh, 760px);
      padding: 16px;
      overflow-y: auto;
      border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
      border-radius: 14px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      box-shadow: 0 24px 64px rgba(8, 13, 24, 0.24);
      outline: none;
    }

    .house-power-dialog-head{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      margin-bottom: 14px;
    }

    .house-power-dialog-title-wrap{
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .house-power-dialog-icon{
      width: 40px;
      height: 40px;
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      color: #d88e20;
      background: color-mix(in srgb, #d88e20 12%, var(--card-background-color));
    }

    .house-power-dialog-icon ha-icon{ --mdc-icon-size: 23px; }
    .house-power-dialog-title{ font-size: 20px; font-weight: 900; line-height: 1.05; }
    .house-power-dialog-subtitle{ margin-top: 3px; color: var(--secondary-text-color); font-size: 12px; font-weight: 700; }

    .house-power-dialog-close{
      width: 38px;
      height: 38px;
      padding: 0;
      border: 0;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
      color: var(--primary-text-color);
      cursor: pointer;
    }

    .house-power-dialog-total{
      min-height: 72px;
      margin-bottom: 12px;
      padding: 12px 14px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      background: color-mix(in srgb, #d88e20 8%, var(--card-background-color));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #d88e20 14%, transparent);
    }

    .house-power-dialog-total span{ font-size: 28px; font-weight: 950; line-height: 1; }
    .house-power-dialog-total small{ margin-top: 4px; color: var(--secondary-text-color); font-size: 11px; font-weight: 750; }

    .house-power-dialog-areas{ display: grid; gap: 10px; }
    .house-power-dialog-area{
      padding: 11px 12px;
      border-radius: 10px;
      background: color-mix(in srgb, var(--primary-background-color) 72%, var(--card-background-color));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    }

    .house-power-dialog-area-head{
      display: grid;
      grid-template-columns: 30px minmax(0, 1fr) auto;
      align-items: center;
      gap: 8px;
    }

    .house-power-dialog-area-icon{
      width: 30px;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: #d88e20;
      background: color-mix(in srgb, #d88e20 10%, transparent);
    }

    .house-power-dialog-area-icon ha-icon{ --mdc-icon-size: 17px; }
    .house-power-dialog-area-name{ min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 850; }

    .house-power-dialog-bar{
      position: relative;
      height: 5px;
      margin: 8px 0 6px 38px;
      overflow: hidden;
      border-radius: 999px;
      background: color-mix(in srgb, #d88e20 10%, var(--secondary-background-color));
    }

    .house-power-dialog-bar span{
      position: absolute;
      inset: 0 auto 0 0;
      width: var(--power-width, 0%);
      min-width: 4px;
      border-radius: inherit;
      background: linear-gradient(90deg, #d88e20, #f4c34d);
    }

    .house-power-dialog-entities{
      margin-left: 38px;
      display: grid;
      gap: 2px;
    }

    .house-power-dialog-entity{
      width: 100%;
      min-height: 30px;
      padding: 4px 6px;
      border: 0;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      background: transparent;
      color: inherit;
      font: inherit;
      text-align: left;
      cursor: pointer;
    }

    .house-power-dialog-entity:hover{
      background: color-mix(in srgb, #d88e20 7%, transparent);
    }

    .house-power-dialog-entity span{
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--secondary-text-color);
      font-size: 12px;
    }

    .house-power-dialog-entity strong{ font-size: 12px; white-space: nowrap; }
    .house-power-dialog-empty{
      min-height: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      text-align: center;
    }

    @media (max-width: 768px) {
      .house-power-dialog-overlay{
        align-items: flex-end;
        padding: 12px 12px calc(96px + env(safe-area-inset-bottom, 0px));
      }

      .house-power-dialog{
        width: 100%;
        max-height: 68vh;
        border-radius: 18px;
      }
    }

    /* Desktop Home alignment and section rhythm. */
    @media (min-width: 769px) {
      .home-view,
.home-welcome,
.home-status-section,
.home-favorites-section,
.home-summaries-section,
.home-camera-section,
.home-todos-section,
.home-custom-cards-section{
        width: 100%;
        max-width: none;
        box-sizing: border-box;
      }

      .home-status-heading,
.home-favorites-section .favorites-header{
        margin-bottom: 10px !important;
      }

      .home-status-section,
.home-favorites-section,
.home-summaries-section,
.home-camera-section,
.home-todos-section,
.home-custom-cards-section{
        margin-bottom: 28px !important;
      }

      .home-welcome{
        margin-bottom: 28px !important;
      }

      /* House information uses one six-column master grid:
       * large summary cards are exactly two columns wide; status cards one.
       * This keeps every status tile at half the width of a large card. */
      .home-status-primary-grid{
        width: 100%;
        max-width: none !important;
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        grid-auto-rows: 77px;
        gap: 8px 10px;
        align-items: stretch;
      }

      .favorites-grid,
.home-summary-list{
        width: 100%;
        max-width: none !important;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        align-items: stretch;
      }

      .home-status-primary-grid > .home-status-card:not(.compact-status){
        width: 100%;
        min-width: 0;
        grid-column: span 2 !important;
        grid-row: span 2;
      }

      .home-status-primary-grid > .home-status-card.compact-status{
        width: 100%;
        min-width: 0;
        min-height: 0;
        height: auto;
        grid-column: span 1 !important;
        grid-row: span 1;
      }

      /* Favorites/Summary cards use the same column width as a primary House Information card. */
      .home-favorites-section .favorite-card-wrapper,
.home-summary-list .home-summary-card{
        width: 100%;
        min-width: 0;
      }

      /* Room Favorites: hard vertical centering across chevron,
star,
text and count. */
      .global-header.room-context .room-favorites-header{
        display: flex !important;
        align-items: center !important;
      }

      .global-header.room-context .room-favorites-title{
        height: 24px !important;
        min-height: 24px !important;
        display: flex !important;
        align-items: center !important;
        gap: 7px !important;
      }

      .global-header.room-context .room-favorites-title > *,
.global-header.room-context .room-favorites-title .mobile-domain-title-copy,
.global-header.room-context .room-favorites-title .mobile-domain-title-label,
.global-header.room-context .room-favorites-title .mobile-domain-count{
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        align-self: center !important;
        line-height: 1 !important;
      }

      .global-header.room-context .room-favorites-title .mobile-domain-leading-chevron{
        transform: translateY(0) !important;
      }

      .global-header.room-context .room-favorites-title .room-domain-icon{
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        transform: translateY(0) !important;
      }

      /* Home sidebar item: no photo-like icon tile,
stronger global distinction,
readable selection. */
      .sidebar .area-button.home-button .area-icon{
        width: 32px !important;
        height: 32px !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
      }

      .sidebar .area-button.home-button .area-icon ha-icon{
        --mdc-icon-size: 25px !important;
        color: var(--primary-color) !important;
      }

      .sidebar .area-button.home-button{
        background: color-mix(in srgb, var(--primary-color) 7%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 24%, var(--divider-color)) !important;
      }

      .sidebar .area-button.home-button.selected{
        color: var(--primary-text-color) !important;
        background: color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 42%, var(--divider-color)) !important;
      }

      .sidebar .area-button.home-button.selected .area-name,
.sidebar .area-button.home-button.selected .area-menu-chevron{
        color: var(--primary-text-color) !important;
      }

      .sidebar .area-button.home-button.selected .area-icon ha-icon{
        color: var(--primary-color) !important;
      }

      /* Status counts match room badges: near-circle,
never pill-shaped for 1–2 digits. */
      .home-status-card .status-card-badge{
        min-width: 20px !important;
        width: 20px !important;
        height: 20px !important;
        padding: 0 !important;
        border-radius: 999px !important;
      }
    }

    /* Richer power dialog mirrors the Devices > Energy information density. */
    .house-power-dialog{
      width: min(900px, calc(100vw - 32px));
    }

    .house-power-dialog-overview{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 12px;
    }

    .house-power-dialog-overview-card{
      min-width: 0;
      padding: 13px;
      border-radius: 11px;
      background: var(--card-background-color);
      box-shadow:
        inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 7%, transparent),
        0 8px 22px rgba(15, 23, 42, 0.04);
    }

    .house-power-dialog-overview-head{
      display: grid;
      grid-template-columns: 38px minmax(0, 1fr) auto;
      align-items: center;
      gap: 9px;
    }

    .house-power-dialog-overview-icon{
      width: 38px;
      height: 38px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      color: #d88e20;
      background: color-mix(in srgb, #d88e20 10%, transparent);
    }

    .house-power-dialog-overview-icon ha-icon{ --mdc-icon-size: 21px; }
    .house-power-dialog-overview-head strong{ display: block; font-size: 14px; font-weight: 850; }
    .house-power-dialog-overview-head small{ display: block; margin-top: 3px; color: var(--secondary-text-color); font-size: 11px; font-weight: 700; }
    .house-power-dialog-overview-head b{ font-size: 20px; font-weight: 950; white-space: nowrap; }

    .house-power-statistics-card{
      display: block;
      min-height: 132px;
      margin-top: 10px;
      border-radius: 10px;
      overflow: hidden;
      background: color-mix(in srgb, #d88e20 4%, transparent);
      --ha-card-background: transparent;
      --ha-card-box-shadow: none;
      --ha-card-border-width: 0;
      --ha-card-border-radius: 10px;
    }

    .house-power-dialog-top-entities{
      margin-top: 10px;
      display: grid;
      gap: 5px;
    }

    .house-power-dialog-top-entities button{
      min-height: 30px;
      padding: 0 9px;
      border: 0;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      background: color-mix(in srgb, #d88e20 5%, transparent);
      color: inherit;
      font: inherit;
      cursor: pointer;
    }

    .house-power-dialog-entity.detailed{
      display: grid;
      grid-template-columns: 32px minmax(0, 1fr) auto;
      align-items: center;
      gap: 8px;
      min-height: 42px;
      padding: 5px 6px;
    }

    .house-power-dialog-entity-icon{
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: #d88e20;
      background: color-mix(in srgb, #d88e20 9%, transparent);
    }

    .house-power-dialog-entity-icon ha-icon{ --mdc-icon-size: 17px; }

    .house-power-dialog-entity-copy{
      min-width: 0;
      display: grid;
      gap: 2px;
    }

    .house-power-dialog-entity-copy > strong{
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }

    .house-power-dialog-entity-copy > small{
      color: var(--secondary-text-color);
      font-size: 10px;
    }

    .house-power-dialog-entity-bar{
      position: relative;
      height: 3px;
      overflow: hidden;
      border-radius: 999px;
      background: color-mix(in srgb, #d88e20 10%, var(--secondary-background-color));
    }

    .house-power-dialog-entity-bar span{
      position: absolute;
      inset: 0 auto 0 0;
      width: var(--entity-power-width, 0%);
      min-width: 3px;
      border-radius: inherit;
      background: #d88e20;
    }

    .house-power-dialog-entity.detailed > b{
      font-size: 12px;
      white-space: nowrap;
    }

    @media (max-width: 1100px) and (min-width: 769px) {
      .home-status-primary-grid{
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .favorites-grid,
.home-summary-list{
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 768px) {
      .home-status-primary-grid,
.home-status-secondary-grid{
        display: contents;
      }

      .home-status-stack{
        display: contents;
      }

      .house-power-dialog-overview{
        grid-template-columns: 1fr;
      }
    }

    /* Compact Home Favorites and clearer sidebar Home state. */
    @media (min-width: 769px) {
      .home-favorites-section .favorites-grid{
        grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
        gap: 10px !important;
      }

      .home-favorites-section .favorite-card-wrapper{
        min-height: 81px !important;
        height: 81px !important;
        padding: 9px 10px !important;
        display: grid !important;
        grid-template-columns: 38px minmax(0, 1fr) auto !important;
        grid-template-rows: 1fr !important;
        align-items: center !important;
        gap: 9px !important;
      }

      .home-favorites-section .favorite-icon{
        width: 38px !important;
        height: 38px !important;
        margin: 0 !important;
        align-self: center !important;
      }

      .home-favorites-section .favorite-icon ha-icon{
        --mdc-icon-size: 21px !important;
      }

      .home-favorites-section .favorite-body{
        min-width: 0;
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        gap: 3px;
      }

      .home-favorites-section .favorite-name{
        margin: 0 !important;
        font-size: 13px !important;
        line-height: 1.05 !important;
        -webkit-line-clamp: 1 !important;
      }

      .home-favorites-section .favorite-area{
        margin: 0 !important;
        font-size: 9px !important;
        line-height: 1 !important;
      }

      .home-favorites-section .favorite-end{
        min-width: 48px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        gap: 4px;
      }

      .home-favorites-section .favorite-quick-action{
        width: 38px !important;
        height: 22px !important;
        flex: 0 0 auto;
      }

      .home-favorites-section .favorite-end-state,
.home-favorites-section .favorite-info-state{
        max-width: 76px;
        color: var(--secondary-text-color);
        font-size: 9px;
        font-weight: 750;
        line-height: 1.05;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .home-favorites-section .favorite-info-state{
        font-size: 12px;
        color: var(--primary-text-color);
      }

      .home-favorites-section .favorite-state{
        display: none !important;
      }

      /* Unselected Home must not resemble a selected room. */
      .sidebar .area-button.home-button{
        background: var(--card-background-color) !important;
        border-color: color-mix(in srgb, var(--primary-color) 16%, var(--divider-color)) !important;
        box-shadow:
          inset 3px 0 0 color-mix(in srgb, var(--primary-color) 60%, transparent),
          0 5px 12px rgba(15, 23, 42, 0.04) !important;
      }

      .sidebar .area-button.home-button.selected{
        background: color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 46%, var(--divider-color)) !important;
        box-shadow:
          inset 4px 0 0 var(--primary-color),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 12%, transparent),
          0 8px 18px color-mix(in srgb, var(--primary-color) 10%, transparent) !important;
      }

      .sidebar .room-area-button.selected{
        background: color-mix(in srgb, var(--card-background-color) 94%, var(--primary-color) 6%) !important;
      }
    }

    @media (max-width: 1250px) and (min-width: 769px) {
      .home-favorites-section .favorites-grid{
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
      }
    }

    .house-power-dialog-actions{
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 0 0 auto;
    }

    .house-power-dialog-energy-link{
      min-height: 36px;
      padding: 0 11px;
      border: 0;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      color: #d88e20;
      background: color-mix(in srgb, #d88e20 10%, var(--card-background-color));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #d88e20 14%, transparent);
      font: inherit;
      font-size: 12px;
      font-weight: 850;
      cursor: pointer;
    }

    .house-power-dialog-energy-link:hover{
      background: color-mix(in srgb, #d88e20 15%, var(--card-background-color));
    }

    .house-power-dialog-energy-link ha-icon{
      --mdc-icon-size: 17px;
    }

    @media (max-width: 768px) {
      .house-power-dialog-energy-link span{
        display: none;
      }

      .house-power-dialog-energy-link{
        width: 36px;
        padding: 0;
      }
    }

    /* Final Home polish: compact Favorites, clear Home state, exact room-Favorites centering. */
    @media (min-width: 769px) {
      .home-favorites-section .favorite-card-wrapper{
        height: 84px !important;
        min-height: 84px !important;
        grid-template-columns: 34px minmax(0, 1fr) 46px !important;
        gap: 8px !important;
        padding: 9px 10px !important;
      }
      .home-favorites-section .favorite-icon{
        width: 34px !important;
        height: 34px !important;
      }
      .home-favorites-section .favorite-icon ha-icon{ --mdc-icon-size: 19px !important; }
      .home-favorites-section .favorite-body{
        gap: 2px !important;
        overflow: visible !important;
      }
      .home-favorites-section .favorite-name{
        display: -webkit-box !important;
        overflow: hidden !important;
        text-overflow: clip !important;
        white-space: normal !important;
        overflow-wrap: anywhere;
        -webkit-line-clamp: 2 !important;
        -webkit-box-orient: vertical !important;
        font-size: 12px !important;
        line-height: 1.08 !important;
      }
      .home-favorites-section .favorite-area{
        overflow: hidden !important;
        text-overflow: clip !important;
        white-space: nowrap !important;
      }
      .home-favorites-section .favorite-end{
        width: 46px !important;
        min-width: 46px !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 3px !important;
      }
      .home-favorites-section .favorite-quick-action{ margin: 0 auto !important; }
      .home-favorites-section .favorite-end-state{
        width: 100% !important;
        max-width: none !important;
        text-align: center !important;
        font-size: 9px !important;
        line-height: 1 !important;
      }
      .home-favorites-section .favorite-info-state{
        width: 100% !important;
        max-width: none !important;
        text-align: center !important;
        color: var(--favorite-color) !important;
        font-size: 13px !important;
        font-weight: 900 !important;
        line-height: 1 !important;
      }

      .sidebar .area-button.home-button{
        background: color-mix(in srgb, var(--primary-color) 7%, var(--card-background-color)) !important;
        border: 1px solid color-mix(in srgb, var(--primary-color) 20%, var(--divider-color)) !important;
        box-shadow: 0 5px 12px rgba(15, 23, 42, 0.045) !important;
      }
      .sidebar .area-button.home-button.selected{
        background: color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 48%, var(--divider-color)) !important;
        box-shadow:
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 10%, transparent),
          0 8px 18px color-mix(in srgb, var(--primary-color) 11%, transparent) !important;
      }
      .sidebar .room-area-button.selected{
        background: color-mix(in srgb, var(--primary-color) 7%, var(--card-background-color)) !important;
      }
    }

    .room-favorites-title,
.room-favorites-title .mobile-domain-leading-chevron,
.room-favorites-title .room-domain-icon,
.room-favorites-title .mobile-domain-title-copy,
.room-favorites-title .mobile-domain-title-label,
.room-favorites-title .mobile-domain-count{
      height: 24px !important;
      min-height: 24px !important;
      margin: 0 !important;
      padding: 0 !important;
      display: inline-flex !important;
      align-items: center !important;
      align-self: center !important;
      line-height: 24px !important;
      vertical-align: middle !important;
      transform: none !important;
    }
    .room-favorites-title{
      gap: 6px !important;
    }
    .room-favorites-title .mobile-domain-title-copy{
      gap: 5px !important;
    }

    .house-power-dialog-title-wrap{
      display: flex !important;
      align-items: center !important;
      gap: 9px !important;
      flex-wrap: wrap;
      min-width: 0;
    }
    .house-power-dialog-energy-link{
      min-height: 30px !important;
      padding: 0 10px !important;
      margin-left: 2px !important;
      font-size: 11px !important;
    }
    @media (max-width: 768px) {
      .house-power-dialog-energy-link span{ display: inline !important; }
      .house-power-dialog-energy-link{ width: auto !important; }
    }

    /* Final visual cleanup for Home favorites and room Favorites header. */
    @media (min-width: 769px) {
      .home-favorites-section .favorite-card-wrapper{
        min-height: 84px !important;
        height: 84px !important;
        padding: 9px 10px !important;
        grid-template-columns: 38px minmax(0, 1fr) 50px !important;
        align-items: center !important;
        gap: 9px !important;
      }

      .home-favorites-section .favorite-body{
        min-width: 0 !important;
        align-self: center !important;
        gap: 3px !important;
      }

      .home-favorites-section .favorite-name{
        max-width: 100% !important;
        margin: 0 !important;
        display: -webkit-box !important;
        -webkit-box-orient: vertical !important;
        -webkit-line-clamp: 2 !important;
        overflow: hidden !important;
        text-overflow: clip !important;
        white-space: normal !important;
        overflow-wrap: anywhere !important;
        font-size: 13px !important;
        line-height: 1.08 !important;
      }

      .home-favorites-section .favorite-area{
        max-width: 100% !important;
        overflow: hidden !important;
        text-overflow: clip !important;
        white-space: nowrap !important;
        font-size: 9px !important;
        line-height: 1.05 !important;
      }

      .home-favorites-section .favorite-end{
        width: 50px !important;
        min-width: 50px !important;
        height: 48px !important;
        display: grid !important;
        grid-template-rows: 26px 14px !important;
        align-content: center !important;
        justify-items: center !important;
        gap: 2px !important;
      }

      .home-favorites-section .favorite-quick-action{
        width: 40px !important;
        height: 24px !important;
        margin: 0 !important;
      }

      .home-favorites-section .favorite-end-state{
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        color: var(--secondary-text-color) !important;
        font-size: 9px !important;
        font-weight: 800 !important;
        line-height: 12px !important;
        text-align: center !important;
        overflow: visible !important;
        white-space: nowrap !important;
      }

      .home-favorites-section .favorite-info-state{
        width: 100% !important;
        max-width: none !important;
        height: 48px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        color: var(--favorite-color) !important;
        font-size: 13px !important;
        font-weight: 900 !important;
        line-height: 1 !important;
        text-align: center !important;
        overflow: visible !important;
        white-space: nowrap !important;
      }

      .sidebar .area-button.home-button{
        background: color-mix(in srgb, var(--secondary-background-color) 72%, var(--card-background-color)) !important;
        border: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, var(--divider-color)) !important;
        box-shadow: 0 5px 12px rgba(15, 23, 42, 0.05) !important;
      }

      .sidebar .area-button.home-button.selected{
        background: color-mix(in srgb, var(--primary-color) 14%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 38%, var(--divider-color)) !important;
        box-shadow:
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 10%, transparent),
          0 8px 18px color-mix(in srgb, var(--primary-color) 10%, transparent) !important;
      }
    }

    .room-favorites-header{
      min-height: 38px !important;
      height: 38px !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      display: flex !important;
      align-items: center !important;
    }

    .room-favorites-title{
      min-height: 20px !important;
      height: 20px !important;
      display: inline-flex !important;
      align-items: center !important;
      gap: 6px !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 1 !important;
    }

    .room-favorites-title .mobile-domain-leading-chevron,
.room-favorites-title .room-domain-icon{
      width: 18px !important;
      height: 18px !important;
      min-height: 18px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 0 !important;
      transform: none !important;
    }

    .room-favorites-title .mobile-domain-leading-chevron{
      --mdc-icon-size: 16px !important;
    }

    .room-favorites-title .room-favorites-icon ha-icon{
      --mdc-icon-size: 18px !important;
    }

    .room-favorites-title .mobile-domain-title-copy{
      min-height: 20px !important;
      height: 20px !important;
      display: inline-flex !important;
      align-items: center !important;
      gap: 5px !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .room-favorites-title .mobile-domain-title-label,
.room-favorites-title .mobile-domain-count{
      min-height: 20px !important;
      height: 20px !important;
      display: inline-flex !important;
      align-items: center !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 20px !important;
      transform: translateY(0.5px) !important;
    }

    .room-favorites-title .mobile-domain-title-label{
      font-size: 15px !important;
    }

    .room-favorites-title .mobile-domain-count{
      font-size: 10px !important;
    }


    /* 2026-09 Home polish: readable favorites, clear Home state, exact Favorites header alignment. */
    @media (min-width: 769px) {
      .home-favorites-section .favorites-grid{
        grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)) !important;
        gap: 10px !important;
      }

      .home-favorites-section .favorite-card-wrapper{
        min-height: 86px !important;
        height: auto !important;
        padding: 10px 12px !important;
        display: grid !important;
        grid-template-columns: 40px minmax(0, 1fr) auto !important;
        align-items: center !important;
        gap: 10px !important;
      }

      .home-favorites-section .favorite-icon{
        width: 40px !important;
        height: 40px !important;
        margin: 0 !important;
        align-self: center !important;
      }

      .home-favorites-section .favorite-body{
        min-width: 0 !important;
        overflow: visible !important;
        align-self: center !important;
        gap: 3px !important;
      }

      .home-favorites-section .favorite-name,
.home-favorites-section .favorite-area{
        max-width: 100% !important;
        display: block !important;
        overflow: visible !important;
        text-overflow: clip !important;
        white-space: normal !important;
        overflow-wrap: anywhere !important;
        -webkit-line-clamp: unset !important;
        -webkit-box-orient: initial !important;
      }

      .home-favorites-section .favorite-name{
        margin: 0 !important;
        font-size: 13px !important;
        line-height: 1.12 !important;
      }

      .home-favorites-section .favorite-area{
        margin: 0 !important;
        font-size: 10px !important;
        line-height: 1.12 !important;
      }

      .home-favorites-section .favorite-end{
        width: auto !important;
        min-width: 0 !important;
        height: auto !important;
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: flex-end !important;
        gap: 8px !important;
      }

      .home-favorites-section .favorite-end-state{
        width: auto !important;
        max-width: none !important;
        margin: 0 !important;
        color: var(--favorite-color) !important;
        font-size: 10px !important;
        font-weight: 850 !important;
        line-height: 1 !important;
        text-align: right !important;
        overflow: visible !important;
        white-space: nowrap !important;
      }

      .home-favorites-section .favorite-quick-action{
        width: 40px !important;
        height: 24px !important;
        margin: 0 !important;
        flex: 0 0 auto !important;
      }

      .home-favorites-section .favorite-info-state{
        width: auto !important;
        max-width: none !important;
        height: auto !important;
        display: block !important;
        color: var(--favorite-color) !important;
        font-size: 15px !important;
        font-weight: 900 !important;
        line-height: 1 !important;
        text-align: right !important;
        overflow: visible !important;
        white-space: nowrap !important;
      }

      .sidebar .area-button.home-button{
        background: color-mix(in srgb, var(--primary-color) 9%, var(--secondary-background-color)) !important;
        border: 1px solid color-mix(in srgb, var(--primary-color) 22%, var(--divider-color)) !important;
        box-shadow: 0 5px 12px rgba(15, 23, 42, 0.045) !important;
      }

      .sidebar .area-button.home-button.selected{
        background: color-mix(in srgb, var(--primary-color) 20%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 46%, var(--divider-color)) !important;
        box-shadow:
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 12%, transparent),
          0 8px 18px color-mix(in srgb, var(--primary-color) 10%, transparent) !important;
      }
    }

    .room-favorites-header{
      min-height: 40px !important;
      height: 40px !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      display: flex !important;
      align-items: center !important;
    }

    .room-favorites-title,
.room-favorites-title .mobile-domain-title-copy{
      min-height: 0 !important;
      height: auto !important;
      margin: 0 !important;
      padding: 0 !important;
      display: inline-flex !important;
      align-items: center !important;
      align-self: center !important;
      line-height: 1.15 !important;
      transform: none !important;
    }

    .room-favorites-title{
      gap: 6px !important;
    }

    .room-favorites-title .mobile-domain-title-copy{
      gap: 5px !important;
    }

    .room-favorites-title .mobile-domain-leading-chevron,
.room-favorites-title .room-domain-icon{
      width: 18px !important;
      height: 18px !important;
      min-height: 18px !important;
      margin: 0 !important;
      padding: 0 !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      align-self: center !important;
      line-height: 0 !important;
      transform: none !important;
    }

    .room-favorites-title .mobile-domain-title-label,
.room-favorites-title .mobile-domain-count{
      min-height: 0 !important;
      height: auto !important;
      margin: 0 !important;
      padding: 0 !important;
      display: inline-flex !important;
      align-items: center !important;
      align-self: center !important;
      line-height: 1.15 !important;
      transform: none !important;
      vertical-align: middle !important;
    }


    /* 2026-09-30 final entity-card system: compact favorites + four-column room controls. */
    @media (min-width: 769px) {
      .home-favorites-section .favorites-grid,
.room-favorites-content .favorites-grid{
        grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
        gap: 8px !important;
      }

      .home-favorites-section .favorite-card-wrapper,
.room-favorites-content .favorite-card-wrapper{
        width: 100% !important;
        height: 58px !important;
        min-height: 58px !important;
        padding: 7px 8px !important;
        box-sizing: border-box !important;
        display: grid !important;
        grid-template-columns: 36px minmax(0, 1fr) auto !important;
        grid-template-rows: 1fr !important;
        align-items: center !important;
        gap: 7px !important;
        overflow: hidden !important;
        border-radius: 8px !important;
      }

      .home-favorites-section .favorite-icon,
.room-favorites-content .favorite-icon{
        width: 36px !important;
        height: 36px !important;
        margin: 0 !important;
        align-self: center !important;
        border-radius: 8px !important;
      }

      .home-favorites-section .favorite-icon ha-icon,
.room-favorites-content .favorite-icon ha-icon{
        --mdc-icon-size: 19px !important;
      }

      .home-favorites-section .favorite-body,
.room-favorites-content .favorite-body{
        min-width: 0 !important;
        height: 36px !important;
        align-self: center !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        gap: 3px !important;
        overflow: hidden !important;
      }

      .home-favorites-section .favorite-name,
.room-favorites-content .favorite-name{
        min-width: 0 !important;
        width: 100% !important;
        margin: 0 !important;
        display: block !important;
        overflow: hidden !important;
        text-overflow: clip !important;
        white-space: nowrap !important;
        font-size: 10.5px !important;
        font-weight: 850 !important;
        line-height: 1.05 !important;
        letter-spacing: -0.12px !important;
      }

      .home-favorites-section .favorite-meta,
.room-favorites-content .favorite-meta{
        min-width: 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 3px !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        font-size: 9.5px !important;
        font-weight: 700 !important;
        line-height: 1 !important;
      }

      .home-favorites-section .favorite-area,
.room-favorites-content .favorite-area{
        min-width: 0 !important;
        margin: 0 !important;
        overflow: hidden !important;
        text-overflow: clip !important;
        white-space: nowrap !important;
        color: var(--secondary-text-color) !important;
        font-size: inherit !important;
        line-height: inherit !important;
      }

      .home-favorites-section .favorite-meta-separator,
.room-favorites-content .favorite-meta-separator{
        flex: 0 0 auto !important;
        color: color-mix(in srgb, var(--secondary-text-color) 72%, transparent) !important;
      }

      .home-favorites-section .favorite-inline-state,
.room-favorites-content .favorite-inline-state{
        flex: 0 0 auto !important;
        color: var(--favorite-color) !important;
        font-weight: 850 !important;
      }

      .home-favorites-section .favorite-card-wrapper.is-off .favorite-inline-state,
.home-favorites-section .favorite-card-wrapper.is-idle .favorite-inline-state,
.room-favorites-content .favorite-card-wrapper.is-off .favorite-inline-state,
.room-favorites-content .favorite-card-wrapper.is-idle .favorite-inline-state{
        color: var(--secondary-text-color) !important;
      }

      .home-favorites-section .favorite-end,
.room-favorites-content .favorite-end{
        width: auto !important;
        min-width: 0 !important;
        height: 36px !important;
        display: inline-flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: flex-end !important;
        gap: 4px !important;
        align-self: center !important;
      }

      .home-favorites-section .favorite-quick-action,
.room-favorites-content .favorite-quick-action{
        width: 38px !important;
        height: 22px !important;
        margin: 0 !important;
      }

      .favorite-cover-actions{
        min-height: 30px;
        padding: 2px;
        display: inline-flex;
        align-items: center;
        gap: 2px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--secondary-background-color) 74%, #ffffff);
        box-shadow:
          inset 0 0 0 1px rgba(15, 23, 42, 0.055),
          0 4px 10px rgba(15, 23, 42, 0.06);
      }

      .favorite-cover-action{
        width: 25px;
        height: 25px;
        padding: 0;
        border: 0;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: color-mix(in srgb, var(--primary-text-color) 60%, transparent);
        background: transparent;
        cursor: pointer;
      }

      .favorite-cover-action ha-icon{ --mdc-icon-size: 15px; }

      .favorite-cover-action.active{
        color: #fff;
        background: var(--favorite-color);
      }

      .mobile-light-control-row{
        width: 100%;
        min-width: 0;
        margin-top: 8px;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        align-items: center;
        gap: 8px;
      }

      .mobile-light-mode-buttons{
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .mobile-light-mode-button{
        width: 28px;
        height: 28px;
        padding: 0;
        border: 0;
        border-radius: 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: color-mix(in srgb, var(--primary-text-color) 64%, transparent);
        background: color-mix(in srgb, var(--secondary-background-color) 74%, var(--card-background-color));
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 5%, transparent);
        cursor: pointer;
      }

      .mobile-light-mode-button ha-icon{ --mdc-icon-size: 16px; }

      .mobile-light-mode-button.active{
        color: var(--entity-color);
        background: color-mix(in srgb, var(--entity-color) 15%, var(--card-background-color));
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--entity-color) 24%, transparent);
      }

      .mobile-light-control-slider,
.mobile-cover-position input[type="range"]{
        appearance: none;
        width: 100%;
        height: 5px;
        margin: 0;
        border: 0;
        border-radius: 999px;
        outline: none;
        background: color-mix(in srgb, var(--primary-text-color) 13%, transparent);
        cursor: pointer;
      }

      .mobile-light-control-row.mode-brightness .mobile-light-control-slider{
        background: linear-gradient(90deg, #e1a129 0%, #f0bd45 100%);
      }

      .mobile-light-control-row.mode-color_temp .mobile-light-control-slider{
        background: linear-gradient(90deg, #f4a340 0%, #ffe4aa 43%, #d9ecff 66%, #7eb9ff 100%);
      }

      .mobile-light-control-row.mode-color .mobile-light-control-slider{
        background: linear-gradient(
          90deg,
          #ff3b30 0%,
          #ff9500 16%,
          #ffcc00 30%,
          #34c759 45%,
          #00c7be 58%,
          #007aff 72%,
          #5856d6 84%,
          #af52de 92%,
          #ff2d55 100%
        );
      }

      .mobile-light-control-slider::-webkit-slider-thumb,
.mobile-cover-position input[type="range"]::-webkit-slider-thumb{
        appearance: none;
        width: 15px;
        height: 15px;
        border: 2px solid var(--entity-color);
        border-radius: 50%;
        background: var(--card-background-color);
        box-shadow: 0 2px 5px rgba(15, 23, 42, 0.12);
      }

      .mobile-light-control-slider::-moz-range-thumb,
.mobile-cover-position input[type="range"]::-moz-range-thumb{
        width: 13px;
        height: 13px;
        border: 2px solid var(--entity-color);
        border-radius: 50%;
        background: var(--card-background-color);
      }

      .mobile-cover-position{
        width: 100%;
        margin-top: 10px;
      }

      .mobile-cover-position input[type="range"]{
        background: linear-gradient(90deg, var(--entity-color) 0%, var(--entity-color) 100%) !important;
      }

      .mobile-entity-brightness{
        display: none !important;
      }
    }


    /* 2026-09-30 entity-card refinements */
    @media (min-width: 769px) {
      /* Favorites: identical component in Home and room header; use every pixel for text. */
      .home-favorites-section .favorite-card-wrapper,
.header-favorites .favorite-card-wrapper,
.room-favorites-content .favorite-card-wrapper{
        grid-template-columns: 32px minmax(0, 1fr) auto !important;
        gap: 5px !important;
        padding: 6px 7px !important;
      }

      .home-favorites-section .favorite-icon,
.header-favorites .favorite-icon,
.room-favorites-content .favorite-icon{
        width: 32px !important;
        height: 32px !important;
      }

      .home-favorites-section .favorite-body,
.header-favorites .favorite-body,
.room-favorites-content .favorite-body{
        height: 32px !important;
        gap: 2px !important;
      }

      .home-favorites-section .favorite-name,
.header-favorites .favorite-name,
.room-favorites-content .favorite-name{
        font-size: 10px !important;
        letter-spacing: -0.2px !important;
      }

      .home-favorites-section .favorite-name.is-long,
.header-favorites .favorite-name.is-long,
.room-favorites-content .favorite-name.is-long{
        font-size: 9px !important;
        letter-spacing: -0.28px !important;
      }

      .home-favorites-section .favorite-name.is-very-long,
.header-favorites .favorite-name.is-very-long,
.room-favorites-content .favorite-name.is-very-long{
        font-size: 8px !important;
        letter-spacing: -0.32px !important;
      }

      .home-favorites-section .favorite-meta,
.header-favorites .favorite-meta,
.room-favorites-content .favorite-meta{
        font-size: 8.7px !important;
        gap: 2px !important;
      }

      .home-favorites-section .favorite-quick-action,
.header-favorites .favorite-quick-action,
.room-favorites-content .favorite-quick-action{
        width: 36px !important;
        height: 21px !important;
      }

      .home-favorites-section .favorite-end,
.header-favorites .favorite-end,
.room-favorites-content .favorite-end{
        height: 32px !important;
        margin-left: 2px !important;
      }

      .header-favorites .favorites-grid,
.room-favorites-content .favorites-grid{
        grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
        gap: 8px !important;
      }

      .mobile-light-control-row{
        margin-top: 6px !important;
        grid-template-columns: minmax(0, 1fr) auto !important;
        gap: 7px !important;
      }

      .mobile-light-mode-buttons{
        order: 2;
        gap: 3px !important;
      }

      .mobile-light-control-slider{
        order: 1;
      }

      .mobile-light-mode-button{
        width: 27px !important;
        height: 27px !important;
      }

      /* Slightly stronger sliders/thumbs for lights and covers. */
      .mobile-light-control-slider,
.mobile-cover-position input[type="range"]{
        height: 6px !important;
      }

      .mobile-light-control-slider::-webkit-slider-thumb,
.mobile-cover-position input[type="range"]::-webkit-slider-thumb{
        width: 16px !important;
        height: 16px !important;
      }

      .mobile-light-control-slider::-moz-range-thumb,
.mobile-cover-position input[type="range"]::-moz-range-thumb{
        width: 14px !important;
        height: 14px !important;
      }

      .mobile-cover-position{
        margin-top: 7px !important;
      }

      /* A cover percentage describes the open position,
so fill from the left up to that value. */
      .mobile-cover-position input[type="range"]{
        background: linear-gradient(
          90deg,
          var(--entity-color) 0%,
          var(--entity-color) var(--cover-position),
          color-mix(in srgb, var(--primary-text-color) 13%, transparent) var(--cover-position),
          color-mix(in srgb, var(--primary-text-color) 13%, transparent) 100%
        ) !important;
      }
    }


    /* 2026-10-01 entity/favorites refinement: compact vertical rhythm and clean controls. */
    @media (min-width: 769px) {

      .mobile-light-control-row{
        margin-top: 8px !important;
        margin-bottom: 0 !important;
        min-height: 27px !important;
        align-items: center !important;
      }

      .mobile-light-control-slider,
.mobile-cover-position input[type="range"]{
        height: 8px !important;
      }

      .mobile-light-control-slider::-webkit-slider-runnable-track,
.mobile-cover-position input[type="range"]::-webkit-slider-runnable-track{
        height: 8px !important;
        border-radius: 999px !important;
      }

      .mobile-light-control-slider::-moz-range-track,
.mobile-cover-position input[type="range"]::-moz-range-track{
        height: 8px !important;
        border-radius: 999px !important;
      }

      .mobile-light-control-slider::-moz-range-progress{
        height: 8px !important;
        border-radius: 999px !important;
      }

      .mobile-cover-position{
        margin-top: 8px !important;
        margin-bottom: 0 !important;
        min-height: 8px !important;
      }

      .mobile-cover-position input[type="range"]{
        display: block !important;
      }

      /* Favorites: same compact rhythm on Home and in rooms. */
      .home-favorites-section .favorites-header{
        margin-bottom: 8px !important;
      }

      .home-favorites-section .favorites-grid{
        overflow: visible !important;
        padding: 2px 0 4px !important;
      }

      .home-favorites-section .favorites-section,
.home-favorites-section .favorite-card-wrapper,
.room-favorites-content .favorites-section,
.room-favorites-content .favorite-card-wrapper{
        overflow: visible !important;
      }

      .room-favorites-content{
        padding-top: 2px !important;
      }

      .home-favorites-section .favorite-card-wrapper,
.room-favorites-content .favorite-card-wrapper{
        overflow: visible !important;
      }

      /* A value-only favorite uses exactly the same visual slot as the light toggle. */
      .home-favorites-section .favorite-status-pill,
.room-favorites-content .favorite-status-pill{
        width: 38px !important;
        height: 22px !important;
        box-sizing: border-box !important;
        flex: 0 0 38px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 999px !important;
        color: var(--favorite-color) !important;
        background: color-mix(in srgb, var(--favorite-color) 12%, var(--card-background-color)) !important;
        font-size: 10px !important;
        font-weight: 850 !important;
        line-height: 1 !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }

      .home-favorites-section .favorite-end,
.room-favorites-content .favorite-end{
        min-width: 38px !important;
      }

      /* With a toggle,
the area line is the only secondary text; no duplicate state. */
      .home-favorites-section .favorite-meta,
.room-favorites-content .favorite-meta{
        gap: 0 !important;
      }

      /* Keep the same title-to-card distance as the other generated entity groups. */
      .room-favorites-content .favorites-grid{
        padding-top: 2px !important;
      }

      /* Preserve the shadow around the Home cards instead of clipping it at the card edge. */
      .home-favorites-section .favorite-card-wrapper,
.room-favorites-content .favorite-card-wrapper{
        clip-path: none !important;
      }
    }


    /* 2026-10-01: restore the 1.9.0 slider geometry and final room/home rhythm. */
    @media (min-width: 769px) {
      .mobile-light-control-slider,
.mobile-cover-position input[type="range"]{
        height: 5px !important;
      }

      .mobile-light-control-slider::-webkit-slider-runnable-track,
.mobile-cover-position input[type="range"]::-webkit-slider-runnable-track{
        height: 5px !important;
        border-radius: 999px !important;
      }

      .mobile-light-control-slider::-moz-range-track,
.mobile-cover-position input[type="range"]::-moz-range-track{
        height: 5px !important;
        border-radius: 999px !important;
      }

      .mobile-light-control-slider::-moz-range-progress{
        height: 5px !important;
        border-radius: 999px !important;
      }

      .mobile-light-control-slider::-webkit-slider-thumb,
.mobile-cover-position input[type="range"]::-webkit-slider-thumb{
        width: 15px !important;
        height: 15px !important;
      }

      .mobile-light-control-slider::-moz-range-thumb,
.mobile-cover-position input[type="range"]::-moz-range-thumb{
        width: 13px !important;
        height: 13px !important;
      }

      /* Favorites sit close to their header,
with the same compact rhythm as entity groups. */
      .home-favorites-section{
        overflow: visible !important;
      }

      .home-favorites-section .favorites-header{
        margin-bottom: 6px !important;
      }

      .home-favorites-section .favorites-grid,
.room-favorites-content .favorites-grid{
        padding-top: 0 !important;
        overflow: visible !important;
      }

      .home-favorites-section .favorite-card-wrapper,
.room-favorites-content .favorite-card-wrapper{
        overflow: visible !important;
      }

    }

    /* 2026-10-01: restore 1.9.0 controls + final favorites spacing/shadows. */
    @media (min-width: 769px) {
      /*
       * Keep the 1.9.6 implementation code available,
but do not render the
       * added light sliders/mode buttons or the cover-position slider.
       * This restores the visible control behavior of 1.9.0:
       * lights = normal toggle,
covers = open/stop/close buttons.
       */

      .room-favorites-block:not(.is-collapsed) .room-favorites-header{
        margin-bottom: 2px !important;
      }

      .room-favorites-content,
.room-favorites-content .favorites-grid{
        padding-top: 0 !important;
        margin-top: 0 !important;
      }

      /*
       * Home has a more specific overflow-x rule than the room view.
       * Override it so the shadow belongs to each individual favorite tile
       * and is not clipped at the bottom.
       */
      .home-view .home-favorites-section,
.home-view .home-favorites-section .favorites-grid,
.home-view .home-favorites-section .favorite-card-wrapper{
        overflow: visible !important;
      }

      .home-view .home-favorites-section .favorite-card-wrapper{
        clip-path: none !important;
      }
    }

    /* 2026-10-01: definitive room-grid/favorite spacing pass. */
    @media (min-width: 769px) {

      /*
       * Favorites: the room header has its own 6px content padding,
which
       * doubled the intended header-to-card distance. Remove only that
       * top padding; the other insets remain unchanged.
       */
      .room-favorites-content{
        padding-top: 0 !important;
      }

      .room-favorites-content .favorites-grid{
        padding-top: 0 !important;
      }

      .home-favorites-section .favorites-header{
        margin-bottom: 6px !important;
      }
    }

    /* 2026-10-01: match the 1.9.0 favorite spacing and shadow behavior. */
    @media (min-width: 769px) {

      /* Home favorites must not use paint containment,
otherwise their card shadows are clipped. */
      .home-favorites-section{
        content-visibility: visible !important;
        contain: layout style !important;
        overflow: visible !important;
      }

      .home-favorites-section .favorites-grid,
.home-favorites-section .favorite-card-wrapper{
        overflow: visible !important;
      }
    }

    /* 2026-10-01: Favorites spacing and Home card-shadow fix. */
    @media (min-width: 769px) {
      /* Cards directly follow the room Favorites header. */
      .room-favorites-block:not(.is-collapsed) .room-favorites-header{
        margin-bottom: 0 !important;
      }
      .room-favorites-content,
.room-favorites-content .favorites-grid{
        padding-top: 0 !important;
      }

      /* Home Favorites: keep individual card shadows visible,
as on room pages. */
      .home-favorites-section,
.home-favorites-section .favorites-grid,
.home-favorites-section .favorites-section{
        overflow: visible !important;
      }
      .home-favorites-section .favorite-card-wrapper{
        overflow: visible !important;
        clip-path: none !important;
      }
    }


    /* 2026-10-01: Home favorites should match the room-card shadow treatment. */
    @media (min-width: 769px) {
      .home-favorites-section .favorites-header{
        margin-bottom: 0 !important;
      }

      .home-favorites-section .favorites-grid{
        margin-top: 0 !important;
        padding-top: 0 !important;
      }

      /* Do not let Home-section paint/content containment clip card shadows. */
      .home-favorites-section{
        content-visibility: visible !important;
        contain: none !important;
        overflow: visible !important;
      }

      .home-favorites-section .favorites-grid{
        overflow: visible !important;
      }

      .home-favorites-section .favorite-card-wrapper{
        contain: layout style !important;
        overflow: visible !important;
      }
    }


    /* 2026-10-01: Home favorites should match the room-card shadow treatment. */
    @media (min-width: 769px) {
      .home-favorites-section .favorites-header{
        margin-bottom: 0 !important;
      }

      .home-favorites-section .favorites-grid{
        margin-top: 0 !important;
        padding-top: 0 !important;
      }

      .home-favorites-section{
        content-visibility: visible !important;
        contain: none !important;
        overflow: visible !important;
      }

      .home-favorites-section .favorites-grid{
        overflow: visible !important;
      }

      .home-favorites-section .favorite-card-wrapper{
        contain: layout style !important;
        overflow: visible !important;
      }
    }

    /* 2026-10-01: desktop room/entity scale — 20% larger, four columns. */
    @media (min-width: 769px) {

      /* Sidebar room tiles: target the actual room tile class; do not override generic area buttons. */
      .sidebar .room-area-button{
        display: grid !important;
        grid-template-columns: 89px minmax(0, 1fr) !important;
        align-items: stretch !important;
        gap: 12px !important;
        min-height: 110px !important;
        height: 110px !important;
        padding: 10px !important;
        box-sizing: border-box !important;
        border-radius: 12px !important;
      }

      .sidebar .room-area-button .area-media{
        width: 89px !important;
        height: 89px !important;
        align-self: center !important;
      }
      .sidebar .room-area-button .area-media-icon{
        width: 89px !important;
        height: 89px !important;
      }
      .sidebar .room-area-button .area-media-icon ha-icon{
        --mdc-icon-size: 41px !important;
      }

      .sidebar .room-area-button .area-content{
        min-width: 0 !important;
        height: 100% !important;
        justify-content: center !important;
        gap: 8px !important;
      }
      .sidebar .room-area-button .area-name{
        font-size: 16.8px !important;
        line-height: 1.1 !important;
      }
      .sidebar .room-area-button .area-sensors{
        margin-top: 4px !important;
        font-size: 13.2px !important;
        line-height: 1.1 !important;
      }
      .sidebar .room-area-button .area-info-badges{
        gap: 5px !important;
        max-width: 100% !important;
        min-width: 0 !important;
        overflow: hidden !important;
      }
      .sidebar .room-area-button .info-badge{
        min-width: 32px !important;
        height: 25px !important;
        padding: 0 8px !important;
        font-size: 13px !important;
        flex: 0 0 auto !important;
      }
      .sidebar .room-area-button .info-badge ha-icon{ --mdc-icon-size: 15px !important; }
      .sidebar .room-area-button .badge-count{ font-size: 13px !important; }
      .sidebar .room-area-button .info-badge-overflow{
        min-width: 20px !important;
        width: 20px !important;
        padding: 0 !important;
        border: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        color: var(--secondary-text-color) !important;
        font-size: 16px !important;
        font-weight: 900 !important;
        letter-spacing: 1px !important;
      }

      /* Room header status badges: about 30% larger{
        min-height: 24px !important;
        gap: 5px !important;
        align-items: center !important;
      }

      /* Room-view time/weather: move the cluster slightly left and keep the Home weather treatment. */
      .global-header.room-context{ padding-right: 20px !important; }
      .global-header.room-context .header-time-weather{ gap: 6px !important; }
      .global-header.room-context .weather-compact{
        background: var(--secondary-background-color) !important;
        color: var(--primary-text-color) !important;
      }
      .global-header.room-context .weather-compact ha-icon{ color: var(--primary-text-color) !important; }
    }
    /* 2026-10-01: desktop room-view follow-up — final scoped overrides. */
    @media (min-width: 769px) {

      /* Sidebar: reserve one slot for the ellipsis whenever badges are hidden. */
      .sidebar .room-area-button .area-info-badges{
        min-width: 0 !important;
        max-width: 100% !important;
        overflow: visible !important;
        flex-wrap: nowrap !important;
      }
      .sidebar .room-area-button .info-badge-overflow{
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex: 0 0 18px !important;
        width: 18px !important;
        min-width: 18px !important;
        height: 19px !important;
        padding: 0 !important;
        margin: 0 !important;
        border: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        color: var(--secondary-text-color) !important;
        font-size: 17px !important;
        font-weight: 900 !important;
        line-height: 1 !important;
        letter-spacing: 1px !important;
      }

      /* Room header meta: move the whole time/weather cluster slightly left and tighten the gap. */
      .global-header.room-context{
        padding-right: 36px !important;
      }
      .global-header.room-context .header-time-weather{
        gap: 5px !important;
        transform: translateX(-2px) !important;
      }
      .global-header.room-context .weather-compact{
        background: var(--secondary-background-color) !important;
        color: var(--primary-text-color) !important;
        box-shadow: none !important;
      }
      .global-header.room-context .weather-compact .weather-icon-compact ha-icon{
        color: var(--primary-text-color) !important;
      }
    }
    /* 2026-10-01: header status carousel. */
    .header-status-section{
      position: relative;
      min-width: 0;
    }

    .header-status-section .header-status-scroll{
      min-width: 0;
      overflow-x: auto;
      overflow-y: hidden;
      padding-inline: 30px;
      scrollbar-width: none;
      overscroll-behavior-x: contain;
      scroll-snap-type: x proximity;
      scroll-padding-inline: 30px;
    }

    .header-status-section .header-status-scroll > .status-card-compact{
      flex: 0 0 auto;
      scroll-snap-align: start;
    }

    .header-status-section .header-status-scroll::-webkit-scrollbar{
      display: none;
    }

    .header-status-scroll-button{
      position: absolute;
      top: 50%;
      z-index: 4;
      width: 24px;
      height: 24px;
      padding: 0;
      transform: translateY(-50%);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
      border-radius: 999px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      box-shadow: 0 2px 7px rgba(15, 23, 42, 0.12);
      cursor: pointer;
    }

    .header-status-scroll-button:hover{
      background: var(--secondary-background-color);
    }

    .header-status-scroll-button ha-icon{
      --mdc-icon-size: 17px;
    }

    .header-status-scroll-button-left{
      left: 2px;
    }

    .header-status-scroll-button-right{
      right: 2px;
    }



    /* 2026-10-01: final responsive room/sidebar follow-up. */
    @media (min-width: 769px) {

      /* Sidebar room tile and icon scale continuously with the tile width. */
      .sidebar .room-area-button{
        container-type: inline-size;
        grid-template-columns: clamp(64px, 30cqw, 110px) minmax(0, 1fr) !important;
        min-height: clamp(82px, 36cqw, 120px) !important;
        height: clamp(82px, 36cqw, 120px) !important;
        gap: clamp(8px, 3cqw, 12px) !important;
      }

      .sidebar .room-area-button .area-media,
.sidebar .room-area-button .area-media-icon{
        width: 100% !important;
        height: 100% !important;
      }

      .sidebar .room-area-button .area-media-icon ha-icon{
        --mdc-icon-size: clamp(28px, 11cqw, 42px) !important;
      }

      /* The badge row uses the full remaining width; the TS calculation decides
         how many badges plus the overflow marker are rendered. */
      .sidebar .room-area-button .area-info-badges{
        width: 100% !important;
        max-width: none !important;
        display: flex !important;
        flex-wrap: nowrap !important;
        justify-content: flex-start !important;
        gap: 5px !important;
        overflow: hidden !important;
      }

      /* Keep room meta and favorites aligned with the right edge of the view. */
      .global-header.room-context .header-time-weather{
        margin-left: auto !important;
        justify-self: end !important;
      }

      .global-header.room-context .room-favorites-content .favorites-grid{
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }

    /* The room weather pill must not fall back to HA's neutral secondary background. */
    .global-header.room-context .weather-compact{
      background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
      color: var(--primary-color) !important;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 16%, transparent) !important;
    }

    .global-header.room-context .weather-compact .weather-icon-compact ha-icon{
      color: var(--primary-color) !important;
    }

    .global-header.room-context .weather-compact .weather-temp-compact{
      color: var(--primary-text-color) !important;
    }

    /* Selection lists: icon is always the leading element{
      direction: ltr !important;
      display: grid !important;
      grid-template-columns: 46px minmax(0, 1fr) !important;
      grid-template-areas: "icon content" !important;
      align-items: center !important;
    }

    /* Weather should use the dashboard accent instead of the neutral gray pill. */
    .global-header .weather-compact{
      background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
      color: var(--primary-color) !important;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 16%, transparent) !important;
    }

    .global-header .weather-compact .weather-icon-compact ha-icon{
      color: var(--primary-color) !important;
    }

    .global-header .weather-compact .weather-temp-compact{
      color: var(--primary-text-color) !important;
    }

    /* Sidebar room tiles: badge overflow follows the continuously calculated width. */
    @media (min-width: 769px) {
      .sidebar .room-area-button .area-info-badges{
        width: 100% !important;
        max-width: none !important;
        display: flex !important;
        grid-template-columns: none !important;
        flex-wrap: nowrap !important;
        justify-content: flex-start !important;
        gap: 5px !important;
        overflow: hidden !important;
      }
    }

    /* 2026-10-01: final responsive room-view overrides. */
    @media (min-width: 769px) {

      /* Sidebar room tiles scale with their actual width. */
      .sidebar .room-area-button{
        container-type: inline-size !important;
        grid-template-columns: clamp(64px, 30cqw, 110px) minmax(0, 1fr) !important;
        min-height: clamp(82px, 36cqw, 120px) !important;
        height: clamp(82px, 36cqw, 120px) !important;
        gap: clamp(8px, 3cqw, 12px) !important;
      }

      .sidebar .room-area-button .area-media,
.sidebar .room-area-button .area-media-icon{
        width: 100% !important;
        height: 100% !important;
      }

      .sidebar .room-area-button .area-media-icon ha-icon{
        --mdc-icon-size: clamp(28px, 11cqw, 42px) !important;
      }

      /* The TS calculation controls how many badges fit; CSS no longer caps the row. */
      .sidebar .room-area-button .area-info-badges{
        width: 100% !important;
        max-width: none !important;
        display: flex !important;
        flex-wrap: nowrap !important;
        justify-content: flex-start !important;
        gap: 5px !important;
        overflow: hidden !important;
      }

      /* Keep weather/time and favorites aligned to the right edge. */
      .global-header.room-context .header-time-weather{
        margin-left: auto !important;
        justify-self: end !important;
      }

      .global-header.room-context .room-favorites-content .favorites-grid{
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }

    /* Weather must keep the accent treatment; later room-specific rules must not turn it gray. */
    .global-header.room-context .weather-compact{
      background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
      color: var(--primary-color) !important;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 16%, transparent) !important;
    }

    .global-header.room-context .weather-compact .weather-icon-compact ha-icon{
      color: var(--primary-color) !important;
    }

    .global-header.room-context .weather-compact .weather-temp-compact{
      color: var(--primary-text-color) !important;
    }


    /* 2026-10-02: refine room tile proportions and unify weather styling. */
    @media (min-width: 769px) {
      /*
       * Room-header metric pills: keep the larger{
        gap: 8px !important;
      }

      /*
       * Sidebar room tiles: make the card less cramped,
but keep the media
       * slot fixed so resizing the sidebar never changes the room icon size.
       */
      .sidebar .room-area-button{
        container-type: normal !important;
        display: grid !important;
        grid-template-columns: 74px minmax(0, 1fr) !important;
        align-items: stretch !important;
        gap: 9px !important;
        min-height: 88px !important;
        height: 88px !important;
        padding: 7px !important;
      }

      .sidebar .room-area-button .area-media{
        grid-column: 1 !important;
        grid-row: 1 !important;
        width: 74px !important;
        height: 74px !important;
        min-width: 74px !important;
        min-height: 74px !important;
        max-width: 74px !important;
        max-height: 74px !important;
        align-self: center !important;
      }

      .sidebar .room-area-button .area-media-icon{
        width: 74px !important;
        height: 74px !important;
      }

      .sidebar .room-area-button .area-media-icon ha-icon{
        --mdc-icon-size: 31px !important;
      }

      /*
       * Three rows next to the fixed icon:
       * 1. room name
       * 2. temperature / humidity / power
       * 3. status badges
       *
       * Equal 4px gaps above and below the values row keep the stack balanced.
       */
      .sidebar .room-area-button .area-content{
        grid-column: 2 !important;
        grid-row: 1 !important;
        min-width: 0 !important;
        width: 100% !important;
        height: 74px !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: stretch !important;
        gap: 4px !important;
        overflow: hidden !important;
      }

      .sidebar .room-area-button .area-top-section{
        min-width: 0 !important;
        width: 100% !important;
        margin: 0 !important;
        display: contents !important;
      }

      .sidebar .room-area-button .area-name,
.sidebar .room-area-button.has-picture .area-name{
        min-width: 0 !important;
        max-width: 100% !important;
        margin: 0 !important;
        color: var(--primary-text-color) !important;
        text-shadow: none !important;
        font-size: 14px !important;
        font-weight: 850 !important;
        line-height: 1 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .sidebar .room-area-button .area-sensors,
.sidebar .room-area-button.has-picture .area-sensors{
        min-width: 0 !important;
        max-width: 100% !important;
        margin: 0 !important;
        color: var(--secondary-text-color) !important;
        text-shadow: none !important;
        font-size: 11px !important;
        font-weight: 650 !important;
        line-height: 1 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .sidebar .room-area-button .area-info-badges{
        position: static !important;
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
        display: flex !important;
        flex-wrap: nowrap !important;
        align-items: center !important;
        justify-content: flex-start !important;
        gap: 4px !important;
        overflow: hidden !important;
      }

      /*
       * Sidebar badges: slightly larger than the previous version,
with the
       * icon and count centered together.
       */
      .sidebar .room-area-button .info-badge,
.sidebar .room-area-button.has-picture .info-badge{
        min-width: 24px !important;
        height: 18px !important;
        padding: 0 5px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 3px !important;
        font-size: 9.5px !important;
        line-height: 1 !important;
        flex: 0 0 auto !important;
        box-sizing: border-box !important;
      }

      .sidebar .room-area-button .info-badge ha-icon{
        --mdc-icon-size: 10px !important;
      }

      .sidebar .room-area-button .badge-count{
        font-size: 9.5px !important;
        line-height: 1 !important;
      }

      .sidebar .room-area-button .info-badge-overflow{
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex: 0 0 15px !important;
        width: 15px !important;
        min-width: 15px !important;
        height: 18px !important;
        padding: 0 !important;
        margin: 0 !important;
        border: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        color: var(--secondary-text-color) !important;
        font-size: 14px !important;
        font-weight: 900 !important;
        line-height: 1 !important;
      }

      /*
       * Startseite and room-view weather use the same compact blue-accent pill.
       */
      .global-header .weather-compact,
.global-header.room-context .weather-compact{
        min-height: 38px !important;
        height: 38px !important;
        padding: 0 12px !important;
        gap: 7px !important;
        border-radius: 999px !important;
        box-sizing: border-box !important;
        background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
        color: var(--primary-color) !important;
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 16%, transparent) !important;
      }

      .global-header .weather-compact .weather-icon-compact ha-icon,
.global-header.room-context .weather-compact .weather-icon-compact ha-icon{
        --mdc-icon-size: 18px !important;
        color: var(--primary-color) !important;
      }

      .global-header .weather-compact .weather-temp-compact,
.global-header.room-context .weather-compact .weather-temp-compact{
        font-size: 13px !important;
        color: var(--primary-text-color) !important;
        line-height: 1 !important;
      }

      /*
       * Keep the corrected favorites icon column so favorite names cannot
       * overlap their icons.
       */
      .room-favorites-content .favorites-grid{
        grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
        gap: 8px !important;
        width: 100% !important;
      }

      .home-favorites-section .favorite-card-wrapper,
.room-favorites-content .favorite-card-wrapper{
        grid-template-columns: 41px minmax(0, 1fr) auto !important;
      }

      .home-favorites-section .favorite-icon,
.room-favorites-content .favorite-icon{
        width: 41px !important;
        height: 41px !important;
      }

      .home-favorites-section .favorite-icon ha-icon,
.room-favorites-content .favorite-icon ha-icon{
        --mdc-icon-size: 22px !important;
      }

      .home-favorites-section .favorite-body,
.room-favorites-content .favorite-body{
        height: 41px !important;
        min-width: 0 !important;
        overflow: hidden !important;
      }

      .home-favorites-section .favorite-name,
.room-favorites-content .favorite-name{
        min-width: 0 !important;
        max-width: 100% !important;
        font-size: 12.1px !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .home-favorites-section .favorite-meta,
.room-favorites-content .favorite-meta,
.home-favorites-section .favorite-area,
.room-favorites-content .favorite-area{
        min-width: 0 !important;
        max-width: 100% !important;
        font-size: 10.9px !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
    }

    /*
     * 2026-10-01 mobile Home parity pass.
     * Match the desktop component rhythm while retaining mobile rail/grid switching.
     */
    @media (max-width: 768px) {
      .home-status-section .home-status-grid{
        display: flex !important;
        align-items: stretch !important;
        gap: 10px !important;
        margin: 0 !important;
        padding: 2px 18px 16px !important;
        overflow-x: auto !important;
        overflow-y: visible !important;
        scroll-padding: 18px !important;
        scroll-snap-type: x proximity !important;
        scrollbar-width: none !important;
      }

      .home-status-section .home-status-grid::-webkit-scrollbar{
        display: none !important;
      }

      .home-status-section.layout-grid .home-status-grid{
        display: grid !important;
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        align-items: stretch !important;
        gap: 10px !important;
        overflow: visible !important;
        scroll-snap-type: none !important;
      }

      .home-status-section .home-status-card.compact-status{
        flex: 0 0 118px !important;
        width: 118px !important;
        min-width: 118px !important;
        min-height: 102px !important;
        padding: 12px !important;
        border-radius: 15px !important;
      }

      .home-status-section.layout-grid .home-status-card.compact-status{
        width: 100% !important;
        min-width: 0 !important;
        min-height: 100px !important;
        flex: none !important;
      }

      .home-status-section .home-status-card.house-persons-card,
.home-status-section .home-status-card.house-climate-card,
.home-status-section .home-status-card.house-power-card{
        flex: 0 0 238px !important;
        width: 238px !important;
        min-width: 238px !important;
        min-height: 124px !important;
        padding: 13px !important;
      }

      .home-status-section.layout-grid .home-status-card.house-persons-card,
.home-status-section.layout-grid .home-status-card.house-climate-card,
.home-status-section.layout-grid .home-status-card.house-power-card{
        grid-column: 1 / -1 !important;
        width: 100% !important;
        min-width: 0 !important;
        flex: none !important;
      }

      .home-status-section .home-status-card.compact-status .status-card-icon{
        width: 38px !important;
        height: 38px !important;
        margin-bottom: 10px !important;
        border-radius: 11px !important;
      }

      .home-status-section .home-status-card.compact-status .status-card-icon ha-icon{
        --mdc-icon-size: 20px !important;
      }

      .home-status-section .home-status-card.compact-status .status-card-title{
        font-size: 13px !important;
        line-height: 1.12 !important;
      }

      .mobile-area-card{
        flex-basis: 148px !important;
        min-height: 116px !important;
        height: 116px !important;
        padding: 12px !important;
        border-radius: 16px !important;
      }

      .mobile-area-card.has-picture{
        min-height: 116px !important;
        height: 116px !important;
      }

      .mobile-home-section.layout-grid .mobile-area-card{
        height: 118px !important;
        min-height: 118px !important;
      }

      .mobile-area-icon{
        width: 38px !important;
        height: 38px !important;
        border-radius: 12px !important;
      }

      .mobile-area-icon ha-icon{
        --mdc-icon-size: 21px !important;
      }

      .mobile-area-badges{
        display: grid !important;
        grid-template-columns: repeat(2, max-content) !important;
        grid-auto-rows: 22px !important;
        justify-content: end !important;
        align-content: start !important;
        gap: 4px !important;
        max-width: 82px !important;
        overflow: visible !important;
      }

      .mobile-area-badge{
        min-width: 22px !important;
        height: 22px !important;
        padding: 0 6px !important;
        gap: 3px !important;
        font-size: 10px !important;
      }

      .mobile-area-badge ha-icon{
        --mdc-icon-size: 13px !important;
      }

      .mobile-area-name{
        font-size: 14px !important;
      }

      .mobile-area-meta{
        margin-top: 3px !important;
        font-size: 11px !important;
      }

      .home-favorites-section .favorite-card-wrapper{
        display: grid !important;
        grid-template-columns: 38px minmax(0, 1fr) auto !important;
        grid-template-rows: 1fr !important;
        align-items: start !important;
        gap: 9px !important;
        height: 104px !important;
        min-height: 104px !important;
        padding: 12px !important;
        overflow: visible !important;
      }

      .home-favorites-section .favorite-icon{
        grid-column: 1 !important;
        grid-row: 1 !important;
        width: 38px !important;
        height: 38px !important;
        align-self: start !important;
        margin: 0 !important;
      }

      .home-favorites-section .favorite-icon ha-icon{
        --mdc-icon-size: 21px !important;
      }

      .home-favorites-section .favorite-body{
        grid-column: 2 !important;
        grid-row: 1 !important;
        min-width: 0 !important;
        align-self: start !important;
        padding-top: 1px !important;
      }

      .home-favorites-section .favorite-end{
        grid-column: 3 !important;
        grid-row: 1 !important;
        align-self: start !important;
        justify-self: end !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .home-favorites-section .favorite-name{
        margin-top: 0 !important;
        font-size: 14px !important;
        line-height: 1.08 !important;
      }

      .home-favorites-section .favorite-area{
        margin-top: 5px !important;
        font-size: 10px !important;
      }

      .sidebar .room-area-button{
        display: grid !important;
        grid-template-columns: 54px minmax(0, 1fr) !important;
        align-items: center !important;
        gap: 12px !important;
        min-height: 78px !important;
        height: 78px !important;
        padding: 10px 12px !important;
        border-radius: 12px !important;
        overflow: visible !important;
      }

      .sidebar .room-area-button .area-media,
.sidebar .room-area-button .area-media-icon{
        position: relative !important;
        width: 54px !important;
        height: 54px !important;
        min-width: 54px !important;
        min-height: 54px !important;
        left: auto !important;
        top: auto !important;
        transform: none !important;
        align-self: center !important;
      }

      .sidebar .room-area-button .area-media-icon ha-icon{
        --mdc-icon-size: 26px !important;
      }

      .sidebar .room-area-button .area-content{
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) auto !important;
        grid-template-rows: 1fr !important;
        align-items: center !important;
        gap: 8px !important;
        min-width: 0 !important;
        height: 100% !important;
      }

      .sidebar .room-area-button .area-top-section{
        grid-column: 1 !important;
        grid-row: 1 !important;
        min-width: 0 !important;
        margin: 0 !important;
        align-self: center !important;
      }

      .sidebar .room-area-button .area-name{
        margin: 0 !important;
        font-size: 15px !important;
        line-height: 1.08 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .sidebar .room-area-button .area-sensors{
        margin-top: 5px !important;
        font-size: 11.5px !important;
        line-height: 1.05 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .sidebar .room-area-button .area-info-badges{
        position: relative !important;
        grid-column: 2 !important;
        grid-row: 1 !important;
        display: grid !important;
        grid-template-columns: repeat(2, max-content) !important;
        grid-auto-rows: 22px !important;
        justify-content: end !important;
        align-content: center !important;
        gap: 4px !important;
        width: auto !important;
        max-width: none !important;
        min-width: 0 !important;
        overflow: visible !important;
      }

      .sidebar .room-area-button .info-badge{
        min-width: 25px !important;
        height: 22px !important;
        padding: 0 7px !important;
        gap: 3px !important;
        font-size: 10.5px !important;
        box-sizing: border-box !important;
      }

      .sidebar .room-area-button .info-badge ha-icon{
        --mdc-icon-size: 13px !important;
      }

      .sidebar .room-area-button .badge-count{
        font-size: 10.5px !important;
      }

      .sidebar .room-area-button .info-badge-overflow{
        min-width: 22px !important;
        width: 22px !important;
        height: 22px !important;
        font-size: 16px !important;
      }

      .sidebar .room-area-button .area-menu-chevron{
        display: none !important;
      }
    }


    @media (min-width: 769px) {
      /*
       * Final sizing pass:
       * - sidebar room content grows slightly while remaining inside the
       *   fixed media tile;
       * - room-view header and all of its contents grow by roughly 10%;
       * - the weather pill uses the same explicit treatment on Home and rooms.
       */
      .sidebar .room-area-button{
        grid-template-columns: 74px minmax(0, 1fr) !important;
        min-height: 88px !important;
        height: 88px !important;
        gap: 9px !important;
        padding: 7px !important;
      }

      .sidebar .room-area-button .area-media,
.sidebar .room-area-button .area-media-icon{
        width: 74px !important;
        height: 74px !important;
        min-width: 74px !important;
        min-height: 74px !important;
        max-width: 74px !important;
        max-height: 74px !important;
      }

      .sidebar .room-area-button .area-content{
        width: 100% !important;
        height: 74px !important;
        gap: 4px !important;
      }

      .sidebar .room-area-button .area-name,
.sidebar .room-area-button.has-picture .area-name{
        font-size: 15px !important;
        line-height: 1 !important;
      }

      .sidebar .room-area-button .area-sensors,
.sidebar .room-area-button.has-picture .area-sensors{
        font-size: 11.5px !important;
        line-height: 1 !important;
      }

      .sidebar .room-area-button .info-badge,
.sidebar .room-area-button.has-picture .info-badge{
        min-width: 27px !important;
        height: 20px !important;
        padding: 0 6px !important;
        gap: 3px !important;
        font-size: 10px !important;
      }

      .sidebar .room-area-button .info-badge ha-icon{
        --mdc-icon-size: 11px !important;
      }

      .sidebar .room-area-button .badge-count{
        font-size: 10px !important;
      }

      /*
       * Room header: increase the current responsive geometry by about 10%.
       * Keep the same proportions between media,
copy{
        grid-template-columns: clamp(165px, 22cqw, 242px) minmax(0, 1fr) auto auto !important;
        min-height: clamp(106px, 12.1cqw, 128px) !important;
      }

      /*
       * Explicitly scope the weather treatment to the actual header/time
       * container as well. This prevents the Home weather pill from falling
       * back to the generic gray .weather-compact styling.
       */
      .global-header .header-time-weather .weather-compact{
        min-height: 38px !important;
        height: 38px !important;
        padding: 0 12px !important;
        gap: 7px !important;
        border-radius: 999px !important;
        box-sizing: border-box !important;
        background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
        color: var(--primary-color) !important;
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 16%, transparent) !important;
      }

      .global-header .header-time-weather .weather-compact .weather-icon-compact ha-icon{
        --mdc-icon-size: 18px !important;
        color: var(--primary-color) !important;
      }

      .global-header .header-time-weather .weather-compact .weather-temp-compact{
        font-size: 13px !important;
        line-height: 1 !important;
        color: var(--primary-text-color) !important;
      }
    }

    
    /* 2026-10-03: restore stable desktop room geometry and final responsive overrides. */
    @media (min-width: 769px) {

      /* Sidebar room content should nearly fill the height of the media tile. */
      .sidebar .room-area-button .area-name,
.sidebar .room-area-button.has-picture .area-name{
        font-size: 16px !important;
        line-height: 1.08 !important;
      }

      .sidebar .room-area-button .area-sensors,
.sidebar .room-area-button.has-picture .area-sensors{
        font-size: 13px !important;
        line-height: 1.12 !important;
        margin-top: 2px !important;
      }

      .sidebar .room-area-button .info-badge,
.sidebar .room-area-button.has-picture .info-badge{
        min-width: 29px !important;
        height: 22px !important;
        padding: 0 6px !important;
        gap: 3px !important;
        font-size: 11px !important;
      }

      .sidebar .room-area-button .info-badge ha-icon{
        --mdc-icon-size: 12px !important;
      }

      .sidebar .room-area-button .badge-count{
        font-size: 11px !important;
      }

      /* Make the select/input_select icon physically first{
        display: flex !important;
        flex-direction: row !important;
        direction: ltr !important;
        align-items: center !important;
        justify-content: flex-start !important;
        width: 100% !important;
        min-width: 0 !important;
        height: 46px !important;
        min-height: 46px !important;
        gap: 11px !important;
      }
    }


    @media (min-width: 769px) {
      /*
       * Select/input_select: the wrapper was already in the correct left slot{
        position: static !important;
        inset: auto !important;
        top: auto !important;
        right: auto !important;
        bottom: auto !important;
        left: auto !important;
        display: block !important;
        width: 24px !important;
        height: 24px !important;
        min-width: 24px !important;
        min-height: 24px !important;
        margin: 0 !important;
        padding: 0 !important;
        transform: none !important;
        translate: none !important;
        align-self: auto !important;
        justify-self: auto !important;
        pointer-events: none !important;
        --mdc-icon-size: 24px !important;
      }
    }


    /*
     * FINAL desktop room-header geometry.
     * Keep this block at the end of the stylesheet so older room-header
     * experiments above cannot override the current design again.
     */
    @media (min-width: 769px) {

      /* Three compact pills: ~10% smaller{
        grid-area: metrics !important;
        width: 205px !important;
        min-width: 205px !important;
        height: 150px !important;
        margin: 0 !important;
        padding: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        justify-content: center !important;
        gap: 3px !important;
        align-self: center !important;
      }
    }


    /*
     * FINAL compact desktop room-header geometry.
     * One 132px band: image, camera and complete metric stack align exactly.
     */
    @media (min-width: 769px) {

      .dd-page-card,
.dd-page-card > *,
.dd-page-card dwains-dashboard-next-card-host{
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
        box-sizing: border-box !important;
      }
    }

    ${Ge}

    ${Ve}

    /* Room header: exact v1.11.0 header styling with only the two requested structural deviations. */
    .dd-page-header-with-media{
      display: grid;
      grid-template-columns: 220px minmax(0, 1fr);
      gap: 18px;
      align-items: stretch;
      min-width: 0;
    }

    .dd-page-header-media-tile{
      position: relative;
      width: 220px;
      min-height: 176px;
      overflow: hidden;
      border-radius: 14px;
      background: color-mix(in srgb, var(--ph-accent) 10%, var(--ph-surface));
    }

    .dd-page-header-room-picture{
      position: absolute;
      inset: 0;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .dd-page-header-room-icon{
      width: 100%;
      height: 100%;
      min-height: 176px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--ph-accent) 14%, var(--ph-surface));
      color: var(--ph-accent);
    }

    .dd-page-header-room-icon ha-icon{
      --mdc-icon-size: 52px;
    }

    .dd-page-header-main{
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
    }

    .dd-page-header-title-row{
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .dd-page-header-title-row .dd-page-header-title{
      min-width: 0;
    }

    .dd-page-header-home{
      width: 36px;
      height: 36px;
    }

    .dd-page-header-home ha-icon{
      --mdc-icon-size: 21px;
    }

    @media (max-width: 768px) {
      .dd-page-header-with-media{
        grid-template-columns: 78px minmax(0, 1fr);
        gap: 12px;
        align-items: start;
      }

      .dd-page-header-media-tile{
        width: 78px;
        min-height: 78px;
        height: 78px;
        border-radius: 14px;
      }

      .dd-page-header-room-icon{
        min-height: 78px;
      }

      .dd-page-header-room-icon ha-icon{
        --mdc-icon-size: 34px;
      }

      .dd-page-header-main{
        gap: 12px;
      }

      .dd-page-header-main .dd-page-header-top{
        flex-wrap: wrap;
        row-gap: 14px;
      }

      .dd-page-header-main .dd-page-header-identity{
        order: 1;
        flex: 1 1 auto;
        flex-basis: auto;
      }

      .dd-page-header-main .dd-page-header-actions{
        order: 2;
        margin-left: auto;
      }

      .dd-page-header-main .dd-page-header-strip{
        margin-left: calc(-78px - 12px);
      }

      .dd-page-header-title-row{
        gap: 7px;
      }

      .dd-page-header-home{
        width: 32px;
        height: 32px;
      }

      .dd-room-compact .dd-page-header-home{
        width: 38px;
        height: 38px;
      }
    }




    /* 2026-10-06 room-view alignment follow-up.
       The room content scrolls with a reserved scrollbar gutter, while the global
       header does not. Reserve the same space on the header's right side so its
       status rail and Favorites end on the same visual edge as the room cards. */
    @media (min-width: 769px) {
      .global-header.room-context{
        padding-left: 16px !important;
        padding-right: 32px !important;
      }

      .global-header.room-context .header-content,
      .global-header.room-context .room-favorites-block{
        width: 100% !important;
        max-width: 1400px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        box-sizing: border-box !important;
      }

      .global-header.room-context .header-status-section{
        overflow: hidden !important;
      }

      .global-header.room-context .header-status-scroll{
        padding-inline: 0 !important;
        scroll-padding-inline: 0 !important;
      }

      .global-header.room-context .header-status-section.can-scroll-left .header-status-scroll{
        padding-left: 20px !important;
        scroll-padding-left: 20px !important;
      }

      .global-header.room-context .header-status-section.can-scroll-right .header-status-scroll{
        padding-right: 20px !important;
        scroll-padding-right: 20px !important;
      }

      .global-header.room-context .header-status-scroll-button-left{
        left: 2px !important;
      }

      .global-header.room-context .header-status-scroll-button-right{
        right: 2px !important;
      }

      .global-header.room-context .status-card-compact{
        width: max-content !important;
        min-width: 140px !important;
        max-width: none !important;
        grid-template-columns: 32px max-content !important;
      }

      .global-header.room-context .status-card-compact .status-card-title-compact{
        overflow: visible !important;
        text-overflow: clip !important;
        white-space: nowrap !important;
      }

      .global-header.room-context .header-content{
        gap: 8px !important;
      }

      .global-header.room-context .header-time-weather{
        gap: 8px !important;
        transform: none !important;
      }

      .global-header.room-context .header-time-section{
        width: auto !important;
        min-width: 0 !important;
      }

      .global-header.room-context .room-favorites-block,
      .global-header.room-context .room-favorites-content,
      .global-header.room-context .room-favorites-content .favorites-section,
      .global-header.room-context .room-favorites-content .favorites-grid{
        width: 100% !important;
        max-width: none !important;
        box-sizing: border-box !important;
      }
    }

    /* 2026-10-05 room/home consistency pass. */
    .favorite-name {
      display: block !important;
      min-width: 0;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
      -webkit-line-clamp: unset !important;
      -webkit-box-orient: initial !important;
    }

    .dd-page-header-with-media {
      align-items: start;
    }

    .dd-page-header-main {
      justify-content: flex-start;
      align-self: stretch;
    }

    .dd-page-header-main .dd-page-header-top {
      align-items: flex-start;
    }

    .dd-page-header-title-row {
      display: flex;
      align-items: center;
      min-height: 26px;
      line-height: 1;
    }

    .dd-page-header-title-row .dd-page-header-title {
      margin: 0;
      align-self: center;
    }

    .dd-page-header-title-row .dd-page-header-home {
      width: 26px;
      height: 26px;
      min-width: 26px;
      padding: 0;
      border-radius: 6px;
      background: transparent;
      color: var(--primary-color);
    }

    .dd-page-header-title-row .dd-page-header-home:hover {
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 8%, transparent);
    }

    .dd-page-header-title-row .dd-page-header-home ha-icon {
      --mdc-icon-size: 21px;
      width: 21px;
      height: 21px;
    }

    .dd-page-header-title-chevron {
      --mdc-icon-size: 16px;
      width: 16px;
      height: 16px;
      flex: 0 0 16px;
      color: var(--ph-muted);
      opacity: 0.72;
    }

    .dd-page-header-button > ha-icon,
    .dd-page-header-home > ha-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      margin: 0;
      transform: none;
    }

    .dd-page-header-actions .dd-page-header-button {
      display: inline-grid;
      place-items: center;
    }

    .home-status-secondary-grid.is-only-row {
      margin-top: 0;
      grid-template-columns: none;
      grid-auto-flow: column;
      grid-auto-columns: minmax(130px, 1fr);
      overflow-x: auto;
      scrollbar-width: none;
    }

    .home-status-secondary-grid.is-only-row::-webkit-scrollbar {
      display: none;
    }

    .home-todos-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 420px));
      justify-content: start;
    }

    .home-custom-cards-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      justify-content: start;
    }

    .home-custom-card.is-wide {
      grid-column: span 2;
    }

    .dd-custom-grid > .dd-custom-card-wrap {
      --dd-card-default-column: span 3;
    }

    .dd-custom-grid > .dd-custom-card-wrap.dd-grid-wide {
      --dd-card-default-column: span 6;
    }

    .home-todo-card,
    .home-custom-card,
    .area-view .mobile-todo-list-card,
    .area-view .mobile-entity-replacement-card,
    .dd-custom-card-wrap {
      font-family: var(--ha-font-family-body, inherit);
      font-size: 13px;
      line-height: 1.3;
      --ha-card-header-font-size: 15px;
      --ha-font-size-l: 15px;
      --ha-font-size-m: 13px;
      --ha-font-size-s: 11px;
    }

    @media (min-width: 769px) {
      .area-view .mobile-todo-list-card {
        grid-column: span 2 !important;
        width: 100% !important;
        min-width: 0 !important;
        max-width: none !important;
        flex: none !important;
      }

      .room-favorites-content .favorites-grid {
        grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
      }
    }

    @media (max-width: 768px) {
      .dd-room-compact .dd-page-header-home {
        width: 38px;
        height: 38px;
        min-width: 38px;
        border-radius: 999px;
        background: var(--ph-control);
        color: var(--ph-text);
      }

      .dd-room-compact .dd-page-header-home ha-icon {
        --mdc-icon-size: 21px;
        width: 21px;
        height: 21px;
      }

      .home-custom-cards-grid {
        grid-template-columns: minmax(0, 1fr);
      }

      .home-custom-card.is-wide {
        grid-column: auto;
      }

      .area-view .mobile-todo-list-card {
        grid-column: 1 / -1 !important;
      }
    }
  `,Ve,Ge],e([t({attribute:!1})],rt.prototype,"hass",void 0),e([t({attribute:!1})],rt.prototype,"config",void 0),e([a()],rt.prototype,"_selectedArea",void 0),e([a()],rt.prototype,"_selectedView",void 0),e([a()],rt.prototype,"_isMobile",void 0),e([a()],rt.prototype,"_headerExpanded",void 0),e([a()],rt.prototype,"_headerCompact",void 0),e([a()],rt.prototype,"_headerStatusCanScrollLeft",void 0),e([a()],rt.prototype,"_headerStatusCanScrollRight",void 0),e([a()],rt.prototype,"_currentTime",void 0),e([a()],rt.prototype,"_currentDate",void 0),e([a()],rt.prototype,"_mobileNavOpen",void 0),e([a()],rt.prototype,"_editMode",void 0),e([a()],rt.prototype,"_notificationsOpen",void 0),e([a()],rt.prototype,"_persistentNotifications",void 0),e([a()],rt.prototype,"_notificationsLoading",void 0),e([a()],rt.prototype,"_notificationsError",void 0),e([a()],rt.prototype,"_areaHeaderStuck",void 0),e([a()],rt.prototype,"_areaHeaderRevealed",void 0),e([a()],rt.prototype,"_mobileEntityLayout",void 0),e([a()],rt.prototype,"_mobileHomeAreasLayout",void 0),e([a()],rt.prototype,"_mobileHomeDevicesLayout",void 0),e([a()],rt.prototype,"_mobileHomeFavoritesLayout",void 0),e([a()],rt.prototype,"_mobileHomeCamerasLayout",void 0),e([a()],rt.prototype,"_areaSidebarWidth",void 0),e([a()],rt.prototype,"_areaSidebarCollapsed",void 0),e([a()],rt.prototype,"_isResizingSidebar",void 0),e([a()],rt.prototype,"_repairsIssueCount",void 0),e([a()],rt.prototype,"_discoveredDeviceCount",void 0),e([a()],rt.prototype,"_suggestedFavoriteEntities",void 0),e([a()],rt.prototype,"_customCardDrag",void 0),e([a()],rt.prototype,"_customCardDragOver",void 0),e([a()],rt.prototype,"_generatedCardDrag",void 0),e([a()],rt.prototype,"_generatedCardDragOver",void 0),e([a()],rt.prototype,"_generatedGroupDrag",void 0),e([a()],rt.prototype,"_generatedGroupDragOver",void 0),e([a()],rt.prototype,"_optimisticEntityStates",void 0),e([a()],rt.prototype,"_renderAllMobileHomeAreas",void 0),e([a()],rt.prototype,"_renderAllMobileAreaEntities",void 0),e([a()],rt.prototype,"_collapsedAreaGroups",void 0),e([a()],rt.prototype,"_settingsDirty",void 0),e([a()],rt.prototype,"_deviceSettingsDirty",void 0),e([a()],rt.prototype,"_settingsSavePending",void 0),e([a()],rt.prototype,"_settingsSaveError",void 0),e([a()],rt.prototype,"_settingsPageKey",void 0),e([a()],rt.prototype,"_settingsPageTitle",void 0),e([a()],rt.prototype,"_settingsPageParentTitle",void 0),e([a()],rt.prototype,"_settingsPageDescription",void 0),e([a()],rt.prototype,"_confirmationDialog",void 0),e([a()],rt.prototype,"_housePowerDialogOpen",void 0),rt=e([i("dwains-dashboard-next-layout-card")],rt);export{rt as DwainsLayoutCard};
