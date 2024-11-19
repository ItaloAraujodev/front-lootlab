interface IProps {
  game: {
    id: number;
    title: string;
    image: string;
    genres: string[];
    platforms: string[];
  };
}

export default function CardGames({ game }: IProps) {
  return (
    <div className="group cursor-pointer rounded-lg border-[0.5px] border-lootlab-font-highlight border-x-chart-3 border-b-chart-3 p-1 transition-transform hover:-translate-y-1">
      <div className="relative h-52 w-52 overflow-hidden">
        <img
          src={game.image}
          alt={`image do jogo ${game.title}`}
          className="h-full w-full transform rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-3">
        <h1 className="text-center text-lg font-bold text-lootlab-font-base">
          {game.title}
        </h1>
        <div>
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
        </div>
        <div className="flex gap-2 text-base font-normal text-lootlab-font-highlight">
          {game.platforms.map((plataform, index) => (
            <span key={index}>{plataform}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
