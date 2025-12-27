/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#0df259",
        "background-light": "#fdfbf7",
        "background-dark": "#102316",
        "surface-dark": "#1a3322",
        "surface-highlight": "#22492f",
        "earth-brown": "#8D6E63",
        "earth-dark": "#5D4037",
        "earth-light": "#D7CCC8",
        "earth-accent": "#A1887F",
        "warm-text": "#4E342E"
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: { 
        "DEFAULT": "0.5rem", 
        "lg": "0.75rem", 
        "xl": "1rem", 
        "full": "9999px" 
      },
    },
  },
  plugins: [],
};