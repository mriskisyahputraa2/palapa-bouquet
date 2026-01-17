import React from "react";

const Navbar = () => {
  return (
    <nav className="relative z-50 flex justify-between items-stretch max-w-7xl mx-auto px-6 h-24 font-poppins">
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-start leading-none">
          <span className="font-[900] text-3xl tracking-tighter text-palapa-rose italic uppercase">
            Palapa
          </span>
          <span className="text-[9px] font-bold text-palapa-rose/60 uppercase tracking-[0.4em] mt-1">
            Bouquet
          </span>
        </div>
      </div>

      <div className="flex items-stretch">
        <ul className="flex items-stretch">
          <li className="flex items-center px-8 font-extrabold text-xs text-palapa-rose cursor-pointer border-b-4 border-palapa-rose tracking-widest">
            BERANDA
          </li>
          <li className="flex items-center px-10 bg-palapa-rose/10 text-palapa-rose font-extrabold text-xs tracking-widest hover:bg-palapa-rose hover:text-white transition-all duration-300 cursor-pointer">
            KOLEKSI
          </li>
          <li className="flex items-center px-10 bg-palapa-rose/20 text-palapa-rose font-extrabold text-xs tracking-widest hover:bg-palapa-rose hover:text-white transition-all duration-300 cursor-pointer border-x border-white/5">
            PESANAN KHUSUS
          </li>
          <li className="flex items-center px-10 bg-palapa-rose/30 text-white font-extrabold text-xs tracking-widest hover:bg-palapa-rose hover:text-white transition-all duration-300 cursor-pointer">
            TENTANG KAMI
          </li>
          <li className="flex items-center px-12 bg-palapa-rose/50 text-white font-extrabold text-xs tracking-widest hover:bg-palapa-rose hover:text-white transition-all duration-300 cursor-pointer rounded-br-3xl">
            KONTAK
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
