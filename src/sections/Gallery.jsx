import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Quote,
} from "lucide-react";

// Import 7 aset foto utama Anda
import img1 from "../assets/bunga/bc-1.webp";
import img2 from "../assets/bunga/bc-2.webp";
import img3 from "../assets/bunga/bc-7.webp";
import img4 from "../assets/bunga/bc-3.webp";
import img5 from "../assets/bunga/bc-6.webp";
import img6 from "../assets/bunga/bc-2.webp";
import img7 from "../assets/bunga/bc-4.webp";

const Gallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Data 7 Foto Gallery
  const images = [img1, img2, img3, img4, img5, img6, img7];

  // Logika Grid: 1 Baris di Mobile & iPad (col-span-12), Mosaik di Desktop (lg)
  const gridClasses = [
    "col-span-12 lg:col-span-3", // Atas 1
    "col-span-12 lg:col-span-3", // Atas 2
    "col-span-12 lg:col-span-3", // Atas 3
    "col-span-12 lg:col-span-3", // Atas 4
    "col-span-12 lg:col-span-4", // Bawah 1
    "col-span-12 lg:col-span-4", // Bawah 2
    "col-span-12 lg:col-span-4", // Bawah 3
  ];

  useEffect(() => {
    if (isLightboxOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isLightboxOpen]);

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="galeri"
      className="py-24 md:py-32 bg-[#FAF5F6] font-poppins overflow-hidden relative"
    >
      {/* DEKORASI TEKS LATAR BELAKANG */}
      <div className="absolute top-24 left-0 w-full pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[22vw] font-black leading-none text-palapa-rose whitespace-nowrap">
          PALAPA BOUQUET
        </h2>
      </div>

      {/* HEADER GALLERY - REVISI ALIGNMENT AGAR KONSISTEN DENGAN KATALOG */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 relative z-10">
        {/* Parent container: Center di mobile/tablet, Space-between di desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 text-center lg:text-left">
          {/* Sisi Kiri: Judul & Sparkles */}
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-palapa-rose">
              <Sparkles size={16} className="animate-pulse" />
              <span className="font-black tracking-[0.3em] lg:tracking-[0.5em] uppercase text-[9px] lg:text-[10px]">
                Artisan Visual Journey
              </span>
            </div>
            <h3 className="font-[900] text-5xl sm:text-7xl md:text-9xl lg:text-[120px] text-palapa-rose leading-[0.8] uppercase tracking-tighter">
              Gallery <br />
              <span className="text-palapa-rose/20 italic font-light lowercase">
                palapa bouquet
              </span>
            </h3>
          </div>

          {/* Sisi Kanan: Quote & Deskripsi */}
          <div className="flex flex-col items-center lg:items-end space-y-4 lg:space-y-6 w-full lg:w-auto">
            <Quote className="text-palapa-rose/20 w-8 h-8 md:w-12 md:h-12" />
            <p className="max-w-xs text-palapa-rose/60 text-[11px] md:text-sm leading-relaxed italic font-medium px-4 lg:px-0">
              "Eksplorasi keindahan buket abadi, papan akrilik modern, dan
              hampers kustom kami yang dirangkai dengan ketelitian tangan."
            </p>
          </div>
        </div>
      </div>

      {/* === MOSAIC GRID FULL WIDTH === */}
      <div className="w-full px-0 relative z-10">
        <div className="grid grid-cols-12 gap-[2px] md:gap-[4px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`${gridClasses[index]} relative aspect-video lg:aspect-video overflow-hidden bg-gray-200 cursor-zoom-in group`}
              onClick={() => {
                setActiveIndex(index);
                setIsLightboxOpen(true);
              }}
            >
              <img
                src={img}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                alt={`Gallery Palapa ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full text-palapa-rose shadow-xl">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[10002]">
              <X size={40} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 bg-white/10 hover:bg-white/20 p-4 rounded-full text-white transition-all z-[10002]"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 bg-white/10 hover:bg-white/20 p-4 rounded-full text-white transition-all z-[10002]"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[activeIndex]}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                alt="Selected Gallery"
              />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/40 font-black text-[10px] uppercase tracking-[0.5em]">
                Photo {activeIndex + 1} of {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
