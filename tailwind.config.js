module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{css,js}"       // Escanea clases BEM en tus archivos CSS
  ], // Ruta a tus archivos HTML
  theme: {
    extend: {
      colors: {
        azulPotente: '#063E67', 
        azulSecundario: '#4690FF', 
        textosNoNegro: '#393434', 
        borde1: '#C8C8C8',
        borde2: '#B8B4B4',
        background: '#F2F8FF',
      },     
    },
  },
  plugins: [],
};
