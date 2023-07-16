module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_a0": "#000000a0",
          "900_c4": "#000000c4",
          "900_3f": "#0000003f",
          "900_01": "#040404",
          "900_bf": "#000000bf",
        },
        gray: {
          400: "#b8b8b8",
          900: "#151515",
          "700_72": "#59595972",
          "400_01": "#b1b1b1",
        },
        blue_gray: { 100: "#d9d9d9" },
        white: {
          A700_b5: "#ffffffb5",
          A700_4f: "#ffffff4f",
          A700_21: "#ffffff21",
          A700_bf: "#ffffffbf",
          A700: "#ffffff",
          A700_9e: "#ffffff9e",
        },
        red: { 900: "#ab0101", A700: "#ff0000" },
        blue: { 500: "#1da1f2" },
        indigo: { 600: "#3b5998" },
      },
      fontFamily: {
        sourcesanspro: "Source Sans Pro",
        inter: "Inter",
        lexendtera: "Lexend Tera",
        karla: "Karla",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
