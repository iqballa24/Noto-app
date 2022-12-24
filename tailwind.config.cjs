/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Nunito Sans", "serif"],
    },
    extend: {
      fontSize: {
        base: "16px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        dark: {
          DEFAULT: "#24252A",
          secondary: "#34363F",
        },
        light: {
          DEFAULT: "#F6F6F6",
          secondary: "#ECECEC",
        },
        white: "#FFFFFF",
        "light-gray": "#8D9094",
        "dark-gray": "#5D5E67",
        cyan: {
          DEFAULT: "#3FCFCF",
        },
        red: {
          DEFAULT: "#F03636 ",
          soft: "#F35252",
        },
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
  darkMode: ["class"],
};
