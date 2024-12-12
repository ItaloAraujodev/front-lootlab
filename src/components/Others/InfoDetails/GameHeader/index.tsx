"use client";
import Image from "next/image";
import imagemPlaceholder from "@/images/imagem-placeholder.webp";
import useCurrentPost from "@/hooks/useCurrentPost";
import Commentary from "../Commentary";

export default function GameHeader() {
  const { post } = useCurrentPost();

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="relative flex h-[23rem] w-full items-center md:col-span-1 md:h-full md:max-w-[23rem]">
        <Image
          alt="Imagem do jogo"
          fill
          key={post?.Image[0].url}
          className="h-full w-full rounded-lg object-cover object-center"
          src={post ? post.Image[0].url : imagemPlaceholder}
        />
      </div>
      <Commentary />
    </div>
  );
}
