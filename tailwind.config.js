/** @type {import('tailwindcss').Config} */

const sky900 = "hsl(206, 88%, 20%)";
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        sky: {
          100: "hsl(206, 37%, 89%)",
          300: "hsl(206, 62%, 72%)",
          500: "hsl(206, 63%, 51%)",
          700: "hsl(206, 93%, 33%)",
          900: sky900,
          950: "hsl(206, 88%, 16%)",
        },
      },
      dropShadow: {
        DEFAULT: `0 4px 10px ${sky900}`,
      },
      boxShadow: {
        DEFAULT: `0 0 10px ${sky900}`,
        md: `0 4px 10px ${sky900}`,
        lg: `0 0 20px ${sky900}`,
      },
    },
  },
  plugins: [],
};
