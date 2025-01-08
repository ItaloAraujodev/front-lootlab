"use client";
import { LayoutPage } from "@/components/Layout";
import CardGames from "@/components/Others/CardGames";
import SkeletonPost from "@/components/Skeletons/SkeletonPost";
import PostService from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";

export default function NftJogos() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["getPosts", { category: "NFT Jogos" }],
    queryFn: async () => await PostService.getPosts("NFT Jogos"),
  });

  return (
    <LayoutPage className="pt-10">
      <Suspense>
        <div className="flex h-full flex-wrap items-center justify-center gap-4">
          {!isLoading &&
            posts?.map((post) => <CardGames key={post.title} post={post} />)}
          {isLoading &&
            Array.from({ length: 20 }, (_, index) => index + 1).map((key) => (
              <SkeletonPost key={key} />
            ))}
        </div>
      </Suspense>
    </LayoutPage>
  );
}
