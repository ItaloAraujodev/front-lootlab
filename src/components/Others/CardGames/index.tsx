import type { IPost } from "@/interfaces/interfaces";
import classNames from "classnames";
import Link from "next/link";

interface IProps {
  post: IPost;
  className?: string;
}

export default function CardGames({ post, className }: IProps) {
  const sizeGenres = post.genres.length;
  const remainingGenresCount = post.genres.slice(2, sizeGenres);
  console.log(post.genres.slice(1, sizeGenres - 1).length);
  return (
    <div className={classNames(className, "embla__slide flex-[0_0_auto] py-4")}>
      <Link
        href={`/details/${post.slug}`}
        className="group relative flex flex-col justify-center rounded-lg border-[1px] border-lootlab-font-highlight border-opacity-40 bg-inherit p-2 transition-all duration-300 ease-out md:hover:-translate-y-2"
      >
        <div className="aspect-square h-64 w-64 overflow-hidden rounded-t-md">
          <img
            src={post.Image[0].url}
            alt={`image do jogo ${post.title}`}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:rounded-lg"
          />
        </div>
        <div className="flex max-w-64 flex-col items-center gap-3 rounded-b-lg bg-inherit p-4">
          <h3 className="mb-2 truncate text-lg font-semibold capitalize text-white">
            {post.title}
          </h3>
          <div className="flex items-center gap-2">
            {post.genres.map(
              (category, index) =>
                index < 2 && (
                  <span
                    key={category.name}
                    className="flex items-center rounded-full bg-white/10 px-2 py-1 text-xs text-white/80"
                  >
                    {category.name}
                  </span>
                ),
            )}
            {sizeGenres > 2 && (
              <div className="peer flex h-5 w-5 items-center justify-center rounded-full bg-slate-800/70 text-xs text-white/80">
                <span>{sizeGenres - 2}+</span>
              </div>
            )}
            <div className="absolute bottom-14 right-6 z-20 hidden overflow-y-auto text-nowrap rounded-lg bg-slate-600 px-2 text-white peer-hover:block">
              <div className="flex flex-col">
                {remainingGenresCount.map(({ name }) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
