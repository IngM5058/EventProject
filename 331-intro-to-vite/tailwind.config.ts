import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'sp': '0 3px 12px 0 rgba(0,0,0,0.2)',
      },
      fontFamily: {
        sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      //this is anomation class
      animation: {
        fade: 'yellowFade 3s easy-in-out;',
      },
      keyframes: {
        yellowFade: {
          '0%': { backgroundColor: 'yellow'},
          '100%': { backgroundColor: 'transparent'},
        },
      },
    },
  },
  plugins: [],
} satisfies Config

