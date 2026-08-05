'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { EnrichedProject } from '@/lib/github';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function AnimatedSection({ children, className = '', anim = 'fade-up', delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  anim?: string;
  delay?: number;
}) {
  const ref = useInView();
  return (
    <div ref={ref} className={`${anim} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

interface ClientPageProps {
  projects: EnrichedProject[];
}

export default function ClientPage({ projects }: ClientPageProps) {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <div className="bg-orbs">
        <span className="o1" />
        <span className="o2" />
        <span className="o3" />
      </div>
      <div className={`relative z-10 min-h-screen ${lang === 'ar' ? 'font-arabic' : 'font-latin'}`}>
        <Navbar lang={lang} onToggleLang={() => setLang(l => l === 'en' ? 'ar' : 'en')} />
        <Hero lang={lang} AnimatedSection={AnimatedSection} />
        <Projects lang={lang} projects={projects} AnimatedSection={AnimatedSection} />
        <Services lang={lang} AnimatedSection={AnimatedSection} />
        <About lang={lang} AnimatedSection={AnimatedSection} />
        <Contact lang={lang} AnimatedSection={AnimatedSection} />
        <Footer />
      </div>
    </>
  );
}
