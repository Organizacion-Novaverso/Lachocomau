/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color-brown': '#372418', // Puedes usar un código hexadecimal o un nombre de color
      },
    },
  },
  plugins: [],
};
