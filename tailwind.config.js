/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["index.html", "index.js"],
  theme: {
    animation: {
      'fade': 'fade 1.5s linear 1',
    },
    keyframes: {
      fade: {
        '0%, 100%': { opacity: '1' },
      }
    },
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
  },
}