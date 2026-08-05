'use client';

import { ArrowDown, MessageCircle, Github, Code2 } from 'lucide-react';
import { stats } from '@/data/content';

interface HeroProps {
  lang: 'en' | 'ar';
  AnimatedSection: React.ComponentType<{ children: React.ReactNode; className?: string; anim?: string; delay?: number }>;
}

export default function Hero({ lang, AnimatedSection }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <AnimatedSection anim="fade-up" delay={100}>
              <p className="text-sm font-mono text-[var(--blue)] mb-5 tracking-[0.2em] uppercase flex items-center gap-3">
                <span className="w-10 h-px bg-[var(--blue)]" />
                {lang === 'ar' ? 'مطور ويب متكامل' : 'Full-Stack Developer'}
              </p>
            </AnimatedSection>

            <AnimatedSection anim="fade-up" delay={200}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.08] mb-6">
                <span className="gradient-text">{lang === 'ar' ? 'أبني تجارب' : 'I Build'}</span>
                <br />
                <span className="text-white">{lang === 'ar' ? 'رقمية مذهلة' : 'Digital Experiences'}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection anim="fade-up" delay={300}>
              <p className="text-lg text-[var(--text-dim)] max-w-lg mb-10 leading-relaxed">
                {lang === 'ar'
                  ? 'مطور ويب متكامل متخصص في بناء مواقع وتطبيقات وبوتات حديثة. خبرة في 30+ مشروع.'
                  : 'Full-stack developer specializing in modern websites, apps, and bots. 30+ projects across Healthcare, E-Commerce, and custom solutions.'
                }
              </p>
            </AnimatedSection>

            <AnimatedSection anim="fade-up" delay={400}>
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white transition-all duration-300"
                  style={{ background: 'var(--blue)' }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.15)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = '')}>
                  <Code2 size={18} />
                  {lang === 'ar' ? 'مشاريعي' : 'View Projects'}
                </a>
                <a href="https://wa.me/213776863561" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white transition-all duration-300"
                  style={{ background: 'var(--whatsapp)', boxShadow: '0 0 30px rgba(37,211,102,0.2)' }}>
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a href="https://github.com/oguenfoude" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium glass text-[var(--text-dim)] hover:text-white transition-all duration-300">
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection anim="fade-up" delay={500}>
              <div className="grid grid-cols-4 gap-6 max-w-md">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="stat-value gradient-text">{stat.value}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                      {lang === 'ar' ? stat.ar : stat.labelEn}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Code Card */}
          <div className="hero-code hidden lg:block">
            <AnimatedSection anim="fade-right" delay={400}>
              <div className="code-card" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                <div className="titlebar">
                  <div className="dot r" />
                  <div className="dot y" />
                  <div className="dot g" />
                  <span className="text-xs text-[var(--text-muted)] font-mono ml-auto">portfolio.tsx</span>
                </div>
                <pre>
                  <code>
                    <span style={{color:'var(--violet)'}}>const</span>{' '}
                    <span style={{color:'var(--blue)'}}>developer</span>{' '}
                    <span style={{color:'var(--text-muted)'}}>=</span>{' '}
                    <span style={{color:'var(--emerald)'}}>{'{'}</span>{'\n'}
                    {'  '}name: <span style={{color:'#fbbf24'}}>&quot;Oussama&quot;</span>,{'\n'}
                    {'  '}role: <span style={{color:'#fbbf24'}}>&quot;Full-Stack Dev&quot;</span>,{'\n'}
                    {'  '}skills: <span style={{color:'var(--emerald)'}}>[</span>{'\n'}
                    {'    '}<span style={{color:'#fbbf24'}}>&quot;Next.js&quot;</span>,{' '}
                    <span style={{color:'#fbbf24'}}>&quot;React&quot;</span>,{' '}
                    <span style={{color:'#fbbf24'}}>&quot;TypeScript&quot;</span>,{'\n'}
                    {'    '}<span style={{color:'#fbbf24'}}>&quot;Python&quot;</span>,{' '}
                    <span style={{color:'#fbbf24'}}>&quot;C#&quot;</span>,{' '}
                    <span style={{color:'#fbbf24'}}>&quot;Node.js&quot;</span>{'\n'}
                    {'  '}<span style={{color:'var(--emerald)'}}>,</span>{'\n'}
                    {'  '}projects: <span style={{color:'var(--blue)', fontWeight:700}}>30</span>,{'\n'}
                    {'  '}availability: <span style={{color:'var(--emerald)'}}>true</span>{'\n'}
                    <span style={{color:'var(--emerald)'}}>{'}'}</span>
                  </code>
                </pre>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <a href="#projects"
        className="absolute bottom-8 left-1/2 bounce-arrow text-[var(--text-muted)] hover:text-[var(--text-dim)] transition-colors">
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
