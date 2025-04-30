import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Wichtig für GitHub Project Pages:
  // Hier den Namen deines Repos eintragen – genau so, wie es in der URL steht:
  base: '/P3X/',

  plugins: [react()],
})
