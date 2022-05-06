import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  resolve:{
    alias:{
      '@':path.resolve(__dirname, 'src'),
      '~':path.resolve(__dirname, 'node_modules'),
    },
  },
  plugins: [
    Vue(),
    // Pages(),
    Components(
      {
        resolvers: IconsResolver(),
        prefix: false,
        enabledCollections: ['heroicons-outline']
      }
    ),
    Icons(),
  ],
})
