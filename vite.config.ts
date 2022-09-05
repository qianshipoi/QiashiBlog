import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [vue(), VueSetupExtend(), AutoImport({
    dts: 'src/auto-imports.d.ts',
    imports: ['vue'],
    eslintrc: {
      enabled: true
    }
  })],
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "vue-i18n": 'vue-i18n/dist/vue-i18n.cjs.js'
    }
  },
  server: {
    host: '127.0.0.1',
    open: false,
    port: 3000,
    https: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "./src/assets/scss/var.scss";'
      }
    }
  }
})
