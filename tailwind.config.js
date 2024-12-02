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
        "incognitee-blue": "#11111A",
      },
      colors: {
        "incognitee-green": "#24AD7C",
        "incognitee-blue": "#1845b9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: [
      {
        incognitee: {
          primary: "#24AD7C",
          secondary: "#11111A",
          accent: "#24AD7C",
          neutral: "#1C1C1C", // Hintergrundfarbe
          "base-100": "#11111A", // Setze Schwarz oder die gewünschte Farbe
          info: "#2563eb",
          success: "#16a34a",
          warning: "#facc15",
          error: "#dc2626",
        },
      },
    ],
  },
};
