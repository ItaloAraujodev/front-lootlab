"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
import type { FormData } from "../schemas";
import { Button } from "@/components/ui/button";
import { PlusIcon, X } from "lucide-react";
import { Form } from "@/components/Form";

function FieldListLinks() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  return (
    <div className="space-y-2 px-4">
      <div className="flex justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          className="border-lootlab-font-highlight bg-inherit scrollbar-thin scrollbar-track-lootlab-color-highlight hover:bg-[#111f33] hover:text-lootlab-font-base"
          onClick={() => append({ url: "" })}
        >
          Add Link
          <PlusIcon className="stroke-[4px] text-lootlab-font-base" />
        </Button>
      </div>
      <div className="flex flex-col justify-between gap-2">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="flex w-full items-start justify-between gap-2"
          >
            <Form.Label htmlFor={field.id}>
              <Form.Input.FormInputGeneric
                id={field.id}
                register={register(`links.${index}.url`)}
                error={errors?.links?.[index]?.url?.message}
              />
              <Form.ErrorMessage error={errors?.links?.[index]?.url?.message} />
            </Form.Label>
            <Button
              type="button"
              variant="outline"
              className="border-lootlab-font-highlight bg-inherit hover:bg-[#1e365a]"
              onClick={() => remove(index)}
            >
              <X className="stroke-[4px] text-lootlab-font-base" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FieldListLinks;
