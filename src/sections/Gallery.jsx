import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Quote } from "lucide-react";

// Import foto-foto karya terbaik Anda
import img1 from "../assets/hero-bouquet.jpg";
import img2 from "../assets/hero-bouquet1.jpg";
import img3 from "../assets/hero-bouquet2.jpg";
import img4 from "../assets/hero-bouquet3.jpg";
import img5 from "../assets/hero-bouquet.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: "01",
      img: img1,
      title: "Eternal Rose",
      category: "ANNIVERSARY",
      size: "w-[400px] md:w-[500px]",
    },
    {
      id: "02",
      img: img2,
      title: "Artisan Bloom",
      category: "PREMIUM GIFT",
      size: "w-[450px] md:w-[750px]",
    },
    {
      id: "03",
      img: img3,
      title: "Soft Peony",
      category: "GRADUATION",
      size: "w-[300px] md:w-[400px]",
    },
    {
      id: "04",
      img: img4,
      title: "Handcrafted",
      category: "CUSTOM ORDER",
      size: "w-[400px] md:w-[600px]",
    },
    {
      id: "05",
      img: img5,
      title: "Vintage Petal",
      category: "DECORATION",
      size: "w-[350px] md:w-[500px]",
    },
  ];

  return (
    <section
      id="galeri"
      className="py-32 bg-[#FAF5F6] font-poppins overflow-hidden relative"
    >
      {/* BACKGROUND TEXT DECORATION */}
      <div className="absolute top-20 left-0 w-full pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[25vw] font-black leading-none text-palapa-rose whitespace-nowrap">
          PALAPA BOUQUET
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-palapa-rose">
              <Sparkles size={16} className="animate-pulse" />
              <span className="font-black tracking-[0.5em] uppercase text-[10px]">
                Artisan Visual Journey
              </span>
            </div>
            <h3 className="font-[900] text-7xl md:text-[120px] text-palapa-rose leading-[0.75] uppercase tracking-tighter">
              Jurnal <br />{" "}
              <span className="text-palapa-rose/20 italic font-light lowercase">
                Visual
              </span>
            </h3>
          </motion.div>

          <div className="text-left md:text-right space-y-6">
            <Quote className="text-palapa-rose/20 w-12 h-12 md:ml-auto" />
            <p className="max-w-xs text-palapa-rose/60 text-sm leading-relaxed font-medium italic">
              "Setiap kelopak adalah cerita abadi yang kami rangai dengan
              ketelitian tangan."
            </p>
            <div className="flex items-center md:justify-end gap-3 text-palapa-rose font-black text-xs uppercase tracking-[0.3em]">
              Gulir Menelusuri{" "}
              <ArrowRight size={18} className="animate-bounce-x" />
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL CINEMATIC SCROLL */}
      <div className="flex gap-12 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2+24px)] pb-24 no-scrollbar snap-x snap-mandatory">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex-none ${item.size} h-[550px] md:h-[650px] snap-center group relative`}
          >
            {/* PERBAIKAN UTAMA: 
                - isolation-isolate: Memaksa browser menjaga radius saat transformasi.
                - mask-image: Memaksa pemotongan gambar sesuai bentuk kontainer.
            */}
            <div className="w-full h-full rounded-[4.5rem] overflow-hidden border-[15px] border-white shadow-[0_40px_80px_-15px_rgba(177,122,135,0.25)] relative isolation-isolate group-hover:shadow-[0_60px_100px_-15px_rgba(177,122,135,0.4)] transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-1">
              <img
                src={item.img}
                // fix: transform-gpu memastikan rendering menggunakan kartu grafis agar transisi radius mulus
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 transform-gpu"
                alt={item.title}
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-palapa-rose/90 via-palapa-rose/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-14 pointer-events-none">
                <div className="overflow-hidden">
                  <span className="block text-white/70 text-[10px] font-black uppercase tracking-[0.5em] mb-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-4xl font-[900] text-white uppercase tracking-tighter leading-none translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* FLOATING INDEX NUMBER */}
              <div className="absolute top-10 left-10 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                <span className="text-white group-hover:text-palapa-rose font-black text-xs tracking-tighter transition-colors">
                  {item.id}
                </span>
              </div>
            </div>

            <div className="absolute -bottom-8 left-10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
              <p className="text-[10px] font-bold text-palapa-rose/40 uppercase tracking-[1em]">
                Handcrafted Artisan
              </p>
            </div>
          </motion.div>
        ))}

        {/* FRAME AKHIR: CTA */}
        <div className="flex-none w-[400px] h-[550px] md:h-[650px] snap-center flex items-center">
          <div className="bg-white rounded-[4.5rem] w-full h-full flex flex-col items-center justify-center p-12 text-center space-y-8 shadow-xl border border-palapa-rose/5 group hover:bg-palapa-rose transition-all duration-700">
            <div className="w-16 h-[1px] bg-palapa-rose group-hover:bg-white transition-colors"></div>
            <h4 className="text-3xl font-[900] text-palapa-rose group-hover:text-white uppercase tracking-tighter leading-tight transition-colors">
              Ingin <br /> Sesuatu <br /> Yang Unik?
            </h4>
            <button className="bg-palapa-rose group-hover:bg-white text-white group-hover:text-palapa-rose px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-lg hover:scale-110 transition-all">
              Pesan Khusus
            </button>
          </div>
        </div>
      </div>

      {/* PROGRESS BAR */}
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
        .animate-bounce-x {
          animation: bounce-x 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
