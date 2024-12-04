import GameList from "./GameList";

export default function SectionGames() {
  return (
    <div className="flex flex-col gap-6">
      {/* <h1 className="text-xl font-bold text-lootlab-font-base">
        // {/* Explorador de Jogos */}
      {/* </h1> */}
      <GameList />
    </div>
  );
}
