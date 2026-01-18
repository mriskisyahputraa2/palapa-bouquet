import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Import Ikon WhatsApp dari Asset Anda
import waIcon from "./assets/whatsapp.png"; // Sesuaikan nama file & folder asset Anda

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
    <div className="antialiased bg-[#FAF5F6] font-poppins selection:bg-palapa-rose selection:text-white relative">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <Navbar />

      {/* FLOATING WHATSAPP BUTTON */}
      {!loading && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[999] group"
        >
          {/* 1. ANIMASI "DUT-DUT" (Efek Ping Berdenyut) */}
          <div className="absolute inset-0 bg-[#00D95F] rounded-full animate-ping opacity-25 group-hover:opacity-40 transition-opacity"></div>

          {/* 2. TOMBOL UTAMA */}
          <button
            onClick={() =>
              handleWhatsApp(
                "Halo Palapa Bouquet, saya ingin bertanya tentang produk Anda.",
              )
            }
            className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full shadow-[0_15px_40px_rgba(0,217,95,0.25)] border border-gray-50 hover:scale-110 transition-all duration-500 overflow-hidden group"
          >
            {/* Container Lingkaran Hijau di Tengah (Sesuai SS) */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#00D95F] rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12">
              <img
                src={waIcon}
                alt="WhatsApp"
                className="w-7 h-7 md:w-8 md:h-8 object-contain brightness-0 invert"
              />
            </div>

            {/* Efek Kilatan Cahaya (Shine) agar lebih premium */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </button>

          {/* Indikator Online (Titik Hijau Kecil) */}
          <span className="absolute top-1 right-1 w-4 h-4 bg-[#00D95F] border-2 border-white rounded-full"></span>
        </motion.div>
      )}
      <main className={`${loading ? "hidden" : "block"} pt-20 md:pt-24`}>
        <FadeIn>
          <HeroCarousel onChatClick={handleWhatsApp} />
        </FadeIn>

        <div className="space-y-0">
          <FadeIn>
            <Catalog onChatClick={handleWhatsApp} />
          </FadeIn>
          <FadeIn>
            <Gallery onChatClick={handleWhatsApp} />
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
