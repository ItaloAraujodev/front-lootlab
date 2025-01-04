"use client";
import { useQuery } from "@tanstack/react-query";
import AnalysisAndNews from "./AnalysisAndNews";
import GameHeader from "./GameHeader";
import LinksAndResources from "./LinksAndResources";
import MarketInfoGrid from "./MarketInfoGrid";
import ProjectFeaturies from "./ProjectFeaturies";
import PostService from "@/services/post.service";
import { useParams, useRouter } from "next/navigation";
import usePostStore from "@/stores/post.store";
import Toast from "@/tools/toast.tool";
import Link from "next/link";
import type React from "react";

export default function InfoDetails() {
  const params = useParams();
  const router = useRouter();
  const { setPost } = usePostStore();
  const slug = params.postSlug;

  if (!slug) {
    Toast.error("Slug é necessário");
    router.push("/");
    return;
  }

  const { data: PostData, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const post = await PostService.getPostBySlug(slug as string);
      setPost(post);
      return post;
    },
    enabled: !!slug,
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
  });

  console.log(PostData);

  if (!isLoading && PostData === undefined) {
    return (
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="mb-4 text-3xl font-bold">Oops! Post não encontrado</h1>
        <p className="mb-6 text-lg text-gray-400">
          Parece que o post que você está procurando não existe mais.
        </p>

        <Link
          href="/"
          className="rounded-lg bg-lootlab-color-highlight px-6 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-lootlab-hover-highlight"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-4 max-w-6xl space-y-8 text-lootlab-font-base">
      <GameHeader />
      <AnalysisAndNews />
      <LinksAndResources />
      <MarketInfoGrid />
      <ProjectFeaturies />
    </div>
  );
}
