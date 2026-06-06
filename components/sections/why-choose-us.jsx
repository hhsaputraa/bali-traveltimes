"use client";

import { ShieldCheck, Tag, Zap, Compass, Sparkles, Award } from "lucide-react";

const VALUES = [
  {
    icon: Tag,
    title: "Affordable & Transparent Prices",
    description: "Our rates are all-inclusive (petrol, parking, toll) with no hidden fees or extra surcharges. Budget-friendly luxury.",
  },
  {
    icon: ShieldCheck,
    title: "100% Private Vehicles",
    description: "Enjoy a fully private car for your trip. No sharing with strangers. Clean, modern, air-conditioned vehicles.",
  },
  {
    icon: Zap,
    title: "Fast Response Support",
    description: "Have questions? Our support team is online on WhatsApp to help plan, refine, and secure your booking in minutes.",
  },
  {
    icon: Compass,
    title: "Experienced Driver-Guides",
    description: "English-speaking native Balinese drivers. They double as local guides to give you deep cultural insights.",
  },
];

const STATS = [
  { value: "100%", label: "Private Tours" },
  { value: "99%", label: "Satisfaction" },
  { value: "5.0", label: "TripAdvisor Rating" },
  { value: "Zero", label: "Deposit Needed" },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Stats and Headline */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/25 text-xs font-semibold text-accent-700 uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                <span>Our Credentials</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950 leading-tight">
                Why Discerning Travelers Choose Us
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-light">
                We believe travel should be seamless and memorable. By taking care of the logistics and providing trusted local guides, we let you focus entirely on enjoying Bali&apos;s beauty.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {STATS.map((stat) => (
                <div 
                  key={stat.label}
                  className="bg-white border border-zinc-200/50 rounded-2xl p-5 hover:border-zinc-300 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-serif font-bold text-primary-950">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 font-semibold tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {VALUES.map((value) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.title}
                  className="group flex flex-col bg-white border border-zinc-150 p-6 rounded-2xl hover:shadow-lg hover:border-zinc-300 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-900 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300 mb-5">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary-950 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
