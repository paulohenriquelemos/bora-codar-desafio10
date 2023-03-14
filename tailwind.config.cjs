/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#8E87FA',
        purple700: '#6D67D0',
        purple500: '#9D99E4',
        purple300: '#C2BFF4',
        purple200: '#DAD8F7',
        purple100: '#E7E6FB',
        bgCard: 'rgba(109, 103, 208, 0.9)',
        bgCardSmall: 'rgba(102, 96, 200, 0.6)',
        green300: '#87EBCD',
      },
      backgroundImage: {
        'bg-card': "url('/src/assets/bg-card.svg')",
      },
    },
  },
  plugins: [],
}
