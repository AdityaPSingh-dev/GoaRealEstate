import localFont from "next/font/local";
import React from "react";

const myFont = localFont({
  src: "../../public/fonts/Recoleta-RegularDEMO.otf",
});

const Newsletter = () => {
  return (
    <div className="relative w-full overflow-hidden border-t border-b border-black ">
      {/* Background Section */}
      <div className="bg-blue-300 w-full flex flex-col lg:flex-row  px-6 sm:px-10 md:px-16 lg:px-32 gap-8 lg:gap-0 py-16 lg:py-32">
        {/* Left Side: Heading */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black ${myFont.className} mb-4`}
          >
            Subscribe to our Newsletter
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white">
            No spam, no unwanted emails, no funny business. We&apos;ll only send
            the latest listings directly to your inbox so you can be the first
            to hear about new properties hitting the market.
          </p>
        </div>

        {/* Right Side: Input */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 md:w-1/2 px-4 py-3 rounded border border-black text-black focus:outline-none"
          />
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3 bg-transparent border border-black text-sm font-semibold text-black hover:bg-black hover:text-blue-300 transition-all rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
