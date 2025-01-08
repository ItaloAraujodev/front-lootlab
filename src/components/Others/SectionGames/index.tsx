"use client";
import PostService from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import { IoGameControllerOutline } from "react-icons/io5";
import SectionLine from "../SectionLine";

export default function SectionGames() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["getPosts", { category: "NFT Jogos" }],
    queryFn: async () => await PostService.getPosts("NFT Jogos"),
  });

  return (
    <SectionLine
      href="nft-jogos"
      iconTitle={<IoGameControllerOutline />}
      isLoading={isLoading}
      posts={posts}
      title="NFT Jogos"
    />
  );
}
