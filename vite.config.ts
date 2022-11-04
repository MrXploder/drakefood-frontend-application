import React from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === 'production'
      ? '/drakefood-frontend-application/'
      : '/',
  plugins: [React()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: './docs'
  }
})
