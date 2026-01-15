import React from "react";
import Button from "../components/Button";
import { MessageCircle, ArrowRight } from "lucide-react";
// IMPORT FOTO HERO ANDA DI SINI
import heroImg from "../assets/hero-bouquet.jpeg";

const Hero = ({ onChatClick }) => {
  return (
    <header className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 space-y-8">
          <div className="inline-block px-4 py-1.5 bg-palapa-pink-soft text-palapa-pink rounded-full text-sm font-bold tracking-wider uppercase">
            Florist Terpercaya & Estetik
          </div>
          <h1 className="font-playfair text-6xl md:text-7xl font-bold text-palapa-black leading-tight">
            Sampaikan Perasaan <br />
            <span className="text-palapa-pink italic">Lewat Bunga</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-md leading-relaxed">
            Menghadirkan rangkaian bunga segar dan papan akrilik eksklusif untuk
            setiap momen berharga dalam hidup Anda.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() =>
                document.getElementById("katalog").scrollIntoView()
              }
            >
              Lihat Katalog <ArrowRight size={18} />
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                onChatClick("Halo Palapa Bouquet, saya ingin bertanya...")
              }
            >
              <MessageCircle size={20} /> Chat Admin
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute -inset-4 bg-palapa-pink-soft rounded-[2rem] -rotate-2 -z-10"></div>
          <img
            src={heroImg}
            alt="Palapa Bouquet Best Seller"
            className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
