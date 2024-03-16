import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'

import { posts } from '~/.velite'

interface PostProps {
  params: { slug: string }
}

function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug)
}

export function generateMetadata({ params }: PostProps) {
  const post = getPostBySlug(params.slug)
  if (post === undefined) return {}
  return { title: post.title, description: post.description }
}

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export default function PostPage({ params }: PostProps) {
  const post = getPostBySlug(params.slug)

  if (post === undefined) notFound()

  return (
    <div className={'grid gap-8'}>
      <div className={'flex flex-col gap-y-1'}>
        <h1 className={'text-3xl font-bold'}>{post.title}</h1>
        <time className={'mb-1 text-xs text-zinc-700 dark:text-zinc-400'} dateTime={post.date}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <article className={'prose prose-zinc max-w-none dark:prose-invert'}>
        <p dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}
