import Link from 'next/link'
import { allPosts } from 'content-collections'
import { compareDesc, format } from 'date-fns'

import { Intro } from '@/components/intro'
import { Section, SectionContent, SectionHeading } from '@/components/section'
import ThemeSwitch from '@/components/theme-switch'
import { copyright, intro, meta, projects, social } from '@/constants/site-config'
import { cn } from '@/lib/utils'

const postsSortedByDate = allPosts.sort((a, b) => compareDesc(a.date, b.date))

export default function HomePage() {
  return (
    <main className="space-y-8">
      <Link href="/">
        <h1 className="font-bold">{meta.title}</h1>
      </Link>
      <Intro title={intro.title} description={intro.description} />
      {/* projects */}
      <Section>
        <SectionHeading>Projects</SectionHeading>
        <SectionContent asChild={true}>
          <ul className="space-y-2">
            {projects.map(project => (
              <li key={project.name} className="w-max transition-opacity duration-300 hover:opacity-50">
                <a className={cn('flex gap-x-4', project.disabled && 'pointer-events-none')} href={project.url} target="_blank" rel="noopener noreferrer">
                  <p>
                    {project.name}
                    {project.disabled && <span className="ml-1 text-xs">🚧</span>}
                  </p>
                  <p>{project.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </SectionContent>
      </Section>
      {/* posts */}
      <Section>
        <SectionHeading>Posts</SectionHeading>
        <SectionContent asChild={true}>
          <ul className="space-y-2">
            {postsSortedByDate.map(post => (
              <li key={post.slug} className="w-max transition-opacity duration-300 hover:opacity-50">
                <Link className="flex gap-x-4" href={post.href}>
                  <time className="shrink-0 font-mono text-foreground/75" dateTime={post.date}>
                    {format(post.date, 'yyyy-MM-dd')}
                  </time>
                  <p>{post.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </SectionContent>
      </Section>
      <footer className="flex items-center gap-x-4">
        <p>{`© ${copyright.year} ${copyright.owner}`}</p>
        <a
          className="transition-opacity duration-300 hover:opacity-50"
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <ThemeSwitch />
      </footer>
    </main>
  )
}
