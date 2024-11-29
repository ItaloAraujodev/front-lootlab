"use client";
import { CardContent } from "@/components/ui/card";
import type { IInfosCard } from "@/interfaces/interfaces";
import type { FormData } from "../schemas";
import { useFormContext } from "react-hook-form";
import { Form } from "@/components/Form";
import FieldListFeatures from "./FieldListFeatures";
import AccordionManager from "../AccordionManager";
import { AccordionTrigger } from "@/components/ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";

const basicInfos: IInfosCard<FormData>[] = [
  { title: "Nome do Jogo", pathRegister: "title" },
  { title: "Nota", pathRegister: "score", type: "number" },
  { title: "Investimento", pathRegister: "investment" },
  { title: "Rede", pathRegister: "network" },
];
function BasicContent() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <CardContent className="space-y-2">
      <AccordionManager>
        <AccordionTrigger className="px-4">Features</AccordionTrigger>
        <AccordionContent className="pb-3">
          <FieldListFeatures />
        </AccordionContent>
      </AccordionManager>
      {basicInfos.map(({ pathRegister, title, type }) => (
        <Form.Label title={title} htmlFor={title} key={title}>
          <Form.Input.FormInputGeneric
            type={type ?? "text"}
            id={title}
            register={register(pathRegister)}
            error={errors?.[pathRegister]?.message}
          />
          <Form.ErrorMessage error={errors?.[pathRegister]?.message} />
        </Form.Label>
      ))}
    </CardContent>
  );
}

export default BasicContent;
