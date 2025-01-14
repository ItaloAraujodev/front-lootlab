import type { IPost } from "@/interfaces/interfaces";
import type { TFilters } from "@/interfaces/types";
import { create } from "zustand";

interface IPostStore {
  setPost: (post: IPost) => void;
  setSearch: (search: string) => void;
  setFilter: (filter: TFilters) => void;
  post: IPost | undefined;
  filter: TFilters;
  search: string;
}

const usePostStore = create<IPostStore>((set) => ({
  post: undefined,
  setPost: (post: IPost) => set({ post }),

  filter: "all",
  setFilter: (filter) => set({ filter }),

  search: "",
  setSearch: (search) => set({ search }),
}));

export default usePostStore;
