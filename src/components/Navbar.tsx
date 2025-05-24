"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/fonts/Recoleta-RegularDEMO.otf",
});

const HamburgerButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      title="Menu"
      type="button"
      onClick={handleClick}
      className="flex flex-col justify-center items-center p-3   right-6 top-4 md:right-12 md:top-10 z-[9999]"
    >
      <span
        className={`bg-blue-300 block transition-all duration-300 ease-out h-0.5 w-8 md:w-10 rounded-sm ${
          isOpen ? "rotate-45 translate-y-2.75" : "-translate-y-0.5"
        }`}
      />
      <span
        className={`bg-blue-300 block transition-all duration-300 ease-out h-0.5 w-8 md:w-10 rounded-sm my-1 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`bg-blue-300 block transition-all duration-300 ease-out h-0.5 w-8 md:w-10 rounded-sm ${
          isOpen ? "-rotate-45 -translate-y-2.0" : "translate-y-0.5"
        }`}
      />
    </button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 md:py-6 z-[9999] transition-colors duration-300 ${
        scrolled ? "bg-[#252525]" : "bg-transparent"
      }`}
    >
      {/* Logo and Brand */}
      <div className="flex items-center space-x-2">
        <Image src="/home.png" width={40} height={20} alt="Resort" />
        <h1
          className={`text-lg md:text-xl text-blue-300 font-bold ${myFont.className}`}
        >
          Goa Real Estate
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 md:space-x-12">
        {/* Hide this button on mobile */}
        <button
          type="button"
          className="hidden md:block text-blue-300 border-2 border-blue-300 focus:outline-none hover:bg-blue-300 hover:text-white text-sm px-4 py-2 font-bold"
        >
          Get In Touch
        </button>
        <HamburgerButton />
      </div>
    </div>
  );
};

export default Navbar;
