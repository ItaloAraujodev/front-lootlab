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
  const slug = params.postSlug;
  useQuery({
    queryKey: ["post", slug],
    queryFn: () => (slug ? PostService.getPostBySlug(slug as string) : {}),
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
