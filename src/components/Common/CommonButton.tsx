interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function CommonButton({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-sm bg-[#283563] font-bold text-white transition-all hover:bg-[#283563]/60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
