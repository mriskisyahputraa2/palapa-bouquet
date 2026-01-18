import React from "react";
// Pastikan file gambar ini adalah PNG dengan background transparan agar hasilnya maksimal
import waIcon from "./assets/whatsapp.png";

import Navbar from "./sections/Navbar";
import HeroCarousel from "./sections/HeroCarousel";
import Catalog from "./sections/Catalog";
import CustomOrder from "./sections/CustomOrder";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Location from "./sections/Location";
import Gallery from "./sections/Gallery";

const App = () => {
  const phoneNumber = "6281234567890";

  const handleWhatsApp = (message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="antialiased bg-palapa-cream font-poppins selection:bg-palapa-rose selection:text-white">
      <Navbar />

      <main>
        <HeroCarousel onChatClick={handleWhatsApp} />
        <Catalog onChatClick={handleWhatsApp} />
        <Gallery />
        <CustomOrder onChatClick={handleWhatsApp} />
        <Testimonials />
        <Location />
        <FAQ />
      </main>

      <Footer />

      {/* --- TOMBOL WHATSAPP MELAYANG DENGAN GAYA BARU --- */}
      <button
        onClick={() =>
          handleWhatsApp(
            "Halo Palapa Bouquet, saya ingin bertanya mengenai produk bunga Anda...",
          )
        }
        className="fixed bottom-8 right-8 z-[100] bg-white p-3 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 hover:scale-105 active:scale-95 transition-all duration-500 group flex items-center gap-3 border-[3px] border-white"
        aria-label="Chat WhatsApp"
      >
        {/* Teks "Chat Florist" (Muncul saat hover) */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm text-palapa-rose whitespace-nowrap px-0 group-hover:px-2">
          Chat Florist
        </span>

        {/* PERUBAHAN PADA GAMBAR IKON: */}
        <img
          src={waIcon}
          alt="WhatsApp"
          className="w-9 h-9 object-contain drop-shadow-md transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
        />
      </button>
    </div>
  );
};

export default App;
