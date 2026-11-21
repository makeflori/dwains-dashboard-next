> **Development/test release** of the settings UI based on upstream Dwains Dashboard Next v1.15.1.

- Restore upstream v1.15.1 loading and overview calculations, including the original device-type summary construction and the original detail-page summary calls.
- Retain the original area, device and entity registry WebSocket fetching and the atomic settings overview display.
- Keep the settings-only visual refinements, support amber, favorite sorting, and native Home Assistant controls.

No measured speedup is claimed. This version reverses the unproven performance changes, not the settings design.
