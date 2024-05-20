/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary" : "#001225",
        "secondary" : "#0A3C70",
        "tracker": "#E6FFFF"
      },
        fontSize:{
        "dd": ".5rem",
        "md": "1rem"
      },
      fontFamily:{
        Reddit:[ "Reddit Sans Condensed", "sans-serif"],
        Teachers:[ "Teachers", "sans-serif"],
      }
    },
  },
  plugins: [],
}

