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

export default function HRMWebsitePreview() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-5">
          <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-900 md:flex">
            <a href="#services" className="hover:text-neutral-600">Services</a>
            <a href="#projects" className="hover:text-neutral-600">Projects</a>
            <a href="#reviews" className="hover:text-neutral-600">Reviews</a>
            <a href="#about" className="hover:text-neutral-600">About</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
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
            <div className="mb-5 inline-flex rounded-full border bg-neutral-50 px-4 py-2 text-sm">
              Honesty • Integrity • Quality Craftsmanship
            </div>

            <h1 className="text-4xl font-bold md:text-5xl">
              Kitchen, Bathroom, Basement & Deck Specialists Serving Vernon, CT & Surrounding Towns
            </h1>

            <p className="mt-6 text-lg text-neutral-700">
              Over 25 years of experience delivering quality craftsmanship, clear communication, and results that last.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="rounded-xl bg-amber-600 px-6 py-4 text-white font-semibold">
                Request Estimate
              </a>
              <a href="tel:8605974872" className="rounded-xl bg-black px-6 py-4 text-white font-semibold">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="px-6 py-16">
        <h2 className="text-center text-3xl font-bold mb-8">
          Google Reviews
        </h2>

        <div className="elfsight-app-3c9e474f-8be7-470a-b007-3bf725c80b2d" />
      </section>

    </div>
  );
}
