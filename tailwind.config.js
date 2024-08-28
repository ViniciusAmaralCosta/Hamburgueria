/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",  // Inclui todos os arquivos HTML e JS no projeto
    "!./node_modules/**" // Exclui a pasta node_modules
  ],
  theme: {
    fontFamily:{
      'sans':['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}
