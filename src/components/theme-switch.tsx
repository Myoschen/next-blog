'use client'

import { useTheme } from 'next-themes'

import { useMounted } from '@/hooks/use-mounted'

export function ThemeSwitch() {
  const isMounted = useMounted()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'system' : theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }

  if (!isMounted) {
    return (
      <button className="opacity-50 blur-sm" disabled={true}>
        theme
      </button>
    )
  }

  return (
    <button className="transition-opacity duration-300 hover:opacity-50" onClick={toggleTheme}>
      {theme}
    </button>
  )
}
