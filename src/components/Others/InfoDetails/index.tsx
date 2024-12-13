"use client";
import { useQuery } from "@tanstack/react-query";
import AnalysisAndNews from "./AnalysisAndNews";
import GameHeader from "./GameHeader";
import LinksAndResources from "./LinksAndResources";
import MarketInfoGrid from "./MarketInfoGrid";
import ProjectFeaturies from "./ProjectFeaturies";
import PostService from "@/services/post.service";
import { useParams } from "next/navigation";

export default function InfoDetails() {
  const params = useParams();
  const id = params.postId;
  useQuery({
    queryKey: ["post", id],
    queryFn: () => (id ? PostService.getPost(id as string) : {}),
  });

  return (
    <div className="mx-auto max-w-6xl space-y-8 text-lootlab-font-base">
      <GameHeader />
      <AnalysisAndNews />
      <LinksAndResources />
      <MarketInfoGrid />
      <ProjectFeaturies />
    </div>
  );
}
