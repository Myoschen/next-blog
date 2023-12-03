'use client'

import { type ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider enableSystem={true} attribute={'class'} defaultTheme={'system'}>
      {children}
    </ThemeProvider>
  )
}
