import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion', 'lucide-react', 'react', 'react-dom']
  },
  server: {
    middlewareMode: false,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5176
    }
  }
})