import React, { useState, useEffect, useCallback } from "react";
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
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["Semua"]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  // STATE BARU: Untuk mendebounce pencarian agar tidak "lag"
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const ITEMS_PER_PAGE = 6;
  const [lastIndex, setLastIndex] = useState(ITEMS_PER_PAGE);
  const [hasMore, setHasMore] = useState(true);

  // 1. LOGIKA DEBOUNCING: Menunggu user berhenti mengetik (500ms)
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

  // 3. FUNGSI FETCH PRODUK
  const fetchProducts = useCallback(
    async (isNewFilter = false) => {
      if (isNewFilter) setLoading(true);
      else setLoadingMore(true);

      const start = isNewFilter ? 0 : lastIndex;
      const end = start + ITEMS_PER_PAGE;

      // Filter Logic: Dikerjakan di Server Sanity
      let filter = `_type == "product"`;
      if (activeCategory !== "Semua") {
        filter += ` && category->title == "${activeCategory}"`;
      }

      // Gunakan debouncedSearch di sini
      if (debouncedSearch) {
        filter += ` && (name match "*${debouncedSearch}*" || description match "*${debouncedSearch}*")`;
      }

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
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [activeCategory, debouncedSearch, lastIndex],
  );

  // Trigger fetch saat kategori atau HASIL DEBOUNCE pencarian berubah
  useEffect(() => {
    fetchProducts(true);
  }, [activeCategory, debouncedSearch]);

  // Scroll Lock & Price Formatter (Tetap sama)
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
        Mencari Buket...
      </div>
    );

  return (
    <section
      id="katalog"
      className="py-20 md:py-32 bg-white font-poppins overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-center md:text-left space-y-4">
            <span className="text-palapa-rose/40 font-black tracking-[0.4em] uppercase text-[10px] block italic">
              Seni Merangkai Makna
            </span>
            <h3 className="font-[900] text-5xl md:text-8xl text-palapa-rose uppercase tracking-tighter leading-[0.85]">
              Rangkaian <br />{" "}
              <span className="text-palapa-rose/20 text-4xl md:text-8xl">
                Abadi Anda
              </span>
            </h3>
          </div>

          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-palapa-rose/30"
              size={18}
            />
            <input
              type="text"
              placeholder="Cari nama atau deskripsi..."
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-palapa-cream/40 border border-palapa-rose/10 focus:outline-none focus:ring-2 focus:ring-palapa-rose/20 text-sm font-medium transition-all shadow-inner"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Dinamis */}
        <div className="flex overflow-x-auto gap-3 mb-12 pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === cat ? "bg-palapa-rose text-white shadow-xl scale-105" : "bg-palapa-cream text-palapa-rose"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {products.map((product) => (
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
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={product.name}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-4 py-1.5 rounded-full">
                    <span className="text-[8px] font-black text-palapa-rose uppercase tracking-widest">
                      {product.categoryName}
                    </span>
                  </div>
                </div>
                <div className="mt-8 px-2 text-center space-y-4">
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="cursor-pointer"
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
                      onChatClick(`Halo, saya ingin pesan ${product.name}`)
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
        {products.length === 0 && !loading && (
          <div className="py-20 text-center opacity-40 italic font-black uppercase tracking-widest">
            Produk "{debouncedSearch}" tidak ditemukan...
          </div>
        )}

        {/* Tombol Load More */}
        {hasMore && products.length > 0 && (
          <div className="mt-24 text-center">
            <button
              onClick={() => fetchProducts(false)}
              disabled={loadingMore}
              className="px-10 py-5 border-2 border-palapa-rose/20 text-palapa-rose rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-palapa-rose hover:text-white transition-all disabled:opacity-50"
            >
              {loadingMore ? "Menarik Data..." : "Lihat Lebih Banyak"}
            </button>
          </div>
        )}
      </div>

      {/* --- MODAL DETAIL (Tetap Premium) --- */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-white w-full h-[100dvh] md:h-auto md:max-h-[90dvh] max-w-7xl md:rounded-[4rem] shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-[120] bg-white p-3 rounded-full text-palapa-rose shadow-xl border md:top-8 md:right-8"
              >
                <X size={24} />
              </button>
              <div className="w-full md:w-1/2 bg-palapa-cream p-6 lg:p-12 overflow-y-auto flex flex-col gap-6">
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
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(
                            (prev) =>
                              (prev - 1 + allImages.length) % allImages.length,
                          );
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full text-palapa-rose shadow-lg z-10 transition-transform active:scale-90"
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
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full text-palapa-rose shadow-lg z-10 transition-transform active:scale-90"
                      >
                        <ChevronRight size={24} />
                      </button>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold">
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
                      className={`relative w-20 h-20 lg:w-28 lg:h-28 flex-shrink-0 rounded-[1.8rem] lg:rounded-[2.5rem] overflow-hidden transition-all shadow-md ${idx === activeIndex ? "ring-4 ring-palapa-rose scale-110 shadow-lg" : "opacity-60"}`}
                    >
                      <img
                        src={urlFor(img).width(200).url()}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col bg-white overflow-hidden">
                <div className="flex-1 p-8 lg:p-16 overflow-y-auto pb-32 md:pb-12">
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-palapa-rose/10 text-[10px] font-black text-palapa-rose uppercase tracking-widest">
                        {selectedProduct.categoryName}
                      </span>
                      <h2 className="text-4xl lg:text-7xl font-[900] text-palapa-rose leading-tight uppercase tracking-tighter">
                        {selectedProduct.name}
                      </h2>
                    </div>
                    <div className="h-px w-full bg-palapa-rose/10 border-dashed border-t"></div>
                    <p className="text-palapa-rose/70 leading-relaxed text-sm lg:text-lg font-medium italic">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto bg-white/95 border-t border-palapa-cream p-6 lg:p-10 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-10 md:static">
                  <div className="shrink-0">
                    <span className="text-[10px] font-black text-palapa-rose/40 uppercase block mb-1">
                      Harga
                    </span>
                    <p className="text-3xl lg:text-5xl font-[900] text-palapa-rose leading-none">
                      {formatPrice(selectedProduct.price)}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      onChatClick(
                        `Halo, saya ingin pesan ${selectedProduct.name}`,
                      )
                    }
                    className="flex-1 min-w-[200px] md:flex-none px-10 py-5 bg-palapa-rose text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl flex items-center justify-center gap-3 transition-transform active:scale-95"
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
