import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono, Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Guendoude Oussama | Full-Stack Developer',
  description: 'Full-stack developer specializing in modern web applications, SaaS platforms, and bots. 30+ projects across Healthcare, E-Commerce, and custom solutions.',
  keywords: ['web developer', 'full-stack', 'Next.js', 'React', 'TypeScript', 'Python', 'healthcare', 'e-commerce', 'portfolio'],
  openGraph: {
    title: 'Guendoude Oussama | Full-Stack Developer',
    description: 'Full-stack developer specializing in modern web applications, SaaS platforms, and bots.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_DZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guendoude Oussama | Full-Stack Developer',
    description: 'Full-stack developer specializing in modern web applications, SaaS platforms, and bots.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${notoSansArabic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
