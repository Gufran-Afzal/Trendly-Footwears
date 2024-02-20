/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid'
  ],
  theme: {
    extend: {
      colors: {
        'bright-sun': {
          '50': '#fefbe8',
          '100': '#fff6c2',
          '200': '#ffea89',
          '300': '#ffd234',
          '400': '#fdbf12',
          '500': '#eca606',
          '600': '#cc7e02',
          '700': '#a35805',
          '800': '#86450d',
          '900': '#723911',
          '950': '#431c05',
        },
        'black': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#000000',
        }         
      }
    },
  },
  plugins: [],
}

