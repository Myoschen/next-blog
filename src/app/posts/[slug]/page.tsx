import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

import MDXContent from '@/components/mdx-content'

interface PostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = allPosts.find(post => post.slug === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return {
    title: post.title,
  } satisfies Metadata
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(post => post.slug === params.slug)

  if (!post) notFound()

  return (
    <div className={'grid gap-8'}>
      <div className={'flex flex-col gap-y-1'}>
        <h1 className={'text-3xl font-bold'}>{post.title}</h1>
        <time className={'mb-1 text-xs text-zinc-700 dark:text-zinc-400'} dateTime={post.date}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <article className={'prose prose-zinc max-w-none dark:prose-invert'}>
        <MDXContent code={post.body.code} />
      </article>
    </div>
  )
}
