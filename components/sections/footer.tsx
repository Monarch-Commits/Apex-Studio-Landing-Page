'use client';

import { Container } from '@/components/container';
import { Twitter, Linkedin, Instagram, Dribbble } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  services: [
    { name: 'Web Design', href: '#services' },
    { name: 'Branding', href: '#services' },
    { name: 'AI Automation', href: '#services' },
    { name: 'SEO & Growth', href: '#services' },
    { name: 'Product Development', href: '#services' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Dribbble', icon: Dribbble, href: '#' },
];

export function Footer() {
  return (
    <footer className="border-border bg-background border-t py-12 md:py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 pb-4">
              <Image
                src="/ApexLogo.svg"
                alt="Apex Studio Logo"
                width={50}
                height={50}
                className="rounded-lg"
                priority
              />

              <span className="text-foreground text-lg font-semibold">
                Apex Studio
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm text-sm leading-relaxed">
              A premium digital agency crafting exceptional web experiences,
              brands, and products for forward-thinking companies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="border-border text-muted-foreground hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground mb-4 text-sm font-semibold">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground mb-4 text-sm font-semibold">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground mb-4 text-sm font-semibold">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-border mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Apex Studio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with care in San Francisco
          </p>
        </div>
      </Container>
    </footer>
  );
}
