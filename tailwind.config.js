/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(111deg, #3653ae 0%, rgba(54, 83, 174, 0) 100%)",
      },
      colors: {
        primary: "#3653AE",
        secondary: "#006265",
        background: "#00090C",
        text: "#B2C2F4",
        header: "#F4F4F4",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1120px",
    },
  },
  plugins: [],
};
