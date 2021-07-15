const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './class="lazy" data-src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './src/**/*.tsx',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primarymain: {
        DEFAULT: '#3E615B',
        dark: '#0E1520',
      },
      primaryvariant: {
        DEFAULT: '#79AEA5',
        dark: '#1B2534',
      },
      contrast: {
        DEFAULT: '#53BFD2',
        dark: 'rgba(8, 17, 39, 0.52)',
      },
      secondarymain: {
        DEFAULT: '#EBEBEB',
        dark: '#404040',
      },
      secondaryvariant: {
        DEFAULT: '#F8F2F2',
        dark: '#5C2E787D',
      },
      darktext: {
        DEFAULT: '#408B9B',
      },
      error: {
        DEFAULT: '#D65C5C',
      },
      white: colors.white,
      black: colors.black,
      lightBulb: '#FEC100',

      modal: {
        DEFAULT: 'rgba(0, 0, 0, 0.35)',
        dark: 'rgba(129, 129, 129, 0.39)',
      },
    },
    extend: {
      transitionDelay: {
        390: '390ms',
      },
      boxShadow: {
        main: '-1px 4px 10px rgba(62, 97, 91, 0.58)',
        dark: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        lifghtBlue: '-6px 10px 4px #53BFD2',
      },
      screens: {
        xs: '520px',
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
      brightness: ['dark'],
      display: ['dark'],
      backgroundBlendMode: ['hover'],
      borderWidth: ['focus'],
    },
  },
  plugins: [],
};
