'use client';

import { MapPin, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { skills } from '@/data/content';

interface AboutProps {
  lang: 'en' | 'ar';
}

export default function About({ lang }: AboutProps) {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">{lang === 'ar' ? 'عني' : 'About Me'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="animate-fade-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">Guendoude Oussama</h3>
              <p className="text-[var(--text-dim)] leading-relaxed">
                {lang === 'ar'
                  ? 'مطور ويب متكامل بخبرة واسعة في بناء تطبيقات الويب الحديثة والمنصات SaaS والبوتات. متخصص في Next.js, React, TypeScript, وPython. عملت على 30+ مشروع.'
                  : 'Full-stack web developer with extensive experience building modern web applications, SaaS platforms, and bots. Specialized in Next.js, React, TypeScript, and Python. Worked on 30+ projects across Healthcare, E-Commerce, and Automation domains.'
                }
              </p>
              <p className="text-[var(--text-dim)] leading-relaxed">
                {lang === 'ar'
                  ? 'أقدم خدمات تطوير الويب الاحترافية مع تصميم عصري وأداء عالي.'
                  : 'I deliver professional web development services with modern design and high performance. Bilingual support (Arabic/English) and exceptional user experience.'
                }
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:oguenfoude@gmail.com"
                  className="flex items-center gap-2 text-sm text-[var(--text-dim)] hover:text-white transition-colors">
                  <Mail size={16} /> oguenfoude@gmail.com
                </a>
                <a href="https://wa.me/213776863561" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--whatsapp)] hover:opacity-80 transition-opacity">
                  <MessageCircle size={16} /> +213 776 863 561
                </a>
                <span className="flex items-center gap-2 text-sm text-[var(--text-dim)]">
                  <MapPin size={16} /> {lang === 'ar' ? 'الجزائر' : 'Algeria'}
                </span>
                <a href="https://github.com/oguenfoude" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--text-dim)] hover:text-white transition-colors">
                  <ExternalLink size={16} /> github.com/oguenfoude
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-right" style={{ animationDelay: '100ms' }}>
            <div>
              <h4 className="text-sm font-mono text-[var(--text-muted)] mb-5 tracking-[0.2em] uppercase">
                {lang === 'ar' ? 'المهارات' : 'Tech Stack'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill}
                    className="px-3 py-1.5 text-sm font-mono rounded-lg transition-all duration-200 cursor-default"
                    style={{ background: 'var(--surface)', color: 'var(--text-dim)', border: '1px solid var(--border)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(79,142,255,0.4)';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.color = '';
                    }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
