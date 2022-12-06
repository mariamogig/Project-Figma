/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px', 
      lg: '1440px'
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'purple': '#701a75',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'brown': '#846358',
      },
    },
  },
  plugins: [],
}
