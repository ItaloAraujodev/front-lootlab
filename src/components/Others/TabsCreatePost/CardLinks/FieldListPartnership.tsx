"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
import type { FormData } from "../schemas";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Form } from "@/components/Form";
import { Common } from "@/components/Common";
import FieldListHeader from "./FieldListHeader";

function FieldListPartnership() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "partnerships",
  });

  return (
    <div className="space-y-2 px-4">
      <FieldListHeader onClick={() => append({ link: "" })} />
      <div className="flex flex-col justify-between gap-2">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="flex w-full items-start justify-between gap-2"
          >
            <div className="flex w-full flex-col gap-2">
              <Common.Input
                registerPath="partnerships"
                index={index}
                error={errors.partnerships?.[index]?.link?.message}
              />
              <Form.ErrorMessage
                error={errors.partnerships?.[index]?.link?.message}
              />
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

export default FieldListPartnership;
