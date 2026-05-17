'use client';
import { motion } from 'framer-motion';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';

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

const leaders = [
  {
    name: 'Emma',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=EmmaL_Watson_88',
  },
  {
    name: 'James',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=James_Anderson_21',
  },
  {
    name: 'Sophia',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Sophia_Miller_45',
  },
  {
    name: 'Lucas',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Lucas_Brown_77',
  },
];

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
    <section className="relative flex min-h-screen items-center overflow-hidden">
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
                className="from-primary to-accent absolute -bottom-2 left-0 h-1 w-full rounded-full bg-linear-to-r"
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
              {' '}
              {leaders.map((user, i) => (
                <div
                  key={i}
                  className="border-card relative h-8 w-8 overflow-hidden rounded-full border-2 bg-gray-400"
                >
                  {' '}
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />{' '}
                </div>
              ))}{' '}
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
