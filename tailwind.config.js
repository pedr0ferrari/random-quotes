/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        420: "69rem",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["synthwave"],
  },
};
