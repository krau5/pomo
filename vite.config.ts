import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  resolve: {
    alias: {
      app: path.resolve('src/app'),
      components: path.resolve('src/components'),
      store: path.resolve('src/store'),
      types: path.resolve('src/types'),
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
}));
