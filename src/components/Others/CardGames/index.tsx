import type { IPost } from "@/interfaces/interfaces";
import classNames from "classnames";
import Link from "next/link";

interface IProps {
  game: IPost;
  className?: string;
}

export default function CardGames({ game, className }: IProps) {
  return (
    <div
      className={classNames(
        className,
        "embla__slide min-w-0 max-w-64 flex-[0_0_auto] py-4",
      )}
    >
      <Link
        href={`/details/${game.slug}`}
        className="flex flex-col justify-center overflow-hidden rounded-lg bg-lootlab-font-highlight bg-gradient-to-b p-[1px] transition-all duration-300 ease-out md:hover:scale-[1.02]"
      >
        <div className="relative aspect-square">
          <img
            src={game.Image[0].url}
            alt={`image do jogo ${game.title}`}
            className="h-64 w-full rounded-t-lg object-cover"
          />
          <div className="absolute bottom-4 right-4">
            <div className="flex h-10 w-10 rotate-45 items-center justify-center bg-[#FFD700]">
              <span className="-rotate-45 text-xs font-bold text-black">
                GAME
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-b-lg bg-[#1a1b1e] p-4">
          <h3 className="mb-2 truncate text-lg font-semibold text-white">
            {game.title}
          </h3>
          <div className="flex flex-wrap gap-2 overflow-auto">
            {game.genres.map((category) => (
              <span
                key={category.id}
                className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
