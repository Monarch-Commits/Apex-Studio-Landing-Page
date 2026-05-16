"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

export function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative rounded-xl border border-border bg-card p-6",
        "transition-all duration-300",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  )
}
