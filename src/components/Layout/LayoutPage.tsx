import classNames from "classnames";

interface IPageProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function LayoutPage({ children, className }: IPageProps) {
  return (
    <div
      className={classNames(
        className,
        "flex min-h-screen w-full flex-col items-center gap-16 self-center px-0 pb-10 font-segoe",
      )}
    >
      {children}
    </div>
  );
}
