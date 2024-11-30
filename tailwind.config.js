/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#000000',
          800: '#111111',
          700: '#1A1A1A',
          600: '#222222'
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};