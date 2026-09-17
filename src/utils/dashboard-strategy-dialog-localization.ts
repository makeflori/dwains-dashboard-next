import { ddLocalize } from './localize';

let installed = false;

function getHass(): any {
  const homeAssistant = document.querySelector('home-assistant') as any;
  const main = document.querySelector('home-assistant-main') as any;
  return homeAssistant?.hass || homeAssistant?.__hass || main?.hass || (window as any).hass;
}

function findInOpenShadowRoots<T extends Element>(selector: string): T | undefined {
  const roots: Array<Document | ShadowRoot> = [document];
  const visited = new Set<Document | ShadowRoot>();

  while (roots.length) {
    const root = roots.pop()!;
    if (visited.has(root)) continue;
    visited.add(root);

    const match = root.querySelector<T>(selector);
    if (match) return match;

    for (const element of Array.from(root.querySelectorAll<HTMLElement>('*'))) {
      if (element.shadowRoot) roots.push(element.shadowRoot);
    }
  }

  return undefined;
}

function localizeDashboardStrategyDialog(): void {
  const dialog = findInOpenShadowRoots<HTMLElement>('dialog-dashboard-strategy-editor');
  const root = dialog?.shadowRoot;
  if (!root) return;

  const footer = root.querySelector('ha-dialog-footer');
  if (!footer) return;

  const saveButton = footer.querySelector<HTMLElement>('ha-button[slot="primaryAction"]');
  if (!saveButton) return;

  const cancelButton = Array.from(
    footer.querySelectorAll<HTMLElement>('ha-button[slot="secondaryAction"]'),
  ).find((button) => button.getAttribute('variant') !== 'danger');

  if (!cancelButton) return;

  const label = ddLocalize(getHass(), 'common.cancel');
  if (cancelButton.textContent?.trim() !== label) {
    cancelButton.textContent = label;
  }
  cancelButton.setAttribute('aria-label', label);
}

export function installDashboardStrategyDialogLocalization(): void {
  if (installed) return;
  installed = true;

  localizeDashboardStrategyDialog();
  window.setInterval(localizeDashboardStrategyDialog, 400);
}
