/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '-2px 5px 9px 2px rgba(0, 0, 0, 0.20)',
      }
    },
  },
  plugins: [],
}

