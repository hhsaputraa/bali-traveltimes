import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Star, AlertTriangle, Compass, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils";

// Simulated dataset for best-practice presentation
const DETAIL_TOURS = {
  "ubud-cultural-experience": {
    title: "Ubud Cultural & Nature Experience",
    description: "Nikmati keindahan sawah terasering Tegalalang, Pura Tirta Empul, Hutan Monyet, dan pertunjukan tari tradisional Bali.",
    price: 750000,
    duration: "1 Hari (10 Jam)",
    difficulty: "Mudah",
    location: "Ubud, Gianyar",
    rating: 4.9,
    content: "Paket tur satu hari penuh ini dirancang untuk memperkenalkan Anda pada kekayaan seni, budaya, dan keindahan alam pusat pulau Bali. Perjalanan dimulai dari hotel Anda langsung menuju Tegalalang, area persawahan bertingkat yang menakjubkan. Setelah itu kita akan mengunjungi Pura Tirta Empul untuk melihat prosesi pembersihan spiritual (Melukat), lalu berinteraksi dengan monyet di Ubud Monkey Forest, serta mencicipi kuliner khas bebek Ubud.",
    travelTimes: [
      { destination: "Kuta ke Ubud", durationMinutes: 75 },
      { destination: "Ubud ke Tegalalang Rice Terrace", durationMinutes: 20 },
      { destination: "Tegalalang ke Tirta Empul", durationMinutes: 15 },
    ],
    itinerary: [
      {
        day: 1,
        title: "Penjelajahan Seni & Warisan Budaya Ubud",
        activities: [
          "08:00 - Penjemputan di Lobby Hotel",
          "09:30 - Tiba di Tegalalang Rice Terrace & Ayunan Ekstrem",
          "11:30 - Mengunjungi Tirta Empul & Berwisata Sejarah",
          "13:00 - Makan Siang di Bebek Tepi Sawah Ubud",
          "14:30 - Mengeksplorasi Sacred Monkey Forest Sanctuary",
          "16:30 - Belanja Oleh-oleh di Pasar Seni Ubud",
          "18:00 - Menyaksikan Pertunjukan Tari Legong/Kecak di Pura Ubud",
          "19:30 - Perjalanan kembali ke Hotel",
        ],
      },
    ],
  },
  "nusa-penida-island-adventure": {
    title: "Nusa Penida West Coast Island Adventure",
    description: "Petualangan menyeberangi selat Badung menuju Kelingking Beach, Broken Beach, Angel Billabong, dan Crystal Bay.",
    price: 1200000,
    duration: "1 Hari (12 Jam)",
    difficulty: "Sedang",
    location: "Nusa Penida, Klungkung",
    rating: 4.8,
    content: "Jelajahi keajaiban pantai barat pulau eksotis Nusa Penida. Dari pemandangan tebing Kelingking Beach yang menyerupai T-Rex hingga kolam pasang alami Angel's Billabong. Perjalanan ini membutuhkan kondisi fisik yang prima karena medan tebing yang terjal namun menawarkan panorama terindah di Asia Tenggara.",
    travelTimes: [
      { destination: "Sanur ke Pelabuhan Nusa Penida (Fastboat)", durationMinutes: 40 },
      { destination: "Pelabuhan Nusa Penida ke Kelingking Beach", durationMinutes: 45 },
      { destination: "Kelingking Beach ke Angel's Billabong & Broken Beach", durationMinutes: 30 },
    ],
    itinerary: [
      {
        day: 1,
        title: "Petualangan Pantai Barat Nusa Penida",
        activities: [
          "06:30 - Meeting point di Pelabuhan Sanur & Registrasi Ulang",
          "07:30 - Keberangkatan Kapal Cepat (Fastboat) menuju Nusa Penida",
          "08:15 - Tiba di Pelabuhan Nusa Penida, disambut Driver Lokal",
          "09:30 - Tiba di Tebing Kelingking Beach (Foto Session & Trekking Ringan)",
          "12:00 - Makan Siang Menu Lokal khas Penida",
          "13:30 - Mengunjungi Broken Beach & Angel's Billabong",
          "15:30 - Bersantai di Pantai Crystal Bay",
          "16:30 - Kembali menuju Pelabuhan Utama Nusa Penida",
          "17:00 - Keberangkatan Fastboat kembali ke Sanur",
        ],
      },
    ],
  },
  "uluwatu-sunset-cliff-tour": {
    title: "Uluwatu Sunset Temple & Kecak Dance",
    description: "Menyaksikan matahari terbenam spektakuler dari tebing Uluwatu dilanjutkan dengan pertunjukan Tari Kecak yang legendaris.",
    price: 600000,
    duration: "6 Jam",
    difficulty: "Mudah",
    location: "Uluwatu, Badung",
    rating: 4.7,
    content: "Merasakan nuansa magis Bali selatan dengan mengunjungi Pura Luhur Uluwatu yang bertengger di atas tebing setinggi 70 meter di atas Samudra Hindia. Di tempat ini Anda akan menyaksikan Tari Kecak & Api dengan latar belakang sunset berwarna jingga keemasan yang tidak akan terlupakan.",
    travelTimes: [
      { destination: "Seminyak ke Uluwatu", durationMinutes: 60 },
      { destination: "Uluwatu Temple ke Pantai Jimbaran (Dinner)", durationMinutes: 25 },
    ],
    itinerary: [
      {
        day: 1,
        title: "Sunset Magis & Pertunjukan Kecak",
        activities: [
          "15:00 - Penjemputan di Area Hotel",
          "16:30 - Tiba di Kawasan Pura Uluwatu & Jalan-jalan di sekitar Tebing",
          "17:45 - Masuk ke panggung teater terbuka Tari Kecak",
          "18:00 - Pertunjukan Tari Kecak & Api saat Sunset dimulai",
          "19:15 - Makan Malam Romantis Seafood di Pantai Jimbaran",
          "21:00 - Perjalanan kembali ke Hotel masing-masing",
        ],
      },
    ],
  },
};

// SEO metadata generator
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = DETAIL_TOURS[slug];

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
  const tour = DETAIL_TOURS[slug];

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

  return (
    <article className="py-12 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-600 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Beranda</span>
        </Link>

        {/* Header Title Section */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 text-xs font-semibold">
              {tour.location}
            </span>
            <div className="flex items-center gap-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
              <span>{tour.rating} (Review Terverifikasi)</span>
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
            {/* Visual Image Banner Placeholder */}
            <div className="relative h-96 w-full bg-gradient-to-tr from-emerald-900 to-zinc-950 rounded-3xl flex items-center justify-center p-8 text-white shadow-md">
              <Compass className="absolute h-40 w-40 text-white/5 opacity-10" />
              <div className="relative text-center max-w-md">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Bali Travel Times Gallery</span>
                <h3 className="text-xl font-bold mt-2">{tour.title}</h3>
                <p className="text-xs text-zinc-400 mt-2">Dapatkan memori perjalanan terindah bersama layanan privat kami.</p>
              </div>
            </div>

            {/* Description Content */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Tentang Perjalanan</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {tour.content}
              </p>
            </div>

            {/* Travel Times (Waktu Tempuh) - Key feature of the project */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-900">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-emerald-600" />
                Estimasi Waktu Tempuh Utama
              </h3>
              <p className="text-xs text-zinc-500 mb-2">
                *Waktu dapat berubah tergantung pada kepadatan lalu lintas harian Bali.
              </p>
              <div className="flex flex-col gap-3">
                {tour.travelTimes.map((time, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-zinc-200/60 dark:border-zinc-800/60 last:border-0">
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{time.destination}</span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-500">{time.durationMinutes} Menit</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary Section */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Rencana Perjalanan (Itinerary)</h3>
              {tour.itinerary.map((dayPlan) => (
                <div key={dayPlan.day} className="flex flex-col gap-4 p-6 border border-zinc-100 dark:border-zinc-900 rounded-3xl bg-white dark:bg-zinc-950">
                  <h4 className="font-extrabold text-md text-emerald-600 dark:text-emerald-500">
                    Hari {dayPlan.day}: {dayPlan.title}
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    {dayPlan.activities.map((activity, actIdx) => (
                      <li key={actIdx} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Booking / Checkout Sidebar */}
          <div>
            <div className="sticky top-28 p-8 border border-zinc-100 dark:border-zinc-900 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 flex flex-col gap-6 shadow-sm">
              <div>
                <span className="text-xs text-zinc-500">Harga Paket Wisata</span>
                <p className="text-3xl font-black text-emerald-600 dark:text-emerald-500 mt-1">
                  {formatRupiah(tour.price)}
                </p>
                <span className="text-xs text-zinc-400">Harga per pax (minimal booking 2 orang)</span>
              </div>

              <div className="flex flex-col gap-3 py-4 border-y border-zinc-200/60 dark:border-zinc-800/60 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Durasi:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">{tour.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Tingkat Kesulitan:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white uppercase text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800">{tour.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Layanan:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">Privat Tur</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button variant="default" size="lg" className="w-full">
                  Pesan Sekarang via WhatsApp
                </Button>
                <Button variant="outline" size="lg" className="w-full bg-white dark:bg-transparent">
                  Tanya Penyelenggara
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
