import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    server: {
      port: 3000,
      proxy: {
        '/api/socket': 'ws://'+process.env.VITE_APP_SERVER_URL,
        '/api': 'http://'+process.env.VITE_APP_SERVER_URL,
      },
      host: true,
      watch: {
        usePolling: true
      }
    },
    build: {
      outDir: 'build',
    },
    plugins: [svgr(), react(), VitePWA()],
  });
};
