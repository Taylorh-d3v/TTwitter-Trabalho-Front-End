import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // A entrada principal sempre deve ser o index na raiz
        main: resolve(__dirname, 'index.html'),
        // Suas páginas dentro de src/pages/
        // Substitua 'nome_da_pagina' pelo nome real dos seus arquivos .html
        pagina1: resolve(__dirname, 'src/pages/home.html'),
        pagina2: resolve(__dirname, 'src/pages/login.html'),
      },
    },
  },
});