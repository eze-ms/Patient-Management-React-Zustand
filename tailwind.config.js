/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0a1229',
        'yellow': '#e3ab39',
        'blueForm': '#40b0f3',
        'borderForm': '#516391',
        'bgInput': '#47c8f0',
        'pinkTail': '#ec5990',
        'borderBoton': '#ec5990'
      },
    },
  },
  plugins: [],
}
