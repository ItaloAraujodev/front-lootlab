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
import LinkManager from "./LinkManager";
import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import FieldListLinks from "./FieldListLinks";
import FieldListPartnership from "./FieldListPartnership";
import MarketCapAddresForm from "./MarketCapAddressForm";
import { Form } from "@/components/Form";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas";

function LinksCard() {
  const {
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <LayoutCard>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Links e Parcerias</CardTitle>
        <CardDescription className="text-base text-[#8d8d8d]">
          Links importantes e parcerias do jogo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form.Field>
          <LinkManager error={errors?.links?.message}>
            <AccordionTrigger className="px-4">Links</AccordionTrigger>
            <AccordionContent>
              <FieldListLinks />
            </AccordionContent>
          </LinkManager>
          <Form.ErrorMessage error={errors?.links?.message} />
        </Form.Field>
        <Form.Field>
          <LinkManager error={errors?.partnership?.message}>
            <AccordionTrigger className="px-4">Parcerias</AccordionTrigger>
            <AccordionContent>
              <FieldListPartnership />
            </AccordionContent>
          </LinkManager>
          <Form.ErrorMessage error={errors?.partnership?.message} />
        </Form.Field>
        <Form.Field>
          <LinkManager error={errors?.marketLink?.message}>
            <AccordionTrigger className="px-4">
              MarketCap Adress
            </AccordionTrigger>
            <AccordionContent>
              <MarketCapAddresForm />
            </AccordionContent>
          </LinkManager>
          <Form.ErrorMessage error={errors?.marketLink?.message} />
        </Form.Field>
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

export default LinksCard;
