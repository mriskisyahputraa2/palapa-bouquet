import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { client, urlFor } from "../sanity";

const Catalog = ({ onChatClick }) => {
  // --- STATES ---
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(["Semua"]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  // --- FETCH DATA ---
  useEffect(() => {
    const productQuery = `*[_type == "product"]{
      ...,
      "categoryName": category->title 
    } | order(_createdAt desc)`;

    const categoryQuery = `*[_type == "category"] | order(title asc)`;

    const fetchData = async () => {
      try {
        const [prodData, catData] = await Promise.all([
          client.fetch(productQuery),
          client.fetch(categoryQuery),
        ]);

        setProducts(prodData);
        setFilteredProducts(prodData);
        const dynamicCats = catData.map((c) => c.title);
        setCategories(["Semua", ...dynamicCats]);
        setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- SEARCH & FILTER LOGIC ---
  useEffect(() => {
    let result = products;

    if (activeCategory !== "Semua") {
      result = result.filter((p) => p.categoryName === activeCategory);
    }

    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryName?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredProducts(result);
    setVisibleCount(6); // Reset pagination saat mencari/filter
  }, [activeCategory, searchQuery, products]);

  // Lock Scroll saat modal aktif
  useEffect(() => {
    if (selectedProduct) {
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProduct]);

  // --- HELPERS ---
  const formatPrice = (price) => {
    if (!price) return "Hubungi Admin";
    let clean = price.toString().replace(/Rp/gi, "").replace(/\./g, "").trim();
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(clean);
  };

  const allImages = selectedProduct
    ? [selectedProduct.mainImage, ...(selectedProduct.gallery || [])]
    : [];

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  if (loading)
    return (
      <div className="py-40 text-center font-black text-palapa-rose animate-pulse tracking-widest uppercase">
        Merangkai Katalog...
      </div>
    );

  return (
    <section
      id="katalog"
      className="py-20 md:py-32 bg-white font-poppins overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="mb-12 space-y-4 text-center md:text-left">
          <span className="text-palapa-rose/40 font-black tracking-[0.4em] uppercase text-[10px] block">
            Koleksi Palapa Bouquet
          </span>
          <h3 className="font-[900] text-5xl sm:text-6xl md:text-8xl text-palapa-rose uppercase tracking-tighter leading-[0.85]">
            Rangkaian <br />{" "}
            <span className="text-palapa-rose/20">Abadi Anda</span>
          </h3>
        </div>

        {/* SEARCH & FILTER AREA (Handel 20-50 Kategori) */}
        <div className="mb-16 space-y-6">
          <div className="relative max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-palapa-rose/30"
              size={18}
            />
            <input
              type="text"
              placeholder="Cari nama produk atau kategori..."
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-palapa-cream/40 border border-palapa-rose/10 focus:outline-none focus:ring-2 focus:ring-palapa-rose/20 text-sm font-medium transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="relative group">
            {/* Gradient Fade untuk scroll indikator */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden" />
            <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap shadow-sm ${
                    activeCategory === cat
                      ? "bg-palapa-rose text-white shadow-xl scale-105"
                      : "bg-white border border-palapa-cream text-palapa-rose hover:bg-palapa-cream"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={product._id}
                className="group flex flex-col"
              >
                <div
                  className="relative aspect-[4/5] rounded-[3rem] md:rounded-[4.5rem] overflow-hidden bg-palapa-cream border-[10px] md:border-[15px] border-white shadow-2xl cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={urlFor(product.mainImage).width(800).url()}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                    <span className="text-[8px] font-black text-palapa-rose uppercase tracking-widest">
                      {product.categoryName}
                    </span>
                  </div>
                </div>
                <div className="mt-8 px-2 text-center space-y-4">
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="cursor-pointer space-y-1"
                  >
                    <h4 className="text-2xl font-[900] text-palapa-rose uppercase tracking-tighter leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-lg font-medium text-palapa-rose/60">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      onChatClick(
                        `Halo Palapa Bouquet, saya ingin pesan ${product.name}`,
                      )
                    }
                    className="w-full py-4 bg-palapa-rose text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95"
                  >
                    <ShoppingBag size={14} /> Pesan Sekarang
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <p className="text-palapa-rose/40 font-black uppercase tracking-widest italic">
              Produk tidak ditemukan...
            </p>
            <button
              onClick={() => {
                setActiveCategory("Semua");
                setSearchQuery("");
              }}
              className="text-palapa-rose font-bold underline text-sm"
            >
              Lihat Semua Produk
            </button>
          </div>
        )}

        {/* LOAD MORE */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-24 text-center">
            <button
              onClick={() => setVisibleCount((v) => v + 6)}
              className="px-10 py-5 border-2 border-palapa-rose/20 text-palapa-rose rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-palapa-rose hover:text-white transition-all"
            >
              Lihat Lebih Banyak
            </button>
          </div>
        )}
      </div>

      {/* --- MODAL DETAIL (FINAL UX FIX) --- */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-6 lg:p-12 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="bg-white w-full h-[95dvh] md:h-auto md:max-h-[90dvh] max-w-7xl md:rounded-[4rem] shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-[120] bg-white p-3 rounded-full text-palapa-rose shadow-xl border md:top-8 md:right-8"
              >
                <X size={24} />
              </button>

              {/* SISI MEDIA */}
              <div className="w-full md:w-1/2 bg-palapa-cream p-6 lg:p-12 overflow-y-auto flex flex-col gap-8">
                <div className="relative rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl bg-white aspect-square shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndex}
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 1 }}
                      src={urlFor(allImages[activeIndex]).width(1200).url()}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full text-palapa-rose shadow-lg z-10"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full text-palapa-rose shadow-lg z-10"
                      >
                        <ChevronRight size={24} />
                      </button>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] text-white font-black tracking-widest uppercase">
                        {activeIndex + 1} / {allImages.length}
                      </div>
                    </>
                  )}
                </div>
                <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide px-1 shrink-0">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative w-20 h-20 lg:w-28 lg:h-28 flex-shrink-0 rounded-[1.8rem] lg:rounded-[2.5rem] overflow-hidden transition-all shadow-md ${idx === activeIndex ? "ring-4 ring-palapa-rose scale-110" : "opacity-60"}`}
                    >
                      <img
                        src={urlFor(img).width(200).url()}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* SISI KONTEN */}
              <div className="w-full md:w-1/2 flex flex-col bg-white overflow-hidden relative">
                <div className="flex-1 p-8 lg:p-16 overflow-y-auto pb-40 md:pb-12">
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-palapa-rose/10 text-[10px] font-black text-palapa-rose uppercase tracking-widest">
                        {selectedProduct.categoryName}
                      </span>
                      <h2 className="text-4xl lg:text-7xl font-[900] text-palapa-rose leading-[0.85] uppercase tracking-tighter">
                        {selectedProduct.name}
                      </h2>
                    </div>
                    <div className="h-px w-full bg-palapa-rose/10 border-dashed border-t"></div>
                    <p className="text-palapa-rose/70 leading-relaxed text-sm lg:text-lg font-medium italic">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-palapa-cream p-6 lg:p-12 flex items-center justify-between gap-6 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] md:relative">
                  <div>
                    <span className="text-[10px] font-black text-palapa-rose/40 uppercase tracking-widest block mb-1">
                      Harga
                    </span>
                    <p className="text-3xl lg:text-5xl font-[900] text-palapa-rose leading-none">
                      {formatPrice(selectedProduct.price)}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      onChatClick(
                        `Halo Palapa Bouquet, saya ingin pesan ${selectedProduct.name}`,
                      )
                    }
                    className="flex-1 md:flex-none px-10 py-5 bg-palapa-rose text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                  >
                    <ShoppingBag size={18} /> Pesan Sekarang
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Catalog;
