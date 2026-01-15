import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Catalog from "./sections/Catalog";
import CustomOrder from "./sections/CustomOrder";
import Footer from "./sections/Footer";

const App = () => {
  const handleWhatsApp = (message) => {
    const phoneNumber = "6281234567890"; // GANTI DENGAN NOMOR WA ANDA
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="antialiased">
      <Navbar />
      <Hero onChatClick={handleWhatsApp} />
      <Catalog onChatClick={handleWhatsApp} />
      <CustomOrder onChatClick={handleWhatsApp} />
      <Footer />
    </div>
  );
};

export default App;
