import type { IPost } from "@/interfaces/interfaces";
import usePostStore from "@/stores/post.store";

function useFilterPosts(posts?: IPost[]) {
  const { search, filter } = usePostStore();
  const filteredPosts = posts?.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase()),
  );
  console.log(search, filter);

  const sortedPostByFilter = {
    recent: () =>
      filteredPosts?.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    oldest: () =>
      filteredPosts?.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      ),
    order: () => filteredPosts?.sort((a, b) => a.title.localeCompare(b.title)),
    all: () => filteredPosts,
  };

  return sortedPostByFilter[filter]();
}

export default useFilterPosts;
