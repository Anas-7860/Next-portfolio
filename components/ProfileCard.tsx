'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function ProfileCard({
  imageSrc = '/best-pro-pic.jpeg',
}: {
  imageSrc?: string;
}) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <aside className="relative w-full rounded-2xl border bg-[rgb(var(--color-base))] p-8 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      {/* Accent line */}
      <span className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-transparent via-[rgb(var(--color-accent))]/50 to-transparent" />
      {/* Main row */}
      <div className="flex gap-8">
        {/* Image */}
        <div className="relative h-44 w-44 md:h-52 md:w-52 shrink-0 rounded-2xl p-[3px] bg-gradient-to-br from-[rgb(var(--color-accent))]/50 to-transparent">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            {imgOk ? (
              <Image
                src={imageSrc}
                alt="Portrait of Anas Khan"
                fill
                className="object-cover"
                onError={() => setImgOk(false)}
                priority
              />
            ) : (
              <div className="grid h-full w-full place-items-center bg-gray-200 dark:bg-gray-800">
                <span className="text-xl font-semibold">AK</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold tracking-tight">Anas Khan</h2>

          <p className="mt-1 text-sm text-[rgb(var(--color-muted))]">
           Web Developer<span className='text-red-500'></span>
          </p>
{/* 
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[rgb(var(--color-muted))]">
            I build clean, reliable systems with thoughtful UX and strong engineering fundamentals.
          </p> */}

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border px-3 py-0.5 text-[11px]">
              Ludhiana, In
            </span>
            <span className="rounded-full border px-3 py-0.5 text-[11px]">
              Open to roles
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 grid grid-cols-2 gap-3 border-t pt-6">
        <a
          href="mailto:anaskhan9501499079@gmail.com"
          className="flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          <MailIcon /> Email
        </a>

        <a
          href="https://github.com/Anas-7860"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          <GitHubIcon /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/anas-khan-b6722424b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          <LinkedInIcon /> LinkedIn
        </a>

        <a
          href="https://leetcode.com/u/voldemort_007/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          <LeetCodeIcon /> LeetCode
        </a>
      </div>
    </aside>
  );
}

/* Icons unchanged */
function MailIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.29 1.23a11.5 11.5 0 0 1 5.99 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.27c0 .31.22.68.83.57A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h4v12H3v-12Zm7 0h3.8v1.64h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07v6.31h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.46-2.17 2.96v5.7h-4v-12Z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 7l-5 5 5 5" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
