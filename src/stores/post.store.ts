import type { IPost } from "@/interfaces/interfaces";
import { create } from "zustand";

interface IPostStore {
  setPost: (post: IPost) => void;
  setPostToUpdate: (postToUpdate: IPost) => void;
  post: IPost | undefined;
  postToUpdate: IPost | undefined;
}

const usePostStore = create<IPostStore>((set) => ({
  post: undefined,
  setPost: (post: IPost) => set({ post }),
  postToUpdate: undefined,
  setPostToUpdate: (postToUpdate: IPost) => set({ postToUpdate }),
}));

export default usePostStore;
