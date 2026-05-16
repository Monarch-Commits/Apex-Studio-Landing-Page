'use client';

import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Work } from '@/components/sections/work';
import { Process } from '@/components/sections/process';
import { Testimonials } from '@/components/sections/testimonials';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';
import { LogoStrip } from '@/components/sections/LogoStrip';

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl border-x px-4">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
