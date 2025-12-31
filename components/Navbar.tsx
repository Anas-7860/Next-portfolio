import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-[rgb(var(--color-base))]/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-3xl px-4 py-3 flex items-center gap-4" aria-label="Primary">
        <a href="#home" className="font-medium text-xl hover:text-[rgb(var(--color-accent))]">&lt; Anas Khan /&gt;</a>
        <div className="ml-auto flex items-center gap-3">
          {['About', 'Skills', 'Projects', 'Achievements', 'Experience', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-text))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
