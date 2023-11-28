import { cn } from '@/utils/classnames'

import { LucideProps, Moon, Sun } from 'lucide-react'

const iconMap = {
  moon: Moon,
  sun: Sun,
}

type IconName = keyof typeof iconMap

type IconProps = LucideProps & {
  name: IconName
}

export default function Icon({ name, className, ...props }: IconProps) {
  const Comp = iconMap[name]

  return <Comp className={cn(className)} {...props} />
}
