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
    <div className="antialiased bg-[#FAF5F6] font-poppins selection:bg-palapa-rose selection:text-white">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <Navbar />

      {/* Tambahkan pt-20 (mobile) dan md:pt-24 (desktop) agar konten tidak tertutup Navbar Fixed */}
      <main className={`${loading ? "hidden" : "block"} pt-20 md:pt-24`}>
        <FadeIn>
          <HeroCarousel onChatClick={handleWhatsApp} />
        </FadeIn>

        <div className="space-y-0">
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
