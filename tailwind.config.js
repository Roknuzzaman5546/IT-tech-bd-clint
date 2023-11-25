/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik Moonrocks', sans-serif",
        rancho: "'Rancho', cursive"
      }
    },
  },
  plugins: [require("daisyui")],
}

