import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',   // ✅ ADD THIS LINE
  plugins: [
    tailwindcss(),
  ],
})