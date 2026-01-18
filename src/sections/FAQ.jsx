import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah ini bunga asli atau segar?",
      answer:
        "Kami spesialis bunga buatan tangan (artificial/handcrafted). Kelebihannya, buket Anda tidak akan layu, tetap cantik selamanya, dan sangat cocok untuk kenang-kenangan wisuda atau dekorasi rumah.",
    },
    {
      question: "Bagaimana sistem sewa papan akrilik?",
      answer:
        "Untuk papan akrilik, kami menyediakan opsi sewa (lebih hemat untuk acara harian) maupun beli. Sistem sewa berlaku harian dan pengambilan serta pengembalian dilakukan langsung di toko kami.",
    },
    {
      question: "Berapa lama proses pengerjaan buket kustom?",
      answer:
        "Proses pengerjaan biasanya 1-3 hari tergantung kerumitan. Namun, kami juga menyediakan beberapa produk 'Ready Stock' yang bisa langsung diambil jika Anda butuh kado mendadak.",
    },
    {
      question: "Di mana lokasi pengambilan?",
      answer:
        "Toko kami berlokasi di Jalan Palapa 1, Hagu Teungoh, Lhokseumawe. Kami melayani pengambilan langsung untuk memastikan kado Anda tetap dalam kondisi sempurna tanpa risiko rusak di perjalanan.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-white font-poppins relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-palapa-rose/40 font-black tracking-[0.5em] uppercase text-[10px]">
            Informasi Layanan
          </span>
          <h3 className="font-[900] text-4xl md:text-5xl text-palapa-rose uppercase tracking-tighter leading-tight">
            Bantuan & <br className="md:hidden" />{" "}
            <span className="text-palapa-rose/20">FAQ</span>
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
                    className={`font-extrabold text-xs md:text-base uppercase tracking-tight ${
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
                <div className="px-6 md:px-8 pb-8 pt-0 ml-0 md:ml-9">
                  <p className="text-palapa-rose/70 text-sm md:text-base font-medium leading-relaxed border-l-2 border-palapa-rose/20 pl-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
