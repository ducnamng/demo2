/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      xs: "376px",
      "xs-max": { max: "376px" },
      sm: "640px",
      "sm-max": { max: "640px" },
      md: "768px",
      "md-max": { max: "768px" },
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      height: {
        758: "758px",
      },
      top: {
        600: "600px",
      },
      colors: {
        "index-1": "#FF64AE",
        "index-2": "#091156",
        "index-3": "#8B8B8B",
        background: "#E5E5E5",
        "a-lineblu": "rgba(216, 220, 255, 1)",
        "bg-menu": "rgb(234, 234, 234)",
      },

      backgroundColor: {
        "pink-bottom": "rgba(255, 100, 174, 1)",
      },
    },
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
