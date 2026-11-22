import type { ImageMetadata } from 'astro';
import { galleries, type GallerySection } from '../data/galleries';
import captions from '../data/captions.json';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/shots/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const captionMap = captions as Record<string, string>;

export interface Shot {
  key: string; // e.g. "diwali/seva/seva-01.jpg" (also the captions.json key)
  image: ImageMetadata;
  caption: string;
}

export interface LoadedSection extends GallerySection {
  shots: Shot[];
}

/** Sections of a gallery, each with its photos sorted by filename. */
export function loadGallery(slug: string): LoadedSection[] {
  const gallery = galleries[slug];
  if (!gallery) return [];
  return gallery.sections
    .map((section) => {
      const prefix = `/src/assets/shots/${slug}/${section.slug}/`;
      const shots = Object.entries(files)
        .filter(([p]) => p.startsWith(prefix))
        .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
        .map(([p, mod]) => {
          const key = p.replace('/src/assets/shots/', '');
          const fallback = section.title;
          return { key, image: mod.default, caption: captionMap[key] ?? fallback };
        });
      return { ...section, shots };
    })
    .filter((s) => s.shots.length > 0);
}
