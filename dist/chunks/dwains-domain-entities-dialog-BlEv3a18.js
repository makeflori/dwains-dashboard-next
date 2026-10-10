import{_ as t,n as i,r as o,t as n}from"./state-Bpx-nWN3.js";import{m as e}from"./screensaver-media-Dt3mXObn.js";import{i as a,A as r,b as s,a as d}from"./lit-element-CR7MDbd3.js";import{i as c,c as p,j as m,l,s as h,n as x,m as g,r as f,d as u}from"./entity-names-fTuTEAx3.js";import{d as v,a as b,b as y}from"./index-DN6cGkm3.js";import{f as w}from"./fire-event-DQiSssdY.js";import{a as _,f as k}from"./dwains-bottom-nav-BZWZU6Rl.js";import"./dd-card-host-B6TrDgLd.js";import"./dwains-person-tile-Ch-e3yT9.js";import"./blueprints-YXvSQBN2.js";let $=class extends a{constructor(){super(...arguments),this._groupedEntities={},this._loading=!0,this._optimisticEntityStates={},this._entityCards=new Map,this._handleViewAll=()=>{const t=this._params?.onViewAll;this.closeDialog(),t?.()}}_t(t,i){return v(this.hass,t,i)}_tp(t,i){return b(this.hass,t,i)}async showDialog(t){this._params=t,this._loading=!0,await this._loadEntities()}closeDialog(){this._params=void 0,this._groupedEntities={},this._optimisticEntityStates={},this._entityCards.clear(),this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0),void 0!==this._optimisticCleanupTimer&&(window.clearTimeout(this._optimisticCleanupTimer),this._optimisticCleanupTimer=void 0),w(this,"dialog-closed",{dialog:this.localName})}updated(t){super.updated(t),t.has("hass")&&this.hass&&this._params&&!this._loading&&(this._reconcileOptimisticEntityStates(),this._updateEntityCards())}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._optimisticCleanupTimer&&(window.clearTimeout(this._optimisticCleanupTimer),this._optimisticCleanupTimer=void 0)}async _loadEntities(){if(!this._params||!this.hass)return;const{domain:t,areaId:i,config:o,filterByUnitOfMeasurement:n,deviceClass:e,entityIds:a}=this._params,r={},s=a?.length?new Set(a):void 0,d=o.areas||[],c=new Map(d.map(t=>[t.area_id,t])),p=Object.values(this.hass.states),m=[];p.forEach(a=>{const r=a.entity_id;if(s&&!s.has(r))return;const d=this.hass.entities?.[r];if(d?.hidden_by)return;const p=r.split(".")[0];if(p!==t)return;if(!a||"unavailable"===a.state)return;const l=o.entities?.find(t=>t.entity_id===r),h=l&&l.device_id?o.devices?.find(t=>t.device_id===l.device_id):null,x=l?.area_id||h?.area_id||this.hass?.entities?.[r]?.area_id;if("person"!==t&&!x)return;if(i&&x!==i)return;if(!("person"===t||x&&c.has(x)))return;const g=p;if(!(x&&o.areas_options?.[x]?.groups_options?.[g]?.hidden||[]).includes(r)){if(n){if(a.attributes?.unit_of_measurement!==n)return}else if("binary_sensor"===t&&e){const t=a.attributes?.device_class;if(t!==e)return}m.push({entity_id:r,...x?{area_id:x}:{},hidden:!1})}}),m.forEach(i=>{if("person"===t){const t="people";r[t]||(r[t]={areaName:this._t("home.people"),entities:[]}),r[t].entities.push(i)}else{const t=i.area_id,o=c.get(t);if(!o)return;r[t]||(r[t]={areaName:o.name,entities:[]}),r[t].entities.push(i)}}),this._groupedEntities=r,this._loading=!1,this._updateInterval||(this._updateInterval=window.setInterval(()=>{this._checkForEntityChanges()},1e3))}_checkForEntityChanges(){if(!this._params||!this.hass||this._loading)return;const{domain:t,filterByUnitOfMeasurement:i,deviceClass:o}=this._params;let n=!1;Object.entries(this._groupedEntities).forEach(([e,a])=>{a.entities.forEach(e=>{const a=this.hass.states[e.entity_id];if(!a)return void(n=!0);this._shouldEntityBeVisible(a,t,i,o)||(n=!0)})}),n&&this._loadEntities()}_shouldEntityBeVisible(t,i,o,n){return"unavailable"!==t.state&&(o?t.attributes?.unit_of_measurement===o:"binary_sensor"!==i||!n||t.attributes?.device_class===n)}_updateEntityCards(){this._entityCards.forEach((t,i)=>{t&&"hass"in t&&(t.hass=this.hass)})}render(){if(!this._params)return r;const{domain:t,filterByUnitOfMeasurement:i,deviceClass:o,customTitle:n}=this._params;let a=n||this._getLocalizedDomainTitle(t);if("W"===i)a=this._t("dialog.power_sensors");else if(o&&!n){a={motion:this._t("dialog.motion_sensors"),door:this._t("dialog.door_sensors"),window:this._t("dialog.window_sensors"),smoke:this._t("dialog.smoke_sensors"),gas:this._t("dialog.gas_sensors"),moisture:this._t("dialog.moisture_sensors"),occupancy:this._t("dialog.occupancy_sensors"),opening:this._t("dialog.opening_sensors"),presence:this._t("dialog.presence_sensors"),safety:this._t("dialog.safety_sensors"),tamper:this._t("dialog.tamper_sensors"),vibration:this._t("dialog.vibration_sensors")}[o]||this._getLocalizedDomainTitle(t)}const d=this._params?.deviceViewKey,l="W"===i?"mdi:flash":"cover_openings"===d?"mdi:door-open":"cover_shading"===d?"mdi:blinds-horizontal":"cover_gates"===d?"mdi:gate":c(t,o)||p(t),h="W"===i?m("wattage"):d&&d.startsWith("cover_")?m("cover"):this._entityColor(t,o);return s`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        @cancel=${()=>this.closeDialog()}
        .heading=${a}
        .type=${""}
        flexContent
        hideActions
      >
        <div slot="header" class="dd-domain-header">
          <div class="dd-domain-header-line" style=${`--dialog-accent: ${h};`}>
            <span class="dialog-title-icon" aria-hidden="true"><ha-icon icon=${l}></ha-icon></span>
            <span class="dialog-heading-copy">
              <span class="dialog-title-text">${a}</span>
              ${this._params?.onViewAll?s`
                <button class="dialog-header-destination" type="button" @click=${this._handleViewAll}>
                  <span>${this._params.viewAllLabel||"Open device view"}</span>
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </button>
              `:r}
            </span>
            <ha-icon-button class="dd-domain-header-close"
              .label=${this._t("common.close")}
              .path=${e}
              @click=${()=>this.closeDialog()}
            ></ha-icon-button>
          </div>
        </div>

        <div class="content ${this._params?.areaId?"room-context":""} ${this._params?.customEntities?"custom-entities-context":""} ${this._params?.homeInformation?"home-information-context":""} ${"devices"===this._params?.homeInformationPresentation?"device-presentation-context":""} ${this._params?.domain?`domain-${this._params.domain}`:""}">
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
      <div class="dialog-global-actions">${this._renderDomainActions(t)}</div>
      <div class="area-sections-grid">
        ${l(this._orderedGroupedEntries(),([t])=>t,([t,i])=>this._renderAreaSection(t,i))}
      </div>
    `}_orderedGroupedEntries(){const t=Object.entries(this._groupedEntities);if(!this._params?.homeInformation||"person"===this._params.domain)return t;const i=this._params.config,o=h(i?.areas||[],i?.areas_display,y(this.hass)),n=new Map(o.map((t,i)=>[t.area_id,i]));return[...t].sort(([t,i],[o,e])=>{const a=n.get(t)??Number.MAX_SAFE_INTEGER,r=n.get(o)??Number.MAX_SAFE_INTEGER;return a!==r?a-r:i.areaName.localeCompare(e.areaName)})}_renderCustomEntities(){const{customEntities:t,customDescription:i}=this._params;return t&&0!==t.length?s`
      ${i?s`
        <div class="custom-description">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <p>${i}</p>
        </div>
      `:r}

      <div class="entity-section">
        <div class="entities-grid">
          ${l(t,t=>t,t=>this._renderEntityCard({entity_id:t,hidden:!1}))}
        </div>
      </div>
    `:s`
        <div class="empty-state">
          <ha-icon icon="mdi:check-circle-outline"></ha-icon>
          <div class="empty-state-text">
            ${this._t("dialog.problem_empty")}
          </div>
        </div>
      `}_allDialogEntities(){return Object.values(this._groupedEntities).flatMap(t=>t.entities)}_renderDomainActions(t){const i=this._params?.domain||"",o=t.map(t=>t.entity_id).filter(t=>this.hass.states[t]);if(!o.length)return r;const n=this._entityColor(i),e=(t,i,e)=>s`
      <button
        class="domain-action-button"
        type="button"
        style=${`--domain-color: ${n};`}
        @click=${()=>this._runBulkDomainAction(o,e,t)}
      >
        <ha-icon icon=${i}></ha-icon>
        <span>${t}</span>
      </button>
    `;return["light","switch","fan","input_boolean"].includes(i)?s`
        <div class="domain-actions">
          ${e(this._t("action.turn_on_all"),"mdi:power","turn_on")}
          ${e(this._t("action.turn_off_all"),"mdi:power-off","turn_off")}
        </div>
      `:"cover"===i?s`
        <div class="domain-actions">
          ${e(this._t("action.open_all"),"mdi:arrow-up","open_cover")}
          ${e(this._t("action.close_all"),"mdi:arrow-down","close_cover")}
        </div>
      `:"lock"===i?s`
        <div class="domain-actions">
          ${e(this._t("action.unlock_all"),"mdi:lock-open-variant-outline","unlock")}
          ${e(this._t("action.lock_all"),"mdi:lock-outline","lock")}
        </div>
      `:r}_renderAreaSection(t,i){let o="";if(this._params?.config?.areas){const i=this._params.config.areas.find(i=>i.area_id===t);i?.icon&&(o=i.icon)}const n="person"!==this._params?.domain,e=this._params?.domain||"",a=["light","switch","fan","input_boolean"].includes(e),d="devices"===this._params?.homeInformationPresentation&&!0===this._params?.homeInformation&&"cover"===e,c=i.entities.filter(t=>{const i=this.hass.states[t.entity_id];return i&&this._isEntityActiveForUi(i,e)}).length,p=c===i.entities.length,m=i.entities.map(t=>t.entity_id),h=i.entities.length<=1;return s`
      <div class="area-section ${h?"half-room":"full-room"}">
        ${n?s`<div class="area-header">
          ${d?s`
            <div class="area-icon">
              <ha-icon icon="mdi:floor-plan"></ha-icon>
            </div>
          `:o?s`
            <div class="area-icon">
              <ha-icon icon="${o}"></ha-icon>
            </div>
          `:r}
          <div class="area-name">${i.areaName}</div>
          ${d?s`
            <div class="device-room-master-actions domain-cover" role="group">
              <button
                class="device-room-master-action ${c>0?"active":""}"
                type="button"
                title=${this._t("action.open_all")}
                aria-label=${this._t("action.open_all")}
                @click=${t=>{t.stopPropagation(),this._runBulkDomainAction(m,"open_cover",this._t("action.open_all"),!1)}}
              ><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button
                class="device-room-master-action ${0===c?"active":""}"
                type="button"
                title=${this._t("action.close_all")}
                aria-label=${this._t("action.close_all")}
                @click=${t=>{t.stopPropagation(),this._runBulkDomainAction(m,"close_cover",this._t("action.close_all"),!1)}}
              ><ha-icon icon="mdi:arrow-down"></ha-icon></button>
            </div>
          `:a?s`
            <button class="area-master-toggle" type="button"
              style=${`--entity-color: ${this._entityColor(e)};`}
              title=${p?this._t("action.turn_off_all"):this._t("action.turn_on_all")}
              @click=${t=>{t.stopPropagation(),this._runBulkDomainAction(m,p?"turn_off":"turn_on",p?this._t("action.turn_off_all"):this._t("action.turn_on_all"),!1)}}>
              <span>${c}/${i.entities.length}</span>
              <span class="area-master-track ${p?"is-on":""}"></span>
            </button>
          `:!this._params?.homeInformation||"sensor"!==e&&"climate"!==e?s`<div class="entity-count">${i.entities.length}</div>`:r}
        </div>`:r}
        <div class="entities-grid">
          ${l(i.entities,t=>t.entity_id,t=>this._renderEntityCard(t))}
        </div>
      </div>
    `}_renderEntityCard(t){const i=this.hass.states[t.entity_id];if(!i)return r;const o=t.entity_id.split(".")[0]||"unknown";if("devices"===this._params?.homeInformationPresentation&&"person"===o){const o=this._getEffectiveEntityState(i),n=o.attributes?.friendly_name||this.hass.entities?.[t.entity_id]?.name||t.entity_id,e=x(n,this._entityAreaName(t));return s`
        <dwains-dashboard-next-person-tile
          .hass=${this.hass}
          .entityId=${t.entity_id}
          .displayName=${e}
          role="button"
          tabindex="0"
          aria-label=${e}
          @click=${()=>this._showMoreInfo(t.entity_id)}
          @keydown=${i=>this._handleEntityKeydown(i,t.entity_id)}
        ></dwains-dashboard-next-person-tile>
      `}if("devices"===this._params?.homeInformationPresentation){const i=g({hass:this.hass,config:this._params.config,entity:t,surface:"devices_cards"});if(["light","cover","climate","sensor"].includes(o)||i&&!1!==i.enabled)return s`
          <div class="entity-card-wrapper ${o}-entity-card device-presentation-card ${o}-card ${"sensor"===o?"sensor-card":""}">
            <dwains-dashboard-next-card-host
              framed
              style=${"cover"===o?`--primary-color: ${m("cover")}; --state-cover-open-color: ${m("cover")}; --state-cover-opening-color: ${m("cover")}; --state-cover-active-color: ${m("cover")};`:""}
              .hass=${this.hass}
              .config=${f({hass:this.hass,config:this._params.config,entity:t.entity_id,surface:"devices_cards"})}
            ></dwains-dashboard-next-card-host>
          </div>
        `}const n=this._getEffectiveEntityState(i);if("todo"===o)return s`
        <div class="domain-todo-list-card" data-entity=${t.entity_id}>
          <dwains-dashboard-next-card-host
            eager
            .hass=${this.hass}
            .config=${{type:"todo-list",entity:t.entity_id}}
          ></dwains-dashboard-next-card-host>
        </div>
      `;const e=n.attributes?.device_class,a=this.hass.entities?.[t.entity_id]?.icon||n.attributes?.icon||c(o,e)||p(o),d="person"===o?n.attributes?.entity_picture:void 0,l="person"===o&&Number.isFinite(Number(n.attributes?.latitude))&&Number.isFinite(Number(n.attributes?.longitude)),h=n.attributes?.friendly_name||this.hass.entities?.[t.entity_id]?.name||t.entity_id,u=this._entityAreaName(t),v=x(h,u),b=this._isEntityActiveForUi(n,o),y=["domain-entity-card",`domain-entity-${o}`,"person"===o?"person-card":"",l?"has-location-preview":"",b?"is-active":"is-off",this._isUnavailable(n)?"is-unavailable":""].join(" ");return s`
      <article
        class=${y}
        style=${`--entity-color: ${this._entityColor(o,e)};`}
        role="button"
        tabindex="0"
        aria-label=${v}
        @click=${()=>this._showMoreInfo(t.entity_id)}
        @keydown=${i=>this._handleEntityKeydown(i,t.entity_id)}
      >
        <div class="domain-entity-top">
          <div class="domain-entity-icon ${d?"has-entity-picture":""}">
            ${d?s`<img class="domain-entity-avatar" src=${d} alt=${v}>`:s`<ha-icon icon=${a}></ha-icon>`}
          </div>
          ${this._renderEntityActions(n,o,b)}
        </div>
        <div class="domain-entity-copy">
          <div class="domain-entity-name">${v}</div>
          <div class="domain-entity-status">${this._entityStatusText(n,o)}</div>
        </div>
        ${l?s`
          <div class="person-location-preview" aria-label=${`${v} location`}>
            <dwains-dashboard-next-card-host
              eager
              .hass=${this.hass}
              .config=${{type:"map",entities:[t.entity_id],hours_to_show:0,default_zoom:14,auto_fit:!0,fit_zones:!1,show_zone_radius:!1,aspect_ratio:"4:1"}}
            ></dwains-dashboard-next-card-host>
          </div>
        `:r}
      </article>
    `}_renderEntityActions(t,i,o){const n=t?.entity_id,e=this._entityActionKind(i),a=this._isUnavailable(t);if("toggle"===e)return s`
        <button
          class="domain-entity-action domain-entity-toggle"
          type="button"
          title=${o?this._t("action.turn_off"):this._t("action.turn_on")}
          aria-label=${o?this._t("action.turn_off"):this._t("action.turn_on")}
          ?disabled=${a}
          @click=${o=>this._handleEntityToggle(o,t,i)}
        ></button>
      `;if("cover"===e)return this._renderCoverActions(t);if("lock"===e){const o=this._isEntityActiveForUi(t,i);return s`
        <button
          class="domain-entity-action domain-lock-action ${o?"is-unlocked":""}"
          type="button"
          title=${o?this._t("action.lock"):this._t("action.unlock")}
          aria-label=${o?this._t("action.lock"):this._t("action.unlock")}
          ?disabled=${a}
          @click=${i=>this._handleLockAction(i,t)}
        >
          <ha-icon icon=${o?"mdi:lock-open-variant-outline":"mdi:lock-outline"}></ha-icon>
        </button>
      `}return this._params?.homeInformation?r:s`
      <button
        class="domain-entity-action domain-entity-more"
        type="button"
        title=${this._t("action.more_info")}
        aria-label=${this._t("action.more_info")}
        @click=${t=>this._handleMoreInfo(t,n)}
      >
        <ha-icon icon="mdi:chevron-right"></ha-icon>
      </button>
    `}_renderCoverActions(t){const i=String(t?.state||"").toLowerCase(),o=this._isUnavailable(t),n=this._coverSupportsFeature(t,1),e=this._coverSupportsFeature(t,2),a=this._coverSupportsFeature(t,8);return s`
      <div class="domain-cover-actions" @click=${t=>t.stopPropagation()}>
        ${n?s`
          <button
            class="domain-entity-action domain-cover-action ${"opening"===i?"active":""}"
            type="button"
            title=${this._t("action.open")}
            aria-label=${this._t("action.open")}
            ?disabled=${o}
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
            ?disabled=${o}
            @click=${i=>this._handleCoverAction(i,t,"stop")}
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>
        `:r}
        ${e?s`
          <button
            class="domain-entity-action domain-cover-action ${"closing"===i?"active":""}"
            type="button"
            title=${this._t("action.close")}
            aria-label=${this._t("action.close")}
            ?disabled=${o}
            @click=${i=>this._handleCoverAction(i,t,"close")}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
        `:r}
      </div>
  

    /* Final Home-information device-view parity.
       Standard domains use the same compact tiles as Devices; special domains
       keep their actual Lovelace device card. */
    .content.home-information-context.device-presentation-context .domain-entity-card {
      min-height: 62px !important;
      height: auto !important;
      padding: 8px 10px !important;
      display: grid !important;
      grid-template-columns: 36px minmax(0, 1fr) auto !important;
      align-items: center !important;
      gap: 9px !important;
      border-radius: 8px !important;
      box-shadow: 0 3px 9px rgba(15, 23, 42, 0.035) !important;
    }

    .content.home-information-context.device-presentation-context .domain-entity-top {
      display: contents !important;
    }

    .content.home-information-context.device-presentation-context .domain-entity-icon {
      grid-column: 1 !important;
      grid-row: 1 !important;
      width: 36px !important;
      height: 36px !important;
      border-radius: 8px !important;
    }

    .content.home-information-context.device-presentation-context .domain-entity-icon ha-icon {
      --mdc-icon-size: 20px !important;
    }

    .content.home-information-context.device-presentation-context .domain-entity-icon.has-entity-picture {
      overflow: hidden;
      padding: 0 !important;
      background: var(--secondary-background-color) !important;
    }

    .content.home-information-context.device-presentation-context .domain-entity-avatar {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      border-radius: inherit;
    }

    .content.home-information-context.device-presentation-context .domain-entity-copy {
      grid-column: 2 !important;
      grid-row: 1 !important;
      min-width: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      gap: 2px !important;
    }

    .content.home-information-context.device-presentation-context .domain-entity-top > :not(.domain-entity-icon) {
      grid-column: 3 !important;
      grid-row: 1 !important;
      justify-self: end !important;
      align-self: center !important;
    }

    .content.home-information-context.device-presentation-context .domain-entity-name {
      margin: 0 !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
      overflow-wrap: normal !important;
      display: block !important;
      font-size: 12px !important;
      font-weight: 850 !important;
      line-height: 1.15 !important;
    }

    .content.home-information-context.device-presentation-context .domain-entity-status {
      margin: 0 !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
      color: var(--secondary-text-color) !important;
      font-size: 10px !important;
      font-weight: 650 !important;
      line-height: 1.1 !important;
    }

    .content.home-information-context.device-presentation-context .domain-entity-card.is-active .domain-entity-status {
      color: var(--entity-color) !important;
    }

    .content.home-information-context.device-presentation-context .device-presentation-card {
      min-width: 0;
      overflow: visible;
    }

    /* Use the same special-device wrapper geometry as Geräte. */
    .content.home-information-context.device-presentation-context .entity-card-wrapper {
      min-height: 60px;
      position: relative;
      min-width: 0;
    }

    .content.home-information-context.device-presentation-context .cover-entity-card > dwains-dashboard-next-card-host,
    .content.home-information-context.device-presentation-context .light-entity-card > dwains-dashboard-next-card-host,
    .content.home-information-context.device-presentation-context .sensor-entity-card > dwains-dashboard-next-card-host,
    .content.home-information-context.device-presentation-context .climate-entity-card > dwains-dashboard-next-card-host {
      display: block;
    }

    /* Thermostat rendering exactly mirrors Geräte > Klima: render at its
       natural width and scale the finished card down by 30%. */
    .content.home-information-context.device-presentation-context .device-presentation-card.climate-card {
      min-height: 0;
      overflow: visible;
    }

    .content.home-information-context.device-presentation-context .device-presentation-card.climate-card > dwains-dashboard-next-card-host {
      display: block;
      width: calc(100% / 0.7);
      min-width: 0;
      transform: scale(0.7);
      transform-origin: top left;
    }

    @media (max-width: 600px) {
      .content.home-information-context.device-presentation-context .entities-grid {
        grid-template-columns: 1fr !important;
      }

      .content.home-information-context.device-presentation-context .domain-entity-card {
        min-height: 58px !important;
        padding: 7px 9px !important;
        grid-template-columns: 34px minmax(0, 1fr) auto !important;
        gap: 8px !important;
      }

      .content.home-information-context.device-presentation-context .domain-entity-icon {
        width: 34px !important;
        height: 34px !important;
      }
    }


    /* Device-view parity for cover room groups on all screen sizes. */
    .content.home-information-context.device-presentation-context.domain-cover .area-section {
      background: var(--card-background-color) !important;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 7%, transparent) !important;
      border-radius: 12px !important;
      padding: 14px !important;
      margin-bottom: 14px !important;
      box-shadow: 0 5px 14px rgba(15, 23, 42, 0.035) !important;
    }

    .content.home-information-context.device-presentation-context.domain-cover .area-header {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 8px !important;
      margin: 0 0 12px !important;
      padding: 0 !important;
      min-height: 30px !important;
    }

    .content.home-information-context.device-presentation-context.domain-cover .area-icon {
      width: auto !important;
      height: auto !important;
      min-width: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      color: var(--secondary-text-color) !important;
    }

    .content.home-information-context.device-presentation-context.domain-cover .area-icon ha-icon {
      --mdc-icon-size: 20px !important;
      opacity: .8;
    }

    .content.home-information-context.device-presentation-context.domain-cover .area-name {
      flex: 1 1 auto;
      min-width: 0;
      font-size: 16px !important;
      font-weight: 500 !important;
      text-align: left !important;
    }

    .content.home-information-context.device-presentation-context.domain-cover .device-room-master-actions {
      --mobile-domain-accent: #0d98aa;
      height: 30px;
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      overflow: hidden;
      border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
      border-radius: 999px;
      background: color-mix(in srgb, var(--card-background-color) 92%, transparent);
      color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
    }

    .content.home-information-context.device-presentation-context.domain-cover .device-room-master-action {
      width: 34px;
      height: 30px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: transparent;
      color: inherit;
    }

    .content.home-information-context.device-presentation-context.domain-cover .device-room-master-action + .device-room-master-action {
      border-left: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
    }

    .content.home-information-context.device-presentation-context.domain-cover .device-room-master-action ha-icon {
      --mdc-icon-size: 17px;
    }

    .content.home-information-context.device-presentation-context.domain-cover .entities-grid {
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)) !important;
      gap: 12px !important;
    }

    /* Final mobile Home Information behavior:
       bottom anchored, safe-area aware and compact. */
    @media (max-width: 600px) {
      :host {
        --mdc-dialog-min-width: 100vw !important;
        --mdc-dialog-max-width: 100vw !important;
        --mdc-dialog-min-height: 0 !important;
        --ha-dialog-min-height: 0 !important;
        --mdc-dialog-max-height: calc(100dvh - max(env(safe-area-inset-top, 0px), 56px)) !important;
        --ha-dialog-max-height: calc(100dvh - max(env(safe-area-inset-top, 0px), 56px)) !important;
        --vertical-align-dialog: flex-end !important;
        --dialog-surface-margin-top: auto !important;
        --dialog-container-padding: 0 !important;
      }

      ha-dialog {
        width: 100vw !important;
        max-width: 100vw !important;
        margin: 0 !important;
        height: auto !important;
        max-height: calc(100dvh - max(env(safe-area-inset-top, 0px), 56px)) !important;
        border-radius: 24px 24px 0 0 !important;
        --ha-dialog-border-radius: 24px 24px 0 0;
      }

      ha-dialog .mdc-dialog__surface {
        max-height: calc(100dvh - max(env(safe-area-inset-top, 0px), 56px)) !important;
        border-radius: 24px 24px 0 0 !important;
        overflow: hidden !important;
      }

      .dd-domain-header {
        padding: 14px 14px 12px !important;
        touch-action: auto !important;
      }

      .dd-domain-header .sheet-handle,
      .sheet-handle {
        display: none !important;
      }

      .dd-domain-header-line {
        gap: 10px !important;
        align-items: center !important;
      }

      .dd-domain-header-line .dialog-heading-copy,
      .dialog-heading-copy {
        height: auto !important;
        min-height: 0 !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        justify-content: center !important;
        gap: 5px !important;
      }

      .dd-domain-header .dialog-title-icon,
      .dialog-title-icon {
        flex: 0 0 48px !important;
        width: 48px !important;
        height: 48px !important;
        border-radius: 12px !important;
      }

      .dd-domain-header .dialog-title-icon ha-icon,
      .dialog-title-icon ha-icon {
        --mdc-icon-size: 25px !important;
      }

      .dd-domain-header-line .dialog-title-text {
        font-size: 20px !important;
        line-height: 1.05 !important;
      }

      .dialog-header-destination {
        min-height: 30px !important;
        padding: 0 10px !important;
        font-size: 11px !important;
      }

      .content {
        max-height: calc(100dvh - max(env(safe-area-inset-top, 0px), 56px) - 92px) !important;
        padding: 12px 12px calc(16px + env(safe-area-inset-bottom, 0px)) !important;
        overflow-y: auto !important;
        overscroll-behavior-y: contain !important;
      }

      /* Phones use one card per row. Desktop/tablet remains two columns. */
      .content.home-information-context.device-presentation-context.domain-person .entities-grid,
      .content.home-information-context.device-presentation-context.domain-person .area-sections-grid .area-section.half-room .entities-grid {
        grid-template-columns: minmax(0, 1fr) !important;
      }

      .content.home-information-context.device-presentation-context.domain-person dwains-dashboard-next-person-tile {
        --dd-person-tile-location-height: 186px;
        --dd-person-map-height: 124px;
      }

      .content.home-information-context.device-presentation-context.domain-climate .entities-grid {
        grid-template-columns: minmax(0, 1fr) !important;
      }

      /* Native thermostat cards must measure the real phone width.
         Scaling the host on mobile leaves the native controls unrendered. */
      .content.home-information-context.device-presentation-context .device-presentation-card.climate-card {
        min-height: 0 !important;
        height: auto !important;
        overflow: visible !important;
      }

      .content.home-information-context.device-presentation-context .device-presentation-card.climate-card > dwains-dashboard-next-card-host {
        width: 100% !important;
        min-width: 0 !important;
        transform: none !important;
      }

      /* Person: one useful mobile card, no half-width room-group residue. */
      .content.home-information-context.device-presentation-context.domain-person .area-section,
      .content.home-information-context.device-presentation-context.domain-person .area-section.half-room,
      .content.home-information-context.device-presentation-context.domain-person .area-sections-grid {
        width: 100% !important;
        max-width: none !important;
        grid-template-columns: minmax(0, 1fr) !important;
      }

      .content.home-information-context.device-presentation-context.domain-person dwains-dashboard-next-person-tile {
        --dd-person-tile-location-height: 160px;
        --dd-person-map-height: 98px;
      }

      /* Cover: mirror the mobile Devices view group language. */
      .content.home-information-context.device-presentation-context.domain-cover .dialog-global-actions {
        margin: 0 0 10px !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .domain-actions {
        justify-content: flex-end !important;
        gap: 8px !important;
        margin: 0 !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .domain-actions button {
        min-height: 34px !important;
        padding: 0 10px !important;
        border: 0 !important;
        border-radius: 999px !important;
        background: var(--card-background-color) !important;
        box-shadow:
          0 8px 18px rgba(15, 23, 42, 0.055),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 6%, transparent) !important;
        font-size: 11px !important;
        font-weight: 800 !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .area-section {
        padding: 10px !important;
        margin-bottom: 10px !important;
        border-radius: 12px !important;
        background: var(--card-background-color) !important;
        border: 1px solid color-mix(in srgb, var(--primary-text-color) 7%, transparent) !important;
        box-shadow: 0 5px 14px rgba(15, 23, 42, 0.035) !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .area-header {
        min-height: 30px !important;
        margin: 0 0 10px !important;
        padding: 0 !important;
        gap: 8px !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .area-icon {
        width: 30px !important;
        height: 30px !important;
        border-radius: 8px !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .area-name {
        font-size: 14px !important;
        font-weight: 850 !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .device-room-master-actions {
        height: 30px;
        margin-left: auto;
        display: inline-flex;
        align-items: center;
        overflow: hidden;
        border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
        border-radius: 999px;
        background: color-mix(in srgb, var(--card-background-color) 92%, transparent);
        color: color-mix(in srgb, var(--primary-text-color) 58%, transparent);
      }

      .content.home-information-context.device-presentation-context.domain-cover .device-room-master-action {
        width: 34px;
        height: 30px;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background: transparent;
        color: inherit;
      }

      .content.home-information-context.device-presentation-context.domain-cover .device-room-master-action + .device-room-master-action {
        border-left: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
      }

      .content.home-information-context.device-presentation-context.domain-cover .device-room-master-action ha-icon {
        --mdc-icon-size: 17px;
      }

      /* Room climate: tighten outer rhythm without clipping native sensor graphs. */
      .content.home-information-context.device-presentation-context.domain-sensor .area-section {
        padding: 9px !important;
        margin-bottom: 9px !important;
      }

      .content.home-information-context.device-presentation-context.domain-sensor .area-header {
        min-height: 36px !important;
        padding: 0 2px 7px !important;
      }

      .content.home-information-context.device-presentation-context.domain-sensor .entities-grid {
        gap: 8px !important;
      }

      .content.home-information-context.device-presentation-context .device-presentation-card.sensor-card {
        min-height: 0 !important;
      }

      .content.home-information-context.device-presentation-context.domain-sensor .device-presentation-card.sensor-card > dwains-dashboard-next-card-host {
        zoom: .74;
        width: calc(100% / .74) !important;
      }

      .content.home-information-context.device-presentation-context.domain-sensor .area-section {
        padding: 7px !important;
        margin-bottom: 7px !important;
      }

      .content.home-information-context.device-presentation-context.domain-sensor .area-header {
        min-height: 32px !important;
        padding: 0 2px 5px !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .area-section {
        padding: 10px !important;
        margin-bottom: 10px !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .area-header {
        margin-bottom: 10px !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .entities-grid {
        grid-template-columns: 1fr !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .area-name {
        text-align: left !important;
      }
    }


    /* Final mobile dialog sizing: all DD Home Information sheets stay below
       the iOS status area and scroll internally instead of becoming full-height. */
    @media (max-width: 600px) {
      :host {
        --mdc-dialog-min-height: 0 !important;
        --ha-dialog-min-height: 0 !important;
        --mdc-dialog-max-height: 88dvh !important;
        --ha-dialog-max-height: 88dvh !important;
        --vertical-align-dialog: flex-end !important;
        --dialog-surface-margin-top: auto !important;
        --dialog-container-padding: 0 !important;
      }

      ha-dialog,
      ha-dialog .mdc-dialog__surface {
        height: auto !important;
        max-height: 88dvh !important;
      }

      .content {
        max-height: calc(88dvh - 86px) !important;
        overflow-y: auto !important;
      }

      /* Thermostats: exactly the Devices renderer and half-screen cards. */
      .content.home-information-context.device-presentation-context.domain-climate .entities-grid,
      .content.home-information-context.device-presentation-context.domain-climate .area-section.half-room .entities-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        gap: 8px !important;
      }

      .content.home-information-context.device-presentation-context.domain-climate .climate-entity-card {
        width: 100% !important;
        min-width: 0 !important;
        overflow: visible !important;
      }

      .content.home-information-context.device-presentation-context.domain-climate .climate-entity-card > dwains-dashboard-next-card-host {
        width: calc(100% / 0.7) !important;
        min-width: 0 !important;
        transform: scale(0.7) !important;
        transform-origin: top left !important;
      }

      /* Beschattung: same global and room controls as Devices. */
      .content.home-information-context.device-presentation-context.domain-cover .dialog-global-actions .domain-actions {
        justify-content: flex-end !important;
        gap: 8px !important;
        margin: 0 0 12px !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .dialog-global-actions .domain-action-button {
        min-height: 34px !important;
        padding: 0 10px !important;
        font-size: 11px !important;
        box-shadow:
          0 8px 18px rgba(15, 23, 42, 0.055),
          inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 6%, transparent) !important;
      }

      .content.home-information-context.device-presentation-context.domain-cover .device-room-master-action:hover,
      .content.home-information-context.device-presentation-context.domain-cover .device-room-master-action.active {
        background: color-mix(in srgb, var(--mobile-domain-accent) 12%, var(--card-background-color)) !important;
        color: var(--mobile-domain-accent) !important;
      }
    }


    /* Personen popup: responsive desktop grid. A single person uses the full
       dialog width; two or more cards split only when there is enough room. */
    @media (min-width: 601px) {
      .content.home-information-context.device-presentation-context.domain-person .entities-grid,
      .content.home-information-context.device-presentation-context.domain-person .area-sections-grid .area-section.half-room .entities-grid {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
        gap: 10px !important;
        width: 100% !important;
      }

      .content.home-information-context.device-presentation-context.domain-person dwains-dashboard-next-person-tile {
        --dd-person-tile-location-height: 250px;
        --dd-person-map-height: 188px;
        width: 100% !important;
        min-width: 0 !important;
      }
    }

  `}async _runBulkDomainAction(t,i,o,n=!0){const e=this._params?.domain||"",a=t.length;if(!(!n||window.confirm(this._t("action.confirm_bulk",{action:o,entities:this._tp("common.entity",a)}))))return;const r="turn_on"===i?"on":"turn_off"===i?"off":"open_cover"===i?"open":"close_cover"===i?"closed":"unlock"===i?"unlocked":"lock"===i?"locked":void 0;r&&this._setOptimisticEntityStates(t,r);try{if(["light","switch","fan","input_boolean"].includes(e))return void await this.hass.callService(e,i,{entity_id:t});if("cover"===e)return void await this.hass.callService("cover",i,{entity_id:t});"lock"===e&&await this.hass.callService("lock",i,{entity_id:t})}catch(o){this._clearOptimisticEntityStates(t),console.warn(`Failed to run ${i} for ${e}:`,o)}}_handleEntityKeydown(t,i){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._showMoreInfo(i))}async _handleEntityToggle(t,i,o){t.stopPropagation();const n=i?.entity_id;if(n){try{if(["light","switch","fan","input_boolean"].includes(o)){const t=!this._isEntityActiveForUi(i,o);return this._setOptimisticEntityStates([n],t?"on":"off"),void await this.hass.callService(o,t?"turn_on":"turn_off",{entity_id:n})}}catch(t){return this._clearOptimisticEntityStates([n]),void console.warn(`Failed to toggle entity ${n}:`,t)}this._showMoreInfo(n)}}async _handleCoverAction(t,i,o){t.stopPropagation();const n=i?.entity_id;if(!n)return;const e="open"===o?"open_cover":"close"===o?"close_cover":"stop_cover",a="open"===o?"open":"close"===o?"closed":void 0;a&&this._setOptimisticEntityStates([n],a);try{await this.hass.callService("cover",e,{entity_id:n})}catch(t){this._clearOptimisticEntityStates([n]),console.warn(`Failed to ${o} cover ${n}:`,t)}}async _handleLockAction(t,i){t.stopPropagation();const o=i?.entity_id;if(o)try{const t=this._isEntityActiveForUi(i,"lock");this._setOptimisticEntityStates([o],t?"locked":"unlocked"),await this.hass.callService("lock",t?"lock":"unlock",{entity_id:o})}catch(t){this._clearOptimisticEntityStates([o]),console.warn(`Failed to toggle lock ${o}:`,t)}}_handleMoreInfo(t,i){t.stopPropagation(),i&&this._showMoreInfo(i)}_showMoreInfo(t){const i=document.querySelector("home-assistant");w(i||window,"hass-more-info",{entityId:t})}_entityActionKind(t){return["light","switch","fan","input_boolean"].includes(t)?"toggle":"cover"===t?"cover":"lock"===t?"lock":"more"}_coverSupportsFeature(t,i){const o=Number(t?.attributes?.supported_features);return!Number.isFinite(o)||o<=0?1===i||2===i:0!==(o&i)}_entityStatusText(t,i){if(!t)return"";const o=this._getEffectiveEntityState(t),n=_(this.hass,o);if("light"===i&&"on"===o.state&&"number"==typeof o.attributes?.brightness)return this._t("entity.brightness",{value:Math.round(o.attributes.brightness/255*100)});if("cover"===i&&"number"==typeof o.attributes?.current_position)return`${n} · ${k(o.attributes.current_position,"%")}`;if("climate"===i){const t=o.attributes?.current_temperature,i=o.attributes?.temperature,n=this.hass?.config?.unit_system?.temperature||"°C";if(void 0!==t&&void 0!==i)return`${k(t,n)} · ${this._t("entity.climate_set",{value:k(i,n)})}`;if(void 0!==t)return k(t,n)}return"media_player"===i&&o.attributes?.media_title?`${n} · ${o.attributes.media_title}`:n}_getEffectiveEntityState(t){const i=t?.entity_id;if(!i)return t;const o=this._optimisticEntityStates[i];if(!o||o.expiresAt<=Date.now())return t;return String(t?.state||"").toLowerCase()===o.state.toLowerCase()?t:{...t,state:o.state}}_setOptimisticEntityStates(t,i){const o=[...new Set(t.filter(Boolean))];if(!o.length)return;const n=Date.now()+5e3,e={...this._optimisticEntityStates};o.forEach(t=>{e[t]={state:i,expiresAt:n}}),this._optimisticEntityStates=e,this._scheduleOptimisticCleanup()}_clearOptimisticEntityStates(t){const i=[...new Set(t.filter(Boolean))];if(!i.length)return;const o={...this._optimisticEntityStates};let n=!1;i.forEach(t=>{o[t]&&(delete o[t],n=!0)}),n&&(this._optimisticEntityStates=o)}_reconcileOptimisticEntityStates(){const t=Object.entries(this._optimisticEntityStates);if(!t.length)return;const i=Date.now(),o={...this._optimisticEntityStates};let n=!1;t.forEach(([t,e])=>{const a=this.hass?.states?.[t]?.state;(!a||e.expiresAt<=i||String(a).toLowerCase()===e.state.toLowerCase())&&(delete o[t],n=!0)}),n&&(this._optimisticEntityStates=o)}_scheduleOptimisticCleanup(){if(void 0!==this._optimisticCleanupTimer)return;const t=Object.values(this._optimisticEntityStates).map(t=>t.expiresAt);if(!t.length)return;const i=Math.min(...t);if(!Number.isFinite(i))return;const o=Math.max(80,i-Date.now()+50);this._optimisticCleanupTimer=window.setTimeout(()=>{this._optimisticCleanupTimer=void 0,this._reconcileOptimisticEntityStates(),Object.keys(this._optimisticEntityStates).length&&this._scheduleOptimisticCleanup()},o)}_isUnavailable(t){return["unavailable","unknown"].includes(String(t?.state||"").toLowerCase())}_isEntityActiveForUi(t,i){if(!t||this._isUnavailable(t))return!1;const o=String(t.state).toLowerCase();if("cover"===i)return["open","opening"].includes(o);if("lock"===i)return"unlocked"===o;if("climate"===i){const i=t.attributes?.hvac_action;return i&&"idle"!==i&&"off"!==i}return"media_player"===i?["playing","buffering"].includes(o):"vacuum"===i?["cleaning","returning"].includes(o):"alarm_control_panel"===i?o.startsWith("armed")||["arming","pending","triggered"].includes(o):"camera"!==i&&!["off","closed","locked","not_home","idle"].includes(o)}_entityColor(t,i){return m("sensor"!==t||"temperature"!==i&&"humidity"!==i?t:i,i)}_entityAreaName(t){const i=this._params?.config,o=i?.entities?.find(i=>i.entity_id===t.entity_id),n=o?.device_id?i?.devices?.find(t=>t.device_id===o.device_id):void 0,e=t.area_id||o?.area_id||n?.area_id||this.hass?.entities?.[t.entity_id]?.area_id;return i?.areas?.find(t=>t.area_id===e)?.name}_getLocalizedDomainTitle(t){return u(this.hass,t)}};$.styles=d`:host{--mdc-dialog-min-width:90vw;--mdc-dialog-max-width:1200px;--mdc-dialog-max-height:90vh;--mdc-dialog-z-index:10;--dialog-backdrop-opacity:0.4;-webkit-tap-highlight-color:transparent}ha-dialog{--mdc-dialog-heading-ink-color:var(--primary-text-color);--mdc-dialog-content-ink-color:var(--primary-text-color);--dialog-content-padding:0;--ha-dialog-scrim-backdrop-filter:brightness(72%) blur(2px);--mdc-dialog-scrim-color:rgba(0,0,0,0.28)}ha-dialog-header{--mdc-typography-headline6-font-size:20px;--mdc-typography-headline6-font-weight:500}.sheet-handle{display:none}.content{padding:16px 18px 22px !important;overflow:auto;max-height:calc(90vh - 120px);background:var(--primary-background-color)}.area-section{margin-bottom:18px;background:color-mix(in srgb,var(--card-background-color) 98%,#ffffff);border-radius:16px;overflow:hidden;box-shadow:0 14px 34px rgba(15,23,42,0.06),inset 0 0 0 1px rgba(15,23,42,0.04)}.area-header{display:flex;align-items:center;gap:12px;padding:14px 16px 0;background:transparent;border-bottom:0}.area-header:has(.area-icon){gap:12px}.area-header:not(:has(.area-icon)){gap:0}.area-icon{width:34px;height:34px;border-radius:999px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);display:flex;align-items:center;justify-content:center}.area-icon ha-icon{--mdc-icon-size:19px}.area-name{font-size:18px;font-weight:850;flex:1}.entity-count{color:var(--secondary-text-color);font-size:13px;font-weight:750}.entities-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(164px,1fr));gap:12px;padding:16px}.domain-todo-list-card{grid-column:1 / -1;min-width:0}.domain-todo-list-card dwains-dashboard-next-card-host{display:block;width:100%}.domain-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:0 0 16px}.domain-action-button{min-height:40px;padding:0 14px;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:8px;color:var(--primary-text-color);background:var(--card-background-color);font:inherit;font-size:13px;font-weight:800;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,0.07),inset 0 0 0 1px rgba(15,23,42,0.05);transition:transform 0.18s ease,box-shadow 0.18s ease}.domain-action-button:hover{transform:translateY(-1px);box-shadow:0 14px 26px rgba(15,23,42,0.1),inset 0 0 0 1px rgba(15,23,42,0.07)}.domain-action-button:active{transform:scale(0.97)}.domain-action-button ha-icon{--mdc-icon-size:18px;color:var(--domain-color,var(--primary-color))}.dialog-view-all{min-height:40px;padding:0 14px;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:8px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent);font:inherit;font-size:13px;font-weight:850;cursor:pointer;transition:transform 0.18s ease,background 0.18s ease}.dialog-view-all:hover{background:color-mix(in srgb,var(--primary-color) 18%,transparent);transform:translateY(-1px)}.dialog-view-all:active{transform:scale(0.97)}.dialog-view-all ha-icon{--mdc-icon-size:18px}.domain-entity-card{--entity-color:var(--primary-color);position:relative;box-sizing:border-box;min-width:0;min-height:132px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;border:0;border-radius:12px;background:color-mix(in srgb,var(--card-background-color) 98%,#ffffff);color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;box-shadow:0 12px 26px rgba(15,23,42,0.06),inset 0 0 0 1px rgba(15,23,42,0.035);transition:transform 0.18s ease,box-shadow 0.18s ease}.domain-entity-card:active{transform:scale(0.985)}.domain-entity-card.is-active{box-shadow:0 14px 30px rgba(15,23,42,0.08),inset 0 0 0 1px color-mix(in srgb,var(--entity-color) 18%,transparent)}.domain-entity-card.is-unavailable{opacity:0.62}.domain-entity-top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}.domain-entity-icon{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:11px;color:var(--entity-color);background:color-mix(in srgb,var(--entity-color) 13%,transparent)}.domain-entity-icon ha-icon{--mdc-icon-size:20px}.domain-entity-action{padding:0;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border:0;cursor:pointer;transition:background-color 0.18s ease,color 0.18s ease,transform 0.18s ease,opacity 0.18s ease}.domain-entity-action:active{transform:scale(0.94)}.domain-entity-action:disabled{opacity:0.36;cursor:not-allowed}.domain-entity-toggle{width:38px;height:22px;justify-content:flex-start;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 80%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.07),0 4px 10px rgba(15,23,42,0.08)}.domain-entity-toggle::before{content:"";width:18px;height:18px;margin-left:2px;border-radius:999px;background:#ffffff;box-shadow:0 2px 7px rgba(15,23,42,0.2);transition:transform 0.18s ease}.domain-entity-card.is-active .domain-entity-toggle{background:var(--entity-color)}.domain-entity-card.is-active .domain-entity-toggle::before{transform:translateX(16px)}.domain-entity-more,.domain-lock-action{width:30px;height:30px;border-radius:999px;color:color-mix(in srgb,var(--primary-text-color) 52%,transparent);background:color-mix(in srgb,var(--secondary-background-color) 70%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.05)}.domain-lock-action.is-unlocked{color:#ffffff;background:var(--entity-color);box-shadow:0 8px 16px color-mix(in srgb,var(--entity-color) 24%,transparent)}.domain-entity-more ha-icon,.domain-lock-action ha-icon{--mdc-icon-size:17px}.domain-cover-actions{min-height:32px;padding:3px;display:inline-flex;align-items:center;gap:3px;flex:0 0 auto;border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 74%,#ffffff);box-shadow:inset 0 0 0 1px rgba(15,23,42,0.055),0 6px 14px rgba(15,23,42,0.08)}.domain-cover-action{width:26px;height:26px;border-radius:999px;color:color-mix(in srgb,var(--primary-text-color) 58%,transparent);background:transparent}.domain-cover-action.active{color:#ffffff;background:var(--entity-color);box-shadow:0 6px 12px color-mix(in srgb,var(--entity-color) 22%,transparent)}.domain-cover-action ha-icon{--mdc-icon-size:16px}.domain-entity-copy{min-width:0}.domain-entity-meta{margin-bottom:3px;color:color-mix(in srgb,var(--secondary-text-color) 78%,transparent);font-size:11px;font-weight:800;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.domain-entity-name{color:var(--primary-text-color);font-size:15px;font-weight:850;line-height:1.05;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.domain-entity-status{margin-top:5px;color:color-mix(in srgb,var(--secondary-text-color) 84%,transparent);font-size:12px;font-weight:760;line-height:1.15;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.loading{display:flex;align-items:center;justify-content:center;height:200px;font-size:16px;opacity:0.6}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;text-align:center}.empty-state ha-icon{--mdc-icon-size:64px;opacity:0.3;margin-bottom:16px}.empty-state-text{font-size:16px;opacity:0.6}.custom-description{display:flex;align-items:flex-start;gap:12px;background:var(--warning-color);color:white;padding:16px;border-radius:8px;margin-bottom:24px}.custom-description ha-icon{--mdc-icon-size:20px;margin-top:2px;flex-shrink:0}.custom-description p{margin:0;line-height:1.5;font-size:14px}@media (max-width:600px){:host{--mdc-dialog-min-width:min(calc(100vw - 4px),480px);--mdc-dialog-max-width:min(calc(100vw - 4px),480px);--mdc-dialog-min-height:0px;--mdc-dialog-max-height:calc(100dvh - 54px);--ha-dialog-min-height:0px;--ha-dialog-max-height:calc(100dvh - 54px);--vertical-align-dialog:flex-end;--dialog-surface-margin-top:auto;--dialog-container-padding:0;--ha-dialog-scrim-backdrop-filter:brightness(66%) blur(2px);--mdc-dialog-scrim-color:rgba(0,0,0,0.34)}ha-dialog{margin:0 !important;border-radius:24px 24px 0 0 !important;--mdc-dialog-container-elevation:0 18px 50px rgba(15,23,42,0.28);--ha-dialog-border-radius:24px 24px 0 0;--ha-dialog-show-duration:1ms;--show-duration:1ms;--ha-dialog-hide-duration:160ms;--hide-duration:160ms}ha-dialog .mdc-dialog__surface{border-radius:24px 24px 0 0 !important;overflow:hidden}ha-dialog-header{position:relative;padding-top:22px}.sheet-handle{display:block;position:absolute;top:8px;left:50%;width:38px;height:4px;border-radius:999px;transform:translateX(-50%);background:color-mix(in srgb,var(--secondary-text-color) 24%,transparent)}.content{max-height:calc(100dvh - 148px);padding:12px 12px calc(16px + env(safe-area-inset-bottom,0px)) !important}.area-section{margin-bottom:16px;border-radius:14px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding:12px}.domain-entity-card{min-height:126px}}:host{--mdc-dialog-max-width:900px}ha-dialog{--ha-dialog-border-radius:14px;--mdc-dialog-container-elevation:0 24px 64px rgba(8,13,24,0.24)}ha-dialog-header{min-height:64px;padding:10px 14px;background:var(--card-background-color);box-shadow:inset 0 -1px 0 color-mix(in srgb,var(--divider-color) 65%,transparent)}ha-dialog-header span[slot="title"]{font-size:20px;font-weight:900;line-height:1.05}.content{padding:14px 16px 18px !important;background:var(--primary-background-color)}.domain-actions{margin-bottom:12px}.dialog-view-all,.domain-action-button{min-height:36px;border-radius:999px;font-size:12px}.area-section{margin-bottom:12px;border-radius:11px;background:var(--card-background-color);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 7%,transparent),0 8px 22px rgba(15,23,42,0.04)}.area-header{min-height:48px;padding:10px 12px 0}.area-icon{width:30px;height:30px;border-radius:8px}.area-icon ha-icon{--mdc-icon-size:17px}.area-name{font-size:15px;font-weight:850}.entity-count{font-size:11px}.entities-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;padding:10px 12px 12px}.domain-entity-card{min-height:108px;padding:11px;border-radius:10px;background:var(--card-background-color);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 6%,transparent),0 6px 16px rgba(15,23,42,0.04)}.domain-entity-icon{width:32px;height:32px;border-radius:9px}.domain-entity-icon ha-icon{--mdc-icon-size:18px}.domain-entity-name{font-size:13px}.domain-entity-status{font-size:11px}@media (max-width:900px) and (min-width:601px){.entities-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width:600px){.content{padding:12px 12px calc(84px + env(safe-area-inset-bottom,0px)) !important}.area-section{border-radius:14px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.domain-entity-card{min-height:116px}}.dialog-title-line{min-width:0;display:inline-flex;align-items:center;gap:10px;flex-wrap:wrap}.dialog-title-text{font-size:20px;font-weight:900;line-height:1.05}.dialog-header-destination{min-height:30px;padding:0 10px;border:0;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:5px;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 10%,var(--card-background-color));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-color) 14%,transparent);font:inherit;font-size:11px;font-weight:850;cursor:pointer}.dialog-header-destination:hover{background:color-mix(in srgb,var(--primary-color) 15%,var(--card-background-color))}.dialog-header-destination ha-icon{--mdc-icon-size:16px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:10px !important}.domain-entity-card{min-height:112px !important}.domain-entity-name{overflow:visible !important;text-overflow:clip !important;white-space:normal !important;overflow-wrap:anywhere;display:block !important;-webkit-line-clamp:unset !important;-webkit-box-orient:initial !important;line-height:1.12 !important}.domain-entity-status{overflow:visible !important;text-overflow:clip !important;white-space:normal !important}@media (max-width:600px){.dialog-title-line{gap:7px}.dialog-title-text{font-size:18px}.dialog-header-destination{min-height:28px;padding:0 8px;font-size:10px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}:host{--mdc-dialog-max-width:760px}ha-dialog-header{min-height:62px !important;padding:10px 14px !important;background:var(--card-background-color) !important;box-shadow:inset 0 -1px 0 color-mix(in srgb,var(--divider-color) 70%,transparent)}.dialog-title-line{min-width:0 !important;display:inline-flex !important;align-items:center !important;gap:9px !important;flex-wrap:nowrap !important}.dialog-title-text{min-width:0 !important;font-size:20px !important;font-weight:900 !important;line-height:1.05 !important}.dialog-header-destination{flex:0 0 auto;min-height:30px !important;padding:0 10px !important;font-size:11px !important;white-space:nowrap !important}.content{padding:14px 16px 18px !important}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:10px !important}.domain-entity-card{min-width:0 !important;min-height:116px !important;padding:11px 12px !important}.domain-entity-copy{min-width:0 !important}.domain-entity-name,.domain-entity-meta,.domain-entity-status{max-width:100% !important;overflow:visible !important;text-overflow:clip !important;white-space:normal !important;overflow-wrap:anywhere !important}.domain-entity-name{display:block !important;-webkit-line-clamp:unset !important;-webkit-box-orient:initial !important;font-size:14px !important;line-height:1.12 !important}.domain-entity-meta{font-size:10px !important}.domain-entity-status{font-size:11px !important}@media (max-width:600px){.dialog-title-line{gap:6px !important}.dialog-title-text{font-size:18px !important}.dialog-header-destination{min-height:28px !important;padding:0 8px !important;font-size:10px !important}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}.dialog-title-icon{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:9px;color:var(--dialog-accent);background:color-mix(in srgb,var(--dialog-accent) 11%,transparent)}.dialog-title-icon ha-icon{--mdc-icon-size:19px}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}.domain-entity-card{min-height:116px !important;height:auto !important}.domain-entity-name,.domain-entity-meta,.domain-entity-status{overflow:visible !important;text-overflow:clip !important;white-space:normal !important;overflow-wrap:anywhere !important}.domain-entity-status{color:var(--entity-color) !important;font-weight:800 !important}@media (max-width:600px){.dialog-title-line{flex-wrap:wrap !important}.dialog-title-icon{width:30px;height:30px}.dialog-header-destination{order:3}.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}.content.room-context{padding:14px 16px 28px !important;overflow:auto !important}.content.room-context .area-section{margin-bottom:8px !important;overflow:visible !important;border-radius:10px !important;background:var(--card-background-color) !important;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 7%,transparent) !important}.content.room-context .area-header{min-height:42px !important;padding:7px 10px 0 !important;gap:8px !important}.content.room-context .area-icon{width:30px !important;height:30px !important;border-radius:8px !important}.content.room-context .area-name{font-size:14px !important;font-weight:850 !important}.content.room-context .entities-grid{grid-template-columns:repeat(4,minmax(0,1fr)) !important;gap:8px !important;padding:8px 10px 12px !important;overflow:visible !important}.content.room-context.custom-entities-context .entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:10px !important}.content.room-context.custom-entities-context .domain-entity-card{min-height:70px !important;height:auto !important}.content.room-context.custom-entities-context .domain-entity-name,.content.room-context.custom-entities-context .domain-entity-status{overflow:visible !important;text-overflow:clip !important;white-space:normal !important;overflow-wrap:anywhere !important}.content.room-context .domain-entity-card{min-height:62px !important;height:62px !important;padding:7px 9px !important;display:grid !important;grid-template-columns:36px minmax(0,1fr) auto !important;grid-template-rows:1fr !important;align-items:center !important;gap:8px !important;overflow:visible !important;border-radius:9px !important;background:var(--card-background-color) !important;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 7%,transparent),0 4px 10px rgba(15,23,42,0.04) !important}.content.room-context .domain-entity-top{display:contents !important}.content.room-context .domain-entity-icon{grid-column:1 !important;grid-row:1 !important;width:36px !important;height:36px !important;border-radius:8px !important}.content.room-context .domain-entity-copy{grid-column:2 !important;grid-row:1 !important;min-width:0 !important;display:flex !important;flex-direction:column !important;justify-content:center !important;gap:2px !important}.content.room-context .domain-entity-top>:not(.domain-entity-icon){grid-column:3 !important;grid-row:1 !important;align-self:center !important;justify-self:end !important}.content.room-context .domain-entity-name{overflow:hidden !important;font-size:12px !important;font-weight:850 !important;line-height:1.15 !important;text-overflow:ellipsis !important;white-space:nowrap !important}.content.room-context .domain-entity-status{overflow:hidden !important;font-size:10px !important;font-weight:650 !important;line-height:1.1 !important;text-overflow:ellipsis !important;white-space:nowrap !important}@media (max-width:1000px) and (min-width:601px){.content.room-context .entities-grid{grid-template-columns:repeat(3,minmax(0,1fr)) !important}}@media (max-width:600px){.content.room-context .entities-grid,.content.room-context.custom-entities-context .entities-grid{grid-template-columns:1fr !important}.content.room-context .domain-entity-card{min-height:58px !important;height:58px !important}}.area-master-toggle{display:inline-flex;align-items:center;gap:7px;flex:0 0 auto;padding:4px 7px;border:1px solid var(--divider-color);border-radius:999px;background:var(--card-background-color);color:var(--secondary-text-color);font:inherit;font-size:12px;font-weight:750;cursor:pointer}.area-master-track{width:31px;height:18px;position:relative;display:inline-block;border-radius:999px;background:color-mix(in srgb,var(--primary-text-color) 20%,transparent)}.area-master-track::after{content:'';position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#fff;transition:transform .18s}.area-master-track.is-on{background:var(--entity-color)}.area-master-track.is-on::after{transform:translateX(13px)}.dd-domain-header{box-sizing:border-box;width:100%;padding:12px 18px;position:relative;background:var(--card-background-color);box-shadow:inset 0 -1px 0 color-mix(in srgb,var(--divider-color) 65%,transparent)}.dd-domain-header-line{display:flex;align-items:center;gap:10px;min-width:0}.dd-domain-header-line .dialog-heading-copy{flex:1 1 auto;display:flex;align-items:center;gap:12px;flex-wrap:nowrap;min-width:0}.dd-domain-header-line .dialog-title-text{font-size:20px !important;font-weight:850 !important;line-height:1.2 !important;min-width:0}.dd-domain-header-close{flex:0 0 auto;margin-left:auto}.dd-domain-header .sheet-handle{display:none}@media (max-width:600px){:host{--vertical-align-dialog:flex-end !important;--dialog-surface-margin-top:auto !important;--mdc-dialog-min-height:0px !important}ha-dialog{--vertical-align-dialog:flex-end !important;--dialog-surface-margin-top:auto !important}.dd-domain-header{padding:29px 14px 13px;touch-action:pan-x}.dd-domain-header-line{align-items:center;gap:10px}.dd-domain-header-line .dialog-heading-copy{flex-direction:column;align-items:flex-start;justify-content:center;gap:5px;flex-wrap:nowrap}.dd-domain-header .dialog-title-icon{flex:0 0 48px !important;width:48px !important;height:48px !important}.dd-domain-header .dialog-title-icon ha-icon{--mdc-icon-size:25px !important}.dd-domain-header .dialog-header-destination{order:0 !important;max-width:100%;line-height:1.2;min-height:30px !important}.dd-domain-header .sheet-handle{display:block;position:absolute;top:0;left:50%;transform:translateX(-50%);width:120px;height:27px;z-index:10;background:transparent;border-radius:0;touch-action:none !important;user-select:none;-webkit-user-select:none;cursor:grab}.dd-domain-header .sheet-handle::after{content:'';position:absolute;left:50%;top:9px;width:40px;height:5px;transform:translateX(-50%);background:color-mix(in srgb,var(--secondary-text-color) 25%,transparent);border-radius:999px}}.dialog-global-actions .domain-actions{justify-content:center;flex-wrap:wrap;margin:0 0 14px}.area-section{border-radius:14px !important;padding:12px !important;background:var(--card-background-color) !important}.area-header{padding:0 0 10px !important;min-height:40px !important}.entities-grid{padding:0 !important;grid-template-columns:repeat(3,minmax(0,1fr)) !important;gap:10px !important}.domain-entity-card{display:grid !important;grid-template-columns:44px minmax(0,1fr) auto !important;grid-template-rows:auto !important;align-items:center !important;gap:10px !important;min-height:82px !important;height:auto !important;padding:12px !important}.domain-entity-top{display:contents !important}.domain-entity-icon{grid-column:1 !important;grid-row:1 !important}.domain-entity-copy{grid-column:2 !important;grid-row:1 !important}.domain-entity-top>:not(.domain-entity-icon){grid-column:3 !important;grid-row:1 !important;justify-self:end !important}@media (min-width:601px) and (max-width:1000px){.entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}@media (max-width:600px){:host{--vertical-align-dialog:flex-end !important;--dialog-surface-margin-top:auto !important}ha-dialog{--vertical-align-dialog:flex-end}.entities-grid{grid-template-columns:1fr !important}.domain-entity-card{min-height:68px !important}ha-dialog-header{min-height:0 !important;padding:24px 14px 14px !important;touch-action:none !important}.dialog-title-icon{width:48px !important;height:48px !important;flex-basis:48px !important;border-radius:12px !important}.dialog-title-icon ha-icon{--mdc-icon-size:26px !important}.dialog-heading-copy{gap:6px !important}.dialog-header-destination{min-height:28px !important;padding-block:4px !important;max-width:100%}.dialog-global-actions .domain-actions{justify-content:center}.content{padding-bottom:calc(12px + env(safe-area-inset-bottom,0px)) !important}}@media (max-width:600px){:host{--mdc-dialog-min-height:0px !important;--ha-dialog-min-height:0px !important;--mdc-dialog-max-height:calc(100dvh - 54px);--ha-dialog-max-height:calc(100dvh - 54px)}ha-dialog{height:auto !important;max-height:calc(100dvh - 54px)}.content{max-height:calc(100dvh - 190px);padding-bottom:calc(18px + env(safe-area-inset-bottom,0px)) !important;overscroll-behavior:contain}ha-dialog-header{min-height:112px !important;height:auto !important;box-sizing:border-box !important;touch-action:none !important;overflow:visible !important;padding-top:30px !important;padding-bottom:18px !important}.dialog-title-line{align-items:center !important}.dialog-heading-copy{overflow:visible !important}.dialog-header-destination{position:relative;white-space:nowrap}.sheet-handle{z-index:10}}.area-group-actions{padding:8px 12px 0}.area-group-actions .domain-actions{margin:0;flex-wrap:wrap}.dialog-title-line{display:flex !important;align-items:center !important;flex-wrap:nowrap !important;min-width:0}.dialog-heading-copy{display:flex;align-items:center;flex-wrap:wrap;min-width:0;gap:8px 12px}.dialog-title-icon{flex:0 0 44px !important;width:44px !important;height:44px !important}@media (max-width:600px){.dialog-title-line{flex-wrap:nowrap !important}.dialog-heading-copy{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:7px}.dialog-title-icon{flex:0 0 56px !important;width:56px !important;height:56px !important}.dialog-title-icon ha-icon{--mdc-icon-size:30px}.dialog-header-destination{order:initial !important}.sheet-handle{touch-action:none !important}.content{overscroll-behavior-y:contain}}.entities-grid,.content.room-context .entities-grid{grid-template-columns:repeat(3,minmax(0,1fr)) !important}@media (max-width:1000px) and (min-width:601px){.entities-grid,.content.room-context .entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}@media (max-width:600px){.entities-grid,.content.room-context .entities-grid,.content.room-context.custom-entities-context .entities-grid{grid-template-columns:minmax(0,1fr) !important}.domain-entity-card,.content.room-context .domain-entity-card{display:grid !important;grid-template-columns:40px minmax(0,1fr) auto !important;grid-template-rows:auto !important;align-items:center !important;gap:10px !important;min-height:68px !important;height:auto !important;padding:10px 12px !important}.domain-entity-top,.content.room-context .domain-entity-top{display:contents !important}.domain-entity-icon,.content.room-context .domain-entity-icon{grid-column:1 !important;grid-row:1 !important}.domain-entity-copy,.content.room-context .domain-entity-copy{grid-column:2 !important;grid-row:1 !important;min-width:0 !important}.domain-entity-top>:not(.domain-entity-icon),.content.room-context .domain-entity-top>:not(.domain-entity-icon){grid-column:3 !important;grid-row:1 !important;justify-self:end !important}.domain-entity-name,.content.room-context .domain-entity-name{white-space:normal !important;overflow-wrap:anywhere !important;text-overflow:clip !important}.sheet-handle{top:0;width:92px;height:28px;border-radius:0;background:transparent;touch-action:none;pointer-events:auto;cursor:grab}.sheet-handle::after{content:'';position:absolute;top:8px;left:50%;width:38px;height:4px;border-radius:999px;transform:translateX(-50%);background:color-mix(in srgb,var(--secondary-text-color) 24%,transparent)}ha-dialog{transform:none !important}}.content.home-information-context .entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:10px !important;padding:8px 10px 10px !important}.content.home-information-context .area-section{padding:0 !important;margin-bottom:10px !important;border-radius:12px !important}.content.home-information-context .area-sections-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;align-items:start}.content.home-information-context .area-sections-grid .area-section{grid-column:1 / -1;margin-bottom:0 !important;min-width:0}.content.home-information-context .area-sections-grid .area-section.half-room{grid-column:span 1}.content.home-information-context .area-sections-grid .area-section.half-room .entities-grid{grid-template-columns:1fr !important}.content.home-information-context .area-header{min-height:38px !important;padding:7px 10px 0 !important;gap:8px !important}.content.home-information-context .area-icon{width:28px !important;height:28px !important;border-radius:8px !important}.content.home-information-context .area-icon ha-icon{--mdc-icon-size:16px}.content.home-information-context .area-name{font-size:14px !important}.content.home-information-context .area-master-toggle{min-height:28px;padding:3px 6px;font-size:11px}.content.home-information-context .domain-entity-card{min-width:0 !important;min-height:72px !important;height:72px !important;padding:9px 11px !important;display:grid !important;grid-template-columns:44px minmax(0,1fr) auto !important;grid-template-rows:1fr !important;align-items:center !important;gap:9px !important;border-radius:11px !important;overflow:hidden !important;background:var(--card-background-color) !important;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--primary-text-color) 7%,transparent),0 4px 10px rgba(15,23,42,0.04) !important}.content.home-information-context .domain-entity-top{display:contents !important}.content.home-information-context .domain-entity-icon{grid-column:1 !important;grid-row:1 !important;width:44px !important;height:44px !important;border-radius:10px !important}.content.home-information-context .domain-entity-icon ha-icon{--mdc-icon-size:21px}.content.home-information-context .domain-entity-copy{grid-column:2 !important;grid-row:1 !important;min-width:0 !important;display:flex !important;flex-direction:column !important;justify-content:center !important;gap:3px !important}.content.home-information-context .domain-entity-top>:not(.domain-entity-icon){grid-column:3 !important;grid-row:1 !important;align-self:center !important;justify-self:end !important}.content.home-information-context .domain-entity-name{display:block !important;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;overflow-wrap:normal !important;font-size:14px !important;font-weight:850 !important;line-height:1.1 !important}.content.home-information-context .domain-entity-status{margin-top:0 !important;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;color:var(--entity-color) !important;font-size:11px !important;font-weight:850 !important;line-height:1.1 !important}.content.home-information-context.device-presentation-context .entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;align-items:start !important;gap:10px !important}.content.home-information-context.device-presentation-context.domain-cover .entities-grid{grid-template-columns:repeat(auto-fill,minmax(360px,1fr)) !important;gap:12px !important}.content.home-information-context.device-presentation-context.domain-climate .entities-grid{grid-template-columns:repeat(auto-fill,minmax(250px,1fr)) !important;gap:8px !important}.content.home-information-context.device-presentation-context.domain-person .area-sections-grid{display:block !important}.content.home-information-context.device-presentation-context.domain-person .area-section{margin:0 !important;padding:0 !important;background:transparent !important;border-radius:0 !important;box-shadow:none !important;overflow:visible !important}.content.home-information-context.device-presentation-context.domain-person .entities-grid,.content.home-information-context.device-presentation-context.domain-person .area-sections-grid .area-section.half-room .entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;align-items:start !important;gap:8px !important;padding:0 !important}.content.home-information-context.device-presentation-context.domain-person dwains-dashboard-next-person-tile{--dd-person-tile-location-height:186px;--dd-person-map-height:124px}.content.home-information-context.device-presentation-context .device-presentation-card{min-width:0;position:relative}.content.home-information-context.device-presentation-context .device-presentation-card.sensor-card{min-height:150px}.content.home-information-context.device-presentation-context .device-presentation-card dwains-dashboard-next-card-host{display:block;width:100%}@media (max-width:600px){:host{--mdc-dialog-min-width:min(calc(100vw - 24px),520px) !important;--mdc-dialog-max-width:min(calc(100vw - 24px),520px) !important;--mdc-dialog-min-height:0px !important;--ha-dialog-min-height:0px !important;--mdc-dialog-max-height:calc(100dvh - 32px) !important;--ha-dialog-max-height:calc(100dvh - 32px) !important;--vertical-align-dialog:center !important;--dialog-surface-margin-top:0 !important;--dialog-container-padding:12px !important}ha-dialog{margin:auto !important;height:auto !important;max-height:calc(100dvh - 32px) !important;border-radius:16px !important;--ha-dialog-border-radius:16px;--ha-dialog-show-duration:180ms;--show-duration:180ms}ha-dialog .mdc-dialog__surface{border-radius:16px !important}.dd-domain-header{padding:11px 12px !important;touch-action:auto !important}.dd-domain-header .sheet-handle,.sheet-handle{display:none !important}.dd-domain-header-line{align-items:center !important;gap:9px !important}.dd-domain-header-line .dialog-heading-copy,.dialog-heading-copy{height:52px;min-height:52px;flex-direction:column !important;align-items:flex-start !important;justify-content:center !important;gap:4px !important;flex-wrap:nowrap !important}.dd-domain-header .dialog-title-icon,.dialog-title-icon{flex:0 0 52px !important;width:52px !important;height:52px !important;border-radius:11px !important}.dd-domain-header .dialog-title-icon ha-icon,.dialog-title-icon ha-icon{--mdc-icon-size:27px !important}.dd-domain-header-line .dialog-title-text,.dialog-title-text{font-size:18px !important;line-height:20px !important}.dd-domain-header .dialog-header-destination,.dialog-header-destination{min-height:28px !important;height:28px !important;padding:0 9px !important;font-size:10px !important;line-height:1 !important;white-space:nowrap !important}.content{max-height:calc(100dvh - 132px) !important;overscroll-behavior-y:contain}.content.home-information-context{padding:10px !important}.content.home-information-context .area-section{margin-bottom:10px !important;padding:0 !important;border-radius:12px !important}.content.home-information-context .area-sections-grid{grid-template-columns:1fr !important}.content.home-information-context .area-sections-grid .area-section,.content.home-information-context .area-sections-grid .area-section.half-room{grid-column:1 !important}.content.home-information-context .area-header{min-height:40px !important;padding:7px 9px 0 !important}.content.home-information-context .entities-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:8px !important;padding:8px 9px 9px !important}.content.home-information-context:not(.device-presentation-context) .domain-entity-card{min-height:128px !important;height:auto !important;padding:12px !important;display:flex !important;flex-direction:column !important;justify-content:space-between !important;gap:8px !important;border-radius:10px !important}.content.home-information-context:not(.device-presentation-context) .domain-entity-top{display:flex !important;align-items:flex-start !important;justify-content:space-between !important;gap:8px !important}.content.home-information-context:not(.device-presentation-context) .domain-entity-icon{width:36px !important;height:36px !important;border-radius:11px !important}.content.home-information-context:not(.device-presentation-context) .domain-entity-icon ha-icon{--mdc-icon-size:20px !important}.content.home-information-context:not(.device-presentation-context) .domain-entity-copy{display:block !important;min-width:0 !important}.content.home-information-context:not(.device-presentation-context) .domain-entity-name{margin-top:3px !important;font-size:15px !important;font-weight:900 !important;line-height:1.08 !important;white-space:normal !important;overflow-wrap:anywhere !important;display:-webkit-box !important;-webkit-line-clamp:2 !important;-webkit-box-orient:vertical !important}.content.home-information-context:not(.device-presentation-context) .domain-entity-status{margin-top:5px !important;font-size:11px !important;font-weight:750 !important;color:color-mix(in srgb,var(--primary-text-color) 46%,transparent) !important}.content.home-information-context.device-presentation-context .entities-grid{grid-template-columns:1fr !important;gap:10px !important}.content.home-information-context.device-presentation-context .device-presentation-card.sensor-card{min-height:150px}}`,t([i({attribute:!1})],$.prototype,"hass",void 0),t([o()],$.prototype,"_params",void 0),t([o()],$.prototype,"_groupedEntities",void 0),t([o()],$.prototype,"_loading",void 0),t([o()],$.prototype,"_optimisticEntityStates",void 0),$=t([n("dwains-dashboard-next-domain-entities-dialog")],$);export{$ as DwainsDomainEntitiesDialog};
