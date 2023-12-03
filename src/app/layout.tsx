import '@/constants/globals.css'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import Layout from '@/components/layout'
import Providers from '@/components/providers'
import config from '@/constants/site-config'
import { cn } from '@/utils/classnames'

export const metadata = {
  title: `${config.title} - @${config.author}`,
  description: config.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} suppressHydrationWarning={true}>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          'bg-gray-50 bg-grainy font-sans text-zinc-900 bg-blend-soft-light transition-colors dark:bg-zinc-900 dark:text-gray-50',
        )}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}