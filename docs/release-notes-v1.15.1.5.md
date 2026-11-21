> **Development/test version** based on upstream Dwains Dashboard Next v1.15.1.

- Show the settings overview and its summary pills together again, waiting for the registry data as in upstream v1.15.1.
- Unify sorting controls to **up / down / visibility** and use the existing Home Assistant icon-button appearance for Home section visibility.
- Match settings detail-page accents to their overview category (general, content, behavior), without overriding device-type and entity-domain colors.
- Remove legacy extra indentation from Header & Status sections, including weather and alarm entity pickers.
- Keep existing dialogs, sorting, save flow, entity visibility and data fetching.

This is a fork-only HACS test release. The eventual upstream PR will be limited to settings UI and exclude fork release workflows and independent entity naming changes.
