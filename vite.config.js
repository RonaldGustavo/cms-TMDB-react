import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import tsConfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig(({ command, mode }) => {
  return {
    // base: '/',
    envPrefix: 'REACT_APP_',
    devtool: 'cheap-module-source-map',
    plugins: [
      react(),
      envCompatible(),
      tsConfigPaths(),
      viteCommonjs(),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
    server: {
      port: 3000,
      strictPort: false,
    },
    preview: {
      port: 3000,
      strictPort: false,
    },
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  };
});
