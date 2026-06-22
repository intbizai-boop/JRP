import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssMinify: true,
    sourcemap: false,
    // Never inline assets — keeps video/image URLs as real file paths
    assetsInlineLimit: 0,
    // Raise warning threshold (videos are large by nature)
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Split vendor libraries into separate cached chunks
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
        // Clean asset naming for Cloudflare cache
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
})
