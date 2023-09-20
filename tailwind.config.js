/** @type {import('tailwindcss').Config} */

const primary900 = "hsl(206, 88%, 20%)";
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(206, 37%, 89%)",
          300: "hsl(206, 62%, 72%)",
          500: "hsl(206, 63%, 51%)",
          700: "hsl(206, 93%, 33%)",
          900: primary900,
          950: "hsl(206, 88%, 16%)",
        },
        disabled: {
          background: "#DDDDDD",
          text: "#999999",
        },
      },
      dropShadow: {
        fab: `0 4px 10px ${primary900}`,
      },
      boxShadow: {
        btnPrimary: `0 0 10px ${primary900}`,
        container: `0 0 20px ${primary900}`,
      },
    },
  },
  plugins: [],
};
