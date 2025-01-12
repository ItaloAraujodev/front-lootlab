"use client";
import PostService from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";

function useGetNFTPosts(queryKey: "getPostsGames" | "getPostsArtes") {
  const { data: posts, isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      await PostService.getPosts(
        queryKey === "getPostsArtes" ? "NFT Artes" : "NFT Jogos",
      ),
  });
  return { posts, isLoading };
}

export default useGetNFTPosts;
