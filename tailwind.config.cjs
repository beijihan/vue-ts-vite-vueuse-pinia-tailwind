const colors = require('tailwindcss/colors')
module.exports = {
  // purge: [],
  important: true,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: 'media', // or 'media' or 'class'
   theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#ff8400',
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    }
   },
   variants: {},
   plugins: [],
 }