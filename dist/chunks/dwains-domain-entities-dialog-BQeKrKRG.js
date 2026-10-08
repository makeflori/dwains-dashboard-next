import{_ as t,n as i,r as e,t as o}from"./state-Bpx-nWN3.js";import{m as n}from"./screensaver-media-CIck-tES.js";import{i as a,A as r,b as s,a as c}from"./lit-element-CR7MDbd3.js";import{d,g as p,e as l,j as m,a as h}from"./power-usage-IMdEmTDU.js";import{d as g,a as x}from"./index-cD7ka47K.js";import{f as u}from"./fire-event-DQiSssdY.js";import{a as f,f as y}from"./dwains-bottom-nav-B9eA9zu_.js";import{s as _}from"./dwains-dashboard-strategy-editor-B4XJHmE6.js";import"./dd-card-host-COJOAdKz.js";import"./blueprints-CLD6dn9m.js";let b=class extends a{constructor(){super(...arguments),this._groupedEntities={},this._loading=!0,this._optimisticEntityStates={},this._entityCards=new Map,this._mobileSheetAnimated=!1,this._handleViewAll=()=>{const t=this._params?.onViewAll;this.closeDialog(),t?.()}}_t(t,i){return g(this.hass,t,i)}_tp(t,i){return x(this.hass,t,i)}async showDialog(t){this._params=t,this._loading=!0,this._mobileSheetAnimated=!1,await this._loadEntities()}closeDialog(){this._params=void 0,this._groupedEntities={},this._optimisticEntityStates={},this._entityCards.clear(),this._mobileSheetAnimated=!1,this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0),void 0!==this._optimisticCleanupTimer&&(window.clearTimeout(this._optimisticCleanupTimer),this._optimisticCleanupTimer=void 0),u(this,"dialog-closed",{dialog:this.localName})}updated(t){super.updated(t),t.has("hass")&&this.hass&&this._params&&!this._loading&&(this._reconcileOptimisticEntityStates(),this._updateEntityCards()),this._animateMobileSheetIn()}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._optimisticCleanupTimer&&(window.clearTimeout(this._optimisticCleanupTimer),this._optimisticCleanupTimer=void 0)}_animateMobileSheetIn(){!this._mobileSheetAnimated&&this._params&&"undefined"!=typeof window&&window.matchMedia("(max-width: 600px)").matches&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&requestAnimationFrame(()=>{const t=this.renderRoot.querySelector("ha-dialog"),i=t?.shadowRoot,e=i?.querySelector("wa-dialog"),o=e?.shadowRoot,n=o?.querySelector('[part~="panel"]')||o?.querySelector("dialog")||i?.querySelector(".mdc-dialog__surface")||i?.querySelector('[part~="surface"]');n?.animate&&(this._mobileSheetAnimated=!0,n.animate([{transform:"translate3d(0, 100%, 0)",opacity:.98},{transform:"translate3d(0, 0, 0)",opacity:1}],{duration:280,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"both"}))})}async _loadEntities(){if(!this._params||!this.hass)return;const{domain:t,areaId:i,config:e,filterByUnitOfMeasurement:o,deviceClass:n,entityIds:a}=this._params,r={},s=a?.length?new Set(a):void 0,c=e.areas||[],d=new Map(c.map(t=>[t.area_id,t])),p=Object.values(this.hass.states),l=[];p.forEach(a=>{const r=a.entity_id;if(s&&!s.has(r))return;const c=this.hass.entities?.[r];if(c?.hidden_by)return;const p=r.split(".")[0];if(p!==t)return;if(!a||"unavailable"===a.state)return;const m=e.entities?.find(t=>t.entity_id===r),h=m&&m.device_id?e.devices?.find(t=>t.device_id===m.device_id):null,g=m?.area_id||h?.area_id||this.hass?.entities?.[r]?.area_id;if("person"!==t&&!g)return;if(i&&g!==i)return;if(!("person"===t||g&&d.has(g)))return;const x=p;if(!(g&&e.areas_options?.[g]?.groups_options?.[x]?.hidden||[]).includes(r)){if(o){if(a.attributes?.unit_of_measurement!==o)return}else if("binary_sensor"===t&&n){const t=a.attributes?.device_class;if(t!==n)return}l.push({entity_id:r,...g?{area_id:g}:{},hidden:!1})}}),l.forEach(i=>{if("person"===t){const t="people";r[t]||(r[t]={areaName:this._t("home.people"),entities:[]}),r[t].entities.push(i)}else{const t=i.area_id,e=d.get(t);if(!e)return;r[t]||(r[t]={areaName:e.name,entities:[]}),r[t].entities.push(i)}}),this._groupedEntities=r,this._loading=!1,this._updateInterval||(this._updateInterval=window.setInterval(()=>{this._checkForEntityChanges()},1e3))}_checkForEntityChanges(){if(!this._params||!this.hass||this._loading)return;const{domain:t,filterByUnitOfMeasurement:i,deviceClass:e}=this._params;let o=!1;Object.entries(this._groupedEntities).forEach(([n,a])=>{a.entities.forEach(n=>{const a=this.hass.states[n.entity_id];if(!a)return void(o=!0);this._shouldEntityBeVisible(a,t,i,e)||(o=!0)})}),o&&this._loadEntities()}_shouldEntityBeVisible(t,i,e,o){return"unavailable"!==t.state&&(e?t.attributes?.unit_of_measurement===e:"binary_sensor"!==i||!o||t.attributes?.device_class===o)}_updateEntityCards(){this._entityCards.forEach((t,i)=>{t&&"hass"in t&&(t.hass=this.hass)})}render(){if(!this._params)return r;const{domain:t,filterByUnitOfMeasurement:i,deviceClass:e,customTitle:o}=this._params;let a=o||this._getLocalizedDomainTitle(t);if("W"===i)a=this._t("dialog.power_sensors");else if(e&&!o){a={motion:this._t("dialog.motion_sensors"),door:this._t("dialog.door_sensors"),window:this._t("dialog.window_sensors"),smoke:this._t("dialog.smoke_sensors"),gas:this._t("dialog.gas_sensors"),moisture:this._t("dialog.moisture_sensors"),occupancy:this._t("dialog.occupancy_sensors"),opening:this._t("dialog.opening_sensors"),presence:this._t("dialog.presence_sensors"),safety:this._t("dialog.safety_sensors"),tamper:this._t("dialog.tamper_sensors"),vibration:this._t("dialog.vibration_sensors")}[e]||this._getLocalizedDomainTitle(t)}const c="W"===i?"mdi:flash":d(t,e)||p(t),m="W"===i?l("wattage"):this._entityColor(t,e);return s`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        @cancel=${()=>this.closeDialog()}
        .heading=${a}
        .type=${""}
        flexContent
        hideActions
      >
        <ha-dialog-header slot="header">
          <div class="sheet-handle" aria-hidden="true"></div>
          <span slot="title" class="dialog-title-line" style=${`--dialog-accent: ${m};`}>
            <span class="dialog-title-icon" aria-hidden="true">
              <ha-icon icon=${c}></ha-icon>
            </span>
            <span class="dialog-title-text">${a}</span>
            ${this._params?.onViewAll?s`
              <button
                class="dialog-header-destination"
                type="button"
                @click=${this._handleViewAll}
              >
                <span>${this._params.viewAllLabel||"Open device view"}</span>
                <ha-icon icon="mdi:chevron-right"></ha-icon>
              </button>
            `:r}
          </span>
          <ha-icon-button
            slot="actionItems"
            .label=${this._t("common.close")}
            .path=${n}
            @click=${()=>this.closeDialog()}
          ></ha-icon-button>
        </ha-dialog-header>

        <div class="content ${this._params?.areaId?"room-context":""} ${this._params?.customEntities?"custom-entities-context":""}">
          ${this._loading?s`<div class="loading">${this._t("common.loading")}</div>`:this._renderContent()}
        </div>
      </ha-dialog>
    `}_renderContent(){if(this._params?.customEntities)return this._renderCustomEntities();const t=this._allDialogEntities();return 0===t.length?s`
        <div class="empty-state">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <div class="empty-state-text">
            ${this._t("dialog.active_empty")}
          </div>
        </div>
      `:s`
      ${this._renderDomainActions(t)}
      ${m(Object.entries(this._groupedEntities),([t])=>t,([t,i])=>this._renderAreaSection(t,i))}
    `}_renderCustomEntities(){const{customEntities:t,customDescription:i}=this._params;return t&&0!==t.length?s`
      ${i?s`
        <div class="custom-description">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <p>${i}</p>
        </div>
      `:r}

      <div class="entity-section">
        <div class="entities-grid">
          ${m(t,t=>t,t=>this._renderEntityCard({entity_id:t,hidden:!1}))}
        </div>
      </div>
    `:s`
        <div class="empty-state">
          <ha-icon icon="mdi:check-circle-outline"></ha-icon>
          <div class="empty-state-text">
            ${this._t("dialog.problem_empty")}
          </div>
        </div>
      `}_allDialogEntities(){return Object.values(this._groupedEntities).flatMap(t=>t.entities)}_renderDomainActions(t){const i=this._params?.domain||"",e=t.map(t=>t.entity_id).filter(t=>this.hass.states[t]);if(!e.length)return r;const o=this._entityColor(i),n=(t,i,n)=>s`
      <button
        class="domain-action-button"
        type="button"
        style=${`--domain-color: ${o};`}
        @click=${()=>this._runBulkDomainAction(e,n,t)}
      >
        <ha-icon icon=${i}></ha-icon>
        <span>${t}</span>
      </button>
    `;return["light","switch","fan","input_boolean"].includes(i)?s`
        <div class="domain-actions">
          ${n(this._t("action.turn_on_all"),"mdi:power","turn_on")}
          ${n(this._t("action.turn_off_all"),"mdi:power-off","turn_off")}
        </div>
      `:"cover"===i?s`
        <div class="domain-actions">
          ${n(this._t("action.open_all"),"mdi:arrow-up","open_cover")}
          ${n(this._t("action.close_all"),"mdi:arrow-down","close_cover")}
        </div>
      `:"lock"===i?s`
        <div class="domain-actions">
          ${n(this._t("action.unlock_all"),"mdi:lock-open-variant-outline","unlock")}
          ${n(this._t("action.lock_all"),"mdi:lock-outline","lock")}
        </div>
      `:r}_renderAreaSection(t,i){let e="";if(this._params?.config?.areas){const i=this._params.config.areas.find(i=>i.area_id===t);i?.icon&&(e=i.icon)}return"person"===this._params?.domain&&(e="mdi:account-group"),s`
      <div class="area-section">
        <div class="area-header">
          ${e?s`
            <div class="area-icon">
              <ha-icon icon="${e}"></ha-icon>
            </div>
          `:r}
          <div class="area-name">${i.areaName}</div>
          <div class="entity-count">${i.entities.length}</div>
        </div>
        <div class="entities-grid">
          ${m(i.entities,t=>t.entity_id,t=>this._renderEntityCard(t,i.areaName))}
        </div>
      </div>
    `}_renderEntityCard(t,i){const e=this.hass.states[t.entity_id];if(!e)return r;const o=this._getEffectiveEntityState(e),n=t.entity_id.split(".")[0]||"unknown";if("todo"===n)return s`
        <div class="domain-todo-list-card" data-entity=${t.entity_id}>
          <dwains-dashboard-next-card-host
            eager
            .hass=${this.hass}
            .config=${{type:"todo-list",entity:t.entity_id}}
          ></dwains-dashboard-next-card-host>
        </div>
      `;const a=o.attributes?.device_class,c=this.hass.entities?.[t.entity_id]?.icon||o.attributes?.icon||d(n,a)||p(n),l=o.attributes?.friendly_name||this.hass.entities?.[t.entity_id]?.name||t.entity_id,m=this._entityAreaName(t),h=this._params?.areaId||!0===this._params?.config.settings?.hide_area_name_in_entity_names?_(l,m):l,g=this._isEntityActiveForUi(o,n),x=["domain-entity-card",`domain-entity-${n}`,g?"is-active":"is-off",this._isUnavailable(o)?"is-unavailable":""].join(" ");return s`
      <article
        class=${x}
        style=${`--entity-color: ${this._entityColor(n,a)};`}
        role="button"
        tabindex="0"
        aria-label=${h}
        @click=${()=>this._showMoreInfo(t.entity_id)}
        @keydown=${i=>this._handleEntityKeydown(i,t.entity_id)}
      >
        <div class="domain-entity-top">
          <div class="domain-entity-icon">
            <ha-icon icon=${c}></ha-icon>
          </div>
          ${this._renderEntityActions(o,n,g)}
        </div>
        <div class="domain-entity-copy">
          ${this._params?.areaId?r:s`<div class="domain-entity-meta">${i||m||this._t("dialog.no_area")}</div>`}
          <div class="domain-entity-name">${h}</div>
          <div class="domain-entity-status">${this._entityStatusText(o,n)}</div>
        </div>
      </article>
    `}_renderEntityActions(t,i,e){const o=t?.entity_id,n=this._entityActionKind(i),a=this._isUnavailable(t);if("toggle"===n)return s`
        <button
          class="domain-entity-action domain-entity-toggle"
          type="button"
          title=${e?this._t("action.turn_off"):this._t("action.turn_on")}
          aria-label=${e?this._t("action.turn_off"):this._t("action.turn_on")}
          ?disabled=${a}
          @click=${e=>this._handleEntityToggle(e,t,i)}
        ></button>
      `;if("cover"===n)return this._renderCoverActions(t);if("lock"===n){const e=this._isEntityActiveForUi(t,i);return s`
        <button
          class="domain-entity-action domain-lock-action ${e?"is-unlocked":""}"
          type="button"
          title=${e?this._t("action.lock"):this._t("action.unlock")}
          aria-label=${e?this._t("action.lock"):this._t("action.unlock")}
          ?disabled=${a}
          @click=${i=>this._handleLockAction(i,t)}
        >
          <ha-icon icon=${e?"mdi:lock-open-variant-outline":"mdi:lock-outline"}></ha-icon>
        </button>
      `}return s`
      <button
        class="domain-entity-action domain-entity-more"
        type="button"
        title=${this._t("action.more_info")}
        aria-label=${this._t("action.more_info")}
        @click=${t=>this._handleMoreInfo(t,o)}
      >
        <ha-icon icon="mdi:chevron-right"></ha-icon>
      </button>
    `}_renderCoverActions(t){const i=String(t?.state||"").toLowerCase(),e=this._isUnavailable(t),o=this._coverSupportsFeature(t,1),n=this._coverSupportsFeature(t,2),a=this._coverSupportsFeature(t,8);return s`
      <div class="domain-cover-actions" @click=${t=>t.stopPropagation()}>
        ${o?s`
          <button
            class="domain-entity-action domain-cover-action ${"opening"===i?"active":""}"
            type="button"
            title=${this._t("action.open")}
            aria-label=${this._t("action.open")}
            ?disabled=${e}
            @click=${i=>this._handleCoverAction(i,t,"open")}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
        `:r}
        ${a?s`
          <button
            class="domain-entity-action domain-cover-action ${"opening"===i||"closing"===i?"active":""}"
            type="button"
            title=${this._t("action.stop")}
            aria-label=${this._t("action.stop")}
            ?disabled=${e}
            @click=${i=>this._handleCoverAction(i,t,"stop")}
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>
        `:r}
        ${n?s`
          <button
            class="domain-entity-action domain-cover-action ${"closing"===i?"active":""}"
            type="button"
            title=${this._t("action.close")}
            aria-label=${this._t("action.close")}
            ?disabled=${e}
            @click=${i=>this._handleCoverAction(i,t,"close")}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
        `:r}
      </div>
    `}async _runBulkDomainAction(t,i,e){const o=this._params?.domain||"",n=t.length;if(!window.confirm(this._t("action.confirm_bulk",{action:e,entities:this._tp("common.entity",n)})))return;const a="turn_on"===i?"on":"turn_off"===i?"off":"open_cover"===i?"open":"close_cover"===i?"closed":"unlock"===i?"unlocked":"lock"===i?"locked":void 0;a&&this._setOptimisticEntityStates(t,a);try{if(["light","switch","fan","input_boolean"].includes(o))return void await this.hass.callService(o,i,{entity_id:t});if("cover"===o)return void await this.hass.callService("cover",i,{entity_id:t});"lock"===o&&await this.hass.callService("lock",i,{entity_id:t})}catch(e){this._clearOptimisticEntityStates(t),console.warn(`Failed to run ${i} for ${o}:`,e)}}_handleEntityKeydown(t,i){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._showMoreInfo(i))}async _handleEntityToggle(t,i,e){t.stopPropagation();const o=i?.entity_id;if(o){try{if(["light","switch","fan","input_boolean"].includes(e)){const t=!this._isEntityActiveForUi(i,e);return this._setOptimisticEntityStates([o],t?"on":"off"),void await this.hass.callService(e,t?"turn_on":"turn_off",{entity_id:o})}}catch(t){return this._clearOptimisticEntityStates([o]),void console.warn(`Failed to toggle entity ${o}:`,t)}this._showMoreInfo(o)}}async _handleCoverAction(t,i,e){t.stopPropagation();const o=i?.entity_id;if(!o)return;const n="open"===e?"open_cover":"close"===e?"close_cover":"stop_cover",a="open"===e?"open":"close"===e?"closed":void 0;a&&this._setOptimisticEntityStates([o],a);try{await this.hass.callService("cover",n,{entity_id:o})}catch(t){this._clearOptimisticEntityStates([o]),console.warn(`Failed to ${e} cover ${o}:`,t)}}async _handleLockAction(t,i){t.stopPropagation();const e=i?.entity_id;if(e)try{const t=this._isEntityActiveForUi(i,"lock");this._setOptimisticEntityStates([e],t?"locked":"unlocked"),await this.hass.callService("lock",t?"lock":"unlock",{entity_id:e})}catch(t){this._clearOptimisticEntityStates([e]),console.warn(`Failed to toggle lock ${e}:`,t)}}_handleMoreInfo(t,i){t.stopPropagation(),i&&this._showMoreInfo(i)}_showMoreInfo(t){const i=document.querySelector("home-assistant");u(i||window,"hass-more-info",{entityId:t})}_entityActionKind(t){return["light","switch","fan","input_boolean"].includes(t)?"toggle":"cover"===t?"cover":"lock"===t?"lock":"more"}_coverSupportsFeature(t,i){const e=Number(t?.attributes?.supported_features);return!Number.isFinite(e)||e<=0?1===i||2===i:0!==(e&i)}_entityStatusText(t,i){if(!t)return"";const e=this._getEffectiveEntityState(t),o=f(this.hass,e);if("light"===i&&"on"===e.state&&"number"==typeof e.attributes?.brightness)return this._t("entity.brightness",{value:Math.round(e.attributes.brightness/255*100)});if("cover"===i&&"number"==typeof e.attributes?.current_position)return`${o} · ${y(e.attributes.current_position,"%")}`;if("climate"===i){const t=e.attributes?.current_temperature,i=e.attributes?.temperature,o=this.hass?.config?.unit_system?.temperature||"°C";if(void 0!==t&&void 0!==i)return`${y(t,o)} · ${this._t("entity.climate_set",{value:y(i,o)})}`;if(void 0!==t)return y(t,o)}return"media_player"===i&&e.attributes?.media_title?`${o} · ${e.attributes.media_title}`:o}_getEffectiveEntityState(t){const i=t?.entity_id;if(!i)return t;const e=this._optimisticEntityStates[i];if(!e||e.expiresAt<=Date.now())return t;return String(t?.state||"").toLowerCase()===e.state.toLowerCase()?t:{...t,state:e.state}}_setOptimisticEntityStates(t,i){const e=[...new Set(t.filter(Boolean))];if(!e.length)return;const o=Date.now()+5e3,n={...this._optimisticEntityStates};e.forEach(t=>{n[t]={state:i,expiresAt:o}}),this._optimisticEntityStates=n,this._scheduleOptimisticCleanup()}_clearOptimisticEntityStates(t){const i=[...new Set(t.filter(Boolean))];if(!i.length)return;const e={...this._optimisticEntityStates};let o=!1;i.forEach(t=>{e[t]&&(delete e[t],o=!0)}),o&&(this._optimisticEntityStates=e)}_reconcileOptimisticEntityStates(){const t=Object.entries(this._optimisticEntityStates);if(!t.length)return;const i=Date.now(),e={...this._optimisticEntityStates};let o=!1;t.forEach(([t,n])=>{const a=this.hass?.states?.[t]?.state;(!a||n.expiresAt<=i||String(a).toLowerCase()===n.state.toLowerCase())&&(delete e[t],o=!0)}),o&&(this._optimisticEntityStates=e)}_scheduleOptimisticCleanup(){if(void 0!==this._optimisticCleanupTimer)return;const t=Object.values(this._optimisticEntityStates).map(t=>t.expiresAt);if(!t.length)return;const i=Math.min(...t);if(!Number.isFinite(i))return;const e=Math.max(80,i-Date.now()+50);this._optimisticCleanupTimer=window.setTimeout(()=>{this._optimisticCleanupTimer=void 0,this._reconcileOptimisticEntityStates(),Object.keys(this._optimisticEntityStates).length&&this._scheduleOptimisticCleanup()},e)}_isUnavailable(t){return["unavailable","unknown"].includes(String(t?.state||"").toLowerCase())}_isEntityActiveForUi(t,i){if(!t||this._isUnavailable(t))return!1;const e=String(t.state).toLowerCase();if("cover"===i)return["open","opening"].includes(e);if("lock"===i)return"unlocked"===e;if("climate"===i){const i=t.attributes?.hvac_action;return i&&"idle"!==i&&"off"!==i}return"media_player"===i?["playing","buffering"].includes(e):"vacuum"===i?["cleaning","returning"].includes(e):"alarm_control_panel"===i?e.startsWith("armed")||["arming","pending","triggered"].includes(e):"camera"!==i&&!["off","closed","locked","not_home","idle"].includes(e)}_entityColor(t,i){return l("sensor"!==t||"temperature"!==i&&"humidity"!==i?t:i,i)}_entityAreaName(t){const i=this._params?.config,e=i?.entities?.find(i=>i.entity_id===t.entity_id),o=e?.device_id?i?.devices?.find(t=>t.device_id===e.device_id):void 0,n=t.area_id||e?.area_id||o?.area_id||this.hass?.entities?.[t.entity_id]?.area_id;return i?.areas?.find(t=>t.area_id===n)?.name}_getLocalizedDomainTitle(t){return h(this.hass,t)}};b.styles=c`:host{--mdc-dialog-min-width:90vw;--mdc-dialog-max-width:1200px;--mdc-dialog-max-height:90vh;--mdc-dialog-z-index:10;--dialog-backdrop-opacity:0.4;-webkit-tap-highlight-color:transparent}ha-dialog{--mdc-dialog-heading-ink-color:var(--primary-text-color);--mdc-dialog-content-ink-color:var(--primary-text-color);--dialog-content-padding:0;--ha-dialog-scrim-backdrop-filter:brightness(72%) blur(2px);--mdc-dialog-scrim-color:rgba(0,0,0,0.28)}ha-dialog-header{--mdc-typography-headline6-font-size:20px;--mdc-typography-headline6-font-weight:500}.sheet-handle{display:none}.content{padding:16px 18px 22px !important;overflow:auto;max-height:calc(90vh - 120px);background:var(--primary-background-color)}.area-section{margin-bottom:18px;background:color-mix(in srgb,var(--card-background-color) 98%,#ffffff);border-radius:16px;overflow:hidden;box-shadow:0 14px 34px rgba(15,23,42,0.06),inset 0 0 0 1px rgba(15,23,42,0.04)}.area-header{display:flex;align-items:center;gap:12px;padding:14px 16px 0;background:transparent;border-bottom:0}.area-header:has(.area-icon){gap:12px}.area-header:not(:has(.area-icon)){gap:0}.area-icon{width:34px;height:34px;border-radius:999px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);display:flex;align-items:center;justify-content:center}.area-icon ha-icon{--mdc-icon-size:19px}.area-name{font-size:18px;font-weight:850;flex:1}.entity-count{color:var(--secondary-text-color);font-size:13px;font-weight:750}.entities-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(164px,1fr));gap:12px;padding:16px}.domain-todo-list-card{grid-column:1 / -1;min-width:0}.domain-todo-list-card dwains-dashboard-next-card-host{display:block;width:100%}.domain-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:0 0 16px}.domain-action-button{min-height:40px;padding:0 14px;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:8px;color:var(--primary-text-color);background:var(--card-background-color);font:inherit;font-size:13px;font-weight:800;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,0.07),inset 0 0 0 1px rgba(15,23,42,0.05);transition:transform 0.18s ease,box-shadow 0.18s ease}.domain-action-button:hover{transform:translateY(-1px);box-shadow:0 14px 26px rgba(15,23,42,0.1),inset 0 0 0 1px rgba(15,23,42,0.07)}.domain-action-button:active{transform:scale(0.97)}.domain-action-button ha-icon{--mdc-icon-size:18px;color:var(--domain-color,var(--primary-color))}.dialog-view-all{min-height:40px;padding:0 14px;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:8px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent);font:inherit;font-size:13px;font-weight:850;cursor:pointer;transition:transform 0.18s ease,background 0.18s ease}.dialog-view-all:hover{background:color-mix(in srgb,var(--primary-color) 18%,transparent);transform:translateY(-1px)}.dialog-view-all:active{transform:scale(0.97)}.dialog-view-all ha-icon{--mdc-icon-size:18px}.domain-entity-card{--entity-color:var(--primary-color);position:relative;box-sizing:border-box;min-width:0;min-height:132px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;border:0;border-radius:12px;background:color-mix(in srgb,var(--card-background-color) 98%,#ffffff);color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;box-shadow:0 12px 26px rgba(15,23,42,0.06),inset 0 0 0 1px rgba(15,23,42,0.035);transition:transform 0.18s ease,box-shadow 0.18s ease}.domain-entity-card:active{transform:scale(0.985)}.domain-entity-card.is-active{box-shadow:0 14px 30px rgba(15,23,42,0.08),inset 0 0 0 1px color-mix(in srgb,var(--entity-color) 18%,transparent)}.domain-entity-card.is-unavailable{opacity:0.62}.domain-entity-top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}.domain-entity-icon{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:11px;color:var(--entity-color);background:color-mix(in srgb,var(--entity-color) 13%,transparent)}.domain-entity-icon ha-icon{--mdc-icon-size:20px}.domain-entity-action{padding:0;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border:0;cursor:pointer;transition:background-color 0.18s ease,color 0.18s ease,transform 0.18s ease,opacity 0.18s ease}.domain-entity-action:active{transform:scale(0.94)}.domain-entity-action:disabled{opacity:0.36;cursor:not-allowed}.domain-entity-toggle{width:38px;height:22px;justify-content:flex-start;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 80%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.07),0 4px 10px rgba(15,23,42,0.08)}.domain-entity-toggle::before{content:"";width:18px;height:18px;margin-left:2px;border-radius:999px;background:#ffffff;box-shadow:0 2px 7px rgba(15,23,42,0.2);transition:transform 0.18s ease}.domain-entity-card.is-active .domain-entity-toggle{background:var(--entity-color)}.domain-entity-card.is-active .domain-entity-toggle::before{transform:translateX(16px)}.domain-entity-more,.domain-lock-action{width:30px;height:30px;border-radius:999px;color:color-mix(in srgb,var(--primary-text-color) 52%,transparent);background:color-mix(in srgb,var(--secondary-background-color) 70%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.05)}.domain-lock-action.is-unlocked{color:#ffffff;background:var(--entity-color);box-shadow:0 8px 16px color-mix(in srgb,var(--entity-color) 24%,transparent)}.domain-entity-more ha-icon,.domain-lock-action ha-icon{--mdc-icon-size:17px}.domain-cover-actions{min-height:32px;padding:3px;display:inline-flex;align-items:center;gap:3px;flex:0 0 auto;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 74%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.055),0 6px 14px rgba(15,23,42,0.08)}.domain-cover-action{width:26px;height:26px;border-radius:999px;color:color-mix(in srgb,var(--primary-text-color) 58%,transparent);background:transparent}.domain-cover-action.active{color:#ffffff;background:var(--entity-color);box-shadow:0 6px 12px color-mix(in srgb,var(--entity-color) 22%,transparent)}.domain-cover-action ha-icon{--mdc-icon-size:16px}.domain-entity-copy{min-width:0}.domain-entity-meta{margin-bottom:3px;color:color-mix(in srgb,var(--secondary-text-color) 78%,transparent);font-size:11px;font-weight:800;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.domain-entity-name{color:var(--primary-text-color);font-size:15px;font-weight:850;line-height:1.05;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.domain-entity-status{margin-top:5px;color:color-mix(in srgb,var(--secondary-text-color) 84%,transparent);font-size:12px;font-weight:760;line-height:1.15;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.loading{display:flex;align-items:center;justify-content:center;height:200px;font-size:16px;opacity:0.6}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;text-align:center}.empty-state ha-icon{--mdc-icon-size:64px;opacity:0.3;margin-bottom:16px}.empty-state-text{font-size:16px;opacity:0.6}.custom-description{display:flex;align-items:flex-start;gap:12px;background:var(--warning-color);color:white;padding:16px;border-radius:8px;margin-bottom:24px}.custom-description ha-icon{--mdc-icon-size:20px;margin-top:2px;flex-shrink:0}.custom-description p{margin:0;line-height:1.5;font-size:14px}@media (max-width:600px){:host{--mdc-dialog-min-width:min(calc(100vw - 4px),480px);--mdc-dialog-max-width:min(calc(100vw - 4px),480px);--mdc-dialog-min-height:calc(100dvh - 54px);--mdc-dialog-max-height:calc(100dvh - 54px);--ha-dialog-min-height:calc(100dvh - 54px);--ha-dialog-max-height:calc(100dvh - 54px);--vertical-align-dialog:flex-end;--dialog-surface-margin-top:54px;--dialog-container-padding:0;--ha-dialog-scrim-backdrop-filter:brightness(66%) blur(2px);--mdc-dialog-scrim-color:rgba(0,0,0,0.34)}ha-dialog{margin:0 !important;border-radius:24px 24px 0 0 !important;--mdc-dialog-container-elevation:0 18px 50px rgba(15,23,42,0.28);--ha-dialog-border-radius:24px 24px 0 0;--ha-dialog-show-duration:1ms;--show-duration:1ms;--ha-dialog-hide-duration:160ms;--hide-duration:160ms}ha-dialog .mdc-dialog__surface{border-radius:24px 24px 0 0 !important;overflow:hidden}ha-dialog-header{position:relative;padding-top:22px}.sheet-handle{display:block;position:absolute;top:8px;left:50%;width:38px;height:4px;border-radius:999px;transform:translateX(-50%);background:color-mix(in srgb,var(--secondary-text-color) 24%,transparent)}.content{max-height:calc(100dvh - 148px);padding:12px 12px calc(84px + env(safe-area-inset-bottom,0px)) !important}.area-section{margin-bottom:16px;border-radius:14px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding:12px}.domain-entity-card{min-height:126px}}:host{--mdc-dialog-max-width:900px}ha-dialog{--ha-dialog-border-radius:14px;--mdc-dialog-container-elevation:0 24px 64px rgba(8,13,24,0.24)}ha-dialog-header{min-height:64px;padding:10px 14px;background:var(--card-background-color);box-shadow:inset 0 -1px 0 color-mix(in srgb,var(--divider-color) 65%,transparent)}ha-dialog-header span[slot="title"]{font-size:20px;font-weight:900;line-height:1.05}.content{padding:14px 16px 18px !important;background:var(--primary-background-color)}.domain-actions{margin-bottom:12px}.dialog-view-all,.domain-action-button{min-height:36px;border-radius:999px;font-size:12px}.area-section{margin-bottom:12px;border-radius:11px;background:var(--card-background-color);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 7%,transparent),0 8px 22px rgba(15,23,42,0.04)}.area-header{min-height:48px;padding:10px 12px 0}.area-icon{width:30px;height:30px;border-radius:8px}.area-icon ha-icon{--mdc-icon-size:17px}.area-name{font-size:15px;font-weight:850}.entity-count{font-size:11px}.entities-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;padding:10px 12px 12px}.domain-entity-card{min-height:108px;padding:11px;border-radius:10px;background:var(--card-background-color);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 6%,transparent),0 6px 16px rgba(15,23,42,0.04)}.domain-entity-icon{width:32px;height:32px;border-radius:9px}.domain-entity-icon ha-icon{--mdc-icon-size:18px}.domain-entity-name{font-size:13px}.domain-entity-status{font-size:11px}@media (max-width:900px) and (min-width:601px){.entities-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width:600px){.content{padding:12px 12px calc(84px + env(safe-area-inset-bottom,0px)) !important}.area-section{border-radius:14px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.domain-entity-card{min-height:116px}}.dialog-title-line{min-width:0;display:inline-flex;align-items:center;gap:10px;flex-wrap:wrap}.dialog-title-text{font-size:20px;font-weight:900;line-height:1.05}.dialog-header-destination{min-height:30px;padding:0 10px;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:5px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 10%,var(--card-background-color));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-color) 14%,transparent);font:inherit;font-size:11px;font-weight:850;cursor:pointer}.dialog-header-destination:hover{background:color-mix(in srgb,var(--primary-color) 15%,var(--card-background-color))}.dialog-header-destination ha-icon{--mdc-icon-size:16px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:10px !important}.domain-entity-card{min-height:112px !important}.domain-entity-name{overflow:visible !important;text-overflow:clip !important;white-space:normal !important;overflow-wrap:anywhere;display:block !important;-webkit-line-clamp:unset !important;-webkit-box-orient:initial !important;line-height:1.12 !important}.domain-entity-status{overflow:visible !important;text-overflow:clip !important;white-space:normal !important}@media (max-width:600px){.dialog-title-line{gap:7px}.dialog-title-text{font-size:18px}.dialog-header-destination{min-height:28px;padding:0 8px;font-size:10px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}:host{--mdc-dialog-max-width:760px}ha-dialog-header{min-height:62px !important;padding:10px 14px !important;background:var(--card-background-color) !important;box-shadow:inset 0 -1px 0 color-mix(in srgb,var(--divider-color) 70%,transparent)}.dialog-title-line{min-width:0 !important;display:inline-flex !important;align-items:center !important;gap:9px !important;flex-wrap:nowrap !important}.dialog-title-text{min-width:0 !important;font-size:20px !important;font-weight:900 !important;line-height:1.05 !important}.dialog-header-destination{flex:0 0 auto;min-height:30px !important;padding:0 10px !important;font-size:11px !important;white-space:nowrap !important}.content{padding:14px 16px 18px !important}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:10px !important}.domain-entity-card{min-width:0 !important;min-height:116px !important;padding:11px 12px !important}.domain-entity-copy{min-width:0 !important}.domain-entity-name,.domain-entity-meta,.domain-entity-status{max-width:100% !important;overflow:visible !important;text-overflow:clip !important;white-space:normal !important;overflow-wrap:anywhere !important}.domain-entity-name{display:block !important;-webkit-line-clamp:unset !important;-webkit-box-orient:initial !important;font-size:14px !important;line-height:1.12 !important}.domain-entity-meta{font-size:10px !important}.domain-entity-status{font-size:11px !important}@media (max-width:600px){.dialog-title-line{gap:6px !important}.dialog-title-text{font-size:18px !important}.dialog-header-destination{min-height:28px !important;padding:0 8px !important;font-size:10px !important}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}.dialog-title-icon{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:9px;color:var(--dialog-accent);background:color-mix(in srgb,var(--dialog-accent) 11%,transparent)}.dialog-title-icon ha-icon{--mdc-icon-size:19px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}.domain-entity-card{min-height:116px !important;height:auto !important}.domain-entity-name,.domain-entity-meta,.domain-entity-status{overflow:visible !important;text-overflow:clip !important;white-space:normal !important;overflow-wrap:anywhere !important}.domain-entity-status{color:var(--entity-color) !important;font-weight:800 !important}@media (max-width:600px){.dialog-title-line{flex-wrap:wrap !important}.dialog-title-icon{width:30px;height:30px}.dialog-header-destination{order:3}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}.content.room-context{padding:14px 16px 28px !important;overflow:auto !important}.content.room-context .area-section{margin-bottom:8px !important;overflow:visible !important;border-radius:10px !important;background:var(--card-background-color) !important;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 7%,transparent) !important}.content.room-context .area-header{min-height:42px !important;padding:7px 10px 0 !important;gap:8px !important}.content.room-context .area-icon{width:30px !important;height:30px !important;border-radius:8px !important}.content.room-context .area-name{font-size:14px !important;font-weight:850 !important}.content.room-context .entities-grid{grid-template-columns:repeat(4,minmax(0,1fr)) !important;gap:8px !important;padding:8px 10px 12px !important;overflow:visible !important}.content.room-context.custom-entities-context .entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:10px !important}.content.room-context.custom-entities-context .domain-entity-card{min-height:70px !important;height:auto !important}.content.room-context.custom-entities-context .domain-entity-name,.content.room-context.custom-entities-context .domain-entity-status{overflow:visible !important;text-overflow:clip !important;white-space:normal !important;overflow-wrap:anywhere !important}.content.room-context .domain-entity-card{min-height:62px !important;height:62px !important;padding:7px 9px !important;display:grid !important;grid-template-columns:36px minmax(0,1fr) auto !important;grid-template-rows:1fr !important;align-items:center !important;gap:8px !important;overflow:visible !important;border-radius:9px !important;background:var(--card-background-color) !important;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 7%,transparent),0 4px 10px rgba(15,23,42,0.04) !important}.content.room-context .domain-entity-top{display:contents !important}.content.room-context .domain-entity-icon{grid-column:1 !important;grid-row:1 !important;width:36px !important;height:36px !important;border-radius:8px !important}.content.room-context .domain-entity-copy{grid-column:2 !important;grid-row:1 !important;min-width:0 !important;display:flex !important;flex-direction:column !important;justify-content:center !important;gap:2px !important}.content.room-context .domain-entity-top>:not(.domain-entity-icon){grid-column:3 !important;grid-row:1 !important;align-self:center !important;justify-self:end !important}.content.room-context .domain-entity-name{overflow:hidden !important;font-size:12px !important;font-weight:850 !important;line-height:1.15 !important;text-overflow:ellipsis !important;white-space:nowrap !important}.content.room-context .domain-entity-status{overflow:hidden !important;font-size:10px !important;font-weight:650 !important;line-height:1.1 !important;text-overflow:ellipsis !important;white-space:nowrap !important}@media (max-width:1000px) and (min-width:601px){.content.room-context .entities-grid{grid-template-columns:repeat(3,minmax(0,1fr)) !important}}@media (max-width:600px){.content.room-context .entities-grid,.content.room-context.custom-entities-context .entities-grid{grid-template-columns:1fr !important}.content.room-context .domain-entity-card{min-height:58px !important;height:58px !important}}`,t([i({attribute:!1})],b.prototype,"hass",void 0),t([e()],b.prototype,"_params",void 0),t([e()],b.prototype,"_groupedEntities",void 0),t([e()],b.prototype,"_loading",void 0),t([e()],b.prototype,"_optimisticEntityStates",void 0),b=t([o("dwains-dashboard-next-domain-entities-dialog")],b);export{b as DwainsDomainEntitiesDialog};
