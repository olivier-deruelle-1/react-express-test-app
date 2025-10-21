import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './config',
  server: {
    port: 5000,
    watch: {
      usePolling: true, // Enable polling for file changes
    }
  },
})
