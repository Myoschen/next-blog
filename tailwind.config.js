const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          maxWidth: 'none',
          css: {
            h1: { fontSize: theme('fontSize.base') },
            h2: { fontSize: theme('fontSize.base') },
            h3: { fontSize: theme('fontSize.base') },
            h4: { fontSize: theme('fontSize.base') },
            h5: { fontSize: theme('fontSize.base') },
            h6: { fontSize: theme('fontSize.base') },
            pre: false,
            code: false,
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
