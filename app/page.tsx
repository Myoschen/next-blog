import Link from 'next/link';
import {compareDesc, format, parseISO} from 'date-fns';

import config from '@/constants/site-config';
import {allPosts, Post} from '@/content';

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl font-semibold">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <p>{post.description}</p>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="mx-auto max-w-screen-md px-4 py-8 md:px-0">
      <h1 className="mb-8 text-center text-4xl font-semibold">
        {config.title}
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
