"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { Container } from "@/components/container"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and competitive landscape to understand what success looks like for you.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive strategy that aligns your business objectives with user needs.",
  },
  {
    number: "03",
    title: "Design",
    description: "Our design team crafts stunning visuals and intuitive interfaces that bring your brand to life and engage your audience.",
  },
  {
    number: "04",
    title: "Development",
    description: "We build robust, scalable solutions using cutting-edge technologies, ensuring performance and reliability.",
  },
  {
    number: "05",
    title: "Launch",
    description: "After thorough testing, we deploy your project and provide ongoing support to ensure continued success.",
  },
]

export function Process() {
  return (
    <Section id="process" className="bg-background">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Our Process</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How we bring ideas to life
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven methodology that delivers consistent, exceptional results.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 md:left-1/2 md:block md:-translate-x-1/2" />
          
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`rounded-xl border border-border bg-card p-6 ${
                    index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:ml-8 md:mr-auto"
                  } md:max-w-md`}>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Number circle */}
                <div className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-bold text-primary md:static md:h-12 md:w-12 md:text-sm">
                  {step.number}
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
