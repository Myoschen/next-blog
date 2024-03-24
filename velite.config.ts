import rehypePrettyCode from 'rehype-pretty-code'
import { defineConfig, defineCollection, s } from 'velite'

const posts = defineCollection({
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
})

export default defineConfig({
  collections: { posts },
  markdown: {
    rehypePlugins: [[rehypePrettyCode, { theme: 'vitesse-dark' }]],
  },
})
