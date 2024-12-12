"use client";
import PostService from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import CardGames from "../../CardGames";

function GameList() {
  const { data: posts } = useQuery({
    queryKey: ["getPosts"],
    queryFn: PostService.getPosts,
  });

  return (
    <div className="flex flex-wrap justify-center gap-5 md:justify-start">
      {posts &&
        posts.map((game, index) => (
          <CardGames key={game.title + index} game={game} />
        ))}
    </div>
  );
}

export default GameList;
