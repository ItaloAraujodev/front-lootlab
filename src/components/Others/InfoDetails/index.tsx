"use client";
import { useQuery } from "@tanstack/react-query";
import AnalysisAndNews from "./AnalysisAndNews";
import GameHeader from "./GameHeader";
import LinksAndResources from "./LinksAndResources";
import MarketInfoGrid from "./MarketInfoGrid";
import ProjectFeaturies from "./ProjectFeaturies";
import PostService from "@/services/post.service";
import { useParams } from "next/navigation";
import usePostStore from "@/stores/post.store";

export default function InfoDetails() {
  const params = useParams();
  const { setPost } = usePostStore();
  const slug = params.postSlug;
  useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      if (!slug) return;
      const post = await PostService.getPostBySlug(slug as string);
      setPost(post);
      return post;
    },
  });

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
