"use client";

import { FormLoginSchema, type FormLoginData } from "@/hooks/useLogin/schema";
import Toast from "@/tools/toast.tool";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import URLQuery from "@/tools/urlQuery";
import { useRouter } from "next/navigation";

function useLogin() {
  const form = useForm<FormLoginData>({
    resolver: zodResolver(FormLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: FormLoginData) => {
      return signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
    },
    onSuccess(data) {
      if (data?.status !== 401) {
        Toast.success("Login efetuado com sucesso!", 2000);
        setTimeout(
          () =>
            router.push(
              URLQuery.addQuery([{ key: "openModalLogin", value: false }]),
            ),
          500,
        );
      }
    },
    onError(error) {
      console.error(error);
      Toast.error("Erro ao fazer login!", 2000);
    },
  });

  return { mutation, form };
}

export default useLogin;
