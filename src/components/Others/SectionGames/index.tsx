import { Gamepad2 } from "lucide-react";
import GameList from "./GameList";

export default function SectionGames() {
  return (
    <div className="flex flex-col items-center gap-6 px-[5%]">
      <h1 className="flex items-center gap-2 text-2xl font-bold text-lootlab-font-base">
        <Gamepad2 /> Explorador de Jogos
      </h1>
      <GameList />
    </div>
  );
}
