/** @type {import('tailwindcss').Config} */
module.exports = {
  // ⬇️ Activer le mode sombre avec une classe
  darkMode: "class", 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'big-hero': ['"Big Shoulders Display"', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      backgroundImage: {
        'gradient-moving': 'linear-gradient(270deg, #ff4d4d, #ff784d, #ffcc4d, #ff4d88, #ff4d4d)',
      },
      backgroundSize: {
        '300': '300% 300%',
      },
      animation: {
        'gradient-move': 'gradientMove 7s ease infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },

  plugins: [
    require("daisyui"),
  ],

  daisyui: {
    // ⬇️ Liste des thèmes disponibles
    themes: [
      "light",      
      "dark",      
      "cupcake",     
      "luxury",      
      "dracula",     
      "halloween",   
      "night",       
      "black",
      "autumn",
      "cyberpunk",
    ],
  },
}
