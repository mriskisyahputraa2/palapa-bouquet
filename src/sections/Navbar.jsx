import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk scroll halus ke section tertentu
  const scrollToSection = (id) => {
    // JIKA YANG DIKLIK ADALAH BERANDA (HOME)
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsOpen(false);
      return;
    }

    // UNTUK SECTION LAINNYA
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    {
      name: "BERANDA",
      id: "home",
      bg: "lg:bg-transparent",
      text: "text-palapa-rose",
    },
    {
      name: "PRODUK",
      id: "katalog",
      bg: "lg:bg-palapa-rose/10",
      text: "text-palapa-rose",
    },
    {
      name: "GALLERY",
      id: "galeri",
      bg: "lg:bg-palapa-rose/30",
      text: "text-white",
    },
    {
      name: "PESANAN KHUSUS",
      id: "custom",
      bg: "lg:bg-palapa-rose/20",
      text: "text-palapa-rose",
    },

    {
      name: "KONTAK",
      id: "lokasi",
      bg: "lg:bg-palapa-rose/50",
      text: "text-white",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 font-poppins ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-palapa-rose/5 h-20 md:h-24 shadow-sm"
            : "bg-transparent h-24 md:h-28"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-stretch">
          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="flex flex-col items-start leading-none">
              <span
                className={`font-[900] text-2xl md:text-3xl tracking-tighter italic uppercase transition-colors duration-500 ${
                  scrolled ? "text-palapa-rose" : "text-white drop-shadow-md"
                }`}
              >
                Palapa
              </span>
              <span
                className={`text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] mt-1 transition-colors duration-500 ${
                  scrolled ? "text-palapa-rose/60" : "text-white/80"
                }`}
              >
                Bouquet
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-stretch">
            <ul className="flex items-stretch">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center px-6 xl:px-10 font-black text-[10px] xl:text-xs tracking-widest transition-all duration-300 cursor-pointer ${
                    scrolled
                      ? `${link.bg} ${link.text} hover:bg-palapa-rose hover:text-white`
                      : "text-white hover:text-palapa-rose hover:bg-white"
                  } ${index === navLinks.length - 1 && scrolled ? "rounded-br-3xl" : ""}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className={`p-2 rounded-2xl transition-all ${
                scrolled
                  ? "text-palapa-rose bg-palapa-rose/5"
                  : "text-white bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col font-poppins"
          >
            <div className="flex justify-between items-center px-6 h-20 border-b border-palapa-rose/5">
              <div className="flex flex-col leading-none">
                <span className="font-[900] text-2xl text-palapa-rose italic uppercase tracking-tighter">
                  Palapa
                </span>
                <span className="text-[8px] font-bold text-palapa-rose/40 uppercase tracking-[0.4em]">
                  Bouquet Studio
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-palapa-rose"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col flex-grow">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="flex-grow flex items-center px-10 border-b border-palapa-rose/5 text-palapa-rose hover:bg-[#FAF5F6] transition-all cursor-pointer"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-palapa-rose/30 tracking-[0.3em] mb-1">
                      0{index + 1}
                    </span>
                    <span className="text-3xl font-[900] tracking-tighter uppercase">
                      {link.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
