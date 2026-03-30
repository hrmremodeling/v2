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

export default function HRMWebsitePreview() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-5">
          <nav className="hidden items-center gap-6 text-sm font-medium text-white md:flex">
            <a href="#services" className="hover:text-white/80">Services</a>
            <a href="#projects" className="hover:text-white/80">Projects</a>
            <a href="#reviews" className="hover:text-white/80">Reviews</a>
            <a href="#about" className="hover:text-white/80">About</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/opengraph-image.jpg"
            alt="Featured remodeling project"
            className="h-[380px] w-full object-cover md:h-[500px] lg:h-[620px]"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 pt-20">
            <div className="max-w-3xl text-white">
              <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                Honesty • Integrity • Quality Craftsmanship
              </div>

              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Kitchen, Bathroom, Basement & Deck Specialists Serving Vernon, CT & Surrounding Towns
              </h1>

              <p className="mt-6 text-lg text-white/90">
                Over 25 years of experience delivering quality craftsmanship, clear communication, and results that last.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="#contact"
                  className="rounded-xl bg-amber-600 px-6 py-4 font-semibold text-white hover:bg-amber-700"
                >
                  Request Estimate
                </a>

                <a
                  href="tel:8605974872"
                  className="rounded-xl bg-white px-6 py-4 font-semibold text-black hover:bg-neutral-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            "25+ Years Experience",
            "Licensed & Insured",
            "Small Crew",
            "Full-Service",
            "Free Estimates",
            "Financing Available",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-neutral-50 px-4 py-4 text-center text-sm font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-4xl font-bold mb-10">
          Remodeling Services
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Kitchen Remodeling",
            "Bathroom Remodeling",
            "Basement Finishing",
            "Deck Construction",
            "Windows & Doors",
          ].map((service) => (
            <Card key={service}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{service}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-4xl font-bold mb-10">
          Explore Our Work
        </h2>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-neutral-100 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">About HRM</h2>
          <p className="mt-4 text-neutral-600">
            A small, personable crew focused on quality, communication, and long-lasting results.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="px-6 py-16">
        <h2 className="text-center text-4xl font-bold mb-10">
          Google Reviews
        </h2>

        <div className="elfsight-app-3c9e474f-8be7-470a-b007-3bf725c80b2d" />
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 bg-neutral-100 text-center">
        <h2 className="text-4xl font-bold">Get Started</h2>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:HRM.remodeling@gmail.com"
            className="bg-amber-600 text-white px-6 py-4 rounded-xl"
          >
            Email
          </a>

          <a
            href="tel:8605974872"
            className="bg-black text-white px-6 py-4 rounded-xl"
          >
            Call
          </a>
        </div>
      </section>
    </div>
  );
}
