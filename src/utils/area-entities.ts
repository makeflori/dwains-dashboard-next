import type { HomeAssistant } from '../types/home-assistant';
import type { AreasDisplay, AreaSortMode, EntitiesDisplay } from '../types/strategy';
import { getCollator } from './intl-cache';
import { getEntityRegistry } from './entity-registry';
import { stripAreaNameFromEntityName } from './entity-names';

// Keep room settings on the same concrete entity-type model as the room view.
// Motion remains its own group because the room view also separates motion binary sensors.
export const AREA_STRATEGY_GROUPS = [
  'light',
  'switch',
  'input_boolean',
  'lock',
  'cover_shading',
  'cover_openings',
  'cover_gates',
  'safety',
  'climate',
  'fan',
  'humidifier',
  'water_heater',
  'valve',
  'media_player',
  'motion',
  'camera',
  'vacuum',
  'lawn_mower',
  'todo',
  'scene',
  'script',
  'automation',
  'button',
  'event',
  'select',
  'number',
  'input_number',
  'counter',
  'timer',
  'binary_sensor',
  'sensor',
] as const;

export const AREA_STRATEGY_GROUP_ICONS: Record<AreaStrategyGroup, string> = {
  light: 'mdi:lightbulb',
  switch: 'mdi:power-plug',
  cover_openings: 'mdi:door-open',
  cover_shading: 'mdi:blinds-horizontal',
  cover_gates: 'mdi:gate',
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
  cover_shading: 'Shading',
  cover_gates: 'Gates',
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

// Room pages group covers by what they do. Each group gets its own quick
// control tile in the room header.
export const AREA_COVER_GROUPS = ['cover_shading', 'cover_openings', 'cover_gates'] as const;

export type AreaCoverGroup = (typeof AREA_COVER_GROUPS)[number];

const OPENING_COVER_CLASSES = new Set(['door', 'window']);
const GATE_CLASSES = new Set(['garage', 'garage_door', 'gate']);
const OPENING_SENSOR_CLASSES = new Set(['door', 'window', 'opening']);
const MOTION_SENSOR_CLASSES = new Set(['motion', 'moving', 'occupancy', 'presence']);
const SAFETY_SENSOR_CLASSES = new Set([
  'smoke',
  'gas',
  'carbon_monoxide',
  'moisture',
  'safety',
  'tamper',
  'problem',
  'heat',
  'cold',
]);

interface DeviceClassState {
  attributes?: { device_class?: unknown } | null;
}

interface DeviceClassRegistryEntry {
  device_class?: unknown;
  original_device_class?: unknown;
}

function entityDeviceClass(
  state: DeviceClassState | null | undefined,
  registryEntry: DeviceClassRegistryEntry | null | undefined
): string {
  // The state attribute already includes a device class set by the user.
  const value = state?.attributes?.device_class ??
    registryEntry?.device_class ??
    registryEntry?.original_device_class;
  return typeof value === 'string' ? value.toLowerCase() : '';
}

export function isAreaCoverGroup(groupKey: string | undefined): groupKey is AreaCoverGroup {
  return (AREA_COVER_GROUPS as readonly string[]).includes(groupKey || '');
}

/**
 * The room page group of an entity. Most entities are grouped by domain.
 * Covers, binary sensors and alarm panels are grouped by meaning, so a door
 * sensor sits next to the door it watches and a smoke detector next to the
 * alarm. Input selects join the selects.
 */
export function getAreaEntityGroupKey(
  entityId: string,
  state?: DeviceClassState | null,
  registryEntry?: DeviceClassRegistryEntry | null
): string {
  const domain = entityId.split('.')[0] || '';

  if (domain === 'cover') {
    const deviceClass = entityDeviceClass(state, registryEntry);
    if (GATE_CLASSES.has(deviceClass)) return 'cover_gates';
    if (OPENING_COVER_CLASSES.has(deviceClass)) return 'cover_openings';
    // Blinds, shades, shutters, curtains, awnings, dampers and covers without a class.
    return 'cover_shading';
  }

  if (domain === 'binary_sensor') {
    const deviceClass = entityDeviceClass(state, registryEntry);
    if (GATE_CLASSES.has(deviceClass)) return 'cover_gates';
    if (OPENING_SENSOR_CLASSES.has(deviceClass)) return 'cover_openings';
    if (MOTION_SENSOR_CLASSES.has(deviceClass)) return 'motion';
    if (SAFETY_SENSOR_CLASSES.has(deviceClass)) return 'safety';
    return 'binary_sensor';
  }

  if (domain === 'alarm_control_panel') return 'safety';
  if (domain === 'input_select') return 'select';
  return domain;
}

/**
 * Sort covers into their room groups in one pass. Entities that are not
 * covers are skipped.
 */
export function groupAreaCovers<T extends { entity_id: string }>(
  entities: readonly T[],
  states: Record<string, DeviceClassState | undefined>
): Record<AreaCoverGroup, T[]> {
  const groups: Record<AreaCoverGroup, T[]> = {
    cover_shading: [],
    cover_openings: [],
    cover_gates: [],
  };
  for (const entity of entities) {
    if (!entity.entity_id.startsWith('cover.')) continue;
    const groupKey = getAreaEntityGroupKey(entity.entity_id, states[entity.entity_id]);
    if (isAreaCoverGroup(groupKey)) groups[groupKey].push(entity);
  }
  return groups;
}

/** The covers that an "open all" or "close all" action for a room acts on. */
export function selectAreaCovers<T extends { entity_id: string }>(
  entities: readonly T[],
  states: Record<string, DeviceClassState | undefined>,
  groupKey?: AreaCoverGroup
): T[] {
  if (!groupKey) return entities.filter((entity) => entity.entity_id.startsWith('cover.'));
  return groupAreaCovers(entities, states)[groupKey];
}

/**
 * Group keys that older configurations used for the same entities. Gates were
 * part of shading for a while, all covers used to share one group and input
 * selects had a group of their own.
 */
export function legacyAreaGroupKeys(groupKey: string): string[] {
  if (groupKey === 'cover_gates') return ['cover_shading', 'cover'];
  if (groupKey === 'cover_shading' || groupKey === 'cover_openings') return ['cover'];
  if (groupKey === 'select') return ['input_select'];
  return [];
}

/** The broad settings group that a room group belongs to. */
export function areaStrategyGroupForKey(groupKey: string): AreaStrategyGroup {
  if ((AREA_STRATEGY_GROUPS as readonly string[]).includes(groupKey)) {
    return groupKey as AreaStrategyGroup;
  }
  if (groupKey === 'light') return 'lights';
  if (['climate', 'humidifier', 'water_heater', 'fan'].includes(groupKey)) return 'climate';
  if (groupKey === 'cover' || isAreaCoverGroup(groupKey)) return 'covers';
  if (groupKey === 'media_player') return 'media_players';
  if (['alarm_control_panel', 'lock', 'camera', 'binary_sensor', 'safety'].includes(groupKey)) return 'security';
  if (groupKey === 'motion') return 'motion';
  if (['script', 'scene', 'automation', 'todo', 'event'].includes(groupKey)) return 'actions';
  return 'others';
}

/**
 * The position of a room group in a saved group order. Uses the group's own
 * key first, then the keys older versions saved and finally the broad
 * settings group, which is what the settings editor stores.
 */
export function areaGroupOrderIndex(order: readonly string[], groupKey: string): number | undefined {
  if (!order.length) return undefined;
  for (const key of [groupKey, ...legacyAreaGroupKeys(groupKey)]) {
    const index = order.indexOf(key);
    if (index >= 0) return index;
  }
  const strategyGroup = areaStrategyGroupForKey(groupKey);
  const index = order.findIndex((key) => areaStrategyGroupForKey(key) === strategyGroup);
  return index >= 0 ? index : undefined;
}

/** The saved entity order of a room group, read from older keys when the group has none. */
export function resolveAreaGroupEntityOrder(
  groupsOptions: Record<string, EntitiesDisplay | undefined> | undefined,
  groupKey: string
): string[] {
  if (!groupsOptions) return [];
  for (const key of [groupKey, ...legacyAreaGroupKeys(groupKey)]) {
    const order = groupsOptions[key]?.order;
    if (order?.length) return order;
  }
  return [];
}

const LEGACY_CARD_PLACEMENT_GROUPS = new Map([
  // Covers without a class are shading, so that is where most old cards belong.
  ['cover', 'cover_shading'],
  ['input_select', 'select'],
  ['alarm_control_panel', 'safety'],
]);

/**
 * Custom cards placed in a group that no longer exists on its own move to the
 * group that took over its entities.
 */
export function migrateAreaCardPlacement(placement: string): string {
  const domainMatch = /^domain:([^:]+):(\d+)$/.exec(placement);
  if (domainMatch) {
    const groupKey = LEGACY_CARD_PLACEMENT_GROUPS.get(domainMatch[1]!);
    return groupKey ? `domain:${groupKey}:${domainMatch[2]}` : placement;
  }
  if (placement.startsWith('after:')) {
    const groupKey = LEGACY_CARD_PLACEMENT_GROUPS.get(placement.slice('after:'.length));
    return groupKey ? `after:${groupKey}` : placement;
  }
  return placement;
}

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
    const gateClasses = new Set(['garage', 'garage_door', 'gate']);
    if (gateClasses.has(deviceClass)) return 'cover_gates';
    return openingClasses.has(deviceClass) ? 'cover_openings' : 'cover_shading';
  }
  if (domain === 'input_select') return 'select';
  if (domain === 'input_boolean') return 'input_boolean';
  if (domain === 'alarm_control_panel') return 'safety';
  if (domain === 'binary_sensor') {
    const deviceClass = String(hass.states[entityId]?.attributes?.device_class || '').toLowerCase();
    if (['garage', 'garage_door', 'gate'].includes(deviceClass)) return 'cover_gates';
    if (['door', 'window', 'opening'].includes(deviceClass)) return 'cover_openings';
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
  if (group === 'cover_openings' || group === 'cover_shading' || group === 'cover_gates') return 'covers';
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
  if (group === 'cover_gates') {
    const formerCombinedShading = displayOptions?.cover_shading;
    if (formerCombinedShading) return formerCombinedShading;
  }
  if (group === 'cover_openings' || group === 'cover_shading' || group === 'cover_gates') {
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
  // Get all entities for this area
  const allEntities = Object.keys(hass.states);
  const areaEntities = allEntities.filter((entityId) => {
    const entity = hass.states[entityId];
    return entity && getEntityRegistry(hass)[entityId]?.area_id === areaId;
  });

      // Group entities by domain
  const grouped: AreaEntitiesByGroup = {
    lights: [],
    climate: [],
    covers: [],
    media_players: [],
    security: [],
    motion: [],
    actions: [],
    others: [],
  };

  areaEntities.forEach((entityId) => {
    const domain = entityId.split('.')[0];
    const state = hass.states[entityId];

    // Skip hidden and diagnostic entities
    const entity = getEntityRegistry(hass)[entityId];
    if (entity?.hidden_by || entity?.entity_category === 'diagnostic' || entity?.entity_category === 'config') {
      return;
    }

    // Group based on domain and device class
    if (domain === 'light') {
      grouped.lights.push(entityId);
    } else if (domain === 'climate' || domain === 'humidifier' || domain === 'water_heater' || domain === 'fan') {
      grouped.climate.push(entityId);
    } else if (domain === 'cover') {
      grouped.covers.push(entityId);
    } else if (domain === 'binary_sensor' && state?.attributes?.device_class &&
               ['door', 'garage_door', 'window'].includes(state.attributes.device_class)) {
      grouped.covers.push(entityId);
    } else if (domain === 'media_player') {
      grouped.media_players.push(entityId);
    } else if (domain === 'alarm_control_panel' || domain === 'lock' || domain === 'camera') {
      grouped.security.push(entityId);
    } else if (domain === 'binary_sensor' && state?.attributes?.device_class &&
               ['motion', 'occupancy', 'presence'].includes(state.attributes.device_class)) {
      grouped.motion.push(entityId);
    } else if (domain === 'script' || domain === 'scene' || domain === 'automation' || domain === 'todo') {
      grouped.actions.push(entityId);
    } else if (domain === 'switch' || domain === 'button' || domain === 'input_boolean' ||
               domain === 'vacuum' || domain === 'lawn_mower' || domain === 'valve' ||
               domain === 'select' || domain === 'number' || domain === 'input_select' ||
               domain === 'input_number' || domain === 'counter' || domain === 'timer') {
      grouped.others.push(entityId);
    }
  });

  // Apply display options (hidden/order) per group
  Object.keys(grouped).forEach((group) => {
    const groupKey = group as AreaStrategyGroup;
    const options = displayOptions?.[groupKey];

    if (options?.hidden) {
      const hiddenSet = new Set(options.hidden);
      grouped[groupKey] = grouped[groupKey].filter(entity => !hiddenSet.has(entity));
    }

    if (options?.order) {
      grouped[groupKey] = sortByOrder(grouped[groupKey], options.order);
    } else {
      // Sort alphabetically by friendly name
      grouped[groupKey].sort((a, b) => {
        const nameA = hass.states[a]?.attributes?.friendly_name || a;
        const nameB = hass.states[b]?.attributes?.friendly_name || b;
        return nameA.localeCompare(nameB);
      });
    }
  });

  return grouped;
}

export function getAreaGroupedEntitiesFromConfig(
  areaEntities: { entity_id: string }[],
  hass: HomeAssistant,
  displayOptions?: AreaGroupsDisplayOptions
): AreaEntitiesByGroup {
  // Group entities by domain
  const grouped: AreaEntitiesByGroup = {
    lights: [],
    climate: [],
    covers: [],
    media_players: [],
    security: [],
    motion: [],
    actions: [],
    others: [],
  };

  areaEntities.forEach((entity) => {
    const entityId = entity.entity_id;
    const domain = entityId.split('.')[0];
    const state = hass.states[entityId];

    // Skip if state doesn't exist
    if (!state) return;

    // Skip hidden and diagnostic entities (check via getEntityRegistry(hass) if available)
    const entityRegistry = getEntityRegistry(hass)[entityId];
    if (entityRegistry?.hidden_by || entityRegistry?.entity_category === 'diagnostic' || entityRegistry?.entity_category === 'config') {
      return;
    }

    // Group based on domain and device class
    if (domain === 'light') {
      grouped.lights.push(entityId);
    } else if (domain === 'climate' || domain === 'humidifier' || domain === 'water_heater' || domain === 'fan') {
      grouped.climate.push(entityId);
    } else if (domain === 'cover') {
      grouped.covers.push(entityId);
    } else if (domain === 'binary_sensor' && state?.attributes?.device_class &&
               ['door', 'garage_door', 'window'].includes(state.attributes.device_class)) {
      grouped.covers.push(entityId);
    } else if (domain === 'binary_sensor' && state?.attributes?.device_class &&
               ['motion', 'occupancy', 'presence'].includes(state.attributes.device_class)) {
      grouped.motion.push(entityId);
    } else if (domain === 'binary_sensor') {
      grouped.security.push(entityId);
    } else if (domain === 'media_player') {
      grouped.media_players.push(entityId);
    } else if (domain === 'alarm_control_panel' || domain === 'lock' || domain === 'camera') {
      grouped.security.push(entityId);
    } else if (domain === 'script' || domain === 'scene' || domain === 'automation' || domain === 'todo') {
      grouped.actions.push(entityId);
    } else if (domain === 'switch' || domain === 'button' || domain === 'input_boolean' ||
               domain === 'vacuum' || domain === 'lawn_mower' || domain === 'valve' ||
               domain === 'select' || domain === 'number' || domain === 'input_select' ||
               domain === 'input_number' || domain === 'counter' || domain === 'timer' ||
               domain === 'sensor') {
      grouped.others.push(entityId);
    }
  });

  // Apply display options (hidden/order) per group
  Object.keys(grouped).forEach((group) => {
    const groupKey = group as AreaStrategyGroup;
    const options = displayOptions?.[groupKey];

    if (options?.hidden) {
      const hiddenSet = new Set(options.hidden);
      grouped[groupKey] = grouped[groupKey].filter(entity => !hiddenSet.has(entity));
    }

    if (options?.order) {
      grouped[groupKey] = sortByOrder(grouped[groupKey], options.order);
    } else {
      // Sort alphabetically by friendly name
      grouped[groupKey].sort((a, b) => {
        const nameA = hass.states[a]?.attributes?.friendly_name || a;
        const nameB = hass.states[b]?.attributes?.friendly_name || b;
        return nameA.localeCompare(nameB);
      });
    }
  });

  return grouped;
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

/**
 * Remove a leading area name from an entity name, so a tile on the
 * "Living room" page shows "Ceiling light" instead of "Living room Ceiling light".
 * The area name must be followed by a space, dash or underscore, the match
 * ignores case and the result is never empty (the original name is returned then).
 * See `stripAreaNameFromEntityName` for the version that also looks at the end.
 */
export function stripAreaFromEntityName(entityName: string, areaName: string): string {
  return stripAreaNameFromEntityName(entityName, areaName, { atEnd: false });
}

/**
 * The secondary line of an entity tile on an area page. It shows the device
 * name (without the area prefix) when that adds information, and nothing when
 * the device name is missing or already part of the displayed entity name.
 */
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

  const collator = getCollator(locale, {
    numeric: true,
    sensitivity: 'base',
  });
  return filteredAreas.sort((a, b) => collator.compare(a.name, b.name));
}

/**
 * Custom cards of a freely ordered room page that would fall outside its
 * list: `ungrouped:N` past the last entity shown, and cards placed in or
 * after a type group (`domain:<group>:N`, `after:<group>`) that has no
 * entity on the page, for example because its entities are hidden. The room
 * page shows these at the end, so hiding entities never hides a card. The
 * `ungrouped:` cards come first, in the order of their place in the list;
 * the others follow in the order they are stored.
 */
export function overflowingUngroupedCustomCards<T extends { placement: string }>(
  cards: readonly T[],
  entityCount: number,
  groupsOnPage: ReadonlySet<string>
): T[] {
  const ungroupedSlot = (card: T): number | undefined => {
    const match = /^ungrouped:(\d+)$/.exec(card.placement);
    return match ? Number(match[1]) : undefined;
  };
  return cards.filter((card) => {
    const slot = ungroupedSlot(card);
    if (slot !== undefined) return slot > entityCount;
    const domain = /^domain:(.+):\d+$/.exec(card.placement);
    if (domain) return !groupsOnPage.has(domain[1]!);
    if (card.placement.startsWith('after:')) return !groupsOnPage.has(card.placement.slice('after:'.length));
    return false;
  })
    // Group cards sort after every place; sort is stable, so cards with the
    // same place, and the group cards among themselves, keep their stored order.
    .sort((a, b) => (ungroupedSlot(a) ?? Number.MAX_SAFE_INTEGER) - (ungroupedSlot(b) ?? Number.MAX_SAFE_INTEGER));
}
