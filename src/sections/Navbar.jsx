import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo Lingkaran Hitam Sesuai Identitas Anda */}
          <div className="w-10 h-10 bg-palapa-black rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
            PB
          </div>
          <span className="font-playfair font-bold text-2xl tracking-wide text-palapa-black">
            Palapa Bouquet
          </span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest text-palapa-text">
          <a
            href="#katalog"
            className="hover:text-palapa-pink transition-colors"
          >
            Katalog
          </a>
          <a
            href="#custom"
            className="hover:text-palapa-pink transition-colors"
          >
            Custom
          </a>
          <a
            href="#footer"
            className="hover:text-palapa-pink transition-colors"
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
