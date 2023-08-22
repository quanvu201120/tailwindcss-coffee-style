/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "coffee": {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#A25F4B",
          600: "#744888"
        }
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translate(0,-100%)', opacity: 0 },
          '100%': { transform: 'translate(0,0)', opacity: 1 },
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in-out',
      }
    },
  },
  plugins: [],
}