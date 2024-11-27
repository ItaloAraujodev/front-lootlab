"use client";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";

import { Input as InputUi } from "@/components/ui/input";
import type { FormData } from "../Others/TabsCreatePost/schemas";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  registerPath: "links" | "partnerships";
  index?: number;
  error?: string;
}

export default function Input({
  className,
  name,
  error,
  registerPath,
  index,
  ...props
}: InputProps) {
  const { register } = useFormContext<FormData>();

  const path =
    index !== undefined
      ? (`${registerPath}.${index}.link` as const)
      : registerPath;

  return (
    <InputUi
      id={name}
      {...props}
      className={classNames(
        className,
        "h-9 w-full rounded-md border-[1px] border-lootlab-font-highlight px-3 py-1 text-base md:text-sm",
        {
          "border-red-500": error,
        },
      )}
      {...register(path)}
    />
  );
}
