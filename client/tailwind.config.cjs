/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6347', // tomato
          contrast: '#ffffff',
        },
        accent: '#FF6347',
        'text-dark': '#333333',
        background: {
          DEFAULT: '#ffffff',
          muted: '#f8f9fa',
        },
      },
    },
  },
  plugins: [],
}
