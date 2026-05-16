"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  index: number
}

export function PricingCard({ name, price, description, features, highlighted = false, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative flex flex-col rounded-xl border p-6 md:p-8",
        "transition-all duration-300",
        highlighted 
          ? "border-primary bg-card shadow-xl shadow-primary/10" 
          : "border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">{name}</h3>
        <div className="mb-2 flex items-baseline">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          {price !== "Custom" && <span className="ml-1 text-muted-foreground">/project</span>}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={highlighted ? "default" : "outline"} 
        className={cn(
          "w-full",
          highlighted && "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        Get Started
      </Button>
    </motion.div>
  )
}
