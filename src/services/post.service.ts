import type { IDataCreatePost, IPost } from "@/interfaces/interfaces";
import { Api } from "@/providers/Api";

export default class PostService {
  public static async getPosts() {
    try {
      const response = await Api.get<IPost[]>(`/post`);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error("Erro ao buscar os posts.");
    }
  }

  public static async getPostBySlug(slug: string) {
    try {
      const response = await Api.get<IPost>(`/post/slug/${slug}`);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error("Erro ao buscar o post.");
    }
  }

  public static async createPost({
    data,
    authorizationToken,
    authorId,
  }: IDataCreatePost) {
    try {
      const formData = new FormData();
      formData.append("file", data.file);

      formData.append(
        "postData",
        JSON.stringify({
          ...JSON.parse(data.postData),
          authorId,
        }),
      );

      const response = await Api.post(`/post`, formData, {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      return response;
    } catch (error) {
      console.log("Erro ao enviar o post:", error);
      throw new Error(
        "Ocorreu um erro ao tentar publicar o post. Tente novamente.",
      );
    }
  }
}
