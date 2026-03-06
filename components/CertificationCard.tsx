export type Certification = {
  title: string;
  org: string;
  detail?: string;
  href?: string;
  brand?: "freecodecamp" | "coursera" | "metacrafters";
};

function brandStyles(brand?: "freecodecamp" | "coursera" | "metacrafters") {
  switch (brand) {
    case "freecodecamp":
      return {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-700",
        label: "fcc",
        logoSrc: "/fcc.jpeg",
      };
    case "coursera":
      return {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        text: "text-blue-700",
        label: "C",
        logoSrc: "/coursera.png",
      };
    case "metacrafters":
      return {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        text: "text-purple-700",
        label: "M",
        logoSrc: "/metacrafters.jpeg",
      };
    default:
      return {
        bg: "bg-gray-500/10",
        border: "border-gray-500/30",
        text: "text-gray-700",
        label: "•",
      };
  }
}

export default function CertificationCard({ title, org, detail, href, brand }: Certification) {
  const styles = brandStyles(brand);
  return (
    <article className="rounded-lg border bg-[rgb(var(--color-base))] p-6 transition hover:-translate-y-0.5 hover:shadow-md" aria-label={`${title} — ${org}`}>
      <div className="flex items-start gap-3">
        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold ${styles.bg} ${styles.border} ${styles.text}`}>
          {"logoSrc" in styles && styles.logoSrc ? (
            <img
              src={styles.logoSrc}
              alt={`${org} logo`}
              className="h-6 w-6 rounded-full object-cover"
            />
          ) : (
            styles.label
          )}
        </span>
        <div className="flex-1">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-[rgb(var(--color-muted))]">{org}</p>
          {detail && (
            <p className="mt-2 text-sm text-[rgb(var(--color-muted))]">{detail}</p>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-[rgb(var(--color-accent))] hover:underline"
              aria-label={`View credential: ${title}`}
            >
              View credential
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
