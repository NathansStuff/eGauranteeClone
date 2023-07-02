/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#143D65', // navy black / blue
        secondary: '#6DDD83', // green
        primaryDark: 'rgba(30, 58, 75, 1)', // navy black / blue #1e3a4b
        secondaryDark: 'rgba(255, 55, 79, 1)', // red #ff374f,
        bg: 'rgba(255, 255, 255, 1)', // white #ffffff
        bgDark: 'rgba(30, 58, 75, 1)', // navy black / blue #1e3a4b
      },
      animation: {
        marquee: 'marquee 3s linear forwards',
        marquee2: 'marquee2 3s linear forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          'text-align': 'center',
        },
      });
    },
  ],
};
