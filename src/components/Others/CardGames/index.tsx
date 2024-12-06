import type { IGame } from "@/interfaces/interfaces";
import Link from "next/link";

interface IProps {
  game: IGame;
}

// const colorArray: string[] = [
//   "000000/FFF", // Preto / Branco
//   "FF5733/FFF", // Laranja / Branco
//   "33FF57/FFF", // Verde claro / Branco
//   "8E44AD/FFF", // Roxo / Branco
//   "3498DB/FFF", // Azul / Branco
//   "F1C40F/FFF", // Amarelo / Branco
//   "E74C3C/FFF", // Vermelho / Branco
//   "1ABC9C/FFF", // Verde água / Branco
//   "9B59B6/FFF", // Roxo claro / Branco
//   "34495E/FFF", // Cinza escuro / Branco
// ];

export default function CardGames({ game }: IProps) {
  return (
    <Link
      href={`/details/${game.title}`}
      className="group cursor-pointer rounded-lg border-[0.5px] border-lootlab-font-highlight border-x-chart-3 border-b-chart-3 p-1 transition-transform hover:-translate-y-1"
    >
      <div className="relative h-56 max-w-56 overflow-hidden">
        <img
          src={game.Image[0].url}
          alt={`image do jogo ${game.title}`}
          className="h-full w-full transform break-all rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex w-56 flex-col items-center gap-3">
        <h1 className="break-all text-lg font-bold text-lootlab-font-base">
          {game.title}
        </h1>
        {/* <div>
          {game.genres.map((genre, index) => (
            <span
              className="text-nowrap text-xs font-medium text-lootlab-font-highlight"
              key={index}
            >
              {index > 1 ? null : (
                <span>
                  {genre} {index === game.genres.length - 1 ? "" : ", "}
                </span>
              )}
            </span>
          ))}
          {game.genres.length > 2 && (
            <span className="h-2 w-2 rounded-sm bg-[#172a46] px-[2px] text-xs font-semibold">
              +{game.genres.length - 2}
            </span>
          )}
        </div> */}
        {/* <div className="flex gap-2 text-base font-normal text-lootlab-font-highlight">
          {game.platforms.map((plataform, index) => (
            <span key={index}>{plataform}</span>
          ))}
        </div> */}
      </div>
    </Link>
  );
}
