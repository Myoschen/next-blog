import '@/constants/globals.css';

import {mono, sans} from '@/constants/fonts';
import config from '@/constants/site-config';
import {cn} from '@/utils/classnames';
import Layout from '@/components/layout';
import Providers from '@/components/providers';

export const metadata = {
  title: `${config.title} - @${config.author}`,
  description: config.description,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          sans.variable,
          mono.variable,
          'bg-gray-50 bg-grainy font-sans text-zinc-900 bg-blend-soft-light transition-colors dark:bg-zinc-900 dark:text-gray-50',
        )}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
