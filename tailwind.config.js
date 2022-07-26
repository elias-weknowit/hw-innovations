/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "background-white-color": "#F7F7F7",
      "primary-color": "#8467AA",
      "secondary-color": "#EB363D",
      "light-text": "#6F6F6F",
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      mulish: "font-family: 'Mulish', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
