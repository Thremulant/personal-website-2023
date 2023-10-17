/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      main: colors.rose[600],
      white: colors.stone[100],
      black: colors.stone[950],
    },
    extend: {
      fontFamily: {
        'neue': ['"Neue Montreal"', 'Montserrat', 'sans-serif'],
        'work': ['"Work Sans"', 'sans-serif']
      },
    },
  },
  safelist: [
    'text-outline-white',
    'text-outline-main',
    'text-outline-black',
  ],
  plugins: [],
}
