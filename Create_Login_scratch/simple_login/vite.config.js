import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   port: 5173, // Port for the development server (vite)
  // },
  // preview: {
  //   port: 3000, // Port for the preview server (vite preview)
  // },
})
