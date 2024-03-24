import { forwardRef } from 'react'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import type { Post } from '~/.velite'

import { cn } from '@/lib/utils'

interface PostListProps extends React.ComponentPropsWithoutRef<'ul'> {}

export const PostList = forwardRef<HTMLUListElement, PostListProps>(({ className, children, ...props }, ref) => {
  return (
    <ul ref={ref} className={cn('space-y-2 py-4 transition-opacity duration-300 hover:opacity-75', className)} {...props}>
      {children}
    </ul>
  )
})
PostList.displayName = 'PostList'

interface PostItemProps extends React.ComponentPropsWithoutRef<'li'> {
  post: Post
}

export const PostItem = forwardRef<HTMLLIElement, PostItemProps>(({ post, className, ...props }, ref) => {
  return (
    <li ref={ref} className={cn('w-max transition-opacity duration-300 hover:opacity-50', className)} {...props}>
      <Link className={'flex items-center gap-x-8'} href={`/posts/${post.slug}`}>
        <time className={'font-mono text-foreground/75'} dateTime={post.date}>
          {format(parseISO(post.date), 'yyyy-MM-dd')}
        </time>
        <p>{post.title}</p>
      </Link>
    </li>
  )
})
PostItem.displayName = 'PostItem'
