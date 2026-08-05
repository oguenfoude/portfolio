'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, Smartphone, Search, MessageCircle, Code, Palette,
  ExternalLink, Github, Mail, Phone, MapPin, ChevronDown,
  Star, Check, ArrowRight, Menu, X, Send
} from 'lucide-react';

// ============================================
// DATA
// ============================================

const projects = [
  {
    title: 'Babylon Fadez',
    titleAr: 'بابل فيدز',
    category: 'Barber Shop',
    categoryAr: 'صالون حلاقة',
    url: 'https://babylon-fadez.vercel.app',
    github: 'https://github.com/oguenfoude/babylon-fadez',
    image: 'https://babylon-fadez.vercel.app/og.png',
    tech: ['Next.js', 'Tailwind CSS', 'DaisyUI'],
    description: 'Premium barbershop landing page with team showcase, services, pricing, gallery, and WhatsApp booking.',
    descriptionAr: 'موقع صالون حلاقة احترافي مع عرض الفريق والخدمات والأسعار والم_gallery وال حجز عبر الواتساب',
  },
  {
    title: 'Fama Barber',
    titleAr: 'فاما باربر',
    category: 'Barber Shop',
    categoryAr: 'صالون حلاقة',
    url: 'https://fama-barber.vercel.app',
    github: 'https://github.com/oguenfoude/fama-barber',
    image: 'https://fama-barber.vercel.app/og.png',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    description: 'Modern barbershop landing page with booking integration.',
    descriptionAr: 'موقع صالون حلاقة حديث مع نظام الحجز',
  },
  {
    title: 'Batata Barber',
    titleAr: 'باتاتا باربر',
    category: 'Barber Shop + Tattoo',
    categoryAr: 'صالون حلاقة ووشم',
    url: 'https://batata-barber.vercel.app',
    github: 'https://github.com/oguenfoude/batata-barber',
    image: 'https://batata-barber.vercel.app/og.png',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    description: 'Barber shop and tattoo studio website with animations.',
    descriptionAr: 'موقع صالون حلاقة وووشم مع رسوم متحركة',
  },
  {
    title: 'David Soto',
    titleAr: 'ديفيد سوتو',
    category: 'Barber Shop',
    categoryAr: 'صالون حلاقة',
    url: 'https://david-soto-two.vercel.app',
    github: 'https://github.com/oguenfoude/david-soto',
    image: 'https://david-soto-two.vercel.app/og.png',
    tech: ['Next.js', 'Tailwind CSS', 'shadcn/ui'],
    description: 'Elegant barbershop website with modern UI components.',
    descriptionAr: 'موقع صالون حلاقة أنيق مع مكونات واجهة حديثة',
  },
  {
    title: 'Cabinet Dentaire',
    titleAr: 'عيادة الأسنان',
    category: 'Dental Clinic',
    categoryAr: 'عيادة أسنان',
    url: 'https://dental-clinic-mauve-two.vercel.app',
    github: 'https://github.com/oguenfoude/dental-clinic',
    image: 'https://dental-clinic-mauve-two.vercel.app/og.png',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    description: 'Full dental clinic website with services, team, testimonials, gallery, FAQ, and appointment booking.',
    descriptionAr: 'موقع عيادة أسنان كامل مع الخدمات والفريق والآراء والم_gallery والأسئلة الشائعة وحجز المواعيد',
  },
  {
    title: 'Dental Multi Clinic',
    titleAr: 'عيادة أسنان متعددة',
    category: 'Multi-Location Clinic',
    categoryAr: 'عيادة متعددة الفروع',
    url: 'https://dental-multi-clinic.vercel.app',
    github: 'https://github.com/oguenfoude/dental-multi-clinic',
    image: 'https://dental-multi-clinic.vercel.app/og.png',
    tech: ['Next.js', 'Tailwind CSS', 'i18n'],
    description: 'Multi-location dental clinic with FR/EN/AR multilingual support.',
    descriptionAr: 'عيادة أسنان متعددة الفروع مع دعم متعدد اللغات',
  },
  {
    title: 'Dental RGPD',
    titleAr: 'عيادة أسنان RGPD',
    category: 'Dental Clinic',
    categoryAr: 'عيادة أسنان',
    url: 'https://dental-rgpd.vercel.app',
    github: 'https://github.com/oguenfoude/dental-rgpd',
    image: 'https://dental-rgpd.vercel.app/og.png',
    tech: ['Next.js', 'Tailwind CSS', 'RGPD'],
    description: 'Dental clinic with RGPD compliance and WhatsApp integration.',
    descriptionAr: 'عيادة أسنان مع الامتثال للحماية وربط الواتساب',
  },
  {
    title: 'FocusMedical',
    titleAr: 'فوكس ميديكال',
    category: 'Healthcare SaaS',
    categoryAr: 'صحتech SaaS',
    url: 'https://focusmedical.vercel.app',
    github: 'https://github.com/oguenfoude/focusMedical',
    image: 'https://focusmedical.vercel.app/og.png',
    tech: ['Next.js', 'Supabase', 'Drizzle ORM'],
    description: 'Multi-tenant SaaS for medical clinics with 4600+ Algerian drugs database.',
    descriptionAr: 'منصة SaaS للعيادات مع قاعدة بيانات 4600+ دواء جزائري',
  },
  {
    title: 'MyClinic',
    titleAr: 'ماي كلينك',
    category: 'Clinic Management',
    categoryAr: 'إدارة العيادات',
    url: 'https://myclinic-plum.vercel.app',
    github: 'https://github.com/oguenfoude/myclinic',
    image: 'https://myclinic-plum.vercel.app/og.png',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    description: 'Clinic management system with doctor/patient roles and multilingual support.',
    descriptionAr: 'نظام إدارة العيادات مع أدوار الأطباء والمرضى ودعم متعدد اللغات',
  },
  {
    title: 'GameKey',
    titleAr: 'جيم كي',
    category: 'E-Commerce',
    categoryAr: 'متجر إلكتروني',
    url: 'https://gamekey-five.vercel.app',
    github: 'https://github.com/oguenfoude/gamekey',
    image: 'https://gamekey-five.vercel.app/og.png',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    description: 'Digital game key store with product management and sales tracking.',
    descriptionAr: 'متجر مفاتيح الألعاب مع إدارة المنتجات وتتبع المبيعات',
  },
  {
    title: 'Digital Key',
    titleAr: 'ديجيتال كي',
    category: 'IT Services',
    categoryAr: 'خدمات تقنية',
    url: 'https://digitalkey-xi.vercel.app',
    github: 'https://github.com/oguenfoude/digitalkey',
    image: 'https://digitalkey-xi.vercel.app/og.png',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    description: 'Professional IT services company website.',
    descriptionAr: 'موقع شركة خدمات تقنية احترافي',
  },
  {
    title: 'NCH Community',
    titleAr: 'مجتمع NCH',
    category: 'Immigration Platform',
    categoryAr: 'منصة الهجرة',
    url: 'https://nch-community-dz.online',
    github: 'https://github.com/oguenfoude/nch-community-off-main',
    image: 'https://nch-community-dz.online/og.png',
    tech: ['Next.js', 'MongoDB', 'Prisma'],
    description: 'Algerian immigration consultation platform with multi-step registration.',
    descriptionAr: 'منصة استشارات الهجرة الجزائرية مع تسجيل متعدد الخطوات',
  },
  {
    title: 'FlexiDZ',
    titleAr: 'فلكسي DZ',
    category: 'SMS Gateway',
    categoryAr: 'بوابة SMS',
    url: 'https://flexidz.com',
    github: 'https://github.com/oguenfoude/FocusGateWeb',
    image: 'https://flexidz.com/og.png',
    tech: ['Next.js', 'MongoDB', 'TypeScript'],
    description: 'SMS gateway dashboard for managing USB modems and SIM cards.',
    descriptionAr: 'لوحة تحكم بوابة SMS لإدارة أجهزة USB والبطاقات',
  },
  {
    title: 'WhatsMenu',
    titleAr: 'واتس منيو',
    category: 'Restaurant',
    categoryAr: 'مطعم',
    url: 'https://whats-menu.vercel.app',
    github: 'https://github.com/oguenfoude/whats-menu',
    image: 'https://whats-menu.vercel.app/og.png',
    tech: ['Next.js', 'Tailwind CSS', 'shadcn/ui'],
    description: 'Restaurant landing page with menu, hero slider, and WhatsApp ordering.',
    descriptionAr: 'موقع مطعم مع القائمة وشريط البطل والطلب عبر الواتساب',
  },
  {
    title: 'Copy Critiquer',
    titleAr: 'ناقد النصوص',
    category: 'AI Tool',
    categoryAr: 'أداة ذكاء اصطناعي',
    url: 'https://copy-critiquer.vercel.app',
    github: 'https://github.com/oguenfoude/copy-critiquer',
    image: 'https://copy-critiquer.vercel.app/og.png',
    tech: ['Next.js', 'Google Gemini', 'TypeScript'],
    description: 'AI-powered copywriting assistant that analyzes and improves text.',
    descriptionAr: 'مساعد كتابة إعلانات بالذكاء الاصطناعي يحلل ويحسّن النصوص',
  },
];

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'تصميم المواقع',
    titleEn: 'Website Design',
    description: 'مواقع احترافية عصرية تجذب الزبائن وترتفع مبيعاتك',
    descriptionEn: 'Modern professional websites that attract customers and boost sales',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'متوافق مع الجوال',
    titleEn: 'Mobile Responsive',
    description: 'الموقع يعمل بشكل مثالي على الهاتف والكمبيوتر والتابلت',
    descriptionEn: 'Website works perfectly on phone, computer, and tablet',
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'تحسين محركات البحث',
    titleEn: 'SEO Optimization',
    description: 'ظهور في نتائج البحث الأولى على جوجل',
    descriptionEn: 'Appear in top Google search results',
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'ربط الواتساب',
    titleEn: 'WhatsApp Integration',
    description: 'زبونك يضغط على زر ويتواصل معك مباشرة',
    descriptionEn: 'Customer clicks a button and contacts you directly',
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'تقنيات حديثة',
    titleEn: 'Modern Tech',
    description: '-next.js, React, Tailwind CSS - أحدث التقنيات',
    descriptionEn: 'Built with Next.js, React, Tailwind CSS - latest technologies',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'تصميم احترافي',
    titleEn: 'Professional Design',
    description: 'تصميم عصري يعكس هوية علامتك التجارية',
    descriptionEn: 'Contemporary design that reflects your brand identity',
  },
];

const pricing = [
  {
    name: 'الأساسي',
    nameEn: 'Basic',
    price: '299',
    currency: '€',
    features: [
      { text: 'موقع صفحة واحدة', textEn: 'Single page website', included: true },
      { text: 'متوافق مع الجوال', textEn: 'Mobile responsive', included: true },
      { text: 'زر الواتساب', textEn: 'WhatsApp button', included: true },
      { text: 'اسم نطاق مجاني', textEn: 'Free domain name', included: true },
      { text: 'استضافة لمدة سنة', textEn: '1 year hosting', included: true },
      { text: 'تحسين محركات البحث', textEn: 'SEO optimization', included: false },
      { text: 'نظام الحجز', textEn: 'Booking system', included: false },
    ],
    popular: false,
    cta: 'ابدأ الآن',
    ctaEn: 'Start Now',
  },
  {
    name: 'الاحترافي',
    nameEn: 'Professional',
    price: '399',
    currency: '€',
    features: [
      { text: 'موقع متعدد الصفحات', textEn: 'Multi-page website', included: true },
      { text: 'متوافق مع الجوال', textEn: 'Mobile responsive', included: true },
      { text: 'زر الواتساب', textEn: 'WhatsApp button', included: true },
      { text: 'تحسين محركات البحث', textEn: 'SEO optimization', included: true },
      { text: 'معرض الأعمال', textEn: 'Portfolio gallery', included: true },
      { text: 'نموذج التواصل', textEn: 'Contact form', included: true },
      { text: 'استضافة لمدة سنة', textEn: '1 year hosting', included: true },
    ],
    popular: true,
    cta: 'الأكثر شيوعاً',
    ctaEn: 'Most Popular',
  },
  {
    name: 'المؤسسات',
    nameEn: 'Business',
    price: '599',
    currency: '€',
    features: [
      { text: 'موقع متعدد الصفحات', textEn: 'Multi-page website', included: true },
      { text: 'نظام حجز المواعيد', textEn: 'Appointment booking', included: true },
      { text: 'ربط الواتساب', textEn: 'WhatsApp integration', included: true },
      { text: 'تحسين محركات البحث', textEn: 'SEO optimization', included: true },
      { text: 'معرض الأعمال', textEn: 'Portfolio gallery', included: true },
      { text: 'إدارة المحتوى', textEn: 'Content management', included: true },
      { text: 'دعم فني لمدة سنة', textEn: '1 year support', included: true },
      { text: 'استضافة لمدة سنة', textEn: '1 year hosting', included: true },
    ],
    popular: false,
    cta: 'تواصل معي',
    ctaEn: 'Contact Me',
  },
];

const stats = [
  { number: '30+', label: 'مشروع', labelEn: 'Projects' },
  { number: '25+', label: 'موقع مباشر', labelEn: 'Live Sites' },
  { number: '8+', label: 'صالونات حلاقة', labelEn: 'Barber Shops' },
  { number: '3+', label: 'عيادات أسنان', labelEn: 'Dental Clinics' },
];

// ============================================
// COMPONENTS
// ============================================

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#27272a]' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold gradient-text">OG</a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-[#71717a] hover:text-white transition-colors">Portfolio</a>
            <a href="#services" className="text-[#71717a] hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="text-[#71717a] hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-[#71717a] hover:text-white transition-colors">About</a>
            <a href="#contact" className="bg-[#3b82f6] hover:bg-[#2563eb] px-4 py-2 rounded-lg transition-colors">Contact</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#18181b] border-b border-[#27272a]"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-[#71717a] hover:text-white">Portfolio</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-[#71717a] hover:text-white">Services</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="text-[#71717a] hover:text-white">Pricing</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-[#71717a] hover:text-white">About</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="bg-[#3b82f6] px-4 py-2 rounded-lg text-center">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b82f6]/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10b981]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#3b82f6] font-medium mb-4">Web Developer & Designer</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">أصمم مواقع</span>
            <br />
            <span className="text-white">احترافية</span>
          </h1>
          <p className="text-xl text-[#71717a] max-w-2xl mx-auto mb-8">
            متخصص في تصميم مواقع الصالونات والعيادات والشركات الصغيرة
            <br />
            <span className="text-[#a1a1aa]">Specializing in websites for barbershops, clinics, and small businesses</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="bg-[#3b82f6] hover:bg-[#2563eb] px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              شاهد أعمالي <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/213776863561"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> تواصل معي
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
              <div className="text-[#71717a] mt-1">{stat.label}</div>
              <div className="text-[#52525b] text-sm">{stat.labelEn}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#71717a]" />
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'Barber Shop', 'Dental Clinic', 'Healthcare', 'E-Commerce', 'Other'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => 
        p.category.includes(filter) || 
        (filter === 'Healthcare' && (p.category.includes('Healthcare') || p.category.includes('Clinic'))) ||
        (filter === 'Other' && !p.category.includes('Barber') && !p.category.includes('Dental') && !p.category.includes('Healthcare') && !p.category.includes('E-Commerce'))
      );

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            أعماللي <span className="gradient-text">المميزة</span>
          </h2>
          <p className="text-[#71717a] max-w-2xl mx-auto">
            معرض أعماللي يشمل مواقع لصالونات الحلاقة والعيادات والشركات
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === cat
                  ? 'bg-[#3b82f6] text-white'
                  : 'bg-[#18181b] text-[#71717a] hover:text-white border border-[#27272a]'
              }`}
            >
              {cat === 'all' ? 'الكل' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#3b82f6]/20 to-[#10b981]/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-[#27272a]">{project.title[0]}</div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3b82f6] p-3 rounded-full hover:bg-[#2563eb] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#27272a] p-3 rounded-full hover:bg-[#3f3f46] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-[#3b82f6]/20 text-[#3b82f6] rounded">{project.category}</span>
                  <span className="text-xs px-2 py-1 bg-[#10b981]/20 text-[#10b981] rounded">{project.categoryAr}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <p className="text-[#71717a] text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-[#27272a] text-[#a1a1aa] rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            خدماتي <span className="gradient-text">المتميزة</span>
          </h2>
          <p className="text-[#71717a] max-w-2xl mx-auto">
            أقدم مجموعة شاملة من الخدمات لتصميم وتطوير موقعك الإلكتروني
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover bg-[#0a0a0a] border border-[#27272a] rounded-xl p-6"
            >
              <div className="text-[#3b82f6] mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-[#71717a] text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            الأسعار <span className="gradient-text">المناسبة</span>
          </h2>
          <p className="text-[#71717a] max-w-2xl mx-auto">
            خطط أسعار مرنة تناسب احتياجاتك وميزانيتك
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-[#18181b] border rounded-2xl p-8 ${
                plan.popular ? 'border-[#3b82f6] glow' : 'border-[#27272a]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3b82f6] px-4 py-1 rounded-full text-sm font-medium">
                  الأكثر طلباً
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-[#71717a] text-sm mb-4">{plan.nameEn}</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                <span className="text-[#71717a]">{plan.currency}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${feature.included ? 'text-[#10b981]' : 'text-[#52525b]'}`} />
                    <span className={`text-sm ${feature.included ? 'text-[#a1a1aa]' : 'text-[#52525b]'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/213776863561"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-lg text-center font-medium transition-all ${
                  plan.popular
                    ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
                    : 'bg-[#27272a] hover:bg-[#3f3f46] text-white'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              من <span className="gradient-text">أنا</span>؟
            </h2>
            <p className="text-[#a1a1aa] mb-4 leading-relaxed">
              أنا oussama guenfoude، مطور مواقع متخصص في تصميم المواقع الاحترافية للشركات الصغيرة.
              لدي خبرة واسعة في تصميم مواقعصالونات الحلاقة والعيادات والشركات.
            </p>
            <p className="text-[#71717a] mb-6 leading-relaxed">
              I specialize in creating professional websites for small businesses. With extensive experience in designing websites for barbershops, clinics, and companies, I help businesses establish their online presence and attract more customers.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Supabase', 'MongoDB'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#27272a] text-[#a1a1aa] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/oguenfoude"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#71717a] hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a
                href="mailto:oguenfoude@gmail.com"
                className="flex items-center gap-2 text-[#71717a] hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" /> Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-[#0a0a0a] border border-[#27272a] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">30+</div>
              <div className="text-[#71717a] text-sm">مشروع مكتمل</div>
              <div className="text-[#52525b] text-xs">Completed Projects</div>
            </div>
            <div className="bg-[#0a0a0a] border border-[#27272a] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-[#71717a] text-sm">موقع مباشر</div>
              <div className="text-[#52525b] text-xs">Live Websites</div>
            </div>
            <div className="bg-[#0a0a0a] border border-[#27272a] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-[#71717a] text-sm">رضا العملاء</div>
              <div className="text-[#52525b] text-xs">Client Satisfaction</div>
            </div>
            <div className="bg-[#0a0a0a] border border-[#27272a] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-[#71717a] text-sm">دعم فني</div>
              <div className="text-[#52525b] text-xs">Technical Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `مرحبا، أنا ${formData.name}%0A${formData.message}%0A%0Aالبريد الإلكتروني: ${formData.email}`;
    window.open(`https://wa.me/213776863561?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            تواصل <span className="gradient-text">معي</span>
          </h2>
          <p className="text-[#71717a] max-w-2xl mx-auto">
            جاهز لبدء مشروعك؟ تواصل معي الآن
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">معلومات التواصل</h3>
            
            <div className="space-y-4">
              <a
                href="https://wa.me/213776863561"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#18181b] border border-[#27272a] rounded-xl hover:border-[#25D366] transition-colors"
              >
                <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-white font-medium">واتساب</div>
                  <div className="text-[#71717a] text-sm">راسلني مباشرة</div>
                </div>
              </a>

              <a
                href="mailto:oguenfoude@gmail.com"
                className="flex items-center gap-4 p-4 bg-[#18181b] border border-[#27272a] rounded-xl hover:border-[#3b82f6] transition-colors"
              >
                <div className="w-12 h-12 bg-[#3b82f6]/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <div>
                  <div className="text-white font-medium">البريد الإلكتروني</div>
                  <div className="text-[#71717a] text-sm">oguenfoude@gmail.com</div>
                </div>
              </a>

              <a
                href="https://github.com/oguenfoude"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#18181b] border border-[#27272a] rounded-xl hover:border-[#a1a1aa] transition-colors"
              >
                <div className="w-12 h-12 bg-[#a1a1aa]/20 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-[#a1a1aa]" />
                </div>
                <div>
                  <div className="text-white font-medium">GitHub</div>
                  <div className="text-[#71717a] text-sm">@oguenfoude</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="الاسم / Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#27272a] rounded-lg text-white placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6] transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="البريد الإلكتروني / Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#27272a] rounded-lg text-white placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6] transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="رسالتك / Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#27272a] rounded-lg text-white placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" /> إرسال الرسالة
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#52525b] text-sm">
          © 2026 Oussama Guenfoude. All rights reserved.
        </p>
        <p className="text-[#3f3f46] text-xs mt-2">
          Built with Next.js, Tailwind CSS, and ❤️
        </p>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
