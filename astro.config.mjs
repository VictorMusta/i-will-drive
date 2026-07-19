// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Deux cibles de déploiement :
// - défaut : démo GitHub Pages (project page → base path obligatoire)
// - DEPLOY_TARGET=ionos : production sur iwilldrive.fr (webspace IONOS, racine)
const isIonos = process.env.DEPLOY_TARGET === 'ionos';

// https://astro.build/config
export default defineConfig({
  site: isIonos ? 'https://iwilldrive.fr' : 'https://victormusta.github.io',
  base: isIonos ? undefined : '/i-will-drive',
  vite: {
    plugins: [tailwindcss()]
  }
});
