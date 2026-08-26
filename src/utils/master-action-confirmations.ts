import type {
  DwainsDashboardSettings,
  MasterActionConfirmationDomain,
} from '../types/strategy';

export const MASTER_ACTION_CONFIRMATION_DOMAINS: readonly MasterActionConfirmationDomain[] = [
  'light',
  'switch',
  'fan',
  'cover',
  'lock',
];

export const DEFAULT_MASTER_ACTION_CONFIRMATIONS: Record<MasterActionConfirmationDomain, boolean> = {
  light: false,
  switch: true,
  fan: false,
  cover: true,
  lock: true,
};

export function normalizeMasterActionConfirmationDomain(
  domain: string
): MasterActionConfirmationDomain | undefined {
  const normalized = domain === 'input_boolean' ? 'switch' : domain;
  return MASTER_ACTION_CONFIRMATION_DOMAINS.includes(normalized as MasterActionConfirmationDomain)
    ? normalized as MasterActionConfirmationDomain
    : undefined;
}

export function masterActionConfirmationEnabled(
  settings: DwainsDashboardSettings | undefined,
  domain: string
): boolean {
  const normalized = normalizeMasterActionConfirmationDomain(domain);
  if (!normalized) return false;

  return settings?.master_action_confirmations?.[normalized]
    ?? DEFAULT_MASTER_ACTION_CONFIRMATIONS[normalized];
}
