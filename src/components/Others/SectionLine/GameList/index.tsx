"use client";
import { Common } from "@/components/Common";
import CardGames from "../../CardGames";
import CarouselPosts from "../../Carousels/Carousel";
import SkeletonPost from "@/components/Skeletons/SkeletonPost";
import type { IPost } from "@/interfaces/interfaces";
import { Gamepad2 } from "lucide-react";

interface IProps {
  posts: IPost[];
  isLoading: boolean;
}

function GameList({ posts, isLoading }: IProps) {
  if (!posts?.length && !isLoading) {
    return (
      <>
        <Common.CommonTitleSection>
          <Gamepad2 /> Explorador de Jogos
        </Common.CommonTitleSection>
        <div className="relative mx-auto flex h-48 w-full items-center justify-center">
          <h1 className="text-3xl font-thin text-lootlab-font-highlight">
            Nenhum jogo encontrado.
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
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
