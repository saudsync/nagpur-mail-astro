import { defineConfig } from 'astro:config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourdomain.com', // Replace with your Hostinger URL
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: { theme: 'one-dark-pro' }
  },
  output: 'static'
});
