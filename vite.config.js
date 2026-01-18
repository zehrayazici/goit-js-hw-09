import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: '/goit-js-hw-09/',
  
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        gallery: './01-gallery.html',
        form: './02-form.html',
      },
    },
  },
  
  define: {
    global: 'globalThis',
  },
});