/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: colors.white,
          text: colors.gray[900],
          textHover: colors.purple[700],
          button: colors.gray[200],
          buttonHover: colors.gray[300],
        },
        dark: {
          background: colors.gray[900],
          text: colors.white,
          textHover: colors.purple[400],
          button: colors.gray[700],
          buttonHover: colors.gray[600],
        },
      },
    },
  },
  plugins: [],
};

