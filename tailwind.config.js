/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "majorblue" : "#66798"
      },
      fontSize:{
        "dd": ".5rem",
        "md": "1rem"
      },
      fontFamily:{
        montserrat:[ "Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

