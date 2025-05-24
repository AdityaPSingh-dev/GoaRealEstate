"use client";
import React from "react";
import Navbar from "./Navbar";
import localFont from "next/font/local";
import Down from "./Down";

const myFont = localFont({
  src: "../../public/fonts/Recoleta-RegularDEMO.otf",
});

const HomePage = () => {
  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navbar */}
      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center h-screen w-full px-4 md:px-12">
        <h1
          className={`text-center text-white ${myFont.className} w-full max-w-4xl text-4xl md:text-6xl lg:text-7xl leading-tight`}
        >
          Coastal Living in the Heart of Goa
        </h1>
        <h3 className="mt-4 text-center text-white text-base md:text-xl lg:text-2xl max-w-2xl">
          Homes, investment property, and land for sale in Goa, including
          popular areas like Anjuna, Panaji, and Palolem.
        </h3>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-12 ">
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to About Section"
          className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border-2 border-blue-300 rounded-full hover:cursor-pointer transition duration-300 hover:bg-white/10"
        >
          <Down />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
