/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 🔥 THIS IS THE MAIN FIX
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};