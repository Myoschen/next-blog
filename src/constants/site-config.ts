import { getYear } from 'date-fns'

export const meta = {
  title: 'next blog',
  description: 'this is a blog built by Next.js and Contentlayer.',
  author: 'myos',
}

export const intro = {
  title: 'welcome !',
  description: 'hello, i\'m myos, a front-end developer.',
}

export const projects = [
  {
    name: 'portfolio',
    description: 'my portfolio.',
    url: 'https://github.com/Myoschen/portfolio',
  },
  {
    name: 'next-blog',
    description: 'a minimal blog is built with next, velite.',
    url: 'https://github.com/Myoschen/next-blog',
  },
  {
    name: 'create-app',
    description: 'a cli tool to scaffold project.',
    url: 'https://github.com/Myoschen/create-app',
    disabled: true,
  },
]

export const copyright = {
  year: getYear(new Date()),
  owner: 'myoschen',
}

export const social = {
  github: 'https://github.com/Myoschen',
}
