/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: {
          DEFAULT: '#faa500',  // Original color
          dark: '#e09500',     // Darker shade for hover
        },
      },
    },
  },
  plugins: [],
};



