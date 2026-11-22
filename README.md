# Event Shot Lists

A small, static reference site for event media volunteers:

- **Events**: which events need coverage, how many people, and example shots
- **Murti**: reference shots of each murti
- **Photo Settings** and **Video Settings**: plain-language starting settings for Sony, Canon, and Nikon
- **Quick Reference**: one printable page per camera brand

Built with [Astro](https://astro.build) and Tailwind CSS. No backend, no login, no database. All content lives in a few data files you can edit.

---

## Preview it on your computer

You need [Node.js](https://nodejs.org) 22.23 or newer.

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:4321/EventShotList/).

To check the final build:

```bash
npm run build
npm run preview
```

---

## Where things live

| What you want to change | File |
|---|---|
| Events, seasons, coverage, staffing | `src/data/events.ts` |
| Gallery sections and their descriptions | `src/data/galleries.ts` |
| Photo captions | `src/data/captions.json` |
| Photo settings text | `src/data/photo-settings.ts` |
| Video settings text | `src/data/video-settings.ts` |
| Camera brands and manual links | `src/data/brands.ts` |
| Colors and fonts | `src/styles/global.css` (see `design-system/event-shot-lists/MASTER.md`) |

You don't need to touch anything in `src/components` or `src/pages` for content changes.

---

## Add an event

Open `src/data/events.ts` and copy an existing block inside `events: [...]`. For example:

```ts
{
  slug: 'guru-purnima',             // used in the web address: /events/guru-purnima/
  name: 'Guru Purnima',
  season: 'Summer',                 // Spring | Summer | Fall | Winter
  coverage: 'Photo Only',           // 'Photo Only' | 'Photo & Video'
  photo: [
    { count: 1, side: 'eSide', roles: ['Primary'] },
    { count: 1, side: 'iSide', roles: [] },          // no role listed → leave []
  ],
  video: [],                        // empty for photo-only events
  gallery: 'samaiyo',               // 'samaiyo' | 'diwali' | 'kdc' | null (no examples yet)
},
```

- `roles` can be `['Primary']`, `['Secondary']`, `['Primary', 'Secondary']`, or `[]`.
- For a Mahila event, add `parent: '<slug of the main event>'` so its page links back.
- The summary counts (events a year, photo only, photo & video) update automatically.

---

## Add photos

Photos are copied into `src/assets/shots/<gallery>/<section>/` by a script. The script:

- renames each file after its section (e.g. `seva-03.jpg`),
- resizes it to 2000 px on the long side,
- **removes all metadata, including GPS location**, and
- adds a placeholder caption to `src/data/captions.json` (existing captions are kept).

1. Put the new photos in the right folder of your local `Event Shot Lists` folder.
2. If it's a **new folder**, add a line to the `SECTIONS` list at the top of `scripts/import-photos.mjs`, then add a matching section to `src/data/galleries.ts` (slug, title, shot type, one sentence on what to capture).
3. Run:

   ```bash
   npm run import-photos -- "/path/to/Event Shot Lists"
   ```

4. Edit the new captions in `src/data/captions.json`. Captions are also used as alt text for screen readers, so describe what's in the photo.

> Re-running the script re-numbers files in each section by filename order. If you remove a photo from a source folder, delete its old file in `src/assets/shots/` and its line in `captions.json`.

**Why not just drag photos into the folder?** You can: any `.jpg`, `.png`, or `.webp` placed in `src/assets/shots/<gallery>/<section>/` shows up automatically. But the script is the only step that strips GPS and shrinks the file, so prefer it.

---

## Edit the settings guides

Open `src/data/photo-settings.ts` or `src/data/video-settings.ts`.

- Each **setting card** has `setting`, `start` (starting value), `why`, and `fix` (what to do if it looks wrong).
- Text that differs by brand is written as `{ sony: '…', canon: '…', nikon: '…' }`. Text that's the same for all brands is a plain string.
- **Scenarios** are the "By situation" presets.
- **menus** is the "Where to find it on your camera" list.

Menu names were checked against the official manuals for the Sony α7 IV, Canon EOS R6 Mark II, and Nikon Z6III (links in `src/data/brands.ts`). If you change them, check the manual for that model.

---

## Deploy to GitHub Pages

A ready-made GitHub Actions workflow is saved at `docs/deploy.yml.example`. Once installed, it builds the site and publishes it whenever `main` changes.

**It's not installed or turned on yet.** To publish:

1. Decide whether the site should be public. GitHub Pages sites are public on free plans, even from a private repo.
2. Merge the feature branch into `main`.
3. Add the workflow. Either:
   - on GitHub, choose **Add file → Create new file**, name it `.github/workflows/deploy.yml`, paste in the contents of `docs/deploy.yml.example`, and commit; or
   - copy the file locally to `.github/workflows/deploy.yml` and push. Your GitHub access token needs the `workflow` permission for this.
4. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. The site will appear at `https://teejpaddle.github.io/EventShotList/`.

Using a custom domain? Change `site` to your domain and `base` to `'/'` in `astro.config.mjs`.

---

## Design

Design tokens come from the UI UX Pro Max skill, generated into `design-system/event-shot-lists/MASTER.md`. Style: Minimalism / Swiss: a neutral palette, one blue accent, Inter, no shadows or gradients, so the photos carry the color.
