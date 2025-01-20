import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  server: {
    host: '0.0.0.0',  // Permite que Railway acceda al servidor
    port: process.env.PORT || 5173,  // Usa el puerto dinámico de Railway
    strictPort: true, // Evita cambios inesperados de puerto
  },
});
