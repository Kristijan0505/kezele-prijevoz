/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary-red': '#C62828',
        'background-white': '#FFFFFF',
        'neutral-gray': '#333333',
        'secondary-gold': '#d4a737',
        'light-gray': '#F9F9F9',
        'success-green': '#4CAF50',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-in-out forwards',
        'slide-in-up': 'slideInUp 1s ease-in-out forwards',
        'zoom-in': 'zoomIn 1s ease-in-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
        'wave': 'wave 10s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'draw': 'draw 1.5s ease-in-out forwards',
        'sway': 'sway 6s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
    },
  },
  plugins: [],
};