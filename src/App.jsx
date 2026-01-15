import React from "react";
import {
  MessageCircle,
  Instagram,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const App = () => {
  // Fungsi untuk handle chat WhatsApp otomatis
  const handleWhatsApp = (message) => {
    const phoneNumber = "6281234567890"; // GANTI DENGAN NOMOR WA ANDA
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-palapa-black rounded-full flex items-center justify-center text-white font-bold text-xs">
              PB
            </div>
            <span className="font-playfair font-bold text-2xl tracking-wide text-palapa-black">
              Palapa Bouquet
            </span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest text-palapa-text">
            <a href="#katalog" className="hover:text-palapa-pink transition">
              Katalog
            </a>
            <a href="#custom" className="hover:text-palapa-pink transition">
              Custom
            </a>
            <a href="#tentang" className="hover:text-palapa-pink transition">
              Tentang
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-palapa-pink-soft text-palapa-pink rounded-full text-sm font-bold tracking-wider uppercase">
              Premium Florist & Gift
            </div>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-palapa-black leading-[1.1]">
              Sampaikan Perasaan <br />
              <span className="text-palapa-pink italic">Lewat Keindahan</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-md leading-relaxed">
              Koleksi buket bunga premium dan papan akrilik elegan untuk
              merayakan setiap momen berharga Anda.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() =>
                  document.getElementById("katalog").scrollIntoView()
                }
                className="bg-palapa-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl flex items-center gap-2"
              >
                Lihat Katalog <ArrowRight size={18} />
              </button>
              <button
                onClick={() =>
                  handleWhatsApp(
                    "Halo Palapa Bouquet, saya ingin bertanya tentang produknya..."
                  )
                }
                className="bg-white border-2 border-palapa-pink text-palapa-pink px-8 py-4 rounded-full font-bold hover:bg-palapa-pink-soft transition-all flex items-center gap-2"
              >
                <MessageCircle size={20} /> Chat Admin
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-palapa-pink-soft rounded-3xl -rotate-3 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800"
              alt="Main Bouquet"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </header>

      {/* 3. CATEGORY SECTION */}
      <section id="katalog" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-playfair text-4xl font-bold text-palapa-black">
            Koleksi Spesial Kami
          </h2>
          <p className="text-gray-500">
            Pilih kategori yang sesuai dengan momen Anda
          </p>
          <div className="w-20 h-1 bg-palapa-pink mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Birthday Bouquet",
              desc: "Buket ceria untuk hari spesial",
              img: "https://images.unsplash.com/photo-1525310238222-b5e158107931?q=80&w=500",
              msg: "Halo, saya tertarik dengan Buket Ulang Tahun.",
            },
            {
              title: "Acrylic Excellence",
              desc: "Papan ucapan wisuda & nikah",
              img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=500",
              msg: "Halo, bisa tanya harga Papan Akrilik?",
            },
            {
              title: "Custom Creations",
              desc: "Desain sesuai keinginan Anda",
              img: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=500",
              msg: "Halo Admin, saya ingin konsultasi buat buket custom.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="h-80 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <button
                    onClick={() => handleWhatsApp(item.msg)}
                    className="w-full bg-white text-palapa-black py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 mb-6 text-sm">{item.desc}</p>
                <button
                  onClick={() => handleWhatsApp(item.msg)}
                  className="text-palapa-pink font-bold text-sm flex items-center gap-2"
                >
                  Lihat Detail <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VALUE PROPOSITION */}
      <section className="bg-palapa-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-palapa-pink">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-xl font-bold">Bunga Segar</h4>
            <p className="text-gray-400 text-sm">
              Dipilih langsung setiap pagi untuk kualitas terbaik.
            </p>
          </div>
          <div className="space-y-4 border-y md:border-y-0 md:border-x border-white/10 py-12 md:py-0">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-palapa-pink">
              <Clock size={32} />
            </div>
            <h4 className="text-xl font-bold">Pengerjaan Cepat</h4>
            <p className="text-gray-400 text-sm">
              Tersedia layanan Same-Day untuk kebutuhan mendesak.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-palapa-pink">
              <Instagram size={32} />
            </div>
            <h4 className="text-xl font-bold">Desain Estetik</h4>
            <p className="text-gray-400 text-sm">
              Rangkaian bunga modern yang selalu mengikuti tren.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM SECTION */}
      <section id="custom" className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-palapa-pink-soft rounded-[3rem] p-10 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-palapa-pink opacity-10 rounded-full -mr-16 -mt-16"></div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-palapa-black">
            Punya Ide Buket Sendiri?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Diskusikan budget dan model keinginan Anda. Florist kami siap
            mewujudkan buket impian yang personal untuk orang tersayang.
          </p>
          <button
            onClick={() =>
              handleWhatsApp(
                "Halo Admin, saya ingin konsultasi buat buket custom. Berikut ide saya..."
              )
            }
            className="bg-palapa-pink text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 mx-auto text-lg"
          >
            <MessageCircle size={24} /> Mulai Konsultasi Gratis
          </button>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="space-y-6">
            <span className="font-playfair font-bold text-3xl text-palapa-black">
              Palapa Bouquet
            </span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Menyediakan berbagai macam rangkaian bunga berkualitas tinggi
              untuk segala jenis perayaan Anda sejak 2024.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-xs">
              Hubungi Kami
            </h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-palapa-pink" /> Jl. Bunga
                Melati No. 123, Kota Anda
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-palapa-pink" /> +62 812
                3456 7890
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-palapa-pink" />{" "}
                @palapabouquet
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-xs">
              Jam Operasional
            </h5>
            <p className="text-sm text-gray-500">
              Senin - Minggu: 08.00 - 20.00 WIB
            </p>
            <p className="text-xs text-palapa-pink font-medium">
              *Menerima pesanan 24 jam via WhatsApp
            </p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 border-t border-gray-50 pt-10">
          © 2026 Palapa Bouquet. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
