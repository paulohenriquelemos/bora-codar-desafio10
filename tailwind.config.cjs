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
      animation: {
        sunGraphic: 'sunGraphicPosition forwards 1.5s ease-in-out',
        sunTranslate: 'sunRotate forwards 1.5s ease-in-out',
        cloudWhite: 'cloud 3s ease-in-out infinite',
        cloudGray: 'cloud 3s ease-in-out infinite 0.25s',
      },
      keyframes: {
        sunGraphicPosition: {
          '0%': {
            width: '0px',
          },
        },
        sunRotate: {
          '0%': {
            transform: 'rotate(0)',
          },
        },
        cloud: {
          '0%, 100%': {
            transform: 'translateX(0rem)',
          },
          '50%': {
            transform: 'translateX(1rem)',
          },
        },
      },
      transformOrigin: {
        sun: '18px 18px',
      },
    },
  },
  plugins: [],
}
