import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: '/', // Remplace <nom-du-repo> par le nom exact de ton dépôt GitHub
  plugins: [vue()],  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Configure l'alias pour le dossier src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/sass/base.scss";`, // Chargement global des variables ou mixins Sass
      },
    },
  },
  build: {
    outDir: 'dist', // Dossier où les fichiers générés seront placés
  },
});
