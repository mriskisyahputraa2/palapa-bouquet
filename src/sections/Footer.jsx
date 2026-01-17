import React from "react";
import { Instagram, Mail, MapPin, Clock, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-palapa-rose text-white pt-20 pb-10 font-poppins overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Kolom 1: Tentang & Branding */}
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
              Mewujudkan perasaan melalui keindahan bunga. Kami adalah florist
              artisan yang berdedikasi untuk memberikan rangkaian terbaik di
              setiap momen spesial Anda.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-palapa-rose transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-palapa-rose transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-[0.3em]">
              Navigasi
            </h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
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
                  Koleksi Bunga
                </a>
              </li>
              <li>
                <a
                  href="#custom"
                  className="hover:text-white transition-colors"
                >
                  Pesanan Khusus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Jam Operasional */}
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-[0.3em]">
              Jam Operasional
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-white/60 shrink-0" />
                <div className="text-white/80">
                  <p className="font-bold">Senin - Sabtu</p>
                  <p className="text-xs">08:00 - 20:00 WIB</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-white/60 shrink-0" />
                <div className="text-white/80">
                  <p className="font-bold">Minggu</p>
                  <p className="text-xs">10:00 - 17:00 WIB</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak & Lokasi */}
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-[0.3em]">
              Hubungi Kami
            </h4>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-3 text-white">
                <MapPin size={24} className="text-white shrink-0" />
                <div className="space-y-2">
                  <p className="font-bold">Lokasi Studio (Ambil di Tempat):</p>
                  <p className="text-white/80 leading-relaxed">
                    Jl. Melati No. 123, Kota Anda, Indonesia <br />
                    <span className="text-[10px] bg-white/20 px-2 py-1 rounded mt-2 inline-block">
                      Lihat di Google Maps
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Baris Bawah: Copyright */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
          <p>© {currentYear} Palapa Bouquet. Hak Cipta Dilindungi.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
