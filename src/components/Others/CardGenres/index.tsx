interface IProps {
  genre: string;
  image: string;
}

export default function CardGenre({ genre, image }: IProps) {
  return (
    <div className="relative flex h-32 w-52">
      <img
        src={image}
        alt={genre}
        className="z-0 h-full w-full cursor-pointer rounded-xl bg-center opacity-80 hover:opacity-100"
      />
      <h1 className="absolute bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-lg font-semibold text-lootlab-font-base">
        {genre}
      </h1>
    </div>
  );
}
