"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  Hammer,
  Bath,
  CookingPot,
  Home,
  ChevronRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const projectImages = {
  heroKitchen: "/images/projects/hero-kitchen.jpg",
  kitchenAlt: "/images/projects/kitchen-1.jpg",
  bathVanity: "/images/projects/bathroom-1.jpg",
  bathShower: "/images/projects/bathroom-2.jpg",
  basementBuiltins: "/images/projects/basement-1.jpg",
  basementRoom: "/images/projects/basement-2.jpg",
  deckMain: "/images/projects/deck-1.jpg",
  deckAlt: "/images/projects/deck-2.jpg",
  laundry: "/images/projects/laundry-1.jpg",
  stairs: "/images/projects/stairs-1.jpg",
};

const featuredProjects = [
  {
    title: "Kitchen Remodeling",
    description:
      "Kitchen remodeling specialists for Vernon-area homeowners, including custom cabinetry, quartz countertops, tile backsplash, kitchen islands, and layout improvements.",
    tag: "High-Value Projects",
    image: projectImages.kitchenAlt,
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Bathroom renovation services including tile showers, frameless glass, custom vanities, waterproof systems, and clean modern finishes.",
    tag: "Bathrooms & Showers",
    image: projectImages.bathVanity,
  },
  {
    title: "Basement Finishing",
    description:
      "Basement finishing for family rooms, playrooms, home offices, guest spaces, in-law areas, built-ins, laundry areas, bathrooms, stairs, and full lower-level transformations that add usable family space and real home value.",
    tag: "Great Winter Work",
    image: projectImages.basementBuiltins,
  },
  {
    title: "Deck Construction",
    description:
      "Custom deck construction including composite decking, picture-frame deck borders, premium rail systems, custom stairs, and multi-level outdoor living spaces built to last.",
    tag: "Outdoor Living",
    image: projectImages.deckMain,
  },
];

const services = [
  {
    icon: CookingPot,
    title: "Kitchen Remodeling",
    text: "Custom kitchen remodeling designed to improve function, storage, and everyday usability. We install quality cabinetry, quartz or granite countertops, tile backsplashes, modern lighting, and thoughtfully designed islands and layouts that create a beautiful kitchen built for the way your family actually lives.",
  },
  {
    icon: Bath,
    title: "Full Bathroom Remodeling",
    text: "Complete bathroom renovations including tile showers, vanities, waterproof systems, and modern finishes.",
  },
  {
    icon: Bath,
    title: "Efficient Bathroom Upgrades",
    text: "Affordable bathroom renovations designed to dramatically improve the space without a full multi-week remodel. Ideal for homeowners who want a clean, modern upgrade completed quickly without cutting corners.",
  },
  {
    icon: Home,
    title: "Basement Finishing",
    text: "Transform unused lower levels into comfortable finished living space such as family rooms, playrooms, home offices, guest areas, or entertainment rooms — creating more space for your family while increasing the overall value of your home.",
  },
  {
    icon: Hammer,
    title: "Decks & Outdoor Living",
    text: "Custom composite and pressure-treated decks designed to expand your outdoor living space. We build durable, low-maintenance decks using premium composite decking, strong framing, custom stairs, and modern rail systems. Options like picture-frame decking borders, built-in lighting, and multi-level deck designs help create a comfortable outdoor space for relaxing and entertaining while increasing the overall value of your home.",
  },
  {
    icon: Home,
    title: "Windows & Doors",
    text: "Professional installation of energy-efficient windows and durable exterior doors to improve comfort, security, and curb appeal.",
  },
];

const gallery = [
  { title: "Composite Deck With Black Railings", image: projectImages.deckAlt },
  { title: "Large Outdoor Living Deck", image: projectImages.deckMain },
  { title: "Modern Kitchen Remodel", image: projectImages.kitchenAlt },
  { title: "Kitchen With Large Island", image: projectImages.heroKitchen },
  { title: "Custom Tile Walk-In Shower", image: projectImages.bathShower },
  { title: "Double Vanity Bathroom", image: projectImages.bathVanity },
  { title: "Finished Basement Entertainment Space", image: projectImages.basementRoom },
  { title: "Basement Built-Ins & Fireplace Wall", image: projectImages.basementBuiltins },
  { title: "Laundry & Utility Space Remodel", image: projectImages.laundry },
  { title: "Custom Stair Detail", image: projectImages.stairs },
  { title: "Frameless Shower Renovation", image: projectImages.bathShower },
  { title: "Composite Stair and Deck Detail", image: projectImages.deckAlt },
];

const highlights = [
  "25+ Years Experience",
  "Licensed & Insured",
  "Local Vernon Contractor",
  "Free Estimates",
  "Financing Available",
];

const positioningPoints = [
  "Over 25 years of hands-on residential remodeling experience",
  "Small, personable crew that homeowners work with directly",
  "Full-service contractor handling projects from start to finish",
  "Projects built with careful craftsmanship and attention to detail",
  "Clear communication and dependable scheduling",
  "Real work from local Vernon-area homes — not stock photos",
  "Designs focused on everyday function, durability, and long-term home value",
  "Clean, organized job sites that respect your home",
  "Thoughtful layouts that improve how spaces are used",
  "Durable materials and proper installation methods",
];

const recentProjects = [
  "Kitchen remodel – Vernon, CT",
  "Tile shower renovation – Ellington, CT",
  "Composite deck project – Tolland, CT",
  "Finished basement – Manchester, CT",
];

const kitchenFeatures = [
  "Cabinet installation",
  "Quartz & granite countertops",
  "Tile backsplash",
  "Kitchen islands",
  "Layout improvements",
  "Lighting and finish updates",
];

const bathroomUpgradeFeatures = [
  "Tub to shower conversions",
  "Shower replacements",
  "New vanities",
  "Updated fixtures",
  "Waterproof wall systems",
  "Faster turnaround without cutting corners",
];

const serviceAreas = [
  "Vernon",
  "Ellington",
  "Tolland",
  "Manchester",
  "South Windsor",
  "Glastonbury",
  "Rockville",
];

function ImageTile({ src, alt, className = "" }: { src: string | null; alt: string; className?: string }) {
  if (!src) {
    return (
      <div
        className={`flex h-full w-full items-end rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-300 p-4 ${className}`.trim()}
      >
        <div className="rounded-xl bg-white/80 px-3 py-2 text-xs font-medium text-neutral-700 shadow-sm">
          {alt}
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} className={`h-full w-full rounded-2xl object-cover ${className}`.trim()} />;
}

export default function Page() {
  useEffect(() => {
    const existing = document.querySelector('script[data-elfsight-platform="true"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.setAttribute("data-elfsight-platform", "true");
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="HRM Building & Remodeling logo" className="h-11 w-auto" />
              <div className="text-xl font-bold tracking-tight">HRM Building &amp; Remodeling LLC</div>
            </div>
            <div className="text-sm text-neutral-500">Vernon, CT remodeling contractor</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#about" className="hover:text-black">Why HRM</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="relative h-[560px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_35%),linear-gradient(135deg,_#1f2937_0%,_#111827_45%,_#0f172a_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/25" />

          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 text-white">
            <div>
              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                HRM Building & Remodeling LLC
              </h1>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white/95 md:text-4xl">
                Kitchen, Bathroom, Basement &amp; Deck Specialists in Vernon, CT
              </h2>
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
              Kitchen, bathroom, basement, and deck specialists serving Vernon, CT and surrounding communities with over 25 years of experience delivering honest work, quality craftsmanship, and beautiful results.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              We handle kitchen remodeling, bathroom renovations, basement finishing, deck construction, and window and door installation throughout the Vernon area. Every project is built with careful craftsmanship, clear communication, and attention to detail. Financing options are also available to help make your project more manageable.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button className="rounded-xl bg-white px-6 py-5 text-base text-black hover:bg-white/90">Request a Free Estimate</Button>
              <Button variant="secondary" className="rounded-xl border border-white bg-transparent px-6 py-5 text-base text-white hover:bg-white/10">View Our Projects</Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-base text-white/90">
              <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Kitchens</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Bathrooms</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Basements</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Decks</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Windows & Doors</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-6 max-w-7xl px-6 md:mt-8 lg:mt-10">
          <Card className="overflow-hidden rounded-[2rem] border-0 bg-white shadow-2xl shadow-black/10">
            <CardContent className="grid gap-6 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Trusted Local Remodeling Contractor</p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {["Honesty", "Integrity", "Quality Craftsmanship"].map((item) => (
                    <div key={item} className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-center text-sm font-semibold text-neutral-900">{item}</div>
                  ))}
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
                  HRM Building & Remodeling LLC has built a reputation in the Vernon area for honest work, clear communication, and quality craftsmanship. Every project is approached with attention to detail and a focus on creating spaces that are both functional and built to last for years.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm font-semibold text-neutral-800">{item}</div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Services</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Your Trusted Partner for All Your Remodeling Needs</h2>
          <p className="mt-4 text-neutral-600">
            With a quarter-century of expertise, HRM Building And Remodeling LLC is your trusted partner for home transformations in the Vernon area. Specializing in kitchen remodeling, bathroom renovations, basement finishing, decks, windows, and doors, our team brings visions to life with unparalleled skill. From initial design to final installation, we provide a seamless, full-service experience. Our commitment to honesty, integrity, and quality craftsmanship ensures every project is completed to the highest standard, delivering beautiful and lasting results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.35 }}>
                <Card className="h-full rounded-3xl border-0 shadow-md shadow-black/5">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100"><Icon size={22} /></div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{service.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <Card className="rounded-[2rem] border-0 bg-neutral-950 text-white shadow-xl">
              <CardContent className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Affordable Bathroom Upgrades</p>
                <h2 className="mt-3 text-3xl font-bold">Fast, clean bathroom improvements without cutting corners</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">Not every bathroom needs a full renovation. We offer efficient bathroom upgrades for homeowners who want a dramatic improvement without a long multi-week project. The focus stays on proper installation, clean finishes, and long-term value.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {bathroomUpgradeFeatures.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-neutral-200"><CheckCircle2 size={16} className="mt-0.5 shrink-0" /><span>{item}</span></div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-0 bg-neutral-100 shadow-md shadow-black/5">
              <CardContent className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Custom Kitchen Remodeling</p>
                <h2 className="mt-3 text-3xl font-bold">High-value kitchen projects built for everyday life</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">Kitchens are one of the biggest investments you can make in your home. We focus on layouts, finishes, and details that improve function, increase storage, and create a space your family will enjoy every day.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {kitchenFeatures.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-neutral-700 shadow-sm shadow-black/5"><CheckCircle2 size={16} className="mt-0.5 shrink-0" /><span>{item}</span></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-neutral-100/70 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Featured Work</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Recent Remodeling Projects</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-neutral-600">Browse recent kitchen, bathroom, basement, deck, window, and door projects from HRM Building & Remodeling LLC.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProjects.map((project, idx) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.35 }}>
                <Card className="overflow-hidden rounded-3xl border-0 bg-white shadow-md shadow-black/5">
                  <div className="aspect-[4/3] p-3"><ImageTile src={project.image} alt={project.title} className="rounded-2xl" /></div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="rounded-full">{project.tag}</Badge>
                    <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[2rem] border-0 bg-neutral-950 text-white shadow-xl">
              <CardContent className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Real Projects From Local Homes</p>
                <h2 className="mt-3 text-3xl font-bold">Before & After Remodeling</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">Real before-and-after projects show the kind of transformation possible in your own home. These examples feature kitchens, bathrooms, basements, and decks completed for homeowners throughout the local area.</p>
                <div className="mt-6 grid gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/10 p-3 text-center text-xs text-neutral-300">Before Photo</div>
                    <div className="rounded-xl bg-white/10 p-3 text-center text-xs text-neutral-300">After Photo</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/10 p-3 text-center text-xs text-neutral-300">Before Photo</div>
                    <div className="rounded-xl bg-white/10 p-3 text-center text-xs text-neutral-300">After Photo</div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {recentProjects.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-neutral-200"><MapPin size={16} className="shrink-0" /><span>{item}</span></div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card id="about" className="rounded-[2rem] border-0 bg-neutral-100 shadow-md shadow-black/5">
              <CardContent className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">About HRM</p>
                <h2 className="mt-3 text-3xl font-bold">A local company built on honesty, integrity, and craftsmanship</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">With over 25 years of experience in residential remodeling, HRM Building & Remodeling LLC has built a reputation for honest work, quality craftsmanship, and dependable service. We focus on kitchens, bathrooms, basements, decks, windows, and doors for homeowners throughout the Vernon area.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Project Gallery</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">More Real Projects</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => (
                <Card key={item.title} className="overflow-hidden rounded-3xl border-0 shadow-md shadow-black/5">
                  <div className="aspect-square p-3"><ImageTile src={item.image} alt={item.title} className="rounded-2xl" /></div>
                  <CardContent className="px-5 pb-5 pt-0"><div className="text-xs font-medium text-neutral-600">{item.title}</div></CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-neutral-950 p-8 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Why Our Projects Stand Out</p>
            <h3 className="mt-3 text-3xl font-bold">Why Homeowners Choose HRM</h3>
            <p className="mt-5 text-sm leading-7 text-neutral-300">Every project we take on is built with the goal of creating a space that works better for your family and lasts for years. From kitchens and bathrooms to basements, decks, windows, and doors, we focus on thoughtful design, careful installation, and clear communication so homeowners feel confident from start to finish.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {positioningPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-neutral-200"><CheckCircle2 size={18} className="mt-0.5 shrink-0" /><span>{point}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-xl">
              <CardContent className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Why Homeowners Choose HRM</p>
                <h2 className="mt-3 text-3xl font-bold">Experience, integrity, craftsmanship, and dependable service</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">Homeowners want to know they are hiring a contractor they can trust. With decades of hands-on experience and a focus on doing the job the right way, HRM Building & Remodeling approaches every project with careful workmanship, honest communication, and attention to detail from start to finish. Our goal is simple — create spaces that work better for your family and hold up for years to come.</p>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-xl">
              <CardContent className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Google Reviews</p>
                <h2 className="mt-3 text-3xl font-bold">Google Reviews</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">This section is ready for a Google Reviews widget. Once you choose a provider such as Elfsight, EmbedSocial, or Taggbox, your embed code can be placed here so reviews update automatically.</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="elfsight-app-3c9e474f-8be7-470a-b007-3bf725c80b2d" data-elfsight-app-lazy></div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button className="rounded-xl bg-white px-5 py-4 text-sm text-black hover:bg-white/90">Read Our Reviews</Button>
                  <Button variant="secondary" className="rounded-xl border border-white bg-transparent px-5 py-4 text-sm text-white hover:bg-white/10">Leave a Review</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Start Your Remodeling Project</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Planning a project for your home? It&apos;s never too soon to start gathering information.</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">Serving Vernon, Ellington, Manchester, Tolland, South Windsor, Glastonbury, Rockville, and surrounding communities. Reach out today to request a free estimate and start planning your next home improvement project.</p>
            </div>
            <Button className="rounded-2xl px-6 py-6 text-base">Request a Free Estimate</Button>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xl font-bold">HRM Building &amp; Remodeling LLC</div>
            <p className="mt-3 text-sm leading-6 text-neutral-600">Kitchen remodeling, bathroom renovation, basement finishing, deck construction, windows, doors, and full residential remodeling.</p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Service Focus</div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovation</li>
              <li>Basement Finishing</li>
              <li>Deck Construction</li>
              <li>Windows &amp; Doors</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Service Area</div>
            <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-neutral-700">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2"><MapPin size={14} className="shrink-0" /> {area}</div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Contact</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">CT HIC #0654884</div>
            <div className="mt-4 space-y-3 text-sm text-neutral-700">
              <div className="flex items-center gap-2"><Phone size={16} /> <a href="tel:8605974872" className="hover:underline">860-597-4872</a></div>
              <div className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:HRM.remodeling@gmail.com" className="hover:underline">HRM.remodeling@gmail.com</a></div>
              <button className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">Request estimate <ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
