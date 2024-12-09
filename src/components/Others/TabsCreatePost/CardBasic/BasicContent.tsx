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
import classNames from "classnames";

const basicInfos: IInfosCard<FormData>[] = [
  { title: "Nome do Jogo", pathRegister: "title" },
  { title: "Nota", pathRegister: "score", type: "number" },
  { title: "Investimento", pathRegister: "investment" },
  { title: "Rede", pathRegister: "network" },
  { title: "Token", pathRegister: "token" },
];

function BasicContent() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormData>();
  console.log(watch("file"));
  return (
    <CardContent className="space-y-2">
      <Form.Label>
        <AccordionManager>
          <AccordionTrigger
            className={classNames("px-4", {
              "border-red-500": errors.projectFeatures?.root?.message,
            })}
          >
            Features
          </AccordionTrigger>
          <AccordionContent className="pb-3">
            <FieldListFeatures />
          </AccordionContent>
        </AccordionManager>
        <Form.ErrorMessage error={errors.projectFeatures?.root?.message} />
      </Form.Label>
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

      <Form.Label title="Imagem" htmlFor="file">
        <Form.Input.FormInputImage
          register={register("file")}
          id="file"
          error={errors?.file?.message}
          imageName={
            (watch("file") && watch("file").length && watch("file")[0].name) ||
            ""
          }
        />
        <Form.ErrorMessage error={errors?.file?.message} />
      </Form.Label>
    </CardContent>
  );
}

export default BasicContent;
