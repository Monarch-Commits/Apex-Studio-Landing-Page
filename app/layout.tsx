import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Wave from '@/components/wave';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apex Studio | Premium Digital Agency',
  description:
    'We craft exceptional digital experiences through web design, branding, AI automation, and product development. Transform your business with our award-winning team.',
  keywords: [
    'web design',
    'branding',
    'AI automation',
    'digital marketing',
    'product development',
    'agency',
  ],
  authors: [{ name: 'Apex Studio' }],
  openGraph: {
    title: 'Apex Studio | Premium Digital Agency',
    description:
      'We craft exceptional digital experiences through web design, branding, AI automation, and product development.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/ApexLogo.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ApexLogoDark.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        <Wave />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
