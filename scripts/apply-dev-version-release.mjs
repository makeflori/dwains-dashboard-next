import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const version = '1.8.1-dev.1';

execFileSync('npm', ['version', version, '--no-git-tag-version'], { stdio: 'inherit' });

const readmePath = 'README.md';
let readme = fs.readFileSync(readmePath, 'utf8');
if (!readme.includes('Current release: `1.7.1`')) {
  throw new Error('Expected README status line not found');
}
readme = readme.replace('Current release: `1.7.1`', `Development version: \`${version}\``);
fs.writeFileSync(readmePath, readme);

console.log(`Prepared development version ${version}`);
