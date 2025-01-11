import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}
function CardInfo({ title, children }: IProps) {
  return (
    <div className="rounded-lg border border-[#1c2f4a] bg-[#132238] p-6">
      <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-white/70">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export default CardInfo;
