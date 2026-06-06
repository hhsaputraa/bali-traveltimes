// Trigger rebuild for CSS variables update
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Star, ArrowRight, Sparkles } from "lucide-react";
import { Hero, VideoBanner } from "@/components/sections/hero";
import { CustomerSatisfaction } from "@/components/sections/customer-satisfaction";
import { CarRental } from "@/components/sections/car-rental";
import { Activities } from "@/components/sections/activities";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Button } from "@/components/ui/button";
import { formatUSD } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { ALL_TOURS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const tours = await client.fetch(ALL_TOURS_QUERY) || [];

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Clean looping video section */}
      <VideoBanner />

      {/* Customer Satisfaction metrics */}
      <CustomerSatisfaction />

      {/* Intro Hero Banner */}
      <Hero />

      {/* Signature Tours Section */}
      <section id="tours" className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-xs font-semibold text-primary-900 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Experiences</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950">
              Signature Bali Tour Packages
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-light">
              Handcrafted private itineraries designed to show you the best of Bali&apos;s culture, temples, nature, and photogenic wonders.
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.length === 0 ? (
              <div className="text-center py-12 text-zinc-500 w-full col-span-full">
                No tour packages are currently available. Check back soon!
              </div>
            ) : (
              tours.map((tour) => (
                <div 
                  key={tour._id} 
                  className="group flex flex-col bg-white border border-zinc-200/60 rounded-2xl overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-300"
                >
                  {/* Image Container with mainImage from Sanity */}
                  <div className="relative aspect-[4/3] w-full bg-zinc-200 overflow-hidden">
                    {tour.mainImage?.asset ? (
                      <Image
                        src={urlFor(tour.mainImage).width(600).height(450).url()}
                        alt={tour.mainImage?.alt || tour.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-primary-950 flex items-center justify-center p-6">
                        <span className="font-serif font-semibold text-lg text-white text-center">{tour.title}</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-zinc-800 flex items-center gap-1 z-10 shadow-sm border border-zinc-200/30">
                      <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" />
                      <span>{tour.rating || "5.0"}</span>
                    </div>
                  </div>

                  {/* Tour Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-2 font-medium">
                        <MapPin className="h-3.5 w-3.5 text-primary-700" />
                        <span>{tour.location}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-primary-950 group-hover:text-primary-900 transition-colors line-clamp-1">
                        {tour.title}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed font-light mt-2 line-clamp-2">
                        {tour.description}
                      </p>
                    </div>

                    <div className="mt-6">
                      {/* Specs Row */}
                      <div className="flex items-center justify-between border-t border-zinc-100 pt-4 text-xs text-zinc-500">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-zinc-400" />
                          <span>{tour.duration}</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-[10px] font-semibold text-zinc-600">
                          {tour.difficulty || "Easy"}
                        </span>
                      </div>

                      {/* Pricing and Action */}
                      <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between gap-4">
                        <div>
                          <span className="block text-[9px] text-zinc-400 font-bold uppercase tracking-wider">Starting at</span>
                          <span className="text-xl font-bold text-primary-950 font-serif">
                            {formatUSD(tour.price)}
                          </span>
                          <span className="text-[10px] text-zinc-500"> / pax</span>
                        </div>
                        <Link href={`/tour/${tour.slug?.current}`}>
                          <Button 
                            className="bg-primary-900 hover:bg-primary-950 text-white group/btn rounded-xl px-4 py-2.5 text-xs font-semibold flex items-center gap-1.5 transition-all"
                            size="sm"
                          >
                            <span>View Details</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Private Car Rental Services */}
      <CarRental />

      {/* Top Activities / Things to Do */}
      <Activities />

      {/* Why Choose Us & Metrics */}
      <WhyChooseUs />
    </div>
  );
}
