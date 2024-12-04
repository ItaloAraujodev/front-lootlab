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
import useLogin from "@/hooks/useLogin/useLogin";

export function Login() {
  const {
    mutation: { mutate, status },
    register,
    handleSubmit,
  } = useLogin();
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
        <form
          onSubmit={handleSubmit((data) => mutate(data))}
          className="space-y-4"
        >
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
                {...register("email")}
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
                {...register("password")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              disabled={status === "pending"}
              type="submit"
              className="w-full bg-[#283563] hover:bg-[#283563]/60"
            >
              {status === "pending" ? (
                <span className="h-4 w-4 animate-spin rounded-full border-4 border-lootlab-color-highlight border-b-transparent" />
              ) : (
                "Acessar"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
