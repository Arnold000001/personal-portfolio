'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { photos } from '@/config/photos';
import { Award } from 'lucide-react';

export default function Honors() {
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
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="honors"
      ref={ref}
      className="py-20 px-4 max-w-6xl mx-auto fade-in"
    >
      <h2 className="text-2xl font-bold font-mono mb-2">
        <span className="text-primary">#</span> 荣誉墙
      </h2>
      <div className="w-12 h-0.5 bg-primary/50 mt-1 mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.honors.map((honor, index) => (
          <div
            key={index}
            className="card-industrial rounded-lg overflow-hidden group"
          >
            <div className="relative aspect-square bg-bg-card">
              <Image
                src={honor.image}
                alt={honor.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
            </div>
            <div className="p-4">
              <div className="flex items-start gap-2">
                <Award size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white leading-tight">
                    {honor.title}
                  </p>
                  <p className="text-xs text-text-secondary font-mono mt-0.5">
                    {honor.year}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}