"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  index: number
}

export function TestimonialCard({ quote, author, role, company, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "relative rounded-xl border border-border bg-card p-6 md:p-8",
        "transition-all duration-300",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
      )}
    >
      <Quote className="mb-4 h-8 w-8 text-primary/20" />
      <blockquote className="mb-6 text-base leading-relaxed text-foreground">
        {`"${quote}"`}
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
        <div>
          <p className="text-sm font-semibold text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
      
    </motion.div>
  )
}
