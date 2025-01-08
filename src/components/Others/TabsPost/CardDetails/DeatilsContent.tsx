"use client";
import { Form } from "@/components/Form";
import { CardContent } from "@/components/ui/card";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas";
import AccordionManager from "../AccordionManager";
import { AccordionContent } from "@/components/ui/accordion";
import type { IInfosCard } from "@/interfaces/interfaces";
import FieldListFeatures from "./FieldListFeatures";

const detailsInfos: IInfosCard<FormData>[] = [
  { title: "Nota", pathRegister: "score", type: "number" },
  { title: "Investimento", pathRegister: "investment" },
  { title: "Rede", pathRegister: "network" },
  { title: "Token", pathRegister: "token" },
];

function DeatilsContent() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <CardContent className="space-y-2">
      <Form.Label>
        <AccordionManager
          titleTrigger="Features"
          error={errors.projectFeatures?.message}
        >
          <AccordionContent className="pb-3">
            <FieldListFeatures />
          </AccordionContent>
        </AccordionManager>
        <Form.ErrorMessage error={errors.projectFeatures?.message} />
      </Form.Label>
      {detailsInfos.map(({ pathRegister, title, type }) => (
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

export default DeatilsContent;
