/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: 'var(--sans)',
      mono: 'var(--mono)',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
