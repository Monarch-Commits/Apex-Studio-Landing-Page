"use client"

import { Section } from "@/components/section"
import { Container } from "@/components/container"
import { TestimonialCard } from "@/components/testimonial-card"

const testimonials = [
  {
    quote: "Apex Studio transformed our entire digital presence. The results exceeded our expectations - our conversion rate tripled within the first month.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechFlow",
  },
  {
    quote: "Working with Apex was a game-changer. Their strategic approach to branding helped us stand out in a crowded market and attract premium clients.",
    author: "Marcus Rodriguez",
    role: "Founder",
    company: "Nova Ventures",
  },
  {
    quote: "The AI automation solutions they built saved us countless hours. Our team can now focus on what matters most - serving our customers.",
    author: "Emily Watson",
    role: "COO",
    company: "ScaleUp Co",
  },
]

export function Testimonials() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by businesses worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            {"Don't just take our word for it. Here's what our clients have to say."}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
