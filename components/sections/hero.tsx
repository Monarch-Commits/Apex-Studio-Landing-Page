'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Premium animated grid background - Vercel/Linear style
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Animated glow lines - horizontal */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 h-px"
          style={{
            top: `${20 + i * 25}%`,
            width: '100%',
            background:
              'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), rgba(99, 102, 241, 0.4), transparent)',
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 1.5,
            repeat: Infinity,
            repeatDelay: 6,
            ease: 'linear',
          }}
        />
      ))}

      {/* Animated glow lines - vertical */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 w-px"
          style={{
            left: `${25 + i * 25}%`,
            height: '100%',
            background:
              'linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.4), rgba(59, 130, 246, 0.4), transparent)',
          }}
          animate={{
            y: ['-100%', '100%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            delay: i * 2 + 0.5,
            repeat: Infinity,
            repeatDelay: 7,
            ease: 'linear',
          }}
        />
      ))}

      {/* Subtle gradient orbs */}
      <div className="bg-primary/[0.03] absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />
      <div className="bg-accent/[0.03] absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full blur-[100px]" />
    </div>
  );
}

// Stats with social proof
const stats = [
  {
    icon: TrendingUp,
    value: '120+',
    label: 'Projects Delivered',
    color: 'text-primary',
  },
  {
    icon: Users,
    value: '98%',
    label: 'Client Satisfaction',
    color: 'text-accent',
  },
  { icon: Zap, value: '5+', label: 'Years Experience', color: 'text-primary' },
];

export function Hero() {
  return (
    <section className="bg-background relative flex min-h-screen items-center overflow-hidden">
      <AnimatedGrid />

      <Container className="relative z-10 pt-32 pb-20 lg:pt-40">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <span className="text-muted-foreground inline-flex items-center gap-2 text-sm">
            <span className="text-yellow-500">★</span>
            4.9 average client rating across all projects
          </span>
        </motion.div>

        {/* Main Headline - Centered */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-foreground mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            The teams we{' '}
            <span className="relative">
              empower
              <motion.span
                className="from-primary to-accent absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg text-pretty md:text-xl"
          >
            Your team&apos;s toolkit to stop configuring and start innovating.
            Securely build, deploy, and scale the best digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="shadow-primary/25 h-12 gap-2 rounded-full px-8 text-base shadow-lg"
              >
                Get a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-8 text-base"
              >
                Explore the Product
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Grid - Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-border bg-border mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="bg-card flex flex-col gap-2 p-6 text-center md:p-8"
            >
              <div className="flex items-center justify-center gap-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <span className="text-foreground text-2xl font-bold md:text-3xl">
                  {stat.value}
                </span>
              </div>
              <span className="text-muted-foreground text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}

          {/* Client Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="bg-card flex flex-col items-center justify-center gap-3 p-6 md:p-8"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border-card from-primary/20 to-accent/20 h-8 w-8 rounded-full border-2 bg-gradient-to-br"
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">
              Trusted by leaders
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
