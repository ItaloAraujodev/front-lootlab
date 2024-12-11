import { LayoutPage } from "@/components/Layout";
import TabsCreatPost from "@/components/Others/TabsCreatePost";
import { Suspense } from "react";

export default function CreatePost() {
  return (
    <LayoutPage className="px-[5%] pt-10">
      <Suspense>
        <TabsCreatPost />
      </Suspense>
    </LayoutPage>
  );
}
