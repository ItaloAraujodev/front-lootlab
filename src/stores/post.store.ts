import type { IPost } from "@/interfaces/interfaces";
import { create } from "zustand";

interface IPostStore {
  setPost: (post: IPost) => void;
  post: IPost | undefined;
}

const usePostStore = create<IPostStore>((set) => ({
  post: undefined,
  setPost: (post: IPost) => set({ post }),
}));

export default usePostStore;
