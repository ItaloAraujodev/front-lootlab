"use client";
import NFTHeaderFilter from "@/components/Others/NFTHeaderFilter";
import NFTPostList from "@/components/Others/NFTPostList";
import PostService from "@/services/post.service";
import { IoGameControllerOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import usePostStore from "@/stores/post.store";
import { isToday } from "date-fns";

export function NFTArtesComponent() {
  const { search, filter } = usePostStore();
  const { data: postsArtes, isLoading } = useQuery({
    queryKey: ["getPostsArtes", { category: "NFT Artes" }],
    queryFn: async () => await PostService.getPosts("NFT Artes"),
  });

  const filteredPosts = postsArtes?.filter(({ title, createdAt }) => {
    const searchFilter = title.toLowerCase().includes(search.toLowerCase());
    const filterOptions = {
      recent: isToday(createdAt),
      oldest: !isToday(createdAt),
      order: true,
      all: true,
    };

    return searchFilter && filterOptions[filter];
  });

  const filterByOrder = () =>
    filteredPosts?.sort((a, b) => a.title.localeCompare(b.title)) || [];

  const filterPostsByOrder =
    filter === "order" ? filterByOrder() : filteredPosts;

  return (
    <div className="flex h-full w-full flex-col items-start gap-4 px-[5%]">
      <NFTHeaderFilter
        iconTitle={<IoGameControllerOutline />}
        title="NFT Artes"
      />
      <NFTPostList
        isLoading={isLoading}
        posts={filterPostsByOrder || postsArtes}
      />
    </div>
  );
}
