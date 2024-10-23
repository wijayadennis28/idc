/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",
    "./**/*.php",
    "./*.html",
    "./**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        neutral: {
          100: "#FFFFFF",
          400: "#989B9E",
          500: "#4D4757",
          700: "#3D3F40",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#654696",
          secondary: "#23B9D9",
          neutral: "#4D4757",
          "base-content": "#4D4757",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
