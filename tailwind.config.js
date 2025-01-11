/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,md,njk,ejs,pug}",
    "./src/*.{html,md,njk,ejs,pug}",
    "./src/*.{html,md,njk,ejs,pug}"
  ],
  theme: {
    fontFamily: {
      sans: ['Bembo', 'sans-serif'],
      serif: ['Bembo', 'serif'],
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
     // ...
   ],
  
}

