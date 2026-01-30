import React, { useState, useEffect, useCallback } from "react";
import {
  ShoppingBag,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Eye,
  Sparkles,
  Quote,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { client, urlFor } from "../sanity";

const Catalog = ({ onChatClick }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["Semua"]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // State untuk Fitur Zoom (Lightbox)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const ITEMS_PER_PAGE = 6;
  const [lastIndex, setLastIndex] = useState(ITEMS_PER_PAGE);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    const categoryQuery = `*[_type == "category"] | order(title asc)`;
    client.fetch(categoryQuery).then((data) => {
      const dynamicCats = data.map((c) => c.title);
      setCategories(["Semua", ...dynamicCats]);
    });
  }, []);

  const fetchProducts = useCallback(
    async (isNewFilter = false) => {
      if (isNewFilter) setLoading(true);
      else setLoadingMore(true);

      const start = isNewFilter ? 0 : lastIndex;
      const end = start + ITEMS_PER_PAGE;

      let filter = `_type == "product"`;
      if (activeCategory !== "Semua")
        filter += ` && category->title == "${activeCategory}"`;
      if (debouncedSearch)
        filter += ` && (name match "*${debouncedSearch}*" || description match "*${debouncedSearch}*")`;

      const query = `*[${filter}] | order(_createdAt desc) [${start}...${end}]{
        ...,
        "categoryName": category->title
      }`;

      try {
        const newData = await client.fetch(query);
        if (isNewFilter) {
          setProducts(newData);
          setLastIndex(ITEMS_PER_PAGE);
          setHasMore(newData.length === ITEMS_PER_PAGE);
        } else {
          setProducts((prev) => [...prev, ...newData]);
          setLastIndex(end);
          setHasMore(newData.length === ITEMS_PER_PAGE);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [activeCategory, debouncedSearch, lastIndex],
  );

  useEffect(() => {
    fetchProducts(true);
  }, [activeCategory, debouncedSearch]);

  useEffect(() => {
    if (selectedProduct || isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProduct, isLightboxOpen]);

  const formatPrice = (price) => {
    if (!price) return "";
    let clean = price.toString().replace(/Rp/gi, "").replace(/\./g, "").trim();
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(clean);
  };

  const allImages = selectedProduct
    ? [selectedProduct.mainImage, ...(selectedProduct.gallery || [])].filter(
        Boolean,
      )
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
        MERANGKAI KATALOG...
      </div>
    );

  return (
    <section
      id="katalog"
      className="py-24 md:py-32 bg-[#FAF5F6] font-poppins overflow-hidden relative"
    >
      <div className="absolute top-24 right-0 w-full pointer-events-none opacity-[0.02] select-none text-right">
        <h2 className="text-[22vw] font-black leading-none text-palapa-rose whitespace-nowrap">
          COLLECTION
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 mb-20 text-center lg:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-palapa-rose">
              <Sparkles size={16} className="animate-pulse" />
              <span className="font-black tracking-[0.3em] lg:tracking-[0.5em] uppercase text-[9px] lg:text-[10px]">
                Signature Collection
              </span>
            </div>
            <h3 className="font-[900] text-5xl sm:text-7xl md:text-9xl lg:text-[120px] text-palapa-rose leading-[0.8] uppercase tracking-tighter">
              Produk <br />
              <span className="text-palapa-rose/20 italic font-light lowercase">
                palapa bouquet
              </span>
            </h3>
          </div>
          <div className="flex flex-col items-center lg:items-end space-y-4 lg:space-y-6 w-full lg:w-auto">
            <Quote className="text-palapa-rose/20 w-8 h-8 md:w-12 md:h-12" />
            <p className="max-w-xs text-palapa-rose/60 text-[11px] md:text-sm leading-relaxed italic font-medium px-4 lg:px-0">
              "Keindahan abadi dalam setiap detail. Temukan koleksi buket
              eksklusif, papan akrilik modern, dan hampers kustom."
            </p>
          </div>
        </div>

        {/* SEARCH & FILTER AREA */}
        <div className="flex flex-col gap-8 mb-16">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:w-96 group">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-palapa-rose/30 group-focus-within:text-palapa-rose transition-colors"
                size={20}
              />
              <input
                type="text"
                placeholder="Cari buket idaman..."
                className="w-full pl-14 pr-6 py-5 rounded-3xl bg-white border-none focus:outline-none focus:ring-2 focus:ring-palapa-rose/20 text-sm font-medium shadow-xl shadow-palapa-rose/5 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === cat ? "bg-palapa-rose text-white shadow-xl shadow-palapa-rose/20 scale-105" : "bg-white text-palapa-rose hover:bg-palapa-rose/5"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID PRODUK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          <AnimatePresence mode="popLayout">
            {products.length > 0 ? (
              products.map((product, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={product._id}
                  className="group flex flex-col h-full"
                >
                  <div
                    className="relative aspect-[4/5] rounded-[3rem] lg:rounded-[4.5rem] overflow-hidden bg-white border-[10px] lg:border-[15px] border-white shadow-xl cursor-pointer transform-gpu transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-4 group-hover:rotate-1"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={
                        product.mainImage
                          ? urlFor(product.mainImage).width(800).url()
                          : ""
                      }
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                      alt={product.name}
                    />
                  </div>
                  <div className="mt-10 px-4 flex flex-col flex-1 text-center">
                    <div
                      onClick={() => setSelectedProduct(product)}
                      className="cursor-pointer space-y-2 flex-1 flex flex-col justify-center mb-6"
                    >
                      <h4 className="text-3xl font-[900] text-palapa-rose uppercase tracking-tighter leading-tight min-h-[4rem] flex items-center justify-center">
                        {product.name}
                      </h4>
                      <p className="text-xl font-medium text-palapa-rose/40 italic">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <div className="mt-auto space-y-3">
                      <button
                        onClick={() =>
                          onChatClick(
                            `Halo Palapa Bouquet, saya ingin pesan ${product.name}`,
                          )
                        }
                        className="w-full py-4 bg-palapa-rose text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-lg flex items-center justify-center gap-3 hover:bg-palapa-rose/90 transition-all"
                      >
                        <ShoppingBag size={14} /> Pesan Sekarang
                      </button>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full py-4 border-2 border-palapa-rose/10 text-palapa-rose rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white transition-all"
                      >
                        <Eye size={14} /> Lihat Detail
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center font-black text-palapa-rose/20 uppercase tracking-widest">
                {activeCategory === "Semua"
                  ? "Produk belum tersedia"
                  : "Kategori ini belum ada produk"}
              </div>
            )}
          </AnimatePresence>
        </div>

        {hasMore && products.length > 0 && (
          <div className="mt-28 text-center">
            <button
              onClick={() => fetchProducts(false)}
              disabled={loadingMore}
              className="px-12 py-6 border-2 border-palapa-rose/20 text-palapa-rose rounded-full font-black text-[10px] uppercase tracking-[0.5em] hover:bg-palapa-rose hover:text-white transition-all disabled:opacity-50"
            >
              Lihat Lainnya
            </button>
          </div>
        )}
      </div>

      {/* --- MODAL DETAIL --- */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="bg-[#FAF5F6] w-full h-[95dvh] md:h-auto md:max-h-[90dvh] max-w-7xl md:rounded-[4.5rem] shadow-2xl relative flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-[120] bg-white p-4 rounded-full text-palapa-rose shadow-xl hover:scale-110 transition-transform"
              >
                <X size={24} />
              </button>

              <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
                {/* MEDIA SECTION */}
                <div className="w-full lg:w-1/2 bg-white p-4 md:p-14 flex flex-col gap-8 shrink-0 lg:h-full lg:justify-center">
                  <div
                    className="relative rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl bg-[#FAF5F6] aspect-square border-[10px] lg:border-[15px] border-[#FAF5F6] cursor-zoom-in group"
                    onClick={() => setIsLightboxOpen(true)}
                  >
                    {/* PETUNJUK "LIHAT GAMBAR LEBIH JELAS" - SELALU MUNCUL */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="bg-white/80 backdrop-blur-md px-5 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2"
                      >
                        <Maximize2 size={12} className="text-palapa-rose" />
                        <span className="text-[9px] md:text-[10px] font-black text-palapa-rose uppercase tracking-widest whitespace-nowrap">
                          Lihat gambar lebih jelas
                        </span>
                      </motion.div>
                    </div>

                    <AnimatePresence mode="wait">
                      {allImages.length > 0 && (
                        <motion.img
                          key={activeIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          src={urlFor(allImages[activeIndex]).width(1200).url()}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </AnimatePresence>

                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full text-palapa-rose shadow-xl z-10"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full text-palapa-rose shadow-xl z-10"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>

                  {allImages.length > 1 && (
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-1 shrink-0">
                      {allImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIndex(idx)}
                          className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all ${idx === activeIndex ? "ring-4 ring-palapa-rose scale-105" : "opacity-40"}`}
                        >
                          <img
                            src={urlFor(img).width(200).url()}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* CONTENT SECTION */}
                <div className="w-full lg:w-1/2 flex flex-col bg-[#FAF5F6] lg:overflow-y-auto">
                  <div className="p-8 lg:p-20 pb-12">
                    <div className="flex flex-col gap-8">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <div className="space-y-2">
                            <span className="inline-block px-4 py-1 rounded-full bg-palapa-rose/10 text-[9px] font-black text-palapa-rose uppercase tracking-[0.2em]">
                              {selectedProduct.categoryName}
                            </span>
                            <h2 className="text-3xl lg:text-7xl xl:text-8xl font-[900] text-palapa-rose leading-[0.9] uppercase tracking-tighter">
                              {selectedProduct.name}
                            </h2>
                          </div>
                          <div className="text-right lg:hidden">
                            <span className="text-[10px] font-black text-palapa-rose/40 uppercase block tracking-widest">
                              Harga
                            </span>
                            <p className="text-2xl font-[900] text-palapa-rose whitespace-nowrap">
                              {formatPrice(selectedProduct.price)}
                            </p>
                          </div>
                        </div>
                        <div className="hidden lg:block space-y-2 pt-6">
                          <span className="text-[11px] font-black text-palapa-rose/40 uppercase block tracking-[0.4em]">
                            Investasi Keindahan
                          </span>
                          <p className="text-5xl lg:text-7xl font-[900] text-palapa-rose">
                            {formatPrice(selectedProduct.price)}
                          </p>
                        </div>
                      </div>
                      <div className="h-px w-full bg-palapa-rose/10 border-dashed border-t"></div>
                      <div className="space-y-4">
                        <span className="text-[10px] font-black text-palapa-rose/40 uppercase block tracking-widest">
                          Tentang Produk
                        </span>
                        <p className="text-palapa-rose/70 leading-relaxed text-sm lg:text-lg font-medium italic tracking-wide whitespace-pre-line">
                          {selectedProduct.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/40 backdrop-blur-md border-t border-palapa-rose/5 p-6 lg:p-14 shrink-0 z-[130]">
                <button
                  onClick={() =>
                    onChatClick(
                      `Halo Palapa Bouquet, saya ingin pesan ${selectedProduct.name}`,
                    )
                  }
                  className="w-full py-5 bg-palapa-rose text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.5em] shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-4"
                >
                  <ShoppingBag size={20} /> Pesan Sekarang
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- LIGHTBOX ZOOM DENGAN NAVIGASI --- */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[10002]"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[10002]"
            >
              <ChevronRight size={48} />
            </button>
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[10002]">
              <X size={40} />
            </button>

            <motion.img
              key={activeIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={urlFor(allImages[activeIndex]).width(1600).url()}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-none"
            />

            <p className="absolute bottom-8 text-white/40 font-black text-[10px] uppercase tracking-[0.6em]">
              {activeIndex + 1} / {allImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Catalog;
