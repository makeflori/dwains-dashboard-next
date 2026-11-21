> **Development/test version** based on official Dwains Dashboard Next v1.15.1.

Settings UI refinements following HACS test feedback:

- Remove the duplicate section headings inside settings pages; the existing settings toolbar remains the page heading.
- Present Header & Status switches as one compact settings list rather than individual nested cards.
- Keep the shared switch-row component with native Home Assistant switches, labels and descriptions.
- Correct sortable row sizing (`border-box`) and keep drag handles, icons and actions within their cards.
- Preserve existing sorting, hiding, data persistence, dialog integration and update behavior.

This fork test version is separate from the future upstream settings-only pull request.
