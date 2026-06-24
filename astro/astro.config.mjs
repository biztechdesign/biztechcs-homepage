// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://biztechdesign.github.io',
  base: '/biztechcs-homepage',
  vite: {
    plugins: [tailwindcss()]
  }
});
