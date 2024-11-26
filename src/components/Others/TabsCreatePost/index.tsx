import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicCard from "./BasicCard";

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
    <Tabs defaultValue="basic" className="w-[90%] max-w-[400px]">
      <TabsList className="grid w-full grid-cols-4 bg-[#172944]">
        {tabsTriggers.map(({ text, value }) => (
          <TabsTrigger
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
        <Card className="border-[1px] border-chart-3 border-lootlab-font-highlight bg-lootlab-bg-main text-lootlab-font-base">
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default TabsCreatPost;
