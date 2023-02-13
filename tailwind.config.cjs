/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Calfine_Demo: ["Calfine Demo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
