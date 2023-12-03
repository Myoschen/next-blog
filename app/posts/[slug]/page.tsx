import { format, parseISO } from 'date-fns'

import { allPosts } from '@/content/generated'

export const generateStaticParams = async () =>
  allPosts.map(post => ({ slug: post.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(post => post.slug === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(post => post.slug === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <div className={'grid gap-8'}>
      <div>
        <time dateTime={post.date} className={'mb-1 text-xs text-gray-600'}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className={'text-3xl font-semibold'}>{post.title}</h1>
      </div>
      <article
        className={'prose max-w-none dark:prose-invert'}
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  )
}

export default PostLayout
