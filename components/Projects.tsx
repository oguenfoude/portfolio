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

const categoryColors: Record<string, string> = {
  barber: '#4f8eff',
  dental: '#34d399',
  healthcare: '#a78bfa',
  ecommerce: '#f59e0b',
  bots: '#22d3ee',
  apps: '#f472b6',
  other: '#6b7280',
};

const categoryIcons: Record<string, string> = {
  all: '✦', barber: '💈', dental: '🦷', healthcare: '🏥',
  ecommerce: '🛒', bots: '🤖', apps: '📱', other: '📦',
};

function LanguageBadge({ lang }: { lang: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    TypeScript: { bg: 'rgba(49,120,198,0.15)', text: '#5b9bd5' },
    Python: { bg: 'rgba(53,114,165,0.15)', text: '#7eb8da' },
    'C#': { bg: 'rgba(104,33,122,0.15)', text: '#c084fc' },
    JavaScript: { bg: 'rgba(247,223,30,0.15)', text: '#f7df1e' },
  };
  const c = colors[lang] || { bg: 'rgba(255,255,255,0.06)', text: '#888' };
  return (
    <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded"
      style={{ background: c.bg, color: c.text }}>
      {lang}
    </span>
  );
}

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
          {filtered.map((project, i) => {
            const accent = categoryColors[project.category] || '#6b7280';
            return (
              <AnimatedSection key={project.name} delay={i * 40}>
                <a href={project.demoUrl || project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="block rounded-xl overflow-hidden transition-all duration-300 group"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = accent + '40';
                    e.currentTarget.style.boxShadow = `0 8px 30px ${accent}15`;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.transform = '';
                  }}>
                  {/* Accent bar */}
                  <div className="h-1" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}60)` }} />

                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: accent }} />
                          <span className="text-xs font-medium truncate" style={{ color: accent }}>
                            {lang === 'ar' ? project.categoryAr : project.categoryEn}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-white truncate group-hover:text-white/90">
                          {lang === 'ar' ? project.titleAr : project.titleEn}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                        <LanguageBadge lang={project.language} />
                        {project.stars > 0 && (
                          <span className="flex items-center gap-0.5 text-xs text-amber-400">
                            <Star size={10} fill="currentColor" /> {project.stars}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-dim)] mb-4 leading-relaxed" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {lang === 'ar' ? project.descAr : project.descEn}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map(tech => (
                        <span key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded-md"
                          style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-dim)' }}>
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 text-[11px] text-[var(--text-muted)]">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer links */}
                    <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] group-hover:text-[var(--text-dim)] transition-colors">
                        <Github size={12} /> Code
                      </span>
                      {project.demoUrl && (
                        <span className="flex items-center gap-1.5 text-xs transition-colors"
                          style={{ color: accent }}>
                          <ExternalLink size={12} />
                          {lang === 'ar' ? 'معاينة' : 'Live Demo'}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
