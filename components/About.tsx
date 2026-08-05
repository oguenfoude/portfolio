'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { skills } from '@/data/content';

interface AboutProps {
  lang: 'en' | 'ar';
}

export default function About({ lang }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">{lang === 'ar' ? 'عني' : 'About Me'}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white font-display">
              {lang === 'ar' ? 'Guendoude Oussama' : 'Guendoude Oussama'}
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {lang === 'ar'
                ? 'مطور ويب متكامل بخبرة واسعة في بناء تطبيقات الويب الحديثة والمنصات SaaS والبوتات. متخصص في Next.js, React, TypeScript, وPython. عملت على 30+ مشروع跨越 مجالات الرعاية الصحية والتجارة الإلكترونية والأتمتة.'
                : 'Full-stack web developer with extensive experience building modern web applications, SaaS platforms, and bots. Specialized in Next.js, React, TypeScript, and Python. Worked on 30+ projects across Healthcare, E-Commerce, and Automation domains.'
              }
            </p>
            <p className="text-zinc-400 leading-relaxed">
              {lang === 'ar'
                ? 'أقدم خدمات تطوير الويب الاحترافية مع تصميم عصري وأداء عالي. دعم ثنائي اللغة (عربي/إنجليزي) وتجربة مستخدم مميزة.'
                : 'I deliver professional web development services with modern design and high performance. Bilingual support (Arabic/English) and exceptional user experience.'
              }
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:oguenfoude@gmail.com"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
                oguenfoude@gmail.com
              </a>
              <a
                href="https://wa.me/213776863561"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#25D366] hover:text-[#20bd5a] transition-colors"
              >
                <MessageCircle size={16} />
                +213 776 863 561
              </a>
              <span className="flex items-center gap-2 text-sm text-zinc-400">
                <MapPin size={16} />
                {lang === 'ar' ? 'الجزائر' : 'Algeria'}
              </span>
              <a
                href="https://github.com/oguenfoude"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
                github.com/oguenfoude
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-mono text-zinc-500 mb-4 tracking-widest uppercase">
              {lang === 'ar' ? 'المهارات' : 'Tech Stack'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-mono bg-zinc-900 text-zinc-300 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
