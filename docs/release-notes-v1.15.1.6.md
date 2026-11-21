> **Development/test release**, based on the official Dwains Dashboard Next v1.15.1.

- Favorite entities in Dashboard settings can now be reordered via the existing live drag-preview approach or Up/Down actions. No new drag library was added; the same `favorites` configuration and save queue are used.
- Apply current Home Assistant `ha-switch` color tokens to settings switches, keeping native controls and preserving device/domain colors.
- Avoid calculating the settings overview twice when a detail page has a favorites return destination.
- Keep the atomic loading behavior: the overview and its status pills appear together after registry data is ready.

This is a fork-only HACS test release. The future upstream PR will contain only the settings-related changes and exclude fork-specific release workflows and independent entity naming.
