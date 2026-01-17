import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

// --- GANTI DENGAN FOTO HD ANDA ---
import slide1 from "../assets/hero-bouquet1.jpg"; // Misal: Foto Buket Wedding
import slide2 from "../assets/hero-bouquet2.jpg"; // Misal: Foto Akrilik
import slide3 from "../assets/hero-bouquet3.jpg"; // Misal: Foto Bunga Meja

const HeroCarousel = ({ onChatClick }) => {
  // Data untuk setiap slide
  const slides = [
    {
      id: 1,
      image: slide1,
      subtitle: "Artisan Bunga Tangan & Kado",
      title: "Kado\nAbadi Untuk\nTerkasih",
      desc: "Rangkaian bunga buatan tangan (handcrafted) yang dirancang khusus untuk kenangan yang tidak akan pernah layu.",
    },
    {
      id: 2,
      image: slide2,
      subtitle: "Karya Kreatif Palapa",
      title: "Keindahan\nYang Tetap\nAbadi",
      desc: "Setiap kelopak dibuat dengan detail untuk memastikan hadiah Anda tetap cantik selamanya. Sempurna untuk dekorasi atau kado.",
    },
    {
      id: 3,
      image: slide3,
      subtitle: "Pesanan Khusus",
      title: "Wujudkan\nDesain\nImpian Anda",
      desc: "Diskusikan desain favorit Anda dan ambil langsung di studio kami. Hasil karya personal untuk momen spesial.",
    },
  ];

  // Tombol di dalam Slider:
  <button className="...">Lihat Koleksi</button>;

  return (
    // Gunakan -mt-24 agar navbar terlihat transparan di atas foto
    <header className="relative h-screen -mt-24 font-poppins overflow-hidden">
      <Swiper
        spaceBetween={0}
        effect={"fade"} // Efek transisi pudar (lebih elegan daripada geser)
        speed={1000} // Kecepatan transisi (1 detik)
        autoplay={{
          delay: 5000, // Ganti slide setiap 5 detik
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true, // Titik-titik navigasi di bawah bisa diklik
          dynamicBullets: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            {/* 1. LAYER FOTO BACKGROUND */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                // object-cover penting agar foto memenuhi layar tanpa gepeng
                className="w-full h-full object-cover"
              />
              {/* 2. LAYER OVERLAY GELAP (PENTING UNTUK KETERBACAAN) */}
              {/* Kita pakai gradasi hitam agar teks putih terbaca jelas */}
              <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/60 md:to-transparent"></div>
            </div>

            {/* 3. KONTEN TEKS DI ATAS FOTO */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
              <div className="max-w-2xl space-y-8 pt-20">
                <div className="space-y-2">
                  {/* Subtitle dengan warna Dusty Rose terang */}
                  <h2 className="text-palapa-petal font-extrabold tracking-[0.5em] uppercase text-[11px] ml-1 animate-fadeIn">
                    {slide.subtitle}
                  </h2>
                  {/* Judul Putih Besar */}
                  <h1 className="text-white font-[900] text-6xl md:text-[90px] leading-[0.9] tracking-tight uppercase whitespace-pre-line drop-shadow-lg">
                    {slide.title}
                  </h1>
                </div>

                {/* Deskripsi Putih/Abu terang */}
                <p className="text-white/90 font-medium text-lg leading-relaxed max-w-md drop-shadow-md">
                  {slide.desc}
                </p>

                {/* Tombol Aksi */}
                <div className="pt-6">
                  <button
                    onClick={() =>
                      onChatClick(
                        `Halo, saya tertarik dengan ${slide.title.replace(
                          /\n/g,
                          " "
                        )}`
                      )
                    }
                    className="bg-palapa-rose text-white px-14 py-5 font-[900] text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-white hover:text-palapa-rose transition-all duration-500 transform hover:-translate-y-1"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS Custom untuk Pagination Swiper agar warnanya pink */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: white;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background-color: var(--color-palapa-rose);
          opacity: 1;
          width: 24px;
          border-radius: 8px;
        }
      `}</style>
    </header>
  );
};

export default HeroCarousel;
