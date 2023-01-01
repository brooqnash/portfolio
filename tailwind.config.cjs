/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    colors: {
      Black: "#000000",
      White: "#FFFFFF",
      Grey: "#AAAAAA",
      DarkGrey: "#AAAAAA15",
      Transparent: "#00000000",
      Red: "#CD5C5C",
      Green: "#0B9E8A",
      Blue: "#76B7C7",
    },
    extend: {
      keyframes: {
        message: {
          "0%": { opacity: "0%" },
          "25%": { opacity: "100%" },
          "75%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
      },
      animation: {
        message: "message 5s ease-in-out",
      },
    },
  },
};
