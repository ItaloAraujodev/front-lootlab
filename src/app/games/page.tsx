"use client";
import BreadCrumbs from "@/components/Others/BreadCrumbs";
import PopularGenres from "@/components/Others/PopularGenres";
import SectionHeader from "@/components/Others/SectionHeader";

export default function games() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-16 self-center px-28 pt-10">
      <div className="w-full">
        <BreadCrumbs />
        <SectionHeader
          sectionDescription="Descubra os melhores jogos blockchain de jogar e ganhar, além de jogos NFT, com o LootLab."
          sectionTitle="Games"
        />
      </div>
      <div>
        <PopularGenres />
      </div>
    </div>
  );
}
