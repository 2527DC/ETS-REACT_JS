/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

   screens:{
        sx:"425px"
     },
      height:{
         fit:"90vh"
      },
      colors: {
        primary: {
          light: '#6C63FF', // Light variant
          DEFAULT: '#5A55F2', // Default variant
          dark: '#4A49E0', // Dark variant
        },
        secondary: {
          light: '#FFA726',
          DEFAULT: '#FF9800',
          dark: '#FB8C00',
        },
        tertiary: {
          light: '#81D4FA',
          DEFAULT: '#03A9F4',
          dark: '#0288D1',
        },
      },
    },
  },
  plugins: [],
};
