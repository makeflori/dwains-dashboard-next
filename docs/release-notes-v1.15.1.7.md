> **Development/test version**, based on upstream Dwains Dashboard Next v1.15.1.

- Use the existing support-card amber (#f59e0b) for the "About & Support" settings navigation tile and its settings page actions.
- Avoid building and sorting the full Devices visibility tree merely to obtain the count of device types for the settings overview's summary pill. Count distinct type keys from the existing visibility entries instead.
- Keep the settings overview and all summary pills appearing together once the required registries have loaded.
- Keep all existing registry WebSocket requests, sort and save logic, dialogs, and device group colors unchanged.

This is an intermediate fork HACS test build, not the eventual upstream settings-only PR. A measured loading-time improvement has not yet been established.
