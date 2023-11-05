/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        search: "#0089CC",
        world: "#33D8FF",
        opinion: "#005D99",
        horizon: "#E1E6EB",
        footer: "#001733"
      },
      height: {
        400: "25rem",
      },
      screens: {
        myxs: "320px",
        mysm: "576px",
        mytablet: "768px",
        mymd: "992px",
        mylg: "1200px",
        myxl: "1440px",
      },
      fontFamily: {
        'serif': ['Noto Serif', 'serif'],
      },
      letterSpacing: {
        '1': '1px',
      },
    },
  },
  plugins: [],
};
