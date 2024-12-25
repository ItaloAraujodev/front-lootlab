"use client";

import TabsPost from "../TabsPost";
import useCreatePost from "@/hooks/useCreatePost";
import type { FormData } from "../TabsPost/schemas";

function TabsCreatePost() {
  const { onSubmit, status, methods } = useCreatePost();

  return (
    <TabsPost<FormData>
      action="Publicar"
      methods={methods}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default TabsCreatePost;
