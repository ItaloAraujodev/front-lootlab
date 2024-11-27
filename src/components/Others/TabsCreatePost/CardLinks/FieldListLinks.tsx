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
          onClick={() => append({ link: "" })}
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
            <div className="flex w-full flex-col gap-2">
              <Form.Input
                registerPath="links"
                index={index}
                error={errors.links?.[index]?.link?.message}
              />
              <Form.ErrorMessage error={errors.links?.[index]?.link?.message} />
            </div>
            <Button
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
