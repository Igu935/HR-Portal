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
        "btnShadow": "0px 0px 15px 1px rgba(0, 0, 0, 0.40) inset, -1px -1px 9px 1px rgba(255, 255, 255, 0.24), -1px 4px 9px 1px #000",
        "btnShadow2" : "0px 0px 15px 1px rgba(0, 0, 0, 0.40) inset, 0px 2px 9px 1px #575ccf73, -3px -3px 9px 1px #000"
      }
    },
  },
  plugins: [],
}

