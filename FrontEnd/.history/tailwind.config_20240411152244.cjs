/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        pink: '#fc428fff',
        pink_1: '#f5ebedff',
        pink_2: '#ff8080',
        pink_3: '#f5a4a4',
        yellow: '#fff0f0'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif']
      },
      keyframes: {
        customAnimation: {
          '0%': { transform: 'scale(0.75) rotate(-6deg)' },
          '25%': { transform: 'scale(1.05) rotate(-6deg)' },
          '50%': { transform: 'scale(1.05) rotate(6deg)' },
          '75%': { transform: 'scale(1.05) rotate(-6deg)' },
          '100%': { transform: 'scale(1.05s) rotate(6deg)' }
        }
      },
      animation: {
        customAnimation: 'customAnimation 1.25s linear infinite'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.8xl'),
          // marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
