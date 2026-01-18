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
  const googleMapsUrl =
    "https://www.google.com/maps?q=Jalan+Palapa+1+Hagu+Teungoh+Lhokseumawe";

  return (
    <section id="lokasi" className="py-20 bg-[#FAF5F6] font-poppins relative">
      <div className="max-w-[1440px] mx-auto md:px-6">
        <div className="relative h-[700px] w-full overflow-hidden md:rounded-[4rem] shadow-[0_40px_100px_rgba(177,122,135,0.15)] border-[10px] border-white">
          {/* 1. GOOGLE MAPS (FULL BACKGROUND) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.535!2d97.145!3d5.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTAnNDguMCJOIDk3wrAwOCc0Mi4wIkU!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            className="w-full h-full grayscale-[0.2] contrast-[1.1]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Palapa Bouquet"
          ></iframe>

          {/* 2. FLOATING INFO CARD (EDITORIAL STYLE) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-start p-6 md:p-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pointer-events-auto bg-white/90 backdrop-blur-xl p-10 md:p-14 rounded-[3.5rem] shadow-2xl max-w-md border border-white/50 space-y-8"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-palapa-rose">
                  <Sparkles size={14} />
                  <span className="font-black tracking-[0.4em] uppercase text-[9px]">
                    Studio Visit
                  </span>
                </div>
                <h3 className="text-4xl font-[900] text-palapa-rose uppercase tracking-tighter leading-none">
                  Temukan <br />{" "}
                  <span className="text-palapa-rose/30 italic font-light lowercase">
                    Kami
                  </span>
                </h3>
              </div>

              <div className="space-y-6">
                {/* Alamat */}
                <div className="flex gap-4">
                  <MapPin className="text-palapa-rose shrink-0" size={20} />
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-palapa-rose/40 mb-1">
                      Alamat
                    </h4>
                    <p className="text-sm font-bold text-palapa-rose">
                      Jalan Palapa 1, Hagu Teungoh, Lhokseumawe
                    </p>
                  </div>
                </div>

                {/* Jam Buka */}
                <div className="flex gap-4">
                  <Clock className="text-palapa-rose shrink-0" size={20} />
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-palapa-rose/40 mb-1">
                      Jam Operasional
                    </h4>
                    <p className="text-sm font-bold text-palapa-rose">
                      Buka Tiap Hari (09.00 - 18.00)
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-palapa-rose/60">
                      <MessageCircle size={12} />
                      <p className="text-[10px] font-medium italic">
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
                className="flex items-center justify-center gap-3 w-full bg-palapa-rose text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-palapa-rose/20 hover:scale-[1.03] transition-all"
              >
                <Navigation size={16} />
                Buka di Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
