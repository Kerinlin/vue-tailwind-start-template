// const colors = require("tailwindcss/colors");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1199px" },
      xl: { min: "1200px", max: "1440px" },
      "2xl": { min: "1441px" },
    },
    colors: {
      primary: '#14171C',
      secondary: '#828489',
      bgColor: '#F7F8F9',
      warning: '#FFB500',
      error: '#FF3C00'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
