import React from "react";
import { ShoppingBag, Star, Info } from "lucide-react";

// Import foto-foto produk
import img1 from "../assets/hero-bouquet.jpg";
import img2 from "../assets/hero-bouquet1.jpg";
import img3 from "../assets/hero-bouquet2.jpg";
import img4 from "../assets/hero-bouquet3.jpg";

const Catalog = ({ onChatClick }) => {
  const products = [
    {
      id: 1,
      name: "Signature Velvet",
      price: "250.000",
      tag: "Buket (Beli)",
      img: img1,
      desc: "Bunga tangan handmade tahan lama.",
    },
    {
      id: 2,
      name: "Wedding Acrylic",
      price: "150.000",
      tag: "Papan (Sewa)",
      img: img2,
      desc: "Sewa papan akrilik mewah untuk hari spesial.",
    },
    {
      id: 3,
      name: "Graduation Board",
      price: "350.000",
      tag: "Papan (Beli)",
      img: img3,
      desc: "Papan ucapan custom untuk kenang-kenangan.",
    },
    {
      id: 4,
      name: "Premium Hampers",
      price: "450.000",
      tag: "Hampers",
      img: img4,
      desc: "Paket kado lengkap dengan dekorasi eksklusif.",
    },
    {
      id: 4,
      name: "Premium Hampers",
      price: "450.000",
      tag: "Hampers",
      img: img4,
      desc: "Paket kado lengkap dengan dekorasi eksklusif.",
    },
    {
      id: 4,
      name: "Premium Hampers",
      price: "450.000",
      tag: "Hampers",
      img: img4,
      desc: "Paket kado lengkap dengan dekorasi eksklusif.",
    },
  ];

  return (
    <section id="katalog" className="py-24 md:py-32 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-palapa-rose/40 font-black tracking-[0.5em] uppercase text-[10px] block">
              Koleksi Pilihan
            </span>
            <h3 className="font-[900] text-5xl md:text-8xl text-palapa-rose leading-[0.9] uppercase tracking-tighter">
              Karya <br />
              <span className="text-palapa-rose/20 text-4xl md:text-8xl">
                Terbaik Kami
              </span>
            </h3>
          </div>
          {/* Teks deskripsi kecil hanya muncul di desktop untuk menjaga kerapian mobile */}
          <div className="hidden md:block max-w-xs text-right">
            <p className="text-palapa-rose/50 text-[10px] font-bold italic leading-relaxed uppercase tracking-widest">
              "Bukan sekadar bunga, tapi simbol abadi untuk momen berharga
              Anda."
            </p>
          </div>
        </div>

        {/* GRID RESPONSIVE: 1 Kolom (HP), 2 Kolom (iPad), 3 Kolom (Laptop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-24 gap-x-8 md:gap-x-12">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-palapa-cream border-[8px] md:border-[15px] border-white shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="text-[9px] font-black text-palapa-rose uppercase tracking-widest">
                    {product.tag}
                  </span>
                </div>
              </div>

              <div className="mt-8 px-2 space-y-4 flex flex-col items-center text-center">
                <div className="space-y-1">
                  <h4 className="text-xl md:text-2xl font-[900] text-palapa-rose uppercase tracking-tighter">
                    {product.name}
                  </h4>
                  <p className="text-xs text-palapa-rose/50 font-medium mb-2">
                    {product.desc}
                  </p>
                  <p className="text-lg md:text-xl font-medium text-palapa-rose/60">
                    Rp {product.price}
                  </p>
                </div>

                <button
                  onClick={() =>
                    onChatClick(
                      `Halo, saya ingin bertanya tentang ${product.name} (${product.tag})`,
                    )
                  }
                  className="w-full py-4 bg-palapa-rose text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-lg hover:bg-palapa-rose/80 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={16} /> Pesan / Tanya Stok
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
