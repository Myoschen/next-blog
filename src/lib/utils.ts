import { date } from '@formkit/tempo'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type SortDateOptions = {
  order: 'asc' | 'desc'
}

export function sortDate(
  a: Date | string,
  b: Date | string,
  options: SortDateOptions = { order: 'asc' },
) {
  const t1 = date(a).getTime()
  const t2 = date(b).getTime()

  const diff = t1 - t2

  if (diff === 0) return 0

  if (options.order === 'asc') {
    return diff > 0 ? 1 : -1
  } else {
    return diff > 0 ? -1 : 1
  }
}
