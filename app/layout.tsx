import '@/constants/globals.css';
import '@/constants/prism-plus.css';
import 'prism-theme-vars/base.css';
import 'prism-theme-vars/themes/vitesse-dark.css';

import {mono, sans} from '@/constants/fonts';
import config from '@/constants/site-config';
import {cn} from '@/utils/classnames';

export const metadata = {
  title: `${config.title} - @${config.author}`,
  description: config.description,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cn(sans.variable, mono.variable, 'font-sans')}>
        {children}
      </body>
    </html>
  );
}
