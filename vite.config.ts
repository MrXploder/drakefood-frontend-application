import React from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
console.log(process.env.NODE_ENV)
// https://vitejs.dev/config/
export default defineConfig({
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
