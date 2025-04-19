/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001225",
        secondary: "#0A3C70",
        tracker: "#E6FFFF",
        active: " #B8B8B8",
        greenn: "#09A32B",
        red: "#DF0000",
      },
      fontSize: {
        xxs: "8px",
        xs13: "13px",
        md: "16px",
      },
      fontFamily: {
        Reddit: ["Reddit Sans Condensed", "sans-serif"],
        Teachers: ["Teachers", "sans-serif"],
      },
    },
  },
  plugins: [],
};
