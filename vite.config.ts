import preactRefresh from '@prefresh/vite';
import { defineConfig, loadEnv } from 'vite';

const path = require('path');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
    },
    resolve: {
      alias: {
        app: path.resolve('src/app'),
        assets: path.resolve('src/assets'),
        components: path.resolve('src/components'),
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
      preactRefresh(),
    ],
  };
});
