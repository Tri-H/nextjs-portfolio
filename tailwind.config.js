const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
      colors: {
        dark: "#000000",
        primary: "#38bdf8",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".menu-toggle": {
          display: "flex",
          flexDirection: "column",
          gap: "0.43rem",
          padding: "0.5rem 0",

          "&::before, &::after": {
            content: "''",
            display: "block",
            height: "1px",
            width: "1.5rem",
            backgroundColor: "currentColor",
            transitionProperty: "transform",
            transitionDuration: "300ms",
          },
        },
      });
    }),
  ],
};
