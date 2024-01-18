/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#C9471B",
        "custom": "rgba(201, 71, 27, 0.80)",
        "yellow": "#FFE033",
        "red": "#B60101",
        "black": "#171717"
      }
    },
  },
  plugins: [],
}
