import Image from "next/image";
import React from "react";

const DownButton: React.FC = () => {
  return (
    <div className=" flex justify-center ">
      {/* <a
        href=""
        className="inline-block opacity-100 transition-opacity  "
        aria-label="Scroll to About Section"
      > */}
      <Image
        src="https://cdn.prod.website-files.com/63d71251cdfd66587e21bff6/63d71251cdfd66207321c063_Slider%20arrow.svg"
        alt="Arrow down"
        className="w-6 h-6 rotate-90 "
        loading="lazy"
        width={24}
        height={24}
      />
      {/* </a> */}
    </div>
  );
};

export default DownButton;
