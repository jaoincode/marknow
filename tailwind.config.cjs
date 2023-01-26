/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "my-gray-100": "#434343",
      "my-grah-200": "#373737",
      "my-black-100": "181818",
      "my-black-200": "151515",
      "my-white-100": "#ffffff",
      "my-white-200": "#EBEBEB",
      "my-blue-100": "#0099FF",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
