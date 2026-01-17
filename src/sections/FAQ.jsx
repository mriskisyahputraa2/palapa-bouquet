import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah ini bunga asli/segar?",
      answer:
        "Tidak, Palapa Bouquet spesialis dalam bunga buatan tangan (artificial/handcrafted). Keunggulannya adalah bunga ini tidak akan layu dan tetap cantik selamanya sebagai kenangan.",
    },
    {
      question: "Apakah Palapa Bouquet melayani pengiriman?",
      answer:
        "Saat ini kami hanya melayani sistem 'Self-Pickup' atau Ambil di Toko. Pelanggan dapat datang langsung ke studio kami untuk mengambil pesanan guna memastikan produk diterima dalam kondisi sempurna.",
    },
    {
      question: "Berapa lama proses pengerjaan bunga kustom?",
      answer:
        "Untuk pesanan khusus, proses pengerjaan biasanya memakan waktu 1-3 hari tergantung pada kerumitan desain. Kami menyarankan pemesanan dilakukan jauh-jauh hari.",
    },
    {
      question: "Di mana lokasi pengambilan pesanan?",
      answer:
        "Lokasi studio kami berada di [Alamat Lengkap Anda]. Detail lokasi dan jam operasional dapat Anda lihat di bagian bawah (Footer) website ini.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white font-poppins relative overflow-hidden">
      {/* Dekorasi Halus */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-palapa-rose/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-palapa-rose/40 font-black tracking-[0.5em] uppercase text-[10px]">
            Punya Pertanyaan?
          </h2>
          <h3 className="font-[900] text-4xl md:text-5xl text-palapa-rose uppercase">
            Bantuan & FAQ
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-2 transition-all duration-500 rounded-[2rem] overflow-hidden ${
                activeIndex === index
                  ? "border-palapa-rose bg-palapa-rose/[0.02]"
                  : "border-palapa-rose/10 bg-transparent"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle
                    size={20}
                    className={`shrink-0 transition-colors ${
                      activeIndex === index
                        ? "text-palapa-rose"
                        : "text-palapa-rose/30"
                    }`}
                  />
                  <span
                    className={`font-extrabold text-sm md:text-base uppercase tracking-tight ${
                      activeIndex === index
                        ? "text-palapa-rose"
                        : "text-palapa-rose/80"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`shrink-0 transition-transform duration-500 ${
                    activeIndex === index
                      ? "rotate-180 text-palapa-rose"
                      : "text-palapa-rose/30"
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-8 pt-0 ml-9">
                  <p className="text-palapa-rose/70 font-medium leading-relaxed border-l-2 border-palapa-rose/20 pl-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pesan Tambahan */}
        <div className="mt-16 text-center p-8 rounded-[2.5rem] bg-palapa-cream/50 border border-palapa-rose/10">
          <p className="text-palapa-rose/60 text-sm font-bold uppercase tracking-widest">
            Masih butuh bantuan lainnya?
            <span className="block md:inline md:ml-2 text-palapa-rose cursor-pointer border-b-2 border-palapa-rose/30 hover:border-palapa-rose transition-all">
              Tanyakan langsung via WhatsApp kami
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
