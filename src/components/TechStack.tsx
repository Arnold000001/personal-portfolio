'use client';

import { useEffect, useRef } from 'react';
import { info } from '@/config/info';

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="techstack"
      ref={ref}
      className="py-20 px-4 max-w-6xl mx-auto fade-in"
    >
      <h2 className="text-2xl font-bold font-mono mb-2">
        <span className="text-primary">#</span> 技术栈
      </h2>
      <div className="w-12 h-0.5 bg-primary/50 mt-1 mb-12" />

      <div className="flex flex-wrap justify-center gap-3">
        {info.skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2.5 text-sm font-mono border border-primary/20 text-text-secondary rounded-md hover:border-primary/60 hover:text-white hover:bg-primary/5 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}