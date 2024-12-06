"use client";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CardBasic from "./CardBasic";
import FinancialCard from "./CardFinancial";
import LinksCard from "./CardLinks";
import CommentCard from "./CardComment";
import { FormProvider, useForm } from "react-hook-form";
import TabsTriggers from "./TabsTriggers";
import { useSearchParams } from "next/navigation";
import PostService from "@/services/post.service";
import { useState } from "react";
import { useSession } from "next-auth/react";

function TabsCreatePost() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const [file, setFile] = useState<any>();

  // Define a aba inicial com base nos parâmetros de busca ou padrão
  const activatedTab =
    (searchParams.get("activatedTab") as
      | "basic"
      | "financial"
      | "links"
      | "comment") || "basic";

  // Configuração do react-hook-form
  const methods = useForm({
    defaultValues: {
      basic: {},
      financial: {},
      links: [],
      comment: "",
    },
  });

  // Lida com envio do formulário
  const handleSubmit = async (data: any, event: React.FormEvent) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("postData", JSON.stringify(data));
      console.log("AQUII", data);

      if (file) {
        formData.append("file", file);
      }

      const response = await PostService.createPost({
        data: {
          postData: JSON.stringify(data),
          file,
        },
        authorizationToken: session?.accessToken!,
        authorId: session?.user.id!,
      });

      console.log("Post criado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao criar o post:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <Tabs value={activatedTab} className="w-[95%] max-w-[400px]">
        <TabsTriggers methods={methods} />

        <form
          onSubmit={methods.handleSubmit((data, event) =>
            handleSubmit(data, event as React.FormEvent),
          )}
        >
          <TabsContent value="basic">
            <CardBasic setFile={setFile} />
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

export default TabsCreatePost;
