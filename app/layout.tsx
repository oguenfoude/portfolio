import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oussama Guenfoude | Web Developer - مطور مواقع',
  description: 'Professional website design for barbershops, clinics, and small businesses. تصميم مواقع احترافية للصالونات والعيادات والشركات الصغيرة',
  keywords: ['web developer', 'website design', 'barber shop website', 'dental clinic website', 'مطور مواقع', 'تصميم مواقع', 'صالون حلاقة', 'عيادة أسنان'],
  openGraph: {
    title: 'Oussama Guenfoude | Web Developer',
    description: 'Professional website design for barbershops, clinics, and small businesses',
    url: 'https://oguenfoude.vercel.app',
    siteName: 'Oussama Guenfoude Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oussama Guenfoude | Web Developer',
    description: 'Professional website design for barbershops, clinics, and small businesses',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Arabic:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
