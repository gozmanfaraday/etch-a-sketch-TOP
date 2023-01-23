/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    screens: {
      sm: '412px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1800px',
    },
    extend: {
      colors: {
        'almond': '#efdecd',
        'lavender': '#b892ff',
        'violet': '#4a0d67',
        'malachite': '#0bda51',
        'darkGray': '#555555',
        'lightGray': '#f1f1f1',
      },
      fontFamily: {
        silk: ['Silkscreen', 'cursive'],
        vt: ['VT323', 'monospace'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
      boxShadow: {
        etch: '4px 4px 20px -3px rgb(0 0 0 / 0.5), -4px -4px 20px -3px rgb(0 0 0 / 0.5)',
        pad: '0 12px 25px -3px rgb(0 0 0 / 0.3), 0 8px 10px -3px rgb(0 0 0 / 0.3)',
      },
    },
  },
  
  plugins: [],
}
