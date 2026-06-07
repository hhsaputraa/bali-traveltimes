"use client";

import { useState } from "react";
import { Compass, Calendar, Car, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoBanner() {
  return (
    <section className="relative w-full aspect-video max-h-[85vh] bg-black overflow-hidden">
      {/* Background Video with Sound & Controls */}
      <video
        autoPlay
        loop
        controls
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="https://balitraveltimes.com/wp-content/uploads/2024/01/Home-Bali-Travel-Times-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export function Hero() {
  const [service, setService] = useState("Full Day Tour");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");

  const handleBook = (e) => {
    e.preventDefault();
    const whatsappNum = "6281234567890";
    const text = `Hi Bali Travel Times! I'd like to book a service:\n\n` + 
                 `• *Service:* ${service}\n` + 
                 `• *Date:* ${date || "Flexible"}\n` + 
                 `• *Name:* ${name || "Guest"}\n\n` +
                 `Please check availability and send me more details. Thank you!`;
    const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-16 md:py-24 bg-background border-b border-zinc-200/40">
      {/* Subtle overlay grid for texture */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <div className="container relative mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Selling Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-900 uppercase tracking-wider">
              <Compass className="h-3.5 w-3.5 text-primary-700" />
              <span>Bali Guide & Driver</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight text-primary-950">
              Your Personal English-Speaking Driver & <span className="text-accent-600">Tour Guide in Bali</span>
            </h1>
            
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl font-light">
              Explore the paradise island of Bali in comfort and safety with our private tour guides. Customized itineraries, well-maintained air-conditioned vehicles, transparent pricing, and zero deposit required.
            </p>

            {/* Quick Ratings & Trust indicators */}
            <div className="pt-4 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-primary-950">5.0 Star Rated Agency</span>
              </div>
              <div className="h-4 w-px bg-zinc-200 hidden sm:block" />
              <div className="text-sm text-zinc-500">
                <span className="text-zinc-700 font-semibold">Free cancellation</span> & No booking deposit
              </div>
            </div>
          </div>

          {/* Right Column: Floating Quick Booking Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="bg-white shadow-xl rounded-3xl border border-zinc-200/50 p-6 md:p-8 text-zinc-900">
              <h2 className="font-serif text-2xl font-bold text-primary-950 mb-2">
                Quick Booking Inquiry
              </h2>
              <p className="text-xs text-zinc-500 mb-6">
                Fill out the quick form below to request a booking directly via WhatsApp.
              </p>

              <form onSubmit={handleBook} className="space-y-4">
                {/* Service Type Select */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Service Required
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all appearance-none cursor-pointer text-zinc-800"
                    >
                      <option value="Full Day Tour">Full Day Tour Packages</option>
                      <option value="Car Rental with Driver">Car Rental (With Driver/Petrol)</option>
                      <option value="Airport Transfer">Airport Pick-up / Drop-off</option>
                      <option value="Bali Activity Booking">Things to Do / Activities</option>
                      <option value="Custom Tour Request">Custom Destination Tour</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Booking Date */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-zinc-800"
                    />
                  </div>
                </div>

                {/* Guest Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-zinc-800"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <Button
                  type="submit"
                  className="w-full bg-accent-600 text-white hover:bg-accent-700 hover:shadow-lg hover:shadow-accent-600/20 py-6 mt-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  Book via WhatsApp
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
