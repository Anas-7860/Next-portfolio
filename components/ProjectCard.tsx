export type Project = {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageSrc?: string;
};

export default function ProjectCard({
  title,
  description,
  stack,
  githubUrl,
  liveUrl,
}: Project) {
  const colorMap: Record<string, string> = {
    'HTML': 'bg-orange-500/10 text-orange-700 border-orange-500/30',
    'CSS': 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    'JavaScript': 'bg-yellow-500/10 text-yellow-700 border-yellow-500/30',
    'TypeScript': 'bg-blue-600/10 text-blue-700 border-blue-600/30',
    'C/C++': 'bg-slate-500/10 text-slate-700 border-slate-500/30',
    'SQL': 'bg-teal-500/10 text-teal-700 border-teal-500/30',
    'React': 'bg-cyan-500/10 text-cyan-700 border-cyan-500/30',
    'Next.js': 'bg-neutral-500/10 text-neutral-700 border-neutral-500/30',
    'Node.js': 'bg-green-500/10 text-green-700 border-green-500/30',
    'Express': 'bg-zinc-500/10 text-zinc-700 border-zinc-500/30',
    'Express.js': 'bg-zinc-500/10 text-zinc-700 border-zinc-500/30',
    'Tailwind': 'bg-sky-500/10 text-sky-700 border-sky-500/30',
    'Tailwind CSS': 'bg-sky-500/10 text-sky-700 border-sky-500/30',
    'Socket.IO': 'bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/30',
    'MongoDB': 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
    'MySQL': 'bg-indigo-500/10 text-indigo-700 border-indigo-500/30',
    'Supabase': 'bg-emerald-600/10 text-emerald-700 border-emerald-600/30',
    'Git': 'bg-red-500/10 text-red-700 border-red-500/30',
    'VS Code': 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    'Postman': 'bg-orange-500/10 text-orange-700 border-orange-500/30',
    'Figma': 'bg-violet-500/10 text-violet-700 border-violet-500/30',
    'Clerk': 'bg-purple-500/10 text-purple-700 border-purple-500/30',
  };

  return (
    <article className="group flex min-h-[280px] flex-col justify-between rounded-[24px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--color-accent))]/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] dark:border-slate-800 dark:bg-slate-900/70">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
            Featured
          </span>
          <span className="text-xs text-[rgb(var(--color-muted))]">Portfolio Project</span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--color-muted))]">{description}</p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech: string) => (
            <span
              key={tech}
              className={`rounded-full border px-2.5 py-1 text-[11px] ${colorMap[tech] ?? 'bg-slate-500/10 text-slate-700 border-slate-500/30'}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-[rgb(var(--color-accent))] transition hover:underline">
            GitHub <ArrowIcon />
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-slate-700 transition hover:underline dark:text-slate-200">
              Live <ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M9 5h10v10M5 19 19 5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}