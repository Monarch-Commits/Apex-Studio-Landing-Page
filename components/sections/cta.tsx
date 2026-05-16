"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {"Let's build something great together"}
          </h2>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Ready to transform your digital presence? Book a free consultation 
            and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="ghost" className="text-muted-foreground">
              hello@apexstudio.com
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
