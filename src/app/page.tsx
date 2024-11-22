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
          sectionDescription="Explore os principais blockchain e NFT play-to-earn jogos em Lootlab.com!"
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
