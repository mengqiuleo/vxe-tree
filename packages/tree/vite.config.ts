import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
  //       // 给导入的路径最后加上 ; 
  //       additionalData: '@import "@/assets/style/mixin.scss";'
  //     }
  //   }
  // }
})
