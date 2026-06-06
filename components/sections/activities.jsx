"use client";

import { Sparkles, Calendar, Clock, DollarSign, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ACTIVITIES = [
  {
    title: "Ayung River White Water Rafting",
    category: "Adventure",
    price: "25",
    duration: "2-3 Hours",
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Navigate class II & III rapids past spectacular rainforest waterfalls and towering gorges in Ubud.",
  },
  {
    title: "ATV Quad Biking Adventure",
    category: "Thrills",
    price: "35",
    duration: "2 Hours",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdcd1c?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Ride through local villages, rice paddies, gorilla-face caves, mud tracks, and waterfalls.",
  },
  {
    title: "Mount Batur Sunrise Trekking",
    category: "Hiking",
    price: "40",
    duration: "5 Hours",
    image: "https://images.unsplash.com/photo-1506970144764-1543b593f45f?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Hike up an active volcano in the early hours to catch a breathtaking sunrise above the clouds.",
  },
  {
    title: "Ubud Real Jungle Swing",
    category: "Instagrammable",
    price: "15",
    duration: "1-2 Hours",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Swing high above deep valleys and take stunning photographs in giant bird nests.",
  },
  {
    title: "Tanjung Benoa Watersports",
    category: "Marine",
    price: "20",
    duration: "Flexible",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Enjoy high-adrenaline marine activities including parasailing, jet ski, and banana boat ride.",
  },
  {
    title: "Mount Batur Sunrise 4x4 Jeep",
    category: "Sightseeing",
    price: "35",
    duration: "4 Hours",
    image: "https://images.unsplash.com/photo-1533587878787-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Explore the volcanic black lava fields of Kintamani in a classic open-top 4x4 Jeep.",
  },
];

export function Activities() {
  const handleBookActivity = (activityTitle) => {
    const whatsappNum = "6281234567890";
    const text = `Hi Bali Travel Times! I'd like to book the *${activityTitle}* activity.\n` + 
                 `Please let me know availability and schedules.`;
    const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="activities" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-xs font-semibold text-primary-900 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Things to Do</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950">
            Top Bali Activities
          </h2>
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-light">
            Complement your tour packages with these exciting activities. From volcanic sunrise hikes to adrenaline-pumping watersports.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity) => (
            <div 
              key={activity.title}
              className="group flex flex-col bg-white border border-zinc-200/60 rounded-2xl overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-300"
            >
              {/* Activity Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-primary-950/80 backdrop-blur-md text-white font-semibold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-primary-900/20">
                  {activity.category}
                </div>
              </div>

              {/* Activity Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-primary-950 group-hover:text-primary-900 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {activity.description}
                  </p>
                </div>

                {/* Duration & Pricing Row */}
                <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    <span>{activity.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="block text-[9px] text-zinc-400 font-bold uppercase tracking-wider">From</span>
                      <span className="text-lg font-bold text-primary-950 font-serif">${activity.price}</span>
                      <span className="text-[10px] text-zinc-500 font-medium">/ pax</span>
                    </div>
                    
                    <Button 
                      onClick={() => handleBookActivity(activity.title)}
                      className="bg-primary-50 text-primary-900 hover:bg-primary-900 hover:text-white rounded-xl p-2.5 border border-primary-100/50 hover:border-primary-900 transition-all flex items-center justify-center"
                      title="Enquire on WhatsApp"
                      aria-label="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
