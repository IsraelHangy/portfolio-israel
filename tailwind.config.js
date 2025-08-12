/** @type {import('tailwindcss').Config} */
module.exports = {
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

      // Dégradé animé
      backgroundImage: {
        'gradient-moving': 'linear-gradient(270deg, #ff4d4d, #ff784d, #ffcc4d, #ff4d88, #ff4d4d)',
      },
      backgroundSize: {
        '300': '300% 300%',
      },
      animation: {
        'gradient-move': 'gradientMove 6s ease infinite',
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

    function ({ addUtilities }) {
      const newUtilities = {
        
        '.text-outline': {
          color: 'white',
          '-webkit-text-stroke': '1px white',
        },
      
        '@screen md': {
          '.text-outline': {
            '-webkit-text-stroke': '1.5px white',
          },
        },
      };
      addUtilities(newUtilities, ['responsive']);
    }
  ],
  daisyui: {
    themes: [
      "light", "dark", "cupcake", "luxury", "dracula", "halloween", "night", "black",
    ],
  },
}
