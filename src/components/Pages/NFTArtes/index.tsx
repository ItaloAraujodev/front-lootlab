"use client";
import GameList from "@/components/Others/SectionGames/GameList";
import PostService from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";

export function NFTArtesComponent() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["getPosts", { category: "NFT Artes" }],
    queryFn: async () => await PostService.getPosts("NFT Artes"),
  });

  return (
    <div className="w-full space-y-4">
      <div className="flex items-end gap-4">
        <h1 className="font-segoe text-3xl font-medium text-white">
          NFT Artes
        </h1>
        <span className="text-white/60">
          {posts?.length ?? 0}{" "}
          {(posts?.length ?? 0) > 1 ? "Resultados" : "Resultado"}
        </span>
      </div>
      <div className="flex w-full items-start">
        <GameList posts={posts || []} isLoading={isLoading} />
      </div>
    </div>
  );
}
