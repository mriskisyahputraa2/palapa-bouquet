import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const Location = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/9W44iiJ59q6okDnH6";

  return (
    <section
      id="lokasi"
      className="py-24 md:py-32 bg-[#FAF5F6] font-poppins relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* --- SECTION HEADER (Konsisten dengan Catalog & Gallery) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3 text-palapa-rose">
              <Sparkles size={16} className="animate-pulse" />
              <span className="font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px]">
                Kunjungi Toko Kami
              </span>
            </div>
            <h3 className="font-[900] text-5xl sm:text-7xl md:text-8xl text-palapa-rose leading-[0.8] uppercase tracking-tighter">
              Lokasi <br />
              <span className="text-palapa-rose/20">Toko Kami</span>
            </h3>
          </div>

          <div className="hidden md:block max-w-xs text-right">
            <p className="text-palapa-rose/50 text-[10px] font-bold italic leading-relaxed uppercase tracking-widest">
              "Ambil pesanan Anda langsung di Toko kami untuk memastikan
              kualitas terbaik."
            </p>
          </div>
        </div>

        {/* --- MAP CONTAINER --- */}
        <div className="relative h-[600px] md:h-[750px] w-full overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-[0_30px_80px_rgba(177,122,135,0.15)] border-[8px] md:border-[15px] border-white bg-white">
          {/* 1. GOOGLE MAPS */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355.59630788321607!2d97.1448554109036!3d5.192993360907702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30479cd177b17bc9%3A0xe47d6518b1706520!2sJl.%20Palapa%201%2C%20Hagu%20Teungoh%2C%20Kec.%20Banda%20Sakti%2C%20Kota%20Lhokseumawe%2C%20Aceh!5e1!3m2!1sid!2sid!4v1768750333715!5m2!1sid!2sid"
            className="w-full h-full contrast-[1.1] brightness-[1.02]"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Palapa Bouquet Studio"
          ></iframe>

          {/* 2. FLOATING INFO CARD */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-end md:justify-center md:items-start p-4 md:p-16 lg:p-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pointer-events-auto bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl w-full md:max-w-md border border-white/50 space-y-6 md:space-y-8"
            >
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-palapa-rose">
                  Detail Kontak
                </h4>
                <p className="text-2xl md:text-3xl font-[900] text-palapa-rose uppercase tracking-tighter">
                  Hagu Teungoh
                </p>
              </div>

              <div className="space-y-5 md:space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-palapa-rose/5 flex items-center justify-center shrink-0">
                    <MapPin className="text-palapa-rose" size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[9px] font-black uppercase tracking-widest text-palapa-rose/40 mb-1">
                      Alamat
                    </h4>
                    <p className="text-xs md:text-sm font-bold text-palapa-rose leading-relaxed">
                      Jalan Palapa 1, Hagu Teungoh, <br /> Kec. Banda Sakti,
                      Lhokseumawe
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-palapa-rose/5 flex items-center justify-center shrink-0">
                    <Clock className="text-palapa-rose" size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[9px] font-black uppercase tracking-widest text-palapa-rose/40 mb-1">
                      Jam Buka
                    </h4>
                    <p className="text-xs md:text-sm font-bold text-palapa-rose">
                      09.00 - 18.00 (Tiap Hari)
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-palapa-rose/60 bg-palapa-rose/5 p-2 rounded-lg">
                      <MessageCircle size={12} />
                      <p className="text-[9px] font-bold italic uppercase tracking-tighter">
                        *Konfirmasi 1 jam sebelum tiba
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-palapa-rose text-white py-4 md:py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-lg shadow-palapa-rose/20 hover:bg-palapa-rose/80 transition-all"
              >
                <Navigation size={16} />
                Petunjuk Arah
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
