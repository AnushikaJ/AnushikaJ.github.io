// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://anushikaj.github.io',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
