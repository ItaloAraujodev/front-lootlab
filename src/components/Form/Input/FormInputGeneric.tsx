"use client";
import classNames from "classnames";
import { Input as InputUi } from "../../ui/input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  register: any;
  error?: string;
}

export default function FormInputInputGeneric({
  className,
  name,
  error,
  register,
  ...props
}: InputProps) {
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
      {...register}
    />
  );
}
