"use client";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CardBasic from "./CardBasic";
import FinancialCard from "./CardFinancial";
import LinksCard from "./CardLinks";
import CommentCard from "./CardComment";
import { FormProvider } from "react-hook-form";
import useCreatePost from "@/hooks/useCreatePost";
import TabsTriggers from "./TabsTriggers";
import { useSearchParams } from "next/navigation";

function TabsCreatPost() {
  const { onSubmit, methods } = useCreatePost();
  const searchParams = useSearchParams();
  const activatedTab =
    (searchParams.get("activatedTab") as
      | "basic"
      | "financial"
      | "links"
      | "comment") || "basic";

  return (
    <FormProvider {...methods}>
      <Tabs value={activatedTab} className="w-[95%] max-w-[400px]">
        <TabsTriggers methods={methods} />

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
