/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        adventure: {
          blue: '#00A8E8',
          yellow: '#FFD700',
          green: '#7FBA00',
          pink: '#FF69B4',
          purple: '#9B59B6',
        },
      },
      fontFamily: {
        adventure: ['Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
};
