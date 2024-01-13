/* eslint import/no-extraneous-dependencies: 0 */
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';

export default defineConfig({
  plugins: [
    solidPlugin(),
    solidSvg(),
    nodePolyfills({
      include: ['buffer', 'stream'],
    }),
  ],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    extensions: ['jsx'],
  },
  build: {
    target: 'esnext',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
});
