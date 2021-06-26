module.exports = {
  purge: [
    './class="lazy" data-src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
