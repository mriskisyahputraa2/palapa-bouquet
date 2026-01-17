import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      name: "Siska Amelia",
      role: "Pembeli Buket Wisuda",
      text: "Bunganya jauh lebih cantik aslinya daripada di foto! Wangi banget dan packaging-nya sangat aman. Seller juga ramah banget bantu pilih warna pita yang pas.",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Hadiah Anniversary",
      text: "Istri saya suka banget sama rangkaian bunga papannya. Desain akriliknya mewah dan pengirimannya tepat waktu. Sangat direkomendasikan untuk kado spesial!",
      rating: 5,
    },
    {
      name: "Dian Pratama",
      role: "Buket Custom",
      text: "Minta dibuatin buket dengan budget terbatas tapi hasilnya tetap kelihatan mahal. Kreativitas florist-nya jempolan. Terima kasih Palapa Bouquet!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-palapa-cream/30 font-poppins relative overflow-hidden">
      {/* Dekorasi Kutipan Besar di Background */}
      <Quote className="absolute top-10 left-10 w-64 h-64 text-palapa-rose/5 -rotate-12" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-palapa-rose/40 font-black tracking-[0.5em] uppercase text-[10px]">
            Apa Kata Mereka?
          </h2>
          <h3 className="font-[900] text-4xl md:text-6xl text-palapa-rose uppercase">
            Cerita Pelanggan Kami
          </h3>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-10 rounded-[3rem] shadow-[0_20px_40px_rgba(177,122,135,0.05)] border border-palapa-rose/5 h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
                <div className="space-y-6">
                  {/* Rating Bintang */}
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  {/* Teks Testimoni */}
                  <p className="text-palapa-rose/80 font-medium italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-palapa-rose/10">
                  <h4 className="font-black text-palapa-rose uppercase text-sm tracking-widest">
                    {review.name}
                  </h4>
                  <p className="text-palapa-rose/40 text-[10px] font-bold uppercase mt-1 tracking-widest">
                    {review.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #b17a87 !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
