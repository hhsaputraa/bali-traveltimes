import { Compass, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Main visual introduction section (Hero banner).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-32 md:py-48 text-white">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950 via-zinc-950 to-zinc-950" />
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      
      {/* Decorative Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]" 
        style={{ maskImage: "radial-gradient(ellipse_at_center, black, transparent)" }}
      />

      <div className="container relative mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-400 backdrop-blur-md">
            <Compass className="h-4 w-4" />
            <span>Panduan Travel Bali Terlengkap</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-none">
            Rasakan Keindahan & <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Petualangan Sejati di Bali
            </span>
          </h1>

          {/* Description Subtext */}
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
            Temukan destinasi tersembunyi, estimasi waktu perjalanan paling akurat, dan rekomendasi aktivitas terbaik dari ahlinya untuk liburan impian Anda.
          </p>

          {/* Call-to-Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="default" size="lg" className="gap-2 shadow-lg shadow-emerald-500/20">
              <Calendar className="h-5 w-5" />
              Jelajahi Paket Wisata
            </Button>
            <Button variant="outline" size="lg" className="border-zinc-700 text-white hover:bg-zinc-900">
              Cek Waktu Tempuh
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
