import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Anas Khan — Associate SDE / Full Stack Developer',
  description: 'Modern portfolio showcasing projects, skills, and experience.',
  icons: { icon: '/code.png' },
  openGraph: {
    title: 'Anas Khan — Full Stack Developer',
    description: 'Modern portfolio built with Next.js and Tailwind CSS.',
    url: 'https://your-domain.com',
    siteName: 'Anas Khan Portfolio',
    type: 'website',
  },
  metadataBase: new URL('https://your-domain.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}>
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
