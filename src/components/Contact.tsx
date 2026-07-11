'use client';

import { useEffect, useRef } from 'react';
import { Mail, Download } from 'lucide-react';
import { info } from '@/config/info';

// 动态导入 lucide 图标
const iconMap: Record<string, any> = {};

export default function Contact() {
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
      id="contact"
      ref={ref}
      className="py-20 px-4 max-w-6xl mx-auto fade-in"
    >
      <h2 className="text-2xl font-bold font-mono mb-2">
        <span className="text-primary">#</span> 联系方式
      </h2>
      <div className="w-12 h-0.5 bg-primary/50 mt-1 mb-12" />

      <div className="flex flex-col items-center gap-8">
        {/* 邮箱 */}
        <a
          href={`mailto:${info.email}`}
          className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors text-lg"
        >
          <Mail size={20} />
          {info.email}
        </a>

        {/* 社交链接 */}
        <div className="flex gap-6">
          {info.socials.map((social) => {
            // 动态加载图标
            let IconComponent = null;
            try {
              // eslint-disable-next-line @typescript-eslint/no-var-requires
              const lucide = require('lucide-react');
              IconComponent = lucide[social.icon];
            } catch {
              // fallback
            }
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label={social.name}
              >
                {IconComponent ? (
                  <IconComponent size={24} />
                ) : (
                  <span className="text-sm font-mono">{social.name}</span>
                )}
              </a>
            );
          })}
        </div>

        {/* 简历下载按钮 */}
        <a
          href={info.resumeUrl}
          download
          className="inline-flex items-center gap-2.5 px-8 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md transition-all duration-200 shadow-[0_0_30px_rgba(74,158,255,0.2)] hover:shadow-[0_0_40px_rgba(74,158,255,0.35)]"
        >
          <Download size={18} />
          下载简历 (PDF)
        </a>
      </div>
    </section>
  );
}