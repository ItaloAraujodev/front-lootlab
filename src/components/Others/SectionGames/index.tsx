
"use client";
import { Gamepad2 } from "lucide-react";
import GameList from "./GameList";
import PostService from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import Link from "next/link";

export default function SectionGames() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["getPosts", { category: "NFT Jogos" }],
    queryFn: async () => await PostService.getPosts("NFT Jogos"),
  });

  const { data: posts_artes, isLoading: isLoadingArtes } = useQuery({
    queryKey: ["getPosts", { category: "NFT Artes" }],
    queryFn: async () => await PostService.getPosts("NFT Artes"),
  });

  return (
    <div className="flex w-full flex-col gap-6 px-[5%]">
      <PopularGenres />
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-4 text-white">
            <h1 className="flex items-center gap-2 text-2xl font-bold text-lootlab-font-base">
              <Gamepad2 /> NFT Jogos
            </h1>
            <span className="text-white/60">
              {posts?.length ?? 0}{" "}
              {(posts?.length ?? 0) > 1 ? "Resultados" : "Resultado"}
            </span>
          </div>
          <Link
            href="/nft-jogos"
            className="text-white/60 transition-all hover:text-white"
          >
            Ver mais
          </Link>
        </div>

        <GameList posts={posts || []} isLoading={isLoading} />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-4 text-white">
            <h1 className="flex items-center gap-2 text-2xl font-bold text-lootlab-font-base">
              <HiOutlinePaintBrush /> NFT Artes
            </h1>
            <span className="text-white/60">
              {posts_artes?.length ?? 0}{" "}
              {(posts_artes?.length ?? 0) > 1 ? "Resultados" : "Resultado"}
            </span>
          </div>
          <Link
            href="/nft-artes"
            className="text-white/60 transition-all hover:text-white"
          >
            Ver mais
          </Link>
        </div>
        <GameList posts={posts_artes || []} isLoading={isLoadingArtes} />
      </div>
    </div>
  );
}
