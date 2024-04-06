/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: { 
          '50': '#fff0f0',
          '100': '#ffdddd',
          '200': '#ffc0c0',
          '300': '#ff9494',
          '400': '#ff5757',
          '500': '#ff2323',
          '600': '#ff0000',
          '700': '#d70000',
          '800': '#b10303',
          '900': '#920a0a',
          '950': '#500000',
         }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
