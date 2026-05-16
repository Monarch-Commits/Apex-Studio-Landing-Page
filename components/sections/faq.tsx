"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { Container } from "@/components/container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard website typically takes 4-6 weeks, while larger projects like full brand identities or custom platforms may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What's your design process like?",
    answer: "We follow a collaborative, iterative process. Starting with discovery and strategy, we move through wireframing, design, development, and testing. You'll be involved at every stage with regular check-ins and opportunities for feedback.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely! All our plans include post-launch support. We also offer maintenance packages for long-term partnerships, including regular updates, security monitoring, and performance optimization.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Yes, we're experienced in working within existing brand systems. We can enhance and extend your current guidelines while maintaining consistency, or help evolve them if needed.",
  },
  {
    question: "What makes Apex Studio different from other agencies?",
    answer: "We combine strategic thinking with exceptional execution. Our team brings experience from top tech companies and design studios. We focus on results-driven design that not only looks beautiful but also drives measurable business outcomes.",
  },
  {
    question: "How do we get started?",
    answer: "Simply book a call with us! We'll discuss your project, goals, and timeline. From there, we'll provide a proposal outlining our approach, deliverables, and investment. Once approved, we kick off with a comprehensive discovery session.",
  },
]

export function FAQ() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            {"Everything you need to know about working with us."}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </Section>
  )
}
