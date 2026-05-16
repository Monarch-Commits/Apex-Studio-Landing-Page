"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  category: string
  metric: string
  metricLabel: string
  image: string
  index: number
}

export function ProjectCard({ title, category, metric, metricLabel, image, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card",
        "transition-all duration-300",
        "hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="p-6">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">{category}</p>
        <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-primary">{metric}</span>
          <span className="text-sm text-muted-foreground">{metricLabel}</span>
        </div>
      </div>
    </motion.div>
  )
}
