/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        source: "'Source Sans 3', sans-serif",
        kufam: "'Kufam', sans-serif",
      },
    },
  },
  plugins: [require('daisyui')],
};
