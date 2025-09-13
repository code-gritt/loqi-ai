/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'navy': '#1B1B3A',
        'pink': '#F84AA7',
        'light-gray': '#F8F9FA',
        'dark-gray': '#6B7280',
        // Dark mode colors
        'dark-bg': '#0F0F23',
        'dark-surface': '#1A1A2E',
        'dark-card': '#16213E',
        'dark-text': '#E2E8F0',
        'dark-text-secondary': '#94A3B8',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
