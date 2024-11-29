"use client";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import type { FormData } from "../schemas";
import { Button } from "@/components/ui/button";
import { PlusIcon, X } from "lucide-react";
import { Form } from "@/components/Form";
import { Checkbox } from "@/components/ui/checkbox";
import classNames from "classnames";

function FieldListFeatures() {
  const {
    control,
    formState: { errors },
    register,
    watch,
  } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "projectFeatures",
  });

  console.log(watch("projectFeatures"));

  return (
    <div className="space-y-3 px-4">
      <div className="flex justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          className="border-lootlab-font-highlight bg-inherit scrollbar-thin scrollbar-track-lootlab-color-highlight hover:bg-[#111f33] hover:text-lootlab-font-base"
          onClick={() => append({ isFeature: true, title: "" })}
        >
          Add Feature
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
              <div className="flex h-full items-center gap-1">
                <Controller
                  control={control}
                  name={`projectFeatures.${index}.isFeature`}
                  render={({ field: checkBoxField }) => (
                    <Checkbox
                      className={classNames(
                        "h-9 w-9 rounded-lg border-inherit",
                        {
                          "border-red-500":
                            errors.projectFeatures?.[index]?.title?.message,
                        },
                      )}
                      id={field.id}
                      onCheckedChange={(checked) =>
                        checkBoxField.onChange(checked)
                      }
                      checked={checkBoxField.value}
                    />
                  )}
                />
                <Form.Input.FormInputGeneric
                  id={field.id}
                  register={register(`projectFeatures.${index}.title`)}
                  error={errors.projectFeatures?.[index]?.title?.message}
                />
              </div>
              <Form.ErrorMessage
                error={errors.projectFeatures?.[index]?.title?.message}
              />
            </Form.Label>
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

export default FieldListFeatures;
