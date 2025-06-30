import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React and React DOM
          'react-vendor': ['react', 'react-dom'],
          // Separate Web3 libraries
          'web3-vendor': ['wagmi', 'viem', '@wagmi/core', '@wagmi/connectors'],
          // Separate chart library
          'charts-vendor': ['recharts'],
          // Separate routing
          'router-vendor': ['react-router-dom']
        }
      }
    }
  }
}) 