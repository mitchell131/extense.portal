const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  purge: ['./src/**/*.{html,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal:colors.teal,
        white:colors.white,
        'orange': '#E3A60D',
        'grey': '#7E91A1'
      },
      minWidth: {
        '400': '400px',
        '600': '600px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
