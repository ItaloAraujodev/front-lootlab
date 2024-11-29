import type { LabelHTMLAttributes } from "react";

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  title?: string;
}
export default function Label({ children, title, ...props }: ILabelProps) {
  return (
    <label className="flex w-full flex-col space-y-2" {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </label>
  );
}
