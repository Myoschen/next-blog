import rehypePrettyCode from 'rehype-pretty-code'
import { s } from 'velite'
import { defineConfig } from 'velite'

export default defineConfig({
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.md',
      schema: s
        .object({
          title: s.string(),
          description: s.string(),
          date: s.isodate(),
          slug: s.slug('posts'),
          excerpt: s.excerpt(),
          metadata: s.metadata(),
          content: s.markdown(),
        })
        .transform(data => ({ ...data, permalink: `/blog/${data.slug}` })),
    },
  },
  markdown: {
    rehypePlugins: [rehypePrettyCode],
  },
})
