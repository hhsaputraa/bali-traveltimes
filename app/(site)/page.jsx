import Link from "next/link";
import { Clock, MapPin, Star, ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils";

// Simulated fetch results for best practices
const MOCK_TOURS = [
  {
    id: 1,
    title: "Ubud Cultural & Nature Experience",
    slug: "ubud-cultural-experience",
    description: "Nikmati keindahan sawah terasering Tegalalang, Pura Tirta Empul, Hutan Monyet, dan pertunjukan tari tradisional Bali.",
    price: 750000,
    duration: "1 Hari (10 Jam)",
    difficulty: "Mudah",
    location: "Ubud, Gianyar",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Nusa Penida West Coast Island Adventure",
    slug: "nusa-penida-island-adventure",
    description: "Petualangan menyeberangi selat Badung menuju Kelingking Beach, Broken Beach, Angel Billabong, dan Crystal Bay.",
    price: 1200000,
    duration: "1 Hari (12 Jam)",
    difficulty: "Sedang",
    location: "Nusa Penida, Klungkung",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Uluwatu Sunset Temple & Kecak Dance",
    slug: "uluwatu-sunset-cliff-tour",
    description: "Menyaksikan matahari terbenam spektakuler dari tebing Uluwatu dilanjutkan dengan pertunjukan Tari Kecak yang legendaris.",
    price: 600000,
    duration: "6 Jam",
    difficulty: "Mudah",
    location: "Uluwatu, Badung",
    rating: 4.7,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Intro Hero Banner */}
      <Hero />

      {/* Tours Section */}
      <section id="tours" className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-emerald-600 dark:text-emerald-500 font-bold text-sm uppercase tracking-wider">
                Rekomendasi Paket Wisata
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mt-2">
                Jelajahi Paket Wisata Populer
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
              Pilihlah petualangan terbaik yang dirancang khusus untuk memenuhi impian liburan Anda di pulau dewata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_TOURS.map((tour) => (
              <Card key={tour.id} className="group flex flex-col h-full overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                {/* Simulated Image Placeholder with dynamic background */}
                <div className="relative h-52 w-full bg-gradient-to-br from-emerald-800 to-zinc-900 flex items-center justify-center text-white/50 p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <span className="font-semibold text-lg text-white text-center z-10">{tour.title}</span>
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" />
                    <span>{tour.rating}</span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                    <MapPin className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-500" />
                    <span>{tour.location}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                    {tour.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {tour.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between border-t border-zinc-50 dark:border-zinc-900 pt-4 text-sm text-zinc-600 dark:text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      <span>{tour.duration}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      {tour.difficulty}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-500">Mulai dari</p>
                    <p className="text-lg font-extrabold text-emerald-600 dark:text-emerald-500">
                      {formatRupiah(tour.price)}
                    </p>
                  </div>
                  <Link href={`/tour/${tour.slug}`}>
                    <Button variant="default" size="sm" className="gap-1.5">
                      Detail
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="travel-times" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-emerald-600 dark:text-emerald-500 font-bold text-sm uppercase tracking-wider">
                Estimasi Waktu Akurat
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">
                Mengapa Memilih Bali Travel Times?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Kami memahami bahwa kemacetan dan ketidakpastian rute jalan di Bali seringkali mengacaukan rencana liburan Anda. Kami menyediakan data estimasi waktu tempuh secara berkala, rute alternatif terbaik, dan informasi lalu lintas terupdate.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-zinc-900 dark:text-white">✓ Data Tempuh Real-Time</h4>
                  <p className="text-sm text-zinc-500">Estimasi waktu akurat berdasarkan kondisi jalan saat itu juga.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-zinc-900 dark:text-white">✓ Panduan Lokal Profesional</h4>
                  <p className="text-sm text-zinc-500">Rekomendasi rute terpendek dan titik pemberhentian wisata menarik.</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 w-full bg-gradient-to-tr from-emerald-600 to-emerald-950 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end p-8 text-white">
              <div className="absolute inset-0 bg-black/25" />
              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="text-2xl font-bold">Rencanakan Rute Efisien</h3>
                <p className="text-zinc-200 text-sm leading-relaxed">
                  Gunakan fitur kalkulator waktu perjalanan kami untuk menghitung waktu berkendara antar destinasi wisata utama di Bali dengan mudah.
                </p>
                <div className="mt-4">
                  <Button variant="secondary" size="default">
                    Mulai Kalkulator
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
