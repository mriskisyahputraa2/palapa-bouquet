import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

// Import CSS Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Import Asset
import slide1 from "../assets/bunga/bc-1.webp";
import slide2 from "../assets/bunga/bc-2.webp";
import slide3 from "../assets/bunga/bc-3.webp";
import waIcon from "../assets/whatsapp.png"; // Pastikan path asset benar

const HeroCarousel = ({ onChatClick }) => {
  const slides = [
    {
      id: 1,
      image: slide1,
      subtitle: "Handcrafted Artisan Bouquet",
      title: "Abadikan\nMomen Tanpa\nLayu",
      desc: "Buket premium buatan tangan yang dirancang khusus untuk wisuda dan pernikahan. Keindahan yang tetap sempurna selamanya.",
    },
    {
      id: 2,
      image: slide2,
      subtitle: "Modern Acrylic Board",
      title: "Elegan\nDi Setiap\nUcapan",
      desc: "Sewa atau miliki papan akrilik eksklusif untuk ucapan wisuda & wedding. Sentuhan modern yang membuat momen Anda berkesan.",
    },
    {
      id: 3,
      image: slide3,
      subtitle: "Premium Hampers & Gift",
      title: "Kado\nPersonal\nTerbaik",
      desc: "Wujudkan kado impian Anda dengan layanan kustomisasi penuh. Dari hampers hingga buket unik, kami buatkan spesial untuk Anda.",
    },
  ];

  return (
    <header
      id="home"
      className="relative h-[85vh] md:h-screen -mt-24 font-poppins overflow-hidden"
    >
      <Swiper
        effect={"fade"}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/70 md:to-transparent"></div>
            </div>

            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
              <div className="max-w-2xl space-y-6 md:space-y-8 pt-20">
                <div className="space-y-3">
                  <h2 className="text-white font-extrabold tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[11px] animate-fadeIn">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-white font-[900] text-4xl sm:text-6xl md:text-7xl lg:text-[90px] leading-[1.1] md:leading-[0.9] tracking-tighter uppercase whitespace-pre-line drop-shadow-2xl">
                    {slide.title}
                  </h1>
                </div>

                <p className="text-white/90 font-medium text-sm md:text-lg leading-relaxed max-w-md drop-shadow-md">
                  {slide.desc}
                </p>

                <div className="pt-4 md:pt-6">
                  {/* TOMBOL PESAN SEKARANG DENGAN ICON WA */}
                  <button
                    onClick={() =>
                      onChatClick(
                        `Halo Palapa Bouquet, saya ingin pesan layanan: ${slide.subtitle}`,
                      )
                    }
                    className="group relative flex items-center gap-4 bg-palapa-rose text-white px-8 md:px-10 py-4 md:py-5 font-[900] text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-palapa-rose transition-all duration-500 transform hover:-translate-y-1 active:scale-95 overflow-hidden rounded-sm"
                  >
                    {/* Icon WA Kecil di dalam Tombol */}
                    <img
                      src={waIcon}
                      alt="WA"
                      className="w-5 h-5 md:w-6 md:h-6 object-contain brightness-0 invert group-hover:invert-0 transition-all duration-500"
                    />
                    <span className="relative z-10">Pesan Sekarang</span>

                    {/* Efek Kilau saat Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #b17a87 !important;
          width: 24px !important;
          border-radius: 8px !important;
          opacity: 1 !important;
        }
      `}</style>
    </header>
  );
};

export default HeroCarousel;
