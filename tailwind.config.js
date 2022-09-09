/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
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
  plugins: [],
};
