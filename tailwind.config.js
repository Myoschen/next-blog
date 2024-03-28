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
            h1: { fontSize: theme('fontSize.sm') },
            h2: { fontSize: theme('fontSize.sm') },
            h3: { fontSize: theme('fontSize.sm') },
            h4: { fontSize: theme('fontSize.sm') },
            h5: { fontSize: theme('fontSize.sm') },
            h6: { fontSize: theme('fontSize.sm') },
            pre: false,
            code: false,
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
