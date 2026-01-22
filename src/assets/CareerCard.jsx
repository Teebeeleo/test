import React from "react";

const CareerCard = ({ year, title, points }) => {
  return (
    <div className="relative  border border-[#2a2f3a] rounded-xl p-6 hover:border-[#b36ec7] transition duration-300">
      <span className="absolute -top-3 right-4 bg-[#282c33] px-3 text-xs text-[#b36ec7]">
        {year}
      </span>

      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <ul className="space-y-2 text-sm text-gray-300">
        {points.map((point, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-[#b36ec7]">▹</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerCard;
