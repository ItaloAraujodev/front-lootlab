"use client";

import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { IPostCategories } from "@/interfaces/interfaces";
const postCategories: IPostCategories[] = [
  { category: "NFT Jogos" },
  { category: "NFT Artes" },
];

function CategoryRadio() {
  const { control } = useFormContext<FormData>();
  return (
    <FormField
      control={control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-normal">Category</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue="NFT Jogos"
              className="flex items-center gap-4"
            >
              {postCategories.map(({ category }) => (
                <FormItem key={category}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      className="h-4 w-4 rounded-full border-inherit"
                      value={category}
                      id={category}
                    />
                    <label
                      htmlFor={category}
                      className="text-base text-lootlab-font-base"
                    >
                      {category}
                    </label>
                  </div>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    ></FormField>
  );
}

export default CategoryRadio;
