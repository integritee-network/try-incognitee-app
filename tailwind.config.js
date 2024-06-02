/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundColor: {
      'incognitee-gray': 'rgba(81, 81, 81, 0.24)',
    },
  
  },
  },
  plugins: [require('@tailwindcss/forms'),],
};
