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
    maxWidth: {
      'min': '8rem',
      'min-l': '14rem',
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '54rem',
      '5xl': '60rem',
      '6xl': '64rem',
      '7xl': '72rem',
      'full': '100%',
    },
    minWidth: {
      'h-1': '1.25rem',
      'lg': '20rem',
    },
    minWidth: {
      'h-1': '1.25rem',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '101': '1.01',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2',
    }
  },
  variants: {
    display: ["group-hover", "responsive"],
    extend: {
      maxHeight: ["group-hover"],
      stroke: ["hover"],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      cursor: ['disabled'],
      scale: ['group-hover'],
      margin: ['group-hover'],
    }
  },
  plugins: [],
}
