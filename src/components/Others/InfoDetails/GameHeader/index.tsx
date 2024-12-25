"use client";
import Image from "next/image";
import imagemPlaceholder from "@/images/imagem-placeholder.webp";
import Commentary from "../Commentary";
import usePostStore from "@/stores/post.store";
import { Button } from "@/components/ui/button";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function GameHeader() {
  const { post, setPostToUpdate } = usePostStore();
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="relative grid gap-6 md:grid-cols-3">
      {session?.accessToken && session.user.id === post?.authorId && post && (
        <Button
          onClick={() => {
            if (post) {
              console.log("asqui");
              setPostToUpdate(post);
              router.push(`/update-post/${post.slug}?activatedTab=basic`);
            }
          }}
          variant="ghost"
          className="absolute -top-11 right-0 w-full bg-lootlab-color-highlight p-2 text-black hover:bg-lootlab-hover-highlight md:w-fit"
        >
          <span>Editar Post</span>
          <FaEdit />
        </Button>
      )}
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
