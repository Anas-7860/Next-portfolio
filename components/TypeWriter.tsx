'use client';
import { useEffect, useState } from 'react';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'MERN & Next.js Engineer',
  'Problem Solver',
];

export default function Typewriter() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60); // typing speed
      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setText('');
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1500); // pause before next role

    return () => clearTimeout(pause);
  }, [charIndex, roleIndex]);

  return (
    <span className="text-[rgb(var(--color-accent))] font-medium">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
