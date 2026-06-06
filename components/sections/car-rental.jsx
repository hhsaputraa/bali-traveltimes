"use client";

import { Users, Fuel, Sparkles, Check, X, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CARS = [
  {
    name: "Toyota Avanza",
    class: "Comfort MPV",
    price: "50",
    capacity: "6 Passengers",
    luggage: "2 Bags",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
    description: "The most popular choice for small families or groups exploring Bali's scenic routes.",
    isBestSeller: true,
  },
  {
    name: "Toyota Innova Reborn",
    class: "Premium MPV",
    price: "60",
    capacity: "7 Passengers",
    luggage: "3 Bags",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Enhanced suspension, extra legroom, and premium comfort for longer journeys.",
    isBestSeller: false,
  },
  {
    name: "Toyota Hiace Commuter",
    class: "Tourist Minibus",
    price: "80",
    capacity: "15 Passengers",
    luggage: "6 Bags",
    image: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Perfect for large groups, weddings, corporate retreats, or diving excursions.",
    isBestSeller: false,
  },
  {
    name: "Toyota Alphard VIP",
    class: "Luxury VIP Van",
    price: "180",
    capacity: "6 Passengers",
    luggage: "4 Bags",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Premium leather captain seats, executive spacing, and ultimate luxury travel.",
    isBestSeller: false,
  },
];

const INCLUSIONS = [
  "English-speaking driver-guide",
  "Comfortable air-conditioned private vehicle",
  "Petrol / Fuel cost",
  "All parking fees and toll fees",
  "Chilled mineral water during the trip",
];

const EXCLUSIONS = [
  "Entrance tickets to attractions",
  "Meals (Lunch or Dinner)",
  "Personal expenses & tipping",
];

export function CarRental() {
  const handleBookCar = (carName) => {
    const whatsappNum = "6281234567890";
    const text = `Hi Bali Travel Times! I'd like to hire the *${carName}* with driver.\n` + 
                 `Please let me know availability and daily rates.`;
    const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="car-rental" className="py-24 bg-background border-y border-zinc-200/40">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-xs font-semibold text-primary-900 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Transport</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950">
            Hire Private Car in Bali
          </h2>
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-light">
            Enjoy premium private transport service with a professional, English-speaking driver. All rates include petrol, parking, and tolls with no hidden charges.
          </p>
        </div>

        {/* 4 Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CARS.map((car) => (
            <div 
              key={car.name} 
              className="group flex flex-col bg-white border border-zinc-200/60 rounded-2xl overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-300 relative"
            >
              {car.isBestSeller && (
                <div className="absolute top-3 right-3 bg-accent-500 text-white font-semibold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full z-10 shadow-sm">
                  Best Seller
                </div>
              )}
              
              {/* Car Image container */}
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-zinc-200">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Car Details */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{car.class}</span>
                  <h3 className="font-serif text-xl font-bold text-primary-950 mt-0.5">{car.name}</h3>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed mb-6 flex-1">
                  {car.description}
                </p>

                {/* Specs row */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-zinc-200/60 text-xs text-zinc-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary-700" />
                    <span>{car.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-primary-700" />
                    <span>Fuel Included</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between gap-4 mt-auto">
                  <div>
                    <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Starting at</span>
                    <span className="text-2xl font-bold text-primary-950 font-serif">${car.price}</span>
                    <span className="text-xs text-zinc-500"> / day</span>
                  </div>
                  <Button 
                    onClick={() => handleBookCar(car.name)}
                    className="bg-primary-900 text-white hover:bg-primary-950 group/btn rounded-xl px-4 py-2.5 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inclusions and Exclusions Section */}
        <div className="mt-16 bg-primary-950 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/25 text-xs font-semibold text-accent-500 uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5" />
                <span>All Inclusive Rates</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold">What is included in the price?</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                We guarantee complete transparency with our pricing. There are no hidden surcharges or surprise costs on the day of your tour.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-8">
              {/* Inclusions */}
              <div className="space-y-4">
                <h4 className="font-serif font-semibold text-white border-b border-primary-900 pb-2">Price Includes:</h4>
                <ul className="space-y-3">
                  {INCLUSIONS.map((inc) => (
                    <li key={inc} className="flex gap-2.5 text-sm text-zinc-300 leading-normal">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="space-y-4">
                <h4 className="font-serif font-semibold text-white border-b border-primary-900 pb-2">Price Excludes:</h4>
                <ul className="space-y-3">
                  {EXCLUSIONS.map((exc) => (
                    <li key={exc} className="flex gap-2.5 text-sm text-zinc-400 leading-normal">
                      <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
