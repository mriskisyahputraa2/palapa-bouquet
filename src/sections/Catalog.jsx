import React from "react";
import Heading from "../components/Heading";
import ProductCard from "../components/ProductCard";

// --- IMPORT FOTO ASLI ANDA DI SINI ---
// Pastikan nama filenya sesuai dengan yang ada di folder src/assets/
import imgBirthday from "../assets/birthday-bouquet.webp";
import imgAcrylic from "../assets/acrylic-gift.jpg";
import imgCustom from "../assets/custom-bouquet.jpeg";

const Catalog = ({ onChatClick }) => {
  const products = [
    {
      title: "Birthday Bouquet",
      desc: "Rangkaian bunga segar penuh warna untuk merayakan hari jadi.",
      img: imgBirthday, // Pakai variabel impor tadi
      msg: "Halo, saya tertarik dengan Buket Ulang Tahun di website.",
    },
    {
      title: "Acrylic Excellence",
      desc: "Papan ucapan bahan akrilik premium, tahan lama dan elegan.",
      img: imgAcrylic,
      msg: "Halo, bisa tanya harga Papan Akrilik untuk wisuda/nikah?",
    },
    {
      title: "Custom Creations",
      desc: "Anda punya ide sendiri? Diskusikan desainnya bersama kami.",
      img: imgCustom,
      msg: "Halo Admin, saya ingin konsultasi untuk order buket custom.",
    },
  ];

  return (
    <section id="katalog" className="max-w-7xl mx-auto px-6 py-24">
      <Heading
        title="Koleksi Spesial Kami"
        subtitle="Pilih kategori yang sesuai dengan momen berharga Anda"
        center
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item, idx) => (
          <ProductCard
            key={idx}
            title={item.title}
            desc={item.desc}
            imageSrc={item.img}
            onChatClick={() => onChatClick(item.msg)}
          />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
