"use client";

import PostService from "@/services/post.service";
import Toast from "@/tools/toast.tool";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormSchema,
  type FormData,
} from "@/components/Others/TabsCreatePost/schemas";
import type { IGame } from "@/interfaces/interfaces";

function useCreatePost() {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const { mutateAsync: createPostFn, status } = useMutation({
    mutationFn: PostService.createPost,
    onSuccess(data, variables) {
      if (data?.status === 201) {
        Toast.success("Post criado com sucesso", 2000);
        methods.reset();
      }

      // seta o novo post no cache para nao precisar buscar novamente no banco
      queryClient.setQueryData(["getPosts"], (oldData: IGame[]) => {
        const newPost = {
          ...JSON.parse(variables.data.postData),
          Image: [{ url: URL.createObjectURL(variables.data.file) }],
        };
        return [newPost, ...(oldData || [])];
      });
    },
    onError(error) {
      console.log("Erro ao publicar o post.", error);
      Toast.error("Erro ao publicar o post.", 2000);
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!session?.accessToken && !session?.user.id) {
      Toast.error("Você precisa estar logado para publicar um post.");
      return;
    }

    // Remove file de data antes para enviar separadamente para a API.
    const { file, ...postData } = data;

    await createPostFn({
      data: {
        postData: JSON.stringify(postData),
        file: file[0],
      },
      authorId: session?.user.id,
      authorizationToken: session?.accessToken,
    });
  };
  return { onSubmit, methods, status };
}

export default useCreatePost;
