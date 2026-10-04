import { fireEvent } from "./fire-event";
import type { DomainEntitiesDialogParams } from "../dwains-domain-entities-dialog";

export const loadDomainEntitiesDialog = () =>
  import("../dwains-domain-entities-dialog");

export const showDomainEntitiesDialog = (
  element: HTMLElement,
  dialogParams: DomainEntitiesDialogParams
): void => {
  // Home Assistant's dialog manager already serializes dialog presentation.
  // A module-global "open" flag caused legitimate subsequent clicks to be dropped
  // when the close event arrived late or on another event path.
  fireEvent(element, "show-dialog", {
    dialogTag: "dwains-dashboard-next-domain-entities-dialog",
    dialogImport: loadDomainEntitiesDialog,
    dialogParams,
  });
};
