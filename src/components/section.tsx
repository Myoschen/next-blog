import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

export const Section = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<'section'>>(
  ({ className, children, ...props }, ref) => (
    <section ref={ref} className={cn('group space-y-8', className)} {...props}>
      {children}
    </section>
  ),
)
Section.displayName = 'Section'

export const SectionHeading = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<'h2'>>(
  ({ className, children, ...props }, ref) => (
    <h2 ref={ref} className={cn('font-semibold', className)} {...props}>
      {children}
    </h2>
  ),
)
SectionHeading.displayName = 'SectionHeading'

interface SectionContentProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

export const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp ref={ref} className={cn('transition-opacity duration-300 group-hover:opacity-60', className)} {...props}>
        {children}
      </Comp>
    )
  },
)
SectionContent.displayName = 'SectionContent'
