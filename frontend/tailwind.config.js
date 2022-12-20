/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background-login': "url('../public/images/background.jpg')",
      }
    },
  },
  plugins: [],
}