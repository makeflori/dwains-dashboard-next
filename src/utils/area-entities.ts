import type { HomeAssistant } from '../types/home-assistant';
import type { AreasDisplay, AreaSortMode, EntitiesDisplay } from '../types/strategy';

// Keep room settings on the same concrete entity-type model as the room view.
// Motion remains its own group because the room view also separates motion binary sensors.
export const AREA_STRATEGY_GROUPS = [
  'light',
  'switch',
  'cover_openings',
  'cover_shading',
  'climate',
  'todo',
  'scene',
  'event',
  'motion',
  'safety',
  'binary_sensor',
  'sensor',
  'media_player',
  'fan',
  'lock',
  'camera',
  'vacuum',
  'alarm_control_panel',
  'button',
  'input_boolean',
  'script',
  'automation',
  'humidifier',
  'water_heater',
  'lawn_mower',
  'valve',
  'select',
  'number',
  'input_number',
  'counter',
  'timer',
] as const;

export const AREA_STRATEGY_GROUP_ICONS: Record<AreaStrategyGroup, string> = {
  light: 'mdi:lightbulb',
  switch: 'mdi:power-plug',
  cover_openings: 'mdi:door-open',
  cover_shading: 'mdi:blinds-horizontal',
  climate: 'mdi:thermostat',
  todo: 'mdi:clipboard-list-outline',
  scene: 'mdi:palette-outline',
  event: 'mdi:gesture-tap',
  motion: 'mdi:motion-sensor',
  safety: 'mdi:shield-alert-outline',
  binary_sensor: 'mdi:radiobox-marked',
  sensor: 'mdi:eye-outline',
  media_player: 'mdi:multimedia',
  fan: 'mdi:fan',
  lock: 'mdi:lock',
  camera: 'mdi:camera',
  vacuum: 'mdi:robot-vacuum',
  alarm_control_panel: 'mdi:shield-home',
  button: 'mdi:gesture-tap-button',
  input_boolean: 'mdi:toggle-switch-outline',
  script: 'mdi:script-text-outline',
  automation: 'mdi:robot',
  humidifier: 'mdi:air-humidifier',
  water_heater: 'mdi:water-boiler',
  lawn_mower: 'mdi:robot-mower-outline',
  valve: 'mdi:valve',
  select: 'mdi:form-dropdown',
  number: 'mdi:numeric',
  input_number: 'mdi:numeric',
  counter: 'mdi:counter',
  timer: 'mdi:timer-outline',
};

export const AREA_STRATEGY_GROUP_TITLES: Record<AreaStrategyGroup, string> = {
  light: 'Lights',
  switch: 'Switches',
  cover_openings: 'Windows & doors',
  cover_shading: 'Shading & gates',
  climate: 'Climate',
  todo: 'To-do lists',
  scene: 'Scenes',
  event: 'Events',
  motion: 'Motion & presence',
  safety: 'Safety & alarms',
  binary_sensor: 'Binary sensors',
  sensor: 'Sensors',
  media_player: 'Media players',
  fan: 'Fans',
  lock: 'Locks',
  camera: 'Cameras',
  vacuum: 'Vacuums',
  alarm_control_panel: 'Alarm',
  button: 'Buttons',
  input_boolean: 'Toggles',
  script: 'Scripts',
  automation: 'Automations',
  humidifier: 'Humidifiers',
  water_heater: 'Water heaters',
  lawn_mower: 'Lawn mowers',
  valve: 'Valves',
  select: 'Selectors',
  number: 'Numbers',
  input_number: 'Numbers',
  counter: 'Counters',
  timer: 'Timers',
};

export type AreaStrategyGroup = (typeof AREA_STRATEGY_GROUPS)[number];

type AreaEntitiesByGroup = Record<AreaStrategyGroup, string[]>;

interface AreaGroupsDisplayOptions {
  [group: string]: EntitiesDisplay | undefined;
}

function emptyGroups(): AreaEntitiesByGroup {
  return Object.fromEntries(
    AREA_STRATEGY_GROUPS.map((group) => [group, [] as string[]])
  ) as AreaEntitiesByGroup;
}

export function getAreaEntityGroupKey(entityId: string, hass: HomeAssistant): AreaStrategyGroup | undefined {
  const domain = entityId.split('.')[0] || '';
  if (domain === 'cover') {
    const deviceClass = String(hass.states[entityId]?.attributes?.device_class || '').toLowerCase();
    const openingClasses = new Set(['door', 'window']);
    return openingClasses.has(deviceClass) ? 'cover_openings' : 'cover_shading';
  }
  if (domain === 'input_select') return 'select';
  if (domain === 'input_boolean') return 'input_boolean';
  if (domain === 'binary_sensor') {
    const deviceClass = String(hass.states[entityId]?.attributes?.device_class || '').toLowerCase();
    if (['door', 'window', 'opening', 'garage_door'].includes(deviceClass)) return 'cover_openings';
    if (['motion', 'moving', 'occupancy', 'presence'].includes(deviceClass)) return 'motion';
    if (['smoke', 'gas', 'carbon_monoxide', 'moisture', 'safety', 'tamper', 'problem', 'heat', 'cold'].includes(deviceClass)) return 'safety';
    return 'binary_sensor';
  }
  return (AREA_STRATEGY_GROUPS as readonly string[]).includes(domain)
    ? domain as AreaStrategyGroup
    : undefined;
}

// Compatibility with the older broad settings groups. New writes use concrete
// groups, while old hidden/order data keeps working until the user changes it.
export function getLegacyAreaGroupKey(group: AreaStrategyGroup): string {
  if (group === 'light') return 'lights';
  if (['climate', 'humidifier', 'water_heater', 'fan'].includes(group)) return 'climate';
  if (group === 'cover_openings' || group === 'cover_shading') return 'covers';
  if (group === 'media_player') return 'media_players';
  if (['alarm_control_panel', 'lock', 'camera', 'binary_sensor', 'safety'].includes(group)) return 'security';
  if (group === 'motion') return 'motion';
  if (['script', 'scene', 'automation', 'todo', 'event'].includes(group)) return 'actions';
  return 'others';
}

function optionsForGroup(
  displayOptions: AreaGroupsDisplayOptions | undefined,
  group: AreaStrategyGroup
): EntitiesDisplay | undefined {
  const direct = displayOptions?.[group];
  if (group === 'select') {
    const legacyInputSelect = displayOptions?.input_select;
    if (direct && legacyInputSelect) {
      return {
        ...direct,
        hidden: Array.from(new Set([...(direct.hidden || []), ...(legacyInputSelect.hidden || [])])),
        order: [...(direct.order || []), ...(legacyInputSelect.order || []).filter(id => !(direct.order || []).includes(id))],
      };
    }
    if (direct) return direct;
    if (legacyInputSelect) return legacyInputSelect;
  }
  if (direct) return direct;
  if (group === 'cover_openings' || group === 'cover_shading') {
    const formerCover = displayOptions?.cover;
    if (formerCover) return formerCover;
  }
  return displayOptions?.[getLegacyAreaGroupKey(group)];
}

function groupEntities(
  entityIds: string[],
  hass: HomeAssistant,
  displayOptions?: AreaGroupsDisplayOptions
): AreaEntitiesByGroup {
  const grouped = emptyGroups();

  entityIds.forEach((entityId) => {
    const state = hass.states[entityId];
    if (!state) return;

    const entityRegistry = hass.entities?.[entityId];
    if (entityRegistry?.hidden_by ||
        entityRegistry?.entity_category === 'config' ||
        entityRegistry?.entity_category === 'diagnostic') {
      return;
    }

    const group = getAreaEntityGroupKey(entityId, hass);
    if (group) grouped[group].push(entityId);
  });

  AREA_STRATEGY_GROUPS.forEach((group) => {
    const options = optionsForGroup(displayOptions, group);
    if (options?.hidden) {
      const hidden = new Set(options.hidden);
      grouped[group] = grouped[group].filter((entityId) => !hidden.has(entityId));
    }
    if (options?.order?.length) {
      grouped[group] = sortByOrder(grouped[group], options.order);
    } else {
      grouped[group].sort((a, b) => {
        const nameA = hass.states[a]?.attributes?.friendly_name || a;
        const nameB = hass.states[b]?.attributes?.friendly_name || b;
        return nameA.localeCompare(nameB);
      });
    }
  });

  return grouped;
}

export function getAreaGroupedEntities(
  areaId: string,
  hass: HomeAssistant,
  displayOptions?: AreaGroupsDisplayOptions
): AreaEntitiesByGroup {
  const areaEntities = Object.keys(hass.states).filter((entityId) =>
    hass.entities?.[entityId]?.area_id === areaId
  );
  return groupEntities(areaEntities, hass, displayOptions);
}

export function getAreaGroupedEntitiesFromConfig(
  areaEntities: { entity_id: string }[],
  hass: HomeAssistant,
  displayOptions?: AreaGroupsDisplayOptions
): AreaEntitiesByGroup {
  return groupEntities(areaEntities.map((entity) => entity.entity_id), hass, displayOptions);
}

function sortByOrder(items: string[], order: string[]): string[] {
  const orderMap = new Map(order.map((item, index) => [item, index]));
  return [...items].sort((a, b) => {
    const indexA = orderMap.get(a);
    const indexB = orderMap.get(b);
    if (indexA !== undefined && indexB !== undefined) return indexA - indexB;
    if (indexA !== undefined) return -1;
    if (indexB !== undefined) return 1;
    return a.localeCompare(b);
  });
}

export function stripAreaFromEntityName(entityName: string, areaName: string): string {
  const lowerName = entityName.toLowerCase();
  const lowerArea = areaName.toLowerCase();

  if (lowerName.startsWith(lowerArea + ' ')) {
    return entityName.substring(areaName.length + 1);
  }

  return entityName;
}

export function areaEntityDeviceLabel(
  displayName: string,
  deviceName: string | null | undefined,
  areaName: string
): string | undefined {
  const device = String(deviceName ?? '').trim();
  if (!device) return undefined;
  const label = stripAreaFromEntityName(device, areaName);
  const normalizedLabel = label.toLocaleLowerCase();
  const normalizedDevice = device.toLocaleLowerCase();
  const normalizedArea = String(areaName ?? '').trim().toLocaleLowerCase();
  const normalizedName = String(displayName ?? '').trim().toLocaleLowerCase();
  if (!normalizedName) return label;
  if (normalizedLabel === normalizedArea || normalizedDevice === normalizedArea) return undefined;
  if (normalizedName === normalizedLabel || normalizedName.startsWith(`${normalizedLabel} `)) return undefined;
  if (normalizedName === normalizedDevice || normalizedName.startsWith(`${normalizedDevice} `)) return undefined;
  return label;
}

export function resolveAreaSortMode(areasDisplay?: AreasDisplay): AreaSortMode {
  if (areasDisplay?.sort_mode) return areasDisplay.sort_mode;
  return areasDisplay?.order?.length ? 'custom' : 'alphabetical';
}

export function sortAreas(
  areas: any[],
  areasDisplay?: AreasDisplay,
  locale?: string
): any[] {
  let filteredAreas = [...areas];

  if (areasDisplay?.hidden) {
    const hiddenSet = new Set(areasDisplay.hidden);
    filteredAreas = filteredAreas.filter(area => !hiddenSet.has(area.area_id));
  }

  const sortMode = resolveAreaSortMode(areasDisplay);

  if (sortMode === 'home_assistant') {
    return filteredAreas;
  }

  if (sortMode === 'custom' && areasDisplay?.order?.length) {
    const orderedAreas = areasDisplay.order
      .map(areaId => filteredAreas.find(area => area.area_id === areaId))
      .filter(area => area !== undefined) as any[];

    const orderedIds = new Set(areasDisplay.order);
    const remainingAreas = filteredAreas.filter(area => !orderedIds.has(area.area_id));

    return [...orderedAreas, ...remainingAreas];
  }

  const collator = new Intl.Collator(locale, {
    numeric: true,
    sensitivity: 'base',
  });
  return filteredAreas.sort((a, b) => collator.compare(a.name, b.name));
}
