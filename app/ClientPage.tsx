'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { EnrichedProject } from '@/lib/github';

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
        <Hero lang={lang} />
        <Projects lang={lang} projects={projects} />
        <Services lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
        <Footer />
      </div>
    </>
  );
}
