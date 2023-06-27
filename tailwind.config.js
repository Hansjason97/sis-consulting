/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif'],
    },
    extend: {
      colors:{
        primary: '#00E6FC',
        secondary: '#13214A',
        secondaryDark: '#101938',
        secondaryBlack: '#040912',
        secondaryLight: '#3075FE'
      },
    },
  },
  plugins: [],
}