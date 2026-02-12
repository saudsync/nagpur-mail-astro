import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nagpurmail.in',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      // This part fixes the "Bad UI" by telling Tailwind where your code is
      configFile: null, // We are defining config here instead of a separate file
      applyBaseStyles: true,
      nesting: true,
      content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    })
  ],
  output: 'static'
});
