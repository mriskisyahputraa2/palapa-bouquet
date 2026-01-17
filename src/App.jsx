import React from "react";
// 1. HAPUS import MessageCircle dari lucide-react karena sudah tidak dipakai
// import { MessageCircle } from "lucide-react";

// 2. TAMBAHKAN import gambar WhatsApp Anda di sini
// Pastikan nama file "whatsapp.png" sesuai dengan yang ada di folder src/assets/
import waIcon from "./assets/whatsapp.png";

// Import Komponen Sections
import Navbar from "./sections/Navbar";
import HeroCarousel from "./sections/HeroCarousel";
import Catalog from "./sections/Catalog";
import CustomOrder from "./sections/CustomOrder";
import Footer from "./sections/Footer";

const App = () => {
  // --- KONFIGURASI WHATSAPP ---
  const phoneNumber = "6281234567890"; // Ganti dengan nomor WA Anda

  const handleWhatsApp = (message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="antialiased bg-palapa-cream font-poppins selection:bg-palapa-rose selection:text-white">
      <Navbar />

      <main>
        <HeroCarousel onChatClick={handleWhatsApp} />
        <Catalog onChatClick={handleWhatsApp} />
        <CustomOrder onChatClick={handleWhatsApp} />
      </main>

      <Footer />

      {/* 4. TOMBOL WHATSAPP MELAYANG (FLOATING ACTION BUTTON) */}
      <button
        onClick={() =>
          handleWhatsApp(
            "Halo Palapa Bouquet, saya ingin bertanya mengenai produk bunga Anda..."
          )
        }
        // Catatan: Saya mengubah background tombol menjadi putih (bg-white) agar ikon PNG WhatsApp terlihat kontras dan bersih.
        // Jika Anda tetap ingin background hijau, ubah kembali 'bg-white' menjadi 'bg-[#25D366]' dan hapus 'text-palapa-rose'.
        className="fixed bottom-8 right-8 z-[100] bg-white text-palapa-rose p-3 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:scale-110 active:scale-95 transition-all duration-500 group flex items-center gap-3 border-4 border-white/50"
        aria-label="Chat WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap px-0 group-hover:px-2">
          Chat Florist
        </span>

        {/* 5. GANTI BAGIAN INI */}
        {/* <MessageCircle size={28} />  <-- Ikon lama dihapus */}

        {/* Gunakan tag img untuk menampilkan file PNG */}
        <img
          src={waIcon}
          alt="WhatsApp"
          className="w-8 h-8 object-contain" // Ukuran disesuaikan (32px) agar pas
        />
      </button>

      {/* Dekorasi Tambahan (Opsional) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-palapa-rose/10 z-[60]">
        <div className="h-full bg-palapa-rose w-1/4 opacity-50"></div>
      </div>
    </div>
  );
};

export default App;
