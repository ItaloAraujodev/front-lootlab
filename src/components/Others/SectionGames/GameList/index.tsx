"use client";
import PostService from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import CardGames from "../../CardGames";
import CarouselPosts from "../../Carousels/Carousel";
import SkeletonPost from "@/components/Skeletons/SkeletonPost";
import { Gamepad2 } from "lucide-react";
import { Common } from "@/components/Common";

function GameList() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["getPosts"],
    queryFn: PostService.getPosts,
  });

  if (!posts?.length && !isLoading) {
    return (
      <div className="relative mx-auto flex h-48 w-full items-center justify-center">
        <h1 className="text-3xl font-thin text-lootlab-font-highlight">
          Nenhum jogo encontrado.
        </h1>
      </div>
    );
  }

  return (
    <>
      <Common.CommonTitleSection>
        <Gamepad2 /> Explorador de Jogos
      </Common.CommonTitleSection>
      <CarouselPosts>
        {!isLoading &&
          posts &&
          posts.map((game, index) => (
            <CardGames key={game.title + index} post={game} />
          ))}
        {isLoading &&
          Array.from({ length: 10 }, (_, index) => index).map((index) => (
            <SkeletonPost key={index} />
          ))}
      </CarouselPosts>
    </>
  );
}

export default GameList;
