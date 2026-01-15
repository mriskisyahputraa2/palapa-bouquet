import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyle =
    "px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-palapa-black text-white hover:scale-105 shadow-xl hover:bg-gray-800",
    secondary:
      "bg-white border-2 border-palapa-pink text-palapa-pink hover:bg-palapa-pink-soft",
    accent:
      "bg-palapa-pink text-white shadow-lg hover:shadow-2xl hover:scale-105",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
