/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Amatic SC", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
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
      fontSize: {
        XXXS: "8px",
        XXS: "10px",
        XS: "12px",
        P0: "15px",
        P1: "18px",
        P2: "20px",
        P3: "24px",
        P4: "36px",
        P5: "48px",
        P6: "60px",
      },
      spacing: {
        xxs: "4px",
        round: "5px",
        xs: "8px",
        sm: "12px",
        md: "20px",
        lg: "32px",
        xl: "52px",
        xxl: "84px",
      },
      scale: {
        250: "2.5",
      },
      boxShadow: {
        xlInner: "0 8px 20px 8px rgba(0, 0, 0, 0.3) inset",
      },
    },
  },
  plugins: [],
};
