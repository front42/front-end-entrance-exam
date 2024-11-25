import { defineConfig } from 'vite';
import browserslistToEsbuild from 'browserslist-to-esbuild';

export default defineConfig({
  base: '/front-end-entrance-exam/',
  build: {
    target: browserslistToEsbuild(),
  },
});
