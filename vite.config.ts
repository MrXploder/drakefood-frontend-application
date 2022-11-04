import React from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
console.log(process.env.NODE_ENV)
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
