import { fireEvent } from "./fire-event";
import type { DeviceInfoDialogParams } from "../dwains-device-info-dialog";

export const loadDeviceInfoDialog = () => import("../dwains-device-info-dialog");

export const showDeviceInfoDialog = (
  element: HTMLElement,
  dialogParams: DeviceInfoDialogParams
): void => {
  fireEvent(element, "show-dialog", {
    dialogTag: "dwains-dashboard-next-device-info-dialog",
    dialogImport: loadDeviceInfoDialog,
    dialogParams,
  });
};
