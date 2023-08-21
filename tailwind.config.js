/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-coffee": "#C89F94"
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translate(0,-100%)',opacity:0 },
          '100%': { transform: 'translate(0,0)', opacity:1 },
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in-out',
      }
    },
  },
  plugins: [],
}