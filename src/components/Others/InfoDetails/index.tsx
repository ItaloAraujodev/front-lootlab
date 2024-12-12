"use client";
import { useQuery } from "@tanstack/react-query";
import AnalysisAndCommentary from "./AnalysisAndCommentary";
import GameHeader from "./GameHeader";
import LinksAndResources from "./LinksAndResources";
import MarketInfoGrid from "./MarketInfoGrid";
import ProjectFeaturies from "./ProjectFeaturies";
import PostService from "@/services/post.service";
import { useParams } from "next/navigation";

export default function InfoDetails() {
  const params = useParams();
  const id = params.postId;
  const { data: post, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: () => (id ? PostService.getPost(id as string) : {}),
  });
  console.log(post);

  return (
    <div className="mx-auto max-w-6xl space-y-8 text-lootlab-font-base">
      <GameHeader />
      <AnalysisAndCommentary />
      <LinksAndResources />
      <MarketInfoGrid />
      <ProjectFeaturies />
    </div>
  );
}
