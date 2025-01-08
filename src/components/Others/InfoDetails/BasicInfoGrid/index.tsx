"use client";

import BasicInfo from "../BasicInfo";
import usePostStore from "@/stores/post.store";

export default function BasicInfoGrid() {
  const { post } = usePostStore();
  return (
    <div className="space-y-6 md:col-span-1">
      <BasicInfo info={post?.author.name || ""} title="ANALISTA" />
      <div className="grid grid-cols-2 gap-4">
        <BasicInfo title="NOTA" info={String(post?.score) || ""} />
        <BasicInfo title="REDE" info={post?.network || ""} />
        <BasicInfo title="INVESTIMENTO" info={post?.investment || ""} />
        {post?.category === "NFT Jogos" && (
          <BasicInfo title="TOKEN" info={post?.token || ""} />
        )}
      </div>
    </div>
  );
}
