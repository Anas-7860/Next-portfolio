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
  imageSrc,
}: Project) {
  const colorMap: Record<string, string> = {
    // Languages
    'HTML': 'bg-orange-500/10 text-orange-700 border-orange-500/30',
    'CSS': 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    'JavaScript': 'bg-yellow-500/10 text-yellow-700 border-yellow-500/30',
    'TypeScript': 'bg-blue-600/10 text-blue-700 border-blue-600/30',
    'C/C++': 'bg-slate-500/10 text-slate-700 border-slate-500/30',
    'SQL': 'bg-teal-500/10 text-teal-700 border-teal-500/30',
    // Frameworks & Libraries
    'React': 'bg-cyan-500/10 text-cyan-700 border-cyan-500/30',
    'Next.js': 'bg-neutral-500/10 text-neutral-700 border-neutral-500/30',
    'Node.js': 'bg-green-500/10 text-green-700 border-green-500/30',
    'Express': 'bg-zinc-500/10 text-zinc-700 border-zinc-500/30',
    'Express.js': 'bg-zinc-500/10 text-zinc-700 border-zinc-500/30',
    'Tailwind': 'bg-sky-500/10 text-sky-700 border-sky-500/30',
    'Tailwind CSS': 'bg-sky-500/10 text-sky-700 border-sky-500/30',
    'Socket.IO': 'bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/30',
    // Databases & Tools
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
    <article className="group relative overflow-hidden rounded-xl border bg-[rgb(var(--color-base))] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-h-[260px]">
      {/* Hover Image */}
      {imageSrc && (
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <img
            src={imageSrc}
            alt={`${title} preview`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[rgb(var(--color-muted))] group-hover:text-gray-200 transition-colors">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech: string) => (
            <li
              key={tech}
              className={`text-[11px] rounded-full border px-2 py-0.5 transition ${colorMap[tech] ?? 'bg-gray-500/10 text-gray-700 border-gray-500/30'} group-hover:border-white/30 group-hover:text-white`}
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Links pinned to bottom */}
        <div className="mt-auto pt-4 flex items-center gap-6 text-sm">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-[rgb(var(--color-accent))] hover:underline"
          >
            GitHub <ArrowIcon />
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[rgb(var(--color-accent))] hover:underline"
            >
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
      <path
        d="M9 5h10v10M5 19 19 5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}