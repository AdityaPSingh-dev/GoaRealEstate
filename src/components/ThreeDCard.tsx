import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import localFont from "next/font/local";
import Image from "next/image";

const myFont = localFont({
  src: "../../public/fonts/Recoleta-RegularDEMO.otf",
});

type ThreeDCardProps = {
  address: string;
  location: string;
  area: string;
  price: string;
  imageSrc?: string;
};

export function ThreeDCard({
  address,
  location,
  area,
  price,
  imageSrc = "/architecture.jpg",
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`
          relative group/card
          w-full max-w-[24rem] h-[32rem]
          rounded-xl px-4 py-4 border
          border-white/20 bg-white/10
          backdrop-blur-xs backdrop-saturate-150
          dark:bg-white/5 dark:border-white/20
          shadow-md dark:shadow-2xl transition-all
          flex flex-col justify-between
        `}
      >
        {/* Title Section */}
        <div>
          <CardItem
            translateZ="50"
            className={`text-lg font-bold text-neutral-700 dark:text-white ${myFont.className}`}
          >
            {address}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm mt-1 dark:text-neutral-300"
          >
            {location}
          </CardItem>
        </div>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageSrc}
            height={500}
            width={300}
            className="h-64 sm:h-72 md:h-80 w-full object-cover rounded-md group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        {/* Area and Price */}
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="a"
            target="__blank"
            className="px-3 py-1 rounded-sm text-sm dark:text-white font-semibold"
          >
            {area}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-3 py-1 rounded-md bg-black dark:bg-white dark:text-black text-white text-lg font-bold"
          >
            {price}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
