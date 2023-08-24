/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      filter: {
        'grayscale': 'grayscale(100%)',
      },
      transitionProperty: {
        'filter': 'filter',
      },
      fontFamily: {
        baskerville: ['Baskerville', 'serif'],
        // Add any other custom fonts here
      },
    },
  },
  plugins: [],
}