import type { IDataCreatePost } from "@/interfaces/interfaces";
import { Api } from "@/providers/Api";

export default class PostService {
  public static async getPosts() {
    try {
      const response = await Api.get(`/post`);
      return response;
    } catch (error) {
      throw new Error("Erro ao busgar os posts.");
    }
  }

  public static async createPost({
    data,
    authorizationToken,
    authorId,
  }: IDataCreatePost) {
    try {
      const response = await Api.post(
        `/post`,
        {
          ...data,
          authorId,
        },
        {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        },
      );
      return response;
    } catch (error) {
      throw new Error(
        "Ocorreu um erro ao tentar publicar o post. Tente novamente.",
      );
    }
  }
}
