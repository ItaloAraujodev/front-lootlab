"use client";
import PostService from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import CardGames from "../../CardGames";
import CarouselPosts from "../../Carousels/CarouselPosts";
import SkeletonPost from "@/components/Skeletons/SkeletonPost";

function GameList() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["getPosts"],
    queryFn: PostService.getPosts,
  });

  return (
    <CarouselPosts>
      {!isLoading &&
        posts &&
        posts.map((game, index) => (
          <CardGames key={game.title + index} game={game} />
        ))}
      {isLoading &&
        Array.from({ length: 10 }, (_, index) => index).map((index) => (
          <SkeletonPost key={index} />
        ))}
    </CarouselPosts>
  );
}

export default GameList;
