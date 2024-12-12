"use client";
import Image from "next/image";
import Link from "next/link";
import imagemPlaceholder from "@/images/imagem-placeholder.webp";
import useCurrentPost from "@/hooks/useCurrentPost";

export default function GameHeader() {
  const { post } = useCurrentPost();

  return (
    <div className="grid items-center md:grid-cols-2">
      <div className="relative flex aspect-square max-h-96 max-w-96 items-center">
        <Image
          alt="Imagem do jogo"
          fill
          key={post?.Image[0].url}
          className="h-full w-full rounded-lg object-cover object-center"
          src={post ? post.Image[0].url : imagemPlaceholder}
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-lootlab-font-base md:text-4xl">
          {post?.title}
        </h1>
        <Link
          href={post?.market_link || "/"}
          className="break-all text-lootlab-font-highlight hover:text-[#ffffff]"
        >
          {post?.market_link}
        </Link>
      </div>
    </div>
  );
}
