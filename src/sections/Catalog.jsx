import React from "react";
import ProductCard from "../components/ProductCard";

// Ganti path ini dengan foto-foto produk asli Anda di folder assets
import prod1 from "../assets/hero-bouquet.jpg";

const Catalog = ({ onChatClick }) => {
  // Data produk dalam Bahasa Indonesia
  const products = [
    {
      title: "Velvet Romance",
      price: "450.000",
      category: "Buket Premium",
      img: prod1,
    },
    {
      title: "Eternal Grace",
      price: "550.000",
      category: "Pernikahan",
      img: prod1,
    },
    {
      title: "Golden Success",
      price: "375.000",
      category: "Wisuda",
      img: prod1,
    },
    {
      title: "Whispering Lilies",
      price: "420.000",
      category: "Anniversary",
      img: prod1,
    },
    {
      title: "Acrylic Dreams",
      price: "600.000",
      category: "Hadiah Spesial",
      img: prod1,
    },
    {
      title: "Pure Serenity",
      price: "325.000",
      category: "Dekorasi Meja",
      img: prod1,
    },
  ];

  return (
    <section
      id="katalog"
      className="relative py-32 overflow-hidden bg-white font-poppins"
    >
      {/* Aksen Latar Belakang Organik */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-palapa-rose/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-palapa-petal/5 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Seksi (Gaya Editorial) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="space-y-4">
            <h2 className="text-palapa-rose/40 font-black tracking-[0.6em] uppercase text-[10px]">
              Dibuat Dengan Sepenuh Hati
            </h2>
            <h3 className="font-[900] text-5xl md:text-[80px] text-palapa-rose leading-[0.85] uppercase tracking-tighter">
              Koleksi <br />
              <span className="text-palapa-rose/20">Unggulan</span> <br />
              Kami
            </h3>
          </div>

          <div className="max-w-xs text-right border-r-4 border-palapa-rose/10 pr-6 hidden md:block">
            <p className="text-palapa-rose/60 text-sm font-medium leading-relaxed italic">
              "Setiap kelopak bunga dipilih secara teliti untuk memastikan hanya
              keindahan terbaik yang sampai ke tangan Anda."
            </p>
          </div>
        </div>

        {/* Grid Kartu Produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              price={item.price}
              imageSrc={item.img}
              category={item.category}
              onChatClick={onChatClick}
            />
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="mt-32 text-center">
          <button className="group relative px-16 py-5 overflow-hidden inline-block">
            <span className="relative z-10 font-black text-palapa-rose uppercase tracking-[0.4em] text-[11px] group-hover:text-white transition-colors duration-500">
              Lihat Semua Karya
            </span>
            <div className="absolute inset-0 border-2 border-palapa-rose rounded-2xl group-hover:bg-palapa-rose transition-all duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
