import React from "react";
// Tambahkan Facebook ke dalam list import
import { Instagram, Facebook, MapPin, Clock, Phone, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-palapa-rose text-white pt-20 pb-10 font-poppins overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Kolom 1: Branding & Sosial Media */}
          <div className="space-y-6">
            <div className="flex flex-col leading-none">
              <span className="font-[900] text-3xl tracking-tighter italic uppercase">
                Palapa
              </span>
              <span className="text-[10px] font-bold opacity-60 uppercase tracking-[0.4em] mt-1">
                Bouquet
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Palapa Bouquet di Lhokseumawe. Spesialis buket bunga abadi, papan
              akrilik, dan kado personal untuk momen tak terlupakan Anda.
            </p>

            {/* AREA SOSIAL MEDIA */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/palapabouquet024/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-palapa-rose transition-all group"
                aria-label="Instagram Palapa Bouquet"
              >
                <Instagram size={18} />
              </a>

              {/* Facebook - BARU */}
              <a
                href="https://facebook.com/palapabouquet024"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-palapa-rose transition-all group"
                aria-label="Facebook Palapa Bouquet"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-[0.3em]">
              Navigasi
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#katalog"
                  className="hover:text-white transition-colors"
                >
                  Koleksi
                </a>
              </li>
              <li>
                <a
                  href="#galeri"
                  className="hover:text-white transition-colors"
                >
                  Galeri
                </a>
              </li>
              <li>
                <a
                  href="#lokasi"
                  className="hover:text-white transition-colors"
                >
                  Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Jam Operasional */}
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-[0.3em]">
              Studio Visit
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-white/60 shrink-0" />
                <div className="text-white/80">
                  <p className="font-bold">Setiap Hari</p>
                  <p className="text-xs">09:00 - 18:00 WIB</p>
                  <p className="text-[10px] italic mt-1 opacity-60">
                    *Mohon konfirmasi 1 jam sebelum tiba
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Alamat */}
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-[0.3em]">
              Hubungi Kami
            </h4>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-3 text-white">
                <MapPin size={24} className="text-white shrink-0" />
                <div className="space-y-1">
                  <p className="font-bold">Alamat Studio:</p>
                  <p className="text-white/80 text-xs leading-relaxed">
                    Jalan Palapa 1, Hagu Teungoh <br />
                    Lhokseumawe, Aceh
                  </p>
                  <a
                    href="#lokasi"
                    className="text-[10px] bg-white/10 hover:bg-white/20 px-3 py-1 rounded inline-block transition-all mt-2 uppercase tracking-tighter"
                  >
                    Lihat Peta
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Baris Bawah */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
          <p>© {currentYear} Palapa Bouquet Lhokseumawe.</p>
          <p className="flex items-center gap-2 italic">
            Handcrafted with <span className="text-white/60">❤</span> in Aceh,
            Lhokseumawe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
