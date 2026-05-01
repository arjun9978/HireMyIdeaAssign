/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          950: '#1f2b1f',
          900: '#2d3a2d',
          800: '#374737',
          700: '#445544',
          600: '#5a6d5a',
          500: '#748574',
          400: '#9fb09f',
          300: '#c1cbbf',
          200: '#dfe5d8',
          100: '#edf1e8',
          50: '#f6f7f4'
        }
      },
      boxShadow: {
        soft: '0 28px 60px -32px rgba(22, 33, 22, 0.55)',
        card: '0 10px 25px -15px rgba(31, 43, 31, 0.45)'
      }
    }
  },
  plugins: []
}
