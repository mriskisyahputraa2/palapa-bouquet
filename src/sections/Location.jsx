import React from "react";
import { MapPin, Navigation, Clock } from "lucide-react";

const Location = () => {
  return (
    <section
      id="lokasi"
      className="py-24 bg-white font-poppins relative overflow-hidden"
    >
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-palapa-rose/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sisi Kiri: Informasi Detail */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-palapa-rose/40 font-black tracking-[0.5em] uppercase text-[10px]">
                Kunjungi Studio Kami
              </h2>
              <h3 className="font-[900] text-5xl md:text-6xl text-palapa-rose leading-tight uppercase">
                Lokasi <br />
                <span className="text-palapa-rose/30 italic font-normal normal-case">
                  Pengambilan
                </span>
              </h3>
            </div>

            <div className="space-y-8">
              {/* Detail Alamat */}
              <div className="flex gap-6 p-8 bg-palapa-cream/30 rounded-[2.5rem] border border-palapa-rose/5 transition-all hover:bg-white hover:shadow-xl hover:shadow-palapa-rose/5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-palapa-rose shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-black text-palapa-rose uppercase text-xs tracking-widest">
                    Alamat Studio
                  </h4>
                  <p className="text-palapa-rose/70 font-medium leading-relaxed">
                    Jl. Melati No. 123, Kota Anda <br />
                    Provinsi, Indonesia 12345
                  </p>
                </div>
              </div>

              {/* Info Pengambilan */}
              <div className="flex gap-6 p-8 bg-palapa-cream/30 rounded-[2.5rem] border border-palapa-rose/5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-palapa-rose shadow-sm shrink-0">
                  <Clock size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-black text-palapa-rose uppercase text-xs tracking-widest">
                    Waktu Pengambilan
                  </h4>
                  <p className="text-palapa-rose/70 font-medium text-sm leading-relaxed">
                    Senin - Sabtu: 09:00 - 18:00 WIB <br />
                    <span className="text-[10px] font-bold text-palapa-rose/40 italic">
                      *Mohon konfirmasi 1 jam sebelum kedatangan
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://maps.google.com" // Ganti dengan link Google Maps asli Anda
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-palapa-rose text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-palapa-rose/20 hover:scale-105 transition-all"
              >
                <Navigation size={18} />
                Petunjuk Arah
              </a>
            </div>
          </div>

          {/* Sisi Kanan: Peta Interaktif */}
          <div className="relative h-[500px] w-full group">
            {/* Frame Peta dengan Sudut Membulat Mewah */}
            <div className="absolute inset-0 bg-palapa-rose/10 rounded-[3rem_3rem_10rem_3rem] -rotate-3 translate-x-4 translate-y-4 -z-10 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="w-full h-full rounded-[3rem_3rem_3rem_10rem] overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.5731164!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a5200388a6d4!2sBandung%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Palapa Bouquet"
                className="grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
