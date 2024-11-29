"use client";
import FormField from "@/components/Form/Field";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import LayoutCard from "../CardLayout";
import { Form } from "@/components/Form";
import { TFormData } from "../schemas";
import type { IFieldInfos } from "@/interfaces/interfaces";
import { useFormContext } from "react-hook-form";

const basicInfos: IFieldInfos<TFormData>[] = [
  { title: "Nome do Jogo", path: "title" },
  { title: "Nota", path: "score" },
  { title: "Rede", path: "network" },
];

function BasicCard() {
  const {
    formState: { errors },
    register,
  } = useFormContext<TFormData>();
  return (
    <LayoutCard>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          Informações Básicas
        </CardTitle>
        <CardDescription className="text-base text-[#8d8d8d]">
          Detalhes essenciais sobre o jogo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {basicInfos.map(({ title, path }) => {
          return (
            <FormField key={title}>
              <Label htmlFor={title}>{title}</Label>
              <Form.Input
                register={register(path)}
                error={errors?.[path]?.message}
              />
            </FormField>
          );
        })}
      </CardContent>
      <CardFooter className="flex w-full justify-end">
        <Button
          variant="link"
          className="text-lootlab-font-base hover:bg-slate-700 hover:no-underline"
        >
          Próximo
          <ArrowRight />
        </Button>
      </CardFooter>
    </LayoutCard>
  );
}

export default BasicCard;
