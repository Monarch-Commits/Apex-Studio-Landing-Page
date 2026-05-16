'use client';

import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'FinanceFlow Dashboard',
    category: 'Web Design',
    metric: '+240%',
    metricLabel: 'conversions',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Nova Brand Identity',
    category: 'Branding',
    metric: '+180%',
    metricLabel: 'brand recognition',
    image:
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'AutoScale AI Platform',
    category: 'AI Automation',
    metric: '60%',
    metricLabel: 'time saved',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'GrowthHub Marketing',
    category: 'SEO & Growth',
    metric: '+320%',
    metricLabel: 'organic traffic',
    image:
      'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1600&q=80',
  },
];

export function Work() {
  return (
    <Section id="work" className="bg-muted/30">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="text-primary mb-3 text-sm font-medium tracking-wider uppercase">
            Featured Work
          </p>
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Projects that deliver results
          </h2>
          <p className="text-muted-foreground text-lg">
            Real outcomes for real businesses. See how we help our clients
            achieve their goals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              metric={project.metric}
              metricLabel={project.metricLabel}
              image={project.image}
              index={index}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}
