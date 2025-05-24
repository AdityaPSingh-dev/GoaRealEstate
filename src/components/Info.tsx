"use client";

import localFont from "next/font/local";
import Image from "next/image";

// Local Font
const myFont = localFont({
  src: "../../public/fonts/Recoleta-RegularDEMO.otf",
});

export default function Info() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Responsive container */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
          <Image
            src="/architecture.jpg"
            alt="Architecture"
            fill
            className="object-cover border-b lg:border-b-0 lg:border-r border-black"
            priority
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/background.jpg"
              alt="Background"
              fill
              className="object-cover opacity-30 backdrop-blur-lg"
              priority
            />
          </div>

          {/* Text content */}
          <div className="relative  flex flex-col items-start justify-start px-6 md:px-12 lg:px-24 py-10">
            <h1
              className={`text-3xl md:text-5xl lg:text-6xl font-bold text-black ${myFont.className}`}
            >
              Discover the Wonders of Goa
            </h1>

            <p className="py-6 md:py-8 text-base md:text-lg text-black">
              At Goa Real Estates, we bring deep, first-hand knowledge of the
              region&apos;s unique charm — from coastal havens to serene village
              landscapes. Our team understands not just the features of the
              land, but also the opportunities and challenges that come with
              buying, selling, or investing in property across Goa. Whether
              you&apos;re a first-time homebuyer or a seasoned investor, we’re
              here to provide a grounded, local perspective and a trusted,
              on-the-ground real estate experience. Our commitment is to help
              you find a property that fits your goals, your lifestyle, and your
              vision of life in Goa.
            </p>

            <p className="pt-4 text-xs font-medium text-black">As seen in</p>
            <Image
              src="/logo.png"
              alt="Logo"
              priority
              width={120}
              height={120}
              className="mt-2"
            />
          </div>
        </div>
      </div>

      <hr className="border-t border-zinc-900" />
    </div>
  );
}
