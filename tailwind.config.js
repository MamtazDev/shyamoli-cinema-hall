const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF3D48",
        white: "#FFFFFF",
        black: "#000",
        grey: "#A6A6A6",
        clr_09: "#FFAB09",
        clr_bc: "#BCBEBC",
        clr_12: "#3A8712",
        clr_f0: "#E2E8F0",
        clr_4f: "#cecece4f",
        clr_1e: "#D7391E",
        clr_99: "#999999",
        clr_26: "#262626",
      },

      boxShadow: {
        button: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        input: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
});
