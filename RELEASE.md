# Release Policy

Dwains Dashboard Next follows semantic versioning.

## Version Numbers

- Patch release, for example `1.2.1`: bug fixes, small styling fixes, compatibility fixes, regression fixes and documentation-only updates.
- Minor release, for example `1.3.0`: new features, new settings, new dashboard sections, new device views or other backwards-compatible improvements.
- Major release, for example `2.0.0`: breaking changes, configuration changes that need migration, changed install behavior or removed public behavior.
- Pre-release, for example `1.3.0-beta.1`: public testing before a stable release.

## Rules

- Do not overwrite or recreate a published tag or release.
- Every public release uses a `vX.Y.Z` Git tag.
- Keep `package.json`, `package-lock.json` and the built file in `dist/` in sync.
- Keep release notes on the GitHub release page, not in the main README.
- HACS users receive published GitHub releases. Keep the upstream v1.11.0 distribution layout: `dist/dwains-dashboard-next.js` plus `dist/chunks/`.
- For this fork, every dev change intended for HACS testing is published as a new release.
- Preserve the upstream v1.11.0 code-splitting/lazy-loading architecture exactly: generated chunks live in `dist/chunks/` and `dwains-dashboard-next.js` imports them from `./chunks/`.
- Do not attach release assets. With no matching release assets, HACS installs the repository content from `dist/`, including its subdirectories.
- The HACS manifest must continue to point to `dwains-dashboard-next.js`.
- Use a minor release when user-facing features are added, even if bug fixes are included in the same release.
- Use a patch release only when there are no new user-facing features.

## Release Checklist

1. Decide the version number using the rules above.
2. Update `package.json` and `package-lock.json`.
3. Update `README.md` with the current release when needed.
4. Run `npm run type-check`.
5. Run `npm run build`.
6. Confirm `dist/dwains-dashboard-next.js` changed when source changed and that all generated chunk files are present under `dist/chunks/`.
7. Commit with `Release X.Y.Z`.
8. Create tag `vX.Y.Z`.
9. Push the commit and tag.
10. Create the GitHub release with English release notes and no attached assets.
11. Verify the built entry file and all generated chunks are present in `dist/chunks/` before testing through HACS.

- The HACS distribution layout must remain identical to upstream v1.11.0 unless an upstream release changes it.

- Always clean the complete `dist/` directory before release builds so obsolete top-level chunks from previous packaging experiments cannot survive into a v1.11.0-style build.

- Release builds must remove obsolete files from previous packaging layouts before Rollup runs.

- Keep the v1.11.0 bootstrap strategy imports static in `src/index.ts`; do not move dashboard/view strategy loading back to dynamic imports without an explicit compatibility review.

- The generated entry must retain the v1.11.0-style static bootstrap chunk (`./chunks/index-*.js`) rather than directly dynamically importing all runtime strategy/UI chunks from the entry file.

- Keep `src/index.ts` as the thin bootstrap loader and keep runtime bootstrap logic in `src/bootstrap.ts` so the built entry preserves the v1.11.0 single static bootstrap-chunk shape.
- Hotfix: scope legacy room tile styles to entity/type sections so the v1.11 header layout remains intact.
