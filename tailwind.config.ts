import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: ({ theme }: { theme: any }) => ({
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
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
