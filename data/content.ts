export const categories: Record<string, { en: string; ar: string }> = {
  all: { en: 'All Projects', ar: 'جميع المشاريع' },
  barber: { en: 'Barber Shops', ar: 'محلات حلاقة' },
  dental: { en: 'Dental Clinics', ar: 'عيادات أسنان' },
  healthcare: { en: 'Healthcare', ar: 'رعاية صحية' },
  ecommerce: { en: 'E-Commerce', ar: 'تجارة إلكترونية' },
  bots: { en: 'Bots', ar: 'بوتات' },
  apps: { en: 'Web Apps', ar: 'تطبيقات ويب' },
  other: { en: 'Other', ar: 'أخرى' },
};

export const services = [
  {
    icon: 'Globe',
    titleEn: 'Web Development',
    titleAr: 'تطوير المواقع',
    descEn: 'Modern, responsive websites built with Next.js, React, and Tailwind CSS',
    descAr: 'مواقع حديثة ومتجاوبة مبنية بـ Next.js وReact وTailwind CSS',
  },
  {
    icon: 'Smartphone',
    titleEn: 'Mobile Apps',
    titleAr: 'تطبيقات الهاتف',
    descEn: 'Cross-platform mobile apps with React Native and Flutter',
    descAr: 'تطبيقات هاتف متعددة المنصات مع React Native وFlutter',
  },
  {
    icon: 'Bot',
    titleEn: 'Telegram & WhatsApp Bots',
    titleAr: 'بوتات تيليجرام وواتساب',
    descEn: 'Custom bots for automation, e-commerce, and customer service',
    descAr: 'بوتات مخصصة للأتمتة والتجارة الإلكترونية وخدمة العملاء',
  },
  {
    icon: 'Database',
    titleEn: 'SaaS & Platforms',
    titleAr: 'منصات SaaS',
    descEn: 'Full-stack SaaS applications with authentication, databases, and payments',
    descAr: 'تطبيقات SaaS كاملة مع مصادقة وقواعد بيانات ومدفوعات',
  },
  {
    icon: 'Stethoscope',
    titleEn: 'Healthcare Software',
    titleAr: 'برمجيات الرعاية الصحية',
    descEn: 'DICOM imaging, clinic management, and medical SaaS platforms',
    descAr: 'تصوير DICOM وإدارة العيادات ومنصات الرعاية الصحية',
  },
  {
    icon: 'Bot',
    titleEn: 'AI Integration',
    titleAr: 'تكامل الذكاء الاصطناعي',
    descEn: 'AI-powered features using Gemini, GPT, and custom models',
    descAr: 'ميزات مدعومة بالذكاء الاصطناعي باستخدام Gemini وGPT ونماذج مخصصة',
  },
];

export const stats = [
  { value: '30+', labelEn: 'Projects', ar: 'مشروع' },
  { value: '25+', labelEn: 'Live Sites', ar: 'موقع مباشر' },
  { value: '8+', labelEn: 'Barber Shops', ar: 'محل حلاقة' },
  { value: '3+', labelEn: 'Dental Clinics', ar: 'عيادة أسنان' },
];

export const skills = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
  'Python', 'C#', '.NET', 'PostgreSQL', 'MongoDB', 'Supabase',
  'Prisma', 'Three.js', 'React Native', 'Flutter', 'Docker',
  'Telegram Bot API', 'WhatsApp API', 'Google Gemini', 'Framer Motion',
];
