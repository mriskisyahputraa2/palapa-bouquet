import React from "react";
import { motion } from "framer-motion";
import { Palette, Coins, Gift, MessageCircle } from "lucide-react";
import customImg from "../assets/bunga/b-3.webp";

const CustomOrder = ({ onChatClick }) => {
  const features = [
    { icon: Palette, title: "Warna & Jenis Bunga Bebas Request" },
    { icon: Coins, title: "Sesuai Budget (Mulai Rp 150rb)" },
    { icon: Gift, title: "Sewa Papan Akrilik & Hampers" },
  ];

  return (
    <section
      id="custom"
      className="py-24 md:py-32 bg-[#FAF5F6] font-poppins relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* SISI KIRI: GAMBAR ORGANIK (Responsive Scale) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="w-full h-[400px] md:h-[600px] relative z-10">
              <div
                className="w-full h-full overflow-hidden border-[8px] md:border-[15px] border-white shadow-2xl animate-soft-float"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              >
                <img
                  src={customImg}
                  className="w-full h-full object-cover scale-110 transform-gpu"
                  alt="Custom Palapa Bouquet"
                />
              </div>
            </div>
          </motion.div>

          {/* SISI KANAN: KONTEN EDITORIAL (Centered on Mobile) */}
          <div className="space-y-8 md:space-y-10 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-palapa-rose/40 font-black tracking-[0.4em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px] block">
                Layanan Spesial
              </span>
              <h3 className="font-[900] text-4xl md:text-7xl text-palapa-rose leading-[1] uppercase tracking-tighter">
                Wujudkan <br />{" "}
                <span className="text-palapa-rose/30 italic font-light lowercase">
                  Kado Impian
                </span>{" "}
                <br /> ANDA
              </h3>
              <p className="text-palapa-rose/60 text-sm md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Punya budget tertentu atau ingin desain yang unik? Kami ahli
                dalam merangkai buket non-layu dan papan akrilik modern yang
                sesuai dengan imajinasi Anda.
              </p>
            </div>

            {/* List Fitur */}
            <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group bg-white/50 p-3 rounded-2xl md:bg-transparent md:p-0"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-palapa-rose shadow-sm group-hover:bg-palapa-rose group-hover:text-white transition-colors">
                    <f.icon size={18} />
                  </div>
                  <p className="text-[10px] md:text-xs font-black text-palapa-rose/70 uppercase tracking-widest">
                    {f.title}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                onChatClick(
                  "Halo, saya ingin konsultasi pesanan buket kustom / sewa papan akrilik.",
                )
              }
              className="flex items-center justify-center gap-3 bg-palapa-rose text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:scale-105 transition-all mx-auto lg:mx-0"
            >
              <MessageCircle size={18} />
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes soft-float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        .animate-soft-float {
          animation: soft-float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CustomOrder;
