"use client";
import Image from "next/image";
import bannerIlluvium from "../../../images/Banner-illuvium.png";
import bannerAxieInfinity from "../../../images/Banner-AxieInfinity.png";
import { useEffect, useState } from "react";
import illuviumLogo from "../../../images/Illuvium-logo.svg";
import axieLogo from "../../../images/Axie-logo.svg";
import SectionHeader from "../SectionHeader";

const banners = [
  {
    banner: bannerIlluvium,
    logo: illuviumLogo,
    description:
      "Mergulhe em um universo aberto repleto de aventuras épicas, colete Illuvials poderosos, batalhe contra outros jogadores e descubra riquezas escondidas em um ambiente de tirar o fôlego.",
    descriptionTitle: "Explore um novo mundo com Illuvium",
  },
  {
    banner: bannerAxieInfinity,
    logo: axieLogo,
    description:
      "Mergulhe em um universo aberto repleto de aventuras épicas, colete Illuvials poderosos, batalhe contra outros jogadores e descubra riquezas escondidas em um ambiente de tirar o fôlego.",
    descriptionTitle: "Explore um novo mundo com Axie Infinity",
  },
];

function Carousel() {
  const [currIndex, setCurrIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currIndex]);

  return (
    <div className="h-full w-full">
      <SectionHeader
        sectionDescriptionTitle={banners[currIndex].descriptionTitle}
        sectionDescription={banners[currIndex].description}
        sectionTitle={banners[currIndex].logo}
      />
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden opacity-100">
        <Image
          src={banners[currIndex].banner}
          key={currIndex}
          alt="Banner Illuvium"
          className="h-full w-full object-cover object-top opacity-85"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lootlab-bg-main via-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-lootlab-bg-main via-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-lootlab-bg-main via-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-lootlab-bg-main via-transparent" />
      </div>
      <div className="absolute bottom-7 right-[5%] flex gap-5">
        {banners.map(({ banner }, index) => (
          <div
            key={index}
            onClick={() => setCurrIndex(index)}
            className={`cursor-pointer ${
              currIndex === index
                ? "shadow-custom border-2 shadow-lootlab-font-highlight"
                : ""
            } flex h-16 w-28 rounded-md border-lootlab-font-base transition-transform duration-200 ease-in-out hover:border-2`}
          >
            <Image
              src={banner}
              alt="Banner"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
