"use client";
import { Form } from "@/components/Form";
import { CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas";
import FieldListGenres from "./FieldListGenres";
import AccordionManager from "../AccordionManager";
import { AccordionContent } from "@/components/ui/accordion";
import CategoryRadio from "./CategoryRadio";

function DeatilsContent() {
  const {
    register,
    formState: { errors },
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
      <Form.Label>
        <CategoryRadio />
        <Form.ErrorMessage error={errors.category?.message} />
      </Form.Label>
    </CardContent>
  );
}

export default DeatilsContent;
