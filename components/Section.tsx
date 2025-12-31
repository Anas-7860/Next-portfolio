'use client';
import { useEffect, useRef, useState } from 'react';

export default function Section({
  id,
  children,
  className,
  ariaLabel,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(node);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      aria-label={ariaLabel}
      className={`reveal ${visible ? 'visible' : ''} ${className ?? ''}`}
    >
      {children}
    </section>
  );
}
