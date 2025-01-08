import classNames from "classnames";

interface IProps {
  genre: string;
  image: string;
}

export default function CardGenre({ genre, image }: IProps) {
  return (
    <div
      className={classNames(
        "relative flex h-32 w-44",
        "embla__slide flex-[0_0_auto] py-4",
      )}
    >
      <img
        src={image}
        alt={genre}
        className="z-0 h-full w-full cursor-pointer rounded-xl bg-center object-cover object-top opacity-80 hover:opacity-100"
      />
      <h1 className="absolute bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-center text-lg font-semibold text-lootlab-font-base">
        {genre}
      </h1>
    </div>
  );
}
