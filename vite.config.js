import preactRefresh from '@prefresh/vite';
import { defineConfig } from 'vite';

const path = require('path');

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: {
      app: path.resolve('src/app'),
      assets: path.resolve('src/assets'),
      components: path.resolve('src/components'),
      types: path.resolve('src/types'),
    },
  },
  plugins: [preactRefresh()]
});
