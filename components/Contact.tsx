'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Github, ArrowRight } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'ar';
}

export default function Contact({ lang }: ContactProps) {
  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">
              {lang === 'ar' ? 'لنتحدث' : "Let's Talk"}
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-12">
            {lang === 'ar'
              ? 'هل لديك مشروع في ذهنك؟ تواصل معي وسأساعدك في تحويله إلى واقع.'
              : 'Have a project in mind? Get in touch and I\'ll help bring it to life.'
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          <a
            href="https://wa.me/213776863561?text=Hi%20Oussama!%20I%27m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-8 glass glass-hover rounded-2xl transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
              <MessageCircle size={28} />
            </div>
            <span className="text-lg font-semibold text-white">WhatsApp</span>
            <span className="text-sm text-zinc-400">+213 776 863 561</span>
          </a>

          <a
            href="mailto:oguenfoude@gmail.com"
            className="flex flex-col items-center gap-3 p-8 glass glass-hover rounded-2xl transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <span className="text-lg font-semibold text-white">Email</span>
            <span className="text-sm text-zinc-400">oguenfoude@gmail.com</span>
          </a>

          <a
            href="https://github.com/oguenfoude"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-8 glass glass-hover rounded-2xl transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-zinc-700/50 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform">
              <Github size={28} />
            </div>
            <span className="text-lg font-semibold text-white">GitHub</span>
            <span className="text-sm text-zinc-400">@oguenfoude</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://wa.me/213776863561?text=Hi%20Oussama!%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#25D366]/25"
          >
            {lang === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project'}
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
