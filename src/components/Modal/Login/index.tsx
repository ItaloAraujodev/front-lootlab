"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Toast from "@/tools/toast.tool";

export function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function handleLogin() {
    if (!email || !password) {
      Toast.error("Preencha todos os campos!", 2000);
      return;
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!result?.ok) {
        Toast.error("Erro ao fazer login!", 2000);
      } else {
        Toast.success("Login efetuado com sucesso!", 2000);
      }
    } catch (err) {
      console.error(err);
      Toast.error("Erro ao fazer login!", 2000);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#283563] font-bold text-white transition-all hover:bg-[#283563]/60">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="border-none bg-lootlab-bg-main sm:max-w-[425px]">
        <DialogHeader className="">
          <DialogTitle className="text-3xl text-white">Login</DialogTitle>
          <DialogDescription className="text-white/60">
            Digite os seus dados de acesso no campo abaixo.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 text-white">
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="name" className="text-right text-base">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              className="h-11 placeholder:text-white/60"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="username" className="text-right text-base">
              Senha
            </Label>
            <Input
              type="password"
              id="password"
              className="h-11 placeholder:text-white/60"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full bg-[#283563] hover:bg-[#283563]/60"
            onClick={handleLogin}
          >
            Acessar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
