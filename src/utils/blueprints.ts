import { parseYaml } from './yaml-mini';

/**
 * Blueprint-engine voor Dwains Dashboard v4 — volledig client-side.
 *
 * Behoudt het DD3-blueprintformaat 1-op-1:
 *
 *   blueprint:
 *     name: ...
 *     description: ...
 *     version: "1.0"
 *     type: page
 *     custom_cards: [ ... ]      # benodigde HACS-kaarten
 *     input:
 *       <key>:
 *         name: ...
 *         description: ...
 *         type: text-field | entity-picker | icon-picker | boolean | number | area-picker
 *         default: ...           # optioneel
 *   card:
 *     type: ...
 *     ...                        # gebruikt $<key>$ placeholders
 */

export type BlueprintInputType =
  | 'text-field'
  | 'entity-picker'
  | 'icon-picker'
  | 'boolean'
  | 'number'
  | 'area-picker'
  | 'entity-list'
  | string;

export interface BlueprintInput {
  name?: string;
  description?: string;
  type?: BlueprintInputType;
  default?: any;
  name_de?: string;
  description_de?: string;
  entity_domain?: string;
  suggest?: string;
  suggest_entity?: string;
  default_icon?: string;
}

export interface BlueprintMeta {
  name: string;
  description?: string;
  version?: string;
  type?: string;
  author?: string;
  name_de?: string;
  description_de?: string;
  icon?: string;
  custom_cards?: string[];
  input?: Record<string, BlueprintInput>;
}

export interface ParsedBlueprint {
  meta: BlueprintMeta;
  card: any;
  raw: string;
}

/** Parse blueprint-YAML naar metadata + kaart-template. Gooit bij fouten. */
export function parseBlueprintYaml(text: string): ParsedBlueprint {
  let doc: any;
  try {
    doc = parseYaml(text);
  } catch (e: any) {
    throw new Error('Could not read YAML: ' + (e?.message || e));
  }
  if (!doc || typeof doc !== 'object') {
    throw new Error('Empty or invalid blueprint.');
  }
  if (!doc.blueprint || typeof doc.blueprint !== 'object') {
    throw new Error('Blueprint is missing the "blueprint:" section.');
  }
  if (doc.card === undefined || doc.card === null) {
    throw new Error('Blueprint is missing the "card:" section.');
  }

  const bp = doc.blueprint;
  const meta: BlueprintMeta = {
    name: String(bp.name ?? 'Untitled blueprint'),
    description: bp.description != null ? String(bp.description) : undefined,
    version: bp.version != null ? String(bp.version) : undefined,
    type: bp.type != null ? String(bp.type) : 'page',
    author: bp.author != null ? String(bp.author) : undefined,
    name_de: bp.name_de != null ? String(bp.name_de) : undefined,
    description_de: bp.description_de != null ? String(bp.description_de) : undefined,
    icon: bp.icon != null ? String(bp.icon) : undefined,
    custom_cards: Array.isArray(bp.custom_cards) ? bp.custom_cards.map(String) : [],
    input: normalizeInputs(bp.input),
  };

  return { meta, card: doc.card, raw: text };
}

function normalizeInputs(input: any): Record<string, BlueprintInput> {
  const out: Record<string, BlueprintInput> = {};
  if (!input || typeof input !== 'object') return out;
  for (const key of Object.keys(input)) {
    const def = input[key] || {};
    out[key] = {
      name: def.name != null ? String(def.name) : key,
      description: def.description != null ? String(def.description) : undefined,
      type: def.type != null ? String(def.type) : 'text-field',
      default: def.default,
      name_de: def.name_de,
      description_de: def.description_de,
      entity_domain: def.entity_domain,
      suggest: def.suggest,
      suggest_entity: def.suggest_entity,
      default_icon: def.default_icon,
    };
  }
  return out;
}

/** Geef standaardwaarden voor alle inputs (voor een leeg formulier). */
export function defaultValues(meta: BlueprintMeta): Record<string, any> {
  const vals: Record<string, any> = {};
  const inputs = meta.input || {};
  for (const key of Object.keys(inputs)) {
    const def = inputs[key]!;
    if (def.default !== undefined) vals[key] = def.default;
    else if (def.type === 'boolean') vals[key] = false;
    else if (def.type === 'entity-list') vals[key] = [];
    else vals[key] = '';
  }
  return vals;
}

/**
 * Vul de kaart-template met de ingevulde inputwaarden. Vervangt elke
 * $<key>$ placeholder. Wanneer een stringwaarde exact één placeholder is en de
 * ingevulde waarde numeriek/boolean is, wordt het type behouden (zodat bv.
 * maxDaysToShow een nummer wordt i.p.v. "7").
 */
export function resolveBlueprintCard(
  card: any,
  meta: BlueprintMeta,
  values: Record<string, any>
): any {
  // Langere keys eerst, zodat $11$ niet door $1$ wordt geraakt. Neem ook
  // runtime/synthetic values mee voor DD3 replace-card placeholders zoals
  // $replace_with_input_entity$, ook wanneer ze niet in blueprint.input staan.
  const keys = Array.from(
    new Set([...Object.keys(meta.input || {}), ...Object.keys(values || {})])
  ).sort((a, b) => b.length - a.length);
  return walk(card);

  function localized(node: any): any {
    return node && typeof node === 'object' && !Array.isArray(node) && node.i18n
      ? (values.__language === 'de' ? (node.i18n.de ?? node.i18n.en) : (node.i18n.en ?? node.i18n.de))
      : node;
  }

  function renderItem(node: any, item: any, index: number): any {
    if (typeof node === 'string') {
      const value = node.replace(/\$item\.(name|icon|image|entity|price_entity|amount_entity|index|last)\$/g, (_: string, key: string) => String(key === 'index' ? index : (item[key] ?? '')));
      return walk(value);
    }
    if (Array.isArray(node)) return node.map((x) => renderItem(x, item, index));
    if (node && typeof node === 'object') {
      if (node.i18n) return renderItem(localized(node), item, index);
      return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, renderItem(v, item, index)]));
    }
    return node;
  }

  function walk(node: any): any {
    if (typeof node === 'string') return substituteString(node);
    if (Array.isArray(node)) return node.flatMap((entry) => {
      if (entry && typeof entry === 'object' && typeof entry.repeat === 'string' && entry.template) {
        const items = values[entry.repeat];
        return Array.isArray(items) ? items.filter((x) => x?.entity).map((item, index) => renderItem(entry.template, { ...item, icon: item.icon || meta.input?.[entry.repeat]?.default_icon || 'mdi:shape', last: index === items.filter((x: any) => x?.entity).length - 1 }, index)) : [];
      }
      const resolved = walk(entry);
      return resolved === undefined ? [] : [resolved];
    });
    if (node && typeof node === 'object') {
      if (node.i18n) return walk(localized(node));
      if (typeof node.requires_input === 'string' && !values[node.requires_input]) return undefined;
      const out: Record<string, any> = {};
      for (const k of Object.keys(node)) {
        if (k === 'requires_input') continue;
        const next = walk(node[k]);
        if (next !== undefined) out[k] = next;
      }
      return out;
    }
    return node;
  }

  function substituteString(str: string): any {
    // Exact één placeholder? Behoud type van de waarde.
    const entities = str.match(/^\$entities\.([a-zA-Z0-9_]+)\$/);
    if (entities) return [...new Set((Array.isArray(values[entities[1] || '']) ? values[entities[1] || ''] : []).flatMap((item: any) => [item.entity, item.price_entity, item.amount_entity]).filter(Boolean).concat(values.portfolio_total ? [values.portfolio_total] : []))];
    for (const key of keys) {
      if (str === `$${key}$`) {
        return coerce(values[key]);
      }
    }
    // Anders: tekstvervanging binnen de string.
    let result = str.replace(/\$json\.([a-zA-Z0-9_]+)\$/g, (_match, key: string) => JSON.stringify(Array.isArray(values[key]) ? values[key] : []));
    for (const key of keys) {
      if (result.includes(`$${key}$`)) {
        const v = values[key];
        result = result.split(`$${key}$`).join(v == null ? '' : String(v));
      }
    }
    return result;
  }
}

function coerce(v: any): any {
  if (v == null) return '';
  if (typeof v !== 'string') return v;
  const t = v.trim();
  if (t === '') return '';
  if (t === 'true') return true;
  if (t === 'false') return false;
  if (/^[-+]?\d+$/.test(t)) return parseInt(t, 10);
  if (/^[-+]?(\d+\.\d*|\.\d+)$/.test(t)) return parseFloat(t);
  return v;
}

/** Verzamel alle custom: kaarttypes die in de template voorkomen. */
export function collectCustomCardTypes(card: any): string[] {
  const found = new Set<string>();
  walk(card);
  return Array.from(found);

  function walk(node: any) {
    if (Array.isArray(node)) {
      node.forEach(walk);
    } else if (node && typeof node === 'object') {
      if (typeof node.type === 'string' && node.type.startsWith('custom:')) {
        found.add(node.type.slice('custom:'.length));
      }
      Object.values(node).forEach(walk);
    }
  }
}
