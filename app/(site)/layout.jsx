import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { SITE_CONFIG } from "@/constants/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Bali Travel Times | Private Tour Guide & Car Rental Ubud Bali",
  description: "Discover the best of Bali with Bali Travel Times. Professional English-speaking private driver, curated tour packages, activities, and affordable car hire with no deposit.",
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: "Bali Travel Times | Private Tour Guide & Car Rental Ubud Bali",
    description: "Discover the best of Bali with Bali Travel Times. Professional English-speaking private driver, curated tour packages, activities, and affordable car hire with no deposit.",
    url: SITE_CONFIG.url,
    siteName: "Bali Travel Times",
    locale: "en_US",
    type: "website",
  },
};

export default function SiteLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
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
