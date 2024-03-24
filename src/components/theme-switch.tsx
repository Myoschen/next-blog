'use client'
import { useTheme } from 'next-themes'

import { useMounted } from '@/hooks/use-mounted'

export default function ThemeSwitch() {
  const isMounted = useMounted()
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  if (!isMounted) {
    return null
  }

  return (
    <button onClick={toggleTheme}>
      {isDark ? 'light' : 'dark' }
    </button>
  )
}
