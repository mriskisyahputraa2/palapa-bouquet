import React from "react";
import Button from "../components/Button";
import { MessageCircle } from "lucide-react";

const CustomOrder = ({ onChatClick }) => {
  return (
    <section id="custom" className="max-w-7xl mx-auto px-6 py-24">
      <div className="bg-palapa-black rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
        {/* Dekorasi Pink Halus di Background Hitam */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-palapa-pink opacity-10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
          Punya Ide Buket Sendiri?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Jangan ragu untuk konsultasi! Kami bisa membuatkan rangkaian bunga
          sesuai dengan budget dan desain impian yang Anda inginkan.
        </p>
        <div className="flex justify-center">
          <Button
            variant="accent"
            onClick={() =>
              onChatClick(
                "Halo Admin, saya mau diskusi buket custom sesuai budget saya."
              )
            }
          >
            <MessageCircle size={24} /> Konsultasi Custom Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
