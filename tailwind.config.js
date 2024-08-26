/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "incognitee-gray": "rgba(81, 81, 81, 0.24)",
        "incognitee-black": "#1C1C1C",
      },
      colors: {
        "incognitee-green": "#24AD7C",
        "incognitee-blue": "#11111A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
