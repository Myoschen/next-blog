import { transformerTwoslash } from '@shikijs/twoslash'
import type { Route } from 'next'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
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
      metadata: s.metadata(),
      content: s.markdown(),
    })
    .transform(data => ({ ...data, permalink: `/posts/${data.slug}` as Route<'/posts/${string}'> })),
})

const rehypePrettyCodeOptions: Options = {
  theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
  transformers: [transformerTwoslash()],
}

export default defineConfig({
  collections: { posts },
  markdown: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
})
