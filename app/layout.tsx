import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Anas Khan — Associate SDE / Full Stack Developer',
  description: 'Clean, minimalist portfolio showcasing projects, skills, and experience.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Anas Khan — Full Stack Developer',
    description: 'Minimalist portfolio built with Next.js.',
    url: 'https://your-domain.com',
    siteName: 'Anas Khan Portfolio',
    type: 'website',
  },
  metadataBase: new URL('https://your-domain.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const stored = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = stored ? stored === 'dark' : prefersDark;
              document.documentElement.classList.toggle('dark', isDark);
            } catch (_) {}
          `}
        </Script>
      </head>
      <body className="min-h-dvh antialiased">
        {children}
      </body>
    </html>
  );
}
