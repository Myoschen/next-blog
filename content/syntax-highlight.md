---
title: Syntax Highlight
description: This is a demo of Syntax Highlight.
date: 2023-07-29
---

## H2 title

```tsx showLineNumbers {5,15-17}
import '@/styles/globals.css';

import type {AppProps} from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from 'next-themes';

import LayoutWrapper from '@/components/LayoutWrapper';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
```
