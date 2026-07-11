'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { info } from '@/config/info';
import { photos } from '@/config/photos';

export default function About() {
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
      id="about"
      ref={ref}
      className="py-20 px-4 max-w-6xl mx-auto fade-in"
    >
      <h2 className="text-2xl font-bold font-mono mb-2">
        <span className="text-primary">#</span> 关于我
      </h2>
      <div className="w-12 h-0.5 bg-primary/50 mt-1 mb-10" />

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* 照片 */}
        <div className="flex-shrink-0 w-full md:w-56 lg:w-64 aspect-square rounded-lg overflow-hidden border border-primary/20">
          <Image
            src={photos.about}
            alt="关于我"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 文字 */}
        <div className="flex-1">
          <p className="text-text-secondary leading-relaxed text-base md:text-lg">
            {info.about}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {info.skills.slice(0, 6).map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-0.5 text-xs font-mono border border-primary/20 text-primary/80 rounded"
              >
                {skill}
              </span>
            ))}
            <span className="px-2.5 py-0.5 text-xs font-mono border border-primary/20 text-text-secondary rounded">
              +{info.skills.length - 6}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}