/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "index.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        gridWrap: "repeat(auto-fill, minmax(305px, 1fr))",
      },
    },
    plugins: [require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),],
    darkMode: 'class',
  }
}