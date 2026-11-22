#!/usr/bin/env node
/**
 * Publish the built site (dist/) to the `gh-pages` branch on GitHub.
 *
 *   npm run deploy
 *
 * GitHub Pages must be set to: Settings → Pages → Deploy from a branch →
 * gh-pages / (root). The branch holds only built files; source stays on the
 * main working branch. Each deploy replaces the previous one.
 */
import { execSync } from 'node:child_process';
import { existsSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIST = path.join(ROOT, 'dist');
const run = (cmd, cwd = ROOT) => execSync(cmd, { cwd, stdio: 'inherit' });
const read = (cmd) => execSync(cmd, { cwd: ROOT }).toString().trim();

if (!existsSync(path.join(DIST, 'index.html'))) {
  console.error('dist/ is missing. Run `npm run build` first (npm run deploy does this for you).');
  process.exit(1);
}

const remote = read('git remote get-url origin');
const source = read('git rev-parse --short HEAD');
const branch = read('git rev-parse --abbrev-ref HEAD');

writeFileSync(path.join(DIST, '.nojekyll'), ''); // tell GitHub not to run Jekyll
rmSync(path.join(DIST, '.git'), { recursive: true, force: true });

run('git init -q -b gh-pages', DIST);
run('git add -A', DIST);
run(`git commit -q -m "Deploy ${branch}@${source}"`, DIST);
run(`git -c http.postBuffer=524288000 push -q --force "${remote}" gh-pages`, DIST);
rmSync(path.join(DIST, '.git'), { recursive: true, force: true });

console.log(`\nPublished ${branch}@${source} to gh-pages.`);
