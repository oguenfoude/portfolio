'use client';

import { motion } from 'framer-motion';
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
}

export default function Services({ lang }: ServicesProps) {
  return (
    <section id="services" className="py-24 px-4 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">{lang === 'ar' ? 'خدماتي' : 'Services'}</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            {lang === 'ar'
              ? 'حلول تقنية متكاملة لاحتياجاتك'
              : 'Complete tech solutions for your needs'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
                {iconMap[service.icon] || <Globe size={24} />}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {lang === 'ar' ? service.titleAr : service.titleEn}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {lang === 'ar' ? service.descAr : service.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
