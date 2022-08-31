import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'custom-css-name',
      enforce: 'post',
      generateBundle(outputOptions, bundle) {
        bundle['style.css'].fileName = 'bundle.css'
        bundle['bundle.css'] = bundle['style.css']
        delete bundle['style.css']
      },
    },
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/main.js',
      formats: ['iife'],
      name: 'app',
      fileName: () => 'bundle.js',
    },
  },
})
