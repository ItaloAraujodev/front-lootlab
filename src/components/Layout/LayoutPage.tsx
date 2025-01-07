import classNames from "classnames";
import { LayoutFooter } from "./LayoutFooter";

interface IPageProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function LayoutPage({ children, className }: IPageProps) {
  return (
    <div
      className={classNames(
        className,
        "flex min-h-screen w-full flex-col items-center gap-16 self-center px-0 font-segoe",
      )}
    >
      {children}
      <LayoutFooter />
    </div>
  );
}
