import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Real_Time_Collaborative_Editor/',  // 👈 add this line
  plugins: [react()]
})
