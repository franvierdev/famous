/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Albert Sans", "sans-serif"],
    },
    animatedSettings: {
      classes: ["faster", "fadeIn", "fadeInUp", "fadeInRight", "fadeInLeft"]
    },
    extend: {}
  },
  plugins: [require("daisyui"), require('tailwindcss-animatecss')],
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "base-100": "#121420",
          "base-content": "#fff",
          primary: "#7D40FF",
          secondary: "#C017FB",
          "--btn-text-case": "none",
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  }
};