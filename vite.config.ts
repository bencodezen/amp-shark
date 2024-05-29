import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // global imports to register
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
        { '@unhead/vue': ['useHead'] }
      ],
      dirs: ['@src/composables']
    }),
    Components({
      dirs: ['src/components', 'src/pages']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
