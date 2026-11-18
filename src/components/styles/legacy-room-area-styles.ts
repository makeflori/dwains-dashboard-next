import { css } from 'lit';
export const roomAreaStyles = css`
.area-view .mobile-entity-replacement-card{
      --dd-replacement-min-height: 62px;
      --dd-replacement-padding: 8px 10px;
      --dd-replacement-radius: 8px;
    }

@media (min-width: 769px){
.area-view .mobile-entity-replacement-card{
        --dd-replacement-min-height: 72px;
        --dd-replacement-padding: 12px;
        --dd-replacement-radius: 10px;
      }

}

.area-view .mobile-entities-section{
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 0;
    }

.area-view .mobile-domain-group{
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

.area-view .mobile-domain-header{
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

.area-view .mobile-domain-group.is-collapsed .mobile-domain-header{
      margin-bottom: 0;
      border-radius: 7px;
    }

.area-view .mobile-domain-title{
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

.area-view .mobile-domain-title-copy{
      min-width: 0;
      display: inline-flex;
      align-items: baseline;
      gap: 5px;
    }

.area-view .mobile-domain-title-label{
      font-size: 15px;
      font-weight: 850;
    }

.area-view .mobile-domain-count{
      color: var(--secondary-text-color);
      font-size: 10px;
      font-weight: 650;
    }

.area-view .mobile-domain-header-actions{
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      margin-right: 2px;
    }

.area-view .mobile-domain-master{
      min-width: 76px;
      height: 28px;
    }

.area-view .mobile-domain-collapse-button{ display: none !important; }

.area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
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

.area-view .mobile-entity-card,
.area-view .mobile-entities-section.layout-grid .mobile-entity-card{
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

.area-view .mobile-entity-card:hover{
      transform: translateY(-1px);
      border-color: color-mix(in srgb, var(--primary-color) 14%, transparent);
      box-shadow: 0 6px 14px rgba(15, 23, 42, 0.055);
    }

.area-view .mobile-entity-main{
      width: 100%;
      min-width: 0;
      display: grid;
      grid-template-columns: 36px minmax(0, 1fr) auto;
      align-items: center;
      gap: 9px;
    }

.area-view .mobile-entity-main.editing-inline{
      grid-template-columns: 24px 36px minmax(0, 1fr) 34px;
      gap: 7px;
    }

.area-view .mobile-entity-icon{
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }

.area-view .mobile-entity-icon ha-icon{ --mdc-icon-size: 20px; }

.area-view .mobile-entity-content{
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2px;
    }

.area-view .mobile-entity-name{
      overflow: hidden;
      font-size: 12px;
      font-weight: 850;
      line-height: 1.15;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

.area-view .mobile-entity-state{
      overflow: hidden;
      color: var(--secondary-text-color);
      font-size: 10px;
      font-weight: 650;
      line-height: 1.1;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

.area-view .mobile-entity-state.active{
      color: var(--entity-color);
    }

.area-view .mobile-entity-right{
      min-width: 0;
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 5px;
    }

.area-view .mobile-entity-status-pill{ display: none !important; }

.area-view .mobile-entity-brightness{
      width: calc(100% - 45px);
      margin: 6px 0 0 45px;
    }

.area-view .mobile-entity-brightness input[type="range"]{
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

.area-view .mobile-entity-brightness input[type="range"]::-webkit-slider-thumb{
      appearance: none;
      width: 14px;
      height: 14px;
      border: 2px solid var(--entity-color);
      border-radius: 50%;
      background: var(--card-background-color);
    }

.area-view .mobile-entity-brightness input[type="range"]::-moz-range-thumb{
      width: 12px;
      height: 12px;
      border: 2px solid var(--entity-color);
      border-radius: 50%;
      background: var(--card-background-color);
    }

.area-view .mobile-entity-more{ display: none !important; }

@media (max-width: 1180px) and (min-width: 769px){
.area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

}

@media (max-width: 768px){
.area-view .mobile-domain-group{
        padding: 0;
        border-radius: 9px;
      }

.area-view .mobile-domain-header{
        min-height: 36px;
        margin: 0;
        padding: 6px 7px;
      }

.area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        grid-template-columns: 1fr;
        gap: 6px;
        padding: 0 7px 7px;
      }

.area-view .mobile-entity-card,
.area-view .mobile-entities-section.layout-grid .mobile-entity-card{
        min-height: 58px !important;
        padding: 7px 9px !important;
      }

.area-view .mobile-entity-main{
        grid-template-columns: 34px minmax(0, 1fr) auto;
        gap: 8px;
      }

.area-view .mobile-entity-main.editing-inline{
        grid-template-columns: 24px 34px minmax(0, 1fr) 34px;
        gap: 7px;
      }

.area-view .mobile-entity-icon{
        width: 34px;
        height: 34px;
      }

.area-view .mobile-entity-brightness{
        width: calc(100% - 42px);
        margin-left: 42px;
      }

}

.area-view > .room-favorites-block{
      width: 100%;
      box-sizing: border-box;
    }

.area-view .mobile-domain-header.expandable-header{
      position: relative;
      width: 100%;
      box-sizing: border-box;
      cursor: pointer;
      transition:
        background-color 0.15s ease,
        box-shadow 0.15s ease;
    }

.area-view .mobile-domain-header.expandable-header:hover{
      background: color-mix(in srgb, var(--primary-color) 6%, var(--card-background-color));
    }

.area-view .mobile-domain-header.expandable-header:active{
      background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color));
    }

.area-view .mobile-domain-header.expandable-header:focus-visible{
      outline: 2px solid color-mix(in srgb, var(--primary-color) 55%, transparent);
      outline-offset: 2px;
    }

.area-view .mobile-domain-title{
      pointer-events: none;
    }

.area-view .mobile-domain-header-actions{
      position: relative;
      z-index: 2;
    }

consistent leading chevron. */
    .area-view .mobile-domain-header.expandable-header{
      min-height: 38px;
    }

.area-view .mobile-domain-title{
      min-height: 24px;
      align-items: center;
      gap: 6px;
      line-height: 1;
    }

.area-view .mobile-domain-title-copy{
      align-items: center;
      line-height: 1;
    }

.area-view .mobile-domain-title-label,
.area-view .mobile-domain-count{
      line-height: 1;
    }

/* Edit mode keeps exactly the same card footprint as the normal room view. */
    .area-view .dd-generated-card-wrap.editing{
      width: 100%;
      min-width: 0;
      min-height: 62px;
      height: auto;
      flex: none;
      border-radius: 8px;
    }

.area-view .dd-generated-card-wrap.editing > .mobile-entity-card{
      min-height: 62px !important;
      height: 100% !important;
    }

.area-view .mobile-entity-rail .dd-domain-add-card-final,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail .dd-domain-add-card-final{
      min-height: 62px !important;
      height: 62px;
      opacity: 0.72;
      border-radius: 8px;
    }

.area-view .dd-generated-card-toolbar{
      display: none !important;
    }

@media (max-width: 768px){
.area-view .mobile-domain-header.expandable-header{
        width: 100%;
        padding: 6px 7px;
      }

.area-view .dd-generated-card-wrap.editing,
.area-view .dd-generated-card-wrap.editing > .mobile-entity-card,
.area-view .mobile-entity-rail .dd-domain-add-card-final{
        min-height: 58px !important;
      }

.area-view .mobile-entity-rail .dd-domain-add-card-final{
        height: 58px;
      }

}

which also swallowed pointer events for the new handle. */
    .area-view .mobile-domain-group.group-editing .mobile-domain-title{
      pointer-events: auto;
    }

.area-view .mobile-domain-group.group-editing .mobile-domain-title-copy,
.area-view .mobile-domain-group.group-editing .room-domain-icon{
      pointer-events: none;
    }

.area-view .mobile-domain-leading-drag-handle{
      pointer-events: auto;
      user-select: none;
      -webkit-user-select: none;
      -webkit-user-drag: element;
    }

.area-view .mobile-domain-header.room-favorites-header.expandable-header{
      min-height: 32px;
      padding: 3px 9px;
      border-radius: 7px;
    }

.area-view .room-favorites-title{
      min-height: 20px;
    }

.area-view .room-favorites-title .room-domain-icon{
      width: 19px;
      height: 19px;
    }

.area-view .room-favorites-title .room-domain-icon ha-icon{
      --mdc-icon-size: 16px;
    }

@media (min-width: 769px){
.area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        gap: 8px !important;
      }

.area-view .mobile-entity-card,
.area-view .mobile-entities-section.layout-grid .mobile-entity-card{
        min-height: 62px !important;
        padding: 8px 10px !important;
        justify-content: center !important;
        overflow: hidden !important;
      }

.area-view .mobile-entity-card.has-light-controls,
.area-view .mobile-entity-card.has-cover-position{
        min-height: 104px !important;
        justify-content: flex-start !important;
      }

.area-view .mobile-entity-main{
        grid-template-columns: 36px minmax(0, 1fr) auto !important;
        gap: 9px !important;
        align-items: center !important;
      }

.area-view .mobile-entity-content{
        min-width: 0 !important;
        height: 36px !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        gap: 3px !important;
        overflow: hidden !important;
      }

.area-view .mobile-entity-name{
        min-width: 0 !important;
        width: 100% !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
        font-size: 12px !important;
        line-height: 1.08 !important;
        letter-spacing: -0.1px !important;
      }

.area-view .mobile-entity-state{
        margin: 0 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
        font-size: 10.5px !important;
        font-weight: 800 !important;
        line-height: 1 !important;
      }

.area-view .mobile-entity-right{
        min-width: max-content !important;
        max-width: 86px !important;
        margin-left: 4px !important;
        align-self: center !important;
      }

.area-view .mobile-cover-actions{
        min-height: 30px !important;
        padding: 2px !important;
        gap: 2px !important;
      }

.area-view .mobile-cover-action{
        width: 25px !important;
        height: 25px !important;
      }

}

@media (min-width: 769px){
/* Light controls: only rendered while ON. Keep cards compact and place icons after slider. */
      .area-view .mobile-entity-card.has-light-controls,
.area-view .mobile-entity-card.has-cover-position{
        min-height: 94px !important;
        padding-bottom: 6px !important;
      }

}

@media (min-width: 769px){
/* Room entity cards: slightly larger content with symmetric 10px inner spacing. */
      .area-view .mobile-entity-card,
.area-view .mobile-entities-section.layout-grid .mobile-entity-card{
        min-height: 60px !important;
        padding: 10px !important;
        box-sizing: border-box !important;
      }

.area-view .mobile-entity-main{
        min-height: 38px !important;
        align-items: center !important;
      }

.area-view .mobile-entity-icon{
        width: 38px !important;
        height: 38px !important;
      }

.area-view .mobile-entity-content{
        height: 38px !important;
      }

/* Expanded control cards: vertical spacing above and below the control row is equal. */
      .area-view .mobile-entity-card.has-light-controls,
.area-view .mobile-entity-card.has-cover-position{
        min-height: 0 !important;
        height: auto !important;
        padding: 8px 10px !important;
        justify-content: flex-start !important;
      }

.area-view .mobile-entity-card.has-light-controls .mobile-entity-main,
.area-view .mobile-entity-card.has-cover-position .mobile-entity-main{
        min-height: 38px !important;
      }

}

@media (min-width: 769px){
/* One tall entity must not stretch its siblings; all cards stay top-aligned. */
      .area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        align-items: start !important;
      }

.area-view .mobile-entity-card,
.area-view .mobile-entities-section.layout-grid .mobile-entity-card{
        align-self: start !important;
      }

}

@media (min-width: 769px){
/*
       * Slider geometry: use the original 5px track / 15px thumb geometry
       * used by the first light-control implementation. Do not change the
       * control layout here; only restore the slider proportions.
       */
      .area-view .mobile-light-control-slider,
.area-view .mobile-cover-position input[type="range"]{
        height: 5px !important;
      }

.area-view .mobile-light-control-slider::-webkit-slider-runnable-track,
.area-view .mobile-cover-position input[type="range"]::-webkit-slider-runnable-track{
        height: 5px !important;
        min-height: 5px !important;
        max-height: 5px !important;
        border-radius: 999px !important;
      }

.area-view .mobile-light-control-slider::-moz-range-track,
.area-view .mobile-cover-position input[type="range"]::-moz-range-track{
        height: 5px !important;
        min-height: 5px !important;
        max-height: 5px !important;
        border-radius: 999px !important;
      }

.area-view .mobile-light-control-slider::-moz-range-progress{
        height: 5px !important;
        min-height: 5px !important;
        max-height: 5px !important;
        border-radius: 999px !important;
      }

.area-view .mobile-light-control-slider::-webkit-slider-thumb,
.area-view .mobile-cover-position input[type="range"]::-webkit-slider-thumb{
        width: 15px !important;
        height: 15px !important;
      }

.area-view .mobile-light-control-slider::-moz-range-thumb,
.area-view .mobile-cover-position input[type="range"]::-moz-range-thumb{
        width: 13px !important;
        height: 13px !important;
      }

/*
       * A tall card must not define the height of its siblings.
       * Explicitly size grid rows to content and opt every entity card out
       * of the grid's default stretch behaviour.
       */
      .area-view .mobile-entity-rail,
      .area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        align-items: start !important;
        grid-auto-rows: max-content !important;
      }

.area-view .mobile-entity-rail > .mobile-entity-card,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail > .mobile-entity-card{
        align-self: start !important;
        height: fit-content !important;
      }

.area-view .mobile-entity-card.has-light-controls,
.area-view .mobile-entity-card.has-cover-position{
        height: auto !important;
      }

}

@media (min-width: 769px){
.area-view .room-favorites-block:not(.is-collapsed) .room-favorites-header{
        margin-bottom: 0 !important;
      }

}

@media (min-width: 769px){
/* Keep four columns. The available desktop width is used for wider cards. */
      .area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        gap: 10px !important;
      }

.area-view .mobile-entity-card,
.area-view .mobile-entities-section.layout-grid .mobile-entity-card{
        min-height: 62px !important;
        height: auto !important;
        padding: 8px 10px !important;
        border-radius: 10px !important;
        box-sizing: border-box !important;
        justify-content: center !important;
      }

.area-view .mobile-entity-main{
        min-height: 36px !important;
        grid-template-columns: 36px minmax(0, 1fr) auto !important;
        gap: 11px !important;
      }

.area-view .mobile-entity-main.editing-inline{
        grid-template-columns: 29px 46px minmax(0, 1fr) 42px !important;
        gap: 8px !important;
      }

.area-view .mobile-entity-icon{
        width: 36px !important;
        height: 36px !important;
        border-radius: 8px !important;
      }

.area-view .mobile-entity-icon ha-icon{
        --mdc-icon-size: 24px !important;
      }

.area-view .mobile-entity-content{
        height: 36px !important;
        gap: 2px !important;
      }

.area-view .mobile-entity-name{
        font-size: 12px !important;
        line-height: 1.1 !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }

.area-view .mobile-entity-state{
        font-size: 12.7px !important;
        line-height: 1.1 !important;
      }

.area-view .mobile-entity-right{
        gap: 5px !important;
        max-width: 104px !important;
      }

.area-view .mobile-entity-toggle{
        width: 46px !important;
        height: 27px !important;
      }

.area-view .mobile-entity-toggle::before{
        width: 21px !important;
        height: 21px !important;
        margin-left: 3px !important;
      }

.area-view .mobile-entity-card.is-active .mobile-entity-toggle::before{
        transform: translateX(19px) !important;
      }

.area-view .mobile-entity-card.has-light-controls,
.area-view .mobile-entity-card.has-cover-position{
        min-height: 112px !important;
        padding: 9px 12px !important;
      }

.area-view .mobile-entity-card.has-light-controls .mobile-entity-main,
.area-view .mobile-entity-card.has-cover-position .mobile-entity-main{
        min-height: 46px !important;
      }

.area-view .mobile-light-control-row{
        margin-top: 9px !important;
        min-height: 32px !important;
      }

.area-view .mobile-light-control-slider,
.area-view .mobile-cover-position input[type="range"]{
        height: 6px !important;
      }

.area-view .mobile-light-control-slider::-webkit-slider-runnable-track,
.area-view .mobile-cover-position input[type="range"]::-webkit-slider-runnable-track,
.area-view .mobile-light-control-slider::-moz-range-track,
.area-view .mobile-cover-position input[type="range"]::-moz-range-track,
.area-view .mobile-light-control-slider::-moz-range-progress{
        height: 6px !important;
      }

.area-view .mobile-light-control-slider::-webkit-slider-thumb,
.area-view .mobile-cover-position input[type="range"]::-webkit-slider-thumb{
        width: 18px !important;
        height: 18px !important;
      }

.area-view .mobile-light-control-slider::-moz-range-thumb,
.area-view .mobile-cover-position input[type="range"]::-moz-range-thumb{
        width: 16px !important;
        height: 16px !important;
      }

.area-view .mobile-light-mode-buttons{ gap: 5px !important; }

.area-view .mobile-light-mode-button{
        width: 34px !important;
        height: 34px !important;
        border-radius: 9px !important;
      }

.area-view .mobile-light-mode-button ha-icon{ --mdc-icon-size: 20px !important; }

.area-view .mobile-cover-actions{
        min-height: 36px !important;
        padding: 3px !important;
        gap: 3px !important;
      }

.area-view .mobile-cover-action{ width: 31px !important; height: 31px !important; }

.area-view .mobile-cover-action ha-icon{ --mdc-icon-size: 20px !important; }

/* Lower room sections must use exactly the same outer width as the room header/favorites. */
      .area-view .mobile-entities-section,
.area-view .mobile-domain-group{
        width: 100% !important;
        align-self: stretch !important;
        box-sizing: border-box !important;
      }

}

@media (min-width: 769px){
/* Keep the room content and global house-information row on the same
   desktop measure. This prevents both surfaces from becoming overly wide
   on very large displays while keeping their left/right edges aligned. */
      .area-view{
        width: 100% !important;
        max-width: 1400px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        box-sizing: border-box !important;
      }

.area-view > .mobile-entities-section,
.area-view > .mobile-entities-section > .mobile-domain-group,
.area-view > .mobile-entities-section > .mobile-domain-group > .mobile-entity-rail{
        width: 100% !important;
        max-width: none !important;
        box-sizing: border-box !important;
      }

}

@media (min-width: 769px){
/* Exactly five entity columns in the desktop room view. */
      .area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
      }

}

@media (min-width: 769px){
/* Room entity cards: exactly five columns on desktop. */
      .area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
      }

}

@media (min-width: 769px){
/* Exactly five columns in the desktop room view. */
      .area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
      }

}

@media (min-width: 769px){
/* Four entity cards per row on every desktop width. */
      .area-view .mobile-entity-rail,
.area-view .mobile-entities-section.layout-grid .mobile-entity-rail{
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
      }

}

/* Select/input_select cards: one authoritative layout. The entity icon stays
   in the normal leading icon tile; only the select chevron is on the right. */
@media (min-width: 769px) {
  .area-view .mobile-entity-card.has-inline-select {
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

  .area-view .mobile-entity-card.has-inline-select .mobile-entity-main {
    grid-column: 1 !important;
    grid-row: 1 !important;
    width: 100% !important;
    min-width: 0 !important;
    height: 46px !important;
    min-height: 46px !important;
    display: grid !important;
    grid-template-columns: 46px minmax(0, 1fr) !important;
    grid-template-areas: "icon content" !important;
    align-items: center !important;
    gap: 11px !important;
    direction: ltr !important;
  }

  .area-view .mobile-entity-card.has-inline-select .mobile-entity-icon {
    grid-area: icon !important;
    position: static !important;
    inset: auto !important;
    width: 46px !important;
    min-width: 46px !important;
    height: 46px !important;
    min-height: 46px !important;
    margin: 0 !important;
    padding: 0 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    justify-self: start !important;
    align-self: center !important;
    transform: none !important;
  }

  .area-view .mobile-entity-card.has-inline-select
  .mobile-entity-icon > .mobile-entity-leading-select-icon {
    position: static !important;
    inset: auto !important;
    display: block !important;
    width: 24px !important;
    height: 24px !important;
    min-width: 24px !important;
    min-height: 24px !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    --mdc-icon-size: 24px !important;
    pointer-events: none !important;
  }

  .area-view .mobile-entity-card.has-inline-select .mobile-entity-content {
    grid-area: content !important;
    min-width: 0 !important;
    height: 46px !important;
    margin: 0 !important;
    align-self: center !important;
    justify-content: center !important;
  }

  .area-view .mobile-entity-card.has-inline-select .mobile-entity-right {
    display: none !important;
  }

  .area-view .mobile-entity-card.has-inline-select .mobile-entity-select {
    grid-column: 1 !important;
    grid-row: 2 !important;
    position: relative !important;
    width: 100% !important;
    height: 42px !important;
    min-height: 42px !important;
    margin: 0 !important;
  }

  .area-view .mobile-entity-card.has-inline-select .mobile-entity-select select {
    width: 100% !important;
    height: 42px !important;
    box-sizing: border-box !important;
    padding: 0 42px 0 15px !important;
    font-size: 14.4px !important;
    line-height: 42px !important;
  }

  .area-view .mobile-entity-card.has-inline-select .mobile-select-chevron {
    position: absolute !important;
    top: 50% !important;
    right: 12px !important;
    left: auto !important;
    bottom: auto !important;
    margin: 0 !important;
    transform: translateY(-50%) !important;
    --mdc-icon-size: 20px !important;
    pointer-events: none !important;
  }
}



/* Final mobile Home overrides.
   Keep these at the end of layoutCardStyles because this stylesheet is
   appended after the component-local styles and therefore owns the
   effective mobile Home presentation. */
@media (max-width: 768px) {
  /* Horizontal one-row sections need room for their card shadows. */
  .mobile-home-section:not(.layout-grid),
  .home-status-section:not(.layout-grid),
  .home-camera-section:not(.layout-grid) {
    overflow: visible !important;
  }

  .mobile-home-section:not(.layout-grid) .mobile-area-rail,
  .home-status-section:not(.layout-grid) .home-status-grid,
  .home-camera-section:not(.layout-grid) .home-camera-grid {
    padding-top: 3px !important;
    padding-bottom: 28px !important;
  }

  /* Native/custom HA cards stay within the mobile viewport. */
  .home-todos-grid,
  .home-custom-cards-grid,
  .home-todo-card,
  .home-custom-card,
  .home-todo-card dwains-dashboard-next-card-host,
  .home-custom-card dwains-dashboard-next-card-host {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
  }

  .home-todos-grid,
  .home-custom-cards-grid {
    grid-template-columns: minmax(0, 1fr) !important;
    overflow: visible !important;
  }

  /* Collapsed area icons fill the space left by the fixed badge grid. */
  .mobile-area-icon {
    width: var(--mobile-area-icon-size, 56px) !important;
    height: var(--mobile-area-icon-height, var(--mobile-area-icon-size, 56px)) !important;
    aspect-ratio: 1;
    flex: 0 0 var(--mobile-area-icon-size, 56px) !important;
    border-radius: 15px !important;
  }

  .mobile-area-icon ha-icon {
    --mdc-icon-size: var(--mobile-area-icon-glyph-size, 30px) !important;
  }

  .mobile-area-card.has-picture .mobile-area-picture {
    opacity: 0.22 !important;
    filter: saturate(0.72) contrast(0.92) !important;
  }

  .mobile-area-card.has-picture {
    background: var(--card-background-color) !important;
    color: var(--primary-text-color) !important;
    --mobile-area-picture-text-color: var(--primary-text-color) !important;
    --mobile-area-picture-muted-text-color: var(--secondary-text-color) !important;
    --mobile-area-picture-text-shadow: none !important;
    --mobile-area-picture-overlay: linear-gradient(
      color-mix(in srgb, var(--card-background-color) 14%, transparent),
      color-mix(in srgb, var(--card-background-color) 14%, transparent)
    ) !important;
  }

  .mobile-area-card.has-picture .mobile-area-icon {
    color: var(--primary-color) !important;
    background: color-mix(in srgb, var(--primary-color) 13%, var(--card-background-color)) !important;
    backdrop-filter: none !important;
  }

  /* Favorites use exactly the same mobile content width as Areas. */
  .home-favorites-section {
    box-sizing: border-box !important;
    width: auto !important;
    max-width: none !important;
    margin: 0 -10px 30px !important;
    padding: 0 !important;
    overflow: visible !important;
  }

  .home-favorites-section .favorites-grid {
    box-sizing: border-box !important;
    width: 100% !important;
    gap: 8px !important;
    padding: 3px 18px 32px !important;
  }

  /* One-line mode: horizontal rail with content-sized cards. */
  .home-favorites-section.layout-rail .favorites-grid {
    display: flex !important;
    flex-direction: row !important;
    align-items: stretch !important;
    overflow-x: auto !important;
    overflow-y: visible !important;
    scroll-padding-inline: 18px !important;
    scroll-snap-type: x proximity !important;
    scrollbar-width: none !important;
  }

  .home-favorites-section.layout-rail .favorites-grid::-webkit-scrollbar {
    display: none !important;
  }

  /* The former two-column mode is now a one-column full-width list. */
  .home-favorites-section.layout-grid .favorites-grid {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) !important;
    overflow: visible !important;
    scroll-snap-type: none !important;
  }

  .home-favorites-section .favorite-card-wrapper {
    position: relative !important;
    isolation: isolate !important;
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) auto !important;
    grid-template-rows: 1fr !important;
    align-items: center !important;
    column-gap: 10px !important;
    height: 64px !important;
    min-height: 64px !important;
    padding: 8px 11px !important;
    overflow: hidden !important;
    border-radius: 14px !important;
  }

  .home-favorites-section.layout-grid .favorite-card-wrapper {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    flex: none !important;
    scroll-snap-align: none !important;
  }

  .home-favorites-section.layout-rail .favorite-card-wrapper {
    width: max-content !important;
    max-width: calc(100vw - 36px) !important;
    min-width: 0 !important;
    flex: 0 0 auto !important;
    scroll-snap-align: start !important;
  }

  .home-favorites-section .favorite-icon {
    position: absolute !important;
    left: 7px !important;
    top: 50% !important;
    z-index: 0 !important;
    width: 58px !important;
    height: 58px !important;
    margin: 0 !important;
    border-radius: 0 !important;
    transform: translateY(-50%) !important;
    background: transparent !important;
    color: var(--favorite-color) !important;
    opacity: 0.10 !important;
    pointer-events: none !important;
  }

  .home-favorites-section .favorite-icon ha-icon {
    --mdc-icon-size: 54px !important;
  }

  .home-favorites-section .favorite-body {
    grid-column: 1 !important;
    grid-row: 1 !important;
    position: relative !important;
    z-index: 1 !important;
    min-width: 0 !important;
    align-self: center !important;
    padding: 0 0 0 7px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  .home-favorites-section .favorite-end {
    grid-column: 2 !important;
    grid-row: 1 !important;
    position: relative !important;
    z-index: 1 !important;
    align-self: center !important;
    justify-self: end !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .home-favorites-section .favorite-name {
    margin: 0 !important;
    display: block !important;
    max-width: 100% !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    -webkit-line-clamp: unset !important;
    font-size: 14px !important;
    line-height: 1.15 !important;
  }

  .home-favorites-section .favorite-meta {
    margin-top: 3px !important;
    line-height: 1.15 !important;
  }

  .home-favorites-section.layout-rail .favorite-body,
  .home-favorites-section.layout-rail .favorite-name {
    width: max-content !important;
    max-width: min(64vw, 430px) !important;
  }
}



/* 2026-10-08 Home/sidebar follow-up.
   Keep these overrides at the end of layoutCardStyles so they remain the
   authoritative rules for the current Home and room-navigation markup. */

/* Room list: the room icon always remains the foreground icon. If a room has
   a picture, that picture becomes a soft card background on both desktop and mobile. */
.sidebar .room-area-button {
  position: relative !important;
  isolation: isolate !important;
  overflow: hidden !important;
}

.sidebar .room-area-button .area-list-picture {
  position: absolute !important;
  inset: 0 !important;
  z-index: 0 !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  opacity: 0.13 !important;
  filter: saturate(0.72) contrast(0.94) !important;
  transform: scale(1.015) !important;
  pointer-events: none !important;
}

.sidebar .room-area-button.has-picture,
.sidebar .room-area-button.has-picture.selected {
  color: var(--primary-text-color) !important;
  background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color)) !important;
  --area-picture-text-color: var(--primary-text-color) !important;
  --area-picture-muted-text-color: var(--secondary-text-color) !important;
  --area-picture-text-shadow: none !important;
}

.sidebar .room-area-button.has-picture::after {
  display: none !important;
}

.sidebar .room-area-button .area-media,
.sidebar .room-area-button .area-content {
  position: relative !important;
  z-index: 1 !important;
}

.sidebar .room-area-button .area-media {
  background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color)) !important;
}

.sidebar .room-area-button .area-media-icon {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: var(--primary-color) !important;
  background: color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color)) !important;
  backdrop-filter: none !important;
}

.sidebar .room-area-button.has-picture .area-name,
.sidebar .room-area-button.has-picture .area-sensors {
  color: inherit !important;
  background: transparent !important;
  text-shadow: none !important;
  backdrop-filter: none !important;
}

@media (min-width: 769px) {
  /* Reserve one metadata line even when a room has neither climate nor power data,
     keeping room names and badge rows aligned between neighboring entries. */
  .sidebar .room-area-button .area-sensors {
    min-height: 12px !important;
  }

  .sidebar .room-area-button .area-sensors.is-empty {
    visibility: hidden !important;
  }

  /* House-information shadows need paint space below the last row. */
  .home-status-section {
    overflow: visible !important;
  }

  .home-status-primary-grid {
    overflow: visible !important;
    padding-bottom: 18px !important;
  }

  /* One to-do column spans exactly half of the six-column Home rhythm:
     three favorite-card widths plus the two internal gaps. */
  .home-todos-grid {
    width: calc(50% - 5px) !important;
    max-width: calc(50% - 5px) !important;
    grid-template-columns: minmax(0, 1fr) !important;
  }

  .home-todo-card,
  .home-todo-card dwains-dashboard-next-card-host {
    width: 100% !important;
    max-width: 100% !important;
  }
}

@media (max-width: 768px) {
  .sidebar .room-area-button .area-list-picture {
    opacity: 0.16 !important;
  }

  .sidebar .room-area-button .area-sensors.is-empty {
    display: none !important;
  }

  /* Grid mode returns to the requested two-column mobile Favorites layout. */
  .home-favorites-section.layout-grid .favorites-grid {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
  }

  .home-favorites-section.layout-grid .favorite-card-wrapper {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }

  /* Make the decorative background icon a little easier to read. */
  .home-favorites-section .favorite-icon {
    opacity: 0.14 !important;
  }

  /* Touch taps get feedback only while the pointer is down. Do not retain the
     desktop hover/focus transform after a mobile tap. */
  .home-favorites-section .favorite-card-wrapper,
  .home-favorites-section .favorite-card-wrapper:hover,
  .home-favorites-section .favorite-card-wrapper:focus,
  .home-favorites-section .favorite-card-wrapper:focus-visible {
    outline: none !important;
  }

  .home-favorites-section .favorite-card-wrapper:hover:not(:active),
  .home-favorites-section .favorite-card-wrapper:focus:not(:active),
  .home-favorites-section .favorite-card-wrapper:focus-visible:not(:active) {
    transform: none !important;
    box-shadow:
      0 12px 26px rgba(15, 23, 42, 0.06),
      inset 0 0 0 1px rgba(15, 23, 42, 0.035) !important;
  }

  .home-favorites-section .favorite-card-wrapper:active {
    transform: scale(0.985) !important;
  }

  /* To-do stays full width on mobile. */
  .home-todos-grid {
    width: 100% !important;
    max-width: 100% !important;
  }
}



/* 2026-10-08 follow-up: Home/mobile width, scrolling and desktop room header. */
@media (max-width: 768px) {
  /* Match the exact two-column Areas geometry. */
  .home-view .home-favorites-section {
    width: calc(100% + 20px) !important;
    max-width: none !important;
    margin-left: -10px !important;
    margin-right: -10px !important;
    overflow-x: visible !important;
  }

  .home-favorites-section.layout-grid .favorites-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 10px !important;
    padding: 3px 18px 32px !important;
  }

  /* Decorative Favorite icon: smaller, low-right under the title area. */
  .home-favorites-section .favorite-icon {
    left: auto !important;
    right: 10px !important;
    top: auto !important;
    bottom: 7px !important;
    width: 34px !important;
    height: 34px !important;
    transform: none !important;
    opacity: 0.14 !important;
  }

  .home-favorites-section .favorite-icon ha-icon {
    --mdc-icon-size: 30px !important;
  }

  /* Avoid creating a second vertical scroll container on Home.
     overflow-x:hidden makes overflow-y compute to auto; clip does not. */
  .home-view,
  .home-content-area {
    overflow-x: clip !important;
    overflow-y: visible !important;
  }

  /* The framed native todo card should align with all other mobile card surfaces. */
  .home-todo-card {
    border-radius: 16px !important;
    overflow: hidden !important;
  }

  .home-todo-card dwains-dashboard-next-card-host[framed] {
    --dd-replacement-radius: 16px;
    --dd-replacement-border: 1px solid color-mix(in srgb, var(--primary-text-color) 8%, transparent);
    --dd-replacement-padding: 0px;
  }
}

@media (min-width: 769px) {
  /* Native todo cards use DD's normal rounded card surface on desktop as well. */
  .home-todo-card {
    border-radius: 12px !important;
    overflow: hidden !important;
  }

  .home-todo-card dwains-dashboard-next-card-host[framed] {
    --dd-replacement-radius: 12px;
    --dd-replacement-border: 1px solid color-mix(in srgb, var(--primary-text-color) 8%, transparent);
    --dd-replacement-padding: 0px;
  }

  /* Room header picture becomes a subtle full-card background; the room icon
     remains the foreground media tile, matching the sidebar treatment. */
  .room-header.has-room-background {
    position: relative !important;
    isolation: isolate !important;
    overflow: hidden !important;
    background: var(--card-background-color) !important;
  }

  .room-header .dd-page-header-room-background {
    position: absolute !important;
    inset: 0 !important;
    z-index: 0 !important;
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    opacity: 0.13 !important;
    filter: saturate(0.72) contrast(0.94) !important;
    transform: scale(1.01) !important;
    pointer-events: none !important;
  }

  .room-header .dd-page-header-with-media {
    position: relative !important;
    z-index: 1 !important;
  }

  .room-header.has-room-background .dd-page-header-media-tile {
    background: color-mix(in srgb, var(--primary-color) 9%, var(--card-background-color)) !important;
  }

  .room-header.has-room-background .dd-page-header-room-icon {
    color: var(--primary-color) !important;
    background: color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color)) !important;
  }

  /* When the quick controls need more than one row, balance them rather than
     allowing flex-wrap to leave a single orphan tile on the last line. */
  .room-header .dd-page-header-strip[data-control-count="4"],
  .room-header .dd-page-header-strip[data-control-count="5"],
  .room-header .dd-page-header-strip[data-control-count="6"],
  .room-header .dd-page-header-strip[data-control-count="7"],
  .room-header .dd-page-header-strip[data-control-count="8"] {
    display: grid !important;
    grid-template-columns: repeat(var(--dd-room-quick-columns), max-content) !important;
    justify-content: start !important;
    align-items: center !important;
    gap: 8px !important;
  }

  .room-header .dd-page-header-strip[data-control-count="4"] > *,
  .room-header .dd-page-header-strip[data-control-count="5"] > *,
  .room-header .dd-page-header-strip[data-control-count="6"] > *,
  .room-header .dd-page-header-strip[data-control-count="7"] > *,
  .room-header .dd-page-header-strip[data-control-count="8"] > * {
    min-width: 0 !important;
  }

  /* Sidebar Home entry uses the same visual scale and surface as room entries. */
  .sidebar .area-button.home-button {
    background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-background-color)) !important;
    border-color: color-mix(in srgb, var(--primary-text-color) 7%, transparent) !important;
  }

  .sidebar .area-button.home-button .area-name {
    font-size: 14px !important;
    font-weight: 850 !important;
  }

  .sidebar .area-button.home-button .area-icon {
    width: 46px !important;
    height: 46px !important;
    border-radius: 10px !important;
    background: color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color)) !important;
    color: var(--primary-color) !important;
  }

  .sidebar .area-button.home-button .area-icon ha-icon {
    --mdc-icon-size: 34px !important;
  }
}



/* 2026-10-08 correction pass: exact room-picture behavior, balanced desktop
   quick controls, Sidebar Home parity and mobile Favorite leading icons. */
@media (max-width: 768px) {
  /* Favorites: use a small, fully colored foreground icon directly before the name. */
  .home-favorites-section .favorite-card-wrapper {
    display: grid !important;
    grid-template-columns: 22px minmax(0, 1fr) auto !important;
    grid-template-rows: 1fr !important;
    align-items: center !important;
    column-gap: 8px !important;
  }

  .home-favorites-section .favorite-icon {
    position: static !important;
    grid-column: 1 !important;
    grid-row: 1 !important;
    width: 22px !important;
    height: 22px !important;
    margin: 0 !important;
    transform: none !important;
    opacity: 1 !important;
    color: var(--favorite-color) !important;
    background: transparent !important;
    align-self: center !important;
    justify-self: start !important;
    pointer-events: none !important;
  }

  .home-favorites-section .favorite-icon ha-icon {
    --mdc-icon-size: 18px !important;
    color: var(--favorite-color) !important;
  }

  .home-favorites-section .favorite-body {
    grid-column: 2 !important;
    grid-row: 1 !important;
    padding-left: 0 !important;
  }

  .home-favorites-section .favorite-end {
    grid-column: 3 !important;
    grid-row: 1 !important;
  }
}

@media (min-width: 769px) {
  /* Flatten the tile wrapper into the parent grid so the individual group
     controls and thermostat can actually share two balanced rows. */
  .room-header .dd-page-header-strip[data-control-count="4"] .dd-room-tiles,
  .room-header .dd-page-header-strip[data-control-count="5"] .dd-room-tiles,
  .room-header .dd-page-header-strip[data-control-count="6"] .dd-room-tiles,
  .room-header .dd-page-header-strip[data-control-count="7"] .dd-room-tiles,
  .room-header .dd-page-header-strip[data-control-count="8"] .dd-room-tiles {
    display: contents !important;
  }

  .room-header .dd-page-header-strip[data-control-count="4"],
  .room-header .dd-page-header-strip[data-control-count="5"],
  .room-header .dd-page-header-strip[data-control-count="6"],
  .room-header .dd-page-header-strip[data-control-count="7"],
  .room-header .dd-page-header-strip[data-control-count="8"] {
    display: grid !important;
    grid-template-columns: repeat(var(--dd-room-quick-columns), max-content) !important;
    grid-auto-flow: row !important;
    justify-content: start !important;
    align-items: center !important;
    gap: 8px !important;
  }

  /* Home uses exactly the same visible text scale as room names. */
  .sidebar .area-button.home-button .area-info .area-name {
    font-size: 15px !important;
    font-weight: 850 !important;
    line-height: 1.1 !important;
  }
}



/* 2026-10-08 small consistency follow-up. */
.room-header .dd-page-header-title-row .dd-page-header-home,
.dd-room-compact .dd-page-header-home {
  color: var(--primary-color) !important;
  background: color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color)) !important;
}

.room-header .dd-page-header-title-row .dd-page-header-home:hover,
.dd-room-compact .dd-page-header-home:hover {
  color: var(--primary-color) !important;
  background: color-mix(in srgb, var(--primary-color) 17%, var(--card-background-color)) !important;
}

@media (min-width: 769px) {
  /* One desktop camera tile matches one large House Information card:
     three equal columns across the same Home content width. */
  .home-camera-grid {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 10px !important;
    width: 100% !important;
    max-width: none !important;
  }

  .home-camera-card {
    width: 100% !important;
    min-width: 0 !important;
  }
}

/* Room edit DnD handles intentionally match Settings > Areas. */
.area-view .mobile-domain-leading-drag-handle,
.area-view .dd-generated-card-leading-drag-handle {
  width: 22px;
  height: 40px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 4px;
  display: grid;
  place-items: center;
  flex: 0 0 22px;
  color: var(--secondary-text-color);
  background: transparent;
  cursor: grab;
}
.area-view .mobile-domain-leading-drag-handle:hover,
.area-view .dd-generated-card-leading-drag-handle:hover {
  background: var(--primary-background-color);
  color: var(--primary-color);
}
.area-view .mobile-domain-leading-drag-handle ha-icon,
.area-view .dd-generated-card-leading-drag-handle ha-icon {
  --mdc-icon-size: 20px;
}


`;
