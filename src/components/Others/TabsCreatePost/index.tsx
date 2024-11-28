"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardBasic from "./CardBasic";
import FinancialCard from "./CardFinancial";
import LinksCard from "./CardLinks";
import CommentCard from "./CardComment";
import { FormProvider, useForm } from "react-hook-form";
import { FormSchema, type FormData } from "./schemas";

import { zodResolver } from "@hookform/resolvers/zod";

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
  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });
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
      </Tabs>
    </FormProvider>
  );
}

export default TabsCreatPost;
