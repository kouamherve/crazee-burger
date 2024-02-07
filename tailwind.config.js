/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Amatic SC", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      padding: {
        13: "50px",
        50: "200px",
      },
      margin: {
        13: "50px",
        50: "200px",
      },
      width: {
        50: "200px",
      },
      height: {
        11.5: "46px",
        15: "60px",
        50: "200px",
        85: "330px",
      },
      lineHeight: {
        5.5: "1.375",
        11: "2.875", //46px
        12: "3rem", //50px
      },
      gap: {
        15: "3.75rem",
        21: "5.313rem",
      },
      scale: {
        250: "2.5",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
      },
      boxShadow: {
        medium: "-8px 8px 20px 0 rgba(0, 0, 0, 0.3)",
        subtle: "0px -6px 8px -2px rgba(0, 0, 0, 0.2)",
        strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
        orangeHightLight: "0px 0px 8px 0px rgba(255, 154, 35, 1)",
        basket: "0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset",
        basketCard: "-4px 4px 15px 0px rgba(0, 0, 0, 0.2)",
      },
      gridTemplateColumns: {
        container: "repeat(auto-fit, minmax(250px, 1fr))", // Sans Basket
      },
      colors: {
        dark: "#17161a",
        incognito: "#333",
        white: "#fff",
        background_white: "#f5f5f7",
        background_dark: "#292729",
        primary: "#ffa01b",
        green: "green",
        success: "#60bd4f",
        red: "#e25549",
        redSecondary: "#c4151c",
        blue: "#51a7e1",
        greyLight: "#e4e5e9",
        greyMedium: "#a7a8ad",
        greySemiDark: "#93a2b1",
        greyDark: "#6f737e",
        greyBlue: "#747b91",
      },
      backgroundImage: {
        loginPage: "url('./assets/images/burger-with-fries-background.jpg')",
      },
    },
  },
  plugins: [],
};
