'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, MessageCircle } from 'lucide-react';
import { stats } from '@/data/content';

interface HeroProps {
  lang: 'en' | 'ar';
}

export default function Hero({ lang }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm font-mono text-zinc-500 mb-4 tracking-widest uppercase">
            {lang === 'ar' ? 'مطور ويب متكامل' : 'Full-Stack Developer'}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
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
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {lang === 'ar'
            ? 'مطور ويب متكامل متخصص في بناء مواقع وتطبيقات وبوتات حديثة. خبرة في 30+ مشروع跨越 Healthcare, E-Commerce, و Solutions مخصصة.'
            : 'Full-stack developer specializing in modern websites, apps, and bots. 30+ projects across Healthcare, E-Commerce, and custom solutions.'
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            {lang === 'ar' ? 'مشاريعي' : 'View Projects'}
          </a>
          <a
            href="https://wa.me/213776863561"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-[#25D366]/25 flex items-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a
            href="https://github.com/oguenfoude"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-xl font-medium transition-all flex items-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold gradient-text font-display">{stat.value}</div>
              <div className="text-sm text-zinc-500 mt-1">
                {lang === 'ar' ? stat.ar : stat.labelEn}
              </div>
            </div>
          ))}
        </motion.div>

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
      </div>
    </section>
  );
}
