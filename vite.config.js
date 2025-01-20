export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  },
});
//hola