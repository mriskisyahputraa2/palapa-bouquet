import React from "react";
import { ShoppingBag, Star } from "lucide-react";

// 1. PASTIKAN IMPORT INI BENAR (Nama file harus sama persis, perhatikan besar kecil huruf)
import img1 from "../assets/hero-bouquet.jpg";
import img2 from "../assets/hero-bouquet1.jpg";
import img3 from "../assets/hero-bouquet2.jpg";
import img4 from "../assets/hero-bouquet3.jpg";

const Catalog = ({ onChatClick }) => {
  // 2. GUNAKAN VARIABEL (img1, img2, dst) TANPA TANDA KUTIP
  const products = [
    {
      id: 1,
      name: "Velvet Romance",
      price: "450.000",
      tag: "Buket Premium",
      img: img1,
    },
    {
      id: 2,
      name: "Eternal Grace",
      price: "550.000",
      tag: "Pernikahan",
      img: img2,
    },
    {
      id: 3,
      name: "Golden Success",
      price: "375.000",
      tag: "Wisuda",
      img: img3,
    },
    {
      id: 4,
      name: "Whispering Lilies",
      price: "420.000",
      tag: "Anniversary",
      img: img4,
    },
    {
      id: 5,
      name: "Acrylic Dreams",
      price: "600.000",
      tag: "Hadiah Spesial",
      img: img1,
    },
    {
      id: 6,
      name: "Pure Serenity",
      price: "325.000",
      tag: "Dekorasi Meja",
      img: img2,
    },
  ];

  return (
    <section id="katalog" className="py-32 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <span className="text-palapa-rose/40 font-black tracking-[0.8em] uppercase text-[10px] block">
              Koleksi Terpilih
            </span>
            <h3 className="font-[900] text-6xl md:text-8xl text-palapa-rose leading-[0.8] uppercase tracking-tighter">
              Daftar <br /> <span className="text-palapa-rose/20">Produk</span>
            </h3>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-palapa-cream border-[12px] border-white shadow-[0_20px_50px_rgba(177,122,135,0.1)] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(177,122,135,0.2)]">
                <img
                  src={product.img} // Memanggil variabel gambar
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
                  <span className="text-[10px] font-black text-palapa-rose uppercase tracking-widest">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* PRODUCT INFO */}
              <div className="mt-8 px-2 space-y-4 flex flex-col items-center text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" />
                    ))}
                  </div>
                  <h4 className="text-2xl font-[900] text-palapa-rose uppercase tracking-tighter leading-none">
                    {product.name}
                  </h4>
                  <p className="text-xl font-medium text-palapa-rose/60">
                    Rp {product.price}
                  </p>
                </div>

                <button
                  onClick={() =>
                    onChatClick(
                      `Halo Palapa Bouquet, saya ingin memesan ${product.name}`,
                    )
                  }
                  className="w-full py-4 bg-palapa-rose text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-lg shadow-palapa-rose/20 hover:bg-palapa-rose/80 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={16} />
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
