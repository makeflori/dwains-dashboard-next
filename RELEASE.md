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
- HACS users receive published GitHub releases. Every release must attach `dist/dwains-dashboard-next.js` and every generated split chunk as individual `.js` release assets so HACS installs the complete runtime set.
- For this fork, every dev change intended for HACS testing is published as a new release.
- Preserve the v1.11.0 code-splitting/lazy-loading architecture. For HACS compatibility, generated chunks are emitted directly into `dist/` beside `dwains-dashboard-next.js`, because HACS dashboard-plugin downloads do not recurse into `dist/chunks/`.
- Chunked HACS builds must keep all runtime-imported files at the top level of `dist/`.
- Do not attach a ZIP asset: HACS treats release assets as downloadable plugin files. Attach the main JS file and all chunk JS files individually.
- The HACS manifest must continue to point to `dwains-dashboard-next.js`.
- Use a minor release when user-facing features are added, even if bug fixes are included in the same release.
- Use a patch release only when there are no new user-facing features.

## Release Checklist

1. Decide the version number using the rules above.
2. Update `package.json` and `package-lock.json`.
3. Update `README.md` with the current release when needed.
4. Run `npm run type-check`.
5. Run `npm run build`.
6. Confirm `dist/dwains-dashboard-next.js` changed when source changed and that all generated chunk files are present directly in `dist/`.
7. Commit with `Release X.Y.Z`.
8. Create tag `vX.Y.Z`.
9. Push the commit and tag.
10. Create the GitHub release with English release notes and attach every `dist/*.js` file individually.
11. Verify the built entry file and all generated chunks are present in `dist/` before testing through HACS.
