import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Komponen Utama
import Navbar from "./sections/Navbar";
import HeroCarousel from "./sections/HeroCarousel";
import Catalog from "./sections/Catalog";
import Gallery from "./sections/Gallery";
import CustomOrder from "./sections/CustomOrder";
import Testimonials from "./sections/Testimonials";
import Location from "./sections/Location";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

// Komponen Optimasi
import LoadingScreen from "./components/LoadingScreen";
import FadeIn from "./components/FadeIn";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading aset selama 2 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = (message) => {
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="antialiased bg-[#FAF5F6] font-poppins">
      {/* 1. Efek Loading Screen di Awal */}
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <Navbar />

      <main className={loading ? "hidden" : "block"}>
        {/* 2. Setiap Section dibungkus FadeIn agar muncul halus & ringan */}
        <FadeIn>
          <HeroCarousel onChatClick={handleWhatsApp} />
        </FadeIn>

        <div className="space-y-0">
          {" "}
          {/* Menghilangkan celah antar section */}
          <FadeIn>
            <Catalog onChatClick={handleWhatsApp} />
          </FadeIn>
          <FadeIn>
            <Gallery />
          </FadeIn>
          <FadeIn>
            <CustomOrder onChatClick={handleWhatsApp} />
          </FadeIn>
          <FadeIn>
            <Testimonials />
          </FadeIn>
          <FadeIn>
            <Location />
          </FadeIn>
          <FadeIn>
            <FAQ />
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
