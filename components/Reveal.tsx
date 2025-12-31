'use client';
import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, as: Tag = 'div', className }: { children: React.ReactNode; as?: keyof JSX.IntrinsicElements; className?: string }) {
  const ref = useRef<HTMLElement | null>(null);
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
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className ?? ''}`}>
      {children}
    </Tag>
  );
}
