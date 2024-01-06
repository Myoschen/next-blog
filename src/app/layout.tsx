import '@/constants/globals.css'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import Layout from '@/components/layout'
import Providers from '@/components/providers'
import config from '@/constants/site-config'
import { cn } from '@/lib/utils'

export const metadata = {
  title: `${config.title} - @${config.author}`,
  description: config.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} suppressHydrationWarning={true}>
      <body className={cn('relative font-sans', GeistSans.variable, GeistMono.variable)}>
        <div className={'absolute inset-0 bg-noise bg-fixed opacity-[.15]'} />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
