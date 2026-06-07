"use client";

import { useEffect, useState, useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const STATS = [
  {
    label: "Speaking English Tour Guide",
    percentage: 90,
    description: "Friendly guides fluent in English to tell you Bali's history and culture.",
  },
  {
    label: "Affordable Price",
    percentage: 97,
    description: "All-inclusive rates offering great value for premium private travel.",
  },
  {
    label: "Choice of Tour Packages",
    percentage: 99,
    description: "Wide variety of tours covering temples, waterfalls, beaches, and swings.",
  },
];

function AnimatedCounter({ targetValue, duration = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(
        Math.floor((progress / duration) * targetValue),
        targetValue
      );
      
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetValue, duration]);

  return <span>{count}%</span>;
}

export function CustomerSatisfaction() {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white border-b border-zinc-200/40">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Headline and Trust badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-xs font-semibold text-primary-900 uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 text-primary-700" />
              <span>Customer First</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950 leading-tight">
              Our Customer Satisfaction
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-light">
              Assessments from several of our customers who ultimately chose us as their tour guide in Bali. We are committed to maintaining the highest service standard.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
              <span className="text-sm font-medium text-primary-950">Verified TripAdvisor Partner Agency</span>
            </div>
          </div>

          {/* Right Side: Animated Progress Bars */}
          <div className="lg:col-span-7 space-y-8 bg-zinc-50/50 border border-zinc-200/50 rounded-3xl p-6 md:p-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-serif font-bold text-base text-primary-950">{stat.label}</h4>
                    <p className="text-xs text-zinc-500 font-light mt-0.5">{stat.description}</p>
                  </div>
                  <span className="text-xl font-serif font-bold text-primary-900 min-w-[3.5rem] text-right inline-block">
                    {animate ? (
                      <AnimatedCounter targetValue={stat.percentage} />
                    ) : (
                      <span>0%</span>
                    )}
                  </span>
                </div>
                <div className="w-full bg-primary-100/60 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-primary-600 h-3 rounded-full transition-all ease-out" 
                    style={{ 
                      width: animate ? `${stat.percentage}%` : "0%",
                      transitionDuration: "1200ms"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
