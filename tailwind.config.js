/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
    screens: {
      's1': {'min': '992px', 'max': '1199px'},

      's2': {'min': '1200px', 'max': '1399px'},

      's3': {'min': '1400px', 'max': '1599px'},

      's4': {'min': '1600px'},
    },
  },
  plugins: [],
}

