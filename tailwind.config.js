/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#F62682",
        secondary: "#6f5cf1",
        textstart: "#B4690E",
        star: "#E59819",
        btnsell: "#ECEB98",
        darkudemy: "#1C1D1F",
      },
    },
  },
  plugins: [],
};
