import GameList from "./GameList";
import PopularGenres from "@/components/Others/PopularGenres";

export default function SectionGames() {
  return (
    <div className="flex w-full flex-col gap-6 px-[5%]">
      <PopularGenres />
      <GameList />
    </div>
  );
}
