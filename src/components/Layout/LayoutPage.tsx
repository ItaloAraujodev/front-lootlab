type IPageProps = React.HTMLAttributes<HTMLDivElement>;
export default function LayoutPage({ children }: IPageProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-16 self-center px-[5%] pb-10 pt-10">
      {children}
    </div>
  );
}
