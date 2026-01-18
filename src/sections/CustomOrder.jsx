import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Coins, Gift, Sparkles } from "lucide-react";
// Ganti dengan foto proses merangkai bunga yang cantik
import customImg from "../assets/hero-bouquet.jpg";

const CustomOrder = ({ onChatClick }) => {
  const features = [
    {
      icon: Palette,
      title: "Palet Warna Bebas",
      desc: "Pilih kombinasi warna dan jenis bunga favorit Anda.",
    },
    {
      icon: Coins,
      title: "Sesuai Anggaran",
      desc: "Kami sesuaikan rangkaian dengan budget yang Anda miliki.",
    },
    {
      icon: Gift,
      title: "Sentuhan Personal",
      desc: "Gratis kartu ucapan kustom & konsultasi desain.",
    },
  ];

  return (
    <section
      id="custom"
      className="py-32 bg-[#FAF5F6] font-poppins overflow-hidden relative"
    >
      {/* Dekorasi Latar Belakang Abstrak */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-palapa-rose/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* SISI KIRI: GAMBAR ORGANIK (BLOB SHAPE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Bingkai Bentuk Organik */}
            <div className="w-full h-[500px] md:h-[600px] relative z-10">
              {/* Menggunakan border-radius kompleks untuk membuat bentuk "blob" */}
              <div
                className="w-full h-full overflow-hidden border-[12px] border-white shadow-[0_30px_60px_rgba(177,122,135,0.2)] animate-float-slow"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              >
                <img
                  src={customImg}
                  alt="Proses Merangkai Bunga"
                  className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-[2s]"
                />
              </div>
            </div>
            {/* Aksen Dekoratif */}
            <Sparkles className="absolute -top-10 -left-10 text-palapa-rose/30 w-20 h-20 z-0" />
          </motion.div>

          {/* SISI KANAN: KONTEN & FITUR */}
          <div className="space-y-10 relative">
            {/* Header Editorial */}
            <div className="space-y-4">
              <span className="text-palapa-rose/40 font-black tracking-[0.5em] uppercase text-[10px] flex items-center gap-2">
                <span className="w-8 h-[2px] bg-palapa-rose/30"></span>
                Layanan Personalisasi
              </span>
              <h3 className="font-[900] text-5xl md:text-7xl text-palapa-rose leading-[0.9] uppercase tracking-tighter">
                Wujudkan <br /> Buket Impian <br />
                <span className="text-palapa-rose/30 italic font-light lowercase">
                  Anda
                </span>
              </h3>
              <p className="text-palapa-rose/60 text-lg leading-relaxed max-w-md pt-4">
                Punya ide spesifik? Florist artisan kami siap berkolaborasi
                untuk menciptakan rangkaian yang 100% unik, hanya untuk Anda.
              </p>
            </div>

            {/* Feature Blocks (Pengganti Bullet Points) */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-md p-6 rounded-[2rem] border border-white/40 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <feature.icon
                    size={32}
                    className="text-palapa-rose mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h5 className="text-lg font-black text-palapa-rose uppercase tracking-tight mb-2">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-palapa-rose/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tombol CTA */}
            <div className="pt-6">
              <button
                onClick={() =>
                  onChatClick(
                    "Halo, saya ingin konsultasi untuk pesanan buket custom.",
                  )
                }
                className="bg-palapa-rose text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-palapa-rose/20 flex items-center gap-4 group hover:scale-105 transition-all"
              >
                Konsultasi Gratis
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CustomOrder;
