/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "indx.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        gridWrap: "repeat(auto-fill, minmax(305px, 1fr))",
      },
    },
    plugins: [],
    darkMode: "class",
  }
}