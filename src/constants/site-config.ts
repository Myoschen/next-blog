import { getYear } from 'date-fns'

export const meta = {
  title: 'Next Blog',
  description: 'This is a blog built by Next.js and Velite.',
  author: 'Myoschen',
}

export const intro = {
  title: 'Welcome !',
  description: 'Hello, I\'m Myos, a front-end developer.',
}

type Project = {
  name: string
  description: string
  url: string
  disabled?: boolean
}

export const projects: Project[] = [
  {
    name: 'portfolio',
    description: 'My portfolio.',
    url: 'https://github.com/Myoschen/portfolio',
  },
  {
    name: 'next-blog',
    description: 'A minimal blog is built with next, velite.',
    url: 'https://github.com/Myoschen/next-blog',
  },
]

export const copyright = {
  year: getYear(new Date()),
  owner: 'Myoschen',
}

export const social = {
  github: 'https://github.com/Myoschen',
}
