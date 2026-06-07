"use client";

import { Banknote, Car, Headphones, Users, Sparkles } from "lucide-react";

const VALUES = [
  {
    icon: Banknote,
    title: "Affordable Prices",
    description: "We provide very affordable prices with maximum service",
  },
  {
    icon: Car,
    title: "Private Car",
    description: "We provide very affordable prices with maximum service every guest who tours with us, is not combined with other groups",
  },
  {
    icon: Headphones,
    title: "Fast Response",
    description: "Our customer service will serve you with a good response and fast respon",
  },
  {
    icon: Users,
    title: "Experienced Guide",
    description: "Our tour guides are very reliable in serving guests and are fluent in several languages",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle overlay grid for texture */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-xs font-semibold text-primary-900 uppercase tracking-widest">
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-primary-950 leading-tight">
            Why Choose Us Bali Travel Times
          </h2>
          <div className="h-1.5 w-20 bg-accent-600 rounded-full mx-auto mt-4" />
        </div>

        {/* 4 Cards Grid - Modern curved bottom design matching user's image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center text-center bg-white border border-zinc-200/60 p-8 pt-10 rounded-t-3xl rounded-b-[3.5rem] shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              >
                {/* Decorative glowing card accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-500/20 via-primary-600/40 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Card Icon Container */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-950 border border-primary-100/50 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300 mb-6 shadow-xs group-hover:scale-110">
                  <IconComponent className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-primary-950 mb-3 group-hover:text-primary-900 transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-light mt-1">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
