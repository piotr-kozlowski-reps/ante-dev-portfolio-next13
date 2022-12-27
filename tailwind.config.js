/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background_1_lighter: "#2C2F36",
        background_2_darker: "#26292E",
        main_white: "#DDDFE4",
        main_color: "#FCEB41",
      },
    },
  },
  plugins: [],
};
