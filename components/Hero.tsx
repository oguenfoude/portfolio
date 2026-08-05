'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, MessageCircle, Code2, Palette, Zap } from 'lucide-react';
import { stats } from '@/data/content';

interface HeroProps {
  lang: 'en' | 'ar';
}

export default function Hero({ lang }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-mono text-blue-400 mb-4 tracking-widest uppercase flex items-center gap-2">
              <span className="w-8 h-px bg-blue-400" />
              {lang === 'ar' ? 'مطور ويب متكامل' : 'Full-Stack Developer'}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-6 leading-[1.1]"
          >
            <span className="gradient-text">
              {lang === 'ar' ? 'أبني تجارب' : 'I Build'}
            </span>
            <br />
            <span className="text-white">
              {lang === 'ar' ? 'رقمية مذهلة' : 'Digital Experiences'}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-zinc-400 max-w-lg mb-10 leading-relaxed"
          >
            {lang === 'ar'
              ? 'مطور ويب متكامل متخصص في بناء مواقع وتطبيقات وبوتات حديثة. خبرة في 30+ مشروع跨越 مجالات الرعاية الصحية والتجارة الإلكترونية.'
              : 'Full-stack developer specializing in modern websites, apps, and bots. 30+ projects across Healthcare, E-Commerce, and custom solutions.'
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              <Code2 size={18} />
              {lang === 'ar' ? 'مشاريعي' : 'View Projects'}
            </a>
            <a
              href="https://wa.me/213776863561"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-medium transition-all glow-whatsapp flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="https://github.com/oguenfoude"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 glass glass-hover text-zinc-300 hover:text-white rounded-xl font-medium transition-all flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold gradient-text font-display">{stat.value}</div>
                <div className="text-xs text-zinc-500 mt-1 font-mono">
                  {lang === 'ar' ? stat.ar : stat.labelEn}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:block perspective-1000"
        >
          <div className="transform-3d">
            <div className="glass p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-zinc-500 font-mono ml-auto">portfolio.tsx</span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="text-zinc-500">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span>{' '}
                  <span className="text-zinc-500">=</span>{' '}
                  <span className="text-emerald-400">{'{'}</span>
                </div>
                <div className="pl-6 text-zinc-400">
                  name: <span className="text-amber-300">&quot;Oussama&quot;</span>,
                </div>
                <div className="pl-6 text-zinc-400">
                  role: <span className="text-amber-300">&quot;Full-Stack Dev&quot;</span>,
                </div>
                <div className="pl-6 text-zinc-400">
                  skills: <span className="text-emerald-400">[</span>
                </div>
                <div className="pl-10 text-zinc-400">
                  <span className="text-amber-300">&quot;Next.js&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;React&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;TypeScript&quot;</span>,
                </div>
                <div className="pl-10 text-zinc-400">
                  <span className="text-amber-300">&quot;Python&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;C#&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Node.js&quot;</span>
                </div>
                <div className="pl-6 text-zinc-400">
                  <span className="text-emerald-400">]</span>,
                </div>
                <div className="pl-6 text-zinc-400">
                  projects: <span className="text-blue-400 font-bold">30</span>,
                </div>
                <div className="pl-6 text-zinc-400">
                  availability: <span className="text-emerald-400">true</span>
                </div>
                <div className="text-emerald-400">{'}'}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#projects" className="text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce inline-block">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
