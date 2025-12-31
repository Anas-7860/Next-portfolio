export default function Loading() {
  return (
    <div className="min-h-screen grid place-items-center bg-[rgb(var(--color-base))]">
      <div className="w-[min(90vw,560px)] rounded-xl border bg-[rgb(var(--color-base))] p-6 shadow-subtle">
        <div className="flex items-center gap-3">
          <span
            className="h-5 w-5 animate-spin rounded-full border-2 border-[rgb(var(--color-accent))] border-t-transparent"
            aria-hidden="true"
          />
          <h2 className="font-mono text-sm">booting portfolio...</h2>
        </div>

        <div className="mt-4 space-y-1 font-mono text-xs text-[rgb(var(--color-muted))]">
          <p>&gt; init: loading modules</p>
          <p>&gt; link: fetching assets</p>
          <p>&gt; build: compiling UI</p>
          <p>&gt; ready: warming up</p>
        </div>

        <div className="mt-4 font-mono text-xs text-[rgb(var(--color-muted))]">
          [██████░░░░░░░░]
        </div>

        <div className="mt-6 flex items-center gap-2 text-[10px] text-[rgb(var(--color-muted))]">
          <span className="inline-block h-2 w-2 rounded-full bg-[rgb(var(--color-accent))] animate-pulse" aria-hidden="true" />
          <span>stand by — initializing</span>
        </div>
      </div>
    </div>
  );
}
