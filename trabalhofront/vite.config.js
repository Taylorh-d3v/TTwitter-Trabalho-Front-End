import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pagina1: resolve(__dirname, 'src/pages/home.html'),
        pagina2: resolve(__dirname, 'src/pages/login.html'),
      },
    },
  },
});