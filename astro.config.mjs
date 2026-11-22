// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: https://teejpaddle.github.io/EventShotList/
// If you move to a custom domain, set `site` to it and `base` to '/'.
export default defineConfig({
  site: 'https://teejpaddle.github.io',
  base: '/EventShotList',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
