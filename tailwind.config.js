/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        search: "#0089CC",
        world: "#33D8FF",
        opinion: "#005D99",
      },
      height: {
        400: "25rem",
      },
    },
  },
  plugins: [],
};