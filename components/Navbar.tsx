'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'ar';
  onToggleLang: () => void;
}

const navLinks = [
  { href: '#projects', en: 'Projects', ar: 'المشاريع' },
  { href: '#services', en: 'Services', ar: 'الخدمات' },
  { href: '#about', en: 'About', ar: 'عني' },
  { href: '#contact', en: 'Contact', ar: 'تواصل' },
];

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-4'
    }`} style={{
      background: scrolled ? 'rgba(6,6,14,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
    }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text font-display tracking-tight">
          Oussama
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              className="text-sm text-[var(--text-dim)] hover:text-white transition-colors duration-200">
              {lang === 'ar' ? link.ar : link.en}
            </a>
          ))}
          <button onClick={onToggleLang}
            className="flex items-center gap-1.5 text-sm text-[var(--text-dim)] hover:text-white transition-colors px-3 py-1.5 rounded-lg glass">
            <Globe size={14} />
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[var(--text-dim)]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ background: 'rgba(6,6,14,0.95)', backdropFilter: 'blur(20px)' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className="text-[var(--text-dim)] hover:text-white transition-colors">
              {lang === 'ar' ? link.ar : link.en}
            </a>
          ))}
          <button onClick={() => { onToggleLang(); setMobileOpen(false); }}
            className="flex items-center gap-1.5 text-[var(--text-dim)] hover:text-white transition-colors">
            <Globe size={14} />
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
        </div>
      )}
    </nav>
  );
}
