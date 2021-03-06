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
        'yellow': '#EECC76',
        'orange': '#E3A60D',
        'grey': '#7E91A1',
        'black': '#343A40'
      },
      minWidth: {
        '400': '400px',
        '650': '650px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
