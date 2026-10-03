function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Removes an area's name from the start or end of an entity display name.
 *
 * Only full area-name tokens are removed. Substrings inside words remain
 * untouched, so an area "Wohnzimmer" will shorten "Deckenlampe Wohnzimmer"
 * but not "Wohnzimmerlampe".
 */
export function stripAreaNameFromEntityName(name: string, areaName?: string): string {
  const original = String(name || '').trim();
  const area = String(areaName || '').trim();
  if (!original || !area) return original;

  const escapedArea = escapeRegExp(area);
  const areaToken = `(?:\\(\\s*${escapedArea}\\s*\\)|\\[\\s*${escapedArea}\\s*\\]|${escapedArea})`;
  const separator = '(?:\\s*[-–—:|/·]\\s*|\\s+)';

  const atStart = new RegExp(`^${areaToken}${separator}`, 'iu');
  const atEnd = new RegExp(`${separator}${areaToken}$`, 'iu');

  const shortened = original
    .replace(atStart, '')
    .replace(atEnd, '')
    .trim();

  return shortened || original;
}
