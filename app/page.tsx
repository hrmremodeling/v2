"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CookingPot, Bath, Home, Hammer, Building2, 
  Phone, Mail, MapPin, CheckCircle2, ChevronRight, Wallet 
} from "lucide-react";

/**
 * HRM SITE CONTENT CONFIGURATION
 * Edit the strings below to update your website images and text.
 */
const SITE_CONTENT = {
  companyName: "HRM Building & Remodeling LLC",
  location: "Vernon, CT",
  license: "CT HIC #0654884",
  contact: {
    phone: "860-597-4872",
    email: "HRM.remodeling@gmail.com",
  },
  // Replace these URLs with your GitHub "Raw" links or Squarespace Asset links
  images: {
    heroMain: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    heroSub1: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80",
    heroSub2: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
  },
  services: [
    { 
      icon: CookingPot, 
      title: "Kitchen Remodeling", 
      text: "Custom kitchens designed for function and beauty, featuring quality cabinetry and quartz countertops." 
    },
    { 
      icon: Bath, 
      title: "Bathroom Remodeling", 
      text: "Full renovations and tub-to-shower conversions with modern waterproof systems." 
    },
    { 
      icon: Home, 
      title: "Basement Finishing", 
      text: "Transform lower levels into family rooms, offices, or guest suites that add home value." 
    },
    { 
      icon: Hammer, 
      title: "Deck Construction", 
      text: "Custom composite and pressure-treated decks built for durability and curb appeal." 
    },
    { 
      icon: Building2, 
      title: "Windows & Doors", 
      text: "Energy-efficient installations to improve your home's comfort and security." 
    },
  ],
  serviceAreas: ["Vernon", "Ellington", "Tolland", "Manchester", "South Windsor", "Glastonbury"],
};

/**
 * HELPER COMPONENT: SmartImage
 * Renders a placeholder if no URL is provided, otherwise renders the image.
 */
function SmartImage({ src, label, className = "" }: { src: string; label: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-neutral-100 ${className}`}>
      {src ? (
        <img src={src} alt={label} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
      ) : (
        <div className="flex h-full items-center justify-center text-xs text-neutral-400 font-medium italic">
          {label} Placeholder
        </div>
      )}
    </div>
  );
}

export default function HRMFullPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">{SITE_CONTENT.companyName}</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{SITE_CONTENT.location}</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="transition-colors hover:text-amber-600">Services</a>
            <a href="#projects" className="transition-colors hover:text-amber-600">Projects</a>
            <a href="#contact" className="transition-colors hover:text-amber-600">Contact</a>
          </nav>
          <Button className="rounded-full bg-neutral-900 px-6 text-white hover:bg-neutral-800">
            Estimate
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-neutral-950 px-6 py-20 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-500 ring-1 ring-amber-500/30">
              Honesty • Integrity • Quality
            </div>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
              Remodeling Done <span className="text-amber-500">The Right Way.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-400">
              With over 25 years of experience, we specialize in high-quality kitchens, bathrooms, and basements in **{SITE_CONTENT.location}**.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-amber-600 px-8 font-bold hover:bg-amber-700">
                Request Free Estimate
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/20 px-8 font-bold hover:bg-white/10">
                View Our Work
              </Button>
            </div>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4 h-[400px] lg:h-[500px]">
            <SmartImage src={SITE_CONTENT.images.heroMain} label="Featured Project" className="row-span-2" />
            <SmartImage src={SITE_CONTENT.images.heroSub1} label="Kitchen Detail" />
            <SmartImage src={SITE_CONTENT.images.heroSub2} label="Basement Detail" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-neutral-900">Expert Services</h2>
            <p className="mt-4 text-neutral-500 italic font-medium">Over two decades of hands-on craftsmanship.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SITE_CONTENT.services.map((service, i) => (
              <Card key={i} className="group border-neutral-100 transition-all hover:shadow-xl hover:-translate-y-1 rounded-3xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                    <service.icon size={24} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{service.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / AREA SECTION */}
      <section className="bg-neutral-50 px-6 py-24 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold">Serving Our Neighbors</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {SITE_CONTENT.serviceAreas.map((area) => (
              <div key={area} className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
                <MapPin size={14} className="text-amber-600" /> {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="px-6 py-16">
        <div className="mx-auto max-w-7xl border-t border-neutral-100 pt-16">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold">{SITE_CONTENT.companyName}</h3>
              <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
                A small, personable crew providing full-service contracting from planning to completion.
              </p>
              <div className="mt-6 flex items-center gap-3 text-amber-600 font-bold">
                <Wallet size={20} />
                <span>Financing Available</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Contact Us</h4>
              <p className="flex items-center gap-3 text-lg font-medium">
                <Phone size={18} className="text-amber-600" /> 
                <a href={`tel:${SITE_CONTENT.contact.phone.replace(/-/g,'')}`}>{SITE_CONTENT.contact.phone}</a>
              </p>
              <p className="flex items-center gap-3 text-lg font-medium underline underline-offset-4">
                <Mail size={18} className="text-amber-600" />
                <a href={`mailto:${SITE_CONTENT.contact.email}`}>{SITE_CONTENT.contact.email}</a>
              </p>
            </div>

            <div className="flex flex-col justify-end lg:items-end">
              <span className="text-xs font-mono text-neutral-400">{SITE_CONTENT.license}</span>
              <p className="mt-2 text-xs text-neutral-400">© {new Date().getFullYear()} HRM Building & Remodeling. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
