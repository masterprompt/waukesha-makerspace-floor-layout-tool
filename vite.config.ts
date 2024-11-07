import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/waukesha-makerspace-floor-layout-tool',
  plugins: [react()],
})
