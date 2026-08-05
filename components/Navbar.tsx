'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-lg font-bold gradient-text font-display">
            Oussama
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {lang === 'ar' ? link.ar : link.en}
              </a>
            ))}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-600"
            >
              <Globe size={14} />
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-zinc-400 hover:text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {lang === 'ar' ? link.ar : link.en}
                </a>
              ))}
              <button
                onClick={() => { onToggleLang(); setMobileOpen(false); }}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
              >
                <Globe size={14} />
                {lang === 'ar' ? 'EN' : 'عربي'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
