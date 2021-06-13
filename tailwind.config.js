const colors = require("tailwindcss/colors");

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "380px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        rose: colors.rose,
        cyan: colors.cyan,
      },
    },
  },
};
