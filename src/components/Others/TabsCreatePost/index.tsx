import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicCard from "./BasicCard";
import FinancialCard from "./FinancialCard";
import LinksCard from "./LinksCard";
import CommentCard from "./CommentCard";

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
  return (
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
        <BasicCard />
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
  );
}

export default TabsCreatPost;
