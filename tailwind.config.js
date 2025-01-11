/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
     // ...
   ],
  content: [
    "./src/**/*.{njk,md,html}",
    "./src/*.{njk,md,html}", 
    "./src/**/*.svg",]
}

