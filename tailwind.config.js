/** @type {import('tailwindcss').Config} */
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
          900: "hsl(206, 88%, 20%)",
        },
      },
    },
  },
  plugins: [],
};
