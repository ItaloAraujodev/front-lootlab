import type { IPost } from "@/interfaces/interfaces";
import type { filters } from "@/interfaces/types";
import { create } from "zustand";

interface IPostStore {
  setPost: (post: IPost) => void;
  setSearch: (search: string) => void;
  setFilter: (filter: filters) => void;
  post: IPost | undefined;
  filter: filters;
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
