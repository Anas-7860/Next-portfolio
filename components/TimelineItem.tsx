export default function TimelineItem({
  title,
  org,
  period,
  detail,
}: {
  title: string;
  org: string;
  period: string;
  detail: string;
}) {
  return (
    <div className="relative pl-6">
      <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[rgb(var(--color-accent))]" />
      <div className="flex items-baseline justify-between">
        <h3 className="text-sm font-medium">{title} — {org}</h3>
        <span className="text-xs text-[rgb(var(--color-muted))]">{period}</span>
      </div>
      <p className="mt-1 text-sm text-[rgb(var(--color-muted))]">{detail}</p>
    </div>
  );
}
