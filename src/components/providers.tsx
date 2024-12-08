'use client'

import { type ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      enableSystem={true}
      enableColorScheme={false}
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
  )
}
