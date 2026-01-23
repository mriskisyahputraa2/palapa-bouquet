import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Quote } from "lucide-react";

// Import aset foto Anda
import img1 from "../assets/WhatsApp Image 2026-01-22 at 11.28.47.jpeg";
import img2 from "../assets/bunga3.jpeg";
import img3 from "../assets/bunga3.jpeg";
import img4 from "../assets/hero-bouquet3.webp";

const Gallery = ({ onChatClick }) => {
  //
  // Data Galeri dengan ukuran lebar bervariasi
  const galleryItems = [
    {
      id: "01",
      img: img1,
      title: "Eternal Rose",
      category: "ANNIVERSARY",
      size: "w-[320px] md:w-[480px]",
    },
    {
      id: "02",
      img: img2,
      title: "Artisan Bloom",
      category: "PREMIUM GIFT",
      size: "w-[400px] md:w-[720px]",
    },
    {
      id: "03",
      img: img3,
      title: "Soft Peony",
      category: "GRADUATION",
      size: "w-[280px] md:w-[420px]",
    },
    {
      id: "04",
      img: img4,
      title: "Handcrafted",
      category: "CUSTOM ORDER",
      size: "w-[380px] md:w-[620px]",
    },
    {
      id: "05",
      img: img1,
      title: "Vintage Petal",
      category: "DECORATION",
      size: "w-[320px] md:w-[520px]",
    },
  ];

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

      {/* HEADER GALLERY - Responsive Alignment */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3 text-palapa-rose">
              <Sparkles size={16} className="animate-pulse" />
              <span className="font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px]">
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

          <div className="flex flex-col items-center md:items-end space-y-4 md:space-y-6 w-full md:w-auto">
            <Quote className="text-palapa-rose/20 w-8 h-8 md:w-12 md:h-12" />
            <p className="max-w-xs text-palapa-rose/60 text-[11px] md:text-sm leading-relaxed italic font-medium px-4 md:px-0">
              "Eksplorasi keindahan buket abadi, papan akrilik modern, dan
              hampers kustom kami yang dirangkai dengan ketelitian tangan."
            </p>
            <div className="flex items-center gap-3 text-palapa-rose font-black text-[9px] md:text-xs uppercase tracking-[0.3em]">
              Geser Menelusuri{" "}
              <ArrowRight size={16} className="animate-bounce-x" />
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div className="flex gap-8 md:gap-12 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2+24px)] pb-24 no-scrollbar snap-x snap-mandatory">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex-none ${item.size} h-[500px] md:h-[650px] snap-center group relative`}
          >
            <div className="w-full h-full rounded-[3.5rem] md:rounded-[4.5rem] overflow-hidden border-[10px] md:border-[15px] border-white shadow-xl relative isolation-isolate transform-gpu transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-4 group-hover:rotate-1">
              <img
                src={item.img}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 transform-gpu"
                alt={item.title}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-palapa-rose/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 md:p-14 pointer-events-none">
                <span className="text-white/70 text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] mb-2">
                  {item.category}
                </span>
                <h4 className="text-2xl md:text-4xl font-[900] text-white uppercase tracking-tighter leading-none">
                  {item.title}
                </h4>
              </div>

              <div className="absolute top-8 left-8 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white transition-all duration-500">
                <span className="text-white group-hover:text-palapa-rose font-black text-xs">
                  {item.id}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* FRAME PENUTUP: WHATSAPP CUSTOM ORDER */}
        <div className="flex-none w-[320px] md:w-[450px] h-[500px] md:h-[650px] snap-center flex items-center">
          <div className="relative w-full h-full rounded-[3.5rem] md:rounded-[4.5rem] overflow-hidden group bg-white shadow-2xl border-[10px] md:border-[15px] border-white">
            <div className="absolute inset-0 bg-[#f0fdf4] opacity-50"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700"></div>

            <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-8">
              {/* WhatsApp Icon Visual */}
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-xl shadow-green-200 animate-bounce-slow">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 md:w-12 md:h-12 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl md:text-3xl font-[900] text-palapa-rose uppercase tracking-tighter leading-tight">
                  Punya Desain <br />{" "}
                  <span className="text-green-600 italic font-light lowercase">
                    Impian?
                  </span>
                </h4>
                <p className="text-palapa-rose/60 text-[9px] md:text-[11px] font-bold leading-relaxed uppercase tracking-[0.2em]">
                  Buket Custom • Papan Akrilik • Hampers
                </p>
              </div>

              <button
                onClick={() =>
                  onChatClick(
                    "Halo Palapa Bouquet, saya ingin konsultasi pesanan khusus (Custom Order/Sewa Papan Akrilik).",
                  )
                }
                className="group relative flex items-center justify-center gap-3 w-full py-4 md:py-5 bg-green-500 text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:bg-green-600 transition-all duration-300"
              >
                <span>Chat Sekarang</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PROGRESS INDICATOR */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="w-full h-[1px] bg-palapa-rose/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-palapa-rose w-1/4"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-x {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-x {
          animation: bounce-x 1.5s infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
