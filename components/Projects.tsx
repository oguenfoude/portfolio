'use client';

import { useState, useMemo } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { categories } from '@/data/content';
import type { EnrichedProject } from '@/lib/github';

interface ProjectsProps {
  lang: 'en' | 'ar';
  projects: EnrichedProject[];
  AnimatedSection: React.ComponentType<{ children: React.ReactNode; className?: string; anim?: string; delay?: number }>;
}

const categoryIcons: Record<string, string> = {
  all: '✦', barber: '💈', dental: '🦷', healthcare: '🏥',
  ecommerce: '🛒', bots: '🤖', apps: '📱', other: '📦',
};

export default function Projects({ lang, projects, AnimatedSection }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory, projects]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: projects.length };
    projects.forEach(p => { c[p.category] = (c[p.category] || 0) + 1; });
    return c;
  }, [projects]);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">{lang === 'ar' ? 'مشاريعي' : 'My Projects'}</span>
          </h2>
          <p className="text-[var(--text-dim)] max-w-xl mx-auto">
            {lang === 'ar' ? `${projects.length} مشروع跨越 مختلف المجالات` : `${projects.length} projects across various domains and technologies`}
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-14" delay={100}>
          {Object.entries(categories).map(([key, label]) => (
            <button key={key} onClick={() => setActiveCategory(key)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: activeCategory === key ? 'var(--blue)' : 'var(--surface)',
                color: activeCategory === key ? '#fff' : 'var(--text-dim)',
                border: `1px solid ${activeCategory === key ? 'var(--blue)' : 'var(--border)'}`,
                boxShadow: activeCategory === key ? '0 4px 20px rgba(79,142,255,0.25)' : 'none',
              }}>
              {categoryIcons[key]} {lang === 'ar' ? label.ar : label.en}
              <span className="ml-1.5 text-xs opacity-60">({counts[key] || 0})</span>
            </button>
          ))}
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.name} delay={i * 40}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col transition-all duration-300"
                style={{ minHeight: 260 }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(79,142,255,0.3)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-[var(--blue)] mb-1 block">
                      {lang === 'ar' ? project.categoryAr : project.categoryEn}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {lang === 'ar' ? project.titleAr : project.titleEn}
                    </h3>
                  </div>
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <Star size={12} /> {project.stars}
                    </div>
                  )}
                </div>

                <p className="text-sm text-[var(--text-dim)] mb-4 line-clamp-2 flex-1">
                  {lang === 'ar' ? project.descAr : project.descEn}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2 py-0.5 text-xs font-mono rounded-md"
                      style={{ background: 'var(--surface)', color: 'var(--text-dim)', border: '1px solid var(--border)' }}>
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 text-xs text-[var(--text-muted)]">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[var(--text-dim)] hover:text-white transition-colors">
                    <Github size={14} /> Code
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[var(--blue)] hover:opacity-80 transition-opacity">
                      <ExternalLink size={14} />
                      {lang === 'ar' ? 'معاينة' : 'Live Demo'}
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
