'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '@/components/section';
import { Container } from '@/components/container';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We dive deep into your business goals, target audience, and competitive landscape to understand what success looks like for you.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Based on our findings, we develop a comprehensive strategy that aligns your business objectives with user needs.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Our design team crafts stunning visuals and intuitive interfaces that bring your brand to life and engage your audience.',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'We build robust, scalable solutions using cutting-edge technologies, ensuring performance and reliability.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'After thorough testing, we deploy your project and provide ongoing support to ensure continued success.',
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Gagamit lang tayo ng useScroll para sa single indicator line upang makatipid sa memory
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Mobile-optimized translation: gagamit ng percentage para hindi mabigat sa GPU
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section
      id="process"
      className="bg-background relative transform-gpu overflow-hidden"
    >
      {/* Static ambient glow: Inalis ang animation dito dahil ito ang #1 sanhi ng lag sa mobile chrome/safari */}
      <div className="bg-primary/5 pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]" />

      <Container>
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="text-primary mb-3 text-sm font-medium tracking-wider uppercase">
            Our Process
          </p>
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            How we bring ideas to life
          </h2>
          <p className="text-muted-foreground text-lg">
            {
              'A proven methodology that delivers consistent, exceptional results.'
            }
          </p>
        </div>

        {/* Timeline Container */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-5xl px-4 md:px-0"
        >
          {/* Base Track */}
          <div className="bg-border/40 absolute top-0 left-[21px] h-full w-[2px] md:left-1/2 md:-translate-x-1/2" />

          {/* Hardware-Accelerated Progress Line */}
          <motion.div
            style={{ scaleY: lineScaleY }}
            className="from-primary to-primary absolute top-0 left-[21px] h-full w-[2px] origin-top bg-gradient-to-b via-emerald-500 will-change-transform md:left-1/2 md:-translate-x-1/2"
          />

          {/* Steps List */}
          <div className="space-y-16 md:space-y-28">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  // InView animation ang gagamitin sa mobile imbes na Scroll-Linked para 100% smooth
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // Fast-out premium curve
                  className={`relative flex flex-col pl-14 md:flex-row md:items-center md:pl-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card wrapper */}
                  <div
                    className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
                  >
                    <div className="group bg-card/40 hover:border-primary/30 hover:bg-card/70 relative rounded-2xl border p-6 backdrop-blur-[1px] transition-all duration-300 md:p-8">
                      <h3 className="text-foreground group-hover:text-primary mt-1 mb-2 text-xl font-bold tracking-tight transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Geometric Center Node */}
                  <div className="border-border bg-background group-hover:border-primary absolute top-2 left-0 z-10 flex h-[44px] w-[44px] items-center justify-center rounded-xl border shadow-sm transition-all duration-300 group-hover:rotate-45 md:top-auto md:left-1/2 md:-translate-x-1/2">
                    <span className="text-foreground font-mono text-xs font-bold transition-transform duration-300 group-hover:-rotate-45">
                      {step.number}
                    </span>
                  </div>

                  {/* Spacer for desktop symmetry */}
                  <div className="hidden w-1/2 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
