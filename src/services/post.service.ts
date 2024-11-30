import type { IDataCreatePost } from "@/interfaces/interfaces";
import { Api } from "@/providers/Api";

export default class PostService {
  public static async getPosts() {
    const response = await Api.get(`/post`);
    return response;
  }

  public static async createPost({ data, token, authorId }: IDataCreatePost) {
    const response = await Api.post(`/post`, {
      ...data,
      token,
      authorId,
    });
    return response;
  }
}
