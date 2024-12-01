"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardBasic from "./CardBasic";
import FinancialCard from "./CardFinancial";
import LinksCard from "./CardLinks";
import CommentCard from "./CardComment";
import { FormProvider, useForm } from "react-hook-form";
import { FormSchema, type FormData } from "./schemas";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import PostService from "@/services/post.service";
import Toast from "@/tools/toast.tool";
import { queryClient } from "@/lib/react-query";

const tabsTriggers = [
  {
    value: "basic",
    text: "Básico",
  },
  {
    value: "financial",
    text: "Financeiro",
  },
  {
    value: "links",
    text: "Links",
  },
  {
    value: "comment",
    text: "Comentário",
  },
];

function TabsCreatPost() {
  const { data: session } = useSession();
  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const { mutateAsync: createPostFn } = useMutation({
    mutationFn: PostService.createPost,
    onSuccess(_, variables) {
      queryClient.setQueryData([], (data: Array<keyof FormData>) => [
        variables.data,
        ...data,
      ]);
    },
  });

  const onSubmit = (data: FormData) => {
    try {
      if (session?.accessToken && session.user.id) {
        createPostFn({
          data: { ...data },
          authorId: session?.user.id,
          token: session?.accessToken,
        });
        methods.reset();
        return;
      }
      Toast.error("Você precisa estar logado para publicar um post.");
    } catch (error) {
      console.error(error);
      Toast.error("Erro ao publicar o post.");
    }
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <Tabs defaultValue="basic" className="w-[95%] max-w-[400px]">
        <TabsList className="grid w-full grid-cols-4 bg-[#172944]">
          {tabsTriggers.map(({ text, value }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="bg-[#172944] data-[state=active]:bg-lootlab-color-highlight"
            >
              {text}
            </TabsTrigger>
          ))}
        </TabsList>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TabsContent value="basic">
            <CardBasic />
          </TabsContent>
          <TabsContent value="financial">
            <FinancialCard />
          </TabsContent>
          <TabsContent value="links">
            <LinksCard />
          </TabsContent>
          <TabsContent value="comment">
            <CommentCard />
          </TabsContent>
        </form>
      </Tabs>
    </FormProvider>
  );
}

export default TabsCreatPost;
