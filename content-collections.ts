import type { Route } from 'next'
import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import { transformerTwoslash } from '@shikijs/twoslash'
import readingTime from 'reading-time'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'

const rehypePrettyCodeOptions: Options = {
  theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
  transformers: [transformerTwoslash()],
}

// TODO handle images
const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '*.mdx',
  exclude: '_*.mdx',
  schema: z => ({
    title: z.string(),
    description: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    slug: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
    })
    const slug = document.slug ?? document._meta.path
    const href = `/posts/${slug}` as Route<'/posts/${string}'>
    const { minutes } = readingTime(document.content)
    return { ...document, mdx, slug, href, readingTime: minutes }
  },
})

export default defineConfig({
  collections: [posts],
})
