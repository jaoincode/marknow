/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        mygray: {
          100: "#434343",
          200: "#373737",
          300: "#2e2e2e",
        },
        myblack: {
          100: "#181818",
          200: "#151515",
        },
        mywhite: {
          100: "#ffffff",
          200: "#ebebeb",
        },
        myblue: {
          100: "#0099ff",
        },
      },
    },
  },
  plugins: [],
};
