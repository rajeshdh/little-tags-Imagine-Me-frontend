const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],   
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'sp-white': '#FEFEFE', // sp - prefix for custom colors
      'sp-section-white': '#F9F9F9',
      'sp-heading-blue': '#2CB5BE',
      'sp-btn-primary': '#F85439',
      'sp-btn-primary-dark': '#e04930',
      'sp-btn-default': '#CACACA',
      'sp-btn-default-dark': '#a5a0a0',
      'sp-btn-selected': '#2CB5BE',
      'sp-btn-selected-dark': '#1c7b82',
      'sp-btn-icon': '#F9F9F9',
      'sp-text-highlight': '#929292',
      'sp-text-default': '#51517E'
    },
  },
  },
  variants: {
    display: ["group-hover","responsive"],
    extend: {
      scale: ["hover"]
    }
  },
  plugins: [],
}
