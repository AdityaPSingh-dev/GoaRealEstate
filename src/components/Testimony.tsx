"use client";

import Image from "next/image";
import React from "react";

const Testimony = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover opacity-40 backdrop-blur-lg"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-10 md:px-24 lg:px-64 text-center text-black">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-10 leading-relaxed">
          &quot;Goa is more than just a destination — it&apos;s a feeling, a
          lifestyle. At Goa Real Estates, we strive to connect each client with
          a space that truly resonates with them. Whether it&apos;s a tranquil
          village home or a vibrant coastal retreat, we&apos;re here to guide
          you with honesty, care, and local expertise.&quot;
        </h1>

        {/* Profile */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Image
            src="/profilepic.png"
            alt="Aarav D'Souza"
            width={52}
            height={52}
            className="rounded-full bg-white"
          />
          <div>
            <h2 className="font-semibold text-base sm:text-lg">
              Aarav D&apos;Souza
            </h2>
            <p className="text-sm sm:text-base">Managing Director</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full">
        <hr className="border-t border-zinc-900" />
      </div>
    </div>
  );
};

export default Testimony;
