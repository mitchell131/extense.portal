const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  purge: ['./src/**/*.{html,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal:colors.teal,
        'orange': '#E3A60D'
      },
      minWidth: {
        '400': '400px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
