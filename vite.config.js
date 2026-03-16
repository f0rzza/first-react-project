import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
// Warning: when we override root in Vite, all urls become relatives to 'src'. So there are many side effects : assets, API calls, .env file, etc.

const outDir = resolve(__dirname, 'dist');

// https://vite.dev/config/
export default defineConfig({
  root,
  envDir: __dirname, // To keep .env file in project folder. (not in /src)
  plugins: [react()],
  build: {
    outDir, // Specify that the output folder for the compilation is 'dist'.
    emptyOutDir: true, // Empty 'dist' folder at each compilation.
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        posts: resolve(root, 'posts/index.html'),
        post: resolve(root, 'post/index.html'),
        notfound: resolve(root, '404.html'),
      },
    },
  },
});
