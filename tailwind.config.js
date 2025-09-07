/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDarkLight: "#282323",
        customDark: "#121212",
        customDarkDarker: "#080808",

        customRed: "#F32E66",

        customGreen: "#EDB24CFF",
        
        customWhite: "#282323",
        customWhiteDarker: "#282323",
      },
    },
  },
  plugins: [],
};
