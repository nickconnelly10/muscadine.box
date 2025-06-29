import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'wagmi-core': ['wagmi', '@wagmi/core'],
          'wagmi-connectors': ['@wagmi/connectors'],
          'viem': ['viem'],
          'react-query': ['@tanstack/react-query'],
          'recharts': ['recharts'],
          'react-vendor': ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3002,
    host: true
  }
}) 