'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  index: number;
  avatar: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  index,
  avatar,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      className={cn(
        'border-border bg-card relative rounded-xl border p-6 md:p-8',
        'transition-all duration-300',
        'hover:border-primary/20 hover:shadow-primary/5 hover:shadow-lg',
      )}
    >
      <Quote className="text-primary/20 mb-4 h-8 w-8" />
      <blockquote className="text-foreground mb-6 text-base leading-relaxed">
        {`"${quote}"`}
      </blockquote>
      <div className="flex items-center gap-3">
        <div
          key={author}
          className="border-card relative h-10 w-10 overflow-hidden rounded-full border-2 bg-gray-400"
        >
          <Image
            src={avatar}
            alt={author}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div>
          <p className="text-foreground text-sm font-semibold">{author}</p>
          <p className="text-muted-foreground text-xs">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
