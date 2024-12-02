import { LayoutPage } from "@/components/Layout";
import TabsCreatPost from "@/components/Others/TabsCreatePost";
import { Suspense } from "react";

export default function CreatePost() {
  return (
    <LayoutPage>
      <Suspense>
        <TabsCreatPost />
      </Suspense>
    </LayoutPage>
  );
}
