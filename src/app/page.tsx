import Link from 'next/link'
import { allPosts, type Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

import ThemeSwitch from '@/components/theme-switch'
import config from '@/constants/site-config'

export default function HomePage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div className={'grid gap-8'}>
      <div className={'flex items-center justify-between'}>
        <h1 className={'text-4xl font-semibold'}>{config.title}</h1>
        <ThemeSwitch />
      </div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}

function PostCard(post: Post) {
  return (
    <div className={'mb-8'}>
      <h2 className={'mb-1 text-xl font-semibold'}>
        <Link
          className={'text-emerald-600 transition-opacity ease-out hover:opacity-50'}
          href={post.url}
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className={'mb-2 block text-xs text-gray-600'}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <p className={'dark:text-gray-50'}>{post.description}</p>
    </div>
  )
}
