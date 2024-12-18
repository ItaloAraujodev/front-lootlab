// import Link from "next/link";

interface IProps {
  href: string;
  children: React.ReactNode;
}
function NavLink({ children }: IProps) {
  return (
    <div className="cursor-pointer select-none rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white">
      {children}
    </div>
  );
}

export default NavLink;
