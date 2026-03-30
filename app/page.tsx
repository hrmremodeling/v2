"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bath,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CookingPot,
  Hammer,
  Home,
  Mail,
  MapPin,
  Phone,
  Wallet,
  X,
} from "lucide-react";

type ProjectCategory = {
  title: string;
  shortTitle: string;
  description: string;
  cover: string;
  images: string[];
};

function buildGalleryImages(folder: string, prefix: string, count: number) {
  return Array.from({ length: count }, (_, i) =>
    `/images/projects/${folder}/${prefix}-${String(i + 1).padStart(2, "0")}.jpg`
  );
}

const services = [
  {
    icon: CookingPot,
    title: "Kitchen Remodeling",
    text: "Custom kitchen remodeling designed to improve function, storage, and everyday usability with quality cabinetry, countertops, backsplashes, lighting, and thoughtfully planned layouts.",
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    text: "Full bathroom renovations, custom tile showers, vanities, waterproof systems, and modern finishes built with careful workmanship and attention to detail.",
  },
  {
    icon: Bath,
    title: "Affordable Bathroom Upgrades",
    text: "Efficient bathroom improvements for homeowners who want a dramatic update without a full multi-week remodel and without cutting corners.",
  },
  {
    icon: Home,
    title: "Basement Finishing",
    text: "Transform unused lower levels into family rooms, playrooms, home offices, guest spaces, and entertainment areas that add comfort and long-term value.",
  },
  {
    icon: Hammer,
    title: "Deck Construction",
    text: "Custom composite and pressure-treated decks with strong framing, rail systems, stairs, and outdoor living layouts designed for durability and curb appeal.",
  },
  {
    icon: Building2,
    title: "Windows & Doors",
    text: "Professional installation of energy-efficient windows and durable exterior doors to improve comfort, security, and the appearance of your home.",
  },
] as const;

const highlights = [
  "25+ Years Experience",
  "Licensed & Insured",
  "Small, Personable Crew",
  "Full-Service Contractor",
  "Free Estimates",
  "Financing Available",
] as const;

const whyChoose = [
  "Small, personable crew with direct communication",
  "Full-service contractor from planning to completion",
  "Careful craftsmanship and attention to detail",
  "Clean, organized job sites that respect your home",
  "Real projects from local homes",
  "Dependable scheduling and clear communication",
] as const;

const serviceAreas = [
  "Vernon",
  "Ellington",
  "Tolland",
  "Manchester",
  "South Windsor",
  "Glastonbury",
  "Rockville",
] as const;

const kitchenFeatures = [
  "Cabinet installation",
  "Quartz & granite countertops",
  "Tile backsplash",
  "Kitchen islands",
  "Layout improvements",
  "Wall removal for more open living space",
  "Lighting upgrades",
] as const;

const bathFeatures = [
  "Tub to shower conversions",
  "Shower replacements",
  "New vanities",
  "Updated fixtures",
  "Waterproof wall systems",
  "Faster turnaround",
] as const;

const projectCategories: ProjectCategory[] = [
  {
    title: "Kitchen Remodeling",
    shortTitle: "Kitchens",
    description:
      "Browse completed kitchen remodels featuring cabinetry, countertops, backsplash tile, lighting, custom storage, and layout improvements.",
    cover: "/images/projects/kitchens/kitchen-17.jpg",
    images: Array.from({ length: 29 }, (_, i) =>
      `/images/projects/kitchens/kitchen-${String(i + 2).padStart(2, "0")}.jpg`
    ),
  },
  {
    title: "Bathroom Remodeling",
    shortTitle: "Bathrooms",
    description:
      "See bathroom renovations with walk-in showers, tub surrounds, vanities, tilework, flooring, and clean modern finishes.",
    cover: "/images/projects/bathrooms/bathroom-04.jpg",
    images: Array.from({ length: 27 }, (_, i) => i + 1)
      .filter((num) => num !== 2)
      .map((num) => `/images/projects/bathrooms/bathroom-${String(num).padStart(2, "0")}.jpg`),
  },
  {
    title: "Basement Finishing",
    shortTitle: "Basements",
    description:
      "Explore finished basements with open layouts, custom stairs, built-ins, storage, wet bars, laundry spaces, and flexible family living areas.",
    cover: "/images/projects/basements/basement-01.jpg",
    images: buildGalleryImages("basements", "basement", 22),
  },
  {
    title: "Decks & Exterior",
    shortTitle: "Decks",
    description:
      "View deck construction and exterior improvement work built for long-term performance, clean detailing, and everyday outdoor use.",
    cover: "/images/projects/decks/deck-01.jpg",
    images: buildGalleryImages("decks", "deck", 16),
  },
];

function GalleryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full rounded-[1.5rem] bg-neutral-100 object-cover ${className}`}
    />
  );
}

export default function HRMWebsitePreview() {
  const [activeGallery, setActiveGallery] = useState<ProjectCategory | null>(null);
  const [activeZoomIndex, setActiveZoomIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const existing = document.querySelector('script[data-elfsight="true"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.setAttribute("data-elfsight", "true");
    document.body.appendChild(script);
  }, []);

  const closeGallery = () => {
    setActiveGallery(null);
    setActiveZoomIndex(null);
  };

  const showPrevImage = () => {
    if (!activeGallery || activeZoomIndex === null) return;
    setActiveZoomIndex((activeZoomIndex - 1 + activeGallery.images.length) % activeGallery.images.length);
  };

  const showNextImage = () => {
    if (!activeGallery || activeZoomIndex === null) return;
    setActiveZoomIndex((activeZoomIndex + 1) % activeGallery.images.length);
  };

  const handleTouchStart = (clientX: number) => {
    setTouchStartX(clientX);
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStartX === null) return;
    const deltaX = clientX - touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) showPrevImage();
      else showNextImage();
    }
    setTouchStartX(null);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-5">
          <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-900 md:flex">
            <a href="#services" className="transition hover:text-neutral-600">
              Services
            </a>
            <a href="#projects" className="transition hover:text-neutral-600">
              Projects
            </a>
            <a href="#reviews" className="transition hover:text-neutral-600">
              Reviews
            </a>
            <a href="#about" className="transition hover:text-neutral-600">
              About
            </a>
            <a href="#contact" className="transition hover:text-neutral-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-neutral-200 bg-white">
        <div className="w-full">
          <img
            src="/opengraph-image.jpg"
            alt="Featured remodeling project"
            className="h-[420px] w-full object-cover md:h-[520px] lg:h-[650px]"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700">
              Honesty • Integrity • Quality Craftsmanship
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Kitchen, Bathroom, Basement &amp; Deck Specialists in Vernon, CT
            </h1>
            <p className="mt-6 text-base leading-7 text-neutral-700 md:text-lg md:leading-8">
              HRM Building &amp; Remodeling LLC serves homeowners throughout the Vernon area with over 25 years of experience delivering careful workmanship, clear communication, and beautiful, lasting results.
            </p>
            <p className="mt-4 text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
              We handle kitchen remodeling, bathroom renovations, basement finishing, deck construction, and window and door installation. Financing options are available to help make your project more manageable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex rounded-xl bg-amber-600 px-6 py-5 text-base font-semibold text-white hover:bg-amber-700"
              >
                Request a Free Estimate
              </a>
              <a
                href="#projects"
                className="inline-flex rounded-xl border border-neutral-300 bg-white px-6 py-5 text-base font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-center text-sm font-semibold text-neutral-800"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Your Trusted Partner for All Your Remodeling Needs
          </h2>
          <p className="mt-4 text-neutral-600">
            With a quarter-century of expertise, HRM Building &amp; Remodeling LLC provides full-service remodeling for kitchens, bathrooms, basements, decks, windows, and doors with a small, personable crew and a focus on doing the job the right way.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="h-full rounded-[1.75rem] border-neutral-200 shadow-sm">
                <CardContent className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{service.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-neutral-100/70 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Card className="rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Custom Kitchen Remodeling
              </p>
              <h2 className="mt-3 text-3xl font-bold text-neutral-900">
                High-value kitchens built for everyday life
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                We focus on kitchens that improve how your home functions every day, with better storage, better workflow, open-concept possibilities like wall removal, and finishes that hold up beautifully over time.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {kitchenFeatures.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] bg-white shadow-sm">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Affordable Bathroom Upgrades
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Fast, clean improvements without cutting corners
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Not every bathroom needs a full renovation. We also offer efficient upgrades for homeowners who want a meaningful improvement without an extended construction timeline.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {bathFeatures.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Featured Work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Recent Remodeling Projects
          </h2>
          <p className="mt-4 text-neutral-600">
            Browse kitchens, bathrooms, basements, and decks from real projects. Click any category to open the gallery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projectCategories.map((project) => (
            <Card
              key={project.title}
              className="cursor-pointer overflow-hidden rounded-[1.75rem] border border-neutral-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              onClick={() => {
                setActiveGallery(project);
                setActiveZoomIndex(null);
              }}
            >
              <GalleryImage src={project.cover} alt={project.title} className="h-64 rounded-none" />
              <CardContent className="p-6">
                <Badge variant="secondary" className="rounded-full">
                  High-Value Projects
                </Badge>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{project.description}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  Open gallery <ChevronRight size={16} />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="bg-neutral-100/70 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <Card className="rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                About HRM
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                A local company built on honesty, integrity, and craftsmanship
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                With over 25 years of experience in residential remodeling, HRM Building &amp; Remodeling LLC has earned a reputation for doing the job the right way, with careful workmanship, direct communication, and a small crew homeowners can feel comfortable working with.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Why Our Projects Stand Out
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Why Homeowners Choose HRM
            </h2>
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Every project we take on is built with the goal of creating a space that works better for your family and lasts for years. We focus on thoughtful design, careful installation, and clear communication so homeowners feel confident from start to finish.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Over 25 years of hands-on residential remodeling experience",
                "Small, personable crew that homeowners work with directly",
                "Full-service contractor handling projects from start to finish",
                "Projects built with careful craftsmanship and attention to detail",
                "Clear communication and dependable scheduling",
                "Designs focused on function, durability, and long-term home value",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Honesty • Integrity • Quality Craftsmanship
            </p>
            <h3 className="mt-3 text-3xl font-bold text-neutral-900">
              A small, personable crew with full-service capabilities
            </h3>
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Homeowners work directly with a team that values communication, careful workmanship, and dependable service. From planning to completion, every project is handled with attention to detail and respect for your home.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Direct communication throughout the project",
                "Thoughtful planning and careful installation",
                "Clean, organized job sites",
                "Results designed to hold up for years",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-neutral-100/70 px-6 py-16 text-neutral-900">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Google Reviews
            </p>
            <h2 className="mt-2 text-3xl font-bold">What homeowners are saying</h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <div className="p-5 md:p-6">
              <div
                className="elfsight-app-3c9e474f-8be7-470a-b007-3bf725c80b2d min-h-[300px] w-full"
                data-elfsight-app-lazy
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-neutral-900">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Start Your Remodeling Project
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Planning a project for your home? It&apos;s never too soon to start gathering information.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
                Serving Vernon, Ellington, Manchester, Tolland, South Windsor, Glastonbury, Rockville, and surrounding communities. Reach out today to request a free estimate and start planning your next project.
              </p>
            </div>
            <a
              href="mailto:HRM.remodeling@gmail.com"
              className="inline-flex rounded-2xl bg-amber-600 px-6 py-6 text-base font-semibold text-white hover:bg-amber-700"
            >
              Request a Free Estimate
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-neutral-200 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xl font-bold">HRM Building &amp; Remodeling LLC</div>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Kitchen remodeling, bathroom renovation, basement finishing, deck construction, windows, doors, and full residential remodeling.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Service Focus
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovation</li>
              <li>Basement Finishing</li>
              <li>Deck Construction</li>
              <li>Windows &amp; Doors</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Service Area
            </div>
            <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-neutral-700">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <MapPin size={14} className="shrink-0" /> {area}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              CT HIC #0654884
            </div>
            <div className="mt-4 space-y-3 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:8605974872" className="hover:underline">
                  860-597-4872
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:HRM.remodeling@gmail.com" className="hover:underline">
                  HRM.remodeling@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <Wallet size={16} /> Financing available
              </div>
              <a
                href="mailto:HRM.remodeling@gmail.com"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900"
              >
                Request estimate <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {activeGallery && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 px-4 py-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">{activeGallery.title}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/70">
                  {activeGallery.description}
                </p>
              </div>
              <button
                onClick={closeGallery}
                className="rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-4 text-sm text-white/70">
              Tap any photo to enlarge. Swipe left or right on mobile while zoomed in.
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeGallery.images.map((img, index) => (
                <button
                  key={`${activeGallery.title}-${index}`}
                  type="button"
                  onClick={() => setActiveZoomIndex(index)}
                  className="text-left"
                >
                  <GalleryImage
                    src={img}
                    alt={`${activeGallery.title} photo ${index + 1}`}
                    className="h-64 transition hover:opacity-95"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeGallery && activeZoomIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 px-4 py-4"
          onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col">
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <div className="text-sm text-white/75">
                {activeGallery.title} · Photo {activeZoomIndex + 1} of {activeGallery.images.length}
              </div>
              <button
                type="button"
                onClick={() => setActiveZoomIndex(null)}
                className="rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10"
                aria-label="Close zoomed image"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center">
              <button
                type="button"
                onClick={showPrevImage}
                className="absolute left-2 z-10 rounded-full border border-white/20 bg-black/40 p-3 text-white transition hover:bg-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <img
                src={activeGallery.images[activeZoomIndex]}
                alt={`${activeGallery.title} zoomed photo ${activeZoomIndex + 1}`}
                className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain"
              />

              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-2 z-10 rounded-full border border-white/20 bg-black/40 p-3 text-white transition hover:bg-white/10"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
