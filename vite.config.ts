import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  base: 'https://ziomeka.github.io/TREAT/',
  plugins: [UnoCSS()],
});