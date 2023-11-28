import { JetBrains_Mono, Rubik } from 'next/font/google'

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--sans',
})

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--mono',
})

export { rubik as sans }
