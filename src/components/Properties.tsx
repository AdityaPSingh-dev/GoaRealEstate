"use client";

import { useRef } from "react";
import Image from "next/image";
import { ThreeDCard } from "./ThreeDCard";
import { properties } from "@/data/properties";
import localFont from "next/font/local";
import DownButton from "./DownButton";

const myFont = localFont({
  src: "../../public/fonts/Recoleta-RegularDEMO.otf",
});

export default function Properties() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/blueBg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-12 relative ">
        {/* Header */}
        <div className="flex items-center">
          <Image
            src="/star.svg"
            alt="Star"
            width={24}
            height={24}
            className="mx-2"
          />
          <h1 className="text-sm md:text-md font-semibold">PROPERTIES</h1>
        </div>

        {/* Title + CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mt-6 gap-4">
          <h2
            className={`${myFont.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-full lg:max-w-[60%]`}
          >
            Check out some of our latest listings
          </h2>
          <button className="border border-black h-12 px-6 text-sm md:text-base font-semibold hover:bg-black hover:text-white w-fit">
            View all properties
          </button>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6 md:space-x-8 mt-8 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {properties.map((property, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] xl:w-[24rem]"
            >
              <ThreeDCard {...property} />
            </div>
          ))}
        </div>

        {/* Scroll Arrows */}
        <div className="flex justify-start mt-6 gap-4 sm:gap-6">
          <button
            onClick={scrollLeft}
            className="text-white px-4 py-2 rounded-xl hover:brightness-75 border-2 border-blue-400"
          >
            <div className="rotate-90">
              <DownButton />
            </div>
          </button>
          <button
            onClick={scrollRight}
            className="text-white px-4 py-2 rounded-xl hover:brightness-75 border-2 border-blue-400"
          >
            <div className="-rotate-90">
              <DownButton />
            </div>
          </button>
        </div>
      </div>

      <hr className="border-t border-zinc-900 mt-6" />
    </div>
  );
}
