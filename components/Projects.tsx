'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { categories } from '@/data/content';
import type { EnrichedProject } from '@/lib/github';

interface ProjectsProps {
  lang: 'en' | 'ar';
  projects: EnrichedProject[];
}

const categoryIcons: Record<string, string> = {
  all: '✦',
  barber: '💈',
  dental: '🦷',
  healthcare: '🏥',
  ecommerce: '🛒',
  bots: '🤖',
  apps: '📱',
  other: '📦',
};

export default function Projects({ lang, projects }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory, projects]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [projects]);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">{lang === 'ar' ? 'مشاريعي' : 'My Projects'}</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            {lang === 'ar'
              ? `${projects.length} مشروع跨越 مختلف المجالات والتقنيات`
              : `${projects.length} projects across various domains and technologies`
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {categoryIcons[key]} {lang === 'ar' ? label.ar : label.en}
              <span className="ml-1.5 text-xs opacity-60">({categoryCounts[key] || 0})</span>
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative glass glass-hover rounded-2xl p-6 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs font-mono text-blue-400 mb-1 block">
                    {lang === 'ar' ? project.categoryAr : project.categoryEn}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {lang === 'ar' ? project.titleAr : project.titleEn}
                  </h3>
                </div>
                {project.stars > 0 && (
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Star size={12} />
                    {project.stars}
                  </div>
                )}
              </div>

              <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                {lang === 'ar' ? project.descAr : project.descEn}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 4).map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono bg-zinc-800 text-zinc-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-0.5 text-xs text-zinc-500">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={14} />
                    {lang === 'ar' ? 'معاينة' : 'Live Demo'}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
