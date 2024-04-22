/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        dark_bg: "#212e37",
        light_dark_bg: "#2b3743",
        light_bg: "#e9ecef",
        dark_light_bg: "#dee2e6",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("search-cancel", "&::-webkit-search-cancel-button");
    }),
  ],
};
