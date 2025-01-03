"use client";
import Image from "next/image";
import imagemPlaceholder from "@/images/imagem-placeholder.webp";
import Commentary from "../Commentary";
import usePostStore from "@/stores/post.store";
import { Button } from "@/components/ui/button";
import { FaEdit } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ModalDeletePost from "@/components/Modal/DeletePost";

export default function GameHeader() {
  const params = useParams();
  const slug = params.postSlug;
  const { post } = usePostStore();
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="relative grid gap-6 md:grid-cols-3">
      {session?.accessToken && session.user.id === post?.authorId && post && (
        <div className="absolute -top-11 right-0 flex gap-2">
          <Button
            onClick={() => {
              router.push(`/update-post/${slug}?activatedTab=basic`);
            }}
            variant="ghost"
            className="w-full bg-lootlab-color-highlight p-2 text-black hover:bg-lootlab-hover-highlight md:w-fit"
          >
            <span>Editar Post</span>
            <FaEdit />
          </Button>
          <ModalDeletePost />
        </div>
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
