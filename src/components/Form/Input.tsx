"use client";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import type { FormData } from "../Others/TabsCreatePost/schemas";
import { Form } from ".";
import { Input as InputUi } from "../ui/input";
import type { TPathKeys } from "@/interfaces/types";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  path: TPathKeys<FormData>;
  error?: string;
}

export default function Input({
  className,
  name,
  error,
  path,
  ...props
}: InputProps) {
  const { register } = useFormContext<FormData>();
  console.log(path);

  return (
    <Form.Field>
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
      <Form.ErrorMessage error={error} />
    </Form.Field>
  );
}
