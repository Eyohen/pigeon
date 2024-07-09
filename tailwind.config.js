/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      //   body: ['Nunito']
      'Prompt':['Prompt'],
      nunito: ['Nunito'],
      }
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
   },
  plugins: [],
}