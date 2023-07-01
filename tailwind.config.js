/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(30, 58, 75, 1)', // navy black / blue #1e3a4b
        secondary: 'rgba(255, 55, 79, 1)', // red #ff374f
        primaryDark: 'rgba(30, 58, 75, 1)', // navy black / blue #1e3a4b
        secondaryDark: 'rgba(255, 55, 79, 1)', // red #ff374f
      },
    },
  },
  plugins: [],
};
