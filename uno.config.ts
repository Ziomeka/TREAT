import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
})