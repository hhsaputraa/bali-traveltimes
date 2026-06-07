"use client";

import { useState, useRef, useEffect } from "react";
import { Users, Fuel, Sparkles, Check, X, Shield, ArrowRight, ArrowLeft, Play, Pause, Volume2, VolumeX, Music, CreditCard, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CARS = [
  {
    name: "Toyota Avanza",
    price: "50",
    capacity: "4 persons with luggage (max 6 without luggage)",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
    description: "The most popular choice for small families or groups exploring Bali's scenic routes.",
    isBestSeller: true,
  },
  {
    name: "Toyota Innova Reborn",
    price: "60",
    capacity: "4 persons with luggage (max 6 without luggage)",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Enhanced suspension, extra legroom, and premium comfort for longer journeys.",
    isBestSeller: false,
  },
  {
    name: "Toyota Hiace Commuter",
    price: "80",
    capacity: "12 persons with luggage (max 16 without luggage)",
    image: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Perfect for large groups, weddings, corporate retreats, or diving excursions.",
    isBestSeller: false,
  },
  {
    name: "Toyota Alphard VIP",
    price: "180",
    capacity: "4 persons with luggage (max 6 without luggage)",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Premium leather captain seats, executive spacing, and ultimate luxury travel.",
    isBestSeller: false,
  },
];

const INCLUSIONS = [
  "Private Vehicles with Comfortable AC",
  "English Speaking Driver as a Guide",
  "Parking Fee",
  "Mineral Water (1 person 1 Bottle)",
  "Fuel",
];

const EXCLUSIONS = [
  "Entrance Fee",
  "Admission Fee",
  "Other Personal Expenses",
];

// Interactive Audio Player Component
function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.log("Audio play blocked:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (duration) {
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-3xl border border-zinc-200/50 p-6 flex flex-col gap-4 max-w-sm w-full mx-auto lg:mx-0">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onTimeUpdate={handleTimeUpdate}
        loop
      />
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-900">
          <Music className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0 flex items-center justify-between gap-3">
          <div>
            <h4 className="font-serif font-bold text-sm text-primary-950 truncate">Bali Ambient Vibes</h4>
            <p className="text-xs text-zinc-500 truncate">Tropical Chill Instrumental</p>
          </div>
          {isPlaying && (
            <div className="flex gap-0.5 items-end h-5 flex-shrink-0">
              <span className="w-0.5 bg-primary-600 rounded-full animate-sound-wave-1"></span>
              <span className="w-0.5 bg-primary-500 rounded-full animate-sound-wave-2"></span>
              <span className="w-0.5 bg-primary-600 rounded-full animate-sound-wave-3"></span>
              <span className="w-0.5 bg-primary-400 rounded-full animate-sound-wave-4"></span>
            </div>
          )}
        </div>
        <button
          onClick={toggleMute}
          className="p-2.5 rounded-xl border border-zinc-200 text-zinc-600 hover:border-primary-600 hover:text-primary-600 transition-colors"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-zinc-100 h-1 rounded-full overflow-hidden">
        <div className="bg-primary-600 h-1 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {/* Controls */}
      <Button
        onClick={togglePlay}
        className="w-full bg-primary-900 text-white hover:bg-primary-950 rounded-2xl flex items-center justify-center gap-2 py-5 font-semibold text-xs transition-all cursor-pointer"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        <span>{isPlaying ? "Pause Music" : "Play Background Music"}</span>
      </Button>
    </div>
  );
}

export function CarRental() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(0);
  const isMouseDown = useRef(false);

  const prevCar = () => {
    setCurrentCarIndex((prev) => (prev === 0 ? CARS.length - 1 : prev - 1));
  };

  const nextCar = () => {
    setCurrentCarIndex((prev) => (prev === CARS.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextCar();
    } else if (diff < -50) {
      prevCar();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left click drag
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isMouseDown.current) return;
    const diff = mouseStartX.current - e.clientX;
    if (diff > 50) {
      nextCar();
    } else if (diff < -50) {
      prevCar();
    }
    isMouseDown.current = false;
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
  };

  const handleBookCar = (carName) => {
    const whatsappNum = "6281234567890";
    const text = `Hi Bali Travel Times! I'd like to hire the *${carName}* with driver.\n` + 
                 `Please let me know availability and daily rates.`;
    const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="car-rental" className="py-24 bg-background border-y border-zinc-200/40">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl space-y-24">
        
        {/* Intro Block (Bali Travel Times Overview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <span className="text-xs font-bold text-primary-800 uppercase tracking-widest block mb-2">Premium Travel Agency</span>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-primary-950 leading-tight">
                Bali Travel Times
              </h2>
              <div className="h-1.5 w-20 bg-accent-600 rounded-full mt-4" />
            </div>
            
            {/* Paragraph 1: Editorial Block */}
            <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary-900 to-primary-950 text-white shadow-xl overflow-hidden border border-primary-800/40">
              <div className="absolute right-0 top-0 w-36 h-36 bg-primary-800/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute left-4 top-2 text-primary-800 text-8xl font-serif font-black leading-none opacity-20 pointer-events-none">“</div>
              <p className="relative text-base md:text-lg text-primary-50 leading-relaxed font-light pl-6 italic">
                With a personal English-speaking driver and a well-maintained vehicle, explore Bali and have a great trip with us. For your journey to explore Bali, get the greatest deal and services.
              </p>
            </div>

            {/* Paragraph 2: Guarantee Card */}
            <div className="relative p-6 rounded-3xl bg-white border border-primary-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-primary-50/50 rounded-full blur-2xl pointer-events-none" />
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 p-3 bg-primary-50 rounded-xl text-primary-700 border border-primary-100 shadow-xs">
                  <Shield className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-primary-950 mb-1">
                    Hassle-Free Reservations
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-light">
                    Simple to make and requires no deposit; no additional fees. Make a reservation without using a credit card, and you can amend or cancel it at any time for free.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Policies Grid Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Zero Deposit Required",
                  desc: "Simple booking process with no deposit required.",
                  icon: Shield
                },
                {
                  title: "Free Cancellation",
                  desc: "Amend or cancel your booking at any time for free.",
                  icon: Calendar
                },
                {
                  title: "No Credit Card Needed",
                  desc: "Make a reservation instantly without a credit card.",
                  icon: CreditCard
                },
                {
                  title: "No Hidden Fees",
                  desc: "Transparent pricing including taxes, fuel, and tolls.",
                  icon: Check
                }
              ].map((policy, idx) => {
                const IconComponent = policy.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-2xl bg-white border border-zinc-200/50 shadow-xs hover:shadow-md hover:border-primary-200 hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700 border border-primary-100/30 flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h5 className="font-serif font-bold text-sm text-primary-950">{policy.title}</h5>
                      <p className="text-xs text-zinc-500 font-light leading-normal">{policy.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:sticky lg:top-28">
            <AudioPlayer />
          </div>
        </div>

        {/* Hire Car in Bali Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, description, and slider controls in a floating card */}
          <div className="lg:col-span-5 space-y-6 bg-white border border-primary-100/80 shadow-md hover:shadow-lg transition-all duration-300 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-primary-50/50 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-950 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-primary-700 animate-pulse" />
                <span>Private Car Hire</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-black text-primary-950 leading-tight">
                Hire Car In Bali
              </h3>
              <div className="h-1.5 w-16 bg-accent-600 rounded-full" />
              
              <p className="text-sm text-zinc-600 leading-relaxed font-light">
                Explore Bali in a spotless vehicle with a driver that speaks English. Get the greatest support and unrestricted mileage to travel wherever you desire. Easy to make reservations and free to cancel at any time.
              </p>
            </div>

            {/* Controls Row (Arrows + Dots) */}
            <div className="flex items-center gap-6 pt-6 border-t border-zinc-100">
              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevCar}
                  className="p-2.5 rounded-full border border-zinc-200 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 bg-white transition-all cursor-pointer shadow-xs"
                  aria-label="Previous Car"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextCar}
                  className="p-2.5 rounded-full border border-zinc-200 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 bg-white transition-all cursor-pointer shadow-xs"
                  aria-label="Next Car"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Indicator Dots */}
              <div className="flex gap-1.5 items-center">
                {CARS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCarIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentCarIndex === idx ? "w-6 bg-primary-600" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Car Slider Card */}
          <div 
            className="lg:col-span-7 overflow-hidden rounded-3xl cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCarIndex * 100}%)` }}
            >
              {CARS.map((car) => (
                <div
                  key={car.name}
                  className="w-full flex-shrink-0 px-1"
                >
                  <div className="flex flex-col md:flex-row bg-white border border-zinc-200/60 rounded-3xl overflow-hidden shadow-lg relative h-full">
                    {car.isBestSeller && (
                      <div className="absolute top-4 left-4 bg-accent-500 text-white font-semibold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full z-20 shadow-sm">
                        Best Seller
                      </div>
                    )}
                    
                    {/* Car Image Container */}
                    <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[380px] overflow-hidden bg-zinc-200">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>

                    {/* Car Details Content */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-serif text-xl font-bold text-primary-950">{car.name}</h4>
                          <p className="text-[11px] text-zinc-500 font-medium leading-relaxed mt-1">
                            {car.capacity}
                          </p>
                        </div>

                        {/* Inclusions */}
                        <div className="space-y-1.5">
                          <span className="block text-[9px] font-bold text-primary-800 uppercase tracking-widest">Inclusions</span>
                          <ul className="space-y-1 text-[11px] text-zinc-600 leading-tight">
                            {INCLUSIONS.map((inc) => (
                              <li key={inc} className="flex gap-1.5 items-start">
                                <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Exclusions */}
                        <div className="space-y-1.5">
                          <span className="block text-[9px] font-bold text-rose-800 uppercase tracking-widest">Exclusions</span>
                          <ul className="space-y-1 text-[11px] text-zinc-500 leading-tight">
                            {EXCLUSIONS.map((exc) => (
                              <li key={exc} className="flex gap-1.5 items-start">
                                <X className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span>{exc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Duration */}
                        <div className="pt-2 border-t border-zinc-100 flex items-center gap-1.5 text-xs text-zinc-700 font-semibold">
                          <Check className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                          <span>Duration: For 8-10 Hours</span>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-4 mt-4">
                        <div>
                          <span className="block text-[9px] text-zinc-400 font-bold uppercase tracking-wider">Start From</span>
                          <span className="text-xl font-bold text-primary-950 font-serif">${car.price}</span>
                        </div>
                        <Button
                          onClick={() => handleBookCar(car.name)}
                          className="bg-primary-900 text-white hover:bg-primary-950 group/btn rounded-xl px-4 py-2.5 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-md hover:shadow-lg"
                        >
                          <span>Book Online</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Things To Do In Bali Section */}
        <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary-900 relative overflow-hidden">
          {/* Decorative glassmorphic gradient blurs */}
          <div className="absolute -left-12 -top-12 w-48 h-48 bg-primary-800/35 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Heading and Badge */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-xs font-semibold text-accent-500 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Things To Do In Bali</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif font-black leading-tight text-white">
                Things To Do <br className="hidden md:inline" /> In Bali
              </h3>
              <div className="h-1.5 w-20 bg-accent-600 rounded-full" />
            </div>

            {/* Right Column: Paragraphs */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <p className="text-sm md:text-base text-primary-50 leading-relaxed font-light italic">
                One of the best tropical hideaways in the world is Bali. Families like this place since it’s both an adventurer’s paradise and a spiritual haven together, as much as it does for youthful hedonists and digital nomads. And if certain places are getting a bit too busy for tourists, Bali lives up to its reputation as one of the most beautiful islands in the world when you explore the less traveled areas.
              </p>
              
              <div className="h-px bg-primary-800/40 w-full" />

              <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                What are Bali’s top activities then? The best of Bali, from the justifiably well-liked to the surprisingly thrilling, have all been carefully selected by us. This carefully selected list of attractions from the region will make any trip to the Island of the Gods an amazing experience, offering something for even the most ardent thrill-seeker or culture vulture.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
