"use client";
import useCurrentPost from "@/hooks/useCurrentPost";
import BasicInfo from "../BasicInfo";

export default function BasicInfoGrid() {
  const { post } = useCurrentPost();
  return (
    <div className="space-y-6 md:col-span-1">
      <BasicInfo info={post?.author.name || ""} title="ANALISTA" />
      <div className="grid grid-cols-2 gap-4">
        <BasicInfo title="NOTA" info={String(post?.score) || ""} />
        <BasicInfo title="REDE" info={post?.network || ""} />
        <BasicInfo title="INVESTIMENTO" info={post?.investment || ""} />
        <BasicInfo title="TOKEN" info={post?.token || ""} />
      </div>
    </div>
  );
}
