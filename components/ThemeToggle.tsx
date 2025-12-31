'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = stored ? stored === 'dark' : prefersDark;
      setIsDark(initial);
    } catch (_) {}
  }, []);

  useEffect(() => {
    document.body.classList.add('theme-transition');
    const timeout = setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 200);
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (_) {}
    return () => clearTimeout(timeout);
  }, [isDark]);

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setIsDark((v) => !v)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      <span className="sr-only">Toggle theme</span>
      <svg
        className="h-4 w-4 text-gray-600 dark:text-gray-300"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="dark:hidden"
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.95 4.95-1.414-1.414M7.464 7.464 6.05 6.05m11.314 0-1.414 1.414M7.464 16.536 6.05 17.95"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        />
        <path
          className="hidden dark:block"
          d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
