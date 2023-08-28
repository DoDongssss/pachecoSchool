/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ,],
   theme: {
      extend: {
         fontFamily: {
            montserrat: ["montserrat", "sans-serif"],
         },
         colors: {
            primary_lighter:
               "rgb(var(--color-primary-lighter) / <alpha-value>)",
            primary_light: "rgb(var(--color-primary-light) / <alpha-value>)",
            primary: "rgb(var(--color-primary) / <alpha-value>)",
            primary_dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
            primary_darker: "rgb(var(--color-primary-darker) / <alpha-value>)",

            secondary_lighter:
               "rgb(var(--color-secondary-lighter) / <alpha-value>)",
            secondary_light:
               "rgb(var(--color-secondary-light) / <alpha-value>)",
            secondary: "rgb(var(--color-secondary) / <alpha-value>)",
            secondary_dark: "rgb(var(--color-secondary-dark) / <alpha-value>)",
            secondary_darker:
               "rgb(var(--color-secondary-darker) / <alpha-value>)",
         },
      },
   },
   plugins: [require("daisyui")],
}
