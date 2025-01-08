"use client";
import { CardContent } from "@/components/ui/card";
import type { IInfosCard } from "@/interfaces/interfaces";
import type { FormData } from "../schemas";
import { useFormContext } from "react-hook-form";
import { Form } from "@/components/Form";
import { Textarea } from "@/components/ui/textarea";
import classNames from "classnames";
import AccordionManager from "../AccordionManager";
import { AccordionContent } from "@/components/ui/accordion";
import FieldListGenres from "./FieldListGenres";
import FinancialDateLaunch from "./FinancialDateLaunch";
import CategoryRadio from "./CategoryRadio";

const basicInfos: IInfosCard<FormData>[] = [
  { title: "Nome do Jogo", pathRegister: "title" },
];

function BasicContent() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormData>();
  return (
    <CardContent className="space-y-2">
      <Form.Label>
        <AccordionManager
          titleTrigger="Gêneros"
          error={errors?.genres?.message}
        >
          <AccordionContent>
            <FieldListGenres />
          </AccordionContent>
        </AccordionManager>
        <Form.ErrorMessage error={errors?.genres?.message} />
      </Form.Label>
      <FinancialDateLaunch />
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
      <Form.Label htmlFor="comment" title="Comentário">
        <Textarea
          className={classNames("min-h-24", {
            "border-red-500": errors.comment_author?.message,
          })}
          id="comment"
          {...register("comment_author")}
        />
        <Form.ErrorMessage error={errors.comment_author?.message} />
      </Form.Label>
      <CategoryRadio />
    </CardContent>
  );
}

export default BasicContent;
