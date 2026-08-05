'use client';

import { Globe, Smartphone, Bot, Database, Stethoscope, BrainCircuit } from 'lucide-react';
import { services } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={22} />,
  Smartphone: <Smartphone size={22} />,
  Bot: <Bot size={22} />,
  Database: <Database size={22} />,
  Stethoscope: <Stethoscope size={22} />,
  'Brain-Circuit': <BrainCircuit size={22} />,
};

const serviceColors = ['#4f8eff', '#34d399', '#a78bfa', '#f59e0b', '#22d3ee', '#f472b6'];

interface ServicesProps {
  lang: 'en' | 'ar';
  AnimatedSection: React.ComponentType<{ children: React.ReactNode; className?: string; anim?: string; delay?: number }>;
}

export default function Services({ lang, AnimatedSection }: ServicesProps) {
  return (
    <section id="services" className="py-28 px-6" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">{lang === 'ar' ? 'خدماتي' : 'Services'}</span>
          </h2>
          <p className="text-[var(--text-dim)] max-w-xl mx-auto">
            {lang === 'ar' ? 'حلول تقنية متكاملة لاحتياجاتك' : 'Complete tech solutions for your needs'}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const color = serviceColors[i % serviceColors.length];
            return (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="rounded-xl p-6 h-full transition-all duration-300 group"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = color + '40';
                    e.currentTarget.style.boxShadow = `0 8px 30px ${color}10`;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.transform = '';
                  }}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
                    style={{ background: color + '15', color }}>
                    {iconMap[service.icon] || <Globe size={22} />}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {lang === 'ar' ? service.titleAr : service.titleEn}
                  </h3>
                  <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                    {lang === 'ar' ? service.descAr : service.descEn}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
