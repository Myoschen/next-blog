'use client';

import {ReactNode} from 'react';
import {ThemeProvider} from 'next-themes';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({children}: ProvidersProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
