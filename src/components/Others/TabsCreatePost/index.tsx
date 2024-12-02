"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardBasic from "./CardBasic";
import FinancialCard from "./CardFinancial";
import LinksCard from "./CardLinks";
import CommentCard from "./CardComment";
import { FormProvider } from "react-hook-form";
import useCreatePost from "@/hooks/useCreatePost";
import { useRouter, useSearchParams } from "next/navigation";
import URLQuery from "@/tools/urlQuery";

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
  const { onSubmit, methods } = useCreatePost();
  const searchParams = useSearchParams();
  const router = useRouter();
  const activatedTab =
    (searchParams.get("activatedTab") as
      | "basic"
      | "financial"
      | "links"
      | "comment") || "basic";

  return (
    <FormProvider {...methods}>
      <Tabs value={activatedTab} className="w-[95%] max-w-[400px]">
        <TabsList className="grid w-full grid-cols-4 bg-[#172944]">
          {tabsTriggers.map(({ text, value }) => (
            <TabsTrigger
              onClick={() =>
                router.push(URLQuery.addQuery([{ key: "activatedTab", value }]))
              }
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
