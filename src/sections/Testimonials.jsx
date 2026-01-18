import React from "react";
import { Star, Quote } from "lucide-react";

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
      text: "Istri saya suka banget sama rangkaian bunga papannya. Desain akriliknya mewah dan pengirimannya tepat waktu. Sangat direkomendasikan!",
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
    <section className="py-32 bg-[#FAF5F6] font-poppins relative overflow-hidden">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-palapa-rose/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Editorial */}
        <div className="text-center space-y-4 mb-20">
          <div className="flex items-center justify-center gap-2 text-palapa-rose/40 font-black tracking-[0.5em] uppercase text-[10px]">
            <span className="w-12 h-[1px] bg-palapa-rose/20"></span>
            Cerita Pelanggan
            <span className="w-12 h-[1px] bg-palapa-rose/20"></span>
          </div>
          <h3 className="font-[900] text-4xl md:text-6xl text-palapa-rose uppercase tracking-tighter leading-none">
            Kepuasan <br />{" "}
            <span className="text-palapa-rose/30 italic font-light lowercase">
              Hati Mereka
            </span>
          </h3>
        </div>

        {/* STATIC GRID - Menampilkan kartu secara sejajar & serasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              // h-full memastikan semua kartu dalam satu baris memiliki tinggi yang sama
              className="flex flex-col h-full bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(177,122,135,0.08)] border border-palapa-rose/5 relative group hover:-translate-y-2 transition-all duration-500"
            >
              {/* Ikon Kutipan Dekoratif */}
              <Quote className="absolute top-8 right-8 text-palapa-rose/5 w-20 h-20 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />

              {/* Konten Atas (Bintang & Teks) */}
              <div className="flex-grow space-y-6 relative z-10">
                <div className="flex gap-1 text-[#FFC700]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-palapa-rose/70 text-lg font-medium leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Konten Bawah (Profil) - Tetap di bawah karena flex-grow di atas */}
              <div className="mt-10 pt-8 border-t border-palapa-rose/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-palapa-rose/10 flex items-center justify-center text-palapa-rose font-black uppercase shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-palapa-rose uppercase text-sm tracking-wider">
                    {review.name}
                  </h4>
                  <p className="text-palapa-rose/50 text-[10px] font-bold uppercase mt-1 tracking-widest">
                    {review.role}
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

export default Testimonials;
