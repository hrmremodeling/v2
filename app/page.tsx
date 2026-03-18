"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";;
import {
  Bath,
  Building2,
  CheckCircle2,
  ChevronRight,
  CookingPot,
  Hammer,
  Home,
  Mail,
  MapPin,
  Phone,
  Wallet,
} from "lucide-react";

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
];

const highlights = [
  "25+ Years Experience",
  "Licensed & Insured",
  "Small, Personable Crew",
  "Full-Service Contractor",
  "Free Estimates",
  "Financing Available",
];

const whyChoose = [
  "Small, personable crew with direct communication",
  "Full-service contractor from planning to completion",
  "Careful craftsmanship and attention to detail",
  "Clean, organized job sites that respect your home",
  "Real projects from local homes",
  "Dependable scheduling and clear communication",
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

const kitchenFeatures = [
  "Cabinet installation",
  "Quartz & granite countertops",
  "Tile backsplash",
  "Kitchen islands",
  "Layout improvements",
  "Wall removal for more open living space",
  "Lighting upgrades",
];

const bathFeatures = [
  "Tub to shower conversions",
  "Shower replacements",
  "New vanities",
  "Updated fixtures",
  "Waterproof wall systems",
  "Faster turnaround",
];

const projectGalleries = [
  {
    title: "Kitchen Remodel",
    images: ["/images/kitchen1.jpg", "/images/kitchen2.jpg", "/images/kitchen3.jpg"],
  },
  {
    title: "Bathroom Renovation",
    images: ["/images/bathroom1.jpg", "/images/bathroom2.jpg", "/images/bathroom3.jpg"],
  },
  {
    title: "Basement Finish",
    images: ["/images/basement1.jpg", "/images/basement2.jpg"],
  },
];

function PhotoPlaceholder({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-gradient-to-br from-neutral-200 via-neutral-100 to-white ${
        tall ? "min-h-[340px]" : "min-h-[220px]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_35%)]" />
      <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-neutral-700 shadow-sm">
        {label}
      </div>
    </div>
  );
}

export default function HRMWebsitePreview() {
    useEffect(() => {
    const existing = document.querySelector('script[data-elfsight="true"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.setAttribute("data-elfsight", "true");
    document.body.appendChild(script);
  }, []);
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
              <div className="text-lg font-bold tracking-tight">HRM Building & Remodeling LLC</div>
              <div className="text-sm text-neutral-500">Vernon, CT</div>
            </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90">
              Honesty • Integrity • Quality Craftsmanship
            </div>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
              Kitchen, Bathroom, Basement &amp; Deck Specialists in Vernon, CT
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              HRM Building &amp; Remodeling LLC serves homeowners throughout the Vernon area with over 25 years of experience delivering careful workmanship, clear communication, and beautiful, lasting results.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">
              We handle kitchen remodeling, bathroom renovations, basement finishing, deck construction, and window and door installation. Financing options are available to help make your project more manageable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="rounded-xl bg-amber-600 px-6 py-5 text-base font-semibold text-white hover:bg-amber-700">
                Request a Free Estimate
              </Button>
              <Button variant="secondary" className="rounded-xl border border-white/70 bg-transparent px-6 py-5 text-base font-semibold text-white hover:bg-white/10">
                View Our Projects
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PhotoPlaceholder label="Hero Project Photo" tall />
            <div className="grid gap-4">
              <PhotoPlaceholder label="Kitchen / Bath Photo" />
              <PhotoPlaceholder label="Deck / Basement Photo" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-center text-sm font-semibold text-neutral-800">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Services</p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Custom Kitchen Remodeling</p>
              <h2 className="mt-3 text-3xl font-bold text-neutral-900">High-value kitchens built for everyday life</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                We focus on kitchens that improve how your home functions every day, with better storage, better workflow, open-concept possibilities like wall removal, and finishes that hold up beautifully over time.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {kitchenFeatures.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-0 bg-white shadow-sm">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Affordable Bathroom Upgrades</p>
              <h2 className="mt-3 text-3xl font-bold">Fast, clean improvements without cutting corners</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Not every bathroom needs a full renovation. We also offer efficient upgrades for homeowners who want a meaningful improvement without an extended construction timeline.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {bathFeatures.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
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
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Featured Work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Recent Remodeling Projects</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-neutral-600">
            Browse recent kitchen, bathroom, basement, deck, window, and door projects from HRM Building &amp; Remodeling LLC.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card className="overflow-hidden rounded-[1.75rem] shadow-sm">
            <div className="p-3"><PhotoPlaceholder label="Kitchen Project Photo" /></div>
            <CardContent className="p-6 pt-2">
              <Badge variant="secondary" className="rounded-full">High-Value Projects</Badge>
              <h3 className="mt-3 text-xl font-semibold">Kitchen Remodeling</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">Custom cabinetry, countertops, backsplash, islands, and layout improvements built around how homeowners actually use the space.</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-[1.75rem] shadow-sm">
            <div className="p-3"><PhotoPlaceholder label="Bathroom Project Photo" /></div>
            <CardContent className="p-6 pt-2">
              <Badge variant="secondary" className="rounded-full">Bathrooms &amp; Showers</Badge>
              <h3 className="mt-3 text-xl font-semibold">Bathroom Remodeling</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">Tile showers, vanities, frameless glass, waterproof systems, and clean modern finishes completed with careful installation.</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-[1.75rem] shadow-sm">
            <div className="p-3"><PhotoPlaceholder label="Basement Project Photo" /></div>
            <CardContent className="p-6 pt-2">
              <Badge variant="secondary" className="rounded-full">Great Winter Work</Badge>
              <h3 className="mt-3 text-xl font-semibold">Basement Finishing</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">Family rooms, offices, guest areas, built-ins, and full lower-level transformations that add usable living space and value.</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-[1.75rem] shadow-sm">
            <div className="p-3"><PhotoPlaceholder label="Deck Project Photo" /></div>
            <CardContent className="p-6 pt-2">
              <Badge variant="secondary" className="rounded-full">Outdoor Living</Badge>
              <h3 className="mt-3 text-xl font-semibold">Deck Construction</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">Composite and pressure-treated decks, custom stairs, rail systems, and outdoor living spaces designed to last.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Real Projects From Local Homes</p>
              <h2 className="mt-3 text-3xl font-bold text-neutral-900">Before &amp; After Remodeling</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Real before-and-after projects show the kind of transformation possible in your own home. These examples feature kitchens, bathrooms, basements, and decks completed for homeowners throughout the local area.
              </p>
              <div className="mt-6 grid gap-4">
                {projectGalleries.map((project) => (
                  <div key={project.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <div className="mb-3 text-sm font-semibold text-neutral-900">{project.title}</div>
                    <div className="grid grid-cols-2 gap-3">
                      {project.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={project.title}
                          className="rounded-xl object-cover w-full h-32 border border-neutral-200"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card id="about" className="rounded-[2rem] border border-neutral-200 shadow-sm">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">About HRM</p>
              <h2 className="mt-3 text-3xl font-bold">A local company built on honesty, integrity, and craftsmanship</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                With over 25 years of experience in residential remodeling, HRM Building &amp; Remodeling LLC has earned a reputation for doing the job the right way, with careful workmanship, direct communication, and a small crew homeowners can feel comfortable working with.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Project Gallery</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">More Real Projects</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Kitchen Project",
                "Bathroom Project",
                "Basement Project",
                "Deck Project",
                "Windows & Doors",
                "Custom Detail",
              ].map((item) => (
                <Card key={item} className="overflow-hidden rounded-[1.5rem] border border-neutral-200 shadow-sm">
                  <div className="p-3"><PhotoPlaceholder label={item} /></div>
                  <CardContent className="px-5 pb-5 pt-0">
                    <div className="text-xs font-medium text-neutral-600">{item}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Why Our Projects Stand Out</p>
              <h3 className="mt-3 text-3xl font-bold text-neutral-900">Why Homeowners Choose HRM</h3>
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
                  <div key={point} className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-neutral-100/70 px-6 py-16 text-neutral-900">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Card className="rounded-[2rem] border border-neutral-200 bg-white text-neutral-900 shadow-sm">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Experience, Integrity, Craftsmanship</p>
              <h2 className="mt-3 text-3xl font-bold">Dependable service from a contractor you can trust</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Homeowners want to know they are hiring someone who will communicate clearly, respect their home, and complete the project the right way. That is the standard HRM Building &amp; Remodeling brings to every job.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-neutral-200 bg-white text-neutral-900 shadow-sm">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Google Reviews</p>
              <h2 className="mt-3 text-3xl font-bold">What homeowners are saying</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Your Google Reviews widget will be installed here on the live site so reviews update automatically.
              </p>
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
  <div
    className="elfsight-app-3c9e474f-8be7-470a-b007-3bf725c80b2d"
    data-elfsight-app-lazy
  ></div>
</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button className="rounded-xl bg-amber-600 px-5 py-4 text-sm font-semibold text-white hover:bg-amber-700">Read Our Reviews</Button>
                <Button variant="secondary" className="rounded-xl border border-neutral-300 bg-white px-5 py-4 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">Leave a Review</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-neutral-900">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Start Your Remodeling Project</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Planning a project for your home? It&apos;s never too soon to start gathering information.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
                Serving Vernon, Ellington, Manchester, Tolland, South Windsor, Glastonbury, Rockville, and surrounding communities. Reach out today to request a free estimate and start planning your next project.
              </p>
            </div>
            <Button className="rounded-2xl bg-amber-600 px-6 py-6 text-base font-semibold text-white hover:bg-amber-700">Request a Free Estimate</Button>
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
                <div key={area} className="flex items-center gap-2">
                  <MapPin size={14} className="shrink-0" /> {area}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Contact</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">CT HIC #0654884</div>
            <div className="mt-4 space-y-3 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <Phone size={16} /> <a href="tel:8605974872" className="hover:underline">860-597-4872</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} /> <a href="mailto:HRM.remodeling@gmail.com" className="hover:underline">HRM.remodeling@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <Wallet size={16} /> Financing available
              </div>
              <button className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
                Request estimate <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
