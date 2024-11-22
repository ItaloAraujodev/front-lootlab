import Link from "next/link";

interface IProps {
  href: string;
  children: React.ReactNode;
}
function NavLink({ href, children }: IProps) {
  return (
    <Link
      href={href}
      className="cursor-pointer rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
    >
      {children}
    </Link>
  );
}

export default NavLink;
