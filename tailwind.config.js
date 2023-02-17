/* eslint global-require: "off" */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // a color for primary actions like a submit button.
        primary: colors.rose['300'],
        'sidebar-bg': colors.rose['100'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
