/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--sans)',
        mono: 'var(--mono)',
      },
      // https://alphaos.app/blog/disable-tailwind-prose-code
      typography: {
        DEFAULT: {
          css: {
            'code::before': false,
            'code::after': false,
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
