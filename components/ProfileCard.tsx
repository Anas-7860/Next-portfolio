'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ProfileCard({
  imageSrc = '/best-pro-pic.jpeg',
  leetcodeQuestions = 400,
  leetcodeUsername = 'voldemort_007',
}: {
  imageSrc?: string;
  leetcodeQuestions?: number;
  leetcodeUsername?: string;
}) {
  const [imgOk, setImgOk] = useState(true);
  const solvedCountLabel = leetcodeQuestions.toLocaleString();

  return (
    <aside className="relative w-full overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.18),transparent_40%)]" />
      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/70 bg-slate-100 p-[2px] shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:h-28 sm:w-28">
            <div className="relative h-full w-full overflow-hidden rounded-[14px]">
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
                <div className="grid h-full w-full place-items-center bg-slate-200 text-lg font-semibold dark:bg-slate-800">
                  AK
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[rgb(var(--color-accent))]">Software Engineer</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">Anas Khan</h2>
            <p className="mt-1 text-sm text-[rgb(var(--color-muted))]">
              Building fast, polished web experiences with modern tooling.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200">
            Ludhiana, India
          </span>
          <span className="rounded-full border border-emerald-200 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:text-emerald-300">
            Open to opportunities
          </span>
        </div>

        <div className="rounded-[20px] border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">LeetCode</p>
              <p className="mt-1 text-lg font-semibold text-[rgb(var(--color-text))]">{solvedCountLabel}+</p>
            </div>
            <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              questions solved
            </div>
          </div>
          <p className="mt-3 text-sm text-[rgb(var(--color-muted))]">LeetCode progress shown here.</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">@{leetcodeUsername}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <a href="mailto:anaskhan.cse4@gmail.com" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
            <MailIcon /> Email
          </a>
          <a href="https://github.com/Anas-7860" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
            <GitHubIcon /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/anas-khan-b6722424b/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="https://leetcode.com/u/voldemort_007/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
            <LeetCodeIcon /> LeetCode
          </a>
        </div>
      </div>
    </aside>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
