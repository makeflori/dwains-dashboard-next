import{_ as t,n as e,r as i,t as a}from"./state-DfsJqMnn.js";import{E as o,a as r,i as n,b as s,A as c}from"./lit-element-Bpv9xYb0.js";import{e as d}from"./class-map-CNhtqX6C.js";import{g as l,s as p,c as m,a as h,b as g,d as u,e as b,f as x,h as f,A as v,i as w,j as y,k as _,r as k,l as $,m as S}from"./area-entities-COwBQPnW.js";import{e as z,i as C,t as A}from"./blueprints-Dh4Un1Bn.js";import{f as E,a as D,n as M,e as T,i as j}from"./dwains-bottom-nav-CYuWRKSQ.js";import{g as P,r as I}from"./security-Dfb4DqXU.js";import{i as H,g as q,a as R,c as F,b as N,d as L,n as O,e as W,f as U,h as V,r as G,j as K,H as B,s as Y,k as X,m as Q,l as J,o as Z,p as tt,q as et,t as it,u as at}from"./dwains-dashboard-strategy-editor-BwhYmzCy.js";import{m as ot,a as rt,b as nt,c as st,d as ct,e as dt,f as lt,g as pt,h as mt,i as ht,j as gt,k as ut,l as bt,n as xt,o as ft,p as vt}from"./screensaver-media-BoA1bPfb.js";import{a as wt,b as yt,c as _t}from"./localize-Bqo1LrNh.js";import{f as kt}from"./fire-event-DQiSssdY.js";import"./dd-card-host-Cb-91pfn.js";import"./energy-prefs-C6My8H5s.js";import"../dwains-dashboard-next.js";const $t="important",St=" !"+$t,zt=z(class extends C{constructor(t){if(super(t),t.type!==A.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const a=t[i];return null==a?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const a=e[t];if(null!=a){this.ft.add(t);const e="string"==typeof a&&a.endsWith(St);t.includes("-")||e?i.setProperty(t,e?a.slice(0,-11):a,e?$t:""):i[t]=a}}return o}});var Ct=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function At(t,e){return t===e||!(!Ct(t)||!Ct(e))}function Et(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!At(t[i],e[i]))return!1;return!0}const Dt=new Map,Mt=(t,e,i,a)=>!!a?.areas_options?.[i]?.groups_options?.[e]?.hidden&&a.areas_options[i].groups_options[e].hidden.includes(t),Tt=(t,e,i,a)=>{const o=((t,e,i,a)=>{const o=Dt.get(t.area_id);if(!o)return;const r=e.areas?.[t.area_id];if(o.area!==t||o.areaEntities!==i||o.areaRegistry!==r||o.formatEntityState!==e.formatEntityState||o.registry!==P(e)||o.areasOptions!==a?.areas_options||o.temperatureState!==(r?.temperature_entity_id?e.states[r.temperature_entity_id]:void 0)||o.humidityState!==(r?.humidity_entity_id?e.states[r.humidity_entity_id]:void 0))return;if(o.checkedStates===e.states)return o.data;const n=o.entityStates;if(n.length===i.length){for(let t=0;t<i.length;t++)if(n[t]!==e.states[i[t].entity_id])return;return o.checkedStates=e.states,o.data}})(t,e,i,a);if(o)return o;let r,n,s,c;const d=e.areas[t.area_id],l=d?.temperature_entity_id,p=d?.humidity_entity_id;if(l){const t=e.states[l];t&&"unavailable"!==t.state&&"unknown"!==t.state&&(r=E(e,t))}if(p){const t=e.states[p];t&&"unavailable"!==t.state&&"unknown"!==t.state&&(n=E(e,t))}let m=0,h=!1;i.forEach(i=>{const o=e.states[i.entity_id];if(!o)return;const r=jt(i.entity_id);if(!Mt(i.entity_id,r,t.area_id,a)&&i.entity_id.startsWith("sensor.")&&"W"===o.attributes.unit_of_measurement&&"unavailable"!==o.state&&"unknown"!==o.state){const t=parseFloat(o.state);isNaN(t)||(m+=t,h=!0)}}),h&&(s=m>=1e3?D((m/1e3).toFixed(1),"kW"):D(Math.round(m),"W"));let g=0,u=!1;i.forEach(i=>{const o=e.states[i.entity_id];if(!o)return;const r=jt(i.entity_id);if(!Mt(i.entity_id,r,t.area_id,a)&&i.entity_id.startsWith("sensor.")&&"kWh"===o.attributes.unit_of_measurement&&"unavailable"!==o.state&&"unknown"!==o.state){const t=parseFloat(o.state);isNaN(t)||(g+=t,u=!0)}}),u&&(c=g>=1e3?D((g/1e3).toFixed(1),"MWh"):D(g.toFixed(1),"kWh"));const b=[],x={light:{total:0,on:0},switch:{total:0,on:0},fan:{total:0,on:0},cover:{total:0,on:0},climate:{total:0,on:0},media_player:{total:0,on:0},lock:{total:0,on:0},motion:{total:0,on:0}};i.forEach(i=>{const o=e.states[i.entity_id];if(!o)return;const r=jt(i.entity_id);if(!Mt(i.entity_id,r,t.area_id,a)){if(r in x){const t=x[r];if(!t)return;t.total++;const e="off"!==o.state&&"unavailable"!==o.state&&"unknown"!==o.state&&"closed"!==o.state&&"locked"!==o.state;"climate"===r?o.attributes.hvac_action&&"idle"!==o.attributes.hvac_action&&"off"!==o.attributes.hvac_action?t.on++:o.attributes.hvac_action||"off"===o.state||t.on++:e&&t.on++}if(i.entity_id.startsWith("binary_sensor.")&&"motion"===o.attributes.device_class){const t=x.motion;t&&(t.total++,"on"===o.state&&t.on++)}if(i.entity_id.startsWith("binary_sensor.")&&"on"===o.state&&o.attributes.device_class){["door","window","moisture","smoke"].includes(o.attributes.device_class)&&b.push({entity_id:i.entity_id,deviceClass:o.attributes.device_class})}}});const f={area_id:t.area_id,name:t.name,icon:t.icon||void 0,picture:t.picture||void 0,temperature:r,humidity:n,wattage:s,totalEnergy:c,alerts:b,domains:x};return Dt.set(t.area_id,{area:t,areaEntities:i,entityStates:i.map(t=>e.states[t.entity_id]),areaRegistry:d,temperatureState:l?e.states[l]:void 0,humidityState:p?e.states[p]:void 0,formatEntityState:e.formatEntityState,registry:P(e),areasOptions:a?.areas_options,checkedStates:e.states,data:f}),f},jt=t=>{const[e]=t.split(".");return e||"unknown"},Pt={min:7,max:35},It={min:45,max:95},Ht=new Set(["unavailable","unknown"]),qt=1e-9;function Rt(t){if(null==t||""===t||"boolean"==typeof t)return;const e="number"==typeof t?t:Number(t);return Number.isFinite(e)?e:void 0}function Ft(t){return/f$/i.test(String(t||"").trim())}function Nt(t,e){const i=Rt(t?.target_temp_step);return void 0!==i&&i>0?i:Ft(e)?1:.5}function Lt(t){if(!Number.isFinite(t)||t<=0)return 1;for(let e=0;e<3;e++){const i=t*10**e;if(Math.abs(i-Math.round(i))<qt*10**e)return e}return 3}function Ot(t,e,i){return e<=i?Math.min(i,Math.max(e,t)):t}function Wt(t,e,i){const{step:a,min:o,max:r}=i;if(!(a>0))return Ot(t,o,r);const n=t/a,s=e>0?Math.floor(n+qt):Math.ceil(n-qt);return Ot(Number(((s+e)*a).toFixed(Lt(a))),o,r)}function Ut(t,e,i){return Wt(t,e,i)!==t}function Vt(t,e){if(!t||Ht.has(String(t.state)))return;const i=t.attributes||{},a=Ft(e)?It:Pt;let o=Rt(i.min_temp)??a.min,r=Rt(i.max_temp)??a.max;o>r&&([o,r]=[r,o]);const n=Rt(i.temperature),s=Rt(i.target_temp_low),c=Rt(i.target_temp_high),d=void 0!==s&&void 0!==c;let l="none";return"off"!==t.state&&(!d||"heat_cool"!==t.state&&void 0!==n?void 0!==n&&(l="single"):l="range"),{mode:l,current:Rt(i.current_temperature),target:n,targetLow:s,targetHigh:c,min:o,max:r,step:Nt(i,e),unit:e}}const Gt=new Map;function Kt(t,e,i){const a=`${i||""}|${e}`;let o=Gt.get(a);if(!o){try{o=new Intl.NumberFormat(i||void 0,{minimumFractionDigits:e,maximumFractionDigits:e})}catch{o=new Intl.NumberFormat(void 0,{minimumFractionDigits:e,maximumFractionDigits:e})}Gt.set(a,o)}return o.format(t)}const Bt={heat:ht,cool:mt,dry:pt,fan:lt,auto:dt,idle:ct,off:st};let Yt=class extends n{constructor(){super(...arguments),this.entityId="",this.roomName="",this._openMoreInfo=()=>{this.entityId&&kt(this,"hass-more-info",{entityId:this.entityId})}}_t(t,e){return wt(this.hass,t,e)}disconnectedCallback(){super.disconnectedCallback(),this._flushCommit(),this._clearConfirmTimer()}willUpdate(t){super.willUpdate(t),t.has("entityId")&&this._pendingEntityId&&this._pendingEntityId!==this.entityId&&this._flushCommit(),t.has("hass")&&this._clearPendingWhenConfirmed()}_unit(){return String(this.hass?.config?.unit_system?.temperature||"°C")}_stateObj(){return this.entityId?this.hass?.states?.[this.entityId]:void 0}_displayTarget(t){return void 0!==this._pendingTarget&&this._pendingEntityId===this.entityId?this._pendingTarget:t.target}_formatValue(t,e,i){return`${Kt(t,e,yt(this.hass))} ${i}`}_formatCurrent(t,e){if(void 0!==e.current){try{const e=this.hass?.formatEntityAttributeValue?.(t,"current_temperature");if(e)return e}catch{}return this._formatValue(e.current,Number.isInteger(e.current)?0:1,e.unit)}}_activityLabel(t){try{return t.attributes?.hvac_action?this.hass?.formatEntityAttributeValue?.(t,"hvac_action")||String(t.attributes.hvac_action):this.hass?.formatEntityState?.(t)||t.state}catch{return String(t.attributes?.hvac_action||t.state)}}_adjust(t){const e=Vt(this._stateObj(),this._unit());if("single"!==e?.mode)return;const i=this._displayTarget(e);if(void 0===i)return;const a=Wt(i,t,e);a!==i&&(this._pendingTarget=a,this._pendingEntityId=this.entityId,this._clearConfirmTimer(),void 0!==this._commitTimer&&window.clearTimeout(this._commitTimer),this._commitTimer=window.setTimeout(()=>{this._commitTimer=void 0,this._commit()},800))}_flushCommit(){void 0!==this._commitTimer&&(window.clearTimeout(this._commitTimer),this._commitTimer=void 0,this._commit())}async _commit(){const t=this._pendingEntityId,e=this._pendingTarget,i=this.hass;if(t&&void 0!==e&&i){try{await i.callService("climate","set_temperature",{entity_id:t,temperature:e})}catch(i){return console.warn(`Failed to set the temperature of ${t}:`,i),this._isLatestPending(t,e)&&this._clearPending(),void kt(this,"hass-notification",{message:this._t("thermostat.update_failed",{name:this.roomName||t})})}this._isLatestPending(t,e)&&(this._clearPendingWhenConfirmed(),void 0!==this._pendingTarget&&(this._clearConfirmTimer(),this._confirmTimer=window.setTimeout(()=>{this._confirmTimer=void 0,this._isLatestPending(t,e)&&this._clearPending()},8e3)))}}_isLatestPending(t,e){return void 0===this._commitTimer&&this._pendingEntityId===t&&this._pendingTarget===e}_clearPendingWhenConfirmed(){if(void 0===this._pendingTarget||void 0!==this._commitTimer||!this._pendingEntityId)return;const t=Number(this.hass?.states?.[this._pendingEntityId]?.attributes?.temperature);Number.isFinite(t)&&Math.abs(t-this._pendingTarget)<1e-6&&this._clearPending()}_clearPending(){this._pendingTarget=void 0,this._pendingEntityId=void 0,this._clearConfirmTimer()}_clearConfirmTimer(){void 0!==this._confirmTimer&&(window.clearTimeout(this._confirmTimer),this._confirmTimer=void 0)}_icon(t){return s`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d=${t}></path></svg>`}render(){const t=this._stateObj(),e=Vt(t,this._unit());if(!t||!e)return c;const i=this.roomName||t.attributes?.friendly_name||this.entityId,a=function(t){const e=String(t?.attributes?.hvac_action??"").toLowerCase(),i=String(t?.state??"").toLowerCase();switch(e||i){case"heating":case"preheating":case"defrosting":case"heat":return"heat";case"cooling":case"cool":return"cool";case"drying":case"dry":return"dry";case"fan":case"fan_only":return"fan";case"heat_cool":case"auto":return"auto";case"off":return"off";default:return"idle"}}(t),o=this._activityLabel(t),r=this._formatCurrent(t,e),n=Lt(e.step),d=this._displayTarget(e),l=this._t("thermostat.details",{name:i,state:o});return s`
      <div class="thermostat activity-${a}">
        ${r?s`
          <button
            class="segment current"
            type="button"
            title=${l}
            aria-label=${`${this._t("thermostat.current")}: ${r}. ${l}`}
            @click=${this._openMoreInfo}
          >
            <span class="segment-icon">${this._icon(ot)}</span>
            <span class="copy">
              <span class="label">${this._t("thermostat.current")}</span>
              <span class="value">${r}</span>
            </span>
          </button>
        `:c}

        ${"single"===e.mode&&void 0!==d?s`
          <div class="target" role="group" aria-label=${this._t("thermostat.target_label",{name:i})}>
            <button
              class="step"
              type="button"
              title=${this._t("thermostat.lower",{name:i})}
              aria-label=${this._t("thermostat.lower",{name:i})}
              ?disabled=${!Ut(d,-1,e)}
              @click=${()=>this._adjust(-1)}
            >
              ${this._icon(rt)}
            </button>
            <span class="copy target-copy">
              <span class="label">${this._t("thermostat.target")}</span>
              <span class="value" aria-live="polite">${this._formatValue(d,n,e.unit)}</span>
            </span>
            <button
              class="step"
              type="button"
              title=${this._t("thermostat.raise",{name:i})}
              aria-label=${this._t("thermostat.raise",{name:i})}
              ?disabled=${!Ut(d,1,e)}
              @click=${()=>this._adjust(1)}
            >
              ${this._icon(nt)}
            </button>
          </div>
        `:"range"===e.mode&&void 0!==e.targetLow&&void 0!==e.targetHigh?s`
          <button
            class="segment target-range"
            type="button"
            title=${l}
            aria-label=${`${this._t("thermostat.target")}: ${this._formatValue(e.targetLow,n,e.unit)} - ${this._formatValue(e.targetHigh,n,e.unit)}. ${l}`}
            @click=${this._openMoreInfo}
          >
            <span class="copy">
              <span class="label">${this._t("thermostat.target")}</span>
              <span class="value">
                ${Kt(e.targetLow,n,yt(this.hass))}
                -
                ${this._formatValue(e.targetHigh,n,e.unit)}
              </span>
            </span>
          </button>
        `:c}

        <button
          class="mode"
          type="button"
          title=${l}
          aria-label=${l}
          @click=${this._openMoreInfo}
        >
          ${this._icon(Bt[a])}
          <span class="mode-label">${o}</span>
        </button>
      </div>
    `}};Yt.styles=r`:host{display:block;min-width:0;-webkit-tap-highlight-color:transparent}.thermostat{--thermostat-color:var(--secondary-text-color,#6b7280);--tile-text:var(--ph-text,var(--primary-text-color));--tile-muted:var(--ph-muted,var(--secondary-text-color));box-sizing:border-box;min-height:52px;padding:6px;display:flex;align-items:center;gap:6px;min-width:0;border-radius:14px;background:var(--ph-control,color-mix(in srgb,var(--primary-text-color) 6%,transparent));color:var(--tile-text);backdrop-filter:blur(16px) saturate(1.3);-webkit-backdrop-filter:blur(16px) saturate(1.3)}.thermostat.activity-heat{--thermostat-color:var(--state-climate-heat-color,#ff8100)}.thermostat.activity-cool{--thermostat-color:var(--state-climate-cool-color,#2b9af9)}.thermostat.activity-dry{--thermostat-color:var(--state-climate-dry-color,#efbd07)}.thermostat.activity-fan{--thermostat-color:var(--state-climate-fan_only-color,#00bcd4)}.thermostat.activity-auto{--thermostat-color:var(--state-climate-auto-color,#008000)}button{margin:0;padding:0;border:0;background:none;color:inherit;font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}button:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}svg{width:18px;height:18px;flex:0 0 auto;fill:currentColor}.segment{min-width:0;min-height:40px;padding:0 10px 0 0;display:inline-flex;align-items:center;gap:10px;flex:0 1 auto;border-radius:11px;text-align:left;transition:background-color 0.18s ease}.target-range{padding-left:10px}.segment:hover{background:color-mix(in srgb,var(--tile-text) 7%,transparent)}.mode:hover{background:color-mix(in srgb,var(--thermostat-color) 22%,transparent)}.segment-icon{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:11px;background:color-mix(in srgb,var(--thermostat-color) 16%,transparent);color:color-mix(in srgb,var(--thermostat-color) 78%,var(--tile-text))}.segment-icon svg{width:20px;height:20px}.copy{min-width:0;display:flex;flex-direction:column;gap:1px;line-height:1.1}.label{color:var(--tile-muted);font-size:12px;font-weight:500;white-space:nowrap}.value{font-size:14px;font-weight:650;font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.target{display:inline-flex;align-items:center;gap:2px;flex:0 0 auto;padding:0;border-radius:11px}.target-copy{min-width:56px;align-items:center;text-align:center}.step{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:10px;background:color-mix(in srgb,var(--tile-text) 8%,transparent);color:var(--tile-text);transition:background-color 0.18s ease,transform 0.12s ease,opacity 0.18s ease}.step:hover:not(:disabled){background:color-mix(in srgb,var(--tile-text) 13%,transparent)}.step:active:not(:disabled){transform:scale(0.94)}.step:disabled{opacity:0.4;cursor:default}.mode{min-width:36px;max-width:150px;min-height:40px;margin-left:auto;padding:0 12px 0 10px;display:inline-flex;align-items:center;gap:6px;flex:0 1 auto;border-radius:11px;background:color-mix(in srgb,var(--thermostat-color) 15%,transparent);color:color-mix(in srgb,var(--thermostat-color) 70%,var(--tile-text));font-size:13px;font-weight:650;transition:background-color 0.18s ease}.mode svg{width:16px;height:16px}.mode-label{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (pointer:coarse){.segment,.mode{min-height:40px}.step{width:40px;height:40px}}@media (max-width:380px){.segment{padding:0 6px 0 8px}.segment-icon{display:none}}@media (prefers-reduced-motion:reduce){.segment,.mode,.step{transition:none}}`,t([e({attribute:!1})],Yt.prototype,"hass",void 0),t([e({attribute:!1})],Yt.prototype,"entityId",void 0),t([e({attribute:!1})],Yt.prototype,"roomName",void 0),t([i()],Yt.prototype,"_pendingTarget",void 0),Yt=t([a("dwains-dashboard-next-area-thermostat")],Yt);const Xt=new Set(["video","movie","tvshow","episode","channel"]);let Qt=class extends n{constructor(){super(...arguments),this.players=[],this.floating=!1}_t(t,e){return wt(this.hass,t,e)}disconnectedCallback(){super.disconnectedCallback(),this._clearOptimisticTimer()}willUpdate(t){if(super.willUpdate(t),t.has("hass")&&this._optimistic){const t=this.hass?.states?.[this._optimistic.entityId]?.state,e=this._optimistic.state;(("playing"===e?H(t):t===e)||this._optimistic.expiresAt<=Date.now())&&this._clearOptimistic()}}_currentPlayer(){const t=this.players||[];return t.find(t=>t.entityId===this._pinnedEntityId)||t[0]}_shownState(t){const e=this._optimistic;return e&&e.entityId===t.entity_id&&e.expiresAt>Date.now()?e.state:t.state}_playerName(t){return t.attributes?.friendly_name||P(this.hass)[t.entity_id]?.name||t.entity_id}_openMoreInfo(t){kt(this,"hass-more-info",{entityId:t})}_cycle(){const t=this.players||[];if(t.length<2)return;const e=this._currentPlayer(),i=t.findIndex(t=>t.entityId===e?.entityId);this._pinnedEntityId=t[(i+1)%t.length].entityId}async _togglePlayback(t,e){const i=t.entity_id,a=H(this._shownState(t))?"paused":"playing";this._pinnedEntityId=i,this._optimistic={entityId:i,state:a,expiresAt:Date.now()+5e3},this._scheduleOptimisticExpiry();try{await this.hass.callService("media_player","media_play_pause",{entity_id:i})}catch(t){console.warn(`Failed to play or pause ${i}:`,t),this._optimistic?.entityId===i&&this._clearOptimistic(),this._showFailure(e)}}async _nextTrack(t,e){const i=t.entity_id;this._pinnedEntityId=i;try{await this.hass.callService("media_player","media_next_track",{entity_id:i})}catch(t){console.warn(`Failed to skip to the next track on ${i}:`,t),this._showFailure(e)}}_showFailure(t){kt(this,"hass-notification",{message:this._t("now_playing.update_failed",{name:t})})}_scheduleOptimisticExpiry(){this._clearOptimisticTimer(),this._optimisticTimer=window.setTimeout(()=>{this._optimisticTimer=void 0,this._optimistic=void 0},5050)}_clearOptimistic(){this._optimistic=void 0,this._clearOptimisticTimer()}_clearOptimisticTimer(){void 0!==this._optimisticTimer&&(window.clearTimeout(this._optimisticTimer),this._optimisticTimer=void 0)}_icon(t){return s`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d=${t}></path></svg>`}render(){const t=this._currentPlayer(),e=t?this.hass?.states?.[t.entityId]:void 0;if(!t||!e)return c;const i=this._playerName(e),{title:a,artist:o}=q(e,i),r=[o,t.roomName||(a!==i?i:"")].filter(Boolean).join(" · "),n=t.roomName||i,d=this._shownState(e),l=H(d),p=R(e,this.hass?.hassUrl?.bind(this.hass)),m=p&&p!==this._brokenArtwork,h=String(e.attributes?.media_content_type||""),g=(this.players?.length||0)-1;return s`
      <div class="bar ${l?"is-playing":"is-paused"}" role="region" aria-label=${this._t("now_playing.title")}>
        <button
          class="info"
          type="button"
          title=${this._t("now_playing.details",{name:n})}
          aria-label=${`${a}${r?`, ${r}`:""}. ${this._t("now_playing.details",{name:n})}`}
          @click=${()=>this._openMoreInfo(e.entity_id)}
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
            `:this._icon(Xt.has(h)?gt:ut)}
          </span>
          <span class="text">
            <span class="title">${a}</span>
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
          ${F(e,d)?s`
            <button
              class="control primary"
              type="button"
              title=${this._t(l?"now_playing.pause":"now_playing.play",{name:n})}
              aria-label=${this._t(l?"now_playing.pause":"now_playing.play",{name:n})}
              @click=${()=>this._togglePlayback(e,n)}
            >
              ${this._icon(l?bt:xt)}
            </button>
          `:c}
          ${N(e)?s`
            <button
              class="control"
              type="button"
              title=${this._t("now_playing.next",{name:n})}
              aria-label=${this._t("now_playing.next",{name:n})}
              @click=${()=>this._nextTrack(e,n)}
            >
              ${this._icon(ft)}
            </button>
          `:c}
        </div>
      </div>
    `}};Qt.styles=r`:host{display:block;min-width:0;-webkit-tap-highlight-color:transparent}.bar{box-sizing:border-box;min-height:60px;padding:6px 8px 6px 6px;display:flex;align-items:center;gap:8px;border-radius:14px;background:var(--card-background-color,#fff);color:var(--primary-text-color);border:1px solid color-mix(in srgb,var(--divider-color,rgba(0,0,0,0.12)) 70%,transparent);box-shadow:0 10px 26px rgba(15,23,42,0.07)}:host([floating]) .bar{border-radius:18px;background:color-mix(in srgb,var(--card-background-color,#fff) 90%,transparent);box-shadow:0 18px 40px rgba(15,23,42,0.18),inset 0 1px 0 color-mix(in srgb,#ffffff 40%,transparent);backdrop-filter:blur(22px) saturate(160%);-webkit-backdrop-filter:blur(22px) saturate(160%)}button{margin:0;padding:0;border:0;background:none;color:inherit;font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}button:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}svg{width:22px;height:22px;fill:currentColor}.info{min-width:0;min-height:46px;flex:1 1 auto;display:flex;align-items:center;gap:10px;padding-right:4px;border-radius:10px;text-align:left}.art{width:46px;height:46px;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;border-radius:10px;background:color-mix(in srgb,var(--primary-color) 14%,var(--card-background-color,#fff));color:var(--primary-color)}.art img{width:100%;height:100%;object-fit:cover;display:block}.is-paused .art{opacity:0.72}.text{min-width:0;display:flex;flex-direction:column;gap:2px}.title,.subtitle{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.title{font-size:14px;font-weight:700;line-height:1.2}.subtitle{color:var(--secondary-text-color);font-size:12px;font-weight:500;line-height:1.2}.controls{flex:0 0 auto;display:flex;align-items:center;gap:4px}.control{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:background-color 0.18s ease,transform 0.12s ease}.control:hover{background:color-mix(in srgb,var(--primary-text-color) 8%,transparent)}.control.primary{background:var(--primary-color);color:var(--text-primary-color,#fff)}.control.primary:hover{background:color-mix(in srgb,var(--primary-color) 88%,#000)}.control:active{transform:scale(0.94)}.more{min-width:40px;height:32px;padding:0 10px;border-radius:999px;background:color-mix(in srgb,var(--primary-text-color) 8%,transparent);color:var(--primary-text-color);font-size:12px;font-weight:800;font-variant-numeric:tabular-nums}@media (pointer:coarse){.more{height:40px}}@media (prefers-reduced-motion:reduce){.control{transition:none}}`,t([e({attribute:!1})],Qt.prototype,"hass",void 0),t([e({attribute:!1})],Qt.prototype,"players",void 0),t([e({type:Boolean,reflect:!0})],Qt.prototype,"floating",void 0),t([i()],Qt.prototype,"_pinnedEntityId",void 0),t([i()],Qt.prototype,"_optimistic",void 0),t([i()],Qt.prototype,"_brokenArtwork",void 0),Qt=t([a("dwains-dashboard-next-now-playing")],Qt);const Jt=r`.dd-page-header,.dd-room-compact{--ph-surface:var(--ha-card-background,var(--card-background-color,#ffffff));--ph-text:var(--primary-text-color,#1c1f24);--ph-muted:color-mix(in srgb,var(--ph-text) 66%,transparent);--ph-control:color-mix(in srgb,var(--ph-text) 6%,transparent);--ph-control-hover:color-mix(in srgb,var(--ph-text) 11%,transparent);--ph-accent:var(--domain-color,var(--primary-color,#03a9f4));--ph-warning:var(--warning-color,#ff9800);--ph-pad-x:20px;--ph-pad-y:18px}.dd-page-header{position:relative;isolation:isolate;box-sizing:border-box;display:flex;flex-direction:column;gap:16px;margin:0 0 20px;padding:var(--ph-pad-y) var(--ph-pad-x);border:1px solid color-mix(in srgb,var(--divider-color,rgba(0,0,0,0.12)) 75%,transparent);border-radius:18px;background:var(--ph-surface);color:var(--ph-text);box-shadow:0 1px 2px rgba(15,23,42,0.04),0 12px 32px rgba(15,23,42,0.06)}:host([data-theme-dark]) .dd-page-header{box-shadow:0 1px 2px rgba(0,0,0,0.28),0 12px 32px rgba(0,0,0,0.24)}.dd-page-header-top{position:relative;z-index:1;display:flex;align-items:center;gap:14px;min-width:0}.dd-page-header-identity{flex:1 1 auto;min-width:0;display:flex;align-items:center;gap:14px}.dd-page-header-icon{width:48px;height:48px;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;border-radius:14px;background:color-mix(in srgb,var(--ph-accent) 14%,var(--ph-surface));color:var(--ph-accent)}.dd-page-header-icon ha-icon{--mdc-icon-size:26px}.dd-page-header-copy{min-width:0}.dd-page-header-title{margin:0;color:inherit;font-size:clamp(22px,1.1vw + 14px,30px);font-weight:800;line-height:1.12;letter-spacing:-0.012em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dd-page-header-subtitle{margin-top:4px;display:flex;flex-wrap:wrap;align-items:center;gap:2px 14px;color:var(--ph-muted);font-size:14px;font-weight:500;line-height:1.35}.dd-page-header-reading{display:inline-flex;align-items:center;gap:3px;color:var(--ph-text);font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}.dd-page-header-reading ha-icon{--mdc-icon-size:17px;color:var(--reading-color)}.dd-page-header-reading.temperature{--reading-color:#7c67c7}.dd-page-header-reading.humidity{--reading-color:#34a6d8}.dd-page-header-actions{flex:0 0 auto;display:inline-flex;align-items:center;gap:8px;min-width:0}.dd-page-header-button{position:relative;box-sizing:border-box;width:40px;height:40px;padding:0;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;background:var(--ph-control);color:var(--ph-text);font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;user-select:none;-webkit-user-select:none;transition:background-color 0.18s ease,color 0.18s ease,transform 0.12s ease}.dd-page-header-button:hover{background:var(--ph-control-hover)}.dd-page-header-button:active{transform:scale(0.94)}.dd-page-header-button ha-icon,.dd-page-header-button .dd-static-icon{--mdc-icon-size:22px;width:22px;height:22px}.dd-page-header-button.is-active,.dd-page-header-button.is-active:hover{background:var(--primary-color);color:var(--text-primary-color,#ffffff)}.dd-page-header-button.is-warning{background:color-mix(in srgb,var(--ph-warning) 16%,transparent);color:color-mix(in srgb,var(--ph-warning) 78%,var(--ph-text))}.dd-page-header-button.is-warning:hover{background:color-mix(in srgb,var(--ph-warning) 24%,transparent)}.dd-page-header-badge{position:absolute;top:-4px;right:-4px;box-sizing:border-box;min-width:19px;height:19px;padding:0 5px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:var(--ph-warning);color:#241600;font-size:11px;font-weight:750;line-height:1;font-variant-numeric:tabular-nums;box-shadow:0 0 0 2px var(--ph-surface)}.dd-page-header-button:focus-visible,.dd-room-tile:focus-visible,.dd-room-tile-action:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}.dd-page-header-strip{position:relative;z-index:1;display:flex;flex-wrap:wrap;align-items:center;gap:12px 16px;min-width:0}.dd-room-tiles{flex:1 1 auto;min-width:0;display:flex;flex-wrap:wrap;align-items:center;gap:10px}.dd-page-header-strip>dwains-dashboard-next-area-thermostat{flex:0 1 auto;min-width:0;max-width:100%}.dd-room-tile{--tile-color:var(--primary-color);--tile-on:#ffffff;box-sizing:border-box;min-width:0;min-height:52px;padding:6px 12px 6px 6px;display:inline-flex;align-items:center;gap:10px;border:0;border-radius:14px;background:var(--ph-control);color:var(--ph-text);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;user-select:none;-webkit-user-select:none;transition:background-color 0.2s ease,color 0.2s ease,transform 0.12s ease}button.dd-room-tile:hover{background:var(--ph-control-hover)}button.dd-room-tile:active{transform:scale(0.97)}.dd-room-tile.light{--tile-color:#e1a129;--tile-on:#2b1c00}.dd-room-tile.switch{--tile-color:#2f6fd6}.dd-room-tile.cover{--tile-color:#1494aa}.dd-room-tile.fan{--tile-color:#2b8fcb}.dd-room-tile.climate{--tile-color:#34a6d8}.dd-room-tile-icon{width:40px;height:40px;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;border-radius:11px;background:color-mix(in srgb,var(--tile-color) 14%,transparent);color:var(--tile-color);transition:background-color 0.2s ease,color 0.2s ease}.dd-room-tile-icon ha-icon{--mdc-icon-size:22px}.dd-room-tile-copy{min-width:0;display:flex;flex-direction:column;gap:1px}.dd-room-tile-label{font-size:14px;font-weight:650;line-height:1.2;white-space:nowrap}.dd-room-tile-state{color:var(--ph-muted);font-size:12.5px;font-weight:500;line-height:1.2;white-space:nowrap;font-variant-numeric:tabular-nums}.dd-room-tile-switch{position:relative;width:34px;height:20px;flex:0 0 auto;margin-left:6px;border-radius:999px;background:color-mix(in srgb,var(--ph-text) 20%,transparent);transition:background-color 0.2s ease}.dd-room-tile-switch::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#ffffff;box-shadow:0 1px 3px rgba(0,0,0,0.25);transition:transform 0.24s cubic-bezier(0.2,0.8,0.2,1)}.dd-room-tile.is-on{background:color-mix(in srgb,var(--tile-color) 15%,var(--ph-surface))}button.dd-room-tile.is-on:hover{background:color-mix(in srgb,var(--tile-color) 21%,var(--ph-surface))}.dd-room-tile.is-on .dd-room-tile-icon{background:var(--tile-color);color:var(--tile-on)}.dd-room-tile.is-on .dd-room-tile-switch{background:var(--tile-color)}.dd-room-tile.is-on .dd-room-tile-switch::after{transform:translateX(14px)}.dd-room-tile.has-actions{padding-right:6px;cursor:default}.dd-room-tile-actions{display:inline-flex;align-items:center;gap:4px;margin-left:6px}.dd-room-tile-action{width:36px;height:36px;padding:0;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:10px;background:var(--ph-control);color:inherit;font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;transition:background-color 0.18s ease,transform 0.12s ease}.dd-room-tile-action:hover{background:var(--ph-control-hover)}.dd-room-tile-action:active{transform:scale(0.9)}.dd-room-tile-action ha-icon{--mdc-icon-size:20px}.dd-room-tile-chevron{--mdc-icon-size:20px;margin-left:2px;color:var(--ph-muted)}.dd-page-header.has-picture{--ph-text:#ffffff;--ph-control:rgba(255,255,255,0.16);--ph-control-hover:rgba(255,255,255,0.26);--ph-muted:rgba(255,255,255,0.8);border-color:transparent;background:#1b2422}.dd-page-header.has-picture.text-dark{--ph-text:#10141a;--ph-control:rgba(255,255,255,0.58);--ph-control-hover:rgba(255,255,255,0.74);--ph-muted:rgba(16,20,26,0.74);background:#e9eef0}.dd-page-header-media{position:absolute;inset:0;z-index:0;border-radius:inherit;background-position:center;background-size:cover}.dd-page-header-media::after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(0deg,rgba(8,12,18,0.62) 0%,rgba(8,12,18,0) 70%),linear-gradient(100deg,rgba(8,12,18,0.66) 0%,rgba(8,12,18,0.34) 60%,rgba(8,12,18,0.2) 100%)}.dd-page-header.text-dark .dd-page-header-media::after{background:linear-gradient(0deg,rgba(255,255,255,0.72) 0%,rgba(255,255,255,0) 70%),linear-gradient(100deg,rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.46) 60%,rgba(255,255,255,0.24) 100%)}.dd-page-header.has-picture .dd-page-header-top{flex-wrap:wrap;row-gap:36px}.dd-page-header.has-picture .dd-page-header-actions{order:1;margin-left:auto}.dd-page-header.has-picture .dd-page-header-identity{order:2;flex-basis:100%}.dd-page-header.has-picture .dd-page-header-title{text-shadow:0 1px 14px rgba(0,0,0,0.28)}.dd-page-header.has-picture.text-dark .dd-page-header-title{text-shadow:none}.dd-page-header.has-picture .dd-page-header-icon{background:var(--ph-control);color:var(--ph-text)}.dd-page-header.has-picture .dd-page-header-button,.dd-page-header.has-picture .dd-room-tile{-webkit-backdrop-filter:blur(16px) saturate(1.3);backdrop-filter:blur(16px) saturate(1.3)}.dd-page-header.has-picture .dd-page-header-badge{box-shadow:none}.dd-page-header.has-picture .dd-page-header-reading ha-icon{color:inherit}.dd-page-header.has-picture .dd-room-tile.is-on{--ph-text:#10141a;--ph-muted:rgba(16,20,26,0.7);--ph-control:rgba(16,20,26,0.07);--ph-control-hover:rgba(16,20,26,0.12);background:rgba(255,255,255,0.94)}.dd-page-header.has-picture .dd-room-tile:not(.is-on) .dd-room-tile-icon{background:var(--ph-control);color:var(--ph-text)}.dd-page-header.has-picture .dd-room-tile-switch{background:color-mix(in srgb,var(--ph-text) 30%,transparent)}.dd-page-header.has-picture .dd-room-tile.is-on .dd-room-tile-switch{background:var(--tile-color)}.dd-room-compact{display:none}@media (max-width:768px){.dd-page-header,.dd-room-compact{--ph-pad-x:16px}.dd-page-header{margin:0 -10px 14px;padding:calc(10px + env(safe-area-inset-top,0px)) var(--ph-pad-x) 14px;gap:14px;border:0;border-radius:0;background:transparent;box-shadow:none}:host([data-theme-dark]) .dd-page-header{box-shadow:none}.dd-page-header-top{flex-wrap:wrap;row-gap:14px}.dd-page-header-actions{order:1;margin-left:auto}.dd-page-header-identity{order:2;flex-basis:100%}.dd-page-header-actions.is-content{order:3;flex-basis:100%;flex-wrap:wrap;justify-content:flex-start;margin-left:0}.dd-page-header-icon{display:none}.dd-page-header-title{font-size:28px;line-height:1.1;white-space:normal;overflow-wrap:anywhere;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.dd-page-header-strip{flex-direction:column;align-items:stretch;gap:12px}.dd-room-tiles{flex:0 0 auto;flex-wrap:nowrap;margin:0 calc(var(--ph-pad-x) * -1);padding:2px var(--ph-pad-x);overflow-x:auto;overscroll-behavior-x:contain;scroll-padding-inline:var(--ph-pad-x);scroll-snap-type:x proximity;scrollbar-width:none}.dd-room-tiles::-webkit-scrollbar{display:none}.dd-room-tile{flex:0 0 auto;scroll-snap-align:start}.dd-page-header-strip>dwains-dashboard-next-area-thermostat{width:100%}.dd-page-header.has-picture{padding-bottom:16px;border-radius:0 0 24px 24px}.dd-page-header.has-picture .dd-page-header-top{row-gap:72px}.dd-room-compact{display:block;position:sticky;top:0;z-index:90;height:0;color:var(--ph-text)}.dd-room-compact-panel{position:absolute;top:0;left:-10px;right:-10px;box-sizing:border-box;padding:calc(8px + env(safe-area-inset-top,0px)) 12px 8px;display:flex;flex-direction:column;gap:8px;border-bottom:1px solid color-mix(in srgb,var(--divider-color,rgba(0,0,0,0.12)) 70%,transparent);background:color-mix(in srgb,var(--ph-surface) 86%,transparent);-webkit-backdrop-filter:blur(20px) saturate(1.5);backdrop-filter:blur(20px) saturate(1.5);box-shadow:0 8px 24px rgba(15,23,42,0.08);opacity:0;transform:translateY(-12px);visibility:hidden;pointer-events:none;transition:opacity 0.18s ease,transform 0.26s cubic-bezier(0.2,0.8,0.2,1),visibility 0s linear 0.26s}.dd-room-compact.is-visible .dd-room-compact-panel{opacity:1;transform:none;visibility:visible;pointer-events:auto;transition:opacity 0.18s ease,transform 0.26s cubic-bezier(0.2,0.8,0.2,1),visibility 0s}.dd-room-compact-bar{display:flex;align-items:center;gap:10px;min-height:40px}.dd-room-compact-title{flex:1 1 auto;min-width:0;display:flex;flex-direction:column}.dd-room-compact-title strong{overflow:hidden;font-size:17px;font-weight:700;line-height:1.2;text-overflow:ellipsis;white-space:nowrap}.dd-room-compact-title span{overflow:hidden;color:var(--ph-muted);font-size:12px;font-weight:500;line-height:1.25;text-overflow:ellipsis;white-space:nowrap;font-variant-numeric:tabular-nums}.dd-room-compact .dd-page-header-button{width:38px;height:38px}.dd-room-compact .dd-room-tiles{margin:0 -12px;padding:0 12px 2px;scroll-padding-inline:12px}.dd-room-compact .dd-room-tile{min-height:44px;padding:4px 10px 4px 4px;gap:8px}.dd-room-compact .dd-room-tile-icon{width:36px;height:36px;border-radius:10px}.dd-room-compact .dd-room-tile-action{width:32px;height:32px}}@media (pointer:coarse){.dd-room-tile-action,.dd-room-compact .dd-room-tile-action{width:40px;height:40px}.dd-page-header-button,.dd-room-compact .dd-page-header-button{width:42px;height:42px}}@media (prefers-reduced-motion:reduce){.dd-page-header-button,.dd-room-tile,.dd-room-tile-icon,.dd-room-tile-switch,.dd-room-tile-switch::after,.dd-room-tile-action,.dd-room-compact-panel,.dd-room-compact.is-visible .dd-room-compact-panel{transition:none}}`,Zt=()=>import("./dwains-domain-entities-dialog-Gtiwu3hU.js"),te=(t,e)=>{kt(t,"show-dialog",{dialogTag:"dwains-dashboard-next-domain-entities-dialog",dialogImport:Zt,dialogParams:e})},ee=new Map;let ie,ae=!1;const oe=t=>{if(ae)return;ae=!0;const e=()=>{ie=window.setInterval(()=>{ee.size>0?ee.forEach(e=>{e&&"hass"in e&&(e.hass=t.hass)}):ie&&(clearInterval(ie),ie=void 0)},100)};t.addEventListener("show-dialog",async i=>{const a=i;a.stopPropagation(),a.stopImmediatePropagation();const{dialogTag:o,dialogImport:r,dialogParams:n}=a.detail;if(ee.has(o))return void console.warn(`Dialog ${o} is already open`);await r();const s=document.querySelector(o);s&&s.remove();const c=document.createElement(o);c.hass=t.hass,ee.set(o,c),document.body.appendChild(c),requestAnimationFrame(()=>{c.showDialog(n)});c.addEventListener("dialog-closed",()=>{ee.delete(o),document.body.contains(c)&&c.remove(),0===ee.size&&ie&&(clearInterval(ie),ie=void 0)},{once:!0}),1!==ee.size||ie||e()},{capture:!0})};class re extends HTMLElement{constructor(){super(...arguments),this._child=null}static get observedAttributes(){return["entity","name"]}set hass(t){this._hass=t,this._child&&(this._child.hass=t)}get hass(){return this._hass}attributeChangedCallback(t,e,i){"entity"===t&&(this._entityId=i??void 0),"name"===t&&(this._name=i??void 0),this._ensureChild()}connectedCallback(){this.style.display="block",this._ensureChild()}disconnectedCallback(){this._child=null,this.innerHTML=""}async _ensureChild(){if(this.isConnected&&this._entityId)if(this._child&&this.contains(this._child)&&this._child.getAttribute("data-entity")===this._entityId)this._hass&&(this._child.hass=this._hass);else{if(!customElements.get("hui-tile-card"))try{await customElements.whenDefined("hui-tile-card")}catch{return}this._child&&this.contains(this._child)||(this._child=document.createElement("hui-tile-card"),this._child.classList.add("favorite-tile"),this._child.setAttribute("data-entity",this._entityId),this.innerHTML="",this.appendChild(this._child));try{if("setConfig"in this._child){const t={entity:this._entityId};this._name&&(t.name=this._name),this._child.setConfig(t)}this._hass&&this.contains(this._child)&&(this._child.hass=this._hass)}catch(t){console.warn("dwains-dashboard-next-tile-host: failed to configure tile",t)}}}}customElements.get("dwains-dashboard-next-tile-host")||customElements.define("dwains-dashboard-next-tile-host",re);const ne="dwainsDashboardNextSettingsOpen",se="dd-next-area-sidebar-width",ce="dd-next-area-sidebar-collapsed",de=240,le="__ungrouped__";let pe=class extends n{constructor(){super(...arguments),this._t=(t,e)=>wt(this.hass,t,e),this._tp=(t,e)=>_t(this.hass,t,e),this._selectedArea=null,this._selectedView=null,this._isMobile=!1,this._headerExpanded=!1,this._headerCompact=!1,this._headerStatusCanScrollLeft=!1,this._headerStatusCanScrollRight=!1,this._favoritesRenderVersion=0,this._currentTime="",this._currentDate="",this._mobileNavOpen=!1,this._editMode=!1,this._notificationsOpen=!1,this._persistentNotifications=[],this._notificationsLoading=!1,this._notificationsError="",this._areaHeaderStuck=!1,this._areaHeaderRevealed=!1,this._mobileEntityLayout="rail",this._mobileHomeAreasLayout="rail",this._mobileHomeDevicesLayout="rail",this._mobileHomeFavoritesLayout="rail",this._mobileHomeCamerasLayout="rail",this._areaSidebarWidth=250,this._areaSidebarCollapsed=!1,this._isResizingSidebar=!1,this._repairsIssueCount=0,this._discoveredDeviceCount=0,this._suggestedFavoriteEntities=[],this._customCardDrag=null,this._customCardDragOver=null,this._generatedCardDrag=null,this._generatedCardDragOver=null,this._generatedGroupDrag=null,this._generatedGroupDragOver=null,this._optimisticEntityStates={},this._renderAllMobileHomeAreas=!1,this._renderAllMobileAreaEntities=!1,this._collapsedAreaGroups={},this._settingsDirty=!1,this._settingsSavePending=!1,this._settingsSaveError="",this._settingsPageKey="overview",this._settingsPageTitle="",this._settingsPageParentTitle="",this._settingsPageDescription="",this._confirmationDialog=null,this._housePowerDialogOpen=!1,this._areaEntitiesCache=new Map,this._areaDataCache=new Map,this._domainCountsCache=new Map,this._CACHE_DURATION=5e3,this._persistentNotificationsLoaded=!1,this._homeSummariesLoaded=!1,this._favoriteSuggestionsLoaded=!1,this._favoriteSuggestionsLoading=!1,this._pendingAreaScrollTop=0,this._lastAreaScrollTop=0,this._areaScrollUpDistance=0,this._pictureContrastCache=new Map,this._areaSidebarScrollTop=0,this._settingsEditorInitialized=!1,this._settingsRestorePageKey="overview",this._handleHeaderStatusScroll=()=>{this._scheduleHeaderStatusScrollState()},this._handleResize=()=>{if(this._checkMobile(),!this._isMobile){const t=this._clampAreaSidebarWidth(this._areaSidebarWidth);t!==this._areaSidebarWidth&&(this._areaSidebarWidth=t)}this._updateAreaHeaderScrollState()},this._handleSidebarScroll=t=>{if(this._isMobile)return;const e=t.currentTarget;e&&(this._areaSidebarScrollTop=e.scrollTop)},this._handleContentScroll=t=>{if(!this._isMobile||"area"!==this._selectedView)return this._areaHeaderStuck&&(this._areaHeaderStuck=!1),void(this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1));const e=t.currentTarget,i=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||e?.scrollTop||0;this._pendingAreaScrollTop=i,this._areaHeaderScrollRaf||(this._areaHeaderScrollRaf=requestAnimationFrame(()=>{this._areaHeaderScrollRaf=void 0,this._setAreaHeaderStuckForScroll(this._pendingAreaScrollTop,!0)}))},this._handleWindowScroll=()=>{this._isMobile&&"area"===this._selectedView&&(this._pendingAreaScrollTop=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,this._areaHeaderScrollRaf||(this._areaHeaderScrollRaf=requestAnimationFrame(()=>{this._areaHeaderScrollRaf=void 0,this._setAreaHeaderStuckForScroll(this._pendingAreaScrollTop,!0)})))},this._handleShowMoreInfo=t=>{kt(this,"hass-more-info",{entityId:t.detail.entityId})},this._startSidebarResize=t=>{this._isMobile||0!==t.button||(t.preventDefault(),this._sidebarResizePointerId=t.pointerId,this._isResizingSidebar=!0,t.currentTarget?.setPointerCapture?.(t.pointerId),window.addEventListener("pointermove",this._handleSidebarResizeMove),window.addEventListener("pointerup",this._handleSidebarResizeEnd),window.addEventListener("pointercancel",this._handleSidebarResizeEnd))},this._handleSidebarResizeMove=t=>{if(!this._isResizingSidebar||this._isMobile)return;if(void 0!==this._sidebarResizePointerId&&t.pointerId!==this._sidebarResizePointerId)return;const e=this.renderRoot?.querySelector(".layout-container"),i=e?.getBoundingClientRect().left??0,a=t.clientX-i;a<=96?this._areaSidebarCollapsed=!0:(this._areaSidebarCollapsed&&(this._areaSidebarCollapsed=!1),this._areaSidebarWidth=this._clampAreaSidebarWidth(a))},this._handleSidebarResizeEnd=t=>{this._isResizingSidebar&&(t&&void 0!==this._sidebarResizePointerId&&t.pointerId!==this._sidebarResizePointerId||(this._isResizingSidebar=!1,this._sidebarResizePointerId=void 0,this._saveAreaSidebarWidthPreference(this._areaSidebarWidth),this._saveAreaSidebarCollapsedPreference(this._areaSidebarCollapsed),window.removeEventListener("pointermove",this._handleSidebarResizeMove),window.removeEventListener("pointerup",this._handleSidebarResizeEnd),window.removeEventListener("pointercancel",this._handleSidebarResizeEnd)))},this._toggleAreaSidebarCollapsed=t=>{t?.stopPropagation(),this._isMobile||(this._areaSidebarCollapsed=!this._areaSidebarCollapsed,this._saveAreaSidebarCollapsedPreference(this._areaSidebarCollapsed),this._areaSidebarCollapsed||(this._areaSidebarWidth=this._clampAreaSidebarWidth(this._areaSidebarWidth||250),this._saveAreaSidebarWidthPreference(this._areaSidebarWidth)))},this._handleSidebarResizeKeydown=t=>{if(this._isMobile)return;let e=this._areaSidebarWidth;if("ArrowLeft"===t.key)e-=t.shiftKey?40:20;else if("ArrowRight"===t.key)e+=t.shiftKey?40:20;else if("Home"===t.key)e=de;else{if("End"!==t.key)return;e=660}t.preventDefault(),this._areaSidebarWidth=this._clampAreaSidebarWidth(e),this._saveAreaSidebarWidthPreference(this._areaSidebarWidth)},this._toggleMobileEntityLayout=t=>{t?.stopPropagation(),this._mobileEntityLayout="rail"===this._mobileEntityLayout?"grid":"rail";try{window.localStorage.setItem("dd-next-mobile-entity-layout",this._mobileEntityLayout)}catch{}},this._toggleMobileHomeAreasLayout=t=>{t?.stopPropagation(),this._mobileHomeAreasLayout="rail"===this._mobileHomeAreasLayout?"grid":"rail";try{window.localStorage.setItem("dd-next-mobile-home-areas-layout",this._mobileHomeAreasLayout)}catch{}},this._toggleMobileHomeDevicesLayout=t=>{t?.stopPropagation(),this._mobileHomeDevicesLayout="rail"===this._mobileHomeDevicesLayout?"grid":"rail";try{window.localStorage.setItem("dd-next-mobile-home-devices-layout",this._mobileHomeDevicesLayout)}catch{}},this._toggleMobileHomeFavoritesLayout=t=>{t?.stopPropagation(),this._mobileHomeFavoritesLayout="rail"===this._mobileHomeFavoritesLayout?"grid":"rail";try{window.localStorage.setItem("dd-next-mobile-home-favorites-layout",this._mobileHomeFavoritesLayout)}catch{}},this._toggleMobileHomeCamerasLayout=t=>{t?.stopPropagation(),this._mobileHomeCamerasLayout="rail"===this._mobileHomeCamerasLayout?"grid":"rail";try{window.localStorage.setItem("dd-next-mobile-home-cameras-layout",this._mobileHomeCamerasLayout)}catch{}},this._debouncedUpdate=()=>{this._updateDebounceTimer&&clearTimeout(this._updateDebounceTimer),this._updateDebounceTimer=window.setTimeout(()=>{this.requestUpdate()},100)},this._nowPlayingPlayers=function(t,e){void 0===e&&(e=Et);var i=null;function a(){for(var a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];if(i&&i.lastThis===this&&e(a,i.lastArgs))return i.lastResult;var r=t.apply(this,a);return i={lastResult:r,lastArgs:a,lastThis:this},r}return a.clear=function(){i=null},a}((t,e,i,a,o)=>et(vt(e,"media_player"),{now:Date.now(),isVisible:e=>at(t,i,e)}).map(e=>({entityId:e,roomName:it(t,i,e)}))),this._handleHousePowerKeydown=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._openHousePowerDialog())},this._openHousePowerDialog=()=>{this._housePowerDialogOpen=!0},this._closeHousePowerDialog=()=>{this._housePowerDialogOpen=!1},this._openEnergyFromPowerDialog=()=>{this._closeHousePowerDialog(),this._openDeviceDomain("energy")},this._handleHousePowerDialogKeydown=t=>{"Escape"===t.key&&(t.preventDefault(),this._closeHousePowerDialog())},this._toggleEditMode=()=>{if(!this._canManageDashboard())return this._editMode=!1,void this._rememberAreaEditMode(null);this._editMode=!this._editMode,this._rememberAreaEditMode(this._editMode&&"area"===this._selectedView?this._selectedArea:null)},this._clearCustomCardDragState=()=>{this._customCardDrag=null,this._customCardDragOver=null},this._clearGeneratedGroupDragState=()=>{this._generatedGroupDrag=null,this._generatedGroupDragOver=null},this._clearGeneratedCardDragState=()=>{this._generatedCardDrag=null,this._generatedCardDragOver=null},this._handleHomeNavigationKeydown=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._selectView("home"))},this._handleAreaNavToggle=()=>{this._isMobile&&this._toggleMobileNav()},this._handleOpenSettingsEvent=()=>{this._openDashboardSettings()},this._handleOpenHomeEvent=()=>{this._selectView("home")},this._openMobileAreaSwitcher=async()=>{this._isMobile&&await this._confirmDiscardSettings()&&(this._selectedView="home",this._selectedArea=null,this._resetAreaHeaderScrollState(!1),this._editMode=!1,this._rememberAreaEditMode(null),this._updateUrlArea(null),this._clearSettingsEditState(),this._mobileNavOpen=!0)},this._openMobileDeviceSwitcher=()=>{this._isMobile&&(this._navigateToDeviceDomain(null),[160,360,700].forEach(t=>{window.setTimeout(()=>{window.dispatchEvent(new CustomEvent("dwains-dashboard-next-toggle-devices-nav",{detail:{open:!0}}))},t)}))},this._handleSettingsConfigChanged=t=>{t.stopPropagation();const e=t.detail;this._pendingSettingsConfig=e?.config,this._settingsDirty=Boolean(this._pendingSettingsConfig),this._settingsSaveError=""},this._handleSettingsPageChanged=t=>{t.stopPropagation();const e=t.detail||{};this._settingsPageKey=e.page||"overview",this._settingsRestorePageKey=this._settingsPageKey,this._settingsRestoreAreaId=e.areaId||void 0,this._settingsPageTitle=e.title||"",this._settingsPageParentTitle=e.parentTitle||"",this._settingsPageDescription=e.description||"",this._setSettingsHistoryState(!0)},this._settingsBackToOverview=()=>{const t=this.renderRoot?.querySelector("dwains-dashboard-next-strategy-editor");t?._backToSettingsOverview?.()},this._settingsSecondaryAction=()=>{this._closeSettingsPage()},this._closeSettingsPage=async()=>{await this._confirmDiscardSettings()&&(this._clearSettingsEditState(),await this._selectView("home"))},this._openDashboardSettings=()=>{this._canManageDashboard()&&(this._setSettingsHistoryState(!0),this._resetAreaHeaderScrollState(!0),this._selectedArea=null,this._selectedView="settings",this._editMode=!1,this._rememberAreaEditMode(null),this._updateUrlArea(null),this._pendingSettingsConfig=void 0,this._settingsDirty=!1,this._settingsSaveError="",this._settingsEditorInitialized=!1,this._settingsPageKey="overview",this._settingsRestorePageKey="overview",this._settingsRestoreAreaId=void 0,this._settingsPageTitle="",this._settingsPageParentTitle="",this._settingsPageDescription="",this._setSettingsHistoryState(!0),this._closeMobileNav(),this._syncBottomNavAreaContext(),this.updateComplete.then(()=>this._scrollContentAreaToTop()))},this._openProfileSettings=()=>{M("/profile/general")},this._openNotificationsFromHomeShortcut=t=>{t.preventDefault(),t.stopPropagation(),this._closeMobileNav(),this._openNotifications()},this._openNotifications=()=>{this._showNotificationsUi()&&(this._notificationsOpen=!0,this._persistentNotificationsLoaded=!0,this._loadPersistentNotifications(!0),this._ensurePersistentNotificationsSubscription())},this._closeNotifications=()=>{this._notificationsOpen=!1},this._dismissPersistentNotification=async t=>{const e=this._persistentNotifications;this._persistentNotifications=e.filter(e=>e.notification_id!==t);try{await this.hass.callService("persistent_notification","dismiss",{notification_id:t}),this._notificationsError=""}catch(t){console.error("Failed to dismiss persistent notification:",t),this._persistentNotifications=e,this._notificationsError=this._t("error.notification_dismiss")}},this._dismissAllPersistentNotifications=async()=>{const t=this._persistentNotifications;this._persistentNotifications=[];try{await this.hass.callService("persistent_notification","dismiss_all"),this._notificationsError=""}catch(e){console.error("Failed to dismiss all persistent notifications:",e),this._persistentNotifications=t,this._notificationsError=this._t("error.notifications_dismiss_all")}},this._handleConfirmationKeydown=t=>{"Escape"===t.key&&(t.preventDefault(),this._resolveConfirmation(!1))}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(this.config=t,!this._selectedView){const e=Boolean(window.history.state?.[ne]),i=this._getUrlArea();if(e){this._selectedArea=null,this._selectedView="settings";const t=window.history.state?.[ne];t&&"object"==typeof t&&(this._settingsRestorePageKey="string"==typeof t.page?t.page:"overview",this._settingsRestoreAreaId="string"==typeof t.areaId?t.areaId:void 0)}else i&&t.areas?.some(t=>t.area_id===i)?(this._selectedArea=i,this._selectedView="area"):this._selectedView="home"}this._restoreAreaEditMode()}_getUrlArea(){try{return new URL(window.location.href).searchParams.get("dd_area")}catch{return null}}_updateUrlArea(t){try{const e=new URL(window.location.href);t?e.searchParams.set("dd_area",t):e.searchParams.delete("dd_area"),window.history.replaceState(window.history.state,"",e.toString())}catch{}}_setSettingsHistoryState(t){try{const e={...window.history.state&&"object"==typeof window.history.state?window.history.state:{}};t?e[ne]={page:this._settingsPageKey||"overview",areaId:this._settingsRestoreAreaId}:delete e[ne],window.history.replaceState(e,"",window.location.href)}catch{}}_syncBottomNavAreaContext(){const t=this.config?.areas?.find(t=>t.area_id===this._selectedArea),e="settings"===this._selectedView;window.dispatchEvent(new CustomEvent("dwains-dashboard-next-area-context-changed",{detail:{areaId:"area"===this._selectedView?this._selectedArea:null,icon:e?"mdi:tune-variant":t?l(t):"mdi:home",name:e?this._t("sidebar.dashboard_settings"):t?.name||this._t("sidebar.home"),view:this._selectedView||"home"}}))}_canManageDashboard(){return!I(this.hass,this.config?.settings)}_areaEditModeStorageKey(){return`dd-next-area-edit-mode:${this._getDashboardUrlPath()||"default"}`}_rememberAreaEditMode(t){try{const e=this._areaEditModeStorageKey();if(!t)return void window.sessionStorage.removeItem(e);window.sessionStorage.setItem(e,JSON.stringify({areaId:t,updatedAt:Date.now()}))}catch{}}_restoreAreaEditMode(){if(!this._canManageDashboard())return this._editMode=!1,void this._rememberAreaEditMode(null);try{const t=window.sessionStorage.getItem(this._areaEditModeStorageKey());if(!t)return;const e=JSON.parse(t),i="number"==typeof e.updatedAt&&Date.now()-e.updatedAt<=3e4;if(!e.areaId||!i)return void this._rememberAreaEditMode(null);"area"===this._selectedView&&this._selectedArea===e.areaId&&(this._editMode=!0)}catch{this._rememberAreaEditMode(null)}}_showNotificationsUi(){return!1!==this.config?.settings?.show_notifications}_showSuggestedFavoritesUi(){return!1!==this.config?.settings?.show_suggested_favorites}_hasUsagePredictionComponent(){return Boolean(this.hass?.config?.components?.includes("usage_prediction"))}_isFavoriteEntityVisible(t){const e=this.hass?.states?.[t],i=this.hass?.entities?.[t];return Boolean(e&&"unavailable"!==e.state&&"unknown"!==e.state&&!i?.hidden_by&&!i?.hidden)}_getManualFavoriteEntities(){const t=new Set;return(this.config?.favorites||[]).filter(e=>!t.has(e)&&(t.add(e),this._isFavoriteEntityVisible(e)))}_getEffectiveFavoriteEntities(){const t=this._getManualFavoriteEntities();if(!this._showSuggestedFavoritesUi())return t;const e=Math.max(8,t.length);if(t.length>=e)return t.slice(0,e);const i=new Set(t),a=this._suggestedFavoriteEntities.filter(t=>!i.has(t)&&(!!this._isFavoriteEntityVisible(t)&&(i.add(t),!0)));return[...t,...a].slice(0,e)}_ensureFavoriteSuggestionsFeature(){if(this.hass&&this._showSuggestedFavoritesUi()&&!this._favoriteSuggestionsLoaded&&!this._favoriteSuggestionsLoading)return this._hasUsagePredictionComponent()?void(this._getManualFavoriteEntities().length>=8||this._loadFavoriteSuggestions()):(this._favoriteSuggestionsLoaded=!0,void(this._suggestedFavoriteEntities=[]))}async _loadFavoriteSuggestions(){if(this.hass&&!this._favoriteSuggestionsLoading){this._favoriteSuggestionsLoading=!0;try{const t=await this.hass.callWS({type:"usage_prediction/common_control"});this._suggestedFavoriteEntities=Array.isArray(t?.entities)?t.entities.filter(t=>"string"==typeof t):[]}catch(t){console.debug("Dwains Dashboard: favorite suggestions are not available.",t),this._suggestedFavoriteEntities=[]}finally{this._favoriteSuggestionsLoading=!1,this._favoriteSuggestionsLoaded=!0}}}_ensurePersistentNotificationsFeature(){this._showNotificationsUi()&&this.hass&&!this._persistentNotificationsLoaded&&(this._persistentNotificationsLoaded=!0,this._loadPersistentNotifications(!1),this._ensurePersistentNotificationsSubscription())}static getStubConfig(){return{type:"custom:dwains-dashboard-next-layout-card",areas:[],devices:[],entities:[],floors:[],settings:{},favorites:[]}}connectedCallback(){super.connectedCallback(),this._syncThemeAttribute(),this._loadMobileEntityLayoutPreference(),this._loadAreaSidebarWidthPreference(),this._loadAreaSidebarCollapsedPreference(),this._checkMobile(),this._setupEventListeners(),window.addEventListener("dwains-dashboard-next-toggle-area-nav",this._handleAreaNavToggle),window.addEventListener("dwains-dashboard-next-open-settings",this._handleOpenSettingsEvent),window.addEventListener("dwains-dashboard-next-open-home",this._handleOpenHomeEvent),this._startTimeUpdate(),this._initializeObservers(),oe(this),requestAnimationFrame(()=>this._restorePendingRoomDragScroll()),window.setTimeout(()=>this._restorePendingRoomDragScroll(),120),window.setTimeout(()=>this._restorePendingRoomDragScroll(),420)}willUpdate(t){if(super.willUpdate(t),t.has("config")&&this.hass&&(this._clearEntityCardsCache(),T(this.hass,this.config?.settings),!this._canManageDashboard()&&this._editMode&&(this._editMode=!1,this._rememberAreaEditMode(null))),t.has("hass")&&this.hass){this._syncThemeAttribute(),T(this.hass,this.config?.settings),this._syncBottomNavAreaContext(),this._reconcileOptimisticEntityStates(),!this._canManageDashboard()&&this._editMode&&(this._editMode=!1,this._rememberAreaEditMode(null));const e=t.get("hass");e&&this._shouldUpdateEntities(e,this.hass)&&this._invalidateChangedAreaCaches(e,this.hass)}}_scheduleHeaderStatusScrollState(){void 0!==this._headerStatusScrollRaf&&cancelAnimationFrame(this._headerStatusScrollRaf),this._headerStatusScrollRaf=requestAnimationFrame(()=>{this._headerStatusScrollRaf=void 0,this._updateHeaderStatusScrollState()})}_updateHeaderStatusScrollState(){const t=this.shadowRoot?.querySelector(".header-status-scroll");if(!t)return void((this._headerStatusCanScrollLeft||this._headerStatusCanScrollRight)&&(this._headerStatusCanScrollLeft=!1,this._headerStatusCanScrollRight=!1));const e=Math.max(0,t.scrollWidth-t.clientWidth),i=t.scrollLeft>1,a=t.scrollLeft<e-1;this._headerStatusCanScrollLeft!==i&&(this._headerStatusCanScrollLeft=i),this._headerStatusCanScrollRight!==a&&(this._headerStatusCanScrollRight=a)}_scrollHeaderStatus(t){const e=this.shadowRoot?.querySelector(".header-status-scroll");if(!e)return;const i=e.querySelector(".status-card-compact");if(!i)return;const a=getComputedStyle(e),o=Number.parseFloat(a.columnGap||a.gap||"0")||0,r=i.getBoundingClientRect().width+o;e.scrollBy({left:t*r,behavior:"smooth"})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("dwains-dashboard-next-toggle-area-nav",this._handleAreaNavToggle),window.removeEventListener("dwains-dashboard-next-open-settings",this._handleOpenSettingsEvent),window.removeEventListener("dwains-dashboard-next-open-home",this._handleOpenHomeEvent),window.removeEventListener("pointermove",this._handleSidebarResizeMove),window.removeEventListener("pointerup",this._handleSidebarResizeEnd),window.removeEventListener("pointercancel",this._handleSidebarResizeEnd),this._persistentNotificationsUnsub?.(),this._persistentNotificationsUnsub=void 0,this._cleanupEventListeners(),this._cleanupObservers(),this._timeInterval&&clearInterval(this._timeInterval),this._homeSummariesRefreshInterval&&(clearInterval(this._homeSummariesRefreshInterval),this._homeSummariesRefreshInterval=void 0),this._areaHeaderScrollRaf&&(cancelAnimationFrame(this._areaHeaderScrollRaf),this._areaHeaderScrollRaf=void 0),void 0!==this._headerStatusScrollRaf&&(cancelAnimationFrame(this._headerStatusScrollRaf),this._headerStatusScrollRaf=void 0),void 0!==this._areaSidebarRestoreRaf&&(cancelAnimationFrame(this._areaSidebarRestoreRaf),this._areaSidebarRestoreRaf=void 0),void 0!==this._optimisticCleanupTimer&&(window.clearTimeout(this._optimisticCleanupTimer),this._optimisticCleanupTimer=void 0),this._progressiveRenderCancel&&(this._progressiveRenderCancel(),this._progressiveRenderCancel=void 0),this._confirmationResolve?.(!1),this._confirmationResolve=void 0,this._confirmationDialog=null}_setupEventListeners(){window.addEventListener("resize",this._handleResize),window.addEventListener("scroll",this._handleWindowScroll,{passive:!0}),this.addEventListener("show-more-info",this._handleShowMoreInfo)}_cleanupEventListeners(){window.removeEventListener("resize",this._handleResize),window.removeEventListener("scroll",this._handleWindowScroll),this.removeEventListener("show-more-info",this._handleShowMoreInfo)}_isDesktopAreaSidebarCollapsed(){return this._areaSidebarCollapsed&&!this._isMobile}_restoreAreaSidebarScroll(){this._isMobile||this._isDesktopAreaSidebarCollapsed()||(void 0!==this._areaSidebarRestoreRaf&&cancelAnimationFrame(this._areaSidebarRestoreRaf),this._areaSidebarRestoreRaf=requestAnimationFrame(()=>{this._areaSidebarRestoreRaf=void 0;const t=this.shadowRoot?.querySelector(".sidebar");if(!t)return;const e=Math.max(0,t.scrollHeight-t.clientHeight),i=Math.min(this._areaSidebarScrollTop,e);Math.abs(t.scrollTop-i)>1&&(t.scrollTop=i)}))}_restorePendingRoomDragScroll(){if("area"!==this._selectedView||!this._selectedArea)return!1;let t=null;try{const e=window.sessionStorage.getItem("dd-next-room-dnd-scroll");e&&(t=JSON.parse(e))}catch{return!1}if(!t||t.expiresAt<Date.now()||t.areaId!==this._selectedArea||t.pathname!==window.location.pathname){try{window.sessionStorage.removeItem("dd-next-room-dnd-scroll")}catch{}return!1}const e=()=>{const e=this.shadowRoot?.querySelector(".content-area");e&&Math.abs(e.scrollTop-t.contentScrollTop)>1&&(e.scrollTop=t.contentScrollTop),(Math.abs(window.scrollX-t.windowScrollX)>1||Math.abs(window.scrollY-t.windowScrollY)>1)&&window.scrollTo(t.windowScrollX,t.windowScrollY)};return requestAnimationFrame(e),window.setTimeout(e,90),window.setTimeout(e,240),window.setTimeout(e,600),window.setTimeout(e,1200),window.setTimeout(()=>{e();try{window.sessionStorage.removeItem("dd-next-room-dnd-scroll")}catch{}},1800),!0}_scrollContentAreaToTop(){const t=this.shadowRoot?.querySelector(".content-area"),e=new Set;t&&e.add(t);(t=>{let i=t;for(;i;){if(i instanceof HTMLElement&&e.add(i),i.parentNode){i=i.parentNode;continue}const t=i.getRootNode();i=t instanceof ShadowRoot?t.host:null}})(t||this);for(const t of e)t.scrollTop=0,t.scrollLeft=0;const i=document.scrollingElement;i&&(i.scrollTop=0,i.scrollLeft=0),document.documentElement.scrollTop=0,document.documentElement.scrollLeft=0,document.body.scrollTop=0,document.body.scrollLeft=0,window.scrollTo(0,0)}_resetAreaHeaderScrollState(t=!1){this._areaHeaderScrollRaf&&(cancelAnimationFrame(this._areaHeaderScrollRaf),this._areaHeaderScrollRaf=void 0),t&&this._scrollContentAreaToTop(),this._pendingAreaScrollTop=0,this._areaHeaderStuck&&(this._areaHeaderStuck=!1),this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1),this._lastAreaScrollTop=0,this._areaScrollUpDistance=0}_resetAreaHeaderAfterNavigation(){this._restorePendingRoomDragScroll()||(this._resetAreaHeaderScrollState(!0),requestAnimationFrame(()=>{this._restorePendingRoomDragScroll()||this._resetAreaHeaderScrollState(!0)}),requestAnimationFrame(()=>requestAnimationFrame(()=>{this._restorePendingRoomDragScroll()||this._resetAreaHeaderScrollState(!0)})),window.setTimeout(()=>{this._restorePendingRoomDragScroll()||this._resetAreaHeaderScrollState(!0)},80),window.setTimeout(()=>{this._restorePendingRoomDragScroll()||this._resetAreaHeaderScrollState(!0)},220))}_resetProgressiveMobileRender(){this._renderAllMobileHomeAreas=!this._isMobile,this._renderAllMobileAreaEntities=!this._isMobile,this._progressiveRenderCancel&&(this._progressiveRenderCancel(),this._progressiveRenderCancel=void 0)}_scheduleProgressiveMobileRender(){if(!this._isMobile)return this._renderAllMobileHomeAreas=!0,void(this._renderAllMobileAreaEntities=!0);if(this._renderAllMobileHomeAreas&&this._renderAllMobileAreaEntities)return;if(this._progressiveRenderCancel)return;const t=()=>{this._progressiveRenderCancel=void 0,this._renderAllMobileHomeAreas=!0,this._renderAllMobileAreaEntities=!0},e=window.requestIdleCallback,i=window.cancelIdleCallback;if(e&&i){const a=e(t,{timeout:450});this._progressiveRenderCancel=()=>i(a)}else{const e=window.setTimeout(t,90);this._progressiveRenderCancel=()=>window.clearTimeout(e)}}_updateAreaHeaderScrollState(){const t=this.shadowRoot?.querySelector(".content-area");if(!this._isMobile||"area"!==this._selectedView||!t)return this._areaHeaderStuck&&(this._areaHeaderStuck=!1),void(this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1));const e=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||t.scrollTop||0;this._setAreaHeaderStuckForScroll(e,!1)}_setAreaHeaderStuckForScroll(t,e){if(!this._isMobile||"area"!==this._selectedView)return this._areaHeaderStuck&&(this._areaHeaderStuck=!1),this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1),this._lastAreaScrollTop=0,void(this._areaScrollUpDistance=0);if(!e){this._lastAreaScrollTop=t,this._areaScrollUpDistance=0;const e=t>76;return this._areaHeaderStuck!==e&&(this._areaHeaderStuck=e),void(this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1))}const i=t-this._lastAreaScrollTop;if(this._lastAreaScrollTop=t,t<=2)return this._areaScrollUpDistance=0,this._areaHeaderStuck&&(this._areaHeaderStuck=!1),void(this._areaHeaderRevealed&&(this._areaHeaderRevealed=!1));i<-1?this._areaScrollUpDistance+=Math.abs(i):i>1&&(this._areaScrollUpDistance=0);let a=this._areaHeaderStuck,o=this._areaHeaderRevealed;i>1&&t>76&&(a=!0,o=!1),this._areaHeaderStuck&&this._areaScrollUpDistance>=18&&t>88&&(o=!0),t<=38&&(a=!1,o=!1),this._areaHeaderStuck!==a&&(this._areaHeaderStuck=a),this._areaHeaderRevealed!==o&&(this._areaHeaderRevealed=o)}_checkMobile(){const t=this._isMobile;this._isMobile=window.innerWidth<=768,t!==this._isMobile&&(this._mobileNavOpen=!1)}_startTimeUpdate(){this._updateTime(),this._timeInterval=window.setInterval(()=>this._updateTime(),6e4)}_updateTime(){const t=new Date;this._currentTime=t.toLocaleTimeString(this.hass?.language||"en",{hour:"2-digit",minute:"2-digit",hour12:!1}),this._currentDate=t.toLocaleDateString(this.hass?.language||"en",{weekday:"short",day:"numeric",month:"short"})}_loadMobileEntityLayoutPreference(){try{const t=window.localStorage.getItem("dd-next-mobile-entity-layout"),e=window.localStorage.getItem("dd-next-mobile-home-areas-layout"),i=window.localStorage.getItem("dd-next-mobile-home-devices-layout"),a=window.localStorage.getItem("dd-next-mobile-home-favorites-layout"),o=window.localStorage.getItem("dd-next-mobile-home-cameras-layout");"rail"!==t&&"grid"!==t||(this._mobileEntityLayout=t),"rail"!==e&&"grid"!==e||(this._mobileHomeAreasLayout=e),"rail"!==i&&"grid"!==i||(this._mobileHomeDevicesLayout=i),"rail"!==a&&"grid"!==a||(this._mobileHomeFavoritesLayout=a),"rail"!==o&&"grid"!==o||(this._mobileHomeCamerasLayout=o)}catch{}}_loadAreaSidebarWidthPreference(){try{const t=window.localStorage.getItem(se);if(!t)return;const e=Number(t);Number.isFinite(e)&&(this._areaSidebarWidth=this._clampAreaSidebarWidth(e))}catch{}}_saveAreaSidebarWidthPreference(t){try{window.localStorage.setItem(se,String(Math.round(t)))}catch{}}_loadAreaSidebarCollapsedPreference(){try{this._areaSidebarCollapsed="true"===window.localStorage.getItem(ce)}catch{}}_saveAreaSidebarCollapsedPreference(t){try{window.localStorage.setItem(ce,t?"true":"false")}catch{}}_clampAreaSidebarWidth(t){const e=Math.max(de,Math.min(660,Math.floor(.46*window.innerWidth)));return Math.round(Math.max(de,Math.min(e,t)))}_initializeObservers(){this._resizeObserver=new ResizeObserver(()=>{this._debouncedUpdate()}),this.shadowRoot&&this._resizeObserver.observe(this.shadowRoot.host)}_cleanupObservers(){this._resizeObserver&&this._resizeObserver.disconnect()}_hasAreaClimateDisplayMetadataChanges(t,e){const i=new Set([...Object.keys(t.areas||{}),...Object.keys(e.areas||{})]);for(const a of i){const i=t.areas?.[a],o=e.areas?.[a],r=i?.temperature_entity_id,n=o?.temperature_entity_id,s=i?.humidity_entity_id,c=o?.humidity_entity_id;if(r!==n||s!==c)return!0;const d=new Set([r,n,s,c].filter(Boolean));for(const i of d){const a=t.entities?.[i],o=e.entities?.[i];if(a?.display_precision!==o?.display_precision)return!0}}return!1}shouldUpdate(t){if(!this.config||!this.hass)return!1;if(t.has("config")||t.has("_selectedView")||t.has("_selectedArea")||t.has("_headerExpanded")||t.has("_currentTime"))return!0;if(t.has("hass")){const e=t.get("hass");if(!e)return!0;if(this._hasUpdateEntityChanges(e,this.hass))return!0;if(this._hasAreaClimateDisplayMetadataChanges(e,this.hass))return!0;return this._getRelevantEntities().some(t=>e.states[t]!==this.hass.states[t])}return!0}updated(t){if(super.updated(t),this._scheduleHeaderStatusScrollState(),t.has("hass")&&this.hass){const e=t.get("hass");e&&this._updateEntityCards(e,this.hass),this._headerExpanded&&this._renderFavoriteTileCards(),this._ensurePersistentNotificationsFeature(),this._homeSummariesLoaded||(this._homeSummariesLoaded=!0,this._loadHomeAssistantSummaries(),this._homeSummariesRefreshInterval=window.setInterval(()=>{this._loadHomeAssistantSummaries()},3e5)),this._ensureFavoriteSuggestionsFeature()}t.has("config")&&(this._showNotificationsUi()?this._ensurePersistentNotificationsFeature():(this._notificationsOpen=!1,this._persistentNotificationsLoaded=!1,this._persistentNotifications=[]),this._showSuggestedFavoritesUi()?this._ensureFavoriteSuggestionsFeature():(this._favoriteSuggestionsLoaded=!1,this._favoriteSuggestionsLoading=!1,this._suggestedFavoriteEntities=[])),(t.has("_selectedView")||t.has("_selectedArea")||t.has("config"))&&(this._syncBottomNavAreaContext(),this._restoreAreaSidebarScroll()),t.has("_isMobile")&&this._restoreAreaSidebarScroll(),t.has("_headerExpanded")&&this._headerExpanded&&this.hass&&setTimeout(()=>{this._renderFavoriteTileCards()},0),t.has("_selectedView")||t.has("_selectedArea")?(this._resetProgressiveMobileRender(),"area"===this._selectedView?this._restorePendingRoomDragScroll()||this._resetAreaHeaderAfterNavigation():this._resetAreaHeaderScrollState(!1)):t.has("config")&&"area"===this._selectedView&&this._restorePendingRoomDragScroll(),(t.has("_selectedView")||t.has("_selectedArea")||t.has("_isMobile")||this._isMobile&&(!this._renderAllMobileHomeAreas||!this._renderAllMobileAreaEntities))&&this._scheduleProgressiveMobileRender(),"settings"===this._selectedView&&this._syncSettingsEditor()}_syncThemeAttribute(){this.toggleAttribute("data-theme-dark",j(this.hass,this))}_getRelevantEntities(){if(!this.config)return[];if("settings"===this._selectedView)return[];if("area"===this._selectedView&&this._selectedArea){return this._getAreaEntities(this._selectedArea).map(t=>t.entity_id)}return this.config.entities?.map(t=>t.entity_id)||[]}render(){if(!this.hass||!this.config)return s`<div class="loading">${this._t("common.loading")}</div>`;const t=this._isMobile&&this._getNowPlayingPlayers().length>0,e={"layout-container":!0,"has-floating-now-playing":t,"sidebar-resizing":this._isResizingSidebar,"sidebar-collapsed":this._isDesktopAreaSidebarCollapsed()};return s`
      <div
        class=${d(e)}
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
      ${t?this._renderNowPlayingBar(!0):c}
      ${this._renderToast()}
      ${this._renderConfirmationDialog()}
      ${this._renderHousePowerDialog()}
      ${this._renderNotificationsPanel()}
    `}_renderSidebarResizeHandle(){const t=this._isDesktopAreaSidebarCollapsed();return s`
      <button
        class="sidebar-collapse-toggle ${t?"is-collapsed":""}"
        type="button"
        title=${t?this._t("sidebar.show"):this._t("sidebar.collapse")}
        aria-label=${t?this._t("sidebar.show"):this._t("sidebar.collapse")}
        @click=${this._toggleAreaSidebarCollapsed}
      >
        <ha-icon icon=${t?"mdi:chevron-right":"mdi:chevron-left"}></ha-icon>
      </button>
      ${t?c:s`
      <button
        class="sidebar-resize-handle"
        type="button"
        role="separator"
        aria-label=${this._t("sidebar.resize")}
        aria-orientation="vertical"
        aria-valuemin=${de}
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
    `:c}_nowPlayingShown(){return L(O(this.config?.settings?.now_playing_bar),this._selectedView)}_getNowPlayingPlayers(){return this.hass&&this._nowPlayingShown()?this._nowPlayingPlayers(this.hass,this.hass.states,this.config,P(this.hass),this._currentTime):[]}_renderNowPlayingBar(t){const e=this._getNowPlayingPlayers();return e.length?s`
      <dwains-dashboard-next-now-playing class=${t?"floating":"inline"} .hass=${this.hass} .players=${e} .floating=${t}></dwains-dashboard-next-now-playing>
    `:c}_renderNotificationsPanel(){if(!this._showNotificationsUi())return c;const t=this._persistentNotifications.length,e=t>0;return s`
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
              ${e?`${t} ${this._t(1===t?"home.notification":"home.notifications").toLocaleLowerCase()}`:this._t("home.notifications_description")}
            </div>
          </div>
          <div class="notifications-actions">
            ${e?s`
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
          ${this._notificationsLoading&&!e?s`
                <div class="notifications-loading">
                  <ha-icon icon="mdi:loading"></ha-icon>
                  <span>${this._t("home.notifications_loading")}</span>
                </div>
              `:this._notificationsError?s`
                  <div class="notifications-error">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    <span>${this._notificationsError}</span>
                  </div>
                `:e?this._persistentNotifications.map(t=>this._renderPersistentNotification(t)):s`
                    <div class="notifications-empty">
                      <ha-icon icon="mdi:bell-check-outline"></ha-icon>
                      <span>${this._t("home.notifications_empty")}</span>
                    </div>
                  `}
        </div>
      </section>
    `}_renderPersistentNotification(t){return s`
      <article class="notification-row">
        <div class="notification-icon">
          <ha-icon icon="mdi:bell-badge-outline"></ha-icon>
        </div>
        <div class="notification-copy">
          <div class="notification-title">${t.title||this._t("home.notification")}</div>
          <div class="notification-message">${t.message}</div>
          ${t.created_at?s`
            <div class="notification-date">${this._formatNotificationDate(t.created_at)}</div>
          `:c}
        </div>
        <button
          class="notification-dismiss"
          type="button"
          title=${this._t("common.dismiss")}
          @click=${()=>this._dismissPersistentNotification(t.notification_id)}
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
      </article>
    `}_renderSidebar(){const t={sidebar:!0,open:this._isMobile&&this._mobileNavOpen},e=this._showNotificationsUi()&&this._persistentNotifications.length>0;return s`
      <nav class=${d(t)} @scroll=${this._handleSidebarScroll}>
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
            class="area-button home-button ${"home"===this._selectedView?"selected":""} ${e?"has-notifications":""}"
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
    `}_renderHomeNotificationShortcut(){if(!this._showNotificationsUi())return c;const t=this._persistentNotifications.length;if(!t)return c;const e=`${t} persistent ${1===t?"notification":"notifications"}`,i=t>99?"99+":String(t);return s`
      <button
        class="home-notification-shortcut"
        type="button"
        title=${e}
        aria-label=${e}
        @click=${this._openNotificationsFromHomeShortcut}
      >
        <ha-icon icon="mdi:bell-outline"></ha-icon>
        <span class="home-notification-count">${i}</span>
      </button>
    `}_groupAreasByFloor(t){const e={};return t.forEach(t=>{let i="no_floor";if(t.floor_id&&this.config?.floors){const e=this.config.floors.find(e=>e.floor_id===t.floor_id);e?.name&&(i=e.name)}e[i]||(e[i]=[]),e[i].push(t)}),e}_getVisibleSortedAreas(){return this.config?.areas?p(this.config.areas,this.config.areas_display,yt(this.hass)):[]}_renderAreaButtons(){if(!this.config?.areas)return c;const t=this._getVisibleSortedAreas(),e=this._groupAreasByFloor(t),i=[...this.config.floors||[]],a=this.config.floors_display?.order||[];if(a.length){const t=new Map(a.map((t,e)=>[t,e]));i.sort((e,i)=>(t.get(e.floor_id)??Number.MAX_SAFE_INTEGER)-(t.get(i.floor_id)??Number.MAX_SAFE_INTEGER))}const o=new Map(i.map((t,e)=>[t.name,e])),r=new Intl.Collator(yt(this.hass),{numeric:!0,sensitivity:"base"}),n=Object.entries(e).sort(([t],[e])=>{if("no_floor"===t)return 1;if("no_floor"===e)return-1;const i=o.get(t),a=o.get(e);return void 0!==i||void 0!==a?(i??Number.MAX_SAFE_INTEGER)-(a??Number.MAX_SAFE_INTEGER):r.compare(t,e)});return n.map(([t,e])=>{const i="no_floor"===t?this.hass.localize("ui.components.area-picker.no_floor")||this._t("home.unassigned_spaces"):t;return s`
        <div class="floor-section">
          <div class="floor-header">
            <h3>${i}</h3>
          </div>
          <div class="floor-areas">
            ${m(e,t=>t.area_id,t=>this._renderAreaButton(t))}
          </div>
        </div>
      `})}_sidebarAreaBadgeLimit(t=Number.MAX_SAFE_INTEGER){const e=Math.max(0,this._areaSidebarWidth-16),i=Math.max(0,e-14-74-9);if(t<=Math.max(1,Math.floor((i+4)/48)))return Math.min(8,t);const a=Math.max(1,Math.floor(Math.max(0,i-15-4)/48));return Math.min(8,a)}_renderAreaButton(t){const e=this._getCachedAreaData(t),i=this._selectedArea===t.area_id,a=Boolean(t.picture),o=this._getAreaStatusBadges(e),r=this._sidebarAreaBadgeLimit(o.length),n=o.length>r,d=o.slice(0,r),p=[e.temperature,e.humidity,e.wattage].filter(Boolean).join(" • ");return s`
      <button
        class="area-button room-area-button ${i?"selected":""} ${a?"has-picture":"has-icon"}"
        @click=${()=>this._selectArea(t.area_id)}
      >
        <div class="area-media" aria-hidden="true">
          ${a?s`<div class="area-media-picture" style=${`background-image: url('${t.picture}');`}></div>`:s`
                <div class="area-media-icon">
                  <ha-icon icon=${l(t)}></ha-icon>
                </div>
              `}
        </div>

        <div class="area-content">
          <div class="area-top-section">
            <div class="area-name">${t.name}</div>
            ${p?s`
              <div class="area-sensors">${p}</div>
            `:c}
          </div>

          <div class="area-info-badges">
            ${d.map(e=>"light"===e.domain?s`
                    <span
                      class="info-badge ${e.className} clickable"
                      style=${`--badge-color: ${e.color}; --area-badge-color: ${e.color};`}
                      @click=${e=>this._handleLightToggle(e,t.area_id)}
                    >
                      <ha-icon icon=${e.icon}></ha-icon>
                      <span class="badge-count">${e.count}</span>
                    </span>
                  `:s`
                    <span
                      class="info-badge ${e.className}"
                      style=${`--badge-color: ${e.color}; --area-badge-color: ${e.color};`}
                    >
                      <ha-icon icon=${e.icon}></ha-icon>
                      <span class="badge-count">${e.count}</span>
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
    `}_renderGlobalHeader(){const t={"global-header":!0,compact:this._headerCompact,expanded:this._headerExpanded&&"area"!==this._selectedView,"room-context":"area"===this._selectedView,mobile:this._isMobile},e=this._getEffectiveFavoriteEntities().length;return s`
      <header class=${d(t)}>
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

        ${e&&"area"!==this._selectedView?s`
          <button
            class="area-favorites-toggle"
            type="button"
            aria-expanded=${this._headerExpanded?"true":"false"}
            @click=${this._toggleHeader}
          >
            <span class="area-favorites-toggle-main">
              <ha-icon icon="mdi:star"></ha-icon>
              <span>${this._t("favorites.title")}</span>
              <span class="area-favorites-count">(${e})</span>
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
    `}_renderWeatherDisplay(){if(!this._weatherDisplayEnabled())return c;const t=this._getWeatherEntity();if(!t)return c;const e=this._formatWeatherTemperature(t);return e?s`
      <div
        class="weather-compact"
        title=${this._weatherTitle(t)}
        aria-label=${this._weatherTitle(t)}
        @click=${()=>this._showMoreInfo(t.entity_id)}
      >
        <div class="weather-icon-compact">
          <ha-icon icon=${t.attributes.icon||"mdi:weather-cloudy"}></ha-icon>
        </div>
        <div class="weather-temp-compact">
          ${e}
        </div>
      </div>
    `:c}_renderHeaderStatusCards(){const t=this._getStatusDomains(),e=["header-status-section",this._headerStatusCanScrollLeft?"can-scroll-left":"",this._headerStatusCanScrollRight?"can-scroll-right":""].filter(Boolean).join(" ");return s`
      <div class=${e}>
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
        >
          ${m(t,t=>`${t.domain}-${t.deviceClass||t.name}`,t=>s`
              <div
                class="status-card-compact ${t.domain} ${t.value?"has-value":""} header-card"
                style=${this._domainStatusStyle(t.domain,t.deviceClass)}
                @click=${()=>this._handleStatusCardClick(t)}
                data-domain=${t.domain}
                title=${this._statusCardTitle(t)}
                aria-label=${this._statusCardTitle(t)}
              >
                <div class="status-card-icon-compact">
                  <ha-icon icon=${t.icon}></ha-icon>
                  ${t.count>0?s`
                    <div class="status-card-badge-compact">${t.count}</div>
                  `:c}
                </div>
                <div class="status-card-title-compact">${t.value||this._statusCardTitle(t)}</div>
                ${t.value?s`<div class="status-card-subtitle-compact">${"wattage"===t.domain?this._t("entity.power_usage"):t.name}</div>`:c}
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
    `}_domainStatusStyle(t,e){return`--status-color: ${this._statusColor(t,e)};`}_isAlarmActive(){const t=this._getAlarmEntity();return!!t&&["armed_away","armed_home","armed_night","armed_vacation","arming","pending","triggered"].includes(String(t.state||"").toLowerCase())}_binarySensorBadgeColor(t){return["motion","window","door","opening","garage_door"].includes(String(t||""))&&this._isAlarmActive()?h("alarm_control_panel"):h("binary_sensor",t)}_statusColor(t,e){return"binary_sensor"===t?this._binarySensorBadgeColor(e):h(t,e)}_isUrgentStatus(t,e){return this._statusColor(t,e)===h("alarm_control_panel")}_getAreaStatusBadges(t){const e=[],i=(i,a=i)=>{const o=t.domains[i]?.on||0;o&&e.push({key:i,className:a,domain:i,icon:b(i),count:o,color:h(i)})};i("light"),i("switch"),i("cover"),i("climate"),i("media_player"),i("fan"),i("lock");const a=t.domains.motion?.on||0;a&&e.push({key:"binary_sensor:motion",className:"motion",domain:"binary_sensor",deviceClass:"motion",icon:g("binary_sensor","motion"),count:a,color:this._binarySensorBadgeColor("motion")});const o=new Map;t.alerts.forEach(t=>{const e=t.deviceClass||"problem";o.set(e,(o.get(e)||0)+1)});const r=["window","door","moisture","smoke"];return[...o.entries()].sort(([t],[e])=>{const i=r.indexOf(t),a=r.indexOf(e);return(-1===i?Number.MAX_SAFE_INTEGER:i)-(-1===a?Number.MAX_SAFE_INTEGER:a)||t.localeCompare(e)}).forEach(([t,i])=>{e.push({key:`binary_sensor:${t}`,className:`binary-${t}`,domain:"binary_sensor",deviceClass:t,icon:u(t),count:i,color:this._binarySensorBadgeColor(t)})}),e.map((t,e)=>({badge:t,index:e})).sort((t,e)=>{const i=this._isUrgentStatus(t.badge.domain,t.badge.deviceClass);return i!==this._isUrgentStatus(e.badge.domain,e.badge.deviceClass)?i?-1:1:t.index-e.index}).map(({badge:t})=>t)}_statusCardTitle(t){if("cover"===t.domain)return t.name;const e=this._statusCardActiveLabel(t);return e?1===t.count?e.singular:e.plural:t.name}_statusLabel(t,e,i=!0){const a=i?this._tp(t,e):this._t(t,{count:e}),o=String(e);return a.startsWith(o)?a.slice(o.length).trim():a}_statusPair(t,e=!0){return{singular:this._statusLabel(t,1,e),plural:this._statusLabel(t,2,e)}}_statusCardActiveLabel(t){if("person"!==t.domain){if("light"===t.domain)return this._statusPair("status.light_on");if("switch"===t.domain)return this._statusPair("status.switch_on");if("cover"===t.domain)return this._statusPair("status.cover_open");if("fan"===t.domain)return this._statusPair("status.fan_on");if("lock"===t.domain)return this._statusPair("status.lock_unlocked");if("climate"===t.domain)return this._statusPair("status.climate_active");if("media_player"===t.domain)return this._statusPair("status.media_playing");if("vacuum"===t.domain)return this._statusPair("status.vacuum_cleaning");if("alarm_control_panel"===t.domain)return this._statusPair("status.alarm_armed");if("binary_sensor"===t.domain)switch(t.deviceClass){case"door":return this._statusPair("status.door_open");case"window":return this._statusPair("status.window_open");case"opening":return this._statusPair("status.opening_open");case"motion":return this._statusPair("status.motion_detected",!1);case"smoke":return this._statusPair("status.smoke_detected",!1);case"gas":return this._statusPair("status.gas_detected",!1);case"moisture":return this._statusPair("status.moisture_detected",!1);case"occupancy":return this._statusPair("status.occupancy_detected",!1);case"presence":return this._statusPair("status.presence_detected",!1);case"tamper":return this._statusPair("status.tamper_detected",!1);case"vibration":return this._statusPair("status.vibration_detected",!1);case"safety":return this._statusPair("status.safety_active",!1);default:return}}}_entityAreaName(t){const e=this.config?.entities?.find(e=>e.entity_id===t),i=e?.device_id?this.config?.devices?.find(t=>t.device_id===e.device_id):null,a=e?.area_id||i?.area_id||this.hass?.entities?.[t]?.area_id;return this.config?.areas?.find(t=>t.area_id===a)?.name}_renderHomeView(){const t=this._getVisibleHomeSections();return s`
      <div class="home-view">
        ${this._renderHomeWelcome()}
        ${this._isMobile?c:this._renderNowPlayingBar(!1)}
        ${t.map(t=>this._renderHomeSection(t))}
      </div>
    `}_getHomeSectionsOrder(){return W(this.config?.settings?.home_sections_order)}_getVisibleHomeSections(){const t=new Set(U(this.config?.settings?.home_sections_hidden)),e=this._isDesktopAreaSidebarCollapsed();return this._getHomeSectionsOrder().filter(i=>!t.has(i)||e&&"areas"===i)}_homeInformationCardVisible(t){return!new Set(V(this.config?.settings?.home_information_cards_hidden)).has(t)}_renderHomeSection(t){switch(t){case"summaries":return this._renderHomeSummaries();case"cameras":return this._renderHomeCameras();case"areas":return this._renderMobileHomeAreas();case"devices":return this._renderHomeStatusCards();case"todos":return this._renderHomeTodos();case"custom_cards":return this._renderHomeCustomCards();case"favorites":return this._renderFavorites();case"scenes":return this._renderHomeScenes();default:return c}}_getHomeSceneItems(){return G(K(this.config?.settings?.home_scenes),this.hass?.states||{},P(this.hass),!1!==this.config?.settings?.hide_unavailable_entities)}_homeSceneName(t){return this.hass?.states[t]?.attributes?.friendly_name||P(this.hass)[t]?.name||t}_scriptLastRunText(t){const e=Date.parse(t?.attributes?.last_triggered||"");return Number.isFinite(e)?this._formatRelativeTime(e):this._t("scenes.not_run")}_renderHomeScenes(){const t=this._getHomeSceneItems();if(!t.length)return c;const e=this._t("home_section.scenes.label");return s`
      <section class="home-summaries-section home-scenes-section">
        <div class="home-status-heading">
          <ha-icon icon=${B.scenes.icon}></ha-icon>
          <span>${e}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <span class="mobile-layout-toggle active static"><ha-icon icon=${B.scenes.icon}></ha-icon></span>
            <span class="mobile-section-title-label">${e}</span>
          </div>
        </div>
        <div class="home-summary-list">
          ${t.map(t=>{const e=this.hass.states[t.entityId];if(!e)return c;const i=this._homeSceneName(t.entityId),a=t.unavailable?this._t("common.unavailable"):"scene"===t.domain?this._sceneLastActivatedText(e):this._scriptLastRunText(e);return s`
              <button
                class="home-summary-card ${t.domain}"
                type="button"
                ?disabled=${t.unavailable}
                @click=${()=>this._runHomeScene(t)}
              >
                <span class="home-summary-icon"><ha-icon icon=${b(t.domain)}></ha-icon></span>
                <span class="home-summary-copy">
                  <span class="home-summary-title">${i}</span>
                  <span class="home-summary-subtitle">${a}</span>
                </span>
                <span class="home-summary-chevron"><ha-icon icon="mdi:play"></ha-icon></span>
              </button>
            `})}
        </div>
      </section>
    `}async _runHomeScene(t){if(t.unavailable)return;const e=this._homeSceneName(t.entityId);try{await this.hass.callService(t.domain,"turn_on",{entity_id:t.entityId}),this._showToast(this._t("scene"===t.domain?"scenes.activated_named":"scenes.started_named",{name:e}))}catch(i){console.warn(`Failed to run ${t.entityId}:`,i),this._showToast(this._t("scene"===t.domain?"scenes.scene_failed":"scenes.script_failed",{name:e}))}}_renderHomeSummaries(){const t=this._getHomeSummaryCards();return t.length?s`
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
          ${m(t,t=>t.key,t=>s`
              <button
                class="home-summary-card ${t.key}"
                type="button"
                style=${`--summary-color: ${t.color};`}
                @click=${()=>this._openHomeAssistantPage(t.path)}
              >
                <span class="home-summary-icon">
                  <ha-icon icon=${t.icon}></ha-icon>
                </span>
                <span class="home-summary-copy">
                  <span class="home-summary-title">${t.label}</span>
                  <span class="home-summary-subtitle">${t.subtitle}</span>
                </span>
                <span class="home-summary-chevron">
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </span>
              </button>
            `)}
        </div>
      </section>
    `:c}_renderHomeTodos(){const t=this._getHomeTodoEntities();if(!t.length)return c;const e=this._t("home_section.todos.label");return s`
      <section class="home-todos-section">
        <div class="home-status-heading">
          <ha-icon icon="mdi:format-list-checks"></ha-icon>
          <span>${e}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <button
              class="mobile-layout-toggle active"
              type="button"
              title=${e}
              aria-label=${e}
            >
              <ha-icon icon="mdi:format-list-checks"></ha-icon>
            </button>
            <span class="mobile-section-title-label">${e}</span>
          </div>
        </div>
        <div class="home-todos-grid">
          ${m(t,t=>t,t=>s`
              <div class="home-todo-card" data-entity=${t}>
                <dwains-dashboard-next-card-host
                  eager
                  .hass=${this.hass}
                  .config=${{type:"todo-list",entity:t,title:this.hass.states[t]?.attributes?.friendly_name||this.hass.entities?.[t]?.name||t}}
                ></dwains-dashboard-next-card-host>
              </div>
            `)}
        </div>
      </section>
    `}_getHomeCustomCards(){const t=this.config?.home_custom_cards;return Array.isArray(t)?t.filter(t=>Boolean(t?.id)&&Boolean(t?.card)&&"object"==typeof t.card&&"string"==typeof t.card.type):[]}_renderHomeCustomCards(){const t=this._getHomeCustomCards();if(!t.length)return c;const e=this._t("home_section.custom_cards.label");return s`
      <section class="home-custom-cards-section">
        <div class="home-status-heading">
          <ha-icon icon="mdi:cards-outline"></ha-icon>
          <span>${e}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <button
              class="mobile-layout-toggle active static"
              type="button"
              title=${e}
              aria-label=${e}
            >
              <ha-icon icon="mdi:cards-outline"></ha-icon>
            </button>
            <span class="mobile-section-title-label">${e}</span>
          </div>
        </div>
        <div class="home-custom-cards-grid">
          ${m(t,t=>t.id,t=>s`
              <div class="home-custom-card">
                <dwains-dashboard-next-card-host
                  eager
                  .hass=${this.hass}
                  .config=${t.card}
                ></dwains-dashboard-next-card-host>
              </div>
            `)}
        </div>
      </section>
    `}_getHomeTodoEntities(){return Object.keys(this.hass?.states||{}).filter(t=>t.startsWith("todo.")).filter(t=>{const e=this.hass.states[t],i=this.hass.entities?.[t];return!!e&&(!["unavailable","unknown"].includes(String(e.state).toLowerCase())&&!i?.hidden_by&&!i?.disabled_by&&"diagnostic"!==i?.entity_category&&"config"!==i?.entity_category)}).sort((t,e)=>{const i=this.hass.states[t]?.attributes?.friendly_name||this.hass.entities?.[t]?.name||t,a=this.hass.states[e]?.attributes?.friendly_name||this.hass.entities?.[e]?.name||e;return String(i).localeCompare(String(a),this.hass.language)})}_getHomeSummaryCards(){const t=[],e=this._getUpdateEntityCount();return this._repairsIssueCount>0&&t.push({key:"repairs",label:this._t("home.repairs"),subtitle:this._tp("summary.issue",this._repairsIssueCount),icon:"mdi:wrench",color:"#f59e0b",count:this._repairsIssueCount,path:"/config/repairs"}),e>0&&t.push({key:"updates",label:this._t("home.updates"),subtitle:this._tp("summary.update_available",e),icon:"mdi:package-up",color:"#0ea5e9",count:e,path:"/config/updates"}),this._discoveredDeviceCount>0&&t.push({key:"discovered",label:this._t("home.devices_discovered"),subtitle:this._tp("summary.device_to_add",this._discoveredDeviceCount),icon:"mdi:devices",color:"#1494aa",count:this._discoveredDeviceCount,path:"/config/integrations"}),t}_openHomeAssistantPage(t){this._closeMobileNav(),M(t)}_renderHomeWelcome(){const t=this.hass?.user?.name||"User",e=this._getGreeting(),i=this._weatherDisplayEnabled()?this._getWeatherEntity():void 0,a=this._formatWeatherTemperature(i),o=this._getWelcomeUserPicture(t),r=this._renderHomeAlarm();return s`
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
                ${o?s`<img src=${o} alt=${t} />`:s`<ha-icon icon="mdi:account"></ha-icon>`}
              </button>
              <div class="welcome-copy">
                <div class="welcome-text">
                  <span class="welcome-greeting">${e},</span>
                  <span class="welcome-name">${t}</span>
                  <span class="welcome-title">${e}, ${t}</span>
                </div>
              </div>
            </div>
            <div class="welcome-header-meta">
              ${!this._isMobile&&i&&a?s`
                <div
                  class="welcome-weather"
                  title=${this._weatherTitle(i)}
                  aria-label=${this._weatherTitle(i)}
                  @click=${()=>this._showMoreInfo(i.entity_id)}
                >
                  <ha-icon icon=${i.attributes.icon||"mdi:weather-cloudy"}></ha-icon>
                  <span class="weather-temp">${a}</span>
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
                    <ha-icon icon="mdi:tune-variant"></ha-icon>
                  </button>
                `:c}
              </div>
            </div>
          </div>
          ${r!==c||this._isMobile&&a?s`
            <div class="welcome-subheader">
              ${r}
              ${this._isMobile&&i&&a?s`
                <div
                  class="welcome-weather"
                  title=${this._weatherTitle(i)}
                  aria-label=${this._weatherTitle(i)}
                  @click=${()=>this._showMoreInfo(i.entity_id)}
                >
                  <ha-icon icon=${i.attributes.icon||"mdi:weather-cloudy"}></ha-icon>
                  <span class="weather-temp">${a}</span>
                </div>
              `:c}
            </div>
          `:c}
        </div>
      </div>
    `}_renderHomeStatusCards(){const t=this._getStatusDomains(),e=this._homeInformationCardVisible("device_groups")?t.filter(t=>"person"!==t.domain&&"wattage"!==t.domain&&"camera"!==t.domain):[],i="grid"===this._mobileHomeDevicesLayout,a=t=>s`
      <div
        class="home-status-card compact-status ${t.domain} ${t.value?"has-value":""}"
        style=${this._domainStatusStyle(t.domain,t.deviceClass)}
        @click=${()=>this._handleStatusCardClick(t)}
        data-domain=${t.domain}
        title=${this._statusCardTitle(t)}
        aria-label=${this._statusCardTitle(t)}
      >
        <div class="status-card-icon">
          <ha-icon icon=${t.icon}></ha-icon>
          ${t.count>0?s`
            <div class="status-card-badge">${t.count}</div>
          `:c}
        </div>
        ${t.value?s`<div class="status-card-value">${t.value}</div>`:c}
        <div class="status-card-title">${this._statusCardTitle(t)}</div>
      </div>
    `,o=[this._homeInformationCardVisible("people")?this._renderHousePersonsStatusCard():c,this._homeInformationCardVisible("climate")?this._renderHouseClimateStatusCard("indoor"):c,this._homeInformationCardVisible("outdoor_climate")?this._renderHouseClimateStatusCard("outdoor"):c,this._homeInformationCardVisible("power")?this._renderHousePowerStatusCard():c].filter(t=>t!==c),r=Math.max(0,3-o.length),n=Math.min(e.length,2*r),d=e.slice(0,n),l=e.slice(n),p=Array.from({length:Math.ceil(d.length/2)},(t,e)=>d.slice(2*e,2*e+2));if(!o.length&&!e.length)return c;const m=s`
      <div class="home-status-heading">
        <ha-icon icon="mdi:view-dashboard-outline"></ha-icon>
        <span>${this._t("home.house_information")}</span>
      </div>
      <div class="mobile-section-heading">
        <div class="mobile-section-title">
          <button
            class="mobile-layout-toggle ${i?"active":""}"
            type="button"
            title=${i?this._t("home.swipe_house_information"):this._t("home.show_all_house_information")}
            aria-label=${i?this._t("home.switch_house_information_swipe"):this._t("home.show_all_house_information")}
            @click=${this._toggleMobileHomeDevicesLayout}
          >
            <ha-icon icon=${i?"mdi:view-carousel-outline":"mdi:view-grid-outline"}></ha-icon>
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
          ${m}
          <div class="home-status-grid">
            ${o}
            ${e.map(a)}
          </div>
        </div>
      `:s`
      <div class="home-status-section layout-${this._mobileHomeDevicesLayout}">
        ${m}

        <div class="home-status-primary-grid">
          ${o}
          ${p.map(t=>s`
            <div class="home-status-stack">
              ${t.map(a)}
            </div>
          `)}
        </div>

        ${l.length?s`
          <div class="home-status-secondary-grid">
            ${l.map(a)}
          </div>
        `:c}
      </div>
    `}_renderHomeCameras(){const t=this._getHomeAreaCameras();if(!t.length)return c;const e="grid"===this._mobileHomeCamerasLayout;return s`
      <section class="home-camera-section layout-${this._mobileHomeCamerasLayout}">
        <div class="home-status-heading">
          <ha-icon icon="mdi:cctv"></ha-icon>
          <span>${this._t("home.cameras")}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <button
              class="mobile-layout-toggle ${e?"active":""}"
              type="button"
              title=${e?this._t("home.swipe_cameras"):this._t("home.show_all_cameras")}
              aria-label=${e?this._t("home.switch_cameras_swipe"):this._t("home.show_all_cameras")}
              @click=${this._toggleMobileHomeCamerasLayout}
            >
              <ha-icon icon=${e?"mdi:view-carousel-outline":"mdi:view-grid-outline"}></ha-icon>
            </button>
            <span class="mobile-section-title-label">${this._t("home.cameras")}</span>
          </div>
        </div>
        <div class="home-camera-grid">
          ${m(t,t=>`${t.areaId}-${t.entityId}`,t=>this._renderHomeCameraCard(t))}
        </div>
      </section>
    `}_renderHomeCameraCard(t){return s`
      <button
        class="home-camera-card"
        type="button"
        title=${t.name}
        @click=${()=>this._showMoreInfo(t.entityId)}
      >
        ${t.imageUrl?s`<div class="home-camera-image" style=${`background-image: url('${t.imageUrl}');`}></div>`:s`
              <div class="home-camera-placeholder">
                <ha-icon icon="mdi:cctv"></ha-icon>
              </div>
            `}
        <div class="home-camera-content">
          <div class="home-camera-top">
            <div class="home-camera-area-icon">
              <ha-icon icon=${t.areaIcon}></ha-icon>
            </div>
          </div>
          <div class="home-camera-copy">
            <div class="home-camera-name">${t.name}</div>
            <div class="home-camera-meta">${t.areaName} · ${t.state}</div>
          </div>
        </div>
      </button>
    `}_getHomeAreaCameras(){const t=[],e=new Set(this.config?.settings?.home_cameras_hidden||[]),i=this.config?.settings?.home_camera_order||[],a=new Map(i.map((t,e)=>[t,e]));return this._getVisibleSortedAreas().forEach(i=>{this._getFilteredAreaEntities(i.area_id).filter(t=>t.entity_id.startsWith("camera.")).filter(t=>!e.has(t.entity_id)).filter(t=>{const e=this.hass?.states?.[t.entity_id]?.state;return Boolean(e&&"unavailable"!==e&&"unknown"!==e)}).forEach(e=>{const a=this.hass.states[e.entity_id],o=a?.attributes?.friendly_name||e.entity_id,r=a?this.hass.formatEntityState(a):this._t("common.unknown"),n=this._getCameraImageUrl(e.entity_id),s={areaId:i.area_id,areaName:i.name,areaIcon:l(i),entityId:e.entity_id,name:o,state:r};n&&(s.imageUrl=n),t.push(s)})}),t.sort((t,e)=>{const i=a.get(t.entityId),o=a.get(e.entityId);return void 0!==i||void 0!==o?(i??Number.MAX_SAFE_INTEGER)-(o??Number.MAX_SAFE_INTEGER):0})}_getCameraImageUrl(t){const e=this.hass?.states?.[t];if(!e)return;const i=e.attributes?.entity_picture,a=e.attributes?.access_token,o="string"==typeof i&&i?i:a?`/api/camera_proxy/${t}?token=${encodeURIComponent(a)}`:"";if(!o)return;const r=o.includes("?")?"&":"?";return`${o}${r}dd_cache=${encodeURIComponent(e.last_updated||e.last_changed||"")}`}_renderHousePowerStatusCard(){const t=this._getHousePowerUsage();if(!t.sensorCount)return c;const e=t.sensorCount?this._tp("devices.live_power_sensor",t.sensorCount):this._t("home.no_live_power_sensors");return s`
      <div
        class="home-status-card house-power-card wattage ${t.sensorCount?"has-power":"is-empty"}"
        @click=${this._openHousePowerDialog}
        @keydown=${this._handleHousePowerKeydown}
        data-domain="wattage"
        role="button"
        tabindex="0"
        aria-label=${`${this._t("home.house_power_usage")}: ${t.formattedTotal}`}
      >
        <div class="house-power-head">
          <div class="status-card-icon house-power-icon">
            <ha-icon icon="mdi:flash"></ha-icon>
          </div>
          <div class="house-power-copy">
            <div class="house-power-title">${this._t("home.house_power_usage")}</div>
            <div class="house-power-subtitle">${e}</div>
          </div>
          <div class="house-power-total">${t.formattedTotal}</div>
        </div>
        ${t.rooms.length?s`
          <div class="house-power-list" aria-label=${this._t("home.house_power_usage")}>
            ${m(t.rooms,t=>t.areaId,t=>this._renderHousePowerRoom(t))}
          </div>
        `:s`
          <div class="house-power-empty">${this._t("home.no_room_power_usage")}</div>
        `}
      </div>
    `}_houseClimateTitle(t){return"outdoor"===t?this._t("home.outdoor_climate"):this._t("home.indoor_climate")}_renderHouseClimateStatusCard(t){const e=this._getHouseClimateSummary(t);if(!e.metrics.length)return c;const i=this._houseClimateTitle(t);return s`
      <div
        class="home-status-card house-climate-card sensor ${t} metrics-${Math.min(e.metrics.length,4)}"
        @click=${()=>this._showHouseClimateEntities(void 0,t)}
        @keydown=${e=>this._handleHouseClimateKeydown(e,t)}
        data-domain="sensor"
        role="button"
        tabindex="0"
        aria-label=${i}
      >
        <div class="house-climate-head">
          <div class="status-card-icon house-climate-icon">
            <ha-icon icon=${"outdoor"===t?"mdi:sun-thermometer-outline":"mdi:home-thermometer-outline"}></ha-icon>
          </div>
          <div class="house-climate-copy">
            <div class="house-climate-title">${i}</div>
            <div class="house-climate-subtitle">
              ${this._tp("common.sensor",e.sensorCount)}
            </div>
          </div>
        </div>
        <div class="house-climate-grid">
          ${e.metrics.map(e=>s`
            <button
              class="house-climate-metric ${e.kind}"
              style=${`--metric-color: ${e.color};`}
              type="button"
              @click=${i=>{i.stopPropagation(),this._showHouseClimateEntities(e.kind,t)}}
            >
              <span class="house-climate-metric-icon">
                <ha-icon icon=${e.icon}></ha-icon>
              </span>
              <span class="house-climate-metric-copy">
                <span class="house-climate-metric-value">${e.value}</span>
                <span class="house-climate-metric-label">${e.label}</span>
              </span>
            </button>
          `)}
        </div>
      </div>
    `}_renderHousePowerRoom(t){return s`
      <div class="house-power-room">
        <span class="house-power-room-icon">
          <ha-icon icon=${t.icon}></ha-icon>
        </span>
        <span class="house-power-room-name">${t.name}</span>
        <span class="house-power-room-value">${t.formatted}</span>
        <span
          class="house-power-bar"
          aria-hidden="true"
          style=${`--power-width: ${t.percentage}%`}
        >
          <span class="house-power-bar-fill"></span>
        </span>
      </div>
    `}_renderHousePowerDialog(){if(!this._housePowerDialogOpen)return c;const t=x(this.hass,this.config),e=t.areas[0],i=this._housePowerStatisticsEntities(t.areas.flatMap(t=>t.entities),8);return s`
      <div class="house-power-dialog-overlay" @click=${this._closeHousePowerDialog}>
        <section
          class="house-power-dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${this._t("home.house_power_usage")}
          tabindex="0"
          @click=${t=>t.stopPropagation()}
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
                  <small>${this._tp("devices.live_power_sensor",t.sensorCount)}</small>
                </div>
                <b>${t.formattedTotal||"0 W"}</b>
              </div>
              ${this._renderHousePowerStatisticsGraph(i,this._t("devices.whole_house_history"))}
            </section>

            ${e?s`
              <section class="house-power-dialog-overview-card">
                <div class="house-power-dialog-overview-head">
                  <span class="house-power-dialog-overview-icon"><ha-icon icon=${e.icon}></ha-icon></span>
                  <div>
                    <strong>${this._t("devices.top_area")}</strong>
                    <small>${e.name}</small>
                  </div>
                  <b>${e.formattedTotal}</b>
                </div>
                <div class="house-power-dialog-top-entities">
                  ${e.entities.slice(0,3).map(t=>s`
                    <button type="button" @click=${()=>this._showMoreInfo(t.entityId)}>
                      <span>${t.name}</span>
                      <strong>${t.formatted}</strong>
                    </button>
                  `)}
                </div>
              </section>
            `:c}
          </div>

          ${t.areas.length?s`
            <div class="house-power-dialog-areas">
              ${t.areas.map(t=>s`
                <section class="house-power-dialog-area">
                  <div class="house-power-dialog-area-head">
                    <span class="house-power-dialog-area-icon"><ha-icon icon=${t.icon}></ha-icon></span>
                    <span class="house-power-dialog-area-name">${t.name}</span>
                    <strong>${t.formattedTotal}</strong>
                  </div>
                  ${this._renderHousePowerStatisticsGraph(this._housePowerStatisticsEntities(t.entities,6),`${t.name} power history`)}
                  <div class="house-power-dialog-entities">
                    ${t.entities.map(e=>{const i=t.totalWatts>0?Math.max(4,Math.min(100,Math.round(e.watts/t.totalWatts*100))):0;return s`
                        <button
                          class="house-power-dialog-entity detailed"
                          type="button"
                          style=${`--entity-power-width: ${i}%`}
                          @click=${()=>this._showMoreInfo(e.entityId)}
                        >
                          <span class="house-power-dialog-entity-icon"><ha-icon icon=${e.icon}></ha-icon></span>
                          <span class="house-power-dialog-entity-copy">
                            <strong>${e.name}</strong>
                            <small>${t.name}</small>
                            <span class="house-power-dialog-entity-bar"><span></span></span>
                          </span>
                          <b>${e.formatted}</b>
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
    `}_handleHouseClimateKeydown(t,e){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._showHouseClimateEntities(void 0,e))}_showHouseClimateEntities(t,e="indoor"){const i=this._getHouseClimateSummary(e),a=t?i.metrics.filter(e=>e.kind===t):i.metrics,o=a.flatMap(t=>t.entityIds);if(!o.length)return void this._openDeviceDomain("sensor");const r=t&&a[0]?.label||this._houseClimateTitle(e);te(this,{domain:"sensor",config:this.config,entityIds:o,customTitle:r,viewAllLabel:this._houseInfoDeviceViewLabel(),onViewAll:()=>this._openDeviceDomain("sensor")})}_renderHousePersonsStatusCard(){const t=this._getVisiblePersonEntities(),e=t.filter(t=>"home"===t.state).length,i=t.length?`${e}/${t.length} ${this._t("person.home")}`:this._t("home.no_people");return s`
      <div
        class="home-status-card house-persons-card person persons-${Math.min(t.length,4)}"
        @click=${()=>this._showPersonEntities()}
        data-domain="person"
      >
        <div class="house-persons-head">
          <div class="status-card-icon house-persons-icon">
            <ha-icon icon="mdi:account-group"></ha-icon>
          </div>
          <div class="house-persons-copy">
            <div class="house-persons-title">${this._t("home.people")}</div>
            <div class="house-persons-subtitle">${i}</div>
          </div>
        </div>
        ${t.length?s`
          <div class="house-persons-grid">
            ${m(t.slice(0,4),t=>t.entity_id,t=>this._renderHousePersonMini(t))}
          </div>
        `:s`
          <div class="house-persons-empty">${this._t("home.no_visible_people")}</div>
        `}
      </div>
    `}_renderHousePersonMini(t){const e=t.attributes?.friendly_name||t.entity_id.split(".")[1],i=t.attributes?.entity_picture,a=this._formatPersonState(t),o="home"===t.state?"is-home":"not_home"===t.state?"is-away":"is-zone";return s`
      <button
        class="house-person-mini ${o}"
        type="button"
        aria-label=${`${e}: ${a}`}
        @click=${e=>this._handleHousePersonClick(e,t.entity_id)}
      >
        <span class="house-person-avatar">
          ${i?s`
            <img src=${i} alt=${e}>
          `:s`
            <ha-icon icon="mdi:account"></ha-icon>
          `}
        </span>
        <span class="house-person-mini-copy">
          <span class="house-person-mini-name">${e}</span>
          <span class="house-person-mini-state">${a}</span>
        </span>
      </button>
    `}_handleHousePersonClick(t,e){t.stopPropagation(),this._showMoreInfo(e)}_getVisiblePersonEntities(){if(!this.hass||!this.config)return[];const t=new Set(this.config.settings?.hidden_persons||[]);return Object.values(this.hass.states).filter(e=>e.entity_id.startsWith("person.")&&!t.has(e.entity_id)&&!this.hass.entities?.[e.entity_id]?.hidden_by)}_formatPersonState(t){return"home"===t.state?this._t("person.home"):"not_home"===t.state?this._t("person.away"):t.state&&"unknown"!==t.state?"unavailable"===t.state?this._t("common.unavailable"):String(t.state).replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase()):this._t("common.unknown")}_weatherDisplayEnabled(){return!1!==this.config?.settings?.show_weather&&!1!==this.config?.global_options?.show_weather}_formatWeatherTemperature(t){if(!t)return"";const e=t.attributes||{},i=e.temperature??e.current_temperature??e.apparent_temperature??e.native_temperature;if(null==i||""===i)return"";const a=e.temperature_unit||e.native_temperature_unit||this.hass?.config?.unit_system?.temperature||"";return D(i,a)}_weatherTitle(t){const e=this._formatWeatherTemperature(t),i=this._formatWeatherCondition(t?.state),a=this._t("home.outside").toLocaleLowerCase(yt(this.hass));return e&&i?`${e} ${a}, ${i}`:e?`${e} ${a}`:i||this._t("home.outside_weather")}_formatWeatherCondition(t){return t&&"unknown"!==t&&"unavailable"!==t?t.replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase()):""}_getHousePowerUsage(){const t=x(this.hass,this.config),e=t.areas.slice(0,4).map(t=>({areaId:t.areaId,name:t.name,icon:t.icon,watts:t.totalWatts,formatted:t.formattedTotal,percentage:t.percentage}));return{totalWatts:t.totalWatts,formattedTotal:t.formattedTotal,sensorCount:t.sensorCount,rooms:e}}_getHouseClimateSummary(t="indoor"){const e={temperature:[],humidity:[]},i=new Set(this.config?.settings?.home_climate_excluded_areas||[]),a=new Set(this.config?.settings?.home_outdoor_climate_areas||[]);("outdoor"===t?(this.config?.areas||[]).filter(t=>a.has(t.area_id)):this._getVisibleSortedAreas().filter(t=>!i.has(t.area_id)&&!a.has(t.area_id))).forEach(t=>{const i=this.hass?.areas?.[t.area_id];["temperature","humidity"].forEach(t=>{const a="temperature"===t?i?.temperature_entity_id:i?.humidity_entity_id;if(!a)return;const o=this.hass?.states?.[a];if(!o||"unavailable"===o.state||"unknown"===o.state)return;const r=Number.parseFloat(o.state);Number.isFinite(r)&&e[t].push({value:r,unit:String(o.attributes?.unit_of_measurement||("temperature"===t?this.hass?.config?.unit_system?.temperature||"°C":"%")),entityIds:[a]})})});const o=[],r=this._houseClimateMetric("temperature",e.temperature,t),n=this._houseClimateMetric("humidity",e.humidity,t);return r&&o.push(r),n&&o.push(n),{sensorCount:e.temperature.length+e.humidity.length,metrics:o}}_houseClimateMetric(t,e,i="indoor"){if(!e.length)return;const a=e.reduce((t,e)=>t+e.value,0)/e.length,o=e[0]?.unit||("temperature"===t?"°C":"%"),r=D("temperature"===t?a.toFixed(1):Math.round(a),o),n="indoor"===i||e.length>1;return{kind:t,label:"temperature"===t?this._t(n?"home.average_temperature":"home.temperature"):this._t(n?"home.average_humidity":"home.humidity"),value:r,count:e.length,icon:g("sensor","temperature"===t?"temperature":"humidity"),color:h("sensor","temperature"===t?"temperature":"humidity"),entityIds:[...new Set(e.flatMap(t=>t.entityIds))]}}_renderMobileHomeAreas(){const t=this._getVisibleSortedAreas();if(!t.length)return c;const e=this._isDesktopAreaSidebarCollapsed(),i=e?"grid":this._mobileHomeAreasLayout,a="grid"===i,o=this._isMobile&&!this._renderAllMobileHomeAreas&&t.length>12?t.slice(0,12):t;return s`
      <section class="mobile-home-section mobile-home-areas layout-${i}">
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            ${e?s`
              <span class="mobile-layout-toggle active" aria-hidden="true">
                <ha-icon icon="mdi:view-grid-outline"></ha-icon>
              </span>
            `:s`
              <button
                class="mobile-layout-toggle ${a?"active":""}"
                type="button"
                title=${a?this._t("home.swipe_areas"):this._t("home.show_all_areas")}
                aria-label=${a?this._t("home.switch_areas_swipe"):this._t("home.show_all_areas")}
                @click=${this._toggleMobileHomeAreasLayout}
              >
                <ha-icon icon=${a?"mdi:view-carousel-outline":"mdi:view-grid-outline"}></ha-icon>
              </button>
            `}
            <span class="mobile-section-title-label">${this._t("home.areas")}</span>
          </div>
          ${e?c:s`
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
          ${m(o,t=>t.area_id,t=>this._renderMobileHomeAreaCard(t))}
        </div>
      </section>
    `}_renderMobileHomeAreaCard(t){const e=this._getFilteredAreaEntities(t.area_id),i=this._getCachedAreaData(t),a=this._getAreaDeviceCount(t.area_id,e),o=Boolean(t.picture),r=[i.temperature,i.humidity,i.wattage].filter(Boolean).join(" • ")||(1===a?"1 device":`${a} devices`),n=this._getAreaStatusBadges(i),d=o?this._getPictureContrastClass(t.picture):"";return s`
      <button
        class="mobile-area-card ${o?"has-picture":""} ${d}"
        type="button"
        @click=${()=>this._selectArea(t.area_id)}
      >
        ${o?s`
          <div class="mobile-area-picture" style=${`background-image: url('${t.picture}');`}></div>
        `:c}
        <div class="mobile-area-top">
          <div class="mobile-area-icon">
            <ha-icon icon=${l(t)}></ha-icon>
          </div>
          <div class="mobile-area-badges">
            ${n.slice(0,4).map(t=>s`
              <span
                class="mobile-area-badge ${t.className}"
                style=${`--area-badge-color: ${t.color};`}
              >
                <ha-icon icon=${t.icon}></ha-icon>
                <span>${t.count}</span>
              </span>
            `)}
          </div>
        </div>
        <div class="mobile-area-copy">
          <div class="mobile-area-name">${t.name}</div>
          <div class="mobile-area-meta">${r}</div>
        </div>
      </button>
    `}_getGreeting(){const t=(new Date).getHours();return t<12?this._t("home.good_morning"):t<18?this._t("home.good_afternoon"):this._t("home.good_evening")}_renderHomeAlarm(){const t=this._getAlarmEntity();if(!t)return c;const e=t?.state||"",i=["armed_away","armed_home","armed_night","armed_vacation"].includes(e),a="disarmed"===e;return s`
      <div class="welcome-alarm ${i?"alarm-armed":a?"alarm-disarmed":"alarm-triggered"}" @click=${()=>this._showMoreInfo(t?.entity_id||"")}>
        <ha-icon icon=${i?"mdi:shield-check":a?"mdi:shield-off":"mdi:shield-alert"}></ha-icon>
        <span class="alarm-text">${(()=>i?this._t("home.alarm_armed"):a?this._t("home.alarm_disarmed"):this._t("domain.alarm_control_panel"))()}</span>
          </div>
    `}_renderFavorites(){const t=this._getEffectiveFavoriteEntities();if(0===t.length)return c;const e="grid"===this._mobileHomeFavoritesLayout;return s`
      <div class="favorites-section home-favorites-section layout-${this._mobileHomeFavoritesLayout}">
        <div class="favorites-header">
          <ha-icon icon="mdi:star"></ha-icon>
          <span>${this._t("favorites.title")}</span>
        </div>
        <div class="mobile-section-heading">
          <div class="mobile-section-title">
            <button
              class="mobile-layout-toggle ${e?"active":""}"
              type="button"
              title=${e?this._t("favorites.swipe"):this._t("favorites.show_all")}
              aria-label=${e?this._t("favorites.switch_swipe"):this._t("favorites.show_all")}
              @click=${this._toggleMobileHomeFavoritesLayout}
            >
              <ha-icon icon=${e?"mdi:view-carousel-outline":"mdi:view-grid-outline"}></ha-icon>
            </button>
            <span class="mobile-section-title-label">${this._t("favorites.title")}</span>
          </div>
        </div>
        <div class="favorites-grid">
          ${m(t,t=>t,t=>this._renderFavoriteCard(t))}
        </div>
      </div>
    `}_renderFavoriteCard(t){const e=this.hass.states[t],i=this.hass.entities?.[t];if(!e||i?.hidden_by)return c;const a=this._getEffectiveEntityState(e),o=t.split(".")[0]||"unknown",r=a.attributes?.device_class,n=a.attributes?.friendly_name||i?.name||t,d=this._favoriteDisplayState(a,o),l=this._entityAreaName(t),p=i?.icon||a.attributes?.icon||g(o,r)||b(o),m=this._favoriteActiveState(a,o),u=this._favoriteSupportsQuickToggle(o),x="cover"===o?"opening":"sensor"!==o||"temperature"!==r&&"humidity"!==r?"sensor"===o&&"power"===r?"wattage":o:r,f="opening"===x?"#D66A1F":h(x,r),v=["favorite-card-wrapper",`favorite-${o}`,r?`favorite-${r}`:"",m,u?"can-toggle":"info-only"].filter(Boolean).join(" ");return s`
      <article
        class=${v}
        style=${`--favorite-color: ${f};`}
        data-entity=${t}
        role="button"
        tabindex="0"
        @click=${()=>this._showMoreInfo(t)}
        @keydown=${e=>this._handleFavoriteKeydown(e,t)}
      >
        <div class="favorite-icon">
          <ha-icon icon=${p}></ha-icon>
        </div>
        <div class="favorite-body">
          <div
            class="favorite-name ${n.length>24?"is-very-long":n.length>18?"is-long":""}"
            title=${n}
          >${n}</div>
          <div class="favorite-meta">
            ${l?s`<span class="favorite-area">${l}</span>`:c}
          </div>
        </div>
        <div class="favorite-end">
          ${"cover"===o?this._renderFavoriteCoverActions(a):u?s`
              <button
                class="favorite-quick-action"
                type="button"
                title=${this._favoriteQuickTitle(a,o)}
                @click=${t=>this._handleFavoriteQuickAction(t,a,o)}
              >
                <ha-icon icon=${this._favoriteQuickIcon(a,o)}></ha-icon>
              </button>
            `:d?s`
              <div class="favorite-status-pill" title=${d}>${d}</div>
            `:c}
        </div>
      </article>
    `}_favoriteDisplayState(t,e){return"light"===e&&"on"===String(t?.state||"").toLowerCase()&&"number"==typeof t?.attributes?.brightness?`${Math.round(Number(t.attributes.brightness)/255*100)} %`:"cover"===e&&"number"==typeof t?.attributes?.current_position?`${Math.round(Number(t.attributes.current_position))} %`:this._formatFavoriteState(t)}_renderFavoriteCoverActions(t){const e=String(t?.state||"").toLowerCase(),i=["unavailable","unknown"].includes(e),a=this._coverSupportsFeature(t,1),o=this._coverSupportsFeature(t,2);return s`
      <div class="favorite-cover-actions" @click=${t=>t.stopPropagation()}>
        ${a?s`
          <button
            class="favorite-cover-action ${"opening"===e?"active":""}"
            type="button"
            title=${this._t("action.open")}
            aria-label=${this._t("action.open")}
            ?disabled=${i}
            @click=${e=>this._handleMobileCoverAction(e,t,"open")}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
        `:c}
        ${o?s`
          <button
            class="favorite-cover-action ${"closing"===e?"active":""}"
            type="button"
            title=${this._t("action.close")}
            aria-label=${this._t("action.close")}
            ?disabled=${i}
            @click=${e=>this._handleMobileCoverAction(e,t,"close")}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
        `:c}
      </div>
    `}_handleFavoriteKeydown(t,e){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._showMoreInfo(e))}_formatFavoriteState(t){const e=this._getEffectiveEntityState(t);return E(this.hass,e)}_getEffectiveEntityState(t){const e=t?.entity_id;if(!e)return t;const i=this._optimisticEntityStates[e];if(!i||i.expiresAt<=Date.now())return t;return String(t?.state||"").toLowerCase()===i.state.toLowerCase()?t:{...t,state:i.state}}_setOptimisticEntityState(t,e){this._setOptimisticEntityStates([t],e)}_setOptimisticEntityStates(t,e){const i=[...new Set(t.filter(Boolean))];if(!i.length)return;const a=Date.now()+5e3,o={...this._optimisticEntityStates};i.forEach(t=>{o[t]={state:e,expiresAt:a}}),this._optimisticEntityStates=o,this._scheduleOptimisticCleanup()}_clearOptimisticEntityStates(t){const e=[...new Set(t.filter(Boolean))];if(!e.length)return;const i={...this._optimisticEntityStates};let a=!1;e.forEach(t=>{i[t]&&(delete i[t],a=!0)}),a&&(this._optimisticEntityStates=i)}_reconcileOptimisticEntityStates(){const t=Object.entries(this._optimisticEntityStates);if(!t.length)return;const e=Date.now(),i={...this._optimisticEntityStates};let a=!1;t.forEach(([t,o])=>{const r=this.hass?.states?.[t]?.state;(!r||o.expiresAt<=e||String(r).toLowerCase()===o.state.toLowerCase())&&(delete i[t],a=!0)}),a&&(this._optimisticEntityStates=i)}_scheduleOptimisticCleanup(){if(void 0!==this._optimisticCleanupTimer)return;const t=Object.values(this._optimisticEntityStates).map(t=>t.expiresAt);if(!t.length)return;const e=Math.min(...t);if(!Number.isFinite(e))return;const i=Math.max(80,e-Date.now()+50);this._optimisticCleanupTimer=window.setTimeout(()=>{this._optimisticCleanupTimer=void 0,this._reconcileOptimisticEntityStates(),Object.keys(this._optimisticEntityStates).length&&this._scheduleOptimisticCleanup()},i)}_favoriteActiveState(t,e){const i=String(t?.state||"").toLowerCase();if(["unavailable","unknown"].includes(i))return"is-idle";if("cover"===e)return["open","opening"].includes(i)?"is-active":"is-off";if("lock"===e)return"unlocked"===i?"is-active":"is-off";if("climate"===e){const e=t?.attributes?.hvac_action;return e&&"idle"!==e&&"off"!==e?"is-active":"is-idle"}return["off","closed","locked","not_home","idle"].includes(i)?"is-off":"is-active"}_favoriteSupportsQuickToggle(t){return["light","switch","fan","input_boolean","cover","lock"].includes(t)}_favoriteQuickIcon(t,e){const i=String(t?.state||"").toLowerCase();return"cover"===e?["open","opening"].includes(i)?"mdi:arrow-down":"mdi:arrow-up":"lock"===e?"unlocked"===i?"mdi:lock-open-variant-outline":"mdi:lock-outline":["light","switch","fan","input_boolean"].includes(e)?"mdi:power":"mdi:chevron-right"}_favoriteQuickTitle(t,e){const i=String(t?.state||"").toLowerCase();return"cover"===e?this._t(["open","opening"].includes(i)?"action.close":"action.open"):"lock"===e?this._t("unlocked"===i?"action.lock":"action.unlock"):["light","switch","fan","input_boolean"].includes(e)?this._t("off"===i?"action.turn_on":"action.turn_off"):this._t("action.more_info")}async _handleFavoriteQuickAction(t,e,i){t.stopPropagation();const a=e?.entity_id;if(!a)return;const o=[a];try{if(["light","switch","fan","input_boolean"].includes(i)){const t=!this._isEntityActiveForUi(e,i);return this._setOptimisticEntityState(a,t?"on":"off"),void await this.hass.callService(i,t?"turn_on":"turn_off",{entity_id:a})}if("cover"===i){const t=["open","opening"].includes(String(e.state).toLowerCase());return this._setOptimisticEntityState(a,t?"closed":"open"),void await this.hass.callService("cover",t?"close_cover":"open_cover",{entity_id:a})}if("lock"===i){const t="unlocked"===String(e.state).toLowerCase();return this._setOptimisticEntityState(a,t?"locked":"unlocked"),void await this.hass.callService("lock",t?"lock":"unlock",{entity_id:a})}}catch(t){return this._clearOptimisticEntityStates(o),console.warn(`Failed to run favorite quick action for ${a}:`,t),void this._showToast(this._t("entity.update_failed"))}this._showMoreInfo(a)}_areaTileState(t,e,i){return"open"===i?1===e?this._t(t?"common.open":"common.closed"):t?this._t("area_header.open_count",{active:t,total:e}):this._t("common.closed"):1===e?this._t(t?"common.on":"common.off"):t?this._t("area_header.on_count",{active:t,total:e}):this._t("common.off")}_renderAreaQuickTiles(t,e){const i=e.filter(t=>t.entity_id.startsWith("light.")),a=e.filter(t=>t.entity_id.startsWith("switch.")),o=e.filter(t=>t.entity_id.startsWith("cover.")),r=e.filter(t=>t.entity_id.startsWith("fan.")),n=e.filter(t=>t.entity_id.startsWith("climate."));if(!(i.length||a.length||o.length||r.length||n.length))return c;const d=(t,e,i,a,o,r)=>{const n=i>0,c=this._t(`domain.${t}`),d=this._areaTileState(i,e,"on"),l=this._t(n?o[1]:o[0],{active:i,total:e});return s`
        <button
          class="dd-room-tile ${t} ${n?"is-on":""}"
          type="button"
          aria-pressed=${n?"true":"false"}
          title=${l}
          aria-label=${`${c}: ${d}. ${l}`}
          @click=${r}
        >
          <span class="dd-room-tile-icon">
            <ha-icon icon=${n?a[1]:a[0]}></ha-icon>
          </span>
          <span class="dd-room-tile-copy">
            <span class="dd-room-tile-label">${c}</span>
            <span class="dd-room-tile-state">${d}</span>
          </span>
          <span class="dd-room-tile-switch" aria-hidden="true"></span>
        </button>
      `},l=this._countActiveEntities(o,"cover"),p=this._countActiveEntities(n,"climate"),m=1===n.length?this.hass.states[n[0].entity_id]:void 0,h=m?.attributes?.current_temperature,g=this.hass.config?.unit_system?.temperature||"°",u=null!=h?D(h,g):this._tp("common.entity",n.length);return s`
      <div class="dd-room-tiles">
        ${i.length?d("light",i.length,this._countActiveEntities(i,"light"),["mdi:lightbulb-outline","mdi:lightbulb"],["action.lights_on_summary","action.lights_off_summary"],()=>this._toggleAreaLights(t)):c}
        ${a.length?d("switch",a.length,this._countActiveEntities(a,"switch"),["mdi:power-plug-off-outline","mdi:power-plug"],["action.switches_on_summary","action.switches_off_summary"],()=>this._toggleAreaSwitches(t)):c}
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
                @click=${()=>{this._setAreaCoverState(t,!0)}}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon>
              </button>
              <button
                class="dd-room-tile-action"
                type="button"
                title=${this._t("action.close_all")}
                aria-label=${this._t("action.close_all")}
                @click=${()=>{this._setAreaCoverState(t,!1)}}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon>
              </button>
            </span>
          </div>
        `:c}
        ${r.length?d("fan",r.length,this._countActiveEntities(r,"fan"),["mdi:fan-off","mdi:fan"],["action.fans_on_summary","action.fans_off_summary"],()=>this._toggleAreaFans(t)):c}
        ${n.length?s`
          <button
            class="dd-room-tile climate ${p>0?"is-on":""}"
            type="button"
            title=${this._t("action.open_climate_controls")}
            aria-label=${`${this._t("domain.climate")}: ${u}. ${this._t("action.open_climate_controls")}`}
            @click=${()=>this._openAreaClimateControls(t,n)}
          >
            <span class="dd-room-tile-icon">
              <ha-icon icon=${b("climate")}></ha-icon>
            </span>
            <span class="dd-room-tile-copy">
              <span class="dd-room-tile-label">${this._t("domain.climate")}</span>
              <span class="dd-room-tile-state">${u}</span>
            </span>
            <ha-icon class="dd-room-tile-chevron" icon="mdi:chevron-right" aria-hidden="true"></ha-icon>
          </button>
        `:c}
      </div>
    `}_renderAreaCompactBar(t,e,i,a,o,r){const n=this._areaHeaderStuck,d=[e.temperature,e.humidity].filter(Boolean).join(" · ");return s`
      <div class="dd-room-compact ${n?"is-visible":""}" ?inert=${!n} aria-hidden=${n?"false":"true"}>
        <div class="dd-room-compact-panel">
          <div class="dd-room-compact-bar">
            ${a}
            <div class="dd-room-compact-title">
              <strong>${t.name}</strong>
              <span>${d||i}</span>
            </div>
            <div class="dd-page-header-actions">${o}</div>
          </div>
          ${n&&this._areaHeaderRevealed?r:c}
        </div>
      </div>
    `}_renderAreaHeaderReadings(t){return[t.temperature?s`
        <span class="dd-page-header-reading temperature" title=${this._t("home.temperature")}>
          <ha-icon icon="mdi:thermometer" aria-hidden="true"></ha-icon>
          <span class="dd-visually-hidden">${this._t("home.temperature")}</span>
          ${t.temperature}
        </span>
      `:c,t.humidity?s`
        <span class="dd-page-header-reading humidity" title=${this._t("home.humidity")}>
          <ha-icon icon="mdi:water-percent" aria-hidden="true"></ha-icon>
          <span class="dd-visually-hidden">${this._t("home.humidity")}</span>
          ${t.humidity}
        </span>
      `:c]}_renderAreaMobileCameraAction(t){const e=t.find(t=>{if(!t.entity_id.startsWith("camera."))return!1;const e=this.hass?.states?.[t.entity_id]?.state;return Boolean(e&&"unavailable"!==e&&"unknown"!==e)});return e?s`
      <button
        class="dd-page-header-button"
        type="button"
        title=${this._t("action.open_camera")}
        aria-label=${this._t("action.open_camera")}
        @click=${()=>this._showMoreInfo(e.entity_id)}
      >
        <ha-icon icon="mdi:video-outline"></ha-icon>
      </button>
    `:c}_openAreaClimateControls(t,e){0!==e.length&&(1!==e.length?te(this,{domain:"climate",areaId:t,config:this.config,customTitle:f(this.hass,"climate"),customEntities:e.map(t=>t.entity_id)}):this._showMoreInfo(e[0].entity_id))}async _toggleAreaSwitches(t){const e=this._getFilteredAreaEntities(t).filter(t=>t.entity_id.startsWith("switch."));if(0===e.length)return;const i=this._areAllEntitiesOff(e,"switch");if(!await this._confirmMasterActionIfNeeded("switch",i,e.length,t))return;const a=i?"turn_on":"turn_off",o=e.map(t=>t.entity_id);this._setOptimisticEntityStates(o,i?"on":"off");try{await this.hass.callService("switch",a,{entity_id:o}),this._showToast(this._t(i?"action.all_switches_on":"action.all_switches_off"))}catch(e){this._clearOptimisticEntityStates(o),console.warn(`Failed to toggle switches in area ${t}:`,e),this._showToast(this._t("entity.switches_failed"))}}async _toggleAreaFans(t){const e=this._getFilteredAreaEntities(t).filter(t=>t.entity_id.startsWith("fan."));if(0===e.length)return;const i=this._areAllEntitiesOff(e,"fan");if(!await this._confirmMasterActionIfNeeded("fan",i,e.length,t))return;const a=i?"turn_on":"turn_off",o=e.map(t=>t.entity_id);this._setOptimisticEntityStates(o,i?"on":"off");try{await this.hass.callService("fan",a,{entity_id:o}),this._showToast(this._t(i?"action.all_fans_on":"action.all_fans_off"))}catch(e){this._clearOptimisticEntityStates(o),console.warn(`Failed to toggle fans in area ${t}:`,e),this._showToast(this._t("entity.fans_failed"))}}async _setAreaCoverState(t,e){const i=this._getFilteredAreaEntities(t).filter(t=>t.entity_id.startsWith("cover."));if(0===i.length)return;if(!await this._confirmMasterActionIfNeeded("cover",e,i.length,t))return;const a=e?"open_cover":"close_cover",o=i.map(t=>t.entity_id);this._setOptimisticEntityStates(o,e?"open":"closed");try{await this.hass.callService("cover",a,{entity_id:o}),this._showToast(this._t(e?"action.open_all":"action.close_all"))}catch(i){this._clearOptimisticEntityStates(o),console.warn(`Failed to ${e?"open":"close"} covers in area ${t}:`,i),this._showToast(this._t("entity.covers_failed"))}}_renderAreaView(){if(!this._selectedArea)return c;const t=this.config?.areas?.find(t=>t.area_id===this._selectedArea);if(!t)return c;const e=this._getFilteredAreaEntities(this._selectedArea),i=this._editMode?this._getEditableAreaEntities(this._selectedArea):e,a=this._getCachedAreaData(t),o=Boolean(t.picture),r=this._getAreaDeviceCount(t.area_id,e),n=this._areaThermostatEntityId(e),d=n?e.filter(t=>t.entity_id!==n):e,p=this._tp("common.device",r),m=this._renderAreaQuickTiles(t.area_id,d),h=m!==c||Boolean(n),g=s`
      <button
        class="dd-page-header-button dd-page-header-home"
        type="button"
        title=${this._t("sidebar.home")}
        aria-label=${this._t("navigation.back_home")}
        @click=${()=>this._selectView("home")}
      >
        <ha-icon icon="mdi:home"></ha-icon>
      </button>
    `,u=s`
      ${this._renderAreaMobileCameraAction(e)}
      ${this._renderUnavailableEntitiesIcon(t.area_id)}
      ${this._canManageDashboard()?s`
        <button
          class="dd-page-header-button ${this._editMode?"is-active":""}"
          type="button"
          aria-pressed=${this._editMode?"true":"false"}
          title=${this._editMode?this._t("layout.done_editing"):this._t("layout.edit_custom_cards")}
          aria-label=${this._editMode?this._t("layout.done_editing"):this._t("layout.edit_custom_cards")}
          @click=${this._toggleEditMode}
        >
          <ha-icon icon=${this._editMode?"mdi:check":"mdi:pencil"}></ha-icon>
        </button>
      `:c}
    `;return s`
      <div class="area-view">
        ${this._isMobile?this._renderAreaCompactBar(t,a,p,g,u,m):c}

        <header class="dd-page-header room-header">
          <div class="dd-page-header-with-media">
            <div class="dd-page-header-media-tile" aria-hidden="true">
              ${o?s`<div class="dd-page-header-room-picture" style=${`background-image: url('${t.picture}');`}></div>`:s`
                    <div class="dd-page-header-room-icon">
                      <ha-icon icon=${l(t)}></ha-icon>
                    </div>
                  `}
            </div>

            <div class="dd-page-header-main">
              <div class="dd-page-header-top">
                <div class="dd-page-header-identity">
                  <div class="dd-page-header-copy">
                    <div class="dd-page-header-title-row">
                      ${g}
                      <h1 class="dd-page-header-title">${t.name}</h1>
                    </div>
                    <div class="dd-page-header-subtitle">
                      <span>${p}</span>
                      ${this._renderAreaHeaderReadings(a)}
                    </div>
                  </div>
                </div>
                <div class="dd-page-header-actions">${u}</div>
              </div>

              ${h?s`
                <div class="dd-page-header-strip">
                  ${m}
                  ${n?s`
                    <dwains-dashboard-next-area-thermostat
                      .hass=${this.hass}
                      .entityId=${n}
                      .roomName=${t.name}
                    ></dwains-dashboard-next-area-thermostat>
                  `:c}
                </div>
              `:c}
            </div>
          </div>
        </header>

        ${this._isMobile?c:this._renderNowPlayingBar(!1)}
        ${this._renderCustomCardSlot(t.area_id,"top",this._t("layout.custom_cards_top"))}
        ${this._renderMobileEntitiesSection(t,i)}
        ${this._renderCustomCardSlot(t.area_id,"bottom",this._t("layout.custom_cards_bottom"))}
      </div>
    `}_renderRoomFavoritesBlock(){const t=this._getEffectiveFavoriteEntities().length;if(!t)return c;const e=()=>this._toggleHeader();return s`
      <section class="room-favorites-block ${this._headerExpanded?"":"is-collapsed"}">
        <div
          class="mobile-domain-header room-favorites-header expandable-header"
          role="button"
          tabindex="0"
          aria-expanded=${this._headerExpanded?"true":"false"}
          @click=${e}
          @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),e())}}
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
              <span class="mobile-domain-count">(${t})</span>
            </span>
          </div>

        </div>

        <div class="room-favorites-content" style=${this._headerExpanded?"":"display:none"}>
          ${this._renderFavoritesSection()}
        </div>
      </section>
    `}_renderCustomCardSlot(t,e,i,a=!1){const o=this._canManageDashboard();!o&&this._editMode&&(this._editMode=!1);const r=this._getAreaCustomCards(t).filter(t=>t.placement===e);if(0===r.length&&!this._editMode)return c;const n=this._customCardDragOver?.areaId===t&&this._customCardDragOver.placement===e&&this._customCardDragOver.index===r.length,l={"dd-custom-section":!0,"after-domain":a,editing:this._editMode&&o,"drag-over":Boolean(n)};return s`
      <div
        class=${d(l)}
        @dragover=${i=>this._handleCustomSlotDragOver(i,t,e,r.length)}
        @drop=${i=>this._handleCustomCardDrop(i,t,e,r.length)}
      >
        ${this._editMode&&o||r.length?s`
              <div class="dd-custom-slot-head">
                <div class="dd-custom-slot-title">
                  <ha-icon icon="mdi:cards-outline"></ha-icon>
                  <span>${this._editMode&&o?i:this._t("layout.custom_cards")}</span>
                </div>
                ${this._editMode&&o?s`
                  <button class="dd-add-card-inline" @click=${()=>this._addCard(t,e,r.length)}>
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span>${this._t("layout.add_card")}</span>
                  </button>
                `:c}
              </div>
            `:c}
        <div class="dd-custom-grid">
          ${m(r,t=>t.id,(e,i)=>this._renderCustomCard(t,e,i))}
        </div>
      </div>
    `}_renderCustomCard(t,e,i){const a=this._customCardDrag?.areaId===t&&this._customCardDrag.cardId===e.id,o=this._customCardDragOver?.areaId===t&&this._customCardDragOver.placement===e.placement&&this._customCardDragOver.index===i,r={"dd-custom-card-wrap":!0,"dd-grid-full":"full"===e.card?.grid_options?.columns,editing:this._editMode,dragging:a,"drag-over":o};return s`
      <div
        class=${d(r)}
        style=${zt(this._customCardGridStyle(e.card))}
        .draggable=${this._editMode}
        @dragstart=${i=>this._handleCustomCardDragStart(i,t,e.id)}
        @dragover=${a=>this._handleCustomSlotDragOver(a,t,e.placement,i)}
        @drop=${a=>this._handleCustomCardDrop(a,t,e.placement,i)}
        @dragend=${this._clearCustomCardDragState}
      >
        <div class="dd-card-toolbar">
          <button class="drag" title=${this._t("layout.drag_card")} aria-label=${this._t("layout.drag_card")}>
            <ha-icon icon="mdi:drag"></ha-icon>
          </button>
          <button title=${this._t("common.edit")} @click=${()=>this._editCard(t,e.id)}>
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button class="del" title=${this._t("common.delete")} @click=${()=>this._deleteCard(t,e.id)}>
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
        <dwains-dashboard-next-card-host .hass=${this.hass} .config=${e.card}></dwains-dashboard-next-card-host>
      </div>
    `}_customCardGridStyle(t){const e=t?.grid_options;if(!e||"object"!=typeof e)return{};const i={};if("full"===e.columns)i["--dd-card-grid-column"]="1 / -1";else if("number"==typeof e.columns&&Number.isFinite(e.columns)){const t=Math.max(1,Math.min(12,Math.round(e.columns)));i["--dd-card-grid-column"]=`span ${t}`}if("number"==typeof e.rows&&Number.isFinite(e.rows)){const t=Math.max(1,Math.min(12,Math.round(e.rows)));i["--dd-card-grid-min-height"]=56*t+8*(t-1)+"px"}return i}_getDomainSlotCustomCards(t,e,i,a){const o=this._customCardPlacementInDomain(e,i),r=this._customCardPlacementAfter(e);return this._getAreaCustomCards(t).filter(t=>{if(t.placement===o)return!0;const n=this._domainCustomCardPlacementIndex(t.placement,e);return i===a&&void 0!==n&&n>a||i===a&&t.placement===r})}_domainCustomCardPlacementIndex(t,e){const i=`domain:${e}:`;if(!t.startsWith(i))return;const a=Number(t.slice(i.length));return Number.isFinite(a)&&a>=0?a:void 0}_placementIndexForCard(t,e){const i=e.get(t.placement)||0;return e.set(t.placement,i+1),i}_renderDomainCustomCardSlot(t,e,i,a){const o=this._canManageDashboard();!o&&this._editMode&&(this._editMode=!1);const r=this._customCardPlacementInDomain(e,i),n=this._getDomainSlotCustomCards(t,e,i,a),d=n.filter(t=>t.placement===r).length,l=new Map,p=this._customCardDragOver?.areaId===t&&this._customCardDragOver.placement===r&&this._customCardDragOver.index===d;return 0!==n.length||this._editMode?s`
      ${n.map(e=>this._renderCustomCard(t,e,this._placementIndexForCard(e,l)))}
      ${this._editMode&&o&&i===a?s`
        <button
          class="dd-add-card dd-domain-add-card dd-domain-add-card-final ${p?"drag-over":""}"
          @click=${()=>this._addCard(t,r,d)}
          @dragover=${e=>this._handleCustomSlotDragOver(e,t,r,d)}
          @drop=${e=>this._handleCustomCardDrop(e,t,r,d)}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
          <span>${this._t("layout.add_card")}</span>
        </button>
      `:c}
    `:c}_renderUngroupedCustomCardSlot(t,e,i){const a=this._canManageDashboard();!a&&this._editMode&&(this._editMode=!1);const o=`ungrouped:${Math.max(0,e)}`,r=this._getAreaCustomCards(t).filter(t=>t.placement===o),n=this._customCardDragOver?.areaId===t&&this._customCardDragOver.placement===o&&this._customCardDragOver.index===r.length;return r.length||this._editMode?s`
      ${r.map((e,i)=>this._renderCustomCard(t,e,i))}
      ${this._editMode&&a&&e===i?s`
        <button
          class="dd-add-card dd-domain-add-card dd-domain-add-card-final ${n?"drag-over":""}"
          @click=${()=>this._addCard(t,o,r.length)}
          @dragover=${e=>this._handleCustomSlotDragOver(e,t,o,r.length)}
          @drop=${e=>this._handleCustomCardDrop(e,t,o,r.length)}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
          <span>${this._t("layout.add_card")}</span>
        </button>
      `:c}
    `:c}_fireNativeDialog(t,e){this.dispatchEvent(new CustomEvent("show-dialog",{bubbles:!0,composed:!0,detail:{dialogTag:t,dialogImport:()=>Promise.resolve(),dialogParams:e}}))}_customCardPlacementAfter(t){return`after:${t}`}_customCardPlacementInDomain(t,e){return`domain:${t}:${Math.max(0,e)}`}_customCardId(){return`area-card-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}_getAreaCustomCards(t){const e=this.config?.areas_options?.[t]||{};return Array.isArray(e.custom_cards)?e.custom_cards.map((t,e)=>({id:String(t?.id||`generated-${e}`),placement:String(t?.placement||"bottom"),card:t?.card})).filter(t=>t.card&&"object"==typeof t.card):[]}_getPersistableAreaCustomCards(t){return this._getAreaCustomCards(t).map(t=>({id:t.id,placement:t.placement||"bottom",card:t.card}))}_normalizeAreaCustomCardsForSave(t){return t.map(t=>({id:t.id.startsWith("generated-")?this._customCardId():t.id,placement:t.placement||"bottom",card:t.card}))}_insertIndexForPlacement(t,e,i){let a=0,o=-1;for(let r=0;r<t.length;r+=1){const n=t[r];if(n&&n.placement===e){if(a>=i)return r;a+=1,o=r}}return o>=0?o+1:t.length}_insertAreaCustomCard(t,e,i,a){const o=this._getPersistableAreaCustomCards(t),r=this._insertIndexForPlacement(o,i,a);o.splice(r,0,{id:this._customCardId(),placement:i,card:e}),this._saveAreaCustomCards(t,o)}_replaceAreaCustomCard(t,e,i){const a=this._getPersistableAreaCustomCards(t),o=a.findIndex(t=>t.id===e);if(o<0)return;const r=a[o];r&&(a[o]={...r,card:i},this._saveAreaCustomCards(t,a))}_addCard(t,e="bottom",i=Number.POSITIVE_INFINITY){if(this._canManageDashboard())if(customElements.get("hui-dialog-create-card")){const a={views:[{title:this.config?.areas?.find(e=>e.area_id===t)?.name||"Dwains",type:"sections",sections:[{type:"grid",cards:[]}]}]};this._fireNativeDialog("hui-dialog-create-card",{lovelaceConfig:a,path:[0,0],saveConfig:a=>{const o=a?.views?.[0]?.sections?.[0]?.cards||[],r=o[o.length-1];r&&this._insertAreaCustomCard(t,r,e,i)}})}else this._addCardYaml(t,e,i)}_editCard(t,e){if(!this._canManageDashboard())return;const i=this._getAreaCustomCards(t).find(t=>t.id===e)?.card;if(i)if(customElements.get("hui-dialog-edit-card")){const a={type:"grid",cards:[i]},o={views:[{title:"Dwains",type:"sections",sections:[a]}]};this._fireNativeDialog("hui-dialog-edit-card",{lovelaceConfig:o,cardConfig:i,sectionConfig:a,saveCardConfig:i=>{i?.type&&this._replaceAreaCustomCard(t,e,i)}})}else this._editCardYaml(t,e)}_addCardYaml(t,e="bottom",i=Number.POSITIVE_INFINITY){this._canManageDashboard()&&Y(this,{areaName:this.config?.areas?.find(e=>e.area_id===t)?.name,onSave:a=>{this._insertAreaCustomCard(t,a,e,i)}})}_editCardYaml(t,e){if(!this._canManageDashboard())return;const i=this._getAreaCustomCards(t).find(t=>t.id===e)?.card;i&&Y(this,{card:i,areaName:this.config?.areas?.find(e=>e.area_id===t)?.name,onSave:i=>{this._replaceAreaCustomCard(t,e,i)}})}_deleteCard(t,e){if(!this._canManageDashboard())return;if(!confirm(this._t("layout.delete_card_confirm")))return;const i=this._getPersistableAreaCustomCards(t).filter(t=>t.id!==e);this._saveAreaCustomCards(t,i)}_handleCustomCardDragStart(t,e,i){this._editMode&&this._canManageDashboard()?(this._clearGeneratedCardDragState(),this._customCardDrag={areaId:e,cardId:i},this._customCardDragOver=null,t.dataTransfer?.setData("text/plain",i),t.dataTransfer&&(t.dataTransfer.effectAllowed="move")):t.preventDefault()}_handleCustomSlotDragOver(t,e,i,a){this._editMode&&this._customCardDrag&&this._customCardDrag.areaId===e&&(t.preventDefault(),t.stopPropagation(),t.dataTransfer&&(t.dataTransfer.dropEffect="move"),this._customCardDragOver={areaId:e,placement:i,index:a})}_handleCustomCardDrop(t,e,i,a){this._customCardDrag&&this._customCardDrag.areaId===e&&(t.preventDefault(),t.stopPropagation(),this._moveAreaCustomCard(e,this._customCardDrag.cardId,i,a),this._clearCustomCardDragState())}_moveAreaCustomCard(t,e,i,a){const o=this._getPersistableAreaCustomCards(t),r=o.findIndex(t=>t.id===e);if(r<0)return;const n=o[r];if(!n)return;const s=n.placement||"bottom",c=o.slice(0,r).filter(t=>t.placement===s).length,[d]=o.splice(r,1);if(!d)return;let l=a;s===i&&c<a&&(l=Math.max(0,a-1)),d.placement=i;const p=this._insertIndexForPlacement(o,i,l);o.splice(p,0,d),this._saveAreaCustomCards(t,o)}_getDashboardUrlPath(){const t=window.location.pathname.split("/")[1];if(t&&"lovelace"!==t)return t}async _saveAreaCustomCards(t,e){const i=this._normalizeAreaCustomCardsForSave(e);await this._saveAreaOptionsPatch(t,{custom_cards:i})}async _saveAreaOptionsPatch(t,e){if(!this._canManageDashboard())return;const i=this._editMode&&"area"===this._selectedView&&this._selectedArea===t;i&&this._rememberAreaEditMode(t);const a=this.config.areas_options||{};this.config={...this.config,areas_options:{...a,[t]:{...a[t]||{},...e}}},i&&(this._editMode=!0),this.requestUpdate();try{const i=this._getDashboardUrlPath(),a=i?{url_path:i}:{},o=await this.hass.callWS({type:"lovelace/config",...a});if(o&&o.strategy){const i=o.strategy,r=i.areas_options||{},n={...o,strategy:{...i,areas_options:{...r,[t]:{...r[t]||{},...e}}}};await this.hass.callWS({type:"lovelace/config/save",...a,config:n}),console.log("✅ Area options saved for",t)}else console.warn("⚠️ No dashboard strategy found; area options were not saved",o)}catch(t){console.error("❌ Saving area options failed:",t),alert(this._t("layout.save_card_failed",{error:String(t)}))}}_renderMobileEntitiesSection(t,e){const i=this._sortAreaEntities(t.area_id,e);if("ungrouped"===this.config?.areas_options?.[t.area_id]?.entity_layout)return this._renderUngroupedAreaEntities(t,i);const a=this._sortAreaEntityGroups(t.area_id,this._mobileEntityGroups(t.area_id,i));if(!a.length)return c;const o=this._isMobile&&!this._editMode&&!this._renderAllMobileAreaEntities&&a.length>4?a.slice(0,4):a;return s`
      <section class="mobile-entities-section layout-${this._mobileEntityLayout}">
        ${o.map(e=>{const i=this._mobileControllableEntities(e.entities).length>0,o=`${t.area_id}:${e.key}`,r=!this._editMode&&Boolean(this._collapsedAreaGroups[o]),n=e.entities[0]?.entity_id.split(".")[0]||e.key,l=e.entities[0]?this.hass.states[e.entities[0].entity_id]?.attributes?.device_class:void 0,p="cover"===n?"#E98A3B":h(n,l),g=this._isMobile&&!this._editMode&&!this._renderAllMobileAreaEntities&&e.entities.length>12?e.entities.slice(0,12):e.entities,u=g.map(t=>t.entity_id);return s`
            <div
              class=${d({"mobile-domain-group":!0,"group-editing":this._editMode&&this._canManageDashboard(),"group-dragging":this._generatedGroupDrag?.areaId===t.area_id&&this._generatedGroupDrag.groupKey===e.key,"group-drag-over":this._generatedGroupDragOver?.areaId===t.area_id&&this._generatedGroupDragOver.groupKey===e.key,"is-collapsed":r})}
              @dragover=${i=>this._handleGeneratedGroupDragOver(i,t.area_id,e.key)}
              @drop=${i=>this._handleGeneratedGroupDrop(i,t.area_id,e.key,a.map(t=>t.key))}
            >
              <div
                class="mobile-domain-header expandable-header"
                role="button"
                tabindex="0"
                aria-expanded=${r?"false":"true"}
                @click=${()=>{this._editMode||(this._collapsedAreaGroups={...this._collapsedAreaGroups,[o]:!r})}}
                @keydown=${t=>{this._editMode||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._collapsedAreaGroups={...this._collapsedAreaGroups,[o]:!r})}}
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
                      @click=${t=>t.stopPropagation()}
                      @dragstart=${i=>this._handleGeneratedGroupDragStart(i,t.area_id,e.key)}
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
                    <ha-icon icon=${"todo"===e.key?"mdi:clipboard-list-outline":this._mobileGroupIcon(e.key)}></ha-icon>
                  </span>
                  <span class="mobile-domain-title-copy">
                    <span class="mobile-domain-title-label">${e.name}</span>
                    ${e.entities.length>0?s`
                      <span class="mobile-domain-count">(${e.entities.length})</span>
                    `:c}
                  </span>
                </div>

                <div
                  class="mobile-domain-header-actions"
                  @click=${t=>t.stopPropagation()}
                  @keydown=${t=>t.stopPropagation()}
                >
                  ${i?this._renderMobileDomainMaster(e):c}
                </div>
	              </div>
	              <div class="mobile-entity-rail" style=${r?"display:none":""}>
	                ${this._renderDomainCustomCardSlot(t.area_id,e.key,0,g.length)}
	                ${m(g,t=>t.entity_id,(i,a)=>s`
                      ${this._renderEditableGeneratedCard(t,i,e.key,a,u)}
                      ${this._renderDomainCustomCardSlot(t.area_id,e.key,a+1,g.length)}
                    `)}
	              </div>
	            </div>
	          `})}
      </section>
    `}_renderUngroupedAreaEntities(t,e){const i=this._getAreaCustomCards(t.area_id).some(t=>t.placement.startsWith("ungrouped:")||t.placement.startsWith("domain:")||t.placement.startsWith("after:"));if(!e.length&&!i&&!this._editMode)return c;const a="grid"===this._mobileEntityLayout,o=new Map;e.forEach(t=>{const e=this._mobileEntityTypeKey(t.entity_id)||"other";o.set(e,(o.get(e)||0)+1)});const r=new Map;return s`
      <section class="mobile-entities-section area-ungrouped-entities layout-${this._mobileEntityLayout}">
        <div class="mobile-domain-group area-ungrouped-group">
          <div class="mobile-domain-header">
            <div class="mobile-domain-title">
              <button
                class="mobile-layout-toggle ${a?"active":""}"
                type="button"
                title=${a?this._t("layout.swipe_cards"):this._t("layout.show_all_cards")}
                aria-label=${a?this._t("layout.switch_swipe_cards"):this._t("layout.show_all_cards")}
                @click=${this._toggleMobileEntityLayout}
              >
                <ha-icon icon=${a?"mdi:view-carousel-outline":"mdi:view-grid-outline"}></ha-icon>
              </button>
              <span class="mobile-domain-title-copy">
                <span class="mobile-domain-title-label">${this._t("layout.entities")}</span>
                <span class="mobile-domain-count">(${this._tp("common.entity",e.length)})</span>
              </span>
            </div>
          </div>
          <div class="mobile-entity-rail">
            ${this._renderUngroupedCustomCardSlot(t.area_id,0,e.length)}
            ${e.map((i,a)=>{const n=this._mobileEntityTypeKey(i.entity_id)||"other",d=r.get(n)||0,l=o.get(n)||0;return r.set(n,d+1),s`
                ${0===d?this._renderDomainCustomCardSlot(t.area_id,n,0,l):c}
                ${this._renderEditableGeneratedCard(t,i,le,a,e.map(t=>t.entity_id))}
                ${this._renderDomainCustomCardSlot(t.area_id,n,d+1,l)}
                ${this._renderUngroupedCustomCardSlot(t.area_id,a+1,e.length)}
              `})}
          </div>
        </div>
      </section>
    `}_renderMobileDomainMaster(t){const e=this._mobileControllableEntities(t.entities);if(!e.length)return c;const i=e[0].entity_id.split(".")[0]||t.key,a=e.filter(t=>{const e=this._getEffectiveEntityState(this.hass.states[t.entity_id]);return this._isEntityActiveForUi(e,i)}).length,o=a>0;if("cover"===i)return this._renderMobileDomainActions(i,e,[{turnOn:!0,label:this._t("action.open_all"),icon:"mdi:arrow-up",active:o},{turnOn:!1,label:this._t("action.close_all"),icon:"mdi:arrow-down",active:!o}]);if("lock"===i)return this._renderMobileDomainActions(i,e,[{turnOn:!1,label:this._t("action.lock_all"),icon:"mdi:lock-outline",active:!o},{turnOn:!0,label:this._t("action.unlock_all"),icon:"mdi:lock-open-variant-outline",active:o}]);const r=this._mobileDomainMasterLabel(i,o,a,e.length),n=this._mobileDomainMasterIcon(i,o);return s`
      <button
        class="mobile-domain-master domain-${i} ${o?"active":""}"
        type="button"
        title=${r}
        aria-label=${r}
        aria-pressed=${o?"true":"false"}
        @click=${t=>{t.stopPropagation(),this._requestMobileGroupState(e,!o,i)}}
      >
        <ha-icon icon=${n}></ha-icon>
        <span class="mobile-domain-master-count">${a}/${e.length}</span>
        <span class="mobile-domain-master-track" aria-hidden="true"></span>
      </button>
    `}_renderMobileDomainActions(t,e,i){return s`
      <div class="mobile-domain-master-actions domain-${t}" role="group">
        ${i.map(i=>s`
          <button
            class="mobile-domain-master-action ${i.active?"active":""}"
            type="button"
            title=${i.label}
            aria-label=${i.label}
            @click=${a=>{a.stopPropagation(),this._requestMobileGroupState(e,i.turnOn,t)}}
          >
            <ha-icon icon=${i.icon}></ha-icon>
          </button>
        `)}
      </div>
    `}_mobileDomainMasterLabel(t,e,i,a){return"light"===t?this._t(e?"action.lights_off_summary":"action.lights_on_summary",{active:i,total:a}):"cover"===t?this._t(e?"action.covers_close_summary":"action.covers_open_summary",{active:i,total:a}):"fan"===t?this._t(e?"action.fans_off_summary":"action.fans_on_summary",{active:i,total:a}):"lock"===t?this._t(e?"action.lock":"action.unlock"):this._t(e?"action.switches_off_summary":"action.switches_on_summary",{active:i,total:a})}_mobileDomainMasterIcon(t,e){return"light"===t?e?"mdi:lightbulb":"mdi:lightbulb-outline":"switch"===t?e?"mdi:power-plug":"mdi:power-plug-off-outline":"fan"===t?e?"mdi:fan":"mdi:fan-off":"cover"===t?e?"mdi:window-shutter-open":"mdi:window-shutter":"lock"===t?e?"mdi:lock-open-variant-outline":"mdi:lock-outline":e?"mdi:toggle-switch":"mdi:toggle-switch-off-outline"}_customCardDomainGroupKeys(t){const e=[];return this._getAreaCustomCards(t).forEach(t=>{let i;if(t.placement.startsWith("domain:")){const e=/^domain:(.+):\d+$/.exec(t.placement);i=e?.[1]}else t.placement.startsWith("after:")&&(i=t.placement.slice(6));i&&!e.includes(i)&&e.push(i)}),e}_mobileEntityGroups(t,e){const i=e.reduce((t,e)=>{const i=this._mobileEntityTypeKey(e.entity_id);return i?(t[i]||(t[i]=[]),t[i].push(e),t):t},{});this._customCardDomainGroupKeys(t).forEach(t=>{i[t]||(i[t]=[])});const a=["light","switch","cover","climate","todo","scene","event","motion","binary_sensor","sensor","media_player","fan","lock","camera","vacuum"];return Object.entries(i).sort(([t],[e])=>{const i=a.indexOf(t),o=a.indexOf(e);return-1!==i||-1!==o?(-1===i?999:i)-(-1===o?999:o):this._mobileGroupName(t).localeCompare(this._mobileGroupName(e))}).map(([t,e])=>({key:t,name:this._mobileGroupName(t),icon:this._mobileGroupIcon(t),entities:e}))}_sortAreaEntityGroups(t,e){const i=this.config?.areas_options?.[t]?.group_order||[];if(!i.length)return e;const a=t=>{const e=i.indexOf(t);if(e>=0)return e;if(v.includes(t)){const e=i.indexOf(w(t));if(e>=0)return e}};return e.map((t,e)=>({group:t,fallbackIndex:e})).sort((t,e)=>{const i=a(t.group.key),o=a(e.group.key);return void 0!==i&&void 0!==o?i!==o?i-o:t.fallbackIndex-e.fallbackIndex:void 0!==i?-1:void 0!==o?1:t.fallbackIndex-e.fallbackIndex}).map(({group:t})=>t)}_sortAreaEntities(t,e){const i=this.config?.areas_options?.[t],a="ungrouped"===i?.entity_layout,o=new Map((i?.entity_order||[]).map((t,e)=>[t,e]));return[...e].sort((t,e)=>{if(a){const i=o.get(t.entity_id),a=o.get(e.entity_id);if(void 0!==i&&void 0!==a)return i-a;if(void 0!==i)return-1;if(void 0!==a)return 1}else{const a=this._mobileEntityTypeKey(t.entity_id);if(a===this._mobileEntityTypeKey(e.entity_id)&&a){const o=i?.groups_options?.[a],r=v.includes(a)?i?.groups_options?.[w(a)]:void 0,n=o?.order||r?.order||[],s=n.indexOf(t.entity_id),c=n.indexOf(e.entity_id);if(-1!==s&&-1!==c)return s-c;if(-1!==s)return-1;if(-1!==c)return 1}}const r=this.hass.states[t.entity_id]?.attributes?.friendly_name||t.entity_id,n=this.hass.states[e.entity_id]?.attributes?.friendly_name||e.entity_id,s=t.device_id||this.hass.entities?.[t.entity_id]?.device_id||"",c=e.device_id||this.hass.entities?.[e.entity_id]?.device_id||"";if(s!==c){const t=(t,e)=>t?this.config?.devices?.find(e=>e.device_id===t)?.name||t:e,e=t(s,r).localeCompare(t(c,n),yt(this.hass));if(0!==e)return e}return r.localeCompare(n,yt(this.hass))})}_renderEditableGeneratedCard(t,e,i,a,o){if(!this._editMode||!this._canManageDashboard())return this._renderMobileEntityCard(t,e);const r=this._isAreaEntityHidden(t.area_id,e.entity_id),n=this._generatedCardDrag?.areaId===t.area_id&&this._generatedCardDrag.entityId===e.entity_id,c=this._generatedCardDragOver?.areaId===t.area_id&&this._generatedCardDragOver.entityId===e.entity_id&&this._generatedCardDragOver.groupKey===i;return s`
      <div
        class=${d({"dd-generated-card-wrap":!0,editing:!0,"is-hidden":r,dragging:n,"drag-over":c})}
        draggable="true"
        @dragstart=${a=>this._handleGeneratedCardDragStart(a,t.area_id,e.entity_id,i)}
        @dragover=${a=>this._handleGeneratedCardDragOver(a,t.area_id,e.entity_id,i)}
        @drop=${e=>this._handleGeneratedCardDrop(e,t.area_id,i,a,o)}
        @dragend=${this._clearGeneratedCardDragState}
        @click=${t=>t.stopPropagation()}
      >
        ${this._renderMobileEntityCard(t,e,{areaId:t.area_id,hidden:r})}
      </div>
    `}_handleGeneratedGroupDragStart(t,e,i){this._editMode&&this._canManageDashboard()?(t.stopPropagation(),t.currentTarget?.blur(),this._clearCustomCardDragState(),this._clearGeneratedCardDragState(),this._generatedGroupDrag={areaId:e,groupKey:i},this._generatedGroupDragOver=null,t.dataTransfer?.setData("text/plain",i),t.dataTransfer&&(t.dataTransfer.effectAllowed="move")):t.preventDefault()}_handleGeneratedGroupDragOver(t,e,i){const a=this._generatedGroupDrag;this._editMode&&a&&a.areaId===e&&(t.preventDefault(),t.stopPropagation(),t.dataTransfer&&(t.dataTransfer.dropEffect="move"),this._generatedGroupDragOver={areaId:e,groupKey:i})}_handleGeneratedGroupDrop(t,e,i,a){const o=this._generatedGroupDrag;if(!o||o.areaId!==e)return;t.preventDefault(),t.stopPropagation();const r=a.indexOf(o.groupKey),n=a.indexOf(i);if(r<0||n<0||r===n)return void this._clearGeneratedGroupDragState();const s=[...a],[c]=s.splice(r,1);c&&s.splice(n,0,c);const d=this.shadowRoot?.querySelector(".content-area"),l=d?.scrollTop??0,p=window.scrollX,m=window.scrollY,h=this.shadowRoot?.activeElement;h?.blur();const g=()=>{d&&Math.abs(d.scrollTop-l)>1&&(d.scrollTop=l),(Math.abs(window.scrollY-m)>1||Math.abs(window.scrollX-p)>1)&&window.scrollTo(p,m)},u=()=>{this.updateComplete.then(()=>{requestAnimationFrame(()=>{g(),requestAnimationFrame(g)})})};try{window.sessionStorage.setItem("dd-next-room-dnd-scroll",JSON.stringify({areaId:e,pathname:window.location.pathname,contentScrollTop:l,windowScrollX:p,windowScrollY:m,expiresAt:Date.now()+1e4}))}catch{}const b=this._saveAreaOptionsPatch(e,{group_order:s});this._clearGeneratedGroupDragState(),u(),b.finally(()=>{u(),window.setTimeout(g,80),window.setTimeout(g,220)})}_handleGeneratedCardDragStart(t,e,i,a){this._editMode&&this._canManageDashboard()?(this._clearCustomCardDragState(),this._generatedCardDrag={areaId:e,entityId:i,groupKey:a},this._generatedCardDragOver=null,t.dataTransfer?.setData("text/plain",i),t.dataTransfer&&(t.dataTransfer.effectAllowed="move")):t.preventDefault()}_handleGeneratedCardDragOver(t,e,i,a){const o=this._generatedCardDrag;this._editMode&&o&&o.areaId===e&&o.groupKey===a&&(t.preventDefault(),t.stopPropagation(),t.dataTransfer&&(t.dataTransfer.dropEffect="move"),this._generatedCardDragOver={areaId:e,entityId:i,groupKey:a})}_handleGeneratedCardDrop(t,e,i,a,o){const r=this._generatedCardDrag;if(!r||r.areaId!==e||r.groupKey!==i)return;t.preventDefault(),t.stopPropagation();const n=o.indexOf(r.entityId);if(n<0)return void this._clearGeneratedCardDragState();const s=[...o],[c]=s.splice(n,1);if(!c)return void this._clearGeneratedCardDragState();if(s.splice(Math.max(0,Math.min(a,s.length)),0,c),i===le)return this._saveAreaOptionsPatch(e,{entity_order:s}),void this._clearGeneratedCardDragState();const d=new Set(s.map(t=>this._areaStrategyGroupKey(t)||i)),l=1!==d.size,p=l?i:Array.from(d)[0]||i,m=this.config?.areas_options?.[e],h=m?.groups_options||{},g=h[p]||{},u=this._getEditableAreaEntities(e).filter(t=>l?this._mobileEntityTypeKey(t.entity_id)===i:(this._areaStrategyGroupKey(t.entity_id)||i)===p).map(t=>t.entity_id),b=g.order||[],x=[...b.filter((t,e)=>u.includes(t)&&b.indexOf(t)===e),...u.filter(t=>!b.includes(t))],f=new Set(s);let v=0;const w=x.map(t=>f.has(t)&&s[v++]||t);this._saveAreaOptionsPatch(e,{groups_options:{...h,[p]:{...g,order:w}}}),this._clearGeneratedCardDragState()}_isAreaEntityHidden(t,e){const i=this.config?.areas_options?.[t]?.groups_options||{};return Object.values(i).some(t=>t.hidden?.includes(e))}_toggleGeneratedCardVisibility(t,e,i){if(t.preventDefault(),t.stopPropagation(),!this._canManageDashboard())return;const a=this.config?.areas_options?.[e],o=a?.groups_options||{},r=this._isAreaEntityHidden(e,i),n=Object.fromEntries(Object.entries(o).map(([t,e])=>[t,{...e,hidden:(e.hidden||[]).filter(t=>t!==i)}]));if(!r){const t=this._areaStrategyGroupKey(i)||this._mobileEntityTypeKey(i)||"others",e=n[t]||{};n[t]={...e,hidden:[...e.hidden||[],i]}}this._saveAreaOptionsPatch(e,{groups_options:n})}_areaStrategyGroupKey(t){return y(t,this.hass)||this._mobileEntityTypeKey(t)}_mobileEntityTypeKey(t){const e=y(t,this.hass);if(e)return e;return t.split(".")[0]||void 0}_mobileGroupName(t){return f(this.hass,t)}_mobileGroupIcon(t){return"motion"===t?"mdi:motion-sensor":b(t)}_areaReplacementCardConfig(t){const e=_({hass:this.hass,config:this.config,entity:t,surface:"area_cards"});return e&&!1!==e.enabled?k({hass:this.hass,config:this.config,entity:t,surface:"area_cards"}):null}_renderAreaReplacementCard(t,e){return s`
      <div class="mobile-entity-replacement-card" data-entity=${t}>
        <dwains-dashboard-next-card-host
          framed
          .hass=${this.hass}
          .config=${e}
        ></dwains-dashboard-next-card-host>
      </div>
    `}_renderMobileEntityCard(t,e,i){const a=this.hass.states[e.entity_id];if(!a)return c;const o=this._getEffectiveEntityState(a),r=e.entity_id.split(".")[0]||"unknown";if("todo"===r)return this._renderTodoListCard(e);const n=o.attributes?.device_class,d=this._areaReplacementCardConfig(e.entity_id);if(d)return this._renderAreaReplacementCard(e.entity_id,d);const l=["select","input_select"].includes(r)?b(r):this.hass.entities?.[e.entity_id]?.icon||o.attributes?.icon||g(r,n)||b(r),p=o.attributes?.friendly_name||this.hass.entities?.[e.entity_id]?.name||e.entity_id,m=!0===this.config?.settings?.hide_area_name_in_entity_names?X(p,t.name):p,h=this._isEntityActiveForUi(o,r),u=this._mobileEntityActionKind(r),x=["unavailable","unknown"].includes(String(o.state).toLowerCase()),f="scene"===r||"event"===r,v=this._mobileEntityHasInlineSelect(r,o),w=this._mobileEntityStatusText(o,r),y=["mobile-entity-card",`mobile-entity-${r}`,n?`device-${n}`:"",`action-${u}`,h?"is-active":"is-off",v?"has-inline-select":"",x&&!f?"is-unavailable":""].join(" ");return s`
      <article
        class=${y}
        style=${`--entity-color: ${this._mobileEntityColor(r,n)};`}
        role="button"
        tabindex="0"
        aria-label=${m}
        @click=${()=>this._showMoreInfo(e.entity_id)}
        @keydown=${t=>this._handleMobileEntityKeydown(t,e.entity_id)}
      >
        <div class="mobile-entity-main ${i?"editing-inline":""}">
          ${i?s`
            <button
              class="dd-generated-card-leading-drag-handle"
              type="button"
              title=${this._t("layout.drag_card")}
              aria-label=${this._t("layout.drag_card")}
              @click=${t=>t.stopPropagation()}
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
            ${i?s`
              <button
                class="dd-generated-card-visibility"
                type="button"
                title=${this._t(i.hidden?"common.show":"common.hide")}
                aria-label=${this._t(i.hidden?"common.show":"common.hide")}
                aria-pressed=${i.hidden?"true":"false"}
                @click=${t=>this._toggleGeneratedCardVisibility(t,i.areaId,e.entity_id)}
              >
                <ha-icon icon=${i.hidden?"mdi:eye":"mdi:eye-off-outline"}></ha-icon>
              </button>
            `:"more"===u?c:this._renderMobileEntityActions(o,r,h)}
          </div>
        </div>


        ${v?this._renderMobileEntitySelect(o,r):c}
      </article>
    `}_renderTodoListCard(t){return s`
      <div class="mobile-todo-list-card" data-entity=${t.entity_id}>
        <dwains-dashboard-next-card-host
          eager
          .hass=${this.hass}
          .config=${{type:"todo-list",entity:t.entity_id}}
        ></dwains-dashboard-next-card-host>
      </div>
    `}_handleMobileEntityKeydown(t,e){const i=t.target;i?.closest?.("button, select, input, textarea, a")||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._showMoreInfo(e))}_mobileEntityHasInlineSelect(t,e){return["select","input_select"].includes(t)&&Array.isArray(e?.attributes?.options)}_renderMobileEntitySelect(t,e){const i=this._mobileEntitySelectOptions(t),a=String(t?.state||""),o=["unavailable","unknown"].includes(a.toLowerCase())||0===i.length;return s`
      <label
        class="mobile-entity-select"
        @click=${t=>t.stopPropagation()}
        @keydown=${t=>t.stopPropagation()}
      >
        <select
          aria-label=${this._t("common.select_option")}
          ?disabled=${o}
          @change=${i=>this._handleMobileSelectChange(i,t,e)}
        >
          ${i.map(t=>s`
            <option value=${t} ?selected=${t===a}>${t}</option>
          `)}
        </select>
        <ha-icon class="mobile-select-chevron" icon="mdi:chevron-down"></ha-icon>
      </label>
    `}_mobileEntitySelectOptions(t){const e=String(t?.state||""),i=Array.isArray(t?.attributes?.options)?t.attributes.options.map(t=>String(t)):[];return!e||["unknown","unavailable"].includes(e.toLowerCase())||i.includes(e)?i:[e,...i]}_renderMobileEntityActions(t,e,i){const a=this._mobileEntityActionKind(e),o=["unavailable","unknown"].includes(String(t?.state||"").toLowerCase());if("toggle"===a)return s`
        <button
          class="mobile-entity-action mobile-entity-toggle"
          type="button"
          title=${i?this._t("action.turn_off"):this._t("action.turn_on")}
          aria-label=${i?this._t("action.turn_off"):this._t("action.turn_on")}
          ?disabled=${o}
          @click=${i=>this._handleMobileEntityToggle(i,t,e)}
        ></button>
      `;if("cover"===a)return this._renderMobileCoverActions(t);if("lock"===a){const i=this._isEntityActiveForUi(t,e);return s`
        <button
          class="mobile-entity-action mobile-lock-action ${i?"is-unlocked":""}"
          type="button"
          title=${i?this._t("action.lock"):this._t("action.unlock")}
          aria-label=${i?this._t("action.lock"):this._t("action.unlock")}
          ?disabled=${o}
          @click=${e=>this._handleMobileLockAction(e,t)}
        >
          <ha-icon icon=${i?"mdi:lock-open-variant-outline":"mdi:lock-outline"}></ha-icon>
        </button>
      `}return"scene"===a?s`
        <button
          class="mobile-entity-action mobile-scene-action"
          type="button"
          title=${this._t("action.activate")}
          aria-label=${this._t("action.activate")}
          @click=${e=>this._handleMobileSceneAction(e,t)}
        >
          <ha-icon icon="mdi:play"></ha-icon>
        </button>
      `:s`
      <button
        class="mobile-entity-action mobile-entity-more"
        type="button"
        title=${this._t("action.more_info")}
        aria-label=${this._t("action.more_info")}
        @click=${e=>{e.stopPropagation(),this._showMoreInfo(t?.entity_id)}}
      >
        <ha-icon icon="mdi:chevron-right"></ha-icon>
      </button>
    `}_renderMobileCoverActions(t){const e=String(t?.state||"").toLowerCase(),i=["unavailable","unknown"].includes(e),a=this._coverSupportsFeature(t,1),o=this._coverSupportsFeature(t,2),r=this._coverSupportsFeature(t,8);return s`
      <div class="mobile-cover-actions" @click=${t=>t.stopPropagation()}>
        ${a?s`
          <button
            class="mobile-entity-action mobile-cover-action ${"opening"===e?"active":""}"
            type="button"
            title=${this._t("action.open")}
            aria-label=${this._t("action.open")}
            ?disabled=${i}
            @click=${e=>this._handleMobileCoverAction(e,t,"open")}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
        `:c}
        ${r?s`
          <button
            class="mobile-entity-action mobile-cover-action ${"opening"===e||"closing"===e?"active":""}"
            type="button"
            title=${this._t("action.stop")}
            aria-label=${this._t("action.stop")}
            ?disabled=${i}
            @click=${e=>this._handleMobileCoverAction(e,t,"stop")}
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>
        `:c}
        ${o?s`
          <button
            class="mobile-entity-action mobile-cover-action ${"closing"===e?"active":""}"
            type="button"
            title=${this._t("action.close")}
            aria-label=${this._t("action.close")}
            ?disabled=${i}
            @click=${e=>this._handleMobileCoverAction(e,t,"close")}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
        `:c}
      </div>
    `}async _handleMobileEntityToggle(t,e,i){t.stopPropagation();const a=e?.entity_id;if(a){try{if(["light","switch","fan","input_boolean"].includes(i)){const t=!this._isEntityActiveForUi(e,i);return this._setOptimisticEntityState(a,t?"on":"off"),void await this.hass.callService(i,t?"turn_on":"turn_off",{entity_id:a})}}catch(t){return this._clearOptimisticEntityStates([a]),console.warn(`Failed to toggle mobile entity ${a}:`,t),void this._showToast(this._t("entity.update_failed"))}this._showMoreInfo(a)}}async _handleMobileSelectChange(t,e,i){t.stopPropagation();const a=t.currentTarget,o=e?.entity_id,r=a?.value;if(o&&void 0!==r){this._setOptimisticEntityState(o,r);try{await this.hass.callService("input_select"===i?"input_select":"select","select_option",{entity_id:o,option:r})}catch(t){this._clearOptimisticEntityStates([o]),console.warn(`Failed to select option for ${o}:`,t),this._showToast(this._t("entity.selector_failed"))}}}async _handleMobileCoverAction(t,e,i){t.stopPropagation();const a=e?.entity_id;if(!a)return;const o="open"===i?"open_cover":"close"===i?"close_cover":"stop_cover",r="open"===i?"open":"close"===i?"closed":void 0;r&&this._setOptimisticEntityState(a,r);try{await this.hass.callService("cover",o,{entity_id:a})}catch(t){this._clearOptimisticEntityStates([a]),console.warn(`Failed to ${i} cover ${a}:`,t),this._showToast(this._t("entity.cover_failed"))}}async _handleMobileLockAction(t,e){t.stopPropagation();const i=e?.entity_id;if(i)try{const t=this._isEntityActiveForUi(e,"lock");this._setOptimisticEntityState(i,t?"locked":"unlocked"),await this.hass.callService("lock",t?"lock":"unlock",{entity_id:i})}catch(t){this._clearOptimisticEntityStates([i]),console.warn(`Failed to toggle lock ${i}:`,t),this._showToast(this._t("entity.lock_failed"))}}async _handleMobileSceneAction(t,e){t.stopPropagation();const i=e?.entity_id;if(i)try{await this.hass.callService("scene","turn_on",{entity_id:i}),this._showToast(this._t("action.scene_activated"))}catch(t){console.warn(`Failed to activate scene ${i}:`,t),this._showMoreInfo(i)}}_mobileControllableEntities(t){return t.filter(t=>{const e=t.entity_id.split(".")[0]||"";return Boolean(this.hass.states[t.entity_id])&&this._mobileEntitySupportsToggle(e)})}_masterActionLabel(t,e){return"cover"===t?this._t(e?"action.open_all":"action.close_all"):"lock"===t?this._t(e?"action.unlock_all":"action.lock_all"):this._t(e?"action.turn_on_all":"action.turn_off_all")}_masterActionIsDestructive(t,e){return"lock"===t?e:!e}_areaDisplayName(t){return this.config?.areas?.find(e=>e.area_id===t)?.name||t}async _confirmMasterActionIfNeeded(t,e,i,a){const o=J(t);if(!o||!Q(this.config?.settings,o))return!0;const r=this._masterActionLabel(o,e);return this._showConfirmation(r,this._t("action.confirm_master_action",{count:i,area:this._areaDisplayName(a)}),{confirmLabel:r,destructive:this._masterActionIsDestructive(o,e)})}async _requestMobileGroupState(t,e,i){await this._confirmMasterActionIfNeeded(i,e,t.length,this._selectedArea||"")&&await this._setMobileGroupState(t,e,i)}async _setMobileGroupState(t,e,i){const a=this._mobileControllableEntities(t).reduce((t,e)=>{const i=e.entity_id.split(".")[0]||"";return t[i]||(t[i]=[]),t[i].push(e.entity_id),t},{}),o=[];try{await Promise.all(Object.entries(a).map(([t,i])=>i.length?["light","switch","fan","input_boolean"].includes(t)?(o.push(...i),this._setOptimisticEntityStates(i,e?"on":"off"),this.hass.callService(t,e?"turn_on":"turn_off",{entity_id:i})):"cover"===t?(o.push(...i),this._setOptimisticEntityStates(i,e?"open":"closed"),this.hass.callService("cover",e?"open_cover":"close_cover",{entity_id:i})):"lock"===t?(o.push(...i),this._setOptimisticEntityStates(i,e?"unlocked":"locked"),this.hass.callService("lock",e?"unlock":"lock",{entity_id:i})):Promise.resolve():Promise.resolve()));const t=Object.values(a).reduce((t,e)=>t+e.length,0),r=J(i);t&&r&&this._showToast(this._masterActionToast(r,e))}catch(t){this._clearOptimisticEntityStates(o),console.warn("Failed to run mobile group action:",t),this._showToast(this._t("entity.group_failed"))}}_mobileEntitySupportsToggle(t){return["light","switch","fan","input_boolean","cover","lock"].includes(t)}_masterActionToast(t,e){return"light"===t?this._t(e?"action.all_lights_on":"action.all_lights_off"):"switch"===t?this._t(e?"action.all_switches_on":"action.all_switches_off"):"fan"===t?this._t(e?"action.all_fans_on":"action.all_fans_off"):this._masterActionLabel(t,e)}_mobileEntityActionKind(t){return["light","switch","fan","input_boolean"].includes(t)?"toggle":"cover"===t?"cover":"lock"===t?"lock":"scene"===t?"scene":"more"}_coverSupportsFeature(t,e){const i=Number(t?.attributes?.supported_features);return!Number.isFinite(i)||i<=0?1===e||2===e:0!==(i&e)}_mobileEntityStatusText(t,e){if(!t)return"";const i=this._formatFavoriteState(t);if("scene"===e)return this._sceneLastActivatedText(t);if("event"===e)return this._eventLastTriggeredText(t);if("light"===e){const e=String(t.state||"").toLowerCase();if("on"===e||"off"===e){const i="on"===e?"An":"Aus",a=t.attributes?.brightness;return"number"==typeof a&&Number.isFinite(a)?`${i} · ${D(Math.round(a/255*100),"%")}`:i}}if("cover"===e&&"number"==typeof t.attributes?.current_position)return`${i} · ${D(t.attributes.current_position,"%")}`;if("climate"===e){const e=t.attributes?.current_temperature,i=t.attributes?.temperature,a=this.hass?.config?.unit_system?.temperature||"°C";if(void 0!==e&&void 0!==i)return`${D(e,a)} · ${this._t("entity.climate_set",{value:D(i,a)})}`;if(void 0!==e)return D(e,a)}return"media_player"===e&&t.attributes?.media_title?`${i} · ${t.attributes.media_title}`:i}_sceneLastActivatedText(t){const e=String(t?.state||"").toLowerCase(),i=e&&!["unknown","unavailable"].includes(e)?t.state:t?.last_changed||t?.last_updated,a=Date.parse(i);return Number.isFinite(a)?this._formatRelativeTime(a):this._t("entity.not_activated")}_eventLastTriggeredText(t){const e=String(t?.state||"").toLowerCase();if("unavailable"===e)return this._t("common.unavailable");const i=Date.parse(t?.last_changed||t?.last_updated||"");return Number.isFinite(i)?e&&"unknown"!==e?`${this._formatFavoriteState(t)} · ${this._formatRelativeTime(i)}`:this._formatRelativeTime(i):this._t("entity.no_events")}_formatRelativeTime(t){const e=Math.round((t-Date.now())/1e3),i=Math.abs(e),[a,o]=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60],["second",1]].find(([,t])=>i>=t)||["second",1],r=Math.round(e/o);try{const t=this.hass?.locale?.language||navigator.language||void 0;return new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(r,a)}catch{if(i<60)return"just now";const t=Math.abs(r);return`${t} ${a}${1===t?"":"s"} ${r<0?"ago":"from now"}`}}_isEntityActiveForUi(t,e){if(!t||["unavailable","unknown"].includes(String(t.state)))return!1;const i=String(t.state).toLowerCase();if("cover"===e)return["open","opening"].includes(i);if("lock"===e)return"unlocked"===i;if("climate"===e){const e=t.attributes?.hvac_action;return e&&"idle"!==e&&"off"!==e}return"media_player"===e?["playing","buffering"].includes(i):"vacuum"===e?["cleaning","returning"].includes(i):"alarm_control_panel"===e?i.startsWith("armed")||["arming","pending","triggered"].includes(i):"camera"!==e&&!["off","closed","locked","not_home","idle"].includes(i)}_mobileEntityColor(t,e){return"cover"===t?"#E98A3B":"sensor"!==t||"temperature"!==e&&"humidity"!==e?"sensor"===t&&"power"===e?h("wattage"):h(t,e):h(e,e)}_housePowerStatisticsEntities(t,e){return t.filter(t=>["measurement","total","total_increasing"].includes(t.stateClass||"")).sort((t,e)=>e.watts-t.watts).slice(0,e).map(t=>({entity:t.entityId,name:t.name}))}_renderHousePowerStatisticsGraph(t,e){return t.length?s`
      <dwains-dashboard-next-card-host
        class="house-power-statistics-card"
        aria-label=${e}
        .hass=${this.hass}
        .config=${{type:"statistics-graph",entities:t,days_to_show:1,period:"5minute",stat_types:["mean"],chart_type:"line",hide_legend:!0,fit_y_data:!0,min_y_axis:0}}
      ></dwains-dashboard-next-card-host>
    `:c}_renderToast(){return c}_renderConfirmationDialog(){const t=this._confirmationDialog;return t?s`
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
          @click=${t=>t.stopPropagation()}
          @keydown=${this._handleConfirmationKeydown}
        >
          <div id="dd-confirmation-title" class="confirmation-title">${t.title}</div>
          <div id="dd-confirmation-message" class="confirmation-message">${t.message}</div>
          <div class="confirmation-actions">
            <button
              class="confirmation-button cancel"
              type="button"
              @click=${()=>this._resolveConfirmation(!1)}
            >
              ${this._t("common.cancel")}
            </button>
            <button
              class=${"confirmation-button confirm "+(t.destructive?"destructive":"")}
              type="button"
              @click=${()=>this._resolveConfirmation(!0)}
            >
              ${t.confirmLabel}
            </button>
          </div>
        </div>
      </div>
    `:c}_getWeatherEntity(){if(this.config?.settings?.weather_entity_id){const t=this.hass.states[this.config.settings.weather_entity_id];if(t&&!this.hass.entities?.[t.entity_id]?.hidden_by)return t}return Object.values(this.hass.states).find(t=>t.entity_id.startsWith("weather.")&&!this.hass.entities?.[t.entity_id]?.hidden_by)}_getAlarmEntity(){if(!1===this.config?.settings?.show_alarm)return;const t=this.config?.settings?.alarm_entity_id;if(!t)return;const e=this.hass.states[t];return e&&!this.hass.entities?.[e.entity_id]?.hidden_by?e:void 0}_getStatusDomains(){const t="status_domains",e=this._domainCountsCache.get(t);if(e&&e.length>0&&e[0].timestamp&&Date.now()-e[0].timestamp<this._CACHE_DURATION)return e;const i=Z(this.hass,this.config),a=tt(this.hass,this.config);a&&i.unshift({domain:"wattage",count:0,name:"Power usage",value:a,icon:"mdi:flash"}),i.sort((t,e)=>{const i=this._isUrgentStatus(t.domain,t.deviceClass);return i===this._isUrgentStatus(e.domain,e.deviceClass)?0:i?-1:1});const o=Date.now();return i.forEach(t=>t.timestamp=o),i.length>0&&this._domainCountsCache.set(t,i),i}_getAreaDeviceCount(t,e=[]){const i=new Set;return this.config?.devices?.forEach(e=>{e.area_id===t&&i.add(e.device_id)}),e.forEach(t=>{t.device_id&&i.add(t.device_id)}),i.size}_getAreaEntities(t){const e=this._areaEntitiesCache.get(t);if(e&&Date.now()-e.timestamp<this._CACHE_DURATION)return e.entities;const i=[],a=new Set;if(this.config?.entities){const e=new Set;this.config.devices&&this.config.devices.forEach(i=>{i.area_id===t&&e.add(i.device_id)}),this.config.entities.forEach(o=>{if(o.area_id===t||o.device_id&&e.has(o.device_id)){const t=this.hass.entities?.[o.entity_id];if(!this.hass.states[o.entity_id]||t?.hidden_by||t?.disabled_by||"diagnostic"===t?.entity_category||"config"===t?.entity_category)return;i.push(o),a.add(o.entity_id)}})}return Object.values(this.hass.states).forEach(e=>{if(!a.has(e.entity_id)&&e.attributes?.area_id===t){const a=this.hass.entities?.[e.entity_id];if(a?.hidden_by||a?.disabled_by||"diagnostic"===a?.entity_category||"config"===a?.entity_category)return;i.push({entity_id:e.entity_id,area_id:t,hidden:!1})}}),this._areaEntitiesCache.set(t,{entities:i,timestamp:Date.now()}),i}_getFilteredAreaEntities(t){let e=this._getAreaEntities(t);if(e=e.filter(t=>{const e=this.hass.entities?.[t.entity_id];return Boolean(this.hass.states[t.entity_id])&&!(e?.hidden_by||e?.disabled_by||"diagnostic"===e?.entity_category||"config"===e?.entity_category)}),this.config?.areas_options){const i=this.config.areas_options[t];if(i?.groups_options){const t=new Set;for(const e of Object.values(i.groups_options))e.hidden&&e.hidden.forEach(e=>t.add(e));e=e.filter(e=>!t.has(e.entity_id))}}return!1!==this.config?.settings?.hide_unavailable_entities&&(e=e.filter(t=>{const e=this.hass.states[t.entity_id];return e&&"unavailable"!==e.state&&"unknown"!==e.state})),e=$(this.hass,this.config,e),e}_getEditableAreaEntities(t){let e=this._getAreaEntities(t).filter(t=>{const e=this.hass.entities?.[t.entity_id];return Boolean(this.hass.states[t.entity_id])&&!(e?.hidden_by||e?.disabled_by||"diagnostic"===e?.entity_category||"config"===e?.entity_category)});return!1!==this.config?.settings?.hide_unavailable_entities&&(e=e.filter(t=>{const e=this.hass.states[t.entity_id];return e&&"unavailable"!==e.state&&"unknown"!==e.state})),$(this.hass,this.config,e)}_getUnavailableAreaEntities(t){let e=this._getAreaEntities(t);const i=[],a=[];e=e.filter(t=>{const e=this.hass.entities?.[t.entity_id];return!(e?.hidden_by||"diagnostic"===e?.entity_category||"config"===e?.entity_category)});const o=this.config?.areas_options?.[t];if(o?.groups_options){const t=new Set;for(const e of Object.values(o.groups_options))e.hidden?.forEach(e=>t.add(e));e=e.filter(e=>!t.has(e.entity_id))}return e=$(this.hass,this.config,e),e.forEach(t=>{const e=this.hass.states[t.entity_id];e&&("unavailable"===e.state?i.push(t.entity_id):"unknown"===e.state&&a.push(t.entity_id))}),{unavailable:i,unknown:a}}_renderUnavailableEntitiesIcon(t){if(!1===this.config?.settings?.hide_unavailable_entities)return c;const e=this._getUnavailableAreaEntities(t),i=e.unavailable.length+e.unknown.length;return 0===i?c:s`
      <button
        class="unavailable-entities-icon"
        @click=${()=>this._showUnavailableEntitiesModal(t)}
        title=${this._t("settings.hidden_unavailable_count",{count:i})}
      >
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <span class="unavailable-count">${i}</span>
      </button>
    `}_formatAssignedAreaClimate(t,e){const i=this.hass?.areas?.[t],a="temperature"===e?i?.temperature_entity_id:i?.humidity_entity_id;if(!a)return;const o=this.hass?.states?.[a];return o&&"unavailable"!==o.state&&"unknown"!==o.state?E(this.hass,o):void 0}_withFreshAreaClimateFormatting(t,e){return{...e,temperature:this._formatAssignedAreaClimate(t,"temperature"),humidity:this._formatAssignedAreaClimate(t,"humidity")}}_getCachedAreaData(t){const e=this._areaDataCache.get(t.area_id);if(e&&Date.now()-e.timestamp<this._CACHE_DURATION)return this._withFreshAreaClimateFormatting(t.area_id,e.data);const i=this._getFilteredAreaEntities(t.area_id),a=Tt(t,this.hass,i,this.config);return this._areaDataCache.set(t.area_id,{data:a,timestamp:Date.now()}),this._withFreshAreaClimateFormatting(t.area_id,a)}_getPictureContrastClass(t){if(!t)return"";const e=this._pictureContrastCache.get(t);return e?"dark"===e?"text-dark":"text-light":(this._pictureContrastCache.set(t,"pending"),this._analyzePictureContrast(t),"text-light")}async _analyzePictureContrast(t){try{const e=await this._calculatePictureTextTone(t);this._pictureContrastCache.set(t,e)}catch{this._pictureContrastCache.set(t,"light")}this.requestUpdate()}_calculatePictureTextTone(t){return new Promise((e,i)=>{const a=new Image;a.decoding="async",a.onload=()=>{try{const t=28,o=document.createElement("canvas");o.width=t,o.height=t;const r=o.getContext("2d",{willReadFrequently:!0});if(!r)return void i(new Error("Canvas context unavailable"));r.drawImage(a,0,0,t,t);const n=r.getImageData(0,0,t,t).data,s=[{x0:.1,x1:.7,y0:.2,y1:.75},{x0:.08,x1:.72,y0:.56,y1:.96},{x0:.18,x1:.82,y0:.18,y1:.82}].map(e=>{const i=Math.floor(e.x0*t),a=Math.ceil(e.x1*t),o=Math.floor(e.y0*t),r=Math.ceil(e.y1*t);let s=0,c=0;for(let e=o;e<r;e++)for(let o=i;o<a;o++){const i=4*(e*t+o),a=(n[i+3]??255)/255;s+=.2126*((n[i]??255)*a+255*(1-a))+.7152*((n[i+1]??255)*a+255*(1-a))+.0722*((n[i+2]??255)*a+255*(1-a)),c++}return c?s/c:0}),c=Math.min(...s);e(c>170?"dark":"light")}catch(t){i(t)}},a.onerror=()=>i(new Error("Image could not be loaded")),a.src=t})}_countActiveEntities(t,e){return t.filter(t=>{const i=this._getEffectiveEntityState(this.hass.states[t.entity_id]);return this._isEntityActiveForUi(i,e)}).length}_areAllEntitiesOff(t,e){return 0===this._countActiveEntities(t,e)}async _confirmDiscardSettings(){return"settings"!==this._selectedView||!this._settingsDirty||this._showConfirmation(this._t("settings.discard_title"),this._t("settings.discard_confirm"),{confirmLabel:this._t("settings.discard_action"),destructive:!0})}_clearSettingsEditState(){this._pendingSettingsConfig=void 0,this._settingsDirty=!1,this._settingsSaveError="",this._settingsSavePending=!1,this._settingsEditorInitialized=!1,this._settingsPageKey="overview",this._settingsRestorePageKey="overview",this._settingsRestoreAreaId=void 0,this._settingsPageTitle="",this._settingsPageParentTitle="",this._settingsPageDescription=""}async _selectView(t){("settings"===t||await this._confirmDiscardSettings())&&(this._setSettingsHistoryState("settings"===t),this._resetAreaHeaderScrollState("area"===t),this._selectedView=t,"home"===t?(this._selectedArea=null,this._editMode=!1,this._rememberAreaEditMode(null),this._updateUrlArea(null),this._clearSettingsEditState()):"settings"===t&&(this._selectedArea=null,this._editMode=!1,this._rememberAreaEditMode(null),this._updateUrlArea(null),this._pendingSettingsConfig=void 0,this._settingsDirty=!1,this._settingsSaveError="",this._settingsEditorInitialized=!1,this._settingsPageKey="overview",this._settingsPageTitle="",this._settingsPageParentTitle="",this._settingsPageDescription=""),this._syncBottomNavAreaContext(),this._closeMobileNav())}async _selectArea(t){await this._confirmDiscardSettings()&&(this._resetAreaHeaderScrollState(!0),this._selectedArea=t,this._selectedView="area",this._editMode=!1,this._rememberAreaEditMode(null),this._clearSettingsEditState(),this._closeMobileNav(),this._updateUrlArea(t),this._syncBottomNavAreaContext())}_toggleHeader(){this._headerExpanded=!this._headerExpanded}_toggleMobileNav(){this._mobileNavOpen=!this._mobileNavOpen}_openDeviceDomain(t){this._navigateToDeviceDomain(t);const e=t.startsWith("binary_sensor.")?t.slice(14):void 0,i={domain:t,icon:"person"===t?"mdi:account-group":e?g("binary_sensor",e):b(t),label:e?S(this.hass,e):f(this.hass,t)},a=()=>{new URL(window.location.href).searchParams.get("dd_device")===t&&(window.dispatchEvent(new CustomEvent("dwains-dashboard-next-select-device-domain",{detail:i})),window.dispatchEvent(new CustomEvent("dwains-dashboard-next-device-context-changed",{detail:i})))};a(),[120,360].forEach(t=>window.setTimeout(a,t))}_navigateToDeviceDomain(t){const e=window.location.pathname.split("/")[1]||"lovelace",i=new URL(window.location.href);i.pathname=`/${e}/devices`,i.search="",t&&i.searchParams.set("dd_device",t),window.history.pushState(null,"",`${i.pathname}${i.search}`);const a=new Event("location-changed",{bubbles:!0,composed:!0});a.detail={replace:!1},window.dispatchEvent(a)}_renderFavoritesSection(){const t=this._getEffectiveFavoriteEntities();return 0===t.length?c:s`
      <div class="favorites-section">
        <div class="favorites-header">
          <ha-icon icon="mdi:star"></ha-icon>
          <h3>${this._t("favorites.title")}</h3>
        </div>
        <div class="favorites-grid">
          ${m(t,t=>t,t=>this._renderFavoriteCard(t))}
        </div>
      </div>
    `}async _renderFavoriteTileCards(){if(!this.shadowRoot||!this.hass)return;if(!this._headerExpanded)return;const t=++this._favoritesRenderVersion,e=this.shadowRoot?.querySelectorAll("dwains-dashboard-next-tile-host.favorite-tile-wrapper");e&&e.forEach(e=>{if(!e||!e.isConnected)return;e.getAttribute("entity")&&t===this._favoritesRenderVersion&&this._headerExpanded&&(e.hass=this.hass)})}async _loadHomeAssistantSummaries(){if(!this.hass)return;const[t,e]=await Promise.all([this._fetchRepairsIssueCount(),this._fetchDiscoveredDeviceCount()]);this._repairsIssueCount!==t&&(this._repairsIssueCount=t),this._discoveredDeviceCount!==e&&(this._discoveredDeviceCount=e)}async _fetchRepairsIssueCount(){try{const t=await this.hass.callWS({type:"repairs/list_issues"});return this._extractCollection(t?.issues??t).filter(t=>!this._isSummaryItemDismissed(t)).length}catch(t){return 0}}async _fetchDiscoveredDeviceCount(){const t=["config_entries/flow/progress","config_entries/discovery_info","config_entries/discovery_info/list","config_entries/get_discovery_info"];for(const e of t)try{const t=await this.hass.callWS({type:e}),i=this._countDiscoveryItems(t);if(i>0)return i}catch(t){}return 0}_getUpdateEntityCount(){return Object.values(this.hass?.states||{}).filter(t=>t.entity_id?.startsWith("update.")&&"on"===t.state).length}_hasUpdateEntityChanges(t,e){const i=new Set([...Object.keys(t.states||{}).filter(t=>t.startsWith("update.")),...Object.keys(e.states||{}).filter(t=>t.startsWith("update."))]);for(const a of i){const i=t.states[a],o=e.states[a];if(i?.state!==o?.state)return!0}return!1}_extractCollection(t){return t?Array.isArray(t)?t:"object"==typeof t?Object.values(t):[]:[]}_isSummaryItemDismissed(t){return Boolean(t?.dismissed||t?.ignored||t?.is_ignored||"ignored"===t?.status||"dismissed"===t?.status)}_countDiscoveryItems(t){if(!t)return 0;if(Array.isArray(t))return t.filter(t=>!this._isSummaryItemDismissed(t)).length;if("object"!=typeof t)return 0;if(this._looksLikeDiscoveryItem(t))return this._isSummaryItemDismissed(t)?0:1;const e=t.discovered??t.discovery??t.flows??t.entries??t.items;return e?this._countDiscoveryItems(e):Object.values(t).reduce((t,e)=>t+this._countDiscoveryItems(e),0)}_looksLikeDiscoveryItem(t){return!(!t||"object"!=typeof t||Array.isArray(t))&&Boolean(t.flow_id||t.handler||t.source||t.context||t.integration||t.domain)}_closeMobileNav(){this._mobileNavOpen=!1}_showMoreInfo(t){kt(this,"hass-more-info",{entityId:t})}_syncSettingsEditor(){const t=this.renderRoot?.querySelector("dwains-dashboard-next-strategy-editor");if(t&&this.hass&&this.config&&(t.hass=this.hass,!this._settingsEditorInitialized)){this._settingsEditorInitialized=!0;const e=this._settingsRestorePageKey||this._settingsPageKey||"overview",i=this._settingsRestoreAreaId;t.setConfig(this.config).then(()=>{t._restoreSettingsNavigation?.(e,i)})}}async _saveSettingsPage(){if(this._pendingSettingsConfig&&!this._settingsSavePending&&this.hass&&this._canManageDashboard()){this._settingsSavePending=!0,this._settingsSaveError="",this._setSettingsHistoryState(!0);try{const t=this._getDashboardUrlPath(),e=t?{url_path:t}:{},i=await this.hass.callWS({type:"lovelace/config",...e}),a={...i?.strategy||{},...this._pendingSettingsConfig},o={...i,strategy:a};await this.hass.callWS({type:"lovelace/config/save",...e,config:o}),this.config={...this.config,...this._pendingSettingsConfig},this._pendingSettingsConfig=void 0,this._settingsDirty=!1,this._settingsSaveError="",this._settingsEditorInitialized=!1,this.requestUpdate()}catch(t){console.error("Failed to save Dwains Dashboard settings:",t),this._settingsSaveError=this._t("error.settings_save",{error:String(t)})}finally{this._settingsSavePending=!1}}}_renderSettingsView(){const t=this._settingsDirty&&!this._settingsSavePending,e="overview"!==this._settingsPageKey,i=this._settingsPageTitle||this._t("sidebar.dashboard_settings"),a=this._settingsPageDescription||this._t("settings.subtitle"),o=this._settingsDirty?this._t("common.cancel"):this._t("common.close");return s`
      <section class="settings-page-view">
        <header class="settings-page-header">
          <button
            class="settings-page-back"
            type="button"
            title=${e?this._t("common.back"):this._t("common.close")}
            aria-label=${e?this._t("common.back"):this._t("common.close")}
            @click=${e?this._settingsBackToOverview:this._closeSettingsPage}
          >
            <ha-icon icon=${e?"mdi:arrow-left":"mdi:close"}></ha-icon>
          </button>
          <div class="settings-page-title">
            <h1>
              ${this._settingsPageParentTitle?s`<span class="settings-breadcrumb-parent">${this._settingsPageParentTitle}</span>
                    <ha-icon class="settings-breadcrumb-separator" icon="mdi:chevron-right"></ha-icon>
                    <span>${i}</span>`:i}
            </h1>
            <p>${a}</p>
          </div>
          <div class="settings-page-actions">
            <button type="button" class="settings-secondary" @click=${this._settingsSecondaryAction}>
              ${o}
            </button>
            <button
              type="button"
              class="settings-primary"
              ?disabled=${!t}
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
            ?disabled=${!t}
            @click=${this._saveSettingsPage}
          >
            ${this._settingsSavePending?this._t("common.saving"):this._t("common.save")}
          </button>
        </div>
      </section>
    `}_getWelcomeUserPicture(t){const e=t.trim().toLowerCase(),i=Object.values(this.hass?.states||{}).filter(t=>t.entity_id?.startsWith("person.")),a=i.find(t=>String(t.attributes?.friendly_name||"").trim().toLowerCase()===e),o=i.find(t=>t.attributes?.entity_picture);return(a||o)?.attributes?.entity_picture}async _loadPersistentNotifications(t=!0){if(this.hass&&this._showNotificationsUi()){this._notificationsLoading=!0,t&&(this._notificationsError="");try{const t=await this.hass.callWS({type:"persistent_notification/get"});this._persistentNotifications=this._sortPersistentNotifications(this._normalizePersistentNotifications(t)),this._notificationsError=""}catch(e){(t||this._notificationsOpen)&&(console.error("Failed to load persistent notifications:",e),this._notificationsError=this._t("error.notifications_load"))}finally{this._notificationsLoading=!1}}}async _ensurePersistentNotificationsSubscription(){if(!this._showNotificationsUi()||this._persistentNotificationsUnsub||!this.hass)return;const t=this.hass.connection;if(t?.subscribeMessage)try{const e=await t.subscribeMessage(t=>this._handlePersistentNotificationEvent(t),{type:"persistent_notification/subscribe"});"function"==typeof e&&(this._persistentNotificationsUnsub=()=>{e()})}catch(t){console.warn("Persistent notification subscription unavailable:",t)}}_handlePersistentNotificationEvent(t){if(!this._showNotificationsUi())return;const e=t?.type,i=this._normalizePersistentNotifications(t?.notifications);if("current"===e)return this._persistentNotifications=this._sortPersistentNotifications(i),void(this._notificationsError="");if("removed"===e){const t=new Set(i.map(t=>t.notification_id));return void(this._persistentNotifications=this._persistentNotifications.filter(e=>!t.has(e.notification_id)))}if("added"===e||"updated"===e){const t=new Map(this._persistentNotifications.map(t=>[t.notification_id,t]));i.forEach(e=>t.set(e.notification_id,e)),this._persistentNotifications=this._sortPersistentNotifications([...t.values()])}}_normalizePersistentNotifications(t){return(Array.isArray(t)?t:Object.values(t||{})).map(t=>({notification_id:String(t?.notification_id||""),title:t?.title||null,message:String(t?.message||""),created_at:t?.created_at?String(t.created_at):void 0})).filter(t=>t.notification_id)}_sortPersistentNotifications(t){return[...t].sort((t,e)=>(e.created_at?Date.parse(e.created_at):0)-(t.created_at?Date.parse(t.created_at):0))}_formatNotificationDate(t){const e=Date.parse(t);return Number.isFinite(e)?new Date(e).toLocaleString(this.hass?.language||void 0,{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):t}_handleStatusCardClick(t){"person"===t.domain?this._showPersonEntities():"wattage"===t.domain?this._showWattageEntities():this._showHouseStatusEntities(t)}_houseInfoDeviceViewLabel(){return String(this.hass?.language||"").toLowerCase().startsWith("de")?"Geräteansicht öffnen":"Open device view"}_houseInfoEnergyViewLabel(){return String(this.hass?.language||"").toLowerCase().startsWith("de")?"Energiesensoren anzeigen":"View energy sensors"}_showHouseStatusEntities(t){const e=t.entities||[];e.length?te(this,{domain:t.domain,config:this.config,deviceClass:t.deviceClass,entityIds:e,customTitle:t.name,viewAllLabel:this._houseInfoDeviceViewLabel(),onViewAll:()=>this._openDeviceDomain(this._statusDeviceDomainKey(t))}):this._openDeviceDomain(this._statusDeviceDomainKey(t))}_statusDeviceDomainKey(t){return t.deviceClass?`${t.domain}.${t.deviceClass}`:t.domain}_showPersonEntities(){te(this,{domain:"person",config:this.config,entityIds:this._getVisiblePersonEntities().map(t=>t.entity_id),customTitle:this._t("home.people"),viewAllLabel:this._houseInfoDeviceViewLabel(),onViewAll:()=>this._openDeviceDomain("person")})}_showWattageEntities(){te(this,{domain:"sensor",config:this.config,filterByUnitOfMeasurement:"W"})}_handleLightToggle(t,e){t.stopPropagation(),this._toggleAreaLights(e)}_shouldUpdateEntities(t,e){const i=["light","switch","climate","media_player","camera","cover","lock","binary_sensor","person","sensor","fan"];return Object.keys(e.states).some(a=>{const o=a.split(".")[0];if(!o||!i.includes(o))return!1;const r=t.states[a],n=e.states[a];return r?.state!==n?.state||r?.attributes!==n?.attributes})}_updateEntityCards(t,e){this.shadowRoot&&this.shadowRoot.querySelectorAll("dwains-dashboard-next-card-host, dwains-dashboard-next-tile-host, hui-card, hui-tile-card, hui-entity-card, hui-thermostat-card, hui-picture-entity-card, hui-media-control-card").forEach(t=>{t.hass!==e&&(t.hass=e)})}_clearEntityCardsCache(){this._areaDataCache.clear(),this._domainCountsCache.clear(),Dt.clear()}_invalidateChangedAreaCaches(t,e){const i=new Set;let a=!1;for(const o of this.config?.entities||[]){const r=o.entity_id,n=t.states[r],s=e.states[r];n!==s&&(n?.state===s?.state&&n?.attributes===s?.attributes||(a=!0,o.area_id&&i.add(o.area_id)))}a&&this._domainCountsCache.clear(),i.forEach(t=>{this._areaDataCache.delete(t),(t=>{Dt.delete(t)})(t)})}_showUnavailableEntitiesModal(t){const e=this._getUnavailableAreaEntities(t),i=[...e.unavailable,...e.unknown];te(this,{domain:"unavailable",areaId:t,config:this.config,customTitle:this._t("settings.hidden_unavailable_title"),customEntities:i,customDescription:this._t("settings.hidden_unavailable_description")})}_areaThermostatEntityId(t){if(!1!==this.config?.settings?.show_area_thermostat)return function(t,e){let i;for(const e of t)if(e.startsWith("climate.")){if(i)return;i=e}if(!i)return;const a=e[i];return a&&!Ht.has(String(a.state))?i:void 0}(t.map(t=>t.entity_id),this.hass.states)}async _toggleAreaLights(t){const e=this._getFilteredAreaEntities(t).filter(t=>t.entity_id.startsWith("light."));if(0===e.length)return;const i=this._areAllEntitiesOff(e,"light");if(!await this._confirmMasterActionIfNeeded("light",i,e.length,t))return;const a=i?"turn_on":"turn_off",o=e.map(t=>t.entity_id);this._setOptimisticEntityStates(o,i?"on":"off");try{await this.hass.callService("light",a,{entity_id:o}),this._showToast(this._t(i?"action.all_lights_on":"action.all_lights_off"))}catch(e){this._clearOptimisticEntityStates(o),console.warn(`Failed to toggle lights in area ${t}:`,e),this._showToast(this._t("entity.lights_failed"))}}_resolveConfirmation(t){const e=this._confirmationResolve;this._confirmationResolve=void 0,this._confirmationDialog=null,e?.(t)}_showConfirmation(t,e,i={}){return this._confirmationResolve&&this._resolveConfirmation(!1),new Promise(a=>{this._confirmationResolve=a,this._confirmationDialog={title:t,message:e,confirmLabel:i.confirmLabel||t,destructive:!0===i.destructive},this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".confirmation-content")?.focus()})})}_showToast(t){console.log("Toast:",t)}};pe.styles=r`
    dwains-dashboard-next-now-playing.inline {
      display: block;
      margin: 0 0 18px;
    }
    .room-header dwains-dashboard-next-area-thermostat {
      flex: 0 1 320px;
      min-width: 220px;
    }
    @media (max-width: 768px) {
      dwains-dashboard-next-now-playing.floating {
        position: fixed;
        left: max(12px, env(safe-area-inset-left, 0px));
        right: max(12px, env(safe-area-inset-right, 0px));
        bottom: calc(76px + env(safe-area-inset-bottom, 0px));
        z-index: 140;
        max-width: 560px;
        margin: 0 auto;
      }
      .layout-container.has-floating-now-playing .home-view,
      .layout-container.has-floating-now-playing .content-area.area-content-area {
        padding-bottom: calc(190px + env(safe-area-inset-bottom, 0px));
      }
      .room-header dwains-dashboard-next-area-thermostat {
        width: 100%;
        min-width: 0;
        flex-basis: 100%;
      }
    }
    :host {
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
    .dd-custom-card-wrap.editing {
      user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }

    .dd-static-icon {
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
    .favorite-card-wrapper {
      contain: layout style paint;
    }

    .mobile-home-section,
    .home-camera-section,
    .home-status-section,
    .home-todos-section,
    .home-custom-cards-section,
    .home-favorites-section,
    .home-summaries-section,
    .mobile-domain-group {
      content-visibility: auto;
      contain-intrinsic-size: 1px 360px;
    }

    .mobile-entities-section.layout-grid .mobile-entity-card {
      content-visibility: auto;
      contain-intrinsic-size: 164px 150px;
    }

    :host {
      display: block;
      height: calc(100dvh - var(--header-height, 56px));
      min-height: 0;
      overflow: hidden;
    }

    /* Layout Container */
    .layout-container {
      --area-sidebar-width: 250px;
      display: flex;
      height: 100%;
      max-height: 100%;
      min-height: 0;
      position: relative;
      overflow: hidden;
    }

    .layout-container.sidebar-resizing,
    .layout-container.sidebar-resizing * {
      cursor: col-resize !important;
      user-select: none !important;
      -webkit-user-select: none !important;
    }

    .layout-container.sidebar-collapsed .sidebar {
      width: 0;
      flex-basis: 0;
      border-right: 0;
      opacity: 0;
      pointer-events: none;
      transform: translateX(-16px);
    }

    .layout-container.sidebar-collapsed .main-content {
      min-width: 0;
    }

    /* Sidebar Styles */
    .sidebar {
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

    .layout-container.sidebar-resizing .sidebar {
      transition: none;
    }

    .sidebar-resize-handle {
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

    .sidebar-resize-handle::before {
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
    .layout-container.sidebar-resizing .sidebar-resize-handle::before {
      background: var(--primary-color);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-color) 12%, transparent);
    }

    .sidebar-resize-handle:focus-visible {
      outline: none;
    }

    .sidebar-collapse-toggle {
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

    .sidebar-collapse-toggle:hover {
      background: color-mix(in srgb, var(--primary-color) 10%, var(--card-background-color));
      box-shadow:
        0 12px 28px rgba(15, 23, 42, 0.16),
        inset 0 1px 0 rgba(255, 255, 255, 0.62);
    }

    .sidebar-collapse-toggle:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 3px;
    }

    .sidebar-collapse-toggle ha-icon {
      --mdc-icon-size: 18px;
    }

    .sidebar-collapse-toggle.is-collapsed {
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

    .sidebar-collapse-label {
      display: none;
      font-size: 13px;
      font-weight: 850;
      line-height: 1;
    }

    .sidebar-collapse-toggle.is-collapsed .sidebar-collapse-label {
      display: inline;
    }

    /* Main Content */
    .main-content {
      flex: 1;
      min-width: 0;
      min-height: 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Global Header */
    .global-header {
      background: var(--card-background-color);
      border-bottom: 1px solid var(--divider-color);
      padding: 16px;
      position: sticky;
      top: 0;
      z-index: 1;
      transition: all 0.3s ease;
    }

    .global-header.compact {
      padding: 8px 16px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    /* Time and Weather Section (right side) */
    .header-time-weather {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      min-width: 120px;
    }

    .header-time-section {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0px;
      line-height: 0.8;
    }

    .header-time {
      font-size: 24px;
      font-weight: 700;
      color: var(--primary-text-color);
      font-family: 'Roboto Mono', monospace;
      line-height: 1.2;
    }

    .header-date {
      font-size: 14px;
      opacity: 0.8;
      color: var(--secondary-text-color);
      font-weight: 500;
    }

    /* Weather Display */
    .weather-compact {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 12px;
      background: var(--secondary-background-color);
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .weather-compact:hover {
      background: var(--primary-color);
      color: var(--text-primary-color);
      transform: translateY(-1px);
    }

    .weather-icon-compact ha-icon {
      --mdc-icon-size: 24px;
    }

    .weather-temp-compact {
      font-size: 14px;
      font-weight: 500;
    }

    /* Status Cards Section */
    .header-status-section {
      flex: 1;
      overflow: hidden;
    }

    .header-status-scroll {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .header-status-scroll::-webkit-scrollbar {
      display: none;
    }

    /* Status Card Compact */
    .status-card-compact {
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

    .status-card-compact:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .status-card-icon-compact {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }

    .status-card-icon-compact ha-icon {
      --mdc-icon-size: 20px;
      color: var(--primary-color);
    }

    .status-card-badge-compact {
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

    .status-card-title-compact {
      font-size: 11px;
      margin-top: 4px;
      opacity: 0.8;
    }

    /* Domain-specific status card colors */
    .status-card-compact.light .status-card-icon-compact {
      background: color-mix(in srgb, var(--status-color, #e1a129) 15%, transparent);
    }

    .status-card-compact.light ha-icon {
      color: var(--status-color, #e1a129);
    }

    .status-card-compact.switch .status-card-icon-compact {
      background: color-mix(in srgb, var(--status-color, #2f6fd6) 15%, transparent);
    }

    .status-card-compact.switch ha-icon {
      color: var(--status-color, #2f6fd6);
    }

    .status-card-compact.binary_sensor .status-card-icon-compact {
      background: color-mix(in srgb, var(--status-color, #6d7891) 15%, transparent);
    }

    .status-card-compact.binary_sensor ha-icon {
      color: var(--status-color, #6d7891);
    }

    .status-card-compact.person .status-card-icon-compact {
      background: color-mix(in srgb, var(--status-color, #6d7891) 15%, transparent);
    }

    .status-card-compact.person ha-icon {
      color: var(--status-color, #6d7891);
    }

    .status-card-compact.wattage .status-card-icon-compact {
      background: color-mix(in srgb, var(--status-color, #d88e20) 15%, transparent);
    }

    .status-card-compact.wattage ha-icon {
      color: var(--status-color, #d88e20);
    }

    /* Header Expand Button */
    .header-expand-button {
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

    .header-expand-button:hover {
      transform: translateX(-50%) translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .header-expand-button[data-extra-count]::after {
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
    .area-list {
      padding: 8px;
    }

    /* Floor Sections */
    .floor-section {
      margin-bottom: 16px;
    }

    .floor-header {
      padding: 8px 16px;
      margin-bottom: 8px;
    }

    .floor-header h3 {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .floor-areas {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(178px, 1fr));
      gap: 8px;
    }

    .area-button {
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

    .area-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    .area-button.selected {
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    /* Home button specific styling */
    .area-button.home-button {
      height: 60px;
    }

    /* Background image styles */
    .area-button.has-picture {
      position: relative;
      background: var(--secondary-background-color);
      --area-picture-text-color: #ffffff;
      --area-picture-muted-text-color: rgba(255, 255, 255, 0.76);
      --area-picture-text-shadow: 0 2px 10px rgba(0, 0, 0, 0.62);
      --area-picture-overlay:
        linear-gradient(90deg, rgba(11, 17, 28, 0.76) 0%, rgba(11, 17, 28, 0.38) 54%, rgba(11, 17, 28, 0.08) 100%),
        linear-gradient(180deg, rgba(11, 17, 28, 0.04), rgba(11, 17, 28, 0.34));
    }

    .area-button.has-picture.text-dark {
      --area-picture-text-color: #ffffff;
      --area-picture-muted-text-color: rgba(255, 255, 255, 0.76);
      --area-picture-text-shadow: 0 2px 10px rgba(0, 0, 0, 0.62);
      --area-picture-overlay:
        linear-gradient(90deg, rgba(11, 17, 28, 0.76) 0%, rgba(11, 17, 28, 0.38) 54%, rgba(11, 17, 28, 0.08) 100%),
        linear-gradient(180deg, rgba(11, 17, 28, 0.04), rgba(11, 17, 28, 0.34));
    }

    .area-background {
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

    .area-button.has-picture:hover .area-background {
      opacity: 0.8;
    }

    /* Area content structure */
    .area-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      height: 100%;
      justify-content: space-between;
    }

    .area-top-section {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-top: 4px;
    }

    .area-bottom-section {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 8px;
      margin-bottom: 4px;
    }

    /* Enhanced text styling for picture backgrounds */
    .area-button.has-picture .area-name,
    .area-button.has-picture .area-sensors {
      text-shadow: var(--area-picture-text-shadow);
      color: var(--area-picture-text-color);
    }

    /* Area main icon in sidebar - override home view styling */
    .sidebar .area-main-icon {
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

    .area-button.selected .area-main-icon {
      background: rgba(255,255,255,0.2);
    }

    .sidebar .area-main-icon ha-icon {
      --mdc-icon-size: 40px;
      color: var(--primary-color);
    }

    /* Info badges container */
    .area-info-badges {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      align-items: center;
    }

    /* Legacy area-icon styles (still used for simple buttons) */
    .area-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--secondary-background-color);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .area-button.selected .area-icon {
      background: rgba(255,255,255,0.2);
    }

    /* Legacy area-info styles (still used for simple buttons) */
    .area-info {
      flex: 1;
    }

    .area-menu-chevron {
      display: none;
    }

    .home-notification-shortcut {
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

    .home-notification-shortcut ha-icon {
      --mdc-icon-size: 15px;
    }

    .home-notification-count {
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

    .area-name {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 2px;
    }

    .area-sensors {
      font-size: 13px;
      opacity: 0.8;
      font-weight: 500;
    }

    /* Legacy area-alerts styles (still used for simple buttons without badges) */
    .area-alerts {
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
    .content-area {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
      overflow-anchor: none;
      overscroll-behavior: auto;
      -webkit-overflow-scrolling: touch;
      padding: 16px;
    }

    .content-area.settings-content-area {
      padding: 0;
      background:
        linear-gradient(180deg,
          color-mix(in srgb, var(--primary-color) 4%, transparent) 0,
          transparent 220px),
        var(--primary-background-color);
    }

    .settings-page-view {
      width: min(1180px, calc(100% - 32px));
      min-height: 100%;
      margin: 0 auto;
      padding: 18px 0 104px;
      box-sizing: border-box;
    }

    .settings-page-header {
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
    .settings-primary {
      appearance: none;
      border: 0;
      font: inherit;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .settings-page-back {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--secondary-background-color) 74%, var(--card-background-color));
      color: var(--primary-text-color);
    }

    .settings-page-back ha-icon {
      --mdc-icon-size: 22px;
    }

    .settings-page-title {
      min-width: 0;
    }

    .settings-page-title h1 {
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
    .settings-breadcrumb-parent {
      color: var(--secondary-text-color);
      font-weight: 700;
    }
    .settings-breadcrumb-separator {
      flex: 0 0 auto;
      color: var(--secondary-text-color);
      --mdc-icon-size: 20px;
    }

    .settings-page-title p {
      margin: 5px 0 0;
      color: var(--secondary-text-color);
      font-size: 14px;
      line-height: 1.35;
    }

    .settings-page-actions,
    .settings-page-bottom-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
    }

    .settings-secondary,
    .settings-primary {
      min-height: 40px;
      padding: 0 18px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 800;
    }

    .settings-secondary {
      background: transparent;
      color: var(--primary-color);
    }

    .settings-primary {
      background: var(--primary-color);
      color: var(--text-primary-color);
      box-shadow: 0 10px 24px color-mix(in srgb, var(--primary-color) 24%, transparent);
    }

    .settings-primary:disabled {
      opacity: 0.45;
      cursor: default;
      box-shadow: none;
    }

    .settings-save-error {
      margin: 0 0 14px;
      padding: 12px 14px;
      border-radius: 14px;
      background: color-mix(in srgb, var(--error-color) 12%, var(--card-background-color));
      color: var(--error-color);
      font-weight: 750;
      font-size: 13px;
    }

    .settings-page-editor {
      overflow: hidden;
      border-radius: 18px;
      background: var(--card-background-color);
      border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
      box-shadow: 0 16px 46px rgba(15, 23, 42, 0.08);
    }

    .settings-page-editor dwains-dashboard-next-strategy-editor {
      display: block;
    }

    .settings-page-bottom-actions {
      display: none;
    }

    /* Ruimte voor de mobiele onderbalk */
    @media (max-width: 768px) {
      .content-area {
        padding-bottom: calc(104px + env(safe-area-inset-bottom, 0px));
      }
    }

    /* Home View */
    .home-view {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0px; /*24px;*/
    }

    /* Home Welcome */
    .home-welcome {
      text-align: left;
      margin-bottom: 28px;
      padding: 0;
      background: color-mix(in srgb, var(--card-background-color) 97%, var(--primary-background-color));
      border: 1px solid rgba(15, 23, 42, 0.06);
      border-radius: 8px;
      box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
    }

    .welcome-content {
      margin: 0 auto;
      padding: 18px 22px;
    }

    .welcome-header {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 18px;
      margin-bottom: 0;
    }

    .welcome-header-meta {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 14px;
      min-width: 0;
    }

    .welcome-user {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .welcome-avatar {
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

    .welcome-avatar:hover {
      transform: translateY(-1px);
    }

    .welcome-avatar:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 3px;
    }

    .welcome-avatar ha-icon {
      --mdc-icon-size: 26px;
    }

    .welcome-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .welcome-copy {
      min-width: 0;
    }

    .welcome-text {
      display: flex;
      align-items: baseline;
      gap: 4px;
    }

    .welcome-greeting {
      font-size: 22px;
      font-weight: 400;
      color: var(--secondary-text-color);
    }

    .welcome-name {
      font-size: 28px;
      font-weight: 750;
      color: var(--primary-text-color);
    }

    .welcome-title {
      display: none;
    }

    .welcome-return {
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

    .welcome-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .welcome-action {
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

    .welcome-action:hover {
      background: color-mix(in srgb, var(--primary-color) 10%, var(--card-background-color));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 18%, transparent);
    }

    .welcome-notification-action {
      width: 38px;
      height: 42px;
      border-radius: 10px;
      color: var(--secondary-text-color);
      background: transparent;
      box-shadow: none;
    }

    .welcome-notification-action:hover {
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 7%, transparent);
      box-shadow: none;
    }

    .welcome-notification-action .welcome-action-badge {
      top: -1px;
      right: -3px;
    }

    .welcome-settings-action {
      margin-left: 2px;
    }

    .welcome-action ha-icon {
      --mdc-icon-size: 22px;
    }

    .welcome-action:active {
      transform: scale(0.96);
    }

    .welcome-action-badge {
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

    .welcome-time-section {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0px;
      min-width: 112px;
      line-height: 1.1;
    }

    .welcome-time {
      font-size: 34px;
      font-weight: 800;
      color: var(--primary-text-color);
      font-family: 'Roboto Mono', monospace;
    }

    .welcome-date {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      color: var(--secondary-text-color);
      font-weight: 650;
    }

    .welcome-subheader {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      margin-top: 14px;
    }

    .welcome-alarm {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 500;
    }

    .welcome-alarm.alarm-armed {
      background: var(--error-color);
      color: var(--text-primary-color);
    }

    .welcome-alarm.alarm-disarmed {
      background: var(--success-color);
      color: var(--text-primary-color);
    }

    .welcome-alarm.alarm-triggered {
      background: var(--error-color);
      color: var(--text-primary-color);
      animation: pulse 2s infinite;
    }

    .welcome-alarm:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .welcome-alarm ha-icon {
      --mdc-icon-size: 18px;
    }

    .alarm-text {
      font-size: 14px;
      font-weight: 600;
    }

    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.7; }
      100% { opacity: 1; }
    }

    .welcome-weather {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 500;
    }

    .welcome-weather:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .welcome-weather ha-icon {
      --mdc-icon-size: 20px;
    }

    .weather-temp {
      font-size: 16px;
      font-weight: 600;
    }

    .weather-label {
      font-size: 12px;
      font-weight: 750;
      line-height: 1;
      opacity: 0.82;
      text-transform: uppercase;
      letter-spacing: 0;
    }

    /* Mobile Responsive Design */
    @media (max-width: 768px) {
      .home-welcome {
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

      .welcome-content {
        padding: 0;
      }

      .welcome-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 14px;
        margin-bottom: 0;
      }

      .welcome-user {
        gap: 10px;
        flex: 1 1 auto;
      }

      .welcome-avatar {
        display: inline-flex;
        width: 38px;
        height: 38px;
        border-radius: 999px;
        box-shadow:
          0 8px 18px rgba(15, 23, 42, 0.1),
          0 0 0 3px rgba(255, 255, 255, 0.72);
      }

      .welcome-avatar ha-icon {
        --mdc-icon-size: 21px;
      }

      .welcome-text {
        display: block;
      }

      .welcome-greeting,
      .welcome-name {
        display: none;
      }

      .welcome-title {
        display: block;
        color: var(--primary-text-color);
        font-size: 15px;
        font-weight: 750;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .welcome-return {
        display: block;
        margin-top: 3px;
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 600;
        line-height: 1.1;
      }

      .welcome-time-section {
        display: none;
      }

      .welcome-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 0 0 auto;
      }

      .welcome-action {
        width: 42px;
        height: 42px;
        border-radius: 999px;
        color: var(--primary-text-color);
        background: color-mix(in srgb, var(--card-background-color) 86%, var(--primary-background-color));
        box-shadow:
          0 8px 20px color-mix(in srgb, var(--primary-text-color) 10%, transparent),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 8%, transparent);
      }

      .welcome-action ha-icon {
        --mdc-icon-size: 21px;
      }

      .welcome-subheader {
        justify-content: flex-start;
        gap: 8px;
        margin-top: 16px;
        overflow-x: auto;
        padding-bottom: 2px;
        scrollbar-width: none;
      }

      .welcome-subheader::-webkit-scrollbar {
        display: none;
      }

      .welcome-alarm,
      .welcome-weather {
        min-width: auto;
        height: 42px;
        padding: 0 14px;
        justify-content: center;
        border-radius: 999px;
        flex: 0 0 auto;
        box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
      }

      .alarm-text,
      .weather-temp {
        font-size: 15px;
      }

      .weather-label {
        font-size: 11px;
      }
    }

    @media (max-width: 480px) {
      .home-welcome {
        padding: calc(16px + env(safe-area-inset-top, 0px)) 18px 14px;
        margin-bottom: 14px;
      }

      .welcome-header {
        gap: 10px;
      }

      .welcome-avatar {
        width: 36px;
        height: 36px;
      }

      .welcome-title {
        font-size: 14px;
      }

      .welcome-return {
        font-size: 11px;
      }

      .welcome-action {
        width: 40px;
        height: 40px;
      }

      .welcome-alarm,
      .welcome-weather {
        height: 40px;
        padding: 0 13px;
        font-size: 14px;
      }

      .alarm-text,
      .weather-temp {
        font-size: 14px;
      }

      .weather-label {
        font-size: 10px;
      }
    }

    /* Home Status Cards */
    .home-status-section {
      margin-bottom: 48px;
    }

    .home-status-heading {
      display: flex;
      align-items: center;
      gap: 9px;
      margin: 0 0 14px;
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 850;
      line-height: 1.1;
    }

    .home-status-heading ha-icon {
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

    .home-camera-section {
      margin-bottom: 36px;
    }

    .home-camera-section .home-status-heading ha-icon {
      color: #ef4444;
      background: color-mix(in srgb, #ef4444 12%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #ef4444 8%, transparent);
    }

    .home-camera-section .mobile-layout-toggle {
      color: #ef4444;
      background: color-mix(in srgb, #ef4444 12%, var(--card-background-color));
      box-shadow:
        0 8px 18px rgba(15, 23, 42, 0.08),
        inset 0 0 0 1px color-mix(in srgb, #ef4444 8%, transparent);
    }

    .home-summaries-section {
      margin-bottom: 36px;
    }

    .home-summaries-section .home-status-heading ha-icon {
      color: #f59e0b;
      background: color-mix(in srgb, #f59e0b 13%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #f59e0b 9%, transparent);
    }

    .home-summaries-section .mobile-layout-toggle.active {
      color: #f59e0b;
      background: color-mix(in srgb, #f59e0b 13%, var(--card-background-color));
      box-shadow:
        0 8px 18px rgba(15, 23, 42, 0.08),
        inset 0 0 0 1px color-mix(in srgb, #f59e0b 9%, transparent);
    }

    .home-todos-section {
      margin-bottom: 36px;
    }

    .home-todos-section .home-status-heading ha-icon {
      color: #7c3aed;
      background: color-mix(in srgb, #7c3aed 12%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #7c3aed 8%, transparent);
    }

    .home-todos-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
      align-items: start;
      gap: 12px;
    }

    .home-todo-card,
    .home-todo-card dwains-dashboard-next-card-host {
      display: block;
      min-width: 0;
    }

    .home-custom-cards-section {
      margin-bottom: 36px;
    }

    .home-custom-cards-section .home-status-heading ha-icon {
      color: #0ea5a8;
      background: color-mix(in srgb, #0ea5a8 12%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #0ea5a8 20%, transparent);
    }

    .home-custom-cards-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
      align-items: start;
      gap: 12px;
    }

    .home-custom-card,
    .home-custom-card dwains-dashboard-next-card-host {
      display: block;
      min-width: 0;
    }

    .home-summary-list {
      width: min(100%, 980px);
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }

    .home-summary-card {
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

    .home-summary-card:hover {
      transform: translateY(-1px);
      border-color: color-mix(in srgb, var(--summary-color) 35%, transparent);
      box-shadow: 0 12px 26px color-mix(in srgb, var(--summary-color) 13%, transparent);
    }

    .home-summary-card:active {
      transform: scale(0.992);
    }

    .home-summary-card:focus-visible {
      outline: 2px solid color-mix(in srgb, var(--summary-color) 70%, #ffffff);
      outline-offset: 2px;
    }

    .home-summary-icon {
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

    .home-summary-icon ha-icon {
      --mdc-icon-size: 21px;
    }

    .home-summary-copy {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .home-summary-title {
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 850;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .home-summary-subtitle {
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.25;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .home-summary-chevron {
      width: 26px;
      height: 26px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: color-mix(in srgb, var(--primary-text-color) 48%, transparent);
      flex: 0 0 auto;
    }

    .home-summary-chevron ha-icon {
      --mdc-icon-size: 20px;
    }

    .home-camera-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 14px;
    }

    .home-camera-card {
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

    .home-camera-card:hover {
      transform: translateY(-2px);
      box-shadow:
        0 20px 42px rgba(15, 23, 42, 0.16),
        inset 0 0 0 1px rgba(255, 255, 255, 0.16);
    }

    .home-camera-card:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 3px;
    }

    .home-camera-image,
    .home-camera-placeholder {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transform: scale(1.02);
    }

    .home-camera-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at 20% 20%, rgba(var(--rgb-primary-color, 3, 169, 244), 0.28), transparent 34%),
        linear-gradient(135deg, #192133, #0f172a);
    }

    .home-camera-placeholder ha-icon {
      --mdc-icon-size: 44px;
      color: rgba(255, 255, 255, 0.58);
    }

    .home-camera-card::after {
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

    .home-camera-content {
      position: relative;
      z-index: 1;
      width: 100%;
      min-height: 168px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .home-camera-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
    }

    .home-camera-area-icon,
    .home-camera-count {
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

    .home-camera-area-icon ha-icon {
      --mdc-icon-size: 20px;
    }

    .home-camera-count {
      min-width: 44px;
      padding: 0 10px;
      gap: 5px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 850;
    }

    .home-camera-count ha-icon {
      --mdc-icon-size: 14px;
    }

    .home-camera-copy {
      min-width: 0;
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.62);
    }

    .home-camera-name {
      font-size: 18px;
      font-weight: 850;
      line-height: 1.08;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .home-camera-meta {
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
    .mobile-section-heading {
      display: none;
    }

    .layout-container.sidebar-collapsed .mobile-home-section.mobile-home-areas {
      display: block;
      margin: 0 0 36px;
    }

    .layout-container.sidebar-collapsed .mobile-home-areas .mobile-section-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 0;
      margin-bottom: 14px;
    }

    .layout-container.sidebar-collapsed .mobile-home-areas .mobile-section-action {
      display: none;
    }

    .layout-container.sidebar-collapsed .mobile-area-rail {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 16px;
      padding: 0;
      overflow: visible;
      scroll-snap-type: none;
    }

    .layout-container.sidebar-collapsed .mobile-area-card {
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

    .layout-container.sidebar-collapsed .mobile-area-card:hover {
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--primary-color) 22%, transparent);
      box-shadow: 0 18px 38px color-mix(in srgb, var(--primary-text-color) 11%, transparent);
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture {
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

    .layout-container.sidebar-collapsed .mobile-area-picture {
      position: absolute;
      inset: 0;
      z-index: 0;
      background-size: cover;
      background-position: center;
      transform: scale(1.02);
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background: var(--mobile-area-picture-overlay);
      pointer-events: none;
    }

    .layout-container.sidebar-collapsed .mobile-area-top,
    .layout-container.sidebar-collapsed .mobile-area-copy {
      position: relative;
      z-index: 2;
    }

    .layout-container.sidebar-collapsed .mobile-area-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
    }

    .layout-container.sidebar-collapsed .mobile-area-icon {
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

    .layout-container.sidebar-collapsed .mobile-area-icon ha-icon {
      --mdc-icon-size: 23px;
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-icon {
      color: var(--mobile-area-picture-text-color, #ffffff);
      background: rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(12px);
    }

    .layout-container.sidebar-collapsed .mobile-area-badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 5px;
      min-width: 0;
    }

    .layout-container.sidebar-collapsed .mobile-area-badge {
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

    .layout-container.sidebar-collapsed .mobile-area-badge ha-icon {
      --mdc-icon-size: 14px;
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-badge {
      background: color-mix(in srgb, var(--area-badge-color, var(--primary-color)) 18%, rgba(255, 255, 255, 0.88));
      backdrop-filter: blur(12px);
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.16);
    }

    .layout-container.sidebar-collapsed .mobile-area-name {
      font-size: 16px;
      font-weight: 850;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .layout-container.sidebar-collapsed .mobile-area-meta {
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
    .layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-meta {
      color: var(--mobile-area-picture-text-color, #ffffff);
      text-shadow: var(--mobile-area-picture-text-shadow);
    }

    .layout-container.sidebar-collapsed .mobile-area-card.has-picture .mobile-area-meta {
      color: var(--mobile-area-picture-muted-text-color, rgba(255, 255, 255, 0.72));
    }

    /* Person Cards Section */
    .person-cards-section {
      margin-bottom: 32px;
    }

    .person-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
      margin: 0 auto;
    }

    .person-card {
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

    .person-card::after {
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

    .person-card.home {
      --person-color: #2f9b62;
      --person-bg: color-mix(in srgb, #2f9b62 10%, var(--card-background-color));
    }

    .person-card.away {
      --person-color: #d88e20;
      --person-bg: color-mix(in srgb, #d88e20 9%, var(--card-background-color));
    }

    .person-card.unknown {
      --person-color: #7c67c7;
      --person-bg: color-mix(in srgb, #7c67c7 8%, var(--card-background-color));
    }

    .person-card:hover {
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--person-color) 24%, transparent);
      box-shadow:
        0 20px 42px rgba(15, 23, 42, 0.12),
        inset 0 0 0 1px color-mix(in srgb, var(--person-color) 16%, transparent);
    }

    .person-card:active {
      transform: scale(0.988);
    }

    .person-card:focus-visible {
      outline: 2px solid color-mix(in srgb, var(--person-color) 72%, #ffffff);
      outline-offset: 3px;
    }

    .person-avatar-wrapper {
      position: relative;
      z-index: 1;
      flex-shrink: 0;
    }

    .person-avatar {
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

    .person-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .person-avatar ha-icon {
      --mdc-icon-size: 34px;
      color: var(--person-color);
    }

    .person-home-indicator {
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

    .person-home-indicator ha-icon {
      --mdc-icon-size: 14px;
      color: var(--text-primary-color);
    }

    .person-info {
      position: relative;
      z-index: 1;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 6px;
      flex: 1;
      min-width: 0;
    }

    .person-name {
      font-size: 18px;
      font-weight: 850;
      color: var(--primary-text-color);
      line-height: 1.15;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .person-status {
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

    .person-status ha-icon {
      --mdc-icon-size: 15px;
    }

    .person-details {
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
    .person-distance {
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
    .person-distance ha-icon {
      --mdc-icon-size: 14px;
    }

    .person-battery ha-icon {
      color: var(--success-color);
    }

    .person-battery ha-icon[icon*="alert"] {
      color: var(--error-color);
    }

    .person-distance ha-icon {
      color: var(--primary-color);
    }

    @media (max-width: 768px) {
      .person-cards-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 12px;
      }

      .person-card {
        padding: 16px;
      }

      .person-avatar {
        width: 64px;
        height: 64px;
      }

      .person-avatar ha-icon {
        --mdc-icon-size: 36px;
      }

      .person-name {
        font-size: 16px;
      }

      .person-status {
        font-size: 13px;
      }

      .person-details {
        gap: 8px;
      }

      .person-battery,
      .person-distance {
        font-size: 12px;
        padding: 3px 6px;
      }
    }

    .home-status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 20px;
      margin: 0 auto;
    }

    .home-status-card {
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

    .home-status-card::before {
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

    .home-status-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
      border-color: var(--primary-color);
    }

    .home-status-card:hover::before {
      opacity: 1;
    }

    .home-status-card .status-card-icon {
      position: relative;
      margin-bottom: 16px;
    }

    .home-status-card .status-card-icon ha-icon {
      --mdc-icon-size: 36px;
      color: var(--primary-color);
      transition: transform 0.3s ease;
    }

    .home-status-card:hover .status-card-icon ha-icon {
      transform: scale(1.1);
    }

    .home-status-card .status-card-badge {
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

    .home-status-card .status-card-title {
      font-size: 15px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-top: 8px;
    }



    /* Area Info Badges */
    .area-info-badges {
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

    .info-badge {
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

    .info-badge ha-icon {
      --mdc-icon-size: 14px;
    }

    .info-badge.light {
      background: color-mix(in srgb, var(--badge-color, #e1a129) 10%, var(--card-background-color));
      color: var(--badge-color, #e1a129);
    }

    .info-badge.switch {
      background: color-mix(in srgb, var(--badge-color, #2f6fd6) 10%, var(--card-background-color));
      color: var(--badge-color, #2f6fd6);
    }

    .info-badge.climate {
      background: color-mix(in srgb, var(--badge-color, #34a6d8) 10%, var(--card-background-color));
      color: var(--badge-color, #34a6d8);
    }

    .info-badge.media_player {
      background: color-mix(in srgb, var(--badge-color, #7c67c7) 10%, var(--card-background-color));
      color: var(--badge-color, #7c67c7);
    }

    .info-badge.cover {
      background: color-mix(in srgb, var(--badge-color, #d98928) 10%, var(--card-background-color));
      color: var(--badge-color, #d98928);
    }

    .info-badge.fan {
      background: color-mix(in srgb, var(--badge-color, #16a6b6) 10%, var(--card-background-color));
      color: var(--badge-color, #16a6b6);
    }

    .info-badge.motion {
      background: color-mix(in srgb, var(--badge-color, #6d7891) 10%, var(--card-background-color));
      color: var(--badge-color, #6d7891);
    }

    /* Sidebar info badges (smaller) */
    .sidebar .info-badge {
      padding: 2px 6px;
      font-size: 11px;
      border-radius: 12px;
    }

    .sidebar .info-badge ha-icon {
      --mdc-icon-size: 12px;
    }

    .sidebar .badge-count {
      min-width: 14px;
      text-align: center;
    }

    /* Clickable badges */
    .info-badge.clickable {
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .info-badge.clickable:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
    }

    /* Color fallbacks for themes without custom colors */
    :host {
      --purple-color: #9c27b0;
      --blue-color: #2196f3;
    }

    /* Area View */
    .area-view {
      max-width: 1400px;
      margin: 0 auto;
    }

    .area-header {
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .area-title {
      font-size: 28px;
      font-weight: 400;
      margin: 0 0 16px 0;
      flex: 1;
    }

    .unavailable-entities-icon {
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

    .unavailable-entities-icon:hover {
      background: var(--error-color);
      transform: scale(1.1);
    }

    .unavailable-entities-icon ha-icon {
      --mdc-icon-size: 18px;
      color: white;
    }

    .unavailable-count {
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
    .area-badges {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }

    .area-badge {
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

    .area-badge:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .area-badge ha-icon {
      --mdc-icon-size: 20px;
    }

    .area-badge.light-toggle {
      background: color-mix(in srgb, var(--warning-color) 10%, var(--card-background-color));
      border-color: var(--warning-color);
    }

    .area-badge.light-toggle ha-icon {
      color: var(--warning-color);
    }

    .area-badge.switch-toggle {
      background: color-mix(in srgb, var(--info-color) 10%, var(--card-background-color));
      border-color: var(--info-color);
    }

    .area-badge.switch-toggle ha-icon {
      color: var(--info-color);
    }

    .area-badge.wattage {
      background: color-mix(in srgb, var(--warning-color) 10%, var(--card-background-color));
      border-color: var(--warning-color);
    }

    .area-badge.wattage ha-icon {
      color: var(--warning-color);
    }

    .area-badge.energy {
      background: color-mix(in srgb, var(--info-color) 10%, var(--card-background-color));
      border-color: var(--info-color);
    }

    .area-badge.energy ha-icon {
      color: var(--info-color);
    }

    /* Entities Section */
    .entities-section {
      display: grid;
      gap: 16px;
    }

    .domain-group {
      background: var(--card-background-color);
      border-radius: 12px;
      padding: 16px;
    }

    .domain-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 500;
    }

    .domain-header ha-icon {
      --mdc-icon-size: 20px;
      opacity: 0.8;
    }

    .entities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 8px;
    }

    .entities-grid.cover-entities-grid {
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 12px;
    }

    .entities-grid.light-entities-grid {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 12px;
    }

    .entities-grid.sensor-entities-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 12px;
    }

    .entities-grid.motion-entities-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 10px;
    }

    .entity-card-wrapper {
      min-height: 60px;
      position: relative;
    }

    .cover-entity-card,
    .light-entity-card,
    .motion-entity-card {
      min-height: 72px;
    }

    .sensor-entity-card {
      min-height: 150px;
    }

    .cover-entity-card dwains-dashboard-next-card-host,
    .light-entity-card dwains-dashboard-next-card-host,
    .sensor-entity-card dwains-dashboard-next-card-host,
    .motion-entity-card dwains-dashboard-next-card-host {
      display: block;
    }

    .mobile-area-overview,
    .mobile-entities-section {
      display: none;
    }

    .area-view .mobile-entities-section {
      display: grid;
      position: relative;
      z-index: 2;
    }

    .area-header-metrics {
      display: none;
    }

    .mobile-area-metrics {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-bottom: 14px;
    }

    .mobile-area-metric,
    .area-header-metric {
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
    .area-header-metric.temperature {
      --metric-color: #7c67c7;
    }

    .mobile-area-metric.humidity,
    .area-header-metric.humidity {
      --metric-color: #34a6d8;
    }

    .mobile-area-metric.power,
    .area-header-metric.power {
      --metric-color: #d88e20;
    }

    .mobile-area-metric.energy,
    .area-header-metric.energy {
      --metric-color: #7c67c7;
    }

    .metric-ring {
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

    .metric-ring::after {
      content: "";
      position: absolute;
      inset: 5px;
      border-radius: inherit;
      background: color-mix(in srgb, var(--card-background-color) 92%, #ffffff);
    }

    .metric-ring.metric-icon {
      background: color-mix(in srgb, var(--metric-color) 15%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--metric-color) 16%, transparent);
    }

    .metric-ring.metric-icon::after {
      display: none;
    }

    .metric-ring.metric-icon ha-icon {
      --mdc-icon-size: 22px;
      color: var(--metric-color);
    }

    .metric-value {
      position: relative;
      z-index: 1;
      color: color-mix(in srgb, var(--primary-text-color) 74%, transparent);
      font-size: 12px;
      font-weight: 850;
      line-height: 1;
    }

    .metric-copy {
      min-width: 0;
    }

    .metric-label {
      color: color-mix(in srgb, var(--primary-text-color) 62%, transparent);
      font-size: 13px;
      font-weight: 850;
      line-height: 1.1;
    }

    .metric-range {
      margin-top: 4px;
      color: color-mix(in srgb, var(--primary-text-color) 38%, transparent);
      font-size: 10px;
      font-weight: 800;
      line-height: 1;
    }

    .metric-reading {
      margin-top: 3px;
      color: var(--primary-text-color);
      font-size: 13px;
      font-weight: 900;
      line-height: 1;
      white-space: nowrap;
    }

    .mobile-entities-section {
      gap: 22px;
    }

    .mobile-domain-group {
      min-width: 0;
      position: relative;
    }

    .mobile-domain-group.group-editing {
      border-radius: 8px;
      transition: opacity 0.16s ease, outline-color 0.16s ease, background-color 0.16s ease;
    }

    .mobile-domain-group.group-dragging {
      opacity: 0.46;
    }

    .mobile-domain-group.group-drag-over {
      outline: 2px solid var(--primary-color);
      outline-offset: 7px;
      background: color-mix(in srgb, var(--primary-color) 5%, transparent);
    }

    .mobile-domain-group:not(.menu-open) {
      contain: layout style paint;
    }

    .mobile-domain-group.menu-open {
      z-index: 1200;
    }

    .mobile-domain-header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 0 2px;
      margin-bottom: 10px;
    }

    .mobile-domain-title {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .mobile-domain-header-actions {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      flex: 0 0 auto;
    }

    .mobile-domain-order-button,
    .mobile-domain-drag-handle {
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

    .mobile-domain-drag-handle {
      cursor: grab;
      touch-action: none;
    }

    .mobile-domain-drag-handle:active {
      cursor: grabbing;
    }

    .mobile-domain-order-button:disabled {
      opacity: 0.28;
      cursor: default;
    }

    .mobile-domain-order-button ha-icon,
    .mobile-domain-drag-handle ha-icon {
      --mdc-icon-size: 18px;
    }

    .mobile-layout-toggle {
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

    .mobile-layout-toggle.active {
      background: #182044;
      color: #ffffff;
      box-shadow: 0 8px 18px rgba(15, 23, 42, 0.14);
    }

    .mobile-layout-toggle:active {
      transform: scale(0.94);
    }

    .mobile-layout-toggle ha-icon {
      --mdc-icon-size: 17px;
    }

    .mobile-layout-toggle.static {
      cursor: default;
      pointer-events: none;
    }

    .mobile-domain-title-copy {
      min-width: 0;
      display: inline-flex;
      align-items: baseline;
      gap: 7px;
    }

    .mobile-domain-title-label {
      color: var(--primary-text-color);
      font-size: 18px;
      font-weight: 900;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .mobile-domain-count {
      color: color-mix(in srgb, var(--primary-text-color) 42%, transparent);
      font-size: 12px;
      font-weight: 850;
      line-height: 1.1;
      white-space: nowrap;
    }

    .mobile-domain-master {
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

    .mobile-domain-master.domain-light {
      --mobile-domain-accent: #e89a17;
    }

    .mobile-domain-master.domain-switch,
    .mobile-domain-master.domain-input_boolean {
      --mobile-domain-accent: #3275d6;
    }

    .mobile-domain-master.domain-cover {
      --mobile-domain-accent: #0d98aa;
    }

    .mobile-domain-master.domain-fan {
      --mobile-domain-accent: #2d9d79;
    }

    .mobile-domain-master.domain-lock {
      --mobile-domain-accent: #7657c8;
    }

    .mobile-domain-master.active {
      border-color: color-mix(in srgb, var(--mobile-domain-accent) 42%, transparent);
      background: color-mix(in srgb, var(--mobile-domain-accent) 11%, var(--card-background-color));
      color: var(--mobile-domain-accent);
    }

    .mobile-domain-master:active {
      transform: scale(0.94);
    }

    .mobile-domain-master ha-icon {
      --mdc-icon-size: 16px;
    }

    .mobile-domain-master-track {
      position: relative;
      width: 26px;
      height: 16px;
      flex: 0 0 auto;
      border-radius: 999px;
      background: color-mix(in srgb, var(--primary-text-color) 18%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 6%, transparent);
      transition: background-color 0.18s ease;
    }

    .mobile-domain-master-track::after {
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

    .mobile-domain-master.active .mobile-domain-master-track {
      background: var(--mobile-domain-accent);
    }

    .mobile-domain-master.active .mobile-domain-master-track::after {
      transform: translateX(10px);
    }

    .mobile-domain-master-actions {
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

    .mobile-domain-master-actions.domain-cover {
      --mobile-domain-accent: #0d98aa;
    }

    .mobile-domain-master-actions.domain-lock {
      --mobile-domain-accent: #7657c8;
    }

    .mobile-domain-master-action {
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

    .mobile-domain-master-action + .mobile-domain-master-action {
      border-left: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
    }

    .mobile-domain-master-action:hover,
    .mobile-domain-master-action.active {
      background: color-mix(in srgb, var(--mobile-domain-accent) 12%, var(--card-background-color));
      color: var(--mobile-domain-accent);
    }

    .mobile-domain-master-action:active {
      transform: scale(0.88);
    }

    .mobile-domain-master-action ha-icon {
      --mdc-icon-size: 17px;
    }

    .mobile-entity-rail {
      display: flex;
      gap: 10px;
      margin: 0 -10px;
      padding: 0 10px 2px;
      overflow-x: auto;
      scroll-padding: 10px;
      scroll-snap-type: x proximity;
      scrollbar-width: none;
    }

    .mobile-entity-rail::-webkit-scrollbar {
      display: none;
    }

    .mobile-entities-section.layout-grid {
      gap: 26px;
    }

    .mobile-entities-section.layout-grid .mobile-entity-rail {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin: 0;
      padding: 0;
      overflow: visible;
      scroll-snap-type: none;
      align-items: stretch;
    }

    .mobile-entities-section.layout-grid .mobile-entity-card {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      flex: none;
      scroll-snap-align: none;
    }

    @media (max-width: 380px) {
      .mobile-entities-section.layout-grid .mobile-entity-rail {
        grid-template-columns: 1fr;
      }
    }

    .mobile-entity-card {
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

    .mobile-entity-replacement-card {
      box-sizing: border-box;
      flex: 0 0 260px;
      min-width: 0;
      scroll-snap-align: start;
    }

    .mobile-entity-replacement-card dwains-dashboard-next-card-host {
      display: block;
      width: 100%;
    }

    .room-ui-v2 .mobile-entity-replacement-card {
      --dd-replacement-min-height: 62px;
      --dd-replacement-padding: 8px 10px;
      --dd-replacement-radius: 8px;
    }

    @media (min-width: 769px) {
      .room-ui-v2 .mobile-entity-replacement-card {
        --dd-replacement-min-height: 72px;
        --dd-replacement-padding: 12px;
        --dd-replacement-radius: 10px;
      }
    }

    .mobile-todo-list-card {
      box-sizing: border-box;
      flex: 0 0 min(100%, 520px);
      width: min(100%, 520px);
      min-width: min(100%, 320px);
      scroll-snap-align: start;
    }

    .mobile-todo-list-card dwains-dashboard-next-card-host {
      display: block;
      width: 100%;
    }

    .mobile-entities-section.layout-grid .mobile-entity-replacement-card {
      width: 100%;
      flex: none;
      scroll-snap-align: none;
    }

    .mobile-entities-section.layout-grid .mobile-todo-list-card {
      grid-column: 1 / -1;
      width: 100%;
      min-width: 0;
      flex: none;
      scroll-snap-align: none;
    }

    .mobile-entity-card:active {
      transform: scale(0.985);
      }

      .mobile-entity-card.is-active {
        box-shadow:
          0 14px 30px rgba(15, 23, 42, 0.08),
          inset 0 0 0 1px color-mix(in srgb, var(--entity-color) 18%, transparent);
      }

      .mobile-entity-card.is-unavailable {
        opacity: 0.62;
      }

    .mobile-entity-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
    }

    .mobile-entity-icon {
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

      .mobile-entity-icon ha-icon {
        --mdc-icon-size: 20px;
      }

      .mobile-entity-action {
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

      .mobile-entity-action:active {
        transform: scale(0.94);
      }

      .mobile-entity-action:disabled {
        opacity: 0.36;
        cursor: not-allowed;
      }

      .mobile-entity-toggle {
        width: 38px;
        height: 22px;
        justify-content: flex-start;
        border-radius: 999px;
        background: color-mix(in srgb, var(--secondary-background-color) 80%, #ffffff);
        box-shadow:
          inset 0 0 0 1px rgba(15, 23, 42, 0.07),
          0 4px 10px rgba(15, 23, 42, 0.08);
      }

    .mobile-entity-toggle::before {
      content: "";
      width: 18px;
      height: 18px;
      margin-left: 2px;
      border-radius: 999px;
      background: #ffffff;
      box-shadow: 0 2px 7px rgba(15, 23, 42, 0.2);
      transition: transform 0.18s ease;
      }

      .mobile-entity-card.is-active .mobile-entity-toggle {
        background: var(--entity-color);
      }

    .mobile-entity-card.is-active .mobile-entity-toggle::before {
      transform: translateX(16px);
    }

      .mobile-entity-more,
      .mobile-scene-action,
      .mobile-lock-action {
        width: 30px;
        height: 30px;
        border-radius: 999px;
        color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
        background: color-mix(in srgb, var(--secondary-background-color) 70%, #ffffff);
        box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.05);
      }

      .mobile-lock-action.is-unlocked {
        color: #ffffff;
        background: var(--entity-color);
        box-shadow: 0 8px 16px color-mix(in srgb, var(--entity-color) 24%, transparent);
      }

      .mobile-entity-more ha-icon,
      .mobile-scene-action ha-icon,
      .mobile-lock-action ha-icon {
        --mdc-icon-size: 17px;
      }

      .mobile-cover-actions {
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

      .mobile-cover-action {
        width: 26px;
        height: 26px;
        border-radius: 999px;
        color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
        background: transparent;
      }

      .mobile-cover-action.active {
        color: #ffffff;
        background: var(--entity-color);
        box-shadow: 0 6px 12px color-mix(in srgb, var(--entity-color) 22%, transparent);
      }

      .mobile-cover-action ha-icon {
        --mdc-icon-size: 16px;
      }

      .mobile-entities-section.layout-grid .mobile-cover-actions {
        min-height: 30px;
        padding: 3px;
        gap: 2px;
      }

      .mobile-entities-section.layout-grid .mobile-cover-action {
        width: 24px;
        height: 24px;
      }

      .mobile-entities-section.layout-grid .mobile-cover-action ha-icon {
        --mdc-icon-size: 15px;
      }

      @media (max-width: 430px) {
        .mobile-entities-section.layout-grid .mobile-entity-card {
          min-height: 138px;
          padding: 12px;
        }

        .mobile-entities-section.layout-grid .mobile-entity-top {
          gap: 6px;
        }

        .mobile-entities-section.layout-grid .mobile-entity-icon {
          width: 34px;
          height: 34px;
        }

        .mobile-entities-section.layout-grid .mobile-cover-actions {
          min-height: 28px;
          padding: 2px;
          gap: 1px;
        }

        .mobile-entities-section.layout-grid .mobile-cover-action {
          width: 23px;
          height: 23px;
        }

        .mobile-entities-section.layout-grid .mobile-cover-action ha-icon {
          --mdc-icon-size: 14px;
        }
      }

    .mobile-entity-meta {
      color: color-mix(in srgb, var(--primary-text-color) 42%, transparent);
      font-size: 10px;
      font-weight: 750;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

      .mobile-entity-name {
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

      .mobile-entity-status {
        margin-top: 5px;
        color: color-mix(in srgb, var(--primary-text-color) 46%, transparent);
        font-size: 11px;
        font-weight: 750;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .mobile-entity-content {
        min-width: 0;
      }

      .mobile-entity-card.has-inline-select {
        min-height: 170px;
        justify-content: flex-start;
        gap: 10px;
      }

      .mobile-entity-card.has-inline-select .mobile-entity-content {
        margin-top: auto;
      }

      .mobile-entity-card.has-inline-select .mobile-entity-status {
        display: none;
      }

      .mobile-entity-select {
        position: relative;
        display: block;
        width: 100%;
      }

      .mobile-entity-select select {
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

      .mobile-entity-select select:focus {
        box-shadow:
          inset 0 0 0 2px color-mix(in srgb, var(--entity-color) 72%, transparent),
          0 10px 22px color-mix(in srgb, var(--entity-color) 14%, transparent);
      }

      .mobile-entity-select select:disabled {
        opacity: 0.55;
        cursor: not-allowed;
      }

      .mobile-entity-select ha-icon {
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
      .area-view .mobile-entities-section.layout-grid .dd-generated-card-wrap.editing {
        width: 100%;
        min-width: 0;
        flex: none;
        scroll-snap-align: none;
      }

      .area-view .mobile-entities-section {
        gap: 28px;
        margin-top: 20px;
      }

      .area-view .mobile-domain-group {
        min-width: 0;
      }

      .area-view .mobile-domain-header {
        padding: 0;
        margin-bottom: 12px;
      }

      .area-view .mobile-layout-toggle {
        display: none;
      }

      .area-view .mobile-domain-title {
        gap: 0;
      }

      .area-view .mobile-domain-title-label {
        font-size: 20px;
      }

      .area-view .mobile-domain-count {
        font-size: 12px;
      }

      .area-view .mobile-entity-rail,
      .area-view .mobile-entities-section.layout-grid .mobile-entity-rail {
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
      .area-view .mobile-entities-section.layout-grid .mobile-entity-card {
        width: 100%;
        min-width: 0;
        min-height: 152px;
        flex: none;
        padding: 16px;
        border-radius: 12px;
        scroll-snap-align: none;
      }

      .area-view .mobile-entity-card:hover {
        transform: translateY(-1px);
        box-shadow:
          0 16px 32px rgba(15, 23, 42, 0.08),
          inset 0 0 0 1px rgba(15, 23, 42, 0.045);
      }

      .area-view .mobile-entity-card.has-inline-select {
        min-height: 178px;
      }

      .area-view .mobile-entity-icon,
      .area-view .mobile-entities-section.layout-grid .mobile-entity-icon {
        width: 38px;
        height: 38px;
        border-radius: 11px;
      }

      .area-view .mobile-entity-icon ha-icon {
        --mdc-icon-size: 21px;
      }

      .area-view .mobile-entity-name {
        font-size: 15px;
      }

      .area-view .mobile-entity-status {
        font-size: 11px;
      }

      .area-view .mobile-cover-actions,
      .area-view .mobile-entities-section.layout-grid .mobile-cover-actions {
        min-height: 32px;
        padding: 3px;
        gap: 3px;
      }

      .area-view .mobile-cover-action,
      .area-view .mobile-entities-section.layout-grid .mobile-cover-action {
        width: 26px;
        height: 26px;
      }

      .area-view .mobile-cover-action ha-icon,
      .area-view .mobile-entities-section.layout-grid .mobile-cover-action ha-icon {
        --mdc-icon-size: 16px;
      }

      .area-view .mobile-entity-rail .dd-custom-card-wrap,
      .area-view .mobile-entity-rail .dd-domain-add-card,
      .area-view .mobile-entities-section.layout-grid .mobile-entity-rail .dd-custom-card-wrap,
      .area-view .mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card {
        width: 100%;
        min-width: 0;
        flex: none;
        scroll-snap-align: none;
      }

      .area-view .mobile-todo-list-card,
      .area-view .mobile-entities-section.layout-grid .mobile-todo-list-card {
        grid-column: 1 / -1;
        width: 100%;
        max-width: 760px;
        min-width: 0;
        flex: none;
        scroll-snap-align: none;
      }
    }

    /* Bewerk-toggle in de area-header */
    .area-header { display: flex; align-items: center; gap: 8px; }
    .dd-edit-toggle {
      margin-left: auto;
      display: inline-flex; align-items: center; justify-content: center;
      width: 38px; height: 38px; border-radius: 50%;
      border: none; cursor: pointer;
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      transition: background-color .2s ease, color .2s ease;
    }
    .dd-edit-toggle:hover { background: rgba(var(--rgb-primary-color, 3,169,244), .14); }
    .dd-edit-toggle.active { background: var(--primary-color); color: var(--text-primary-color, #fff); }
    .dd-edit-toggle.danger:hover { background: rgba(var(--rgb-error-color, 244,67,54), .16); color: var(--error-color, #f44336); }
    .dd-edit-toggle ha-icon { --mdc-icon-size: 20px; }

    /* Sidebar: blueprint-pagina's + toevoegknop */
    .sidebar-divider {
      height: 1px;
      background: var(--divider-color);
      margin: 8px 12px;
    }
    .dd-add-page {
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
    .dd-add-page:hover {
      color: var(--primary-color);
      border-color: var(--primary-color);
      background: rgba(var(--rgb-primary-color, 3,169,244), .08);
    }
    .dd-add-page ha-icon { --mdc-icon-size: 20px; }

    /* Blueprint-paginakaart */
    .dd-page-card { margin-top: 8px; }
    .dd-page-card dwains-dashboard-next-card-host { display: block; }

    /* Area custom card slots */
    .dd-custom-section {
      margin: 12px 0;
      min-width: 0;
    }

    .dd-custom-section.after-domain {
      margin: 12px 0 2px;
    }

    .dd-custom-section.editing {
      padding: 10px;
      border: 1px dashed color-mix(in srgb, var(--primary-color) 28%, transparent);
      border-radius: 12px;
      background: color-mix(in srgb, var(--primary-color) 4%, transparent);
    }

    .dd-custom-section.drag-over {
      border-color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 22%, transparent);
    }

    .dd-custom-slot-head {
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

    .dd-custom-slot-title {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }

    .dd-custom-slot-title ha-icon {
      --mdc-icon-size: 16px;
      color: var(--primary-color);
    }

    .dd-custom-slot-title span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dd-custom-grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 8px;
      container-type: inline-size;
    }

    .dd-custom-grid > .dd-custom-card-wrap,
    .dd-custom-grid > .dd-add-card {
      --dd-card-default-column: span 4;
      grid-column: var(--dd-card-grid-column, var(--dd-card-default-column));
      min-height: var(--dd-card-grid-min-height, 0);
    }

    .dd-custom-card-wrap {
      position: relative;
      min-width: 0;
      border-radius: 12px;
    }

    .dd-custom-card-wrap.editing {
      outline: 1px solid color-mix(in srgb, var(--divider-color) 78%, transparent);
      outline-offset: 2px;
      cursor: grab;
    }

    .dd-generated-card-wrap {
      display: contents;
    }

    .dd-generated-card-wrap.editing {
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
    .dd-generated-card-wrap.editing > .mobile-todo-list-card {
      width: 100%;
      min-width: 0;
      pointer-events: none;
    }

    .dd-generated-card-wrap.editing.is-hidden > :not(.dd-generated-card-toolbar) {
      opacity: 0.38;
      filter: saturate(0.45);
    }

    .dd-generated-card-wrap.editing.dragging {
      opacity: 0.42;
      cursor: grabbing;
    }

    .dd-generated-card-wrap.editing.drag-over {
      outline-color: var(--primary-color);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color) 14%, transparent);
      transform: translateY(-2px);
    }

    .dd-generated-card-toolbar {
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

    .dd-generated-card-toolbar button {
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

    .dd-generated-card-toolbar button:first-child {
      color: var(--primary-color);
      cursor: grab;
    }

    .dd-generated-card-toolbar button:hover,
    .dd-generated-card-toolbar button:focus-visible {
      background: color-mix(in srgb, var(--primary-color) 12%, transparent);
      outline: none;
    }

    .dd-generated-card-toolbar ha-icon {
      --mdc-icon-size: 17px;
    }

    .mobile-entities-section.layout-grid .dd-generated-card-wrap.editing {
      width: 100%;
      min-width: 0;
      flex: none;
      scroll-snap-align: none;
    }

    .dd-custom-card-wrap.dragging {
      opacity: 0.48;
      cursor: grabbing;
    }

    .dd-custom-card-wrap.drag-over {
      outline-color: var(--primary-color);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color) 12%, transparent);
    }

    .dd-card-toolbar {
      position: absolute; top: 6px; right: 6px; z-index: 4;
      display: none; gap: 4px;
    }
    .dd-custom-card-wrap.editing .dd-card-toolbar { display: flex; }
    .dd-card-toolbar button {
      display: inline-flex; align-items: center; justify-content: center;
      width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer;
      background: var(--card-background-color);
      box-shadow: 0 1px 4px rgba(0,0,0,.2);
      color: var(--primary-text-color);
    }
    .dd-card-toolbar button.del:hover { color: var(--error-color, #f44336); }
    .dd-card-toolbar ha-icon { --mdc-icon-size: 18px; }

    .dd-card-toolbar button.drag {
      cursor: grab;
      color: var(--primary-color);
    }

    .dd-card-toolbar button.drag:active {
      cursor: grabbing;
    }

    .dd-add-card-inline,
    .dd-add-card {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      min-height: 72px; width: 100%;
      border: 2px dashed var(--divider-color); border-radius: 12px;
      background: transparent; cursor: pointer;
      color: var(--secondary-text-color); font-weight: 600; font-size: .9rem;
      transition: border-color .2s ease, color .2s ease, background-color .2s ease;
    }
    .dd-add-card:hover {
      border-color: var(--primary-color); color: var(--primary-color);
      background: rgba(var(--rgb-primary-color, 3,169,244), .06);
    }

    .dd-add-card-inline {
      min-height: 32px;
      width: auto;
      padding: 0 12px;
      border-radius: 999px;
      border-width: 1px;
      font-size: 12px;
      white-space: nowrap;
    }

    .dd-add-card-inline ha-icon {
      --mdc-icon-size: 16px;
    }

    .dd-add-card ha-icon { --mdc-icon-size: 22px; }

    .dd-domain-add-card {
      min-height: 72px;
      border-width: 1px;
      background: color-mix(in srgb, var(--secondary-background-color) 54%, transparent);
      opacity: 0.82;
    }

    .dd-domain-add-card:hover,
    .dd-domain-add-card.drag-over {
      opacity: 1;
      border-color: var(--primary-color);
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 8%, var(--card-background-color));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 18%, transparent);
    }

    .entities-grid .dd-custom-card-wrap,
    .entities-grid .dd-domain-add-card {
      min-width: 0;
    }

    .entities-grid > .dd-custom-card-wrap.dd-grid-full,
    .mobile-entities-section.layout-grid .mobile-entity-rail > .dd-custom-card-wrap.dd-grid-full {
      grid-column: 1 / -1;
      width: 100%;
    }

    .mobile-entity-rail .dd-custom-card-wrap,
    .mobile-entity-rail .dd-domain-add-card {
      box-sizing: border-box;
      flex: 0 0 164px;
      min-width: 0;
      scroll-snap-align: start;
    }

    .mobile-entity-rail > .dd-custom-card-wrap.dd-grid-full {
      flex-basis: calc(100% - 20px);
    }

    .mobile-entity-rail .dd-domain-add-card {
      min-height: 128px;
    }

    .mobile-entities-section.layout-grid .mobile-entity-rail .dd-custom-card-wrap,
    .mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card {
      width: 100%;
      flex: none;
      scroll-snap-align: none;
    }

    .mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card {
      min-height: 138px;
    }

    @container (max-width: 899px) {
      .dd-custom-grid > .dd-custom-card-wrap,
      .dd-custom-grid > .dd-add-card {
        --dd-card-default-column: span 6;
      }
    }

    @container (max-width: 559px) {
      .dd-custom-grid > .dd-custom-card-wrap,
      .dd-custom-grid > .dd-add-card {
        --dd-card-default-column: span 12;
      }
    }

    .entity-card-wrapper.loading {
      background: var(--secondary-background-color);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Loading skeleton */
    .skeleton {
      background: linear-gradient(90deg,
        var(--secondary-background-color) 25%,
        var(--primary-background-color) 50%,
        var(--secondary-background-color) 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 8px;
    }

    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .sidebar {
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

      .sidebar-resize-handle {
        display: none;
      }

      .sidebar-collapse-toggle {
        display: none;
      }

      .floor-areas {
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      .area-button {
        margin-bottom: 8px;
      }

      .sidebar.open {
        transform: translateX(0);
      }

      .mobile-nav-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        z-index: 120;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }

      .mobile-nav-overlay.open {
        opacity: 1;
        pointer-events: auto;
      }

      .global-header {
        padding: 12px;
      }

      .header-time {
        font-size: 20px;
      }



      .entities-grid {
        grid-template-columns: 1fr;
      }

      .global-header.mobile .header-expand-button[data-extra-count]::after {
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
      .mobile-entities-section.layout-grid .mobile-entity-card {
        content-visibility: visible;
        contain-intrinsic-size: auto;
      }
    }

    /* Favorites Section */
    .favorites-section {
      margin-bottom: 24px;
    }

    .favorites-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      font-size: 18px;
      font-weight: 500;
    }

    .favorites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 8px;
    }

    .favorite-card-wrapper {
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

    .favorite-card-wrapper:hover {
      transform: translateY(-2px);
      box-shadow:
        0 16px 30px rgba(15, 23, 42, 0.1),
        inset 0 0 0 1px color-mix(in srgb, var(--favorite-color) 20%, transparent);
    }

    .favorite-card-wrapper:active {
      transform: scale(0.985);
    }

    .favorite-card-wrapper:focus-visible,
    .favorite-quick-action:focus-visible {
      outline: 2px solid color-mix(in srgb, var(--favorite-color) 72%, #ffffff);
      outline-offset: 3px;
    }

    .favorite-card-wrapper.is-off,
    .favorite-card-wrapper.is-idle {
      --favorite-color: color-mix(in srgb, var(--secondary-text-color) 56%, var(--primary-color));
    }

    .favorite-card-wrapper.favorite-light {
      --favorite-color: #e1a129;
    }

    .favorite-card-wrapper.favorite-switch {
      --favorite-color: #2f6fd6;
    }

    .favorite-card-wrapper.favorite-cover {
      --favorite-color: #d98928;
    }

    .favorite-card-wrapper.favorite-binary_sensor,
    .favorite-card-wrapper.favorite-motion {
      --favorite-color: #6d7891;
    }

    .favorite-card-wrapper.favorite-climate,
    .favorite-card-wrapper.favorite-weather {
      --favorite-color: #34a6d8;
    }

    .favorite-card-wrapper.favorite-media_player {
      --favorite-color: #7c67c7;
    }

    .favorite-card-wrapper.favorite-person {
      --favorite-color: #3f9b6d;
    }

    .favorite-card-wrapper.favorite-sun {
      --favorite-color: #2d7eea;
    }

    .favorite-top,
    .favorite-body {
      position: relative;
      z-index: 1;
    }

    .favorite-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .favorite-icon {
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

    .favorite-icon ha-icon {
      --mdc-icon-size: 19px;
    }

    .favorite-quick-action {
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

    .favorite-quick-action::before {
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

    .favorite-card-wrapper.is-active .favorite-quick-action {
      background: var(--favorite-color);
    }

    .favorite-card-wrapper.is-active .favorite-quick-action::before {
      transform: translateX(16px);
    }

    .favorite-card-wrapper.info-only .favorite-quick-action {
      width: 30px;
      height: 30px;
      justify-content: center;
      color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
      background: color-mix(in srgb, var(--secondary-background-color) 70%, #ffffff);
      box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.05);
    }

    .favorite-card-wrapper.info-only .favorite-quick-action::before {
      display: none;
    }

    .favorite-card-wrapper.info-only .favorite-quick-action ha-icon {
      display: block;
      --mdc-icon-size: 17px;
    }

    .favorite-quick-action ha-icon {
      display: none;
    }

    .favorite-quick-action:active {
      transform: scale(0.94);
    }

    .favorite-name {
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

    .favorite-state {
      margin-top: 0;
      color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
      font-size: 10px;
      font-weight: 750;
      line-height: 1.15;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .favorite-area {
      margin-top: 0;
      color: color-mix(in srgb, var(--primary-text-color) 46%, transparent);
      font-size: 10px;
      font-weight: 750;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :host([data-theme-dark]) {
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
    .toast {
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

    .toast.show {
      opacity: 1;
    }

    /* Confirmation Dialog */
    .confirmation-dialog {
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

    .confirmation-dialog.show {
      opacity: 1;
      pointer-events: auto;
    }

    .confirmation-content {
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

    .confirmation-dialog.show .confirmation-content {
      transform: scale(1);
    }

    .confirmation-title {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.25;
      margin-bottom: 8px;
    }

    .confirmation-message {
      margin-bottom: 20px;
      color: var(--secondary-text-color);
      font-size: 14px;
      line-height: 1.5;
    }

    .confirmation-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    .notifications-overlay {
      position: fixed;
      inset: 0;
      z-index: 1040;
      opacity: 0;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.42);
      backdrop-filter: blur(2px);
      transition: opacity 0.22s ease;
    }

    .notifications-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    .notifications-panel {
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

    .notifications-panel.open {
      transform: translate3d(-50%, -50%, 0) scale(1);
      opacity: 1;
      pointer-events: auto;
    }

    .notifications-panel::before {
      content: "";
      width: 42px;
      height: 4px;
      margin: 10px auto 2px;
      flex: 0 0 auto;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.14);
    }

    .notifications-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 12px 14px 10px;
      border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    }

    .notifications-title {
      min-width: 0;
    }

    .notifications-title-row {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--primary-text-color);
      font-size: 16px;
      font-weight: 850;
      line-height: 1.15;
    }

    .notifications-title-row ha-icon {
      color: var(--primary-color);
      --mdc-icon-size: 20px;
    }

    .notifications-subtitle {
      margin-top: 3px;
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 600;
      line-height: 1.2;
    }

    .notifications-actions {
      display: flex;
      align-items: center;
      gap: 6px;
      flex: 0 0 auto;
    }

    .notifications-icon-button,
    .notification-dismiss {
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

    .notifications-icon-button {
      width: 34px;
      height: 34px;
    }

    .notifications-icon-button ha-icon {
      --mdc-icon-size: 18px;
    }

    .notifications-list {
      overflow-y: auto;
      padding: 10px;
    }

    .notification-row {
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

    .notification-row:last-child {
      margin-bottom: 0;
    }

    .notification-icon {
      width: 38px;
      height: 38px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.11);
      color: var(--primary-color);
    }

    .notification-icon ha-icon {
      --mdc-icon-size: 21px;
    }

    .notification-title {
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 800;
      line-height: 1.2;
      overflow-wrap: anywhere;
    }

    .notification-message {
      margin-top: 4px;
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.35;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    .notification-date {
      margin-top: 7px;
      color: color-mix(in srgb, var(--secondary-text-color) 74%, transparent);
      font-size: 11px;
      font-weight: 650;
    }

    .notification-dismiss {
      width: 32px;
      height: 32px;
      color: var(--secondary-text-color);
      background: rgba(0, 0, 0, 0.05);
    }

    .notification-dismiss ha-icon {
      --mdc-icon-size: 17px;
    }

    .notifications-empty,
    .notifications-error,
    .notifications-loading {
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
    .notifications-loading ha-icon {
      --mdc-icon-size: 28px;
      color: var(--primary-color);
    }

    @media (max-width: 1024px) {
      .notifications-panel {
        top: auto;
        bottom: calc(18px + env(safe-area-inset-bottom, 0px));
        width: min(460px, calc(100vw - 28px));
        max-height: min(70vh, 620px);
        transform: translate3d(-50%, calc(100% + 48px), 0);
      }

      .notifications-panel.open {
        transform: translate3d(-50%, 0, 0);
      }
    }

    .confirmation-button {
      min-height: 40px;
      padding: 9px 16px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 650;
      transition: transform 0.16s ease, box-shadow 0.16s ease;
    }

    .confirmation-button.cancel {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }

    .confirmation-button.confirm {
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    .confirmation-button.confirm.destructive {
      background: var(--error-color, #db4437);
      color: #fff;
    }

    .confirmation-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    /* Area Badges Styling */
    .area-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 0px; /* 16px;*/
    }

    .area-badge {
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

    .area-badge ha-icon {
      --mdc-icon-size: 18px;
    }

    /* Domain-specific badge colors */
    .area-badge.light {
      background: color-mix(in srgb, var(--area-badge-color, #e1a129) 10%, var(--card-background-color));
      color: var(--area-badge-color, #e1a129);
      border-color: color-mix(in srgb, var(--area-badge-color, #e1a129) 20%, transparent);
    }

    .area-badge.switch {
      background: color-mix(in srgb, var(--area-badge-color, #2f6fd6) 10%, var(--card-background-color));
      color: var(--area-badge-color, #2f6fd6);
      border-color: color-mix(in srgb, var(--area-badge-color, #2f6fd6) 20%, transparent);
    }

    .area-badge.climate {
      background: color-mix(in srgb, var(--area-badge-color, #34a6d8) 10%, var(--card-background-color));
      color: var(--area-badge-color, #34a6d8);
      border-color: color-mix(in srgb, var(--area-badge-color, #34a6d8) 20%, transparent);
    }

    .area-badge.motion.active {
      background: color-mix(in srgb, var(--area-badge-color, #6d7891) 10%, var(--card-background-color));
      color: var(--area-badge-color, #6d7891);
      border-color: color-mix(in srgb, var(--area-badge-color, #6d7891) 20%, transparent);
    }

    .area-badge.cover {
      background: color-mix(in srgb, var(--area-badge-color, #d98928) 10%, var(--card-background-color));
      color: var(--area-badge-color, #d98928);
      border-color: color-mix(in srgb, var(--area-badge-color, #d98928) 20%, transparent);
    }

    .area-badge.media_player {
      background: color-mix(in srgb, var(--area-badge-color, #7c67c7) 10%, var(--card-background-color));
      color: var(--area-badge-color, #7c67c7);
      border-color: color-mix(in srgb, var(--area-badge-color, #7c67c7) 20%, transparent);
    }

    .area-badge.temperature {
      background: color-mix(in srgb, var(--cyan-color) 10%, var(--card-background-color));
      color: var(--cyan-color);
      border-color: color-mix(in srgb, var(--cyan-color) 20%, transparent);
    }

    .area-badge.humidity {
      background: color-mix(in srgb, var(--blue-color) 10%, var(--card-background-color));
      color: var(--blue-color);
      border-color: color-mix(in srgb, var(--blue-color) 20%, transparent);
    }

    .area-badge.wattage {
      background: color-mix(in srgb, var(--yellow-color) 10%, var(--card-background-color));
      color: var(--yellow-color);
      border-color: color-mix(in srgb, var(--yellow-color) 20%, transparent);
    }

    .area-badge.energy {
      background: color-mix(in srgb, var(--indigo-color) 10%, var(--card-background-color));
      color: var(--indigo-color);
      border-color: color-mix(in srgb, var(--indigo-color) 20%, transparent);
    }

    /* Toggle button badges */
    .area-badge.light-toggle,
    .area-badge.switch-toggle {
      cursor: pointer;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-color: var(--primary-color);
    }

    .area-badge.light-toggle:hover,
    .area-badge.switch-toggle:hover {
      background: color-mix(in srgb, var(--primary-color) 90%, black);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .area-badges {
        padding: 12px;
        gap: 6px;
      }

      .area-badge {
        padding: 6px 10px;
        font-size: 13px;
      }

      .area-badge ha-icon {
        --mdc-icon-size: 16px;
      }
    }

    /* Header Expanded Content Styling */
    .global-header.expanded {
      border-bottom: 2px solid var(--primary-color);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .header-expanded-content {
      background: var(--card-background-color);
      padding: 16px;
      border-top: 1px solid var(--divider-color);
      animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .header-expanded-content .header-favorites {
      max-width: 100%;
    }

    /* Favorites Section Styling */
    .favorites-section {
      width: 100%;
    }

    .favorites-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--divider-color);
    }

    .favorites-header ha-icon {
      --mdc-icon-size: 20px;
      color: var(--primary-color);
    }

    .favorites-header h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .favorites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
      width: 100%;
    }

    .favorite-tile-wrapper {
      width: 100%;
      min-height: 60px;
    }

    .favorite-tile {
      width: 100% !important;
      height: auto !important;
    }

    .no-favorites {
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

    .no-favorites ha-icon {
      --mdc-icon-size: 32px;
      margin-bottom: 8px;
      opacity: 0.6;
    }

    .no-favorites p {
      margin: 0;
      font-size: 14px;
    }

    /* Header Expand Button Enhanced Styling */
    .header-expand-button {
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

    .header-expand-button:hover {
      background: var(--primary-color);
      color: var(--text-primary-color);
      transform: translateX(-50%) translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .header-expand-button ha-icon {
      --mdc-icon-size: 20px;
      transition: transform 0.3s ease;
    }

    .global-header.expanded .header-expand-button {
      bottom: -20px;
    }

    /* Mobile specific adjustments for expanded header */
    @media (max-width: 768px) {
      .header-expanded-content {
        padding: 12px;
      }

      .favorites-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 8px;
      }

      .header-expand-button {
        width: 36px;
        height: 36px;
        bottom: -18px;
      }

      .header-expand-button ha-icon {
        --mdc-icon-size: 18px;
      }
    }

    /* Home and header status cards */
    .home-status-card,
    .status-card-compact {
      --status-color: var(--primary-color);
      --status-bg: color-mix(in srgb, var(--status-color) 16%, transparent);
    }

    .home-status-card.cover,
    .status-card-compact.cover {
      --status-color: #d98928;
    }

    .home-status-card.binary_sensor,
    .home-status-card.motion,
    .status-card-compact.binary_sensor,
    .status-card-compact.motion {
      --status-color: #6d7891;
    }

    .home-status-card.light,
    .status-card-compact.light {
      --status-color: #e1a129;
    }

    .home-status-card.switch,
    .status-card-compact.switch {
      --status-color: #2f6fd6;
    }

    .home-status-card.climate,
    .home-status-card.house-climate-card,
    .status-card-compact.climate {
      --status-color: #34a6d8;
    }

    .home-status-card.person,
    .status-card-compact.person {
      --status-color: #3f9b6d;
    }

    .home-status-card.media_player,
    .status-card-compact.media_player {
      --status-color: #7c67c7;
    }

    .home-status-card.fan,
    .status-card-compact.fan {
      --status-color: #16a6b6;
    }

    .home-status-card.wattage,
    .home-status-card.house-power-card,
    .home-status-card.energy,
    .status-card-compact.wattage,
    .status-card-compact.energy {
      --status-color: #d88e20;
    }

    .home-status-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 170px));
      justify-content: start;
      gap: 12px;
    }

    .home-status-card {
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

    .home-status-card::before {
      top: auto;
      left: 16px;
      right: 16px;
      bottom: 0;
      height: 3px;
      border-radius: 3px 3px 0 0;
      background: var(--status-color);
      opacity: 0.55;
    }

    .home-status-card:hover {
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--status-color) 40%, transparent);
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
    }

    .home-status-card:hover::before {
      opacity: 0.85;
    }

    .home-status-card .status-card-icon {
      width: 48px;
      height: 48px;
      margin: 0 0 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: var(--status-bg);
    }

    .home-status-card .status-card-icon ha-icon {
      --mdc-icon-size: 25px;
      color: var(--status-color);
      transform: none;
    }

    .home-status-card:hover .status-card-icon ha-icon {
      transform: none;
    }

    .home-status-card .status-card-badge {
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

    .home-status-card .status-card-title {
      margin: auto 0 0;
      color: var(--primary-text-color);
      font-size: 16px;
      font-weight: 800;
      line-height: 1.15;
      text-align: left;
    }

    .home-status-card.has-value .status-card-title {
      margin-top: 2px;
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 800;
    }

    .home-status-card .status-card-value {
      margin: auto 0 0;
      color: var(--primary-text-color);
      font-size: 22px;
      font-weight: 900;
      line-height: 1;
      letter-spacing: 0;
      white-space: nowrap;
    }

    .home-status-card.house-persons-card {
      --status-color: #182044;
      grid-column: span 2;
      min-width: 240px;
      gap: 12px;
    }

    .home-status-card.house-power-card {
      --status-color: #d88e20;
      grid-column: span 2;
      min-width: 270px;
      gap: 12px;
    }

    .home-status-card.house-climate-card {
      --status-color: #34a6d8;
      grid-column: span 2;
      min-width: 270px;
      gap: 12px;
    }

    .house-persons-head {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .home-status-card.house-persons-card .house-persons-icon,
    .home-status-card.house-climate-card .house-climate-icon,
    .home-status-card.house-power-card .house-power-icon {
      width: 42px;
      height: 42px;
      margin: 0;
      flex: 0 0 auto;
      border-radius: 13px;
    }

    .house-persons-copy,
    .house-climate-copy,
    .house-power-copy {
      min-width: 0;
      text-align: left;
    }

    .house-persons-title,
    .house-climate-title,
    .house-power-title {
      color: var(--primary-text-color);
      font-size: 15px;
      font-weight: 850;
      line-height: 1.1;
    }

    .house-persons-subtitle,
    .house-persons-empty,
    .house-climate-subtitle,
    .house-power-subtitle,
    .house-power-empty {
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.25;
    }

    .house-climate-head {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .house-climate-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
    }

    .house-climate-metric {
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

    .house-climate-metric:active {
      transform: scale(0.97);
    }

    .house-climate-metric-icon {
      width: 26px;
      height: 26px;
      border-radius: 9px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--metric-color) 18%, transparent);
      color: var(--metric-color);
    }

    .house-climate-metric-icon ha-icon {
      --mdc-icon-size: 16px;
    }

    .house-climate-metric-copy {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .house-climate-metric-value,
    .house-climate-metric-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.1;
    }

    .house-climate-metric-value {
      font-size: 14px;
      font-weight: 900;
      color: var(--primary-text-color);
    }

    .house-climate-metric-label {
      font-size: 10px;
      font-weight: 750;
      color: var(--secondary-text-color);
    }

    .house-power-head {
      width: 100%;
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      gap: 10px;
    }

    .house-power-total {
      color: var(--primary-text-color);
      font-size: 22px;
      font-weight: 950;
      line-height: 1;
      white-space: nowrap;
    }

    .house-power-list {
      width: 100%;
      display: grid;
      gap: 7px;
    }

    .house-power-room {
      display: grid;
      grid-template-columns: 26px minmax(0, 1fr) auto;
      align-items: center;
      column-gap: 8px;
      row-gap: 4px;
    }

    .house-power-room-icon {
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

    .house-power-room-icon ha-icon {
      --mdc-icon-size: 16px;
    }

    .house-power-room-name,
    .house-power-room-value {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.1;
    }

    .house-power-room-name {
      color: var(--primary-text-color);
      font-size: 11px;
      font-weight: 850;
    }

    .house-power-room-value {
      color: var(--secondary-text-color);
      font-size: 11px;
      font-weight: 800;
    }

    .house-power-bar {
      position: relative;
      height: 5px;
      grid-column: 2 / -1;
      overflow: hidden;
      border-radius: 999px;
      background: color-mix(in srgb, var(--status-color) 10%, var(--secondary-background-color));
    }

    .house-power-bar-fill {
      position: absolute;
      inset: 0 auto 0 0;
      width: var(--power-width, 0%);
      min-width: 4px;
      border-radius: inherit;
      background: linear-gradient(90deg, #d88e20, #f4c34d);
    }

    .house-persons-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 7px;
    }

    .house-person-mini {
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

    .house-person-mini:active {
      transform: scale(0.97);
    }

    .house-person-mini.is-home {
      background: color-mix(in srgb, #2f9b62 13%, var(--card-background-color));
    }

    .house-person-mini.is-away {
      background: color-mix(in srgb, #df5b63 10%, var(--card-background-color));
    }

    .house-person-avatar {
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

    .house-person-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .house-person-avatar ha-icon {
      --mdc-icon-size: 16px;
    }

    .house-person-mini-copy {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .house-person-mini-name,
    .house-person-mini-state {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .house-person-mini-name {
      color: var(--primary-text-color);
      font-size: 11px;
      font-weight: 850;
      line-height: 1.1;
    }

    .house-person-mini-state {
      color: var(--secondary-text-color);
      font-size: 10px;
      font-weight: 700;
      line-height: 1.1;
    }

    .header-status-scroll {
      gap: 8px;
      padding: 2px 2px 4px 12px;
    }

    .status-card-compact {
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

    .status-card-compact:hover {
      transform: translateY(-1px);
      border-color: color-mix(in srgb, var(--status-color) 36%, transparent);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
    }

    .status-card-compact .status-card-icon-compact {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: var(--status-bg);
    }

    .status-card-compact .status-card-icon-compact ha-icon {
      --mdc-icon-size: 20px;
      color: var(--status-color);
    }

    .status-card-compact .status-card-badge-compact {
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

    .status-card-compact .status-card-title-compact {
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

    .status-card-compact.has-value .status-card-title-compact {
      color: var(--primary-text-color);
      font-size: 13px;
      font-weight: 900;
      white-space: nowrap;
      display: block;
    }

    .status-card-subtitle-compact {
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
      .home-status-grid {
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

      .home-camera-section {
        margin: 0 -10px 18px;
      }

      .home-camera-section .home-status-heading {
        display: none;
      }

      .home-summaries-section {
        margin: 0 -10px 18px;
      }

      .home-summaries-section .home-status-heading {
        display: none;
      }

      .home-todos-section {
        margin: 0 -10px 18px;
      }

      .home-todos-section .home-status-heading {
        display: none;
      }

      .home-todos-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
        padding: 2px 18px 16px;
      }

      .home-custom-cards-section {
        min-width: 0;
        margin: 0 -10px 18px;
      }

      .home-custom-cards-section .home-status-heading {
        display: none;
      }

      .home-custom-cards-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
        padding: 2px 18px 16px;
      }

      .home-summary-list {
        width: auto;
        display: flex;
        flex-direction: column;
        padding: 2px 18px 16px;
        gap: 8px;
      }

      .home-summary-card {
        min-height: 64px;
        padding: 11px 12px;
        border-radius: 14px;
      }

      .home-summary-icon {
        width: 36px;
        height: 36px;
      }

      .home-camera-grid {
        display: flex;
        grid-template-columns: none;
        gap: 10px;
        padding: 2px 18px 16px;
        overflow-x: auto;
        scroll-padding: 18px;
        scroll-snap-type: x proximity;
        scrollbar-width: none;
      }

      .home-camera-grid::-webkit-scrollbar {
        display: none;
      }

      .home-camera-section.layout-grid .home-camera-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 2px 18px 16px;
        overflow: visible;
        scroll-snap-type: none;
      }

      .home-camera-card {
        flex: 0 0 226px;
        min-height: 146px;
        border-radius: 18px;
        scroll-snap-align: start;
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.11);
      }

      .home-camera-section.layout-grid .home-camera-card {
        width: 100%;
        flex: none;
        scroll-snap-align: none;
      }

      .home-camera-content {
        min-height: 146px;
        padding: 13px;
      }

      .home-camera-name {
        font-size: 16px;
      }

      .home-status-grid::-webkit-scrollbar {
        display: none;
      }

      .home-status-card {
        flex: 0 0 126px;
        min-height: 114px;
        padding: 14px;
        border-radius: 16px;
        scroll-snap-align: start;
        box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08);
      }

      .home-status-card.house-persons-card {
        flex: 0 0 230px;
        min-height: 132px;
        padding: 14px;
      }

      .home-status-card.house-power-card {
        flex: 0 0 250px;
        min-height: 132px;
        padding: 14px;
      }

      .home-status-card.house-climate-card {
        flex: 0 0 250px;
        min-height: 132px;
        padding: 14px;
      }

      .home-status-card .status-card-title {
        font-size: 15px;
      }

      .status-card-compact {
        min-width: 88px;
      }

      .home-view {
        max-width: none;
      }

      .person-cards-section {
        display: none;
      }

      .home-status-heading {
        display: none;
      }

      .mobile-home-section {
        display: block;
        margin: 0 -10px 18px;
      }

      .mobile-section-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 0 18px;
        margin-bottom: 10px;
      }

      .mobile-section-title {
        min-width: 0;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .mobile-section-title-label {
        color: var(--primary-text-color);
        font-size: 16px;
        font-weight: 850;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .mobile-section-action {
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

      .mobile-section-action ha-icon {
        --mdc-icon-size: 15px;
      }

      .mobile-section-action:active {
        transform: scale(0.96);
        background: color-mix(in srgb, var(--primary-color) 18%, transparent);
      }

      .mobile-area-rail {
        display: flex;
        gap: 10px;
        padding: 2px 18px 16px;
        overflow-x: auto;
        scroll-padding: 18px;
        scroll-snap-type: x proximity;
        scrollbar-width: none;
      }

      .mobile-area-rail::-webkit-scrollbar {
        display: none;
      }

      .mobile-home-section.layout-grid .mobile-area-rail {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        padding: 2px 18px 16px;
        overflow: visible;
        scroll-snap-type: none;
      }

      .mobile-area-card {
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

      .mobile-home-section.layout-grid .mobile-area-card {
        width: 100%;
        flex: none;
        scroll-snap-align: none;
      }

      @media (max-width: 380px) {
        .mobile-home-section.layout-grid .mobile-area-rail {
          grid-template-columns: 1fr;
        }
      }

      .mobile-area-card:active {
        transform: scale(0.98);
      }

      .mobile-area-card.has-picture {
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

      .mobile-area-card.has-picture.text-dark {
        --mobile-area-picture-text-color: #ffffff;
        --mobile-area-picture-muted-text-color: rgba(255, 255, 255, 0.76);
        --mobile-area-picture-text-shadow: 0 2px 10px rgba(0, 0, 0, 0.62);
        --mobile-area-picture-overlay:
          linear-gradient(180deg, rgba(12, 18, 32, 0.03) 0%, rgba(12, 18, 32, 0.18) 42%, rgba(12, 18, 32, 0.82) 100%),
          linear-gradient(90deg, rgba(12, 18, 32, 0.18), rgba(12, 18, 32, 0.04));
      }

      .mobile-area-picture {
        position: absolute;
        inset: 0;
        z-index: 0;
        background-size: cover;
        background-position: center;
        transform: scale(1.02);
      }

      .mobile-area-card.has-picture::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        background: var(--mobile-area-picture-overlay);
      }

      .mobile-area-top,
      .mobile-area-copy {
        position: relative;
        z-index: 2;
      }

      .mobile-area-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
      }

      .mobile-area-icon {
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

      .mobile-area-icon ha-icon {
        --mdc-icon-size: 22px;
      }

      .mobile-area-card.has-picture .mobile-area-icon {
        color: var(--mobile-area-picture-text-color, #ffffff);
        background: rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(12px);
      }

      .mobile-area-badges {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 5px;
        min-width: 0;
      }

      .mobile-area-badge {
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

      .mobile-area-card.has-picture .mobile-area-badge {
        color: var(--area-badge-color, var(--primary-color));
        background: color-mix(in srgb, var(--area-badge-color, var(--primary-color)) 18%, rgba(255, 255, 255, 0.88));
        backdrop-filter: blur(12px);
        box-shadow: 0 4px 12px rgba(15, 23, 42, 0.16);
      }

      .mobile-area-badge ha-icon {
        --mdc-icon-size: 14px;
      }

      .mobile-area-badge.light {
        --area-badge-color: #e1a129;
      }

      .mobile-area-badge.cover {
        --area-badge-color: #d98928;
      }

      .mobile-area-badge.motion {
        --area-badge-color: #6d7891;
      }

      .mobile-area-name {
        font-size: 15px;
        font-weight: 850;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .mobile-area-meta {
        margin-top: 4px;
        color: color-mix(in srgb, var(--primary-text-color) 54%, transparent);
        font-size: 12px;
        font-weight: 700;
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .mobile-area-card.has-picture .mobile-area-meta {
        color: var(--mobile-area-picture-muted-text-color, rgba(255, 255, 255, 0.72));
      }

      .mobile-area-card.has-picture .mobile-area-name,
      .mobile-area-card.has-picture .mobile-area-meta {
        text-shadow: var(--mobile-area-picture-text-shadow);
      }

      .mobile-area-card.has-picture.text-dark .mobile-area-icon {
        color: var(--mobile-area-picture-text-color, #ffffff);
        background: rgba(255, 255, 255, 0.18);
      }

      .mobile-area-card.has-picture.text-dark .mobile-area-name,
      .mobile-area-card.has-picture.text-dark .mobile-area-meta {
        text-shadow: var(--mobile-area-picture-text-shadow);
      }

      .home-status-section {
        margin: 0 -10px 18px;
      }

      .home-status-section .mobile-section-heading {
        margin-bottom: 10px;
      }

      .home-status-section.layout-grid .home-status-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        padding: 2px 18px 16px;
        overflow: visible;
        scroll-snap-type: none;
      }

      .home-status-section.layout-grid .home-status-card {
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        flex: none;
        scroll-snap-align: none;
      }

      .home-status-section.layout-grid .house-persons-card,
      .home-status-section.layout-grid .house-climate-card,
      .home-status-section.layout-grid .house-power-card {
        grid-column: 1 / -1;
      }

      @media (max-width: 380px) {
        .home-status-section.layout-grid .home-status-grid {
          grid-template-columns: 1fr;
        }
      }

      .home-status-card::before {
        left: 14px;
        right: 14px;
      }

      .home-status-card .status-card-icon {
        width: 42px;
        height: 42px;
        border-radius: 13px;
        margin-bottom: 16px;
      }

      .home-status-card .status-card-icon ha-icon {
        --mdc-icon-size: 22px;
      }

      .home-status-card .status-card-badge {
        min-width: 23px;
        height: 23px;
        top: -8px;
        right: -9px;
      }

      :host([data-theme-dark]) {
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

      .home-favorites-section {
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        margin: 0 -10px 44px;
        padding: 0;
        overflow-x: clip;
      }

      .home-favorites-section .favorites-header {
        display: none;
      }

      .home-favorites-section .mobile-section-heading {
        margin-bottom: 10px;
      }

      .home-favorites-section .favorites-grid {
        display: flex;
        grid-template-columns: none;
        gap: 10px;
        padding: 2px 18px 0;
        overflow-x: auto;
        scroll-padding: 18px;
        scroll-snap-type: x proximity;
        scrollbar-width: none;
      }

      .home-favorites-section .favorites-grid::-webkit-scrollbar {
        display: none;
      }

      .home-favorites-section.layout-grid .favorites-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        overflow: visible;
        scroll-snap-type: none;
      }

      .home-favorites-section .favorite-card-wrapper {
        flex: 0 0 186px;
        width: auto;
        min-width: 0;
        box-sizing: border-box;
        min-height: 116px;
        padding: 14px;
        border-radius: 16px;
        scroll-snap-align: start;
      }

      .home-favorites-section.layout-grid .favorite-card-wrapper {
        width: 100%;
        flex: none;
        scroll-snap-align: none;
      }

      @media (max-width: 380px) {
        .home-favorites-section.layout-grid .favorites-grid {
          grid-template-columns: 1fr;
        }
      }
    }

    /* Area status/action pills */
    .area-badges {
      gap: 8px;
      align-items: center;
      margin-bottom: 18px;
    }

    .area-badge {
      min-height: 38px;
      padding: 9px 15px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 800;
      line-height: 1;
      box-shadow: none;
    }

    .area-badge ha-icon {
      --mdc-icon-size: 17px;
    }

    .area-badge.cover {
      background: color-mix(in srgb, var(--area-badge-color, #d98928) 12%, var(--card-background-color));
      border-color: color-mix(in srgb, var(--area-badge-color, #d98928) 22%, transparent);
      color: var(--area-badge-color, #d98928);
    }

    .area-badge.cover ha-icon {
      color: var(--area-badge-color, #d98928);
    }

    .area-badge.light-toggle,
    .area-badge.switch-toggle {
      min-width: 132px;
      justify-content: center;
      cursor: pointer;
      background: #089987;
      border-color: #089987;
      color: #ffffff;
      box-shadow: 0 8px 20px rgba(8, 153, 135, 0.18);
    }

    .area-badge.light-toggle ha-icon {
      color: #ffc400;
    }

    .area-badge.switch-toggle ha-icon {
      color: #1f86d9;
    }

    .area-badge.light-toggle:hover,
    .area-badge.switch-toggle:hover {
      background: #078b7b;
      border-color: #078b7b;
      transform: translateY(-1px);
      box-shadow: 0 10px 24px rgba(8, 153, 135, 0.24);
    }

    .area-badge.light-toggle:active,
    .area-badge.switch-toggle:active {
      transform: translateY(0);
      box-shadow: 0 5px 14px rgba(8, 153, 135, 0.18);
    }

    /* Room header */
    .area-header {
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

    .area-header::before {
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

    .area-header-background {
      position: absolute;
      inset: 0;
      z-index: 0;
      background-size: cover;
      background-position: center;
      filter: saturate(1.05) contrast(1.02);
    }

    .area-header.has-picture {
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

    .area-header.has-picture.text-dark {
      --area-header-picture-text-color: #0f172a;
      --area-header-picture-muted-text-color: rgba(15, 23, 42, 0.72);
      --area-header-picture-control-bg: rgba(255, 255, 255, 0.72);
      --area-header-picture-control-border: rgba(15, 23, 42, 0.08);
      --area-header-picture-overlay:
        linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.48)),
        linear-gradient(rgba(15, 23, 42, 0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
    }

    .area-header.has-picture::before {
      z-index: 1;
      background: var(--area-header-picture-overlay);
      background-size: auto, 56px 56px, 56px 56px;
      opacity: 1;
    }

    .area-header-content {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;
      min-width: 0;
    }

    .area-title-group {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .area-mobile-toolbar {
      position: relative;
      z-index: 3;
      display: grid;
      grid-template-columns: auto minmax(0, max-content) auto;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }

    .area-mobile-round {
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

    .area-mobile-round:hover {
      transform: translateY(-1px);
      box-shadow:
        0 14px 28px rgba(15, 23, 42, 0.16),
        inset 0 0 0 1px rgba(15, 23, 42, 0.08);
    }

    .area-mobile-round ha-icon,
    .area-mobile-round .dd-static-icon {
      --mdc-icon-size: 22px;
      width: 22px;
      height: 22px;
    }

    .area-mobile-home {
      display: none;
      background:
        linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
        rgba(10, 12, 18, 0.86);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .layout-container.sidebar-collapsed .area-mobile-home {
      display: inline-flex;
    }

    .area-mobile-quick-controls {
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

    .area-mobile-quick-controls.empty {
      visibility: hidden;
    }

    .area-quick-control {
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

    .area-quick-control:active {
      transform: scale(0.96);
    }

    .area-quick-main {
      min-width: 0;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .area-quick-control ha-icon {
      --mdc-icon-size: 17px;
      flex: 0 0 auto;
    }

    .area-quick-count {
      color: currentColor;
      font-size: 11px;
      font-weight: 850;
      line-height: 1;
      white-space: nowrap;
    }

    .area-quick-switch {
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

    .area-quick-switch::after {
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

    .area-quick-control.active {
      background: #182044;
      color: #ffffff;
    }

    .area-quick-control.light.active {
      color: #ffd047;
    }

    .area-quick-control.switch.active {
      color: #58a9ff;
    }

    .area-quick-control.cover.active {
      color: #b984ff;
    }

    .area-quick-control.fan.active {
      color: #55bda4;
    }

    .area-quick-control.climate.active {
      color: #51aadd;
    }

    .area-quick-control.active .area-quick-switch {
      background: currentColor;
    }

    .area-quick-control.active .area-quick-switch::after {
      transform: translateX(10px);
    }

    .area-quick-direction {
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

    .area-quick-direction ha-icon {
      --mdc-icon-size: 16px;
    }

    .area-quick-control.has-actions {
      padding-right: 4px;
      cursor: default;
    }

    .area-quick-control.has-actions:active {
      transform: none;
    }

    .area-quick-actions {
      display: inline-flex;
      align-items: center;
      overflow: hidden;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.08);
    }

    .area-quick-action {
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

    .area-quick-action + .area-quick-action {
      border-left: 1px solid color-mix(in srgb, currentColor 18%, transparent);
    }

    .area-quick-action:hover {
      background: color-mix(in srgb, currentColor 10%, transparent);
    }

    .area-quick-action:active {
      transform: scale(0.86);
    }

    .area-quick-action ha-icon {
      --mdc-icon-size: 15px;
    }

    .area-mobile-actions {
      grid-column: 3;
      justify-self: end;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .area-mobile-edit {
      position: relative;
    }

    .area-mobile-edit.active {
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    .area-mobile-actions .unavailable-entities-icon {
      width: 42px;
      height: 42px;
      margin: 0;
      border-radius: 999px;
    }

    .area-desktop-back {
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

    .area-desktop-back:hover {
      transform: translateY(-1px);
      box-shadow:
        0 14px 30px rgba(15, 23, 42, 0.24),
        inset 0 0 0 1px rgba(255, 255, 255, 0.14);
    }

    .area-desktop-back:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 3px;
    }

    .area-desktop-back ha-icon,
    .area-desktop-back .dd-static-icon {
      --mdc-icon-size: 22px;
      width: 22px;
      height: 22px;
    }

    .layout-container.sidebar-collapsed .area-desktop-back {
      display: none;
    }

    .area-title-copy {
      min-width: 0;
    }

    .area-subtitle {
      display: block;
      margin-top: 5px;
      color: color-mix(in srgb, var(--primary-text-color) 55%, transparent);
      font-size: 13px;
      font-weight: 800;
      line-height: 1.2;
      white-space: nowrap;
    }

    .area-header-icon {
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

    .area-header-icon ha-icon {
      --mdc-icon-size: 26px;
    }

    .area-header.has-picture .area-header-icon {
      background: var(--area-header-picture-control-bg);
      color: var(--area-header-picture-text-color, #ffffff);
      box-shadow: inset 0 0 0 1px var(--area-header-picture-control-border);
    }

    .area-title {
      margin: 0;
      color: var(--primary-text-color);
      font-size: clamp(30px, 3.1vw, 44px);
      font-weight: 800;
      letter-spacing: 0;
      line-height: 1;
      overflow-wrap: anywhere;
    }

    .area-header.has-picture .area-subtitle {
      color: var(--area-header-picture-muted-text-color, rgba(255, 255, 255, 0.76));
    }

    .area-header.has-picture .area-title {
      color: var(--area-header-picture-text-color, #ffffff);
    }

    .area-header-actions {
      display: none;
      align-items: center;
      gap: 10px;
      flex: 0 0 auto;
    }

    .area-header .dd-edit-toggle {
      margin-left: 0;
      width: 42px;
      height: 42px;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.06);
      color: var(--primary-text-color);
    }

    .area-header .dd-edit-toggle:hover,
    .area-header .dd-edit-toggle.active {
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    .area-header.has-picture .dd-edit-toggle {
      background: var(--area-header-picture-control-bg);
      color: var(--area-header-picture-text-color, #ffffff);
    }

    .area-header .unavailable-entities-icon {
      margin-bottom: 0;
      width: 42px;
      height: 42px;
      border-radius: 999px;
      background: rgba(255, 152, 0, 0.14);
      color: var(--warning-color);
    }

    .area-header .unavailable-entities-icon ha-icon {
      color: var(--warning-color);
    }

    .area-header.has-picture .unavailable-entities-icon {
      background: var(--area-header-picture-control-bg);
    }

    .area-header.has-picture .unavailable-entities-icon ha-icon {
      color: var(--area-header-picture-text-color, #ffffff);
    }

    .area-header.has-picture .area-mobile-round,
    .area-header.has-picture .area-mobile-quick-controls,
    .area-header.has-picture .area-mobile-actions .unavailable-entities-icon {
      background: var(--area-header-picture-control-bg);
      color: var(--area-header-picture-text-color, #ffffff);
      box-shadow:
        0 12px 28px rgba(0, 0, 0, 0.18),
        inset 0 0 0 1px var(--area-header-picture-control-border);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
    }

    .area-header .area-badges {
      display: none;
    }

    .area-header.has-picture .area-badge:not(.light-toggle):not(.switch-toggle) {
      background: var(--area-header-picture-control-bg);
      border-color: var(--area-header-picture-control-border);
      color: var(--area-header-picture-text-color, #ffffff);
    }

    @media (min-width: 769px) {
      .area-header {
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

      .area-header::before {
        opacity: 0;
      }

      .area-header-content {
        grid-area: title;
        align-self: start;
        margin-top: 2px;
      }

      .area-mobile-toolbar {
        display: contents;
      }

      .area-mobile-home {
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

      .area-mobile-quick-controls {
        grid-area: controls;
        min-height: 42px;
        width: min(520px, 100%);
        max-width: 100%;
        margin-top: 4px;
        margin-left: 0;
        align-self: start;
        justify-self: start;
      }

      .area-mobile-quick-controls.count-1 {
        width: min(420px, 100%);
      }

      .area-mobile-quick-controls.count-1 .area-quick-control {
        flex: 1 1 auto;
        justify-content: space-between;
      }

      .area-mobile-quick-controls.empty {
        min-height: 0;
        margin: 0;
      }

      .area-mobile-actions {
        grid-area: actions;
        position: relative;
        top: auto;
        right: auto;
        z-index: 5;
        align-self: start;
        justify-self: end;
      }

      .area-header-metrics {
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

      .area-header-metric {
        min-width: 132px;
        min-height: 44px;
        padding: 8px 12px;
        gap: 8px;
        border-radius: 999px;
      }

      .area-header-metric .metric-ring {
        width: 30px;
        height: 30px;
      }

      .area-header-metric .metric-ring::after {
        inset: 4px;
      }

      .area-header-metric .metric-ring.metric-icon ha-icon {
        --mdc-icon-size: 17px;
      }

      .area-header-metric .metric-label {
        font-size: 10px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      .area-header-metric .metric-reading {
        margin-top: 2px;
        font-size: 13px;
      }

      .area-title-group {
        gap: 0;
      }

      .area-header-icon {
        display: none;
      }

      .area-title {
        font-size: clamp(24px, 2.4vw, 34px);
        line-height: 1.04;
      }

      .area-subtitle {
        margin-top: 3px;
      }

      .layout-container.sidebar-collapsed .area-mobile-home {
        position: relative;
        top: auto;
        left: auto;
      }

      .layout-container.sidebar-collapsed .area-header-content {
        padding-left: 0;
      }

      .layout-container.sidebar-collapsed .area-mobile-quick-controls {
        margin-left: 0;
      }
    }

    @media (max-width: 768px) {
      :host {
        height: auto;
        max-height: none;
        min-height: 100%;
        overflow: visible;
      }

      .layout-container {
        display: block;
        height: auto;
        max-height: none;
        min-height: 100dvh;
        overflow: visible;
      }

      .main-content {
        display: block;
        min-height: 100dvh;
        overflow: visible;
      }

      .content-area {
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

      .content-area.home-content-area {
        padding-bottom: 0;
      }

      .content-area.area-content-area {
        padding: 0 10px calc(128px + env(safe-area-inset-bottom, 0px));
      }

      .content-area.settings-content-area {
        padding: 0;
      }

      .home-view {
        padding: 10px 10px calc(128px + env(safe-area-inset-bottom, 0px));
      }

      .settings-page-view {
        width: 100%;
        margin: 0;
        padding: 8px 10px calc(152px + env(safe-area-inset-bottom, 0px));
      }

      .settings-page-header {
        grid-template-columns: auto minmax(0, 1fr);
        gap: 12px;
        margin: 0 0 12px;
        padding: 12px 14px;
        border-radius: 18px;
        border-top: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
        box-shadow: 0 10px 28px rgba(15, 23, 42, 0.07);
      }

      .settings-page-back {
        width: 42px;
        height: 42px;
      }

      .settings-page-title h1 {
        font-size: 21px;
      }

      .settings-page-title p {
        margin-top: 3px;
        font-size: 13px;
      }

      .settings-page-actions {
        display: none;
      }

      .settings-page-editor {
        border-radius: 18px;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
      }

      .settings-page-bottom-actions {
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
      .settings-page-bottom-actions .settings-primary {
        width: 100%;
      }

      .global-header.mobile {
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

      .global-header.mobile .header-content {
        display: block;
      }

      .global-header.mobile .header-status-section {
        width: 100%;
      }

      .global-header.mobile .header-status-scroll {
        gap: 10px;
        padding: 2px 2px 4px;
        scroll-padding: 14px;
      }

      .global-header.mobile .status-card-compact {
        min-width: 112px;
        min-height: 82px;
        padding: 10px 12px 11px;
        border-radius: 8px;
        border: 1px solid rgba(15, 23, 42, 0.08);
        background: rgba(255, 255, 255, 0.92);
        box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
      }

      .global-header.mobile .status-card-compact .status-card-icon-compact {
        width: 40px;
        height: 40px;
        border-radius: 8px;
      }

      .global-header.mobile .status-card-compact .status-card-title-compact {
        margin-top: 7px;
        color: color-mix(in srgb, var(--primary-text-color) 76%, transparent);
        font-size: 12px;
        line-height: 1.15;
      }

      .global-header.mobile .header-expand-button {
        bottom: -18px;
        width: 36px;
        height: 36px;
        border-width: 2px;
        background: rgba(255, 255, 255, 0.96);
        box-shadow: 0 8px 20px rgba(3, 169, 244, 0.18);
      }

      .area-header {
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

      .area-header.has-metrics {
        min-height: 248px;
      }

      .area-header.is-stuck {
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

      .area-header::before {
        opacity: 0;
      }

      .area-header::after {
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

      .area-header.is-stuck::after {
        opacity: 1;
      }

      .area-mobile-toolbar {
        position: relative;
        z-index: 3;
        width: 100%;
        display: grid;
        grid-template-columns: 44px minmax(0, 1fr) auto;
        align-items: center;
        gap: 12px;
      }

      .area-mobile-round {
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
      .area-mobile-round .dd-static-icon {
        --mdc-icon-size: 20px;
        width: 20px;
        height: 20px;
      }

      .area-header.is-stuck .area-mobile-round {
        width: 34px;
        height: 34px;
      }

      .area-header.is-stuck .area-mobile-round ha-icon {
        --mdc-icon-size: 18px;
      }

      .area-mobile-home {
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

      .area-header.has-picture .area-mobile-home {
        background:
          linear-gradient(180deg, rgba(34, 38, 48, 0.72), rgba(8, 10, 15, 0.76)),
          rgba(10, 12, 18, 0.72);
        color: #ffffff;
        backdrop-filter: blur(14px);
        box-shadow:
          0 14px 32px rgba(0, 0, 0, 0.34),
          inset 0 1px 0 rgba(255, 255, 255, 0.08);
      }

      .area-mobile-quick-controls {
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

      .area-mobile-quick-controls.empty {
        visibility: hidden;
      }

      .area-header.is-stuck .area-mobile-quick-controls {
        min-height: 36px;
        padding: 3px;
      }

      .area-quick-control {
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

      .area-quick-main {
        min-width: 0;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .area-quick-control ha-icon {
        --mdc-icon-size: 17px;
        flex: 0 0 auto;
      }

      .area-quick-count {
        color: currentColor;
        font-size: 11px;
        font-weight: 850;
        line-height: 1;
        white-space: nowrap;
      }

      .area-quick-switch {
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

      .area-quick-switch::after {
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

      .area-quick-control.active .area-quick-switch {
        background: currentColor;
      }

      .area-quick-control.active .area-quick-switch::after {
        transform: translateX(10px);
      }

      .area-quick-direction {
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

      .area-quick-direction ha-icon {
        --mdc-icon-size: 16px;
      }

      .area-header.is-stuck .area-quick-control {
        min-width: 50px;
        height: 30px;
        padding: 0 5px 0 7px;
        gap: 4px;
      }

      .area-header.is-stuck .area-quick-control ha-icon {
        --mdc-icon-size: 15px;
      }

      .area-header.is-stuck .area-quick-count {
        font-size: 10px;
      }

      .area-header.is-stuck .area-quick-switch {
        width: 22px;
        height: 14px;
      }

      .area-header.is-stuck .area-quick-switch::after {
        top: 3px;
        left: 3px;
        width: 8px;
        height: 8px;
      }

      .area-header.is-stuck .area-quick-control.active .area-quick-switch::after {
        transform: translateX(8px);
      }

      .area-header.is-stuck .area-quick-direction {
        width: 20px;
        height: 20px;
      }

      .area-header.is-stuck .area-quick-direction ha-icon {
        --mdc-icon-size: 14px;
      }

      .area-quick-control:active {
        transform: scale(0.94);
      }

      .area-quick-control.active {
        background: #182044;
        color: #ffffff;
      }

      .area-quick-control.light.active {
        color: #ffd047;
      }

      .area-quick-control.switch.active {
        color: #58a9ff;
      }

      .area-quick-control.cover.active {
        color: #b984ff;
      }

      .area-quick-control.fan.active {
        color: #55bda4;
      }

      .area-quick-control.climate.active {
        color: #51aadd;
      }

      .area-mobile-edit {
        position: relative;
        background:
          linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
          rgba(10, 12, 18, 0.86);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.1);
      }

      .area-mobile-actions {
        grid-column: 3;
        justify-self: end;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .area-mobile-actions .unavailable-entities-icon {
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

      .area-mobile-actions .unavailable-entities-icon ha-icon {
        color: #ffffff;
        --mdc-icon-size: 19px;
      }

      .area-mobile-actions .unavailable-count {
        top: -6px;
        right: -6px;
        background: #ff9800;
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--card-background-color) 92%, transparent);
      }

      .area-mobile-edit.active {
        background: var(--primary-color);
      }

      .area-header-content {
        position: relative;
        z-index: 3;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 12px;
      }

      .area-header.is-stuck .area-header-content {
        gap: 6px;
      }

      .area-header-icon {
        display: none;
      }

      .area-title-group {
        width: 100%;
        justify-content: center;
        gap: 0;
        min-width: 0;
        text-align: center;
      }

      .area-title {
        max-width: min(260px, calc(100vw - 122px));
        margin: 0 auto;
        font-size: 16px;
        font-weight: 850;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .area-header.is-stuck .area-title {
        font-size: 14px;
      }

      .area-subtitle {
        display: block;
        margin-top: 2px;
        color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
        font-size: 13px;
        font-weight: 750;
        line-height: 1.1;
      }

      .area-header.is-stuck .area-subtitle {
        margin-top: 1px;
        font-size: 11px;
      }

      .area-header-metrics {
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

      .area-header-metric {
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

      .area-header-metric .metric-ring {
        width: 46px;
        height: 46px;
        transition:
          width 0.2s ease,
          height 0.2s ease;
      }

      .area-header-metric .metric-ring::after {
        transition: inset 0.2s ease;
      }

      .area-header-metric .metric-value,
      .area-header-metric .metric-label,
      .area-header-metric .metric-range,
      .area-header-metric .metric-reading {
        transition:
          font-size 0.2s ease,
          opacity 0.2s ease;
      }

      .area-header.is-stuck .area-header-metrics {
        gap: 8px;
        margin-top: 0;
      }

      .area-header.is-stuck .area-header-metric {
        min-height: 40px;
        padding: 6px 9px;
        gap: 8px;
        border-radius: 8px;
        box-shadow:
          0 8px 18px rgba(15, 23, 42, 0.05),
          inset 0 0 0 1px color-mix(in srgb, var(--metric-color) 16%, transparent);
      }

      .area-header.is-stuck .area-header-metric .metric-ring {
        width: 30px;
        height: 30px;
      }

      .area-header.is-stuck .area-header-metric .metric-ring::after {
        inset: 4px;
      }

      .area-header.is-stuck .area-header-metric .metric-value {
        font-size: 9px;
      }

      .area-header.is-stuck .area-header-metric .metric-label {
        font-size: 11px;
      }

      .area-header.is-stuck .area-header-metric .metric-reading {
        font-size: 10px;
      }

      .area-header.is-stuck .area-header-metric .metric-range {
        opacity: 0;
        height: 0;
        margin-top: 0;
        overflow: hidden;
      }

      .area-header-actions {
        display: none;
      }

      .area-header .area-badges {
        position: relative;
        z-index: 3;
        width: 100%;
        display: none;
      }

      .area-header .area-badge {
        min-height: 34px;
        flex: 0 0 auto;
        padding: 0 12px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 850;
        box-shadow: none;
      }

      .area-header .area-badge.light-toggle,
      .area-header .area-badge.switch-toggle {
        min-width: 128px;
        justify-content: center;
      }

      .area-header.has-picture {
        background:
          linear-gradient(180deg,
            rgba(23, 35, 33, 0.74) 0%,
            rgba(23, 35, 33, 0.58) 72%,
            rgba(23, 35, 33, 0.22) 100%);
      }

      .area-header.has-picture .area-subtitle {
        color: rgba(255, 255, 255, 0.72);
      }

      .area-content-area .area-header {
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

      .area-content-area .area-header.has-metrics {
        min-height: 312px;
      }

      .area-content-area .area-header.has-picture {
        background: #0f172a;
      }

      .area-content-area .area-header-background {
        inset: 0;
        background-position: center;
        background-size: cover;
        transform: scale(1.015);
        filter: saturate(1.08) contrast(1.02);
      }

      .area-content-area .area-header::before {
        opacity: 1;
        background:
          linear-gradient(180deg,
            rgba(4, 9, 16, 0.2) 0%,
            rgba(4, 9, 16, 0.02) 36%,
            rgba(4, 9, 16, 0.24) 70%,
            rgba(4, 9, 16, 0.64) 100%);
      }

      .area-content-area .area-header::after {
        bottom: -22px;
        height: 46px;
        opacity: 1;
        background:
          linear-gradient(180deg,
            rgba(255, 255, 255, 0.72) 0%,
            color-mix(in srgb, var(--primary-background-color) 86%, transparent) 100%);
        filter: blur(14px);
      }

      .area-content-area .area-mobile-toolbar {
        position: static;
        display: block;
        width: 100%;
        height: 0;
      }

      .area-content-area .area-mobile-home {
        top: calc(18px + env(safe-area-inset-top, 0px));
        left: 18px;
      }

      .area-content-area .area-mobile-actions {
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
      .area-content-area .area-mobile-actions .unavailable-entities-icon {
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
      .area-content-area .area-mobile-actions .unavailable-entities-icon ha-icon {
        --mdc-icon-size: 22px;
        width: 22px;
        height: 22px;
        color: currentColor;
      }

      .area-content-area .area-mobile-camera {
        display: inline-flex;
      }

      .area-content-area .area-mobile-edit {
        background: rgba(255, 255, 255, 0.92);
        color: #14181f;
      }

      .area-content-area .area-mobile-edit.active {
        background: var(--primary-color);
        color: var(--text-primary-color);
      }

      .area-content-area .area-mobile-actions .unavailable-entities-icon {
        background: rgba(244, 67, 54, 0.94);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.34);
      }

      .area-content-area .area-mobile-actions .unavailable-count {
        top: -5px;
        right: -5px;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.92);
      }

      .area-content-area .area-header-content {
        position: absolute;
        top: calc(25px + env(safe-area-inset-top, 0px));
        left: 84px;
        right: 84px;
        width: auto;
        z-index: 4;
        justify-content: center;
        pointer-events: none;
      }

      .area-content-area .area-title-group {
        width: 100%;
      }

      .area-content-area .area-title {
        max-width: 100%;
        color: #ffffff;
        font-size: 17px;
        font-weight: 850;
        line-height: 1.05;
        text-shadow: 0 1px 12px rgba(0, 0, 0, 0.42);
      }

      .area-content-area .area-subtitle {
        color: rgba(255, 255, 255, 0.82);
        text-shadow: 0 1px 10px rgba(0, 0, 0, 0.36);
      }

      .area-content-area .area-mobile-quick-controls {
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

      .area-content-area .area-mobile-quick-controls::-webkit-scrollbar {
        display: none;
      }

      .area-content-area .area-mobile-quick-controls.empty {
        display: none;
      }

      .area-content-area .area-header-metrics {
        position: absolute;
        left: 18px;
        right: 18px;
        bottom: 72px;
        z-index: 4;
        width: auto;
        margin: 0;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .area-content-area .area-header.has-metrics .area-mobile-quick-controls {
        bottom: 18px;
      }

      .area-content-area .area-header.has-metrics:not(.has-quick-controls) .area-header-metrics {
        bottom: 18px;
      }

      .area-content-area .area-header-metric {
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

      .area-content-area .area-header-metric .metric-ring {
        width: 38px;
        height: 38px;
      }

      .area-content-area .area-header-metric .metric-value,
      .area-content-area .area-header-metric .metric-label,
      .area-content-area .area-header-metric .metric-range,
      .area-content-area .area-header-metric .metric-reading {
        color: #182044;
      }

      .area-content-area .area-header.is-stuck {
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

      .area-content-area .area-header.is-stuck .area-header-background {
        opacity: 0;
      }

      .area-content-area .area-header.is-stuck::before {
        background: transparent;
      }

      .area-content-area .area-header.is-stuck .area-mobile-home,
      .area-content-area .area-header.is-stuck .area-mobile-actions {
        top: calc(8px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header.is-stuck .area-mobile-round,
      .area-content-area .area-header.is-stuck .area-mobile-actions .unavailable-entities-icon {
        width: 38px;
        height: 38px;
      }

      .area-content-area .area-header.is-stuck .area-mobile-actions {
        flex-direction: row;
        gap: 8px;
      }

      .area-content-area .area-header.is-stuck .area-header-content {
        top: calc(14px + env(safe-area-inset-top, 0px));
        left: 68px;
        right: 100px;
      }

      .area-content-area .area-header.is-stuck .area-title {
        color: var(--primary-text-color);
        text-shadow: none;
      }

      .area-content-area .area-header.is-stuck .area-subtitle {
        color: var(--secondary-text-color);
        text-shadow: none;
      }

      .area-content-area .area-header.is-stuck .area-mobile-quick-controls,
      .area-content-area .area-header.is-stuck .area-header-metrics {
        display: none;
      }

      .area-content-area .area-header {
        min-height: 214px;
        background:
          radial-gradient(circle at 10% 0%, rgba(255, 255, 255, 0.92), transparent 28%),
          linear-gradient(180deg, #f8fafc 0%, #eef4f8 100%);
        color: var(--primary-text-color);
      }

      .area-content-area .area-header.has-metrics {
        min-height: 214px;
      }

      .area-content-area .area-header.has-picture {
        color: #ffffff;
      }

      .area-content-area .area-header:not(.has-picture)::before {
        background:
          linear-gradient(180deg,
            rgba(255, 255, 255, 0.72) 0%,
            rgba(255, 255, 255, 0.18) 46%,
            rgba(226, 235, 242, 0.78) 100%);
      }

      .area-content-area .area-mobile-home {
        top: calc(16px + env(safe-area-inset-top, 0px));
        left: 18px;
      }

      .area-content-area .area-mobile-actions {
        top: calc(16px + env(safe-area-inset-top, 0px));
        right: 18px;
      }

      .area-content-area .area-mobile-round,
      .area-content-area .area-mobile-actions .unavailable-entities-icon {
        width: 44px;
        height: 44px;
        background: rgba(255, 255, 255, 0.92);
        box-shadow:
          0 12px 26px rgba(8, 13, 24, 0.16),
          inset 0 1px 0 rgba(255, 255, 255, 0.68);
      }

      .area-content-area .area-mobile-home {
        background:
          linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
          rgba(10, 12, 18, 0.86);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.1);
      }

      .area-content-area .area-header-content {
        top: calc(88px + env(safe-area-inset-top, 0px));
        left: 22px;
        right: 24px;
        justify-content: flex-start;
        text-align: left;
      }

      .area-content-area .area-header.has-metrics .area-header-content {
        right: 112px;
      }

      .area-content-area .area-title-group {
        justify-content: flex-start;
        text-align: left;
      }

      .area-content-area .area-title {
        margin: 0;
        max-width: 100%;
        color: var(--primary-text-color);
        font-size: 29px;
        font-weight: 900;
        line-height: 0.98;
        text-align: left;
        text-shadow: none;
      }

      .area-content-area .area-header.has-picture .area-title {
        color: #ffffff;
        text-shadow: 0 1px 16px rgba(0, 0, 0, 0.42);
      }

      .area-content-area .area-subtitle {
        margin-top: 6px;
        color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
        font-size: 13px;
        font-weight: 800;
        text-align: left;
        text-shadow: none;
      }

      .area-content-area .area-header.has-picture .area-subtitle {
        color: rgba(255, 255, 255, 0.78);
        text-shadow: 0 1px 12px rgba(0, 0, 0, 0.36);
      }

      .area-content-area .area-header-metrics {
        top: calc(90px + env(safe-area-inset-top, 0px));
        right: 18px;
        bottom: auto;
        left: auto;
        width: auto;
        grid-template-columns: 1fr;
        gap: 6px;
      }

      .area-content-area .area-header.has-metrics:not(.has-quick-controls) .area-header-metrics {
        bottom: auto;
      }

      .area-content-area .area-header-metric {
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

      .area-content-area .area-header.has-picture .area-header-metric {
        background: rgba(255, 255, 255, 0.66);
        box-shadow:
          0 10px 22px rgba(8, 13, 24, 0.16),
          inset 0 0 0 1px rgba(255, 255, 255, 0.22);
      }

      .area-content-area .area-header-metric .metric-ring {
        width: 22px;
        height: 22px;
        background: color-mix(in srgb, var(--metric-color) 14%, transparent);
        box-shadow: none;
      }

      .area-content-area .area-header-metric .metric-ring::after {
        display: none;
      }

      .area-content-area .area-header-metric .metric-ring ha-icon {
        --mdc-icon-size: 15px;
        color: var(--metric-color);
      }

      .area-content-area .area-header-metric .metric-value {
        font-size: 10px;
      }

      .area-content-area .area-header-metric .metric-label {
        display: none;
      }

      .area-content-area .area-header-metric .metric-reading {
        margin-top: 0;
        color: #101827;
        font-size: 12px;
        font-weight: 950;
        line-height: 1;
      }

      .area-content-area .area-header-metric .metric-range {
        display: none;
      }

      .area-content-area .area-mobile-quick-controls {
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

      .area-content-area .area-header.has-metrics .area-mobile-quick-controls {
        top: calc(154px + env(safe-area-inset-top, 0px));
        bottom: auto;
      }

      .area-content-area .area-header.has-metrics.has-quick-controls {
        min-height: 214px;
      }

      .area-content-area .area-header.is-stuck {
        min-height: 84px;
      }

      .area-content-area .area-header.is-stuck .area-header-content {
        top: calc(13px + env(safe-area-inset-top, 0px));
        left: 68px;
        right: 106px;
      }

      .area-content-area .area-header.is-stuck .area-title {
        font-size: 16px;
      }

      .area-content-area .area-header {
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
      .area-content-area .area-header.has-metrics.has-quick-controls {
        min-height: calc(154px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header.has-picture {
        min-height: calc(178px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header.has-picture.has-metrics,
      .area-content-area .area-header.has-picture.has-quick-controls {
        min-height: calc(186px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header:not(.has-picture)::before {
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--card-background-color) 42%, transparent) 0%,
            transparent 52%,
            color-mix(in srgb, var(--primary-color) 5%, transparent) 100%);
        opacity: 1;
      }

      .area-content-area .area-header::after {
        bottom: -20px;
        height: 40px;
        opacity: 0.88;
        filter: blur(12px);
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--primary-color) 7%, var(--card-background-color)) 0%,
            transparent 82%);
      }

      .area-content-area .area-mobile-home {
        top: calc(14px + env(safe-area-inset-top, 0px));
        left: 18px;
      }

      .area-content-area .area-mobile-actions {
        top: calc(14px + env(safe-area-inset-top, 0px));
        right: 18px;
        flex-direction: row;
        gap: 8px;
      }

      .area-content-area .area-mobile-round,
      .area-content-area .area-mobile-actions .unavailable-entities-icon {
        width: 40px;
        height: 40px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--card-background-color) 92%, transparent);
        color: var(--primary-text-color);
        box-shadow:
          0 10px 24px rgba(15, 23, 42, 0.12),
          inset 0 0 0 1px color-mix(in srgb, var(--divider-color) 62%, transparent);
      }

      .area-content-area .area-mobile-home {
        background:
          linear-gradient(180deg, rgba(34, 38, 48, 0.84), rgba(8, 10, 15, 0.9)),
          rgba(10, 12, 18, 0.86);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.1);
      }

      .area-content-area .area-mobile-round ha-icon,
      .area-content-area .area-mobile-round .dd-static-icon,
      .area-content-area .area-mobile-actions .unavailable-entities-icon ha-icon {
        --mdc-icon-size: 20px;
        width: 20px;
        height: 20px;
      }

      .area-content-area .area-header-content {
        top: calc(58px + env(safe-area-inset-top, 0px));
        left: 20px;
        right: 22px;
        justify-content: flex-start;
      }

      .area-content-area .area-header.has-metrics .area-header-content {
        right: 136px;
      }

      .area-content-area .area-title {
        max-width: 100%;
        font-size: 25px;
        font-weight: 900;
        line-height: 1.02;
        letter-spacing: 0;
      }

      .area-content-area .area-subtitle {
        margin-top: 3px;
        padding-bottom: 5px;
        font-size: 12px;
        font-weight: 800;
        line-height: 1.1;
      }

      .area-content-area .area-header-metrics {
        top: calc(63px + env(safe-area-inset-top, 0px));
        right: 18px;
        left: auto;
        bottom: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .area-content-area .area-header.has-metrics:not(.has-quick-controls) .area-header-metrics {
        bottom: auto;
      }

      .area-content-area .area-header-metric {
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

      .area-content-area .area-header.has-picture .area-header-metric {
        background: rgba(255, 255, 255, 0.76);
      }

      .area-content-area .area-header-metric .metric-ring {
        width: 21px;
        height: 21px;
      }

      .area-content-area .area-header-metric .metric-ring ha-icon {
        --mdc-icon-size: 14px;
      }

      .area-content-area .area-header-metric .metric-copy {
        min-width: 0;
        display: flex;
        align-items: center;
      }

      .area-content-area .area-header-metric .metric-reading {
        max-width: 62px;
        overflow: hidden;
        color: var(--primary-text-color);
        font-size: 12px;
        font-weight: 950;
        text-overflow: ellipsis;
      }

      .area-content-area .area-mobile-quick-controls,
      .area-content-area .area-header.has-metrics .area-mobile-quick-controls {
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

      .area-content-area .area-header:not(.has-metrics) .area-mobile-quick-controls {
        top: auto;
        bottom: 8px;
        right: 20px;
        width: auto;
        max-width: none;
      }

      .area-content-area .area-mobile-quick-controls.count-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .area-content-area .area-mobile-quick-controls.count-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .area-content-area .area-mobile-quick-controls.count-4,
      .area-content-area .area-mobile-quick-controls.count-5 {
        display: flex;
        justify-content: flex-start;
        overflow-x: auto;
      }

      .area-content-area .area-mobile-quick-controls.count-4 > .area-quick-control,
      .area-content-area .area-mobile-quick-controls.count-5 > .area-quick-control {
        flex: 0 0 auto;
        width: auto;
        min-width: 88px;
      }

      .area-content-area .area-mobile-quick-controls.count-1 {
        right: auto;
        width: min(148px, calc(50% - 20px));
        min-width: 122px;
      }

      .area-content-area .area-header.has-metrics .area-mobile-quick-controls.count-1 {
        right: auto;
        width: min(148px, calc(100% - 176px));
      }

      .area-content-area .area-quick-control {
        min-width: 48px;
        width: 100%;
        height: 30px;
        padding: 0 6px 0 8px;
        justify-content: space-between;
      }

      .area-content-area .area-quick-control ha-icon {
        --mdc-icon-size: 16px;
      }

      .area-content-area .area-quick-count {
        font-size: 10px;
      }

      .area-content-area .area-quick-switch {
        width: 24px;
        height: 15px;
      }

      .area-content-area .area-quick-switch::after {
        top: 3px;
        left: 3px;
        width: 9px;
        height: 9px;
      }

      .area-content-area .area-quick-control.active .area-quick-switch::after {
        transform: translateX(9px);
      }

      .area-content-area .area-quick-direction {
        width: 20px;
        height: 20px;
      }

      .area-content-area .area-quick-direction ha-icon {
        --mdc-icon-size: 14px;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-mobile-home {
        background: rgba(10, 16, 38, 0.86);
        color: #ffffff;
        box-shadow:
          0 14px 30px rgba(0, 0, 0, 0.28),
          inset 0 0 0 1px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(18px) saturate(1.25);
        -webkit-backdrop-filter: blur(18px) saturate(1.25);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-mobile-home ha-icon,
      .area-content-area .area-header.has-picture:not(.is-stuck) .area-mobile-home .dd-static-icon {
        color: #ffffff;
        opacity: 1;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-mobile-actions .area-mobile-round {
        background: rgba(255, 255, 255, 0.86);
        color: #0f172a;
        box-shadow:
          0 14px 30px rgba(0, 0, 0, 0.22),
          inset 0 0 0 1px rgba(255, 255, 255, 0.34);
        backdrop-filter: blur(18px) saturate(1.22);
        -webkit-backdrop-filter: blur(18px) saturate(1.22);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-mobile-quick-controls,
      .area-content-area .area-header.has-picture:not(.is-stuck).has-metrics .area-mobile-quick-controls {
        background: rgba(255, 255, 255, 0.9);
        box-shadow:
          0 16px 32px rgba(0, 0, 0, 0.2),
          inset 0 0 0 1px rgba(255, 255, 255, 0.42);
        backdrop-filter: blur(18px) saturate(1.18);
        -webkit-backdrop-filter: blur(18px) saturate(1.18);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control {
        color: rgba(15, 23, 42, 0.66);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.active {
        background: color-mix(in srgb, var(--domain-color, #182044) 16%, rgba(15, 23, 42, 0.06));
        color: var(--domain-color, #182044);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.light {
        --domain-color: #d99a12;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.switch {
        --domain-color: #2f73d6;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.cover {
        --domain-color: #7c4fc7;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.fan {
        --domain-color: #15967f;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.climate {
        --domain-color: #2f9ed6;
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-switch {
        background: rgba(15, 23, 42, 0.16);
      }

      .area-content-area .area-header.has-picture:not(.is-stuck) .area-quick-control.active .area-quick-switch {
        background: var(--domain-color, #182044);
      }

      .area-content-area .area-header {
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
      .area-content-area .area-header.is-stuck.has-picture.has-quick-controls {
        position: sticky;
        top: 0;
        z-index: 90;
        min-height: calc(62px + env(safe-area-inset-top, 0px));
        margin-bottom: 4px;
        padding: calc(8px + env(safe-area-inset-top, 0px)) 14px 7px;
        border-radius: 0;
      }

      .area-content-area .area-header.is-stuck .area-mobile-home,
      .area-content-area .area-header.is-stuck .area-mobile-actions {
        top: calc(9px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header.is-stuck .area-mobile-round,
      .area-content-area .area-header.is-stuck .area-mobile-actions .unavailable-entities-icon {
        width: 36px;
        height: 36px;
      }

      .area-content-area .area-header.is-stuck .area-header-content {
        top: calc(10px + env(safe-area-inset-top, 0px));
        left: 66px;
        right: 66px;
      }

      .area-content-area .area-header.is-stuck .area-title {
        font-size: 15px;
        line-height: 1.05;
      }

      .area-content-area .area-header.is-stuck .area-subtitle {
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
      .area-content-area .area-header.is-stuck .area-badges {
        display: none;
      }

      .area-content-area .area-header.is-stuck.is-revealed {
        overflow: visible;
      }

      .area-content-area .area-header.is-stuck.is-revealed::before {
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

      .area-content-area .area-header.is-stuck.is-revealed .area-header-content {
        top: calc(58px + env(safe-area-inset-top, 0px));
        left: 20px;
        right: 22px;
        justify-content: flex-start;
      }

      .area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-header-content {
        right: 136px;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-title {
        font-size: 25px;
        line-height: 1.02;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-subtitle {
        display: block;
        margin-top: 3px;
        padding-bottom: 5px;
        color: color-mix(in srgb, var(--primary-text-color) 52%, transparent);
        font-size: 12px;
        font-weight: 800;
        line-height: 1.1;
      }

      .area-content-area .area-header.is-stuck.is-revealed.has-picture .area-title,
      .area-content-area .area-header.is-stuck.is-revealed.has-picture .area-subtitle {
        color: var(--primary-text-color);
        text-shadow: none;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-header-metrics {
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
      .area-content-area .area-header.is-stuck.is-revealed.has-quick-controls .area-mobile-quick-controls {
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

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls.count-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls.count-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls.count-1 {
        right: auto;
        width: min(148px, calc(50% - 20px));
        min-width: 122px;
      }

      .area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-mobile-quick-controls.count-1 {
        right: auto;
        width: min(148px, calc(100% - 176px));
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls.empty {
        display: none;
      }

      /*
       * Mobile HA already lays the dashboard out below the iOS/top safe area.
       * Adding env(safe-area-inset-top) inside DD Next a second time creates the
       * large empty strip visible above the home greeting and room controls.
       */
      .home-welcome {
        padding-top: 16px;
      }

      .area-content-area .area-header:not(.is-stuck),
      .area-content-area .area-header:not(.is-stuck).has-metrics,
      .area-content-area .area-header:not(.is-stuck).has-quick-controls,
      .area-content-area .area-header:not(.is-stuck).has-metrics.has-quick-controls {
        min-height: 174px;
      }

      .area-content-area .area-header:not(.is-stuck).has-picture,
      .area-content-area .area-header:not(.is-stuck).has-picture.has-metrics,
      .area-content-area .area-header:not(.is-stuck).has-picture.has-quick-controls {
        min-height: 194px;
      }

      .area-content-area .area-mobile-home,
      .area-content-area .area-mobile-actions {
        top: 14px;
      }

      .area-content-area .area-header-content,
      .area-content-area .area-header.has-metrics .area-header-content {
        top: 58px;
      }

      .area-content-area .area-header-metrics {
        top: 63px;
      }

      /*
       * Quick controls are compact controls, not a full-width second toolbar.
       * Keeping them content-sized prevents the switch thumb from ending up
       * visually detached at the far right edge of the header.
       */
      .area-content-area .area-mobile-quick-controls,
      .area-content-area .area-header.has-metrics .area-mobile-quick-controls,
      .area-content-area .area-header.has-quick-controls .area-mobile-quick-controls {
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

      .area-content-area .area-header.has-metrics .area-mobile-quick-controls {
        max-width: calc(100% - 154px);
      }

      .area-content-area .area-mobile-quick-controls > .area-quick-control,
      .area-content-area .area-mobile-quick-controls.count-1 > .area-quick-control,
      .area-content-area .area-mobile-quick-controls.count-2 > .area-quick-control,
      .area-content-area .area-mobile-quick-controls.count-3 > .area-quick-control,
      .area-content-area .area-mobile-quick-controls.count-4 > .area-quick-control,
      .area-content-area .area-mobile-quick-controls.count-5 > .area-quick-control {
        width: auto;
        min-width: 88px;
        flex: 0 0 auto;
      }

      .area-content-area .area-header.is-stuck,
      .area-content-area .area-header.is-stuck.has-metrics,
      .area-content-area .area-header.is-stuck.has-quick-controls,
      .area-content-area .area-header.is-stuck.has-metrics.has-quick-controls {
        min-height: 62px;
        padding-top: 8px;
      }

      .area-content-area .area-header.is-stuck .area-mobile-home,
      .area-content-area .area-header.is-stuck .area-mobile-actions {
        top: 9px;
      }

      .area-content-area .area-header.is-stuck .area-header-content {
        top: 10px;
      }

      .area-content-area .area-header.is-stuck.is-revealed,
      .area-content-area .area-header.is-stuck.is-revealed.has-metrics,
      .area-content-area .area-header.is-stuck.is-revealed.has-quick-controls,
      .area-content-area .area-header.is-stuck.is-revealed.has-metrics.has-quick-controls {
        min-height: 174px;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-header-content,
      .area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-header-content {
        top: 58px;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-header-metrics {
        top: 63px;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls,
      .area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-mobile-quick-controls,
      .area-content-area .area-header.is-stuck.is-revealed.has-quick-controls .area-mobile-quick-controls {
        top: auto;
        bottom: 10px;
        left: 20px;
        right: auto;
        width: max-content;
        max-width: calc(100% - 40px);
        display: flex;
      }

      .area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-mobile-quick-controls {
        max-width: calc(100% - 154px);
      }

      /* Keep the expanded room header geometrically honest: earlier variants used a
         short physical header plus absolutely-positioned content, which could overlap
         the subtitle and the first controls row on iPhone-sized viewports. */
      .area-content-area .area-header:not(.is-stuck),
      .area-content-area .area-header:not(.is-stuck).has-metrics,
      .area-content-area .area-header:not(.is-stuck).has-quick-controls,
      .area-content-area .area-header:not(.is-stuck).has-metrics.has-quick-controls {
        min-height: calc(174px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header:not(.is-stuck).has-picture,
      .area-content-area .area-header:not(.is-stuck).has-picture.has-metrics,
      .area-content-area .area-header:not(.is-stuck).has-picture.has-quick-controls {
        min-height: calc(194px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header:not(.is-stuck) .area-mobile-quick-controls,
      .area-content-area .area-header:not(.is-stuck).has-metrics .area-mobile-quick-controls,
      .area-content-area .area-header:not(.is-stuck).has-quick-controls .area-mobile-quick-controls {
        top: auto;
        bottom: 10px;
      }

      .area-content-area .area-header.is-stuck.is-revealed,
      .area-content-area .area-header.is-stuck.is-revealed.has-metrics,
      .area-content-area .area-header.is-stuck.is-revealed.has-quick-controls,
      .area-content-area .area-header.is-stuck.is-revealed.has-metrics.has-quick-controls {
        min-height: calc(174px + env(safe-area-inset-top, 0px));
      }

      .area-content-area .area-header.is-stuck.is-revealed::before {
        height: 100%;
      }

      .area-content-area .area-header.is-stuck.is-revealed .area-mobile-quick-controls,
      .area-content-area .area-header.is-stuck.is-revealed.has-metrics .area-mobile-quick-controls,
      .area-content-area .area-header.is-stuck.is-revealed.has-quick-controls .area-mobile-quick-controls {
        top: auto;
        bottom: 10px;
      }

      .area-view .entities-section,
      .area-view .dd-custom-section {
        position: relative;
        z-index: 2;
      }

      .area-view .entities-section {
        display: none;
      }

      .mobile-area-overview {
        display: block;
        position: relative;
        z-index: 2;
        margin: 12px 0 20px;
      }

      .mobile-entities-section {
        display: grid;
        position: relative;
        z-index: 2;
      }

      .layout-container > .sidebar,
      .sidebar {
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
      .sidebar.open {
        transform: translate3d(0, 0, 0) !important;
      }

      .sidebar::before {
        content: "";
        width: 42px;
        height: 4px;
        margin: 0 auto 10px;
        display: block;
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.14);
      }

      .mobile-area-picker-head {
        min-height: 42px;
        margin: 0 2px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .mobile-area-picker-title {
        min-width: 0;
        color: var(--primary-text-color);
        font-size: 20px;
        font-weight: 850;
        line-height: 1.1;
      }

      .mobile-area-picker-close {
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

      .mobile-area-picker-close ha-icon {
        --mdc-icon-size: 21px;
      }

      .sidebar .area-list {
        padding: 0;
      }

      .sidebar .floor-section {
        margin-bottom: 12px;
      }

      .sidebar .floor-header {
        padding: 6px 12px 9px;
      }

      .sidebar .floor-header h3 {
        font-size: 13px;
        font-weight: 850;
        letter-spacing: 0;
        text-transform: none;
      }

      .sidebar .area-button {
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

      .sidebar .area-button.home-button {
        height: 48px;
        min-height: 48px;
        padding: 10px 14px 10px 54px;
        border-radius: 8px;
      }

      .sidebar .area-button.home-button .area-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        width: 34px;
        height: 34px;
        transform: translateY(-50%);
        border-radius: 999px;
      }

      .sidebar .area-button.selected,
      .sidebar .area-button.home-button.selected {
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

      .sidebar .area-content {
        min-height: 42px;
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        grid-template-rows: auto auto;
        align-items: center;
        gap: 3px 10px;
      }

      .sidebar .area-top-section {
        min-width: 0;
        margin-top: 0;
        grid-column: 1;
        grid-row: 1 / span 2;
      }

      .sidebar .area-bottom-section {
        display: contents;
        min-height: 0;
      }

      .sidebar .area-main-icon {
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

      .sidebar .area-main-icon ha-icon {
        --mdc-icon-size: 20px;
      }

      .sidebar .area-button.has-picture {
        min-height: 70px;
        color: var(--area-picture-text-color, #ffffff);
        border-color: rgba(255, 255, 255, 0.18);
        background: #182044;
      }

      .sidebar .area-button.has-picture.selected {
        border-color: color-mix(in srgb, var(--primary-color) 44%, rgba(255, 255, 255, 0.18));
        box-shadow:
          0 14px 30px rgba(15, 23, 42, 0.18),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 34%, transparent);
      }

      .sidebar .area-button.has-picture::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 0;
        background: var(--area-picture-overlay);
        pointer-events: none;
      }

      .sidebar .area-button.has-picture .area-background {
        opacity: 0.78;
        transform: scale(1.02);
      }

      .sidebar .area-button.has-picture .area-content,
      .sidebar .area-button.has-picture .area-info-badges,
      .sidebar .area-button.has-picture .area-main-icon {
        z-index: 1;
      }

      .sidebar .area-info-badges {
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

      .sidebar .area-name {
        max-width: 100%;
        margin: 0;
        font-size: 15px;
        font-weight: 850;
        line-height: 1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sidebar .area-sensors {
        margin-top: 4px;
        color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
        font-size: 12px;
        font-weight: 700;
        line-height: 1.1;
      }

      .sidebar .area-button.has-picture .area-sensors {
        color: var(--area-picture-muted-text-color, rgba(255, 255, 255, 0.72));
      }

      .sidebar .info-badge {
        min-width: 24px;
        height: 22px;
        padding: 0 7px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color));
        box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.04);
      }

      .sidebar .info-badge ha-icon {
        --mdc-icon-size: 13px;
      }

      .sidebar .badge-count {
        font-size: 11px;
        font-weight: 850;
      }

      .sidebar .area-button.has-picture .info-badge {
        background: color-mix(in srgb, var(--badge-color, var(--primary-color)) 18%, rgba(255, 255, 255, 0.88));
        color: var(--badge-color, var(--primary-color));
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 12px rgba(15, 23, 42, 0.16);
      }

      .sidebar .area-button.selected .area-main-icon,
      .sidebar .area-button.selected .area-icon {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
        color: var(--primary-color);
      }

      .sidebar .area-list {
        display: grid;
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 8px;
      }

      .sidebar .floor-section {
        display: grid;
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 8px;
        margin-bottom: 10px;
      }

      .sidebar .floor-areas {
        display: grid;
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 8px;
      }

      .sidebar .floor-header {
        margin: 0;
        padding: 4px 6px 2px;
      }

      .sidebar .floor-header h3 {
        color: var(--secondary-text-color);
        font-size: 14px;
        font-weight: 760;
        line-height: 1.2;
      }

      .sidebar .area-button,
      .sidebar .area-button.home-button {
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

      .sidebar .area-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 12px 24px rgba(15, 23, 42, 0.09);
      }

      .sidebar .area-button.selected,
      .sidebar .area-button.home-button.selected {
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
      .sidebar .area-main-icon {
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

      .sidebar .area-button.home-button .area-icon {
        position: relative;
        left: auto;
        top: auto;
      }

      .sidebar .area-main-icon ha-icon,
      .sidebar .area-icon ha-icon {
        --mdc-icon-size: 24px;
        color: currentColor;
      }

      .sidebar .area-content {
        display: contents;
        width: auto;
        height: auto;
        min-height: 0;
      }

      .sidebar .area-info,
      .sidebar .area-top-section {
        grid-column: 2;
        grid-row: 1;
        min-width: 0;
        margin: 0;
      }

      .sidebar .area-bottom-section {
        display: contents;
      }

      .sidebar .area-name {
        margin: 0;
        color: inherit;
        font-size: 15px;
        font-weight: 750;
        line-height: 1.1;
      }

      .sidebar .area-sensors {
        margin-top: 4px;
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 500;
        line-height: 1.1;
      }

      .sidebar .area-info-badges {
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

      .sidebar .area-menu-chevron {
        display: block;
        grid-column: 4;
        grid-row: 1;
        z-index: 1;
        --mdc-icon-size: 22px;
        color: rgba(15, 23, 42, 0.52);
        transition: transform 0.18s ease, color 0.18s ease;
      }

      .sidebar .home-notification-shortcut {
        grid-column: 3;
        grid-row: 1;
        justify-self: end;
        width: auto;
        min-width: 44px;
        height: 30px;
        margin-left: 0;
      }

      .sidebar .area-button.selected .area-menu-chevron {
        color: var(--primary-color);
        transform: translateX(2px);
      }

      .sidebar .area-button.has-picture {
        min-height: 68px;
        border-color: rgba(15, 23, 42, 0.12);
        background: rgba(18, 24, 38, 0.9);
        color: var(--area-picture-text-color, #ffffff);
      }

      .sidebar .area-button.has-picture.selected {
        border-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.48);
        background: rgba(18, 24, 38, 0.92);
        box-shadow:
          0 14px 28px rgba(15, 23, 42, 0.16),
          inset 3px 0 0 var(--primary-color);
      }

      .sidebar .area-button.has-picture .area-background {
        opacity: 0.78;
        transform: scale(1.02);
      }

      .sidebar .area-button.has-picture .area-top-section,
      .sidebar .area-button.has-picture .area-name,
      .sidebar .area-button.has-picture .area-sensors,
      .sidebar .area-button.has-picture .area-menu-chevron,
      .sidebar .area-button.has-picture .area-info-badges,
      .sidebar .area-button.has-picture .area-main-icon,
      .sidebar .area-button.has-picture .area-icon {
        position: relative;
        z-index: 2;
      }

      .sidebar .area-button.has-picture::after {
        background: var(--area-picture-overlay);
      }

      .sidebar .area-button.has-picture .area-name {
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
      .sidebar .area-button.has-picture .area-icon {
        background: rgba(255, 255, 255, 0.18);
        color: var(--area-picture-text-color, #ffffff);
        backdrop-filter: blur(10px);
      }

      .sidebar .area-button.has-picture .area-sensors,
      .sidebar .area-button.has-picture .area-menu-chevron {
        color: var(--area-picture-muted-text-color, rgba(255, 255, 255, 0.72));
      }

      .sidebar .area-button.has-picture.selected .area-menu-chevron {
        color: var(--area-picture-text-color, #ffffff);
      }

      .sidebar .area-button.has-picture.text-dark .area-main-icon,
      .sidebar .area-button.has-picture.text-dark .area-icon {
        background: rgba(255, 255, 255, 0.18);
        color: var(--area-picture-text-color, #ffffff);
      }

      .sidebar .area-button.has-picture.text-dark .info-badge {
        background: color-mix(in srgb, var(--badge-color, var(--primary-color)) 18%, rgba(255, 255, 255, 0.88));
        color: var(--badge-color, var(--primary-color));
      }

      .mobile-nav-overlay {
        z-index: 120 !important;
        background: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(2px);
      }

      :host([data-theme-dark]) {
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
      .home-content-area {
        max-width: 100% !important;
        overflow-x: hidden !important;
      }

      .home-view .home-favorites-section {
        box-sizing: border-box !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 -10px 44px !important;
        padding: 0 !important;
        overflow-x: hidden !important;
      }

      .home-view .home-favorites-section .favorites-grid {
        box-sizing: border-box !important;
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
      }

      .home-view .home-favorites-section .favorite-card-wrapper {
        max-width: 100% !important;
        min-width: 0 !important;
      }
    }

    /* Settings shell correction */
    .settings-page-view {
      width: min(840px, calc(100% - 32px));
      padding-top: 18px;
    }

    .settings-page-header,
    .settings-page-editor {
      width: 100%;
      box-sizing: border-box;
    }

    .settings-page-header {
      min-height: 76px;
      padding: 12px 16px;
      gap: 14px;
    }

    .settings-page-title {
      min-height: 44px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .settings-page-title h1 {
      font-size: clamp(22px, 1.65vw, 26px);
      line-height: 1.05;
    }

    .settings-page-title p {
      margin: 3px 0 0;
      min-height: 16px;
      font-size: 12px;
      line-height: 1.3;
    }

    .settings-page-actions,
    .settings-page-back {
      align-self: center;
    }

    @media (max-width: 768px) {
      .settings-page-view {
        width: 100%;
      }

      .settings-page-header {
        min-height: 68px;
      }

      .settings-page-title {
        min-height: 42px;
      }
    }

    /* Room navigation: fixed media slot for either a photo or the HA pictogram. */
    .area-media {
      position: relative;
      flex: 0 0 auto;
      overflow: hidden;
      border-radius: 10px;
      background: color-mix(in srgb, var(--primary-color) 9%, var(--secondary-background-color));
    }

    .area-media-picture {
      position: absolute;
      inset: 0;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .area-media-icon {
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

    .area-media-icon ha-icon {
      --mdc-icon-size: 34px;
    }

    @media (min-width: 769px) {
      .sidebar .room-area-button {
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

      .sidebar .room-area-button.has-picture {
        color: var(--primary-text-color);
        background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color));
        border-color: color-mix(in srgb, var(--primary-text-color) 7%, transparent);
      }

      .sidebar .room-area-button.has-picture::after {
        display: none;
      }

      .sidebar .room-area-button.selected,
      .sidebar .room-area-button.has-picture.selected {
        color: var(--primary-text-color);
        border-color: color-mix(in srgb, var(--primary-color) 58%, transparent);
        background: color-mix(in srgb, var(--primary-color) 8%, var(--card-background-color));
        box-shadow:
          0 10px 22px color-mix(in srgb, var(--primary-color) 12%, transparent),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 14%, transparent);
      }

      .sidebar .room-area-button .area-media {
        width: 74px;
        height: 74px;
        align-self: center;
        grid-column: 1;
      }

      .sidebar .room-area-button .area-content {
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

      .sidebar .room-area-button .area-top-section {
        min-width: 0;
        margin: 0;
      }

      .sidebar .room-area-button .area-name,
      .sidebar .room-area-button.has-picture .area-name {
        color: var(--primary-text-color);
        text-shadow: none;
        font-size: 14px;
        font-weight: 850;
      }

      .sidebar .room-area-button .area-sensors,
      .sidebar .room-area-button.has-picture .area-sensors {
        margin-top: 3px;
        color: var(--secondary-text-color);
        text-shadow: none;
        font-size: 11px;
        font-weight: 650;
      }

      .sidebar .room-area-button .area-info-badges {
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
      .sidebar .room-area-button.has-picture .info-badge {
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

      .sidebar .room-area-button .info-badge ha-icon {
        --mdc-icon-size: 12px;
      }

      .sidebar .room-area-button .badge-count {
        font-size: 10px;
      }

      .sidebar .room-area-button .area-menu-chevron,
      .sidebar .room-area-button .area-main-icon {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .sidebar .room-area-button {
        display: grid;
        grid-template-columns: 64px minmax(0, 1fr);
        gap: 10px;
        min-height: 80px;
        padding: 8px;
      }

      .sidebar .room-area-button .area-media {
        width: 64px;
        height: 64px;
      }

      .sidebar .room-area-button .area-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
        gap: 6px;
      }

      .sidebar .room-area-button .area-info-badges {
        position: static;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        gap: 4px;
        max-width: none;
        overflow: hidden;
      }

      .sidebar .room-area-button .info-badge {
        min-width: 26px;
        height: 21px;
        padding: 0 5px;
      }

      .sidebar .room-area-button .area-menu-chevron {
        display: none;
      }
    }

    /* Favorites are a dedicated layer between house information and room content. */
    .area-favorites-toggle {
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

    .area-favorites-toggle-main {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
      font-size: 14px;
      font-weight: 850;
    }

    .area-favorites-toggle-main > ha-icon {
      --mdc-icon-size: 18px;
      color: var(--primary-color);
    }

    .area-favorites-count {
      color: var(--secondary-text-color);
      font-weight: 700;
    }

    .global-header .header-expanded-content {
      padding-top: 0;
    }

    .global-header .header-favorites .favorites-header {
      display: none;
    }

    /* Keep status text and the toggle in one visual cluster. */
    .mobile-entity-status-row {
      margin-top: 5px;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .mobile-entity-status-row .mobile-entity-status {
      margin-top: 0;
      min-width: 0;
      flex: 1 1 auto;
    }

    .mobile-entity-status-row .mobile-entity-toggle {
      flex: 0 0 auto;
    }

    .mobile-domain-master {
      min-width: 76px;
    }

    .mobile-domain-master-count {
      min-width: 25px;
      color: currentColor;
      font-size: 11px;
      font-weight: 850;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
    }

    /* Window/door/opening state is expressed by its icon/status badge, not a tinted whole card. */
    .mobile-entity-card.mobile-entity-binary_sensor.device-window.is-active,
    .mobile-entity-card.mobile-entity-binary_sensor.device-door.is-active,
    .mobile-entity-card.mobile-entity-binary_sensor.device-opening.is-active {
      background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color));
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
    }

    .mobile-entity-card.mobile-entity-binary_sensor.device-window .mobile-entity-status,
    .mobile-entity-card.mobile-entity-binary_sensor.device-door .mobile-entity-status,
    .mobile-entity-card.mobile-entity-binary_sensor.device-opening .mobile-entity-status {
      width: fit-content;
      max-width: 100%;
      padding: 3px 8px;
      border-radius: 999px;
      color: var(--secondary-text-color);
      background: color-mix(in srgb, var(--primary-text-color) 7%, var(--card-background-color));
    }

    .mobile-entity-card.mobile-entity-binary_sensor.device-window.is-active .mobile-entity-status,
    .mobile-entity-card.mobile-entity-binary_sensor.device-door.is-active .mobile-entity-status,
    .mobile-entity-card.mobile-entity-binary_sensor.device-opening.is-active .mobile-entity-status {
      color: var(--entity-color);
      background: color-mix(in srgb, var(--entity-color) 11%, var(--card-background-color));
    }


    /* Final desktop room redesign: compact sidebar cards + compact room header. */
    @media (min-width: 769px) {
      .sidebar .room-area-button {
        grid-template-columns: 58px minmax(0, 1fr);
        gap: 8px;
        min-height: 76px;
        height: 76px;
        padding: 8px;
        margin-bottom: 7px;
        border-radius: 11px;
        box-shadow: 0 5px 14px color-mix(in srgb, var(--primary-text-color) 4%, transparent);
      }

      .sidebar .room-area-button .area-media {
        width: 58px;
        height: 58px;
        border-radius: 9px;
      }

      .sidebar .room-area-button .area-media-icon {
        color: color-mix(in srgb, var(--primary-color) 84%, var(--primary-text-color));
        background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color));
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 8%, transparent);
      }

      .sidebar .room-area-button .area-media-icon ha-icon {
        --mdc-icon-size: 27px;
      }

      .sidebar .room-area-button .area-content {
        gap: 4px;
        justify-content: center;
      }

      .sidebar .room-area-button .area-name,
      .sidebar .room-area-button.has-picture .area-name {
        font-size: 13px;
        font-weight: 850;
        line-height: 1.15;
      }

      .sidebar .room-area-button .area-sensors,
      .sidebar .room-area-button.has-picture .area-sensors {
        margin-top: 2px;
        font-size: 10px;
        line-height: 1.15;
      }

      .sidebar .room-area-button .area-info-badges {
        gap: 3px;
        min-height: 19px;
      }

      .sidebar .room-area-button .info-badge,
      .sidebar .room-area-button.has-picture .info-badge {
        min-width: 24px;
        height: 19px;
        padding: 0 4px;
        border-radius: 999px;
      }

      .sidebar .room-area-button .info-badge ha-icon {
        --mdc-icon-size: 11px;
      }

      .sidebar .room-area-button .badge-count {
        font-size: 9px;
      }

      .sidebar .room-area-button.selected,
      .sidebar .room-area-button.has-picture.selected {
        border-color: color-mix(in srgb, var(--primary-color) 54%, transparent);
        background: color-mix(in srgb, var(--primary-color) 8%, var(--card-background-color));
        box-shadow:
          0 7px 18px color-mix(in srgb, var(--primary-color) 10%, transparent),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 10%, transparent);
      }

      .area-header.area-header-desktop-compact {
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

      .area-header.area-header-desktop-compact::before {
        display: none;
      }

      .area-desktop-room-media {
        position: relative;
        width: 68px;
        height: 68px;
        overflow: hidden;
        border-radius: 10px;
        background: color-mix(in srgb, var(--primary-color) 8%, var(--secondary-background-color));
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 8%, transparent);
      }

      .area-desktop-room-picture {
        position: absolute;
        inset: 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .area-desktop-room-icon {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: color-mix(in srgb, var(--primary-color) 86%, var(--primary-text-color));
        background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color));
      }

      .area-desktop-room-icon ha-icon {
        --mdc-icon-size: 31px;
      }

      .area-desktop-room-copy {
        min-width: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6px;
      }

      .area-header-desktop-compact .area-title {
        margin: 0;
        font-size: clamp(26px, 2.15vw, 36px);
        line-height: 1;
        color: var(--primary-text-color);
      }

      .area-desktop-room-meta {
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 750;
        line-height: 1.2;
        white-space: nowrap;
      }

      .area-header-desktop-compact .area-header-metrics {
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

      .area-header-desktop-compact .area-header-metric {
        min-width: 132px;
        min-height: 44px;
        padding: 7px 11px;
        gap: 8px;
        border-radius: 999px;
      }

      .area-header-desktop-compact .area-header-metric .metric-ring {
        width: 30px;
        height: 30px;
      }

      .area-header-desktop-compact .area-header-metric .metric-label {
        font-size: 9px;
      }

      .area-header-desktop-compact .area-header-metric .metric-reading {
        font-size: 13px;
      }

      .area-header-desktop-compact .area-header-actions {
        position: static;
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        min-width: max-content;
      }

      .area-header-desktop-compact .area-header-actions .unavailable-entities-icon,
      .area-header-desktop-compact .area-header-actions .area-mobile-camera,
      .area-header-desktop-compact .area-header-actions .dd-edit-toggle {
        width: 42px;
        height: 42px;
        margin: 0;
        border-radius: 999px;
      }

      .area-header-desktop-compact .area-mobile-toolbar,
      .area-header-desktop-compact .area-mobile-home,
      .area-header-desktop-compact .area-mobile-quick-controls,
      .area-header-desktop-compact .area-badges,
      .area-header-desktop-compact .area-header-content {
        display: none;
      }
    }

    @media (min-width: 769px) and (max-width: 1120px) {
      .area-header.area-header-desktop-compact {
        grid-template-columns: 58px minmax(150px, 1fr) auto;
        gap: 12px;
      }

      .area-desktop-room-media {
        width: 58px;
        height: 58px;
      }

      .area-header-desktop-compact .area-header-metrics {
        grid-column: 2;
        justify-content: flex-start;
        margin-top: 4px;
      }

      .area-header-desktop-compact .area-header-actions {
        grid-column: 3;
        grid-row: 1 / span 2;
      }
    }


    /* Responsive room UI v3 — desktop reference is the base;
       mobile only changes flow, scale and navigation. */

    .global-header {
      padding: 8px 16px 6px;
      border-bottom: 0;
      background: var(--primary-background-color);
    }

    .global-header .header-content {
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

    .header-status-section {
      min-width: 0;
      flex: 1 1 auto;
    }

    .header-status-scroll {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .header-status-scroll::-webkit-scrollbar { display: none; }

    .status-card-compact {
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

    .status-card-compact .status-card-icon-compact {
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

    .status-card-compact .status-card-icon-compact ha-icon { --mdc-icon-size: 19px; }

    .status-card-badge-compact {
      top: -7px;
      right: -11px;
      min-width: 18px;
      height: 20px;
      padding: 0 4px;
      box-sizing: border-box;
      font-size: 10px;
      line-height: 1;
    }

    .status-card-compact .status-card-title-compact {
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

    .status-card-compact:not(.has-value) {
      grid-template-rows: 1fr;
    }

    .status-card-compact:not(.has-value) .status-card-title-compact {
      grid-row: 1;
      align-self: center;
      display: flex;
      align-items: center;
      min-height: 34px;
      margin: 0;
    }

    .status-card-compact .status-card-subtitle-compact {
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

    .header-time-weather {
      min-width: 116px;
      flex: 0 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      gap: 4px;
    }

    .header-time { font-size: 21px; line-height: 1; }
    .header-date { font-size: 12px; line-height: 1.1; }
    .weather-compact { padding: 3px 9px; }

    .area-content-area {
      padding: 8px 16px 16px;
    }

    .room-ui-v2 {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .room-ui-v2 .room-header {
      position: relative;
      width: 100%;
      min-height: 210px;
      margin: 0;
      padding: 14px 16px;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 220px minmax(250px, 1fr) minmax(250px, 320px) minmax(220px, 250px) 42px;
      grid-template-areas: "media copy camera metrics actions";
      align-items: center;
      gap: 18px;
      overflow: hidden;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 7%, transparent);
      border-radius: 10px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      box-shadow: 0 5px 18px rgba(15, 23, 42, 0.05);
    }

    .room-ui-v2 .room-header.no-camera {
      grid-template-columns: 220px minmax(280px, 1fr) minmax(220px, 250px) 42px;
      grid-template-areas: "media copy metrics actions";
    }

    .room-header-media {
      grid-area: media;
      position: relative;
      width: 220px;
      height: 176px;
      align-self: center;
      overflow: hidden;
      border-radius: 12px;
      background: color-mix(in srgb, var(--primary-color) 8%, var(--card-background-color));
    }

    .room-header-picture {
      position: absolute;
      inset: 0;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .room-header-icon {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: color-mix(in srgb, var(--primary-color) 86%, var(--primary-text-color));
      background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color));
    }

    .room-header-icon ha-icon { --mdc-icon-size: 52px; }

    .room-header-copy {
      grid-area: copy;
      min-width: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
    }

    .room-ui-v2 .room-header .area-title {
      margin: 0;
      font-size: clamp(27px, 2.15vw, 36px);
      line-height: 1.02;
      font-weight: 850;
    }

    .room-header-breadcrumb {
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

    .room-header-home-link {
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

    .room-header-home-link:hover {
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 8%, transparent);
    }

    .room-header-home-link ha-icon { --mdc-icon-size: 14px; }
    .room-header-breadcrumb-chevron { --mdc-icon-size: 12px; opacity: 0.7; }

    .room-header-device-count {
      color: var(--secondary-text-color);
      font-size: 13px;
      font-weight: 750;
    }

    .room-header-summary {
      margin-top: 6px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 7px;
      overflow: visible;
    }

    .room-header-summary::-webkit-scrollbar {
      display: none;
    }

    .room-summary-item {
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

    button.room-summary-item {
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

    button.room-summary-item:hover {
      transform: translateY(-1px);
      filter: brightness(1.03);
      box-shadow:
        inset 0 0 0 1px color-mix(in srgb, var(--room-summary-color) 18%, transparent),
        0 8px 16px rgba(15, 23, 42, 0.06);
    }

    button.room-summary-item:active {
      transform: translateY(0) scale(0.97);
    }

    .room-summary-item ha-icon { --mdc-icon-size: 17px; }
    .room-summary-item.temperature ha-icon { color: #7567d8; }
    .room-summary-item.humidity ha-icon { color: #35a9dc; }
    .room-summary-item.power ha-icon { color: #d99600; }

    .room-summary-item.status {
      border-radius: 999px;
      color: var(--room-summary-color);
      background: color-mix(in srgb, var(--room-summary-color) 10%, var(--card-background-color));
    }

    .room-header-camera-preview {
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

    .room-header-camera-preview:hover {
      transform: translateY(-1px);
      box-shadow:
        inset 0 0 0 1px rgba(15, 23, 42, 0.08),
        0 10px 22px rgba(15, 23, 42, 0.1);
    }

    .room-header-camera-image,
    .room-header-camera-stream {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .room-header-camera-image {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .room-header-camera-placeholder {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
    }

    .room-header-camera-placeholder ha-icon {
      --mdc-icon-size: 38px;
    }

    .room-header-camera-live {
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

    .room-header-camera-live-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #20c77a;
      box-shadow: 0 0 0 3px rgba(32, 199, 122, 0.14);
    }

    .room-ui-v2 .room-header .area-header-metrics {
      grid-area: metrics !important;
      grid-column: auto !important;
      grid-row: auto !important;
      position: static !important;
      inset: auto !important;
      width: 100%;
      min-width: 0;
      max-width: none;
      margin: 0 !important;
      padding: 0 !important;
      display: flex !important;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      gap: 8px;
      transform: none !important;
    }

    .room-ui-v2 .room-header .area-header-metric {
      width: 100%;
      min-width: 0;
      min-height: 52px;
      padding: 6px 12px;
      box-sizing: border-box;
      gap: 9px;
      border: 0;
      border-radius: 999px;
      font: inherit;
      text-align: left;
      cursor: pointer;
      transition: transform 0.16s ease, box-shadow 0.16s ease, filter 0.16s ease;
    }

    .room-ui-v2 .room-header .area-header-metric:hover {
      transform: translateX(2px);
      filter: brightness(1.025);
      box-shadow: 0 7px 16px rgba(15, 23, 42, 0.055);
    }

    .room-ui-v2 .room-header .area-header-metric:active {
      transform: translateX(1px) scale(0.985);
    }

    .room-ui-v2 .room-header .area-header-metric .metric-ring {
      width: 34px;
      height: 34px;
    }

    .room-ui-v2 .room-header .area-header-metric .metric-copy {
      min-width: 0;
      flex: 1;
    }

    .room-ui-v2 .room-header .area-header-metric .metric-label { font-size: 9px; }
    .room-ui-v2 .room-header .area-header-metric .metric-reading { font-size: 15px; }

    .room-ui-v2 .room-header .area-header-metric .metric-chevron {
      --mdc-icon-size: 18px;
      flex: 0 0 auto;
      opacity: 0.55;
    }

    .room-header-actions {
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
    .room-header-actions .dd-edit-toggle {
      width: 38px;
      height: 38px;
      margin: 0;
      border-radius: 999px;
      flex: 0 0 auto;
    }

    .room-header-back { display: none; }

    .room-favorites-block {
      width: 100%;
      margin: 0;
      overflow: visible;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 7%, transparent);
      border-radius: 8px;
      background: var(--card-background-color);
      box-shadow: 0 3px 10px rgba(15, 23, 42, 0.04);
    }

    .room-favorites-header {
      margin-bottom: 0 !important;
    }

    .room-favorites-block:not(.is-collapsed) .room-favorites-header {
      margin-bottom: 6px !important;
    }

    .room-favorites-icon {
      color: var(--primary-color);
    }

    .room-favorites-content {
      margin: 0;
    }

    .room-favorites-content .favorites-header {
      display: none;
    }

    .room-favorites-content .favorites-section {
      margin: 0;
    }

    .sidebar .room-area-button {
      min-height: 84px !important;
      height: 84px !important;
      padding: 6px !important;
      grid-template-columns: 72px minmax(0, 1fr) !important;
      align-items: center;
      gap: 8px !important;
      margin-bottom: 6px;
      border-radius: 10px;
    }

    .sidebar .room-area-button .area-media {
      width: 72px !important;
      height: 70px !important;
      align-self: center;
      border-radius: 8px;
    }

    .sidebar .room-area-button .area-media-icon ha-icon { --mdc-icon-size: 30px; }

    .sidebar .room-area-button .area-content {
      min-width: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px !important;
    }

    .sidebar .room-area-button .area-name,
    .sidebar .room-area-button.has-picture .area-name {
      font-size: 13px;
      line-height: 1.1;
      font-weight: 850;
    }

    .sidebar .room-area-button .area-sensors,
    .sidebar .room-area-button.has-picture .area-sensors {
      margin-top: 1px;
      font-size: 10px;
      line-height: 1.1;
    }

    .sidebar .room-area-button .area-info-badges {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      gap: 3px;
      overflow: hidden;
    }

    .sidebar .room-area-button .info-badge,
    .sidebar .room-area-button.has-picture .info-badge {
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

    .sidebar .room-area-button .info-badge ha-icon {
      width: 11px;
      height: 11px;
      flex: 0 0 11px;
      display: block;
      --mdc-icon-size: 11px;
      line-height: 0;
    }

    .sidebar .room-area-button .badge-count {
      height: 11px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      line-height: 11px;
    }

    .room-ui-v2 .mobile-entities-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 0;
    }

    .room-ui-v2 .mobile-domain-group {
      min-width: 0;
      margin: 0;
      padding: 0;
      overflow: hidden;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 7%, transparent);
      border-radius: 8px;
      background: var(--card-background-color);
      box-shadow: 0 3px 10px rgba(15, 23, 42, 0.04);
      contain: layout style;
    }

    .room-ui-v2 .mobile-domain-header {
      width: 100%;
      min-height: 38px;
      margin: 0;
      padding: 7px 9px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      border-radius: 7px 7px 0 0;
    }

    .room-ui-v2 .mobile-domain-group.is-collapsed .mobile-domain-header {
      margin-bottom: 0;
      border-radius: 7px;
    }

    .room-ui-v2 .mobile-domain-title {
      appearance: none;
      min-width: 0;
      padding: 0;
      border: 0;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }

    .room-domain-icon {
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

    .room-domain-icon ha-icon { --mdc-icon-size: 18px; }

    .room-ui-v2 .mobile-domain-title-copy {
      min-width: 0;
      display: inline-flex;
      align-items: baseline;
      gap: 5px;
    }

    .room-ui-v2 .mobile-domain-title-label {
      font-size: 15px;
      font-weight: 850;
    }

    .room-ui-v2 .mobile-domain-count {
      color: var(--secondary-text-color);
      font-size: 10px;
      font-weight: 650;
    }

    .mobile-domain-title-chevron {
      margin-left: 1px;
      color: var(--secondary-text-color);
      --mdc-icon-size: 16px;
    }

    .room-ui-v2 .mobile-domain-header-actions {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      margin-right: 2px;
    }

    .room-ui-v2 .mobile-domain-master {
      min-width: 76px;
      height: 28px;
    }

    .room-ui-v2 .mobile-domain-collapse-button { display: none !important; }

    .room-ui-v2 .mobile-entity-rail,
    .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      align-items: stretch;
      gap: 8px;
      margin: 0;
      padding: 0 9px 9px;
      overflow: visible;
      scroll-padding: 0;
      scroll-snap-type: none;
    }

    .room-ui-v2 .mobile-entity-card,
    .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-card {
      width: 100% !important;
      min-width: 0 !important;
      min-height: 62px !important;
      height: auto !important;
      margin: 0 !important;
      padding: 8px 10px !important;
      box-sizing: border-box;
      display: flex !important;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 6%, transparent);
      border-radius: 8px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      box-shadow: 0 3px 9px rgba(15, 23, 42, 0.035);
      cursor: pointer;
      scroll-snap-align: none;
    }

    .room-ui-v2 .mobile-entity-card:hover {
      transform: translateY(-1px);
      border-color: color-mix(in srgb, var(--primary-color) 14%, transparent);
      box-shadow: 0 6px 14px rgba(15, 23, 42, 0.055);
    }

    .room-ui-v2 .mobile-entity-main {
      width: 100%;
      min-width: 0;
      display: grid;
      grid-template-columns: 36px minmax(0, 1fr) auto;
      align-items: center;
      gap: 9px;
    }

    .room-ui-v2 .mobile-entity-main.editing-inline {
      grid-template-columns: 24px 36px minmax(0, 1fr) 34px;
      gap: 7px;
    }

    .dd-generated-card-leading-drag-handle,
    .dd-generated-card-visibility {
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

    .dd-generated-card-leading-drag-handle {
      width: 24px;
      cursor: grab;
      color: var(--primary-color);
    }

    .dd-generated-card-leading-drag-handle:active { cursor: grabbing; }

    .dd-generated-card-leading-drag-handle ha-icon,
    .dd-generated-card-visibility ha-icon {
      --mdc-icon-size: 19px;
    }

    .dd-generated-card-visibility {
      color: var(--primary-text-color);
      background: color-mix(in srgb, var(--primary-text-color) 5%, transparent);
    }

    .dd-generated-card-visibility:hover,
    .dd-generated-card-leading-drag-handle:hover {
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }

    .room-ui-v2 .mobile-entity-icon {
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }

    .room-ui-v2 .mobile-entity-icon ha-icon { --mdc-icon-size: 20px; }

    .room-ui-v2 .mobile-entity-content {
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2px;
    }

    .room-ui-v2 .mobile-entity-name {
      overflow: hidden;
      font-size: 12px;
      font-weight: 850;
      line-height: 1.15;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .room-ui-v2 .mobile-entity-state {
      overflow: hidden;
      color: var(--secondary-text-color);
      font-size: 10px;
      font-weight: 650;
      line-height: 1.1;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .room-ui-v2 .mobile-entity-state.active {
      color: var(--entity-color);
    }

    .room-ui-v2 .mobile-entity-right {
      min-width: 0;
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 5px;
    }

    .room-ui-v2 .mobile-entity-status-pill { display: none !important; }

    .room-ui-v2 .mobile-entity-brightness {
      width: calc(100% - 45px);
      margin: 6px 0 0 45px;
    }

    .room-ui-v2 .mobile-entity-brightness input[type="range"] {
      appearance: none;
      width: 100%;
      height: 4px;
      margin: 0;
      border-radius: 999px;
      outline: none;
      background: linear-gradient(
        90deg,
        var(--entity-color) 0%,
        var(--entity-color) var(--brightness),
        color-mix(in srgb, var(--primary-text-color) 13%, transparent) var(--brightness),
        color-mix(in srgb, var(--primary-text-color) 13%, transparent) 100%
      );
    }

    .room-ui-v2 .mobile-entity-brightness input[type="range"]::-webkit-slider-thumb {
      appearance: none;
      width: 14px;
      height: 14px;
      border: 2px solid var(--entity-color);
      border-radius: 50%;
      background: var(--card-background-color);
    }

    .room-ui-v2 .mobile-entity-brightness input[type="range"]::-moz-range-thumb {
      width: 12px;
      height: 12px;
      border: 2px solid var(--entity-color);
      border-radius: 50%;
      background: var(--card-background-color);
    }

    .room-ui-v2 .mobile-entity-more { display: none !important; }

    @media (max-width: 1180px) and (min-width: 769px) {
      .room-ui-v2 .room-header {
        min-height: 188px;
        padding: 12px;
        grid-template-columns: 170px minmax(180px, 1fr) minmax(180px, 230px) minmax(184px, 210px) 38px;
        grid-template-areas: "media copy camera metrics actions";
        gap: 12px;
      }

      .room-ui-v2 .room-header.no-camera {
        grid-template-columns: 170px minmax(220px, 1fr) minmax(184px, 210px) 38px;
        grid-template-areas: "media copy metrics actions";
      }

      .room-header-media {
        width: 170px;
        height: 148px;
      }

      .room-header-camera-preview {
        height: 148px;
      }

      .room-ui-v2 .room-header .area-header-metric {
        min-width: 0;
        min-height: 44px;
        padding: 5px 9px;
      }

      .room-ui-v2 .mobile-entity-rail,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (max-width: 768px) {
      .global-header { padding: 8px 10px 6px; }

      .area-content-area { padding: 8px 10px 88px; }

      .room-ui-v2 { gap: 7px; }

      .room-ui-v2 .room-header,
      .room-ui-v2 .room-header.no-camera {
        min-height: 0;
        padding: 10px;
        grid-template-columns: 42px 64px minmax(0, 1fr) 36px;
        grid-template-rows: auto auto auto;
        grid-template-areas:
          "back media copy actions"
          "camera camera camera camera"
          "metrics metrics metrics metrics";
        column-gap: 9px;
        row-gap: 10px;
        align-items: center;
        border-radius: 10px;
      }

      .room-ui-v2 .room-header.no-camera {
        grid-template-rows: auto auto;
        grid-template-areas:
          "back media copy actions"
          "metrics metrics metrics metrics";
      }

      .room-header-back {
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

      .room-header-media {
        width: 64px;
        height: 64px;
        border-radius: 9px;
      }

      .room-header-icon ha-icon { --mdc-icon-size: 30px; }
      .room-header-breadcrumb { display: none; }
      .room-ui-v2 .room-header .area-title { font-size: 20px; }
      .room-header-device-count { font-size: 10px; }

      .room-header-summary {
        gap: 5px;
        flex-wrap: wrap;
      }

      .room-summary-item { font-size: 10px; }

      .room-header-camera-preview {
        width: 100%;
        height: 148px;
        border-radius: 10px;
      }

      .room-ui-v2 .room-header .area-header-metrics {
        grid-area: metrics !important;
        grid-column: auto !important;
        grid-row: auto !important;
        width: 100%;
        display: flex !important;
        flex-direction: column;
        align-items: stretch;
        gap: 7px;
      }

      .room-ui-v2 .room-header .area-header-metric {
        width: 100%;
        min-width: 0;
        min-height: 38px;
        padding: 4px 9px;
        justify-content: flex-start;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-ring {
        width: 23px;
        height: 23px;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-label { display: none; }
      .room-ui-v2 .room-header .area-header-metric .metric-reading { font-size: 11px; }

      .room-header-actions {
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
      .room-header-actions .dd-edit-toggle {
        width: 34px;
        height: 34px;
      }

      .room-favorites-toggle {
        min-height: 36px;
      }

      .room-ui-v2 .mobile-domain-group {
        padding: 0;
        border-radius: 9px;
      }

      .room-ui-v2 .mobile-domain-header {
        min-height: 36px;
        margin: 0;
        padding: 6px 7px;
      }

      .room-ui-v2 .mobile-entity-rail,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
        grid-template-columns: 1fr;
        gap: 6px;
        padding: 0 7px 7px;
      }

      .room-ui-v2 .mobile-entity-card,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-card {
        min-height: 58px !important;
        padding: 7px 9px !important;
      }

      .room-ui-v2 .mobile-entity-main {
        grid-template-columns: 34px minmax(0, 1fr) auto;
        gap: 8px;
      }

      .room-ui-v2 .mobile-entity-main.editing-inline {
        grid-template-columns: 24px 34px minmax(0, 1fr) 34px;
        gap: 7px;
      }

      .room-ui-v2 .mobile-entity-icon {
        width: 34px;
        height: 34px;
      }

      .room-ui-v2 .mobile-entity-brightness {
        width: calc(100% - 42px);
        margin-left: 42px;
      }
    }


    .room-ui-v2 .room-header .unavailable-entities-icon,
    .room-ui-v2 .room-header .dd-edit-toggle,
    .room-ui-v2 .room-header .area-mobile-camera {
      margin: 0 !important;
      position: relative;
      inset: auto;
      transform: none;
    }

    .room-ui-v2 .room-header .unavailable-entities-icon {
      background: color-mix(in srgb, var(--warning-color) 14%, var(--card-background-color));
      color: var(--warning-color);
    }

    .room-ui-v2 .room-header .unavailable-entities-icon ha-icon {
      color: currentColor;
    }

    .room-ui-v2 .room-header .dd-edit-toggle {
      background: color-mix(in srgb, var(--primary-text-color) 6%, var(--card-background-color));
      color: var(--primary-text-color);
    }

    .room-ui-v2 .room-header .dd-edit-toggle.active {
      background: var(--primary-color);
      color: var(--text-primary-color);
    }


    /* Room context: global house information and Favorites form one subtle visual zone. */
    .global-header.room-context {
      background: color-mix(in srgb, var(--secondary-background-color) 34%, var(--card-background-color));
      border-bottom-color: transparent;
      box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--divider-color) 42%, transparent);
    }

    .global-header.room-context .room-favorites-block {
      margin-top: 10px !important;
      margin-bottom: 0 !important;
      background: color-mix(in srgb, var(--card-background-color) 78%, transparent);
      box-shadow: none;
    }

    .global-header.room-context .room-favorites-block::after {
      display: none;
    }

    /* Desktop room header follow-up:
       - left identity block matches the full height of all three metric pills
       - metric pills are about 10% smaller and tightly stacked
       - status badges stay fully visible
       - actions stay aligned with the room title */
    @media (min-width: 769px) {
      .room-ui-v2 .room-header {
        min-height: 176px !important;
        padding-top: 8px !important;
        padding-bottom: 8px !important;
        align-items: center !important;
      }

      .room-ui-v2 .room-header-media {
        width: 190px !important;
        height: 150px !important;
        align-self: center !important;
        border-radius: 10px;
      }

      .room-ui-v2 .room-header-icon ha-icon {
        --mdc-icon-size: 46px;
      }

      .room-ui-v2 .room-header-copy {
        height: 150px !important;
        min-height: 150px !important;
        align-self: center !important;
        justify-content: flex-start !important;
        gap: 4px !important;
        padding: 0 !important;
        overflow: visible !important;
      }

      .room-ui-v2 .room-header .area-title {
        font-size: clamp(29px, 2vw, 35px);
        line-height: 1.05;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .room-header-title-row {
        min-height: 38px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 7px;
      }

      .room-header-title-row .room-header-home-link {
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
      }

      .room-header-title-row .room-header-home-link ha-icon {
        --mdc-icon-size: 20px;
      }

      .room-header-title-row .room-header-home-chevron {
        flex: 0 0 auto;
      }

      .room-header-device-count {
        font-size: 13px;
        line-height: 1.15;
        margin: 0 !important;
      }

      .room-header-summary {
        min-height: 34px !important;
        margin-top: 2px !important;
        margin-bottom: 0 !important;
        padding: 2px 0 !important;
        align-items: center !important;
        gap: 7px !important;
        overflow: visible !important;
      }

      .room-header-summary.is-empty {
        min-height: 0 !important;
        padding: 0 !important;
      }

      .room-summary-item {
        min-height: 30px !important;
        font-size: 12px;
        line-height: 1 !important;
      }

      button.room-summary-item {
        min-width: 46px !important;
        padding: 6px 10px !important;
      }

      .room-summary-item ha-icon {
        --mdc-icon-size: 17px !important;
      }

      .room-ui-v2 .room-header .area-header-metrics {
        align-self: center !important;
        justify-content: center !important;
        gap: 4px !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .room-ui-v2 .room-header .area-header-metric {
        min-height: 47px !important;
        height: 47px !important;
        padding: 4px 10px !important;
        gap: 7px !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-ring {
        width: 30px !important;
        height: 30px !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-label {
        font-size: 8px !important;
        line-height: 1 !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-reading {
        font-size: 14px !important;
        line-height: 1.05 !important;
      }

      .room-header-actions {
        height: 150px !important;
        align-self: center !important;
        justify-content: flex-start !important;
        gap: 8px !important;
        padding: 0 !important;
      }

      .room-header-actions .dd-edit-toggle,
      .room-header-actions .unavailable-entities-icon {
        width: 38px;
        height: 38px;
        margin: 0 !important;
      }
    }

    .room-header-title-row {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .room-header-title-row .area-title {
      min-width: 0;
      margin: 0;
    }

    @media (max-width: 768px) {
      .room-header-title-row .room-header-home-link {
        display: none;
      }
    }

    /* Final polish for global meta, Favorites and expandable room sections. */
    @media (min-width: 769px) {
      .global-header {
        padding-right: 28px;
      }

      .header-time-weather {
        min-width: 204px;
        height: 50px;
        flex: 0 0 auto;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
      }

      .header-time-section {
        min-width: 82px;
        align-items: flex-end;
        justify-content: center;
        gap: 1px;
        line-height: 1;
      }

      .header-time {
        font-size: 18px;
        line-height: 1.05;
      }

      .header-date {
        font-size: 10px;
        line-height: 1.05;
      }

      .weather-compact {
        min-height: 30px;
        padding: 3px 9px;
        box-sizing: border-box;
      }
    }

    .room-ui-v2 > .room-favorites-block,
    .room-ui-v2 > .room-header {
      width: 100%;
      box-sizing: border-box;
    }

    .room-favorites-block {
      position: relative;
      box-sizing: border-box;
      overflow: visible !important;
      margin-bottom: 11px !important;
    }

    .room-favorites-block::after {
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

    .room-favorites-content .favorites-grid {
      gap: 6px;
    }

    .room-favorites-content .favorite-tile-wrapper {
      --row-size: 54px;
      --ha-card-border-radius: 8px;
      min-height: 54px;
      font-size: 0.94em;
    }

    .room-favorites-content .favorite-tile-wrapper > hui-tile-card {
      --row-size: 54px;
      --ha-card-border-radius: 8px;
      min-height: 54px;
    }

    .room-ui-v2 .mobile-domain-header.expandable-header {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      cursor: pointer;
      transition:
        background-color 0.15s ease,
        box-shadow 0.15s ease;
    }

    .room-ui-v2 .mobile-domain-header.expandable-header:hover {
      background: color-mix(in srgb, var(--primary-color) 6%, var(--card-background-color));
    }

    .room-ui-v2 .mobile-domain-header.expandable-header:active {
      background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color));
    }

    .room-ui-v2 .mobile-domain-header.expandable-header:focus-visible {
      outline: 2px solid color-mix(in srgb, var(--primary-color) 55%, transparent);
      outline-offset: 2px;
    }

    .room-ui-v2 .mobile-domain-title,
    .room-favorites-title {
      pointer-events: none;
    }

    .mobile-domain-center-chevron {
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

    .room-ui-v2 .mobile-domain-header-actions {
      position: relative;
      z-index: 2;
    }

    .mobile-domain-title-chevron {
      display: none !important;
    }

    @media (max-width: 768px) {
      .room-favorites-content .favorite-tile-wrapper,
      .room-favorites-content .favorite-tile-wrapper > hui-tile-card {
        --row-size: 50px;
        min-height: 50px;
      }
    }


    /* Keep expandable headers visually centered and use a single, consistent leading chevron. */
    .room-ui-v2 .mobile-domain-header.expandable-header {
      min-height: 38px;
    }

    .room-ui-v2 .mobile-domain-title {
      min-height: 24px;
      align-items: center;
      gap: 6px;
      line-height: 1;
    }

    .room-ui-v2 .mobile-domain-title-copy {
      align-items: center;
      line-height: 1;
    }

    .room-ui-v2 .mobile-domain-title-label,
    .room-ui-v2 .mobile-domain-count {
      line-height: 1;
    }

    .mobile-domain-leading-chevron {
      flex: 0 0 auto;
      color: var(--secondary-text-color);
      --mdc-icon-size: 14px;
      opacity: 0.78;
      pointer-events: none;
    }

    .mobile-domain-leading-drag-handle {
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

    .mobile-domain-leading-drag-handle:hover {
      background: color-mix(in srgb, var(--primary-color) 8%, transparent);
      color: var(--primary-color);
    }

    .mobile-domain-leading-drag-handle:active {
      cursor: grabbing;
    }

    .mobile-domain-leading-drag-handle ha-icon {
      --mdc-icon-size: 17px;
    }

    .mobile-domain-center-chevron,
    .mobile-domain-title-chevron {
      display: none !important;
    }

    /* Compact Favorites row with a quiet divider before the room header. */
    .room-favorites-block {
      margin-bottom: 12px !important;
    }

    .room-favorites-block::after {
      left: 12px;
      right: 12px;
      bottom: -7px;
      width: auto;
      height: 1px;
      transform: none;
      background: var(--divider-color);
      opacity: 0.42;
    }

    /* Compact sidebar: denser rooms, slimmer badges, vertically centered badge contents. */
    .sidebar .floor-section {
      margin: 0 0 10px;
    }

    .sidebar .floor-header {
      padding: 5px 8px 3px;
      margin-bottom: 2px;
    }

    .sidebar .floor-areas {
      gap: 4px;
    }

    .sidebar .area-button.home-button {
      margin-bottom: 10px !important;
    }

    @media (min-width: 769px) {
      .sidebar .room-area-button {
        margin-bottom: 0;
      }

      .sidebar .room-area-button .area-content {
        gap: 5px;
      }

      .sidebar .room-area-button .area-name,
      .sidebar .room-area-button.has-picture .area-name {
        font-size: 14px;
      }

      .sidebar .room-area-button .area-sensors,
      .sidebar .room-area-button.has-picture .area-sensors {
        margin-top: 2px;
        font-size: 11px;
      }

      .sidebar .room-area-button .area-info-badges {
        gap: 3px;
        min-height: 20px;
      }

      .sidebar .room-area-button .info-badge,
      .sidebar .room-area-button.has-picture .info-badge {
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
      .sidebar .room-area-button.has-picture .info-badge ha-icon {
        width: 11px;
        height: 11px;
        display: block;
        align-self: center;
        --mdc-icon-size: 11px;
        line-height: 0;
        transform: translateY(-0.5px);
      }

      .sidebar .room-area-button .badge-count,
      .sidebar .room-area-button.has-picture .badge-count {
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
      .header-time-weather {
        min-width: 176px;
        height: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
      }

      .header-time-section {
        min-width: 76px;
        align-items: flex-end;
        justify-content: center;
        gap: 1px;
        padding: 0;
        background: transparent;
        border: 0;
        box-shadow: none;
      }

      .header-time {
        font-size: 18px;
        line-height: 1.05;
      }

      .header-date {
        font-size: 10px;
        line-height: 1.05;
      }

      .weather-compact {
        min-height: 30px;
        padding: 3px 9px;
      }

      .weather-icon-compact ha-icon {
        --mdc-icon-size: 18px;
      }

      .weather-temp-compact {
        font-size: 11px;
      }
    }

    /* Edit mode keeps exactly the same card footprint as the normal room view. */
    .room-ui-v2 .dd-generated-card-wrap.editing {
      width: 100%;
      min-width: 0;
      min-height: 62px;
      height: auto;
      flex: none;
      border-radius: 8px;
    }

    .room-ui-v2 .dd-generated-card-wrap.editing > .mobile-entity-card {
      min-height: 62px !important;
      height: 100% !important;
    }

    .room-ui-v2 .mobile-entity-rail .dd-domain-add-card-final,
    .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card-final {
      min-height: 62px !important;
      height: 62px;
      opacity: 0.72;
      border-radius: 8px;
    }

    .room-ui-v2 .dd-generated-card-toolbar {
      display: none !important;
    }

    @media (max-width: 768px) {
      .room-ui-v2 .mobile-domain-header.expandable-header {
        width: 100%;
        padding: 6px 7px;
      }

      .room-ui-v2 .dd-generated-card-wrap.editing,
      .room-ui-v2 .dd-generated-card-wrap.editing > .mobile-entity-card,
      .room-ui-v2 .mobile-entity-rail .dd-domain-add-card-final {
        min-height: 58px !important;
      }

      .room-ui-v2 .mobile-entity-rail .dd-domain-add-card-final {
        height: 58px;
      }
    }

    /* Room follow-up: restore functional group drag handles. The title was intentionally
       non-interactive in normal mode, which also swallowed pointer events for the new handle. */
    .room-ui-v2 .mobile-domain-group.group-editing .mobile-domain-title {
      pointer-events: auto;
    }

    .room-ui-v2 .mobile-domain-group.group-editing .mobile-domain-title-copy,
    .room-ui-v2 .mobile-domain-group.group-editing .room-domain-icon {
      pointer-events: none;
    }

    .room-ui-v2 .mobile-domain-leading-drag-handle {
      pointer-events: auto;
      user-select: none;
      -webkit-user-select: none;
      -webkit-user-drag: element;
    }

    /* Expanded favorites content keeps the same inset as generated room content. */
    .room-favorites-content {
      padding: 6px 9px 9px;
    }

    .room-ui-v2 .mobile-domain-header.room-favorites-header.expandable-header {
      min-height: 32px;
      padding: 3px 9px;
      border-radius: 7px;
    }

    .room-ui-v2 .room-favorites-title {
      min-height: 20px;
    }

    .room-ui-v2 .room-favorites-title .room-domain-icon {
      width: 19px;
      height: 19px;
    }

    .room-ui-v2 .room-favorites-title .room-domain-icon ha-icon {
      --mdc-icon-size: 16px;
    }

    /* Final mobile room-view pass: compact room header and desktop-like area picker cards. */
    @media (max-width: 768px) {
      /* Room header: top row for navigation/identity/actions, full-width metric row below. */
      .room-ui-v2 .room-header {
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

      .room-ui-v2 .room-header-back {
        grid-area: back !important;
        align-self: center !important;
      }

      .room-ui-v2 .room-header-media {
        grid-area: media !important;
        width: 60px !important;
        height: 60px !important;
        align-self: center !important;
      }

      .room-ui-v2 .room-header-copy {
        grid-area: copy !important;
        min-width: 0 !important;
        height: auto !important;
        align-self: center !important;
        justify-content: center !important;
        gap: 3px !important;
        overflow: hidden;
      }

      .room-ui-v2 .room-header .area-title {
        display: block !important;
        width: 100%;
        margin: 0 !important;
        overflow: hidden;
        color: var(--primary-text-color);
        font-size: 20px !important;
        font-weight: 850 !important;
        line-height: 1.05 !important;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .room-ui-v2 .room-header-device-count {
        display: block !important;
        width: 100%;
        overflow: hidden;
        font-size: 10px !important;
        line-height: 1.15 !important;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .room-ui-v2 .room-header-summary {
        width: 100%;
        min-height: 18px;
        margin-top: 1px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 4px !important;
        overflow: hidden;
      }

      .room-ui-v2 .room-header-actions {
        grid-area: actions !important;
        width: 76px;
        margin: 0 !important;
        align-self: center !important;
        justify-self: end !important;
        display: grid !important;
        grid-template-columns: repeat(2, 34px);
        align-items: center;
        justify-content: end;
        gap: 6px !important;
      }

      .room-ui-v2 .room-header .area-header-metrics {
        grid-area: metrics !important;
        width: 100% !important;
        min-width: 0 !important;
        margin: 0 !important;
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        align-items: center !important;
        gap: 7px !important;
      }

      .room-ui-v2 .room-header .area-header-metric {
        width: 100% !important;
        min-width: 0 !important;
        min-height: 34px !important;
        padding: 4px 7px !important;
        box-sizing: border-box;
        justify-content: flex-start !important;
        overflow: hidden;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-reading {
        overflow: hidden;
        font-size: 11px !important;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* Area picker sheet: compact chrome and enough clearance above the bottom navigation. */
      .layout-container > .sidebar,
      .sidebar {
        left: 16px !important;
        right: 16px !important;
        bottom: calc(94px + env(safe-area-inset-bottom, 0px)) !important;
        max-height: min(64vh, 560px) !important;
        padding: 10px !important;
        border-radius: 12px !important;
      }

      .mobile-area-picker-head {
        min-height: 34px !important;
        margin: 0 2px 8px !important;
      }

      .mobile-area-picker-title {
        font-size: 18px !important;
        line-height: 1.1 !important;
      }

      .mobile-area-picker-close {
        width: 34px !important;
        height: 34px !important;
      }

      .sidebar::before {
        margin-bottom: 7px !important;
      }

      .sidebar .area-list {
        gap: 6px !important;
      }

      .sidebar .floor-section {
        gap: 5px !important;
        margin-bottom: 8px !important;
      }

      .sidebar .floor-areas {
        gap: 5px !important;
      }

      .sidebar .floor-header {
        padding: 4px 6px 2px !important;
      }

      .sidebar .floor-header h3 {
        font-size: 13px !important;
        font-weight: 760 !important;
      }

      /* Mobile room cards mirror the compact information hierarchy of the desktop sidebar. */
      .sidebar .room-area-button {
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

      .sidebar .room-area-button .area-media {
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
      .sidebar .room-area-button .area-media-picture {
        width: 100% !important;
        height: 100% !important;
      }

      .sidebar .room-area-button .area-media-icon {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
        color: var(--primary-color) !important;
      }

      .sidebar .room-area-button .area-media-icon ha-icon {
        --mdc-icon-size: 26px !important;
      }

      .sidebar .room-area-button .area-content {
        grid-column: 2 !important;
        grid-row: 1 !important;
        min-width: 0 !important;
        min-height: 52px !important;
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) auto !important;
        align-items: center !important;
        column-gap: 8px !important;
      }

      .sidebar .room-area-button .area-top-section {
        grid-column: 1 !important;
        width: 100% !important;
        min-width: 0 !important;
        margin: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        gap: 3px !important;
      }

      .sidebar .room-area-button .area-name {
        width: 100% !important;
        margin: 0 !important;
        overflow: hidden;
        font-size: 15px !important;
        font-weight: 800 !important;
        line-height: 1.1 !important;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sidebar .room-area-button .area-sensors {
        width: 100% !important;
        margin-top: 3px !important;
        overflow: hidden;
        font-size: 11px !important;
        font-weight: 650 !important;
        line-height: 1.1 !important;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sidebar .room-area-button .area-info-badges {
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

      .sidebar .room-area-button .area-info-badges:has(.info-badge:nth-child(5)) {
        grid-template-columns: repeat(3, max-content) !important;
        max-width: 108px !important;
      }

      .sidebar .room-area-button .info-badge {
        min-width: 22px !important;
        height: 19px !important;
        padding: 0 5px !important;
      }

      .sidebar .room-area-button .info-badge ha-icon {
        --mdc-icon-size: 11px !important;
      }

      .sidebar .room-area-button .badge-count {
        font-size: 9px !important;
      }

      .sidebar .room-area-button.selected {
        border-color: color-mix(in srgb, var(--primary-color) 52%, transparent) !important;
        background: color-mix(in srgb, var(--card-background-color) 94%, var(--primary-color) 6%) !important;
        box-shadow:
          inset 3px 0 0 var(--primary-color),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 10%, transparent),
          0 6px 14px rgba(15, 23, 42, 0.07) !important;
      }

      /* Home row stays compact and visually subordinate to room cards. */
      .sidebar .area-button.home-button {
        min-height: 54px !important;
        height: 54px !important;
        padding: 7px 10px !important;
        display: grid !important;
        grid-template-columns: 40px minmax(0, 1fr) 20px !important;
        align-items: center !important;
        gap: 10px !important;
        margin: 0 0 7px !important;
      }

      .sidebar .area-button.home-button .area-icon {
        position: relative !important;
        left: auto !important;
        top: auto !important;
        width: 40px !important;
        height: 40px !important;
        transform: none !important;
        border-radius: 8px !important;
      }

      .sidebar .area-button.home-button .area-info {
        grid-column: 2 !important;
        min-width: 0 !important;
      }

      .sidebar .area-button.home-button .area-menu-chevron {
        grid-column: 3 !important;
        justify-self: end !important;
      }
    }

    /* 1.8.10x desktop density and hierarchy follow-up */
    @media (min-width: 769px) {
      .content-area {
        scrollbar-gutter: stable;
      }

      .welcome-notification-action {
        width: 48px;
        height: 48px;
        border-radius: 999px;
        background: transparent;
        box-shadow: none;
      }

      .welcome-notification-action ha-icon {
        --mdc-icon-size: 26px;
      }

      .welcome-settings-action {
        width: 44px;
        height: 44px;
        border-radius: 999px;
      }

      .home-status-grid {
        align-items: start;
      }

      .home-status-card {
        min-height: 104px;
        padding: 12px;
      }

      .home-status-card .status-card-icon {
        width: 42px;
        height: 42px;
        margin-bottom: 10px;
      }

      .home-status-card.house-persons-card,
      .home-status-card.house-climate-card,
      .home-status-card.house-power-card {
        min-height: 0;
        height: auto;
        align-self: start;
        padding: 12px;
        gap: 8px;
      }

      .house-persons-grid {
        margin-top: 2px;
      }

      .house-climate-grid {
        gap: 7px;
      }

      .house-climate-metric {
        min-height: 42px;
        padding: 6px 8px;
      }

      .house-power-list {
        margin-top: 2px;
      }

      .global-header.room-context .room-favorites-block {
        border-color: color-mix(in srgb, var(--primary-color) 12%, var(--divider-color));
        background: color-mix(in srgb, var(--primary-color) 3%, var(--card-background-color));
      }

      .global-header.room-context .room-favorites-header {
        min-height: 38px !important;
        padding: 7px 9px !important;
      }

      .global-header.room-context .room-favorites-title {
        min-height: 24px !important;
      }

      .global-header.room-context .room-favorites-title .mobile-domain-title-label {
        font-size: 15px !important;
        font-weight: 850 !important;
        line-height: 1 !important;
      }

      .global-header.room-context .room-favorites-title .mobile-domain-count {
        font-size: 10px !important;
        font-weight: 650 !important;
        line-height: 1 !important;
      }

      .global-header.room-context .room-favorites-title .room-domain-icon {
        width: 22px !important;
        height: 22px !important;
      }

      .global-header.room-context .room-favorites-title .room-domain-icon ha-icon {
        --mdc-icon-size: 18px !important;
      }

      .room-header-title-row {
        gap: 5px;
      }

      .room-header-home-link {
        width: 28px;
        height: 28px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary-color) 8%, transparent);
        color: var(--primary-color);
      }

      .room-header-home-link:hover {
        background: color-mix(in srgb, var(--primary-color) 14%, transparent);
      }

      .room-header-home-link ha-icon {
        --mdc-icon-size: 19px;
      }

      .room-header-home-chevron {
        flex: 0 0 auto;
        color: var(--secondary-text-color);
        --mdc-icon-size: 16px;
        opacity: 0.7;
      }
    }

    @media (max-width: 768px) {
      .room-header-home-chevron {
        display: none;
      }
    }

    /* Follow-up: keep requested density changes coherent instead of content-dependent. */
    @media (min-width: 769px) {
      /* House information uses two intentional heights:
         detailed summary cards are equal; simple active-status cards are compact and equal. */
      .home-status-grid {
        align-items: start;
      }

      .home-status-card {
        box-sizing: border-box;
        height: 94px;
        min-height: 94px;
        padding: 10px 12px;
        justify-content: flex-start;
        gap: 7px;
      }

      .home-status-card .status-card-icon {
        width: 38px;
        height: 38px;
        margin: 0;
      }

      .home-status-card .status-card-icon ha-icon {
        --mdc-icon-size: 21px;
      }

      .home-status-card .status-card-title {
        margin: 0;
        font-size: 14px;
        line-height: 1.1;
      }

      .home-status-card.has-value .status-card-value {
        margin: 0;
      }

      .home-status-card.house-persons-card,
      .home-status-card.house-climate-card,
      .home-status-card.house-power-card {
        height: 162px;
        min-height: 162px;
        padding: 12px;
        gap: 8px;
        overflow: hidden;
      }

      .house-person-mini {
        min-height: 36px;
        padding: 4px 6px;
      }

      .house-person-avatar {
        width: 24px;
        height: 24px;
      }

      .house-climate-metric {
        min-height: 44px;
      }

      .house-power-list {
        gap: 3px;
      }

      .house-power-room {
        grid-template-columns: 20px minmax(0, 1fr) auto;
        column-gap: 6px;
        row-gap: 2px;
      }

      .house-power-room-icon {
        width: 20px;
        height: 20px;
        border-radius: 7px;
      }

      .house-power-room-icon ha-icon {
        --mdc-icon-size: 13px;
      }

      .house-power-bar {
        height: 3px;
      }

      /* The Home affordance should read as navigation, not as a second room tile. */
      .room-header-home-link {
        width: 24px;
        height: 24px;
        padding: 0;
        border-radius: 6px;
        background: transparent;
        box-shadow: none;
        color: var(--primary-color);
      }

      .room-header-home-link:hover {
        background: color-mix(in srgb, var(--primary-color) 8%, transparent);
      }

      .room-header-home-link ha-icon {
        --mdc-icon-size: 18px;
      }

      /* Favorites matches the generated type header in height, typography and interaction. */
      .global-header.room-context .room-favorites-block {
        background: var(--card-background-color);
        border-color: color-mix(in srgb, var(--primary-text-color) 7%, transparent);
        box-shadow: 0 3px 10px rgba(15, 23, 42, 0.04);
      }

      .global-header.room-context .room-favorites-header {
        height: 38px !important;
        min-height: 38px !important;
        padding: 7px 9px !important;
        box-sizing: border-box;
        transition: background-color 0.16s ease, box-shadow 0.16s ease;
      }

      .global-header.room-context .room-favorites-header:hover {
        background: color-mix(in srgb, var(--primary-color) 5%, transparent);
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 10%, transparent);
      }

      .global-header.room-context .room-favorites-title {
        min-height: 24px !important;
        align-items: center !important;
        line-height: 1 !important;
      }

      .global-header.room-context .room-favorites-title .mobile-domain-leading-chevron,
      .global-header.room-context .room-favorites-title .room-domain-icon,
      .global-header.room-context .room-favorites-title .mobile-domain-title-copy,
      .global-header.room-context .room-favorites-title .mobile-domain-count {
        align-self: center;
      }

      .global-header.room-context .room-favorites-title .mobile-domain-title-copy {
        align-items: center !important;
        line-height: 1 !important;
      }

      /* Keep the title block at the same vertical position even when no active room badge exists. */
      .room-header-summary {
        min-height: 22px;
      }

      .room-header-summary.is-empty {
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
      .home-custom-cards-section {
        margin-bottom: 36px;
      }

      /* Detailed Home information cards stay equal in outer height. */
      .home-status-card.house-persons-card,
      .home-status-card.house-climate-card,
      .home-status-card.house-power-card {
        height: 162px;
        min-height: 162px;
      }

      /* Simple active-status cards are exactly half the detailed-card height. */
      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card) {
        height: 81px;
        min-height: 81px;
        padding: 9px 11px 7px;
        display: grid;
        grid-template-rows: 34px minmax(0, 1fr);
        align-items: start;
        gap: 0;
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card) .status-card-icon {
        width: 34px;
        height: 34px;
        margin: 0;
        align-self: start;
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card) .status-card-icon ha-icon {
        --mdc-icon-size: 19px;
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card) .status-card-title {
        width: 100%;
        min-height: 30px;
        margin: 0;
        display: flex;
        align-items: center;
        align-self: stretch;
        font-size: 13px;
        line-height: 1.05;
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card).has-value {
        grid-template-rows: 30px auto minmax(0, 1fr);
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card).has-value .status-card-value {
        margin: 0;
        font-size: 17px;
        line-height: 1;
      }

      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card).has-value .status-card-title {
        min-height: 18px;
        font-size: 10px;
      }

      /* Compact status count pills like the room badges: smaller and shifted outward. */
      .home-status-card .status-card-badge {
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
      .house-persons-grid {
        flex: 1 1 auto;
        min-height: 0;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
        gap: 7px;
      }

      .house-persons-card.persons-1 .house-persons-grid {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: minmax(0, 1fr);
      }

      .house-persons-card.persons-2 .house-persons-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: minmax(0, 1fr);
      }

      .house-persons-card.persons-3 .house-persons-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
      }

      .house-persons-card.persons-3 .house-person-mini:last-child {
        grid-column: 1 / -1;
      }

      .house-person-mini {
        min-height: 0;
        height: 100%;
        padding: 6px 8px;
      }

      .house-persons-card.persons-1 .house-person-mini {
        justify-content: center;
      }

      .house-persons-card.persons-1 .house-person-avatar {
        width: 34px;
        height: 34px;
      }

      .house-persons-card.persons-1 .house-person-mini-name {
        font-size: 13px;
      }

      .house-persons-card.persons-1 .house-person-mini-state {
        font-size: 11px;
      }

      /* Climate metrics consume the full remaining body height when only one or two metrics exist. */
      .house-climate-grid {
        flex: 1 1 auto;
        min-height: 0;
        align-items: stretch;
      }

      .house-climate-card.metrics-1 .house-climate-grid {
        grid-template-columns: minmax(0, 1fr);
      }

      .house-climate-card.metrics-2 .house-climate-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .house-climate-card.metrics-1 .house-climate-metric,
      .house-climate-card.metrics-2 .house-climate-metric {
        min-height: 0;
        height: 100%;
        padding: 10px 12px;
        grid-template-columns: 34px minmax(0, 1fr);
        column-gap: 10px;
      }

      .house-climate-card.metrics-1 .house-climate-metric-icon,
      .house-climate-card.metrics-2 .house-climate-metric-icon {
        width: 34px;
        height: 34px;
        border-radius: 10px;
      }

      .house-climate-card.metrics-1 .house-climate-metric-icon ha-icon,
      .house-climate-card.metrics-2 .house-climate-metric-icon ha-icon {
        --mdc-icon-size: 19px;
      }

      .house-climate-card.metrics-1 .house-climate-metric-value,
      .house-climate-card.metrics-2 .house-climate-metric-value {
        font-size: 18px;
      }

      .house-climate-card.metrics-1 .house-climate-metric-label,
      .house-climate-card.metrics-2 .house-climate-metric-label {
        font-size: 11px;
      }

      /* Power keeps a stable card height; empty state sits in the visual center of the body. */
      .house-power-empty {
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
      .home-favorites-section .favorites-header {
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

      .home-favorites-section .favorites-header ha-icon {
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

      .home-favorites-section .favorites-header span {
        display: inline-flex;
        align-items: center;
        min-height: 30px;
      }
    }

    /* Final visual consistency pass for Home and room header. */
    @media (min-width: 769px) {
      /* Home status count badges match the compact room/header badge proportions. */
      .home-status-card .status-card-badge {
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
      .home-status-card:not(.house-persons-card):not(.house-climate-card):not(.house-power-card):not(.has-value) .status-card-title {
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
      .global-header.room-context .header-time-weather {
        height: 50px;
        gap: 12px;
      }

      .global-header.room-context .header-time-section {
        width: 94px;
        min-width: 94px;
        height: 50px;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
      }

      .global-header.room-context .header-time {
        font-size: 24px;
        line-height: 1;
      }

      .global-header.room-context .header-date {
        margin-top: 3px;
        font-size: 11px;
        line-height: 1;
      }

      .global-header.room-context .weather-compact {
        min-height: 38px;
        padding: 0 12px;
        gap: 7px;
        border-radius: 999px;
      }

      .global-header.room-context .weather-icon-compact ha-icon {
        --mdc-icon-size: 18px;
      }

      .global-header.room-context .weather-temp-compact {
        font-size: 13px;
      }

      /* Filled Home breadcrumb reads like navigation but remains distinct from the large room icon. */
      .room-header-home-link ha-icon {
        --mdc-icon-size: 19px;
      }

      /* Sidebar Home follows the room-card rhythm while remaining a special global destination. */
      .sidebar .area-button.home-button {
        min-height: 68px !important;
        height: 68px !important;
        padding: 8px 10px !important;
        grid-template-columns: 50px minmax(0, 1fr) auto 20px !important;
        gap: 9px !important;
        border-color: color-mix(in srgb, var(--primary-color) 18%, var(--divider-color)) !important;
        background: color-mix(in srgb, var(--primary-color) 4%, var(--card-background-color)) !important;
      }

      .sidebar .area-button.home-button .area-icon {
        width: 50px !important;
        height: 50px !important;
        border-radius: 9px !important;
        background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
      }

      .sidebar .area-button.home-button .area-icon ha-icon {
        --mdc-icon-size: 25px !important;
      }

      .sidebar .area-button.home-button .area-name {
        font-size: 14px;
        font-weight: 850;
      }

      .sidebar .area-button.home-button.selected {
        background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color)) !important;
        box-shadow:
          inset 3px 0 0 var(--primary-color),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 14%, transparent),
          0 6px 14px rgba(15, 23, 42, 0.06) !important;
      }

      /* Room metric pills: direct icons, no nested circular icon background. */
      .room-ui-v2 .area-header-metric .metric-ring.metric-icon {
        width: 24px !important;
        height: 30px !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
      }

      .room-ui-v2 .area-header-metric .metric-ring.metric-icon ha-icon {
        --mdc-icon-size: 20px !important;
      }

      /* Climate card uses exactly the same temperature/humidity colors as the room view. */
      .house-climate-metric.temperature { --metric-color: #7c67c7 !important; }
      .house-climate-metric.humidity { --metric-color: #34a6d8 !important; }

      /* Climate metric icons are direct, slightly larger icons without a second circle. */
      .house-climate-metric-icon {
        width: 28px !important;
        height: 34px !important;
        border-radius: 0 !important;
        background: transparent !important;
      }

      .house-climate-metric-icon ha-icon {
        --mdc-icon-size: 21px !important;
      }

      /* Desktop section headings are labels, not buttons: color only, no chip/background. */
      .home-status-heading ha-icon,
      .home-camera-section .home-status-heading ha-icon,
      .home-summaries-section .home-status-heading ha-icon,
      .home-todos-section .home-status-heading ha-icon,
      .home-custom-cards-section .home-status-heading ha-icon,
      .home-favorites-section .favorites-header ha-icon {
        width: 24px !important;
        height: 24px !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
      }

      .home-status-heading ha-icon { color: var(--primary-color); }
      .home-camera-section .home-status-heading ha-icon { color: #ef4444; }
      .home-summaries-section .home-status-heading ha-icon { color: #c56f12; }
      .home-todos-section .home-status-heading ha-icon { color: #7c3aed; }
      .home-custom-cards-section .home-status-heading ha-icon { color: #0ea5a8; }
      .home-favorites-section .favorites-header ha-icon { color: #f59e0b; }
    }

    /* House power detail dialog mirrors the local Climate-dialog workflow instead of navigating away. */
    .house-power-dialog-overlay {
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

    .house-power-dialog {
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

    .house-power-dialog-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      margin-bottom: 14px;
    }

    .house-power-dialog-title-wrap {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .house-power-dialog-icon {
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

    .house-power-dialog-icon ha-icon { --mdc-icon-size: 23px; }
    .house-power-dialog-title { font-size: 20px; font-weight: 900; line-height: 1.05; }
    .house-power-dialog-subtitle { margin-top: 3px; color: var(--secondary-text-color); font-size: 12px; font-weight: 700; }

    .house-power-dialog-close {
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

    .house-power-dialog-total {
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

    .house-power-dialog-total span { font-size: 28px; font-weight: 950; line-height: 1; }
    .house-power-dialog-total small { margin-top: 4px; color: var(--secondary-text-color); font-size: 11px; font-weight: 750; }

    .house-power-dialog-areas { display: grid; gap: 10px; }
    .house-power-dialog-area {
      padding: 11px 12px;
      border-radius: 10px;
      background: color-mix(in srgb, var(--primary-background-color) 72%, var(--card-background-color));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    }

    .house-power-dialog-area-head {
      display: grid;
      grid-template-columns: 30px minmax(0, 1fr) auto;
      align-items: center;
      gap: 8px;
    }

    .house-power-dialog-area-icon {
      width: 30px;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: #d88e20;
      background: color-mix(in srgb, #d88e20 10%, transparent);
    }

    .house-power-dialog-area-icon ha-icon { --mdc-icon-size: 17px; }
    .house-power-dialog-area-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 850; }

    .house-power-dialog-bar {
      position: relative;
      height: 5px;
      margin: 8px 0 6px 38px;
      overflow: hidden;
      border-radius: 999px;
      background: color-mix(in srgb, #d88e20 10%, var(--secondary-background-color));
    }

    .house-power-dialog-bar span {
      position: absolute;
      inset: 0 auto 0 0;
      width: var(--power-width, 0%);
      min-width: 4px;
      border-radius: inherit;
      background: linear-gradient(90deg, #d88e20, #f4c34d);
    }

    .house-power-dialog-entities {
      margin-left: 38px;
      display: grid;
      gap: 2px;
    }

    .house-power-dialog-entity {
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

    .house-power-dialog-entity:hover {
      background: color-mix(in srgb, #d88e20 7%, transparent);
    }

    .house-power-dialog-entity span {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--secondary-text-color);
      font-size: 12px;
    }

    .house-power-dialog-entity strong { font-size: 12px; white-space: nowrap; }
    .house-power-dialog-empty {
      min-height: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      text-align: center;
    }

    @media (max-width: 768px) {
      .house-power-dialog-overlay {
        align-items: flex-end;
        padding: 12px 12px calc(96px + env(safe-area-inset-bottom, 0px));
      }

      .house-power-dialog {
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
      .home-custom-cards-section {
        width: 100%;
        max-width: none;
        box-sizing: border-box;
      }

      .home-status-heading,
      .home-favorites-section .favorites-header {
        margin-bottom: 10px !important;
      }

      .home-status-section,
      .home-favorites-section,
      .home-summaries-section,
      .home-camera-section,
      .home-todos-section,
      .home-custom-cards-section {
        margin-bottom: 28px !important;
      }

      .home-welcome {
        margin-bottom: 28px !important;
      }

      /* One shared three-column master grid for prominent Home content. */
      .home-status-primary-grid,
      .favorites-grid,
      .home-summary-list {
        width: 100%;
        max-width: none !important;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        align-items: stretch;
      }

      .home-status-primary-grid > .home-status-card {
        width: 100%;
        min-width: 0;
        grid-column: auto !important;
      }

      .home-status-stack {
        min-width: 0;
        height: 162px;
        display: grid;
        grid-template-rows: repeat(2, minmax(0, 1fr));
        gap: 8px;
      }

      .home-status-stack .home-status-card.compact-status {
        width: 100%;
        height: auto;
        min-height: 0;
      }

      /* Once status cards move below the primary row, they use the six-column compact grid. */
      .home-status-secondary-grid {
        width: 100%;
        margin-top: 12px;
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 10px;
      }

      .home-status-secondary-grid .home-status-card.compact-status {
        width: 100%;
        min-width: 0;
        height: 81px;
      }

      /* Favorites/Summary cards use the same column width as a primary House Information card. */
      .home-favorites-section .favorite-card-wrapper,
      .home-summary-list .home-summary-card {
        width: 100%;
        min-width: 0;
      }

      /* Room Favorites: hard vertical centering across chevron, star, text and count. */
      .global-header.room-context .room-favorites-header {
        display: flex !important;
        align-items: center !important;
      }

      .global-header.room-context .room-favorites-title {
        height: 24px !important;
        min-height: 24px !important;
        display: flex !important;
        align-items: center !important;
        gap: 7px !important;
      }

      .global-header.room-context .room-favorites-title > *,
      .global-header.room-context .room-favorites-title .mobile-domain-title-copy,
      .global-header.room-context .room-favorites-title .mobile-domain-title-label,
      .global-header.room-context .room-favorites-title .mobile-domain-count {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        align-self: center !important;
        line-height: 1 !important;
      }

      .global-header.room-context .room-favorites-title .mobile-domain-leading-chevron {
        transform: translateY(0) !important;
      }

      .global-header.room-context .room-favorites-title .room-domain-icon {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        transform: translateY(0) !important;
      }

      /* Home sidebar item: no photo-like icon tile, stronger global distinction, readable selection. */
      .sidebar .area-button.home-button .area-icon {
        width: 32px !important;
        height: 32px !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
      }

      .sidebar .area-button.home-button .area-icon ha-icon {
        --mdc-icon-size: 25px !important;
        color: var(--primary-color) !important;
      }

      .sidebar .area-button.home-button {
        background: color-mix(in srgb, var(--primary-color) 7%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 24%, var(--divider-color)) !important;
      }

      .sidebar .area-button.home-button.selected {
        color: var(--primary-text-color) !important;
        background: color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 42%, var(--divider-color)) !important;
      }

      .sidebar .area-button.home-button.selected .area-name,
      .sidebar .area-button.home-button.selected .area-menu-chevron {
        color: var(--primary-text-color) !important;
      }

      .sidebar .area-button.home-button.selected .area-icon ha-icon {
        color: var(--primary-color) !important;
      }

      /* Status counts match room badges: near-circle, never pill-shaped for 1–2 digits. */
      .home-status-card .status-card-badge {
        min-width: 20px !important;
        width: 20px !important;
        height: 20px !important;
        padding: 0 !important;
        border-radius: 999px !important;
      }
    }

    /* Richer power dialog mirrors the Devices > Energy information density. */
    .house-power-dialog {
      width: min(900px, calc(100vw - 32px));
    }

    .house-power-dialog-overview {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 12px;
    }

    .house-power-dialog-overview-card {
      min-width: 0;
      padding: 13px;
      border-radius: 11px;
      background: var(--card-background-color);
      box-shadow:
        inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 7%, transparent),
        0 8px 22px rgba(15, 23, 42, 0.04);
    }

    .house-power-dialog-overview-head {
      display: grid;
      grid-template-columns: 38px minmax(0, 1fr) auto;
      align-items: center;
      gap: 9px;
    }

    .house-power-dialog-overview-icon {
      width: 38px;
      height: 38px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      color: #d88e20;
      background: color-mix(in srgb, #d88e20 10%, transparent);
    }

    .house-power-dialog-overview-icon ha-icon { --mdc-icon-size: 21px; }
    .house-power-dialog-overview-head strong { display: block; font-size: 14px; font-weight: 850; }
    .house-power-dialog-overview-head small { display: block; margin-top: 3px; color: var(--secondary-text-color); font-size: 11px; font-weight: 700; }
    .house-power-dialog-overview-head b { font-size: 20px; font-weight: 950; white-space: nowrap; }

    .house-power-statistics-card {
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

    .house-power-dialog-top-entities {
      margin-top: 10px;
      display: grid;
      gap: 5px;
    }

    .house-power-dialog-top-entities button {
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

    .house-power-dialog-entity.detailed {
      display: grid;
      grid-template-columns: 32px minmax(0, 1fr) auto;
      align-items: center;
      gap: 8px;
      min-height: 42px;
      padding: 5px 6px;
    }

    .house-power-dialog-entity-icon {
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: #d88e20;
      background: color-mix(in srgb, #d88e20 9%, transparent);
    }

    .house-power-dialog-entity-icon ha-icon { --mdc-icon-size: 17px; }

    .house-power-dialog-entity-copy {
      min-width: 0;
      display: grid;
      gap: 2px;
    }

    .house-power-dialog-entity-copy > strong {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }

    .house-power-dialog-entity-copy > small {
      color: var(--secondary-text-color);
      font-size: 10px;
    }

    .house-power-dialog-entity-bar {
      position: relative;
      height: 3px;
      overflow: hidden;
      border-radius: 999px;
      background: color-mix(in srgb, #d88e20 10%, var(--secondary-background-color));
    }

    .house-power-dialog-entity-bar span {
      position: absolute;
      inset: 0 auto 0 0;
      width: var(--entity-power-width, 0%);
      min-width: 3px;
      border-radius: inherit;
      background: #d88e20;
    }

    .house-power-dialog-entity.detailed > b {
      font-size: 12px;
      white-space: nowrap;
    }

    @media (max-width: 1100px) and (min-width: 769px) {
      .home-status-primary-grid,
      .favorites-grid,
      .home-summary-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .home-status-secondary-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    @media (max-width: 768px) {
      .home-status-primary-grid,
      .home-status-secondary-grid {
        display: contents;
      }

      .home-status-stack {
        display: contents;
      }

      .house-power-dialog-overview {
        grid-template-columns: 1fr;
      }
    }

    /* Compact Home Favorites and clearer sidebar Home state. */
    @media (min-width: 769px) {
      .home-favorites-section .favorites-grid {
        grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
        gap: 10px !important;
      }

      .home-favorites-section .favorite-card-wrapper {
        min-height: 81px !important;
        height: 81px !important;
        padding: 9px 10px !important;
        display: grid !important;
        grid-template-columns: 38px minmax(0, 1fr) auto !important;
        grid-template-rows: 1fr !important;
        align-items: center !important;
        gap: 9px !important;
      }

      .home-favorites-section .favorite-icon {
        width: 38px !important;
        height: 38px !important;
        margin: 0 !important;
        align-self: center !important;
      }

      .home-favorites-section .favorite-icon ha-icon {
        --mdc-icon-size: 21px !important;
      }

      .home-favorites-section .favorite-body {
        min-width: 0;
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        gap: 3px;
      }

      .home-favorites-section .favorite-name {
        margin: 0 !important;
        font-size: 13px !important;
        line-height: 1.05 !important;
        -webkit-line-clamp: 1 !important;
      }

      .home-favorites-section .favorite-area {
        margin: 0 !important;
        font-size: 9px !important;
        line-height: 1 !important;
      }

      .home-favorites-section .favorite-end {
        min-width: 48px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        gap: 4px;
      }

      .home-favorites-section .favorite-quick-action {
        width: 38px !important;
        height: 22px !important;
        flex: 0 0 auto;
      }

      .home-favorites-section .favorite-end-state,
      .home-favorites-section .favorite-info-state {
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

      .home-favorites-section .favorite-info-state {
        font-size: 12px;
        color: var(--primary-text-color);
      }

      .home-favorites-section .favorite-state {
        display: none !important;
      }

      /* Unselected Home must not resemble a selected room. */
      .sidebar .area-button.home-button {
        background: var(--card-background-color) !important;
        border-color: color-mix(in srgb, var(--primary-color) 16%, var(--divider-color)) !important;
        box-shadow:
          inset 3px 0 0 color-mix(in srgb, var(--primary-color) 60%, transparent),
          0 5px 12px rgba(15, 23, 42, 0.04) !important;
      }

      .sidebar .area-button.home-button.selected {
        background: color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 46%, var(--divider-color)) !important;
        box-shadow:
          inset 4px 0 0 var(--primary-color),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 12%, transparent),
          0 8px 18px color-mix(in srgb, var(--primary-color) 10%, transparent) !important;
      }

      .sidebar .room-area-button.selected {
        background: color-mix(in srgb, var(--card-background-color) 94%, var(--primary-color) 6%) !important;
      }
    }

    @media (max-width: 1250px) and (min-width: 769px) {
      .home-favorites-section .favorites-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
      }
    }

    .house-power-dialog-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 0 0 auto;
    }

    .house-power-dialog-energy-link {
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

    .house-power-dialog-energy-link:hover {
      background: color-mix(in srgb, #d88e20 15%, var(--card-background-color));
    }

    .house-power-dialog-energy-link ha-icon {
      --mdc-icon-size: 17px;
    }

    @media (max-width: 768px) {
      .house-power-dialog-energy-link span {
        display: none;
      }

      .house-power-dialog-energy-link {
        width: 36px;
        padding: 0;
      }
    }

    /* Final Home polish: compact Favorites, clear Home state, exact room-Favorites centering. */
    @media (min-width: 769px) {
      .home-favorites-section .favorite-card-wrapper {
        height: 84px !important;
        min-height: 84px !important;
        grid-template-columns: 34px minmax(0, 1fr) 46px !important;
        gap: 8px !important;
        padding: 9px 10px !important;
      }
      .home-favorites-section .favorite-icon {
        width: 34px !important;
        height: 34px !important;
      }
      .home-favorites-section .favorite-icon ha-icon { --mdc-icon-size: 19px !important; }
      .home-favorites-section .favorite-body {
        gap: 2px !important;
        overflow: visible !important;
      }
      .home-favorites-section .favorite-name {
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
      .home-favorites-section .favorite-area {
        overflow: hidden !important;
        text-overflow: clip !important;
        white-space: nowrap !important;
      }
      .home-favorites-section .favorite-end {
        width: 46px !important;
        min-width: 46px !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 3px !important;
      }
      .home-favorites-section .favorite-quick-action { margin: 0 auto !important; }
      .home-favorites-section .favorite-end-state {
        width: 100% !important;
        max-width: none !important;
        text-align: center !important;
        font-size: 9px !important;
        line-height: 1 !important;
      }
      .home-favorites-section .favorite-info-state {
        width: 100% !important;
        max-width: none !important;
        text-align: center !important;
        color: var(--favorite-color) !important;
        font-size: 13px !important;
        font-weight: 900 !important;
        line-height: 1 !important;
      }

      .sidebar .area-button.home-button {
        background: color-mix(in srgb, var(--primary-color) 7%, var(--card-background-color)) !important;
        border: 1px solid color-mix(in srgb, var(--primary-color) 20%, var(--divider-color)) !important;
        box-shadow: 0 5px 12px rgba(15, 23, 42, 0.045) !important;
      }
      .sidebar .area-button.home-button.selected {
        background: color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 48%, var(--divider-color)) !important;
        box-shadow:
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 10%, transparent),
          0 8px 18px color-mix(in srgb, var(--primary-color) 11%, transparent) !important;
      }
      .sidebar .room-area-button.selected {
        background: color-mix(in srgb, var(--primary-color) 7%, var(--card-background-color)) !important;
      }
    }

    .room-favorites-title,
    .room-favorites-title .mobile-domain-leading-chevron,
    .room-favorites-title .room-domain-icon,
    .room-favorites-title .mobile-domain-title-copy,
    .room-favorites-title .mobile-domain-title-label,
    .room-favorites-title .mobile-domain-count {
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
    .room-favorites-title {
      gap: 6px !important;
    }
    .room-favorites-title .mobile-domain-title-copy {
      gap: 5px !important;
    }

    .house-power-dialog-title-wrap {
      display: flex !important;
      align-items: center !important;
      gap: 9px !important;
      flex-wrap: wrap;
      min-width: 0;
    }
    .house-power-dialog-energy-link {
      min-height: 30px !important;
      padding: 0 10px !important;
      margin-left: 2px !important;
      font-size: 11px !important;
    }
    @media (max-width: 768px) {
      .house-power-dialog-energy-link span { display: inline !important; }
      .house-power-dialog-energy-link { width: auto !important; }
    }

    /* Final visual cleanup for Home favorites and room Favorites header. */
    @media (min-width: 769px) {
      .home-favorites-section .favorite-card-wrapper {
        min-height: 84px !important;
        height: 84px !important;
        padding: 9px 10px !important;
        grid-template-columns: 38px minmax(0, 1fr) 50px !important;
        align-items: center !important;
        gap: 9px !important;
      }

      .home-favorites-section .favorite-body {
        min-width: 0 !important;
        align-self: center !important;
        gap: 3px !important;
      }

      .home-favorites-section .favorite-name {
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

      .home-favorites-section .favorite-area {
        max-width: 100% !important;
        overflow: hidden !important;
        text-overflow: clip !important;
        white-space: nowrap !important;
        font-size: 9px !important;
        line-height: 1.05 !important;
      }

      .home-favorites-section .favorite-end {
        width: 50px !important;
        min-width: 50px !important;
        height: 48px !important;
        display: grid !important;
        grid-template-rows: 26px 14px !important;
        align-content: center !important;
        justify-items: center !important;
        gap: 2px !important;
      }

      .home-favorites-section .favorite-quick-action {
        width: 40px !important;
        height: 24px !important;
        margin: 0 !important;
      }

      .home-favorites-section .favorite-end-state {
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

      .home-favorites-section .favorite-info-state {
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

      .sidebar .area-button.home-button {
        background: color-mix(in srgb, var(--secondary-background-color) 72%, var(--card-background-color)) !important;
        border: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, var(--divider-color)) !important;
        box-shadow: 0 5px 12px rgba(15, 23, 42, 0.05) !important;
      }

      .sidebar .area-button.home-button.selected {
        background: color-mix(in srgb, var(--primary-color) 14%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 38%, var(--divider-color)) !important;
        box-shadow:
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 10%, transparent),
          0 8px 18px color-mix(in srgb, var(--primary-color) 10%, transparent) !important;
      }
    }

    .room-favorites-header {
      min-height: 38px !important;
      height: 38px !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      display: flex !important;
      align-items: center !important;
    }

    .room-favorites-title {
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
    .room-favorites-title .room-domain-icon {
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

    .room-favorites-title .mobile-domain-leading-chevron {
      --mdc-icon-size: 16px !important;
    }

    .room-favorites-title .room-favorites-icon ha-icon {
      --mdc-icon-size: 18px !important;
    }

    .room-favorites-title .mobile-domain-title-copy {
      min-height: 20px !important;
      height: 20px !important;
      display: inline-flex !important;
      align-items: center !important;
      gap: 5px !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .room-favorites-title .mobile-domain-title-label,
    .room-favorites-title .mobile-domain-count {
      min-height: 20px !important;
      height: 20px !important;
      display: inline-flex !important;
      align-items: center !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 20px !important;
      transform: translateY(0.5px) !important;
    }

    .room-favorites-title .mobile-domain-title-label {
      font-size: 15px !important;
    }

    .room-favorites-title .mobile-domain-count {
      font-size: 10px !important;
    }


    /* 2026-09 Home polish: readable favorites, clear Home state, exact Favorites header alignment. */
    @media (min-width: 769px) {
      .home-favorites-section .favorites-grid {
        grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)) !important;
        gap: 10px !important;
      }

      .home-favorites-section .favorite-card-wrapper {
        min-height: 86px !important;
        height: auto !important;
        padding: 10px 12px !important;
        display: grid !important;
        grid-template-columns: 40px minmax(0, 1fr) auto !important;
        align-items: center !important;
        gap: 10px !important;
      }

      .home-favorites-section .favorite-icon {
        width: 40px !important;
        height: 40px !important;
        margin: 0 !important;
        align-self: center !important;
      }

      .home-favorites-section .favorite-body {
        min-width: 0 !important;
        overflow: visible !important;
        align-self: center !important;
        gap: 3px !important;
      }

      .home-favorites-section .favorite-name,
      .home-favorites-section .favorite-area {
        max-width: 100% !important;
        display: block !important;
        overflow: visible !important;
        text-overflow: clip !important;
        white-space: normal !important;
        overflow-wrap: anywhere !important;
        -webkit-line-clamp: unset !important;
        -webkit-box-orient: initial !important;
      }

      .home-favorites-section .favorite-name {
        margin: 0 !important;
        font-size: 13px !important;
        line-height: 1.12 !important;
      }

      .home-favorites-section .favorite-area {
        margin: 0 !important;
        font-size: 10px !important;
        line-height: 1.12 !important;
      }

      .home-favorites-section .favorite-end {
        width: auto !important;
        min-width: 0 !important;
        height: auto !important;
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: flex-end !important;
        gap: 8px !important;
      }

      .home-favorites-section .favorite-end-state {
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

      .home-favorites-section .favorite-quick-action {
        width: 40px !important;
        height: 24px !important;
        margin: 0 !important;
        flex: 0 0 auto !important;
      }

      .home-favorites-section .favorite-info-state {
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

      .sidebar .area-button.home-button {
        background: color-mix(in srgb, var(--primary-color) 9%, var(--secondary-background-color)) !important;
        border: 1px solid color-mix(in srgb, var(--primary-color) 22%, var(--divider-color)) !important;
        box-shadow: 0 5px 12px rgba(15, 23, 42, 0.045) !important;
      }

      .sidebar .area-button.home-button.selected {
        background: color-mix(in srgb, var(--primary-color) 20%, var(--card-background-color)) !important;
        border-color: color-mix(in srgb, var(--primary-color) 46%, var(--divider-color)) !important;
        box-shadow:
          inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 12%, transparent),
          0 8px 18px color-mix(in srgb, var(--primary-color) 10%, transparent) !important;
      }
    }

    .room-favorites-header {
      min-height: 40px !important;
      height: 40px !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      display: flex !important;
      align-items: center !important;
    }

    .room-favorites-title,
    .room-favorites-title .mobile-domain-title-copy {
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

    .room-favorites-title {
      gap: 6px !important;
    }

    .room-favorites-title .mobile-domain-title-copy {
      gap: 5px !important;
    }

    .room-favorites-title .mobile-domain-leading-chevron,
    .room-favorites-title .room-domain-icon {
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
    .room-favorites-title .mobile-domain-count {
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
      .room-favorites-content .favorites-grid {
        grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
        gap: 8px !important;
      }

      .home-favorites-section .favorite-card-wrapper,
      .room-favorites-content .favorite-card-wrapper {
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
      .room-favorites-content .favorite-icon {
        width: 36px !important;
        height: 36px !important;
        margin: 0 !important;
        align-self: center !important;
        border-radius: 8px !important;
      }

      .home-favorites-section .favorite-icon ha-icon,
      .room-favorites-content .favorite-icon ha-icon {
        --mdc-icon-size: 19px !important;
      }

      .home-favorites-section .favorite-body,
      .room-favorites-content .favorite-body {
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
      .room-favorites-content .favorite-name {
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
      .room-favorites-content .favorite-meta {
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
      .room-favorites-content .favorite-area {
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
      .room-favorites-content .favorite-meta-separator {
        flex: 0 0 auto !important;
        color: color-mix(in srgb, var(--secondary-text-color) 72%, transparent) !important;
      }

      .home-favorites-section .favorite-inline-state,
      .room-favorites-content .favorite-inline-state {
        flex: 0 0 auto !important;
        color: var(--favorite-color) !important;
        font-weight: 850 !important;
      }

      .home-favorites-section .favorite-card-wrapper.is-off .favorite-inline-state,
      .home-favorites-section .favorite-card-wrapper.is-idle .favorite-inline-state,
      .room-favorites-content .favorite-card-wrapper.is-off .favorite-inline-state,
      .room-favorites-content .favorite-card-wrapper.is-idle .favorite-inline-state {
        color: var(--secondary-text-color) !important;
      }

      .home-favorites-section .favorite-card-wrapper.favorite-cover,
      .room-favorites-content .favorite-card-wrapper.favorite-cover {
        --favorite-color: #D66A1F !important;
      }

      .home-favorites-section .favorite-end,
      .room-favorites-content .favorite-end {
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
      .room-favorites-content .favorite-quick-action {
        width: 38px !important;
        height: 22px !important;
        margin: 0 !important;
      }

      .favorite-cover-actions {
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

      .favorite-cover-action {
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

      .favorite-cover-action ha-icon { --mdc-icon-size: 15px; }

      .favorite-cover-action.active {
        color: #fff;
        background: var(--favorite-color);
      }

      .room-ui-v2 .mobile-entity-rail,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        gap: 8px !important;
      }

      .room-ui-v2 .mobile-entity-card,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-card {
        min-height: 62px !important;
        padding: 8px 10px !important;
        justify-content: center !important;
        overflow: hidden !important;
      }

      .room-ui-v2 .mobile-entity-card.has-light-controls,
      .room-ui-v2 .mobile-entity-card.has-cover-position {
        min-height: 104px !important;
        justify-content: flex-start !important;
      }

      .room-ui-v2 .mobile-entity-main {
        grid-template-columns: 36px minmax(0, 1fr) auto !important;
        gap: 9px !important;
        align-items: center !important;
      }

      .room-ui-v2 .mobile-entity-content {
        min-width: 0 !important;
        height: 36px !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        gap: 3px !important;
        overflow: hidden !important;
      }

      .room-ui-v2 .mobile-entity-name {
        min-width: 0 !important;
        width: 100% !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
        font-size: 12px !important;
        line-height: 1.08 !important;
        letter-spacing: -0.1px !important;
      }

      .room-ui-v2 .mobile-entity-state {
        margin: 0 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
        font-size: 10.5px !important;
        font-weight: 800 !important;
        line-height: 1 !important;
      }

      .room-ui-v2 .mobile-entity-right {
        min-width: max-content !important;
        max-width: 86px !important;
        margin-left: 4px !important;
        align-self: center !important;
      }

      .room-ui-v2 .mobile-entity-cover {
        --entity-color: #D66A1F !important;
      }

      .room-ui-v2 .mobile-cover-actions {
        min-height: 30px !important;
        padding: 2px !important;
        gap: 2px !important;
      }

      .room-ui-v2 .mobile-cover-action {
        width: 25px !important;
        height: 25px !important;
      }

      .mobile-light-control-row {
        width: 100%;
        min-width: 0;
        margin-top: 8px;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        align-items: center;
        gap: 8px;
      }

      .mobile-light-mode-buttons {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .mobile-light-mode-button {
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

      .mobile-light-mode-button ha-icon { --mdc-icon-size: 16px; }

      .mobile-light-mode-button.active {
        color: var(--entity-color);
        background: color-mix(in srgb, var(--entity-color) 15%, var(--card-background-color));
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--entity-color) 24%, transparent);
      }

      .mobile-light-control-slider,
      .mobile-cover-position input[type="range"] {
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

      .mobile-light-control-row.mode-brightness .mobile-light-control-slider {
        background: linear-gradient(90deg, #e1a129 0%, #f0bd45 100%);
      }

      .mobile-light-control-row.mode-color_temp .mobile-light-control-slider {
        background: linear-gradient(90deg, #f4a340 0%, #ffe4aa 43%, #d9ecff 66%, #7eb9ff 100%);
      }

      .mobile-light-control-row.mode-color .mobile-light-control-slider {
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
      .mobile-cover-position input[type="range"]::-webkit-slider-thumb {
        appearance: none;
        width: 15px;
        height: 15px;
        border: 2px solid var(--entity-color);
        border-radius: 50%;
        background: var(--card-background-color);
        box-shadow: 0 2px 5px rgba(15, 23, 42, 0.12);
      }

      .mobile-light-control-slider::-moz-range-thumb,
      .mobile-cover-position input[type="range"]::-moz-range-thumb {
        width: 13px;
        height: 13px;
        border: 2px solid var(--entity-color);
        border-radius: 50%;
        background: var(--card-background-color);
      }

      .mobile-cover-position {
        width: 100%;
        margin-top: 10px;
      }

      .mobile-cover-position input[type="range"] {
        background: linear-gradient(90deg, #D66A1F 0%, #E98A3B 100%) !important;
      }

      .mobile-entity-brightness {
        display: none !important;
      }
    }


    /* 2026-09-30 entity-card refinements */
    @media (min-width: 769px) {
      /* Favorites: identical component in Home and room header; use every pixel for text. */
      .home-favorites-section .favorite-card-wrapper,
      .header-favorites .favorite-card-wrapper,
      .room-favorites-content .favorite-card-wrapper {
        grid-template-columns: 32px minmax(0, 1fr) auto !important;
        gap: 5px !important;
        padding: 6px 7px !important;
      }

      .home-favorites-section .favorite-icon,
      .header-favorites .favorite-icon,
      .room-favorites-content .favorite-icon {
        width: 32px !important;
        height: 32px !important;
      }

      .home-favorites-section .favorite-body,
      .header-favorites .favorite-body,
      .room-favorites-content .favorite-body {
        height: 32px !important;
        gap: 2px !important;
      }

      .home-favorites-section .favorite-name,
      .header-favorites .favorite-name,
      .room-favorites-content .favorite-name {
        font-size: 10px !important;
        letter-spacing: -0.2px !important;
      }

      .home-favorites-section .favorite-name.is-long,
      .header-favorites .favorite-name.is-long,
      .room-favorites-content .favorite-name.is-long {
        font-size: 9px !important;
        letter-spacing: -0.28px !important;
      }

      .home-favorites-section .favorite-name.is-very-long,
      .header-favorites .favorite-name.is-very-long,
      .room-favorites-content .favorite-name.is-very-long {
        font-size: 8px !important;
        letter-spacing: -0.32px !important;
      }

      .home-favorites-section .favorite-meta,
      .header-favorites .favorite-meta,
      .room-favorites-content .favorite-meta {
        font-size: 8.7px !important;
        gap: 2px !important;
      }

      .home-favorites-section .favorite-quick-action,
      .header-favorites .favorite-quick-action,
      .room-favorites-content .favorite-quick-action {
        width: 36px !important;
        height: 21px !important;
      }

      .home-favorites-section .favorite-end,
      .header-favorites .favorite-end,
      .room-favorites-content .favorite-end {
        height: 32px !important;
        margin-left: 2px !important;
      }

      .header-favorites .favorites-grid,
      .room-favorites-content .favorites-grid {
        grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
        gap: 8px !important;
      }

      /* Light controls: only rendered while ON. Keep cards compact and place icons after slider. */
      .room-ui-v2 .mobile-entity-card.has-light-controls,
      .room-ui-v2 .mobile-entity-card.has-cover-position {
        min-height: 94px !important;
        padding-bottom: 6px !important;
      }

      .mobile-light-control-row {
        margin-top: 6px !important;
        grid-template-columns: minmax(0, 1fr) auto !important;
        gap: 7px !important;
      }

      .mobile-light-mode-buttons {
        order: 2;
        gap: 3px !important;
      }

      .mobile-light-control-slider {
        order: 1;
      }

      .mobile-light-mode-button {
        width: 27px !important;
        height: 27px !important;
      }

      /* Slightly stronger sliders/thumbs for lights and covers. */
      .mobile-light-control-slider,
      .mobile-cover-position input[type="range"] {
        height: 6px !important;
      }

      .mobile-light-control-slider::-webkit-slider-thumb,
      .mobile-cover-position input[type="range"]::-webkit-slider-thumb {
        width: 16px !important;
        height: 16px !important;
      }

      .mobile-light-control-slider::-moz-range-thumb,
      .mobile-cover-position input[type="range"]::-moz-range-thumb {
        width: 14px !important;
        height: 14px !important;
      }

      .mobile-cover-position {
        margin-top: 7px !important;
      }

      /* A cover percentage describes the open position, so fill from the left up to that value. */
      .mobile-cover-position input[type="range"] {
        background: linear-gradient(
          90deg,
          #D66A1F 0%,
          #D66A1F var(--cover-position),
          color-mix(in srgb, var(--primary-text-color) 13%, transparent) var(--cover-position),
          color-mix(in srgb, var(--primary-text-color) 13%, transparent) 100%
        ) !important;
      }

      /* Select/input-select: keep the entity icon in its normal slot and the chevron inside the select. */
      .room-ui-v2 .mobile-entity-card.has-inline-select {
        min-height: 102px !important;
        padding: 8px 10px 7px !important;
        justify-content: flex-start !important;
        gap: 6px !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-main {
        width: 100% !important;
        align-items: center !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon {
        position: static !important;
        inset: auto !important;
        transform: none !important;
        align-self: center !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-content {
        margin-top: 0 !important;
        align-self: center !important;
      }

      .room-ui-v2 .mobile-entity-select {
        position: relative !important;
        width: 100% !important;
        margin-top: 2px !important;
      }

      .room-ui-v2 .mobile-entity-select .mobile-select-chevron {
        position: absolute !important;
        top: 50% !important;
        right: 11px !important;
        left: auto !important;
        bottom: auto !important;
        margin: 0 !important;
        transform: translateY(-50%) !important;
        --mdc-icon-size: 16px !important;
        pointer-events: none !important;
      }
    }


    /* 2026-10-01 entity/favorites refinement: compact vertical rhythm and clean controls. */
    @media (min-width: 769px) {
      /* Room entity cards: slightly larger content with symmetric 10px inner spacing. */
      .room-ui-v2 .mobile-entity-card,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-card {
        min-height: 60px !important;
        padding: 10px !important;
        box-sizing: border-box !important;
      }

      .room-ui-v2 .mobile-entity-main {
        min-height: 38px !important;
        align-items: center !important;
      }

      .room-ui-v2 .mobile-entity-icon {
        width: 38px !important;
        height: 38px !important;
      }

      .room-ui-v2 .mobile-entity-content {
        height: 38px !important;
      }

      /* Expanded control cards: vertical spacing above and below the control row is equal. */
      .room-ui-v2 .mobile-entity-card.has-light-controls,
      .room-ui-v2 .mobile-entity-card.has-cover-position {
        min-height: 0 !important;
        height: auto !important;
        padding: 8px 10px !important;
        justify-content: flex-start !important;
      }

      .room-ui-v2 .mobile-entity-card.has-light-controls .mobile-entity-main,
      .room-ui-v2 .mobile-entity-card.has-cover-position .mobile-entity-main {
        min-height: 38px !important;
      }

      .mobile-light-control-row {
        margin-top: 8px !important;
        margin-bottom: 0 !important;
        min-height: 27px !important;
        align-items: center !important;
      }

      .mobile-light-control-slider,
      .mobile-cover-position input[type="range"] {
        height: 8px !important;
      }

      .mobile-light-control-slider::-webkit-slider-runnable-track,
      .mobile-cover-position input[type="range"]::-webkit-slider-runnable-track {
        height: 8px !important;
        border-radius: 999px !important;
      }

      .mobile-light-control-slider::-moz-range-track,
      .mobile-cover-position input[type="range"]::-moz-range-track {
        height: 8px !important;
        border-radius: 999px !important;
      }

      .mobile-light-control-slider::-moz-range-progress {
        height: 8px !important;
        border-radius: 999px !important;
      }

      .mobile-cover-position {
        margin-top: 8px !important;
        margin-bottom: 0 !important;
        min-height: 8px !important;
      }

      .mobile-cover-position input[type="range"] {
        display: block !important;
      }

      /* Select cards: the entity icon stays in the same 38px icon container as every other entity. */
      .room-ui-v2 .mobile-entity-card.has-inline-select {
        min-height: 102px !important;
        height: auto !important;
        padding: 8px 10px !important;
        gap: 6px !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-main {
        min-height: 38px !important;
        grid-template-columns: 38px minmax(0, 1fr) !important;
        gap: 9px !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon {
        width: 38px !important;
        height: 38px !important;
        flex: 0 0 38px !important;
        position: static !important;
        inset: auto !important;
        transform: none !important;
        align-self: center !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon ha-icon {
        --mdc-icon-size: 20px !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-right {
        display: none !important;
      }

      /* Favorites: same compact rhythm on Home and in rooms. */
      .home-favorites-section .favorites-header {
        margin-bottom: 8px !important;
      }

      .home-favorites-section .favorites-grid {
        overflow: visible !important;
        padding: 2px 0 4px !important;
      }

      .home-favorites-section .favorites-section,
      .home-favorites-section .favorite-card-wrapper,
      .room-favorites-content .favorites-section,
      .room-favorites-content .favorite-card-wrapper {
        overflow: visible !important;
      }

      .room-favorites-content {
        padding-top: 2px !important;
      }

      .home-favorites-section .favorite-card-wrapper,
      .room-favorites-content .favorite-card-wrapper {
        overflow: visible !important;
      }

      /* A value-only favorite uses exactly the same visual slot as the light toggle. */
      .home-favorites-section .favorite-status-pill,
      .room-favorites-content .favorite-status-pill {
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
      .room-favorites-content .favorite-end {
        min-width: 38px !important;
      }

      /* With a toggle, the area line is the only secondary text; no duplicate state. */
      .home-favorites-section .favorite-meta,
      .room-favorites-content .favorite-meta {
        gap: 0 !important;
      }

      /* Keep the same title-to-card distance as the other generated entity groups. */
      .room-favorites-content .favorites-grid {
        padding-top: 2px !important;
      }

      /* Preserve the shadow around the Home cards instead of clipping it at the card edge. */
      .home-favorites-section .favorite-card-wrapper,
      .room-favorites-content .favorite-card-wrapper {
        clip-path: none !important;
      }
    }


    /* 2026-10-01: restore the 1.9.0 slider geometry and final room/home rhythm. */
    @media (min-width: 769px) {
      .mobile-light-control-slider,
      .mobile-cover-position input[type="range"] {
        height: 5px !important;
      }

      .mobile-light-control-slider::-webkit-slider-runnable-track,
      .mobile-cover-position input[type="range"]::-webkit-slider-runnable-track {
        height: 5px !important;
        border-radius: 999px !important;
      }

      .mobile-light-control-slider::-moz-range-track,
      .mobile-cover-position input[type="range"]::-moz-range-track {
        height: 5px !important;
        border-radius: 999px !important;
      }

      .mobile-light-control-slider::-moz-range-progress {
        height: 5px !important;
        border-radius: 999px !important;
      }

      .mobile-light-control-slider::-webkit-slider-thumb,
      .mobile-cover-position input[type="range"]::-webkit-slider-thumb {
        width: 15px !important;
        height: 15px !important;
      }

      .mobile-light-control-slider::-moz-range-thumb,
      .mobile-cover-position input[type="range"]::-moz-range-thumb {
        width: 13px !important;
        height: 13px !important;
      }

      /* One tall entity must not stretch its siblings; all cards stay top-aligned. */
      .room-ui-v2 .mobile-entity-rail,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
        align-items: start !important;
      }

      .room-ui-v2 .mobile-entity-card,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-card {
        align-self: start !important;
      }

      /* Favorites sit close to their header, with the same compact rhythm as entity groups. */
      .home-favorites-section {
        overflow: visible !important;
      }

      .home-favorites-section .favorites-header {
        margin-bottom: 6px !important;
      }

      .home-favorites-section .favorites-grid,
      .room-favorites-content .favorites-grid {
        padding-top: 0 !important;
        overflow: visible !important;
      }

      .home-favorites-section .favorite-card-wrapper,
      .room-favorites-content .favorite-card-wrapper {
        overflow: visible !important;
      }

      /* One consistent light-orange cover color for blinds, shading and gates. */
      .room-ui-v2 .mobile-entity-cover,
      .home-favorites-section .favorite-card-wrapper.favorite-cover,
      .room-favorites-content .favorite-card-wrapper.favorite-cover {
        --entity-color: #E98A3B !important;
        --favorite-color: #E98A3B !important;
      }
    }


    /* 2026-10-01: restore 1.9.0 controls + final favorites spacing/shadows. */
    @media (min-width: 769px) {
      /*
       * Keep the 1.9.6 implementation code available, but do not render the
       * added light sliders/mode buttons or the cover-position slider.
       * This restores the visible control behavior of 1.9.0:
       * lights = normal toggle, covers = open/stop/close buttons.
       */

      .room-favorites-block:not(.is-collapsed) .room-favorites-header {
        margin-bottom: 2px !important;
      }

      .room-favorites-content,
      .room-favorites-content .favorites-grid {
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
      .home-view .home-favorites-section .favorite-card-wrapper {
        overflow: visible !important;
      }

      .home-view .home-favorites-section .favorite-card-wrapper {
        clip-path: none !important;
      }
    }

    /* 2026-10-01: definitive room-grid/favorite spacing pass. */
    @media (min-width: 769px) {
      /*
       * Slider geometry: use the original 5px track / 15px thumb geometry
       * used by the first light-control implementation. Do not change the
       * control layout here; only restore the slider proportions.
       */
      .room-ui-v2 .mobile-light-control-slider,
      .room-ui-v2 .mobile-cover-position input[type="range"] {
        height: 5px !important;
      }

      .room-ui-v2 .mobile-light-control-slider::-webkit-slider-runnable-track,
      .room-ui-v2 .mobile-cover-position input[type="range"]::-webkit-slider-runnable-track {
        height: 5px !important;
        min-height: 5px !important;
        max-height: 5px !important;
        border-radius: 999px !important;
      }

      .room-ui-v2 .mobile-light-control-slider::-moz-range-track,
      .room-ui-v2 .mobile-cover-position input[type="range"]::-moz-range-track {
        height: 5px !important;
        min-height: 5px !important;
        max-height: 5px !important;
        border-radius: 999px !important;
      }

      .room-ui-v2 .mobile-light-control-slider::-moz-range-progress {
        height: 5px !important;
        min-height: 5px !important;
        max-height: 5px !important;
        border-radius: 999px !important;
      }

      .room-ui-v2 .mobile-light-control-slider::-webkit-slider-thumb,
      .room-ui-v2 .mobile-cover-position input[type="range"]::-webkit-slider-thumb {
        width: 15px !important;
        height: 15px !important;
      }

      .room-ui-v2 .mobile-light-control-slider::-moz-range-thumb,
      .room-ui-v2 .mobile-cover-position input[type="range"]::-moz-range-thumb {
        width: 13px !important;
        height: 13px !important;
      }

      /*
       * A tall card must not define the height of its siblings.
       * Explicitly size grid rows to content and opt every entity card out
       * of the grid's default stretch behaviour.
       */
      .room-ui-v2 .mobile-entity-rail,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
        align-items: start !important;
        grid-auto-rows: max-content !important;
      }

      .room-ui-v2 .mobile-entity-rail > .mobile-entity-card,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail > .mobile-entity-card {
        align-self: start !important;
        height: fit-content !important;
      }

      .room-ui-v2 .mobile-entity-card.has-light-controls,
      .room-ui-v2 .mobile-entity-card.has-cover-position {
        height: auto !important;
      }

      /*
       * Favorites: the room header has its own 6px content padding, which
       * doubled the intended header-to-card distance. Remove only that
       * top padding; the other insets remain unchanged.
       */
      .room-favorites-content {
        padding-top: 0 !important;
      }

      .room-favorites-content .favorites-grid {
        padding-top: 0 !important;
      }

      .home-favorites-section .favorites-header {
        margin-bottom: 6px !important;
      }
    }

    /* 2026-10-01: match the 1.9.0 favorite spacing and shadow behavior. */
    @media (min-width: 769px) {
      .room-ui-v2 .room-favorites-block:not(.is-collapsed) .room-favorites-header {
        margin-bottom: 0 !important;
      }

      /* Home favorites must not use paint containment, otherwise their card shadows are clipped. */
      .home-favorites-section {
        content-visibility: visible !important;
        contain: layout style !important;
        overflow: visible !important;
      }

      .home-favorites-section .favorites-grid,
      .home-favorites-section .favorite-card-wrapper {
        overflow: visible !important;
      }
    }

    /* 2026-10-01: Favorites spacing and Home card-shadow fix. */
    @media (min-width: 769px) {
      /* Cards directly follow the room Favorites header. */
      .room-favorites-block:not(.is-collapsed) .room-favorites-header {
        margin-bottom: 0 !important;
      }
      .room-favorites-content,
      .room-favorites-content .favorites-grid {
        padding-top: 0 !important;
      }

      /* Home Favorites: keep individual card shadows visible, as on room pages. */
      .home-favorites-section,
      .home-favorites-section .favorites-grid,
      .home-favorites-section .favorites-section {
        overflow: visible !important;
      }
      .home-favorites-section .favorite-card-wrapper {
        overflow: visible !important;
        clip-path: none !important;
      }
    }


    /* 2026-10-01: Home favorites should match the room-card shadow treatment. */
    @media (min-width: 769px) {
      .home-favorites-section .favorites-header {
        margin-bottom: 0 !important;
      }

      .home-favorites-section .favorites-grid {
        margin-top: 0 !important;
        padding-top: 0 !important;
      }

      /* Do not let Home-section paint/content containment clip card shadows. */
      .home-favorites-section {
        content-visibility: visible !important;
        contain: none !important;
        overflow: visible !important;
      }

      .home-favorites-section .favorites-grid {
        overflow: visible !important;
      }

      .home-favorites-section .favorite-card-wrapper {
        contain: layout style !important;
        overflow: visible !important;
      }
    }


    /* 2026-10-01: Home favorites should match the room-card shadow treatment. */
    @media (min-width: 769px) {
      .home-favorites-section .favorites-header {
        margin-bottom: 0 !important;
      }

      .home-favorites-section .favorites-grid {
        margin-top: 0 !important;
        padding-top: 0 !important;
      }

      .home-favorites-section {
        content-visibility: visible !important;
        contain: none !important;
        overflow: visible !important;
      }

      .home-favorites-section .favorites-grid {
        overflow: visible !important;
      }

      .home-favorites-section .favorite-card-wrapper {
        contain: layout style !important;
        overflow: visible !important;
      }
    }

    /* 2026-10-01: desktop room/entity scale — 20% larger, four columns. */
    @media (min-width: 769px) {
      /* Keep four columns. The available desktop width is used for wider cards. */
      .room-ui-v2 .mobile-entity-rail,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        gap: 10px !important;
      }

      .room-ui-v2 .mobile-entity-card,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-card {
        min-height: 72px !important;
        padding: 12px !important;
        border-radius: 10px !important;
        box-sizing: border-box !important;
      }

      .room-ui-v2 .mobile-entity-main {
        min-height: 46px !important;
        grid-template-columns: 46px minmax(0, 1fr) auto !important;
        gap: 11px !important;
      }

      .room-ui-v2 .mobile-entity-main.editing-inline {
        grid-template-columns: 29px 46px minmax(0, 1fr) 42px !important;
        gap: 8px !important;
      }

      .room-ui-v2 .mobile-entity-icon {
        width: 46px !important;
        height: 46px !important;
        border-radius: 10px !important;
      }

      .room-ui-v2 .mobile-entity-icon ha-icon {
        --mdc-icon-size: 24px !important;
      }

      .room-ui-v2 .mobile-entity-content {
        height: 46px !important;
        gap: 3px !important;
      }

      .room-ui-v2 .mobile-entity-name {
        font-size: 14.4px !important;
        line-height: 1.15 !important;
      }

      .room-ui-v2 .mobile-entity-state {
        font-size: 12.7px !important;
        line-height: 1.1 !important;
      }

      .room-ui-v2 .mobile-entity-right {
        gap: 5px !important;
        max-width: 104px !important;
      }

      .room-ui-v2 .mobile-entity-toggle {
        width: 46px !important;
        height: 27px !important;
      }

      .room-ui-v2 .mobile-entity-toggle::before {
        width: 21px !important;
        height: 21px !important;
        margin-left: 3px !important;
      }

      .room-ui-v2 .mobile-entity-card.is-active .mobile-entity-toggle::before {
        transform: translateX(19px) !important;
      }

      .room-ui-v2 .mobile-entity-card.has-light-controls,
      .room-ui-v2 .mobile-entity-card.has-cover-position {
        min-height: 112px !important;
        padding: 9px 12px !important;
      }

      .room-ui-v2 .mobile-entity-card.has-light-controls .mobile-entity-main,
      .room-ui-v2 .mobile-entity-card.has-cover-position .mobile-entity-main {
        min-height: 46px !important;
      }

      .room-ui-v2 .mobile-light-control-row {
        margin-top: 9px !important;
        min-height: 32px !important;
      }

      .room-ui-v2 .mobile-light-control-slider,
      .room-ui-v2 .mobile-cover-position input[type="range"] {
        height: 6px !important;
      }

      .room-ui-v2 .mobile-light-control-slider::-webkit-slider-runnable-track,
      .room-ui-v2 .mobile-cover-position input[type="range"]::-webkit-slider-runnable-track,
      .room-ui-v2 .mobile-light-control-slider::-moz-range-track,
      .room-ui-v2 .mobile-cover-position input[type="range"]::-moz-range-track,
      .room-ui-v2 .mobile-light-control-slider::-moz-range-progress {
        height: 6px !important;
      }

      .room-ui-v2 .mobile-light-control-slider::-webkit-slider-thumb,
      .room-ui-v2 .mobile-cover-position input[type="range"]::-webkit-slider-thumb {
        width: 18px !important;
        height: 18px !important;
      }

      .room-ui-v2 .mobile-light-control-slider::-moz-range-thumb,
      .room-ui-v2 .mobile-cover-position input[type="range"]::-moz-range-thumb {
        width: 16px !important;
        height: 16px !important;
      }

      .room-ui-v2 .mobile-light-mode-buttons { gap: 5px !important; }
      .room-ui-v2 .mobile-light-mode-button {
        width: 34px !important;
        height: 34px !important;
        border-radius: 9px !important;
      }
      .room-ui-v2 .mobile-light-mode-button ha-icon { --mdc-icon-size: 20px !important; }

      .room-ui-v2 .mobile-cover-actions {
        min-height: 36px !important;
        padding: 3px !important;
        gap: 3px !important;
      }
      .room-ui-v2 .mobile-cover-action { width: 31px !important; height: 31px !important; }
      .room-ui-v2 .mobile-cover-action ha-icon { --mdc-icon-size: 20px !important; }

      .room-ui-v2 .mobile-entity-card.has-inline-select {
        min-height: 123px !important;
        padding: 9px 12px !important;
        gap: 7px !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-main {
        min-height: 46px !important;
        grid-template-columns: 46px minmax(0, 1fr) !important;
        gap: 11px !important;
        align-items: center !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon {
        position: static !important;
        inset: auto !important;
        left: auto !important;
        right: auto !important;
        top: auto !important;
        bottom: auto !important;
        grid-column: 1 !important;
        grid-row: 1 !important;
        width: 46px !important;
        height: 46px !important;
        flex: 0 0 46px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        transform: none !important;
        color: var(--entity-color) !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon ha-icon {
        --mdc-icon-size: 24px !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-content {
        grid-column: 2 !important;
        grid-row: 1 !important;
        margin: 0 !important;
        align-self: center !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-right {
        display: none !important;
      }

      .room-ui-v2 .mobile-entity-select { margin-top: 3px !important; }
      .room-ui-v2 .mobile-entity-select select {
        height: 42px !important;
        padding: 0 42px 0 15px !important;
        font-size: 14.4px !important;
        line-height: 42px !important;
      }
      .room-ui-v2 .mobile-entity-select .mobile-select-chevron {
        right: 12px !important;
        --mdc-icon-size: 20px !important;
      }

      /* Sidebar room tiles: target the actual room tile class; do not override generic area buttons. */
      .sidebar .room-area-button {
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

      .sidebar .room-area-button .area-media {
        width: 89px !important;
        height: 89px !important;
        align-self: center !important;
      }
      .sidebar .room-area-button .area-media-icon {
        width: 89px !important;
        height: 89px !important;
      }
      .sidebar .room-area-button .area-media-icon ha-icon {
        --mdc-icon-size: 41px !important;
      }

      .sidebar .room-area-button .area-content {
        min-width: 0 !important;
        height: 100% !important;
        justify-content: center !important;
        gap: 8px !important;
      }
      .sidebar .room-area-button .area-name {
        font-size: 16.8px !important;
        line-height: 1.1 !important;
      }
      .sidebar .room-area-button .area-sensors {
        margin-top: 4px !important;
        font-size: 13.2px !important;
        line-height: 1.1 !important;
      }
      .sidebar .room-area-button .area-info-badges {
        gap: 5px !important;
        max-width: 100% !important;
        min-width: 0 !important;
        overflow: hidden !important;
      }
      .sidebar .room-area-button .info-badge {
        min-width: 32px !important;
        height: 25px !important;
        padding: 0 8px !important;
        font-size: 13px !important;
        flex: 0 0 auto !important;
      }
      .sidebar .room-area-button .info-badge ha-icon { --mdc-icon-size: 15px !important; }
      .sidebar .room-area-button .badge-count { font-size: 13px !important; }
      .sidebar .room-area-button .info-badge-overflow {
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

      /* Room header status badges: about 30% larger, including their own tile height. */
      .room-ui-v2 .room-header-summary {
        min-height: 24px !important;
        gap: 5px !important;
        align-items: center !important;
      }
      .room-ui-v2 .room-summary-item.status {
        min-height: 23px !important;
        padding: 3px 8px !important;
        gap: 4px !important;
        box-sizing: border-box !important;
        border-radius: 999px !important;
        font-size: 13px !important;
        line-height: 1 !important;
      }
      .room-ui-v2 .room-summary-item.status ha-icon { --mdc-icon-size: 18px !important; }
      .room-ui-v2 .room-header-copy {
        align-self: center !important;
        justify-content: center !important;
      }

      /* Lower room sections must use exactly the same outer width as the room header/favorites. */
      .room-ui-v2 .mobile-entities-section,
      .room-ui-v2 .mobile-domain-group {
        width: 100% !important;
        align-self: stretch !important;
        box-sizing: border-box !important;
      }

      /* Room-view time/weather: move the cluster slightly left and keep the Home weather treatment. */
      .global-header.room-context { padding-right: 20px !important; }
      .global-header.room-context .header-time-weather { gap: 6px !important; }
      .global-header.room-context .weather-compact {
        background: var(--secondary-background-color) !important;
        color: var(--primary-text-color) !important;
      }
      .global-header.room-context .weather-compact ha-icon { color: var(--primary-text-color) !important; }
    }
    /* 2026-10-01: desktop room-view follow-up — final scoped overrides. */
    @media (min-width: 769px) {
      /* The room content must span exactly the same available width as the global room header. */
      .area-view.room-ui-v2 {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        box-sizing: border-box !important;
      }
      .area-view.room-ui-v2 > .mobile-entities-section,
      .area-view.room-ui-v2 > .mobile-entities-section > .mobile-domain-group,
      .area-view.room-ui-v2 > .mobile-entities-section > .mobile-domain-group > .mobile-entity-rail {
        width: 100% !important;
        max-width: none !important;
        box-sizing: border-box !important;
      }

      /* Status badges: another ~30% increase over the previous room-view size. */
      .room-ui-v2 .room-header-summary {
        min-height: 30px !important;
        gap: 6px !important;
        align-items: center !important;
      }
      .room-ui-v2 .room-summary-item.status {
        min-height: 30px !important;
        padding: 5px 10px !important;
        gap: 5px !important;
        font-size: 14px !important;
        line-height: 1 !important;
        box-sizing: border-box !important;
      }
      .room-ui-v2 .room-summary-item.status ha-icon {
        --mdc-icon-size: 21px !important;
      }

      /* Select/input_select: strict two-row layout. Row 1 = icon + name; row 2 = selector. */
      .room-ui-v2 .mobile-entity-card.has-inline-select {
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) !important;
        grid-template-rows: 46px 42px !important;
        align-content: center !important;
        gap: 7px !important;
        min-height: 123px !important;
        height: auto !important;
        padding: 9px 12px !important;
        overflow: hidden !important;
      }
      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-main {
        grid-column: 1 !important;
        grid-row: 1 !important;
        width: 100% !important;
        min-width: 0 !important;
        min-height: 46px !important;
        height: 46px !important;
        display: grid !important;
        grid-template-columns: 46px minmax(0, 1fr) !important;
        gap: 11px !important;
        align-items: center !important;
        position: relative !important;
        z-index: 2 !important;
      }
      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon {
        position: static !important;
        inset: auto !important;
        grid-column: 1 !important;
        grid-row: 1 !important;
        width: 46px !important;
        height: 46px !important;
        min-width: 46px !important;
        min-height: 46px !important;
        margin: 0 !important;
        padding: 0 !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        align-self: center !important;
        transform: none !important;
        z-index: 3 !important;
      }
      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon ha-icon {
        --mdc-icon-size: 24px !important;
      }
      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-content {
        grid-column: 2 !important;
        grid-row: 1 !important;
        min-width: 0 !important;
        height: 46px !important;
        margin: 0 !important;
        align-self: center !important;
        justify-content: center !important;
      }
      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-right {
        display: none !important;
      }
      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-select {
        grid-column: 1 !important;
        grid-row: 2 !important;
        position: relative !important;
        width: 100% !important;
        height: 42px !important;
        min-height: 42px !important;
        margin: 0 !important;
        z-index: 1 !important;
      }
      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-select select {
        position: relative !important;
        z-index: 1 !important;
        width: 100% !important;
        height: 42px !important;
        box-sizing: border-box !important;
      }
      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-select-chevron {
        position: absolute !important;
        top: 50% !important;
        right: 12px !important;
        left: auto !important;
        bottom: auto !important;
        z-index: 2 !important;
        transform: translateY(-50%) !important;
      }

      /* Sidebar: reserve one slot for the ellipsis whenever badges are hidden. */
      .sidebar .room-area-button .area-info-badges {
        min-width: 0 !important;
        max-width: 100% !important;
        overflow: visible !important;
        flex-wrap: nowrap !important;
      }
      .sidebar .room-area-button .info-badge-overflow {
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
      .global-header.room-context {
        padding-right: 36px !important;
      }
      .global-header.room-context .header-time-weather {
        gap: 5px !important;
        transform: translateX(-2px) !important;
      }
      .global-header.room-context .weather-compact {
        background: var(--secondary-background-color) !important;
        color: var(--primary-text-color) !important;
        box-shadow: none !important;
      }
      .global-header.room-context .weather-compact .weather-icon-compact ha-icon {
        color: var(--primary-text-color) !important;
      }
    }
    /* 2026-10-01: header status carousel. */
    .header-status-section {
      position: relative;
      min-width: 0;
    }

    .header-status-section .header-status-scroll {
      min-width: 0;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
      scroll-behavior: smooth;
      overscroll-behavior-x: contain;
    }

    .header-status-section .header-status-scroll::-webkit-scrollbar {
      display: none;
    }

    .header-status-scroll-button {
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

    .header-status-scroll-button:hover {
      background: var(--secondary-background-color);
    }

    .header-status-scroll-button ha-icon {
      --mdc-icon-size: 17px;
    }

    .header-status-scroll-button-left {
      left: 2px;
    }

    .header-status-scroll-button-right {
      right: 2px;
    }

    .header-status-section.can-scroll-left .header-status-scroll {
      padding-left: 30px;
    }

    .header-status-section.can-scroll-right .header-status-scroll {
      padding-right: 30px;
    }

    .header-status-section.can-scroll-left.can-scroll-right .header-status-scroll {
      padding-left: 30px;
      padding-right: 30px;
    }

    .room-ui-v2 .room-header-summary {
      max-width: 100%;
      cursor: default;
      -webkit-overflow-scrolling: touch;
    }


    /* 2026-10-01: final responsive room/sidebar follow-up. */
    @media (min-width: 769px) {
      /* Room header media scales with the actual room-view width. */
      .room-ui-v2 .room-header {
        container-type: inline-size;
        grid-template-columns: clamp(150px, 20cqw, 220px) minmax(0, 1fr) auto auto !important;
        min-height: clamp(96px, 11cqw, 116px) !important;
      }

      .room-ui-v2 .room-header-media {
        width: 100% !important;
        height: clamp(80px, 9cqw, 104px) !important;
        min-height: 80px !important;
        max-height: 104px !important;
      }

      .room-ui-v2 .room-header-icon ha-icon {
        --mdc-icon-size: clamp(40px, 4.5cqw, 50px) !important;
      }

      /* Exactly five entity columns in the desktop room view. */
      .room-ui-v2 .mobile-entity-rail,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
        grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
      }

      /* Sidebar room tile and icon scale continuously with the tile width. */
      .sidebar .room-area-button {
        container-type: inline-size;
        grid-template-columns: clamp(64px, 30cqw, 110px) minmax(0, 1fr) !important;
        min-height: clamp(82px, 36cqw, 120px) !important;
        height: clamp(82px, 36cqw, 120px) !important;
        gap: clamp(8px, 3cqw, 12px) !important;
      }

      .sidebar .room-area-button .area-media,
      .sidebar .room-area-button .area-media-icon {
        width: 100% !important;
        height: 100% !important;
      }

      .sidebar .room-area-button .area-media-icon ha-icon {
        --mdc-icon-size: clamp(28px, 11cqw, 42px) !important;
      }

      /* The badge row uses the full remaining width; the TS calculation decides
         how many badges plus the overflow marker are rendered. */
      .sidebar .room-area-button .area-info-badges {
        width: 100% !important;
        max-width: none !important;
        display: flex !important;
        flex-wrap: nowrap !important;
        justify-content: flex-start !important;
        gap: 5px !important;
        overflow: hidden !important;
      }

      /* Status pills are about 30% larger than the previous room-view size. */
      .room-ui-v2 .room-header-summary {
        min-height: 39px !important;
        gap: 7px !important;
      }

      .room-ui-v2 .room-summary-item.status {
        min-height: 39px !important;
        padding: 5px 10px !important;
        gap: 5px !important;
        font-size: 16.9px !important;
        line-height: 1 !important;
        box-sizing: border-box !important;
      }

      .room-ui-v2 .room-summary-item.status ha-icon {
        --mdc-icon-size: 23px !important;
      }

      /* Keep room meta and favorites aligned with the right edge of the view. */
      .global-header.room-context .header-time-weather {
        margin-left: auto !important;
        justify-self: end !important;
      }

      .global-header.room-context .room-favorites-content .favorites-grid {
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }

    /* The room weather pill must not fall back to HA's neutral secondary background. */
    .global-header.room-context .weather-compact {
      background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
      color: var(--primary-color) !important;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 16%, transparent) !important;
    }

    .global-header.room-context .weather-compact .weather-icon-compact ha-icon {
      color: var(--primary-color) !important;
    }

    .global-header.room-context .weather-compact .weather-temp-compact {
      color: var(--primary-text-color) !important;
    }

    /* Selection lists: icon is always the leading element, on the left. */
    .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-main {
      direction: ltr !important;
      display: grid !important;
      grid-template-columns: 46px minmax(0, 1fr) !important;
      grid-template-areas: "icon content" !important;
      align-items: center !important;
    }

    .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon {
      grid-area: icon !important;
      justify-self: start !important;
      order: 0 !important;
    }

    .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-content {
      grid-area: content !important;
      min-width: 0 !important;
      order: 1 !important;
    }

    /* 2026-10-01: responsive room-view follow-up. */
    @media (min-width: 769px) {
      /* Room header media grows with the actual room-view width instead of staying at 142px. */
      .room-ui-v2 .room-header {
        container-type: inline-size;
        grid-template-columns: clamp(142px, 18cqw, 190px) minmax(0, 1fr) auto auto !important;
        min-height: clamp(96px, 10cqw, 112px) !important;
      }

      .room-ui-v2 .room-header-media {
        width: 100% !important;
        height: clamp(76px, 8cqw, 100px) !important;
        min-height: 76px !important;
        max-height: 100px !important;
      }

      .room-ui-v2 .room-header-icon ha-icon {
        --mdc-icon-size: clamp(38px, 4cqw, 48px) !important;
      }

      /* Room entity cards: exactly five columns on desktop. */
      .room-ui-v2 .mobile-entity-rail,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
        grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
      }

      /* Room status pills: 30% larger than the previous 30px version. */
      .room-ui-v2 .room-header-summary {
        min-height: 39px !important;
        gap: 7px !important;
      }

      .room-ui-v2 .room-summary-item.status {
        min-height: 39px !important;
        padding: 5px 10px !important;
        gap: 5px !important;
        font-size: 16.9px !important;
        line-height: 1 !important;
      }

      .room-ui-v2 .room-summary-item.status ha-icon {
        --mdc-icon-size: 23px !important;
      }
    }

    /* Weather should use the dashboard accent instead of the neutral gray pill. */
    .global-header .weather-compact {
      background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
      color: var(--primary-color) !important;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 16%, transparent) !important;
    }

    .global-header .weather-compact .weather-icon-compact ha-icon {
      color: var(--primary-color) !important;
    }

    .global-header .weather-compact .weather-temp-compact {
      color: var(--primary-text-color) !important;
    }

    /* Select/input_select cards: keep the entity icon explicitly in the leading slot. */
    .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-main {
      direction: ltr !important;
      grid-template-columns: 46px minmax(0, 1fr) !important;
    }

    .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon {
      grid-column: 1 !important;
      grid-row: 1 !important;
      order: 0 !important;
      justify-self: start !important;
      align-self: center !important;
    }

    .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-content {
      grid-column: 2 !important;
      grid-row: 1 !important;
      order: 1 !important;
      min-width: 0 !important;
    }

    .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-right {
      display: none !important;
    }

    /* Sidebar room tiles: badge overflow follows the continuously calculated width. */
    @media (min-width: 769px) {
      .sidebar .room-area-button .area-info-badges {
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
      /* Room header media grows with the available room-view width. */
      .room-ui-v2 .room-header {
        container-type: inline-size !important;
        grid-template-columns: clamp(150px, 20cqw, 220px) minmax(0, 1fr) auto auto !important;
        min-height: clamp(96px, 11cqw, 116px) !important;
      }

      .room-ui-v2 .room-header-media {
        width: 100% !important;
        height: clamp(80px, 9cqw, 104px) !important;
        min-height: 80px !important;
        max-height: 104px !important;
      }

      .room-ui-v2 .room-header-icon ha-icon {
        --mdc-icon-size: clamp(40px, 4.5cqw, 50px) !important;
      }

      /* Exactly five columns in the desktop room view. */
      .room-ui-v2 .mobile-entity-rail,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
        grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
      }

      /* Sidebar room tiles scale with their actual width. */
      .sidebar .room-area-button {
        container-type: inline-size !important;
        grid-template-columns: clamp(64px, 30cqw, 110px) minmax(0, 1fr) !important;
        min-height: clamp(82px, 36cqw, 120px) !important;
        height: clamp(82px, 36cqw, 120px) !important;
        gap: clamp(8px, 3cqw, 12px) !important;
      }

      .sidebar .room-area-button .area-media,
      .sidebar .room-area-button .area-media-icon {
        width: 100% !important;
        height: 100% !important;
      }

      .sidebar .room-area-button .area-media-icon ha-icon {
        --mdc-icon-size: clamp(28px, 11cqw, 42px) !important;
      }

      /* The TS calculation controls how many badges fit; CSS no longer caps the row. */
      .sidebar .room-area-button .area-info-badges {
        width: 100% !important;
        max-width: none !important;
        display: flex !important;
        flex-wrap: nowrap !important;
        justify-content: flex-start !important;
        gap: 5px !important;
        overflow: hidden !important;
      }

      /* The three room status pills are about 30% larger. */
      .room-ui-v2 .room-header-summary {
        min-height: 39px !important;
        gap: 7px !important;
      }

      .room-ui-v2 .room-summary-item.status {
        min-height: 39px !important;
        padding: 5px 10px !important;
        gap: 5px !important;
        font-size: 16.9px !important;
        line-height: 1 !important;
        box-sizing: border-box !important;
      }

      .room-ui-v2 .room-summary-item.status ha-icon {
        --mdc-icon-size: 23px !important;
      }

      /* Keep weather/time and favorites aligned to the right edge. */
      .global-header.room-context .header-time-weather {
        margin-left: auto !important;
        justify-self: end !important;
      }

      .global-header.room-context .room-favorites-content .favorites-grid {
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }

    /* Weather must keep the accent treatment; later room-specific rules must not turn it gray. */
    .global-header.room-context .weather-compact {
      background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color)) !important;
      color: var(--primary-color) !important;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 16%, transparent) !important;
    }

    .global-header.room-context .weather-compact .weather-icon-compact ha-icon {
      color: var(--primary-color) !important;
    }

    .global-header.room-context .weather-compact .weather-temp-compact {
      color: var(--primary-text-color) !important;
    }

    /* Selection-list icon is always the leading element on the left. */
    .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-main {
      direction: ltr !important;
      display: grid !important;
      grid-template-columns: 46px minmax(0, 1fr) !important;
      grid-template-areas: "icon content" !important;
      align-items: center !important;
    }

    .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon {
      grid-area: icon !important;
      justify-self: start !important;
      order: 0 !important;
    }

    .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-content {
      grid-area: content !important;
      min-width: 0 !important;
      order: 1 !important;
    }


    /* 2026-10-02: refine room tile proportions and unify weather styling. */
    @media (min-width: 769px) {
      /*
       * Room-header metric pills: keep the larger, readable sizing.
       */
      .room-ui-v2 .room-header .area-header-metrics {
        gap: 8px !important;
      }

      .room-ui-v2 .room-header .area-header-metric {
        min-width: 126px !important;
        min-height: 41px !important;
        padding: 5px 9px !important;
        gap: 6px !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-ring {
        width: 29px !important;
        height: 29px !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-label {
        font-size: 9px !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-reading {
        font-size: 13px !important;
      }

      /*
       * Keep the room-header image at the original 142:76 geometry.
       * The text stack next to it must fit inside the same 76px height.
       */
      .room-ui-v2 .room-header {
        grid-template-columns: 142px minmax(0, 1fr) auto auto !important;
        min-height: 96px !important;
      }

      .room-ui-v2 .room-header-media {
        width: 142px !important;
        height: 76px !important;
        min-width: 142px !important;
        min-height: 76px !important;
        max-width: 142px !important;
        max-height: 76px !important;
        aspect-ratio: 142 / 76 !important;
      }

      .room-ui-v2 .room-header-icon ha-icon {
        --mdc-icon-size: 38px !important;
      }

      .room-ui-v2 .room-header-copy {
        height: 76px !important;
        min-height: 0 !important;
        justify-content: center !important;
        gap: 2px !important;
        overflow: hidden !important;
      }

      .room-ui-v2 .room-header .area-title {
        font-size: 26px !important;
        line-height: 1 !important;
      }

      .room-ui-v2 .room-header-device-count {
        font-size: 10px !important;
        line-height: 1 !important;
      }

      /*
       * Room-view status badges: 20% smaller while keeping icon and count
       * centered as one unit. The complete name/count/badge stack stays
       * inside the 76px media height.
       */
      .room-ui-v2 .room-header-summary {
        min-height: 29px !important;
        height: 29px !important;
        gap: 6px !important;
        margin-top: 1px !important;
        overflow: hidden !important;
      }

      .room-ui-v2 .room-summary-item.status {
        min-height: 29px !important;
        height: 29px !important;
        padding: 3px 7px !important;
        gap: 4px !important;
        justify-content: center !important;
        font-size: 12px !important;
        line-height: 1 !important;
        box-sizing: border-box !important;
        flex: 0 0 auto !important;
      }

      .room-ui-v2 .room-summary-item.status ha-icon {
        --mdc-icon-size: 17px !important;
      }

      /*
       * Sidebar room tiles: make the card less cramped, but keep the media
       * slot fixed so resizing the sidebar never changes the room icon size.
       */
      .sidebar .room-area-button {
        container-type: normal !important;
        display: grid !important;
        grid-template-columns: 74px minmax(0, 1fr) !important;
        align-items: stretch !important;
        gap: 9px !important;
        min-height: 88px !important;
        height: 88px !important;
        padding: 7px !important;
      }

      .sidebar .room-area-button .area-media {
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

      .sidebar .room-area-button .area-media-icon {
        width: 74px !important;
        height: 74px !important;
      }

      .sidebar .room-area-button .area-media-icon ha-icon {
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
      .sidebar .room-area-button .area-content {
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

      .sidebar .room-area-button .area-top-section {
        min-width: 0 !important;
        width: 100% !important;
        margin: 0 !important;
        display: contents !important;
      }

      .sidebar .room-area-button .area-name,
      .sidebar .room-area-button.has-picture .area-name {
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
      .sidebar .room-area-button.has-picture .area-sensors {
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

      .sidebar .room-area-button .area-info-badges {
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
       * Sidebar badges: slightly larger than the previous version, with the
       * icon and count centered together.
       */
      .sidebar .room-area-button .info-badge,
      .sidebar .room-area-button.has-picture .info-badge {
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

      .sidebar .room-area-button .info-badge ha-icon {
        --mdc-icon-size: 10px !important;
      }

      .sidebar .room-area-button .badge-count {
        font-size: 9.5px !important;
        line-height: 1 !important;
      }

      .sidebar .room-area-button .info-badge-overflow {
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
      .global-header.room-context .weather-compact {
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
      .global-header.room-context .weather-compact .weather-icon-compact ha-icon {
        --mdc-icon-size: 18px !important;
        color: var(--primary-color) !important;
      }

      .global-header .weather-compact .weather-temp-compact,
      .global-header.room-context .weather-compact .weather-temp-compact {
        font-size: 13px !important;
        color: var(--primary-text-color) !important;
        line-height: 1 !important;
      }

      /*
       * Keep the corrected favorites icon column so favorite names cannot
       * overlap their icons.
       */
      .room-favorites-content .favorites-grid {
        grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
        gap: 8px !important;
        width: 100% !important;
      }

      .home-favorites-section .favorite-card-wrapper,
      .room-favorites-content .favorite-card-wrapper {
        grid-template-columns: 41px minmax(0, 1fr) auto !important;
      }

      .home-favorites-section .favorite-icon,
      .room-favorites-content .favorite-icon {
        width: 41px !important;
        height: 41px !important;
      }

      .home-favorites-section .favorite-icon ha-icon,
      .room-favorites-content .favorite-icon ha-icon {
        --mdc-icon-size: 22px !important;
      }

      .home-favorites-section .favorite-body,
      .room-favorites-content .favorite-body {
        height: 41px !important;
        min-width: 0 !important;
        overflow: hidden !important;
      }

      .home-favorites-section .favorite-name,
      .room-favorites-content .favorite-name {
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
      .room-favorites-content .favorite-area {
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
      .home-status-section .home-status-grid {
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

      .home-status-section .home-status-grid::-webkit-scrollbar {
        display: none !important;
      }

      .home-status-section.layout-grid .home-status-grid {
        display: grid !important;
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        align-items: stretch !important;
        gap: 10px !important;
        overflow: visible !important;
        scroll-snap-type: none !important;
      }

      .home-status-section .home-status-card.compact-status {
        flex: 0 0 118px !important;
        width: 118px !important;
        min-width: 118px !important;
        min-height: 102px !important;
        padding: 12px !important;
        border-radius: 15px !important;
      }

      .home-status-section.layout-grid .home-status-card.compact-status {
        width: 100% !important;
        min-width: 0 !important;
        min-height: 100px !important;
        flex: none !important;
      }

      .home-status-section .home-status-card.house-persons-card,
      .home-status-section .home-status-card.house-climate-card,
      .home-status-section .home-status-card.house-power-card {
        flex: 0 0 238px !important;
        width: 238px !important;
        min-width: 238px !important;
        min-height: 124px !important;
        padding: 13px !important;
      }

      .home-status-section.layout-grid .home-status-card.house-persons-card,
      .home-status-section.layout-grid .home-status-card.house-climate-card,
      .home-status-section.layout-grid .home-status-card.house-power-card {
        grid-column: 1 / -1 !important;
        width: 100% !important;
        min-width: 0 !important;
        flex: none !important;
      }

      .home-status-section .home-status-card.compact-status .status-card-icon {
        width: 38px !important;
        height: 38px !important;
        margin-bottom: 10px !important;
        border-radius: 11px !important;
      }

      .home-status-section .home-status-card.compact-status .status-card-icon ha-icon {
        --mdc-icon-size: 20px !important;
      }

      .home-status-section .home-status-card.compact-status .status-card-title {
        font-size: 13px !important;
        line-height: 1.12 !important;
      }

      .mobile-area-card {
        flex-basis: 148px !important;
        min-height: 116px !important;
        height: 116px !important;
        padding: 12px !important;
        border-radius: 16px !important;
      }

      .mobile-area-card.has-picture {
        min-height: 116px !important;
        height: 116px !important;
      }

      .mobile-home-section.layout-grid .mobile-area-card {
        height: 118px !important;
        min-height: 118px !important;
      }

      .mobile-area-icon {
        width: 38px !important;
        height: 38px !important;
        border-radius: 12px !important;
      }

      .mobile-area-icon ha-icon {
        --mdc-icon-size: 21px !important;
      }

      .mobile-area-badges {
        display: grid !important;
        grid-template-columns: repeat(2, max-content) !important;
        grid-auto-rows: 22px !important;
        justify-content: end !important;
        align-content: start !important;
        gap: 4px !important;
        max-width: 82px !important;
        overflow: visible !important;
      }

      .mobile-area-badge {
        min-width: 22px !important;
        height: 22px !important;
        padding: 0 6px !important;
        gap: 3px !important;
        font-size: 10px !important;
      }

      .mobile-area-badge ha-icon {
        --mdc-icon-size: 13px !important;
      }

      .mobile-area-name {
        font-size: 14px !important;
      }

      .mobile-area-meta {
        margin-top: 3px !important;
        font-size: 11px !important;
      }

      .home-favorites-section .favorite-card-wrapper {
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

      .home-favorites-section .favorite-icon {
        grid-column: 1 !important;
        grid-row: 1 !important;
        width: 38px !important;
        height: 38px !important;
        align-self: start !important;
        margin: 0 !important;
      }

      .home-favorites-section .favorite-icon ha-icon {
        --mdc-icon-size: 21px !important;
      }

      .home-favorites-section .favorite-body {
        grid-column: 2 !important;
        grid-row: 1 !important;
        min-width: 0 !important;
        align-self: start !important;
        padding-top: 1px !important;
      }

      .home-favorites-section .favorite-end {
        grid-column: 3 !important;
        grid-row: 1 !important;
        align-self: start !important;
        justify-self: end !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .home-favorites-section .favorite-name {
        margin-top: 0 !important;
        font-size: 14px !important;
        line-height: 1.08 !important;
      }

      .home-favorites-section .favorite-area {
        margin-top: 5px !important;
        font-size: 10px !important;
      }

      .sidebar .room-area-button {
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
      .sidebar .room-area-button .area-media-icon {
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

      .sidebar .room-area-button .area-media-icon ha-icon {
        --mdc-icon-size: 26px !important;
      }

      .sidebar .room-area-button .area-content {
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) auto !important;
        grid-template-rows: 1fr !important;
        align-items: center !important;
        gap: 8px !important;
        min-width: 0 !important;
        height: 100% !important;
      }

      .sidebar .room-area-button .area-top-section {
        grid-column: 1 !important;
        grid-row: 1 !important;
        min-width: 0 !important;
        margin: 0 !important;
        align-self: center !important;
      }

      .sidebar .room-area-button .area-name {
        margin: 0 !important;
        font-size: 15px !important;
        line-height: 1.08 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .sidebar .room-area-button .area-sensors {
        margin-top: 5px !important;
        font-size: 11.5px !important;
        line-height: 1.05 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .sidebar .room-area-button .area-info-badges {
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

      .sidebar .room-area-button .info-badge {
        min-width: 25px !important;
        height: 22px !important;
        padding: 0 7px !important;
        gap: 3px !important;
        font-size: 10.5px !important;
        box-sizing: border-box !important;
      }

      .sidebar .room-area-button .info-badge ha-icon {
        --mdc-icon-size: 13px !important;
      }

      .sidebar .room-area-button .badge-count {
        font-size: 10.5px !important;
      }

      .sidebar .room-area-button .info-badge-overflow {
        min-width: 22px !important;
        width: 22px !important;
        height: 22px !important;
        font-size: 16px !important;
      }

      .sidebar .room-area-button .area-menu-chevron {
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
      .sidebar .room-area-button {
        grid-template-columns: 74px minmax(0, 1fr) !important;
        min-height: 88px !important;
        height: 88px !important;
        gap: 9px !important;
        padding: 7px !important;
      }

      .sidebar .room-area-button .area-media,
      .sidebar .room-area-button .area-media-icon {
        width: 74px !important;
        height: 74px !important;
        min-width: 74px !important;
        min-height: 74px !important;
        max-width: 74px !important;
        max-height: 74px !important;
      }

      .sidebar .room-area-button .area-content {
        width: 100% !important;
        height: 74px !important;
        gap: 4px !important;
      }

      .sidebar .room-area-button .area-name,
      .sidebar .room-area-button.has-picture .area-name {
        font-size: 15px !important;
        line-height: 1 !important;
      }

      .sidebar .room-area-button .area-sensors,
      .sidebar .room-area-button.has-picture .area-sensors {
        font-size: 11.5px !important;
        line-height: 1 !important;
      }

      .sidebar .room-area-button .info-badge,
      .sidebar .room-area-button.has-picture .info-badge {
        min-width: 27px !important;
        height: 20px !important;
        padding: 0 6px !important;
        gap: 3px !important;
        font-size: 10px !important;
      }

      .sidebar .room-area-button .info-badge ha-icon {
        --mdc-icon-size: 11px !important;
      }

      .sidebar .room-area-button .badge-count {
        font-size: 10px !important;
      }

      /*
       * Room header: increase the current responsive geometry by about 10%.
       * Keep the same proportions between media, copy, metrics and badges.
       */
      .room-ui-v2 .room-header {
        grid-template-columns: clamp(165px, 22cqw, 242px) minmax(0, 1fr) auto auto !important;
        min-height: clamp(106px, 12.1cqw, 128px) !important;
      }

      .room-ui-v2 .room-header-media {
        height: clamp(88px, 9.9cqw, 114px) !important;
        min-height: 88px !important;
        max-height: 114px !important;
      }

      .room-ui-v2 .room-header-icon ha-icon {
        --mdc-icon-size: clamp(44px, 5cqw, 55px) !important;
      }

      .room-ui-v2 .room-header-copy {
        height: clamp(88px, 9.9cqw, 114px) !important;
      }

      .room-ui-v2 .room-header .area-title {
        font-size: clamp(28px, 1.87vw, 33px) !important;
      }

      .room-ui-v2 .room-header-device-count {
        font-size: 11px !important;
      }

      .room-ui-v2 .room-header-summary {
        min-height: 32px !important;
        height: 32px !important;
        gap: 7px !important;
      }

      .room-ui-v2 .room-summary-item.status {
        min-height: 32px !important;
        height: 32px !important;
        padding: 4px 8px !important;
        gap: 4px !important;
        font-size: 13.2px !important;
      }

      .room-ui-v2 .room-summary-item.status ha-icon {
        --mdc-icon-size: 19px !important;
      }

      .room-ui-v2 .room-header .area-header-metric {
        min-width: 139px !important;
        min-height: 45px !important;
        padding: 6px 10px !important;
        gap: 7px !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-ring {
        width: 32px !important;
        height: 32px !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-label {
        font-size: 10px !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-reading {
        font-size: 14px !important;
      }

      /*
       * Explicitly scope the weather treatment to the actual header/time
       * container as well. This prevents the Home weather pill from falling
       * back to the generic gray .weather-compact styling.
       */
      .global-header .header-time-weather .weather-compact {
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

      .global-header .header-time-weather .weather-compact .weather-icon-compact ha-icon {
        --mdc-icon-size: 18px !important;
        color: var(--primary-color) !important;
      }

      .global-header .header-time-weather .weather-compact .weather-temp-compact {
        font-size: 13px !important;
        line-height: 1 !important;
        color: var(--primary-text-color) !important;
      }

      /*
       * Select/input_select: use flex for the first row rather than the
       * repeatedly overridden grid. The icon is therefore physically the
       * first item and cannot jump into the content/right column.
       */
      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-main {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: flex-start !important;
        width: 100% !important;
        min-width: 0 !important;
        height: 46px !important;
        min-height: 46px !important;
        gap: 11px !important;
        direction: ltr !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon {
        position: static !important;
        inset: auto !important;
        order: 0 !important;
        flex: 0 0 46px !important;
        width: 46px !important;
        min-width: 46px !important;
        height: 46px !important;
        min-height: 46px !important;
        margin: 0 !important;
        padding: 0 !important;
        align-self: center !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        transform: none !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon ha-icon {
        --mdc-icon-size: 24px !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-content {
        order: 1 !important;
        flex: 1 1 auto !important;
        width: auto !important;
        min-width: 0 !important;
        height: 46px !important;
        margin: 0 !important;
        align-self: center !important;
      }
    }

    
    /* 2026-10-03: restore stable desktop room geometry and final responsive overrides. */
    @media (min-width: 769px) {
      /* Keep the room header media fixed; the grid column must use the same width
         so the image cannot become narrow inside a wider empty column. */
      .room-ui-v2 .room-header {
        grid-template-columns: 142px minmax(0, 1fr) auto auto !important;
        min-height: 96px !important;
        gap: 16px !important;
      }

      .room-ui-v2 .room-header-media {
        width: 142px !important;
        height: 76px !important;
        min-width: 142px !important;
        min-height: 76px !important;
        max-width: 142px !important;
        max-height: 76px !important;
        aspect-ratio: 142 / 76 !important;
      }

      .room-ui-v2 .room-header-copy {
        height: 76px !important;
        min-height: 0 !important;
      }

      /* Four entity cards per row on every desktop width. */
      .room-ui-v2 .mobile-entity-rail,
      .room-ui-v2 .mobile-entities-section.layout-grid .mobile-entity-rail {
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
      }

      /* Sidebar room content should nearly fill the height of the media tile. */
      .sidebar .room-area-button .area-name,
      .sidebar .room-area-button.has-picture .area-name {
        font-size: 16px !important;
        line-height: 1.08 !important;
      }

      .sidebar .room-area-button .area-sensors,
      .sidebar .room-area-button.has-picture .area-sensors {
        font-size: 13px !important;
        line-height: 1.12 !important;
        margin-top: 2px !important;
      }

      .sidebar .room-area-button .info-badge,
      .sidebar .room-area-button.has-picture .info-badge {
        min-width: 29px !important;
        height: 22px !important;
        padding: 0 6px !important;
        gap: 3px !important;
        font-size: 11px !important;
      }

      .sidebar .room-area-button .info-badge ha-icon {
        --mdc-icon-size: 12px !important;
      }

      .sidebar .room-area-button .badge-count {
        font-size: 11px !important;
      }

      /* Make the select/input_select icon physically first, independent of
         earlier grid overrides. */
      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-main {
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

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-icon {
        order: 0 !important;
        flex: 0 0 46px !important;
        width: 46px !important;
        min-width: 46px !important;
        height: 46px !important;
        min-height: 46px !important;
        margin: 0 !important;
        position: static !important;
        inset: auto !important;
        transform: none !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-content {
        order: 1 !important;
        flex: 1 1 auto !important;
        width: auto !important;
        min-width: 0 !important;
        margin: 0 !important;
      }

      .room-ui-v2 .mobile-entity-card.has-inline-select .mobile-entity-right {
        display: none !important;
      }
    }


    @media (min-width: 769px) {
      /*
       * Select/input_select: the wrapper was already in the correct left slot,
       * but the HA icon itself could still be displaced by competing ha-icon
       * rules. Pin the actual icon element inside its wrapper.
       */
      .room-ui-v2 .mobile-entity-card.has-inline-select
      .mobile-entity-icon > .mobile-entity-leading-select-icon {
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
      .room-ui-v2 .room-header {
        min-height: 162px !important;
        padding: 6px 12px !important;
        gap: 12px !important;
        align-items: center !important;
        overflow: visible !important;
      }

      .room-ui-v2 .room-header.has-camera {
        grid-template-columns: 190px minmax(260px, 1fr) minmax(240px, 300px) 205px 42px !important;
        grid-template-areas: "media copy camera metrics actions" !important;
      }

      .room-ui-v2 .room-header.no-camera {
        grid-template-columns: 190px minmax(300px, 1fr) 205px 42px !important;
        grid-template-areas: "media copy metrics actions" !important;
      }

      /* Left block: same visual height as the complete three-pill stack. */
      .room-ui-v2 .room-header-media {
        grid-area: media !important;
        width: 190px !important;
        min-width: 190px !important;
        max-width: 190px !important;
        height: 150px !important;
        min-height: 150px !important;
        max-height: 150px !important;
        aspect-ratio: auto !important;
        align-self: center !important;
        border-radius: 10px !important;
      }

      .room-ui-v2 .room-header-icon ha-icon {
        --mdc-icon-size: 46px !important;
      }

      .room-ui-v2 .room-header-copy {
        grid-area: copy !important;
        height: 150px !important;
        min-height: 150px !important;
        max-height: 150px !important;
        padding: 0 !important;
        align-self: center !important;
        justify-content: flex-start !important;
        gap: 4px !important;
        overflow: visible !important;
      }

      .room-ui-v2 .room-header-title-row {
        min-height: 38px !important;
        display: flex !important;
        flex-wrap: nowrap !important;
        align-items: center !important;
        gap: 6px !important;
      }

      .room-ui-v2 .room-header-title-row .room-header-home-link {
        flex: 0 0 30px !important;
        width: 30px !important;
        height: 30px !important;
      }

      .room-ui-v2 .room-header-title-row .room-header-home-link ha-icon {
        --mdc-icon-size: 20px !important;
      }

      .room-ui-v2 .room-header .area-title {
        margin: 0 !important;
        font-size: clamp(29px, 2vw, 35px) !important;
        line-height: 1.05 !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }

      .room-ui-v2 .room-header-device-count {
        margin: 0 !important;
        font-size: 13px !important;
        line-height: 1.15 !important;
      }

      /* Status badges must never be clipped at the lower edge. */
      .room-ui-v2 .room-header-summary {
        width: 100% !important;
        min-height: 34px !important;
        height: auto !important;
        margin: 2px 0 0 !important;
        padding: 2px 0 3px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: flex-start !important;
        flex-wrap: wrap !important;
        gap: 7px !important;
        overflow: visible !important;
      }

      .room-ui-v2 .room-header-summary.is-empty {
        min-height: 0 !important;
        padding: 0 !important;
      }

      .room-ui-v2 .room-summary-item.status {
        min-height: 30px !important;
        height: 30px !important;
        padding: 5px 9px !important;
        gap: 4px !important;
        box-sizing: border-box !important;
        font-size: 12px !important;
        line-height: 1 !important;
      }

      .room-ui-v2 .room-summary-item.status ha-icon {
        --mdc-icon-size: 17px !important;
      }

      /* Camera fills the same vertical band as the left identity block. */
      .room-ui-v2 .room-header-camera-preview {
        grid-area: camera !important;
        width: 100% !important;
        height: 150px !important;
        min-height: 150px !important;
        max-height: 150px !important;
        align-self: center !important;
        border-radius: 10px !important;
      }

      /* Three compact pills: ~10% smaller, almost no vertical dead space. */
      .room-ui-v2 .room-header .area-header-metrics {
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

      .room-ui-v2 .room-header .area-header-metric {
        width: 100% !important;
        min-width: 0 !important;
        min-height: 46px !important;
        height: 46px !important;
        padding: 4px 10px !important;
        gap: 7px !important;
        box-sizing: border-box !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-ring {
        width: 30px !important;
        height: 30px !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-label {
        font-size: 8px !important;
        line-height: 1 !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-reading {
        font-size: 14px !important;
        line-height: 1.05 !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-chevron {
        display: none !important;
      }

      /* Edit + unavailable aligned with the title at the top of the 150px band. */
      .room-ui-v2 .room-header-actions {
        grid-area: actions !important;
        width: 42px !important;
        min-width: 42px !important;
        height: 150px !important;
        margin: 0 !important;
        padding: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: flex-start !important;
        align-self: center !important;
        gap: 8px !important;
      }

      .room-ui-v2 .room-header-actions .dd-edit-toggle,
      .room-ui-v2 .room-header-actions .unavailable-entities-icon {
        width: 38px !important;
        height: 38px !important;
        min-width: 38px !important;
        min-height: 38px !important;
        margin: 0 !important;
        flex: 0 0 38px !important;
      }
    }


    /*
     * FINAL compact desktop room-header geometry.
     * One 132px band: image, camera and complete metric stack align exactly.
     */
    @media (min-width: 769px) {
      .room-ui-v2 .room-header {
        min-height: 160px !important;
        padding: 14px 20px !important;
        gap: 14px !important;
        align-items: center !important;
        overflow: visible !important;
        box-sizing: border-box !important;
      }

      .room-ui-v2 .room-header.has-camera {
        grid-template-columns: 190px minmax(300px, 1fr) 210px 145px 42px !important;
        grid-template-areas: "media copy camera metrics actions" !important;
      }

      .room-ui-v2 .room-header.no-camera {
        grid-template-columns: 190px minmax(340px, 1fr) 145px 42px !important;
        grid-template-areas: "media copy metrics actions" !important;
      }

      .room-ui-v2 .room-header-media,
      .room-ui-v2 .room-header-camera-preview {
        height: 132px !important;
        min-height: 132px !important;
        max-height: 132px !important;
        align-self: center !important;
        border-radius: 10px !important;
      }

      .room-ui-v2 .room-header-media {
        grid-area: media !important;
        width: 190px !important;
        min-width: 190px !important;
        max-width: 190px !important;
      }

      .room-ui-v2 .room-header-camera-preview {
        grid-area: camera !important;
        width: 210px !important;
        min-width: 210px !important;
        max-width: 210px !important;
      }

      .room-ui-v2 .room-header-icon ha-icon { --mdc-icon-size: 42px !important; }

      .room-ui-v2 .room-header-copy {
        grid-area: copy !important;
        height: 132px !important;
        min-height: 132px !important;
        max-height: 132px !important;
        padding: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: stretch !important;
        gap: 6px !important;
        overflow: visible !important;
      }

      .room-ui-v2 .room-header-title-row {
        min-height: 34px !important;
        margin: 0 !important;
        gap: 6px !important;
        align-items: center !important;
      }

      .room-ui-v2 .room-header-title-row .room-header-home-link {
        flex: 0 0 28px !important;
        width: 28px !important;
        height: 28px !important;
      }

      .room-ui-v2 .room-header-title-row .room-header-home-link ha-icon {
        --mdc-icon-size: 19px !important;
      }

      .room-ui-v2 .room-header .area-title {
        margin: 0 !important;
        font-size: clamp(28px, 1.9vw, 33px) !important;
        line-height: 1.05 !important;
      }

      .room-ui-v2 .room-header-device-count {
        margin: 0 !important;
        font-size: 12px !important;
        line-height: 1.1 !important;
      }

      .room-ui-v2 .room-header-summary {
        min-height: 30px !important;
        height: 30px !important;
        margin: 1px 0 0 !important;
        padding: 0 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: flex-start !important;
        flex-wrap: nowrap !important;
        gap: 7px !important;
        overflow: visible !important;
      }

      .room-ui-v2 .room-summary-item.status {
        min-height: 30px !important;
        height: 30px !important;
        padding: 5px 9px !important;
      }

      .room-ui-v2 .room-header-camera-stream { display: none !important; }

      .room-ui-v2 .room-header .area-header-metrics {
        grid-area: metrics !important;
        width: 145px !important;
        min-width: 145px !important;
        max-width: 145px !important;
        height: 132px !important;
        min-height: 132px !important;
        max-height: 132px !important;
        margin: 0 !important;
        padding: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        justify-content: flex-start !important;
        gap: 12px !important;
        align-self: center !important;
      }

      .room-ui-v2 .room-header .area-header-metric {
        width: 145px !important;
        min-width: 145px !important;
        max-width: 145px !important;
        min-height: 36px !important;
        height: 36px !important;
        padding: 3px 8px !important;
        gap: 6px !important;
        box-sizing: border-box !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-ring {
        width: 22px !important;
        height: 22px !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-label {
        font-size: 7px !important;
        line-height: 1 !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-reading {
        font-size: 12px !important;
        line-height: 1.02 !important;
      }

      .room-ui-v2 .room-header .area-header-metric .metric-chevron { display: none !important; }

      .room-ui-v2 .room-header-actions {
        grid-area: actions !important;
        width: 42px !important;
        min-width: 42px !important;
        height: 132px !important;
        margin: 0 !important;
        padding: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: flex-start !important;
        align-self: center !important;
        gap: 8px !important;
      }

      .room-ui-v2 .room-header-actions .dd-edit-toggle,
      .room-ui-v2 .room-header-actions .unavailable-entities-icon {
        width: 38px !important;
        height: 38px !important;
        min-width: 38px !important;
        min-height: 38px !important;
        margin: 0 !important;
        flex: 0 0 38px !important;
      }

      .dd-page-card,
      .dd-page-card > *,
      .dd-page-card dwains-dashboard-next-card-host {
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
        box-sizing: border-box !important;
      }
    }

    ${Jt}

    /* Room header: exact v1.11.0 header styling with only the two requested structural deviations. */
    .dd-page-header-with-media {
      display: grid;
      grid-template-columns: 220px minmax(0, 1fr);
      gap: 18px;
      align-items: stretch;
      min-width: 0;
    }

    .dd-page-header-media-tile {
      position: relative;
      width: 220px;
      min-height: 176px;
      overflow: hidden;
      border-radius: 14px;
      background: color-mix(in srgb, var(--ph-accent) 10%, var(--ph-surface));
    }

    .dd-page-header-room-picture {
      position: absolute;
      inset: 0;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .dd-page-header-room-icon {
      width: 100%;
      height: 100%;
      min-height: 176px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--ph-accent) 14%, var(--ph-surface));
      color: var(--ph-accent);
    }

    .dd-page-header-room-icon ha-icon {
      --mdc-icon-size: 52px;
    }

    .dd-page-header-main {
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
    }

    .dd-page-header-title-row {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .dd-page-header-title-row .dd-page-header-title {
      min-width: 0;
    }

    .dd-page-header-home {
      width: 36px;
      height: 36px;
    }

    .dd-page-header-home ha-icon {
      --mdc-icon-size: 21px;
    }

    @media (max-width: 768px) {
      .dd-page-header-with-media {
        grid-template-columns: 78px minmax(0, 1fr);
        gap: 12px;
        align-items: start;
      }

      .dd-page-header-media-tile {
        width: 78px;
        min-height: 78px;
        height: 78px;
        border-radius: 14px;
      }

      .dd-page-header-room-icon {
        min-height: 78px;
      }

      .dd-page-header-room-icon ha-icon {
        --mdc-icon-size: 34px;
      }

      .dd-page-header-main {
        gap: 12px;
      }

      .dd-page-header-main .dd-page-header-top {
        flex-wrap: wrap;
        row-gap: 14px;
      }

      .dd-page-header-main .dd-page-header-identity {
        order: 1;
        flex: 1 1 auto;
        flex-basis: auto;
      }

      .dd-page-header-main .dd-page-header-actions {
        order: 2;
        margin-left: auto;
      }

      .dd-page-header-main .dd-page-header-strip {
        margin-left: calc(-78px - 12px);
      }

      .dd-page-header-title-row {
        gap: 7px;
      }

      .dd-page-header-home {
        width: 32px;
        height: 32px;
      }

      .dd-room-compact .dd-page-header-home {
        width: 38px;
        height: 38px;
      }
    }

  `,t([e({attribute:!1})],pe.prototype,"hass",void 0),t([e({attribute:!1})],pe.prototype,"config",void 0),t([i()],pe.prototype,"_selectedArea",void 0),t([i()],pe.prototype,"_selectedView",void 0),t([i()],pe.prototype,"_isMobile",void 0),t([i()],pe.prototype,"_headerExpanded",void 0),t([i()],pe.prototype,"_headerCompact",void 0),t([i()],pe.prototype,"_headerStatusCanScrollLeft",void 0),t([i()],pe.prototype,"_headerStatusCanScrollRight",void 0),t([i()],pe.prototype,"_currentTime",void 0),t([i()],pe.prototype,"_currentDate",void 0),t([i()],pe.prototype,"_mobileNavOpen",void 0),t([i()],pe.prototype,"_editMode",void 0),t([i()],pe.prototype,"_notificationsOpen",void 0),t([i()],pe.prototype,"_persistentNotifications",void 0),t([i()],pe.prototype,"_notificationsLoading",void 0),t([i()],pe.prototype,"_notificationsError",void 0),t([i()],pe.prototype,"_areaHeaderStuck",void 0),t([i()],pe.prototype,"_areaHeaderRevealed",void 0),t([i()],pe.prototype,"_mobileEntityLayout",void 0),t([i()],pe.prototype,"_mobileHomeAreasLayout",void 0),t([i()],pe.prototype,"_mobileHomeDevicesLayout",void 0),t([i()],pe.prototype,"_mobileHomeFavoritesLayout",void 0),t([i()],pe.prototype,"_mobileHomeCamerasLayout",void 0),t([i()],pe.prototype,"_areaSidebarWidth",void 0),t([i()],pe.prototype,"_areaSidebarCollapsed",void 0),t([i()],pe.prototype,"_isResizingSidebar",void 0),t([i()],pe.prototype,"_repairsIssueCount",void 0),t([i()],pe.prototype,"_discoveredDeviceCount",void 0),t([i()],pe.prototype,"_suggestedFavoriteEntities",void 0),t([i()],pe.prototype,"_customCardDrag",void 0),t([i()],pe.prototype,"_customCardDragOver",void 0),t([i()],pe.prototype,"_generatedCardDrag",void 0),t([i()],pe.prototype,"_generatedCardDragOver",void 0),t([i()],pe.prototype,"_generatedGroupDrag",void 0),t([i()],pe.prototype,"_generatedGroupDragOver",void 0),t([i()],pe.prototype,"_optimisticEntityStates",void 0),t([i()],pe.prototype,"_renderAllMobileHomeAreas",void 0),t([i()],pe.prototype,"_renderAllMobileAreaEntities",void 0),t([i()],pe.prototype,"_collapsedAreaGroups",void 0),t([i()],pe.prototype,"_settingsDirty",void 0),t([i()],pe.prototype,"_settingsSavePending",void 0),t([i()],pe.prototype,"_settingsSaveError",void 0),t([i()],pe.prototype,"_settingsPageKey",void 0),t([i()],pe.prototype,"_settingsPageTitle",void 0),t([i()],pe.prototype,"_settingsPageParentTitle",void 0),t([i()],pe.prototype,"_settingsPageDescription",void 0),t([i()],pe.prototype,"_confirmationDialog",void 0),t([i()],pe.prototype,"_housePowerDialogOpen",void 0),pe=t([a("dwains-dashboard-next-layout-card")],pe);export{pe as DwainsLayoutCard};
