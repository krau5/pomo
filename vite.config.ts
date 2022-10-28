import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    resolve: {
      alias: {
        app: path.resolve('src/app'),
        components: path.resolve('src/components'),
        constants: path.resolve('src/constants'),
        forms: path.resolve('src/forms'),
        models: path.resolve('src/models'),
        pages: path.resolve('src/pages'),
        types: path.resolve('src/types'),
      },
    },
    define: {
      'import.meta.env.API_KEY': JSON.stringify(env.API_KEY),
      'import.meta.env.AUTH_DOMAIN': JSON.stringify(env.AUTH_DOMAIN),
      'import.meta.env.PROJECT_ID': JSON.stringify(env.PROJECT_ID),
      'import.meta.env.STORAGE_BUCKET': JSON.stringify(env.STORAGE_BUCKET),
      'import.meta.env.MESSAGING_SENDER_ID': JSON.stringify(env.MESSAGING_SENDER_ID),
      'import.meta.env.APP_ID': JSON.stringify(env.APP_ID),
      'import.meta.env.MEASUREMENT_ID': JSON.stringify(env.MEASUREMENT_ID),
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    ],
  };
});
