import { notFound } from 'next/navigation'
import { MDXContent } from '@content-collections/mdx/react'
import { allPosts } from 'content-collections'
import { format } from 'date-fns'

function getPostBySlug(slug: string) {
  return allPosts.find(post => post.slug === slug)
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
  return allPosts.map(post => ({ slug: post.slug }))
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (post === undefined) notFound()

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="font-bold">{post.title}</h1>
        <div className="space-y-1">
          <p className="text-sm text-foreground/75">{post.description}</p>
          <div className="flex items-center gap-x-1.5 text-xs text-foreground/75">
            <time dateTime={post.date}>{format(post.date, 'MMM dd, yyyy')}</time>
            <span>•</span>
            <span>{`${post.readingTime} mins`}</span>
          </div>
        </div>
      </div>
      <article className="prose dark:prose-invert">
        <MDXContent code={post.mdx} />
      </article>
    </div>
  )
}
