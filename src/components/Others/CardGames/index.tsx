import type { IPost } from "@/interfaces/interfaces";
import classNames from "classnames";
import Link from "next/link";

interface IProps {
  game: IPost;
  className?: string;
}

export default function CardGames({ game, className }: IProps) {
  return (
    <div className={classNames(className, "embla__slide flex-[0_0_auto] py-4")}>
      <Link
        href={`/details/${game.slug}`}
        className="group flex flex-col justify-center overflow-hidden rounded-lg border-[1px] border-lootlab-font-highlight border-opacity-40 bg-inherit p-2 transition-all duration-300 ease-out md:hover:-translate-y-3"
      >
        <div className="aspect-square h-64 w-64 overflow-hidden rounded-t-md">
          <img
            src={game.Image[0].url}
            alt={`image do jogo ${game.title}`}
            className="h-full w-full object-cover transition-all group-hover:scale-110 group-hover:rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center gap-3 rounded-b-lg bg-inherit p-4">
          <h3 className="mb-2 truncate text-lg font-semibold capitalize text-white">
            {game.title}
          </h3>
          <div className="flex flex-wrap gap-2">
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
