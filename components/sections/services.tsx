"use client"

import { Section } from "@/components/section"
import { Container } from "@/components/container"
import { ServiceCard } from "@/components/service-card"
import { 
  Palette, 
  Layers, 
  Bot, 
  TrendingUp, 
  Package 
} from "lucide-react"

const services = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Web Design",
    description: "Stunning, responsive websites that captivate visitors and convert them into customers. Every pixel crafted with purpose.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Branding",
    description: "Strategic brand identities that tell your story and create lasting impressions. From logo to full brand systems.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI Automation",
    description: "Intelligent automation solutions that streamline operations and unlock new possibilities for your business.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "SEO & Growth",
    description: "Data-driven strategies that increase visibility, drive organic traffic, and accelerate sustainable growth.",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Product Development",
    description: "End-to-end product design and development. From concept to launch, we build products people love.",
  },
]

export function Services() {
  return (
    <Section id="services" className="bg-background">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Services</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to grow online
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital solutions tailored to your unique business needs.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
