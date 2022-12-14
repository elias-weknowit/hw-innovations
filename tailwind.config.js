/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "background-white-color": "#F7F7F7",
      "primary-color": "#8467AA",
      "secondary-color": "#EB363D",
      "light-text": "#6F6F6F",
      white: "#fff",
      black: "#000",
      "footer-pink": "#4F3B69",
      "profile-available": "#EBE6F1",
      "profile-sections": "#FBFBFB",
      error: "#F04848",
      success: "#23AC00",
      searchBar: "#F3F3F4",
      filterWork: "#CFD1D4",
      filterWorkHover: "#D6CCE3",
    },
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "homeScreen-landingPage": "url('../public/landingPage.png')",
      },
    },
  },
  plugins: [],
};
