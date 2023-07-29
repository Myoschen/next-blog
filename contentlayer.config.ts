import {defineDocumentType, makeSource} from 'contentlayer/source-files';
import rehypePrism from 'rehype-prism-plus';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.md',
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
      resolve: (post) => post._raw.flattenedPath,
    },
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  markdown: {rehypePlugins: [[rehypePrism, {ignoreMissing: true}]]},
});
