import React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1], // Custom cubic-bezier untuk gerakan mewah
      }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
