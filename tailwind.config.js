/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1B1B3A',
        'pink': '#F84AA7',
        'light-gray': '#F8F9FA',
        'dark-gray': '#6B7280',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
