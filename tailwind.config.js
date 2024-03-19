/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./storyblok/**/*.{vue,js}', './components/**/*.{vue,js}', './pages/**/*.vue'],
  theme: {
    extend: { colors: {
      cDark: {
        DEFAULT: '#88AB8E',
        50: '#F4F7F4',
        100: '#E8EFE9',
        200: '#D0DED2',
        300: '#B8CDBB',
        400: '#A0BCA5',
        500: '#88AB8E',
        600: '#68936F',
        700: '#517256',
        800: '#39513D',
        900: '#223025',
        950: '#172018',
      },
      cLight: {
        DEFAULT: '#F2F1EB',
        50: '#FAFAF7',
        100: '#F2F1EB',
        200: '#DCD9C9',
        300: '#C6C1A7',
        400: '#B0AA85',
        500: '#999164',
        600: '#77714D',
        700: '#555137',
        800: '#333121',
        900: '#11100B',
        950: '#000000',
      },
    }, fontFamily: {
      Inter: ['Inter'],
      Playfair: ['Playfair Display'],

    } },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.bgSvg': {

        },
      })
    }),
  ],
}
