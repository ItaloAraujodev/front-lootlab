import { LayoutPage } from "@/components/Layout";
import CarouselHeader from "@/components/Others/Carousels/CarouselHeader";
// import PopularGenres from "@/components/Others/PopularGenres";
import SectionGames from "@/components/Others/SectionGames";

export default function Home() {
  return (
    <LayoutPage className="gap-16">
      <div className="relative flex h-[100vh] w-full justify-between sm:h-[75vh]">
        <CarouselHeader />
        <hr className="absolute bottom-0 left-0 h-[1px] w-full border-0 bg-lootlab-font-highlight opacity-40" />
      </div>

      <SectionGames />
    </LayoutPage>
  );
}
