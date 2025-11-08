import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://paulsysadmin.fr',
  base: '/',
  integrations: [
    tailwind({
      config: { applyBaseStyles: false }
    })
  ],
  build: {
    assets: 'assets'
  }
});
