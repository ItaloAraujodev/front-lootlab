"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
import type { FormData } from "../../schemas";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import AddGenreSelect from "./AddGenreSelect";

function FieldListGenres() {
  const { control } = useFormContext<FormData>();
  const fieldArray = useFieldArray({
    control,
    name: "genres",
  });

  return (
    <div className="space-y-2 px-4 pb-4">
      <div className="flex justify-between gap-2">
        <AddGenreSelect append={fieldArray.append} fields={fieldArray.fields} />
      </div>
      <div className="mb-2 flex w-80 flex-wrap gap-2">
        {fieldArray.fields.map((field, index) => (
          <div
            key={field.id}
            className="flex items-start justify-between gap-2"
          >
            <div className="flex h-fit w-fit items-center gap-2 rounded-full border-[1px] border-lootlab-font-highlight px-4">
              {field.name}
              <Button
                type="button"
                variant="default"
                className="group h-fit border-none bg-inherit p-0 py-[6px] hover:bg-none"
                onClick={() => fieldArray.remove(index)}
              >
                <X className="stroke-[3px] text-sm text-lootlab-font-base group-hover:stroke-red-500 group-hover:stroke-[4px]" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FieldListGenres;
