"use client"

import { Section } from "@/components/section"
import { Container } from "@/components/container"
import { PricingCard } from "@/components/pricing-card"

const pricingPlans = [
  {
    name: "Starter",
    price: "$5,000",
    description: "Perfect for small businesses and startups looking to establish their digital presence.",
    features: [
      "5-page responsive website",
      "Basic SEO optimization",
      "Mobile-first design",
      "2 revision rounds",
      "30-day support",
    ],
  },
  {
    name: "Growth",
    price: "$12,000",
    description: "Ideal for growing companies that need comprehensive digital solutions.",
    features: [
      "10-page custom website",
      "Full brand identity",
      "Advanced SEO & analytics",
      "CMS integration",
      "5 revision rounds",
      "90-day support",
      "Performance optimization",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Custom",
    description: "Enterprise-grade solutions for large organizations with complex needs.",
    features: [
      "Unlimited pages",
      "Complete rebrand",
      "AI automation suite",
      "Custom integrations",
      "Unlimited revisions",
      "Priority support",
      "Dedicated account manager",
      "Quarterly strategy reviews",
    ],
  },
]

export function Pricing() {
  return (
    <Section id="pricing" className="bg-background">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Pricing</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include our commitment to excellence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
