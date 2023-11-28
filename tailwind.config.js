/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'slate': '#041663',
      'darkblue' : '#010018',
      'white': '#8B98B8',
      'dblue' : '#027BE6',
      'green' : '#22C8B4',
      'whitee' : "#fff",
      'purple': '#3f3cbb',
      'blue': '#00C6F0',
      'midnight': '#121063',
      'neutral' : '#0D4C92',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'red': '#d21f3c',
      'bermuda': '#78dcca',
      
    },
  },
  plugins: [],
}

