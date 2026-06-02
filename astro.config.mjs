import { defineConfig } from 'astro/config';

// Tailwind CSS handled via Vite/PostCSS (see postcss.config.cjs + tailwind.config.mjs)
// @astrojs/tailwind & @astrojs/sitemap are incompatible with Astro 5.18+
// Sitemap served from public/sitemap.xml (static)
export default defineConfig({
  site: 'https://paulsysadmin.fr',
  base: '/',
  build: {
    assets: 'assets'
  }
});
