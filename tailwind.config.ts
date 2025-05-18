import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue',
  ],
  safelist: ['backdrop-blur-md', 'bg-white/10', 'ring-1', 'ring-white/20'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
