/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color-brown': '#372418', // Puedes usar un código hexadecimal o un nombre de color
      },
      colors: {
        pinkShadow: '#A3A0A0', 
        brown: '#372418',
        //pink: '#F78A8B'

      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-white': {
          '-webkit-text-stroke': '3px white',
        },
        '.text-shadow-inner': {
          position: 'relative',
          display: 'inline-block',
          color: 'white', /* Color del texto */
        },
        '.text-shadow-inner::before': {
          content: 'attr(data-text)',
          position: 'absolute',
          top: '0',
          left: '0',
          color: 'rgba(0, 0, 0, 0.5)', /* Color de la sombra interna */
          zIndex: '-1',
          transform: 'translate(2px, 2px)', /* Ajustar la posición de la sombra */
          filter: 'blur(2px)', /* Ajustar el difuminado de la sombra */
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
