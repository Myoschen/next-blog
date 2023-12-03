import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'

// definitions
const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: post => post._raw.flattenedPath,
    },
    url: {
      type: 'string',
      resolve: post => `/posts/${post._raw.flattenedPath}`,
    },
  },
}))

const options: Options = {
  theme: {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  },
}

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, options]],
  },
})
