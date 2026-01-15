import React from "react";
import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white border-t border-gray-100 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        <div className="space-y-6">
          <h5 className="font-playfair font-bold text-3xl text-palapa-black">
            Palapa Bouquet
          </h5>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Mewujudkan momen indah Anda melalui bunga sejak 2024. Melayani
            dengan hati dan kreativitas.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-palapa-gray rounded-full flex items-center justify-center hover:bg-palapa-pink hover:text-white transition-all"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h6 className="font-bold text-xs uppercase tracking-widest text-palapa-black">
            Kontak & Lokasi
          </h6>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-palapa-pink shrink-0" />
              <span>Jl. Bunga Melati No. 123, Kota Anda, Indonesia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-palapa-pink shrink-0" />
              <span>+62 812-3456-7890</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h6 className="font-bold text-xs uppercase tracking-widest text-palapa-black">
            Jam Layanan
          </h6>
          <p className="text-sm text-gray-500 italic">
            "Kami menerima pesanan 24 jam melalui WhatsApp, pengiriman dilakukan
            pada jam operasional."
          </p>
          <p className="text-sm font-medium text-palapa-black">
            Senin - Minggu: 08:00 - 20:00 WIB
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 border-t border-gray-50 pt-10">
        &copy; 2026 Palapa Bouquet. Designed for Beauty.
      </div>
    </footer>
  );
};

export default Footer;
