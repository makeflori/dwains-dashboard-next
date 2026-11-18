# Fork migration onto Dwains Dashboard Next v1.15.1

This document describes the customized development branch only. The fork's
`main` branch is kept identical to upstream
`dwainscheeren/dwains-dashboard-next` release `v1.15.1`.

## Provenance and recovery

- Official baseline: `92624996ede2c619608be13120b9f32186e76222` (upstream v1.15.1).
- Customized source: `archive/dev-before-v1.12.0-reset` at
  `aa3a0bc425db52a82314f334edba6ee87bb781c4` (v1.11.119).
- The old `dev` pointer was archived at `backup/dev-before-v1.15.1-2026-11-18`.
- The original `main` pointer was archived at `backup/main-before-v1.15.1-2026-11-18`.

## What was carried forward

The archived custom layouts, settings editor, devices view, staged wall-tablet
preferences, historical UI primitives and their supporting utilities were
retained. Specifically:

- `src/components/dwains-layout-card.ts`
- `src/components/dwains-dashboard-strategy-editor.ts`
- `src/components/dwains-devices-card.ts`
- `src/components/dwains-wall-tablet-settings.ts`
- The archived room CSS in `src/components/styles/legacy-room-area-styles.ts`.

The older concrete area group API is bridged via
`src/utils/legacy-area-groups.ts`, leaving the current upstream
`src/utils/area-entities.ts` API available to newer components.
On overlapping helpers, locales and components, the official v1.15.1
implementations have been preferred where required for compatibility.
Old translation labels were added back for all ten languages without deleting
the upstream vocabulary.

The Blueprint placeholder engine also includes auxiliary `*_entity` sensors
in explicit `triggers_update` dependencies from an entity list; this ensures
value changes from an accompanying price sensor can refresh an affected card.

Four published Blueprint YAML examples are stored as test fixtures under
`tests/fixtures/blueprints` so the full test suite is self-contained.

## Checks and limitations

The migration was verified on a GitHub Actions Linux runner with:

- `npm ci`
- `npm run type-check` (application and test code)
- `npm run i18n:check` (ten locale dictionaries)
- `npm test` (683 tests)
- `npm run build` (bundled distribution)

**Passing automated checks does not prove visual and behavioral parity in
Home Assistant.** The archived primary components are substantially different
from their current upstream counterparts. UI improvements introduced after
v1.11.119 inside those components may require further selective backporting.
Check room navigation, configuration editing, grouped devices, popups, wall
tablet settings, Blueprint pages and mobile layouts on an actual Home Assistant
installation before treating this as a production-ready release.

Do not merge this customized branch into `main`; `main` remains the pure
upstream synchronization branch.
