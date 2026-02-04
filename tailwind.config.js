/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          navbar: 'oklch(14.5% 0 0)',      // navbar/footer
        },
        gold: {
          accent: '#d2ac89',      // accents
        },
        grey: {
          100: '#F2EDE7',         // section background light
          200: '#d5d5d5',         // section background dark
        },
        black: '#000000',          // text
      },
    },
  },
  plugins: [],
}
