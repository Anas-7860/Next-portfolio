'use client';
import { useEffect, useRef, useState } from 'react';

type Variant = 'accent' | 'amber' | 'emerald' | 'violet' | 'sky';

export default function Highlight({
  children,
  variant = 'accent',
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current as Element | null;
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
    <span ref={ref} className={`hl hl-${variant} ${visible ? 'visible' : ''} ${className ?? ''}`}>{children}</span>
  );
}
