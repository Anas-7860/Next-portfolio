export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border shadow-subtle p-8 bg-[rgb(var(--color-base))] text-slate-900 dark:text-slate-100 ${className ?? ''}`}>
      {children}
    </div>
  );
}
