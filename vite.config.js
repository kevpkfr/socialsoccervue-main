export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  server: {
    host: true,  // Permite que otros dispositivos accedan
    port: 5173,  // Cambia el puerto si es necesario
    strictPort: true, // Evita que cambie el puerto automáticamente
  },
});
