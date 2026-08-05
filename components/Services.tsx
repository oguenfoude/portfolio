'use client';

import { Globe, Smartphone, Bot, Database, Stethoscope, BrainCircuit } from 'lucide-react';
import { services } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={24} />,
  Smartphone: <Smartphone size={24} />,
  Bot: <Bot size={24} />,
  Database: <Database size={24} />,
  Stethoscope: <Stethoscope size={24} />,
  'Brain-Circuit': <BrainCircuit size={24} />,
};

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
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="glass rounded-2xl p-7 h-full transition-all duration-300 group"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(79,142,255,0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.transform = '';
                }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: 'rgba(79,142,255,0.1)', color: 'var(--blue)' }}>
                  {iconMap[service.icon] || <Globe size={24} />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {lang === 'ar' ? service.titleAr : service.titleEn}
                </h3>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                  {lang === 'ar' ? service.descAr : service.descEn}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
