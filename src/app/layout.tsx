import '@/app/globals.css'

import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { Providers } from '@/components/providers'
import { meta } from '@/constants/site-config'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    template: `%s / ${meta.author}`,
    default: meta.title,
    absolute: `${meta.title} / ${meta.author}`,
  },
  description: meta.description,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(GeistSans.variable, GeistMono.variable)}>
        <Providers>
          <div className="relative mx-auto max-w-xl px-8 py-16">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
