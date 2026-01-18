import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Siska Amelia",
      role: "Pembeli Buket",
      text: "Bunganya cantik sekali dan tidak layu! Sangat puas untuk kado wisuda sahabat saya.",
    },
    {
      name: "Budi Santoso",
      role: "Penyewa Papan",
      text: "Sewa papan akrilik di sini sangat mudah. Desainnya modern dan pengirimannya tepat waktu.",
    },
    {
      name: "Dian Pratama",
      role: "Hadiah Hampers",
      text: "Minta buket budget pelajar tapi hasilnya kelihatan mewah banget. Seller-nya sabar banget!",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white font-poppins relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16 md:mb-20 space-y-4">
          <span className="text-palapa-rose/40 font-black tracking-[0.4em] uppercase text-[9px] md:text-[10px]">
            Testimoni
          </span>
          <h3 className="font-[900] text-4xl md:text-6xl text-palapa-rose uppercase tracking-tighter">
            Cerita{" "}
            <span className="text-palapa-rose/30 italic font-light lowercase">
              Pelanggan
            </span>
          </h3>
        </div>

        {/* GRID RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-[#FAF5F6] p-8 md:p-10 rounded-[3rem] shadow-sm relative group hover:-translate-y-2 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-palapa-rose/5 w-12 h-12 md:w-16 md:h-16" />

              <div className="flex-grow space-y-4 relative z-10 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-palapa-rose/70 text-base md:text-lg leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-palapa-rose/10 text-center md:text-left">
                <h4 className="font-black text-palapa-rose uppercase text-xs tracking-widest">
                  {item.name}
                </h4>
                <p className="text-palapa-rose/40 text-[9px] font-bold uppercase mt-1 tracking-widest">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
