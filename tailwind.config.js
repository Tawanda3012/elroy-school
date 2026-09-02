/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a3a6c',
        accent: '#f39c12',
        accentDark: '#e67e22',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};