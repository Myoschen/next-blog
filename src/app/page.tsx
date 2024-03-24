import Link from 'next/link'
import { compareDesc } from 'date-fns'

import { posts } from '~/.velite'

import { Intro } from '@/components/intro'
import { PostItem, PostList } from '@/components/post'
import { config } from '@/constants/site-config'

export default function Home() {
  const sorted = posts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div className={'space-y-8'}>
      <Link href={'/'}>
        <h1 className={'font-bold'}>{config.meta.title}</h1>
      </Link>
      <Intro title={config.intro.title} description={config.intro.description} />
      <div className={'space-y-4'}>
        <h2 className={'font-semibold'}>{'posts'}</h2>
        <PostList>
          {sorted.map(post => (
            <PostItem key={post.slug} post={post} />
          ))}
        </PostList>
      </div>
    </div>
  )
}
