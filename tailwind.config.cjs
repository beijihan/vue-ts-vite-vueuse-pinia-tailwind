const colors = require('tailwindcss/colors')

// const selectorParser = require('postcss-selector-parser')
module.exports = {
  // purge: [],
  important: 'html',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
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
  variants: {
    extend: {
      textOpacity: ['dark'],
      backgroundColor: ['dark'],
    }
  },
  plugins: [
    // require('tailwindcss-dark-mode')()
  ],
}