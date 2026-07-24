'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Achievements', 'Experience', 'Contact'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-20 px-2 sm:px-0">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70" aria-label="Primary">
        <a
          href="#home"
          className="truncate text-base font-semibold tracking-tight text-[rgb(var(--color-text))] transition hover:text-[rgb(var(--color-accent))]"
          onClick={() => setIsMenuOpen(false)}
        >
          &lt; Anas Khan /&gt;
        </a>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-3 md:flex">
            {NAV_ITEMS.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-sm text-[rgb(var(--color-muted))] transition hover:text-[rgb(var(--color-text))]"
              >
                {label}
              </a>
            ))}
          </div>

          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="sr-only">Toggle navigation menu</span>
            {isMenuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`mx-auto mt-3 rounded-2xl border border-white/70 bg-white/80 p-3 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col gap-1">
          {NAV_ITEMS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="rounded-lg px-3 py-2 text-sm text-[rgb(var(--color-muted))] transition hover:bg-slate-100 hover:text-[rgb(var(--color-text))] dark:hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
