import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Home/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});