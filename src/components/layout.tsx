import { type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={'relative mx-auto min-h-screen max-w-screen-md px-4 py-8 md:px-0'}>
      {children}
    </main>
  )
}
