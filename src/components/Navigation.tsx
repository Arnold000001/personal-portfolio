'use client';

import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { info } from '@/config/info';

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '项目经历', href: '#experience' },
  { label: '技术栈', href: '#techstack' },
  { label: '荣誉墙', href: '#honors' },
  { label: '联系方式', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl font-bold tracking-tight font-mono text-white hover:text-primary transition-colors"
          >
            {info.name.split('')[0]}
            <span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-primary pb-0.5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={info.resumeUrl}
              download
              className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white border border-primary rounded hover:bg-primary/10 transition-all duration-200"
            >
              <Download size={16} />
              简历下载
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-primary/10">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-text-secondary hover:text-white transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href={info.resumeUrl}
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border border-primary rounded hover:bg-primary/10 transition-all w-fit"
            >
              <Download size={16} />
              简历下载
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}