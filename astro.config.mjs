// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const localMediaLibrary = () => ({
  name: 'local-media-library',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      if (command === 'dev') {
        injectRoute({
          pattern: '/media-library',
          entrypoint: './src/dev-pages/media-library.astro',
        });
      }
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: 'https://williamchanfanpage.com',
  integrations: [
    localMediaLibrary(),
    sitemap({
      filter: (page) => new URL(page).pathname !== '/media-library/',
    }),
  ],
});
