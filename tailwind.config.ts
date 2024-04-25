/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        '4k': '2500px',
        retina: { raw: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)' }
      },
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
  }
}
