import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePreset } from 'vite-preset-tailwind';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePreset(),
  ],
  
})
