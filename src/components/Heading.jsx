import React from "react";

const Heading = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-16 space-y-4 ${center ? "text-center" : ""}`}>
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-palapa-black">
        {title}
      </h2>
      {subtitle && <p className="text-gray-500 text-lg">{subtitle}</p>}
      {center && (
        <div className="w-20 h-1 bg-palapa-pink mx-auto rounded-full mt-6"></div>
      )}
    </div>
  );
};

export default Heading;
