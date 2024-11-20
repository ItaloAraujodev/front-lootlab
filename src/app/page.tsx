import { LayoutPage } from "@/components/Layout";
import BreadCrumbs from "@/components/Others/BreadCrumbs";
// import PopularGenres from "@/components/Others/PopularGenres";
import SectionGames from "@/components/Others/SectionGames";
import SectionHeader from "@/components/Others/SectionHeader";

export default function Home() {
  return (
    <LayoutPage>
      <div className="w-full">
        <BreadCrumbs />
        <SectionHeader
          sectionDescription="Descubra os melhores jogos blockchain de jogar e ganhar, além de jogos NFT, com o LootLab."
          sectionTitle="Games"
        />
      </div>
      <div className="flex flex-col gap-20">
        {/* <PopularGenres /> */}
        <SectionGames />
      </div>
    </LayoutPage>
  );
}
