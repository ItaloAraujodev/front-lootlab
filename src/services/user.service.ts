import { Api } from "@/providers/Api";

export default class UserService {
  public static async login(email: string, password: string) {
    const response = await Api.post(`/user/login`, {
      email,
      password,
    });
    console.log(response);
    return response;
  }
}
