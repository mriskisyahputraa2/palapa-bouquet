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

  const ITEMS_PER_PAGE = 6;
  const [lastIndex, setLastIndex] = useState(ITEMS_PER_PAGE);
  const [hasMore, setHasMore] = useState(true);

  // 1. LOGIKA DEBOUNCING
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // 2. AMBIL KATEGORI
  useEffect(() => {
    const categoryQuery = `*[_type == "category"] | order(title asc)`;
    client.fetch(categoryQuery).then((data) => {
      const dynamicCats = data.map((c) => c.title);
      setCategories(["Semua", ...dynamicCats]);
    });
  }, []);

  // 3. FETCH PRODUK (Server-side)
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
    if (selectedProduct) {
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProduct]);

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
    ? [selectedProduct.mainImage, ...(selectedProduct.gallery || [])]
    : [];

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
      {/* DEKORASI TEKS LATAR BELAKANG (Sama dengan Gallery) */}
      <div className="absolute top-24 right-0 w-full pointer-events-none opacity-[0.02] select-none text-right">
        <h2 className="text-[22vw] font-black leading-none text-palapa-rose whitespace-nowrap">
          COLLECTION
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER SECTION - Polished for Premium Feel */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 mb-20 text-center lg:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-palapa-rose">
              <Sparkles size={16} className="animate-pulse" />
              <span className="font-black tracking-[0.3em] lg:tracking-[0.5em] uppercase text-[9px] lg:text-[10px]">
                Signature Collection
              </span>
            </div>
            <h3 className="font-[900] text-5xl sm:text-7xl md:text-9xl lg:text-[120px] text-palapa-rose leading-[0.8] uppercase tracking-tighter">
              Koleksi <br />
              <span className="text-palapa-rose/20 italic font-light lowercase">
                palapa bouquet
              </span>
            </h3>
          </div>

          <div className="flex flex-col items-center lg:items-end space-y-4 lg:space-y-6 w-full lg:w-auto">
            <Quote className="text-palapa-rose/20 w-8 h-8 md:w-12 md:h-12" />
            <p className="max-w-xs text-palapa-rose/60 text-[11px] md:text-sm leading-relaxed italic font-medium px-4 lg:px-0">
              "Keindahan abadi dalam setiap detail. Temukan koleksi buket
              eksklusif, papan akrilik modern, dan hampers kustom yang dirangkai
              khusus untuk menyempurnakan momen berharga Anda."
            </p>
          </div>
        </div>

        {/* SEARCH & FILTER AREA - Search Bar di atas kiri kategori pada Desktop */}
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
                className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-palapa-rose text-white shadow-xl shadow-palapa-rose/20 scale-105"
                    : "bg-white text-palapa-rose hover:bg-palapa-rose/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID PRODUK - Style Kartu Seiras Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          <AnimatePresence mode="popLayout">
            {products.map((product, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={product._id}
                className="group flex flex-col"
              >
                <div
                  className="relative aspect-[4/5] rounded-[3.5rem] lg:rounded-[4.5rem] overflow-hidden bg-white border-[10px] lg:border-[15px] border-white shadow-xl cursor-pointer transform-gpu transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-4 group-hover:rotate-1"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={urlFor(product.mainImage).width(800).url()}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    alt={product.name}
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-sm">
                    <span className="text-[9px] font-black text-palapa-rose uppercase tracking-widest">
                      {product.categoryName}
                    </span>
                  </div>
                </div>

                <div className="mt-10 px-4 text-center space-y-6">
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="cursor-pointer space-y-2"
                  >
                    <h4 className="text-3xl font-[900] text-palapa-rose uppercase tracking-tighter leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-xl font-medium text-palapa-rose/40 italic">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() =>
                        onChatClick(
                          `Halo Palapa Bouquet, saya ingin pesan ${product.name}`,
                        )
                      }
                      className="w-full py-5 bg-palapa-rose text-white rounded-[1.8rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-lg flex items-center justify-center gap-3 transition-all hover:bg-palapa-rose/90 active:scale-95"
                    >
                      <ShoppingBag size={16} /> Pesan Sekarang
                    </button>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-5 border-2 border-palapa-rose/10 text-palapa-rose rounded-[1.8rem] font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white transition-all"
                    >
                      <Eye size={16} /> Lihat Detail
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LOAD MORE */}
        {hasMore && products.length > 0 && (
          <div className="mt-28 text-center">
            <button
              onClick={() => fetchProducts(false)}
              disabled={loadingMore}
              className="px-12 py-6 border-2 border-palapa-rose/20 text-palapa-rose rounded-full font-black text-[10px] uppercase tracking-[0.5em] hover:bg-palapa-rose hover:text-white transition-all disabled:opacity-50 shadow-sm"
            >
              {loadingMore ? "Menelusuri..." : "Lihat Koleksi Lainnya"}
            </button>
          </div>
        )}
      </div>

      {/* --- MODAL DETAIL (Premium & Responsive) --- */}
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
              className="bg-[#FAF5F6] w-full h-[95dvh] md:h-auto md:max-h-[90dvh] max-w-7xl md:rounded-[4.5rem] shadow-2xl relative flex flex-col lg:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-[120] bg-white p-4 rounded-full text-palapa-rose shadow-xl border border-palapa-rose/5"
              >
                <X size={24} />
              </button>

              {/* MEDIA */}
              <div className="w-full lg:w-1/2 bg-white p-6 lg:p-14 overflow-y-auto flex flex-col gap-8">
                <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl bg-[#FAF5F6] aspect-square shrink-0 border-[10px] lg:border-[15px] border-[#FAF5F6]">
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
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(
                            (prev) =>
                              (prev - 1 + allImages.length) % allImages.length,
                          );
                        }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full text-palapa-rose shadow-xl z-10"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(
                            (prev) => (prev + 1) % allImages.length,
                          );
                        }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full text-palapa-rose shadow-xl z-10"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>
                <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide px-1 shrink-0">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 rounded-[2rem] lg:rounded-[3rem] overflow-hidden transition-all ${idx === activeIndex ? "ring-4 ring-palapa-rose scale-110 shadow-lg" : "opacity-40"}`}
                    >
                      <img
                        src={urlFor(img).width(200).url()}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full lg:w-1/2 flex flex-col bg-[#FAF5F6] overflow-hidden">
                <div className="flex-1 p-10 lg:p-20 overflow-y-auto pb-40 lg:pb-12">
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <span className="inline-block px-6 py-2 rounded-full bg-palapa-rose/10 text-[10px] font-black text-palapa-rose uppercase tracking-[0.3em]">
                        {selectedProduct.categoryName}
                      </span>
                      <h2 className="text-5xl lg:text-8xl font-[900] text-palapa-rose leading-[0.8] uppercase tracking-tighter">
                        {selectedProduct.name}
                      </h2>
                    </div>
                    <div className="h-px w-full bg-palapa-rose/10 border-dashed border-t"></div>
                    <p className="text-palapa-rose/70 leading-relaxed text-sm lg:text-lg font-medium italic italic tracking-wide">
                      {selectedProduct.description}
                    </p>
                    <div className="space-y-2">
                      <span className="text-[11px] font-black text-palapa-rose/40 uppercase block tracking-[0.4em]">
                        Investasi Keindahan
                      </span>
                      <p className="text-5xl lg:text-7xl font-[900] text-palapa-rose leading-none">
                        {formatPrice(selectedProduct.price)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto bg-white/40 backdrop-blur-md border-t border-palapa-rose/5 p-8 lg:p-14 flex flex-wrap items-center justify-between gap-6 sticky bottom-0 z-10 lg:static">
                  <button
                    onClick={() =>
                      onChatClick(
                        `Halo Palapa Bouquet, saya ingin pesan ${selectedProduct.name}`,
                      )
                    }
                    className="w-full py-6 bg-palapa-rose text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.5em] shadow-2xl shadow-palapa-rose/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-4"
                  >
                    <ShoppingBag size={20} /> Pesan Sekarang
                  </button>
                </div>
              </div>
            </motion.div>
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
