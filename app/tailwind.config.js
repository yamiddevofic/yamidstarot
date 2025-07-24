/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        progress: {
          '0%': { width: '10%' },
          '50%': { width: '60%' },
          '100%': { width: '33.333333%' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(30px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'custom-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        progress: 'progress 3s ease-in-out infinite',
        slide: 'slide 2.5s ease-in-out infinite',
        'custom-pulse': 'custom-pulse 2s infinite',
      }
    },
  },
  plugins: [],
};
