import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Home/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});