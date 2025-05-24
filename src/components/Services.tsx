"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import DownButton from "./DownButton";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  label: string;
  content: string;
}

const items: DropdownItem[] = [
  {
    label: "Buy",
    content:
      "Whether you're searching for a traditional Goan Portuguese villa, a modern beachside home, or a peaceful cottage nestled in the hinterlands, we have the local expertise and property listings to match your vision. Our selection of pre-built homes is ideal for both short-term vacation rentals and long-term living. With Goa Real Estates, finding your dream home—be it by the sea or in a quiet village—is simple, guided, and stress-free.",
  },
  {
    label: "Sell",
    content:
      "When it’s time to sell your home, holiday rental, land, or commercial property in Goa, our experienced team is here to help. We combine market insight, local relationships, and expert marketing to ensure your property gets the attention it deserves. Whether you're looking to move on or reinvest, Goa Real Estates works hard to get you the best possible return for your asset, with transparency and integrity every step of the way.",
  },
  {
    label: "Invest",
    content:
      "Goa is one of India’s most attractive real estate markets, offering solid potential for both long-term value and short-term rental income. Whether you’re buying land, villas, or hospitality properties, we help you identify smart investment opportunities tailored to your goals. With on-the-ground knowledge and a finger on the pulse of Goa’s shifting real estate trends, we guide you to make confident, profitable decisions.",
  },
  {
    label: "Partner",
    content:
      "We believe in building more than just properties—we build relationships. At Goa Real Estates, we collaborate with architects, builders, developers, and investors to create and deliver high-quality spaces that reflect the charm and character of Goa. Whether you're bringing a vision to life or looking for a partner to help you scale, our network and experience make us a valuable collaborator in every phase of the process. If you’re in real estate, construction, design, or investment, let’s connect and explore how we can work together to shape Goa’s future.",
  },
];

const myFont = localFont({
  src: "../../public/fonts/Recoleta-RegularDEMO.otf",
});

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/blueBg.jpg"
          alt="About Background"
          fill
          className="object-cover opacity-40 backdrop-blur-lg"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="flex flex-col min-h-screen z-10 text-black px-4 sm:px-6 md:px-10 lg:px-24 py-16">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Image
            src="/star.svg"
            alt="Star"
            width={24}
            height={24}
            className="pt-2"
          />
          <h1 className="text-md font-semibold pt-2">SERVICES</h1>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          {/* Left Column */}
          <div
            className={`w-full lg:w-1/2 ${myFont.className} text-3xl sm:text-4xl md:text-5xl`}
          >
            Experience & expertise in Goa real estate
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 text-black font-normal text-base sm:text-lg pt-2">
            <p>
              At Goa Real Estates, we bring deep-rooted knowledge and a genuine
              passion for the diverse landscapes and vibrant communities that
              define Goa. From sun-drenched beaches to quiet inland villages,
              our understanding of the region’s real estate market is both
              personal and professional. Our dedicated team has spent years
              exploring the hidden corners of Goa — whether you’re dreaming of
              an ocean-view villa, a tucked-away plot in a serene village, or a
              smart investment in a thriving neighborhood, we know where to look
              and how to guide you there. Whether you’re seeking a peaceful
              retreat, a vacation home, or a profitable investment, we’re here
              to simplify the journey. With honest insights, on-the-ground
              experience, and an unwavering commitment to your goals, Goa Real
              Estates is your trusted partner in finding the property that feels
              just right.
            </p>

            <Link
              href="/properties"
              className="inline-flex items-center gap-2 cursor-pointer mt-4 text-black font-medium group"
            >
              <span className="underline">Get in touch</span>
              <Image
                src="https://cdn.prod.website-files.com/63d71251cdfd66587e21bff6/63d71251cdfd66207321c063_Slider%20arrow.svg"
                alt="Arrow down"
                className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
                width={24}
                height={24}
              />
            </Link>

            {/* Dropdown Section */}
            <div className="mt-12">
              {items.map((item, index) => (
                <div key={index}>
                  <hr className="border-t border-zinc-900 my-6" />
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleIndex(index)}
                  >
                    <h1 className={`text-2xl sm:text-3xl ${myFont.className}`}>
                      {item.label}
                    </h1>

                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-full border-2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-zinc-900"
                    >
                      <DownButton />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden mt-4"
                      >
                        <p className="text-md text-zinc-800">{item.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <hr className="border-t border-zinc-900 my-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
