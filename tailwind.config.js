/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/image/bg.png')", // Corrected line
        'travel': "url('/src/assets/image/white.png')", // Corrected line
      },
    },
  },
  plugins: [],
}
