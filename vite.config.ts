import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages: project site URL is https://<user>.github.io/<repo>/
  base: command === 'build' ? '/eng/' : '/',
}))
