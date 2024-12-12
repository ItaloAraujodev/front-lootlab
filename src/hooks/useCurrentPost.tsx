import type { IPost } from "@/interfaces/interfaces";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";

function useCurrentPost() {
  const queryClient = useQueryClient();
  const params = useParams();
  const post: IPost | undefined = queryClient.getQueryData([
    "post",
    params.postId,
  ]);
  return { post };
}

export default useCurrentPost;
