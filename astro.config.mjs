import { defineConfig } from 'astro/config';

// Fully static output — `npm run build` produces plain files in dist/.
export default defineConfig({
  output: 'static',
});
