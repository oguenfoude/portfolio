'use client';

import { MessageCircle, Mail, Github, ArrowRight } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'ar';
  AnimatedSection: React.ComponentType<{ children: React.ReactNode; className?: string; anim?: string; delay?: number }>;
}

export default function Contact({ lang, AnimatedSection }: ContactProps) {
  return (
    <section id="contact" className="py-28 px-6" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">{lang === 'ar' ? 'لنتحدث' : "Let's Talk"}</span>
          </h2>
          <p className="text-[var(--text-dim)] max-w-xl mx-auto mb-14">
            {lang === 'ar'
              ? 'هل لديك مشروع في ذهنك؟ تواصل معي وسأساعدك في تحويله إلى واقع.'
              : "Have a project in mind? Get in touch and I'll help bring it to life."
            }
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            <a href="https://wa.me/213776863561?text=Hi%20Oussama!%20I%27m%20interested%20in%20your%20services."
              target="_blank" rel="noopener noreferrer"
              className="glass rounded-2xl p-8 flex flex-col items-center gap-3 transition-all duration-300"
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(37,211,102,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(37,211,102,0.15)', color: 'var(--whatsapp)' }}>
                <MessageCircle size={28} />
              </div>
              <span className="text-lg font-semibold text-white">WhatsApp</span>
              <span className="text-sm text-[var(--text-dim)]">+213 776 863 561</span>
            </a>

            <a href="mailto:oguenfoude@gmail.com"
              className="glass rounded-2xl p-8 flex flex-col items-center gap-3 transition-all duration-300"
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(79,142,255,0.3)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(79,142,255,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(79,142,255,0.15)', color: 'var(--blue)' }}>
                <Mail size={28} />
              </div>
              <span className="text-lg font-semibold text-white">Email</span>
              <span className="text-sm text-[var(--text-dim)]">oguenfoude@gmail.com</span>
            </a>

            <a href="https://github.com/oguenfoude" target="_blank" rel="noopener noreferrer"
              className="glass rounded-2xl p-8 flex flex-col items-center gap-3 transition-all duration-300"
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(167,139,250,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(167,139,250,0.15)', color: 'var(--violet)' }}>
                <Github size={28} />
              </div>
              <span className="text-lg font-semibold text-white">GitHub</span>
              <span className="text-sm text-[var(--text-dim)]">@oguenfoude</span>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <a href="https://wa.me/213776863561?text=Hi%20Oussama!%20I%20want%20to%20discuss%20a%20project."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300"
            style={{ background: 'var(--whatsapp)', boxShadow: '0 0 40px rgba(37,211,102,0.2)' }}
            onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.filter = '')}>
            {lang === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project'}
            <ArrowRight size={20} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
