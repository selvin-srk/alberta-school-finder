import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this site from /alberta-school-finder/, not the
  // domain root, so every asset link needs that prefix baked in at build
  // time - otherwise CSS/JS/images 404 once deployed.
  base: '/alberta-school-finder/',
})
