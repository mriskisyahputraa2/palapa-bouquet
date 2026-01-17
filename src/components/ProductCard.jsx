import React from "react";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ title, price, imageSrc, category, onChatClick }) => {
  return (
    <div className="group font-poppins">
      {/* Container Foto dengan Border Putih Tebal & Sudut Sangat Bulat */}
      <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-700 group-hover:shadow-[0_30px_60px_rgba(177,122,135,0.2)] group-hover:-translate-y-3 border-[12px] border-white">
        {/* Foto Produk */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Overlay Interaktif saat Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-palapa-rose/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-8">
          <button
            onClick={() =>
              onChatClick(
                `Halo Palapa Bouquet, saya ingin memesan produk: ${title}`
              )
            }
            className="w-full bg-white text-palapa-rose py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            Pesan Sekarang
          </button>
        </div>

        {/* Badge Kategori Transparan (Glassmorphism) */}
        <div className="absolute top-6 left-6 bg-white/70 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
          <span className="text-[10px] font-black text-palapa-rose uppercase tracking-[0.2em]">
            {category}
          </span>
        </div>
      </div>

      {/* Informasi Produk */}
      <div className="mt-8 text-center space-y-1">
        <h3 className="font-extrabold text-xl text-palapa-rose/90 uppercase tracking-tight group-hover:text-palapa-rose transition-colors duration-300">
          {title}
        </h3>
        <p className="text-palapa-rose/50 font-bold text-sm tracking-widest italic">
          Rp {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
