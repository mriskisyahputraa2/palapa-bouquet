import React from "react";
import { ArrowRight } from "lucide-react";

// Menerima 'imageSrc' sebagai props untuk foto Anda
const ProductCard = ({ title, desc, imageSrc, onChatClick }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
      <div className="h-96 overflow-hidden relative">
        {/* Menggunakan gambar asli Anda di sini */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        {/* Overlay Tombol Pesan */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
          <button
            onClick={onChatClick}
            className="w-full bg-white text-palapa-black py-4 rounded-xl font-bold hover:bg-palapa-pink hover:text-white transition-colors"
          >
            Pesan Model Ini
          </button>
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-playfair text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-6 text-sm">{desc}</p>
        <button
          onClick={onChatClick}
          className="text-palapa-pink font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
        >
          Lihat Detail <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
//
