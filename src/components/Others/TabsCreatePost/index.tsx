"use client";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CardBasic from "./CardBasic";
import FinancialCard from "./CardFinancial";
import LinksCard from "./CardLinks";
import CommentCard from "./CardComment";
import { FormProvider } from "react-hook-form";
import TabsTriggers from "./TabsTriggers";
import { useSearchParams } from "next/navigation";
import useCreatePost from "@/hooks/useCreatePost";

function TabsCreatePost() {
  const { methods, onSubmit, status } = useCreatePost();
  const searchParams = useSearchParams();

  // Define a aba inicial com base nos parâmetros de busca ou padrão
  const activatedTab =
    (searchParams.get("activatedTab") as
      | "basic"
      | "financial"
      | "links"
      | "comment") || "basic";

  return (
    <FormProvider {...methods}>
      <Tabs value={activatedTab} className="w-[95%] max-w-[400px]">
        <TabsTriggers />

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
            <CommentCard status={status === "pending"} />
          </TabsContent>
        </form>
      </Tabs>
    </FormProvider>
  );
}

export default TabsCreatePost;
