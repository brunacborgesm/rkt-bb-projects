/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray1-background': '#121214',
        'gray2-cards': '#202024', 
        'gray3-divider': '#323238', 
        'gray4-placeholder': '#7c7c8a', 
        'gray5-apoio': '#8D8D99',
        'gray6-text': '#C4C4CC',
        'gray7-text-tilte': '#E1E1E6',
        'red-danger': '#F75A68',
        'orange': '#D97500', 
        'light-orange': '#DF9641',
        'comment': '#29292E',   
      },

      fontFamily: {
        'roboto':['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

