/* eslint import/no-extraneous-dependencies: 0 */
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';

export default defineConfig({
  plugins: [solidPlugin(), solidSvg()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    extensions: ['jsx'],
  },
  build: {
    target: 'esnext',
    sourcemap: 'inline',
  },
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
});
