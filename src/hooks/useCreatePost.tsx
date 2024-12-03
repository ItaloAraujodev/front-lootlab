"use client";

import { queryClient } from "@/lib/react-query";
import PostService from "@/services/post.service";
import Toast from "@/tools/toast.tool";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormSchema,
  type FormData,
} from "@/components/Others/TabsCreatePost/schemas";

function useCreatePost() {
  const { data: session } = useSession();
  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const { mutateAsync: createPostFn } = useMutation({
    mutationFn: PostService.createPost,
    onSuccess(_, variables) {
      queryClient.setQueryData(["posts"], (data: Array<keyof FormData>) => [
        variables.data,
        ...data,
      ]);
    },
  });

  const onSubmit = (data: FormData) => {
    try {
      if (!session?.accessToken && !session?.user.id) {
        Toast.error("Você precisa estar logado para publicar um post.");
        return;
      }
      createPostFn({
        data: { ...data },
        authorId: session?.user.id,
        authorizationToken: session?.accessToken,
      });
      Toast.success("Post criado com sucesso", 4000);
      methods.reset();
    } catch (error) {
      console.error(error);
      Toast.error("Erro ao publicar o post.", 4000);
    }
  };
  return { onSubmit, methods };
}

export default useCreatePost;
