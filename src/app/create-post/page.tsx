import { LayoutPage } from "@/components/Layout";
import TabsCreatePost from "@/components/Others/TabsCreatePost";
import { Suspense } from "react";

export default function CreatePost() {
  return (
    <LayoutPage className="pt-10">
      <Suspense>
        <TabsCreatePost />
      </Suspense>
    </LayoutPage>
  );
}
