import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = pkg.version;

if (!/^\d+\.\d+\.\d+-dev\.\d+$/.test(version)) {
  throw new Error(`Expected a dev prerelease version, got ${version}`);
}

execFileSync('npm', ['install', '--package-lock-only', '--ignore-scripts'], { stdio: 'inherit' });

const readmePath = 'README.md';
let readme = fs.readFileSync(readmePath, 'utf8');
readme = readme.replace(/Development version: `[^`]+`/, `Development version: \`${version}\``);
fs.writeFileSync(readmePath, readme);

const workflow = `name: Dev Release

on:
  workflow_run:
    workflows: ["Build"]
    types: [completed]

permissions:
  contents: write

jobs:
  release:
    if: >
      github.event.workflow_run.conclusion == 'success' &&
      github.event.workflow_run.event == 'push' &&
      github.event.workflow_run.head_branch == 'dev'
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - name: Checkout current dev
        uses: actions/checkout@v4
        with:
          ref: dev
          fetch-depth: 0

      - name: Read development version
        id: version
        shell: bash
        run: |
          VERSION=$(node -p "require('./package.json').version")
          if [[ ! "$VERSION" =~ ^[0-9]+\\.[0-9]+\\.[0-9]+-dev\\.[0-9]+$ ]]; then
            echo "skip=true" >> "$GITHUB_OUTPUT"
            echo "Current version $VERSION is not a dev prerelease; skipping."
            exit 0
          fi
          echo "version=$VERSION" >> "$GITHUB_OUTPUT"
          echo "tag=v$VERSION" >> "$GITHUB_OUTPUT"
          echo "skip=false" >> "$GITHUB_OUTPUT"

      - name: Create GitHub prerelease
        if: steps.version.outputs.skip == 'false'
        env:
          GH_TOKEN: \${{ github.token }}
          TAG: \${{ steps.version.outputs.tag }}
          VERSION: \${{ steps.version.outputs.version }}
        shell: bash
        run: |
          if gh release view "$TAG" >/dev/null 2>&1; then
            echo "$TAG already exists; nothing to do."
            exit 0
          fi
          gh release create "$TAG" \\
            --target "$(git rev-parse HEAD)" \\
            --prerelease \\
            --title "$TAG" \\
            --notes "Development build $VERSION."
`;

fs.mkdirSync('.github/workflows', { recursive: true });
fs.writeFileSync('.github/workflows/dev-release.yml', workflow);

console.log(`Synced dev metadata for ${version} and installed dev release workflow.`);
