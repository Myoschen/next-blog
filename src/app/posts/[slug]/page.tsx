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
      <div>
        <time dateTime={post.date} className={'mb-1 text-xs text-gray-600'}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className={'text-3xl font-semibold'}>{post.title}</h1>
      </div>
      <MDXContent code={post.body.code} />
    </div>
  )
}
