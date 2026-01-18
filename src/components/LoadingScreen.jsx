import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#FAF5F6] flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Lingkaran Berdenyut */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-palapa-rose/20 rounded-full blur-xl"
        />

        {/* Logo/Nama Brand */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative text-center"
        >
          <h1 className="text-3xl font-[900] text-palapa-rose tracking-[0.3em] uppercase">
            Palapa <br />{" "}
            <span className="text-palapa-rose/40 italic font-light lowercase tracking-normal">
              Bouquet
            </span>
          </h1>
          <div className="mt-4 w-12 h-[2px] bg-palapa-rose/20 mx-auto rounded-full overflow-hidden">
            <motion.div
              animate={{ x: [-50, 50] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-palapa-rose"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
