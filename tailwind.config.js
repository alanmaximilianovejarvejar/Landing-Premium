/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1114',
        smoke: '#5F6672',
        pale: '#F4F4F2',
        gold: { DEFAULT: '#C9A227', light: '#D9BC5C', dark: '#A98727' },
      },
      fontFamily: {
        heading: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: { wider2: '0.25em' },
    },
  },
  plugins: [],
};
