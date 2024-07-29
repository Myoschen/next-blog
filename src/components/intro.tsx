import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

interface IntroProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string
  description: string
}

export const Intro = forwardRef<HTMLDivElement, IntroProps>(({ title: author, description, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('space-y-2', className)} {...props}>
      <h2 className="font-semibold">{author}</h2>
      <p className="whitespace-pre-wrap">{description}</p>
    </div>
  )
})
