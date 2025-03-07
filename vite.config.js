export default {
    build: {
      outDir: 'dist', // Ensure this is set to dist
      publicDir: 'public',
      rollupOptions: {
        input: './src/main.jsx', // Make sure the entry file is set correctly  
      }
    }
  }