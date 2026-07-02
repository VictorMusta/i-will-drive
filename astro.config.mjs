// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Démo GitHub Pages (project page → base path obligatoire).
  // Pour la mise en ligne finale sur iwilldrive.fr via Netlify :
  // site: 'https://iwilldrive.fr' et supprimer `base`.
  site: 'https://victormusta.github.io',
  base: '/i-will-drive',
  vite: {
    plugins: [tailwindcss()]
  }
});