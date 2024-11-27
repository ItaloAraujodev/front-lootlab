"use client";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LayoutCard from "../CardLayout";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { linksFormSchema, type FormData } from "../schemas";
import LinkManager from "../CardLinks/LinkManager";

function LinksCard() {
  const methods = useForm<FormData>({
    resolver: zodResolver(linksFormSchema),
  });

  const onSubmit = () => {};
  return (
    <LayoutCard>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Links e Parcerias</CardTitle>
        <CardDescription className="text-base text-[#8d8d8d]">
          Links importantes e parcerias do jogo.
        </CardDescription>
      </CardHeader>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CardContent className="space-y-2">
            <LinkManager type="links" title="Links" />
            <LinkManager type="partnerships" title="Parcerias" />
          </CardContent>
          <CardFooter className="flex w-full justify-between">
            <Button
              variant="link"
              className="text-lootlab-font-base hover:bg-slate-700 hover:no-underline"
            >
              <ArrowLeft />
              Anterior
            </Button>
            <Button
              type="submit"
              variant="link"
              className="text-lootlab-font-base hover:bg-slate-700 hover:no-underline"
            >
              Próximo
              <ArrowRight />
            </Button>
          </CardFooter>
        </form>
      </FormProvider>
    </LayoutCard>
  );
}

export default LinksCard;
