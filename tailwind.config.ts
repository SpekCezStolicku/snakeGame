/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      '3xl': '2800px'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        easeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        wiggle: 'wiggle .25s ease-in-out',
        easeIn: 'easeIn .5s linear'
      }
    }
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}
