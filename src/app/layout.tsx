import '@/app/globals.css'

import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import Providers from '@/components/providers'
import { config } from '@/constants/site-config'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    template: `%s / ${config.meta.author}`,
    default: config.meta.title,
    absolute: `${config.meta.title} / ${config.meta.author}`,
  },
  description: config.meta.description,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} suppressHydrationWarning={true}>
      <body className={cn(GeistSans.variable, GeistMono.variable)}>
        <Providers>
          <main className={'relative mx-auto my-8 max-w-xl px-4 md:my-16'}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
