import React from "react";
import customImg from "../assets/top-view-beautiful-roses-bouquet-with-pink-ribbon.jpg"; // Gunakan foto florist yang sedang merangkai bunga

const CustomOrder = ({ onChatClick }) => {
  return (
    <section
      id="custom"
      className="relative py-24 overflow-hidden bg-palapa-cream/50 font-poppins"
    >
      {/* Dekorasi Gelombang Organik (Background) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[70%] bg-palapa-rose/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[5%] -right-[5%] w-[30%] h-[50%] bg-palapa-petal/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Sisi Kiri: Foto dengan Frame Organik */}
          <div className="relative group order-2 md:order-1">
            <div className="relative z-10 rounded-[3rem_10rem_3rem_10rem] overflow-hidden border-[15px] border-white shadow-2xl">
              <img
                src={customImg}
                alt="Custom Arrangement"
                className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            {/* Aksen Hiasan di Belakang Foto */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-palapa-rose/10 rounded-[3rem_10rem_3rem_10rem] -z-10 translate-x-4 translate-y-4"></div>
          </div>

          {/* Sisi Kanan: Teks Konten */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="text-palapa-rose/50 font-black tracking-[0.5em] uppercase text-[10px]">
                Layanan Personalisasi
              </h2>
              <h3 className="font-[900] text-5xl md:text-6xl text-palapa-rose leading-tight uppercase">
                Wujudkan <br />
                <span className="text-palapa-rose/30 italic font-normal normal-case">
                  Buket Impian
                </span>{" "}
                <br />
                Anda
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-palapa-rose/80 font-medium text-lg leading-relaxed">
                Punya ide spesifik atau ingin menyesuaikan buket dengan budget
                tertentu? Kami siap membantu merangkai bunga yang sesuai dengan
                imajinasi dan kebutuhan Anda.
              </p>

              <ul className="space-y-4">
                {[
                  "Sesuaikan warna dan jenis bunga favorit",
                  "Pemesanan berdasarkan budget (Mulai Rp 150rb)",
                  "Custom kartu ucapan & dekorasi tambahan",
                  "Konsultasi gratis dengan Florist kami",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-palapa-rose/70 font-semibold text-sm"
                  >
                    <span className="w-2 h-2 bg-palapa-rose rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() =>
                  onChatClick(
                    "Halo Palapa Bouquet, saya ingin konsultasi pesanan khusus sesuai budget..."
                  )
                }
                className="bg-palapa-rose text-white px-12 py-5 rounded-2xl font-[900] text-xs uppercase tracking-[0.2em] shadow-xl shadow-palapa-rose/20 hover:bg-white hover:text-palapa-rose border-2 border-transparent hover:border-palapa-rose transition-all duration-500 transform hover:-translate-y-2"
              >
                Konsultasi Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
