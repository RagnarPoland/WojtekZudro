// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeWrapTables } from './src/plugins/rehype-wrap-tables.mjs';

export default defineConfig({
  site: 'https://ragnarpoland.github.io',
  base: process.env.GITHUB_PAGES === 'true' ? '/WojtekZudro' : '/',
  markdown: {
    rehypePlugins: [rehypeWrapTables],
  },
});
