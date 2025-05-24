// components/DownButton.tsx
"use client";

import Image from "next/image";
import React from "react";

const Down: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Scroll down"
      className="flex items-center justify-center w-16 h-16 rounded-full hover:bg-white/10 transition duration-300 "
    >
      <Image
        src="https://cdn.prod.website-files.com/63d71251cdfd66587e21bff6/63d71251cdfd66207321c063_Slider%20arrow.svg"
        alt="Arrow down"
        className="w-6 h-6 rotate-90"
        width={24}
        height={24}
        loading="lazy"
      />
    </button>
  );
};

export default Down;
