const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './class="lazy" data-src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
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
      white: colors.white,
      black: colors.black,
    },
    extend: {
      fontFamily: {
        body: ['Lato'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
