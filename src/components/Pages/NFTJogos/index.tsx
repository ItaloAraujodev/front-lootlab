"use client";
import NFTHeaderFilter from "@/components/Others/NFTHeaderFilter";
import NFTPostList from "@/components/Others/NFTPostList";
import PostService from "@/services/post.service";
import { IoGameControllerOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import useFilterPosts from "@/hooks/useFilterPosts";

export function NFTJogosComponent() {
  const { data: postsGames, isLoading } = useQuery({
    queryKey: ["getPostsGames"],
    queryFn: async () => await PostService.getPosts("NFT Jogos"),
  });

  const filteredPosts = useFilterPosts(postsGames);

  return (
    <div className="flex h-full w-full flex-col items-start gap-4 px-[5%]">
      <NFTHeaderFilter
        iconTitle={<IoGameControllerOutline />}
        title="NFT Jogos"
      />
      <NFTPostList isLoading={isLoading} posts={filteredPosts} />
    </div>
  );
}
