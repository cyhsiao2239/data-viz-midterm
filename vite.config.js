import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 注意：前後都要有斜線，名稱要跟 GitHub 專案名稱一致
  base: '/data-viz-midterm/', 
  plugins: [vue()],
})
