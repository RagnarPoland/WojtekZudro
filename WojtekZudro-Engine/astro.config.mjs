// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeWrapTables } from './src/plugins/rehype-wrap-tables.mjs';

export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeWrapTables],
  },
});
