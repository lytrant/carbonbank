// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: ['axios', 'react-router-dom'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Gắn biến SCSS toàn cục nếu cần
        additionalData: `@use "@/styles/variables.scss";`
      }
    }
  }
});
