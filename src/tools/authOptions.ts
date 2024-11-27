import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import UserService from "@/services/user.service";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
    };
    accessToken: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Credenciais inválidas.");
        }

        try {
          // Faz a requisição para a rota de login do backend
          const response = await UserService.login(
            credentials.email,
            credentials.password,
          );
          console.log(response);
          const { token, user } = response.data;

          // Inclui o token como parte do retorno
          return {
            ...user,
            token,
          };
        } catch (error: any) {
          throw new Error(
            error.response?.data?.error ||
              "Erro ao autenticar. Tente novamente.",
          );
        }
      },
    }),
  ],

  pages: {
    signIn: "/", // Página de login personalizada
    error: "/error",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = (user as any).token; // Certifique-se de que este é o campo correto
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
      };
      session.accessToken = token.accessToken as string; // Adicione o token na sessão
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60, //
  },
};
