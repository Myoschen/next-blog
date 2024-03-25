import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'

import { posts } from '~/.velite'

function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug)
}

interface Props {
  params: { slug: string }
}

export function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (post === undefined) return {}
  return { title: post.title, description: post.description }
}

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export default function Post({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (post === undefined) notFound()

  return (
    <div className={'space-y-8'}>
      <div className={'space-y-1'}>
        <h1 className={'font-bold'}>{post.title}</h1>
        <div className={'flex items-center gap-x-1.5 text-foreground/75'}>
          <time className={'text-sm'} dateTime={post.date}>
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <span>{'•'}</span>
          <span>{`${post.metadata.readingTime} mins`}</span>
        </div>
      </div>
      <article className={'prose dark:prose-invert'}>
        <p dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}
