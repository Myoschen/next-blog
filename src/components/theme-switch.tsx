'use client'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
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
    <Button variant={'ghost'} size={'icon'} onClick={toggleTheme}>
      {isDark
        ? <SunIcon className={'h-5 w-5'} />
        : <MoonIcon className={'h-5 w-5'} /> }
    </Button>
  )
}
