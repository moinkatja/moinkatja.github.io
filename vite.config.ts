import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Set VITE_BASE_PATH=/your-repo-name/ when deploying to GitHub Pages (project site).
// Use VITE_BASE_PATH=/ for username.github.io repos.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH ?? '/',
})
