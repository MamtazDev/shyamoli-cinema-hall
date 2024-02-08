/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      textColor: {
        primary: "#FF3D48",
        white: "#FFFFFF",
        black: "#000",
        grey: "#A6A6A6",
      },
      backgroundColor: {
        grey: "#525252",
        primary: "#FF3D48",
      },
      borderColor: {
        grey: "#A6A6A6",
        grey_1: "#7B7B7B"
      },
      boxShadow: {
        button: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        input: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
      }
    },
  },
  daisyui: {
    themes: []
  },
  plugins: [require("daisyui")],
}