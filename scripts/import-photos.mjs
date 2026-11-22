#!/usr/bin/env node
/**
 * Import example photos into the site.
 *
 *   npm run import-photos -- "/path/to/Event Shot Lists"
 *
 * For every folder listed in SECTIONS below, this script:
 *   1. Copies each image into src/assets/shots/<gallery>/<section>/
 *   2. Renames it after its section (e.g. chopda-pujan-03.jpg)
 *   3. Resizes it to at most MAX_EDGE px on the long edge
 *   4. Strips ALL metadata (EXIF, GPS, camera serials, XMP) by re-encoding
 *   5. Adds a placeholder caption to src/data/captions.json for any new file
 *      (existing captions are never overwritten)
 *
 * To add a new folder, add a line to SECTIONS and re-run the script.
 */
import { readdir, mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const MAX_EDGE = 2000;
const QUALITY = 80;
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT_DIR = path.join(ROOT, 'src/assets/shots');
const CAPTIONS = path.join(ROOT, 'src/data/captions.json');

// [source folder (relative to the photo folder), gallery slug, section slug, caption label]
// Use label = null to caption from the filename instead (descriptive names).
const SECTIONS = [
  ['Diwali Shot List/Exterior', 'diwali', 'exterior', 'Exterior'],
  ['Diwali Shot List/Annakut/Darshan', 'diwali', 'darshan', 'Darshan'],
  ['Diwali Shot List/Annakut/Murti', 'diwali', 'annakut-murti', 'Annakut murti'],
  ['Diwali Shot List/Annakut/Annakut', 'diwali', 'annakut', 'Annakut'],
  ['Diwali Shot List/Annakut/Thal', 'diwali', 'annakut-thal', 'Annakut thal'],
  ['Diwali Shot List/Annakut/Arti', 'diwali', 'arti', 'Arti'],
  ['Diwali Shot List/Chopda Pujan', 'diwali', 'chopda-pujan', 'Chopda Pujan'],
  ['Diwali Shot List/Annakut/Exhibition', 'diwali', 'exhibition', 'Exhibition'],
  ['Diwali Shot List/Seva', 'diwali', 'seva', 'Seva'],
  ['Diwali Shot List/COPR', 'diwali', 'copr', 'COPR'],
  ['KDC Shot List/Welcome', 'kdc', 'welcome', 'Welcome'],
  ['KDC Shot List/Deco', 'kdc', 'decoration', 'Decoration'],
  ['KDC Shot List/Murti', 'kdc', 'murti', 'Murti'],
  ['KDC Shot List/Mahapuja', 'kdc', 'mahapuja', 'Mahapuja'],
  ['KDC Shot List/Program', 'kdc', 'program', 'Program'],
  ['KDC Shot List/Activities', 'kdc', 'activities', 'Activities'],
  ['Samaiyo Shot List/Stage Program', 'samaiyo', 'stage-program', 'Stage program'],
  ['Samaiyo Shot List/Audience', 'samaiyo', 'audience', 'Audience'],
  ['Samaiyo Shot List/COPR', 'samaiyo', 'copr', 'COPR'],
  ['Murti Shot List', 'murti', 'murti', null],
];

const IMAGE_EXT = /\.(jpe?g|png|webp|tiff?|heic)$/i;
const slugify = (s) =>
  s.toLowerCase().replace(/^\d+\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const titleFromFilename = (f) =>
  path.parse(f).name.replace(/^\d+\s*/, '').replace(/[-_]+(?=\s)|_/g, ' ').trim();

async function main() {
  const src = process.argv[2];
  if (!src || !existsSync(src)) {
    console.error('Usage: npm run import-photos -- "/path/to/Event Shot Lists"');
    process.exit(1);
  }
  const captions = existsSync(CAPTIONS) ? JSON.parse(await readFile(CAPTIONS, 'utf8')) : {};
  let total = 0;

  for (const [folder, gallery, section, label] of SECTIONS) {
    const dir = path.join(src, folder);
    if (!existsSync(dir)) {
      console.warn(`skip (missing): ${folder}`);
      continue;
    }
    const files = (await readdir(dir))
      .filter((f) => IMAGE_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const outDir = path.join(OUT_DIR, gallery, section);
    await mkdir(outDir, { recursive: true });

    for (const [i, file] of files.entries()) {
      const n = String(i + 1).padStart(2, '0');
      const name = label ? `${section}-${n}.jpg` : `${slugify(path.parse(file).name)}.jpg`;
      const outPath = path.join(outDir, name);

      await sharp(path.join(dir, file))
        .rotate() // apply camera orientation before metadata is dropped
        .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
        .flatten({ background: '#ffffff' })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(outPath); // sharp writes no EXIF/GPS/XMP unless asked to

      const key = `${gallery}/${section}/${name}`;
      if (!(key in captions)) {
        captions[key] = label ? `${label} – example ${i + 1}` : titleFromFilename(file);
      }
      const kb = (await stat(outPath)).size / 1024;
      total += kb;
      console.log(`${key}  ${kb.toFixed(0)} KB  ← ${folder}/${file}`);
    }
  }

  const sorted = Object.fromEntries(Object.entries(captions).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true })));
  await mkdir(path.dirname(CAPTIONS), { recursive: true });
  await writeFile(CAPTIONS, JSON.stringify(sorted, null, 2) + '\n');
  console.log(`\nDone. ${(total / 1024).toFixed(1)} MB written to src/assets/shots`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
