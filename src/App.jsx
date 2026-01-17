import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Catalog from "./sections/Catalog";
import CustomOrder from "./sections/CustomOrder";
import Footer from "./sections/Footer";
import HeroCarousel from "./sections/HeroCarousel";

const App = () => {
  const handleWhatsApp = (message) => {
    const phoneNumber = "6281234567890"; // GANTI DENGAN NOMOR WA ANDA
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="antialiased">
      <Navbar />
      {/* <Hero onChatClick={handleWhatsApp} /> */}
      <HeroCarousel onChatClick={handleWhatsApp} />
      <Catalog onChatClick={handleWhatsApp} />
      <CustomOrder onChatClick={handleWhatsApp} />
      <Footer />
      <button
        onClick={() => handleWhatsApp("Halo Palapa Bouquet...")}
        className="fixed bottom-8 right-8 z-[100] bg-white text-palapa-deep p-4 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:bg-palapa-pink hover:text-white hover:scale-110 transition-all duration-500 flex items-center gap-3 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap">
          Consultation
        </span>
        {/* <MessageCircle size={24} /> */}
      </button>
    </div>
  );
};

export default App;
