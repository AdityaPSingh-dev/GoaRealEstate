"use client";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const myFont = localFont({
  src: "../../public/fonts/Recoleta-RegularDEMO.otf",
});

const AboutPage = () => {
  const controls = useAnimation();
  const [direction, setDirection] = useState(1);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setDirection(currentY > lastScrollY ? 1 : -1);
      lastScrollY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: direction === 1 ? "-50%" : "0%",
          transition: { ease: "linear", duration: 30 },
        });
        await controls.start({
          x: direction === 1 ? "0%" : "-50%",
          transition: { ease: "linear", duration: 0 },
        });
      }
    };
    animate();
  }, [controls, direction]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="About Background"
          fill
          className="object-cover opacity-40 backdrop-blur-lg"
          priority
        />
      </div>

      {/* Foreground */}
      <div className="flex flex-col min-h-screen z-10 text-black px-6 md:px-12 lg:px-24 py-10 md:py-16">
        {/* Header */}
        <div className="flex items-center">
          <Image
            src="/star.svg"
            alt="Star"
            width={24}
            height={24}
            className="py-8 mx-2"
          />
          <h1 className="text-sm md:text-md font-semibold py-8 px-2">ABOUT</h1>
        </div>

        {/* Title */}
        <h1
          className={`text-4xl md:text-6xl lg:text-8xl font-normal px-1 ${myFont.className}`}
        >
          Live Goa — Expert real estate for homes from beaches to villages
        </h1>

        {/* Description */}
        <div className="w-full mt-10 flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2 text-black px-2 md:px-4 lg:px-6 py-6 font-semibold text-lg md:text-2xl">
            Goa Real Estate is a full-service real estate firm dedicated to
            helping you explore and invest in the unique charm of Goa — from
            serene inland villages to vibrant coastal hubs.
          </div>
          <div className="lg:w-1/2 text-black px-2 md:px-4 lg:px-6 py-6 font-normal text-base md:text-lg">
            Whether you&apos;re looking for an investment property, a place to
            build, or a ranch — we can help you find exactly what you are after.
            <br />
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 cursor-pointer mt-4 text-black font-medium group"
            >
              <span className="underline">See properties</span>
              <Image
                src="https://cdn.prod.website-files.com/63d71251cdfd66587e21bff6/63d71251cdfd66207321c063_Slider%20arrow.svg"
                alt="Arrow down"
                className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
                loading="lazy"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee Text Animation */}
      <div className="relative w-screen h-[15vw] overflow-hidden py-8 flex items-center mb-4">
        <motion.div
          className="absolute top-0 left-0 flex whitespace-nowrap"
          animate={controls}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              <h1
                className={`text-[10vw] whitespace-nowrap ${myFont.className} text-bg-clip text-stroke pr-10`}
              >
                Let’s discover your perfect home ✧
              </h1>
            </div>
          ))}
        </motion.div>
      </div>

      <hr className="border-t border-zinc-900 mt-4 md:mt-8" />
    </div>
  );
};

export default AboutPage;
