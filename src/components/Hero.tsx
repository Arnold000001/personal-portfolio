'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { info } from '@/config/info';
import { photos } from '@/config/photos';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 grid-bg overflow-hidden"
    >
      {/* 斜线装饰 */}
      <div className="absolute inset-0 slash-decoration pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* 头像 - 圆形 */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_rgba(74,158,255,0.15)]">
              <Image
                src={photos.avatar}
                alt={info.name}
                width={208}
                height={208}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {info.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-mono mt-2">
              {info.title}
            </p>

            {/* 标签 */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              {info.subtitle.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono border border-primary/30 text-text-secondary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-mono text-sm"
              >
                查看项目
                <ChevronDown
                  size={18}
                  className="animate-bounce"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}