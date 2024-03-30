'use client'
import { useTheme } from 'next-themes'

import { useMounted } from '@/hooks/use-mounted'

export default function ThemeSwitch() {
  const isMounted = useMounted()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  if (!isMounted) {
    return null
  }

  return (
    <button className={'transition-opacity duration-300 hover:opacity-50'} onClick={toggleTheme}>
      {theme}
    </button>
  )
}
