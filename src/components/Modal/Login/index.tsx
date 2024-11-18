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

export function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function handleLogin() {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(result);
      if (!result?.ok) {
        console.error("Falha ao fazer login");
      } else {
        window.location.href = "/";
        console.error("Login feito com sucesso!");
      }
    } catch (err) {
      console.error(err);
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
