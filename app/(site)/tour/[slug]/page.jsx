import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, MapPin, Star, AlertTriangle, Compass, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatUSD } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { TOUR_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

// SEO metadata generator
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = await client.fetch(TOUR_BY_SLUG_QUERY, { slug });

  if (!tour) {
    return {
      title: "Paket Wisata Tidak Ditemukan | Bali Travel Times",
    };
  }

  return {
    title: `${tour.title} - Bali Travel Times`,
    description: tour.description,
  };
}

export default async function TourDetailPage({ params }) {
  const { slug } = await params;
  const tour = await client.fetch(TOUR_BY_SLUG_QUERY, { slug });

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-32 text-center max-w-xl">
        <AlertTriangle className="h-12 w-12 text-rose-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Paket Wisata Tidak Ditemukan
        </h1>
        <p className="text-zinc-500 mb-6">
          Maaf, halaman paket wisata yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link href="/">
          <Button variant="default">Kembali ke Beranda</Button>
        </Link>
      </div>
    );
  }

  // Configure WhatsApp link
  const waNumber = tour.whatsappNumber || "6281234567890";
  const waText = encodeURIComponent(`Halo, saya ingin memesan paket tour "${tour.title}".`);
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <article className="py-12 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-primary-600 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Beranda</span>
        </Link>

        {/* Header Title Section */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-950 text-xs font-semibold">
              {tour.location}
            </span>
            <div className="flex items-center gap-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
              <span>{tour.rating || "5.0"} (Review Terverifikasi)</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
            {tour.title}
          </h1>
        </div>

        {/* Grid Info & Image Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info Column */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Visual Image Banner */}
            <div className="relative h-96 w-full bg-gradient-to-tr from-primary-900 to-zinc-950 rounded-3xl overflow-hidden shadow-md flex items-center justify-center">
              {tour.mainImage?.asset ? (
                <Image
                  src={urlFor(tour.mainImage).width(800).height(480).url()}
                  alt={tour.mainImage?.alt || tour.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <>
                  <Compass className="absolute h-40 w-40 text-white/5 opacity-10" />
                  <div className="relative text-center max-w-md p-8 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-100">Bali Travel Times Gallery</span>
                    <h3 className="text-xl font-bold mt-2">{tour.title}</h3>
                  </div>
                </>
              )}
            </div>

            {/* Highlights (Sorotan Utama) */}
            {tour.highlights && tour.highlights.length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Sorotan Tour (Highlights)</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description Content */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Tentang Perjalanan</h3>
              <div className="prose prose-sky dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {tour.content ? (
                  <PortableText value={tour.content} />
                ) : (
                  <p>{tour.description}</p>
                )}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            {((tour.includes && tour.includes.length > 0) || (tour.excludes && tour.excludes.length > 0)) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl bg-white border border-zinc-150">
                {tour.includes && tour.includes.length > 0 && (
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Sudah Termasuk</h4>
                    <ul className="flex flex-col gap-2.5">
                      {tour.includes.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="text-primary-600 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {tour.excludes && tour.excludes.length > 0 && (
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Tidak Termasuk</h4>
                    <ul className="flex flex-col gap-2.5">
                      {tour.excludes.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="text-rose-500 font-bold">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Itinerary Section */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Rencana Perjalanan (Itinerary)</h3>
                <div className="relative border-l-2 border-primary-100 ml-4 pl-6 flex flex-col gap-8">
                  {tour.itinerary.map((stop, idx) => (
                    <div key={idx} className="relative">
                      {/* Marker dot */}
                      <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600 ring-4 ring-white shadow-sm" />
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-primary-600">{stop.time}</span>
                        <h4 className="font-bold text-base text-zinc-900 dark:text-white">{stop.place}</h4>
                        {stop.description && (
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                            {stop.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking / Checkout Sidebar */}
          <div>
            <div className="sticky top-28 p-8 border border-zinc-150 rounded-3xl bg-background flex flex-col gap-6 shadow-sm">
              <div>
                <span className="text-xs text-zinc-500">Harga Paket Wisata</span>
                <p className="text-3xl font-black text-primary-600 mt-1">
                  {formatUSD(tour.price)}
                </p>
                <span className="text-xs text-zinc-400">Harga per orang (minimal 2 pax)</span>
              </div>

              <div className="flex flex-col gap-3 py-4 border-y border-zinc-200/60 dark:border-zinc-800/60 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Durasi:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">{tour.duration}</span>
                </div>
                {tour.difficulty && (
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Kesulitan:</span>
                    <span className="font-semibold text-zinc-900 dark:text-white uppercase text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800">
                      {tour.difficulty}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-zinc-500">Layanan:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">Privat Tur</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="default" size="lg" className="w-full">
                    Pesan Sekarang via WhatsApp
                  </Button>
                </a>
                <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent(`Halo, saya ingin bertanya tentang tour "${tour.title}".`)}`} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" size="lg" className="w-full bg-white dark:bg-transparent">
                    Tanya Penyelenggara
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
