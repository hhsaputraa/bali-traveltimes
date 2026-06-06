import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { SITE_CONFIG } from "@/constants/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${SITE_CONFIG.name} - Panduan Perjalanan & Estimasi Waktu Wisata Bali`,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function SiteLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        {/* Public site global navigation */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        
        {/* Public site global footer */}
        <Footer />
      </body>
    </html>
  );
}
