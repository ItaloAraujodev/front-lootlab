import games from "@/mocks/games";
import CardGames from "../CardGames";

export default function SectionGames() {
  return (
    <div className="flex flex-col gap-6">
      {/* <h1 className="text-xl font-bold text-lootlab-font-base">
        // {/* Explorador de Jogos */}
      {/* </h1> */}
      <div className="flex flex-wrap justify-center gap-4">
        {games.map((game) => (
          <CardGames key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
