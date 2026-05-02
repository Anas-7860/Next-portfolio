'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Achievements', 'Experience', 'Contact'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b bg-[rgb(var(--color-base))]/85 backdrop-blur">
      <nav className="mx-auto max-w-3xl px-4 py-3" aria-label="Primary">
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="min-w-0 truncate font-medium text-lg sm:text-xl hover:text-[rgb(var(--color-accent))]"
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
                  className="text-sm text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-text))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]"
                >
                  {label}
                </a>
              ))}
            </div>

            <ThemeToggle />

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border md:hidden hover:bg-black/5 dark:hover:bg-white/10"
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
        </div>

        <div
          id="mobile-navigation"
          className={`mt-3 rounded-2xl border bg-[rgb(var(--color-base))] p-3 shadow-sm md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="rounded-lg px-3 py-2 text-sm text-[rgb(var(--color-muted))] hover:bg-black/5 hover:text-[rgb(var(--color-text))] dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
