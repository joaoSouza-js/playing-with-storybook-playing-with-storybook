/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Roboto', 'sans-serif']
    },
    colors: {
      green:{
        '300': '#00875F',
        '500': '#00B37E'
      },

      gray: {
        '900': '#121214',
        '800': '#202024',
        '750': '#29292E',
        '700': '#323238',
        '500': '#7C7C8A',
        '300': '#8D8D99',
        '200': '#C4C4CC',
        '100': '#E1E1E6',
      },

      white: '#fff',
      black: '#000',
      red: '#F75A68',

      transparent: 'transparent'
    },

    fontSize: {
      'xs': `${'0.75rem'/*12px*/}`,
      'sm': `${'0.875rem'/*14px*/}`,
      'md': `${'1rem'/*14px*/}`,
    },
    extend: {},
  },

  plugins: [],
}
