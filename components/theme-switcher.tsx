'use client';

import {useTheme} from 'next-themes';

import {cn} from '@/utils/classnames';
import {useMounted} from '@/hooks/use-mounted';
import {Button} from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ThemeSwitcher() {
  const isMounted = useMounted();
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Button size="icon" className="relative" onClick={toggleTheme}>
      <Icon
        name="moon"
        className={cn(
          'absolute stroke-zinc-900 transition-opacity duration-300 dark:stroke-gray-50',
          theme === 'light' ? 'opacity-100' : 'opacity-0',
        )}
      />
      <Icon
        name="sun"
        className={cn(
          'absolute stroke-zinc-900 transition-opacity duration-300 dark:stroke-gray-50',
          theme === 'dark' ? 'opacity-100' : 'opacity-0',
        )}
      />
    </Button>
  );
}
